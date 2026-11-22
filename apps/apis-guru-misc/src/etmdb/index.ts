import { OpenAPIHono } from '@hono/zod-openapi'
import {
  cinemaDetailHandler,
  cinemaHandler,
  cinemaScheduleHandler,
  cinemaSheduleShowtimeHandler,
  companyCreditsHandler,
  companyHandler,
  filmographyHandler,
  filmographyTypeHandler,
  genreHandler,
  genreTypeHandler,
  jobHandler,
  mediaHandler,
  movieCastHandler,
  movieHandler,
  newsHandler,
  peopleHandler,
  showtimeHandler,
  watchlistHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', cinemaDetailHandler)
  .route('/', cinemaScheduleHandler)
  .route('/', cinemaSheduleShowtimeHandler)
  .route('/', cinemaHandler)
  .route('/', companyCreditsHandler)
  .route('/', companyHandler)
  .route('/', filmographyTypeHandler)
  .route('/', filmographyHandler)
  .route('/', genreTypeHandler)
  .route('/', genreHandler)
  .route('/', jobHandler)
  .route('/', mediaHandler)
  .route('/', movieCastHandler)
  .route('/', movieHandler)
  .route('/', newsHandler)
  .route('/', peopleHandler)
  .route('/', showtimeHandler)
  .route('/', watchlistHandler)

export default app
