import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDiscountGroupsDiscountGroupIdRoute,
  getDiscountGroupsRoute,
  patchDiscountGroupsDiscountGroupIdRoute,
  postDiscountGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const discountGroupsHandler = app
  .openapi(getDiscountGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDiscountGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDiscountGroupsDiscountGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDiscountGroupsDiscountGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
