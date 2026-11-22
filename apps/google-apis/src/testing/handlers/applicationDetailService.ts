import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1ApplicationDetailServiceGetApkDetailsRoute } from '../routes'

const app = new OpenAPIHono()

export const applicationDetailServiceHandler = app.openapi(
  postV1ApplicationDetailServiceGetApkDetailsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
