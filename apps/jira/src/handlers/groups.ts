import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3GroupRoute,
  deleteRestApi3GroupUserRoute,
  getRestApi3GroupBulkRoute,
  getRestApi3GroupMemberRoute,
  getRestApi3GroupRoute,
  getRestApi3GroupsPickerRoute,
  postRestApi3GroupRoute,
  postRestApi3GroupUserRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsHandler = app
  .openapi(deleteRestApi3GroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3GroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3GroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3GroupBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3GroupMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3GroupUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3GroupUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3GroupsPickerRoute, (c) => {
    throw new Error('Not implemented')
  })
