import { OpenAPIHono } from '@hono/zod-openapi'
import { getDirectoryGroupsIdRoute, getDirectoryGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const directoryGroupsHandler = app
  .openapi(getDirectoryGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
