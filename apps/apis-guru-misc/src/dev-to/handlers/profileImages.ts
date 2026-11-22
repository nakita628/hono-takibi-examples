import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiProfileImagesUsernameRoute } from '../routes'

const app = new OpenAPIHono()

export const profileImagesHandler = app.openapi(getApiProfileImagesUsernameRoute, (c) => {
  throw new Error('Not implemented')
})
