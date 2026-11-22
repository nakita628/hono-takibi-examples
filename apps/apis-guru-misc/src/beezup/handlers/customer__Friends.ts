import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2UserCustomerFriendsUserIdRoute } from '../routes'

const app = new OpenAPIHono()

export const customer__FriendsHandler = app.openapi(getV2UserCustomerFriendsUserIdRoute, (c) => {
  throw new Error('Not implemented')
})
