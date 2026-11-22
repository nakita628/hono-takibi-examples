import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdLicenseDetailsLicenseDetailsIdRoute,
  getUsersUserIdLicenseDetailsLicenseDetailsIdRoute,
  getUsersUserIdLicenseDetailsRoute,
  patchUsersUserIdLicenseDetailsLicenseDetailsIdRoute,
  postUsersUserIdLicenseDetailsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersLicenseDetailsHandler = app
  .openapi(getUsersUserIdLicenseDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdLicenseDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdLicenseDetailsLicenseDetailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdLicenseDetailsLicenseDetailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdLicenseDetailsLicenseDetailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
