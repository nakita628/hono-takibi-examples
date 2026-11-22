import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1DebitmemosDebitMemoIdRoute,
  getV1DebitmemosDebitMemoIdApplicationPartsRoute,
  getV1DebitmemosDebitMemoIdItemsDmitemidRoute,
  getV1DebitmemosDebitMemoIdItemsDmitemidTaxationItemsRoute,
  getV1DebitmemosDebitMemoIdItemsRoute,
  getV1DebitmemosDebitMemoIdRoute,
  getV1DebitmemosRoute,
  postV1DebitmemosDebitMemoIdCollectRoute,
  postV1DebitmemosDebitMemoIdEmailsRoute,
  postV1DebitmemosDebitMemoIdFilesRoute,
  postV1DebitmemosDebitMemoIdPdfsRoute,
  postV1DebitmemosDebitMemoIdTaxationitemsRoute,
  postV1DebitmemosRoute,
  putV1DebitmemosDebitMemoIdCancelRoute,
  putV1DebitmemosDebitMemoIdPostRoute,
  putV1DebitmemosDebitMemoIdRoute,
  putV1DebitmemosDebitMemoIdUnpostRoute,
  putV1DebitmemosRoute,
} from '../routes'

const app = new OpenAPIHono()

export const debitMemosHandler = app
  .openapi(getV1DebitmemosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DebitmemosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1DebitmemosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DebitmemosDebitMemoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DebitmemosDebitMemoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1DebitmemosDebitMemoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DebitmemosDebitMemoIdApplicationPartsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1DebitmemosDebitMemoIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DebitmemosDebitMemoIdCollectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DebitmemosDebitMemoIdEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DebitmemosDebitMemoIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DebitmemosDebitMemoIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DebitmemosDebitMemoIdItemsDmitemidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DebitmemosDebitMemoIdItemsDmitemidTaxationItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DebitmemosDebitMemoIdPdfsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1DebitmemosDebitMemoIdPostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DebitmemosDebitMemoIdTaxationitemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1DebitmemosDebitMemoIdUnpostRoute, (c) => {
    throw new Error('Not implemented')
  })
