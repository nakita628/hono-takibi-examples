import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1p7beta1NameRoute, postV1p7beta1ParentExportAssetsRoute } from '../routes'

const app = new OpenAPIHono()

export const v1p7beta1Handler = app
  .openapi(getV1p7beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1p7beta1ParentExportAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
