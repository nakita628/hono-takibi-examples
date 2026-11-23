import { OpenAPIHono } from '@hono/zod-openapi'
import { postBetComplexRoute, postBetSingleRoute } from '../routes'

const app = new OpenAPIHono()

export const betHandler = app
  .openapi(postBetComplexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBetSingleRoute, (c) => {
    throw new Error('Not implemented')
  })
