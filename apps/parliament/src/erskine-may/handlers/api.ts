import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiChapterChapterNumberRoute,
  getApiIndexTermBrowseRoute,
  getApiIndexTermIndexTermIdRoute,
  getApiPartPartNumberRoute,
  getApiPartRoute,
  getApiSearchIndexTermSearchResultsSearchTermRoute,
  getApiSearchParagraphReferenceRoute,
  getApiSearchParagraphSearchResultsSearchTermRoute,
  getApiSearchSectionSearchResultsSearchTermRoute,
  getApiSectionSectionIdRoute,
  getApiSectionSectionIdStepRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiChapterChapterNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIndexTermBrowseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIndexTermIndexTermIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPartPartNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSearchIndexTermSearchResultsSearchTermRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSearchParagraphReferenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSearchParagraphSearchResultsSearchTermRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSearchSectionSearchResultsSearchTermRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSectionSectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSectionSectionIdStepRoute, (c) => {
    throw new Error('Not implemented')
  })
