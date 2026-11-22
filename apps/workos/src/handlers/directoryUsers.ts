import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDirectoriesDirectoryIdUsersRoute,
  getDirectoriesDirectoryIdUsersUserIdRoute,
  getDirectoryUsersIdRoute,
  getDirectoryUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const directoryUsersHandler = app
  .openapi(getDirectoriesDirectoryIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoriesDirectoryIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
