import { OpenAPIHono } from '@hono/zod-openapi'
import {
  agrHandler,
  annotationsHandler,
  enrichmentHandler,
  genesHandler,
  lookupHandler,
  mapsHandler,
  ontologyHandler,
  pathwaysHandler,
  phenotypeHandler,
  qtlsHandler,
  sslpsHandler,
  statsHandler,
  strainsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', agrHandler)
  .route('/', annotationsHandler)
  .route('/', enrichmentHandler)
  .route('/', genesHandler)
  .route('/', lookupHandler)
  .route('/', mapsHandler)
  .route('/', ontologyHandler)
  .route('/', pathwaysHandler)
  .route('/', phenotypeHandler)
  .route('/', qtlsHandler)
  .route('/', sslpsHandler)
  .route('/', statsHandler)
  .route('/', strainsHandler)

export default app
