import { OpenAPIHono } from '@hono/zod-openapi'
import {
  alertLogHandler,
  alertLogStatusCodeHandler,
  alertServiceHandler,
  alertServiceTransportCodeHandler,
  creditsConsumptionHandler,
  httpMethodCodeHandler,
  mediaObjectHandler,
  monitorHandler,
  monitorStatusCodeHandler,
  monitorStatusLogHandler,
  monitorTypeCodeHandler,
  partitionHandler,
  pingHandler,
  pingMethodCodeHandler,
  teamInvitationHandler,
  teamMemberHandler,
  teamMemberRoleCodeHandler,
  timezoneCodeHandler,
  transportAlertaHandler,
  transportAllMySmsHandler,
  transportAmazonSnsHandler,
  transportBandwidthHandler,
  transportChatworkHandler,
  transportClickatellHandler,
  transportClickSendHandler,
  transportContactEveryoneHandler,
  transportDiscordHandler,
  transportEmailHandler,
  transportEngagespotHandler,
  transportEsendexHandler,
  transportExpoHandler,
  transportFirebaseHandler,
  transportFortySixElksHandler,
  transportFreeMobileHandler,
  transportFreshdeskHandler,
  transportGatewayApiHandler,
  transportGitterHandler,
  transportGoogleChatHandler,
  transportGotifyHandler,
  transportHelpScoutHandler,
  transportInfobipHandler,
  transportIqsmsHandler,
  transportKazInfoTehHandler,
  transportLightSmsHandler,
  transportLineNotifyHandler,
  transportLinkedInHandler,
  transportMailjetHandler,
  transportMastodonHandler,
  transportMattermostHandler,
  transportMercureHandler,
  transportMessageBirdHandler,
  transportMessageMediaHandler,
  transportMicrosoftTeamsHandler,
  transportMobytHandler,
  transportOctopushHandler,
  transportOneSignalHandler,
  transportOpsgenieHandler,
  transportOrangeSmsHandler,
  transportOvhCloudHandler,
  transportPagerDutyHandler,
  transportPagerTreeHandler,
  transportPlivoHandler,
  transportPushbulletHandler,
  transportPushoverHandler,
  transportPushyHandler,
  transportRingCentralHandler,
  transportRocketChatHandler,
  transportSendberryHandler,
  transportSendinblueHandler,
  transportSimpleTextinHandler,
  transportSinchHandler,
  transportSlackHandler,
  transportSms77Handler,
  transportSmsapiHandler,
  transportSmsBiurasHandler,
  transportSmscHandler,
  transportSmsFactorHandler,
  transportSmsmodeHandler,
  transportSpotHitHandler,
  transportTelegramHandler,
  transportTelnyxHandler,
  transportTermiiHandler,
  transportTrelloHandler,
  transportTurboSmsHandler,
  transportTwilioHandler,
  transportTwitterHandler,
  transportVonageHandler,
  transportWebhookHandler,
  transportYunpianHandler,
  transportZendeskHandler,
  transportZulipHandler,
  userAccountHandler,
  userAccountLevelCodeHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', alertLogHandler)
  .route('/', alertLogStatusCodeHandler)
  .route('/', alertServiceHandler)
  .route('/', alertServiceTransportCodeHandler)
  .route('/', creditsConsumptionHandler)
  .route('/', httpMethodCodeHandler)
  .route('/', mediaObjectHandler)
  .route('/', monitorHandler)
  .route('/', monitorStatusCodeHandler)
  .route('/', monitorStatusLogHandler)
  .route('/', monitorTypeCodeHandler)
  .route('/', partitionHandler)
  .route('/', pingHandler)
  .route('/', pingMethodCodeHandler)
  .route('/', teamInvitationHandler)
  .route('/', teamMemberHandler)
  .route('/', teamMemberRoleCodeHandler)
  .route('/', timezoneCodeHandler)
  .route('/', transportAlertaHandler)
  .route('/', transportAllMySmsHandler)
  .route('/', transportAmazonSnsHandler)
  .route('/', transportBandwidthHandler)
  .route('/', transportChatworkHandler)
  .route('/', transportClickSendHandler)
  .route('/', transportClickatellHandler)
  .route('/', transportContactEveryoneHandler)
  .route('/', transportDiscordHandler)
  .route('/', transportEmailHandler)
  .route('/', transportEngagespotHandler)
  .route('/', transportEsendexHandler)
  .route('/', transportExpoHandler)
  .route('/', transportFirebaseHandler)
  .route('/', transportFortySixElksHandler)
  .route('/', transportFreeMobileHandler)
  .route('/', transportFreshdeskHandler)
  .route('/', transportGatewayApiHandler)
  .route('/', transportGitterHandler)
  .route('/', transportGoogleChatHandler)
  .route('/', transportGotifyHandler)
  .route('/', transportHelpScoutHandler)
  .route('/', transportInfobipHandler)
  .route('/', transportIqsmsHandler)
  .route('/', transportKazInfoTehHandler)
  .route('/', transportLightSmsHandler)
  .route('/', transportLineNotifyHandler)
  .route('/', transportLinkedInHandler)
  .route('/', transportMailjetHandler)
  .route('/', transportMastodonHandler)
  .route('/', transportMattermostHandler)
  .route('/', transportMercureHandler)
  .route('/', transportMessageBirdHandler)
  .route('/', transportMessageMediaHandler)
  .route('/', transportMicrosoftTeamsHandler)
  .route('/', transportMobytHandler)
  .route('/', transportOctopushHandler)
  .route('/', transportOneSignalHandler)
  .route('/', transportOpsgenieHandler)
  .route('/', transportOrangeSmsHandler)
  .route('/', transportOvhCloudHandler)
  .route('/', transportPagerDutyHandler)
  .route('/', transportPagerTreeHandler)
  .route('/', transportPlivoHandler)
  .route('/', transportPushbulletHandler)
  .route('/', transportPushoverHandler)
  .route('/', transportPushyHandler)
  .route('/', transportRingCentralHandler)
  .route('/', transportRocketChatHandler)
  .route('/', transportSendberryHandler)
  .route('/', transportSendinblueHandler)
  .route('/', transportSimpleTextinHandler)
  .route('/', transportSinchHandler)
  .route('/', transportSlackHandler)
  .route('/', transportSmsBiurasHandler)
  .route('/', transportSmsFactorHandler)
  .route('/', transportSms77Handler)
  .route('/', transportSmsapiHandler)
  .route('/', transportSmscHandler)
  .route('/', transportSmsmodeHandler)
  .route('/', transportSpotHitHandler)
  .route('/', transportTelegramHandler)
  .route('/', transportTelnyxHandler)
  .route('/', transportTermiiHandler)
  .route('/', transportTrelloHandler)
  .route('/', transportTurboSmsHandler)
  .route('/', transportTwilioHandler)
  .route('/', transportTwitterHandler)
  .route('/', transportVonageHandler)
  .route('/', transportWebhookHandler)
  .route('/', transportYunpianHandler)
  .route('/', transportZendeskHandler)
  .route('/', transportZulipHandler)
  .route('/', userAccountHandler)
  .route('/', userAccountLevelCodeHandler)

export default app
