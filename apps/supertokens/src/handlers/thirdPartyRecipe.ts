import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAppidAppIdTenantIdRecipeUser3Route,
  getAppidAppIdTenantIdRecipeUsersByEmailRoute,
  postAppidAppIdTenantIdRecipeSigninupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const thirdPartyRecipeHandler = app
  .openapi(postAppidAppIdTenantIdRecipeSigninupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdTenantIdRecipeUser3Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdTenantIdRecipeUsersByEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
