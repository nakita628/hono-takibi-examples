import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteAddonRoute, getAddonAddonKeyClientKeyRoute, putAddonRoute } from '../routes'

const app = new OpenAPIHono()

export const addonHandler = app
  .openapi(deleteAddonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAddonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAddonAddonKeyClientKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
