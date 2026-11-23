import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionUpdateConfigurationSetReputationMetricsEnabledRoute,
  postActionUpdateConfigurationSetReputationMetricsEnabledRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionUpdateConfigurationSetReputationMetricsEnabledHandler = app
  .openapi(getActionUpdateConfigurationSetReputationMetricsEnabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUpdateConfigurationSetReputationMetricsEnabledRoute, (c) => {
    throw new Error('Not implemented')
  })
