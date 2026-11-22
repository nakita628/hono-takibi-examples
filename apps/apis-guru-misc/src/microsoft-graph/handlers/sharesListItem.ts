import { OpenAPIHono } from '@hono/zod-openapi'
import { getSharesSharedDriveItemIdListItemRoute } from '../routes'

const app = new OpenAPIHono()

export const sharesListItemHandler = app.openapi(getSharesSharedDriveItemIdListItemRoute, (c) => {
  throw new Error('Not implemented')
})
