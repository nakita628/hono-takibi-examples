import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV3RenameBulkRoute, getApiV3RenameRoute } from '../routes'

const app = new OpenAPIHono()

export const renameEpisodeHandler = app
  .openapi(getApiV3RenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3RenameBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
