import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWWorkspaceNatsTriggersDeletePathRoute,
  getWWorkspaceNatsTriggersExistsPathRoute,
  getWWorkspaceNatsTriggersGetPathRoute,
  getWWorkspaceNatsTriggersListRoute,
  postWWorkspaceNatsTriggersCreateRoute,
  postWWorkspaceNatsTriggersSetmodePathRoute,
  postWWorkspaceNatsTriggersTestRoute,
  postWWorkspaceNatsTriggersUpdatePathRoute,
} from '../routes'

const app = new OpenAPIHono()

export const natsTriggerHandler = app
  .openapi(postWWorkspaceNatsTriggersCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceNatsTriggersUpdatePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceNatsTriggersDeletePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceNatsTriggersGetPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceNatsTriggersListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceNatsTriggersExistsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceNatsTriggersSetmodePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceNatsTriggersTestRoute, (c) => {
    throw new Error('Not implemented')
  })
