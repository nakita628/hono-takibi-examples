import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPreviewSandboxIdAccessRoute,
  getPreviewSandboxIdPublicRoute,
  getPreviewSandboxIdValidateAuthTokenRoute,
  getPreviewSignedPreviewTokenPortSandboxIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const previewHandler = app
  .openapi(getPreviewSandboxIdPublicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPreviewSandboxIdValidateAuthTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPreviewSandboxIdAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPreviewSignedPreviewTokenPortSandboxIdRoute, (c) => {
    throw new Error('Not implemented')
  })
