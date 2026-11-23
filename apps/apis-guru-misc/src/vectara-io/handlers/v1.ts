import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1CreateCorpusRoute,
  postV1DeleteCorpusRoute,
  postV1DeleteDocRoute,
  postV1IndexRoute,
  postV1ListCorporaRoute,
  postV1QueryRoute,
  postV1ResetCorpusRoute,
  postV1StreamQueryRoute,
  postV1UploadRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(postV1CreateCorpusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DeleteCorpusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DeleteDocRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ListCorporaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1QueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ResetCorpusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1StreamQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UploadRoute, (c) => {
    throw new Error('Not implemented')
  })
