import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postApiDeletePicRoute,
  postApiInfoRoute,
  postApiSearchRoute,
  postApiUploadPicRoute,
} from './routes'
import {
  postApiDeletePicRouteHandler,
  postApiInfoRouteHandler,
  postApiSearchRouteHandler,
  postApiUploadPicRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postApiDeletePicRoute, postApiDeletePicRouteHandler)
  .openapi(postApiInfoRoute, postApiInfoRouteHandler)
  .openapi(postApiSearchRoute, postApiSearchRouteHandler)
  .openapi(postApiUploadPicRoute, postApiUploadPicRouteHandler)

export default app
