import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdAccessIdentityProvidersIdentityProviderIdRoute,
  getZonesZoneIdAccessIdentityProvidersIdentityProviderIdRoute,
  getZonesZoneIdAccessIdentityProvidersRoute,
  postZonesZoneIdAccessIdentityProvidersRoute,
  putZonesZoneIdAccessIdentityProvidersIdentityProviderIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const zoneLevelAccessIdentityProvidersHandler = app
  .openapi(getZonesZoneIdAccessIdentityProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdAccessIdentityProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdAccessIdentityProvidersIdentityProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdAccessIdentityProvidersIdentityProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdAccessIdentityProvidersIdentityProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
