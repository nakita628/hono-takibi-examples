import { OpenAPIHono } from '@hono/zod-openapi'
import { postCalculateAdditionRoute } from '../routes'

const app = new OpenAPIHono()

export const calculateAdditionHandler = app.openapi(postCalculateAdditionRoute, (c) => {
  throw new Error('Not implemented')
})
