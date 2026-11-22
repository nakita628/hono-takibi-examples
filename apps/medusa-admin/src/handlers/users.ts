import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminUsersIdRolesRoleIdRoute,
  deleteAdminUsersIdRolesRoute,
  deleteAdminUsersIdRoute,
  getAdminUsersIdAuthProvidersRoute,
  getAdminUsersIdRolesRoute,
  getAdminUsersIdRoute,
  getAdminUsersMeRoute,
  getAdminUsersRoute,
  postAdminUsersIdResetPasswordRoute,
  postAdminUsersIdRolesRoute,
  postAdminUsersIdRoute,
  postAdminUsersMeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getAdminUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminUsersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminUsersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminUsersIdAuthProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminUsersIdResetPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminUsersIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminUsersIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminUsersIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminUsersIdRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
