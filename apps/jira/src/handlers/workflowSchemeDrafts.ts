import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3WorkflowschemeIdDraftDefaultRoute,
  deleteRestApi3WorkflowschemeIdDraftIssuetypeIssueTypeRoute,
  deleteRestApi3WorkflowschemeIdDraftRoute,
  deleteRestApi3WorkflowschemeIdDraftWorkflowRoute,
  getRestApi3WorkflowschemeIdDraftDefaultRoute,
  getRestApi3WorkflowschemeIdDraftIssuetypeIssueTypeRoute,
  getRestApi3WorkflowschemeIdDraftRoute,
  getRestApi3WorkflowschemeIdDraftWorkflowRoute,
  postRestApi3WorkflowschemeIdCreatedraftRoute,
  postRestApi3WorkflowschemeIdDraftPublishRoute,
  putRestApi3WorkflowschemeIdDraftDefaultRoute,
  putRestApi3WorkflowschemeIdDraftIssuetypeIssueTypeRoute,
  putRestApi3WorkflowschemeIdDraftRoute,
  putRestApi3WorkflowschemeIdDraftWorkflowRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workflowSchemeDraftsHandler = app
  .openapi(postRestApi3WorkflowschemeIdCreatedraftRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3WorkflowschemeIdDraftRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3WorkflowschemeIdDraftRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3WorkflowschemeIdDraftRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3WorkflowschemeIdDraftDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3WorkflowschemeIdDraftDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3WorkflowschemeIdDraftDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3WorkflowschemeIdDraftIssuetypeIssueTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3WorkflowschemeIdDraftIssuetypeIssueTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3WorkflowschemeIdDraftIssuetypeIssueTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3WorkflowschemeIdDraftPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3WorkflowschemeIdDraftWorkflowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3WorkflowschemeIdDraftWorkflowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3WorkflowschemeIdDraftWorkflowRoute, (c) => {
    throw new Error('Not implemented')
  })
