import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionSetAlarmStateRoute, postActionSetAlarmStateRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionSetAlarmStateHandler = app
  .openapi(getActionSetAlarmStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionSetAlarmStateRoute, (c) => {
    throw new Error('Not implemented')
  })
