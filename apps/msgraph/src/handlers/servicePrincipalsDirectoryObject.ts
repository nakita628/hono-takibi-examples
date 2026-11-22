import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicePrincipalsServicePrincipalIdOwnersDirectoryObjectIdRefRoute,
  deleteServicePrincipalsServicePrincipalIdOwnersRefRoute,
  getServicePrincipalsServicePrincipalIdCreatedObjectsCountRoute,
  getServicePrincipalsServicePrincipalIdCreatedObjectsDirectoryObjectIdGraphServicePrincipalRoute,
  getServicePrincipalsServicePrincipalIdCreatedObjectsDirectoryObjectIdRoute,
  getServicePrincipalsServicePrincipalIdCreatedObjectsGraphServicePrincipalCountRoute,
  getServicePrincipalsServicePrincipalIdCreatedObjectsGraphServicePrincipalRoute,
  getServicePrincipalsServicePrincipalIdCreatedObjectsRoute,
  getServicePrincipalsServicePrincipalIdMemberOfCountRoute,
  getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdGraphAdministrativeUnitRoute,
  getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdGraphDirectoryRoleRoute,
  getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdGraphGroupRoute,
  getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdRoute,
  getServicePrincipalsServicePrincipalIdMemberOfGraphAdministrativeUnitCountRoute,
  getServicePrincipalsServicePrincipalIdMemberOfGraphAdministrativeUnitRoute,
  getServicePrincipalsServicePrincipalIdMemberOfGraphDirectoryRoleCountRoute,
  getServicePrincipalsServicePrincipalIdMemberOfGraphDirectoryRoleRoute,
  getServicePrincipalsServicePrincipalIdMemberOfGraphGroupCountRoute,
  getServicePrincipalsServicePrincipalIdMemberOfGraphGroupRoute,
  getServicePrincipalsServicePrincipalIdMemberOfRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsCountRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdGraphApplicationRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdGraphAppRoleAssignmentRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdGraphEndpointRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdGraphGroupRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdGraphServicePrincipalRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsGraphApplicationCountRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsGraphApplicationRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsGraphAppRoleAssignmentCountRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsGraphAppRoleAssignmentRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsGraphEndpointCountRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsGraphEndpointRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsGraphGroupCountRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsGraphGroupRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsGraphServicePrincipalCountRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsGraphServicePrincipalRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsRoute,
  getServicePrincipalsServicePrincipalIdOwnersCountRoute,
  getServicePrincipalsServicePrincipalIdOwnersDirectoryObjectIdGraphAppRoleAssignmentRoute,
  getServicePrincipalsServicePrincipalIdOwnersDirectoryObjectIdGraphEndpointRoute,
  getServicePrincipalsServicePrincipalIdOwnersDirectoryObjectIdGraphServicePrincipalRoute,
  getServicePrincipalsServicePrincipalIdOwnersDirectoryObjectIdGraphUserRoute,
  getServicePrincipalsServicePrincipalIdOwnersGraphAppRoleAssignmentCountRoute,
  getServicePrincipalsServicePrincipalIdOwnersGraphAppRoleAssignmentRoute,
  getServicePrincipalsServicePrincipalIdOwnersGraphEndpointCountRoute,
  getServicePrincipalsServicePrincipalIdOwnersGraphEndpointRoute,
  getServicePrincipalsServicePrincipalIdOwnersGraphServicePrincipalCountRoute,
  getServicePrincipalsServicePrincipalIdOwnersGraphServicePrincipalRoute,
  getServicePrincipalsServicePrincipalIdOwnersGraphUserCountRoute,
  getServicePrincipalsServicePrincipalIdOwnersGraphUserRoute,
  getServicePrincipalsServicePrincipalIdOwnersRefRoute,
  getServicePrincipalsServicePrincipalIdOwnersRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfCountRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdGraphAdministrativeUnitRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdGraphDirectoryRoleRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdGraphGroupRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfGraphAdministrativeUnitCountRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfGraphAdministrativeUnitRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfGraphDirectoryRoleCountRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfGraphDirectoryRoleRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfGraphGroupCountRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfGraphGroupRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfRoute,
  postServicePrincipalsServicePrincipalIdOwnersRefRoute,
} from '../routes'

const app = new OpenAPIHono()

export const servicePrincipalsDirectoryObjectHandler = app
  .openapi(getServicePrincipalsServicePrincipalIdCreatedObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdCreatedObjectsDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getServicePrincipalsServicePrincipalIdCreatedObjectsDirectoryObjectIdGraphServicePrincipalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getServicePrincipalsServicePrincipalIdCreatedObjectsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdCreatedObjectsGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getServicePrincipalsServicePrincipalIdCreatedObjectsGraphServicePrincipalCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getServicePrincipalsServicePrincipalIdMemberOfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdGraphAdministrativeUnitRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdGraphDirectoryRoleRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdMemberOfCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdMemberOfGraphAdministrativeUnitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdMemberOfGraphAdministrativeUnitCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdMemberOfGraphDirectoryRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdMemberOfGraphDirectoryRoleCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdMemberOfGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdMemberOfGraphGroupCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdOwnedObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdGraphApplicationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdGraphAppRoleAssignmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdGraphEndpointRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdGraphGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdGraphServicePrincipalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getServicePrincipalsServicePrincipalIdOwnedObjectsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdOwnedObjectsGraphApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdOwnedObjectsGraphApplicationCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdOwnedObjectsGraphAppRoleAssignmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getServicePrincipalsServicePrincipalIdOwnedObjectsGraphAppRoleAssignmentCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getServicePrincipalsServicePrincipalIdOwnedObjectsGraphEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdOwnedObjectsGraphEndpointCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdOwnedObjectsGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdOwnedObjectsGraphGroupCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdOwnedObjectsGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getServicePrincipalsServicePrincipalIdOwnedObjectsGraphServicePrincipalCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getServicePrincipalsServicePrincipalIdOwnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicePrincipalsServicePrincipalIdOwnersDirectoryObjectIdRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getServicePrincipalsServicePrincipalIdOwnersDirectoryObjectIdGraphAppRoleAssignmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getServicePrincipalsServicePrincipalIdOwnersDirectoryObjectIdGraphEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getServicePrincipalsServicePrincipalIdOwnersDirectoryObjectIdGraphServicePrincipalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getServicePrincipalsServicePrincipalIdOwnersDirectoryObjectIdGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdOwnersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdOwnersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicePrincipalsServicePrincipalIdOwnersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicePrincipalsServicePrincipalIdOwnersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdOwnersGraphAppRoleAssignmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdOwnersGraphAppRoleAssignmentCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdOwnersGraphEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdOwnersGraphEndpointCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdOwnersGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdOwnersGraphServicePrincipalCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdOwnersGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdOwnersGraphUserCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdTransitiveMemberOfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdGraphAdministrativeUnitRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdGraphDirectoryRoleRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdGraphGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getServicePrincipalsServicePrincipalIdTransitiveMemberOfCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getServicePrincipalsServicePrincipalIdTransitiveMemberOfGraphAdministrativeUnitRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getServicePrincipalsServicePrincipalIdTransitiveMemberOfGraphAdministrativeUnitCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getServicePrincipalsServicePrincipalIdTransitiveMemberOfGraphDirectoryRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getServicePrincipalsServicePrincipalIdTransitiveMemberOfGraphDirectoryRoleCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getServicePrincipalsServicePrincipalIdTransitiveMemberOfGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdTransitiveMemberOfGraphGroupCountRoute, (c) => {
    throw new Error('Not implemented')
  })
