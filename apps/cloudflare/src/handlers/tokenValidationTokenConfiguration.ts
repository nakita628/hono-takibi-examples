import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdTokenValidationConfigConfigIdRoute,
  getZonesZoneIdTokenValidationConfigConfigIdRoute,
  getZonesZoneIdTokenValidationConfigRoute,
  patchZonesZoneIdTokenValidationConfigConfigIdCredentialsRoute,
  patchZonesZoneIdTokenValidationConfigConfigIdRoute,
  postZonesZoneIdTokenValidationConfigRoute,
  putZonesZoneIdTokenValidationConfigConfigIdCredentialsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tokenValidationTokenConfigurationHandler = app
  .openapi(getZonesZoneIdTokenValidationConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdTokenValidationConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdTokenValidationConfigConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdTokenValidationConfigConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdTokenValidationConfigConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdTokenValidationConfigConfigIdCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdTokenValidationConfigConfigIdCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
