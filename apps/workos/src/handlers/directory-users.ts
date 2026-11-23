import { OpenAPIHono } from '@hono/zod-openapi'
import { getDirectoryUsersIdRoute, getDirectoryUsersRoute } from '../routes'

const app = new OpenAPIHono()

export const directoryUsersHandler = app
  .openapi(getDirectoryUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
