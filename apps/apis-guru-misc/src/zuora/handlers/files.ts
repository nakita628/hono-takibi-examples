import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1FilesFileIdRoute } from '../routes'

const app = new OpenAPIHono()

export const filesHandler = app.openapi(getV1FilesFileIdRoute, (c) => {
  throw new Error('Not implemented')
})
