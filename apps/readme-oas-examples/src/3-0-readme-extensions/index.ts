import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xCodeSamplesHandler,
  xExplorerEnabledHandler,
  xHeadersHandler,
  xMetricsEnabledHandler,
  xProxyEnabledHandler,
  xSamplesLanguagesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xCodeSamplesHandler)
  .route('/', xHeadersHandler)
  .route('/', xExplorerEnabledHandler)
  .route('/', xSamplesLanguagesHandler)
  .route('/', xProxyEnabledHandler)
  .route('/', xMetricsEnabledHandler)

export default app
