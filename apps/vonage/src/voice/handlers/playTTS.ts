import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteUuidTalkRoute, putUuidTalkRoute } from '../routes'

const app = new OpenAPIHono()

export const playTTSHandler = app
  .openapi(deleteUuidTalkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUuidTalkRoute, (c) => {
    throw new Error('Not implemented')
  })
