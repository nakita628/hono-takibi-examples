import { OpenAPIHono } from '@hono/zod-openapi'
import { getAreacodesRoute } from '../routes'

const app = new OpenAPIHono()

export const areacodesHandler = app.openapi(getAreacodesRoute, (c) => {
  throw new Error('Not implemented')
})
