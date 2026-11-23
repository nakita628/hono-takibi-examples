import { OpenAPIHono } from '@hono/zod-openapi'
import { getPercentBRoute } from '../routes'

const app = new OpenAPIHono()

export const percentBHandler = app.openapi(getPercentBRoute, (c) => {
  throw new Error('Not implemented')
})
