import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1PayorLinksRoute } from '../routes'

const app = new OpenAPIHono()

export const payorHierarchyHandler = app.openapi(getV1PayorLinksRoute, (c) => {
  throw new Error('Not implemented')
})
