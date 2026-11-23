import { OpenAPIHono } from '@hono/zod-openapi'
import { postV10ProjectsIdOrNameEnvRoute } from '../routes'

const app = new OpenAPIHono()

export const v10Handler = app.openapi(postV10ProjectsIdOrNameEnvRoute, (c) => {
  throw new Error('Not implemented')
})
