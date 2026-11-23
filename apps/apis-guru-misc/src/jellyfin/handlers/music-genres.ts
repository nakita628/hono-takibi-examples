import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMusicGenresGenreNameRoute,
  getMusicGenresIdInstantMixRoute,
  getMusicGenresNameImagesImageTypeImageIndexRoute,
  getMusicGenresNameImagesImageTypeRoute,
  getMusicGenresNameInstantMixRoute,
  getMusicGenresRoute,
  headMusicGenresNameImagesImageTypeImageIndexRoute,
  headMusicGenresNameImagesImageTypeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const musicGenresHandler = app
  .openapi(getMusicGenresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMusicGenresGenreNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMusicGenresIdInstantMixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMusicGenresNameImagesImageTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headMusicGenresNameImagesImageTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMusicGenresNameImagesImageTypeImageIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headMusicGenresNameImagesImageTypeImageIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMusicGenresNameInstantMixRoute, (c) => {
    throw new Error('Not implemented')
  })
