import { OpenAPIHono } from '@hono/zod-openapi'
import { getVVersionQualityDailyRoute, getVVersionQualityOverallRoute } from '../routes'

const app = new OpenAPIHono()

export const qualityHandler = app
  .openapi(getVVersionQualityDailyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVVersionQualityOverallRoute, (c) => {
    throw new Error('Not implemented')
  })
