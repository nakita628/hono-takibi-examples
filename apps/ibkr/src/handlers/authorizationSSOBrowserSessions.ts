import { OpenAPIHono } from '@hono/zod-openapi'
import { postGwApiV1SsoBrowserSessionsRoute } from '../routes'

const app = new OpenAPIHono()

export const authorizationSSOBrowserSessionsHandler = app.openapi(
  postGwApiV1SsoBrowserSessionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
