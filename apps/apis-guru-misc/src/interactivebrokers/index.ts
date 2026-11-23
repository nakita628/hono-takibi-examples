import { OpenAPIHono } from '@hono/zod-openapi'
import { accountsHandler, marketdataHandler, oauthHandler, secdefHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountsHandler)
  .route('/', marketdataHandler)
  .route('/', oauthHandler)
  .route('/', secdefHandler)

export default app
