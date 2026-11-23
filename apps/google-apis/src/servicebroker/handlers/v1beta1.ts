import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1NameRoute,
  getV1beta1NameLastOperationRoute,
  getV1beta1NameRoute,
  getV1beta1ParentBindingsRoute,
  getV1beta1ParentBrokersRoute,
  getV1beta1ParentInstancesRoute,
  getV1beta1ParentV2CatalogRoute,
  getV1beta1ResourceGetIamPolicyRoute,
  patchV1beta1NameRoute,
  postV1beta1ParentBrokersRoute,
  postV1beta1ResourceSetIamPolicyRoute,
  postV1beta1ResourceTestIamPermissionsRoute,
  putV1beta1ParentServiceBindingsBindingIdRoute,
  putV1beta1ParentV2ServiceInstancesInstanceIdRoute,
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
  .openapi(getV1beta1NameLastOperationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentBindingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentBrokersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentBrokersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1beta1ParentServiceBindingsBindingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentV2CatalogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1beta1ParentV2ServiceInstancesInstanceIdRoute, (c) => {
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
