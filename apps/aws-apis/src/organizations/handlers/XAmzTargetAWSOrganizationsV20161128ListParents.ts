import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128ListParentsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSOrganizationsV20161128ListParentsHandler = app.openapi(
  postXAmzTargetAWSOrganizationsV20161128ListParentsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
