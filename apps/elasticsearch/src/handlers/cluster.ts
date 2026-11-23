import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteClusterVotingConfigExclusionsRoute,
  getClusterAllocationExplainRoute,
  getClusterHealthIndexRoute,
  getClusterHealthRoute,
  getClusterPendingTasksRoute,
  getClusterSettingsRoute,
  getClusterStateMetricIndexRoute,
  getClusterStateMetricRoute,
  getClusterStateRoute,
  getClusterStatsNodesNodeIdRoute,
  getClusterStatsRoute,
  postClusterAllocationExplainRoute,
  postClusterRerouteRoute,
  postClusterVotingConfigExclusionsRoute,
  putClusterSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const clusterHandler = app
  .openapi(getClusterAllocationExplainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClusterAllocationExplainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClusterVotingConfigExclusionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteClusterVotingConfigExclusionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClusterSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putClusterSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClusterHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClusterHealthIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClusterPendingTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClusterRerouteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClusterStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClusterStateMetricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClusterStateMetricIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClusterStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClusterStatsNodesNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
