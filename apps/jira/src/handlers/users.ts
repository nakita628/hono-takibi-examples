import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3UserColumnsRoute,
  deleteRestApi3UserRoute,
  getRestApi3UserBulkMigrationRoute,
  getRestApi3UserBulkRoute,
  getRestApi3UserColumnsRoute,
  getRestApi3UserEmailBulkRoute,
  getRestApi3UserEmailRoute,
  getRestApi3UserGroupsRoute,
  getRestApi3UserRoute,
  getRestApi3UsersRoute,
  getRestApi3UsersSearchRoute,
  postRestApi3UserRoute,
  putRestApi3UserColumnsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(deleteRestApi3UserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3UserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3UserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3UserBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3UserBulkMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3UserColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3UserColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3UserColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3UserEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3UserEmailBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3UserGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3UsersSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
