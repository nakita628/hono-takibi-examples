import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiOmsPvtFeedOrdersStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const feedV2DeprecatedHandler = app.openapi(getApiOmsPvtFeedOrdersStatusRoute, (c) => {
  throw new Error('Not implemented')
})
