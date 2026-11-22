import { OpenAPIHono } from '@hono/zod-openapi'
import { postRequestSubjectErasureRoute } from '../routes'

const app = new OpenAPIHono()

export const generalHandler = app.openapi(postRequestSubjectErasureRoute, (c) => {
  throw new Error('Not implemented')
})
