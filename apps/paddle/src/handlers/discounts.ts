import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDiscountsDiscountIdRoute,
  getDiscountsRoute,
  patchDiscountsDiscountIdRoute,
  postDiscountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const discountsHandler = app
  .openapi(getDiscountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDiscountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDiscountsDiscountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDiscountsDiscountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
