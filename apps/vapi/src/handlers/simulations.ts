import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEvalSimulationIdRoute,
  getEvalSimulationConcurrencyRoute,
  getEvalSimulationIdRoute,
  getEvalSimulationRoute,
  patchEvalSimulationIdRoute,
  postEvalSimulationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const simulationsHandler = app
  .openapi(postEvalSimulationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEvalSimulationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEvalSimulationConcurrencyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEvalSimulationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEvalSimulationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEvalSimulationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
