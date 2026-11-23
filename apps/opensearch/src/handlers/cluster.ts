import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteClusterDecommissionAwarenessRoute,
  deleteClusterRoutingAwarenessWeightsRoute,
  deleteClusterVotingConfigExclusionsRoute,
  getClusterAllocationExplainRoute,
  getClusterDecommissionAwarenessAwarenessAttributeNameStatusRoute,
  getClusterHealthIndexRoute,
  getClusterHealthRoute,
  getClusterNodesHotthreadsRoute,
  getClusterNodesHotThreadsRoute,
  getClusterNodesNodeIdHotthreadsRoute,
  getClusterNodesNodeIdHotThreadsRoute,
  getClusterPendingTasksRoute,
  getClusterRoutingAwarenessAttributeWeightsRoute,
  getClusterSettingsRoute,
  getClusterStateMetricIndexRoute,
  getClusterStateMetricRoute,
  getClusterStateRoute,
  getClusterStatsMetricIndexMetricNodesNodeIdRoute,
  getClusterStatsMetricNodesNodeIdRoute,
  getClusterStatsNodesNodeIdRoute,
  getClusterStatsRoute,
  postClusterAllocationExplainRoute,
  postClusterRerouteRoute,
  postClusterVotingConfigExclusionsRoute,
  putClusterDecommissionAwarenessAwarenessAttributeNameAwarenessAttributeValueRoute,
  putClusterRoutingAwarenessAttributeWeightsRoute,
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
  .openapi(deleteClusterDecommissionAwarenessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClusterDecommissionAwarenessAwarenessAttributeNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putClusterDecommissionAwarenessAwarenessAttributeNameAwarenessAttributeValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getClusterHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClusterHealthIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClusterNodesNodeIdHotThreadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClusterNodesHotThreadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClusterPendingTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClusterRerouteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClusterRoutingAwarenessAttributeWeightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putClusterRoutingAwarenessAttributeWeightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteClusterRoutingAwarenessWeightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClusterSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putClusterSettingsRoute, (c) => {
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
  .openapi(getClusterStatsMetricIndexMetricNodesNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClusterStatsMetricNodesNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClusterStatsNodesNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteClusterVotingConfigExclusionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClusterVotingConfigExclusionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClusterNodesHotthreadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClusterNodesNodeIdHotthreadsRoute, (c) => {
    throw new Error('Not implemented')
  })
