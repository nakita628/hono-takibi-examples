import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1betaNameRoute,
  getV1betaNameOperationsRoute,
  getV1betaNameRoute,
  getV1betaParentWorkstationClustersRoute,
  getV1betaParentWorkstationConfigsListUsableRoute,
  getV1betaParentWorkstationConfigsRoute,
  getV1betaParentWorkstationsListUsableRoute,
  getV1betaParentWorkstationsRoute,
  getV1betaResourceGetIamPolicyRoute,
  patchV1betaNameRoute,
  postV1betaNameCancelRoute,
  postV1betaNameStartRoute,
  postV1betaNameStopRoute,
  postV1betaParentWorkstationClustersRoute,
  postV1betaParentWorkstationConfigsRoute,
  postV1betaParentWorkstationsRoute,
  postV1betaResourceSetIamPolicyRoute,
  postV1betaResourceTestIamPermissionsRoute,
  postV1betaWorkstationGenerateAccessTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(deleteV1betaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1betaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaNameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaNameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaNameStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaNameStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaParentWorkstationClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaParentWorkstationClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaParentWorkstationConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaParentWorkstationConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaParentWorkstationConfigsListUsableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaParentWorkstationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaParentWorkstationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaParentWorkstationsListUsableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaWorkstationGenerateAccessTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
