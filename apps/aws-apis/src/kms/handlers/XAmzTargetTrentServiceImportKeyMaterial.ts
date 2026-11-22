import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceImportKeyMaterialRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTrentServiceImportKeyMaterialHandler = app.openapi(
  postXAmzTargetTrentServiceImportKeyMaterialRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
