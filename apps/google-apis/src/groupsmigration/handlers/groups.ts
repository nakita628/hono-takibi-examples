import { OpenAPIHono } from '@hono/zod-openapi'
import { postGroupsV1GroupsGroupIdArchiveRoute } from '../routes'

const app = new OpenAPIHono()

export const groupsHandler = app.openapi(postGroupsV1GroupsGroupIdArchiveRoute, (c) => {
  throw new Error('Not implemented')
})
