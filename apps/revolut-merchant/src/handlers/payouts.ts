import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiPayoutsPayoutIdRoute, getApiPayoutsRoute } from '../routes'

const app = new OpenAPIHono()

export const payoutsHandler = app
  .openapi(getApiPayoutsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPayoutsPayoutIdRoute, (c) => {
    throw new Error('Not implemented')
  })
