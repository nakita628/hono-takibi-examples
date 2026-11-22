import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateNetworkInsightsPathRoute,
  postActionCreateNetworkInsightsPathRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionCreateNetworkInsightsPathHandler = app
  .openapi(getActionCreateNetworkInsightsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateNetworkInsightsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
