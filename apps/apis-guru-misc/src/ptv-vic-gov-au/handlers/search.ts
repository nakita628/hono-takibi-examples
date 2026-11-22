import { OpenAPIHono } from '@hono/zod-openapi'
import { getV3SearchSearchTermRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(getV3SearchSearchTermRoute, (c) => {
  throw new Error('Not implemented')
})
