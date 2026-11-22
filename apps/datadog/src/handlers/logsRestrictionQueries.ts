import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2LogsConfigRestrictionQueriesRestrictionQueryIdRolesRoute,
  deleteApiV2LogsConfigRestrictionQueriesRestrictionQueryIdRoute,
  getApiV2LogsConfigRestrictionQueriesRestrictionQueryIdRolesRoute,
  getApiV2LogsConfigRestrictionQueriesRestrictionQueryIdRoute,
  getApiV2LogsConfigRestrictionQueriesRoleRoleIdRoute,
  getApiV2LogsConfigRestrictionQueriesRoute,
  getApiV2LogsConfigRestrictionQueriesUserUserIdRoute,
  patchApiV2LogsConfigRestrictionQueriesRestrictionQueryIdRoute,
  postApiV2LogsConfigRestrictionQueriesRestrictionQueryIdRolesRoute,
  postApiV2LogsConfigRestrictionQueriesRoute,
  putApiV2LogsConfigRestrictionQueriesRestrictionQueryIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const logsRestrictionQueriesHandler = app
  .openapi(getApiV2LogsConfigRestrictionQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2LogsConfigRestrictionQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LogsConfigRestrictionQueriesRoleRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LogsConfigRestrictionQueriesUserUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2LogsConfigRestrictionQueriesRestrictionQueryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LogsConfigRestrictionQueriesRestrictionQueryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2LogsConfigRestrictionQueriesRestrictionQueryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2LogsConfigRestrictionQueriesRestrictionQueryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2LogsConfigRestrictionQueriesRestrictionQueryIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LogsConfigRestrictionQueriesRestrictionQueryIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2LogsConfigRestrictionQueriesRestrictionQueryIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
