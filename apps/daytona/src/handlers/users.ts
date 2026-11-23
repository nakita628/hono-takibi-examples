import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersLinkedAccountsProviderProviderUserIdRoute,
  getUsersAccountProvidersRoute,
  getUsersMeRoute,
  postUsersLinkedAccountsRoute,
  postUsersMfaSmsEnrollRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getUsersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersAccountProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersLinkedAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersLinkedAccountsProviderProviderUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersMfaSmsEnrollRoute, (c) => {
    throw new Error('Not implemented')
  })
