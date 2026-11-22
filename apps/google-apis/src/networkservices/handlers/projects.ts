import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1NameRoute,
  getV1beta1NameLocationsRoute,
  getV1beta1NameOperationsRoute,
  getV1beta1NameRoute,
  getV1beta1ParentEndpointPoliciesRoute,
  getV1beta1ParentGatewaysRoute,
  getV1beta1ParentGrpcRoutesRoute,
  getV1beta1ParentHttpRoutesRoute,
  getV1beta1ParentMeshesRoute,
  getV1beta1ParentServiceBindingsRoute,
  getV1beta1ParentTcpRoutesRoute,
  getV1beta1ParentTlsRoutesRoute,
  getV1beta1ResourceGetIamPolicyRoute,
  patchV1beta1NameRoute,
  postV1beta1NameCancelRoute,
  postV1beta1ParentEndpointPoliciesRoute,
  postV1beta1ParentGatewaysRoute,
  postV1beta1ParentGrpcRoutesRoute,
  postV1beta1ParentHttpRoutesRoute,
  postV1beta1ParentMeshesRoute,
  postV1beta1ParentServiceBindingsRoute,
  postV1beta1ParentTcpRoutesRoute,
  postV1beta1ParentTlsRoutesRoute,
  postV1beta1ResourceSetIamPolicyRoute,
  postV1beta1ResourceTestIamPermissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(deleteV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentEndpointPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentEndpointPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentGatewaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentGatewaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentGrpcRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentGrpcRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentHttpRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentHttpRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentMeshesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentMeshesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentServiceBindingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentServiceBindingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentTcpRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentTcpRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentTlsRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentTlsRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
