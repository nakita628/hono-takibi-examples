import { OpenAPIHono } from '@hono/zod-openapi'
import { getSharesSharedDriveItemIdSiteRoute } from '../routes'

const app = new OpenAPIHono()

export const sharesSiteHandler = app.openapi(getSharesSharedDriveItemIdSiteRoute, (c) => {
  throw new Error('Not implemented')
})
