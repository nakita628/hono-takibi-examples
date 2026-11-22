import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1B2bOrganizationsOrganizationIdExternalIdRoute,
  deleteV1B2bOrganizationsOrganizationIdRoute,
  getV1B2bOrganizationsOrganizationIdConnectedAppsConnectedAppIdRoute,
  getV1B2bOrganizationsOrganizationIdConnectedAppsRoute,
  getV1B2bOrganizationsOrganizationIdMetricsRoute,
  getV1B2bOrganizationsOrganizationIdRoute,
  postV1B2bOrganizationsRoute,
  postV1B2bOrganizationsSearchRoute,
  putV1B2bOrganizationsOrganizationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationHandler = app
  .openapi(postV1B2bOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1B2bOrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1B2bOrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1B2bOrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bOrganizationsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1B2bOrganizationsOrganizationIdMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1B2bOrganizationsOrganizationIdConnectedAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1B2bOrganizationsOrganizationIdConnectedAppsConnectedAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1B2bOrganizationsOrganizationIdExternalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
