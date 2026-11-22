import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneDnsKeysDnsKeyIdRoute,
  getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneDnsKeysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dnsKeysHandler = app
  .openapi(getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneDnsKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneDnsKeysDnsKeyIdRoute,
    (c) => {},
  )
