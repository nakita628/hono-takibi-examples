import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAssessmentFrameworksFrameworkIdRoute,
  getAssessmentFrameworksFrameworkIdRoute,
  postAssessmentFrameworksFrameworkIdShareRequestsRoute,
  postAssessmentFrameworksRoute,
  putAssessmentFrameworksFrameworkIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const assessmentFrameworksHandler = app
  .openapi(postAssessmentFrameworksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAssessmentFrameworksFrameworkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssessmentFrameworksFrameworkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAssessmentFrameworksFrameworkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssessmentFrameworksFrameworkIdShareRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
