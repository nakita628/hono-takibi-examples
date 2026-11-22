import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdContainersApplicationsApplicationIdRoute,
  deleteAccountsAccountIdResourceLibraryApplicationsIdRoute,
  getAccountsAccountIdContainersApplicationsApplicationIdRoute,
  getAccountsAccountIdContainersApplicationsApplicationIdVersionsRoute,
  getAccountsAccountIdContainersApplicationsRoute,
  getAccountsAccountIdOneApplicationsApplicationIdAuthMethodsRoute,
  getAccountsAccountIdOneApplicationsApplicationIdRoute,
  getAccountsAccountIdOneApplicationsApplicationIdSetupFlowsRoute,
  getAccountsAccountIdOneApplicationsRoute,
  getAccountsAccountIdResourceLibraryApplicationsIdRoute,
  getAccountsAccountIdResourceLibraryApplicationsRoute,
  patchAccountsAccountIdContainersApplicationsApplicationIdRoute,
  patchAccountsAccountIdResourceLibraryApplicationsIdRoute,
  postAccountsAccountIdContainersApplicationsRoute,
  postAccountsAccountIdResourceLibraryApplicationsLookupRoute,
  postAccountsAccountIdResourceLibraryApplicationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const applicationsHandler = app
  .openapi(getAccountsAccountIdContainersApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdContainersApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdContainersApplicationsApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdContainersApplicationsApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdContainersApplicationsApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdContainersApplicationsApplicationIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdOneApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdOneApplicationsApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdOneApplicationsApplicationIdAuthMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdOneApplicationsApplicationIdSetupFlowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdResourceLibraryApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdResourceLibraryApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdResourceLibraryApplicationsLookupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdResourceLibraryApplicationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdResourceLibraryApplicationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdResourceLibraryApplicationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
