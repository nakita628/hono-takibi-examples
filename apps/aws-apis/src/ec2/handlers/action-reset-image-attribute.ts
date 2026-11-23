import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionResetImageAttributeRoute, postActionResetImageAttributeRoute } from '../routes'

const app = new OpenAPIHono()

export const actionResetImageAttributeHandler = app
  .openapi(getActionResetImageAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionResetImageAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
