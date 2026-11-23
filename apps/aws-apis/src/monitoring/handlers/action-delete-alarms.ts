import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteAlarmsRoute, postActionDeleteAlarmsRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDeleteAlarmsHandler = app
  .openapi(getActionDeleteAlarmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteAlarmsRoute, (c) => {
    throw new Error('Not implemented')
  })
