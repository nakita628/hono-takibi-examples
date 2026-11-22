import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1MspsMspIdSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const mspsSearchHandler = app.openapi(getApiV1MspsMspIdSearchRoute, (c) => {
  throw new Error('Not implemented')
})
