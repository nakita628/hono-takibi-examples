import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiRatingsIdRoute,
  deleteApiRatingsRoute,
  getApiRatingsIdRoute,
  getApiRatingsRoute,
  patchApiRatingsIdRoute,
  postApiRatingsRoute,
  putApiRatingsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ratingsHandler = app
  .openapi(postApiRatingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRatingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiRatingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRatingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiRatingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiRatingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiRatingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
