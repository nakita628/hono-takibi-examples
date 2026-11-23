import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getScenariosItemTimingsRoute,
  getScenariosLaneRolesRoute,
  getScenariosMiscRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scenariosHandler = app
  .openapi(getScenariosItemTimingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScenariosLaneRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScenariosMiscRoute, (c) => {
    throw new Error('Not implemented')
  })
