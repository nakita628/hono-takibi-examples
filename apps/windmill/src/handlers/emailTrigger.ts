import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWWorkspaceEmailTriggersDeletePathRoute,
  getWWorkspaceEmailTriggersExistsPathRoute,
  getWWorkspaceEmailTriggersGetPathRoute,
  getWWorkspaceEmailTriggersListRoute,
  postWWorkspaceEmailTriggersCreateRoute,
  postWWorkspaceEmailTriggersLocalPartExistsRoute,
  postWWorkspaceEmailTriggersSetmodePathRoute,
  postWWorkspaceEmailTriggersUpdatePathRoute,
} from '../routes'

const app = new OpenAPIHono()

export const emailTriggerHandler = app
  .openapi(postWWorkspaceEmailTriggersCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceEmailTriggersUpdatePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceEmailTriggersDeletePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceEmailTriggersGetPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceEmailTriggersListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceEmailTriggersExistsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceEmailTriggersLocalPartExistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceEmailTriggersSetmodePathRoute, (c) => {
    throw new Error('Not implemented')
  })
