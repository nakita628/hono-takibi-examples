import { OpenAPIHono } from '@hono/zod-openapi'
import {
  featureHandler,
  featureTaxonomyHandler,
  nameAuthorityHandler,
  nameHandler,
  searchHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', featureTaxonomyHandler)
  .route('/', featureHandler)
  .route('/', nameAuthorityHandler)
  .route('/', searchHandler)
  .route('/', nameHandler)

export default app
