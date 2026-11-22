import { OpenAPIHono } from '@hono/zod-openapi'
import { getScopedRoleMembershipsCountRoute } from '../routes'

const app = new OpenAPIHono()

export const scopedRoleMembershipsHandler = app.openapi(getScopedRoleMembershipsCountRoute, (c) => {
  throw new Error('Not implemented')
})
