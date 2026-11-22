import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1NameRoute,
  getV1beta1NameLocationsRoute,
  getV1beta1NameOperationsRoute,
  getV1beta1NameRoute,
  getV1beta1ParentDnsPeeringsRoute,
  getV1beta1ParentInstancesRoute,
  getV1beta1ParentNamespacesRoute,
  getV1beta1ParentVersionsRoute,
  getV1beta1ResourceGetIamPolicyRoute,
  patchV1beta1NameRoute,
  postV1beta1NameCancelRoute,
  postV1beta1NameRestartRoute,
  postV1beta1NameUpgradeRoute,
  postV1beta1ParentDnsPeeringsRoute,
  postV1beta1ParentInstancesRoute,
  postV1beta1ResourceRemoveIamPolicyRoute,
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
  .openapi(postV1beta1NameRestartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentDnsPeeringsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentDnsPeeringsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentNamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ResourceRemoveIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
