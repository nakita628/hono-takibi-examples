import { OpenAPIHono } from '@hono/zod-openapi'
import { getApi1FormsSelectablesRoute } from '../routes'

const app = new OpenAPIHono()

export const selectablesHandler = app.openapi(getApi1FormsSelectablesRoute, (c) => {
  throw new Error('Not implemented')
})
