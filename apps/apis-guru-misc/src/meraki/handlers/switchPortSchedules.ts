import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNetworksNetworkIdSwitchPortSchedulesPortScheduleIdRoute,
  getNetworksNetworkIdSwitchPortSchedulesRoute,
  postNetworksNetworkIdSwitchPortSchedulesRoute,
  putNetworksNetworkIdSwitchPortSchedulesPortScheduleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const switchPortSchedulesHandler = app
  .openapi(getNetworksNetworkIdSwitchPortSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSwitchPortSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdSwitchPortSchedulesPortScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSwitchPortSchedulesPortScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
