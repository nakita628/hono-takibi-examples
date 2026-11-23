import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersMeCalendarListCalendarIdRoute,
  getUsersMeCalendarListCalendarIdRoute,
  getUsersMeCalendarListRoute,
  getUsersMeSettingsRoute,
  getUsersMeSettingsSettingRoute,
  patchUsersMeCalendarListCalendarIdRoute,
  postUsersMeCalendarListRoute,
  postUsersMeCalendarListWatchRoute,
  postUsersMeSettingsWatchRoute,
  putUsersMeCalendarListCalendarIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
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
  .openapi(getUsersMeSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersMeSettingsWatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersMeSettingsSettingRoute, (c) => {
    throw new Error('Not implemented')
  })
