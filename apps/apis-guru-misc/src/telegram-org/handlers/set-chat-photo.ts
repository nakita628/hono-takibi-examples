import { OpenAPIHono } from '@hono/zod-openapi'
import { postSetChatPhotoRoute } from '../routes'

const app = new OpenAPIHono()

export const setChatPhotoHandler = app.openapi(postSetChatPhotoRoute, (c) => {
  throw new Error('Not implemented')
})
