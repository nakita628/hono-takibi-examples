import { OpenAPIHono } from '@hono/zod-openapi'
import { getPostcodesPostcodeRoute } from '../routes'

const app = new OpenAPIHono()

export const postcodesHandler = app.openapi(getPostcodesPostcodeRoute, (c) => {
  throw new Error('Not implemented')
})
