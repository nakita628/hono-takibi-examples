import { OpenAPIHono } from '@hono/zod-openapi'
import { postYourPullURIRequestAPIPathRoute } from '../routes'

const app = new OpenAPIHono()

export const yourPullUriRequestApiPathHandler = app.openapi(
  postYourPullURIRequestAPIPathRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
