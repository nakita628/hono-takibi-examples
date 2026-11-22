import { OpenAPIHono } from '@hono/zod-openapi'
import { postPagesWebhooksDeployHooksDeployHookIdRoute } from '../routes'

const app = new OpenAPIHono()

export const pagesDeployHooksHandler = app.openapi(
  postPagesWebhooksDeployHooksDeployHookIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
