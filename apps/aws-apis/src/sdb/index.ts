import { OpenAPIHono } from '@hono/zod-openapi'
import {
  ActionBatchDeleteAttributesHandler,
  ActionBatchPutAttributesHandler,
  ActionCreateDomainHandler,
  ActionDeleteAttributesHandler,
  ActionDeleteDomainHandler,
  ActionDomainMetadataHandler,
  ActionGetAttributesHandler,
  ActionListDomainsHandler,
  ActionPutAttributesHandler,
  ActionSelectHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', ActionBatchDeleteAttributesHandler)
  .route('/', ActionBatchPutAttributesHandler)
  .route('/', ActionCreateDomainHandler)
  .route('/', ActionDeleteAttributesHandler)
  .route('/', ActionDeleteDomainHandler)
  .route('/', ActionDomainMetadataHandler)
  .route('/', ActionGetAttributesHandler)
  .route('/', ActionListDomainsHandler)
  .route('/', ActionPutAttributesHandler)
  .route('/', ActionSelectHandler)

export default app
