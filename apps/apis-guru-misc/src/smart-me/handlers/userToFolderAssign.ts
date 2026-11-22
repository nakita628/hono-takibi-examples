import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteApiFolderUserAssignRoute, postApiFolderUserAssignRoute } from '../routes'

const app = new OpenAPIHono()

export const userToFolderAssignHandler = app
  .openapi(deleteApiFolderUserAssignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFolderUserAssignRoute, (c) => {
    throw new Error('Not implemented')
  })
