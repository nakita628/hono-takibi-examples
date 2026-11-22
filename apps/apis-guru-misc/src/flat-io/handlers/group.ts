import { OpenAPIHono } from '@hono/zod-openapi'
import { getGroupsGroupRoute, getGroupsGroupScoresRoute, getGroupsGroupUsersRoute } from '../routes'

const app = new OpenAPIHono()

export const groupHandler = app
  .openapi(getGroupsGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupScoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
