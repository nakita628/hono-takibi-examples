import { OpenAPIHono } from '@hono/zod-openapi'
import { getContentBlocksInfoRoute, getContentBlocksListRoute } from '../routes'

const app = new OpenAPIHono()

export const contentBlocksHandler = app
  .openapi(getContentBlocksInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContentBlocksListRoute, (c) => {
    throw new Error('Not implemented')
  })
