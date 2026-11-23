import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGroupUsersIdRoute,
  getGroupUsersRoute,
  patchGroupUsersIdRoute,
  postGroupUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupUsersHandler = app
  .openapi(getGroupUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
