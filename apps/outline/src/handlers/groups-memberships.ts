import { OpenAPIHono } from '@hono/zod-openapi'
import { postGroupsMembershipsRoute } from '../routes'

const app = new OpenAPIHono()

export const groupsMembershipsHandler = app.openapi(postGroupsMembershipsRoute, (c) => {
  throw new Error('Not implemented')
})
