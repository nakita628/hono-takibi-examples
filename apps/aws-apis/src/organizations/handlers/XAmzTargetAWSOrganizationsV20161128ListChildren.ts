import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128ListChildrenRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSOrganizationsV20161128ListChildrenHandler = app.openapi(
  postXAmzTargetAWSOrganizationsV20161128ListChildrenRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
