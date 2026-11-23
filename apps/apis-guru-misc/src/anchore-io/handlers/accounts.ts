import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountnameRoute,
  deleteAccountsAccountnameUsersUsernameCredentialsRoute,
  deleteAccountsAccountnameUsersUsernameRoute,
  getAccountsAccountnameRoute,
  getAccountsAccountnameUsersRoute,
  getAccountsAccountnameUsersUsernameCredentialsRoute,
  getAccountsAccountnameUsersUsernameRoute,
  getAccountsRoute,
  postAccountsAccountnameUsersRoute,
  postAccountsAccountnameUsersUsernameCredentialsRoute,
  postAccountsRoute,
  putAccountsAccountnameStateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(getAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountnameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountnameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountnameStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountnameUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountnameUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountnameUsersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountnameUsersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountnameUsersUsernameCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountnameUsersUsernameCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountnameUsersUsernameCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
