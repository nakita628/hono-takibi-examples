import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeGetListsMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHawksNestServiceFacadeGetListsMetadataHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeGetListsMetadataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
