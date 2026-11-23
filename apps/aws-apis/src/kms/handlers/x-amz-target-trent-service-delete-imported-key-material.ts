import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceDeleteImportedKeyMaterialRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTrentServiceDeleteImportedKeyMaterialHandler = app.openapi(
  postXAmzTargetTrentServiceDeleteImportedKeyMaterialRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
