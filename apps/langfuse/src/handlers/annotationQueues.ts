import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiPublicAnnotationQueuesQueueIdAssignmentsRoute,
  deleteApiPublicAnnotationQueuesQueueIdItemsItemIdRoute,
  getApiPublicAnnotationQueuesQueueIdItemsItemIdRoute,
  getApiPublicAnnotationQueuesQueueIdItemsRoute,
  getApiPublicAnnotationQueuesQueueIdRoute,
  getApiPublicAnnotationQueuesRoute,
  patchApiPublicAnnotationQueuesQueueIdItemsItemIdRoute,
  postApiPublicAnnotationQueuesQueueIdAssignmentsRoute,
  postApiPublicAnnotationQueuesQueueIdItemsRoute,
  postApiPublicAnnotationQueuesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const annotationQueuesHandler = app
  .openapi(getApiPublicAnnotationQueuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPublicAnnotationQueuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicAnnotationQueuesQueueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicAnnotationQueuesQueueIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPublicAnnotationQueuesQueueIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicAnnotationQueuesQueueIdItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiPublicAnnotationQueuesQueueIdItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPublicAnnotationQueuesQueueIdItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPublicAnnotationQueuesQueueIdAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPublicAnnotationQueuesQueueIdAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
