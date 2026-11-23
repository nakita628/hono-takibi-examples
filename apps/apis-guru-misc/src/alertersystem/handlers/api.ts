import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAlertServiceIdRoute,
  deleteApiMediaObjectIdRoute,
  deleteApiMonitorIdRoute,
  deleteApiPartitionIdRoute,
  deleteApiTeamInvitationIdRoute,
  deleteApiTeamMemberIdRoute,
  deleteApiTransportAlertaIdRoute,
  deleteApiTransportAllMySmsIdRoute,
  deleteApiTransportAmazonSnsIdRoute,
  deleteApiTransportBandwidthIdRoute,
  deleteApiTransportChatworkIdRoute,
  deleteApiTransportClickatellIdRoute,
  deleteApiTransportClickSendIdRoute,
  deleteApiTransportContactEveryoneIdRoute,
  deleteApiTransportDiscordIdRoute,
  deleteApiTransportEmailIdRoute,
  deleteApiTransportEngagespotIdRoute,
  deleteApiTransportEsendexIdRoute,
  deleteApiTransportExpoIdRoute,
  deleteApiTransportFirebaseIdRoute,
  deleteApiTransportFortySixElksIdRoute,
  deleteApiTransportFreeMobileIdRoute,
  deleteApiTransportFreshdeskIdRoute,
  deleteApiTransportGatewayApiIdRoute,
  deleteApiTransportGitterIdRoute,
  deleteApiTransportGoogleChatIdRoute,
  deleteApiTransportGotifyIdRoute,
  deleteApiTransportHelpScoutIdRoute,
  deleteApiTransportInfobipIdRoute,
  deleteApiTransportIqsmsIdRoute,
  deleteApiTransportKazInfoTehIdRoute,
  deleteApiTransportLightSmsIdRoute,
  deleteApiTransportLineNotifyIdRoute,
  deleteApiTransportLinkedInIdRoute,
  deleteApiTransportMailjetIdRoute,
  deleteApiTransportMastodonIdRoute,
  deleteApiTransportMattermostIdRoute,
  deleteApiTransportMercureIdRoute,
  deleteApiTransportMessageBirdIdRoute,
  deleteApiTransportMessageMediaIdRoute,
  deleteApiTransportMicrosoftTeamsIdRoute,
  deleteApiTransportMobytIdRoute,
  deleteApiTransportOctopushIdRoute,
  deleteApiTransportOneSignalIdRoute,
  deleteApiTransportOpsgenieIdRoute,
  deleteApiTransportOrangeSmsIdRoute,
  deleteApiTransportOvhCloudIdRoute,
  deleteApiTransportPagerDutyIdRoute,
  deleteApiTransportPagerTreeIdRoute,
  deleteApiTransportPlivoIdRoute,
  deleteApiTransportPushbulletIdRoute,
  deleteApiTransportPushoverIdRoute,
  deleteApiTransportPushyIdRoute,
  deleteApiTransportRingCentralIdRoute,
  deleteApiTransportRocketChatIdRoute,
  deleteApiTransportSendberryIdRoute,
  deleteApiTransportSendinblueIdRoute,
  deleteApiTransportSimpleTextinIdRoute,
  deleteApiTransportSinchIdRoute,
  deleteApiTransportSlackIdRoute,
  deleteApiTransportSms77IdRoute,
  deleteApiTransportSmsapiIdRoute,
  deleteApiTransportSmsBiurasIdRoute,
  deleteApiTransportSmscIdRoute,
  deleteApiTransportSmsFactorIdRoute,
  deleteApiTransportSmsmodeIdRoute,
  deleteApiTransportSpotHitIdRoute,
  deleteApiTransportTelegramIdRoute,
  deleteApiTransportTelnyxIdRoute,
  deleteApiTransportTermiiIdRoute,
  deleteApiTransportTrelloIdRoute,
  deleteApiTransportTurboSmsIdRoute,
  deleteApiTransportTwilioIdRoute,
  deleteApiTransportTwitterIdRoute,
  deleteApiTransportVonageIdRoute,
  deleteApiTransportWebhookIdRoute,
  deleteApiTransportYunpianIdRoute,
  deleteApiTransportZendeskIdRoute,
  deleteApiTransportZulipIdRoute,
  getApiAlertLogIdRoute,
  getApiAlertLogRoute,
  getApiAlertLogStatusCodeIdRoute,
  getApiAlertLogStatusCodeRoute,
  getApiAlertServiceIdRoute,
  getApiAlertServiceRoute,
  getApiAlertServiceTransportCodeIdRoute,
  getApiAlertServiceTransportCodeRoute,
  getApiCreditsConsumptionIdRoute,
  getApiCreditsConsumptionRoute,
  getApiHttpMethodCodeIdRoute,
  getApiHttpMethodCodeRoute,
  getApiMediaObjectIdRoute,
  getApiMediaObjectRoute,
  getApiMonitorIdRoute,
  getApiMonitorRoute,
  getApiMonitorStatusCodeIdRoute,
  getApiMonitorStatusCodeRoute,
  getApiMonitorStatusLogIdRoute,
  getApiMonitorStatusLogRoute,
  getApiMonitorTypeCodeIdRoute,
  getApiMonitorTypeCodeRoute,
  getApiPartitionIdRoute,
  getApiPartitionRoute,
  getApiPingIdRoute,
  getApiPingMethodCodeIdRoute,
  getApiPingMethodCodeRoute,
  getApiPingRoute,
  getApiTeamInvitationIdRoute,
  getApiTeamInvitationRoute,
  getApiTeamMemberIdRoute,
  getApiTeamMemberRoleCodeIdRoute,
  getApiTeamMemberRoleCodeRoute,
  getApiTeamMemberRoute,
  getApiTimezoneCodeIdRoute,
  getApiTimezoneCodeRoute,
  getApiTransportAlertaIdRoute,
  getApiTransportAlertaRoute,
  getApiTransportAllMySmsIdRoute,
  getApiTransportAllMySmsRoute,
  getApiTransportAmazonSnsIdRoute,
  getApiTransportAmazonSnsRoute,
  getApiTransportBandwidthIdRoute,
  getApiTransportBandwidthRoute,
  getApiTransportChatworkIdRoute,
  getApiTransportChatworkRoute,
  getApiTransportClickatellIdRoute,
  getApiTransportClickatellRoute,
  getApiTransportClickSendIdRoute,
  getApiTransportClickSendRoute,
  getApiTransportContactEveryoneIdRoute,
  getApiTransportContactEveryoneRoute,
  getApiTransportDiscordIdRoute,
  getApiTransportDiscordRoute,
  getApiTransportEmailIdRoute,
  getApiTransportEmailRoute,
  getApiTransportEngagespotIdRoute,
  getApiTransportEngagespotRoute,
  getApiTransportEsendexIdRoute,
  getApiTransportEsendexRoute,
  getApiTransportExpoIdRoute,
  getApiTransportExpoRoute,
  getApiTransportFirebaseIdRoute,
  getApiTransportFirebaseRoute,
  getApiTransportFortySixElksIdRoute,
  getApiTransportFortySixElksRoute,
  getApiTransportFreeMobileIdRoute,
  getApiTransportFreeMobileRoute,
  getApiTransportFreshdeskIdRoute,
  getApiTransportFreshdeskRoute,
  getApiTransportGatewayApiIdRoute,
  getApiTransportGatewayApiRoute,
  getApiTransportGitterIdRoute,
  getApiTransportGitterRoute,
  getApiTransportGoogleChatIdRoute,
  getApiTransportGoogleChatRoute,
  getApiTransportGotifyIdRoute,
  getApiTransportGotifyRoute,
  getApiTransportHelpScoutIdRoute,
  getApiTransportHelpScoutRoute,
  getApiTransportInfobipIdRoute,
  getApiTransportInfobipRoute,
  getApiTransportIqsmsIdRoute,
  getApiTransportIqsmsRoute,
  getApiTransportKazInfoTehIdRoute,
  getApiTransportKazInfoTehRoute,
  getApiTransportLightSmsIdRoute,
  getApiTransportLightSmsRoute,
  getApiTransportLineNotifyIdRoute,
  getApiTransportLineNotifyRoute,
  getApiTransportLinkedInIdRoute,
  getApiTransportLinkedInRoute,
  getApiTransportMailjetIdRoute,
  getApiTransportMailjetRoute,
  getApiTransportMastodonIdRoute,
  getApiTransportMastodonRoute,
  getApiTransportMattermostIdRoute,
  getApiTransportMattermostRoute,
  getApiTransportMercureIdRoute,
  getApiTransportMercureRoute,
  getApiTransportMessageBirdIdRoute,
  getApiTransportMessageBirdRoute,
  getApiTransportMessageMediaIdRoute,
  getApiTransportMessageMediaRoute,
  getApiTransportMicrosoftTeamsIdRoute,
  getApiTransportMicrosoftTeamsRoute,
  getApiTransportMobytIdRoute,
  getApiTransportMobytRoute,
  getApiTransportOctopushIdRoute,
  getApiTransportOctopushRoute,
  getApiTransportOneSignalIdRoute,
  getApiTransportOneSignalRoute,
  getApiTransportOpsgenieIdRoute,
  getApiTransportOpsgenieRoute,
  getApiTransportOrangeSmsIdRoute,
  getApiTransportOrangeSmsRoute,
  getApiTransportOvhCloudIdRoute,
  getApiTransportOvhCloudRoute,
  getApiTransportPagerDutyIdRoute,
  getApiTransportPagerDutyRoute,
  getApiTransportPagerTreeIdRoute,
  getApiTransportPagerTreeRoute,
  getApiTransportPlivoIdRoute,
  getApiTransportPlivoRoute,
  getApiTransportPushbulletIdRoute,
  getApiTransportPushbulletRoute,
  getApiTransportPushoverIdRoute,
  getApiTransportPushoverRoute,
  getApiTransportPushyIdRoute,
  getApiTransportPushyRoute,
  getApiTransportRingCentralIdRoute,
  getApiTransportRingCentralRoute,
  getApiTransportRocketChatIdRoute,
  getApiTransportRocketChatRoute,
  getApiTransportSendberryIdRoute,
  getApiTransportSendberryRoute,
  getApiTransportSendinblueIdRoute,
  getApiTransportSendinblueRoute,
  getApiTransportSimpleTextinIdRoute,
  getApiTransportSimpleTextinRoute,
  getApiTransportSinchIdRoute,
  getApiTransportSinchRoute,
  getApiTransportSlackIdRoute,
  getApiTransportSlackRoute,
  getApiTransportSms77IdRoute,
  getApiTransportSms77Route,
  getApiTransportSmsapiIdRoute,
  getApiTransportSmsapiRoute,
  getApiTransportSmsBiurasIdRoute,
  getApiTransportSmsBiurasRoute,
  getApiTransportSmscIdRoute,
  getApiTransportSmscRoute,
  getApiTransportSmsFactorIdRoute,
  getApiTransportSmsFactorRoute,
  getApiTransportSmsmodeIdRoute,
  getApiTransportSmsmodeRoute,
  getApiTransportSpotHitIdRoute,
  getApiTransportSpotHitRoute,
  getApiTransportTelegramIdRoute,
  getApiTransportTelegramRoute,
  getApiTransportTelnyxIdRoute,
  getApiTransportTelnyxRoute,
  getApiTransportTermiiIdRoute,
  getApiTransportTermiiRoute,
  getApiTransportTrelloIdRoute,
  getApiTransportTrelloRoute,
  getApiTransportTurboSmsIdRoute,
  getApiTransportTurboSmsRoute,
  getApiTransportTwilioIdRoute,
  getApiTransportTwilioRoute,
  getApiTransportTwitterIdRoute,
  getApiTransportTwitterRoute,
  getApiTransportVonageIdRoute,
  getApiTransportVonageRoute,
  getApiTransportWebhookIdRoute,
  getApiTransportWebhookRoute,
  getApiTransportYunpianIdRoute,
  getApiTransportYunpianRoute,
  getApiTransportZendeskIdRoute,
  getApiTransportZendeskRoute,
  getApiTransportZulipIdRoute,
  getApiTransportZulipRoute,
  getApiUserAccountIdRoute,
  getApiUserAccountLevelCodeIdRoute,
  getApiUserAccountLevelCodeRoute,
  getApiUserAccountRoute,
  postApiAlertServiceRoute,
  postApiMediaObjectRoute,
  postApiMonitorRoute,
  postApiPartitionRoute,
  postApiPingRoute,
  postApiTeamInvitationRoute,
  postApiTransportAlertaRoute,
  postApiTransportAllMySmsRoute,
  postApiTransportAmazonSnsRoute,
  postApiTransportBandwidthRoute,
  postApiTransportChatworkRoute,
  postApiTransportClickatellRoute,
  postApiTransportClickSendRoute,
  postApiTransportContactEveryoneRoute,
  postApiTransportDiscordRoute,
  postApiTransportEmailRoute,
  postApiTransportEngagespotRoute,
  postApiTransportEsendexRoute,
  postApiTransportExpoRoute,
  postApiTransportFirebaseRoute,
  postApiTransportFortySixElksRoute,
  postApiTransportFreeMobileRoute,
  postApiTransportFreshdeskRoute,
  postApiTransportGatewayApiRoute,
  postApiTransportGitterRoute,
  postApiTransportGoogleChatRoute,
  postApiTransportGotifyRoute,
  postApiTransportHelpScoutRoute,
  postApiTransportInfobipRoute,
  postApiTransportIqsmsRoute,
  postApiTransportKazInfoTehRoute,
  postApiTransportLightSmsRoute,
  postApiTransportLineNotifyRoute,
  postApiTransportLinkedInRoute,
  postApiTransportMailjetRoute,
  postApiTransportMastodonRoute,
  postApiTransportMattermostRoute,
  postApiTransportMercureRoute,
  postApiTransportMessageBirdRoute,
  postApiTransportMessageMediaRoute,
  postApiTransportMicrosoftTeamsRoute,
  postApiTransportMobytRoute,
  postApiTransportOctopushRoute,
  postApiTransportOneSignalRoute,
  postApiTransportOpsgenieRoute,
  postApiTransportOrangeSmsRoute,
  postApiTransportOvhCloudRoute,
  postApiTransportPagerDutyRoute,
  postApiTransportPagerTreeRoute,
  postApiTransportPlivoRoute,
  postApiTransportPushbulletRoute,
  postApiTransportPushoverRoute,
  postApiTransportPushyRoute,
  postApiTransportRingCentralRoute,
  postApiTransportRocketChatRoute,
  postApiTransportSendberryRoute,
  postApiTransportSendinblueRoute,
  postApiTransportSimpleTextinRoute,
  postApiTransportSinchRoute,
  postApiTransportSlackRoute,
  postApiTransportSms77Route,
  postApiTransportSmsapiRoute,
  postApiTransportSmsBiurasRoute,
  postApiTransportSmscRoute,
  postApiTransportSmsFactorRoute,
  postApiTransportSmsmodeRoute,
  postApiTransportSpotHitRoute,
  postApiTransportTelegramRoute,
  postApiTransportTelnyxRoute,
  postApiTransportTermiiRoute,
  postApiTransportTrelloRoute,
  postApiTransportTurboSmsRoute,
  postApiTransportTwilioRoute,
  postApiTransportTwitterRoute,
  postApiTransportVonageRoute,
  postApiTransportWebhookRoute,
  postApiTransportYunpianRoute,
  postApiTransportZendeskRoute,
  postApiTransportZulipRoute,
  putApiAlertServiceIdRoute,
  putApiMonitorIdRoute,
  putApiPartitionIdRoute,
  putApiTeamMemberIdRoute,
  putApiTransportAlertaIdRoute,
  putApiTransportAllMySmsIdRoute,
  putApiTransportAmazonSnsIdRoute,
  putApiTransportBandwidthIdRoute,
  putApiTransportChatworkIdRoute,
  putApiTransportClickatellIdRoute,
  putApiTransportClickSendIdRoute,
  putApiTransportContactEveryoneIdRoute,
  putApiTransportDiscordIdRoute,
  putApiTransportEmailIdRoute,
  putApiTransportEngagespotIdRoute,
  putApiTransportEsendexIdRoute,
  putApiTransportExpoIdRoute,
  putApiTransportFirebaseIdRoute,
  putApiTransportFortySixElksIdRoute,
  putApiTransportFreeMobileIdRoute,
  putApiTransportFreshdeskIdRoute,
  putApiTransportGatewayApiIdRoute,
  putApiTransportGitterIdRoute,
  putApiTransportGoogleChatIdRoute,
  putApiTransportGotifyIdRoute,
  putApiTransportHelpScoutIdRoute,
  putApiTransportInfobipIdRoute,
  putApiTransportIqsmsIdRoute,
  putApiTransportKazInfoTehIdRoute,
  putApiTransportLightSmsIdRoute,
  putApiTransportLineNotifyIdRoute,
  putApiTransportLinkedInIdRoute,
  putApiTransportMailjetIdRoute,
  putApiTransportMastodonIdRoute,
  putApiTransportMattermostIdRoute,
  putApiTransportMercureIdRoute,
  putApiTransportMessageBirdIdRoute,
  putApiTransportMessageMediaIdRoute,
  putApiTransportMicrosoftTeamsIdRoute,
  putApiTransportMobytIdRoute,
  putApiTransportOctopushIdRoute,
  putApiTransportOneSignalIdRoute,
  putApiTransportOpsgenieIdRoute,
  putApiTransportOrangeSmsIdRoute,
  putApiTransportOvhCloudIdRoute,
  putApiTransportPagerDutyIdRoute,
  putApiTransportPagerTreeIdRoute,
  putApiTransportPlivoIdRoute,
  putApiTransportPushbulletIdRoute,
  putApiTransportPushoverIdRoute,
  putApiTransportPushyIdRoute,
  putApiTransportRingCentralIdRoute,
  putApiTransportRocketChatIdRoute,
  putApiTransportSendberryIdRoute,
  putApiTransportSendinblueIdRoute,
  putApiTransportSimpleTextinIdRoute,
  putApiTransportSinchIdRoute,
  putApiTransportSlackIdRoute,
  putApiTransportSms77IdRoute,
  putApiTransportSmsapiIdRoute,
  putApiTransportSmsBiurasIdRoute,
  putApiTransportSmscIdRoute,
  putApiTransportSmsFactorIdRoute,
  putApiTransportSmsmodeIdRoute,
  putApiTransportSpotHitIdRoute,
  putApiTransportTelegramIdRoute,
  putApiTransportTelnyxIdRoute,
  putApiTransportTermiiIdRoute,
  putApiTransportTrelloIdRoute,
  putApiTransportTurboSmsIdRoute,
  putApiTransportTwilioIdRoute,
  putApiTransportTwitterIdRoute,
  putApiTransportVonageIdRoute,
  putApiTransportWebhookIdRoute,
  putApiTransportYunpianIdRoute,
  putApiTransportZendeskIdRoute,
  putApiTransportZulipIdRoute,
  putApiUserAccountIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiAlertLogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAlertLogStatusCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAlertLogStatusCodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAlertLogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAlertServiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAlertServiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAlertServiceTransportCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAlertServiceTransportCodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAlertServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAlertServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAlertServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCreditsConsumptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCreditsConsumptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiHttpMethodCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiHttpMethodCodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMediaObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiMediaObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiMediaObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMediaObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMonitorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiMonitorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMonitorStatusCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMonitorStatusCodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMonitorStatusLogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMonitorStatusLogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMonitorTypeCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMonitorTypeCodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiMonitorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMonitorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiMonitorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPartitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPartitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiPartitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPingMethodCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPingMethodCodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTeamInvitationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTeamInvitationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTeamInvitationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTeamInvitationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTeamMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTeamMemberRoleCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTeamMemberRoleCodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTeamMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTeamMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTeamMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTimezoneCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTimezoneCodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportAlertaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportAlertaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportAlertaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportAlertaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportAlertaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportAllMySmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportAllMySmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportAllMySmsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportAllMySmsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportAllMySmsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportAmazonSnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportAmazonSnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportAmazonSnsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportAmazonSnsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportAmazonSnsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportBandwidthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportBandwidthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportBandwidthIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportBandwidthIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportBandwidthIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportChatworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportChatworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportChatworkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportChatworkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportChatworkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportClickSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportClickSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportClickSendIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportClickSendIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportClickSendIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportClickatellRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportClickatellRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportClickatellIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportClickatellIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportClickatellIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportContactEveryoneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportContactEveryoneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportContactEveryoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportContactEveryoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportContactEveryoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportDiscordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportDiscordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportDiscordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportDiscordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportDiscordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportEmailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportEmailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportEmailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportEngagespotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportEngagespotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportEngagespotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportEngagespotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportEngagespotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportEsendexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportEsendexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportEsendexIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportEsendexIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportEsendexIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportExpoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportExpoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportExpoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportExpoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportExpoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportFirebaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportFirebaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportFirebaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportFirebaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportFirebaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportFortySixElksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportFortySixElksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportFortySixElksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportFortySixElksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportFortySixElksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportFreeMobileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportFreeMobileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportFreeMobileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportFreeMobileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportFreeMobileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportFreshdeskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportFreshdeskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportFreshdeskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportFreshdeskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportFreshdeskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportGatewayApiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportGatewayApiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportGatewayApiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportGatewayApiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportGatewayApiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportGitterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportGitterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportGitterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportGitterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportGitterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportGoogleChatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportGoogleChatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportGoogleChatIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportGoogleChatIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportGoogleChatIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportGotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportGotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportGotifyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportGotifyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportGotifyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportHelpScoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportHelpScoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportHelpScoutIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportHelpScoutIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportHelpScoutIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportInfobipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportInfobipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportInfobipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportInfobipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportInfobipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportIqsmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportIqsmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportIqsmsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportIqsmsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportIqsmsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportKazInfoTehRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportKazInfoTehRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportKazInfoTehIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportKazInfoTehIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportKazInfoTehIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportLightSmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportLightSmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportLightSmsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportLightSmsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportLightSmsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportLineNotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportLineNotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportLineNotifyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportLineNotifyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportLineNotifyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportLinkedInRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportLinkedInRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportLinkedInIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportLinkedInIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportLinkedInIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportMailjetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportMailjetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportMailjetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportMailjetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportMailjetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportMastodonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportMastodonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportMastodonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportMastodonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportMastodonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportMattermostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportMattermostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportMattermostIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportMattermostIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportMattermostIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportMercureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportMercureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportMercureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportMercureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportMercureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportMessageBirdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportMessageBirdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportMessageBirdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportMessageBirdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportMessageBirdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportMessageMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportMessageMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportMessageMediaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportMessageMediaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportMessageMediaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportMicrosoftTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportMicrosoftTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportMicrosoftTeamsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportMicrosoftTeamsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportMicrosoftTeamsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportMobytRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportMobytRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportMobytIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportMobytIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportMobytIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportOctopushRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportOctopushRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportOctopushIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportOctopushIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportOctopushIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportOneSignalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportOneSignalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportOneSignalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportOneSignalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportOneSignalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportOpsgenieRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportOpsgenieRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportOpsgenieIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportOpsgenieIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportOpsgenieIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportOrangeSmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportOrangeSmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportOrangeSmsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportOrangeSmsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportOrangeSmsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportOvhCloudRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportOvhCloudRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportOvhCloudIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportOvhCloudIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportOvhCloudIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportPagerDutyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportPagerDutyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportPagerDutyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportPagerDutyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportPagerDutyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportPagerTreeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportPagerTreeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportPagerTreeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportPagerTreeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportPagerTreeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportPlivoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportPlivoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportPlivoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportPlivoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportPlivoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportPushbulletRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportPushbulletRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportPushbulletIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportPushbulletIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportPushbulletIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportPushoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportPushoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportPushoverIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportPushoverIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportPushoverIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportPushyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportPushyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportPushyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportPushyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportPushyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportRingCentralRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportRingCentralRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportRingCentralIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportRingCentralIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportRingCentralIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportRocketChatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportRocketChatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportRocketChatIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportRocketChatIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportRocketChatIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportSendberryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportSendberryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportSendberryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportSendberryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportSendberryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportSendinblueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportSendinblueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportSendinblueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportSendinblueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportSendinblueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportSimpleTextinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportSimpleTextinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportSimpleTextinIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportSimpleTextinIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportSimpleTextinIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportSinchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportSinchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportSinchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportSinchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportSinchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportSlackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportSlackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportSlackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportSlackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportSlackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportSmsBiurasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportSmsBiurasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportSmsBiurasIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportSmsBiurasIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportSmsBiurasIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportSmsFactorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportSmsFactorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportSmsFactorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportSmsFactorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportSmsFactorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportSms77Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportSms77Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportSms77IdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportSms77IdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportSms77IdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportSmsapiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportSmsapiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportSmsapiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportSmsapiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportSmsapiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportSmscRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportSmscRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportSmscIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportSmscIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportSmscIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportSmsmodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportSmsmodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportSmsmodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportSmsmodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportSmsmodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportSpotHitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportSpotHitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportSpotHitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportSpotHitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportSpotHitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportTelegramRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportTelegramRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportTelegramIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportTelegramIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportTelegramIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportTelnyxRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportTelnyxRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportTelnyxIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportTelnyxIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportTelnyxIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportTermiiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportTermiiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportTermiiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportTermiiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportTermiiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportTrelloRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportTrelloRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportTrelloIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportTrelloIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportTrelloIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportTurboSmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportTurboSmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportTurboSmsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportTurboSmsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportTurboSmsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportTwilioRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportTwilioRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportTwilioIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportTwilioIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportTwilioIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportTwitterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportTwitterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportTwitterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportTwitterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportTwitterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportVonageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportVonageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportVonageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportVonageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportVonageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportYunpianRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportYunpianRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportYunpianIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportYunpianIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportYunpianIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportZendeskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportZendeskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportZendeskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportZendeskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportZendeskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportZulipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportZulipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportZulipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportZulipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportZulipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserAccountLevelCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserAccountLevelCodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiUserAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
