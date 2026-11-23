import { OpenAPIHono } from '@hono/zod-openapi'
import {
  classificationInclusionsHandler,
  classificationsHandler,
  creditsHandler,
  episodesHandler,
  imagesHandler,
  mediaAssetsHandler,
  networksHandler,
  peopleHandler,
  seasonsHandler,
  seriesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', classificationInclusionsHandler)
  .route('/', classificationsHandler)
  .route('/', creditsHandler)
  .route('/', episodesHandler)
  .route('/', imagesHandler)
  .route('/', mediaAssetsHandler)
  .route('/', networksHandler)
  .route('/', peopleHandler)
  .route('/', seasonsHandler)
  .route('/', seriesHandler)

export default app
