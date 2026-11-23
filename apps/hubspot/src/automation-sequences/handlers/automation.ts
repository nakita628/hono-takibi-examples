import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAutomationSequences202609ServiceaccountsSequencesSequenceIdRoute,
  getAutomationSequences202609EnrollmentsContactContactIdRoute,
  getAutomationSequences202609Route,
  getAutomationSequences202609SequenceIdRoute,
  getAutomationSequences202609ServiceaccountsSequencesRoute,
  getAutomationSequences202609ServiceaccountsSequencesSequenceIdPerformanceRoute,
  getAutomationSequences202609ServiceaccountsSequencesSequenceIdRoute,
  postAutomationSequences202609EnrollmentsRoute,
  postAutomationSequences202609ServiceaccountsEnrollmentsRoute,
  postAutomationSequences202609ServiceaccountsSequencesRoute,
  putAutomationSequences202609ServiceaccountsSequencesSequenceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const automationHandler = app
  .openapi(getAutomationSequences202609Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAutomationSequences202609EnrollmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAutomationSequences202609EnrollmentsContactContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAutomationSequences202609ServiceaccountsEnrollmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAutomationSequences202609ServiceaccountsSequencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAutomationSequences202609ServiceaccountsSequencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAutomationSequences202609ServiceaccountsSequencesSequenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAutomationSequences202609ServiceaccountsSequencesSequenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAutomationSequences202609ServiceaccountsSequencesSequenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAutomationSequences202609ServiceaccountsSequencesSequenceIdPerformanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAutomationSequences202609SequenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
