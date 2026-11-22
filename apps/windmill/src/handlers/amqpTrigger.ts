import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWWorkspaceAmqpTriggersDeletePathRoute,
  getWWorkspaceAmqpTriggersExistsPathRoute,
  getWWorkspaceAmqpTriggersGetPathRoute,
  getWWorkspaceAmqpTriggersListRoute,
  postWWorkspaceAmqpTriggersCreateRoute,
  postWWorkspaceAmqpTriggersSetmodePathRoute,
  postWWorkspaceAmqpTriggersTestRoute,
  postWWorkspaceAmqpTriggersUpdatePathRoute,
} from '../routes'

const app = new OpenAPIHono()

export const amqpTriggerHandler = app
  .openapi(postWWorkspaceAmqpTriggersCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAmqpTriggersUpdatePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceAmqpTriggersDeletePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAmqpTriggersGetPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAmqpTriggersListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAmqpTriggersExistsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAmqpTriggersSetmodePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAmqpTriggersTestRoute, (c) => {
    throw new Error('Not implemented')
  })
