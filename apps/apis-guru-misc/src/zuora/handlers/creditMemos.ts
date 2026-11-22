import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1CreditmemosCreditMemoIdRoute,
  getV1CreditmemosCreditMemoIdItemsCmitemidRoute,
  getV1CreditmemosCreditMemoIdItemsCmitemidTaxationItemsRoute,
  getV1CreditmemosCreditMemoIdItemsRoute,
  getV1CreditmemosCreditMemoIdPartsPartidItempartsItempartidRoute,
  getV1CreditmemosCreditMemoIdPartsPartidItempartsRoute,
  getV1CreditmemosCreditMemoIdPartsPartidRoute,
  getV1CreditmemosCreditMemoIdPartsRoute,
  getV1CreditmemosCreditMemoIdRoute,
  getV1CreditmemosRoute,
  postV1CreditmemosCreditMemoIdEmailsRoute,
  postV1CreditmemosCreditMemoIdFilesRoute,
  postV1CreditmemosCreditMemoIdPdfsRoute,
  postV1CreditmemosCreditmemoIdRefundsRoute,
  postV1CreditmemosCreditMemoIdTaxationitemsRoute,
  postV1CreditmemosRoute,
  putV1CreditmemosCreditMemoIdApplyRoute,
  putV1CreditmemosCreditMemoIdCancelRoute,
  putV1CreditmemosCreditMemoIdPostRoute,
  putV1CreditmemosCreditMemoIdRoute,
  putV1CreditmemosCreditMemoIdUnapplyRoute,
  putV1CreditmemosCreditMemoIdUnpostRoute,
} from '../routes'

const app = new OpenAPIHono()

export const creditMemosHandler = app
  .openapi(getV1CreditmemosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CreditmemosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1CreditmemosCreditMemoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CreditmemosCreditMemoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CreditmemosCreditMemoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CreditmemosCreditMemoIdApplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CreditmemosCreditMemoIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CreditmemosCreditMemoIdEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CreditmemosCreditMemoIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CreditmemosCreditMemoIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CreditmemosCreditMemoIdItemsCmitemidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CreditmemosCreditMemoIdItemsCmitemidTaxationItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CreditmemosCreditMemoIdPartsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CreditmemosCreditMemoIdPartsPartidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CreditmemosCreditMemoIdPartsPartidItempartsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CreditmemosCreditMemoIdPartsPartidItempartsItempartidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CreditmemosCreditMemoIdPdfsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CreditmemosCreditMemoIdPostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CreditmemosCreditMemoIdTaxationitemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CreditmemosCreditMemoIdUnapplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CreditmemosCreditMemoIdUnpostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CreditmemosCreditmemoIdRefundsRoute, (c) => {
    throw new Error('Not implemented')
  })
