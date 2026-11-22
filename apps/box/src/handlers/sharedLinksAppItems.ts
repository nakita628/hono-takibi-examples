import { OpenAPIHono } from '@hono/zod-openapi'
import { getSharedItemsAppItemsRoute } from '../routes'

const app = new OpenAPIHono()

export const sharedLinksAppItemsHandler = app.openapi(getSharedItemsAppItemsRoute, (c) => {
  throw new Error('Not implemented')
})
