import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdRoute,
  getNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdRoute,
  getNetworksNetworkIdCameraQualityRetentionProfilesRoute,
  postNetworksNetworkIdCameraQualityRetentionProfilesRoute,
  putNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cameraQualityRetentionProfilesHandler = app
  .openapi(getNetworksNetworkIdCameraQualityRetentionProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdCameraQualityRetentionProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
