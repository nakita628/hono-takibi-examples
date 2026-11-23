import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteBgpSessionsIdRoute, getBgpSessionsIdRoute, putBgpSessionsIdRoute } from '../routes'

const app = new OpenAPIHono()

export const bgpHandler = app
  .openapi(deleteBgpSessionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBgpSessionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBgpSessionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
