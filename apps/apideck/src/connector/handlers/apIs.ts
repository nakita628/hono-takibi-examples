import { OpenAPIHono } from '@hono/zod-openapi'
import { getConnectorApisIdRoute, getConnectorApisRoute } from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app
  .openapi(getConnectorApisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectorApisIdRoute, (c) => {
    throw new Error('Not implemented')
  })
