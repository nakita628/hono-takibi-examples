import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDisableAlarmActionsRoute, postActionDisableAlarmActionsRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDisableAlarmActionsHandler = app
  .openapi(getActionDisableAlarmActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDisableAlarmActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
