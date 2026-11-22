import { OpenAPIHono } from '@hono/zod-openapi'
import {
  CancelChangeSetCatalogChangeSetIdHandler,
  DeleteResourcePolicyResourceArnHandler,
  DescribeChangeSetCatalogChangeSetIdHandler,
  DescribeEntityCatalogEntityIdHandler,
  GetResourcePolicyResourceArnHandler,
  ListChangeSetsHandler,
  ListEntitiesHandler,
  ListTagsForResourceHandler,
  PutResourcePolicyHandler,
  StartChangeSetHandler,
  TagResourceHandler,
  UntagResourceHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', CancelChangeSetCatalogChangeSetIdHandler)
  .route('/', DeleteResourcePolicyResourceArnHandler)
  .route('/', DescribeChangeSetCatalogChangeSetIdHandler)
  .route('/', DescribeEntityCatalogEntityIdHandler)
  .route('/', GetResourcePolicyResourceArnHandler)
  .route('/', ListChangeSetsHandler)
  .route('/', ListEntitiesHandler)
  .route('/', ListTagsForResourceHandler)
  .route('/', PutResourcePolicyHandler)
  .route('/', StartChangeSetHandler)
  .route('/', TagResourceHandler)
  .route('/', UntagResourceHandler)

export default app
