import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndexRoute,
  deleteApiV3UsersUserIdCredentialsIdIndexRoute,
  getApiV3AccountsAccountIdUsersIdIndexRoute,
  getApiV3AccountsAccountIdUsersIndexRoute,
  getApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndexRoute,
  getApiV3AccountsAccountIdUsersUserIdAccountApikeysIndexRoute,
  getApiV3UsersUserIdCredentialsIdIndexRoute,
  getApiV3UsersUserIdCredentialsIndexRoute,
  postApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndexRoute,
  postApiV3AccountsAccountIdUsersUserIdAccountApikeysIndexRoute,
  postApiV3UsersUserIdCredentialsIdIndexRoute,
  postApiV3UsersUserIdCredentialsIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getApiV3AccountsAccountIdUsersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdUsersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdUsersUserIdAccountApikeysIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdUsersUserIdAccountApikeysIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3UsersUserIdCredentialsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3UsersUserIdCredentialsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3UsersUserIdCredentialsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3UsersUserIdCredentialsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3UsersUserIdCredentialsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
