import { OpenAPIHono } from '@hono/zod-openapi'
import { postGroupsV1GroupsGroupIdArchiveRoute } from './routes'
import { postGroupsV1GroupsGroupIdArchiveRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(
  postGroupsV1GroupsGroupIdArchiveRoute,
  postGroupsV1GroupsGroupIdArchiveRouteHandler,
)

export default app
