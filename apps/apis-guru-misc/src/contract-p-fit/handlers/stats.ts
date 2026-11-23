import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getStatsInboxIdAutomationBlockersRoute,
  getStatsInboxIdEvaluatedVersionsRoute,
  getStatsInboxIdProcessingRoute,
  getStatsInboxIdRoute,
  getStatsInboxIdVolumeRoute,
  getStatsScopeAccuracyRoute,
  getStatsScopeStpRoute,
  getStatsUsageRoute,
  postStatsInboxIdBlueDotsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const statsHandler = app
  .openapi(getStatsUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatsInboxIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatsInboxIdAutomationBlockersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStatsInboxIdBlueDotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatsInboxIdEvaluatedVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatsInboxIdProcessingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatsInboxIdVolumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatsScopeAccuracyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatsScopeStpRoute, (c) => {
    throw new Error('Not implemented')
  })
