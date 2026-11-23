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
} from './routes'
import {
  getApiChapterChapterNumberRouteHandler,
  getApiIndexTermBrowseRouteHandler,
  getApiIndexTermIndexTermIdRouteHandler,
  getApiPartPartNumberRouteHandler,
  getApiPartRouteHandler,
  getApiSearchIndexTermSearchResultsSearchTermRouteHandler,
  getApiSearchParagraphReferenceRouteHandler,
  getApiSearchParagraphSearchResultsSearchTermRouteHandler,
  getApiSearchSectionSearchResultsSearchTermRouteHandler,
  getApiSectionSectionIdRouteHandler,
  getApiSectionSectionIdStepRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiChapterChapterNumberRoute, getApiChapterChapterNumberRouteHandler)
  .openapi(getApiIndexTermBrowseRoute, getApiIndexTermBrowseRouteHandler)
  .openapi(getApiIndexTermIndexTermIdRoute, getApiIndexTermIndexTermIdRouteHandler)
  .openapi(getApiPartRoute, getApiPartRouteHandler)
  .openapi(getApiPartPartNumberRoute, getApiPartPartNumberRouteHandler)
  .openapi(
    getApiSearchIndexTermSearchResultsSearchTermRoute,
    getApiSearchIndexTermSearchResultsSearchTermRouteHandler,
  )
  .openapi(getApiSearchParagraphReferenceRoute, getApiSearchParagraphReferenceRouteHandler)
  .openapi(
    getApiSearchParagraphSearchResultsSearchTermRoute,
    getApiSearchParagraphSearchResultsSearchTermRouteHandler,
  )
  .openapi(
    getApiSearchSectionSearchResultsSearchTermRoute,
    getApiSearchSectionSearchResultsSearchTermRouteHandler,
  )
  .openapi(getApiSectionSectionIdRoute, getApiSectionSectionIdRouteHandler)
  .openapi(getApiSectionSectionIdStepRoute, getApiSectionSectionIdStepRouteHandler)

export default app
