import { OpenAPIHono } from '@hono/zod-openapi'
import { putCircularRoute } from '../routes'

const app = new OpenAPIHono()

export const circularHandler = app.openapi(putCircularRoute, (c) => {
  throw new Error('Not implemented')
})
