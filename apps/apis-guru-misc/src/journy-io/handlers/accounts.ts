import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsRoute,
  postAccountsUpsertRoute,
  postAccountsUsersAddRoute,
  postAccountsUsersRemoveRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(deleteAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsUsersAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsUsersRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
