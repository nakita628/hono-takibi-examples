import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdminUsergroupsListChannelsRoute,
  postAdminUsergroupsAddChannelsRoute,
  postAdminUsergroupsAddTeamsRoute,
  postAdminUsergroupsRemoveChannelsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adminUsergroupsHandler = app
  .openapi(postAdminUsergroupsAddChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminUsergroupsAddTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminUsergroupsListChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminUsergroupsRemoveChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
