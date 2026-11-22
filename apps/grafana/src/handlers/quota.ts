import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdminUsersUserIdQuotasRoute,
  getOrgQuotasRoute,
  getOrgsOrgIdQuotasRoute,
  getUserQuotasRoute,
  putAdminUsersUserIdQuotasQuotaTargetRoute,
  putOrgsOrgIdQuotasQuotaTargetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const quotaHandler = app
  .openapi(getAdminUsersUserIdQuotasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminUsersUserIdQuotasQuotaTargetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgQuotasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgIdQuotasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgIdQuotasQuotaTargetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserQuotasRoute, (c) => {
    throw new Error('Not implemented')
  })
