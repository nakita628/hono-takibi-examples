import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2NameRoute,
  getV2NameLocationsRoute,
  getV2NameOperationsRoute,
  getV2NameRoute,
  getV2ParentFunctionsRoute,
  getV2ParentRuntimesRoute,
  getV2ResourceGetIamPolicyRoute,
  patchV2NameRoute,
  postV2NameAbortFunctionUpgradeRoute,
  postV2NameCommitFunctionUpgradeRoute,
  postV2NameGenerateDownloadUrlRoute,
  postV2NameRedirectFunctionUpgradeTrafficRoute,
  postV2NameRollbackFunctionUpgradeTrafficRoute,
  postV2NameSetupFunctionUpgradeConfigRoute,
  postV2ParentFunctionsGenerateUploadUrlRoute,
  postV2ParentFunctionsRoute,
  postV2ResourceSetIamPolicyRoute,
  postV2ResourceTestIamPermissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(deleteV2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2NameLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2NameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2NameAbortFunctionUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2NameCommitFunctionUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2NameGenerateDownloadUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2NameRedirectFunctionUpgradeTrafficRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2NameRollbackFunctionUpgradeTrafficRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2NameSetupFunctionUpgradeConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParentFunctionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ParentFunctionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ParentFunctionsGenerateUploadUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParentRuntimesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
