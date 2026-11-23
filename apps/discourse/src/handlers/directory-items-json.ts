import { OpenAPIHono } from '@hono/zod-openapi'
import { getDirectoryItemsJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const directoryItemsJsonHandler = app.openapi(getDirectoryItemsJsonRoute, (c) => {
  throw new Error('Not implemented')
})
