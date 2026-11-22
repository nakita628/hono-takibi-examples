import { OpenAPIHono } from '@hono/zod-openapi'
import { getDirectoryRoute, patchDirectoryRoute } from '../routes'

const app = new OpenAPIHono()

export const directoryDirectoryHandler = app
  .openapi(getDirectoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDirectoryRoute, (c) => {
    throw new Error('Not implemented')
  })
