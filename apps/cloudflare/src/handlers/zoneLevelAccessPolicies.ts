import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdAccessAppsAppIdPoliciesPolicyIdRoute,
  getZonesZoneIdAccessAppsAppIdPoliciesPolicyIdRoute,
  getZonesZoneIdAccessAppsAppIdPoliciesRoute,
  postZonesZoneIdAccessAppsAppIdPoliciesRoute,
  putZonesZoneIdAccessAppsAppIdPoliciesPolicyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const zoneLevelAccessPoliciesHandler = app
  .openapi(getZonesZoneIdAccessAppsAppIdPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdAccessAppsAppIdPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdAccessAppsAppIdPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdAccessAppsAppIdPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdAccessAppsAppIdPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
