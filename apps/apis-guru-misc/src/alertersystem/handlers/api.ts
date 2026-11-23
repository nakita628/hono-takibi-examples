import type { RouteHandler } from '@hono/zod-openapi'
import type {
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

export const getApiAlertLogRouteHandler: RouteHandler<typeof getApiAlertLogRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAlertLogStatusCodeRouteHandler: RouteHandler<
  typeof getApiAlertLogStatusCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAlertLogStatusCodeIdRouteHandler: RouteHandler<
  typeof getApiAlertLogStatusCodeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAlertLogIdRouteHandler: RouteHandler<typeof getApiAlertLogIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiAlertServiceRouteHandler: RouteHandler<typeof getApiAlertServiceRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiAlertServiceRouteHandler: RouteHandler<
  typeof postApiAlertServiceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAlertServiceTransportCodeRouteHandler: RouteHandler<
  typeof getApiAlertServiceTransportCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAlertServiceTransportCodeIdRouteHandler: RouteHandler<
  typeof getApiAlertServiceTransportCodeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiAlertServiceIdRouteHandler: RouteHandler<
  typeof deleteApiAlertServiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAlertServiceIdRouteHandler: RouteHandler<
  typeof getApiAlertServiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiAlertServiceIdRouteHandler: RouteHandler<
  typeof putApiAlertServiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCreditsConsumptionRouteHandler: RouteHandler<
  typeof getApiCreditsConsumptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCreditsConsumptionIdRouteHandler: RouteHandler<
  typeof getApiCreditsConsumptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiHttpMethodCodeRouteHandler: RouteHandler<
  typeof getApiHttpMethodCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiHttpMethodCodeIdRouteHandler: RouteHandler<
  typeof getApiHttpMethodCodeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiMediaObjectRouteHandler: RouteHandler<typeof getApiMediaObjectRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiMediaObjectRouteHandler: RouteHandler<typeof postApiMediaObjectRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiMediaObjectIdRouteHandler: RouteHandler<
  typeof deleteApiMediaObjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiMediaObjectIdRouteHandler: RouteHandler<
  typeof getApiMediaObjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiMonitorRouteHandler: RouteHandler<typeof getApiMonitorRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiMonitorRouteHandler: RouteHandler<typeof postApiMonitorRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiMonitorStatusCodeRouteHandler: RouteHandler<
  typeof getApiMonitorStatusCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiMonitorStatusCodeIdRouteHandler: RouteHandler<
  typeof getApiMonitorStatusCodeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiMonitorStatusLogRouteHandler: RouteHandler<
  typeof getApiMonitorStatusLogRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiMonitorStatusLogIdRouteHandler: RouteHandler<
  typeof getApiMonitorStatusLogIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiMonitorTypeCodeRouteHandler: RouteHandler<
  typeof getApiMonitorTypeCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiMonitorTypeCodeIdRouteHandler: RouteHandler<
  typeof getApiMonitorTypeCodeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiMonitorIdRouteHandler: RouteHandler<typeof deleteApiMonitorIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiMonitorIdRouteHandler: RouteHandler<typeof getApiMonitorIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiMonitorIdRouteHandler: RouteHandler<typeof putApiMonitorIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPartitionRouteHandler: RouteHandler<typeof getApiPartitionRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPartitionRouteHandler: RouteHandler<typeof postApiPartitionRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiPartitionIdRouteHandler: RouteHandler<
  typeof deleteApiPartitionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPartitionIdRouteHandler: RouteHandler<typeof getApiPartitionIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApiPartitionIdRouteHandler: RouteHandler<typeof putApiPartitionIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiPingRouteHandler: RouteHandler<typeof getApiPingRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPingRouteHandler: RouteHandler<typeof postApiPingRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPingMethodCodeRouteHandler: RouteHandler<
  typeof getApiPingMethodCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPingMethodCodeIdRouteHandler: RouteHandler<
  typeof getApiPingMethodCodeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPingIdRouteHandler: RouteHandler<typeof getApiPingIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTeamInvitationRouteHandler: RouteHandler<
  typeof getApiTeamInvitationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTeamInvitationRouteHandler: RouteHandler<
  typeof postApiTeamInvitationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTeamInvitationIdRouteHandler: RouteHandler<
  typeof deleteApiTeamInvitationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTeamInvitationIdRouteHandler: RouteHandler<
  typeof getApiTeamInvitationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTeamMemberRouteHandler: RouteHandler<typeof getApiTeamMemberRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiTeamMemberRoleCodeRouteHandler: RouteHandler<
  typeof getApiTeamMemberRoleCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTeamMemberRoleCodeIdRouteHandler: RouteHandler<
  typeof getApiTeamMemberRoleCodeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTeamMemberIdRouteHandler: RouteHandler<
  typeof deleteApiTeamMemberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTeamMemberIdRouteHandler: RouteHandler<typeof getApiTeamMemberIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApiTeamMemberIdRouteHandler: RouteHandler<typeof putApiTeamMemberIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiTimezoneCodeRouteHandler: RouteHandler<typeof getApiTimezoneCodeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiTimezoneCodeIdRouteHandler: RouteHandler<
  typeof getApiTimezoneCodeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportAlertaRouteHandler: RouteHandler<
  typeof getApiTransportAlertaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportAlertaRouteHandler: RouteHandler<
  typeof postApiTransportAlertaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportAlertaIdRouteHandler: RouteHandler<
  typeof deleteApiTransportAlertaIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportAlertaIdRouteHandler: RouteHandler<
  typeof getApiTransportAlertaIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportAlertaIdRouteHandler: RouteHandler<
  typeof putApiTransportAlertaIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportAllMySmsRouteHandler: RouteHandler<
  typeof getApiTransportAllMySmsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportAllMySmsRouteHandler: RouteHandler<
  typeof postApiTransportAllMySmsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportAllMySmsIdRouteHandler: RouteHandler<
  typeof deleteApiTransportAllMySmsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportAllMySmsIdRouteHandler: RouteHandler<
  typeof getApiTransportAllMySmsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportAllMySmsIdRouteHandler: RouteHandler<
  typeof putApiTransportAllMySmsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportAmazonSnsRouteHandler: RouteHandler<
  typeof getApiTransportAmazonSnsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportAmazonSnsRouteHandler: RouteHandler<
  typeof postApiTransportAmazonSnsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportAmazonSnsIdRouteHandler: RouteHandler<
  typeof deleteApiTransportAmazonSnsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportAmazonSnsIdRouteHandler: RouteHandler<
  typeof getApiTransportAmazonSnsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportAmazonSnsIdRouteHandler: RouteHandler<
  typeof putApiTransportAmazonSnsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportBandwidthRouteHandler: RouteHandler<
  typeof getApiTransportBandwidthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportBandwidthRouteHandler: RouteHandler<
  typeof postApiTransportBandwidthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportBandwidthIdRouteHandler: RouteHandler<
  typeof deleteApiTransportBandwidthIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportBandwidthIdRouteHandler: RouteHandler<
  typeof getApiTransportBandwidthIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportBandwidthIdRouteHandler: RouteHandler<
  typeof putApiTransportBandwidthIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportChatworkRouteHandler: RouteHandler<
  typeof getApiTransportChatworkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportChatworkRouteHandler: RouteHandler<
  typeof postApiTransportChatworkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportChatworkIdRouteHandler: RouteHandler<
  typeof deleteApiTransportChatworkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportChatworkIdRouteHandler: RouteHandler<
  typeof getApiTransportChatworkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportChatworkIdRouteHandler: RouteHandler<
  typeof putApiTransportChatworkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportClickSendRouteHandler: RouteHandler<
  typeof getApiTransportClickSendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportClickSendRouteHandler: RouteHandler<
  typeof postApiTransportClickSendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportClickSendIdRouteHandler: RouteHandler<
  typeof deleteApiTransportClickSendIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportClickSendIdRouteHandler: RouteHandler<
  typeof getApiTransportClickSendIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportClickSendIdRouteHandler: RouteHandler<
  typeof putApiTransportClickSendIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportClickatellRouteHandler: RouteHandler<
  typeof getApiTransportClickatellRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportClickatellRouteHandler: RouteHandler<
  typeof postApiTransportClickatellRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportClickatellIdRouteHandler: RouteHandler<
  typeof deleteApiTransportClickatellIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportClickatellIdRouteHandler: RouteHandler<
  typeof getApiTransportClickatellIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportClickatellIdRouteHandler: RouteHandler<
  typeof putApiTransportClickatellIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportContactEveryoneRouteHandler: RouteHandler<
  typeof getApiTransportContactEveryoneRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportContactEveryoneRouteHandler: RouteHandler<
  typeof postApiTransportContactEveryoneRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportContactEveryoneIdRouteHandler: RouteHandler<
  typeof deleteApiTransportContactEveryoneIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportContactEveryoneIdRouteHandler: RouteHandler<
  typeof getApiTransportContactEveryoneIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportContactEveryoneIdRouteHandler: RouteHandler<
  typeof putApiTransportContactEveryoneIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportDiscordRouteHandler: RouteHandler<
  typeof getApiTransportDiscordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportDiscordRouteHandler: RouteHandler<
  typeof postApiTransportDiscordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportDiscordIdRouteHandler: RouteHandler<
  typeof deleteApiTransportDiscordIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportDiscordIdRouteHandler: RouteHandler<
  typeof getApiTransportDiscordIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportDiscordIdRouteHandler: RouteHandler<
  typeof putApiTransportDiscordIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportEmailRouteHandler: RouteHandler<
  typeof getApiTransportEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportEmailRouteHandler: RouteHandler<
  typeof postApiTransportEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportEmailIdRouteHandler: RouteHandler<
  typeof deleteApiTransportEmailIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportEmailIdRouteHandler: RouteHandler<
  typeof getApiTransportEmailIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportEmailIdRouteHandler: RouteHandler<
  typeof putApiTransportEmailIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportEngagespotRouteHandler: RouteHandler<
  typeof getApiTransportEngagespotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportEngagespotRouteHandler: RouteHandler<
  typeof postApiTransportEngagespotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportEngagespotIdRouteHandler: RouteHandler<
  typeof deleteApiTransportEngagespotIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportEngagespotIdRouteHandler: RouteHandler<
  typeof getApiTransportEngagespotIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportEngagespotIdRouteHandler: RouteHandler<
  typeof putApiTransportEngagespotIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportEsendexRouteHandler: RouteHandler<
  typeof getApiTransportEsendexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportEsendexRouteHandler: RouteHandler<
  typeof postApiTransportEsendexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportEsendexIdRouteHandler: RouteHandler<
  typeof deleteApiTransportEsendexIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportEsendexIdRouteHandler: RouteHandler<
  typeof getApiTransportEsendexIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportEsendexIdRouteHandler: RouteHandler<
  typeof putApiTransportEsendexIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportExpoRouteHandler: RouteHandler<
  typeof getApiTransportExpoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportExpoRouteHandler: RouteHandler<
  typeof postApiTransportExpoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportExpoIdRouteHandler: RouteHandler<
  typeof deleteApiTransportExpoIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportExpoIdRouteHandler: RouteHandler<
  typeof getApiTransportExpoIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportExpoIdRouteHandler: RouteHandler<
  typeof putApiTransportExpoIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportFirebaseRouteHandler: RouteHandler<
  typeof getApiTransportFirebaseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportFirebaseRouteHandler: RouteHandler<
  typeof postApiTransportFirebaseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportFirebaseIdRouteHandler: RouteHandler<
  typeof deleteApiTransportFirebaseIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportFirebaseIdRouteHandler: RouteHandler<
  typeof getApiTransportFirebaseIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportFirebaseIdRouteHandler: RouteHandler<
  typeof putApiTransportFirebaseIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportFortySixElksRouteHandler: RouteHandler<
  typeof getApiTransportFortySixElksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportFortySixElksRouteHandler: RouteHandler<
  typeof postApiTransportFortySixElksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportFortySixElksIdRouteHandler: RouteHandler<
  typeof deleteApiTransportFortySixElksIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportFortySixElksIdRouteHandler: RouteHandler<
  typeof getApiTransportFortySixElksIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportFortySixElksIdRouteHandler: RouteHandler<
  typeof putApiTransportFortySixElksIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportFreeMobileRouteHandler: RouteHandler<
  typeof getApiTransportFreeMobileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportFreeMobileRouteHandler: RouteHandler<
  typeof postApiTransportFreeMobileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportFreeMobileIdRouteHandler: RouteHandler<
  typeof deleteApiTransportFreeMobileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportFreeMobileIdRouteHandler: RouteHandler<
  typeof getApiTransportFreeMobileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportFreeMobileIdRouteHandler: RouteHandler<
  typeof putApiTransportFreeMobileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportFreshdeskRouteHandler: RouteHandler<
  typeof getApiTransportFreshdeskRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportFreshdeskRouteHandler: RouteHandler<
  typeof postApiTransportFreshdeskRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportFreshdeskIdRouteHandler: RouteHandler<
  typeof deleteApiTransportFreshdeskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportFreshdeskIdRouteHandler: RouteHandler<
  typeof getApiTransportFreshdeskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportFreshdeskIdRouteHandler: RouteHandler<
  typeof putApiTransportFreshdeskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportGatewayApiRouteHandler: RouteHandler<
  typeof getApiTransportGatewayApiRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportGatewayApiRouteHandler: RouteHandler<
  typeof postApiTransportGatewayApiRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportGatewayApiIdRouteHandler: RouteHandler<
  typeof deleteApiTransportGatewayApiIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportGatewayApiIdRouteHandler: RouteHandler<
  typeof getApiTransportGatewayApiIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportGatewayApiIdRouteHandler: RouteHandler<
  typeof putApiTransportGatewayApiIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportGitterRouteHandler: RouteHandler<
  typeof getApiTransportGitterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportGitterRouteHandler: RouteHandler<
  typeof postApiTransportGitterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportGitterIdRouteHandler: RouteHandler<
  typeof deleteApiTransportGitterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportGitterIdRouteHandler: RouteHandler<
  typeof getApiTransportGitterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportGitterIdRouteHandler: RouteHandler<
  typeof putApiTransportGitterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportGoogleChatRouteHandler: RouteHandler<
  typeof getApiTransportGoogleChatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportGoogleChatRouteHandler: RouteHandler<
  typeof postApiTransportGoogleChatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportGoogleChatIdRouteHandler: RouteHandler<
  typeof deleteApiTransportGoogleChatIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportGoogleChatIdRouteHandler: RouteHandler<
  typeof getApiTransportGoogleChatIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportGoogleChatIdRouteHandler: RouteHandler<
  typeof putApiTransportGoogleChatIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportGotifyRouteHandler: RouteHandler<
  typeof getApiTransportGotifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportGotifyRouteHandler: RouteHandler<
  typeof postApiTransportGotifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportGotifyIdRouteHandler: RouteHandler<
  typeof deleteApiTransportGotifyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportGotifyIdRouteHandler: RouteHandler<
  typeof getApiTransportGotifyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportGotifyIdRouteHandler: RouteHandler<
  typeof putApiTransportGotifyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportHelpScoutRouteHandler: RouteHandler<
  typeof getApiTransportHelpScoutRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportHelpScoutRouteHandler: RouteHandler<
  typeof postApiTransportHelpScoutRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportHelpScoutIdRouteHandler: RouteHandler<
  typeof deleteApiTransportHelpScoutIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportHelpScoutIdRouteHandler: RouteHandler<
  typeof getApiTransportHelpScoutIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportHelpScoutIdRouteHandler: RouteHandler<
  typeof putApiTransportHelpScoutIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportInfobipRouteHandler: RouteHandler<
  typeof getApiTransportInfobipRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportInfobipRouteHandler: RouteHandler<
  typeof postApiTransportInfobipRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportInfobipIdRouteHandler: RouteHandler<
  typeof deleteApiTransportInfobipIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportInfobipIdRouteHandler: RouteHandler<
  typeof getApiTransportInfobipIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportInfobipIdRouteHandler: RouteHandler<
  typeof putApiTransportInfobipIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportIqsmsRouteHandler: RouteHandler<
  typeof getApiTransportIqsmsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportIqsmsRouteHandler: RouteHandler<
  typeof postApiTransportIqsmsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportIqsmsIdRouteHandler: RouteHandler<
  typeof deleteApiTransportIqsmsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportIqsmsIdRouteHandler: RouteHandler<
  typeof getApiTransportIqsmsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportIqsmsIdRouteHandler: RouteHandler<
  typeof putApiTransportIqsmsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportKazInfoTehRouteHandler: RouteHandler<
  typeof getApiTransportKazInfoTehRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportKazInfoTehRouteHandler: RouteHandler<
  typeof postApiTransportKazInfoTehRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportKazInfoTehIdRouteHandler: RouteHandler<
  typeof deleteApiTransportKazInfoTehIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportKazInfoTehIdRouteHandler: RouteHandler<
  typeof getApiTransportKazInfoTehIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportKazInfoTehIdRouteHandler: RouteHandler<
  typeof putApiTransportKazInfoTehIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportLightSmsRouteHandler: RouteHandler<
  typeof getApiTransportLightSmsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportLightSmsRouteHandler: RouteHandler<
  typeof postApiTransportLightSmsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportLightSmsIdRouteHandler: RouteHandler<
  typeof deleteApiTransportLightSmsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportLightSmsIdRouteHandler: RouteHandler<
  typeof getApiTransportLightSmsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportLightSmsIdRouteHandler: RouteHandler<
  typeof putApiTransportLightSmsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportLineNotifyRouteHandler: RouteHandler<
  typeof getApiTransportLineNotifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportLineNotifyRouteHandler: RouteHandler<
  typeof postApiTransportLineNotifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportLineNotifyIdRouteHandler: RouteHandler<
  typeof deleteApiTransportLineNotifyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportLineNotifyIdRouteHandler: RouteHandler<
  typeof getApiTransportLineNotifyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportLineNotifyIdRouteHandler: RouteHandler<
  typeof putApiTransportLineNotifyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportLinkedInRouteHandler: RouteHandler<
  typeof getApiTransportLinkedInRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportLinkedInRouteHandler: RouteHandler<
  typeof postApiTransportLinkedInRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportLinkedInIdRouteHandler: RouteHandler<
  typeof deleteApiTransportLinkedInIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportLinkedInIdRouteHandler: RouteHandler<
  typeof getApiTransportLinkedInIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportLinkedInIdRouteHandler: RouteHandler<
  typeof putApiTransportLinkedInIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportMailjetRouteHandler: RouteHandler<
  typeof getApiTransportMailjetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportMailjetRouteHandler: RouteHandler<
  typeof postApiTransportMailjetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportMailjetIdRouteHandler: RouteHandler<
  typeof deleteApiTransportMailjetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportMailjetIdRouteHandler: RouteHandler<
  typeof getApiTransportMailjetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportMailjetIdRouteHandler: RouteHandler<
  typeof putApiTransportMailjetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportMastodonRouteHandler: RouteHandler<
  typeof getApiTransportMastodonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportMastodonRouteHandler: RouteHandler<
  typeof postApiTransportMastodonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportMastodonIdRouteHandler: RouteHandler<
  typeof deleteApiTransportMastodonIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportMastodonIdRouteHandler: RouteHandler<
  typeof getApiTransportMastodonIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportMastodonIdRouteHandler: RouteHandler<
  typeof putApiTransportMastodonIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportMattermostRouteHandler: RouteHandler<
  typeof getApiTransportMattermostRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportMattermostRouteHandler: RouteHandler<
  typeof postApiTransportMattermostRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportMattermostIdRouteHandler: RouteHandler<
  typeof deleteApiTransportMattermostIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportMattermostIdRouteHandler: RouteHandler<
  typeof getApiTransportMattermostIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportMattermostIdRouteHandler: RouteHandler<
  typeof putApiTransportMattermostIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportMercureRouteHandler: RouteHandler<
  typeof getApiTransportMercureRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportMercureRouteHandler: RouteHandler<
  typeof postApiTransportMercureRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportMercureIdRouteHandler: RouteHandler<
  typeof deleteApiTransportMercureIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportMercureIdRouteHandler: RouteHandler<
  typeof getApiTransportMercureIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportMercureIdRouteHandler: RouteHandler<
  typeof putApiTransportMercureIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportMessageBirdRouteHandler: RouteHandler<
  typeof getApiTransportMessageBirdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportMessageBirdRouteHandler: RouteHandler<
  typeof postApiTransportMessageBirdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportMessageBirdIdRouteHandler: RouteHandler<
  typeof deleteApiTransportMessageBirdIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportMessageBirdIdRouteHandler: RouteHandler<
  typeof getApiTransportMessageBirdIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportMessageBirdIdRouteHandler: RouteHandler<
  typeof putApiTransportMessageBirdIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportMessageMediaRouteHandler: RouteHandler<
  typeof getApiTransportMessageMediaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportMessageMediaRouteHandler: RouteHandler<
  typeof postApiTransportMessageMediaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportMessageMediaIdRouteHandler: RouteHandler<
  typeof deleteApiTransportMessageMediaIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportMessageMediaIdRouteHandler: RouteHandler<
  typeof getApiTransportMessageMediaIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportMessageMediaIdRouteHandler: RouteHandler<
  typeof putApiTransportMessageMediaIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportMicrosoftTeamsRouteHandler: RouteHandler<
  typeof getApiTransportMicrosoftTeamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportMicrosoftTeamsRouteHandler: RouteHandler<
  typeof postApiTransportMicrosoftTeamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportMicrosoftTeamsIdRouteHandler: RouteHandler<
  typeof deleteApiTransportMicrosoftTeamsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportMicrosoftTeamsIdRouteHandler: RouteHandler<
  typeof getApiTransportMicrosoftTeamsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportMicrosoftTeamsIdRouteHandler: RouteHandler<
  typeof putApiTransportMicrosoftTeamsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportMobytRouteHandler: RouteHandler<
  typeof getApiTransportMobytRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportMobytRouteHandler: RouteHandler<
  typeof postApiTransportMobytRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportMobytIdRouteHandler: RouteHandler<
  typeof deleteApiTransportMobytIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportMobytIdRouteHandler: RouteHandler<
  typeof getApiTransportMobytIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportMobytIdRouteHandler: RouteHandler<
  typeof putApiTransportMobytIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportOctopushRouteHandler: RouteHandler<
  typeof getApiTransportOctopushRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportOctopushRouteHandler: RouteHandler<
  typeof postApiTransportOctopushRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportOctopushIdRouteHandler: RouteHandler<
  typeof deleteApiTransportOctopushIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportOctopushIdRouteHandler: RouteHandler<
  typeof getApiTransportOctopushIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportOctopushIdRouteHandler: RouteHandler<
  typeof putApiTransportOctopushIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportOneSignalRouteHandler: RouteHandler<
  typeof getApiTransportOneSignalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportOneSignalRouteHandler: RouteHandler<
  typeof postApiTransportOneSignalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportOneSignalIdRouteHandler: RouteHandler<
  typeof deleteApiTransportOneSignalIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportOneSignalIdRouteHandler: RouteHandler<
  typeof getApiTransportOneSignalIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportOneSignalIdRouteHandler: RouteHandler<
  typeof putApiTransportOneSignalIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportOpsgenieRouteHandler: RouteHandler<
  typeof getApiTransportOpsgenieRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportOpsgenieRouteHandler: RouteHandler<
  typeof postApiTransportOpsgenieRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportOpsgenieIdRouteHandler: RouteHandler<
  typeof deleteApiTransportOpsgenieIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportOpsgenieIdRouteHandler: RouteHandler<
  typeof getApiTransportOpsgenieIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportOpsgenieIdRouteHandler: RouteHandler<
  typeof putApiTransportOpsgenieIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportOrangeSmsRouteHandler: RouteHandler<
  typeof getApiTransportOrangeSmsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportOrangeSmsRouteHandler: RouteHandler<
  typeof postApiTransportOrangeSmsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportOrangeSmsIdRouteHandler: RouteHandler<
  typeof deleteApiTransportOrangeSmsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportOrangeSmsIdRouteHandler: RouteHandler<
  typeof getApiTransportOrangeSmsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportOrangeSmsIdRouteHandler: RouteHandler<
  typeof putApiTransportOrangeSmsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportOvhCloudRouteHandler: RouteHandler<
  typeof getApiTransportOvhCloudRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportOvhCloudRouteHandler: RouteHandler<
  typeof postApiTransportOvhCloudRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportOvhCloudIdRouteHandler: RouteHandler<
  typeof deleteApiTransportOvhCloudIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportOvhCloudIdRouteHandler: RouteHandler<
  typeof getApiTransportOvhCloudIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportOvhCloudIdRouteHandler: RouteHandler<
  typeof putApiTransportOvhCloudIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportPagerDutyRouteHandler: RouteHandler<
  typeof getApiTransportPagerDutyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportPagerDutyRouteHandler: RouteHandler<
  typeof postApiTransportPagerDutyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportPagerDutyIdRouteHandler: RouteHandler<
  typeof deleteApiTransportPagerDutyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportPagerDutyIdRouteHandler: RouteHandler<
  typeof getApiTransportPagerDutyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportPagerDutyIdRouteHandler: RouteHandler<
  typeof putApiTransportPagerDutyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportPagerTreeRouteHandler: RouteHandler<
  typeof getApiTransportPagerTreeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportPagerTreeRouteHandler: RouteHandler<
  typeof postApiTransportPagerTreeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportPagerTreeIdRouteHandler: RouteHandler<
  typeof deleteApiTransportPagerTreeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportPagerTreeIdRouteHandler: RouteHandler<
  typeof getApiTransportPagerTreeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportPagerTreeIdRouteHandler: RouteHandler<
  typeof putApiTransportPagerTreeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportPlivoRouteHandler: RouteHandler<
  typeof getApiTransportPlivoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportPlivoRouteHandler: RouteHandler<
  typeof postApiTransportPlivoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportPlivoIdRouteHandler: RouteHandler<
  typeof deleteApiTransportPlivoIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportPlivoIdRouteHandler: RouteHandler<
  typeof getApiTransportPlivoIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportPlivoIdRouteHandler: RouteHandler<
  typeof putApiTransportPlivoIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportPushbulletRouteHandler: RouteHandler<
  typeof getApiTransportPushbulletRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportPushbulletRouteHandler: RouteHandler<
  typeof postApiTransportPushbulletRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportPushbulletIdRouteHandler: RouteHandler<
  typeof deleteApiTransportPushbulletIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportPushbulletIdRouteHandler: RouteHandler<
  typeof getApiTransportPushbulletIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportPushbulletIdRouteHandler: RouteHandler<
  typeof putApiTransportPushbulletIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportPushoverRouteHandler: RouteHandler<
  typeof getApiTransportPushoverRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportPushoverRouteHandler: RouteHandler<
  typeof postApiTransportPushoverRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportPushoverIdRouteHandler: RouteHandler<
  typeof deleteApiTransportPushoverIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportPushoverIdRouteHandler: RouteHandler<
  typeof getApiTransportPushoverIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportPushoverIdRouteHandler: RouteHandler<
  typeof putApiTransportPushoverIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportPushyRouteHandler: RouteHandler<
  typeof getApiTransportPushyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportPushyRouteHandler: RouteHandler<
  typeof postApiTransportPushyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportPushyIdRouteHandler: RouteHandler<
  typeof deleteApiTransportPushyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportPushyIdRouteHandler: RouteHandler<
  typeof getApiTransportPushyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportPushyIdRouteHandler: RouteHandler<
  typeof putApiTransportPushyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportRingCentralRouteHandler: RouteHandler<
  typeof getApiTransportRingCentralRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportRingCentralRouteHandler: RouteHandler<
  typeof postApiTransportRingCentralRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportRingCentralIdRouteHandler: RouteHandler<
  typeof deleteApiTransportRingCentralIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportRingCentralIdRouteHandler: RouteHandler<
  typeof getApiTransportRingCentralIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportRingCentralIdRouteHandler: RouteHandler<
  typeof putApiTransportRingCentralIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportRocketChatRouteHandler: RouteHandler<
  typeof getApiTransportRocketChatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportRocketChatRouteHandler: RouteHandler<
  typeof postApiTransportRocketChatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportRocketChatIdRouteHandler: RouteHandler<
  typeof deleteApiTransportRocketChatIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportRocketChatIdRouteHandler: RouteHandler<
  typeof getApiTransportRocketChatIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportRocketChatIdRouteHandler: RouteHandler<
  typeof putApiTransportRocketChatIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportSendberryRouteHandler: RouteHandler<
  typeof getApiTransportSendberryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportSendberryRouteHandler: RouteHandler<
  typeof postApiTransportSendberryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportSendberryIdRouteHandler: RouteHandler<
  typeof deleteApiTransportSendberryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportSendberryIdRouteHandler: RouteHandler<
  typeof getApiTransportSendberryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportSendberryIdRouteHandler: RouteHandler<
  typeof putApiTransportSendberryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportSendinblueRouteHandler: RouteHandler<
  typeof getApiTransportSendinblueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportSendinblueRouteHandler: RouteHandler<
  typeof postApiTransportSendinblueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportSendinblueIdRouteHandler: RouteHandler<
  typeof deleteApiTransportSendinblueIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportSendinblueIdRouteHandler: RouteHandler<
  typeof getApiTransportSendinblueIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportSendinblueIdRouteHandler: RouteHandler<
  typeof putApiTransportSendinblueIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportSimpleTextinRouteHandler: RouteHandler<
  typeof getApiTransportSimpleTextinRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportSimpleTextinRouteHandler: RouteHandler<
  typeof postApiTransportSimpleTextinRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportSimpleTextinIdRouteHandler: RouteHandler<
  typeof deleteApiTransportSimpleTextinIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportSimpleTextinIdRouteHandler: RouteHandler<
  typeof getApiTransportSimpleTextinIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportSimpleTextinIdRouteHandler: RouteHandler<
  typeof putApiTransportSimpleTextinIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportSinchRouteHandler: RouteHandler<
  typeof getApiTransportSinchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportSinchRouteHandler: RouteHandler<
  typeof postApiTransportSinchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportSinchIdRouteHandler: RouteHandler<
  typeof deleteApiTransportSinchIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportSinchIdRouteHandler: RouteHandler<
  typeof getApiTransportSinchIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportSinchIdRouteHandler: RouteHandler<
  typeof putApiTransportSinchIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportSlackRouteHandler: RouteHandler<
  typeof getApiTransportSlackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportSlackRouteHandler: RouteHandler<
  typeof postApiTransportSlackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportSlackIdRouteHandler: RouteHandler<
  typeof deleteApiTransportSlackIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportSlackIdRouteHandler: RouteHandler<
  typeof getApiTransportSlackIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportSlackIdRouteHandler: RouteHandler<
  typeof putApiTransportSlackIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportSmsBiurasRouteHandler: RouteHandler<
  typeof getApiTransportSmsBiurasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportSmsBiurasRouteHandler: RouteHandler<
  typeof postApiTransportSmsBiurasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportSmsBiurasIdRouteHandler: RouteHandler<
  typeof deleteApiTransportSmsBiurasIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportSmsBiurasIdRouteHandler: RouteHandler<
  typeof getApiTransportSmsBiurasIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportSmsBiurasIdRouteHandler: RouteHandler<
  typeof putApiTransportSmsBiurasIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportSmsFactorRouteHandler: RouteHandler<
  typeof getApiTransportSmsFactorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportSmsFactorRouteHandler: RouteHandler<
  typeof postApiTransportSmsFactorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportSmsFactorIdRouteHandler: RouteHandler<
  typeof deleteApiTransportSmsFactorIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportSmsFactorIdRouteHandler: RouteHandler<
  typeof getApiTransportSmsFactorIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportSmsFactorIdRouteHandler: RouteHandler<
  typeof putApiTransportSmsFactorIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportSms77RouteHandler: RouteHandler<
  typeof getApiTransportSms77Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportSms77RouteHandler: RouteHandler<
  typeof postApiTransportSms77Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportSms77IdRouteHandler: RouteHandler<
  typeof deleteApiTransportSms77IdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportSms77IdRouteHandler: RouteHandler<
  typeof getApiTransportSms77IdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportSms77IdRouteHandler: RouteHandler<
  typeof putApiTransportSms77IdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportSmsapiRouteHandler: RouteHandler<
  typeof getApiTransportSmsapiRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportSmsapiRouteHandler: RouteHandler<
  typeof postApiTransportSmsapiRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportSmsapiIdRouteHandler: RouteHandler<
  typeof deleteApiTransportSmsapiIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportSmsapiIdRouteHandler: RouteHandler<
  typeof getApiTransportSmsapiIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportSmsapiIdRouteHandler: RouteHandler<
  typeof putApiTransportSmsapiIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportSmscRouteHandler: RouteHandler<
  typeof getApiTransportSmscRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportSmscRouteHandler: RouteHandler<
  typeof postApiTransportSmscRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportSmscIdRouteHandler: RouteHandler<
  typeof deleteApiTransportSmscIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportSmscIdRouteHandler: RouteHandler<
  typeof getApiTransportSmscIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportSmscIdRouteHandler: RouteHandler<
  typeof putApiTransportSmscIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportSmsmodeRouteHandler: RouteHandler<
  typeof getApiTransportSmsmodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportSmsmodeRouteHandler: RouteHandler<
  typeof postApiTransportSmsmodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportSmsmodeIdRouteHandler: RouteHandler<
  typeof deleteApiTransportSmsmodeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportSmsmodeIdRouteHandler: RouteHandler<
  typeof getApiTransportSmsmodeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportSmsmodeIdRouteHandler: RouteHandler<
  typeof putApiTransportSmsmodeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportSpotHitRouteHandler: RouteHandler<
  typeof getApiTransportSpotHitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportSpotHitRouteHandler: RouteHandler<
  typeof postApiTransportSpotHitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportSpotHitIdRouteHandler: RouteHandler<
  typeof deleteApiTransportSpotHitIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportSpotHitIdRouteHandler: RouteHandler<
  typeof getApiTransportSpotHitIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportSpotHitIdRouteHandler: RouteHandler<
  typeof putApiTransportSpotHitIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportTelegramRouteHandler: RouteHandler<
  typeof getApiTransportTelegramRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportTelegramRouteHandler: RouteHandler<
  typeof postApiTransportTelegramRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportTelegramIdRouteHandler: RouteHandler<
  typeof deleteApiTransportTelegramIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportTelegramIdRouteHandler: RouteHandler<
  typeof getApiTransportTelegramIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportTelegramIdRouteHandler: RouteHandler<
  typeof putApiTransportTelegramIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportTelnyxRouteHandler: RouteHandler<
  typeof getApiTransportTelnyxRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportTelnyxRouteHandler: RouteHandler<
  typeof postApiTransportTelnyxRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportTelnyxIdRouteHandler: RouteHandler<
  typeof deleteApiTransportTelnyxIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportTelnyxIdRouteHandler: RouteHandler<
  typeof getApiTransportTelnyxIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportTelnyxIdRouteHandler: RouteHandler<
  typeof putApiTransportTelnyxIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportTermiiRouteHandler: RouteHandler<
  typeof getApiTransportTermiiRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportTermiiRouteHandler: RouteHandler<
  typeof postApiTransportTermiiRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportTermiiIdRouteHandler: RouteHandler<
  typeof deleteApiTransportTermiiIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportTermiiIdRouteHandler: RouteHandler<
  typeof getApiTransportTermiiIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportTermiiIdRouteHandler: RouteHandler<
  typeof putApiTransportTermiiIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportTrelloRouteHandler: RouteHandler<
  typeof getApiTransportTrelloRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportTrelloRouteHandler: RouteHandler<
  typeof postApiTransportTrelloRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportTrelloIdRouteHandler: RouteHandler<
  typeof deleteApiTransportTrelloIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportTrelloIdRouteHandler: RouteHandler<
  typeof getApiTransportTrelloIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportTrelloIdRouteHandler: RouteHandler<
  typeof putApiTransportTrelloIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportTurboSmsRouteHandler: RouteHandler<
  typeof getApiTransportTurboSmsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportTurboSmsRouteHandler: RouteHandler<
  typeof postApiTransportTurboSmsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportTurboSmsIdRouteHandler: RouteHandler<
  typeof deleteApiTransportTurboSmsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportTurboSmsIdRouteHandler: RouteHandler<
  typeof getApiTransportTurboSmsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportTurboSmsIdRouteHandler: RouteHandler<
  typeof putApiTransportTurboSmsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportTwilioRouteHandler: RouteHandler<
  typeof getApiTransportTwilioRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportTwilioRouteHandler: RouteHandler<
  typeof postApiTransportTwilioRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportTwilioIdRouteHandler: RouteHandler<
  typeof deleteApiTransportTwilioIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportTwilioIdRouteHandler: RouteHandler<
  typeof getApiTransportTwilioIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportTwilioIdRouteHandler: RouteHandler<
  typeof putApiTransportTwilioIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportTwitterRouteHandler: RouteHandler<
  typeof getApiTransportTwitterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportTwitterRouteHandler: RouteHandler<
  typeof postApiTransportTwitterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportTwitterIdRouteHandler: RouteHandler<
  typeof deleteApiTransportTwitterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportTwitterIdRouteHandler: RouteHandler<
  typeof getApiTransportTwitterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportTwitterIdRouteHandler: RouteHandler<
  typeof putApiTransportTwitterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportVonageRouteHandler: RouteHandler<
  typeof getApiTransportVonageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportVonageRouteHandler: RouteHandler<
  typeof postApiTransportVonageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportVonageIdRouteHandler: RouteHandler<
  typeof deleteApiTransportVonageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportVonageIdRouteHandler: RouteHandler<
  typeof getApiTransportVonageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportVonageIdRouteHandler: RouteHandler<
  typeof putApiTransportVonageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportWebhookRouteHandler: RouteHandler<
  typeof getApiTransportWebhookRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportWebhookRouteHandler: RouteHandler<
  typeof postApiTransportWebhookRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportWebhookIdRouteHandler: RouteHandler<
  typeof deleteApiTransportWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportWebhookIdRouteHandler: RouteHandler<
  typeof getApiTransportWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportWebhookIdRouteHandler: RouteHandler<
  typeof putApiTransportWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportYunpianRouteHandler: RouteHandler<
  typeof getApiTransportYunpianRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportYunpianRouteHandler: RouteHandler<
  typeof postApiTransportYunpianRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportYunpianIdRouteHandler: RouteHandler<
  typeof deleteApiTransportYunpianIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportYunpianIdRouteHandler: RouteHandler<
  typeof getApiTransportYunpianIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportYunpianIdRouteHandler: RouteHandler<
  typeof putApiTransportYunpianIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportZendeskRouteHandler: RouteHandler<
  typeof getApiTransportZendeskRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportZendeskRouteHandler: RouteHandler<
  typeof postApiTransportZendeskRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportZendeskIdRouteHandler: RouteHandler<
  typeof deleteApiTransportZendeskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportZendeskIdRouteHandler: RouteHandler<
  typeof getApiTransportZendeskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportZendeskIdRouteHandler: RouteHandler<
  typeof putApiTransportZendeskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportZulipRouteHandler: RouteHandler<
  typeof getApiTransportZulipRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTransportZulipRouteHandler: RouteHandler<
  typeof postApiTransportZulipRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTransportZulipIdRouteHandler: RouteHandler<
  typeof deleteApiTransportZulipIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransportZulipIdRouteHandler: RouteHandler<
  typeof getApiTransportZulipIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTransportZulipIdRouteHandler: RouteHandler<
  typeof putApiTransportZulipIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiUserAccountRouteHandler: RouteHandler<typeof getApiUserAccountRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiUserAccountLevelCodeRouteHandler: RouteHandler<
  typeof getApiUserAccountLevelCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiUserAccountLevelCodeIdRouteHandler: RouteHandler<
  typeof getApiUserAccountLevelCodeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiUserAccountIdRouteHandler: RouteHandler<
  typeof getApiUserAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiUserAccountIdRouteHandler: RouteHandler<
  typeof putApiUserAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
