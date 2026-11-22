import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceDeleteImportedKeyMaterialRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTrentServiceDeleteImportedKeyMaterialHandler = app.openapi(
  postXAmzTargetTrentServiceDeleteImportedKeyMaterialRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
