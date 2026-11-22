import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2IntegrationGoogleChatOrganizationsOrganizationBindingIdDelegatedUserRoute,
  deleteApiV2IntegrationGoogleChatOrganizationsOrganizationBindingIdOrganizationHandlesHandleIdRoute,
  deleteApiV2IntegrationGoogleChatOrganizationsOrganizationBindingIdRoute,
  deleteApiV2IntegrationGoogleChatOrganizationsOrganizationBindingIdTargetAudiencesTargetAudienceIdRoute,
  getApiV2IntegrationGoogleChatOrganizationsAppNamedSpacesDomainNameSpaceDisplayNameRoute,
  getApiV2IntegrationGoogleChatOrganizationsOrganizationBindingIdDelegatedUserRoute,
  getApiV2IntegrationGoogleChatOrganizationsOrganizationBindingIdOrganizationHandlesHandleIdRoute,
  getApiV2IntegrationGoogleChatOrganizationsOrganizationBindingIdOrganizationHandlesRoute,
  getApiV2IntegrationGoogleChatOrganizationsOrganizationBindingIdRoute,
  getApiV2IntegrationGoogleChatOrganizationsOrganizationBindingIdTargetAudiencesRoute,
  getApiV2IntegrationGoogleChatOrganizationsOrganizationBindingIdTargetAudiencesTargetAudienceIdRoute,
  getApiV2IntegrationGoogleChatOrganizationsRoute,
  patchApiV2IntegrationGoogleChatOrganizationsOrganizationBindingIdOrganizationHandlesHandleIdRoute,
  patchApiV2IntegrationGoogleChatOrganizationsOrganizationBindingIdTargetAudiencesTargetAudienceIdRoute,
  postApiV2IntegrationGoogleChatOrganizationsOrganizationBindingIdOrganizationHandlesRoute,
  postApiV2IntegrationGoogleChatOrganizationsOrganizationBindingIdTargetAudiencesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const googleChatIntegrationHandler = app
  .openapi(getApiV2IntegrationGoogleChatOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiV2IntegrationGoogleChatOrganizationsAppNamedSpacesDomainNameSpaceDisplayNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteApiV2IntegrationGoogleChatOrganizationsOrganizationBindingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IntegrationGoogleChatOrganizationsOrganizationBindingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteApiV2IntegrationGoogleChatOrganizationsOrganizationBindingIdDelegatedUserRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV2IntegrationGoogleChatOrganizationsOrganizationBindingIdDelegatedUserRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV2IntegrationGoogleChatOrganizationsOrganizationBindingIdOrganizationHandlesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV2IntegrationGoogleChatOrganizationsOrganizationBindingIdOrganizationHandlesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteApiV2IntegrationGoogleChatOrganizationsOrganizationBindingIdOrganizationHandlesHandleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV2IntegrationGoogleChatOrganizationsOrganizationBindingIdOrganizationHandlesHandleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchApiV2IntegrationGoogleChatOrganizationsOrganizationBindingIdOrganizationHandlesHandleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV2IntegrationGoogleChatOrganizationsOrganizationBindingIdTargetAudiencesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV2IntegrationGoogleChatOrganizationsOrganizationBindingIdTargetAudiencesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteApiV2IntegrationGoogleChatOrganizationsOrganizationBindingIdTargetAudiencesTargetAudienceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV2IntegrationGoogleChatOrganizationsOrganizationBindingIdTargetAudiencesTargetAudienceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchApiV2IntegrationGoogleChatOrganizationsOrganizationBindingIdTargetAudiencesTargetAudienceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
