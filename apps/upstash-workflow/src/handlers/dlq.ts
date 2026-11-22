import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2WorkflowsDlqCallbackDlqIdRoute,
  deleteV2WorkflowsDlqDlqIdRoute,
  deleteV2WorkflowsDlqRoute,
  getV2WorkflowsDlqDlqIdRoute,
  getV2WorkflowsDlqRoute,
  postV2WorkflowsDlqCallbackDlqIdRoute,
  postV2WorkflowsDlqRestartDlqIdRoute,
  postV2WorkflowsDlqRestartRoute,
  postV2WorkflowsDlqResumeDlqIdRoute,
  postV2WorkflowsDlqResumeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dlqHandler = app
  .openapi(getV2WorkflowsDlqRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2WorkflowsDlqRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WorkflowsDlqDlqIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2WorkflowsDlqDlqIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2WorkflowsDlqResumeDlqIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2WorkflowsDlqResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2WorkflowsDlqRestartDlqIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2WorkflowsDlqRestartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2WorkflowsDlqCallbackDlqIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2WorkflowsDlqCallbackDlqIdRoute, (c) => {
    throw new Error('Not implemented')
  })
