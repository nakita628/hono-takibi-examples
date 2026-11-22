import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdFiltersFilterIdRoute,
  deleteZonesZoneIdFiltersRoute,
  getZonesZoneIdFiltersFilterIdRoute,
  getZonesZoneIdFiltersRoute,
  postZonesZoneIdFiltersRoute,
  putZonesZoneIdFiltersFilterIdRoute,
  putZonesZoneIdFiltersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const filtersHandler = app
  .openapi(deleteZonesZoneIdFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdFiltersFilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdFiltersFilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdFiltersFilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
