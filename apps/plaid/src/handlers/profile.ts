import { OpenAPIHono } from '@hono/zod-openapi'
import { postProfileNetworkStatusGetRoute } from '../routes'

const app = new OpenAPIHono()

export const profileHandler = app.openapi(postProfileNetworkStatusGetRoute, (c) => {
  throw new Error('Not implemented')
})
