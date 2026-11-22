import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2EngineeringInsightsRepositoriesRepositoryKeyProjectsProjectKeyRoute,
  getApiV2EngineeringInsightsRepositoriesRoute,
  putApiV2EngineeringInsightsRepositoriesProjectsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const insightsRepositoriesBetaHandler = app
  .openapi(getApiV2EngineeringInsightsRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2EngineeringInsightsRepositoriesProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2EngineeringInsightsRepositoriesRepositoryKeyProjectsProjectKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
