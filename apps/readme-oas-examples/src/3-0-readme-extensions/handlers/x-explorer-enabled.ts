import { OpenAPIHono } from '@hono/zod-openapi'
import { patchXExplorerEnabledRoute, postXExplorerEnabledRoute } from '../routes'

const app = new OpenAPIHono()

export const xExplorerEnabledHandler = app
  .openapi(postXExplorerEnabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchXExplorerEnabledRoute, (c) => {
    throw new Error('Not implemented')
  })
