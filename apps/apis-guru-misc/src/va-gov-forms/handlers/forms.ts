import { OpenAPIHono } from '@hono/zod-openapi'
import { getFormsFormNameRoute, getFormsRoute } from '../routes'

const app = new OpenAPIHono()

export const formsHandler = app
  .openapi(getFormsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormsFormNameRoute, (c) => {
    throw new Error('Not implemented')
  })
