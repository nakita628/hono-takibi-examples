import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiLogisticsPvtConfigurationDocksDockIdRoute,
  getApiLogisticsPvtConfigurationDocksDockIdRoute,
  getApiLogisticsPvtConfigurationDocksRoute,
  postApiLogisticsPvtConfigurationDocksDockIdActivationRoute,
  postApiLogisticsPvtConfigurationDocksDockIdDeactivationRoute,
  postApiLogisticsPvtConfigurationDocksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const docksHandler = app
  .openapi(getApiLogisticsPvtConfigurationDocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLogisticsPvtConfigurationDocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiLogisticsPvtConfigurationDocksDockIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLogisticsPvtConfigurationDocksDockIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLogisticsPvtConfigurationDocksDockIdActivationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLogisticsPvtConfigurationDocksDockIdDeactivationRoute, (c) => {
    throw new Error('Not implemented')
  })
