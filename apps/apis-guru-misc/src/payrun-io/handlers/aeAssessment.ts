import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEmployerEmployerIdEmployeeEmployeeIdAEAssessmentAEAssessmentIdRoute,
  getEmployerEmployerIdEmployeeEmployeeIdAEAssessmentAEAssessmentIdRoute,
  getEmployerEmployerIdEmployeeEmployeeIdAEAssessmentsRoute,
  getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdAEAssessmentsRoute,
  postEmployerEmployerIdEmployeeEmployeeIdAEAssessmentsRoute,
  putEmployerEmployerIdEmployeeEmployeeIdAEAssessmentAEAssessmentIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aeAssessmentHandler = app
  .openapi(deleteEmployerEmployerIdEmployeeEmployeeIdAEAssessmentAEAssessmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEmployeeEmployeeIdAEAssessmentAEAssessmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdEmployeeEmployeeIdAEAssessmentAEAssessmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEmployeeEmployeeIdAEAssessmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployerEmployerIdEmployeeEmployeeIdAEAssessmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdAEAssessmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
