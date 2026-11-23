import { OpenAPIHono } from '@hono/zod-openapi'
import { postFilesSharedPublicURLRoute } from '../routes'

const app = new OpenAPIHono()

export const filesSharedPublicUrlHandler = app.openapi(postFilesSharedPublicURLRoute, (c) => {
  throw new Error('Not implemented')
})
