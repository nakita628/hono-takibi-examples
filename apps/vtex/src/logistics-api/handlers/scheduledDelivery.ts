import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiLogisticsCapacityResourcesCarrierCapacityTypeShippingPolicyIdTimeFramesRoute,
  getApiLogisticsCapacityResourcesCarrierCapacityTypeShippingPolicyIdTimeFramesWindowDayFWindowStartTimeTWindowEndTimeRoute,
  getApiLogisticsPvtConfigurationCarriersCarrierIdGetdayofweekblockedRoute,
  postApiLogisticsPvtConfigurationCarriersCarrierIdAdddayofweekblockedRoute,
  postApiLogisticsPvtConfigurationCarriersCarrierIdRemovedayofweekblockedRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scheduledDeliveryHandler = app
  .openapi(
    getApiLogisticsCapacityResourcesCarrierCapacityTypeShippingPolicyIdTimeFramesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiLogisticsCapacityResourcesCarrierCapacityTypeShippingPolicyIdTimeFramesWindowDayFWindowStartTimeTWindowEndTimeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postApiLogisticsPvtConfigurationCarriersCarrierIdAdddayofweekblockedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLogisticsPvtConfigurationCarriersCarrierIdGetdayofweekblockedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLogisticsPvtConfigurationCarriersCarrierIdRemovedayofweekblockedRoute, (c) => {
    throw new Error('Not implemented')
  })
