import { OpenAPIHono } from '@hono/zod-openapi'
import { postIpfsAddRoute } from '../routes'

const app = new OpenAPIHono()

export const ipfsAddHandler = app.openapi(postIpfsAddRoute, (c) => {
  throw new Error('Not implemented')
})
