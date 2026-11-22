import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdWorkersObservabilityDestinationsSlugRoute,
  getAccountsAccountIdWorkersObservabilityDestinationsRoute,
  patchAccountsAccountIdWorkersObservabilityDestinationsSlugRoute,
  postAccountsAccountIdWorkersObservabilityDestinationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const destinationsHandler = app
  .openapi(getAccountsAccountIdWorkersObservabilityDestinationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdWorkersObservabilityDestinationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdWorkersObservabilityDestinationsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdWorkersObservabilityDestinationsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
