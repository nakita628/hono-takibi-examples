import { OpenAPIHono } from '@hono/zod-openapi'
import { postUsersSetPhotoRoute } from '../routes'

const app = new OpenAPIHono()

export const usersSetPhotoHandler = app.openapi(postUsersSetPhotoRoute, (c) => {
  throw new Error('Not implemented')
})
