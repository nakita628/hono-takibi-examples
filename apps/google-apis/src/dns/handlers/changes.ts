import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChangesChangeIdRoute,
  getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChangesRoute,
  postDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChangesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const changesHandler = app
  .openapi(getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChangesChangeIdRoute,
    (c) => {},
  )
