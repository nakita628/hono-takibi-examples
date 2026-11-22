import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2OnrampOrdersOrderIdRoute,
  postV2OnrampLimitsRoute,
  postV2OnrampLimitsUpgradeRoute,
  postV2OnrampOrdersRoute,
  postV2OnrampSessionsRoute,
  postV2OnrampVerificationsRoute,
  postV2OnrampVerificationsVerificationIdSubmitRoute,
} from '../routes'

const app = new OpenAPIHono()

export const onrampHandler = app
  .openapi(postV2OnrampVerificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2OnrampVerificationsVerificationIdSubmitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2OnrampOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2OnrampOrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2OnrampSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2OnrampLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2OnrampLimitsUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
