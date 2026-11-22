import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEthV1DebugBeaconDataColumnSidecarsBlockIdRoute,
  getEthV1DebugForkChoiceRoute,
  getEthV2DebugBeaconHeadsRoute,
  getEthV2DebugBeaconStatesStateIdRoute,
  getEthV2DebugForkChoiceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const debugHandler = app
  .openapi(getEthV1DebugBeaconDataColumnSidecarsBlockIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV2DebugBeaconStatesStateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV2DebugBeaconHeadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV1DebugForkChoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV2DebugForkChoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
