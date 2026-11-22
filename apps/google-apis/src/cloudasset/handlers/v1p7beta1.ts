import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1p7beta1ParentExportAssetsRoute } from '../routes'

const app = new OpenAPIHono()

export const v1p7beta1Handler = app.openapi(postV1p7beta1ParentExportAssetsRoute, (c) => {
  throw new Error('Not implemented')
})
