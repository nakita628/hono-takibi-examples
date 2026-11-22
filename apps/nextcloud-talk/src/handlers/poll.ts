import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdRoute,
  getOcsV2PhpAppsSpreedApiApiVersionPollTokenDraftsRoute,
  getOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdExportFormatRoute,
  getOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdRoute,
  postOcsV2PhpAppsSpreedApiApiVersionPollTokenDraftPollIdRoute,
  postOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdRoute,
  postOcsV2PhpAppsSpreedApiApiVersionPollTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pollHandler = app
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionPollTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionPollTokenDraftPollIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionPollTokenDraftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdExportFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
