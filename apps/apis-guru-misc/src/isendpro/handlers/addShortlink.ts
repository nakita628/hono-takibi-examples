import { OpenAPIHono } from '@hono/zod-openapi'
import { postShortlinkRoute } from '../routes'

const app = new OpenAPIHono()

export const addShortlinkHandler = app.openapi(postShortlinkRoute, (c) => {
  throw new Error('Not implemented')
})
