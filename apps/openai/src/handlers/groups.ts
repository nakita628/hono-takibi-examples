import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationGroupsGroupIdRoute,
  getOrganizationGroupsGroupIdRoute,
  getOrganizationGroupsRoute,
  postOrganizationGroupsGroupIdRoute,
  postOrganizationGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsHandler = app
  .openapi(getOrganizationGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
