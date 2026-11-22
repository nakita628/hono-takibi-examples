import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRoute,
  getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRoute,
  getDnsV2ProjectsProjectLocationsLocationManagedZonesRoute,
  patchDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRoute,
  postDnsV2ProjectsProjectLocationsLocationManagedZonesRoute,
  postDnsV2ResourceGetIamPolicyRoute,
  postDnsV2ResourceSetIamPolicyRoute,
  postDnsV2ResourceTestIamPermissionsRoute,
  putDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRoute,
} from '../routes'

const app = new OpenAPIHono()

export const managedZonesHandler = app
  .openapi(getDnsV2ProjectsProjectLocationsLocationManagedZonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDnsV2ProjectsProjectLocationsLocationManagedZonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDnsV2ResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDnsV2ResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDnsV2ResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
