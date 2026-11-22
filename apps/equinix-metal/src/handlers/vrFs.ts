import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBgpDynamicNeighborsIdRoute,
  deleteRoutesIdRoute,
  deleteVrfsIdRoute,
  getBgpDynamicNeighborsIdRoute,
  getMetalGatewaysIdBgpDynamicNeighborsRoute,
  getProjectsIdVrfsRoute,
  getRoutesIdRoute,
  getVrfsIdIpsRoute,
  getVrfsIdRoute,
  getVrfsIdRoutesRoute,
  getVrfsVrfIdIpsIdRoute,
  postMetalGatewaysIdBgpDynamicNeighborsRoute,
  postProjectsIdVrfsRoute,
  postVrfsIdRoutesRoute,
  putRoutesIdRoute,
  putVrfsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const vrFsHandler = app
  .openapi(deleteBgpDynamicNeighborsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBgpDynamicNeighborsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetalGatewaysIdBgpDynamicNeighborsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMetalGatewaysIdBgpDynamicNeighborsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsIdVrfsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsIdVrfsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRoutesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoutesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRoutesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVrfsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVrfsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVrfsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVrfsIdIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVrfsVrfIdIpsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVrfsIdRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVrfsIdRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
