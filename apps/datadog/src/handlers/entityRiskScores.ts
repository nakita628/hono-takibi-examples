import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2SecurityEntitiesRiskScoresEntityIdRoute,
  getApiV2SecurityEntitiesRiskScoresRoute,
} from '../routes'

const app = new OpenAPIHono()

export const entityRiskScoresHandler = app
  .openapi(getApiV2SecurityEntitiesRiskScoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityEntitiesRiskScoresEntityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
