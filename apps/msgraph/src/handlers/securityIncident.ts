import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSecurityIncidentsIncidentIdRoute,
  getSecurityIncidentsCountRoute,
  getSecurityIncidentsIncidentIdAlertsAlertIdCommentsCountRoute,
  getSecurityIncidentsIncidentIdAlertsAlertIdRoute,
  getSecurityIncidentsIncidentIdAlertsCountRoute,
  getSecurityIncidentsIncidentIdAlertsRoute,
  getSecurityIncidentsIncidentIdRoute,
  getSecurityIncidentsRoute,
  patchSecurityIncidentsIncidentIdRoute,
  postSecurityIncidentsIncidentIdAlertsAlertIdCommentsRoute,
  postSecurityIncidentsMicrosoftGraphSecurityMergeIncidentsRoute,
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
  .openapi(getSecurityIncidentsIncidentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityIncidentsIncidentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityIncidentsIncidentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityIncidentsIncidentIdAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityIncidentsIncidentIdAlertsAlertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityIncidentsIncidentIdAlertsAlertIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityIncidentsIncidentIdAlertsAlertIdCommentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityIncidentsIncidentIdAlertsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityIncidentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityIncidentsMicrosoftGraphSecurityMergeIncidentsRoute, (c) => {
    throw new Error('Not implemented')
  })
