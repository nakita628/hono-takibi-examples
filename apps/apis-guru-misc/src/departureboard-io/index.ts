import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getArrivalsAndDeparturesByCrsHandler,
  getArrivalsByCrsHandler,
  getDeparturesByCrsHandler,
  getFastestDeparturesByCrsHandler,
  getNextDeparturesByCrsHandler,
  getServiceDetailsByIdHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', getArrivalsAndDeparturesByCrsHandler)
  .route('/', getArrivalsByCrsHandler)
  .route('/', getDeparturesByCrsHandler)
  .route('/', getFastestDeparturesByCrsHandler)
  .route('/', getNextDeparturesByCrsHandler)
  .route('/', getServiceDetailsByIdHandler)

export default app
