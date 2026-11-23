import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getContentGetContentByIdIdLocaleIndexRoute,
  getContentGetContentByTagAndTypeTagTypeLocaleIndexRoute,
  getContentGetContentTypeTypeIndexRoute,
  getContentRssNewsArticlesPageTokenIndexRoute,
  getContentSearchContentByTagAndTypeTagTypeLocaleIndexRoute,
  getContentSearchHelpArticlesSearchtextSizeIndexRoute,
  getContentSearchLocaleIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contentHandler = app
  .openapi(getContentGetContentTypeTypeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContentGetContentByIdIdLocaleIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContentGetContentByTagAndTypeTagTypeLocaleIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContentSearchLocaleIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContentSearchContentByTagAndTypeTagTypeLocaleIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContentSearchHelpArticlesSearchtextSizeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContentRssNewsArticlesPageTokenIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
