import { OpenAPIHono } from '@hono/zod-openapi'
import {
  eventticketclassHandler,
  eventticketobjectHandler,
  flightclassHandler,
  flightobjectHandler,
  genericclassHandler,
  genericobjectHandler,
  giftcardclassHandler,
  giftcardobjectHandler,
  issuerHandler,
  jwtHandler,
  loyaltyclassHandler,
  loyaltyobjectHandler,
  mediaHandler,
  offerclassHandler,
  offerobjectHandler,
  permissionsHandler,
  smarttapHandler,
  transitclassHandler,
  transitobjectHandler,
  walletobjectsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', eventticketclassHandler)
  .route('/', eventticketobjectHandler)
  .route('/', flightclassHandler)
  .route('/', flightobjectHandler)
  .route('/', genericclassHandler)
  .route('/', genericobjectHandler)
  .route('/', giftcardclassHandler)
  .route('/', giftcardobjectHandler)
  .route('/', issuerHandler)
  .route('/', jwtHandler)
  .route('/', loyaltyclassHandler)
  .route('/', loyaltyobjectHandler)
  .route('/', offerclassHandler)
  .route('/', offerobjectHandler)
  .route('/', permissionsHandler)
  .route('/', walletobjectsHandler)
  .route('/', mediaHandler)
  .route('/', smarttapHandler)
  .route('/', transitclassHandler)
  .route('/', transitobjectHandler)

export default app
