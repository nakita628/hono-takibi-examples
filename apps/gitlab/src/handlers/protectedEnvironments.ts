import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4GroupsIdProtectedEnvironmentsNameRoute,
  deleteApiV4ProjectsIdProtectedEnvironmentsNameRoute,
  getApiV4GroupsIdProtectedEnvironmentsNameRoute,
  getApiV4GroupsIdProtectedEnvironmentsRoute,
  getApiV4ProjectsIdProtectedEnvironmentsNameRoute,
  getApiV4ProjectsIdProtectedEnvironmentsRoute,
  postApiV4GroupsIdProtectedEnvironmentsRoute,
  postApiV4ProjectsIdProtectedEnvironmentsRoute,
  putApiV4GroupsIdProtectedEnvironmentsNameRoute,
  putApiV4ProjectsIdProtectedEnvironmentsNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const protectedEnvironmentsHandler = app
  .openapi(getApiV4ProjectsIdProtectedEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdProtectedEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdProtectedEnvironmentsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdProtectedEnvironmentsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdProtectedEnvironmentsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdProtectedEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdProtectedEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdProtectedEnvironmentsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdProtectedEnvironmentsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4GroupsIdProtectedEnvironmentsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
