import { OpenAPIHono } from '@hono/zod-openapi'
import {
  avatarHandler,
  banHandler,
  botHandler,
  breakoutRoomHandler,
  calendarIntegrationHandler,
  callHandler,
  chatHandler,
  conversationTagHandler,
  federationHandler,
  filesIntegrationHandler,
  guestHandler,
  hostedSignalingServerHandler,
  internalSignalingHandler,
  liveTranscriptionHandler,
  matrixAccountHandler,
  matrixAdminHandler,
  matrixRoomHandler,
  matterbridgeHandler,
  pollHandler,
  presetHandler,
  reactionHandler,
  recordingHandler,
  roomHandler,
  settingsHandler,
  signalingHandler,
  threadHandler,
  userAvatarHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', avatarHandler)
  .route('/', banHandler)
  .route('/', botHandler)
  .route('/', breakoutRoomHandler)
  .route('/', calendarIntegrationHandler)
  .route('/', callHandler)
  .route('/', chatHandler)
  .route('/', conversationTagHandler)
  .route('/', filesIntegrationHandler)
  .route('/', guestHandler)
  .route('/', liveTranscriptionHandler)
  .route('/', matrixAccountHandler)
  .route('/', matrixRoomHandler)
  .route('/', matterbridgeHandler)
  .route('/', pollHandler)
  .route('/', presetHandler)
  .route('/', reactionHandler)
  .route('/', recordingHandler)
  .route('/', roomHandler)
  .route('/', settingsHandler)
  .route('/', internalSignalingHandler)
  .route('/', userAvatarHandler)
  .route('/', threadHandler)
  .route('/', federationHandler)
  .route('/', hostedSignalingServerHandler)
  .route('/', matrixAdminHandler)
  .route('/', signalingHandler)

export default app
