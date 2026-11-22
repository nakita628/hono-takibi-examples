import { OpenAPIHono } from '@hono/zod-openapi'
import { getOpenapiJsonRoute, getOpenapiYamlRoute, getServerRoute } from '../routes'

const app = new OpenAPIHono()

export const serverHandler = app
  .openapi(getServerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOpenapiJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOpenapiYamlRoute, (c) => {
    throw new Error('Not implemented')
  })
