import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteClusterVotingConfigExclusionsRoute,
  deleteNodesNodeIdRepositoriesMeteringMaxArchiveVersionRoute,
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
  getInfoTargetRoute,
  getNodesHotThreadsRoute,
  getNodesMetricRoute,
  getNodesNodeIdHotThreadsRoute,
  getNodesNodeIdMetricRoute,
  getNodesNodeIdRepositoriesMeteringRoute,
  getNodesNodeIdRoute,
  getNodesNodeIdStatsMetricIndexMetricRoute,
  getNodesNodeIdStatsMetricRoute,
  getNodesNodeIdStatsRoute,
  getNodesNodeIdUsageMetricRoute,
  getNodesNodeIdUsageRoute,
  getNodesRoute,
  getNodesStatsMetricIndexMetricRoute,
  getNodesStatsMetricRoute,
  getNodesStatsRoute,
  getNodesUsageMetricRoute,
  getNodesUsageRoute,
  getRemoteInfoRoute,
  headRoute,
  postClusterAllocationExplainRoute,
  postClusterRerouteRoute,
  postClusterVotingConfigExclusionsRoute,
  postNodesNodeIdReloadSecureSettingsRoute,
  postNodesReloadSecureSettingsRoute,
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
  .openapi(getInfoTargetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClusterPendingTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRemoteInfoRoute, (c) => {
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
  .openapi(headRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNodesNodeIdRepositoriesMeteringMaxArchiveVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesNodeIdRepositoriesMeteringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesHotThreadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesNodeIdHotThreadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesMetricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesNodeIdMetricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNodesReloadSecureSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNodesNodeIdReloadSecureSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesNodeIdStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesStatsMetricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesNodeIdStatsMetricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesStatsMetricIndexMetricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesNodeIdStatsMetricIndexMetricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesNodeIdUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesUsageMetricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesNodeIdUsageMetricRoute, (c) => {
    throw new Error('Not implemented')
  })
