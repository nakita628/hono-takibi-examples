import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGroupsGroupIdExtensionsExtensionIdRoute,
  getGroupsGroupIdExtensionsExtensionIdRoute,
  getGroupsGroupIdExtensionsRoute,
  patchGroupsGroupIdExtensionsExtensionIdRoute,
  postGroupsGroupIdExtensionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsExtensionHandler = app
  .openapi(getGroupsGroupIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
