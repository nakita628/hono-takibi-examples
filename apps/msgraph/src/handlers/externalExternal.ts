import { OpenAPIHono } from '@hono/zod-openapi'
import { getExternalRoute, patchExternalRoute } from '../routes'

const app = new OpenAPIHono()

export const externalExternalHandler = app
  .openapi(getExternalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchExternalRoute, (c) => {
    throw new Error('Not implemented')
  })
