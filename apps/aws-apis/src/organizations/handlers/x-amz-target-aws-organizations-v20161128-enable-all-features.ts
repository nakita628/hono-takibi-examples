import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128EnableAllFeaturesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsOrganizationsV20161128EnableAllFeaturesHandler = app.openapi(
  postXAmzTargetAWSOrganizationsV20161128EnableAllFeaturesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
