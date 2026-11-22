import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWWorkspaceAzureTriggersDeletePathRoute,
  deleteWWorkspaceAzureTriggersSubscriptionsDeletePathRoute,
  getWWorkspaceAzureTriggersExistsPathRoute,
  getWWorkspaceAzureTriggersGetPathRoute,
  getWWorkspaceAzureTriggersListRoute,
  postWWorkspaceAzureTriggersBasicTopicsListPathRoute,
  postWWorkspaceAzureTriggersCreateRoute,
  postWWorkspaceAzureTriggersNamespacesListPathRoute,
  postWWorkspaceAzureTriggersNamespacesSubscriptionsListPathRoute,
  postWWorkspaceAzureTriggersNamespacesTopicsListPathRoute,
  postWWorkspaceAzureTriggersSetmodePathRoute,
  postWWorkspaceAzureTriggersTestRoute,
  postWWorkspaceAzureTriggersUpdatePathRoute,
} from '../routes'

const app = new OpenAPIHono()

export const azureTriggerHandler = app
  .openapi(postWWorkspaceAzureTriggersCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAzureTriggersUpdatePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceAzureTriggersDeletePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAzureTriggersGetPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAzureTriggersListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAzureTriggersExistsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAzureTriggersSetmodePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAzureTriggersTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAzureTriggersNamespacesTopicsListPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAzureTriggersNamespacesSubscriptionsListPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceAzureTriggersSubscriptionsDeletePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAzureTriggersNamespacesListPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAzureTriggersBasicTopicsListPathRoute, (c) => {
    throw new Error('Not implemented')
  })
