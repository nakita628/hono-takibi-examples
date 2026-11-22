import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV3AlttitleIdRoute, getApiV3AlttitleRoute } from '../routes'

const app = new OpenAPIHono()

export const alternativeTitleHandler = app
  .openapi(getApiV3AlttitleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AlttitleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
