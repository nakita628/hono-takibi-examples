import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEvalSimulationSuiteIdRoute,
  getEvalSimulationSuiteIdRoute,
  getEvalSimulationSuiteRoute,
  patchEvalSimulationOnboardingSuiteSuiteIdRoute,
  patchEvalSimulationSuiteIdRoute,
  postEvalSimulationOnboardingRequirementsRoute,
  postEvalSimulationOnboardingSuiteRoute,
  postEvalSimulationSuiteIdDuplicateRoute,
  postEvalSimulationSuiteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const simulationSuitesHandler = app
  .openapi(postEvalSimulationSuiteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEvalSimulationSuiteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEvalSimulationSuiteIdDuplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEvalSimulationSuiteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEvalSimulationSuiteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEvalSimulationSuiteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEvalSimulationOnboardingRequirementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEvalSimulationOnboardingSuiteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEvalSimulationOnboardingSuiteSuiteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
