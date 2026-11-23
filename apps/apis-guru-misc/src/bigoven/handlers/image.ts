import { OpenAPIHono } from '@hono/zod-openapi'
import { postImageAvatarRoute } from '../routes'

const app = new OpenAPIHono()

export const imageHandler = app.openapi(postImageAvatarRoute, (c) => {
  throw new Error('Not implemented')
})
