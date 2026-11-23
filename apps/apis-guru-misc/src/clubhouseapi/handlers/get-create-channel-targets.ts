import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetCreateChannelTargetsRoute } from '../routes'

const app = new OpenAPIHono()

export const getCreateChannelTargetsHandler = app.openapi(postGetCreateChannelTargetsRoute, (c) => {
  throw new Error('Not implemented')
})
