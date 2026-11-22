import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiFolderMenuRoute, postApiFolderMenuRoute } from '../routes'

const app = new OpenAPIHono()

export const folderMenuHandler = app
  .openapi(getApiFolderMenuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFolderMenuRoute, (c) => {
    throw new Error('Not implemented')
  })
