import { OpenAPIHono } from '@hono/zod-openapi'
import { postV3LogPlayerReportsRoute } from '../routes'

const app = new OpenAPIHono()

export const v3LogPlayerReportsHandler = app.openapi(postV3LogPlayerReportsRoute, (c) => {
  throw new Error('Not implemented')
})
