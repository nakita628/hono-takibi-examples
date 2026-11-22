import { OpenAPIHono } from '@hono/zod-openapi'
import { putComboRoute, putPathRoute } from '../routes'

const app = new OpenAPIHono()

export const pathHandler = app
  .openapi(putPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putComboRoute, (c) => {
    throw new Error('Not implemented')
  })
