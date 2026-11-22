import { OpenAPIHono } from '@hono/zod-openapi'
import { postV2ToolsDecodeAndVerifyRoute, postV2ToolsEncodeAndSignRoute } from '../routes'

const app = new OpenAPIHono()

export const toolsEncodingHandler = app
  .openapi(postV2ToolsEncodeAndSignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ToolsDecodeAndVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
