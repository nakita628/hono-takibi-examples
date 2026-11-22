import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetAwsNetworkPerformanceDataRoute,
  postActionGetAwsNetworkPerformanceDataRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionGetAwsNetworkPerformanceDataHandler = app
  .openapi(getActionGetAwsNetworkPerformanceDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetAwsNetworkPerformanceDataRoute, (c) => {
    throw new Error('Not implemented')
  })
