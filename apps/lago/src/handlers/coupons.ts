import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCouponsCodeRoute,
  getCouponsCodeRoute,
  getCouponsRoute,
  postCouponsRoute,
  putCouponsCodeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const couponsHandler = app
  .openapi(postCouponsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCouponsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCouponsCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCouponsCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCouponsCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
