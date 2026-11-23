import { OpenAPIHono } from '@hono/zod-openapi'
import { getMapRoute } from '../routes'

const app = new OpenAPIHono()

export const mapHandler = app.openapi(getMapRoute, (c) => {
  throw new Error('Not implemented')
})
