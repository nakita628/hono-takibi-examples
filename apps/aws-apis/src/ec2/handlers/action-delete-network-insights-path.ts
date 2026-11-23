import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteNetworkInsightsPathRoute,
  postActionDeleteNetworkInsightsPathRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDeleteNetworkInsightsPathHandler = app
  .openapi(getActionDeleteNetworkInsightsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteNetworkInsightsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
