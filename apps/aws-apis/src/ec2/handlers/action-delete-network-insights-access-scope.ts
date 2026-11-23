import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteNetworkInsightsAccessScopeRoute,
  postActionDeleteNetworkInsightsAccessScopeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDeleteNetworkInsightsAccessScopeHandler = app
  .openapi(getActionDeleteNetworkInsightsAccessScopeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteNetworkInsightsAccessScopeRoute, (c) => {
    throw new Error('Not implemented')
  })
