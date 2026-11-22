import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4GeoNodesIdRoute,
  deleteApiV4GeoSitesIdRoute,
  getApiV4GeoNodesIdRoute,
  getApiV4GeoNodesIdStatusRoute,
  getApiV4GeoNodesRoute,
  getApiV4GeoNodesStatusRoute,
  getApiV4GeoProxyRoute,
  getApiV4GeoRepositoriesGlRepositoryPipelineRefsRoute,
  getApiV4GeoRetrieveReplicableNameReplicableIdRoute,
  getApiV4GeoSitesIdRoute,
  getApiV4GeoSitesIdStatusRoute,
  getApiV4GeoSitesRoute,
  getApiV4GeoSitesStatusRoute,
  postApiV4GeoFailuresRoute,
  postApiV4GeoNodeProxyIdGraphqlRoute,
  postApiV4GeoNodesIdRepairRoute,
  postApiV4GeoNodesRoute,
  postApiV4GeoProxyGitSshInfoRefsReceivePackRoute,
  postApiV4GeoProxyGitSshInfoRefsUploadPackRoute,
  postApiV4GeoProxyGitSshReceivePackRoute,
  postApiV4GeoProxyGitSshUploadPackRoute,
  postApiV4GeoSitesIdRepairRoute,
  postApiV4GeoSitesRoute,
  postApiV4GeoStatusRoute,
  putApiV4GeoNodesIdRoute,
  putApiV4GeoSitesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const geoHandler = app
  .openapi(postApiV4GeoSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GeoSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GeoSitesStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GeoSitesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GeoSitesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4GeoSitesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GeoSitesIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GeoSitesIdRepairRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GeoNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GeoNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GeoNodesStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GeoNodesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GeoNodesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4GeoNodesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GeoNodesIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GeoNodesIdRepairRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GeoProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GeoRetrieveReplicableNameReplicableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GeoRepositoriesGlRepositoryPipelineRefsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GeoStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GeoFailuresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GeoProxyGitSshInfoRefsUploadPackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GeoProxyGitSshUploadPackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GeoProxyGitSshInfoRefsReceivePackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GeoProxyGitSshReceivePackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GeoNodeProxyIdGraphqlRoute, (c) => {
    throw new Error('Not implemented')
  })
