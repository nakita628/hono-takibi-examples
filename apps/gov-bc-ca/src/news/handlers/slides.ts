import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiSlidesIdRoute, getApiSlidesRoute } from '../routes'

const app = new OpenAPIHono()

export const slidesHandler = app
  .openapi(getApiSlidesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSlidesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
