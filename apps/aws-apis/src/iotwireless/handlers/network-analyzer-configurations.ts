import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNetworkAnalyzerConfigurationsConfigurationNameRoute,
  getNetworkAnalyzerConfigurationsConfigurationNameRoute,
  getNetworkAnalyzerConfigurationsRoute,
  patchNetworkAnalyzerConfigurationsConfigurationNameRoute,
  postNetworkAnalyzerConfigurationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const networkAnalyzerConfigurationsHandler = app
  .openapi(postNetworkAnalyzerConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworkAnalyzerConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworkAnalyzerConfigurationsConfigurationNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworkAnalyzerConfigurationsConfigurationNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchNetworkAnalyzerConfigurationsConfigurationNameRoute, (c) => {
    throw new Error('Not implemented')
  })
