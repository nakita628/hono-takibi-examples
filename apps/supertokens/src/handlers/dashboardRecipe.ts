import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppidAppIdRecipeDashboardSessionRoute,
  deleteAppidAppIdRecipeDashboardUserRoute,
  getAppidAppIdRecipeDashboardUserSessionsRoute,
  getAppidAppIdRecipeDashboardUsersRoute,
  getAppidAppIdTenantIdRecipeDashboardTenantCoreConfigRoute,
  postAppidAppIdRecipeDashboardSessionVerifyRoute,
  postAppidAppIdRecipeDashboardSigninRoute,
  postAppidAppIdRecipeDashboardUserRoute,
  putAppidAppIdRecipeDashboardUserRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dashboardRecipeHandler = app
  .openapi(postAppidAppIdRecipeDashboardUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppidAppIdRecipeDashboardUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppidAppIdRecipeDashboardUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdRecipeDashboardUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdRecipeDashboardSessionVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppidAppIdRecipeDashboardSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdRecipeDashboardSigninRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdRecipeDashboardUserSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdTenantIdRecipeDashboardTenantCoreConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
