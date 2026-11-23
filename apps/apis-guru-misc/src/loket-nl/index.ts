import { OpenAPIHono } from '@hono/zod-openapi'
import {
  achmeainsurancecontractsHandler,
  aowDateHandler,
  applicationsHandler,
  chamberofcommerceHandler,
  datanewbusinessHandler,
  locationservicesHandler,
  providersHandler,
  qwoaterHandler,
  rdwservicesHandler,
  userHandler,
  usersHandler,
  wageprojectionHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', achmeainsurancecontractsHandler)
  .route('/', aowDateHandler)
  .route('/', applicationsHandler)
  .route('/', chamberofcommerceHandler)
  .route('/', datanewbusinessHandler)
  .route('/', locationservicesHandler)
  .route('/', providersHandler)
  .route('/', qwoaterHandler)
  .route('/', rdwservicesHandler)
  .route('/', userHandler)
  .route('/', usersHandler)
  .route('/', wageprojectionHandler)

export default app
