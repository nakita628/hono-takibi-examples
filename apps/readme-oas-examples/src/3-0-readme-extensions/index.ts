import { OpenAPIHono } from '@hono/zod-openapi'
import {
  customCodeSamplesHandler,
  designateCodeSampleLanguagesHandler,
  staticallyDefinedHeadersHandler,
  togglingAPIMetricsHandler,
  togglingInteractivityHandler,
  togglingOurCORSProxyHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', customCodeSamplesHandler)
  .route('/', staticallyDefinedHeadersHandler)
  .route('/', togglingInteractivityHandler)
  .route('/', designateCodeSampleLanguagesHandler)
  .route('/', togglingOurCORSProxyHandler)
  .route('/', togglingAPIMetricsHandler)

export default app
