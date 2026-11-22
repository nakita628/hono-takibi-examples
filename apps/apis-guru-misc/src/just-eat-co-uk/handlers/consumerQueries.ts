import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postOrdersTenantOrderIdConsumerqueriesLateordercompensationRestaurantresponseRoute,
  postOrdersTenantOrderIdConsumerqueriesLateorderRestaurantresponseRoute,
} from '../routes'

const app = new OpenAPIHono()

export const consumerQueriesHandler = app
  .openapi(postOrdersTenantOrderIdConsumerqueriesLateorderRestaurantresponseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postOrdersTenantOrderIdConsumerqueriesLateordercompensationRestaurantresponseRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
