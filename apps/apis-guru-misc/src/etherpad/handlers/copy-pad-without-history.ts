import { OpenAPIHono } from '@hono/zod-openapi'
import { getCopyPadWithoutHistoryRoute, postCopyPadWithoutHistoryRoute } from '../routes'

const app = new OpenAPIHono()

export const copyPadWithoutHistoryHandler = app
  .openapi(getCopyPadWithoutHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCopyPadWithoutHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
