import { OpenAPIHono } from '@hono/zod-openapi'
import { postV05ConsentsHipNotifyRoute } from '../routes'

const app = new OpenAPIHono()

export const consentFlowHandler = app.openapi(postV05ConsentsHipNotifyRoute, (c) => {
  throw new Error('Not implemented')
})
