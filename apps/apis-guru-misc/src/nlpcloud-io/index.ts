import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1EnCoreWebSmIndexRoute,
  getV1EnCoreWebSmVersionRoute,
  postV1EnCoreWebSmDependenciesRoute,
  postV1EnCoreWebSmEntitiesRoute,
  postV1EnCoreWebSmSentenceDependenciesRoute,
} from './routes'
import {
  getV1EnCoreWebSmIndexRouteHandler,
  getV1EnCoreWebSmVersionRouteHandler,
  postV1EnCoreWebSmDependenciesRouteHandler,
  postV1EnCoreWebSmEntitiesRouteHandler,
  postV1EnCoreWebSmSentenceDependenciesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1EnCoreWebSmIndexRoute, getV1EnCoreWebSmIndexRouteHandler)
  .openapi(postV1EnCoreWebSmDependenciesRoute, postV1EnCoreWebSmDependenciesRouteHandler)
  .openapi(postV1EnCoreWebSmEntitiesRoute, postV1EnCoreWebSmEntitiesRouteHandler)
  .openapi(
    postV1EnCoreWebSmSentenceDependenciesRoute,
    postV1EnCoreWebSmSentenceDependenciesRouteHandler,
  )
  .openapi(getV1EnCoreWebSmVersionRoute, getV1EnCoreWebSmVersionRouteHandler)

export default app
