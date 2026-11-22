import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDirectoryAdministrativeUnitsAdministrativeUnitIdExtensionsCountRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersCountRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersMicrosoftGraphApplicationCountRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersMicrosoftGraphDeviceCountRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersMicrosoftGraphGroupCountRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersMicrosoftGraphOrgContactCountRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersMicrosoftGraphServicePrincipalCountRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersMicrosoftGraphUserCountRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdScopedRoleMembersCountRoute,
  getDirectoryAdministrativeUnitsCountRoute,
  getDirectoryDeletedItemsCountRoute,
  getDirectoryDeletedItemsMicrosoftGraphApplicationCountRoute,
  getDirectoryDeletedItemsMicrosoftGraphGroupCountRoute,
  getDirectoryDeletedItemsMicrosoftGraphUserCountRoute,
  getDirectoryFederationConfigurationsCountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const directoryHandler = app
  .openapi(getDirectoryAdministrativeUnitsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryAdministrativeUnitsAdministrativeUnitIdExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersMicrosoftGraphApplicationCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersMicrosoftGraphDeviceCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersMicrosoftGraphGroupCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersMicrosoftGraphOrgContactCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersMicrosoftGraphServicePrincipalCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersMicrosoftGraphUserCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDirectoryAdministrativeUnitsAdministrativeUnitIdScopedRoleMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryDeletedItemsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryDeletedItemsMicrosoftGraphApplicationCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryDeletedItemsMicrosoftGraphGroupCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryDeletedItemsMicrosoftGraphUserCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryFederationConfigurationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
