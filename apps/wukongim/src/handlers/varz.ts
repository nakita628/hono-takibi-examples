import { OpenAPIHono } from '@hono/zod-openapi'
import { getVarzRoute, getVarzSettingRoute } from '../routes'

const app = new OpenAPIHono()

export const varzHandler = app
  .openapi(getVarzRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVarzSettingRoute, (c) => {
    throw new Error('Not implemented')
  })
