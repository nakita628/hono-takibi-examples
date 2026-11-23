import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1betaTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const v1betaHandler = app.openapi(postV1betaTokenRoute, (c) => {
  throw new Error('Not implemented')
})
