import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiAtlasV2GroupsGroupIdActivityFeedRoute,
  getApiAtlasV2OrgsOrgIdActivityFeedRoute,
} from '../routes'

const app = new OpenAPIHono()

export const activityFeedHandler = app
  .openapi(getApiAtlasV2GroupsGroupIdActivityFeedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2OrgsOrgIdActivityFeedRoute, (c) => {
    throw new Error('Not implemented')
  })
