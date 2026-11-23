import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  deleteV1ProjectsProjectIdRegionsRegionClustersClusterNameRoute,
  deleteV1ProjectsProjectIdRegionsRegionJobsJobIdRoute,
  getV1NameRoute,
  getV1ParentAutoscalingPoliciesRoute,
  getV1ParentBatchesRoute,
  getV1ParentWorkflowTemplatesRoute,
  getV1ProjectsProjectIdRegionsRegionClustersClusterNameRoute,
  getV1ProjectsProjectIdRegionsRegionClustersRoute,
  getV1ProjectsProjectIdRegionsRegionJobsJobIdRoute,
  getV1ProjectsProjectIdRegionsRegionJobsRoute,
  patchV1ProjectsProjectIdRegionsRegionClustersClusterNameRoute,
  patchV1ProjectsProjectIdRegionsRegionJobsJobIdRoute,
  postV1NameCancelRoute,
  postV1NameInstantiateRoute,
  postV1NameResizeRoute,
  postV1ParentAutoscalingPoliciesRoute,
  postV1ParentBatchesRoute,
  postV1ParentNodeGroupsRoute,
  postV1ParentWorkflowTemplatesInstantiateInlineRoute,
  postV1ParentWorkflowTemplatesRoute,
  postV1ProjectRegionClusterInjectCredentialsRoute,
  postV1ProjectsProjectIdRegionsRegionClustersClusterNameDiagnoseRoute,
  postV1ProjectsProjectIdRegionsRegionClustersClusterNameRepairRoute,
  postV1ProjectsProjectIdRegionsRegionClustersClusterNameStartRoute,
  postV1ProjectsProjectIdRegionsRegionClustersClusterNameStopRoute,
  postV1ProjectsProjectIdRegionsRegionClustersRoute,
  postV1ProjectsProjectIdRegionsRegionJobsJobIdCancelRoute,
  postV1ProjectsProjectIdRegionsRegionJobsSubmitAsOperationRoute,
  postV1ProjectsProjectIdRegionsRegionJobsSubmitRoute,
  postV1ResourceGetIamPolicyRoute,
  postV1ResourceSetIamPolicyRoute,
  postV1ResourceTestIamPermissionsRoute,
  putV1NameRoute,
} from './routes'
import {
  deleteV1NameRouteHandler,
  deleteV1ProjectsProjectIdRegionsRegionClustersClusterNameRouteHandler,
  deleteV1ProjectsProjectIdRegionsRegionJobsJobIdRouteHandler,
  getV1NameRouteHandler,
  getV1ParentAutoscalingPoliciesRouteHandler,
  getV1ParentBatchesRouteHandler,
  getV1ParentWorkflowTemplatesRouteHandler,
  getV1ProjectsProjectIdRegionsRegionClustersClusterNameRouteHandler,
  getV1ProjectsProjectIdRegionsRegionClustersRouteHandler,
  getV1ProjectsProjectIdRegionsRegionJobsJobIdRouteHandler,
  getV1ProjectsProjectIdRegionsRegionJobsRouteHandler,
  patchV1ProjectsProjectIdRegionsRegionClustersClusterNameRouteHandler,
  patchV1ProjectsProjectIdRegionsRegionJobsJobIdRouteHandler,
  postV1NameCancelRouteHandler,
  postV1NameInstantiateRouteHandler,
  postV1NameResizeRouteHandler,
  postV1ParentAutoscalingPoliciesRouteHandler,
  postV1ParentBatchesRouteHandler,
  postV1ParentNodeGroupsRouteHandler,
  postV1ParentWorkflowTemplatesInstantiateInlineRouteHandler,
  postV1ParentWorkflowTemplatesRouteHandler,
  postV1ProjectRegionClusterInjectCredentialsRouteHandler,
  postV1ProjectsProjectIdRegionsRegionClustersClusterNameDiagnoseRouteHandler,
  postV1ProjectsProjectIdRegionsRegionClustersClusterNameRepairRouteHandler,
  postV1ProjectsProjectIdRegionsRegionClustersClusterNameStartRouteHandler,
  postV1ProjectsProjectIdRegionsRegionClustersClusterNameStopRouteHandler,
  postV1ProjectsProjectIdRegionsRegionClustersRouteHandler,
  postV1ProjectsProjectIdRegionsRegionJobsJobIdCancelRouteHandler,
  postV1ProjectsProjectIdRegionsRegionJobsSubmitAsOperationRouteHandler,
  postV1ProjectsProjectIdRegionsRegionJobsSubmitRouteHandler,
  postV1ResourceGetIamPolicyRouteHandler,
  postV1ResourceSetIamPolicyRouteHandler,
  postV1ResourceTestIamPermissionsRouteHandler,
  putV1NameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getV1ProjectsProjectIdRegionsRegionClustersRoute,
    getV1ProjectsProjectIdRegionsRegionClustersRouteHandler,
  )
  .openapi(
    postV1ProjectsProjectIdRegionsRegionClustersRoute,
    postV1ProjectsProjectIdRegionsRegionClustersRouteHandler,
  )
  .openapi(
    deleteV1ProjectsProjectIdRegionsRegionClustersClusterNameRoute,
    deleteV1ProjectsProjectIdRegionsRegionClustersClusterNameRouteHandler,
  )
  .openapi(
    getV1ProjectsProjectIdRegionsRegionClustersClusterNameRoute,
    getV1ProjectsProjectIdRegionsRegionClustersClusterNameRouteHandler,
  )
  .openapi(
    patchV1ProjectsProjectIdRegionsRegionClustersClusterNameRoute,
    patchV1ProjectsProjectIdRegionsRegionClustersClusterNameRouteHandler,
  )
  .openapi(
    postV1ProjectsProjectIdRegionsRegionClustersClusterNameDiagnoseRoute,
    postV1ProjectsProjectIdRegionsRegionClustersClusterNameDiagnoseRouteHandler,
  )
  .openapi(
    postV1ProjectsProjectIdRegionsRegionClustersClusterNameRepairRoute,
    postV1ProjectsProjectIdRegionsRegionClustersClusterNameRepairRouteHandler,
  )
  .openapi(
    postV1ProjectsProjectIdRegionsRegionClustersClusterNameStartRoute,
    postV1ProjectsProjectIdRegionsRegionClustersClusterNameStartRouteHandler,
  )
  .openapi(
    postV1ProjectsProjectIdRegionsRegionClustersClusterNameStopRoute,
    postV1ProjectsProjectIdRegionsRegionClustersClusterNameStopRouteHandler,
  )
  .openapi(
    getV1ProjectsProjectIdRegionsRegionJobsRoute,
    getV1ProjectsProjectIdRegionsRegionJobsRouteHandler,
  )
  .openapi(
    deleteV1ProjectsProjectIdRegionsRegionJobsJobIdRoute,
    deleteV1ProjectsProjectIdRegionsRegionJobsJobIdRouteHandler,
  )
  .openapi(
    getV1ProjectsProjectIdRegionsRegionJobsJobIdRoute,
    getV1ProjectsProjectIdRegionsRegionJobsJobIdRouteHandler,
  )
  .openapi(
    patchV1ProjectsProjectIdRegionsRegionJobsJobIdRoute,
    patchV1ProjectsProjectIdRegionsRegionJobsJobIdRouteHandler,
  )
  .openapi(
    postV1ProjectsProjectIdRegionsRegionJobsJobIdCancelRoute,
    postV1ProjectsProjectIdRegionsRegionJobsJobIdCancelRouteHandler,
  )
  .openapi(
    postV1ProjectsProjectIdRegionsRegionJobsSubmitRoute,
    postV1ProjectsProjectIdRegionsRegionJobsSubmitRouteHandler,
  )
  .openapi(
    postV1ProjectsProjectIdRegionsRegionJobsSubmitAsOperationRoute,
    postV1ProjectsProjectIdRegionsRegionJobsSubmitAsOperationRouteHandler,
  )
  .openapi(deleteV1NameRoute, deleteV1NameRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(putV1NameRoute, putV1NameRouteHandler)
  .openapi(postV1NameCancelRoute, postV1NameCancelRouteHandler)
  .openapi(postV1NameInstantiateRoute, postV1NameInstantiateRouteHandler)
  .openapi(postV1NameResizeRoute, postV1NameResizeRouteHandler)
  .openapi(getV1ParentAutoscalingPoliciesRoute, getV1ParentAutoscalingPoliciesRouteHandler)
  .openapi(postV1ParentAutoscalingPoliciesRoute, postV1ParentAutoscalingPoliciesRouteHandler)
  .openapi(getV1ParentBatchesRoute, getV1ParentBatchesRouteHandler)
  .openapi(postV1ParentBatchesRoute, postV1ParentBatchesRouteHandler)
  .openapi(postV1ParentNodeGroupsRoute, postV1ParentNodeGroupsRouteHandler)
  .openapi(getV1ParentWorkflowTemplatesRoute, getV1ParentWorkflowTemplatesRouteHandler)
  .openapi(postV1ParentWorkflowTemplatesRoute, postV1ParentWorkflowTemplatesRouteHandler)
  .openapi(
    postV1ParentWorkflowTemplatesInstantiateInlineRoute,
    postV1ParentWorkflowTemplatesInstantiateInlineRouteHandler,
  )
  .openapi(
    postV1ProjectRegionClusterInjectCredentialsRoute,
    postV1ProjectRegionClusterInjectCredentialsRouteHandler,
  )
  .openapi(postV1ResourceGetIamPolicyRoute, postV1ResourceGetIamPolicyRouteHandler)
  .openapi(postV1ResourceSetIamPolicyRoute, postV1ResourceSetIamPolicyRouteHandler)
  .openapi(postV1ResourceTestIamPermissionsRoute, postV1ResourceTestIamPermissionsRouteHandler)

export default app
