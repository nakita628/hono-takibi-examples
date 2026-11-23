import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionUpdateAccessKeyRoute, postActionUpdateAccessKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const actionUpdateAccessKeyHandler = app
  .openapi(getActionUpdateAccessKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUpdateAccessKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
