import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiFolderAssignRoute } from '../routes'

const app = new OpenAPIHono()

export const folderAssignHandler = app.openapi(postApiFolderAssignRoute, (c) => {
  throw new Error('Not implemented')
})
