import { OpenAPIHono } from '@hono/zod-openapi'
import { getExportOrgAssetsCiscoCsvRoute } from '../routes'

const app = new OpenAPIHono()

export const ciscoSNTCHandler = app.openapi(getExportOrgAssetsCiscoCsvRoute, (c) => {
  throw new Error('Not implemented')
})
