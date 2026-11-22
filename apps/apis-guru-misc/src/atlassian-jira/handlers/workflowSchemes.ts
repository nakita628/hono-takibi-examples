import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3WorkflowschemeIdDefaultRoute,
  deleteRestApi3WorkflowschemeIdIssuetypeIssueTypeRoute,
  deleteRestApi3WorkflowschemeIdRoute,
  deleteRestApi3WorkflowschemeIdWorkflowRoute,
  getRestApi3WorkflowschemeIdDefaultRoute,
  getRestApi3WorkflowschemeIdIssuetypeIssueTypeRoute,
  getRestApi3WorkflowschemeIdRoute,
  getRestApi3WorkflowschemeIdWorkflowRoute,
  getRestApi3WorkflowschemeRoute,
  postRestApi3WorkflowschemeRoute,
  putRestApi3WorkflowschemeIdDefaultRoute,
  putRestApi3WorkflowschemeIdIssuetypeIssueTypeRoute,
  putRestApi3WorkflowschemeIdRoute,
  putRestApi3WorkflowschemeIdWorkflowRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workflowSchemesHandler = app
  .openapi(getRestApi3WorkflowschemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3WorkflowschemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3WorkflowschemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3WorkflowschemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3WorkflowschemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3WorkflowschemeIdDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3WorkflowschemeIdDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3WorkflowschemeIdDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3WorkflowschemeIdIssuetypeIssueTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3WorkflowschemeIdIssuetypeIssueTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3WorkflowschemeIdIssuetypeIssueTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3WorkflowschemeIdWorkflowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3WorkflowschemeIdWorkflowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3WorkflowschemeIdWorkflowRoute, (c) => {
    throw new Error('Not implemented')
  })
