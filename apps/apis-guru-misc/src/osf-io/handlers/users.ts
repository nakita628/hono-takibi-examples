import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUsersIndexRoute,
  getUsersUserIdAddonsIndexRoute,
  getUsersUserIdAddonsProviderAccountsAccountIdIndexRoute,
  getUsersUserIdAddonsProviderAccountsIndexRoute,
  getUsersUserIdAddonsProviderIndexRoute,
  getUsersUserIdIndexRoute,
  getUsersUserIdInstitutionsIndexRoute,
  getUsersUserIdNodesIndexRoute,
  getUsersUserIdPreprintsIndexRoute,
  getUsersUserIdRegistrationsIndexRoute,
  patchUsersUserIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getUsersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAddonsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAddonsProviderIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAddonsProviderAccountsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAddonsProviderAccountsAccountIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdInstitutionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdNodesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPreprintsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdRegistrationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
