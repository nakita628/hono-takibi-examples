import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAccountNameEnvironmentComBrApiFulfillmentPvtOrdersOrderIdFulfillRoute,
  postAccountNameEnvironmentComBrApiFulfillmentPvtOrdersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountNameEnvironmentComBrHandler = app
  .openapi(postAccountNameEnvironmentComBrApiFulfillmentPvtOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountNameEnvironmentComBrApiFulfillmentPvtOrdersOrderIdFulfillRoute, (c) => {
    throw new Error('Not implemented')
  })
