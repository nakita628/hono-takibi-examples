import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiUserdataFileRoute,
  getApiUserdataFileRoute,
  getApiUserdataRoute,
  getApiUserRoute,
  getApiUsersRoute,
  postApiUserdataFileMoveDestRoute,
  postApiUserdataFileRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userHandler = app
  .openapi(getApiUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserdataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUserdataFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserdataFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUserdataFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUserdataFileMoveDestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
