import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGroupGroupIdMembersRoute,
  getGroupGroupIdOrgsRoute,
  getGroupGroupIdRolesRoute,
  getGroupGroupIdSettingsRoute,
  getGroupGroupIdTagsRoute,
  postGroupGroupIdOrgOrgIdMembersRoute,
  postGroupGroupIdTagsDeleteRoute,
  putGroupGroupIdSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsHandler = app
  .openapi(getGroupGroupIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupGroupIdOrgOrgIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupGroupIdOrgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupGroupIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupGroupIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGroupGroupIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupGroupIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupGroupIdTagsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
