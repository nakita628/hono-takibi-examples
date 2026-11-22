import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneOperationsOperationRoute,
  getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneOperationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const managedZoneOperationsHandler = app
  .openapi(
    getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneOperationsRoute,
    (c) => {},
  )
  .openapi(
    getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneOperationsOperationRoute,
    (c) => {},
  )
