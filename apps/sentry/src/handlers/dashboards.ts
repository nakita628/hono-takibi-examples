import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndexRoute,
  getOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndexRoute,
  getOrganizationsOrganizationIdOrSlugDashboardsDashboardIdRevisionsIndexRoute,
  getOrganizationsOrganizationIdOrSlugDashboardsIndexRoute,
  postOrganizationsOrganizationIdOrSlugDashboardsDashboardIdRevisionsRevisionIdRestoreIndexRoute,
  postOrganizationsOrganizationIdOrSlugDashboardsIndexRoute,
  putOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dashboardsHandler = app
  .openapi(getOrganizationsOrganizationIdOrSlugDashboardsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdOrSlugDashboardsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugDashboardsDashboardIdRevisionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postOrganizationsOrganizationIdOrSlugDashboardsDashboardIdRevisionsRevisionIdRestoreIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
