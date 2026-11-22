import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWWorkspaceHttpTriggersDeletePathRoute,
  getWWorkspaceHttpTriggersExistsPathRoute,
  getWWorkspaceHttpTriggersGetPathRoute,
  getWWorkspaceHttpTriggersListRoute,
  postWWorkspaceHttpTriggersCreateManyRoute,
  postWWorkspaceHttpTriggersCreateRoute,
  postWWorkspaceHttpTriggersRouteExistsRoute,
  postWWorkspaceHttpTriggersSetmodePathRoute,
  postWWorkspaceHttpTriggersUpdatePathRoute,
} from '../routes'

const app = new OpenAPIHono()

export const httpTriggerHandler = app
  .openapi(postWWorkspaceHttpTriggersCreateManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceHttpTriggersCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceHttpTriggersUpdatePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceHttpTriggersDeletePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceHttpTriggersGetPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceHttpTriggersListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceHttpTriggersExistsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceHttpTriggersRouteExistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceHttpTriggersSetmodePathRoute, (c) => {
    throw new Error('Not implemented')
  })
