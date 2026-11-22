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
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(getV1ProjectsProjectIdRegionsRegionClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectIdRegionsRegionClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsProjectIdRegionsRegionClustersClusterNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdRegionsRegionClustersClusterNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsProjectIdRegionsRegionClustersClusterNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectIdRegionsRegionClustersClusterNameDiagnoseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectIdRegionsRegionClustersClusterNameRepairRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectIdRegionsRegionClustersClusterNameStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectIdRegionsRegionClustersClusterNameStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdRegionsRegionJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsProjectIdRegionsRegionJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdRegionsRegionJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsProjectIdRegionsRegionJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectIdRegionsRegionJobsJobIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectIdRegionsRegionJobsSubmitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectIdRegionsRegionJobsSubmitAsOperationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameInstantiateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameResizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentAutoscalingPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentAutoscalingPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentBatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentBatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentNodeGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentWorkflowTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentWorkflowTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentWorkflowTemplatesInstantiateInlineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectRegionClusterInjectCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
