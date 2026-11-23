import { OpenAPIHono } from '@hono/zod-openapi'
import { getFaxesRoute } from '../routes'

const app = new OpenAPIHono()

export const faxesHandler = app.openapi(getFaxesRoute, (c) => {
  throw new Error('Not implemented')
})
