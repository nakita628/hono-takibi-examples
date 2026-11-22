import { OpenAPIHono } from '@hono/zod-openapi'
import { postIndexPhpAppsFilesSharingShareinfoRoute } from '../routes'

const app = new OpenAPIHono()

export const shareInfoHandler = app.openapi(postIndexPhpAppsFilesSharingShareinfoRoute, (c) => {
  throw new Error('Not implemented')
})
