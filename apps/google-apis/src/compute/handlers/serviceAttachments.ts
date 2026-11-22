import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectRegionsRegionServiceAttachmentsServiceAttachmentRoute,
  getProjectsProjectAggregatedServiceAttachmentsRoute,
  getProjectsProjectRegionsRegionServiceAttachmentsResourceGetIamPolicyRoute,
  getProjectsProjectRegionsRegionServiceAttachmentsRoute,
  getProjectsProjectRegionsRegionServiceAttachmentsServiceAttachmentRoute,
  patchProjectsProjectRegionsRegionServiceAttachmentsServiceAttachmentRoute,
  postProjectsProjectRegionsRegionServiceAttachmentsResourceSetIamPolicyRoute,
  postProjectsProjectRegionsRegionServiceAttachmentsResourceTestIamPermissionsRoute,
  postProjectsProjectRegionsRegionServiceAttachmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const serviceAttachmentsHandler = app
  .openapi(getProjectsProjectAggregatedServiceAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionServiceAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionServiceAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionServiceAttachmentsResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionServiceAttachmentsResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postProjectsProjectRegionsRegionServiceAttachmentsResourceTestIamPermissionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteProjectsProjectRegionsRegionServiceAttachmentsServiceAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionServiceAttachmentsServiceAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectRegionsRegionServiceAttachmentsServiceAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
