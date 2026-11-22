import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerIdRoute,
  getOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerIdRoute,
  getOrganizationsOrganizationIdInsightMonitoredMediaServersRoute,
  postOrganizationsOrganizationIdInsightMonitoredMediaServersRoute,
  putOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const monitoredMediaServersHandler = app
  .openapi(getOrganizationsOrganizationIdInsightMonitoredMediaServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdInsightMonitoredMediaServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
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
