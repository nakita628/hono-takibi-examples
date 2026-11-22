import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserprofilesProfileIdPlacementStrategiesIdRoute,
  getUserprofilesProfileIdPlacementStrategiesIdRoute,
  getUserprofilesProfileIdPlacementStrategiesRoute,
  patchUserprofilesProfileIdPlacementStrategiesRoute,
  postUserprofilesProfileIdPlacementStrategiesRoute,
  putUserprofilesProfileIdPlacementStrategiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const placementStrategiesHandler = app
  .openapi(getUserprofilesProfileIdPlacementStrategiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserprofilesProfileIdPlacementStrategiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdPlacementStrategiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserprofilesProfileIdPlacementStrategiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserprofilesProfileIdPlacementStrategiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdPlacementStrategiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
