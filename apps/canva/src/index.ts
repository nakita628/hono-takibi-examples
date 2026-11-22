import { OpenAPIHono } from '@hono/zod-openapi'
import {
  analyticsHandler,
  appHandler,
  assetHandler,
  autofillHandler,
  brandTemplateHandler,
  commentHandler,
  connectHandler,
  designGenerationHandler,
  designHandler,
  designImportHandler,
  exportHandler,
  folderHandler,
  imageGenerationHandler,
  imageTransformationHandler,
  mergeHandler,
  oauthHandler,
  oidcHandler,
  resizeHandler,
  userHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', analyticsHandler)
  .route('/', appHandler)
  .route('/', assetHandler)
  .route('/', autofillHandler)
  .route('/', brandTemplateHandler)
  .route('/', commentHandler)
  .route('/', connectHandler)
  .route('/', designHandler)
  .route('/', designGenerationHandler)
  .route('/', designImportHandler)
  .route('/', exportHandler)
  .route('/', folderHandler)
  .route('/', imageGenerationHandler)
  .route('/', imageTransformationHandler)
  .route('/', mergeHandler)
  .route('/', oauthHandler)
  .route('/', oidcHandler)
  .route('/', resizeHandler)
  .route('/', userHandler)

export default app
