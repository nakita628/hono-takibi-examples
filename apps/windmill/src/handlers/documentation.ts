import { OpenAPIHono } from '@hono/zod-openapi'
import { getDocsPageRoute, getDocsSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const documentationHandler = app
  .openapi(getDocsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocsPageRoute, (c) => {
    throw new Error('Not implemented')
  })
