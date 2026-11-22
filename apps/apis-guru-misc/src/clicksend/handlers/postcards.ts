import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPostPostcardsExportFilenameFilenameRoute,
  getPostPostcardsHistoryRoute,
  postPostPostcardsPriceRoute,
  postPostPostcardsSendRoute,
} from '../routes'

const app = new OpenAPIHono()

export const postcardsHandler = app
  .openapi(getPostPostcardsExportFilenameFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPostPostcardsHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPostPostcardsPriceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPostPostcardsSendRoute, (c) => {
    throw new Error('Not implemented')
  })
