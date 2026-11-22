import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteKeyPairRoute, postActionDeleteKeyPairRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteKeyPairHandler = app
  .openapi(getActionDeleteKeyPairRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteKeyPairRoute, (c) => {
    throw new Error('Not implemented')
  })
