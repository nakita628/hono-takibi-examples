import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionEnableReachabilityAnalyzerOrganizationSharingRoute,
  postActionEnableReachabilityAnalyzerOrganizationSharingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionEnableReachabilityAnalyzerOrganizationSharingHandler = app
  .openapi(getActionEnableReachabilityAnalyzerOrganizationSharingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionEnableReachabilityAnalyzerOrganizationSharingRoute, (c) => {
    throw new Error('Not implemented')
  })
