import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyRoute,
  deleteApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyScheduledChangesIdRoute,
  getApiV2SegmentsProjectKeyEnvironmentKeyRoute,
  getApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyContextsContextKeyRoute,
  getApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyExportsExportIDRoute,
  getApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyImportsImportIDRoute,
  getApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyRoute,
  getApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyScheduledChangesIdRoute,
  getApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyScheduledChangesRoute,
  getApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyUsersUserKeyRoute,
  getApiV2SegmentsProjectKeySegmentKeyExpiringTargetsEnvironmentKeyRoute,
  getApiV2SegmentsProjectKeySegmentKeyExpiringUserTargetsEnvironmentKeyRoute,
  patchApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyRoute,
  patchApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyScheduledChangesIdRoute,
  patchApiV2SegmentsProjectKeySegmentKeyExpiringTargetsEnvironmentKeyRoute,
  patchApiV2SegmentsProjectKeySegmentKeyExpiringUserTargetsEnvironmentKeyRoute,
  postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySegmentsEvaluateRoute,
  postApiV2SegmentsProjectKeyEnvironmentKeyRoute,
  postApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyContextsRoute,
  postApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyExportsRoute,
  postApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyImportsRoute,
  postApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyScheduledChangesRoute,
  postApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const segmentsHandler = app
  .openapi(postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySegmentsEvaluateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SegmentsProjectKeyEnvironmentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SegmentsProjectKeyEnvironmentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyContextsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyContextsContextKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyExportsExportIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyImportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyImportsImportIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyUsersUserKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SegmentsProjectKeySegmentKeyExpiringTargetsEnvironmentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2SegmentsProjectKeySegmentKeyExpiringTargetsEnvironmentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SegmentsProjectKeySegmentKeyExpiringUserTargetsEnvironmentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2SegmentsProjectKeySegmentKeyExpiringUserTargetsEnvironmentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyScheduledChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyScheduledChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyScheduledChangesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyScheduledChangesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyScheduledChangesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
