import { OpenAPIHono } from '@hono/zod-openapi'
import { getSharedItemsRoute } from '../routes'

const app = new OpenAPIHono()

export const sharedItemsHandler = app.openapi(getSharedItemsRoute, (c) => {
  throw new Error('Not implemented')
})
