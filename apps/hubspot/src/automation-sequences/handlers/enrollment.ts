import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAutomationSequences202609EnrollmentsContactContactIdRoute,
  postAutomationSequences202609EnrollmentsRoute,
  postAutomationSequences202609ServiceaccountsEnrollmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const enrollmentHandler = app
  .openapi(postAutomationSequences202609EnrollmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAutomationSequences202609EnrollmentsContactContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAutomationSequences202609ServiceaccountsEnrollmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
