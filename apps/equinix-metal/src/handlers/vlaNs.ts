import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVirtualNetworksIdRoute,
  getProjectsIdVirtualNetworksRoute,
  getVirtualNetworksIdRoute,
  postProjectsIdVirtualNetworksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const vlaNsHandler = app
  .openapi(getProjectsIdVirtualNetworksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsIdVirtualNetworksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVirtualNetworksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVirtualNetworksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
