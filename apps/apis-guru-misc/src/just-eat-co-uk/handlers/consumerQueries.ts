import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postOrdersTenantOrderIdConsumerqueriesLateorderRestaurantresponseRoute,
  postOrdersTenantOrderIdConsumerqueriesLateordercompensationRestaurantresponseRoute,
} from '../routes'

const app = new OpenAPIHono()

export const consumerQueriesHandler = app
  .openapi(postOrdersTenantOrderIdConsumerqueriesLateorderRestaurantresponseRoute, (c) => {})
  .openapi(
    postOrdersTenantOrderIdConsumerqueriesLateordercompensationRestaurantresponseRoute,
    (c) => {},
  )
