import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getZonesZoneIdAccessOrganizationsRoute,
  postZonesZoneIdAccessOrganizationsRevokeUserRoute,
  postZonesZoneIdAccessOrganizationsRoute,
  putZonesZoneIdAccessOrganizationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const zoneLevelZeroTrustOrganizationHandler = app
  .openapi(getZonesZoneIdAccessOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdAccessOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdAccessOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdAccessOrganizationsRevokeUserRoute, (c) => {
    throw new Error('Not implemented')
  })
