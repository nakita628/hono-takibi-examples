import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDirectoryAdministrativeUnitsAdministrativeUnitIdExtensionsExtensionIdRoute,
  deleteDirectoryAdministrativeUnitsAdministrativeUnitIdMembersDirectoryObjectIdRefRoute,
  deleteDirectoryAdministrativeUnitsAdministrativeUnitIdMembersRefRoute,
  deleteDirectoryAdministrativeUnitsAdministrativeUnitIdRoute,
  deleteDirectoryAdministrativeUnitsAdministrativeUnitIdScopedRoleMembersScopedRoleMembershipIdRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdExtensionsCountRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdExtensionsExtensionIdRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdExtensionsRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersCountRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersDirectoryObjectIdGraphApplicationRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersDirectoryObjectIdGraphDeviceRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersDirectoryObjectIdGraphGroupRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersDirectoryObjectIdGraphOrgContactRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersDirectoryObjectIdGraphServicePrincipalRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersDirectoryObjectIdGraphUserRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphApplicationCountRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphApplicationRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphDeviceCountRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphDeviceRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphGroupCountRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphGroupRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphOrgContactCountRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphOrgContactRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphServicePrincipalCountRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphServicePrincipalRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphUserCountRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphUserRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersRefRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdScopedRoleMembersCountRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdScopedRoleMembersRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdScopedRoleMembersScopedRoleMembershipIdRoute,
  getDirectoryAdministrativeUnitsCountRoute,
  getDirectoryAdministrativeUnitsDeltaRoute,
  getDirectoryAdministrativeUnitsRoute,
  patchDirectoryAdministrativeUnitsAdministrativeUnitIdExtensionsExtensionIdRoute,
  patchDirectoryAdministrativeUnitsAdministrativeUnitIdRoute,
  patchDirectoryAdministrativeUnitsAdministrativeUnitIdScopedRoleMembersScopedRoleMembershipIdRoute,
  postDirectoryAdministrativeUnitsAdministrativeUnitIdExtensionsRoute,
  postDirectoryAdministrativeUnitsAdministrativeUnitIdMembersRefRoute,
  postDirectoryAdministrativeUnitsAdministrativeUnitIdMembersRoute,
  postDirectoryAdministrativeUnitsAdministrativeUnitIdScopedRoleMembersRoute,
  postDirectoryAdministrativeUnitsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const directoryAdministrativeUnitHandler = app
  .openapi(getDirectoryAdministrativeUnitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryAdministrativeUnitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryAdministrativeUnitsAdministrativeUnitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDirectoryAdministrativeUnitsAdministrativeUnitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDirectoryAdministrativeUnitsAdministrativeUnitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryAdministrativeUnitsAdministrativeUnitIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryAdministrativeUnitsAdministrativeUnitIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryAdministrativeUnitsAdministrativeUnitIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDirectoryAdministrativeUnitsAdministrativeUnitIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteDirectoryAdministrativeUnitsAdministrativeUnitIdExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDirectoryAdministrativeUnitsAdministrativeUnitIdExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryAdministrativeUnitsAdministrativeUnitIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteDirectoryAdministrativeUnitsAdministrativeUnitIdMembersDirectoryObjectIdRefRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersDirectoryObjectIdGraphApplicationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersDirectoryObjectIdGraphDeviceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersDirectoryObjectIdGraphGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersDirectoryObjectIdGraphOrgContactRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersDirectoryObjectIdGraphServicePrincipalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersDirectoryObjectIdGraphUserRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryAdministrativeUnitsAdministrativeUnitIdMembersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDirectoryAdministrativeUnitsAdministrativeUnitIdMembersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphApplicationCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphDeviceCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphGroupCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphOrgContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphOrgContactCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphServicePrincipalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphServicePrincipalCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersGraphUserCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryAdministrativeUnitsAdministrativeUnitIdScopedRoleMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryAdministrativeUnitsAdministrativeUnitIdScopedRoleMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDirectoryAdministrativeUnitsAdministrativeUnitIdScopedRoleMembersScopedRoleMembershipIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDirectoryAdministrativeUnitsAdministrativeUnitIdScopedRoleMembersScopedRoleMembershipIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDirectoryAdministrativeUnitsAdministrativeUnitIdScopedRoleMembersScopedRoleMembershipIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDirectoryAdministrativeUnitsAdministrativeUnitIdScopedRoleMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryAdministrativeUnitsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryAdministrativeUnitsDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
