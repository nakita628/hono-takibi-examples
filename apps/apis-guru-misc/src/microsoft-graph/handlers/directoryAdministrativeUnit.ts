import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDirectoryAdministrativeUnitsAdministrativeUnitIdExtensionsExtensionIdRoute,
  deleteDirectoryAdministrativeUnitsAdministrativeUnitIdMembersDirectoryObjectIdRefRoute,
  deleteDirectoryAdministrativeUnitsAdministrativeUnitIdRoute,
  deleteDirectoryAdministrativeUnitsAdministrativeUnitIdScopedRoleMembersScopedRoleMembershipIdRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdExtensionsExtensionIdRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdExtensionsRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersRefRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdScopedRoleMembersRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdScopedRoleMembersScopedRoleMembershipIdRoute,
  getDirectoryAdministrativeUnitsRoute,
  patchDirectoryAdministrativeUnitsAdministrativeUnitIdExtensionsExtensionIdRoute,
  patchDirectoryAdministrativeUnitsAdministrativeUnitIdRoute,
  patchDirectoryAdministrativeUnitsAdministrativeUnitIdScopedRoleMembersScopedRoleMembershipIdRoute,
  postDirectoryAdministrativeUnitsAdministrativeUnitIdExtensionsRoute,
  postDirectoryAdministrativeUnitsAdministrativeUnitIdMembersRefRoute,
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
  .openapi(deleteDirectoryAdministrativeUnitsAdministrativeUnitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryAdministrativeUnitsAdministrativeUnitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDirectoryAdministrativeUnitsAdministrativeUnitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryAdministrativeUnitsAdministrativeUnitIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryAdministrativeUnitsAdministrativeUnitIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteDirectoryAdministrativeUnitsAdministrativeUnitIdExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDirectoryAdministrativeUnitsAdministrativeUnitIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDirectoryAdministrativeUnitsAdministrativeUnitIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryAdministrativeUnitsAdministrativeUnitIdMembersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteDirectoryAdministrativeUnitsAdministrativeUnitIdMembersDirectoryObjectIdRefRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDirectoryAdministrativeUnitsAdministrativeUnitIdScopedRoleMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryAdministrativeUnitsAdministrativeUnitIdScopedRoleMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteDirectoryAdministrativeUnitsAdministrativeUnitIdScopedRoleMembersScopedRoleMembershipIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
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
