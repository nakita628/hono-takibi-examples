import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteChatPhotoRoute } from '../routes'

const app = new OpenAPIHono()

export const deleteChatPhotoHandler = app.openapi(postDeleteChatPhotoRoute, (c) => {
  throw new Error('Not implemented')
})
