import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1PrivateAnnotationQueuesIdRoute,
  getV1PrivateAnnotationQueuesQueueIdLocksRoute,
  getV1PrivateAnnotationQueuesRoute,
  patchV1PrivateAnnotationQueuesIdRoute,
  postV1PrivateAnnotationQueuesBatchRoute,
  postV1PrivateAnnotationQueuesDeleteRoute,
  postV1PrivateAnnotationQueuesIdItemsAddRoute,
  postV1PrivateAnnotationQueuesIdItemsDeleteRoute,
  postV1PrivateAnnotationQueuesIdItemsSearchRoute,
  postV1PrivateAnnotationQueuesRoute,
  putV1PrivateAnnotationQueuesQueueIdItemsItemIdLockRoute,
} from '../routes'

const app = new OpenAPIHono()

export const annotationQueuesHandler = app
  .openapi(postV1PrivateAnnotationQueuesIdItemsAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateAnnotationQueuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateAnnotationQueuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateAnnotationQueuesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateAnnotationQueuesDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateAnnotationQueuesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PrivateAnnotationQueuesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateAnnotationQueuesQueueIdLocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PrivateAnnotationQueuesQueueIdItemsItemIdLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateAnnotationQueuesIdItemsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateAnnotationQueuesIdItemsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
