import { OpenAPIHono } from '@hono/zod-openapi'
import { postIndexPhpLoginV2PollRoute, postIndexPhpLoginV2Route } from '../routes'

const app = new OpenAPIHono()

export const clientFlowLoginV2Handler = app
  .openapi(postIndexPhpLoginV2PollRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexPhpLoginV2Route, (c) => {
    throw new Error('Not implemented')
  })
