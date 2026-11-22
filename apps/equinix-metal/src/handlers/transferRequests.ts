import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteTransfersIdRoute, getTransfersIdRoute, putTransfersIdRoute } from '../routes'

const app = new OpenAPIHono()

export const transferRequestsHandler = app
  .openapi(deleteTransfersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransfersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTransfersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
