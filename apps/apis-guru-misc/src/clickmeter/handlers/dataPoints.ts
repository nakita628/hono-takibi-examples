import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDatapointsBatchRoute,
  deleteDatapointsIdRoute,
  getDatapointsAggregatedListRoute,
  getDatapointsAggregatedRoute,
  getDatapointsCountRoute,
  getDatapointsIdAggregatedListRoute,
  getDatapointsIdAggregatedRoute,
  getDatapointsIdHitsRoute,
  getDatapointsIdRoute,
  getDatapointsRoute,
  postDatapointsBatchRoute,
  postDatapointsIdRoute,
  postDatapointsRoute,
  putDatapointsBatchRoute,
  putDatapointsIdFavouriteRoute,
  putDatapointsIdNotesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dataPointsHandler = app
  .openapi(getDatapointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatapointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatapointsAggregatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatapointsAggregatedListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDatapointsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatapointsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDatapointsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatapointsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDatapointsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatapointsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatapointsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatapointsIdAggregatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatapointsIdAggregatedListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDatapointsIdFavouriteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatapointsIdHitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDatapointsIdNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
