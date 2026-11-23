import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1NameRoute,
  getV1beta1NameOperationsRoute,
  getV1beta1NameRoute,
  getV1beta1ParentViolationsRoute,
  getV1beta1ParentWorkloadsRoute,
  getV1beta1ProjectTargetAnalyzeWorkloadMoveRoute,
  getV1beta1SourceTargetAnalyzeWorkloadMoveRoute,
  patchV1beta1NameRoute,
  postV1beta1NameAcknowledgeRoute,
  postV1beta1NameRestrictAllowedResourcesRoute,
  postV1beta1ParentWorkloadsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1beta1Handler = app
  .openapi(deleteV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameAcknowledgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameRestrictAllowedResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentViolationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentWorkloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentWorkloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ProjectTargetAnalyzeWorkloadMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1SourceTargetAnalyzeWorkloadMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
