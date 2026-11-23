import { OpenAPIHono } from '@hono/zod-openapi'
import {
  v3LogImpressionsHandler,
  v3LogPlayerReportsHandler,
  v3SamplePlayableLocationsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', v3LogImpressionsHandler)
  .route('/', v3LogPlayerReportsHandler)
  .route('/', v3SamplePlayableLocationsHandler)

export default app
