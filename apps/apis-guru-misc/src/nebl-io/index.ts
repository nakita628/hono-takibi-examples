import { OpenAPIHono } from '@hono/zod-openapi'
import { __rootHandler, insHandler, ntp1Handler, testnetHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', __rootHandler)
  .route('/', insHandler)
  .route('/', ntp1Handler)
  .route('/', testnetHandler)

export default app
