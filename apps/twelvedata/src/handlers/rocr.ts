import { OpenAPIHono } from '@hono/zod-openapi'
import { getRocrRoute } from '../routes'

const app = new OpenAPIHono()

export const rocrHandler = app.openapi(getRocrRoute, (c) => {
  throw new Error('Not implemented')
})
