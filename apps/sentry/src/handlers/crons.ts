import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndexRoute,
  deleteProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndexRoute,
  getOrganizationsOrganizationIdOrSlugMonitorsIndexRoute,
  getOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugCheckinsIndexRoute,
  getOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugCheckinsIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndexRoute,
  postOrganizationsOrganizationIdOrSlugMonitorsIndexRoute,
  putOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndexRoute,
  putProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cronsHandler = app
  .openapi(getOrganizationsOrganizationIdOrSlugMonitorsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdOrSlugMonitorsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugCheckinsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugCheckinsIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
