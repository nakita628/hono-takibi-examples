import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointIdRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointIdRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsRoute,
  postV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsRoute,
  putV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const queryAPIEndpointsHandler = app
  .openapi(getV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
