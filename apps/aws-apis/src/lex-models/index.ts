import { OpenAPIHono } from '@hono/zod-openapi'
import {
  botsHandler,
  builtinsHandler,
  exportsHandler,
  importsHandler,
  intentsHandler,
  migrationsHandler,
  slottypesHandler,
  tagsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', botsHandler)
  .route('/', intentsHandler)
  .route('/', slottypesHandler)
  .route('/', builtinsHandler)
  .route('/', exportsHandler)
  .route('/', importsHandler)
  .route('/', migrationsHandler)
  .route('/', tagsHandler)

export default app
