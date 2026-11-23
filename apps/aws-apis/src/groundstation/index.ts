import { OpenAPIHono } from '@hono/zod-openapi'
import {
  agentHandler,
  configHandler,
  contactHandler,
  contactsHandler,
  dataflowEndpointGroupHandler,
  ephemeridesHandler,
  ephemerisHandler,
  groundstationHandler,
  minuteUsageHandler,
  missionprofileHandler,
  satelliteHandler,
  tagsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', contactHandler)
  .route('/', configHandler)
  .route('/', dataflowEndpointGroupHandler)
  .route('/', ephemerisHandler)
  .route('/', missionprofileHandler)
  .route('/', agentHandler)
  .route('/', minuteUsageHandler)
  .route('/', satelliteHandler)
  .route('/', contactsHandler)
  .route('/', ephemeridesHandler)
  .route('/', groundstationHandler)
  .route('/', tagsHandler)

export default app
