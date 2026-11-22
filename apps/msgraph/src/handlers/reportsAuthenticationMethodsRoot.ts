import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteReportsAuthenticationMethodsRoute,
  deleteReportsAuthenticationMethodsUserRegistrationDetailsUserRegistrationDetailsIdRoute,
  getReportsAuthenticationMethodsRoute,
  getReportsAuthenticationMethodsUserRegistrationDetailsCountRoute,
  getReportsAuthenticationMethodsUserRegistrationDetailsRoute,
  getReportsAuthenticationMethodsUserRegistrationDetailsUserRegistrationDetailsIdRoute,
  getReportsAuthenticationMethodsUsersRegisteredByFeatureIncludedUserTypesIncludedUserTypesIncludedUserRolesIncludedUserRolesRoute,
  getReportsAuthenticationMethodsUsersRegisteredByFeatureRoute,
  getReportsAuthenticationMethodsUsersRegisteredByMethodIncludedUserTypesIncludedUserTypesIncludedUserRolesIncludedUserRolesRoute,
  getReportsAuthenticationMethodsUsersRegisteredByMethodRoute,
  patchReportsAuthenticationMethodsRoute,
  patchReportsAuthenticationMethodsUserRegistrationDetailsUserRegistrationDetailsIdRoute,
  postReportsAuthenticationMethodsUserRegistrationDetailsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reportsAuthenticationMethodsRootHandler = app
  .openapi(getReportsAuthenticationMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReportsAuthenticationMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReportsAuthenticationMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsAuthenticationMethodsUsersRegisteredByFeatureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getReportsAuthenticationMethodsUsersRegisteredByFeatureIncludedUserTypesIncludedUserTypesIncludedUserRolesIncludedUserRolesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getReportsAuthenticationMethodsUsersRegisteredByMethodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getReportsAuthenticationMethodsUsersRegisteredByMethodIncludedUserTypesIncludedUserTypesIncludedUserRolesIncludedUserRolesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getReportsAuthenticationMethodsUserRegistrationDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReportsAuthenticationMethodsUserRegistrationDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getReportsAuthenticationMethodsUserRegistrationDetailsUserRegistrationDetailsIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchReportsAuthenticationMethodsUserRegistrationDetailsUserRegistrationDetailsIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteReportsAuthenticationMethodsUserRegistrationDetailsUserRegistrationDetailsIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getReportsAuthenticationMethodsUserRegistrationDetailsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
