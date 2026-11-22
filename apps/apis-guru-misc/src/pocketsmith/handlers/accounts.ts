import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsIdRoute,
  getAccountsIdRoute,
  getInstitutionsIdAccountsRoute,
  getUsersIdAccountsRoute,
  postUsersIdAccountsRoute,
  putAccountsIdRoute,
  putUsersIdAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(deleteAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstitutionsIdAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersIdAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersIdAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
