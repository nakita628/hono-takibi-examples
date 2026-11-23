import { OpenAPIHono } from '@hono/zod-openapi'
import { postWorkingLocationV1Route } from '../routes'

const app = new OpenAPIHono()

export const workingLocationV1Handler = app.openapi(postWorkingLocationV1Route, (c) => {
  throw new Error('Not implemented')
})
