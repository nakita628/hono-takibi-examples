import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128ListRootsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSOrganizationsV20161128ListRootsHandler = app.openapi(
  postXAmzTargetAWSOrganizationsV20161128ListRootsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
