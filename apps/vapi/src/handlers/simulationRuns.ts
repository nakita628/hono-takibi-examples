import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEvalSimulationRunIdItemItemIdRoute,
  getEvalSimulationRunIdItemRoute,
  getEvalSimulationRunIdRoute,
  getEvalSimulationRunRoute,
  patchEvalSimulationRunIdItemItemIdRoute,
  patchEvalSimulationRunIdRoute,
  postEvalSimulationRunIdItemItemIdGenerateRoute,
  postEvalSimulationRunRoute,
} from '../routes'

const app = new OpenAPIHono()

export const simulationRunsHandler = app
  .openapi(postEvalSimulationRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEvalSimulationRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEvalSimulationRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEvalSimulationRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEvalSimulationRunIdItemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEvalSimulationRunIdItemItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEvalSimulationRunIdItemItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEvalSimulationRunIdItemItemIdGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
