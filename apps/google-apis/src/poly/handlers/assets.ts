import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1AssetsRoute, getV1NameRoute } from '../routes'

const app = new OpenAPIHono()

export const assetsHandler = app
  .openapi(getV1AssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
