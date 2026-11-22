import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEvalSimulationPersonalityIdRoute,
  getEvalSimulationPersonalityIdRoute,
  getEvalSimulationPersonalityRoute,
  patchEvalSimulationPersonalityIdRoute,
  postEvalSimulationPersonalityRoute,
} from '../routes'

const app = new OpenAPIHono()

export const simulationPersonalitiesHandler = app
  .openapi(postEvalSimulationPersonalityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEvalSimulationPersonalityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEvalSimulationPersonalityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEvalSimulationPersonalityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEvalSimulationPersonalityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
