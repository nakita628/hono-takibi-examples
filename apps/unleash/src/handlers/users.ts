import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAdminUserAdminIdRoute,
  deleteApiAdminUserAdminInactiveDeleteRoute,
  deleteApiAdminUserAdminScimUsersRoute,
  getApiAdminFlagCreatorsRoute,
  getApiAdminLicensedUsersRoute,
  getApiAdminUserAdminAccessRoute,
  getApiAdminUserAdminAdminCountRoute,
  getApiAdminUserAdminIdRoute,
  getApiAdminUserAdminInactiveRoute,
  getApiAdminUserAdminRoute,
  getApiAdminUserAdminSearchRoute,
  getApiAdminUserProfileRoute,
  getApiAdminUserRolesRoute,
  getApiAdminUserRoute,
  postApiAdminUserAdminIdChangePasswordRoute,
  postApiAdminUserAdminInactiveDeleteRoute,
  postApiAdminUserAdminResetPasswordRoute,
  postApiAdminUserAdminRoute,
  postApiAdminUserAdminValidatePasswordRoute,
  postApiAdminUserChangePasswordRoute,
  putApiAdminUserAdminIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getApiAdminLicensedUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminUserProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminUserChangePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminUserRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminUserAdminInactiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminUserAdminInactiveDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminUserAdminInactiveDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminUserAdminValidatePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminUserAdminIdChangePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminUserAdminResetPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminUserAdminRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminUserAdminRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminUserAdminSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminUserAdminAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminUserAdminAdminCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminUserAdminIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAdminUserAdminIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminUserAdminIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminUserAdminScimUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminFlagCreatorsRoute, (c) => {
    throw new Error('Not implemented')
  })
