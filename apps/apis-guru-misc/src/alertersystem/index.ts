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
} from './routes'
import {
  deleteApiAlertServiceIdRouteHandler,
  deleteApiMediaObjectIdRouteHandler,
  deleteApiMonitorIdRouteHandler,
  deleteApiPartitionIdRouteHandler,
  deleteApiTeamInvitationIdRouteHandler,
  deleteApiTeamMemberIdRouteHandler,
  deleteApiTransportAlertaIdRouteHandler,
  deleteApiTransportAllMySmsIdRouteHandler,
  deleteApiTransportAmazonSnsIdRouteHandler,
  deleteApiTransportBandwidthIdRouteHandler,
  deleteApiTransportChatworkIdRouteHandler,
  deleteApiTransportClickatellIdRouteHandler,
  deleteApiTransportClickSendIdRouteHandler,
  deleteApiTransportContactEveryoneIdRouteHandler,
  deleteApiTransportDiscordIdRouteHandler,
  deleteApiTransportEmailIdRouteHandler,
  deleteApiTransportEngagespotIdRouteHandler,
  deleteApiTransportEsendexIdRouteHandler,
  deleteApiTransportExpoIdRouteHandler,
  deleteApiTransportFirebaseIdRouteHandler,
  deleteApiTransportFortySixElksIdRouteHandler,
  deleteApiTransportFreeMobileIdRouteHandler,
  deleteApiTransportFreshdeskIdRouteHandler,
  deleteApiTransportGatewayApiIdRouteHandler,
  deleteApiTransportGitterIdRouteHandler,
  deleteApiTransportGoogleChatIdRouteHandler,
  deleteApiTransportGotifyIdRouteHandler,
  deleteApiTransportHelpScoutIdRouteHandler,
  deleteApiTransportInfobipIdRouteHandler,
  deleteApiTransportIqsmsIdRouteHandler,
  deleteApiTransportKazInfoTehIdRouteHandler,
  deleteApiTransportLightSmsIdRouteHandler,
  deleteApiTransportLineNotifyIdRouteHandler,
  deleteApiTransportLinkedInIdRouteHandler,
  deleteApiTransportMailjetIdRouteHandler,
  deleteApiTransportMastodonIdRouteHandler,
  deleteApiTransportMattermostIdRouteHandler,
  deleteApiTransportMercureIdRouteHandler,
  deleteApiTransportMessageBirdIdRouteHandler,
  deleteApiTransportMessageMediaIdRouteHandler,
  deleteApiTransportMicrosoftTeamsIdRouteHandler,
  deleteApiTransportMobytIdRouteHandler,
  deleteApiTransportOctopushIdRouteHandler,
  deleteApiTransportOneSignalIdRouteHandler,
  deleteApiTransportOpsgenieIdRouteHandler,
  deleteApiTransportOrangeSmsIdRouteHandler,
  deleteApiTransportOvhCloudIdRouteHandler,
  deleteApiTransportPagerDutyIdRouteHandler,
  deleteApiTransportPagerTreeIdRouteHandler,
  deleteApiTransportPlivoIdRouteHandler,
  deleteApiTransportPushbulletIdRouteHandler,
  deleteApiTransportPushoverIdRouteHandler,
  deleteApiTransportPushyIdRouteHandler,
  deleteApiTransportRingCentralIdRouteHandler,
  deleteApiTransportRocketChatIdRouteHandler,
  deleteApiTransportSendberryIdRouteHandler,
  deleteApiTransportSendinblueIdRouteHandler,
  deleteApiTransportSimpleTextinIdRouteHandler,
  deleteApiTransportSinchIdRouteHandler,
  deleteApiTransportSlackIdRouteHandler,
  deleteApiTransportSms77IdRouteHandler,
  deleteApiTransportSmsapiIdRouteHandler,
  deleteApiTransportSmsBiurasIdRouteHandler,
  deleteApiTransportSmscIdRouteHandler,
  deleteApiTransportSmsFactorIdRouteHandler,
  deleteApiTransportSmsmodeIdRouteHandler,
  deleteApiTransportSpotHitIdRouteHandler,
  deleteApiTransportTelegramIdRouteHandler,
  deleteApiTransportTelnyxIdRouteHandler,
  deleteApiTransportTermiiIdRouteHandler,
  deleteApiTransportTrelloIdRouteHandler,
  deleteApiTransportTurboSmsIdRouteHandler,
  deleteApiTransportTwilioIdRouteHandler,
  deleteApiTransportTwitterIdRouteHandler,
  deleteApiTransportVonageIdRouteHandler,
  deleteApiTransportWebhookIdRouteHandler,
  deleteApiTransportYunpianIdRouteHandler,
  deleteApiTransportZendeskIdRouteHandler,
  deleteApiTransportZulipIdRouteHandler,
  getApiAlertLogIdRouteHandler,
  getApiAlertLogRouteHandler,
  getApiAlertLogStatusCodeIdRouteHandler,
  getApiAlertLogStatusCodeRouteHandler,
  getApiAlertServiceIdRouteHandler,
  getApiAlertServiceRouteHandler,
  getApiAlertServiceTransportCodeIdRouteHandler,
  getApiAlertServiceTransportCodeRouteHandler,
  getApiCreditsConsumptionIdRouteHandler,
  getApiCreditsConsumptionRouteHandler,
  getApiHttpMethodCodeIdRouteHandler,
  getApiHttpMethodCodeRouteHandler,
  getApiMediaObjectIdRouteHandler,
  getApiMediaObjectRouteHandler,
  getApiMonitorIdRouteHandler,
  getApiMonitorRouteHandler,
  getApiMonitorStatusCodeIdRouteHandler,
  getApiMonitorStatusCodeRouteHandler,
  getApiMonitorStatusLogIdRouteHandler,
  getApiMonitorStatusLogRouteHandler,
  getApiMonitorTypeCodeIdRouteHandler,
  getApiMonitorTypeCodeRouteHandler,
  getApiPartitionIdRouteHandler,
  getApiPartitionRouteHandler,
  getApiPingIdRouteHandler,
  getApiPingMethodCodeIdRouteHandler,
  getApiPingMethodCodeRouteHandler,
  getApiPingRouteHandler,
  getApiTeamInvitationIdRouteHandler,
  getApiTeamInvitationRouteHandler,
  getApiTeamMemberIdRouteHandler,
  getApiTeamMemberRoleCodeIdRouteHandler,
  getApiTeamMemberRoleCodeRouteHandler,
  getApiTeamMemberRouteHandler,
  getApiTimezoneCodeIdRouteHandler,
  getApiTimezoneCodeRouteHandler,
  getApiTransportAlertaIdRouteHandler,
  getApiTransportAlertaRouteHandler,
  getApiTransportAllMySmsIdRouteHandler,
  getApiTransportAllMySmsRouteHandler,
  getApiTransportAmazonSnsIdRouteHandler,
  getApiTransportAmazonSnsRouteHandler,
  getApiTransportBandwidthIdRouteHandler,
  getApiTransportBandwidthRouteHandler,
  getApiTransportChatworkIdRouteHandler,
  getApiTransportChatworkRouteHandler,
  getApiTransportClickatellIdRouteHandler,
  getApiTransportClickatellRouteHandler,
  getApiTransportClickSendIdRouteHandler,
  getApiTransportClickSendRouteHandler,
  getApiTransportContactEveryoneIdRouteHandler,
  getApiTransportContactEveryoneRouteHandler,
  getApiTransportDiscordIdRouteHandler,
  getApiTransportDiscordRouteHandler,
  getApiTransportEmailIdRouteHandler,
  getApiTransportEmailRouteHandler,
  getApiTransportEngagespotIdRouteHandler,
  getApiTransportEngagespotRouteHandler,
  getApiTransportEsendexIdRouteHandler,
  getApiTransportEsendexRouteHandler,
  getApiTransportExpoIdRouteHandler,
  getApiTransportExpoRouteHandler,
  getApiTransportFirebaseIdRouteHandler,
  getApiTransportFirebaseRouteHandler,
  getApiTransportFortySixElksIdRouteHandler,
  getApiTransportFortySixElksRouteHandler,
  getApiTransportFreeMobileIdRouteHandler,
  getApiTransportFreeMobileRouteHandler,
  getApiTransportFreshdeskIdRouteHandler,
  getApiTransportFreshdeskRouteHandler,
  getApiTransportGatewayApiIdRouteHandler,
  getApiTransportGatewayApiRouteHandler,
  getApiTransportGitterIdRouteHandler,
  getApiTransportGitterRouteHandler,
  getApiTransportGoogleChatIdRouteHandler,
  getApiTransportGoogleChatRouteHandler,
  getApiTransportGotifyIdRouteHandler,
  getApiTransportGotifyRouteHandler,
  getApiTransportHelpScoutIdRouteHandler,
  getApiTransportHelpScoutRouteHandler,
  getApiTransportInfobipIdRouteHandler,
  getApiTransportInfobipRouteHandler,
  getApiTransportIqsmsIdRouteHandler,
  getApiTransportIqsmsRouteHandler,
  getApiTransportKazInfoTehIdRouteHandler,
  getApiTransportKazInfoTehRouteHandler,
  getApiTransportLightSmsIdRouteHandler,
  getApiTransportLightSmsRouteHandler,
  getApiTransportLineNotifyIdRouteHandler,
  getApiTransportLineNotifyRouteHandler,
  getApiTransportLinkedInIdRouteHandler,
  getApiTransportLinkedInRouteHandler,
  getApiTransportMailjetIdRouteHandler,
  getApiTransportMailjetRouteHandler,
  getApiTransportMastodonIdRouteHandler,
  getApiTransportMastodonRouteHandler,
  getApiTransportMattermostIdRouteHandler,
  getApiTransportMattermostRouteHandler,
  getApiTransportMercureIdRouteHandler,
  getApiTransportMercureRouteHandler,
  getApiTransportMessageBirdIdRouteHandler,
  getApiTransportMessageBirdRouteHandler,
  getApiTransportMessageMediaIdRouteHandler,
  getApiTransportMessageMediaRouteHandler,
  getApiTransportMicrosoftTeamsIdRouteHandler,
  getApiTransportMicrosoftTeamsRouteHandler,
  getApiTransportMobytIdRouteHandler,
  getApiTransportMobytRouteHandler,
  getApiTransportOctopushIdRouteHandler,
  getApiTransportOctopushRouteHandler,
  getApiTransportOneSignalIdRouteHandler,
  getApiTransportOneSignalRouteHandler,
  getApiTransportOpsgenieIdRouteHandler,
  getApiTransportOpsgenieRouteHandler,
  getApiTransportOrangeSmsIdRouteHandler,
  getApiTransportOrangeSmsRouteHandler,
  getApiTransportOvhCloudIdRouteHandler,
  getApiTransportOvhCloudRouteHandler,
  getApiTransportPagerDutyIdRouteHandler,
  getApiTransportPagerDutyRouteHandler,
  getApiTransportPagerTreeIdRouteHandler,
  getApiTransportPagerTreeRouteHandler,
  getApiTransportPlivoIdRouteHandler,
  getApiTransportPlivoRouteHandler,
  getApiTransportPushbulletIdRouteHandler,
  getApiTransportPushbulletRouteHandler,
  getApiTransportPushoverIdRouteHandler,
  getApiTransportPushoverRouteHandler,
  getApiTransportPushyIdRouteHandler,
  getApiTransportPushyRouteHandler,
  getApiTransportRingCentralIdRouteHandler,
  getApiTransportRingCentralRouteHandler,
  getApiTransportRocketChatIdRouteHandler,
  getApiTransportRocketChatRouteHandler,
  getApiTransportSendberryIdRouteHandler,
  getApiTransportSendberryRouteHandler,
  getApiTransportSendinblueIdRouteHandler,
  getApiTransportSendinblueRouteHandler,
  getApiTransportSimpleTextinIdRouteHandler,
  getApiTransportSimpleTextinRouteHandler,
  getApiTransportSinchIdRouteHandler,
  getApiTransportSinchRouteHandler,
  getApiTransportSlackIdRouteHandler,
  getApiTransportSlackRouteHandler,
  getApiTransportSms77IdRouteHandler,
  getApiTransportSms77RouteHandler,
  getApiTransportSmsapiIdRouteHandler,
  getApiTransportSmsapiRouteHandler,
  getApiTransportSmsBiurasIdRouteHandler,
  getApiTransportSmsBiurasRouteHandler,
  getApiTransportSmscIdRouteHandler,
  getApiTransportSmscRouteHandler,
  getApiTransportSmsFactorIdRouteHandler,
  getApiTransportSmsFactorRouteHandler,
  getApiTransportSmsmodeIdRouteHandler,
  getApiTransportSmsmodeRouteHandler,
  getApiTransportSpotHitIdRouteHandler,
  getApiTransportSpotHitRouteHandler,
  getApiTransportTelegramIdRouteHandler,
  getApiTransportTelegramRouteHandler,
  getApiTransportTelnyxIdRouteHandler,
  getApiTransportTelnyxRouteHandler,
  getApiTransportTermiiIdRouteHandler,
  getApiTransportTermiiRouteHandler,
  getApiTransportTrelloIdRouteHandler,
  getApiTransportTrelloRouteHandler,
  getApiTransportTurboSmsIdRouteHandler,
  getApiTransportTurboSmsRouteHandler,
  getApiTransportTwilioIdRouteHandler,
  getApiTransportTwilioRouteHandler,
  getApiTransportTwitterIdRouteHandler,
  getApiTransportTwitterRouteHandler,
  getApiTransportVonageIdRouteHandler,
  getApiTransportVonageRouteHandler,
  getApiTransportWebhookIdRouteHandler,
  getApiTransportWebhookRouteHandler,
  getApiTransportYunpianIdRouteHandler,
  getApiTransportYunpianRouteHandler,
  getApiTransportZendeskIdRouteHandler,
  getApiTransportZendeskRouteHandler,
  getApiTransportZulipIdRouteHandler,
  getApiTransportZulipRouteHandler,
  getApiUserAccountIdRouteHandler,
  getApiUserAccountLevelCodeIdRouteHandler,
  getApiUserAccountLevelCodeRouteHandler,
  getApiUserAccountRouteHandler,
  postApiAlertServiceRouteHandler,
  postApiMediaObjectRouteHandler,
  postApiMonitorRouteHandler,
  postApiPartitionRouteHandler,
  postApiPingRouteHandler,
  postApiTeamInvitationRouteHandler,
  postApiTransportAlertaRouteHandler,
  postApiTransportAllMySmsRouteHandler,
  postApiTransportAmazonSnsRouteHandler,
  postApiTransportBandwidthRouteHandler,
  postApiTransportChatworkRouteHandler,
  postApiTransportClickatellRouteHandler,
  postApiTransportClickSendRouteHandler,
  postApiTransportContactEveryoneRouteHandler,
  postApiTransportDiscordRouteHandler,
  postApiTransportEmailRouteHandler,
  postApiTransportEngagespotRouteHandler,
  postApiTransportEsendexRouteHandler,
  postApiTransportExpoRouteHandler,
  postApiTransportFirebaseRouteHandler,
  postApiTransportFortySixElksRouteHandler,
  postApiTransportFreeMobileRouteHandler,
  postApiTransportFreshdeskRouteHandler,
  postApiTransportGatewayApiRouteHandler,
  postApiTransportGitterRouteHandler,
  postApiTransportGoogleChatRouteHandler,
  postApiTransportGotifyRouteHandler,
  postApiTransportHelpScoutRouteHandler,
  postApiTransportInfobipRouteHandler,
  postApiTransportIqsmsRouteHandler,
  postApiTransportKazInfoTehRouteHandler,
  postApiTransportLightSmsRouteHandler,
  postApiTransportLineNotifyRouteHandler,
  postApiTransportLinkedInRouteHandler,
  postApiTransportMailjetRouteHandler,
  postApiTransportMastodonRouteHandler,
  postApiTransportMattermostRouteHandler,
  postApiTransportMercureRouteHandler,
  postApiTransportMessageBirdRouteHandler,
  postApiTransportMessageMediaRouteHandler,
  postApiTransportMicrosoftTeamsRouteHandler,
  postApiTransportMobytRouteHandler,
  postApiTransportOctopushRouteHandler,
  postApiTransportOneSignalRouteHandler,
  postApiTransportOpsgenieRouteHandler,
  postApiTransportOrangeSmsRouteHandler,
  postApiTransportOvhCloudRouteHandler,
  postApiTransportPagerDutyRouteHandler,
  postApiTransportPagerTreeRouteHandler,
  postApiTransportPlivoRouteHandler,
  postApiTransportPushbulletRouteHandler,
  postApiTransportPushoverRouteHandler,
  postApiTransportPushyRouteHandler,
  postApiTransportRingCentralRouteHandler,
  postApiTransportRocketChatRouteHandler,
  postApiTransportSendberryRouteHandler,
  postApiTransportSendinblueRouteHandler,
  postApiTransportSimpleTextinRouteHandler,
  postApiTransportSinchRouteHandler,
  postApiTransportSlackRouteHandler,
  postApiTransportSms77RouteHandler,
  postApiTransportSmsapiRouteHandler,
  postApiTransportSmsBiurasRouteHandler,
  postApiTransportSmscRouteHandler,
  postApiTransportSmsFactorRouteHandler,
  postApiTransportSmsmodeRouteHandler,
  postApiTransportSpotHitRouteHandler,
  postApiTransportTelegramRouteHandler,
  postApiTransportTelnyxRouteHandler,
  postApiTransportTermiiRouteHandler,
  postApiTransportTrelloRouteHandler,
  postApiTransportTurboSmsRouteHandler,
  postApiTransportTwilioRouteHandler,
  postApiTransportTwitterRouteHandler,
  postApiTransportVonageRouteHandler,
  postApiTransportWebhookRouteHandler,
  postApiTransportYunpianRouteHandler,
  postApiTransportZendeskRouteHandler,
  postApiTransportZulipRouteHandler,
  putApiAlertServiceIdRouteHandler,
  putApiMonitorIdRouteHandler,
  putApiPartitionIdRouteHandler,
  putApiTeamMemberIdRouteHandler,
  putApiTransportAlertaIdRouteHandler,
  putApiTransportAllMySmsIdRouteHandler,
  putApiTransportAmazonSnsIdRouteHandler,
  putApiTransportBandwidthIdRouteHandler,
  putApiTransportChatworkIdRouteHandler,
  putApiTransportClickatellIdRouteHandler,
  putApiTransportClickSendIdRouteHandler,
  putApiTransportContactEveryoneIdRouteHandler,
  putApiTransportDiscordIdRouteHandler,
  putApiTransportEmailIdRouteHandler,
  putApiTransportEngagespotIdRouteHandler,
  putApiTransportEsendexIdRouteHandler,
  putApiTransportExpoIdRouteHandler,
  putApiTransportFirebaseIdRouteHandler,
  putApiTransportFortySixElksIdRouteHandler,
  putApiTransportFreeMobileIdRouteHandler,
  putApiTransportFreshdeskIdRouteHandler,
  putApiTransportGatewayApiIdRouteHandler,
  putApiTransportGitterIdRouteHandler,
  putApiTransportGoogleChatIdRouteHandler,
  putApiTransportGotifyIdRouteHandler,
  putApiTransportHelpScoutIdRouteHandler,
  putApiTransportInfobipIdRouteHandler,
  putApiTransportIqsmsIdRouteHandler,
  putApiTransportKazInfoTehIdRouteHandler,
  putApiTransportLightSmsIdRouteHandler,
  putApiTransportLineNotifyIdRouteHandler,
  putApiTransportLinkedInIdRouteHandler,
  putApiTransportMailjetIdRouteHandler,
  putApiTransportMastodonIdRouteHandler,
  putApiTransportMattermostIdRouteHandler,
  putApiTransportMercureIdRouteHandler,
  putApiTransportMessageBirdIdRouteHandler,
  putApiTransportMessageMediaIdRouteHandler,
  putApiTransportMicrosoftTeamsIdRouteHandler,
  putApiTransportMobytIdRouteHandler,
  putApiTransportOctopushIdRouteHandler,
  putApiTransportOneSignalIdRouteHandler,
  putApiTransportOpsgenieIdRouteHandler,
  putApiTransportOrangeSmsIdRouteHandler,
  putApiTransportOvhCloudIdRouteHandler,
  putApiTransportPagerDutyIdRouteHandler,
  putApiTransportPagerTreeIdRouteHandler,
  putApiTransportPlivoIdRouteHandler,
  putApiTransportPushbulletIdRouteHandler,
  putApiTransportPushoverIdRouteHandler,
  putApiTransportPushyIdRouteHandler,
  putApiTransportRingCentralIdRouteHandler,
  putApiTransportRocketChatIdRouteHandler,
  putApiTransportSendberryIdRouteHandler,
  putApiTransportSendinblueIdRouteHandler,
  putApiTransportSimpleTextinIdRouteHandler,
  putApiTransportSinchIdRouteHandler,
  putApiTransportSlackIdRouteHandler,
  putApiTransportSms77IdRouteHandler,
  putApiTransportSmsapiIdRouteHandler,
  putApiTransportSmsBiurasIdRouteHandler,
  putApiTransportSmscIdRouteHandler,
  putApiTransportSmsFactorIdRouteHandler,
  putApiTransportSmsmodeIdRouteHandler,
  putApiTransportSpotHitIdRouteHandler,
  putApiTransportTelegramIdRouteHandler,
  putApiTransportTelnyxIdRouteHandler,
  putApiTransportTermiiIdRouteHandler,
  putApiTransportTrelloIdRouteHandler,
  putApiTransportTurboSmsIdRouteHandler,
  putApiTransportTwilioIdRouteHandler,
  putApiTransportTwitterIdRouteHandler,
  putApiTransportVonageIdRouteHandler,
  putApiTransportWebhookIdRouteHandler,
  putApiTransportYunpianIdRouteHandler,
  putApiTransportZendeskIdRouteHandler,
  putApiTransportZulipIdRouteHandler,
  putApiUserAccountIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiAlertLogRoute, getApiAlertLogRouteHandler)
  .openapi(getApiAlertLogStatusCodeRoute, getApiAlertLogStatusCodeRouteHandler)
  .openapi(getApiAlertLogStatusCodeIdRoute, getApiAlertLogStatusCodeIdRouteHandler)
  .openapi(getApiAlertLogIdRoute, getApiAlertLogIdRouteHandler)
  .openapi(getApiAlertServiceRoute, getApiAlertServiceRouteHandler)
  .openapi(postApiAlertServiceRoute, postApiAlertServiceRouteHandler)
  .openapi(getApiAlertServiceTransportCodeRoute, getApiAlertServiceTransportCodeRouteHandler)
  .openapi(getApiAlertServiceTransportCodeIdRoute, getApiAlertServiceTransportCodeIdRouteHandler)
  .openapi(deleteApiAlertServiceIdRoute, deleteApiAlertServiceIdRouteHandler)
  .openapi(getApiAlertServiceIdRoute, getApiAlertServiceIdRouteHandler)
  .openapi(putApiAlertServiceIdRoute, putApiAlertServiceIdRouteHandler)
  .openapi(getApiCreditsConsumptionRoute, getApiCreditsConsumptionRouteHandler)
  .openapi(getApiCreditsConsumptionIdRoute, getApiCreditsConsumptionIdRouteHandler)
  .openapi(getApiHttpMethodCodeRoute, getApiHttpMethodCodeRouteHandler)
  .openapi(getApiHttpMethodCodeIdRoute, getApiHttpMethodCodeIdRouteHandler)
  .openapi(getApiMediaObjectRoute, getApiMediaObjectRouteHandler)
  .openapi(postApiMediaObjectRoute, postApiMediaObjectRouteHandler)
  .openapi(deleteApiMediaObjectIdRoute, deleteApiMediaObjectIdRouteHandler)
  .openapi(getApiMediaObjectIdRoute, getApiMediaObjectIdRouteHandler)
  .openapi(getApiMonitorRoute, getApiMonitorRouteHandler)
  .openapi(postApiMonitorRoute, postApiMonitorRouteHandler)
  .openapi(getApiMonitorStatusCodeRoute, getApiMonitorStatusCodeRouteHandler)
  .openapi(getApiMonitorStatusCodeIdRoute, getApiMonitorStatusCodeIdRouteHandler)
  .openapi(getApiMonitorStatusLogRoute, getApiMonitorStatusLogRouteHandler)
  .openapi(getApiMonitorStatusLogIdRoute, getApiMonitorStatusLogIdRouteHandler)
  .openapi(getApiMonitorTypeCodeRoute, getApiMonitorTypeCodeRouteHandler)
  .openapi(getApiMonitorTypeCodeIdRoute, getApiMonitorTypeCodeIdRouteHandler)
  .openapi(deleteApiMonitorIdRoute, deleteApiMonitorIdRouteHandler)
  .openapi(getApiMonitorIdRoute, getApiMonitorIdRouteHandler)
  .openapi(putApiMonitorIdRoute, putApiMonitorIdRouteHandler)
  .openapi(getApiPartitionRoute, getApiPartitionRouteHandler)
  .openapi(postApiPartitionRoute, postApiPartitionRouteHandler)
  .openapi(deleteApiPartitionIdRoute, deleteApiPartitionIdRouteHandler)
  .openapi(getApiPartitionIdRoute, getApiPartitionIdRouteHandler)
  .openapi(putApiPartitionIdRoute, putApiPartitionIdRouteHandler)
  .openapi(getApiPingRoute, getApiPingRouteHandler)
  .openapi(postApiPingRoute, postApiPingRouteHandler)
  .openapi(getApiPingMethodCodeRoute, getApiPingMethodCodeRouteHandler)
  .openapi(getApiPingMethodCodeIdRoute, getApiPingMethodCodeIdRouteHandler)
  .openapi(getApiPingIdRoute, getApiPingIdRouteHandler)
  .openapi(getApiTeamInvitationRoute, getApiTeamInvitationRouteHandler)
  .openapi(postApiTeamInvitationRoute, postApiTeamInvitationRouteHandler)
  .openapi(deleteApiTeamInvitationIdRoute, deleteApiTeamInvitationIdRouteHandler)
  .openapi(getApiTeamInvitationIdRoute, getApiTeamInvitationIdRouteHandler)
  .openapi(getApiTeamMemberRoute, getApiTeamMemberRouteHandler)
  .openapi(getApiTeamMemberRoleCodeRoute, getApiTeamMemberRoleCodeRouteHandler)
  .openapi(getApiTeamMemberRoleCodeIdRoute, getApiTeamMemberRoleCodeIdRouteHandler)
  .openapi(deleteApiTeamMemberIdRoute, deleteApiTeamMemberIdRouteHandler)
  .openapi(getApiTeamMemberIdRoute, getApiTeamMemberIdRouteHandler)
  .openapi(putApiTeamMemberIdRoute, putApiTeamMemberIdRouteHandler)
  .openapi(getApiTimezoneCodeRoute, getApiTimezoneCodeRouteHandler)
  .openapi(getApiTimezoneCodeIdRoute, getApiTimezoneCodeIdRouteHandler)
  .openapi(getApiTransportAlertaRoute, getApiTransportAlertaRouteHandler)
  .openapi(postApiTransportAlertaRoute, postApiTransportAlertaRouteHandler)
  .openapi(deleteApiTransportAlertaIdRoute, deleteApiTransportAlertaIdRouteHandler)
  .openapi(getApiTransportAlertaIdRoute, getApiTransportAlertaIdRouteHandler)
  .openapi(putApiTransportAlertaIdRoute, putApiTransportAlertaIdRouteHandler)
  .openapi(getApiTransportAllMySmsRoute, getApiTransportAllMySmsRouteHandler)
  .openapi(postApiTransportAllMySmsRoute, postApiTransportAllMySmsRouteHandler)
  .openapi(deleteApiTransportAllMySmsIdRoute, deleteApiTransportAllMySmsIdRouteHandler)
  .openapi(getApiTransportAllMySmsIdRoute, getApiTransportAllMySmsIdRouteHandler)
  .openapi(putApiTransportAllMySmsIdRoute, putApiTransportAllMySmsIdRouteHandler)
  .openapi(getApiTransportAmazonSnsRoute, getApiTransportAmazonSnsRouteHandler)
  .openapi(postApiTransportAmazonSnsRoute, postApiTransportAmazonSnsRouteHandler)
  .openapi(deleteApiTransportAmazonSnsIdRoute, deleteApiTransportAmazonSnsIdRouteHandler)
  .openapi(getApiTransportAmazonSnsIdRoute, getApiTransportAmazonSnsIdRouteHandler)
  .openapi(putApiTransportAmazonSnsIdRoute, putApiTransportAmazonSnsIdRouteHandler)
  .openapi(getApiTransportBandwidthRoute, getApiTransportBandwidthRouteHandler)
  .openapi(postApiTransportBandwidthRoute, postApiTransportBandwidthRouteHandler)
  .openapi(deleteApiTransportBandwidthIdRoute, deleteApiTransportBandwidthIdRouteHandler)
  .openapi(getApiTransportBandwidthIdRoute, getApiTransportBandwidthIdRouteHandler)
  .openapi(putApiTransportBandwidthIdRoute, putApiTransportBandwidthIdRouteHandler)
  .openapi(getApiTransportChatworkRoute, getApiTransportChatworkRouteHandler)
  .openapi(postApiTransportChatworkRoute, postApiTransportChatworkRouteHandler)
  .openapi(deleteApiTransportChatworkIdRoute, deleteApiTransportChatworkIdRouteHandler)
  .openapi(getApiTransportChatworkIdRoute, getApiTransportChatworkIdRouteHandler)
  .openapi(putApiTransportChatworkIdRoute, putApiTransportChatworkIdRouteHandler)
  .openapi(getApiTransportClickSendRoute, getApiTransportClickSendRouteHandler)
  .openapi(postApiTransportClickSendRoute, postApiTransportClickSendRouteHandler)
  .openapi(deleteApiTransportClickSendIdRoute, deleteApiTransportClickSendIdRouteHandler)
  .openapi(getApiTransportClickSendIdRoute, getApiTransportClickSendIdRouteHandler)
  .openapi(putApiTransportClickSendIdRoute, putApiTransportClickSendIdRouteHandler)
  .openapi(getApiTransportClickatellRoute, getApiTransportClickatellRouteHandler)
  .openapi(postApiTransportClickatellRoute, postApiTransportClickatellRouteHandler)
  .openapi(deleteApiTransportClickatellIdRoute, deleteApiTransportClickatellIdRouteHandler)
  .openapi(getApiTransportClickatellIdRoute, getApiTransportClickatellIdRouteHandler)
  .openapi(putApiTransportClickatellIdRoute, putApiTransportClickatellIdRouteHandler)
  .openapi(getApiTransportContactEveryoneRoute, getApiTransportContactEveryoneRouteHandler)
  .openapi(postApiTransportContactEveryoneRoute, postApiTransportContactEveryoneRouteHandler)
  .openapi(
    deleteApiTransportContactEveryoneIdRoute,
    deleteApiTransportContactEveryoneIdRouteHandler,
  )
  .openapi(getApiTransportContactEveryoneIdRoute, getApiTransportContactEveryoneIdRouteHandler)
  .openapi(putApiTransportContactEveryoneIdRoute, putApiTransportContactEveryoneIdRouteHandler)
  .openapi(getApiTransportDiscordRoute, getApiTransportDiscordRouteHandler)
  .openapi(postApiTransportDiscordRoute, postApiTransportDiscordRouteHandler)
  .openapi(deleteApiTransportDiscordIdRoute, deleteApiTransportDiscordIdRouteHandler)
  .openapi(getApiTransportDiscordIdRoute, getApiTransportDiscordIdRouteHandler)
  .openapi(putApiTransportDiscordIdRoute, putApiTransportDiscordIdRouteHandler)
  .openapi(getApiTransportEmailRoute, getApiTransportEmailRouteHandler)
  .openapi(postApiTransportEmailRoute, postApiTransportEmailRouteHandler)
  .openapi(deleteApiTransportEmailIdRoute, deleteApiTransportEmailIdRouteHandler)
  .openapi(getApiTransportEmailIdRoute, getApiTransportEmailIdRouteHandler)
  .openapi(putApiTransportEmailIdRoute, putApiTransportEmailIdRouteHandler)
  .openapi(getApiTransportEngagespotRoute, getApiTransportEngagespotRouteHandler)
  .openapi(postApiTransportEngagespotRoute, postApiTransportEngagespotRouteHandler)
  .openapi(deleteApiTransportEngagespotIdRoute, deleteApiTransportEngagespotIdRouteHandler)
  .openapi(getApiTransportEngagespotIdRoute, getApiTransportEngagespotIdRouteHandler)
  .openapi(putApiTransportEngagespotIdRoute, putApiTransportEngagespotIdRouteHandler)
  .openapi(getApiTransportEsendexRoute, getApiTransportEsendexRouteHandler)
  .openapi(postApiTransportEsendexRoute, postApiTransportEsendexRouteHandler)
  .openapi(deleteApiTransportEsendexIdRoute, deleteApiTransportEsendexIdRouteHandler)
  .openapi(getApiTransportEsendexIdRoute, getApiTransportEsendexIdRouteHandler)
  .openapi(putApiTransportEsendexIdRoute, putApiTransportEsendexIdRouteHandler)
  .openapi(getApiTransportExpoRoute, getApiTransportExpoRouteHandler)
  .openapi(postApiTransportExpoRoute, postApiTransportExpoRouteHandler)
  .openapi(deleteApiTransportExpoIdRoute, deleteApiTransportExpoIdRouteHandler)
  .openapi(getApiTransportExpoIdRoute, getApiTransportExpoIdRouteHandler)
  .openapi(putApiTransportExpoIdRoute, putApiTransportExpoIdRouteHandler)
  .openapi(getApiTransportFirebaseRoute, getApiTransportFirebaseRouteHandler)
  .openapi(postApiTransportFirebaseRoute, postApiTransportFirebaseRouteHandler)
  .openapi(deleteApiTransportFirebaseIdRoute, deleteApiTransportFirebaseIdRouteHandler)
  .openapi(getApiTransportFirebaseIdRoute, getApiTransportFirebaseIdRouteHandler)
  .openapi(putApiTransportFirebaseIdRoute, putApiTransportFirebaseIdRouteHandler)
  .openapi(getApiTransportFortySixElksRoute, getApiTransportFortySixElksRouteHandler)
  .openapi(postApiTransportFortySixElksRoute, postApiTransportFortySixElksRouteHandler)
  .openapi(deleteApiTransportFortySixElksIdRoute, deleteApiTransportFortySixElksIdRouteHandler)
  .openapi(getApiTransportFortySixElksIdRoute, getApiTransportFortySixElksIdRouteHandler)
  .openapi(putApiTransportFortySixElksIdRoute, putApiTransportFortySixElksIdRouteHandler)
  .openapi(getApiTransportFreeMobileRoute, getApiTransportFreeMobileRouteHandler)
  .openapi(postApiTransportFreeMobileRoute, postApiTransportFreeMobileRouteHandler)
  .openapi(deleteApiTransportFreeMobileIdRoute, deleteApiTransportFreeMobileIdRouteHandler)
  .openapi(getApiTransportFreeMobileIdRoute, getApiTransportFreeMobileIdRouteHandler)
  .openapi(putApiTransportFreeMobileIdRoute, putApiTransportFreeMobileIdRouteHandler)
  .openapi(getApiTransportFreshdeskRoute, getApiTransportFreshdeskRouteHandler)
  .openapi(postApiTransportFreshdeskRoute, postApiTransportFreshdeskRouteHandler)
  .openapi(deleteApiTransportFreshdeskIdRoute, deleteApiTransportFreshdeskIdRouteHandler)
  .openapi(getApiTransportFreshdeskIdRoute, getApiTransportFreshdeskIdRouteHandler)
  .openapi(putApiTransportFreshdeskIdRoute, putApiTransportFreshdeskIdRouteHandler)
  .openapi(getApiTransportGatewayApiRoute, getApiTransportGatewayApiRouteHandler)
  .openapi(postApiTransportGatewayApiRoute, postApiTransportGatewayApiRouteHandler)
  .openapi(deleteApiTransportGatewayApiIdRoute, deleteApiTransportGatewayApiIdRouteHandler)
  .openapi(getApiTransportGatewayApiIdRoute, getApiTransportGatewayApiIdRouteHandler)
  .openapi(putApiTransportGatewayApiIdRoute, putApiTransportGatewayApiIdRouteHandler)
  .openapi(getApiTransportGitterRoute, getApiTransportGitterRouteHandler)
  .openapi(postApiTransportGitterRoute, postApiTransportGitterRouteHandler)
  .openapi(deleteApiTransportGitterIdRoute, deleteApiTransportGitterIdRouteHandler)
  .openapi(getApiTransportGitterIdRoute, getApiTransportGitterIdRouteHandler)
  .openapi(putApiTransportGitterIdRoute, putApiTransportGitterIdRouteHandler)
  .openapi(getApiTransportGoogleChatRoute, getApiTransportGoogleChatRouteHandler)
  .openapi(postApiTransportGoogleChatRoute, postApiTransportGoogleChatRouteHandler)
  .openapi(deleteApiTransportGoogleChatIdRoute, deleteApiTransportGoogleChatIdRouteHandler)
  .openapi(getApiTransportGoogleChatIdRoute, getApiTransportGoogleChatIdRouteHandler)
  .openapi(putApiTransportGoogleChatIdRoute, putApiTransportGoogleChatIdRouteHandler)
  .openapi(getApiTransportGotifyRoute, getApiTransportGotifyRouteHandler)
  .openapi(postApiTransportGotifyRoute, postApiTransportGotifyRouteHandler)
  .openapi(deleteApiTransportGotifyIdRoute, deleteApiTransportGotifyIdRouteHandler)
  .openapi(getApiTransportGotifyIdRoute, getApiTransportGotifyIdRouteHandler)
  .openapi(putApiTransportGotifyIdRoute, putApiTransportGotifyIdRouteHandler)
  .openapi(getApiTransportHelpScoutRoute, getApiTransportHelpScoutRouteHandler)
  .openapi(postApiTransportHelpScoutRoute, postApiTransportHelpScoutRouteHandler)
  .openapi(deleteApiTransportHelpScoutIdRoute, deleteApiTransportHelpScoutIdRouteHandler)
  .openapi(getApiTransportHelpScoutIdRoute, getApiTransportHelpScoutIdRouteHandler)
  .openapi(putApiTransportHelpScoutIdRoute, putApiTransportHelpScoutIdRouteHandler)
  .openapi(getApiTransportInfobipRoute, getApiTransportInfobipRouteHandler)
  .openapi(postApiTransportInfobipRoute, postApiTransportInfobipRouteHandler)
  .openapi(deleteApiTransportInfobipIdRoute, deleteApiTransportInfobipIdRouteHandler)
  .openapi(getApiTransportInfobipIdRoute, getApiTransportInfobipIdRouteHandler)
  .openapi(putApiTransportInfobipIdRoute, putApiTransportInfobipIdRouteHandler)
  .openapi(getApiTransportIqsmsRoute, getApiTransportIqsmsRouteHandler)
  .openapi(postApiTransportIqsmsRoute, postApiTransportIqsmsRouteHandler)
  .openapi(deleteApiTransportIqsmsIdRoute, deleteApiTransportIqsmsIdRouteHandler)
  .openapi(getApiTransportIqsmsIdRoute, getApiTransportIqsmsIdRouteHandler)
  .openapi(putApiTransportIqsmsIdRoute, putApiTransportIqsmsIdRouteHandler)
  .openapi(getApiTransportKazInfoTehRoute, getApiTransportKazInfoTehRouteHandler)
  .openapi(postApiTransportKazInfoTehRoute, postApiTransportKazInfoTehRouteHandler)
  .openapi(deleteApiTransportKazInfoTehIdRoute, deleteApiTransportKazInfoTehIdRouteHandler)
  .openapi(getApiTransportKazInfoTehIdRoute, getApiTransportKazInfoTehIdRouteHandler)
  .openapi(putApiTransportKazInfoTehIdRoute, putApiTransportKazInfoTehIdRouteHandler)
  .openapi(getApiTransportLightSmsRoute, getApiTransportLightSmsRouteHandler)
  .openapi(postApiTransportLightSmsRoute, postApiTransportLightSmsRouteHandler)
  .openapi(deleteApiTransportLightSmsIdRoute, deleteApiTransportLightSmsIdRouteHandler)
  .openapi(getApiTransportLightSmsIdRoute, getApiTransportLightSmsIdRouteHandler)
  .openapi(putApiTransportLightSmsIdRoute, putApiTransportLightSmsIdRouteHandler)
  .openapi(getApiTransportLineNotifyRoute, getApiTransportLineNotifyRouteHandler)
  .openapi(postApiTransportLineNotifyRoute, postApiTransportLineNotifyRouteHandler)
  .openapi(deleteApiTransportLineNotifyIdRoute, deleteApiTransportLineNotifyIdRouteHandler)
  .openapi(getApiTransportLineNotifyIdRoute, getApiTransportLineNotifyIdRouteHandler)
  .openapi(putApiTransportLineNotifyIdRoute, putApiTransportLineNotifyIdRouteHandler)
  .openapi(getApiTransportLinkedInRoute, getApiTransportLinkedInRouteHandler)
  .openapi(postApiTransportLinkedInRoute, postApiTransportLinkedInRouteHandler)
  .openapi(deleteApiTransportLinkedInIdRoute, deleteApiTransportLinkedInIdRouteHandler)
  .openapi(getApiTransportLinkedInIdRoute, getApiTransportLinkedInIdRouteHandler)
  .openapi(putApiTransportLinkedInIdRoute, putApiTransportLinkedInIdRouteHandler)
  .openapi(getApiTransportMailjetRoute, getApiTransportMailjetRouteHandler)
  .openapi(postApiTransportMailjetRoute, postApiTransportMailjetRouteHandler)
  .openapi(deleteApiTransportMailjetIdRoute, deleteApiTransportMailjetIdRouteHandler)
  .openapi(getApiTransportMailjetIdRoute, getApiTransportMailjetIdRouteHandler)
  .openapi(putApiTransportMailjetIdRoute, putApiTransportMailjetIdRouteHandler)
  .openapi(getApiTransportMastodonRoute, getApiTransportMastodonRouteHandler)
  .openapi(postApiTransportMastodonRoute, postApiTransportMastodonRouteHandler)
  .openapi(deleteApiTransportMastodonIdRoute, deleteApiTransportMastodonIdRouteHandler)
  .openapi(getApiTransportMastodonIdRoute, getApiTransportMastodonIdRouteHandler)
  .openapi(putApiTransportMastodonIdRoute, putApiTransportMastodonIdRouteHandler)
  .openapi(getApiTransportMattermostRoute, getApiTransportMattermostRouteHandler)
  .openapi(postApiTransportMattermostRoute, postApiTransportMattermostRouteHandler)
  .openapi(deleteApiTransportMattermostIdRoute, deleteApiTransportMattermostIdRouteHandler)
  .openapi(getApiTransportMattermostIdRoute, getApiTransportMattermostIdRouteHandler)
  .openapi(putApiTransportMattermostIdRoute, putApiTransportMattermostIdRouteHandler)
  .openapi(getApiTransportMercureRoute, getApiTransportMercureRouteHandler)
  .openapi(postApiTransportMercureRoute, postApiTransportMercureRouteHandler)
  .openapi(deleteApiTransportMercureIdRoute, deleteApiTransportMercureIdRouteHandler)
  .openapi(getApiTransportMercureIdRoute, getApiTransportMercureIdRouteHandler)
  .openapi(putApiTransportMercureIdRoute, putApiTransportMercureIdRouteHandler)
  .openapi(getApiTransportMessageBirdRoute, getApiTransportMessageBirdRouteHandler)
  .openapi(postApiTransportMessageBirdRoute, postApiTransportMessageBirdRouteHandler)
  .openapi(deleteApiTransportMessageBirdIdRoute, deleteApiTransportMessageBirdIdRouteHandler)
  .openapi(getApiTransportMessageBirdIdRoute, getApiTransportMessageBirdIdRouteHandler)
  .openapi(putApiTransportMessageBirdIdRoute, putApiTransportMessageBirdIdRouteHandler)
  .openapi(getApiTransportMessageMediaRoute, getApiTransportMessageMediaRouteHandler)
  .openapi(postApiTransportMessageMediaRoute, postApiTransportMessageMediaRouteHandler)
  .openapi(deleteApiTransportMessageMediaIdRoute, deleteApiTransportMessageMediaIdRouteHandler)
  .openapi(getApiTransportMessageMediaIdRoute, getApiTransportMessageMediaIdRouteHandler)
  .openapi(putApiTransportMessageMediaIdRoute, putApiTransportMessageMediaIdRouteHandler)
  .openapi(getApiTransportMicrosoftTeamsRoute, getApiTransportMicrosoftTeamsRouteHandler)
  .openapi(postApiTransportMicrosoftTeamsRoute, postApiTransportMicrosoftTeamsRouteHandler)
  .openapi(deleteApiTransportMicrosoftTeamsIdRoute, deleteApiTransportMicrosoftTeamsIdRouteHandler)
  .openapi(getApiTransportMicrosoftTeamsIdRoute, getApiTransportMicrosoftTeamsIdRouteHandler)
  .openapi(putApiTransportMicrosoftTeamsIdRoute, putApiTransportMicrosoftTeamsIdRouteHandler)
  .openapi(getApiTransportMobytRoute, getApiTransportMobytRouteHandler)
  .openapi(postApiTransportMobytRoute, postApiTransportMobytRouteHandler)
  .openapi(deleteApiTransportMobytIdRoute, deleteApiTransportMobytIdRouteHandler)
  .openapi(getApiTransportMobytIdRoute, getApiTransportMobytIdRouteHandler)
  .openapi(putApiTransportMobytIdRoute, putApiTransportMobytIdRouteHandler)
  .openapi(getApiTransportOctopushRoute, getApiTransportOctopushRouteHandler)
  .openapi(postApiTransportOctopushRoute, postApiTransportOctopushRouteHandler)
  .openapi(deleteApiTransportOctopushIdRoute, deleteApiTransportOctopushIdRouteHandler)
  .openapi(getApiTransportOctopushIdRoute, getApiTransportOctopushIdRouteHandler)
  .openapi(putApiTransportOctopushIdRoute, putApiTransportOctopushIdRouteHandler)
  .openapi(getApiTransportOneSignalRoute, getApiTransportOneSignalRouteHandler)
  .openapi(postApiTransportOneSignalRoute, postApiTransportOneSignalRouteHandler)
  .openapi(deleteApiTransportOneSignalIdRoute, deleteApiTransportOneSignalIdRouteHandler)
  .openapi(getApiTransportOneSignalIdRoute, getApiTransportOneSignalIdRouteHandler)
  .openapi(putApiTransportOneSignalIdRoute, putApiTransportOneSignalIdRouteHandler)
  .openapi(getApiTransportOpsgenieRoute, getApiTransportOpsgenieRouteHandler)
  .openapi(postApiTransportOpsgenieRoute, postApiTransportOpsgenieRouteHandler)
  .openapi(deleteApiTransportOpsgenieIdRoute, deleteApiTransportOpsgenieIdRouteHandler)
  .openapi(getApiTransportOpsgenieIdRoute, getApiTransportOpsgenieIdRouteHandler)
  .openapi(putApiTransportOpsgenieIdRoute, putApiTransportOpsgenieIdRouteHandler)
  .openapi(getApiTransportOrangeSmsRoute, getApiTransportOrangeSmsRouteHandler)
  .openapi(postApiTransportOrangeSmsRoute, postApiTransportOrangeSmsRouteHandler)
  .openapi(deleteApiTransportOrangeSmsIdRoute, deleteApiTransportOrangeSmsIdRouteHandler)
  .openapi(getApiTransportOrangeSmsIdRoute, getApiTransportOrangeSmsIdRouteHandler)
  .openapi(putApiTransportOrangeSmsIdRoute, putApiTransportOrangeSmsIdRouteHandler)
  .openapi(getApiTransportOvhCloudRoute, getApiTransportOvhCloudRouteHandler)
  .openapi(postApiTransportOvhCloudRoute, postApiTransportOvhCloudRouteHandler)
  .openapi(deleteApiTransportOvhCloudIdRoute, deleteApiTransportOvhCloudIdRouteHandler)
  .openapi(getApiTransportOvhCloudIdRoute, getApiTransportOvhCloudIdRouteHandler)
  .openapi(putApiTransportOvhCloudIdRoute, putApiTransportOvhCloudIdRouteHandler)
  .openapi(getApiTransportPagerDutyRoute, getApiTransportPagerDutyRouteHandler)
  .openapi(postApiTransportPagerDutyRoute, postApiTransportPagerDutyRouteHandler)
  .openapi(deleteApiTransportPagerDutyIdRoute, deleteApiTransportPagerDutyIdRouteHandler)
  .openapi(getApiTransportPagerDutyIdRoute, getApiTransportPagerDutyIdRouteHandler)
  .openapi(putApiTransportPagerDutyIdRoute, putApiTransportPagerDutyIdRouteHandler)
  .openapi(getApiTransportPagerTreeRoute, getApiTransportPagerTreeRouteHandler)
  .openapi(postApiTransportPagerTreeRoute, postApiTransportPagerTreeRouteHandler)
  .openapi(deleteApiTransportPagerTreeIdRoute, deleteApiTransportPagerTreeIdRouteHandler)
  .openapi(getApiTransportPagerTreeIdRoute, getApiTransportPagerTreeIdRouteHandler)
  .openapi(putApiTransportPagerTreeIdRoute, putApiTransportPagerTreeIdRouteHandler)
  .openapi(getApiTransportPlivoRoute, getApiTransportPlivoRouteHandler)
  .openapi(postApiTransportPlivoRoute, postApiTransportPlivoRouteHandler)
  .openapi(deleteApiTransportPlivoIdRoute, deleteApiTransportPlivoIdRouteHandler)
  .openapi(getApiTransportPlivoIdRoute, getApiTransportPlivoIdRouteHandler)
  .openapi(putApiTransportPlivoIdRoute, putApiTransportPlivoIdRouteHandler)
  .openapi(getApiTransportPushbulletRoute, getApiTransportPushbulletRouteHandler)
  .openapi(postApiTransportPushbulletRoute, postApiTransportPushbulletRouteHandler)
  .openapi(deleteApiTransportPushbulletIdRoute, deleteApiTransportPushbulletIdRouteHandler)
  .openapi(getApiTransportPushbulletIdRoute, getApiTransportPushbulletIdRouteHandler)
  .openapi(putApiTransportPushbulletIdRoute, putApiTransportPushbulletIdRouteHandler)
  .openapi(getApiTransportPushoverRoute, getApiTransportPushoverRouteHandler)
  .openapi(postApiTransportPushoverRoute, postApiTransportPushoverRouteHandler)
  .openapi(deleteApiTransportPushoverIdRoute, deleteApiTransportPushoverIdRouteHandler)
  .openapi(getApiTransportPushoverIdRoute, getApiTransportPushoverIdRouteHandler)
  .openapi(putApiTransportPushoverIdRoute, putApiTransportPushoverIdRouteHandler)
  .openapi(getApiTransportPushyRoute, getApiTransportPushyRouteHandler)
  .openapi(postApiTransportPushyRoute, postApiTransportPushyRouteHandler)
  .openapi(deleteApiTransportPushyIdRoute, deleteApiTransportPushyIdRouteHandler)
  .openapi(getApiTransportPushyIdRoute, getApiTransportPushyIdRouteHandler)
  .openapi(putApiTransportPushyIdRoute, putApiTransportPushyIdRouteHandler)
  .openapi(getApiTransportRingCentralRoute, getApiTransportRingCentralRouteHandler)
  .openapi(postApiTransportRingCentralRoute, postApiTransportRingCentralRouteHandler)
  .openapi(deleteApiTransportRingCentralIdRoute, deleteApiTransportRingCentralIdRouteHandler)
  .openapi(getApiTransportRingCentralIdRoute, getApiTransportRingCentralIdRouteHandler)
  .openapi(putApiTransportRingCentralIdRoute, putApiTransportRingCentralIdRouteHandler)
  .openapi(getApiTransportRocketChatRoute, getApiTransportRocketChatRouteHandler)
  .openapi(postApiTransportRocketChatRoute, postApiTransportRocketChatRouteHandler)
  .openapi(deleteApiTransportRocketChatIdRoute, deleteApiTransportRocketChatIdRouteHandler)
  .openapi(getApiTransportRocketChatIdRoute, getApiTransportRocketChatIdRouteHandler)
  .openapi(putApiTransportRocketChatIdRoute, putApiTransportRocketChatIdRouteHandler)
  .openapi(getApiTransportSendberryRoute, getApiTransportSendberryRouteHandler)
  .openapi(postApiTransportSendberryRoute, postApiTransportSendberryRouteHandler)
  .openapi(deleteApiTransportSendberryIdRoute, deleteApiTransportSendberryIdRouteHandler)
  .openapi(getApiTransportSendberryIdRoute, getApiTransportSendberryIdRouteHandler)
  .openapi(putApiTransportSendberryIdRoute, putApiTransportSendberryIdRouteHandler)
  .openapi(getApiTransportSendinblueRoute, getApiTransportSendinblueRouteHandler)
  .openapi(postApiTransportSendinblueRoute, postApiTransportSendinblueRouteHandler)
  .openapi(deleteApiTransportSendinblueIdRoute, deleteApiTransportSendinblueIdRouteHandler)
  .openapi(getApiTransportSendinblueIdRoute, getApiTransportSendinblueIdRouteHandler)
  .openapi(putApiTransportSendinblueIdRoute, putApiTransportSendinblueIdRouteHandler)
  .openapi(getApiTransportSimpleTextinRoute, getApiTransportSimpleTextinRouteHandler)
  .openapi(postApiTransportSimpleTextinRoute, postApiTransportSimpleTextinRouteHandler)
  .openapi(deleteApiTransportSimpleTextinIdRoute, deleteApiTransportSimpleTextinIdRouteHandler)
  .openapi(getApiTransportSimpleTextinIdRoute, getApiTransportSimpleTextinIdRouteHandler)
  .openapi(putApiTransportSimpleTextinIdRoute, putApiTransportSimpleTextinIdRouteHandler)
  .openapi(getApiTransportSinchRoute, getApiTransportSinchRouteHandler)
  .openapi(postApiTransportSinchRoute, postApiTransportSinchRouteHandler)
  .openapi(deleteApiTransportSinchIdRoute, deleteApiTransportSinchIdRouteHandler)
  .openapi(getApiTransportSinchIdRoute, getApiTransportSinchIdRouteHandler)
  .openapi(putApiTransportSinchIdRoute, putApiTransportSinchIdRouteHandler)
  .openapi(getApiTransportSlackRoute, getApiTransportSlackRouteHandler)
  .openapi(postApiTransportSlackRoute, postApiTransportSlackRouteHandler)
  .openapi(deleteApiTransportSlackIdRoute, deleteApiTransportSlackIdRouteHandler)
  .openapi(getApiTransportSlackIdRoute, getApiTransportSlackIdRouteHandler)
  .openapi(putApiTransportSlackIdRoute, putApiTransportSlackIdRouteHandler)
  .openapi(getApiTransportSmsBiurasRoute, getApiTransportSmsBiurasRouteHandler)
  .openapi(postApiTransportSmsBiurasRoute, postApiTransportSmsBiurasRouteHandler)
  .openapi(deleteApiTransportSmsBiurasIdRoute, deleteApiTransportSmsBiurasIdRouteHandler)
  .openapi(getApiTransportSmsBiurasIdRoute, getApiTransportSmsBiurasIdRouteHandler)
  .openapi(putApiTransportSmsBiurasIdRoute, putApiTransportSmsBiurasIdRouteHandler)
  .openapi(getApiTransportSmsFactorRoute, getApiTransportSmsFactorRouteHandler)
  .openapi(postApiTransportSmsFactorRoute, postApiTransportSmsFactorRouteHandler)
  .openapi(deleteApiTransportSmsFactorIdRoute, deleteApiTransportSmsFactorIdRouteHandler)
  .openapi(getApiTransportSmsFactorIdRoute, getApiTransportSmsFactorIdRouteHandler)
  .openapi(putApiTransportSmsFactorIdRoute, putApiTransportSmsFactorIdRouteHandler)
  .openapi(getApiTransportSms77Route, getApiTransportSms77RouteHandler)
  .openapi(postApiTransportSms77Route, postApiTransportSms77RouteHandler)
  .openapi(deleteApiTransportSms77IdRoute, deleteApiTransportSms77IdRouteHandler)
  .openapi(getApiTransportSms77IdRoute, getApiTransportSms77IdRouteHandler)
  .openapi(putApiTransportSms77IdRoute, putApiTransportSms77IdRouteHandler)
  .openapi(getApiTransportSmsapiRoute, getApiTransportSmsapiRouteHandler)
  .openapi(postApiTransportSmsapiRoute, postApiTransportSmsapiRouteHandler)
  .openapi(deleteApiTransportSmsapiIdRoute, deleteApiTransportSmsapiIdRouteHandler)
  .openapi(getApiTransportSmsapiIdRoute, getApiTransportSmsapiIdRouteHandler)
  .openapi(putApiTransportSmsapiIdRoute, putApiTransportSmsapiIdRouteHandler)
  .openapi(getApiTransportSmscRoute, getApiTransportSmscRouteHandler)
  .openapi(postApiTransportSmscRoute, postApiTransportSmscRouteHandler)
  .openapi(deleteApiTransportSmscIdRoute, deleteApiTransportSmscIdRouteHandler)
  .openapi(getApiTransportSmscIdRoute, getApiTransportSmscIdRouteHandler)
  .openapi(putApiTransportSmscIdRoute, putApiTransportSmscIdRouteHandler)
  .openapi(getApiTransportSmsmodeRoute, getApiTransportSmsmodeRouteHandler)
  .openapi(postApiTransportSmsmodeRoute, postApiTransportSmsmodeRouteHandler)
  .openapi(deleteApiTransportSmsmodeIdRoute, deleteApiTransportSmsmodeIdRouteHandler)
  .openapi(getApiTransportSmsmodeIdRoute, getApiTransportSmsmodeIdRouteHandler)
  .openapi(putApiTransportSmsmodeIdRoute, putApiTransportSmsmodeIdRouteHandler)
  .openapi(getApiTransportSpotHitRoute, getApiTransportSpotHitRouteHandler)
  .openapi(postApiTransportSpotHitRoute, postApiTransportSpotHitRouteHandler)
  .openapi(deleteApiTransportSpotHitIdRoute, deleteApiTransportSpotHitIdRouteHandler)
  .openapi(getApiTransportSpotHitIdRoute, getApiTransportSpotHitIdRouteHandler)
  .openapi(putApiTransportSpotHitIdRoute, putApiTransportSpotHitIdRouteHandler)
  .openapi(getApiTransportTelegramRoute, getApiTransportTelegramRouteHandler)
  .openapi(postApiTransportTelegramRoute, postApiTransportTelegramRouteHandler)
  .openapi(deleteApiTransportTelegramIdRoute, deleteApiTransportTelegramIdRouteHandler)
  .openapi(getApiTransportTelegramIdRoute, getApiTransportTelegramIdRouteHandler)
  .openapi(putApiTransportTelegramIdRoute, putApiTransportTelegramIdRouteHandler)
  .openapi(getApiTransportTelnyxRoute, getApiTransportTelnyxRouteHandler)
  .openapi(postApiTransportTelnyxRoute, postApiTransportTelnyxRouteHandler)
  .openapi(deleteApiTransportTelnyxIdRoute, deleteApiTransportTelnyxIdRouteHandler)
  .openapi(getApiTransportTelnyxIdRoute, getApiTransportTelnyxIdRouteHandler)
  .openapi(putApiTransportTelnyxIdRoute, putApiTransportTelnyxIdRouteHandler)
  .openapi(getApiTransportTermiiRoute, getApiTransportTermiiRouteHandler)
  .openapi(postApiTransportTermiiRoute, postApiTransportTermiiRouteHandler)
  .openapi(deleteApiTransportTermiiIdRoute, deleteApiTransportTermiiIdRouteHandler)
  .openapi(getApiTransportTermiiIdRoute, getApiTransportTermiiIdRouteHandler)
  .openapi(putApiTransportTermiiIdRoute, putApiTransportTermiiIdRouteHandler)
  .openapi(getApiTransportTrelloRoute, getApiTransportTrelloRouteHandler)
  .openapi(postApiTransportTrelloRoute, postApiTransportTrelloRouteHandler)
  .openapi(deleteApiTransportTrelloIdRoute, deleteApiTransportTrelloIdRouteHandler)
  .openapi(getApiTransportTrelloIdRoute, getApiTransportTrelloIdRouteHandler)
  .openapi(putApiTransportTrelloIdRoute, putApiTransportTrelloIdRouteHandler)
  .openapi(getApiTransportTurboSmsRoute, getApiTransportTurboSmsRouteHandler)
  .openapi(postApiTransportTurboSmsRoute, postApiTransportTurboSmsRouteHandler)
  .openapi(deleteApiTransportTurboSmsIdRoute, deleteApiTransportTurboSmsIdRouteHandler)
  .openapi(getApiTransportTurboSmsIdRoute, getApiTransportTurboSmsIdRouteHandler)
  .openapi(putApiTransportTurboSmsIdRoute, putApiTransportTurboSmsIdRouteHandler)
  .openapi(getApiTransportTwilioRoute, getApiTransportTwilioRouteHandler)
  .openapi(postApiTransportTwilioRoute, postApiTransportTwilioRouteHandler)
  .openapi(deleteApiTransportTwilioIdRoute, deleteApiTransportTwilioIdRouteHandler)
  .openapi(getApiTransportTwilioIdRoute, getApiTransportTwilioIdRouteHandler)
  .openapi(putApiTransportTwilioIdRoute, putApiTransportTwilioIdRouteHandler)
  .openapi(getApiTransportTwitterRoute, getApiTransportTwitterRouteHandler)
  .openapi(postApiTransportTwitterRoute, postApiTransportTwitterRouteHandler)
  .openapi(deleteApiTransportTwitterIdRoute, deleteApiTransportTwitterIdRouteHandler)
  .openapi(getApiTransportTwitterIdRoute, getApiTransportTwitterIdRouteHandler)
  .openapi(putApiTransportTwitterIdRoute, putApiTransportTwitterIdRouteHandler)
  .openapi(getApiTransportVonageRoute, getApiTransportVonageRouteHandler)
  .openapi(postApiTransportVonageRoute, postApiTransportVonageRouteHandler)
  .openapi(deleteApiTransportVonageIdRoute, deleteApiTransportVonageIdRouteHandler)
  .openapi(getApiTransportVonageIdRoute, getApiTransportVonageIdRouteHandler)
  .openapi(putApiTransportVonageIdRoute, putApiTransportVonageIdRouteHandler)
  .openapi(getApiTransportWebhookRoute, getApiTransportWebhookRouteHandler)
  .openapi(postApiTransportWebhookRoute, postApiTransportWebhookRouteHandler)
  .openapi(deleteApiTransportWebhookIdRoute, deleteApiTransportWebhookIdRouteHandler)
  .openapi(getApiTransportWebhookIdRoute, getApiTransportWebhookIdRouteHandler)
  .openapi(putApiTransportWebhookIdRoute, putApiTransportWebhookIdRouteHandler)
  .openapi(getApiTransportYunpianRoute, getApiTransportYunpianRouteHandler)
  .openapi(postApiTransportYunpianRoute, postApiTransportYunpianRouteHandler)
  .openapi(deleteApiTransportYunpianIdRoute, deleteApiTransportYunpianIdRouteHandler)
  .openapi(getApiTransportYunpianIdRoute, getApiTransportYunpianIdRouteHandler)
  .openapi(putApiTransportYunpianIdRoute, putApiTransportYunpianIdRouteHandler)
  .openapi(getApiTransportZendeskRoute, getApiTransportZendeskRouteHandler)
  .openapi(postApiTransportZendeskRoute, postApiTransportZendeskRouteHandler)
  .openapi(deleteApiTransportZendeskIdRoute, deleteApiTransportZendeskIdRouteHandler)
  .openapi(getApiTransportZendeskIdRoute, getApiTransportZendeskIdRouteHandler)
  .openapi(putApiTransportZendeskIdRoute, putApiTransportZendeskIdRouteHandler)
  .openapi(getApiTransportZulipRoute, getApiTransportZulipRouteHandler)
  .openapi(postApiTransportZulipRoute, postApiTransportZulipRouteHandler)
  .openapi(deleteApiTransportZulipIdRoute, deleteApiTransportZulipIdRouteHandler)
  .openapi(getApiTransportZulipIdRoute, getApiTransportZulipIdRouteHandler)
  .openapi(putApiTransportZulipIdRoute, putApiTransportZulipIdRouteHandler)
  .openapi(getApiUserAccountRoute, getApiUserAccountRouteHandler)
  .openapi(getApiUserAccountLevelCodeRoute, getApiUserAccountLevelCodeRouteHandler)
  .openapi(getApiUserAccountLevelCodeIdRoute, getApiUserAccountLevelCodeIdRouteHandler)
  .openapi(getApiUserAccountIdRoute, getApiUserAccountIdRouteHandler)
  .openapi(putApiUserAccountIdRoute, putApiUserAccountIdRouteHandler)

export default app
