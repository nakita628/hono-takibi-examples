import { OpenAPIHono } from '@hono/zod-openapi'
import {
  applyYaraRulesHandler,
  cleanHandler,
  emulationOutputHandler,
  generatePartialYaraRulesHandler,
  unpackHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', applyYaraRulesHandler)
  .route('/', cleanHandler)
  .route('/', emulationOutputHandler)
  .route('/', generatePartialYaraRulesHandler)
  .route('/', unpackHandler)

export default app
