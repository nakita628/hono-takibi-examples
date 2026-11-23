import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postProjectIdClassifyIterationsPublishedNameImageNostoreRoute,
  postProjectIdClassifyIterationsPublishedNameImageRoute,
  postProjectIdClassifyIterationsPublishedNameUrlNostoreRoute,
  postProjectIdClassifyIterationsPublishedNameUrlRoute,
  postProjectIdDetectIterationsPublishedNameImageNostoreRoute,
  postProjectIdDetectIterationsPublishedNameImageRoute,
  postProjectIdDetectIterationsPublishedNameUrlNostoreRoute,
  postProjectIdDetectIterationsPublishedNameUrlRoute,
} from './routes'
import {
  postProjectIdClassifyIterationsPublishedNameImageNostoreRouteHandler,
  postProjectIdClassifyIterationsPublishedNameImageRouteHandler,
  postProjectIdClassifyIterationsPublishedNameUrlNostoreRouteHandler,
  postProjectIdClassifyIterationsPublishedNameUrlRouteHandler,
  postProjectIdDetectIterationsPublishedNameImageNostoreRouteHandler,
  postProjectIdDetectIterationsPublishedNameImageRouteHandler,
  postProjectIdDetectIterationsPublishedNameUrlNostoreRouteHandler,
  postProjectIdDetectIterationsPublishedNameUrlRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postProjectIdClassifyIterationsPublishedNameImageRoute,
    postProjectIdClassifyIterationsPublishedNameImageRouteHandler,
  )
  .openapi(
    postProjectIdClassifyIterationsPublishedNameImageNostoreRoute,
    postProjectIdClassifyIterationsPublishedNameImageNostoreRouteHandler,
  )
  .openapi(
    postProjectIdClassifyIterationsPublishedNameUrlRoute,
    postProjectIdClassifyIterationsPublishedNameUrlRouteHandler,
  )
  .openapi(
    postProjectIdClassifyIterationsPublishedNameUrlNostoreRoute,
    postProjectIdClassifyIterationsPublishedNameUrlNostoreRouteHandler,
  )
  .openapi(
    postProjectIdDetectIterationsPublishedNameImageRoute,
    postProjectIdDetectIterationsPublishedNameImageRouteHandler,
  )
  .openapi(
    postProjectIdDetectIterationsPublishedNameImageNostoreRoute,
    postProjectIdDetectIterationsPublishedNameImageNostoreRouteHandler,
  )
  .openapi(
    postProjectIdDetectIterationsPublishedNameUrlRoute,
    postProjectIdDetectIterationsPublishedNameUrlRouteHandler,
  )
  .openapi(
    postProjectIdDetectIterationsPublishedNameUrlNostoreRoute,
    postProjectIdDetectIterationsPublishedNameUrlNostoreRouteHandler,
  )

export default app
