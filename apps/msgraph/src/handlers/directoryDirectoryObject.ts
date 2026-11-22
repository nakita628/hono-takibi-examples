import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDirectoryDeletedItemsDirectoryObjectIdRoute,
  getDirectoryDeletedItemsCountRoute,
  getDirectoryDeletedItemsDirectoryObjectIdGraphAdministrativeUnitRoute,
  getDirectoryDeletedItemsDirectoryObjectIdGraphApplicationRoute,
  getDirectoryDeletedItemsDirectoryObjectIdGraphDeviceRoute,
  getDirectoryDeletedItemsDirectoryObjectIdGraphGroupRoute,
  getDirectoryDeletedItemsDirectoryObjectIdGraphServicePrincipalRoute,
  getDirectoryDeletedItemsDirectoryObjectIdGraphUserRoute,
  getDirectoryDeletedItemsDirectoryObjectIdRoute,
  getDirectoryDeletedItemsGraphAdministrativeUnitCountRoute,
  getDirectoryDeletedItemsGraphAdministrativeUnitRoute,
  getDirectoryDeletedItemsGraphApplicationCountRoute,
  getDirectoryDeletedItemsGraphApplicationRoute,
  getDirectoryDeletedItemsGraphDeviceCountRoute,
  getDirectoryDeletedItemsGraphDeviceRoute,
  getDirectoryDeletedItemsGraphGroupCountRoute,
  getDirectoryDeletedItemsGraphGroupRoute,
  getDirectoryDeletedItemsGraphServicePrincipalCountRoute,
  getDirectoryDeletedItemsGraphServicePrincipalRoute,
  getDirectoryDeletedItemsGraphUserCountRoute,
  getDirectoryDeletedItemsGraphUserRoute,
  getDirectoryDeletedItemsRoute,
  postDirectoryDeletedItemsDirectoryObjectIdCheckMemberGroupsRoute,
  postDirectoryDeletedItemsDirectoryObjectIdCheckMemberObjectsRoute,
  postDirectoryDeletedItemsDirectoryObjectIdGetMemberGroupsRoute,
  postDirectoryDeletedItemsDirectoryObjectIdGetMemberObjectsRoute,
  postDirectoryDeletedItemsDirectoryObjectIdRestoreRoute,
  postDirectoryDeletedItemsGetAvailableExtensionPropertiesRoute,
  postDirectoryDeletedItemsGetByIdsRoute,
  postDirectoryDeletedItemsValidatePropertiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const directoryDirectoryObjectHandler = app
  .openapi(getDirectoryDeletedItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryDeletedItemsDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDirectoryDeletedItemsDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryDeletedItemsDirectoryObjectIdGraphAdministrativeUnitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryDeletedItemsDirectoryObjectIdGraphApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryDeletedItemsDirectoryObjectIdCheckMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryDeletedItemsDirectoryObjectIdCheckMemberObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryDeletedItemsDirectoryObjectIdGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryDeletedItemsDirectoryObjectIdGetMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryDeletedItemsDirectoryObjectIdGetMemberObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryDeletedItemsDirectoryObjectIdGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryDeletedItemsDirectoryObjectIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryDeletedItemsDirectoryObjectIdGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryDeletedItemsDirectoryObjectIdGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryDeletedItemsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryDeletedItemsGraphAdministrativeUnitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryDeletedItemsGraphAdministrativeUnitCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryDeletedItemsGraphApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryDeletedItemsGraphApplicationCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryDeletedItemsGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryDeletedItemsGraphDeviceCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryDeletedItemsGetAvailableExtensionPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryDeletedItemsGetByIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryDeletedItemsGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryDeletedItemsGraphGroupCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryDeletedItemsGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryDeletedItemsGraphServicePrincipalCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryDeletedItemsGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryDeletedItemsGraphUserCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryDeletedItemsValidatePropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
