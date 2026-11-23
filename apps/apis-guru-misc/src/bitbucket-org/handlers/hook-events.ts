import { OpenAPIHono } from '@hono/zod-openapi'
import { getHookEventsRoute, getHookEventsSubjectTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const hookEventsHandler = app
  .openapi(getHookEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHookEventsSubjectTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
