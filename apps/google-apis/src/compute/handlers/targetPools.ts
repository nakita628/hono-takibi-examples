import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectRegionsRegionTargetPoolsTargetPoolRoute,
  getProjectsProjectAggregatedTargetPoolsRoute,
  getProjectsProjectRegionsRegionTargetPoolsRoute,
  getProjectsProjectRegionsRegionTargetPoolsTargetPoolRoute,
  postProjectsProjectRegionsRegionTargetPoolsRoute,
  postProjectsProjectRegionsRegionTargetPoolsTargetPoolAddHealthCheckRoute,
  postProjectsProjectRegionsRegionTargetPoolsTargetPoolAddInstanceRoute,
  postProjectsProjectRegionsRegionTargetPoolsTargetPoolGetHealthRoute,
  postProjectsProjectRegionsRegionTargetPoolsTargetPoolRemoveHealthCheckRoute,
  postProjectsProjectRegionsRegionTargetPoolsTargetPoolRemoveInstanceRoute,
  postProjectsProjectRegionsRegionTargetPoolsTargetPoolSetBackupRoute,
  postProjectsProjectRegionsRegionTargetPoolsTargetPoolSetSecurityPolicyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const targetPoolsHandler = app
  .openapi(getProjectsProjectAggregatedTargetPoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionTargetPoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionTargetPoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectRegionsRegionTargetPoolsTargetPoolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionTargetPoolsTargetPoolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionTargetPoolsTargetPoolAddHealthCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionTargetPoolsTargetPoolAddInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionTargetPoolsTargetPoolGetHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionTargetPoolsTargetPoolRemoveHealthCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionTargetPoolsTargetPoolRemoveInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionTargetPoolsTargetPoolSetBackupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionTargetPoolsTargetPoolSetSecurityPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
