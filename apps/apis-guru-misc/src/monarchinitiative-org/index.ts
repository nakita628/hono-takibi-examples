import { OpenAPIHono } from '@hono/zod-openapi'
import {
  associationHandler,
  bioentityHandler,
  bioentitysetHandler,
  bioentitysetHomologsHandler,
  bioentitysetSlimmerHandler,
  camHandler,
  evidenceGraphHandler,
  genomeFeaturesHandler,
  graphHandler,
  identifierMapperHandler,
  identifierPrefixesHandler,
  individualHandler,
  martHandler,
  metadataHandler,
  mmeHandler,
  nlpAnnotateHandler,
  ontolHandler,
  ontolIdentifierHandler,
  ontolLabelerHandler,
  ontologyHandler,
  owlOntologyHandler,
  pairSimHandler,
  relationUsageHandler,
  searchHandler,
  simHandler,
  variationSetHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', associationHandler)
  .route('/', bioentityHandler)
  .route('/', bioentitysetHandler)
  .route('/', bioentitysetHomologsHandler)
  .route('/', bioentitysetSlimmerHandler)
  .route('/', camHandler)
  .route('/', evidenceGraphHandler)
  .route('/', genomeFeaturesHandler)
  .route('/', graphHandler)
  .route('/', identifierMapperHandler)
  .route('/', identifierPrefixesHandler)
  .route('/', individualHandler)
  .route('/', martHandler)
  .route('/', metadataHandler)
  .route('/', mmeHandler)
  .route('/', nlpAnnotateHandler)
  .route('/', ontolIdentifierHandler)
  .route('/', ontolHandler)
  .route('/', ontolLabelerHandler)
  .route('/', ontologyHandler)
  .route('/', owlOntologyHandler)
  .route('/', pairSimHandler)
  .route('/', relationUsageHandler)
  .route('/', searchHandler)
  .route('/', simHandler)
  .route('/', variationSetHandler)

export default app
