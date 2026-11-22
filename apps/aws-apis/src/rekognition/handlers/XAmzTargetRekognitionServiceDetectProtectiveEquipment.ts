import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceDetectProtectiveEquipmentRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRekognitionServiceDetectProtectiveEquipmentHandler = app.openapi(
  postXAmzTargetRekognitionServiceDetectProtectiveEquipmentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
