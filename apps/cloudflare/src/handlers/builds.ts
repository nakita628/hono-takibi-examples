import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdBuildsBuildsBuildUuidLogsRoute,
  getAccountsAccountIdBuildsBuildsBuildUuidRoute,
  getAccountsAccountIdBuildsBuildsLatestRoute,
  getAccountsAccountIdBuildsBuildsRoute,
  putAccountsAccountIdBuildsBuildsBuildUuidCancelRoute,
} from '../routes'

const app = new OpenAPIHono()

export const buildsHandler = app
  .openapi(getAccountsAccountIdBuildsBuildsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdBuildsBuildsLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdBuildsBuildsBuildUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdBuildsBuildsBuildUuidCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdBuildsBuildsBuildUuidLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
