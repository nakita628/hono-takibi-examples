import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiSearchIndexTermSearchResultsSearchTermRoute,
  getApiSearchParagraphReferenceRoute,
  getApiSearchParagraphSearchResultsSearchTermRoute,
  getApiSearchSectionSearchResultsSearchTermRoute,
} from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app
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
