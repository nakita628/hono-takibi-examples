import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1PaymentsPayoutsIdRoute,
  getV1PaymentsPayoutsItemPayoutItemIdRoute,
  postV1PaymentsPayoutsItemPayoutItemIdCancelRoute,
  postV1PaymentsPayoutsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(postV1PaymentsPayoutsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentsPayoutsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentsPayoutsItemPayoutItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentsPayoutsItemPayoutItemIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
