import { OpenAPIHono } from '@hono/zod-openapi'
import { postFilesRevokePublicURLRoute } from '../routes'

const app = new OpenAPIHono()

export const filesRevokePublicUrlHandler = app.openapi(postFilesRevokePublicURLRoute, (c) => {
  throw new Error('Not implemented')
})
