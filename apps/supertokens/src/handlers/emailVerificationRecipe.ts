import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAppidAppIdRecipeUserEmailVerifyRoute,
  postAppidAppIdRecipeUserEmailVerifyRemoveRoute,
  postAppidAppIdTenantIdRecipeUserEmailVerifyRoute,
  postAppidAppIdTenantIdRecipeUserEmailVerifyTokenRemoveRoute,
  postAppidAppIdTenantIdRecipeUserEmailVerifyTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const emailVerificationRecipeHandler = app
  .openapi(postAppidAppIdTenantIdRecipeUserEmailVerifyTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdTenantIdRecipeUserEmailVerifyTokenRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdTenantIdRecipeUserEmailVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdRecipeUserEmailVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdRecipeUserEmailVerifyRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
