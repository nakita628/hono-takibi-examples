import { OpenAPIHono } from '@hono/zod-openapi'
import { getAppliedCouponsRoute, postAppliedCouponsRoute } from '../routes'

const app = new OpenAPIHono()

export const appliedCouponsHandler = app
  .openapi(postAppliedCouponsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppliedCouponsRoute, (c) => {
    throw new Error('Not implemented')
  })
