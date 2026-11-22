import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRealmRolesByIdRoleIdCompositesRoute,
  deleteRealmRolesByIdRoleIdRoute,
  getRealmRolesByIdRoleIdCompositesClientsClientRoute,
  getRealmRolesByIdRoleIdCompositesRealmRoute,
  getRealmRolesByIdRoleIdCompositesRoute,
  getRealmRolesByIdRoleIdManagementPermissionsRoute,
  getRealmRolesByIdRoleIdRoute,
  postRealmRolesByIdRoleIdCompositesRoute,
  putRealmRolesByIdRoleIdManagementPermissionsRoute,
  putRealmRolesByIdRoleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rolesByIDHandler = app
  .openapi(deleteRealmRolesByIdRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmRolesByIdRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmRolesByIdRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmRolesByIdRoleIdCompositesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmRolesByIdRoleIdCompositesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmRolesByIdRoleIdCompositesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmRolesByIdRoleIdCompositesClientsClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmRolesByIdRoleIdCompositesRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmRolesByIdRoleIdManagementPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmRolesByIdRoleIdManagementPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
