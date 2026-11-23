import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionEnableAlarmActionsRoute, postActionEnableAlarmActionsRoute } from '../routes'

const app = new OpenAPIHono()

export const actionEnableAlarmActionsHandler = app
  .openapi(getActionEnableAlarmActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionEnableAlarmActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
