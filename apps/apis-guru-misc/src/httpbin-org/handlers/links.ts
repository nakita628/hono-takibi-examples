import { OpenAPIHono } from '@hono/zod-openapi'
import { getLinksNOffsetRoute } from '../routes'

const app = new OpenAPIHono()

export const linksHandler = app.openapi(getLinksNOffsetRoute, (c) => {
  throw new Error('Not implemented')
})
