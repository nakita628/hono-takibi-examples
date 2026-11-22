import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV1AlbumstudioRoute } from '../routes'

const app = new OpenAPIHono()

export const albumStudioHandler = app.openapi(postApiV1AlbumstudioRoute, (c) => {
  throw new Error('Not implemented')
})
