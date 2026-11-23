import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAbbreviationBookChapterJsonRoute,
  getAbbreviationBookChapterShaRoute,
  getAbbreviationBookChaptersJsonRoute,
  getAbbreviationBookChaptersShaRoute,
  getAbbreviationBookChaptersTxtRoute,
  getAbbreviationBookChecksumJsonRoute,
  getAbbreviationBookChecksumShaRoute,
  getAbbreviationBookChecksumTxtRoute,
  getAbbreviationBookJsonRoute,
  getAbbreviationBookShaRoute,
  getAbbreviationBooksJsonRoute,
  getAbbreviationBooksShaRoute,
  getAbbreviationBooksTxtRoute,
  getAbbreviationChecksumJsonRoute,
  getAbbreviationChecksumShaRoute,
  getAbbreviationChecksumTxtRoute,
  getAbbreviationJsonRoute,
  getAbbreviationShaRoute,
  getChecksumJsonRoute,
  getChecksumShaRoute,
  getChecksumTxtRoute,
  getOpenapiJsonRoute,
  getOpenapiShaRoute,
  getTranslationsJsonRoute,
  getTranslationsShaRoute,
  getTranslationsTxtRoute,
} from './routes'
import {
  getAbbreviationBookChapterJsonRouteHandler,
  getAbbreviationBookChapterShaRouteHandler,
  getAbbreviationBookChaptersJsonRouteHandler,
  getAbbreviationBookChaptersShaRouteHandler,
  getAbbreviationBookChaptersTxtRouteHandler,
  getAbbreviationBookChecksumJsonRouteHandler,
  getAbbreviationBookChecksumShaRouteHandler,
  getAbbreviationBookChecksumTxtRouteHandler,
  getAbbreviationBookJsonRouteHandler,
  getAbbreviationBookShaRouteHandler,
  getAbbreviationBooksJsonRouteHandler,
  getAbbreviationBooksShaRouteHandler,
  getAbbreviationBooksTxtRouteHandler,
  getAbbreviationChecksumJsonRouteHandler,
  getAbbreviationChecksumShaRouteHandler,
  getAbbreviationChecksumTxtRouteHandler,
  getAbbreviationJsonRouteHandler,
  getAbbreviationShaRouteHandler,
  getChecksumJsonRouteHandler,
  getChecksumShaRouteHandler,
  getChecksumTxtRouteHandler,
  getOpenapiJsonRouteHandler,
  getOpenapiShaRouteHandler,
  getTranslationsJsonRouteHandler,
  getTranslationsShaRouteHandler,
  getTranslationsTxtRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getTranslationsJsonRoute, getTranslationsJsonRouteHandler)
  .openapi(getTranslationsTxtRoute, getTranslationsTxtRouteHandler)
  .openapi(getTranslationsShaRoute, getTranslationsShaRouteHandler)
  .openapi(getChecksumJsonRoute, getChecksumJsonRouteHandler)
  .openapi(getChecksumTxtRoute, getChecksumTxtRouteHandler)
  .openapi(getChecksumShaRoute, getChecksumShaRouteHandler)
  .openapi(getAbbreviationJsonRoute, getAbbreviationJsonRouteHandler)
  .openapi(getAbbreviationShaRoute, getAbbreviationShaRouteHandler)
  .openapi(getAbbreviationBooksJsonRoute, getAbbreviationBooksJsonRouteHandler)
  .openapi(getAbbreviationBooksTxtRoute, getAbbreviationBooksTxtRouteHandler)
  .openapi(getAbbreviationBooksShaRoute, getAbbreviationBooksShaRouteHandler)
  .openapi(getAbbreviationChecksumJsonRoute, getAbbreviationChecksumJsonRouteHandler)
  .openapi(getAbbreviationChecksumTxtRoute, getAbbreviationChecksumTxtRouteHandler)
  .openapi(getAbbreviationChecksumShaRoute, getAbbreviationChecksumShaRouteHandler)
  .openapi(getAbbreviationBookJsonRoute, getAbbreviationBookJsonRouteHandler)
  .openapi(getAbbreviationBookShaRoute, getAbbreviationBookShaRouteHandler)
  .openapi(getAbbreviationBookChaptersJsonRoute, getAbbreviationBookChaptersJsonRouteHandler)
  .openapi(getAbbreviationBookChaptersTxtRoute, getAbbreviationBookChaptersTxtRouteHandler)
  .openapi(getAbbreviationBookChaptersShaRoute, getAbbreviationBookChaptersShaRouteHandler)
  .openapi(getAbbreviationBookChecksumJsonRoute, getAbbreviationBookChecksumJsonRouteHandler)
  .openapi(getAbbreviationBookChecksumTxtRoute, getAbbreviationBookChecksumTxtRouteHandler)
  .openapi(getAbbreviationBookChecksumShaRoute, getAbbreviationBookChecksumShaRouteHandler)
  .openapi(getAbbreviationBookChapterJsonRoute, getAbbreviationBookChapterJsonRouteHandler)
  .openapi(getAbbreviationBookChapterShaRoute, getAbbreviationBookChapterShaRouteHandler)
  .openapi(getOpenapiJsonRoute, getOpenapiJsonRouteHandler)
  .openapi(getOpenapiShaRoute, getOpenapiShaRouteHandler)

export default app
