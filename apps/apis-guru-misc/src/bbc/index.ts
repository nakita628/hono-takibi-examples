import { OpenAPIHono } from '@hono/zod-openapi'
import {
  __rootHandler,
  availabilitiesHandler,
  broadcastsHandler,
  groupsHandler,
  imagesHandler,
  itemsHandler,
  masterBrandsHandler,
  peopleHandler,
  pipsHandler,
  programmeDetailsHandler,
  programmesHandler,
  promotionsHandler,
  schedulesHandler,
  schemaHandler,
  servicesHandler,
  v1Handler,
  versionsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', __rootHandler)
  .route('/', availabilitiesHandler)
  .route('/', broadcastsHandler)
  .route('/', groupsHandler)
  .route('/', imagesHandler)
  .route('/', itemsHandler)
  .route('/', masterBrandsHandler)
  .route('/', peopleHandler)
  .route('/', pipsHandler)
  .route('/', programmeDetailsHandler)
  .route('/', programmesHandler)
  .route('/', promotionsHandler)
  .route('/', schedulesHandler)
  .route('/', schemaHandler)
  .route('/', servicesHandler)
  .route('/', v1Handler)
  .route('/', versionsHandler)

export default app
