import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1InternalUsageBiDatasetsRoute,
  getV1InternalUsageBiExperimentsRoute,
  getV1InternalUsageBiSpansRoute,
  getV1InternalUsageBiTracesRoute,
  getV1InternalUsageWorkspaceSpanCountsBreakdownRoute,
  getV1InternalUsageWorkspaceSpanCountsRoute,
  getV1InternalUsageWorkspaceTraceCountsRoute,
  postV1InternalUsageProjectsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const systemUsageHandler = app
  .openapi(postV1InternalUsageProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InternalUsageBiDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InternalUsageBiExperimentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InternalUsageBiSpansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InternalUsageWorkspaceSpanCountsBreakdownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InternalUsageWorkspaceSpanCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InternalUsageBiTracesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InternalUsageWorkspaceTraceCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
