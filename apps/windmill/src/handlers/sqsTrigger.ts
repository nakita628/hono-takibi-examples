import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWWorkspaceSqsTriggersDeletePathRoute,
  getWWorkspaceSqsTriggersExistsPathRoute,
  getWWorkspaceSqsTriggersGetPathRoute,
  getWWorkspaceSqsTriggersListRoute,
  postWWorkspaceSqsTriggersCreateRoute,
  postWWorkspaceSqsTriggersSetmodePathRoute,
  postWWorkspaceSqsTriggersTestRoute,
  postWWorkspaceSqsTriggersUpdatePathRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sqsTriggerHandler = app
  .openapi(postWWorkspaceSqsTriggersCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceSqsTriggersUpdatePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceSqsTriggersDeletePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceSqsTriggersGetPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceSqsTriggersListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceSqsTriggersExistsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceSqsTriggersSetmodePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceSqsTriggersTestRoute, (c) => {
    throw new Error('Not implemented')
  })
