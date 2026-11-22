import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2DagsDagIdRoute,
  getApiV2DagsDagIdDetailsRoute,
  getApiV2DagsDagIdRoute,
  getApiV2DagsRoute,
  getApiV2DagTagsRoute,
  patchApiV2DagsBulkRoute,
  patchApiV2DagsDagIdRoute,
  patchApiV2DagsRoute,
  postApiV2DagsDagIdFavoriteRoute,
  postApiV2DagsDagIdUnfavoriteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dagHandler = app
  .openapi(getApiV2DagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2DagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagsDagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2DagsDagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2DagsDagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagsDagIdDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2DagsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2DagsDagIdFavoriteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2DagsDagIdUnfavoriteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
