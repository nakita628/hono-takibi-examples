import { OpenAPIHono } from '@hono/zod-openapi'
import { postProfilePictureRoute } from '../routes'

const app = new OpenAPIHono()

export const profilePictureHandler = app.openapi(postProfilePictureRoute, (c) => {
  throw new Error('Not implemented')
})
