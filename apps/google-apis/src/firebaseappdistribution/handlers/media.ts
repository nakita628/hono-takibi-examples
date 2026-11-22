import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1AppReleasesUploadRoute } from '../routes'

const app = new OpenAPIHono()

export const mediaHandler = app.openapi(postV1AppReleasesUploadRoute, (c) => {
  throw new Error('Not implemented')
})
