import { OpenAPIHono } from '@hono/zod-openapi'
import { getExportChannelsIdRoute, postExportChannelsRoute } from '../routes'

const app = new OpenAPIHono()

export const exportChannelsHandler = app
  .openapi(postExportChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExportChannelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
