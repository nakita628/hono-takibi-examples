import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameRoute,
  deleteApisPolicyV1NamespacesNamespacePoddisruptionbudgetsRoute,
  getApisPolicyV1IndexRoute,
  getApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameRoute,
  getApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatusRoute,
  getApisPolicyV1NamespacesNamespacePoddisruptionbudgetsRoute,
  getApisPolicyV1PoddisruptionbudgetsRoute,
  getApisPolicyV1WatchNamespacesNamespacePoddisruptionbudgetsNameRoute,
  getApisPolicyV1WatchNamespacesNamespacePoddisruptionbudgetsRoute,
  getApisPolicyV1WatchPoddisruptionbudgetsRoute,
  patchApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameRoute,
  patchApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatusRoute,
  postApisPolicyV1NamespacesNamespacePoddisruptionbudgetsRoute,
  putApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameRoute,
  putApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apisHandler = app
  .openapi(getApisPolicyV1IndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisPolicyV1NamespacesNamespacePoddisruptionbudgetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisPolicyV1NamespacesNamespacePoddisruptionbudgetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisPolicyV1NamespacesNamespacePoddisruptionbudgetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisPolicyV1PoddisruptionbudgetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisPolicyV1WatchNamespacesNamespacePoddisruptionbudgetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisPolicyV1WatchNamespacesNamespacePoddisruptionbudgetsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisPolicyV1WatchPoddisruptionbudgetsRoute, (c) => {
    throw new Error('Not implemented')
  })
