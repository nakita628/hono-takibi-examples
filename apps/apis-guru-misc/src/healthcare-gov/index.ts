import { OpenAPIHono } from '@hono/zod-openapi'
import {
  apiHandler,
  blogHandler,
  esHandler,
  glossaryHandler,
  pageNamemediaTypeExtensionHandler,
  questionHandler,
  stateNamemediaTypeExtensionHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', apiHandler)
  .route('/', blogHandler)
  .route('/', esHandler)
  .route('/', glossaryHandler)
  .route('/', questionHandler)
  .route('/', pageNamemediaTypeExtensionHandler)
  .route('/', stateNamemediaTypeExtensionHandler)

export default app
