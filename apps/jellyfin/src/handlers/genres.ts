import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGenresGenreNameRoute,
  getGenresNameImagesImageTypeImageIndexRoute,
  getGenresNameImagesImageTypeRoute,
  getGenresRoute,
  headGenresNameImagesImageTypeImageIndexRoute,
  headGenresNameImagesImageTypeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const genresHandler = app
  .openapi(getGenresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGenresGenreNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGenresNameImagesImageTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headGenresNameImagesImageTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGenresNameImagesImageTypeImageIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headGenresNameImagesImageTypeImageIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
