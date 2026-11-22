import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1LivechatAppearanceRoute, postApiV1LivechatAppearanceRoute } from '../routes'

const app = new OpenAPIHono()

export const livechatAppearanceHandler = app
  .openapi(getApiV1LivechatAppearanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatAppearanceRoute, (c) => {
    throw new Error('Not implemented')
  })
