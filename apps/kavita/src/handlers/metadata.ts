import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiMetadataAgeRatingsRoute,
  getApiMetadataAllBcp47LanguagesRoute,
  getApiMetadataAllLanguagesRoute,
  getApiMetadataGenresRoute,
  getApiMetadataLanguagesRoute,
  getApiMetadataLanguageTitleRoute,
  getApiMetadataPeopleByRoleRoute,
  getApiMetadataPeopleRoute,
  getApiMetadataPublicationStatusRoute,
  getApiMetadataReadinglistTagsRoute,
  getApiMetadataSeriesDetailPlusRoute,
  getApiMetadataTagsRoute,
  postApiMetadataGenresWithCountsRoute,
  postApiMetadataTagsWithCountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const metadataHandler = app
  .openapi(getApiMetadataGenresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiMetadataGenresWithCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMetadataPeopleByRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMetadataPeopleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMetadataTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMetadataReadinglistTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiMetadataTagsWithCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMetadataAgeRatingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMetadataPublicationStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMetadataLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMetadataAllLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMetadataAllBcp47LanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMetadataLanguageTitleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMetadataSeriesDetailPlusRoute, (c) => {
    throw new Error('Not implemented')
  })
