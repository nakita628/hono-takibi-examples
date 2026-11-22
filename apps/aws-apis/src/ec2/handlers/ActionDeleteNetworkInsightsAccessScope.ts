import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteNetworkInsightsAccessScopeRoute,
  postActionDeleteNetworkInsightsAccessScopeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteNetworkInsightsAccessScopeHandler = app
  .openapi(getActionDeleteNetworkInsightsAccessScopeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteNetworkInsightsAccessScopeRoute, (c) => {
    throw new Error('Not implemented')
  })
