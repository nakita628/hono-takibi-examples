import { OpenAPIHono } from '@hono/zod-openapi'
import { getHistoryExportsIdRoute, postHistoryExportsRoute } from '../routes'

const app = new OpenAPIHono()

export const historyExportsHandler = app
  .openapi(postHistoryExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHistoryExportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
