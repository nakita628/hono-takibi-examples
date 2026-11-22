import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiVersionLinodeInstancesLinodeIdStatsRoute,
  getApiVersionLinodeInstancesLinodeIdStatsYearMonthRoute,
  getApiVersionLinodeInstancesLinodeIdTransferRoute,
  getApiVersionLinodeInstancesLinodeIdTransferYearMonthRoute,
  getApiVersionNodebalancersNodeBalancerIdStatsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const statisticsHandler = app
  .openapi(getApiVersionLinodeInstancesLinodeIdStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLinodeInstancesLinodeIdStatsYearMonthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLinodeInstancesLinodeIdTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLinodeInstancesLinodeIdTransferYearMonthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionNodebalancersNodeBalancerIdStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
