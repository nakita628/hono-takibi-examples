import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPluginsIdComplianceMemberPrivacyRoute,
  getPluginsIdIndexRoute,
  postPluginsIdPluginListingsRoute,
  putPluginsIdIndexRoute,
  putPluginsIdPluginListingsIdListingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pluginsHandler = app
  .openapi(getPluginsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPluginsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsIdPluginListingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsIdComplianceMemberPrivacyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPluginsIdPluginListingsIdListingRoute, (c) => {
    throw new Error('Not implemented')
  })
