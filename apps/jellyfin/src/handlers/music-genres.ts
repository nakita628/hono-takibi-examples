import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMusicGenresGenreNameRoute,
  getMusicGenresInstantMixRoute,
  getMusicGenresNameImagesImageTypeImageIndexRoute,
  getMusicGenresNameImagesImageTypeRoute,
  getMusicGenresNameInstantMixRoute,
  headMusicGenresNameImagesImageTypeImageIndexRoute,
  headMusicGenresNameImagesImageTypeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const musicGenresHandler = app
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
  .openapi(getMusicGenresInstantMixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMusicGenresGenreNameRoute, (c) => {
    throw new Error('Not implemented')
  })
