import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeGetListsMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsHawksNestServiceFacadeGetListsMetadataHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeGetListsMetadataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
