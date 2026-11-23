import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1TableIndexRoute,
  postV1TableNameCreateIndexIndexRoute,
  postV1TableNameCreateIndexRoute,
  postV1TableNameCreateScalarIndexIndexRoute,
  postV1TableNameDeleteIndexRoute,
  postV1TableNameDescribeIndexRoute,
  postV1TableNameDropIndexRoute,
  postV1TableNameIndexIndexNameDropIndexRoute,
  postV1TableNameIndexListIndexRoute,
  postV1TableNameInsertIndexRoute,
  postV1TableNameMergeInsertIndexRoute,
  postV1TableNameQueryIndexRoute,
} from './routes'
import {
  getV1TableIndexRouteHandler,
  postV1TableNameCreateIndexIndexRouteHandler,
  postV1TableNameCreateIndexRouteHandler,
  postV1TableNameCreateScalarIndexIndexRouteHandler,
  postV1TableNameDeleteIndexRouteHandler,
  postV1TableNameDescribeIndexRouteHandler,
  postV1TableNameDropIndexRouteHandler,
  postV1TableNameIndexIndexNameDropIndexRouteHandler,
  postV1TableNameIndexListIndexRouteHandler,
  postV1TableNameInsertIndexRouteHandler,
  postV1TableNameMergeInsertIndexRouteHandler,
  postV1TableNameQueryIndexRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1TableIndexRoute, getV1TableIndexRouteHandler)
  .openapi(postV1TableNameCreateIndexRoute, postV1TableNameCreateIndexRouteHandler)
  .openapi(postV1TableNameQueryIndexRoute, postV1TableNameQueryIndexRouteHandler)
  .openapi(postV1TableNameInsertIndexRoute, postV1TableNameInsertIndexRouteHandler)
  .openapi(postV1TableNameMergeInsertIndexRoute, postV1TableNameMergeInsertIndexRouteHandler)
  .openapi(postV1TableNameDeleteIndexRoute, postV1TableNameDeleteIndexRouteHandler)
  .openapi(postV1TableNameDropIndexRoute, postV1TableNameDropIndexRouteHandler)
  .openapi(postV1TableNameDescribeIndexRoute, postV1TableNameDescribeIndexRouteHandler)
  .openapi(postV1TableNameIndexListIndexRoute, postV1TableNameIndexListIndexRouteHandler)
  .openapi(postV1TableNameCreateIndexIndexRoute, postV1TableNameCreateIndexIndexRouteHandler)
  .openapi(
    postV1TableNameCreateScalarIndexIndexRoute,
    postV1TableNameCreateScalarIndexIndexRouteHandler,
  )
  .openapi(
    postV1TableNameIndexIndexNameDropIndexRoute,
    postV1TableNameIndexIndexNameDropIndexRouteHandler,
  )

export default app
