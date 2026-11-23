import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetAttributePoolRoute, postGetAttributePoolRoute } from '../routes'

const app = new OpenAPIHono()

export const getAttributePoolHandler = app
  .openapi(getGetAttributePoolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGetAttributePoolRoute, (c) => {
    throw new Error('Not implemented')
  })
