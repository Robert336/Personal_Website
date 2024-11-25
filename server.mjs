import express from 'express';
import handlebars from 'handlebars';
import { readFile, readdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import routes from './routes/index.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

const viewsDir = path.join(__dirname, 'views');
const layoutsDir = path.join(viewsDir, 'layouts');
const partialsDir = path.join(viewsDir, 'partials');

// Register partials
readdir(partialsDir).then(files => {
  files.forEach(file => {
    const partialPath = path.join(partialsDir, file);
    const partialName = path.parse(file).name;
    readFile(partialPath, 'utf8').then(content => {
      handlebars.registerPartial(partialName, content);
    }).catch(err => {
      console.error(`Error reading partial ${file}:`, err);
    });
  });
}).catch(err => {
  console.error('Error reading partials directory:', err);
});


app.engine('handlebars', async (filePath, options, callback) => {
  try {
    const content = await readFile(filePath);
    const template = handlebars.compile(content.toString());

    const layoutName = options.layout || 'whiteboard';
    const layoutPath = path.join(layoutsDir, `${layoutName}.handlebars`);
    
    let layoutContent;
    layoutContent = await readFile(layoutPath, 'utf8');

    // Compile the layout
    const layout = handlebars.compile(layoutContent);

    // Render the template into the layout
    const renderedTemplate = template(options);
    const layoutOptions = Object.assign({}, options, { body: renderedTemplate });

    // Render the layout with the template's content as the body
    const result = layout(layoutOptions);
    callback(null, result);

  } catch (err) {
    callback(new Error(err));
  }
});

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});