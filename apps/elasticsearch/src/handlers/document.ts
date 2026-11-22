import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIndexDocIdRoute,
  getIndexDocIdRoute,
  getIndexMgetRoute,
  getIndexMtermvectorsRoute,
  getIndexSourceIdRoute,
  getIndexTermvectorsIdRoute,
  getIndexTermvectorsRoute,
  getMgetRoute,
  getMtermvectorsRoute,
  headIndexDocIdRoute,
  headIndexSourceIdRoute,
  postBulkRoute,
  postDeleteByQueryTaskIdRethrottleRoute,
  postIndexBulkRoute,
  postIndexCreateIdRoute,
  postIndexDeleteByQueryRoute,
  postIndexDocIdRoute,
  postIndexDocRoute,
  postIndexMgetRoute,
  postIndexMtermvectorsRoute,
  postIndexTermvectorsIdRoute,
  postIndexTermvectorsRoute,
  postIndexUpdateByQueryRoute,
  postIndexUpdateIdRoute,
  postMgetRoute,
  postMtermvectorsRoute,
  postReindexRoute,
  postReindexTaskIdRethrottleRoute,
  postUpdateByQueryTaskIdRethrottleRoute,
  putBulkRoute,
  putIndexBulkRoute,
  putIndexCreateIdRoute,
  putIndexDocIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const documentHandler = app
  .openapi(putBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndexBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndexCreateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexCreateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexDocIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndexDocIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexDocIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexDocIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headIndexDocIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexDeleteByQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeleteByQueryTaskIdRethrottleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headIndexSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexDocRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReindexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMgetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMgetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexMgetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexMgetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMtermvectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMtermvectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexMtermvectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexMtermvectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReindexTaskIdRethrottleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexTermvectorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexTermvectorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexTermvectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexTermvectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexUpdateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexUpdateByQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUpdateByQueryTaskIdRethrottleRoute, (c) => {
    throw new Error('Not implemented')
  })
