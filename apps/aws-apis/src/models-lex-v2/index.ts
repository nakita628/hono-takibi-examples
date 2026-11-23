import { OpenAPIHono } from '@hono/zod-openapi'
import {
  botsHandler,
  builtinsHandler,
  createuploadurlHandler,
  exportsHandler,
  importsHandler,
  policyHandler,
  tagsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', botsHandler)
  .route('/', exportsHandler)
  .route('/', policyHandler)
  .route('/', createuploadurlHandler)
  .route('/', importsHandler)
  .route('/', builtinsHandler)
  .route('/', tagsHandler)

export default app
