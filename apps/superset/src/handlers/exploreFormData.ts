import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1ExploreFormDataKeyRoute,
  getApiV1ExploreFormDataKeyRoute,
  postApiV1ExploreFormDataRoute,
  putApiV1ExploreFormDataKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const exploreFormDataHandler = app
  .openapi(postApiV1ExploreFormDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ExploreFormDataKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ExploreFormDataKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ExploreFormDataKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
