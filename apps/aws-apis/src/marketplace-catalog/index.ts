import { OpenAPIHono } from '@hono/zod-openapi'
import {
  cancelChangeSetCatalogChangeSetIdHandler,
  deleteResourcePolicyResourceArnHandler,
  describeChangeSetCatalogChangeSetIdHandler,
  describeEntityCatalogEntityIdHandler,
  getResourcePolicyResourceArnHandler,
  listChangeSetsHandler,
  listEntitiesHandler,
  listTagsForResourceHandler,
  putResourcePolicyHandler,
  startChangeSetHandler,
  tagResourceHandler,
  untagResourceHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', cancelChangeSetCatalogChangeSetIdHandler)
  .route('/', deleteResourcePolicyResourceArnHandler)
  .route('/', describeChangeSetCatalogChangeSetIdHandler)
  .route('/', describeEntityCatalogEntityIdHandler)
  .route('/', getResourcePolicyResourceArnHandler)
  .route('/', listChangeSetsHandler)
  .route('/', listEntitiesHandler)
  .route('/', listTagsForResourceHandler)
  .route('/', putResourcePolicyHandler)
  .route('/', startChangeSetHandler)
  .route('/', tagResourceHandler)
  .route('/', untagResourceHandler)

export default app
