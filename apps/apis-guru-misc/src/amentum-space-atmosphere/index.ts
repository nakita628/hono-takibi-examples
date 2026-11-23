import { OpenAPIHono } from '@hono/zod-openapi'
import { jb2008Handler, nrlmsise00Handler, wamIpeHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', jb2008Handler)
  .route('/', nrlmsise00Handler)
  .route('/', wamIpeHandler)

export default app
