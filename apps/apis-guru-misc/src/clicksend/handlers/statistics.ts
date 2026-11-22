import { OpenAPIHono } from '@hono/zod-openapi'
import { getStatisticsSmsRoute, getStatisticsVoiceRoute } from '../routes'

const app = new OpenAPIHono()

export const statisticsHandler = app
  .openapi(getStatisticsSmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatisticsVoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
