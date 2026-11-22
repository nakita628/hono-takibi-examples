import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiDocsRoute, getApiDocsSearchFullTextRoute, getApiDocsSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const docsHandler = app
  .openapi(getApiDocsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDocsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDocsSearchFullTextRoute, (c) => {
    throw new Error('Not implemented')
  })
