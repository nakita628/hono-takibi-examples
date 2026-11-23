import { OpenAPIHono } from '@hono/zod-openapi'
import {
  abbreviationHandler,
  abbreviationJsonHandler,
  abbreviationShaHandler,
  checksumJsonHandler,
  checksumShaHandler,
  checksumTxtHandler,
  openapiJsonHandler,
  openapiShaHandler,
  translationsJsonHandler,
  translationsShaHandler,
  translationsTxtHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', translationsJsonHandler)
  .route('/', translationsTxtHandler)
  .route('/', translationsShaHandler)
  .route('/', checksumJsonHandler)
  .route('/', checksumTxtHandler)
  .route('/', checksumShaHandler)
  .route('/', abbreviationJsonHandler)
  .route('/', abbreviationShaHandler)
  .route('/', abbreviationHandler)
  .route('/', openapiJsonHandler)
  .route('/', openapiShaHandler)

export default app
