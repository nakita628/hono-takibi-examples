import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4GroupsIdAccessRequestsUserIdRoute,
  deleteApiV4ProjectsIdAccessRequestsUserIdRoute,
  getApiV4GroupsIdAccessRequestsRoute,
  getApiV4ProjectsIdAccessRequestsRoute,
  postApiV4GroupsIdAccessRequestsRoute,
  postApiV4ProjectsIdAccessRequestsRoute,
  putApiV4GroupsIdAccessRequestsUserIdApproveRoute,
  putApiV4ProjectsIdAccessRequestsUserIdApproveRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accessRequestsHandler = app
  .openapi(getApiV4GroupsIdAccessRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdAccessRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdAccessRequestsUserIdApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4GroupsIdAccessRequestsUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdAccessRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdAccessRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdAccessRequestsUserIdApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdAccessRequestsUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
