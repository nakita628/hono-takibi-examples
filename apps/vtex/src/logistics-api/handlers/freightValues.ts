import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiLogisticsPvtConfigurationFreightsCarrierIdCepValuesRoute,
  postApiLogisticsPvtConfigurationFreightsCarrierIdValuesUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const freightValuesHandler = app
  .openapi(postApiLogisticsPvtConfigurationFreightsCarrierIdValuesUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLogisticsPvtConfigurationFreightsCarrierIdCepValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
