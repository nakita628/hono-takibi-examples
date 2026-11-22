import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectRegionsRegionInterconnectAttachmentsInterconnectAttachmentRoute,
  getProjectsProjectAggregatedInterconnectAttachmentsRoute,
  getProjectsProjectRegionsRegionInterconnectAttachmentsInterconnectAttachmentRoute,
  getProjectsProjectRegionsRegionInterconnectAttachmentsRoute,
  patchProjectsProjectRegionsRegionInterconnectAttachmentsInterconnectAttachmentRoute,
  postProjectsProjectRegionsRegionInterconnectAttachmentsResourceSetLabelsRoute,
  postProjectsProjectRegionsRegionInterconnectAttachmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const interconnectAttachmentsHandler = app
  .openapi(getProjectsProjectAggregatedInterconnectAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionInterconnectAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionInterconnectAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteProjectsProjectRegionsRegionInterconnectAttachmentsInterconnectAttachmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProjectsProjectRegionsRegionInterconnectAttachmentsInterconnectAttachmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchProjectsProjectRegionsRegionInterconnectAttachmentsInterconnectAttachmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postProjectsProjectRegionsRegionInterconnectAttachmentsResourceSetLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
