import { OpenAPIHono } from '@hono/zod-openapi'
import {
  anythingHandler,
  authHandler,
  cookiesHandler,
  dynamicDataHandler,
  httpMethodsHandler,
  imagesHandler,
  redirectsHandler,
  requestInspectionHandler,
  responseFormatsHandler,
  responseInspectionHandler,
  statusCodesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', redirectsHandler)
  .route('/', anythingHandler)
  .route('/', dynamicDataHandler)
  .route('/', authHandler)
  .route('/', responseFormatsHandler)
  .route('/', responseInspectionHandler)
  .route('/', cookiesHandler)
  .route('/', httpMethodsHandler)
  .route('/', requestInspectionHandler)
  .route('/', imagesHandler)
  .route('/', statusCodesHandler)

export default app
