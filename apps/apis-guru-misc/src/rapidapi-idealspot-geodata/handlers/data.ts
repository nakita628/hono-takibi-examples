import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDataInsightsInsightIdQueryRoute,
  getDataInsightsInsightIdRoute,
  getDataInsightsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dataHandler = app
  .openapi(getDataInsightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataInsightsInsightIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataInsightsInsightIdQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
