import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportPagerDutyIdRoute,
  getApiTransportPagerDutyIdRoute,
  getApiTransportPagerDutyRoute,
  postApiTransportPagerDutyRoute,
  putApiTransportPagerDutyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportPagerDutyHandler = app
  .openapi(getApiTransportPagerDutyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportPagerDutyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportPagerDutyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportPagerDutyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportPagerDutyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
