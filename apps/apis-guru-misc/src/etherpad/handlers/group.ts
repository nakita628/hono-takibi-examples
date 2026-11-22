import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCreateGroupIfNotExistsForRoute,
  getCreateGroupPadRoute,
  getCreateGroupRoute,
  getDeleteGroupRoute,
  getListAllGroupsRoute,
  getListPadsRoute,
  getListSessionsOfGroupRoute,
  postCreateGroupIfNotExistsForRoute,
  postCreateGroupPadRoute,
  postCreateGroupRoute,
  postDeleteGroupRoute,
  postListAllGroupsRoute,
  postListPadsRoute,
  postListSessionsOfGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupHandler = app
  .openapi(getCreateGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreateGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCreateGroupIfNotExistsForRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreateGroupIfNotExistsForRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCreateGroupPadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreateGroupPadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeleteGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeleteGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListAllGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postListAllGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListPadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postListPadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListSessionsOfGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postListSessionsOfGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
