import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdSlurperJobsJobIdRoute,
  getAccountsAccountIdSlurperJobsJobIdLogsRoute,
  getAccountsAccountIdSlurperJobsJobIdProgressRoute,
  getAccountsAccountIdSlurperJobsJobIdRoute,
  getAccountsAccountIdSlurperJobsRoute,
  postAccountsAccountIdSlurperJobsRoute,
  putAccountsAccountIdSlurperJobsAbortAllRoute,
  putAccountsAccountIdSlurperJobsJobIdAbortRoute,
  putAccountsAccountIdSlurperJobsJobIdPauseRoute,
  putAccountsAccountIdSlurperJobsJobIdResumeRoute,
  putAccountsAccountIdSlurperSourceConnectivityPrecheckRoute,
  putAccountsAccountIdSlurperTargetConnectivityPrecheckRoute,
} from '../routes'

const app = new OpenAPIHono()

export const r2SuperSlurperHandler = app
  .openapi(getAccountsAccountIdSlurperJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdSlurperJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdSlurperJobsAbortAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdSlurperJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdSlurperJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdSlurperJobsJobIdAbortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdSlurperJobsJobIdLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdSlurperJobsJobIdPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdSlurperJobsJobIdProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdSlurperJobsJobIdResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdSlurperSourceConnectivityPrecheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdSlurperTargetConnectivityPrecheckRoute, (c) => {
    throw new Error('Not implemented')
  })
