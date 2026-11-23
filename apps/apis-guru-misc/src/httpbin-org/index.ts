import { OpenAPIHono } from '@hono/zod-openapi'
import {
  absoluteRedirectHandler,
  anythingHandler,
  base64Handler,
  basicAuthHandler,
  bearerHandler,
  brotliHandler,
  bytesHandler,
  cacheHandler,
  cookiesHandler,
  deflateHandler,
  delayHandler,
  deleteHandler,
  denyHandler,
  digestAuthHandler,
  dripHandler,
  encodingHandler,
  etagHandler,
  getHandler,
  gzipHandler,
  headersHandler,
  hiddenBasicAuthHandler,
  htmlHandler,
  imageHandler,
  ipHandler,
  jsonHandler,
  linksHandler,
  patchHandler,
  postHandler,
  putHandler,
  rangeHandler,
  redirectHandler,
  redirectToHandler,
  relativeRedirectHandler,
  responseHeadersHandler,
  robotsTxtHandler,
  statusHandler,
  streamBytesHandler,
  streamHandler,
  userAgentHandler,
  uuidHandler,
  xmlHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', absoluteRedirectHandler)
  .route('/', anythingHandler)
  .route('/', base64Handler)
  .route('/', basicAuthHandler)
  .route('/', bearerHandler)
  .route('/', brotliHandler)
  .route('/', bytesHandler)
  .route('/', cacheHandler)
  .route('/', cookiesHandler)
  .route('/', deflateHandler)
  .route('/', delayHandler)
  .route('/', deleteHandler)
  .route('/', denyHandler)
  .route('/', digestAuthHandler)
  .route('/', dripHandler)
  .route('/', encodingHandler)
  .route('/', etagHandler)
  .route('/', getHandler)
  .route('/', gzipHandler)
  .route('/', headersHandler)
  .route('/', hiddenBasicAuthHandler)
  .route('/', htmlHandler)
  .route('/', imageHandler)
  .route('/', ipHandler)
  .route('/', jsonHandler)
  .route('/', linksHandler)
  .route('/', patchHandler)
  .route('/', postHandler)
  .route('/', putHandler)
  .route('/', rangeHandler)
  .route('/', redirectToHandler)
  .route('/', redirectHandler)
  .route('/', relativeRedirectHandler)
  .route('/', responseHeadersHandler)
  .route('/', robotsTxtHandler)
  .route('/', statusHandler)
  .route('/', streamBytesHandler)
  .route('/', streamHandler)
  .route('/', userAgentHandler)
  .route('/', uuidHandler)
  .route('/', xmlHandler)

export default app
