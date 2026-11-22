import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWWorkspaceGcpTriggersDeletePathRoute,
  deleteWWorkspaceGcpTriggersSubscriptionsDeletePathRoute,
  deleteWWorkspaceGcpTriggersSubscriptionsDeleteRoute,
  getWWorkspaceGcpTriggersExistsPathRoute,
  getWWorkspaceGcpTriggersGetPathRoute,
  getWWorkspaceGcpTriggersListRoute,
  getWWorkspaceGcpTriggersTopicsListPathRoute,
  getWWorkspaceGcpTriggersTopicsListRoute,
  postWWorkspaceGcpTriggersCreateRoute,
  postWWorkspaceGcpTriggersSetmodePathRoute,
  postWWorkspaceGcpTriggersSubscriptionsListPathRoute,
  postWWorkspaceGcpTriggersSubscriptionsListRoute,
  postWWorkspaceGcpTriggersTestRoute,
  postWWorkspaceGcpTriggersUpdatePathRoute,
} from '../routes'

const app = new OpenAPIHono()

export const gcpTriggerHandler = app
  .openapi(postWWorkspaceGcpTriggersCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceGcpTriggersUpdatePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceGcpTriggersDeletePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceGcpTriggersGetPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceGcpTriggersListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceGcpTriggersExistsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceGcpTriggersSetmodePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceGcpTriggersTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceGcpTriggersSubscriptionsDeletePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceGcpTriggersSubscriptionsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceGcpTriggersTopicsListPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceGcpTriggersTopicsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceGcpTriggersSubscriptionsListPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceGcpTriggersSubscriptionsListRoute, (c) => {
    throw new Error('Not implemented')
  })
