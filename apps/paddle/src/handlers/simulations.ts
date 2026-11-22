import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSimulationsRoute,
  getSimulationsSimulationIdRoute,
  patchSimulationsSimulationIdRoute,
  postSimulationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const simulationsHandler = app
  .openapi(getSimulationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSimulationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSimulationsSimulationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSimulationsSimulationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
