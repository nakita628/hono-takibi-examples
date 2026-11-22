import { OpenAPIHono } from '@hono/zod-openapi'
import { getFoldersPathRoute, postFoldersPathRoute } from '../routes'

const app = new OpenAPIHono()

export const foldersHandler = app
  .openapi(getFoldersPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFoldersPathRoute, (c) => {
    throw new Error('Not implemented')
  })
