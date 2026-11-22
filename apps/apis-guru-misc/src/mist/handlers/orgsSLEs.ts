import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1OrgsOrgIdInsightsMetricRoute,
  getApiV1OrgsOrgIdInsightsSitesSleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsSLEsHandler = app
  .openapi(getApiV1OrgsOrgIdInsightsSitesSleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdInsightsMetricRoute, (c) => {
    throw new Error('Not implemented')
  })
