import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiPicoTryenablecablelockIdRoute } from '../routes'

const app = new OpenAPIHono()

export const picoEnableFixCableLockHandler = app.openapi(
  postApiPicoTryenablecablelockIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
