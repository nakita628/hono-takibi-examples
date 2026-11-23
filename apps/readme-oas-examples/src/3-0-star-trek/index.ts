import { OpenAPIHono } from '@hono/zod-openapi'
import {
  animalHandler,
  astronomicalObjectHandler,
  bookCollectionHandler,
  bookHandler,
  bookSeriesHandler,
  characterHandler,
  comicCollectionHandler,
  comicSeriesHandler,
  comicsHandler,
  comicStripHandler,
  companyHandler,
  conflictHandler,
  elementHandler,
  episodeHandler,
  foodHandler,
  literatureHandler,
  locationHandler,
  magazineHandler,
  magazineSeriesHandler,
  materialHandler,
  medicalConditionHandler,
  movieHandler,
  occupationHandler,
  organizationHandler,
  performerHandler,
  seasonHandler,
  seriesHandler,
  soundtrackHandler,
  spacecraftClassHandler,
  spacecraftHandler,
  speciesHandler,
  staffHandler,
  technologyHandler,
  titleHandler,
  tradingCardDeckHandler,
  tradingCardHandler,
  tradingCardSetHandler,
  videoGameHandler,
  videoReleaseHandler,
  weaponHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', animalHandler)
  .route('/', astronomicalObjectHandler)
  .route('/', bookHandler)
  .route('/', bookCollectionHandler)
  .route('/', bookSeriesHandler)
  .route('/', characterHandler)
  .route('/', comicsHandler)
  .route('/', comicCollectionHandler)
  .route('/', comicSeriesHandler)
  .route('/', comicStripHandler)
  .route('/', companyHandler)
  .route('/', conflictHandler)
  .route('/', elementHandler)
  .route('/', episodeHandler)
  .route('/', foodHandler)
  .route('/', literatureHandler)
  .route('/', locationHandler)
  .route('/', magazineHandler)
  .route('/', magazineSeriesHandler)
  .route('/', materialHandler)
  .route('/', medicalConditionHandler)
  .route('/', movieHandler)
  .route('/', occupationHandler)
  .route('/', organizationHandler)
  .route('/', performerHandler)
  .route('/', seasonHandler)
  .route('/', seriesHandler)
  .route('/', soundtrackHandler)
  .route('/', spacecraftHandler)
  .route('/', spacecraftClassHandler)
  .route('/', speciesHandler)
  .route('/', staffHandler)
  .route('/', technologyHandler)
  .route('/', titleHandler)
  .route('/', tradingCardHandler)
  .route('/', tradingCardDeckHandler)
  .route('/', tradingCardSetHandler)
  .route('/', videoGameHandler)
  .route('/', videoReleaseHandler)
  .route('/', weaponHandler)

export default app
