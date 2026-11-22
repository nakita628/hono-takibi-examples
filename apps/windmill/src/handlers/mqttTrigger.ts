import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWWorkspaceMqttTriggersDeletePathRoute,
  getWWorkspaceMqttTriggersExistsPathRoute,
  getWWorkspaceMqttTriggersGetPathRoute,
  getWWorkspaceMqttTriggersListRoute,
  postWWorkspaceMqttTriggersCreateRoute,
  postWWorkspaceMqttTriggersSetmodePathRoute,
  postWWorkspaceMqttTriggersTestRoute,
  postWWorkspaceMqttTriggersUpdatePathRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mqttTriggerHandler = app
  .openapi(postWWorkspaceMqttTriggersCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceMqttTriggersUpdatePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceMqttTriggersDeletePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceMqttTriggersGetPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceMqttTriggersListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceMqttTriggersExistsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceMqttTriggersSetmodePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceMqttTriggersTestRoute, (c) => {
    throw new Error('Not implemented')
  })
