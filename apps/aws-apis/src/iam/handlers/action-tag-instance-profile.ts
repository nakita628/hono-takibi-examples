import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionTagInstanceProfileRoute, postActionTagInstanceProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const actionTagInstanceProfileHandler = app
  .openapi(getActionTagInstanceProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionTagInstanceProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
