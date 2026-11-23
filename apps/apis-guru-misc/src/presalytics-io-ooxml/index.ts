import { OpenAPIHono } from '@hono/zod-openapi'
import {
  chartsHandler,
  connectionShapesHandler,
  documentsHandler,
  groupsHandler,
  imagesHandler,
  shapesHandler,
  shapeTreesHandler,
  sharedHandler,
  slidesHandler,
  smartArtsHandler,
  tablesHandler,
  themesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', chartsHandler)
  .route('/', connectionShapesHandler)
  .route('/', documentsHandler)
  .route('/', groupsHandler)
  .route('/', imagesHandler)
  .route('/', shapeTreesHandler)
  .route('/', shapesHandler)
  .route('/', sharedHandler)
  .route('/', slidesHandler)
  .route('/', smartArtsHandler)
  .route('/', tablesHandler)
  .route('/', themesHandler)

export default app
