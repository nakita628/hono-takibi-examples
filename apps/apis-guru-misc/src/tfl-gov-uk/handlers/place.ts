import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const placeHandler = app
  .openapi(getPlaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlaceAddressStreetsPostcodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlaceMetaCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlaceMetaPlaceTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlaceSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlaceTypeTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlaceTypeAtLatLonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlaceTypeOverlayZLatLonWidthHeightRoute, (c) => {
    throw new Error('Not implemented')
  })
