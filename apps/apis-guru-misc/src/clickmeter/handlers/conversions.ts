import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConversionsConversionIdRoute,
  getConversionsAggregatedListRoute,
  getConversionsConversionIdAggregatedListRoute,
  getConversionsConversionIdAggregatedRoute,
  getConversionsConversionIdDatapointsCountRoute,
  getConversionsConversionIdDatapointsRoute,
  getConversionsConversionIdHitsRoute,
  getConversionsConversionIdRoute,
  getConversionsCountRoute,
  getConversionsRoute,
  postConversionsConversionIdRoute,
  postConversionsRoute,
  putConversionsConversionIdDatapointsBatchPatchRoute,
  putConversionsConversionIdDatapointsPatchRoute,
  putConversionsConversionIdNotesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const conversionsHandler = app
  .openapi(getConversionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversionsAggregatedListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConversionsConversionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversionsConversionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversionsConversionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversionsConversionIdAggregatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversionsConversionIdAggregatedListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversionsConversionIdDatapointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConversionsConversionIdDatapointsBatchPatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversionsConversionIdDatapointsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConversionsConversionIdDatapointsPatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversionsConversionIdHitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConversionsConversionIdNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
