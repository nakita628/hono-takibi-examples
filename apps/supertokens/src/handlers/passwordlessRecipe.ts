import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAppidAppIdTenantIdRecipeSigninupCodesRoute,
  getAppidAppIdTenantIdRecipeUserRoute,
  postAppidAppIdTenantIdRecipeSigninupCodeCheckRoute,
  postAppidAppIdTenantIdRecipeSigninupCodeConsumeRoute,
  postAppidAppIdTenantIdRecipeSigninupCodeRemoveRoute,
  postAppidAppIdTenantIdRecipeSigninupCodeRoute,
  postAppidAppIdTenantIdRecipeSigninupCodesRemoveRoute,
  putAppidAppIdTenantIdRecipeUserRoute,
} from '../routes'

const app = new OpenAPIHono()

export const passwordlessRecipeHandler = app
  .openapi(postAppidAppIdTenantIdRecipeSigninupCodeCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdTenantIdRecipeSigninupCodeConsumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdTenantIdRecipeSigninupCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdTenantIdRecipeSigninupCodeRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdTenantIdRecipeSigninupCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdTenantIdRecipeSigninupCodesRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdTenantIdRecipeUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppidAppIdTenantIdRecipeUserRoute, (c) => {
    throw new Error('Not implemented')
  })
