import { OpenAPIHono } from '@hono/zod-openapi'
import {
  applicationChargeHandler,
  inlineScriptHandler,
  scriptDeprecatedHandler,
  scriptHandler,
  uninstallationHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', applicationChargeHandler)
  .route('/', uninstallationHandler)
  .route('/', scriptHandler)
  .route('/', inlineScriptHandler)
  .route('/', scriptDeprecatedHandler)

export default app
