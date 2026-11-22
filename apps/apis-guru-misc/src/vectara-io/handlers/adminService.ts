import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1CreateCorpusRoute,
  postV1DeleteCorpusRoute,
  postV1ListCorporaRoute,
  postV1ResetCorpusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adminServiceHandler = app
  .openapi(postV1CreateCorpusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DeleteCorpusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ListCorporaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ResetCorpusRoute, (c) => {
    throw new Error('Not implemented')
  })
