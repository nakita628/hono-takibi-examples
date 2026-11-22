import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiFileGetFileTagPhpRoute, postApiFileSaveFileTagPhpRoute } from '../routes'

const app = new OpenAPIHono()

export const tagsHandler = app
  .openapi(getApiFileGetFileTagPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFileSaveFileTagPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
