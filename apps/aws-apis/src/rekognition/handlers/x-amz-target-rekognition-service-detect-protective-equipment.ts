import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceDetectProtectiveEquipmentRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRekognitionServiceDetectProtectiveEquipmentHandler = app.openapi(
  postXAmzTargetRekognitionServiceDetectProtectiveEquipmentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
