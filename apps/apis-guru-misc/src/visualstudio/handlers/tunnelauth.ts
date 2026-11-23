import { OpenAPIHono } from '@hono/zod-openapi'
import { getTunnelauthRoute, postTunnelauthRoute } from '../routes'

const app = new OpenAPIHono()

export const tunnelauthHandler = app
  .openapi(getTunnelauthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTunnelauthRoute, (c) => {
    throw new Error('Not implemented')
  })
