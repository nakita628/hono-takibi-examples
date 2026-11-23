import { OpenAPIHono } from '@hono/zod-openapi'
import { getWimStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const wimHandler = app.openapi(getWimStatusRoute, (c) => {
  throw new Error('Not implemented')
})
