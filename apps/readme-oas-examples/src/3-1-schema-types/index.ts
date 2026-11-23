import { OpenAPIHono } from '@hono/zod-openapi'
import {
  patchAnythingArraysTopLevelPayloadsRoute,
  patchAnythingBooleansRoute,
  patchAnythingCircularRoute,
  patchAnythingNumbersRoute,
  patchAnythingQuirksPolymorphismRoute,
  patchAnythingRawBodyTopLevelPayloadsRoute,
  patchAnythingStringsTopLevelPayloadsRoute,
  postAnythingArraysRoute,
  postAnythingArraysTopLevelPayloadsRoute,
  postAnythingBooleansRoute,
  postAnythingCircularRoute,
  postAnythingMixedRoute,
  postAnythingNullRoute,
  postAnythingNumbersRoute,
  postAnythingObjectsRoute,
  postAnythingQuirksPolymorphismRoute,
  postAnythingQuirksRoute,
  postAnythingRawBodyTopLevelPayloadsRoute,
  postAnythingStringsRoute,
  postAnythingStringsTopLevelPayloadsRoute,
  putAnythingNumbersRoute,
  putAnythingQuirksPolymorphismRoute,
  putAnythingStringsRoute,
} from './routes'
import {
  patchAnythingArraysTopLevelPayloadsRouteHandler,
  patchAnythingBooleansRouteHandler,
  patchAnythingCircularRouteHandler,
  patchAnythingNumbersRouteHandler,
  patchAnythingQuirksPolymorphismRouteHandler,
  patchAnythingRawBodyTopLevelPayloadsRouteHandler,
  patchAnythingStringsTopLevelPayloadsRouteHandler,
  postAnythingArraysRouteHandler,
  postAnythingArraysTopLevelPayloadsRouteHandler,
  postAnythingBooleansRouteHandler,
  postAnythingCircularRouteHandler,
  postAnythingMixedRouteHandler,
  postAnythingNullRouteHandler,
  postAnythingNumbersRouteHandler,
  postAnythingObjectsRouteHandler,
  postAnythingQuirksPolymorphismRouteHandler,
  postAnythingQuirksRouteHandler,
  postAnythingRawBodyTopLevelPayloadsRouteHandler,
  postAnythingStringsRouteHandler,
  postAnythingStringsTopLevelPayloadsRouteHandler,
  putAnythingNumbersRouteHandler,
  putAnythingQuirksPolymorphismRouteHandler,
  putAnythingStringsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAnythingStringsRoute, postAnythingStringsRouteHandler)
  .openapi(putAnythingStringsRoute, putAnythingStringsRouteHandler)
  .openapi(
    postAnythingStringsTopLevelPayloadsRoute,
    postAnythingStringsTopLevelPayloadsRouteHandler,
  )
  .openapi(
    patchAnythingStringsTopLevelPayloadsRoute,
    patchAnythingStringsTopLevelPayloadsRouteHandler,
  )
  .openapi(postAnythingNumbersRoute, postAnythingNumbersRouteHandler)
  .openapi(putAnythingNumbersRoute, putAnythingNumbersRouteHandler)
  .openapi(patchAnythingNumbersRoute, patchAnythingNumbersRouteHandler)
  .openapi(postAnythingBooleansRoute, postAnythingBooleansRouteHandler)
  .openapi(patchAnythingBooleansRoute, patchAnythingBooleansRouteHandler)
  .openapi(postAnythingArraysRoute, postAnythingArraysRouteHandler)
  .openapi(postAnythingArraysTopLevelPayloadsRoute, postAnythingArraysTopLevelPayloadsRouteHandler)
  .openapi(
    patchAnythingArraysTopLevelPayloadsRoute,
    patchAnythingArraysTopLevelPayloadsRouteHandler,
  )
  .openapi(postAnythingObjectsRoute, postAnythingObjectsRouteHandler)
  .openapi(postAnythingNullRoute, postAnythingNullRouteHandler)
  .openapi(postAnythingMixedRoute, postAnythingMixedRouteHandler)
  .openapi(postAnythingCircularRoute, postAnythingCircularRouteHandler)
  .openapi(patchAnythingCircularRoute, patchAnythingCircularRouteHandler)
  .openapi(
    postAnythingRawBodyTopLevelPayloadsRoute,
    postAnythingRawBodyTopLevelPayloadsRouteHandler,
  )
  .openapi(
    patchAnythingRawBodyTopLevelPayloadsRoute,
    patchAnythingRawBodyTopLevelPayloadsRouteHandler,
  )
  .openapi(postAnythingQuirksRoute, postAnythingQuirksRouteHandler)
  .openapi(postAnythingQuirksPolymorphismRoute, postAnythingQuirksPolymorphismRouteHandler)
  .openapi(putAnythingQuirksPolymorphismRoute, putAnythingQuirksPolymorphismRouteHandler)
  .openapi(patchAnythingQuirksPolymorphismRoute, patchAnythingQuirksPolymorphismRouteHandler)

export default app
