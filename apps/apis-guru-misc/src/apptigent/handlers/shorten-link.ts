import { OpenAPIHono } from '@hono/zod-openapi'
import { postShortenLinkRoute } from '../routes'

const app = new OpenAPIHono()

export const shortenLinkHandler = app.openapi(postShortenLinkRoute, (c) => {
  throw new Error('Not implemented')
})
