import { OpenAPIHono } from '@hono/zod-openapi'
import {
  administeredHandler,
  applianceHandler,
  cameraHandler,
  campusGatewayHandler,
  cellularGatewayHandler,
  devicesHandler,
  insightHandler,
  licensingHandler,
  networksHandler,
  organizationsHandler,
  sensorHandler,
  smHandler,
  spacesHandler,
  switchHandler,
  wirelessControllerHandler,
  wirelessHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', administeredHandler)
  .route('/', licensingHandler)
  .route('/', devicesHandler)
  .route('/', applianceHandler)
  .route('/', cameraHandler)
  .route('/', cellularGatewayHandler)
  .route('/', sensorHandler)
  .route('/', switchHandler)
  .route('/', wirelessHandler)
  .route('/', networksHandler)
  .route('/', campusGatewayHandler)
  .route('/', insightHandler)
  .route('/', smHandler)
  .route('/', organizationsHandler)
  .route('/', spacesHandler)
  .route('/', wirelessControllerHandler)

export default app
