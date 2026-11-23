import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPlaceAddressStreetsPostcodeRoute,
  getPlaceIdRoute,
  getPlaceMetaCategoriesRoute,
  getPlaceMetaPlaceTypesRoute,
  getPlaceRoute,
  getPlaceSearchRoute,
  getPlaceTypeAtLatLonRoute,
  getPlaceTypeOverlayZLatLonWidthHeightRoute,
  getPlaceTypeTypesRoute,
} from '../routes'

export const getPlaceRouteHandler: RouteHandler<typeof getPlaceRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlaceAddressStreetsPostcodeRouteHandler: RouteHandler<
  typeof getPlaceAddressStreetsPostcodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlaceMetaCategoriesRouteHandler: RouteHandler<
  typeof getPlaceMetaCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlaceMetaPlaceTypesRouteHandler: RouteHandler<
  typeof getPlaceMetaPlaceTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlaceSearchRouteHandler: RouteHandler<typeof getPlaceSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlaceTypeTypesRouteHandler: RouteHandler<typeof getPlaceTypeTypesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPlaceIdRouteHandler: RouteHandler<typeof getPlaceIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlaceTypeAtLatLonRouteHandler: RouteHandler<
  typeof getPlaceTypeAtLatLonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlaceTypeOverlayZLatLonWidthHeightRouteHandler: RouteHandler<
  typeof getPlaceTypeOverlayZLatLonWidthHeightRoute
> = async (c) => {
  throw new Error('Not implemented')
}
