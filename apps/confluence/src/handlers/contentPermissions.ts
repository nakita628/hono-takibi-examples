import { OpenAPIHono } from '@hono/zod-openapi'
import { postWikiRestApiContentIdPermissionCheckRoute } from '../routes'

const app = new OpenAPIHono()

export const contentPermissionsHandler = app.openapi(
  postWikiRestApiContentIdPermissionCheckRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
