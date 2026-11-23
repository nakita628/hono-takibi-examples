import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1PackageNameDecodeIntegrityTokenRoute } from './routes'
import { postV1PackageNameDecodeIntegrityTokenRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(
  postV1PackageNameDecodeIntegrityTokenRoute,
  postV1PackageNameDecodeIntegrityTokenRouteHandler,
)

export default app
