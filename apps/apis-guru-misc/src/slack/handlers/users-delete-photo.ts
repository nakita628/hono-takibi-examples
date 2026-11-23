import { OpenAPIHono } from '@hono/zod-openapi'
import { postUsersDeletePhotoRoute } from '../routes'

const app = new OpenAPIHono()

export const usersDeletePhotoHandler = app.openapi(postUsersDeletePhotoRoute, (c) => {
  throw new Error('Not implemented')
})
