import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameRoute,
  deleteApisCoordinationK8sIoV1NamespacesNamespaceLeasesRoute,
  getApisCoordinationK8sIoV1IndexRoute,
  getApisCoordinationK8sIoV1LeasesRoute,
  getApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameRoute,
  getApisCoordinationK8sIoV1NamespacesNamespaceLeasesRoute,
  getApisCoordinationK8sIoV1WatchLeasesRoute,
  getApisCoordinationK8sIoV1WatchNamespacesNamespaceLeasesNameRoute,
  getApisCoordinationK8sIoV1WatchNamespacesNamespaceLeasesRoute,
  patchApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameRoute,
  postApisCoordinationK8sIoV1NamespacesNamespaceLeasesRoute,
  putApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apisHandler = app
  .openapi(getApisCoordinationK8sIoV1IndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisCoordinationK8sIoV1LeasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisCoordinationK8sIoV1NamespacesNamespaceLeasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisCoordinationK8sIoV1NamespacesNamespaceLeasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisCoordinationK8sIoV1NamespacesNamespaceLeasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisCoordinationK8sIoV1WatchLeasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisCoordinationK8sIoV1WatchNamespacesNamespaceLeasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisCoordinationK8sIoV1WatchNamespacesNamespaceLeasesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
