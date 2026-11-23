import { OpenAPIHono } from '@hono/zod-openapi'
import { getTestIdRoute, getTestIdZipRoute } from '../routes'

const app = new OpenAPIHono()

export const testIdHandler = app
  .openapi(getTestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTestIdZipRoute, (c) => {
    throw new Error('Not implemented')
  })
