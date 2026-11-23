import { OpenAPIHono } from '@hono/zod-openapi'
import {
  domainsHandler,
  entriesHandler,
  filtersHandler,
  grammaticalFeaturesHandler,
  inflectionsHandler,
  languagesHandler,
  lexicalcategoriesHandler,
  regionsHandler,
  registersHandler,
  searchHandler,
  statsHandler,
  wordlistHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', domainsHandler)
  .route('/', entriesHandler)
  .route('/', filtersHandler)
  .route('/', grammaticalFeaturesHandler)
  .route('/', inflectionsHandler)
  .route('/', languagesHandler)
  .route('/', lexicalcategoriesHandler)
  .route('/', regionsHandler)
  .route('/', registersHandler)
  .route('/', searchHandler)
  .route('/', statsHandler)
  .route('/', wordlistHandler)

export default app
