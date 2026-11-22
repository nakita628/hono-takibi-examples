import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletedShareapiHandler,
  publicPreviewHandler,
  remoteHandler,
  shareapiHandler,
  shareesapiHandler,
  shareInfoHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', publicPreviewHandler)
  .route('/', shareInfoHandler)
  .route('/', shareapiHandler)
  .route('/', deletedShareapiHandler)
  .route('/', shareesapiHandler)
  .route('/', remoteHandler)

export default app
