import { OpenAPIHono } from '@hono/zod-openapi'
import { getSelectedMultipleRoute, getSelectedRoute } from '../routes'

const app = new OpenAPIHono()

export const selectedHTMLHandler = app
  .openapi(getSelectedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelectedMultipleRoute, (c) => {
    throw new Error('Not implemented')
  })
