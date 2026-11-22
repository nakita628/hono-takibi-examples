import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiFolderIdRoute } from '../routes'

const app = new OpenAPIHono()

export const folderHandler = app.openapi(getApiFolderIdRoute, (c) => {
  throw new Error('Not implemented')
})
