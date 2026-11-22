import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAppidAppIdTenantIdRecipeUser2Route,
  postAppidAppIdTenantIdRecipeSigninRoute,
  postAppidAppIdTenantIdRecipeSignupRoute,
  postAppidAppIdTenantIdRecipeUserPasswordhashImportRoute,
  postAppidAppIdTenantIdRecipeUserPasswordResetRoute,
  postAppidAppIdTenantIdRecipeUserPasswordResetTokenConsumeRoute,
  postAppidAppIdTenantIdRecipeUserPasswordResetTokenRoute,
  putAppidAppIdTenantIdRecipeUser2Route,
} from '../routes'

const app = new OpenAPIHono()

export const emailPasswordRecipeHandler = app
  .openapi(postAppidAppIdTenantIdRecipeSigninRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdTenantIdRecipeSignupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdTenantIdRecipeUser2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppidAppIdTenantIdRecipeUser2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdTenantIdRecipeUserPasswordResetTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdTenantIdRecipeUserPasswordResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdTenantIdRecipeUserPasswordhashImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdTenantIdRecipeUserPasswordResetTokenConsumeRoute, (c) => {
    throw new Error('Not implemented')
  })
