import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEvalSimulationScenarioIdRoute,
  getEvalSimulationScenarioIdRoute,
  getEvalSimulationScenarioRoute,
  patchEvalSimulationScenarioIdRoute,
  postEvalSimulationScenarioRoute,
} from '../routes'

const app = new OpenAPIHono()

export const simulationScenariosHandler = app
  .openapi(postEvalSimulationScenarioRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEvalSimulationScenarioRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEvalSimulationScenarioIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEvalSimulationScenarioIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEvalSimulationScenarioIdRoute, (c) => {
    throw new Error('Not implemented')
  })
