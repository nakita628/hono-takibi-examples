import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiWorkflowsWorkflowIdRoute,
  getApiUserdataFilePublishRoute,
  getApiWorkflowsPublishedShareIdRoute,
  getApiWorkflowsRoute,
  getApiWorkflowsWorkflowIdContentRoute,
  getApiWorkflowsWorkflowIdRoute,
  patchApiWorkflowsWorkflowIdRoute,
  postApiUserdataFilePublishRoute,
  postApiWorkflowsRoute,
  postApiWorkflowsWorkflowIdForkRoute,
  postApiWorkflowsWorkflowIdVersionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workflowsHandler = app
  .openapi(getApiUserdataFilePublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUserdataFilePublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiWorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiWorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiWorkflowsWorkflowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiWorkflowsWorkflowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiWorkflowsWorkflowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiWorkflowsWorkflowIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiWorkflowsWorkflowIdForkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiWorkflowsWorkflowIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiWorkflowsPublishedShareIdRoute, (c) => {
    throw new Error('Not implemented')
  })
