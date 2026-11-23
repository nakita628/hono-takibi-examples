import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1PaymentsPayoutsIdRoute,
  getV1PaymentsPayoutsItemPayoutItemIdRoute,
  postV1PaymentsPayoutsItemPayoutItemIdCancelRoute,
  postV1PaymentsPayoutsRoute,
} from './routes'
import {
  getV1PaymentsPayoutsIdRouteHandler,
  getV1PaymentsPayoutsItemPayoutItemIdRouteHandler,
  postV1PaymentsPayoutsItemPayoutItemIdCancelRouteHandler,
  postV1PaymentsPayoutsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1PaymentsPayoutsRoute, postV1PaymentsPayoutsRouteHandler)
  .openapi(getV1PaymentsPayoutsIdRoute, getV1PaymentsPayoutsIdRouteHandler)
  .openapi(
    getV1PaymentsPayoutsItemPayoutItemIdRoute,
    getV1PaymentsPayoutsItemPayoutItemIdRouteHandler,
  )
  .openapi(
    postV1PaymentsPayoutsItemPayoutItemIdCancelRoute,
    postV1PaymentsPayoutsItemPayoutItemIdCancelRouteHandler,
  )

export default app
