import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2SessionsSessionIdRoute, postV2SessionsRoute } from '../routes'

const app = new OpenAPIHono()

export const checkoutSessionsAPIHandler = app
  .openapi(postV2SessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SessionsSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
