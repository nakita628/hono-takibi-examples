import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1alpha1NameRoute,
  getV1alpha1NameRoute,
  getV1alpha1ParentDeploymentsRoute,
  getV1alpha1ParentDevicesRoute,
  getV1alpha1ParentNodesRoute,
  patchV1alpha1NameRoute,
  patchV1alpha1NameUpdateSignedRoute,
  postV1alpha1NameMoveRoute,
  postV1alpha1NameSignDeviceRoute,
  postV1alpha1ParentDeploymentsRoute,
  postV1alpha1ParentDevicesCreateSignedRoute,
  postV1alpha1ParentDevicesRoute,
  postV1alpha1ParentNodesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const nodesHandler = app
  .openapi(deleteV1alpha1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alpha1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1alpha1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1NameMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1NameSignDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1alpha1NameUpdateSignedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alpha1ParentDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1ParentDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alpha1ParentDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1ParentDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1ParentDevicesCreateSignedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alpha1ParentNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1ParentNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
