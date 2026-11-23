import { OpenAPIHono } from '@hono/zod-openapi'
import { getSharedItemsWebLinksRoute } from '../routes'

const app = new OpenAPIHono()

export const sharedItemsWebLinksHandler = app.openapi(getSharedItemsWebLinksRoute, (c) => {
  throw new Error('Not implemented')
})
