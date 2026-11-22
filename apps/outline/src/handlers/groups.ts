import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postGroupsAddUserRoute,
  postGroupsCreateRoute,
  postGroupsDeleteRoute,
  postGroupsInfoRoute,
  postGroupsListRoute,
  postGroupsMembershipsRoute,
  postGroupsRemoveUserRoute,
  postGroupsUpdateRoute,
  postGroupsUpdateUserRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsHandler = app
  .openapi(postGroupsInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsAddUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsRemoveUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsUpdateUserRoute, (c) => {
    throw new Error('Not implemented')
  })
