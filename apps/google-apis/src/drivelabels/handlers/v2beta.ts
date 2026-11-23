import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2betaNameRoute,
  getV2betaLabelsRoute,
  getV2betaLimitsLabelRoute,
  getV2betaNameRoute,
  getV2betaParentLocksRoute,
  getV2betaParentPermissionsRoute,
  patchV2betaParentPermissionsRoute,
  postV2betaLabelsRoute,
  postV2betaNameDeltaRoute,
  postV2betaNameDisableRoute,
  postV2betaNameEnableRoute,
  postV2betaNamePublishRoute,
  postV2betaNameUpdateLabelCopyModeRoute,
  postV2betaParentPermissionsBatchDeleteRoute,
  postV2betaParentPermissionsBatchUpdateRoute,
  postV2betaParentPermissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v2betaHandler = app
  .openapi(getV2betaLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2betaLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2betaLimitsLabelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2betaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2betaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2betaNameDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2betaNameDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2betaNameEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2betaNamePublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2betaNameUpdateLabelCopyModeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2betaParentLocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2betaParentPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2betaParentPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2betaParentPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2betaParentPermissionsBatchDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2betaParentPermissionsBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
