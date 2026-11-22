import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateKeyPairRoute, postActionCreateKeyPairRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionCreateKeyPairHandler = app
  .openapi(getActionCreateKeyPairRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateKeyPairRoute, (c) => {
    throw new Error('Not implemented')
  })
