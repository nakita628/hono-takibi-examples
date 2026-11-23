import { OpenAPIHono } from '@hono/zod-openapi'
import {
  allowlistsHandler,
  exportsHandler,
  inboundHandler,
  ipsHandler,
  mctemplatesHandler,
  messagesHandler,
  metadataHandler,
  rejectsHandler,
  sendersHandler,
  subaccountsHandler,
  tagsHandler,
  templatesHandler,
  urlsHandler,
  usersHandler,
  webhooksHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', allowlistsHandler)
  .route('/', exportsHandler)
  .route('/', ipsHandler)
  .route('/', inboundHandler)
  .route('/', mctemplatesHandler)
  .route('/', messagesHandler)
  .route('/', metadataHandler)
  .route('/', rejectsHandler)
  .route('/', sendersHandler)
  .route('/', subaccountsHandler)
  .route('/', tagsHandler)
  .route('/', templatesHandler)
  .route('/', urlsHandler)
  .route('/', usersHandler)
  .route('/', webhooksHandler)

export default app
