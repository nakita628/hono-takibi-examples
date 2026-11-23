import { OpenAPIHono } from '@hono/zod-openapi'
import { getExtractIdRoute, postExtractRoute } from '../routes'

const app = new OpenAPIHono()

export const extractHandler = app
  .openapi(postExtractRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExtractIdRoute, (c) => {
    throw new Error('Not implemented')
  })
