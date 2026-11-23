import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getGeomarksGeomarkIdBoundingBoxFileFormatExtensionRoute,
  getGeomarksGeomarkIdFeatureFileFormatExtensionRoute,
  getGeomarksGeomarkIdFileFormatExtensionRoute,
  getGeomarksGeomarkIdPartsFileFormatExtensionRoute,
  getGeomarksGeomarkIdPointFileFormatExtensionRoute,
  postGeomarksCopyRoute,
  postGeomarksNewRoute,
} from '../routes'

export const postGeomarksCopyRouteHandler: RouteHandler<typeof postGeomarksCopyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postGeomarksNewRouteHandler: RouteHandler<typeof postGeomarksNewRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getGeomarksGeomarkIdFileFormatExtensionRouteHandler: RouteHandler<
  typeof getGeomarksGeomarkIdFileFormatExtensionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getGeomarksGeomarkIdBoundingBoxFileFormatExtensionRouteHandler: RouteHandler<
  typeof getGeomarksGeomarkIdBoundingBoxFileFormatExtensionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getGeomarksGeomarkIdFeatureFileFormatExtensionRouteHandler: RouteHandler<
  typeof getGeomarksGeomarkIdFeatureFileFormatExtensionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getGeomarksGeomarkIdPartsFileFormatExtensionRouteHandler: RouteHandler<
  typeof getGeomarksGeomarkIdPartsFileFormatExtensionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getGeomarksGeomarkIdPointFileFormatExtensionRouteHandler: RouteHandler<
  typeof getGeomarksGeomarkIdPointFileFormatExtensionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
