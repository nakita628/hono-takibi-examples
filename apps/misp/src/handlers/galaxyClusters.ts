import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGalaxyClustersIndexGalaxyIdRoute,
  getGalaxyClustersViewGalaxyClusterIdRoute,
  postGalaxyClustersAddGalaxyIdRoute,
  postGalaxyClustersDeleteGalaxyClusterIdRoute,
  postGalaxyClustersIndexGalaxyIdRoute,
  postGalaxyClustersPublishGalaxyClusterIdRoute,
  postGalaxyClustersRestoreGalaxyClusterIdRoute,
  postGalaxyClustersUnpublishGalaxyClusterIdRoute,
  putGalaxyClustersEditGalaxyClusterIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const galaxyClustersHandler = app
  .openapi(postGalaxyClustersAddGalaxyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGalaxyClustersEditGalaxyClusterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGalaxyClustersIndexGalaxyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGalaxyClustersIndexGalaxyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGalaxyClustersViewGalaxyClusterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGalaxyClustersPublishGalaxyClusterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGalaxyClustersUnpublishGalaxyClusterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGalaxyClustersDeleteGalaxyClusterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGalaxyClustersRestoreGalaxyClusterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
