import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1IamTroubleshootRoute } from '../routes'

const app = new OpenAPIHono()

export const iamHandler = app.openapi(postV1IamTroubleshootRoute, (c) => {
  throw new Error('Not implemented')
})
