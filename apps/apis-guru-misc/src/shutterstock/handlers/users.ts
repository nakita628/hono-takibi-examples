import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2UserAccessTokenRoute, getV2UserRoute, getV2UserSubscriptionsRoute } from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getV2UserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserAccessTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
