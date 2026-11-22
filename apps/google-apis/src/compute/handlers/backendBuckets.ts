import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectGlobalBackendBucketsBackendBucketRoute,
  getProjectsProjectGlobalBackendBucketsBackendBucketRoute,
  getProjectsProjectGlobalBackendBucketsResourceGetIamPolicyRoute,
  getProjectsProjectGlobalBackendBucketsRoute,
  patchProjectsProjectGlobalBackendBucketsBackendBucketRoute,
  postProjectsProjectGlobalBackendBucketsBackendBucketAddSignedUrlKeyRoute,
  postProjectsProjectGlobalBackendBucketsBackendBucketDeleteSignedUrlKeyRoute,
  postProjectsProjectGlobalBackendBucketsBackendBucketSetEdgeSecurityPolicyRoute,
  postProjectsProjectGlobalBackendBucketsResourceSetIamPolicyRoute,
  postProjectsProjectGlobalBackendBucketsResourceTestIamPermissionsRoute,
  postProjectsProjectGlobalBackendBucketsRoute,
  putProjectsProjectGlobalBackendBucketsBackendBucketRoute,
} from '../routes'

const app = new OpenAPIHono()

export const backendBucketsHandler = app
  .openapi(getProjectsProjectGlobalBackendBucketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalBackendBucketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectGlobalBackendBucketsBackendBucketRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalBackendBucketsBackendBucketRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectGlobalBackendBucketsBackendBucketRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsProjectGlobalBackendBucketsBackendBucketRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalBackendBucketsBackendBucketAddSignedUrlKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalBackendBucketsBackendBucketDeleteSignedUrlKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalBackendBucketsBackendBucketSetEdgeSecurityPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalBackendBucketsResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalBackendBucketsResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalBackendBucketsResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
