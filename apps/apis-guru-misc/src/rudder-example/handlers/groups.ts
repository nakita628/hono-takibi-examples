import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGroupsCategoriesGroupCategoryIdRoute,
  deleteGroupsGroupIdRoute,
  getGroupsCategoriesGroupCategoryIdRoute,
  getGroupsGroupIdRoute,
  getGroupsRoute,
  getGroupsTreeRoute,
  postGroupsCategoriesGroupCategoryIdRoute,
  postGroupsGroupIdReloadRoute,
  postGroupsGroupIdRoute,
  putGroupsCategoriesRoute,
  putGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsHandler = app
  .openapi(getGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGroupsCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsCategoriesGroupCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsCategoriesGroupCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsCategoriesGroupCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsTreeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdReloadRoute, (c) => {
    throw new Error('Not implemented')
  })
