import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteApiV1MspsMspIdRoute, postApiV1MspsRoute, putApiV1MspsMspIdRoute } from '../routes'

const app = new OpenAPIHono()

export const mspsHandler = app
  .openapi(postApiV1MspsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1MspsMspIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1MspsMspIdRoute, (c) => {
    throw new Error('Not implemented')
  })
