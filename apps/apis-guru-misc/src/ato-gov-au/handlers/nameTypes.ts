import { OpenAPIHono } from '@hono/zod-openapi'
import { getClassificationsNameTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const nameTypesHandler = app.openapi(getClassificationsNameTypesRoute, (c) => {
  throw new Error('Not implemented')
})
