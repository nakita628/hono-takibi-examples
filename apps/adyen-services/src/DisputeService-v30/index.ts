import { OpenAPIHono } from '@hono/zod-openapi'
import {
  acceptDisputeHandler,
  defendDisputeHandler,
  deleteDisputeDefenseDocumentHandler,
  retrieveApplicableDefenseReasonsHandler,
  supplyDefenseDocumentHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', acceptDisputeHandler)
  .route('/', defendDisputeHandler)
  .route('/', deleteDisputeDefenseDocumentHandler)
  .route('/', retrieveApplicableDefenseReasonsHandler)
  .route('/', supplyDefenseDocumentHandler)

export default app
