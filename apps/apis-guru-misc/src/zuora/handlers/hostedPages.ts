import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1HostedpagesRoute } from '../routes'

const app = new OpenAPIHono()

export const hostedPagesHandler = app.openapi(getV1HostedpagesRoute, (c) => {
  throw new Error('Not implemented')
})
