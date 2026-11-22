import { OpenAPIHono } from '@hono/zod-openapi'
import { getXCodeSamplesRoute, postXCodeSamplesRoute } from '../routes'

const app = new OpenAPIHono()

export const customCodeSamplesHandler = app
  .openapi(postXCodeSamplesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getXCodeSamplesRoute, (c) => {
    throw new Error('Not implemented')
  })
