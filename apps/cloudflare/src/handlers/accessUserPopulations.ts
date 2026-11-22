import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdAccessUserPopulationsUserPopulationIdRoute,
  getAccountsAccountIdAccessUserPopulationsRoute,
  getAccountsAccountIdAccessUserPopulationsUserPopulationIdRoute,
  postAccountsAccountIdAccessUserPopulationsRoute,
  putAccountsAccountIdAccessUserPopulationsUserPopulationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accessUserPopulationsHandler = app
  .openapi(getAccountsAccountIdAccessUserPopulationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAccessUserPopulationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdAccessUserPopulationsUserPopulationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAccessUserPopulationsUserPopulationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdAccessUserPopulationsUserPopulationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
