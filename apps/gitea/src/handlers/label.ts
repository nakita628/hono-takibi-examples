import { OpenAPIHono } from '@hono/zod-openapi'
import { getLabelTemplatesNameRoute, getLabelTemplatesRoute } from '../routes'

const app = new OpenAPIHono()

export const labelHandler = app
  .openapi(getLabelTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLabelTemplatesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
