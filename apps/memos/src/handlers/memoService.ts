import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiMemosMemoReactionsReactionRoute,
  deleteApiMemosMemoRoute,
  deleteApiMemosMemoSharesShareRoute,
  getApiMemosDashLinkMetadataRoute,
  getApiMemosMemoAttachmentsRoute,
  getApiMemosMemoReactionsRoute,
  getApiMemosMemoRelationsRoute,
  getApiMemosMemoRoute,
  getApiMemosMemoSharesRoute,
  getApiMemosRoute,
  getApiSharesShareTokenMemoRoute,
  patchApiMemosMemoAttachmentsRoute,
  patchApiMemosMemoRelationsRoute,
  patchApiMemosMemoRoute,
  postApiMemosDashLinkMetadataBatchGetRoute,
  postApiMemosMemoReactionsRoute,
  postApiMemosMemoSharesRoute,
  postApiMemosRoute,
} from '../routes'

const app = new OpenAPIHono()

export const memoServiceHandler = app
  .openapi(getApiMemosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiMemosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMemosDashLinkMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiMemosDashLinkMetadataBatchGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMemosMemoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiMemosMemoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiMemosMemoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMemosMemoAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiMemosMemoAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMemosMemoReactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiMemosMemoReactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiMemosMemoReactionsReactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMemosMemoRelationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiMemosMemoRelationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMemosMemoSharesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiMemosMemoSharesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiMemosMemoSharesShareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSharesShareTokenMemoRoute, (c) => {
    throw new Error('Not implemented')
  })
