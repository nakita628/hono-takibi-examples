import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCrmObjects202609DiscountsGdprDeleteRoute,
  postCrmObjects202609DiscountsMergeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app
  .openapi(postCrmObjects202609DiscountsGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609DiscountsMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
