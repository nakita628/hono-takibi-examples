import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionPutCompositeAlarmRoute, postActionPutCompositeAlarmRoute } from '../routes'

const app = new OpenAPIHono()

export const actionPutCompositeAlarmHandler = app
  .openapi(getActionPutCompositeAlarmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionPutCompositeAlarmRoute, (c) => {
    throw new Error('Not implemented')
  })
