import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteWantsIdRoute, getWantsRoute, putWantsIdRoute } from '../routes'

const app = new OpenAPIHono()

export const wantsHandler = app
  .openapi(getWantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWantsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWantsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
