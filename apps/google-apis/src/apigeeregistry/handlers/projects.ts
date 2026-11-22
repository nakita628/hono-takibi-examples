import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameDeleteRevisionRoute,
  deleteV1NameRoute,
  getV1NameGetContentsRoute,
  getV1NameListRevisionsRoute,
  getV1NameLocationsRoute,
  getV1NameOperationsRoute,
  getV1NameRoute,
  getV1ParentApisRoute,
  getV1ParentArtifactsRoute,
  getV1ParentDeploymentsRoute,
  getV1ParentSpecsRoute,
  getV1ParentVersionsRoute,
  getV1ResourceGetIamPolicyRoute,
  patchV1NameRoute,
  postV1NameCancelRoute,
  postV1NameRollbackRoute,
  postV1NameTagRevisionRoute,
  postV1ParentApisRoute,
  postV1ParentArtifactsRoute,
  postV1ParentDeploymentsRoute,
  postV1ParentInstancesRoute,
  postV1ParentSpecsRoute,
  postV1ParentVersionsRoute,
  postV1ResourceSetIamPolicyRoute,
  postV1ResourceTestIamPermissionsRoute,
  putV1NameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(deleteV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1NameDeleteRevisionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameGetContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameListRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameRollbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameTagRevisionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentApisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentApisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentArtifactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentArtifactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentSpecsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentSpecsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
