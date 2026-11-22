import { OpenAPIHono } from '@hono/zod-openapi'
import { getUsersIdLabelsRoute } from '../routes'

const app = new OpenAPIHono()

export const labelsHandler = app.openapi(getUsersIdLabelsRoute, (c) => {
  throw new Error('Not implemented')
})
