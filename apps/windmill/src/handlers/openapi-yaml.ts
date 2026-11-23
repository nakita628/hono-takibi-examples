import { OpenAPIHono } from '@hono/zod-openapi'
import { getOpenapiYamlRoute } from '../routes'

const app = new OpenAPIHono()

export const openapiYamlHandler = app.openapi(getOpenapiYamlRoute, (c) => {
  throw new Error('Not implemented')
})
