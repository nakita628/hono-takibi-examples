import { OpenAPIHono } from '@hono/zod-openapi'
import { patchXProxyEnabledRoute, postXProxyEnabledRoute } from '../routes'

const app = new OpenAPIHono()

export const xProxyEnabledHandler = app
  .openapi(postXProxyEnabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchXProxyEnabledRoute, (c) => {
    throw new Error('Not implemented')
  })
