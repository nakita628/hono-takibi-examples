import { OpenAPIHono } from '@hono/zod-openapi'
import { getPaySlipsPaySlipIDRoute, getPaySlipsRoute, putPaySlipsPaySlipIDRoute } from '../routes'

const app = new OpenAPIHono()

export const paySlipsHandler = app
  .openapi(getPaySlipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaySlipsPaySlipIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPaySlipsPaySlipIDRoute, (c) => {
    throw new Error('Not implemented')
  })
