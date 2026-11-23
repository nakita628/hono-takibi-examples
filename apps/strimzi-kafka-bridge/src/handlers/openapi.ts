import { OpenAPIHono } from '@hono/zod-openapi'
import { getOpenapiRoute, getOpenapiV3Route } from '../routes'

const app = new OpenAPIHono()

export const openapiHandler = app
  .openapi(getOpenapiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOpenapiV3Route, (c) => {
    throw new Error('Not implemented')
  })
