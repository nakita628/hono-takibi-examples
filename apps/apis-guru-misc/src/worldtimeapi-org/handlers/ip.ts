import { OpenAPIHono } from '@hono/zod-openapi'
import { getIpIpv4Route, getIpIpv4TxtRoute, getIpRoute } from '../routes'

const app = new OpenAPIHono()

export const ipHandler = app
  .openapi(getIpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpIpv4Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpIpv4TxtRoute, (c) => {
    throw new Error('Not implemented')
  })
