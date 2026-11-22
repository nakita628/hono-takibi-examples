import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2AgeRatingsRoute,
  getApiV2AuthorsNamesRoute,
  getApiV2AuthorsRolesRoute,
  getApiV2AuthorsRoute,
  getApiV2GenresRoute,
  getApiV2LanguagesRoute,
  getApiV2PublishersRoute,
  getApiV2SeriesReleaseYearsRoute,
  getApiV2SharingLabelsRoute,
  getApiV2TagsRoute,
  getApiV3NotableEntitiesKindsRoute,
  getApiV3NotableEntitiesNamesRoute,
  getApiV3NotableEntitiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const referentialMetadataHandler = app
  .openapi(getApiV2AgeRatingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AuthorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AuthorsNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AuthorsRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GenresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PublishersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SeriesReleaseYearsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SharingLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3NotableEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3NotableEntitiesKindsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3NotableEntitiesNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
