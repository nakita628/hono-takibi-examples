import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAppidAppIdRecipeSessionDataRoute,
  getAppidAppIdRecipeSessionRoute,
  getAppidAppIdTenantIdRecipeJwtDataRoute,
  getAppidAppIdTenantIdRecipeSessionUserRoute,
  postAppidAppIdRecipeSessionRefreshRoute,
  postAppidAppIdRecipeSessionRegenerateRoute,
  postAppidAppIdRecipeSessionVerifyRoute,
  postAppidAppIdTenantIdRecipeSessionRemoveRoute,
  postAppidAppIdTenantIdRecipeSessionRoute,
  putAppidAppIdRecipeSessionDataRoute,
  putAppidAppIdTenantIdRecipeJwtDataRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sessionRecipeHandler = app
  .openapi(postAppidAppIdTenantIdRecipeSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdRecipeSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdTenantIdRecipeSessionRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdRecipeSessionVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdRecipeSessionRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdTenantIdRecipeSessionUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdRecipeSessionRegenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdRecipeSessionDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppidAppIdRecipeSessionDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdTenantIdRecipeJwtDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppidAppIdTenantIdRecipeJwtDataRoute, (c) => {
    throw new Error('Not implemented')
  })
