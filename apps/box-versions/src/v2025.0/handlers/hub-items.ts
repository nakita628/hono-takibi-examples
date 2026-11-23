import { OpenAPIHono } from '@hono/zod-openapi'
import { getHubItemsRoute } from '../routes'

const app = new OpenAPIHono()

export const hubItemsHandler = app.openapi(getHubItemsRoute, (c) => {
  throw new Error('Not implemented')
})
