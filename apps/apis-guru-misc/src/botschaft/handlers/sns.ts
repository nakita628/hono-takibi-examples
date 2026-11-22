import { OpenAPIHono } from '@hono/zod-openapi'
import { getSnsRoute, postSnsRoute } from '../routes'

const app = new OpenAPIHono()

export const snsHandler = app
  .openapi(getSnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSnsRoute, (c) => {
    throw new Error('Not implemented')
  })
