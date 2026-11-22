import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameTypeRoute,
  getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameTypeRoute,
  getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsRoute,
  patchDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameTypeRoute,
  postDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const resourceRecordSetsHandler = app
  .openapi(getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameTypeRoute,
    (c) => {},
  )
  .openapi(
    getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameTypeRoute,
    (c) => {},
  )
  .openapi(
    patchDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameTypeRoute,
    (c) => {},
  )
