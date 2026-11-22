import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1WorkgroupsWorkgroupIdExchangeRateRoute,
  postV1WorkgroupsWorkgroupIdExchangeRateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const exchangeRateHandler = app
  .openapi(getV1WorkgroupsWorkgroupIdExchangeRateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkgroupsWorkgroupIdExchangeRateRoute, (c) => {
    throw new Error('Not implemented')
  })
