import { OpenAPIHono } from '@hono/zod-openapi'
import { getStoreRegionsIdRoute, getStoreRegionsRoute } from '../routes'

const app = new OpenAPIHono()

export const regionsHandler = app
  .openapi(getStoreRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoreRegionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
