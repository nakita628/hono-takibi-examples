import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWWorkspaceWebsocketTriggersDeletePathRoute,
  getWWorkspaceWebsocketTriggersExistsPathRoute,
  getWWorkspaceWebsocketTriggersGetPathRoute,
  getWWorkspaceWebsocketTriggersListRoute,
  postWWorkspaceWebsocketTriggersCreateRoute,
  postWWorkspaceWebsocketTriggersSetmodePathRoute,
  postWWorkspaceWebsocketTriggersTestRoute,
  postWWorkspaceWebsocketTriggersUpdatePathRoute,
} from '../routes'

const app = new OpenAPIHono()

export const websocketTriggerHandler = app
  .openapi(postWWorkspaceWebsocketTriggersCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWebsocketTriggersUpdatePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceWebsocketTriggersDeletePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWebsocketTriggersGetPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWebsocketTriggersListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWebsocketTriggersExistsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWebsocketTriggersSetmodePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWebsocketTriggersTestRoute, (c) => {
    throw new Error('Not implemented')
  })
