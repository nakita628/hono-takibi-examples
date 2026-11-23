import { OpenAPIHono } from '@hono/zod-openapi'
import {
  actionBatchDeleteAttributesHandler,
  actionBatchPutAttributesHandler,
  actionCreateDomainHandler,
  actionDeleteAttributesHandler,
  actionDeleteDomainHandler,
  actionDomainMetadataHandler,
  actionGetAttributesHandler,
  actionListDomainsHandler,
  actionPutAttributesHandler,
  actionSelectHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', actionBatchDeleteAttributesHandler)
  .route('/', actionBatchPutAttributesHandler)
  .route('/', actionCreateDomainHandler)
  .route('/', actionDeleteAttributesHandler)
  .route('/', actionDeleteDomainHandler)
  .route('/', actionDomainMetadataHandler)
  .route('/', actionGetAttributesHandler)
  .route('/', actionListDomainsHandler)
  .route('/', actionPutAttributesHandler)
  .route('/', actionSelectHandler)

export default app
