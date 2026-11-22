import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerIdRoute,
  getNetworksNetworkIdInsightApplicationsApplicationIdHealthByTimeRoute,
  getOrganizationsOrganizationIdInsightApplicationsRoute,
  getOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerIdRoute,
  getOrganizationsOrganizationIdInsightMonitoredMediaServersRoute,
  postOrganizationsOrganizationIdInsightMonitoredMediaServersRoute,
  putOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const insightHandler = app
  .openapi(getNetworksNetworkIdInsightApplicationsApplicationIdHealthByTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdInsightApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdInsightMonitoredMediaServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdInsightMonitoredMediaServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
