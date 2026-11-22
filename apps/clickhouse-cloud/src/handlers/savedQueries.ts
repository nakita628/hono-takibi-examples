import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryIdRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryIdRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesRoute,
  postV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesRoute,
  putV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const savedQueriesHandler = app
  .openapi(getV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
