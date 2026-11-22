import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1betaNameRoute,
  getV1betaNameRoute,
  getV1betaParentGuestPoliciesRoute,
  getV1betaParentInstanceDetailsRoute,
  getV1betaParentPatchDeploymentsRoute,
  getV1betaParentPatchJobsRoute,
  patchV1betaNameRoute,
  postV1betaInstanceLookupEffectiveGuestPolicyRoute,
  postV1betaNameCancelRoute,
  postV1betaNamePauseRoute,
  postV1betaNameResumeRoute,
  postV1betaParentGuestPoliciesRoute,
  postV1betaParentPatchDeploymentsRoute,
  postV1betaParentPatchJobsExecuteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(postV1betaInstanceLookupEffectiveGuestPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1betaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1betaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaNameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaNamePauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaNameResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaParentGuestPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaParentGuestPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaParentInstanceDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaParentPatchDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaParentPatchDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaParentPatchJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaParentPatchJobsExecuteRoute, (c) => {
    throw new Error('Not implemented')
  })
