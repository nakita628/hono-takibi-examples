import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGeomarksGeomarkIdBoundingBoxFileFormatExtensionRoute,
  getGeomarksGeomarkIdFeatureFileFormatExtensionRoute,
  getGeomarksGeomarkIdFileFormatExtensionRoute,
  getGeomarksGeomarkIdPartsFileFormatExtensionRoute,
  getGeomarksGeomarkIdPointFileFormatExtensionRoute,
  postGeomarksCopyRoute,
  postGeomarksNewRoute,
} from '../routes'

const app = new OpenAPIHono()

export const geomarksHandler = app
  .openapi(postGeomarksCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGeomarksNewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGeomarksGeomarkIdFileFormatExtensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGeomarksGeomarkIdBoundingBoxFileFormatExtensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGeomarksGeomarkIdFeatureFileFormatExtensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGeomarksGeomarkIdPartsFileFormatExtensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGeomarksGeomarkIdPointFileFormatExtensionRoute, (c) => {
    throw new Error('Not implemented')
  })
