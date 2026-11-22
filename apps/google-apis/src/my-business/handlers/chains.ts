import { OpenAPIHono } from '@hono/zod-openapi'
import { getV4ChainsSearchRoute, getV4NameRoute } from '../routes'

const app = new OpenAPIHono()

export const chainsHandler = app
  .openapi(getV4ChainsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NameRoute, (c) => {
    throw new Error('Not implemented')
  })
