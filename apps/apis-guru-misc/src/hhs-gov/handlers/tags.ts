import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getResourcesTagsFormatRoute,
  getResourcesTagsIdFormatRoute,
  getResourcesTagsIdMediaFormatRoute,
  getResourcesTagsIdRelatedFormatRoute,
  getResourcesTagsIdSyndicateFormatRoute,
  getResourcesTagsTagLanguagesFormatRoute,
  getResourcesTagsTagTypesFormatRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tagsHandler = app
  .openapi(getResourcesTagsFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesTagsTagLanguagesFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesTagsTagTypesFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesTagsIdFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesTagsIdMediaFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesTagsIdRelatedFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesTagsIdSyndicateFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
