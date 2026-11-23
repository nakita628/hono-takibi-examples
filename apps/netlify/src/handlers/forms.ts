import { OpenAPIHono } from '@hono/zod-openapi'
import { getFormsFormIdSubmissionsRoute } from '../routes'

const app = new OpenAPIHono()

export const formsHandler = app.openapi(getFormsFormIdSubmissionsRoute, (c) => {
  throw new Error('Not implemented')
})
