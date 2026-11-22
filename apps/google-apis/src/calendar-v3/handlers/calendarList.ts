import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersMeCalendarListCalendarIdRoute,
  getUsersMeCalendarListCalendarIdRoute,
  getUsersMeCalendarListRoute,
  patchUsersMeCalendarListCalendarIdRoute,
  postUsersMeCalendarListRoute,
  postUsersMeCalendarListWatchRoute,
  putUsersMeCalendarListCalendarIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const calendarListHandler = app
  .openapi(getUsersMeCalendarListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersMeCalendarListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersMeCalendarListWatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersMeCalendarListCalendarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersMeCalendarListCalendarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersMeCalendarListCalendarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersMeCalendarListCalendarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
