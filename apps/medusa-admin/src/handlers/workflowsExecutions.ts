import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdminWorkflowsExecutionsIdRoute,
  getAdminWorkflowsExecutionsRoute,
  getAdminWorkflowsExecutionsWorkflowIdSubscribeRoute,
  getAdminWorkflowsExecutionsWorkflowIdTransactionIdRoute,
  getAdminWorkflowsExecutionsWorkflowIdTransactionIdSubscribeRoute,
  postAdminWorkflowsExecutionsWorkflowIdRunRoute,
  postAdminWorkflowsExecutionsWorkflowIdStepsFailureRoute,
  postAdminWorkflowsExecutionsWorkflowIdStepsSuccessRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workflowsExecutionsHandler = app
  .openapi(getAdminWorkflowsExecutionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminWorkflowsExecutionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminWorkflowsExecutionsWorkflowIdRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminWorkflowsExecutionsWorkflowIdStepsFailureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminWorkflowsExecutionsWorkflowIdStepsSuccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminWorkflowsExecutionsWorkflowIdSubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminWorkflowsExecutionsWorkflowIdTransactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminWorkflowsExecutionsWorkflowIdTransactionIdSubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
