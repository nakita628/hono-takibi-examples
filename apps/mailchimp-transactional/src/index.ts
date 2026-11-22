import { OpenAPIHono } from '@hono/zod-openapi'
import {
  allowlistHandler,
  exportsHandler,
  inboundHandler,
  iPsHandler,
  mcTemplatesHandler,
  messagesHandler,
  metadataHandler,
  rejectsHandler,
  sendersHandler,
  subaccountsHandler,
  tagsHandler,
  templatesHandler,
  urLsHandler,
  usersHandler,
  webhooksHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', allowlistHandler)
  .route('/', exportsHandler)
  .route('/', iPsHandler)
  .route('/', inboundHandler)
  .route('/', mcTemplatesHandler)
  .route('/', messagesHandler)
  .route('/', metadataHandler)
  .route('/', rejectsHandler)
  .route('/', sendersHandler)
  .route('/', subaccountsHandler)
  .route('/', tagsHandler)
  .route('/', templatesHandler)
  .route('/', urLsHandler)
  .route('/', usersHandler)
  .route('/', webhooksHandler)

export default app
