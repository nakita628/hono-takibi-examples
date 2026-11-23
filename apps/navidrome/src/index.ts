import { OpenAPIHono } from '@hono/zod-openapi'
import { openapiJsonHandler, openapiYamlHandler, serverHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', serverHandler)
  .route('/', openapiJsonHandler)
  .route('/', openapiYamlHandler)

export default app
