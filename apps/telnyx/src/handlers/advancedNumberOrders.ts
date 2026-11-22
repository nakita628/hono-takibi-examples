import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdvancedOrdersOrderIdRoute,
  getAdvancedOrdersRoute,
  patchAdvancedOrdersAdvancedOrderIdRequirementGroupRoute,
  postAdvancedOrdersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const advancedNumberOrdersHandler = app
  .openapi(getAdvancedOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdvancedOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdvancedOrdersAdvancedOrderIdRequirementGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdvancedOrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
