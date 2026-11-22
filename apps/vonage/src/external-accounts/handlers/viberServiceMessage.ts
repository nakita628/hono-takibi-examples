import { OpenAPIHono } from '@hono/zod-openapi'
import { getViberServiceMsgExternalIdRoute } from '../routes'

const app = new OpenAPIHono()

export const viberServiceMessageHandler = app.openapi(getViberServiceMsgExternalIdRoute, (c) => {
  throw new Error('Not implemented')
})
