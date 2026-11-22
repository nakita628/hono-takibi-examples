import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1UrlTestingToolsMobileFriendlyTestRunRoute } from '../routes'

const app = new OpenAPIHono()

export const urlTestingToolsHandler = app.openapi(
  postV1UrlTestingToolsMobileFriendlyTestRunRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
