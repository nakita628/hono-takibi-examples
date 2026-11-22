import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdDataSecurityPostureFindingsFindingIdInstancesInstanceIdRoute,
  getAccountsAccountIdDataSecurityPostureFindingsFindingIdInstancesRoute,
  getAccountsAccountIdDataSecurityPostureFindingsFindingIdRoute,
  getAccountsAccountIdDataSecurityPostureFindingsRoute,
  postAccountsAccountIdDataSecurityPostureFindingsFindingIdInstancesArchiveRoute,
  postAccountsAccountIdDataSecurityPostureFindingsFindingIdInstancesUnarchiveRoute,
  postAccountsAccountIdDataSecurityPostureFindingsFindingIdResetFindingSeverityRoute,
  postAccountsAccountIdDataSecurityPostureFindingsFindingIdTuneFindingSeverityRoute,
  postAccountsAccountIdDataSecurityPostureFindingsIgnoreRoute,
  postAccountsAccountIdDataSecurityPostureFindingsUnignoreRoute,
} from '../routes'

const app = new OpenAPIHono()

export const findingsHandler = app
  .openapi(getAccountsAccountIdDataSecurityPostureFindingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDataSecurityPostureFindingsIgnoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDataSecurityPostureFindingsUnignoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDataSecurityPostureFindingsFindingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDataSecurityPostureFindingsFindingIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDataSecurityPostureFindingsFindingIdInstancesArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postAccountsAccountIdDataSecurityPostureFindingsFindingIdInstancesUnarchiveRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAccountsAccountIdDataSecurityPostureFindingsFindingIdInstancesInstanceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAccountsAccountIdDataSecurityPostureFindingsFindingIdResetFindingSeverityRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAccountsAccountIdDataSecurityPostureFindingsFindingIdTuneFindingSeverityRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
