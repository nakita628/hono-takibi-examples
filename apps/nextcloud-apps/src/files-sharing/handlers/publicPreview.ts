import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getIndexPhpAppsFilesSharingPublicpreviewTokenRoute,
  getIndexPhpSTokenPreviewRoute,
} from '../routes'

const app = new OpenAPIHono()

export const publicPreviewHandler = app
  .openapi(getIndexPhpSTokenPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexPhpAppsFilesSharingPublicpreviewTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
