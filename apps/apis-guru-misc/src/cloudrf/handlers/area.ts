import { OpenAPIHono } from '@hono/zod-openapi'
import { postAreaRoute } from '../routes'

const app = new OpenAPIHono()

export const areaHandler = app.openapi(postAreaRoute, (c) => {
  throw new Error('Not implemented')
})
