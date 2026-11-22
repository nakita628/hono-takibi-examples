import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminDirectoryV1CustomerCustomerRolesRoleIdRoute,
  getAdminDirectoryV1CustomerCustomerRolesRoleIdRoute,
  getAdminDirectoryV1CustomerCustomerRolesRoute,
  patchAdminDirectoryV1CustomerCustomerRolesRoleIdRoute,
  postAdminDirectoryV1CustomerCustomerRolesRoute,
  putAdminDirectoryV1CustomerCustomerRolesRoleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rolesHandler = app
  .openapi(getAdminDirectoryV1CustomerCustomerRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1CustomerCustomerRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminDirectoryV1CustomerCustomerRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1CustomerCustomerRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminDirectoryV1CustomerCustomerRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminDirectoryV1CustomerCustomerRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
