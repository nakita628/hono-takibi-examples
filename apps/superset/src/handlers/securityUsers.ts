import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1SecurityUsersPkRoute,
  deleteApiV1SecurityUsersPkSessionsRoute,
  getApiV1SecurityUsersIndexRoute,
  getApiV1SecurityUsersInfoRoute,
  getApiV1SecurityUsersPkRoute,
  postApiV1SecurityUsersIndexRoute,
  putApiV1SecurityUsersPkRoute,
} from '../routes'

const app = new OpenAPIHono()

export const securityUsersHandler = app
  .openapi(getApiV1SecurityUsersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SecurityUsersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SecurityUsersInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SecurityUsersPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SecurityUsersPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SecurityUsersPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SecurityUsersPkSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
