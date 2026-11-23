import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSitesSiteIdDeploymentsDeploymentIdRoute,
  deleteSitesSiteIdLogsLogIdRoute,
  deleteSitesSiteIdRoute,
  deleteSitesSiteIdVariablesVariableIdRoute,
  getSitesFrameworksRoute,
  getSitesRoute,
  getSitesSiteIdDeploymentsDeploymentIdDownloadRoute,
  getSitesSiteIdDeploymentsDeploymentIdRoute,
  getSitesSiteIdDeploymentsRoute,
  getSitesSiteIdLogsLogIdRoute,
  getSitesSiteIdLogsRoute,
  getSitesSiteIdRoute,
  getSitesSiteIdVariablesRoute,
  getSitesSiteIdVariablesVariableIdRoute,
  getSitesSpecificationsRoute,
  patchSitesSiteIdDeploymentRoute,
  patchSitesSiteIdDeploymentsDeploymentIdStatusRoute,
  postSitesRoute,
  postSitesSiteIdDeploymentsDuplicateRoute,
  postSitesSiteIdDeploymentsRoute,
  postSitesSiteIdDeploymentsTemplateRoute,
  postSitesSiteIdDeploymentsVcsRoute,
  postSitesSiteIdVariablesRoute,
  putSitesSiteIdRoute,
  putSitesSiteIdVariablesVariableIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesHandler = app
  .openapi(getSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesFrameworksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSpecificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSitesSiteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSitesSiteIdDeploymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdDeploymentsDuplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdDeploymentsTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdDeploymentsVcsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdDeploymentsDeploymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdDeploymentsDeploymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdDeploymentsDeploymentIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSitesSiteIdDeploymentsDeploymentIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdLogsLogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdLogsLogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdVariablesVariableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSitesSiteIdVariablesVariableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdVariablesVariableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
