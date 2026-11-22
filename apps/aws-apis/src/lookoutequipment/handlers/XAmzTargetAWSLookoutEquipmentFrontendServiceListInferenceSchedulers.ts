import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLookoutEquipmentFrontendServiceListInferenceSchedulersRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSLookoutEquipmentFrontendServiceListInferenceSchedulersHandler =
  app.openapi(postXAmzTargetAWSLookoutEquipmentFrontendServiceListInferenceSchedulersRoute, (c) => {
    throw new Error('Not implemented')
  })
