import { OpenAPIHono } from '@hono/zod-openapi'
import {
  classificationHandler,
  classificationInclusionHandler,
  creditHandler,
  episodeHandler,
  imageHandler,
  mediaAssetHandler,
  networkHandler,
  personHandler,
  seasonHandler,
  seriesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', classificationInclusionHandler)
  .route('/', classificationHandler)
  .route('/', creditHandler)
  .route('/', episodeHandler)
  .route('/', imageHandler)
  .route('/', mediaAssetHandler)
  .route('/', networkHandler)
  .route('/', personHandler)
  .route('/', seasonHandler)
  .route('/', seriesHandler)

export default app
