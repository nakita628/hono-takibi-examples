import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserHierarchyGroupsSummaryInstanceIdRoute } from '../routes'

const app = new OpenAPIHono()

export const userHierarchyGroupsSummaryHandler = app.openapi(
  getUserHierarchyGroupsSummaryInstanceIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
