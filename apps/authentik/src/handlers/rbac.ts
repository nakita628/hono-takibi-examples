import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRbacCustomPermissionsIdIndexRoute,
  deleteRbacInitialPermissionsIdIndexRoute,
  deleteRbacPermissionChecksCheckUuidIndexRoute,
  deleteRbacRolesUuidIndexRoute,
  getRbacCustomPermissionsIdIndexRoute,
  getRbacCustomPermissionsIndexRoute,
  getRbacEndpointsIndexRoute,
  getRbacInitialPermissionsIdIndexRoute,
  getRbacInitialPermissionsIdUsedByIndexRoute,
  getRbacInitialPermissionsIndexRoute,
  getRbacPermissionChecksCheckUuidIndexRoute,
  getRbacPermissionChecksCheckUuidUsedByIndexRoute,
  getRbacPermissionChecksIndexRoute,
  getRbacPermissionsAssignedByRolesIndexRoute,
  getRbacPermissionsIdIndexRoute,
  getRbacPermissionsIndexRoute,
  getRbacPermissionsRolesIndexRoute,
  getRbacRolesIndexRoute,
  getRbacRolesUuidIndexRoute,
  getRbacRolesUuidUsedByIndexRoute,
  patchRbacCustomPermissionsIdIndexRoute,
  patchRbacInitialPermissionsIdIndexRoute,
  patchRbacPermissionChecksCheckUuidIndexRoute,
  patchRbacPermissionsAssignedByRolesUuidUnassignIndexRoute,
  patchRbacRolesUuidIndexRoute,
  postRbacCustomPermissionsIndexRoute,
  postRbacInitialPermissionsIndexRoute,
  postRbacPermissionChecksIndexRoute,
  postRbacPermissionsAssignedByRolesUuidAssignIndexRoute,
  postRbacRolesIndexRoute,
  postRbacRolesUuidAddUserIndexRoute,
  postRbacRolesUuidRemoveUserIndexRoute,
  putRbacCustomPermissionsIdIndexRoute,
  putRbacInitialPermissionsIdIndexRoute,
  putRbacPermissionChecksCheckUuidIndexRoute,
  putRbacRolesUuidIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rbacHandler = app
  .openapi(getRbacCustomPermissionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRbacCustomPermissionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRbacCustomPermissionsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRbacCustomPermissionsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRbacCustomPermissionsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRbacCustomPermissionsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRbacEndpointsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRbacInitialPermissionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRbacInitialPermissionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRbacInitialPermissionsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRbacInitialPermissionsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRbacInitialPermissionsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRbacInitialPermissionsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRbacInitialPermissionsIdUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRbacPermissionChecksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRbacPermissionChecksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRbacPermissionChecksCheckUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRbacPermissionChecksCheckUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRbacPermissionChecksCheckUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRbacPermissionChecksCheckUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRbacPermissionChecksCheckUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRbacPermissionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRbacPermissionsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRbacPermissionsAssignedByRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRbacPermissionsAssignedByRolesUuidAssignIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRbacPermissionsAssignedByRolesUuidUnassignIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRbacPermissionsRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRbacRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRbacRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRbacRolesUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRbacRolesUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRbacRolesUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRbacRolesUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRbacRolesUuidAddUserIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRbacRolesUuidRemoveUserIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRbacRolesUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
