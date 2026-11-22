import { OpenAPIHono } from '@hono/zod-openapi'
import {
  authHandler,
  authorizeHandler,
  authorizeTokenHandler,
  devicePairingHandler,
  externalDevicesHandler,
  folderHandler,
  itemHandler,
  miscHandler,
  openapiJsonHandler,
  secureSendHandler,
  userHandler,
  webauthnHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', authorizeHandler)
  .route('/', authorizeTokenHandler)
  .route('/', authHandler)
  .route('/', itemHandler)
  .route('/', folderHandler)
  .route('/', userHandler)
  .route('/', miscHandler)
  .route('/', webauthnHandler)
  .route('/', secureSendHandler)
  .route('/', openapiJsonHandler)
  .route('/', externalDevicesHandler)
  .route('/', devicePairingHandler)

export default app
