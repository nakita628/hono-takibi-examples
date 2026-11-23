import { OpenAPIHono } from '@hono/zod-openapi'
import {
  associationHandler,
  bioentityHandler,
  bioentitysetHandler,
  camHandler,
  evidenceHandler,
  genomeHandler,
  graphHandler,
  identifierHandler,
  individualHandler,
  martHandler,
  metadataHandler,
  mmeHandler,
  nlpHandler,
  ontolHandler,
  ontologyHandler,
  owlHandler,
  pairHandler,
  relationHandler,
  searchHandler,
  simHandler,
  variationHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', associationHandler)
  .route('/', bioentityHandler)
  .route('/', bioentitysetHandler)
  .route('/', camHandler)
  .route('/', evidenceHandler)
  .route('/', genomeHandler)
  .route('/', graphHandler)
  .route('/', identifierHandler)
  .route('/', individualHandler)
  .route('/', martHandler)
  .route('/', metadataHandler)
  .route('/', mmeHandler)
  .route('/', nlpHandler)
  .route('/', ontolHandler)
  .route('/', ontologyHandler)
  .route('/', owlHandler)
  .route('/', pairHandler)
  .route('/', relationHandler)
  .route('/', searchHandler)
  .route('/', simHandler)
  .route('/', variationHandler)

export default app
