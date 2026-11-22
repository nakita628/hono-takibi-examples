import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAssessmentFrameworkShareRequestsRequestIdRequestTypeRoute,
  putAssessmentFrameworkShareRequestsRequestIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const assessmentFrameworkShareRequestsHandler = app
  .openapi(deleteAssessmentFrameworkShareRequestsRequestIdRequestTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAssessmentFrameworkShareRequestsRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
