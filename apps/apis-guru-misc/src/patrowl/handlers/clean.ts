import { OpenAPIHono } from '@hono/zod-openapi'
import { getCleanRoute, getCleanScanIdRoute } from '../routes'

const app = new OpenAPIHono()

export const cleanHandler = app
  .openapi(getCleanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCleanScanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
