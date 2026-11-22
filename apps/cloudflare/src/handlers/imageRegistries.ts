import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdContainersRegistriesDomainRoute,
  getAccountsAccountIdContainersRegistriesRoute,
  postAccountsAccountIdContainersRegistriesDomainCredentialsRoute,
  postAccountsAccountIdContainersRegistriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const imageRegistriesHandler = app
  .openapi(getAccountsAccountIdContainersRegistriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdContainersRegistriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdContainersRegistriesDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdContainersRegistriesDomainCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
