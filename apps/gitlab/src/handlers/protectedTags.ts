import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4ProjectsIdProtectedTagsNameRoute,
  getApiV4ProjectsIdProtectedTagsNameRoute,
  getApiV4ProjectsIdProtectedTagsRoute,
  postApiV4ProjectsIdProtectedTagsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const protectedTagsHandler = app
  .openapi(getApiV4ProjectsIdProtectedTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdProtectedTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdProtectedTagsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdProtectedTagsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
