import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAssistantAlarmsRoute,
  postAssistantA11yModeRoute,
  postAssistantAlarmsDeleteRoute,
  postAssistantAlarmsVolumeRoute,
  postAssistantCheckReadyStatusRoute,
  postAssistantNotificationsRoute,
  postAssistantSetNightModeParamsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const assistantHandler = app
  .openapi(postAssistantA11yModeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssistantAlarmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssistantAlarmsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssistantAlarmsVolumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssistantCheckReadyStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssistantNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssistantSetNightModeParamsRoute, (c) => {
    throw new Error('Not implemented')
  })
