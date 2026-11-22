import { OpenAPIHono } from '@hono/zod-openapi'
import { postSendPhotoRoute } from '../routes'

const app = new OpenAPIHono()

export const sendPhotoHandler = app.openapi(postSendPhotoRoute, (c) => {
  throw new Error('Not implemented')
})
