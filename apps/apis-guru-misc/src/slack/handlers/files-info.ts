import { OpenAPIHono } from '@hono/zod-openapi'
import { getFilesInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const filesInfoHandler = app.openapi(getFilesInfoRoute, (c) => {
  throw new Error('Not implemented')
})
