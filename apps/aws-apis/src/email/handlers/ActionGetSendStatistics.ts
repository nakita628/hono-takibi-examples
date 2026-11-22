import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionGetSendStatisticsRoute, postActionGetSendStatisticsRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionGetSendStatisticsHandler = app
  .openapi(getActionGetSendStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetSendStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
