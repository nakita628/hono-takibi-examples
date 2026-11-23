import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128ListOrganizationalUnitsForParentRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsOrganizationsV20161128ListOrganizationalUnitsForParentHandler =
  app.openapi(postXAmzTargetAWSOrganizationsV20161128ListOrganizationalUnitsForParentRoute, (c) => {
    throw new Error('Not implemented')
  })
