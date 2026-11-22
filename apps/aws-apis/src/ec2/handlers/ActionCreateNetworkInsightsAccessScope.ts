import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateNetworkInsightsAccessScopeRoute,
  postActionCreateNetworkInsightsAccessScopeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionCreateNetworkInsightsAccessScopeHandler = app
  .openapi(getActionCreateNetworkInsightsAccessScopeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateNetworkInsightsAccessScopeRoute, (c) => {
    throw new Error('Not implemented')
  })
