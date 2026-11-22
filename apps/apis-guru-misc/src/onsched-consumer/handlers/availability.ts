import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getConsumerV1AvailabilityServiceIdStartDateEndDateDaysRoute,
  getConsumerV1AvailabilityServiceIdStartDateEndDateRoute,
  getConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableRoute,
} from '../routes'

const app = new OpenAPIHono()

export const availabilityHandler = app
  .openapi(getConsumerV1AvailabilityServiceIdStartDateEndDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsumerV1AvailabilityServiceIdStartDateEndDateDaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableRoute, (c) => {
    throw new Error('Not implemented')
  })
