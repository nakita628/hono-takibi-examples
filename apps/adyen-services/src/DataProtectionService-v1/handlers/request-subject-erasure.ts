import { OpenAPIHono } from '@hono/zod-openapi'
import { postRequestSubjectErasureRoute } from '../routes'

const app = new OpenAPIHono()

export const requestSubjectErasureHandler = app.openapi(postRequestSubjectErasureRoute, (c) => {
  throw new Error('Not implemented')
})
