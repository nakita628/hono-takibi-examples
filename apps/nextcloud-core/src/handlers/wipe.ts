import { OpenAPIHono } from '@hono/zod-openapi'
import { postIndexPhpCoreWipeCheckRoute, postIndexPhpCoreWipeSuccessRoute } from '../routes'

const app = new OpenAPIHono()

export const wipeHandler = app
  .openapi(postIndexPhpCoreWipeCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexPhpCoreWipeSuccessRoute, (c) => {
    throw new Error('Not implemented')
  })
