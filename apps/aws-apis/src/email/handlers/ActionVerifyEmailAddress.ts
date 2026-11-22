import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionVerifyEmailAddressRoute, postActionVerifyEmailAddressRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionVerifyEmailAddressHandler = app
  .openapi(getActionVerifyEmailAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionVerifyEmailAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
