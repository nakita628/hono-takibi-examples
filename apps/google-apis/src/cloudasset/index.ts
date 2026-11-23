import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1p7beta1NameRoute, postV1p7beta1ParentExportAssetsRoute } from './routes'
import {
  getV1p7beta1NameRouteHandler,
  postV1p7beta1ParentExportAssetsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1p7beta1NameRoute, getV1p7beta1NameRouteHandler)
  .openapi(postV1p7beta1ParentExportAssetsRoute, postV1p7beta1ParentExportAssetsRouteHandler)

export default app
