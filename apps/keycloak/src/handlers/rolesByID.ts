import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminRealmsRealmRolesByIdRoleIdCompositesRoute,
  deleteAdminRealmsRealmRolesByIdRoleIdRoute,
  getAdminRealmsRealmRolesByIdRoleIdCompositesClientsClientUuidRoute,
  getAdminRealmsRealmRolesByIdRoleIdCompositesRealmRoute,
  getAdminRealmsRealmRolesByIdRoleIdCompositesRoute,
  getAdminRealmsRealmRolesByIdRoleIdManagementPermissionsRoute,
  getAdminRealmsRealmRolesByIdRoleIdRoute,
  postAdminRealmsRealmRolesByIdRoleIdCompositesRoute,
  putAdminRealmsRealmRolesByIdRoleIdManagementPermissionsRoute,
  putAdminRealmsRealmRolesByIdRoleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rolesByIDHandler = app
  .openapi(getAdminRealmsRealmRolesByIdRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmRolesByIdRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmRolesByIdRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmRolesByIdRoleIdCompositesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmRolesByIdRoleIdCompositesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmRolesByIdRoleIdCompositesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmRolesByIdRoleIdCompositesClientsClientUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmRolesByIdRoleIdCompositesRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmRolesByIdRoleIdManagementPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmRolesByIdRoleIdManagementPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
