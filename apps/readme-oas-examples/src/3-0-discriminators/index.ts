import { OpenAPIHono } from '@hono/zod-openapi'
import {
  patchDiscriminatorWithMappingRoute,
  patchDiscriminatorWithNoMappingRoute,
  patchEmbeddedDiscriminatorRoute,
  patchImproperDiscriminatorPlacementRoute,
  patchMappingOfSchemaNamesRoute,
  patchMappingWithDuplicateSchemasRoute,
  patchNestedOneOfObjectWithNestedOneOfRoute,
  patchOneofAllofTopLevelDiscRoute,
  patchRedoclyFlavoredDiscriminatorRoute,
  postPotentiallyUndefinedFormDataRoute,
} from './routes'
import {
  patchDiscriminatorWithMappingRouteHandler,
  patchDiscriminatorWithNoMappingRouteHandler,
  patchEmbeddedDiscriminatorRouteHandler,
  patchImproperDiscriminatorPlacementRouteHandler,
  patchMappingOfSchemaNamesRouteHandler,
  patchMappingWithDuplicateSchemasRouteHandler,
  patchNestedOneOfObjectWithNestedOneOfRouteHandler,
  patchOneofAllofTopLevelDiscRouteHandler,
  patchRedoclyFlavoredDiscriminatorRouteHandler,
  postPotentiallyUndefinedFormDataRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(patchDiscriminatorWithMappingRoute, patchDiscriminatorWithMappingRouteHandler)
  .openapi(patchDiscriminatorWithNoMappingRoute, patchDiscriminatorWithNoMappingRouteHandler)
  .openapi(patchEmbeddedDiscriminatorRoute, patchEmbeddedDiscriminatorRouteHandler)
  .openapi(patchOneofAllofTopLevelDiscRoute, patchOneofAllofTopLevelDiscRouteHandler)
  .openapi(
    patchNestedOneOfObjectWithNestedOneOfRoute,
    patchNestedOneOfObjectWithNestedOneOfRouteHandler,
  )
  .openapi(patchMappingWithDuplicateSchemasRoute, patchMappingWithDuplicateSchemasRouteHandler)
  .openapi(patchMappingOfSchemaNamesRoute, patchMappingOfSchemaNamesRouteHandler)
  .openapi(
    patchImproperDiscriminatorPlacementRoute,
    patchImproperDiscriminatorPlacementRouteHandler,
  )
  .openapi(patchRedoclyFlavoredDiscriminatorRoute, patchRedoclyFlavoredDiscriminatorRouteHandler)
  .openapi(postPotentiallyUndefinedFormDataRoute, postPotentiallyUndefinedFormDataRouteHandler)

export default app
