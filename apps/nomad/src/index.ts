import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAclPolicyPolicyNameRoute,
  deleteAclTokenTokenAccessorRoute,
  deleteJobJobNameRoute,
  deleteNamespaceNamespaceNameRoute,
  deleteOperatorRaftPeerRoute,
  deleteQuotaSpecNameRoute,
  deleteVarPathRoute,
  deleteVolumeCsiVolumeIdActionRoute,
  deleteVolumeCsiVolumeIdRoute,
  deleteVolumesSnapshotRoute,
  getAclPoliciesRoute,
  getAclPolicyPolicyNameRoute,
  getAclTokenRoute,
  getAclTokensRoute,
  getAclTokenTokenAccessorRoute,
  getAllocationAllocIDRoute,
  getAllocationAllocIDServicesRoute,
  getAllocationsRoute,
  getDeploymentAllocationsDeploymentIDRoute,
  getDeploymentDeploymentIDRoute,
  getDeploymentsRoute,
  getEvaluationEvalIDAllocationsRoute,
  getEvaluationEvalIDRoute,
  getEvaluationsRoute,
  getJobJobNameAllocationsRoute,
  getJobJobNameDeploymentRoute,
  getJobJobNameDeploymentsRoute,
  getJobJobNameEvaluationsRoute,
  getJobJobNameRoute,
  getJobJobNameScaleRoute,
  getJobJobNameSummaryRoute,
  getJobJobNameVersionsRoute,
  getJobsRoute,
  getMetricsRoute,
  getNamespaceNamespaceNameRoute,
  getNamespacesRoute,
  getNodeNodeIdAllocationsRoute,
  getNodeNodeIdRoute,
  getNodesRoute,
  getOperatorAutopilotConfigurationRoute,
  getOperatorAutopilotHealthRoute,
  getOperatorRaftConfigurationRoute,
  getOperatorSchedulerConfigurationRoute,
  getPluginCsiPluginIDRoute,
  getPluginsRoute,
  getQuotaSpecNameRoute,
  getQuotasRoute,
  getRegionsRoute,
  getScalingPoliciesRoute,
  getScalingPolicyPolicyIDRoute,
  getStatusLeaderRoute,
  getStatusPeersRoute,
  getVarPathRoute,
  getVarsRoute,
  getVolumeCsiVolumeIdRoute,
  getVolumesExternalRoute,
  getVolumesRoute,
  getVolumesSnapshotRoute,
  postAclBootstrapRoute,
  postAclPolicyPolicyNameRoute,
  postAclTokenOnetimeExchangeRoute,
  postAclTokenOnetimeRoute,
  postAclTokenTokenAccessorRoute,
  postAllocationAllocIDStopRoute,
  postDeploymentAllocationHealthDeploymentIDRoute,
  postDeploymentFailDeploymentIDRoute,
  postDeploymentPauseDeploymentIDRoute,
  postDeploymentPromoteDeploymentIDRoute,
  postDeploymentUnblockDeploymentIDRoute,
  postJobJobNameDispatchRoute,
  postJobJobNameEvaluateRoute,
  postJobJobNamePeriodicForceRoute,
  postJobJobNamePlanRoute,
  postJobJobNameRevertRoute,
  postJobJobNameRoute,
  postJobJobNameScaleRoute,
  postJobJobNameStableRoute,
  postJobsParseRoute,
  postJobsRoute,
  postNamespaceNamespaceNameRoute,
  postNamespaceRoute,
  postNodeNodeIdDrainRoute,
  postNodeNodeIdEligibilityRoute,
  postNodeNodeIdPurgeRoute,
  postOperatorSchedulerConfigurationRoute,
  postQuotaRoute,
  postQuotaSpecNameRoute,
  postSearchFuzzyRoute,
  postSearchRoute,
  postValidateJobRoute,
  postVarPathRoute,
  postVolumeCsiVolumeIdActionRoute,
  postVolumeCsiVolumeIdRoute,
  postVolumesRoute,
  postVolumesSnapshotRoute,
  putOperatorAutopilotConfigurationRoute,
  putSystemGcRoute,
  putSystemReconcileSummariesRoute,
  putVarPathRoute,
} from './routes'
import {
  deleteAclPolicyPolicyNameRouteHandler,
  deleteAclTokenTokenAccessorRouteHandler,
  deleteJobJobNameRouteHandler,
  deleteNamespaceNamespaceNameRouteHandler,
  deleteOperatorRaftPeerRouteHandler,
  deleteQuotaSpecNameRouteHandler,
  deleteVarPathRouteHandler,
  deleteVolumeCsiVolumeIdActionRouteHandler,
  deleteVolumeCsiVolumeIdRouteHandler,
  deleteVolumesSnapshotRouteHandler,
  getAclPoliciesRouteHandler,
  getAclPolicyPolicyNameRouteHandler,
  getAclTokenRouteHandler,
  getAclTokensRouteHandler,
  getAclTokenTokenAccessorRouteHandler,
  getAllocationAllocIDRouteHandler,
  getAllocationAllocIDServicesRouteHandler,
  getAllocationsRouteHandler,
  getDeploymentAllocationsDeploymentIDRouteHandler,
  getDeploymentDeploymentIDRouteHandler,
  getDeploymentsRouteHandler,
  getEvaluationEvalIDAllocationsRouteHandler,
  getEvaluationEvalIDRouteHandler,
  getEvaluationsRouteHandler,
  getJobJobNameAllocationsRouteHandler,
  getJobJobNameDeploymentRouteHandler,
  getJobJobNameDeploymentsRouteHandler,
  getJobJobNameEvaluationsRouteHandler,
  getJobJobNameRouteHandler,
  getJobJobNameScaleRouteHandler,
  getJobJobNameSummaryRouteHandler,
  getJobJobNameVersionsRouteHandler,
  getJobsRouteHandler,
  getMetricsRouteHandler,
  getNamespaceNamespaceNameRouteHandler,
  getNamespacesRouteHandler,
  getNodeNodeIdAllocationsRouteHandler,
  getNodeNodeIdRouteHandler,
  getNodesRouteHandler,
  getOperatorAutopilotConfigurationRouteHandler,
  getOperatorAutopilotHealthRouteHandler,
  getOperatorRaftConfigurationRouteHandler,
  getOperatorSchedulerConfigurationRouteHandler,
  getPluginCsiPluginIDRouteHandler,
  getPluginsRouteHandler,
  getQuotaSpecNameRouteHandler,
  getQuotasRouteHandler,
  getRegionsRouteHandler,
  getScalingPoliciesRouteHandler,
  getScalingPolicyPolicyIDRouteHandler,
  getStatusLeaderRouteHandler,
  getStatusPeersRouteHandler,
  getVarPathRouteHandler,
  getVarsRouteHandler,
  getVolumeCsiVolumeIdRouteHandler,
  getVolumesExternalRouteHandler,
  getVolumesRouteHandler,
  getVolumesSnapshotRouteHandler,
  postAclBootstrapRouteHandler,
  postAclPolicyPolicyNameRouteHandler,
  postAclTokenOnetimeExchangeRouteHandler,
  postAclTokenOnetimeRouteHandler,
  postAclTokenTokenAccessorRouteHandler,
  postAllocationAllocIDStopRouteHandler,
  postDeploymentAllocationHealthDeploymentIDRouteHandler,
  postDeploymentFailDeploymentIDRouteHandler,
  postDeploymentPauseDeploymentIDRouteHandler,
  postDeploymentPromoteDeploymentIDRouteHandler,
  postDeploymentUnblockDeploymentIDRouteHandler,
  postJobJobNameDispatchRouteHandler,
  postJobJobNameEvaluateRouteHandler,
  postJobJobNamePeriodicForceRouteHandler,
  postJobJobNamePlanRouteHandler,
  postJobJobNameRevertRouteHandler,
  postJobJobNameRouteHandler,
  postJobJobNameScaleRouteHandler,
  postJobJobNameStableRouteHandler,
  postJobsParseRouteHandler,
  postJobsRouteHandler,
  postNamespaceNamespaceNameRouteHandler,
  postNamespaceRouteHandler,
  postNodeNodeIdDrainRouteHandler,
  postNodeNodeIdEligibilityRouteHandler,
  postNodeNodeIdPurgeRouteHandler,
  postOperatorSchedulerConfigurationRouteHandler,
  postQuotaRouteHandler,
  postQuotaSpecNameRouteHandler,
  postSearchFuzzyRouteHandler,
  postSearchRouteHandler,
  postValidateJobRouteHandler,
  postVarPathRouteHandler,
  postVolumeCsiVolumeIdActionRouteHandler,
  postVolumeCsiVolumeIdRouteHandler,
  postVolumesRouteHandler,
  postVolumesSnapshotRouteHandler,
  putOperatorAutopilotConfigurationRouteHandler,
  putSystemGcRouteHandler,
  putSystemReconcileSummariesRouteHandler,
  putVarPathRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAclBootstrapRoute, postAclBootstrapRouteHandler)
  .openapi(getAclPoliciesRoute, getAclPoliciesRouteHandler)
  .openapi(deleteAclPolicyPolicyNameRoute, deleteAclPolicyPolicyNameRouteHandler)
  .openapi(getAclPolicyPolicyNameRoute, getAclPolicyPolicyNameRouteHandler)
  .openapi(postAclPolicyPolicyNameRoute, postAclPolicyPolicyNameRouteHandler)
  .openapi(getAclTokenRoute, getAclTokenRouteHandler)
  .openapi(deleteAclTokenTokenAccessorRoute, deleteAclTokenTokenAccessorRouteHandler)
  .openapi(getAclTokenTokenAccessorRoute, getAclTokenTokenAccessorRouteHandler)
  .openapi(postAclTokenTokenAccessorRoute, postAclTokenTokenAccessorRouteHandler)
  .openapi(postAclTokenOnetimeRoute, postAclTokenOnetimeRouteHandler)
  .openapi(postAclTokenOnetimeExchangeRoute, postAclTokenOnetimeExchangeRouteHandler)
  .openapi(getAclTokensRoute, getAclTokensRouteHandler)
  .openapi(getAllocationAllocIDRoute, getAllocationAllocIDRouteHandler)
  .openapi(getAllocationAllocIDServicesRoute, getAllocationAllocIDServicesRouteHandler)
  .openapi(postAllocationAllocIDStopRoute, postAllocationAllocIDStopRouteHandler)
  .openapi(getAllocationsRoute, getAllocationsRouteHandler)
  .openapi(getDeploymentDeploymentIDRoute, getDeploymentDeploymentIDRouteHandler)
  .openapi(
    postDeploymentAllocationHealthDeploymentIDRoute,
    postDeploymentAllocationHealthDeploymentIDRouteHandler,
  )
  .openapi(
    getDeploymentAllocationsDeploymentIDRoute,
    getDeploymentAllocationsDeploymentIDRouteHandler,
  )
  .openapi(postDeploymentFailDeploymentIDRoute, postDeploymentFailDeploymentIDRouteHandler)
  .openapi(postDeploymentPauseDeploymentIDRoute, postDeploymentPauseDeploymentIDRouteHandler)
  .openapi(postDeploymentPromoteDeploymentIDRoute, postDeploymentPromoteDeploymentIDRouteHandler)
  .openapi(postDeploymentUnblockDeploymentIDRoute, postDeploymentUnblockDeploymentIDRouteHandler)
  .openapi(getDeploymentsRoute, getDeploymentsRouteHandler)
  .openapi(getEvaluationEvalIDRoute, getEvaluationEvalIDRouteHandler)
  .openapi(getEvaluationEvalIDAllocationsRoute, getEvaluationEvalIDAllocationsRouteHandler)
  .openapi(getEvaluationsRoute, getEvaluationsRouteHandler)
  .openapi(deleteJobJobNameRoute, deleteJobJobNameRouteHandler)
  .openapi(getJobJobNameRoute, getJobJobNameRouteHandler)
  .openapi(postJobJobNameRoute, postJobJobNameRouteHandler)
  .openapi(getJobJobNameAllocationsRoute, getJobJobNameAllocationsRouteHandler)
  .openapi(getJobJobNameDeploymentRoute, getJobJobNameDeploymentRouteHandler)
  .openapi(getJobJobNameDeploymentsRoute, getJobJobNameDeploymentsRouteHandler)
  .openapi(postJobJobNameDispatchRoute, postJobJobNameDispatchRouteHandler)
  .openapi(postJobJobNameEvaluateRoute, postJobJobNameEvaluateRouteHandler)
  .openapi(getJobJobNameEvaluationsRoute, getJobJobNameEvaluationsRouteHandler)
  .openapi(postJobJobNamePeriodicForceRoute, postJobJobNamePeriodicForceRouteHandler)
  .openapi(postJobJobNamePlanRoute, postJobJobNamePlanRouteHandler)
  .openapi(postJobJobNameRevertRoute, postJobJobNameRevertRouteHandler)
  .openapi(getJobJobNameScaleRoute, getJobJobNameScaleRouteHandler)
  .openapi(postJobJobNameScaleRoute, postJobJobNameScaleRouteHandler)
  .openapi(postJobJobNameStableRoute, postJobJobNameStableRouteHandler)
  .openapi(getJobJobNameSummaryRoute, getJobJobNameSummaryRouteHandler)
  .openapi(getJobJobNameVersionsRoute, getJobJobNameVersionsRouteHandler)
  .openapi(getJobsRoute, getJobsRouteHandler)
  .openapi(postJobsRoute, postJobsRouteHandler)
  .openapi(postJobsParseRoute, postJobsParseRouteHandler)
  .openapi(getMetricsRoute, getMetricsRouteHandler)
  .openapi(postNamespaceRoute, postNamespaceRouteHandler)
  .openapi(deleteNamespaceNamespaceNameRoute, deleteNamespaceNamespaceNameRouteHandler)
  .openapi(getNamespaceNamespaceNameRoute, getNamespaceNamespaceNameRouteHandler)
  .openapi(postNamespaceNamespaceNameRoute, postNamespaceNamespaceNameRouteHandler)
  .openapi(getNamespacesRoute, getNamespacesRouteHandler)
  .openapi(getNodeNodeIdRoute, getNodeNodeIdRouteHandler)
  .openapi(getNodeNodeIdAllocationsRoute, getNodeNodeIdAllocationsRouteHandler)
  .openapi(postNodeNodeIdDrainRoute, postNodeNodeIdDrainRouteHandler)
  .openapi(postNodeNodeIdEligibilityRoute, postNodeNodeIdEligibilityRouteHandler)
  .openapi(postNodeNodeIdPurgeRoute, postNodeNodeIdPurgeRouteHandler)
  .openapi(getNodesRoute, getNodesRouteHandler)
  .openapi(getOperatorAutopilotConfigurationRoute, getOperatorAutopilotConfigurationRouteHandler)
  .openapi(putOperatorAutopilotConfigurationRoute, putOperatorAutopilotConfigurationRouteHandler)
  .openapi(getOperatorAutopilotHealthRoute, getOperatorAutopilotHealthRouteHandler)
  .openapi(getOperatorRaftConfigurationRoute, getOperatorRaftConfigurationRouteHandler)
  .openapi(deleteOperatorRaftPeerRoute, deleteOperatorRaftPeerRouteHandler)
  .openapi(getOperatorSchedulerConfigurationRoute, getOperatorSchedulerConfigurationRouteHandler)
  .openapi(postOperatorSchedulerConfigurationRoute, postOperatorSchedulerConfigurationRouteHandler)
  .openapi(getPluginCsiPluginIDRoute, getPluginCsiPluginIDRouteHandler)
  .openapi(getPluginsRoute, getPluginsRouteHandler)
  .openapi(postQuotaRoute, postQuotaRouteHandler)
  .openapi(deleteQuotaSpecNameRoute, deleteQuotaSpecNameRouteHandler)
  .openapi(getQuotaSpecNameRoute, getQuotaSpecNameRouteHandler)
  .openapi(postQuotaSpecNameRoute, postQuotaSpecNameRouteHandler)
  .openapi(getQuotasRoute, getQuotasRouteHandler)
  .openapi(getRegionsRoute, getRegionsRouteHandler)
  .openapi(getScalingPoliciesRoute, getScalingPoliciesRouteHandler)
  .openapi(getScalingPolicyPolicyIDRoute, getScalingPolicyPolicyIDRouteHandler)
  .openapi(postSearchRoute, postSearchRouteHandler)
  .openapi(postSearchFuzzyRoute, postSearchFuzzyRouteHandler)
  .openapi(getStatusLeaderRoute, getStatusLeaderRouteHandler)
  .openapi(getStatusPeersRoute, getStatusPeersRouteHandler)
  .openapi(putSystemGcRoute, putSystemGcRouteHandler)
  .openapi(putSystemReconcileSummariesRoute, putSystemReconcileSummariesRouteHandler)
  .openapi(postValidateJobRoute, postValidateJobRouteHandler)
  .openapi(deleteVarPathRoute, deleteVarPathRouteHandler)
  .openapi(getVarPathRoute, getVarPathRouteHandler)
  .openapi(postVarPathRoute, postVarPathRouteHandler)
  .openapi(putVarPathRoute, putVarPathRouteHandler)
  .openapi(getVarsRoute, getVarsRouteHandler)
  .openapi(deleteVolumeCsiVolumeIdRoute, deleteVolumeCsiVolumeIdRouteHandler)
  .openapi(getVolumeCsiVolumeIdRoute, getVolumeCsiVolumeIdRouteHandler)
  .openapi(postVolumeCsiVolumeIdRoute, postVolumeCsiVolumeIdRouteHandler)
  .openapi(deleteVolumeCsiVolumeIdActionRoute, deleteVolumeCsiVolumeIdActionRouteHandler)
  .openapi(postVolumeCsiVolumeIdActionRoute, postVolumeCsiVolumeIdActionRouteHandler)
  .openapi(getVolumesRoute, getVolumesRouteHandler)
  .openapi(postVolumesRoute, postVolumesRouteHandler)
  .openapi(getVolumesExternalRoute, getVolumesExternalRouteHandler)
  .openapi(deleteVolumesSnapshotRoute, deleteVolumesSnapshotRouteHandler)
  .openapi(getVolumesSnapshotRoute, getVolumesSnapshotRouteHandler)
  .openapi(postVolumesSnapshotRoute, postVolumesSnapshotRouteHandler)

export default app
