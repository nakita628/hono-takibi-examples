import { OpenAPIHono } from '@hono/zod-openapi'
import { postYourPullDOCRequestAPIPathRoute, postYourPullURIRequestAPIPathRoute } from './routes'
import {
  postYourPullDOCRequestAPIPathRouteHandler,
  postYourPullURIRequestAPIPathRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postYourPullDOCRequestAPIPathRoute, postYourPullDOCRequestAPIPathRouteHandler)
  .openapi(postYourPullURIRequestAPIPathRoute, postYourPullURIRequestAPIPathRouteHandler)

export default app
