import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApisBatchV1NamespacesNamespaceCronjobsNameRoute,
  deleteApisBatchV1NamespacesNamespaceCronjobsRoute,
  deleteApisBatchV1NamespacesNamespaceJobsNameRoute,
  deleteApisBatchV1NamespacesNamespaceJobsRoute,
  getApisBatchV1CronjobsRoute,
  getApisBatchV1IndexRoute,
  getApisBatchV1JobsRoute,
  getApisBatchV1NamespacesNamespaceCronjobsNameRoute,
  getApisBatchV1NamespacesNamespaceCronjobsNameStatusRoute,
  getApisBatchV1NamespacesNamespaceCronjobsRoute,
  getApisBatchV1NamespacesNamespaceJobsNameRoute,
  getApisBatchV1NamespacesNamespaceJobsNameStatusRoute,
  getApisBatchV1NamespacesNamespaceJobsRoute,
  getApisBatchV1WatchCronjobsRoute,
  getApisBatchV1WatchJobsRoute,
  getApisBatchV1WatchNamespacesNamespaceCronjobsNameRoute,
  getApisBatchV1WatchNamespacesNamespaceCronjobsRoute,
  getApisBatchV1WatchNamespacesNamespaceJobsNameRoute,
  getApisBatchV1WatchNamespacesNamespaceJobsRoute,
  patchApisBatchV1NamespacesNamespaceCronjobsNameRoute,
  patchApisBatchV1NamespacesNamespaceCronjobsNameStatusRoute,
  patchApisBatchV1NamespacesNamespaceJobsNameRoute,
  patchApisBatchV1NamespacesNamespaceJobsNameStatusRoute,
  postApisBatchV1NamespacesNamespaceCronjobsRoute,
  postApisBatchV1NamespacesNamespaceJobsRoute,
  putApisBatchV1NamespacesNamespaceCronjobsNameRoute,
  putApisBatchV1NamespacesNamespaceCronjobsNameStatusRoute,
  putApisBatchV1NamespacesNamespaceJobsNameRoute,
  putApisBatchV1NamespacesNamespaceJobsNameStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apisHandler = app
  .openapi(getApisBatchV1IndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisBatchV1CronjobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisBatchV1JobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisBatchV1NamespacesNamespaceCronjobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisBatchV1NamespacesNamespaceCronjobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisBatchV1NamespacesNamespaceCronjobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisBatchV1NamespacesNamespaceCronjobsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisBatchV1NamespacesNamespaceCronjobsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisBatchV1NamespacesNamespaceCronjobsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisBatchV1NamespacesNamespaceCronjobsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisBatchV1NamespacesNamespaceCronjobsNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisBatchV1NamespacesNamespaceCronjobsNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisBatchV1NamespacesNamespaceCronjobsNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisBatchV1NamespacesNamespaceJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisBatchV1NamespacesNamespaceJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisBatchV1NamespacesNamespaceJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisBatchV1NamespacesNamespaceJobsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisBatchV1NamespacesNamespaceJobsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisBatchV1NamespacesNamespaceJobsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisBatchV1NamespacesNamespaceJobsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisBatchV1NamespacesNamespaceJobsNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisBatchV1NamespacesNamespaceJobsNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisBatchV1NamespacesNamespaceJobsNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisBatchV1WatchCronjobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisBatchV1WatchJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisBatchV1WatchNamespacesNamespaceCronjobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisBatchV1WatchNamespacesNamespaceCronjobsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisBatchV1WatchNamespacesNamespaceJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisBatchV1WatchNamespacesNamespaceJobsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
