import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128ListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSOrganizationsV20161128ListTagsForResourceHandler = app.openapi(
  postXAmzTargetAWSOrganizationsV20161128ListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
