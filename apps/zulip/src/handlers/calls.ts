import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCallsBigbluebuttonCreateRoute,
  postCallsConstructorgroupsCreateRoute,
  postCallsGoogleMeetCreateRoute,
  postCallsNextcloudTalkCreateRoute,
  postCallsWebexCreateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const callsHandler = app
  .openapi(getCallsBigbluebuttonCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsNextcloudTalkCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsWebexCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsGoogleMeetCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsConstructorgroupsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
