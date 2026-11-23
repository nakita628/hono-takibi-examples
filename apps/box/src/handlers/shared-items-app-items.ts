import { OpenAPIHono } from '@hono/zod-openapi'
import { getSharedItemsAppItemsRoute } from '../routes'

const app = new OpenAPIHono()

export const sharedItemsAppItemsHandler = app.openapi(getSharedItemsAppItemsRoute, (c) => {
  throw new Error('Not implemented')
})
