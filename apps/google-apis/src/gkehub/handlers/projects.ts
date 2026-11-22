import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1NameRoute,
  getV1beta1NameGenerateConnectManifestRoute,
  getV1beta1NameGenerateExclusivityManifestRoute,
  getV1beta1NameLocationsRoute,
  getV1beta1NameOperationsRoute,
  getV1beta1NameRoute,
  getV1beta1ParentMembershipsRoute,
  getV1beta1ParentMembershipsValidateExclusivityRoute,
  getV1beta1ResourceGetIamPolicyRoute,
  patchV1beta1NameRoute,
  postV1beta1NameCancelRoute,
  postV1beta1ParentMembershipsRoute,
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
  .openapi(getV1beta1NameGenerateConnectManifestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameGenerateExclusivityManifestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentMembershipsValidateExclusivityRoute, (c) => {
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
