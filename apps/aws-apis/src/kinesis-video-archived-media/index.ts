import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postGetClipRoute,
  postGetDASHStreamingSessionURLRoute,
  postGetHLSStreamingSessionURLRoute,
  postGetImagesRoute,
  postGetMediaForFragmentListRoute,
  postListFragmentsRoute,
} from './routes'
import {
  postGetClipRouteHandler,
  postGetDASHStreamingSessionURLRouteHandler,
  postGetHLSStreamingSessionURLRouteHandler,
  postGetImagesRouteHandler,
  postGetMediaForFragmentListRouteHandler,
  postListFragmentsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postGetClipRoute, postGetClipRouteHandler)
  .openapi(postGetDASHStreamingSessionURLRoute, postGetDASHStreamingSessionURLRouteHandler)
  .openapi(postGetHLSStreamingSessionURLRoute, postGetHLSStreamingSessionURLRouteHandler)
  .openapi(postGetImagesRoute, postGetImagesRouteHandler)
  .openapi(postGetMediaForFragmentListRoute, postGetMediaForFragmentListRouteHandler)
  .openapi(postListFragmentsRoute, postListFragmentsRouteHandler)

export default app
