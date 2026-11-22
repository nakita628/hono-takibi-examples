import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiVlmAppkeysRoute, postApiVlmAppkeysRoute, putApiVlmAppkeysIdRoute } from '../routes'

const app = new OpenAPIHono()

export const appKeysHandler = app
  .openapi(getApiVlmAppkeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVlmAppkeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVlmAppkeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
