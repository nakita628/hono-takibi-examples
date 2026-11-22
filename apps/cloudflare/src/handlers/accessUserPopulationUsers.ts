import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdAccessUserPopulationsUserPopulationIdUsersUserIdRoute,
  getAccountsAccountIdAccessUserPopulationsUserPopulationIdUsersRoute,
  getAccountsAccountIdAccessUserPopulationsUserPopulationIdUsersUserIdRoute,
  patchAccountsAccountIdAccessUserPopulationsUserPopulationIdUsersUserIdRoute,
  postAccountsAccountIdAccessUserPopulationsUserPopulationIdUsersRoute,
  putAccountsAccountIdAccessUserPopulationsUserPopulationIdUsersUserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accessUserPopulationUsersHandler = app
  .openapi(getAccountsAccountIdAccessUserPopulationsUserPopulationIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAccessUserPopulationsUserPopulationIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdAccessUserPopulationsUserPopulationIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAccessUserPopulationsUserPopulationIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdAccessUserPopulationsUserPopulationIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdAccessUserPopulationsUserPopulationIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
