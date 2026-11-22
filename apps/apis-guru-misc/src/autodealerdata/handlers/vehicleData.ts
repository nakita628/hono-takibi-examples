import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getListings2Route,
  getListingsByDateRoute,
  getListingsByRegionAndDateRoute,
  getListingsByRegionRoute,
  getListingsByZipCodeAndDateRoute,
  getListingsByZipCodeRoute,
  getListingsRoute,
  getSimilarSalePriceRoute,
  getValuationRoute,
  getVehicleHistoryRoute,
  getVehicleSeenRoute,
  getVinDecodeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const vehicleDataHandler = app
  .openapi(getListingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListings2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListingsByDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListingsByRegionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListingsByRegionAndDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListingsByZipCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListingsByZipCodeAndDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSimilarSalePriceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getValuationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVehicleHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVehicleSeenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVinDecodeRoute, (c) => {
    throw new Error('Not implemented')
  })
