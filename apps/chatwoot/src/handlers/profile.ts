import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1ProfileRoute, putApiV1ProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const profileHandler = app
  .openapi(getApiV1ProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
