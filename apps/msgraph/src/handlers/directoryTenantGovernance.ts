import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDirectoryTenantGovernanceGovernanceInvitationsGovernanceInvitationIdRoute,
  deleteDirectoryTenantGovernanceGovernancePolicyTemplatesTenantGovernancePolicyTemplateIdRoute,
  deleteDirectoryTenantGovernanceGovernanceRelationshipsGovernanceRelationshipIdRoute,
  deleteDirectoryTenantGovernanceGovernanceRequestsGovernanceRequestIdRoute,
  deleteDirectoryTenantGovernanceRelatedTenantsRelatedTenantIdRoute,
  deleteDirectoryTenantGovernanceRoute,
  deleteDirectoryTenantGovernanceSettingsRoute,
  getDirectoryTenantGovernanceGovernanceInvitationsCountRoute,
  getDirectoryTenantGovernanceGovernanceInvitationsGovernanceInvitationIdRoute,
  getDirectoryTenantGovernanceGovernanceInvitationsRoute,
  getDirectoryTenantGovernanceGovernancePolicyTemplatesCountRoute,
  getDirectoryTenantGovernanceGovernancePolicyTemplatesRoute,
  getDirectoryTenantGovernanceGovernancePolicyTemplatesTenantGovernancePolicyTemplateIdRoute,
  getDirectoryTenantGovernanceGovernanceRelationshipsCountRoute,
  getDirectoryTenantGovernanceGovernanceRelationshipsGovernanceRelationshipIdRoute,
  getDirectoryTenantGovernanceGovernanceRelationshipsRoute,
  getDirectoryTenantGovernanceGovernanceRequestsCountRoute,
  getDirectoryTenantGovernanceGovernanceRequestsGovernanceRequestIdGovernancePolicyTemplateRoute,
  getDirectoryTenantGovernanceGovernanceRequestsGovernanceRequestIdRoute,
  getDirectoryTenantGovernanceGovernanceRequestsRoute,
  getDirectoryTenantGovernanceRelatedTenantsCountRoute,
  getDirectoryTenantGovernanceRelatedTenantsRefreshStatusRoute,
  getDirectoryTenantGovernanceRelatedTenantsRelatedTenantIdAppB2BSignInActivityMetricsRoute,
  getDirectoryTenantGovernanceRelatedTenantsRelatedTenantIdB2BRegistrationMetricsRoute,
  getDirectoryTenantGovernanceRelatedTenantsRelatedTenantIdB2BSignInActivityMetricsRoute,
  getDirectoryTenantGovernanceRelatedTenantsRelatedTenantIdBillingMetricsRoute,
  getDirectoryTenantGovernanceRelatedTenantsRelatedTenantIdMultiTenantApplicationMetricsRoute,
  getDirectoryTenantGovernanceRelatedTenantsRelatedTenantIdRoute,
  getDirectoryTenantGovernanceRelatedTenantsRoute,
  getDirectoryTenantGovernanceRoute,
  getDirectoryTenantGovernanceSettingsRoute,
  patchDirectoryTenantGovernanceGovernanceInvitationsGovernanceInvitationIdRoute,
  patchDirectoryTenantGovernanceGovernancePolicyTemplatesTenantGovernancePolicyTemplateIdRoute,
  patchDirectoryTenantGovernanceGovernanceRelationshipsGovernanceRelationshipIdRoute,
  patchDirectoryTenantGovernanceGovernanceRequestsGovernanceRequestIdRoute,
  patchDirectoryTenantGovernanceRelatedTenantsRelatedTenantIdRoute,
  patchDirectoryTenantGovernanceRoute,
  patchDirectoryTenantGovernanceSettingsRoute,
  postDirectoryTenantGovernanceGovernanceInvitationsRoute,
  postDirectoryTenantGovernanceGovernancePolicyTemplatesRoute,
  postDirectoryTenantGovernanceGovernanceRelationshipsRoute,
  postDirectoryTenantGovernanceGovernanceRequestsRoute,
  postDirectoryTenantGovernanceRelatedTenantsRefreshRoute,
  postDirectoryTenantGovernanceRelatedTenantsRoute,
  postDirectoryTenantGovernanceSettingsEnableRelatedTenantsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const directoryTenantGovernanceHandler = app
  .openapi(getDirectoryTenantGovernanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDirectoryTenantGovernanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDirectoryTenantGovernanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryTenantGovernanceGovernanceInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryTenantGovernanceGovernanceInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryTenantGovernanceGovernanceInvitationsGovernanceInvitationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDirectoryTenantGovernanceGovernanceInvitationsGovernanceInvitationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDirectoryTenantGovernanceGovernanceInvitationsGovernanceInvitationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryTenantGovernanceGovernanceInvitationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryTenantGovernanceGovernancePolicyTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryTenantGovernanceGovernancePolicyTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDirectoryTenantGovernanceGovernancePolicyTemplatesTenantGovernancePolicyTemplateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDirectoryTenantGovernanceGovernancePolicyTemplatesTenantGovernancePolicyTemplateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDirectoryTenantGovernanceGovernancePolicyTemplatesTenantGovernancePolicyTemplateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDirectoryTenantGovernanceGovernancePolicyTemplatesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryTenantGovernanceGovernanceRelationshipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryTenantGovernanceGovernanceRelationshipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDirectoryTenantGovernanceGovernanceRelationshipsGovernanceRelationshipIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDirectoryTenantGovernanceGovernanceRelationshipsGovernanceRelationshipIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDirectoryTenantGovernanceGovernanceRelationshipsGovernanceRelationshipIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDirectoryTenantGovernanceGovernanceRelationshipsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryTenantGovernanceGovernanceRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryTenantGovernanceGovernanceRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryTenantGovernanceGovernanceRequestsGovernanceRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDirectoryTenantGovernanceGovernanceRequestsGovernanceRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDirectoryTenantGovernanceGovernanceRequestsGovernanceRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDirectoryTenantGovernanceGovernanceRequestsGovernanceRequestIdGovernancePolicyTemplateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDirectoryTenantGovernanceGovernanceRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryTenantGovernanceRelatedTenantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryTenantGovernanceRelatedTenantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryTenantGovernanceRelatedTenantsRelatedTenantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDirectoryTenantGovernanceRelatedTenantsRelatedTenantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDirectoryTenantGovernanceRelatedTenantsRelatedTenantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDirectoryTenantGovernanceRelatedTenantsRelatedTenantIdAppB2BSignInActivityMetricsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDirectoryTenantGovernanceRelatedTenantsRelatedTenantIdB2BRegistrationMetricsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDirectoryTenantGovernanceRelatedTenantsRelatedTenantIdB2BSignInActivityMetricsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDirectoryTenantGovernanceRelatedTenantsRelatedTenantIdBillingMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDirectoryTenantGovernanceRelatedTenantsRelatedTenantIdMultiTenantApplicationMetricsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDirectoryTenantGovernanceRelatedTenantsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryTenantGovernanceRelatedTenantsRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryTenantGovernanceRelatedTenantsRefreshStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryTenantGovernanceSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDirectoryTenantGovernanceSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDirectoryTenantGovernanceSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryTenantGovernanceSettingsEnableRelatedTenantsRoute, (c) => {
    throw new Error('Not implemented')
  })
