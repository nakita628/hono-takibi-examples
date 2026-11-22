import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNetworksNetworkIdFloorPlansFloorPlanIdRoute,
  getNetworksNetworkIdFloorPlansFloorPlanIdRoute,
  getNetworksNetworkIdFloorPlansRoute,
  postNetworksNetworkIdFloorPlansRoute,
  putNetworksNetworkIdFloorPlansFloorPlanIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const floorPlansHandler = app
  .openapi(getNetworksNetworkIdFloorPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdFloorPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdFloorPlansFloorPlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdFloorPlansFloorPlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdFloorPlansFloorPlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
