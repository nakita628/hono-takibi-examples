import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectRegionsRegionNetworkAttachmentsNetworkAttachmentRoute,
  getProjectsProjectAggregatedNetworkAttachmentsRoute,
  getProjectsProjectRegionsRegionNetworkAttachmentsNetworkAttachmentRoute,
  getProjectsProjectRegionsRegionNetworkAttachmentsResourceGetIamPolicyRoute,
  getProjectsProjectRegionsRegionNetworkAttachmentsRoute,
  patchProjectsProjectRegionsRegionNetworkAttachmentsNetworkAttachmentRoute,
  postProjectsProjectRegionsRegionNetworkAttachmentsResourceSetIamPolicyRoute,
  postProjectsProjectRegionsRegionNetworkAttachmentsResourceTestIamPermissionsRoute,
  postProjectsProjectRegionsRegionNetworkAttachmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const networkAttachmentsHandler = app
  .openapi(getProjectsProjectAggregatedNetworkAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionNetworkAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionNetworkAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectRegionsRegionNetworkAttachmentsNetworkAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionNetworkAttachmentsNetworkAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectRegionsRegionNetworkAttachmentsNetworkAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionNetworkAttachmentsResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionNetworkAttachmentsResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postProjectsProjectRegionsRegionNetworkAttachmentsResourceTestIamPermissionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
