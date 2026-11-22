import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetEffectivePermissionsForPathRoute } from '../routes'

const app = new OpenAPIHono()

export const GetEffectivePermissionsForPathHandler = app.openapi(
  postGetEffectivePermissionsForPathRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
