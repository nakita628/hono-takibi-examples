import { OpenAPIHono } from '@hono/zod-openapi'
import {
  assistantHandler,
  bluetoothHandler,
  deviceInfoHandler,
  deviceSettingsHandler,
  staticFilesHandler,
  wifiHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', staticFilesHandler)
  .route('/', assistantHandler)
  .route('/', deviceInfoHandler)
  .route('/', deviceSettingsHandler)
  .route('/', bluetoothHandler)
  .route('/', wifiHandler)

export default app
