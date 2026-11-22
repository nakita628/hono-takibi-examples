import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiLiveIdRoute, getApiLiveRoute } from '../routes'

const app = new OpenAPIHono()

export const statsHandler = app
  .openapi(getApiLiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLiveIdRoute, (c) => {
    throw new Error('Not implemented')
  })
