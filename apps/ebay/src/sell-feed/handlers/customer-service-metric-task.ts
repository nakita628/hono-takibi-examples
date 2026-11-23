import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCustomerServiceMetricTaskRoute,
  getCustomerServiceMetricTaskTaskIdRoute,
  postCustomerServiceMetricTaskRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customerServiceMetricTaskHandler = app
  .openapi(getCustomerServiceMetricTaskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomerServiceMetricTaskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomerServiceMetricTaskTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
