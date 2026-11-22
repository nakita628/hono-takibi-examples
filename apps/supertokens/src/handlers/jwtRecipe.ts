import { OpenAPIHono } from '@hono/zod-openapi'
import { getAppidAppIdRecipeJwtJwksRoute, postAppidAppIdRecipeJwtRoute } from '../routes'

const app = new OpenAPIHono()

export const jwtRecipeHandler = app
  .openapi(postAppidAppIdRecipeJwtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdRecipeJwtJwksRoute, (c) => {
    throw new Error('Not implemented')
  })
