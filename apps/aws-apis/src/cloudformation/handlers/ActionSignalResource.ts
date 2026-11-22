import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionSignalResourceRoute, postActionSignalResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionSignalResourceHandler = app
  .openapi(getActionSignalResourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionSignalResourceRoute, (c) => {
    throw new Error('Not implemented')
  })
