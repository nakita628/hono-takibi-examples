import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProjectsProjectGetXpnHostRoute,
  getProjectsProjectGetXpnResourcesRoute,
  getProjectsProjectRoute,
  postProjectsProjectDisableXpnHostRoute,
  postProjectsProjectDisableXpnResourceRoute,
  postProjectsProjectEnableXpnHostRoute,
  postProjectsProjectEnableXpnResourceRoute,
  postProjectsProjectListXpnHostsRoute,
  postProjectsProjectMoveDiskRoute,
  postProjectsProjectMoveInstanceRoute,
  postProjectsProjectSetCloudArmorTierRoute,
  postProjectsProjectSetCommonInstanceMetadataRoute,
  postProjectsProjectSetDefaultNetworkTierRoute,
  postProjectsProjectSetUsageExportBucketRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(getProjectsProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectDisableXpnHostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectDisableXpnResourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectEnableXpnHostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectEnableXpnResourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGetXpnHostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGetXpnResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectListXpnHostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectMoveDiskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectMoveInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectSetCloudArmorTierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectSetCommonInstanceMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectSetDefaultNetworkTierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectSetUsageExportBucketRoute, (c) => {
    throw new Error('Not implemented')
  })
