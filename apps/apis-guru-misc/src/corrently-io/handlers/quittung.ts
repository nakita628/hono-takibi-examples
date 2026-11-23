import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getQuittungZugferdRoute,
  postQuittungCommitRoute,
  postQuittungCreateRoute,
  postQuittungPrepareRoute,
  postQuittungTsedataRoute,
  postQuittungTseRoute,
  postQuittungTsesignatureRoute,
} from '../routes'

const app = new OpenAPIHono()

export const quittungHandler = app
  .openapi(postQuittungCommitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuittungCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuittungPrepareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuittungTseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuittungTsedataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuittungTsesignatureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuittungZugferdRoute, (c) => {
    throw new Error('Not implemented')
  })
