import { OpenAPIHono } from '@hono/zod-openapi'
import { getHypetrainStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const hypetrainHandler = app.openapi(getHypetrainStatusRoute, (c) => {
  throw new Error('Not implemented')
})
