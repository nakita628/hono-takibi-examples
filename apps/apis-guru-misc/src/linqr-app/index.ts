import { OpenAPIHono } from '@hono/zod-openapi'
import { imageManagementHandler, multipleQRCodesHandler, singleQRCodeHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', multipleQRCodesHandler)
  .route('/', imageManagementHandler)
  .route('/', singleQRCodeHandler)

export default app
