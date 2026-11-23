import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getIndexPhpAppsFilesSharingPublicpreviewTokenRoute,
  getIndexPhpSTokenPreviewRoute,
  postIndexPhpAppsFilesSharingShareinfoRoute,
} from '../routes'

const app = new OpenAPIHono()

export const indexPhpHandler = app
  .openapi(getIndexPhpSTokenPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexPhpAppsFilesSharingPublicpreviewTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexPhpAppsFilesSharingShareinfoRoute, (c) => {
    throw new Error('Not implemented')
  })
