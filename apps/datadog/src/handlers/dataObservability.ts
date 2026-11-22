import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2DataObservabilityMonitorsRunsRunIdStatusRoute,
  postApiV2DataObservabilityMonitorsMonitorIdRunRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dataObservabilityHandler = app
  .openapi(getApiV2DataObservabilityMonitorsRunsRunIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2DataObservabilityMonitorsMonitorIdRunRoute, (c) => {
    throw new Error('Not implemented')
  })
