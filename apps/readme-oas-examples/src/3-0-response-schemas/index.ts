import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAnythingArrayOfObjectsRoute,
  getAnythingArrayOfPrimitivesRoute,
  getAnythingMarkdownRoute,
  getAnythingObjectRoute,
  getAnythingPolymorphismRoute,
  getAnythingRecursiveRoute,
  getAnythingReturnsAsJsonButIsActuallyStringRoute,
  getMultipleResponsesObjectRoute,
} from './routes'
import {
  getAnythingArrayOfObjectsRouteHandler,
  getAnythingArrayOfPrimitivesRouteHandler,
  getAnythingMarkdownRouteHandler,
  getAnythingObjectRouteHandler,
  getAnythingPolymorphismRouteHandler,
  getAnythingRecursiveRouteHandler,
  getAnythingReturnsAsJsonButIsActuallyStringRouteHandler,
  getMultipleResponsesObjectRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAnythingArrayOfPrimitivesRoute, getAnythingArrayOfPrimitivesRouteHandler)
  .openapi(getAnythingObjectRoute, getAnythingObjectRouteHandler)
  .openapi(getAnythingMarkdownRoute, getAnythingMarkdownRouteHandler)
  .openapi(getAnythingArrayOfObjectsRoute, getAnythingArrayOfObjectsRouteHandler)
  .openapi(getAnythingPolymorphismRoute, getAnythingPolymorphismRouteHandler)
  .openapi(getAnythingRecursiveRoute, getAnythingRecursiveRouteHandler)
  .openapi(
    getAnythingReturnsAsJsonButIsActuallyStringRoute,
    getAnythingReturnsAsJsonButIsActuallyStringRouteHandler,
  )
  .openapi(getMultipleResponsesObjectRoute, getMultipleResponsesObjectRouteHandler)

export default app
