import { OpenAPIHono } from '@hono/zod-openapi'
import {
  domainsApiHandler,
  imageApiHandler,
  imageRegionProposalApiHandler,
  predictionsApiHandler,
  projectApiHandler,
  suggestTagsAndRegionsApiHandler,
  tagsApiHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', domainsApiHandler)
  .route('/', projectApiHandler)
  .route('/', imageApiHandler)
  .route('/', imageRegionProposalApiHandler)
  .route('/', predictionsApiHandler)
  .route('/', tagsApiHandler)
  .route('/', suggestTagsAndRegionsApiHandler)

export default app
