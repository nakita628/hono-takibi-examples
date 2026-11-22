import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiAtlasV2EventTypesRoute,
  getApiAtlasV2GroupsGroupIdEventsEventIdRoute,
  getApiAtlasV2GroupsGroupIdEventsRoute,
  getApiAtlasV2OrgsOrgIdEventsEventIdRoute,
  getApiAtlasV2OrgsOrgIdEventsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app
  .openapi(getApiAtlasV2EventTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2OrgsOrgIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2OrgsOrgIdEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
