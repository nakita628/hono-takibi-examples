import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBillingEntitiesCodeRoute,
  getBillingEntitiesRoute,
  postBillingEntitiesRoute,
  putBillingEntitiesCodeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const billingEntitiesHandler = app
  .openapi(getBillingEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBillingEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBillingEntitiesCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBillingEntitiesCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
