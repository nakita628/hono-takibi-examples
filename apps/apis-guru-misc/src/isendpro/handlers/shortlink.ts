import { OpenAPIHono } from '@hono/zod-openapi'
import { postShortlinkRoute } from '../routes'

const app = new OpenAPIHono()

export const shortlinkHandler = app.openapi(postShortlinkRoute, (c) => {
  throw new Error('Not implemented')
})
