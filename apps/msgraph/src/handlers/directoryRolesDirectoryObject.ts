import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDirectoryRolesDirectoryRoleIdMembersDirectoryObjectIdRefRoute,
  deleteDirectoryRolesDirectoryRoleIdMembersRefRoute,
  getDirectoryRolesDirectoryRoleIdMembersCountRoute,
  getDirectoryRolesDirectoryRoleIdMembersDirectoryObjectIdGraphApplicationRoute,
  getDirectoryRolesDirectoryRoleIdMembersDirectoryObjectIdGraphDeviceRoute,
  getDirectoryRolesDirectoryRoleIdMembersDirectoryObjectIdGraphGroupRoute,
  getDirectoryRolesDirectoryRoleIdMembersDirectoryObjectIdGraphOrgContactRoute,
  getDirectoryRolesDirectoryRoleIdMembersDirectoryObjectIdGraphServicePrincipalRoute,
  getDirectoryRolesDirectoryRoleIdMembersDirectoryObjectIdGraphUserRoute,
  getDirectoryRolesDirectoryRoleIdMembersGraphApplicationCountRoute,
  getDirectoryRolesDirectoryRoleIdMembersGraphApplicationRoute,
  getDirectoryRolesDirectoryRoleIdMembersGraphDeviceCountRoute,
  getDirectoryRolesDirectoryRoleIdMembersGraphDeviceRoute,
  getDirectoryRolesDirectoryRoleIdMembersGraphGroupCountRoute,
  getDirectoryRolesDirectoryRoleIdMembersGraphGroupRoute,
  getDirectoryRolesDirectoryRoleIdMembersGraphOrgContactCountRoute,
  getDirectoryRolesDirectoryRoleIdMembersGraphOrgContactRoute,
  getDirectoryRolesDirectoryRoleIdMembersGraphServicePrincipalCountRoute,
  getDirectoryRolesDirectoryRoleIdMembersGraphServicePrincipalRoute,
  getDirectoryRolesDirectoryRoleIdMembersGraphUserCountRoute,
  getDirectoryRolesDirectoryRoleIdMembersGraphUserRoute,
  getDirectoryRolesDirectoryRoleIdMembersRefRoute,
  getDirectoryRolesDirectoryRoleIdMembersRoute,
  postDirectoryRolesDirectoryRoleIdMembersRefRoute,
} from '../routes'

const app = new OpenAPIHono()

export const directoryRolesDirectoryObjectHandler = app
  .openapi(getDirectoryRolesDirectoryRoleIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDirectoryRolesDirectoryRoleIdMembersDirectoryObjectIdRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryRolesDirectoryRoleIdMembersDirectoryObjectIdGraphApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryRolesDirectoryRoleIdMembersDirectoryObjectIdGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryRolesDirectoryRoleIdMembersDirectoryObjectIdGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryRolesDirectoryRoleIdMembersDirectoryObjectIdGraphOrgContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDirectoryRolesDirectoryRoleIdMembersDirectoryObjectIdGraphServicePrincipalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDirectoryRolesDirectoryRoleIdMembersDirectoryObjectIdGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryRolesDirectoryRoleIdMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryRolesDirectoryRoleIdMembersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryRolesDirectoryRoleIdMembersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDirectoryRolesDirectoryRoleIdMembersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryRolesDirectoryRoleIdMembersGraphApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryRolesDirectoryRoleIdMembersGraphApplicationCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryRolesDirectoryRoleIdMembersGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryRolesDirectoryRoleIdMembersGraphDeviceCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryRolesDirectoryRoleIdMembersGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryRolesDirectoryRoleIdMembersGraphGroupCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryRolesDirectoryRoleIdMembersGraphOrgContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryRolesDirectoryRoleIdMembersGraphOrgContactCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryRolesDirectoryRoleIdMembersGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryRolesDirectoryRoleIdMembersGraphServicePrincipalCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryRolesDirectoryRoleIdMembersGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryRolesDirectoryRoleIdMembersGraphUserCountRoute, (c) => {
    throw new Error('Not implemented')
  })
