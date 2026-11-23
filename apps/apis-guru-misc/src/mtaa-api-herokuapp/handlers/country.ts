import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCountryRegionDistrictRoute,
  getCountryRegionDistrictWardRoute,
  getCountryRegionDistrictWardStreetRoute,
  getCountryRegionRoute,
  getCountryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const countryHandler = app
  .openapi(getCountryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCountryRegionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCountryRegionDistrictRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCountryRegionDistrictWardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCountryRegionDistrictWardStreetRoute, (c) => {
    throw new Error('Not implemented')
  })
