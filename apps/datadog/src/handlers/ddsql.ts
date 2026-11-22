import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV2DdsqlQueryTabularFetchRoute, postApiV2DdsqlQueryTabularRoute } from '../routes'

const app = new OpenAPIHono()

export const ddsqlHandler = app
  .openapi(postApiV2DdsqlQueryTabularRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2DdsqlQueryTabularFetchRoute, (c) => {
    throw new Error('Not implemented')
  })
