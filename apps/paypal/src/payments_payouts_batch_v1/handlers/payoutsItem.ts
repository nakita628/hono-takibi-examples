import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1PaymentsPayoutsItemPayoutItemIdRoute,
  postV1PaymentsPayoutsItemPayoutItemIdCancelRoute,
} from '../routes'

const app = new OpenAPIHono()

export const payoutsItemHandler = app
  .openapi(getV1PaymentsPayoutsItemPayoutItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentsPayoutsItemPayoutItemIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
