import { OpenAPIHono } from '@hono/zod-openapi'
import {
  patchPetsRoute,
  postAnyOfWithTypeRoute,
  postAnythingAllOfObjectRoute,
  postAnythingAnyOfObjectRoute,
  postAnythingAnyOfPrimitiveRoute,
  postAnythingNestedOneOfObjectRefRoute,
  postAnythingNestedOneOfObjectWithNestedOneOfRoute,
  postAnythingNestedOneOfRefRoute,
  postAnythingOneOfObjectRefRoute,
  postAnythingOneOfObjectRoute,
  postAnythingOneOfPrimitiveRoute,
  postOneOfComplexRoute,
  postOneOfWithTypeRoute,
} from './routes'
import {
  patchPetsRouteHandler,
  postAnyOfWithTypeRouteHandler,
  postAnythingAllOfObjectRouteHandler,
  postAnythingAnyOfObjectRouteHandler,
  postAnythingAnyOfPrimitiveRouteHandler,
  postAnythingNestedOneOfObjectRefRouteHandler,
  postAnythingNestedOneOfObjectWithNestedOneOfRouteHandler,
  postAnythingNestedOneOfRefRouteHandler,
  postAnythingOneOfObjectRefRouteHandler,
  postAnythingOneOfObjectRouteHandler,
  postAnythingOneOfPrimitiveRouteHandler,
  postOneOfComplexRouteHandler,
  postOneOfWithTypeRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(patchPetsRoute, patchPetsRouteHandler)
  .openapi(postAnythingAllOfObjectRoute, postAnythingAllOfObjectRouteHandler)
  .openapi(postAnythingAnyOfObjectRoute, postAnythingAnyOfObjectRouteHandler)
  .openapi(postAnythingAnyOfPrimitiveRoute, postAnythingAnyOfPrimitiveRouteHandler)
  .openapi(postAnyOfWithTypeRoute, postAnyOfWithTypeRouteHandler)
  .openapi(postAnythingOneOfObjectRoute, postAnythingOneOfObjectRouteHandler)
  .openapi(postAnythingOneOfPrimitiveRoute, postAnythingOneOfPrimitiveRouteHandler)
  .openapi(postAnythingOneOfObjectRefRoute, postAnythingOneOfObjectRefRouteHandler)
  .openapi(postOneOfComplexRoute, postOneOfComplexRouteHandler)
  .openapi(postAnythingNestedOneOfObjectRefRoute, postAnythingNestedOneOfObjectRefRouteHandler)
  .openapi(postAnythingNestedOneOfRefRoute, postAnythingNestedOneOfRefRouteHandler)
  .openapi(
    postAnythingNestedOneOfObjectWithNestedOneOfRoute,
    postAnythingNestedOneOfObjectWithNestedOneOfRouteHandler,
  )
  .openapi(postOneOfWithTypeRoute, postOneOfWithTypeRouteHandler)

export default app
