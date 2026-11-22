import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetNetworkInsightsAccessScopeContentRoute,
  postActionGetNetworkInsightsAccessScopeContentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionGetNetworkInsightsAccessScopeContentHandler = app
  .openapi(getActionGetNetworkInsightsAccessScopeContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetNetworkInsightsAccessScopeContentRoute, (c) => {
    throw new Error('Not implemented')
  })
