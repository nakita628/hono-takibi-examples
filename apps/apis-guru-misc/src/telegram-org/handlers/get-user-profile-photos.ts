import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetUserProfilePhotosRoute } from '../routes'

const app = new OpenAPIHono()

export const getUserProfilePhotosHandler = app.openapi(postGetUserProfilePhotosRoute, (c) => {
  throw new Error('Not implemented')
})
