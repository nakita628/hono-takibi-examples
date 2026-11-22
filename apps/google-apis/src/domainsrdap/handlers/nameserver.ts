import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1NameserverNameserverIdRoute } from '../routes'

const app = new OpenAPIHono()

export const nameserverHandler = app.openapi(getV1NameserverNameserverIdRoute, (c) => {
  throw new Error('Not implemented')
})
