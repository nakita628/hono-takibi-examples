import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3WorkflowEntityIdRoute,
  getRestApi3WorkflowsCapabilitiesRoute,
  getRestApi3WorkflowsDefaultEditorRoute,
  getRestApi3WorkflowSearchRoute,
  getRestApi3WorkflowsSearchRoute,
  getRestApi3WorkflowWorkflowIdProjectProjectIdIssueTypeUsagesRoute,
  getRestApi3WorkflowWorkflowIdProjectUsagesRoute,
  getRestApi3WorkflowWorkflowIdWorkflowSchemesRoute,
  postRestApi3WorkflowHistoryListRoute,
  postRestApi3WorkflowHistoryRoute,
  postRestApi3WorkflowsCopyRoute,
  postRestApi3WorkflowsCreateRoute,
  postRestApi3WorkflowsCreateValidationRoute,
  postRestApi3WorkflowsPreviewRoute,
  postRestApi3WorkflowsRoute,
  postRestApi3WorkflowsUpdateRoute,
  postRestApi3WorkflowsUpdateValidationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workflowsHandler = app
  .openapi(postRestApi3WorkflowHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3WorkflowHistoryListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3WorkflowSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3WorkflowEntityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3WorkflowWorkflowIdProjectProjectIdIssueTypeUsagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3WorkflowWorkflowIdProjectUsagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3WorkflowWorkflowIdWorkflowSchemesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3WorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3WorkflowsCapabilitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3WorkflowsCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3WorkflowsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3WorkflowsCreateValidationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3WorkflowsDefaultEditorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3WorkflowsPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3WorkflowsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3WorkflowsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3WorkflowsUpdateValidationRoute, (c) => {
    throw new Error('Not implemented')
  })
