import { OpenAPIHono } from '@hono/zod-openapi'
import { getStyleguideRoute, postStyleguideRoute } from '../routes'

const app = new OpenAPIHono()

export const styleguideHandler = app
  .openapi(getStyleguideRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStyleguideRoute, (c) => {
    throw new Error('Not implemented')
  })
