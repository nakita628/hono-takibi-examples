import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1AgeRatingsRoute,
  getApiV1AuthorsNamesRoute,
  getApiV1AuthorsRolesRoute,
  getApiV1AuthorsRoute,
  getApiV1GenresRoute,
  getApiV1LanguagesRoute,
  getApiV1PublishersRoute,
  getApiV1SeriesReleaseDatesRoute,
  getApiV1SharingLabelsRoute,
  getApiV1TagsBookRoute,
  getApiV1TagsRoute,
  getApiV1TagsSeriesRoute,
  putApiV1LibrariesLibraryIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deprecatedHandler = app
  .openapi(getApiV1AgeRatingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AuthorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AuthorsNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AuthorsRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GenresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1LibrariesLibraryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PublishersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SeriesReleaseDatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SharingLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TagsBookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TagsSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
