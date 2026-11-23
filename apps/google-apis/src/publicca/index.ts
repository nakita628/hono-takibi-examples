import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1beta1ParentExternalAccountKeysRoute } from './routes'
import { postV1beta1ParentExternalAccountKeysRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(
  postV1beta1ParentExternalAccountKeysRoute,
  postV1beta1ParentExternalAccountKeysRouteHandler,
)

export default app
