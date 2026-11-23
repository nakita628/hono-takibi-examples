import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1NameRoute,
  getV1ParentPlaceActionLinksRoute,
  getV1PlaceActionTypeMetadataRoute,
  patchV1NameRoute,
  postV1ParentPlaceActionLinksRoute,
} from './routes'
import {
  deleteV1NameRouteHandler,
  getV1NameRouteHandler,
  getV1ParentPlaceActionLinksRouteHandler,
  getV1PlaceActionTypeMetadataRouteHandler,
  patchV1NameRouteHandler,
  postV1ParentPlaceActionLinksRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1PlaceActionTypeMetadataRoute, getV1PlaceActionTypeMetadataRouteHandler)
  .openapi(deleteV1NameRoute, deleteV1NameRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(patchV1NameRoute, patchV1NameRouteHandler)
  .openapi(getV1ParentPlaceActionLinksRoute, getV1ParentPlaceActionLinksRouteHandler)
  .openapi(postV1ParentPlaceActionLinksRoute, postV1ParentPlaceActionLinksRouteHandler)

export default app
