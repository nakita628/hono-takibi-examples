import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersEmployersEmployerIdAssessmentsRoute,
  postProvidersEmployersConceptemployeesConceptEmployeeIdAssessmentInitiateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const assessmentHandler = app
  .openapi(postProvidersEmployersConceptemployeesConceptEmployeeIdAssessmentInitiateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployerIdAssessmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
