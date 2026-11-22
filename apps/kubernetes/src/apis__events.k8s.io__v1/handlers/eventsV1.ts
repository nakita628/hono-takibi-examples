import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApisEventsK8sIoV1NamespacesNamespaceEventsNameRoute,
  deleteApisEventsK8sIoV1NamespacesNamespaceEventsRoute,
  getApisEventsK8sIoV1EventsRoute,
  getApisEventsK8sIoV1IndexRoute,
  getApisEventsK8sIoV1NamespacesNamespaceEventsNameRoute,
  getApisEventsK8sIoV1NamespacesNamespaceEventsRoute,
  getApisEventsK8sIoV1WatchEventsRoute,
  getApisEventsK8sIoV1WatchNamespacesNamespaceEventsNameRoute,
  getApisEventsK8sIoV1WatchNamespacesNamespaceEventsRoute,
  patchApisEventsK8sIoV1NamespacesNamespaceEventsNameRoute,
  postApisEventsK8sIoV1NamespacesNamespaceEventsRoute,
  putApisEventsK8sIoV1NamespacesNamespaceEventsNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eventsV1Handler = app
  .openapi(getApisEventsK8sIoV1IndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisEventsK8sIoV1EventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisEventsK8sIoV1NamespacesNamespaceEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisEventsK8sIoV1NamespacesNamespaceEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisEventsK8sIoV1NamespacesNamespaceEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisEventsK8sIoV1NamespacesNamespaceEventsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisEventsK8sIoV1NamespacesNamespaceEventsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisEventsK8sIoV1NamespacesNamespaceEventsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisEventsK8sIoV1NamespacesNamespaceEventsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisEventsK8sIoV1WatchEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisEventsK8sIoV1WatchNamespacesNamespaceEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisEventsK8sIoV1WatchNamespacesNamespaceEventsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
