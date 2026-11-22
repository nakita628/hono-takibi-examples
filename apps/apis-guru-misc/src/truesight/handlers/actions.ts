import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postHardwareActionsDeviceIdCollectNowRoute,
  postHardwareActionsDeviceIdRediscoverRoute,
  postHardwareActionsDeviceIdReinitializeRoute,
  postHardwareActionsDeviceIdRemoveRoute,
  postHardwareActionsDeviceIdResetErrorCountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionsHandler = app
  .openapi(postHardwareActionsDeviceIdCollectNowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHardwareActionsDeviceIdRediscoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHardwareActionsDeviceIdReinitializeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHardwareActionsDeviceIdRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHardwareActionsDeviceIdResetErrorCountRoute, (c) => {
    throw new Error('Not implemented')
  })
