import { OpenAPIHono } from '@hono/zod-openapi'
import {
  audioHandler,
  catalogHandler,
  computerVisionHandler,
  contributorsHandler,
  customMusicHandler,
  editorialImagesHandler,
  editorialVideoHandler,
  imagesHandler,
  oauthHandler,
  soundEffectsHandler,
  testHandler,
  usersHandler,
  videosHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', customMusicHandler)
  .route('/', audioHandler)
  .route('/', imagesHandler)
  .route('/', catalogHandler)
  .route('/', contributorsHandler)
  .route('/', computerVisionHandler)
  .route('/', editorialImagesHandler)
  .route('/', editorialVideoHandler)
  .route('/', oauthHandler)
  .route('/', soundEffectsHandler)
  .route('/', testHandler)
  .route('/', usersHandler)
  .route('/', videosHandler)

export default app
