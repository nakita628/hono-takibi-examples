import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSecurityIncidentsIncidentIdRoute,
  getSecurityIncidentsIncidentIdAlertsAlertIdRoute,
  getSecurityIncidentsIncidentIdAlertsRoute,
  getSecurityIncidentsIncidentIdRoute,
  getSecurityIncidentsRoute,
  patchSecurityIncidentsIncidentIdRoute,
  postSecurityIncidentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const securityIncidentHandler = app
  .openapi(getSecurityIncidentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityIncidentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityIncidentsIncidentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityIncidentsIncidentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityIncidentsIncidentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityIncidentsIncidentIdAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityIncidentsIncidentIdAlertsAlertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
