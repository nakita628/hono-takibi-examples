import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGeomarksGeomarkIdBoundingBoxFileFormatExtensionRoute,
  getGeomarksGeomarkIdFeatureFileFormatExtensionRoute,
  getGeomarksGeomarkIdFileFormatExtensionRoute,
  getGeomarksGeomarkIdPartsFileFormatExtensionRoute,
  getGeomarksGeomarkIdPointFileFormatExtensionRoute,
  postGeomarksCopyRoute,
  postGeomarksNewRoute,
} from './routes'
import {
  getGeomarksGeomarkIdBoundingBoxFileFormatExtensionRouteHandler,
  getGeomarksGeomarkIdFeatureFileFormatExtensionRouteHandler,
  getGeomarksGeomarkIdFileFormatExtensionRouteHandler,
  getGeomarksGeomarkIdPartsFileFormatExtensionRouteHandler,
  getGeomarksGeomarkIdPointFileFormatExtensionRouteHandler,
  postGeomarksCopyRouteHandler,
  postGeomarksNewRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postGeomarksCopyRoute, postGeomarksCopyRouteHandler)
  .openapi(postGeomarksNewRoute, postGeomarksNewRouteHandler)
  .openapi(
    getGeomarksGeomarkIdFileFormatExtensionRoute,
    getGeomarksGeomarkIdFileFormatExtensionRouteHandler,
  )
  .openapi(
    getGeomarksGeomarkIdBoundingBoxFileFormatExtensionRoute,
    getGeomarksGeomarkIdBoundingBoxFileFormatExtensionRouteHandler,
  )
  .openapi(
    getGeomarksGeomarkIdFeatureFileFormatExtensionRoute,
    getGeomarksGeomarkIdFeatureFileFormatExtensionRouteHandler,
  )
  .openapi(
    getGeomarksGeomarkIdPartsFileFormatExtensionRoute,
    getGeomarksGeomarkIdPartsFileFormatExtensionRouteHandler,
  )
  .openapi(
    getGeomarksGeomarkIdPointFileFormatExtensionRoute,
    getGeomarksGeomarkIdPointFileFormatExtensionRouteHandler,
  )

export default app
