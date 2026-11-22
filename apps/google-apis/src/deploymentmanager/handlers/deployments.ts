import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentRoute,
  getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentRoute,
  getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsResourceGetIamPolicyRoute,
  getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsRoute,
  patchDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentRoute,
  postDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentCancelPreviewRoute,
  postDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentStopRoute,
  postDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsResourceSetIamPolicyRoute,
  postDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsResourceTestIamPermissionsRoute,
  postDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsRoute,
  putDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deploymentsHandler = app
  .openapi(getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentCancelPreviewRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsResourceGetIamPolicyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsResourceSetIamPolicyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsResourceTestIamPermissionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
