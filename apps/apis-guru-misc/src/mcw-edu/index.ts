import { OpenAPIHono } from '@hono/zod-openapi'
import {
  agrHandler,
  annotationHandler,
  chromosomeHandler,
  enrichmentWebServiceHandler,
  geneHandler,
  lookupHandler,
  mapHandler,
  ontologyHandler,
  pathwayHandler,
  qtlHandler,
  quantitativePhenotypeHandler,
  ratStrainHandler,
  sslpHandler,
  statisticsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', agrHandler)
  .route('/', annotationHandler)
  .route('/', enrichmentWebServiceHandler)
  .route('/', geneHandler)
  .route('/', lookupHandler)
  .route('/', chromosomeHandler)
  .route('/', mapHandler)
  .route('/', ontologyHandler)
  .route('/', pathwayHandler)
  .route('/', quantitativePhenotypeHandler)
  .route('/', qtlHandler)
  .route('/', sslpHandler)
  .route('/', statisticsHandler)
  .route('/', ratStrainHandler)

export default app
