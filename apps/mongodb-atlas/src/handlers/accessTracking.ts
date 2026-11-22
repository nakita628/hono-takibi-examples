import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiAtlasV2GroupsGroupIdDbAccessHistoryClustersClusterNameRoute,
  getApiAtlasV2GroupsGroupIdDbAccessHistoryProcessesHostnameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accessTrackingHandler = app
  .openapi(getApiAtlasV2GroupsGroupIdDbAccessHistoryClustersClusterNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdDbAccessHistoryProcessesHostnameRoute, (c) => {
    throw new Error('Not implemented')
  })
