import { OpenAPIHono } from '@hono/zod-openapi'
import {
  patchProvidersEmployersConceptemployeesConceptEmployeeIdPreboardingtrajectoryRoute,
  postProvidersEmployersConceptemployeesConceptEmployeeIdPreboardingtrajectoryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const preboardingTrajectoryHandler = app
  .openapi(
    patchProvidersEmployersConceptemployeesConceptEmployeeIdPreboardingtrajectoryRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProvidersEmployersConceptemployeesConceptEmployeeIdPreboardingtrajectoryRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
