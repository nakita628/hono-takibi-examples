import { OpenAPIHono } from '@hono/zod-openapi'
import { getTenantIDGroupsObjectIdOwnersRoute } from '../routes'

const app = new OpenAPIHono()

export const groupOwnersHandler = app.openapi(getTenantIDGroupsObjectIdOwnersRoute, (c) => {
  throw new Error('Not implemented')
})
