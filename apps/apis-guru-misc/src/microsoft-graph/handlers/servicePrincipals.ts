import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getServicePrincipalsCountRoute,
  getServicePrincipalsServicePrincipalIdAppRoleAssignedToCountRoute,
  getServicePrincipalsServicePrincipalIdAppRoleAssignmentsCountRoute,
  getServicePrincipalsServicePrincipalIdClaimsMappingPoliciesCountRoute,
  getServicePrincipalsServicePrincipalIdCreatedObjectsCountRoute,
  getServicePrincipalsServicePrincipalIdCreatedObjectsMicrosoftGraphServicePrincipalCountRoute,
  getServicePrincipalsServicePrincipalIdDelegatedPermissionClassificationsCountRoute,
  getServicePrincipalsServicePrincipalIdEndpointsCountRoute,
  getServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsCountRoute,
  getServicePrincipalsServicePrincipalIdHomeRealmDiscoveryPoliciesCountRoute,
  getServicePrincipalsServicePrincipalIdMemberOfCountRoute,
  getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphApplicationCountRoute,
  getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphDeviceCountRoute,
  getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphGroupCountRoute,
  getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphOrgContactCountRoute,
  getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphServicePrincipalCountRoute,
  getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphUserCountRoute,
  getServicePrincipalsServicePrincipalIdOauth2PermissionGrantsCountRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsCountRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsMicrosoftGraphApplicationCountRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsMicrosoftGraphAppRoleAssignmentCountRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsMicrosoftGraphEndpointCountRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsMicrosoftGraphGroupCountRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsMicrosoftGraphServicePrincipalCountRoute,
  getServicePrincipalsServicePrincipalIdOwnersCountRoute,
  getServicePrincipalsServicePrincipalIdOwnersMicrosoftGraphAppRoleAssignmentCountRoute,
  getServicePrincipalsServicePrincipalIdOwnersMicrosoftGraphEndpointCountRoute,
  getServicePrincipalsServicePrincipalIdOwnersMicrosoftGraphServicePrincipalCountRoute,
  getServicePrincipalsServicePrincipalIdOwnersMicrosoftGraphUserCountRoute,
  getServicePrincipalsServicePrincipalIdTokenIssuancePoliciesCountRoute,
  getServicePrincipalsServicePrincipalIdTokenLifetimePoliciesCountRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfCountRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphApplicationCountRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphDeviceCountRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphGroupCountRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphOrgContactCountRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphServicePrincipalCountRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphUserCountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const servicePrincipalsHandler = app
  .openapi(getServicePrincipalsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdAppRoleAssignedToCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdAppRoleAssignmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdClaimsMappingPoliciesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdCreatedObjectsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getServicePrincipalsServicePrincipalIdCreatedObjectsMicrosoftGraphServicePrincipalCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getServicePrincipalsServicePrincipalIdDelegatedPermissionClassificationsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getServicePrincipalsServicePrincipalIdEndpointsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdHomeRealmDiscoveryPoliciesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdMemberOfCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphApplicationCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphDeviceCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphGroupCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphOrgContactCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphServicePrincipalCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphUserCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdOauth2PermissionGrantsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdOwnedObjectsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getServicePrincipalsServicePrincipalIdOwnedObjectsMicrosoftGraphAppRoleAssignmentCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getServicePrincipalsServicePrincipalIdOwnedObjectsMicrosoftGraphApplicationCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getServicePrincipalsServicePrincipalIdOwnedObjectsMicrosoftGraphEndpointCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getServicePrincipalsServicePrincipalIdOwnedObjectsMicrosoftGraphGroupCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getServicePrincipalsServicePrincipalIdOwnedObjectsMicrosoftGraphServicePrincipalCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getServicePrincipalsServicePrincipalIdOwnersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getServicePrincipalsServicePrincipalIdOwnersMicrosoftGraphAppRoleAssignmentCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getServicePrincipalsServicePrincipalIdOwnersMicrosoftGraphEndpointCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getServicePrincipalsServicePrincipalIdOwnersMicrosoftGraphServicePrincipalCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getServicePrincipalsServicePrincipalIdOwnersMicrosoftGraphUserCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdTokenIssuancePoliciesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdTokenLifetimePoliciesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdTransitiveMemberOfCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphApplicationCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphDeviceCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphGroupCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphOrgContactCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphServicePrincipalCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphUserCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
