import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1DataSetsDataSetIdRevisionsRevisionIdAssetsAssetIdRoute,
  deleteV1DataSetsDataSetIdRevisionsRevisionIdRoute,
  deleteV1DataSetsDataSetIdRoute,
  deleteV1EventActionsEventActionIdRoute,
  deleteV1JobsJobIdRoute,
  getV1DataSetsDataSetIdRevisionsRevisionIdAssetsAssetIdRoute,
  getV1DataSetsDataSetIdRevisionsRevisionIdAssetsRoute,
  getV1DataSetsDataSetIdRevisionsRevisionIdRoute,
  getV1DataSetsDataSetIdRevisionsRoute,
  getV1DataSetsDataSetIdRoute,
  getV1DataSetsRoute,
  getV1EventActionsEventActionIdRoute,
  getV1EventActionsRoute,
  getV1JobsJobIdRoute,
  getV1JobsRoute,
  patchV1DataSetsDataSetIdRevisionsRevisionIdAssetsAssetIdRoute,
  patchV1DataSetsDataSetIdRevisionsRevisionIdRoute,
  patchV1DataSetsDataSetIdRoute,
  patchV1EventActionsEventActionIdRoute,
  patchV1JobsJobIdRoute,
  postV1DataSetsDataSetIdRevisionsRevisionIdRevokeRoute,
  postV1DataSetsDataSetIdRevisionsRoute,
  postV1DataSetsRoute,
  postV1EventActionsRoute,
  postV1JobsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(deleteV1JobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1JobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1JobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DataSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DataSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EventActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EventActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1JobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DataSetsDataSetIdRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DataSetsDataSetIdRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DataSetsDataSetIdRevisionsRevisionIdAssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DataSetsDataSetIdRevisionsRevisionIdAssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1DataSetsDataSetIdRevisionsRevisionIdAssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DataSetsDataSetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DataSetsDataSetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1DataSetsDataSetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1EventActionsEventActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EventActionsEventActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1EventActionsEventActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DataSetsDataSetIdRevisionsRevisionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DataSetsDataSetIdRevisionsRevisionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1DataSetsDataSetIdRevisionsRevisionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DataSetsDataSetIdRevisionsRevisionIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DataSetsDataSetIdRevisionsRevisionIdRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
