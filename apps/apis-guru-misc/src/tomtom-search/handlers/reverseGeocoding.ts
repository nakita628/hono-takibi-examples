import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSearchVersionNumberReverseGeocodeCrossStreetPositionExtRoute,
  getSearchVersionNumberReverseGeocodePositionExtRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reverseGeocodingHandler = app
  .openapi(getSearchVersionNumberReverseGeocodeCrossStreetPositionExtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchVersionNumberReverseGeocodePositionExtRoute, (c) => {
    throw new Error('Not implemented')
  })
