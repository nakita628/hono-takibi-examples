import { OpenAPIHono } from '@hono/zod-openapi'
import { getSksClusterDeprecatedResourcesIdRoute } from '../routes'

const app = new OpenAPIHono()

export const sksClusterDeprecatedResourcesHandler = app.openapi(
  getSksClusterDeprecatedResourcesIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
