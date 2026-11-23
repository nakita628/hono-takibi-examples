import { OpenAPIHono } from '@hono/zod-openapi'
import { getOpenapiType2Route } from '../routes'

const app = new OpenAPIHono()

export const openapiTypeHandler = app.openapi(getOpenapiType2Route, (c) => {
  throw new Error('Not implemented')
})
