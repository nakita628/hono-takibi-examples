import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdRoute,
  getV1OrganizationsOrganizationIdActivitiesActivityIdRoute,
  getV1OrganizationsOrganizationIdActivitiesRoute,
  getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdCustomerAuthorizedAccessRoute,
  getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdPrivateEndpointConfigRoute,
  getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdProgressRoute,
  getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdRoute,
  getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdTagsRoute,
  getV1OrganizationsOrganizationIdPreviewsRoute,
  getV1OrganizationsOrganizationIdPrivateEndpointConfigRoute,
  getV1OrganizationsOrganizationIdQuotasQuotaCodeRoute,
  getV1OrganizationsOrganizationIdQuotasRoute,
  getV1OrganizationsOrganizationIdRoute,
  getV1OrganizationsRoute,
  patchV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdCustomerAuthorizedAccessRoute,
  patchV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdRoute,
  patchV1OrganizationsOrganizationIdPreviewsPreviewIdRoute,
  patchV1OrganizationsOrganizationIdRoute,
  postV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdEnrollmentTokenRoute,
  postV1OrganizationsOrganizationIdByocInfrastructureRoute,
  postV1OrganizationsOrganizationIdByocInfrastructureValidateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationHandler = app
  .openapi(getV1OrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1OrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdQuotasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdQuotasQuotaCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdPreviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1OrganizationsOrganizationIdPreviewsPreviewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdActivitiesActivityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdPrivateEndpointConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsOrganizationIdByocInfrastructureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsOrganizationIdByocInfrastructureValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdEnrollmentTokenRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdProgressRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdPrivateEndpointConfigRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdCustomerAuthorizedAccessRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdCustomerAuthorizedAccessRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
