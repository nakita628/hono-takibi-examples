import { OpenAPIHono } from '@hono/zod-openapi'
import { getParseQueryRoute, postParseQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const parseQueryHandler = app
  .openapi(getParseQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postParseQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
