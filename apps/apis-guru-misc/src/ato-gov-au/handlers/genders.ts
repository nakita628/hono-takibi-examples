import { OpenAPIHono } from '@hono/zod-openapi'
import { getClassificationsGendersRoute } from '../routes'

const app = new OpenAPIHono()

export const gendersHandler = app.openapi(getClassificationsGendersRoute, (c) => {
  throw new Error('Not implemented')
})
