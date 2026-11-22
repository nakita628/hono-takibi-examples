import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAtlasV2GroupsGroupIdMetricIntegrationsMetricIntegrationIdRoute,
  getApiAtlasV2GroupsGroupIdMetricIntegrationsMetricIntegrationIdRoute,
  getApiAtlasV2GroupsGroupIdMetricIntegrationsRoute,
  postApiAtlasV2GroupsGroupIdMetricIntegrationsRoute,
  putApiAtlasV2GroupsGroupIdMetricIntegrationsMetricIntegrationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const metricIntegrationsHandler = app
  .openapi(getApiAtlasV2GroupsGroupIdMetricIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdMetricIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2GroupsGroupIdMetricIntegrationsMetricIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdMetricIntegrationsMetricIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAtlasV2GroupsGroupIdMetricIntegrationsMetricIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
