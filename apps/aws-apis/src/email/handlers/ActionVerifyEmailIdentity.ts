import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionVerifyEmailIdentityRoute, postActionVerifyEmailIdentityRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionVerifyEmailIdentityHandler = app
  .openapi(getActionVerifyEmailIdentityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionVerifyEmailIdentityRoute, (c) => {
    throw new Error('Not implemented')
  })
