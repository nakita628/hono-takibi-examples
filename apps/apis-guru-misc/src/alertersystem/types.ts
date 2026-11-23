type AlertLogGet = {
  alertLogErrorMessage?: (string | null) | undefined
  alertLogMessageId?: (string | null) | undefined
  alertLogStatusCode?: string | undefined
  alertService?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  monitor?: string | undefined
  partition?: string | undefined
  ping?: (string | null) | undefined
  resourceOwner?: (string | null) | undefined
  webhookResponseBody?: (string | null) | undefined
  webhookResponseHeaders?: (string[] | null) | undefined
}
type AlertLogJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  alertLogErrorMessage?: (string | null) | undefined
  alertLogMessageId?: (string | null) | undefined
  alertLogStatusCode?: string | undefined
  alertService?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  monitor?: string | undefined
  partition?: string | undefined
  ping?: (string | null) | undefined
  resourceOwner?: (string | null) | undefined
  webhookResponseBody?: (string | null) | undefined
  webhookResponseHeaders?: (string[] | null) | undefined
}
type AlertLogStatusCodeGet = { id?: string | undefined }
type AlertLogStatusCodeJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  id?: string | undefined
}
type AlertServiceGet = {
  alertServiceName: string | null
  alertServiceNotes?: (string | null) | undefined
  alertServiceTransportCode: string | null
  createdAt?: string | undefined
  creditsPerTransportAlert?: number | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  mediaObjects?: string[] | undefined
  partition: string
  recipientEmailAddress: string | null
  recipientPhoneNumber: string | null
  resourceOwner?: (string | null) | undefined
  transportAlerta?: (string | null) | undefined
  transportAllMySms?: (string | null) | undefined
  transportAmazonSns?: (string | null) | undefined
  transportBandwidth?: (string | null) | undefined
  transportChatwork?: (string | null) | undefined
  transportClickSend?: (string | null) | undefined
  transportClickatell?: (string | null) | undefined
  transportContactEveryone?: (string | null) | undefined
  transportDiscord?: (string | null) | undefined
  transportEmail?: (string | null) | undefined
  transportEngagespot?: (string | null) | undefined
  transportEsendex?: (string | null) | undefined
  transportExpo?: (string | null) | undefined
  transportFirebase?: (string | null) | undefined
  transportFortySixElks?: (string | null) | undefined
  transportFreeMobile?: (string | null) | undefined
  transportFreshdesk?: (string | null) | undefined
  transportGatewayApi?: (string | null) | undefined
  transportGitter?: (string | null) | undefined
  transportGoogleChat?: (string | null) | undefined
  transportGotify?: (string | null) | undefined
  transportHelpScout?: (string | null) | undefined
  transportInfobip?: (string | null) | undefined
  transportIqsms?: (string | null) | undefined
  transportKazInfoTeh?: (string | null) | undefined
  transportLightSms?: (string | null) | undefined
  transportLineNotify?: (string | null) | undefined
  transportLinkedIn?: (string | null) | undefined
  transportMailjet?: (string | null) | undefined
  transportMastodon?: (string | null) | undefined
  transportMattermost?: (string | null) | undefined
  transportMercure?: (string | null) | undefined
  transportMessageBird?: (string | null) | undefined
  transportMessageMedia?: (string | null) | undefined
  transportMicrosoftTeams?: (string | null) | undefined
  transportMobyt?: (string | null) | undefined
  transportOctopush?: (string | null) | undefined
  transportOneSignal?: (string | null) | undefined
  transportOpsgenie?: (string | null) | undefined
  transportOrangeSms?: (string | null) | undefined
  transportOvhCloud?: (string | null) | undefined
  transportPagerDuty?: (string | null) | undefined
  transportPagerTree?: (string | null) | undefined
  transportPlivo?: (string | null) | undefined
  transportPushbullet?: (string | null) | undefined
  transportPushover?: (string | null) | undefined
  transportPushy?: (string | null) | undefined
  transportRingCentral?: (string | null) | undefined
  transportRocketChat?: (string | null) | undefined
  transportSendberry?: (string | null) | undefined
  transportSendinblue?: (string | null) | undefined
  transportSimpleTextin?: (string | null) | undefined
  transportSinch?: (string | null) | undefined
  transportSlack?: (string | null) | undefined
  transportSms77?: (string | null) | undefined
  transportSmsBiuras?: (string | null) | undefined
  transportSmsFactor?: (string | null) | undefined
  transportSmsapi?: (string | null) | undefined
  transportSmsc?: (string | null) | undefined
  transportSmsmode?: (string | null) | undefined
  transportSpotHit?: (string | null) | undefined
  transportTelegram?: (string | null) | undefined
  transportTelnyx?: (string | null) | undefined
  transportTermii?: (string | null) | undefined
  transportTrello?: (string | null) | undefined
  transportTurboSms?: (string | null) | undefined
  transportTwilio?: (string | null) | undefined
  transportTwitter?: (string | null) | undefined
  transportVonage?: (string | null) | undefined
  transportWebhook?: (string | null) | undefined
  transportYunpian?: (string | null) | undefined
  transportZendesk?: (string | null) | undefined
  transportZulip?: (string | null) | undefined
}
type AlertServiceJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  alertServiceName: string | null
  alertServiceNotes?: (string | null) | undefined
  alertServiceTransportCode: string | null
  createdAt?: string | undefined
  creditsPerTransportAlert?: number | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  mediaObjects?: string[] | undefined
  partition: string
  recipientEmailAddress: string | null
  recipientPhoneNumber: string | null
  resourceOwner?: (string | null) | undefined
  transportAlerta?: (string | null) | undefined
  transportAllMySms?: (string | null) | undefined
  transportAmazonSns?: (string | null) | undefined
  transportBandwidth?: (string | null) | undefined
  transportChatwork?: (string | null) | undefined
  transportClickSend?: (string | null) | undefined
  transportClickatell?: (string | null) | undefined
  transportContactEveryone?: (string | null) | undefined
  transportDiscord?: (string | null) | undefined
  transportEmail?: (string | null) | undefined
  transportEngagespot?: (string | null) | undefined
  transportEsendex?: (string | null) | undefined
  transportExpo?: (string | null) | undefined
  transportFirebase?: (string | null) | undefined
  transportFortySixElks?: (string | null) | undefined
  transportFreeMobile?: (string | null) | undefined
  transportFreshdesk?: (string | null) | undefined
  transportGatewayApi?: (string | null) | undefined
  transportGitter?: (string | null) | undefined
  transportGoogleChat?: (string | null) | undefined
  transportGotify?: (string | null) | undefined
  transportHelpScout?: (string | null) | undefined
  transportInfobip?: (string | null) | undefined
  transportIqsms?: (string | null) | undefined
  transportKazInfoTeh?: (string | null) | undefined
  transportLightSms?: (string | null) | undefined
  transportLineNotify?: (string | null) | undefined
  transportLinkedIn?: (string | null) | undefined
  transportMailjet?: (string | null) | undefined
  transportMastodon?: (string | null) | undefined
  transportMattermost?: (string | null) | undefined
  transportMercure?: (string | null) | undefined
  transportMessageBird?: (string | null) | undefined
  transportMessageMedia?: (string | null) | undefined
  transportMicrosoftTeams?: (string | null) | undefined
  transportMobyt?: (string | null) | undefined
  transportOctopush?: (string | null) | undefined
  transportOneSignal?: (string | null) | undefined
  transportOpsgenie?: (string | null) | undefined
  transportOrangeSms?: (string | null) | undefined
  transportOvhCloud?: (string | null) | undefined
  transportPagerDuty?: (string | null) | undefined
  transportPagerTree?: (string | null) | undefined
  transportPlivo?: (string | null) | undefined
  transportPushbullet?: (string | null) | undefined
  transportPushover?: (string | null) | undefined
  transportPushy?: (string | null) | undefined
  transportRingCentral?: (string | null) | undefined
  transportRocketChat?: (string | null) | undefined
  transportSendberry?: (string | null) | undefined
  transportSendinblue?: (string | null) | undefined
  transportSimpleTextin?: (string | null) | undefined
  transportSinch?: (string | null) | undefined
  transportSlack?: (string | null) | undefined
  transportSms77?: (string | null) | undefined
  transportSmsBiuras?: (string | null) | undefined
  transportSmsFactor?: (string | null) | undefined
  transportSmsapi?: (string | null) | undefined
  transportSmsc?: (string | null) | undefined
  transportSmsmode?: (string | null) | undefined
  transportSpotHit?: (string | null) | undefined
  transportTelegram?: (string | null) | undefined
  transportTelnyx?: (string | null) | undefined
  transportTermii?: (string | null) | undefined
  transportTrello?: (string | null) | undefined
  transportTurboSms?: (string | null) | undefined
  transportTwilio?: (string | null) | undefined
  transportTwitter?: (string | null) | undefined
  transportVonage?: (string | null) | undefined
  transportWebhook?: (string | null) | undefined
  transportYunpian?: (string | null) | undefined
  transportZendesk?: (string | null) | undefined
  transportZulip?: (string | null) | undefined
}
type AlertServicePost = {
  alertServiceName: string | null
  alertServiceNotes?: (string | null) | undefined
  alertServiceTransportCode: string | null
  dataSegmentCode?: (string | null) | undefined
  mediaObjects?: string[] | undefined
  partition: string
  recipientEmailAddress: string | null
  recipientPhoneNumber: string | null
  transportAlerta?: (string | null) | undefined
  transportAllMySms?: (string | null) | undefined
  transportAmazonSns?: (string | null) | undefined
  transportBandwidth?: (string | null) | undefined
  transportChatwork?: (string | null) | undefined
  transportClickSend?: (string | null) | undefined
  transportClickatell?: (string | null) | undefined
  transportContactEveryone?: (string | null) | undefined
  transportDiscord?: (string | null) | undefined
  transportEmail?: (string | null) | undefined
  transportEngagespot?: (string | null) | undefined
  transportEsendex?: (string | null) | undefined
  transportExpo?: (string | null) | undefined
  transportFirebase?: (string | null) | undefined
  transportFortySixElks?: (string | null) | undefined
  transportFreeMobile?: (string | null) | undefined
  transportFreshdesk?: (string | null) | undefined
  transportGatewayApi?: (string | null) | undefined
  transportGitter?: (string | null) | undefined
  transportGoogleChat?: (string | null) | undefined
  transportGotify?: (string | null) | undefined
  transportHelpScout?: (string | null) | undefined
  transportInfobip?: (string | null) | undefined
  transportIqsms?: (string | null) | undefined
  transportKazInfoTeh?: (string | null) | undefined
  transportLightSms?: (string | null) | undefined
  transportLineNotify?: (string | null) | undefined
  transportLinkedIn?: (string | null) | undefined
  transportMailjet?: (string | null) | undefined
  transportMastodon?: (string | null) | undefined
  transportMattermost?: (string | null) | undefined
  transportMercure?: (string | null) | undefined
  transportMessageBird?: (string | null) | undefined
  transportMessageMedia?: (string | null) | undefined
  transportMicrosoftTeams?: (string | null) | undefined
  transportMobyt?: (string | null) | undefined
  transportOctopush?: (string | null) | undefined
  transportOneSignal?: (string | null) | undefined
  transportOpsgenie?: (string | null) | undefined
  transportOrangeSms?: (string | null) | undefined
  transportOvhCloud?: (string | null) | undefined
  transportPagerDuty?: (string | null) | undefined
  transportPagerTree?: (string | null) | undefined
  transportPlivo?: (string | null) | undefined
  transportPushbullet?: (string | null) | undefined
  transportPushover?: (string | null) | undefined
  transportPushy?: (string | null) | undefined
  transportRingCentral?: (string | null) | undefined
  transportRocketChat?: (string | null) | undefined
  transportSendberry?: (string | null) | undefined
  transportSendinblue?: (string | null) | undefined
  transportSimpleTextin?: (string | null) | undefined
  transportSinch?: (string | null) | undefined
  transportSlack?: (string | null) | undefined
  transportSms77?: (string | null) | undefined
  transportSmsBiuras?: (string | null) | undefined
  transportSmsFactor?: (string | null) | undefined
  transportSmsapi?: (string | null) | undefined
  transportSmsc?: (string | null) | undefined
  transportSmsmode?: (string | null) | undefined
  transportSpotHit?: (string | null) | undefined
  transportTelegram?: (string | null) | undefined
  transportTelnyx?: (string | null) | undefined
  transportTermii?: (string | null) | undefined
  transportTrello?: (string | null) | undefined
  transportTurboSms?: (string | null) | undefined
  transportTwilio?: (string | null) | undefined
  transportTwitter?: (string | null) | undefined
  transportVonage?: (string | null) | undefined
  transportWebhook?: (string | null) | undefined
  transportYunpian?: (string | null) | undefined
  transportZendesk?: (string | null) | undefined
  transportZulip?: (string | null) | undefined
}
type AlertServiceJsonldPost = {
  alertServiceName: string | null
  alertServiceNotes?: (string | null) | undefined
  alertServiceTransportCode: string | null
  dataSegmentCode?: (string | null) | undefined
  mediaObjects?: string[] | undefined
  partition: string
  recipientEmailAddress: string | null
  recipientPhoneNumber: string | null
  transportAlerta?: (string | null) | undefined
  transportAllMySms?: (string | null) | undefined
  transportAmazonSns?: (string | null) | undefined
  transportBandwidth?: (string | null) | undefined
  transportChatwork?: (string | null) | undefined
  transportClickSend?: (string | null) | undefined
  transportClickatell?: (string | null) | undefined
  transportContactEveryone?: (string | null) | undefined
  transportDiscord?: (string | null) | undefined
  transportEmail?: (string | null) | undefined
  transportEngagespot?: (string | null) | undefined
  transportEsendex?: (string | null) | undefined
  transportExpo?: (string | null) | undefined
  transportFirebase?: (string | null) | undefined
  transportFortySixElks?: (string | null) | undefined
  transportFreeMobile?: (string | null) | undefined
  transportFreshdesk?: (string | null) | undefined
  transportGatewayApi?: (string | null) | undefined
  transportGitter?: (string | null) | undefined
  transportGoogleChat?: (string | null) | undefined
  transportGotify?: (string | null) | undefined
  transportHelpScout?: (string | null) | undefined
  transportInfobip?: (string | null) | undefined
  transportIqsms?: (string | null) | undefined
  transportKazInfoTeh?: (string | null) | undefined
  transportLightSms?: (string | null) | undefined
  transportLineNotify?: (string | null) | undefined
  transportLinkedIn?: (string | null) | undefined
  transportMailjet?: (string | null) | undefined
  transportMastodon?: (string | null) | undefined
  transportMattermost?: (string | null) | undefined
  transportMercure?: (string | null) | undefined
  transportMessageBird?: (string | null) | undefined
  transportMessageMedia?: (string | null) | undefined
  transportMicrosoftTeams?: (string | null) | undefined
  transportMobyt?: (string | null) | undefined
  transportOctopush?: (string | null) | undefined
  transportOneSignal?: (string | null) | undefined
  transportOpsgenie?: (string | null) | undefined
  transportOrangeSms?: (string | null) | undefined
  transportOvhCloud?: (string | null) | undefined
  transportPagerDuty?: (string | null) | undefined
  transportPagerTree?: (string | null) | undefined
  transportPlivo?: (string | null) | undefined
  transportPushbullet?: (string | null) | undefined
  transportPushover?: (string | null) | undefined
  transportPushy?: (string | null) | undefined
  transportRingCentral?: (string | null) | undefined
  transportRocketChat?: (string | null) | undefined
  transportSendberry?: (string | null) | undefined
  transportSendinblue?: (string | null) | undefined
  transportSimpleTextin?: (string | null) | undefined
  transportSinch?: (string | null) | undefined
  transportSlack?: (string | null) | undefined
  transportSms77?: (string | null) | undefined
  transportSmsBiuras?: (string | null) | undefined
  transportSmsFactor?: (string | null) | undefined
  transportSmsapi?: (string | null) | undefined
  transportSmsc?: (string | null) | undefined
  transportSmsmode?: (string | null) | undefined
  transportSpotHit?: (string | null) | undefined
  transportTelegram?: (string | null) | undefined
  transportTelnyx?: (string | null) | undefined
  transportTermii?: (string | null) | undefined
  transportTrello?: (string | null) | undefined
  transportTurboSms?: (string | null) | undefined
  transportTwilio?: (string | null) | undefined
  transportTwitter?: (string | null) | undefined
  transportVonage?: (string | null) | undefined
  transportWebhook?: (string | null) | undefined
  transportYunpian?: (string | null) | undefined
  transportZendesk?: (string | null) | undefined
  transportZulip?: (string | null) | undefined
}
type AlertServiceTransportCodeGet = { codeName?: string | undefined; id?: string | undefined }
type AlertServiceTransportCodeJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  codeName?: string | undefined
  id?: string | undefined
}
type AlertServicePut = {
  alertServiceName: string | null
  alertServiceNotes?: (string | null) | undefined
  dataSegmentCode?: (string | null) | undefined
  mediaObjects?: string[] | undefined
  recipientEmailAddress: string | null
  recipientPhoneNumber: string | null
  transportAlerta?: (string | null) | undefined
  transportAllMySms?: (string | null) | undefined
  transportAmazonSns?: (string | null) | undefined
  transportBandwidth?: (string | null) | undefined
  transportChatwork?: (string | null) | undefined
  transportClickSend?: (string | null) | undefined
  transportClickatell?: (string | null) | undefined
  transportContactEveryone?: (string | null) | undefined
  transportDiscord?: (string | null) | undefined
  transportEmail?: (string | null) | undefined
  transportEngagespot?: (string | null) | undefined
  transportEsendex?: (string | null) | undefined
  transportExpo?: (string | null) | undefined
  transportFirebase?: (string | null) | undefined
  transportFortySixElks?: (string | null) | undefined
  transportFreeMobile?: (string | null) | undefined
  transportFreshdesk?: (string | null) | undefined
  transportGatewayApi?: (string | null) | undefined
  transportGitter?: (string | null) | undefined
  transportGoogleChat?: (string | null) | undefined
  transportGotify?: (string | null) | undefined
  transportHelpScout?: (string | null) | undefined
  transportInfobip?: (string | null) | undefined
  transportIqsms?: (string | null) | undefined
  transportKazInfoTeh?: (string | null) | undefined
  transportLightSms?: (string | null) | undefined
  transportLineNotify?: (string | null) | undefined
  transportLinkedIn?: (string | null) | undefined
  transportMailjet?: (string | null) | undefined
  transportMastodon?: (string | null) | undefined
  transportMattermost?: (string | null) | undefined
  transportMercure?: (string | null) | undefined
  transportMessageBird?: (string | null) | undefined
  transportMessageMedia?: (string | null) | undefined
  transportMicrosoftTeams?: (string | null) | undefined
  transportMobyt?: (string | null) | undefined
  transportOctopush?: (string | null) | undefined
  transportOneSignal?: (string | null) | undefined
  transportOpsgenie?: (string | null) | undefined
  transportOrangeSms?: (string | null) | undefined
  transportOvhCloud?: (string | null) | undefined
  transportPagerDuty?: (string | null) | undefined
  transportPagerTree?: (string | null) | undefined
  transportPlivo?: (string | null) | undefined
  transportPushbullet?: (string | null) | undefined
  transportPushover?: (string | null) | undefined
  transportPushy?: (string | null) | undefined
  transportRingCentral?: (string | null) | undefined
  transportRocketChat?: (string | null) | undefined
  transportSendberry?: (string | null) | undefined
  transportSendinblue?: (string | null) | undefined
  transportSimpleTextin?: (string | null) | undefined
  transportSinch?: (string | null) | undefined
  transportSlack?: (string | null) | undefined
  transportSms77?: (string | null) | undefined
  transportSmsBiuras?: (string | null) | undefined
  transportSmsFactor?: (string | null) | undefined
  transportSmsapi?: (string | null) | undefined
  transportSmsc?: (string | null) | undefined
  transportSmsmode?: (string | null) | undefined
  transportSpotHit?: (string | null) | undefined
  transportTelegram?: (string | null) | undefined
  transportTelnyx?: (string | null) | undefined
  transportTermii?: (string | null) | undefined
  transportTrello?: (string | null) | undefined
  transportTurboSms?: (string | null) | undefined
  transportTwilio?: (string | null) | undefined
  transportTwitter?: (string | null) | undefined
  transportVonage?: (string | null) | undefined
  transportWebhook?: (string | null) | undefined
  transportYunpian?: (string | null) | undefined
  transportZendesk?: (string | null) | undefined
  transportZulip?: (string | null) | undefined
}
type AlertServiceJsonldPut = {
  alertServiceName: string | null
  alertServiceNotes?: (string | null) | undefined
  dataSegmentCode?: (string | null) | undefined
  mediaObjects?: string[] | undefined
  recipientEmailAddress: string | null
  recipientPhoneNumber: string | null
  transportAlerta?: (string | null) | undefined
  transportAllMySms?: (string | null) | undefined
  transportAmazonSns?: (string | null) | undefined
  transportBandwidth?: (string | null) | undefined
  transportChatwork?: (string | null) | undefined
  transportClickSend?: (string | null) | undefined
  transportClickatell?: (string | null) | undefined
  transportContactEveryone?: (string | null) | undefined
  transportDiscord?: (string | null) | undefined
  transportEmail?: (string | null) | undefined
  transportEngagespot?: (string | null) | undefined
  transportEsendex?: (string | null) | undefined
  transportExpo?: (string | null) | undefined
  transportFirebase?: (string | null) | undefined
  transportFortySixElks?: (string | null) | undefined
  transportFreeMobile?: (string | null) | undefined
  transportFreshdesk?: (string | null) | undefined
  transportGatewayApi?: (string | null) | undefined
  transportGitter?: (string | null) | undefined
  transportGoogleChat?: (string | null) | undefined
  transportGotify?: (string | null) | undefined
  transportHelpScout?: (string | null) | undefined
  transportInfobip?: (string | null) | undefined
  transportIqsms?: (string | null) | undefined
  transportKazInfoTeh?: (string | null) | undefined
  transportLightSms?: (string | null) | undefined
  transportLineNotify?: (string | null) | undefined
  transportLinkedIn?: (string | null) | undefined
  transportMailjet?: (string | null) | undefined
  transportMastodon?: (string | null) | undefined
  transportMattermost?: (string | null) | undefined
  transportMercure?: (string | null) | undefined
  transportMessageBird?: (string | null) | undefined
  transportMessageMedia?: (string | null) | undefined
  transportMicrosoftTeams?: (string | null) | undefined
  transportMobyt?: (string | null) | undefined
  transportOctopush?: (string | null) | undefined
  transportOneSignal?: (string | null) | undefined
  transportOpsgenie?: (string | null) | undefined
  transportOrangeSms?: (string | null) | undefined
  transportOvhCloud?: (string | null) | undefined
  transportPagerDuty?: (string | null) | undefined
  transportPagerTree?: (string | null) | undefined
  transportPlivo?: (string | null) | undefined
  transportPushbullet?: (string | null) | undefined
  transportPushover?: (string | null) | undefined
  transportPushy?: (string | null) | undefined
  transportRingCentral?: (string | null) | undefined
  transportRocketChat?: (string | null) | undefined
  transportSendberry?: (string | null) | undefined
  transportSendinblue?: (string | null) | undefined
  transportSimpleTextin?: (string | null) | undefined
  transportSinch?: (string | null) | undefined
  transportSlack?: (string | null) | undefined
  transportSms77?: (string | null) | undefined
  transportSmsBiuras?: (string | null) | undefined
  transportSmsFactor?: (string | null) | undefined
  transportSmsapi?: (string | null) | undefined
  transportSmsc?: (string | null) | undefined
  transportSmsmode?: (string | null) | undefined
  transportSpotHit?: (string | null) | undefined
  transportTelegram?: (string | null) | undefined
  transportTelnyx?: (string | null) | undefined
  transportTermii?: (string | null) | undefined
  transportTrello?: (string | null) | undefined
  transportTurboSms?: (string | null) | undefined
  transportTwilio?: (string | null) | undefined
  transportTwitter?: (string | null) | undefined
  transportVonage?: (string | null) | undefined
  transportWebhook?: (string | null) | undefined
  transportYunpian?: (string | null) | undefined
  transportZendesk?: (string | null) | undefined
  transportZulip?: (string | null) | undefined
}
type CreditsConsumptionGet = {
  createdAt?: (string | null) | undefined
  creditsConsumptionEventCode?: (string | null) | undefined
  creditsConsumptionNotes?: (string | null) | undefined
  creditsEventId?: (string | null) | undefined
  creditsEventIri?: (string | null) | undefined
  creditsUsed?: (string | null) | undefined
  id?: (string | null) | undefined
}
type CreditsConsumptionJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: (string | null) | undefined
  creditsConsumptionEventCode?: (string | null) | undefined
  creditsConsumptionNotes?: (string | null) | undefined
  creditsEventId?: (string | null) | undefined
  creditsEventIri?: (string | null) | undefined
  creditsUsed?: (string | null) | undefined
  id?: (string | null) | undefined
}
type HttpMethodCodeGet = { codeName?: string | undefined; id?: (string | null) | undefined }
type HttpMethodCodeJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  codeName?: string | undefined
  id?: (string | null) | undefined
}
type MediaObjectGet = {
  contentUrl?: (string | null) | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  fileSize?: (number | null) | undefined
  id?: (string | null) | undefined
  keywords?: (string | null) | undefined
  mimeType?: (string | null) | undefined
  originalName?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
}
type MediaObjectJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  contentUrl?: (string | null) | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  fileSize?: (number | null) | undefined
  id?: (string | null) | undefined
  keywords?: (string | null) | undefined
  mimeType?: (string | null) | undefined
  originalName?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
}
type MonitorGet = {
  alertPayloadExtended?: (string | null) | undefined
  alertPayloadShort?: (string | null) | undefined
  alertServices?: string[] | undefined
  allowUnauthenticatedPings?: boolean | undefined
  contentCheckMustNotExist?: boolean | undefined
  contentCheckText?: (string | null) | undefined
  contentCheckUrl?: (string | null) | undefined
  contentCheckXpathFilter?: (string | null) | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  graceSeconds?: (number | null) | undefined
  humanizedInterval?: (string | null) | undefined
  id?: (string | null) | undefined
  internalMonitorName?: string | undefined
  intervalDays?: (number | null) | undefined
  intervalHours?: (number | null) | undefined
  intervalMinutes?: (number | null) | undefined
  intervalMonths?: (number | null) | undefined
  intervalSeconds?: (number | null) | undefined
  intervalYears?: (number | null) | undefined
  isMonitorPaused?: boolean | undefined
  lastPingAt?: (string | null) | undefined
  monitorName: string | null
  monitorNotes?: (string | null) | undefined
  monitorStatusCode?: string | undefined
  monitorTypeCode: string | null
  nextPingAt?: (string | null) | undefined
  partition: string
  pingSecret?: string | undefined
  publicDescription?: (string | null) | undefined
  resourceOwner?: (string | null) | undefined
  startMonitorAt?: (string | null) | undefined
  startMonitorAtUtc?: (string | null) | undefined
  systemMessages?: string[] | undefined
  timezoneCode: string
  webResponseSecondsLimit?: (number | null) | undefined
  webResponseUrl?: (string | null) | undefined
}
type MonitorJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  alertPayloadExtended?: (string | null) | undefined
  alertPayloadShort?: (string | null) | undefined
  alertServices?: string[] | undefined
  allowUnauthenticatedPings?: boolean | undefined
  contentCheckMustNotExist?: boolean | undefined
  contentCheckText?: (string | null) | undefined
  contentCheckUrl?: (string | null) | undefined
  contentCheckXpathFilter?: (string | null) | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  graceSeconds?: (number | null) | undefined
  humanizedInterval?: (string | null) | undefined
  id?: (string | null) | undefined
  internalMonitorName?: string | undefined
  intervalDays?: (number | null) | undefined
  intervalHours?: (number | null) | undefined
  intervalMinutes?: (number | null) | undefined
  intervalMonths?: (number | null) | undefined
  intervalSeconds?: (number | null) | undefined
  intervalYears?: (number | null) | undefined
  isMonitorPaused?: boolean | undefined
  lastPingAt?: (string | null) | undefined
  monitorName: string | null
  monitorNotes?: (string | null) | undefined
  monitorStatusCode?: string | undefined
  monitorTypeCode: string | null
  nextPingAt?: (string | null) | undefined
  partition: string
  pingSecret?: string | undefined
  publicDescription?: (string | null) | undefined
  resourceOwner?: (string | null) | undefined
  startMonitorAt?: (string | null) | undefined
  startMonitorAtUtc?: (string | null) | undefined
  systemMessages?: string[] | undefined
  timezoneCode: string
  webResponseSecondsLimit?: (number | null) | undefined
  webResponseUrl?: (string | null) | undefined
}
type MonitorPost = {
  alertPayloadExtended?: (string | null) | undefined
  alertPayloadShort?: (string | null) | undefined
  alertServices?: string[] | undefined
  allowUnauthenticatedPings?: boolean | undefined
  contentCheckMustNotExist?: boolean | undefined
  contentCheckText?: (string | null) | undefined
  contentCheckUrl?: (string | null) | undefined
  contentCheckXpathFilter?: (string | null) | undefined
  dataSegmentCode?: (string | null) | undefined
  graceSeconds?: (number | null) | undefined
  intervalDays?: (number | null) | undefined
  intervalHours?: (number | null) | undefined
  intervalMinutes?: (number | null) | undefined
  intervalMonths?: (number | null) | undefined
  intervalSeconds?: (number | null) | undefined
  intervalYears?: (number | null) | undefined
  isMonitorPaused?: boolean | undefined
  monitorName: string | null
  monitorNotes?: (string | null) | undefined
  monitorTypeCode: string | null
  partition: string
  publicDescription?: (string | null) | undefined
  startMonitorAt?: (string | null) | undefined
  timezoneCode: string
  webResponseSecondsLimit?: (number | null) | undefined
  webResponseUrl?: (string | null) | undefined
}
type MonitorJsonldPost = {
  alertPayloadExtended?: (string | null) | undefined
  alertPayloadShort?: (string | null) | undefined
  alertServices?: string[] | undefined
  allowUnauthenticatedPings?: boolean | undefined
  contentCheckMustNotExist?: boolean | undefined
  contentCheckText?: (string | null) | undefined
  contentCheckUrl?: (string | null) | undefined
  contentCheckXpathFilter?: (string | null) | undefined
  dataSegmentCode?: (string | null) | undefined
  graceSeconds?: (number | null) | undefined
  intervalDays?: (number | null) | undefined
  intervalHours?: (number | null) | undefined
  intervalMinutes?: (number | null) | undefined
  intervalMonths?: (number | null) | undefined
  intervalSeconds?: (number | null) | undefined
  intervalYears?: (number | null) | undefined
  isMonitorPaused?: boolean | undefined
  monitorName: string | null
  monitorNotes?: (string | null) | undefined
  monitorTypeCode: string | null
  partition: string
  publicDescription?: (string | null) | undefined
  startMonitorAt?: (string | null) | undefined
  timezoneCode: string
  webResponseSecondsLimit?: (number | null) | undefined
  webResponseUrl?: (string | null) | undefined
}
type MonitorStatusCodeGet = { codeDescription?: string | undefined; id?: string | undefined }
type MonitorStatusCodeJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  codeDescription?: string | undefined
  id?: string | undefined
}
type MonitorStatusLogGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  monitor?: string | undefined
  monitorStatusCode?: string | undefined
  partition?: string | undefined
  ping?: (string | null) | undefined
  resourceOwner?: (string | null) | undefined
}
type MonitorStatusLogJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  monitor?: string | undefined
  monitorStatusCode?: string | undefined
  partition?: string | undefined
  ping?: (string | null) | undefined
  resourceOwner?: (string | null) | undefined
}
type MonitorTypeCodeGet = {
  codeDescription?: string | undefined
  codeDescriptionExpanded?: string | undefined
  id?: string | undefined
}
type MonitorTypeCodeJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  codeDescription?: string | undefined
  codeDescriptionExpanded?: string | undefined
  id?: string | undefined
}
type MonitorPut = {
  alertPayloadExtended?: (string | null) | undefined
  alertPayloadShort?: (string | null) | undefined
  alertServices?: string[] | undefined
  allowUnauthenticatedPings?: boolean | undefined
  contentCheckMustNotExist?: boolean | undefined
  contentCheckText?: (string | null) | undefined
  contentCheckUrl?: (string | null) | undefined
  contentCheckXpathFilter?: (string | null) | undefined
  dataSegmentCode?: (string | null) | undefined
  graceSeconds?: (number | null) | undefined
  intervalDays?: (number | null) | undefined
  intervalHours?: (number | null) | undefined
  intervalMinutes?: (number | null) | undefined
  intervalMonths?: (number | null) | undefined
  intervalSeconds?: (number | null) | undefined
  intervalYears?: (number | null) | undefined
  isMonitorPaused?: boolean | undefined
  monitorName: string | null
  monitorNotes?: (string | null) | undefined
  publicDescription?: (string | null) | undefined
  startMonitorAt?: (string | null) | undefined
  timezoneCode: string
  webResponseSecondsLimit?: (number | null) | undefined
  webResponseUrl?: (string | null) | undefined
}
type MonitorJsonldPut = {
  alertPayloadExtended?: (string | null) | undefined
  alertPayloadShort?: (string | null) | undefined
  alertServices?: string[] | undefined
  allowUnauthenticatedPings?: boolean | undefined
  contentCheckMustNotExist?: boolean | undefined
  contentCheckText?: (string | null) | undefined
  contentCheckUrl?: (string | null) | undefined
  contentCheckXpathFilter?: (string | null) | undefined
  dataSegmentCode?: (string | null) | undefined
  graceSeconds?: (number | null) | undefined
  intervalDays?: (number | null) | undefined
  intervalHours?: (number | null) | undefined
  intervalMinutes?: (number | null) | undefined
  intervalMonths?: (number | null) | undefined
  intervalSeconds?: (number | null) | undefined
  intervalYears?: (number | null) | undefined
  isMonitorPaused?: boolean | undefined
  monitorName: string | null
  monitorNotes?: (string | null) | undefined
  publicDescription?: (string | null) | undefined
  startMonitorAt?: (string | null) | undefined
  timezoneCode: string
  webResponseSecondsLimit?: (number | null) | undefined
  webResponseUrl?: (string | null) | undefined
}
type PartitionGet = {
  alertServices?: string[] | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  monitors?: string[] | undefined
  partitionName: string | null
  partitionNotes?: (string | null) | undefined
  resourceOwner?: (string | null) | undefined
  teamInvitations?: string[] | undefined
  teamMembers?: string[] | undefined
}
type PartitionJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  alertServices?: string[] | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  monitors?: string[] | undefined
  partitionName: string | null
  partitionNotes?: (string | null) | undefined
  resourceOwner?: (string | null) | undefined
  teamInvitations?: string[] | undefined
  teamMembers?: string[] | undefined
}
type PartitionPost = {
  dataSegmentCode?: (string | null) | undefined
  partitionName: string | null
  partitionNotes?: (string | null) | undefined
}
type PartitionJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  partitionName: string | null
  partitionNotes?: (string | null) | undefined
}
type PartitionPut = {
  dataSegmentCode?: (string | null) | undefined
  partitionName: string | null
  partitionNotes?: (string | null) | undefined
}
type PartitionJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  partitionName: string | null
  partitionNotes?: (string | null) | undefined
}
type PingGet = {
  alertLogs?: string[] | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  expectNextPingAt?: (string | null) | undefined
  expectNextPingAtEpoch?: (number | null) | undefined
  id?: (string | null) | undefined
  ipAddress?: (string | null) | undefined
  monitor: string
  monitorStatusLog?: (string | null) | undefined
  partition?: string | undefined
  pingCustomCode?: (string | null) | undefined
  pingCustomPayload?: (string | null) | undefined
  pingMethodCode?: string | undefined
  resourceOwner?: (string | null) | undefined
}
type PingJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  alertLogs?: string[] | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  expectNextPingAt?: (string | null) | undefined
  expectNextPingAtEpoch?: (number | null) | undefined
  id?: (string | null) | undefined
  ipAddress?: (string | null) | undefined
  monitor: string
  monitorStatusLog?: (string | null) | undefined
  partition?: string | undefined
  pingCustomCode?: (string | null) | undefined
  pingCustomPayload?: (string | null) | undefined
  pingMethodCode?: string | undefined
  resourceOwner?: (string | null) | undefined
}
type PingPost = {
  expectNextPingAt?: (string | null) | undefined
  expectNextPingAtEpoch?: (number | null) | undefined
  monitor: string
  pingCustomCode?: (string | null) | undefined
  pingCustomPayload?: (string | null) | undefined
}
type PingJsonldPost = {
  expectNextPingAt?: (string | null) | undefined
  expectNextPingAtEpoch?: (number | null) | undefined
  monitor: string
  pingCustomCode?: (string | null) | undefined
  pingCustomPayload?: (string | null) | undefined
}
type PingMethodCodeGet = { codeName?: string | undefined; id?: string | undefined }
type PingMethodCodeJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  codeName?: string | undefined
  id?: string | undefined
}
type TeamInvitationGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  inviteeEmail: string | null
  inviteeFirstName: string | null
  inviteeLastName: string | null
  partition: string
  resourceOwner?: (string | null) | undefined
  statusAt?: string | undefined
  teamInvitationStatus?: string | undefined
  teamMemberRoleCode?: string | undefined
}
type TeamInvitationJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  inviteeEmail: string | null
  inviteeFirstName: string | null
  inviteeLastName: string | null
  partition: string
  resourceOwner?: (string | null) | undefined
  statusAt?: string | undefined
  teamInvitationStatus?: string | undefined
  teamMemberRoleCode?: string | undefined
}
type TeamInvitationPost = {
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  inviteeEmail: string | null
  inviteeFirstName: string | null
  inviteeLastName: string | null
  partition: string
  teamMemberRoleCode?: string | undefined
}
type TeamInvitationJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  inviteeEmail: string | null
  inviteeFirstName: string | null
  inviteeLastName: string | null
  partition: string
  teamMemberRoleCode?: string | undefined
}
type TeamMemberGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition?: string | undefined
  resourceOwner?: (string | null) | undefined
  teamMemberRoleCode: string | null
  userAccount?: string | undefined
}
type TeamMemberJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition?: string | undefined
  resourceOwner?: (string | null) | undefined
  teamMemberRoleCode: string | null
  userAccount?: string | undefined
}
type TeamMemberRoleCodeGet = { codeDescription?: string | undefined; id?: string | undefined }
type TeamMemberRoleCodeJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  codeDescription?: string | undefined
  id?: string | undefined
}
type TeamMemberPut = {
  dataSegmentCode?: (string | null) | undefined
  teamMemberRoleCode: string | null
}
type TeamMemberJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  teamMemberRoleCode: string | null
}
type TimezoneCodeGet = {
  codeName?: string | undefined
  id?: (string | null) | undefined
  offsetFromUtc?: number | undefined
  timezoneDateString?: string | undefined
}
type TimezoneCodeJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  codeName?: string | undefined
  id?: (string | null) | undefined
  offsetFromUtc?: number | undefined
  timezoneDateString?: string | undefined
}
type TransportAlertaGet = {
  alertaApiKey: string | null
  alertaCorrelate?: (string | null) | undefined
  alertaEnvironment?: (string | null) | undefined
  alertaEvent: string | null
  alertaGroup?: (string | null) | undefined
  alertaHost: string | null
  alertaOrigin?: (string | null) | undefined
  alertaResource: string | null
  alertaService?: (string | null) | undefined
  alertaSeverity?: (string | null) | undefined
  alertaStatus?: (string | null) | undefined
  alertaTags?: (string | null) | undefined
  alertaType?: (string | null) | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportAlertaJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  alertaApiKey: string | null
  alertaCorrelate?: (string | null) | undefined
  alertaEnvironment?: (string | null) | undefined
  alertaEvent: string | null
  alertaGroup?: (string | null) | undefined
  alertaHost: string | null
  alertaOrigin?: (string | null) | undefined
  alertaResource: string | null
  alertaService?: (string | null) | undefined
  alertaSeverity?: (string | null) | undefined
  alertaStatus?: (string | null) | undefined
  alertaTags?: (string | null) | undefined
  alertaType?: (string | null) | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportAlertaPost = {
  alertaApiKey: string | null
  alertaCorrelate?: (string | null) | undefined
  alertaEnvironment?: (string | null) | undefined
  alertaEvent: string | null
  alertaGroup?: (string | null) | undefined
  alertaHost: string | null
  alertaOrigin?: (string | null) | undefined
  alertaResource: string | null
  alertaService?: (string | null) | undefined
  alertaSeverity?: (string | null) | undefined
  alertaStatus?: (string | null) | undefined
  alertaTags?: (string | null) | undefined
  alertaType?: (string | null) | undefined
  dataSegmentCode?: (string | null) | undefined
  partition: string
  transportName: string | null
}
type TransportAlertaJsonldPost = {
  alertaApiKey: string | null
  alertaCorrelate?: (string | null) | undefined
  alertaEnvironment?: (string | null) | undefined
  alertaEvent: string | null
  alertaGroup?: (string | null) | undefined
  alertaHost: string | null
  alertaOrigin?: (string | null) | undefined
  alertaResource: string | null
  alertaService?: (string | null) | undefined
  alertaSeverity?: (string | null) | undefined
  alertaStatus?: (string | null) | undefined
  alertaTags?: (string | null) | undefined
  alertaType?: (string | null) | undefined
  dataSegmentCode?: (string | null) | undefined
  partition: string
  transportName: string | null
}
type TransportAlertaPut = {
  alertaApiKey: string | null
  alertaCorrelate?: (string | null) | undefined
  alertaEnvironment?: (string | null) | undefined
  alertaEvent: string | null
  alertaGroup?: (string | null) | undefined
  alertaHost: string | null
  alertaOrigin?: (string | null) | undefined
  alertaResource: string | null
  alertaService?: (string | null) | undefined
  alertaSeverity?: (string | null) | undefined
  alertaStatus?: (string | null) | undefined
  alertaTags?: (string | null) | undefined
  alertaType?: (string | null) | undefined
  dataSegmentCode?: (string | null) | undefined
  transportName: string | null
}
type TransportAlertaJsonldPut = {
  alertaApiKey: string | null
  alertaCorrelate?: (string | null) | undefined
  alertaEnvironment?: (string | null) | undefined
  alertaEvent: string | null
  alertaGroup?: (string | null) | undefined
  alertaHost: string | null
  alertaOrigin?: (string | null) | undefined
  alertaResource: string | null
  alertaService?: (string | null) | undefined
  alertaSeverity?: (string | null) | undefined
  alertaStatus?: (string | null) | undefined
  alertaTags?: (string | null) | undefined
  alertaType?: (string | null) | undefined
  dataSegmentCode?: (string | null) | undefined
  transportName: string | null
}
type TransportAllMySmsGet = {
  allMySmsApiKey: string | null
  allMySmsFrom?: (string | null) | undefined
  allMySmsLogin: string | null
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportAllMySmsJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  allMySmsApiKey: string | null
  allMySmsFrom?: (string | null) | undefined
  allMySmsLogin: string | null
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportAllMySmsPost = {
  allMySmsApiKey: string | null
  allMySmsFrom?: (string | null) | undefined
  allMySmsLogin: string | null
  dataSegmentCode?: (string | null) | undefined
  partition: string
  transportName: string | null
}
type TransportAllMySmsJsonldPost = {
  allMySmsApiKey: string | null
  allMySmsFrom?: (string | null) | undefined
  allMySmsLogin: string | null
  dataSegmentCode?: (string | null) | undefined
  partition: string
  transportName: string | null
}
type TransportAllMySmsPut = {
  allMySmsApiKey: string | null
  allMySmsFrom?: (string | null) | undefined
  allMySmsLogin: string | null
  dataSegmentCode?: (string | null) | undefined
  transportName: string | null
}
type TransportAllMySmsJsonldPut = {
  allMySmsApiKey: string | null
  allMySmsFrom?: (string | null) | undefined
  allMySmsLogin: string | null
  dataSegmentCode?: (string | null) | undefined
  transportName: string | null
}
type TransportAmazonSnsGet = {
  amazonSnsAccessKey: string | null
  amazonSnsRegion: string | null
  amazonSnsSecretKey: string | null
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportAmazonSnsJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  amazonSnsAccessKey: string | null
  amazonSnsRegion: string | null
  amazonSnsSecretKey: string | null
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportAmazonSnsPost = {
  amazonSnsAccessKey: string | null
  amazonSnsRegion: string | null
  amazonSnsSecretKey: string | null
  dataSegmentCode?: (string | null) | undefined
  partition: string
  transportName: string | null
}
type TransportAmazonSnsJsonldPost = {
  amazonSnsAccessKey: string | null
  amazonSnsRegion: string | null
  amazonSnsSecretKey: string | null
  dataSegmentCode?: (string | null) | undefined
  partition: string
  transportName: string | null
}
type TransportAmazonSnsPut = {
  amazonSnsAccessKey: string | null
  amazonSnsRegion: string | null
  amazonSnsSecretKey: string | null
  dataSegmentCode?: (string | null) | undefined
  transportName: string | null
}
type TransportAmazonSnsJsonldPut = {
  amazonSnsAccessKey: string | null
  amazonSnsRegion: string | null
  amazonSnsSecretKey: string | null
  dataSegmentCode?: (string | null) | undefined
  transportName: string | null
}
type TransportBandwidthGet = {
  bandwidthAccountId: string | null
  bandwidthApplicationId: string | null
  bandwidthFrom: string | null
  bandwidthPassword: string | null
  bandwidthUsername: string | null
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportBandwidthJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  bandwidthAccountId: string | null
  bandwidthApplicationId: string | null
  bandwidthFrom: string | null
  bandwidthPassword: string | null
  bandwidthUsername: string | null
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportBandwidthPost = {
  bandwidthAccountId: string | null
  bandwidthApplicationId: string | null
  bandwidthFrom: string | null
  bandwidthPassword: string | null
  bandwidthUsername: string | null
  dataSegmentCode?: (string | null) | undefined
  partition: string
  transportName: string | null
}
type TransportBandwidthJsonldPost = {
  bandwidthAccountId: string | null
  bandwidthApplicationId: string | null
  bandwidthFrom: string | null
  bandwidthPassword: string | null
  bandwidthUsername: string | null
  dataSegmentCode?: (string | null) | undefined
  partition: string
  transportName: string | null
}
type TransportBandwidthPut = {
  bandwidthAccountId: string | null
  bandwidthApplicationId: string | null
  bandwidthFrom: string | null
  bandwidthPassword: string | null
  bandwidthUsername: string | null
  dataSegmentCode?: (string | null) | undefined
  transportName: string | null
}
type TransportBandwidthJsonldPut = {
  bandwidthAccountId: string | null
  bandwidthApplicationId: string | null
  bandwidthFrom: string | null
  bandwidthPassword: string | null
  bandwidthUsername: string | null
  dataSegmentCode?: (string | null) | undefined
  transportName: string | null
}
type TransportChatworkGet = {
  chatworkApiToken: string | null
  chatworkRoomId: string | null
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportChatworkJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  chatworkApiToken: string | null
  chatworkRoomId: string | null
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportChatworkPost = {
  chatworkApiToken: string | null
  chatworkRoomId: string | null
  dataSegmentCode?: (string | null) | undefined
  partition: string
  transportName: string | null
}
type TransportChatworkJsonldPost = {
  chatworkApiToken: string | null
  chatworkRoomId: string | null
  dataSegmentCode?: (string | null) | undefined
  partition: string
  transportName: string | null
}
type TransportChatworkPut = {
  chatworkApiToken: string | null
  chatworkRoomId: string | null
  dataSegmentCode?: (string | null) | undefined
  transportName: string | null
}
type TransportChatworkJsonldPut = {
  chatworkApiToken: string | null
  chatworkRoomId: string | null
  dataSegmentCode?: (string | null) | undefined
  transportName: string | null
}
type TransportClickSendGet = {
  clickSendApiKey: string | null
  clickSendApiUsername: string | null
  clickSendFrom?: (string | null) | undefined
  clickSendFromEmail?: (string | null) | undefined
  clickSendListId?: (string | null) | undefined
  clickSendSource?: (string | null) | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportClickSendJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  clickSendApiKey: string | null
  clickSendApiUsername: string | null
  clickSendFrom?: (string | null) | undefined
  clickSendFromEmail?: (string | null) | undefined
  clickSendListId?: (string | null) | undefined
  clickSendSource?: (string | null) | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportClickSendPost = {
  clickSendApiKey: string | null
  clickSendApiUsername: string | null
  clickSendFrom?: (string | null) | undefined
  clickSendFromEmail?: (string | null) | undefined
  clickSendListId?: (string | null) | undefined
  clickSendSource?: (string | null) | undefined
  dataSegmentCode?: (string | null) | undefined
  partition: string
  transportName: string | null
}
type TransportClickSendJsonldPost = {
  clickSendApiKey: string | null
  clickSendApiUsername: string | null
  clickSendFrom?: (string | null) | undefined
  clickSendFromEmail?: (string | null) | undefined
  clickSendListId?: (string | null) | undefined
  clickSendSource?: (string | null) | undefined
  dataSegmentCode?: (string | null) | undefined
  partition: string
  transportName: string | null
}
type TransportClickSendPut = {
  clickSendApiKey: string | null
  clickSendApiUsername: string | null
  clickSendFrom?: (string | null) | undefined
  clickSendFromEmail?: (string | null) | undefined
  clickSendListId?: (string | null) | undefined
  clickSendSource?: (string | null) | undefined
  dataSegmentCode?: (string | null) | undefined
  transportName: string | null
}
type TransportClickSendJsonldPut = {
  clickSendApiKey: string | null
  clickSendApiUsername: string | null
  clickSendFrom?: (string | null) | undefined
  clickSendFromEmail?: (string | null) | undefined
  clickSendListId?: (string | null) | undefined
  clickSendSource?: (string | null) | undefined
  dataSegmentCode?: (string | null) | undefined
  transportName: string | null
}
type TransportClickatellGet = {
  clickatellAccessToken: string | null
  clickatellFrom: string | null
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportClickatellJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  clickatellAccessToken: string | null
  clickatellFrom: string | null
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportClickatellPost = {
  clickatellAccessToken: string | null
  clickatellFrom: string | null
  dataSegmentCode?: (string | null) | undefined
  partition: string
  transportName: string | null
}
type TransportClickatellJsonldPost = {
  clickatellAccessToken: string | null
  clickatellFrom: string | null
  dataSegmentCode?: (string | null) | undefined
  partition: string
  transportName: string | null
}
type TransportClickatellPut = {
  clickatellAccessToken: string | null
  clickatellFrom: string | null
  dataSegmentCode?: (string | null) | undefined
  transportName: string | null
}
type TransportClickatellJsonldPut = {
  clickatellAccessToken: string | null
  clickatellFrom: string | null
  dataSegmentCode?: (string | null) | undefined
  transportName: string | null
}
type TransportContactEveryoneGet = {
  contactEveryoneCategory?: (string | null) | undefined
  contactEveryoneDiffusionName?: (string | null) | undefined
  contactEveryoneToken: string | null
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportContactEveryoneJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  contactEveryoneCategory?: (string | null) | undefined
  contactEveryoneDiffusionName?: (string | null) | undefined
  contactEveryoneToken: string | null
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportContactEveryonePost = {
  contactEveryoneCategory?: (string | null) | undefined
  contactEveryoneDiffusionName?: (string | null) | undefined
  contactEveryoneToken: string | null
  dataSegmentCode?: (string | null) | undefined
  partition: string
  transportName: string | null
}
type TransportContactEveryoneJsonldPost = {
  contactEveryoneCategory?: (string | null) | undefined
  contactEveryoneDiffusionName?: (string | null) | undefined
  contactEveryoneToken: string | null
  dataSegmentCode?: (string | null) | undefined
  partition: string
  transportName: string | null
}
type TransportContactEveryonePut = {
  contactEveryoneCategory?: (string | null) | undefined
  contactEveryoneDiffusionName?: (string | null) | undefined
  contactEveryoneToken: string | null
  dataSegmentCode?: (string | null) | undefined
  transportName: string | null
}
type TransportContactEveryoneJsonldPut = {
  contactEveryoneCategory?: (string | null) | undefined
  contactEveryoneDiffusionName?: (string | null) | undefined
  contactEveryoneToken: string | null
  dataSegmentCode?: (string | null) | undefined
  transportName: string | null
}
type TransportDiscordGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  discordToken: string | null
  discordWebhookId: string | null
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportDiscordJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  discordToken: string | null
  discordWebhookId: string | null
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportDiscordPost = {
  dataSegmentCode?: (string | null) | undefined
  discordToken: string | null
  discordWebhookId: string | null
  partition: string
  transportName: string | null
}
type TransportDiscordJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  discordToken: string | null
  discordWebhookId: string | null
  partition: string
  transportName: string | null
}
type TransportDiscordPut = {
  dataSegmentCode?: (string | null) | undefined
  discordToken: string | null
  discordWebhookId: string | null
  transportName: string | null
}
type TransportDiscordJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  discordToken: string | null
  discordWebhookId: string | null
  transportName: string | null
}
type TransportEmailGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  emailFromAddress: string | null
  emailFromName: string | null
  emailPassword: string | null
  emailPort: number | null
  emailServer: string | null
  emailUsername: string | null
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportEmailJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  emailFromAddress: string | null
  emailFromName: string | null
  emailPassword: string | null
  emailPort: number | null
  emailServer: string | null
  emailUsername: string | null
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportEmailPost = {
  dataSegmentCode?: (string | null) | undefined
  emailFromAddress: string | null
  emailFromName: string | null
  emailPassword: string | null
  emailPort: number | null
  emailServer: string | null
  emailUsername: string | null
  partition: string
  transportName: string | null
}
type TransportEmailJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  emailFromAddress: string | null
  emailFromName: string | null
  emailPassword: string | null
  emailPort: number | null
  emailServer: string | null
  emailUsername: string | null
  partition: string
  transportName: string | null
}
type TransportEmailPut = {
  dataSegmentCode?: (string | null) | undefined
  emailFromAddress: string | null
  emailFromName: string | null
  emailPassword: string | null
  emailPort: number | null
  emailServer: string | null
  emailUsername: string | null
  transportName: string | null
}
type TransportEmailJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  emailFromAddress: string | null
  emailFromName: string | null
  emailPassword: string | null
  emailPort: number | null
  emailServer: string | null
  emailUsername: string | null
  transportName: string | null
}
type TransportEngagespotGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  engagespotApiKey: string | null
  engagespotCampaignName: string | null
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportEngagespotJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  engagespotApiKey: string | null
  engagespotCampaignName: string | null
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportEngagespotPost = {
  dataSegmentCode?: (string | null) | undefined
  engagespotApiKey: string | null
  engagespotCampaignName: string | null
  partition: string
  transportName: string | null
}
type TransportEngagespotJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  engagespotApiKey: string | null
  engagespotCampaignName: string | null
  partition: string
  transportName: string | null
}
type TransportEngagespotPut = {
  dataSegmentCode?: (string | null) | undefined
  engagespotApiKey: string | null
  engagespotCampaignName: string | null
  transportName: string | null
}
type TransportEngagespotJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  engagespotApiKey: string | null
  engagespotCampaignName: string | null
  transportName: string | null
}
type TransportEsendexGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  esendexAccountReference: string | null
  esendexFrom: string | null
  esendexPassword: string | null
  esendexUsername: string | null
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportEsendexJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  esendexAccountReference: string | null
  esendexFrom: string | null
  esendexPassword: string | null
  esendexUsername: string | null
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportEsendexPost = {
  dataSegmentCode?: (string | null) | undefined
  esendexAccountReference: string | null
  esendexFrom: string | null
  esendexPassword: string | null
  esendexUsername: string | null
  partition: string
  transportName: string | null
}
type TransportEsendexJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  esendexAccountReference: string | null
  esendexFrom: string | null
  esendexPassword: string | null
  esendexUsername: string | null
  partition: string
  transportName: string | null
}
type TransportEsendexPut = {
  dataSegmentCode?: (string | null) | undefined
  esendexAccountReference: string | null
  esendexFrom: string | null
  esendexPassword: string | null
  esendexUsername: string | null
  transportName: string | null
}
type TransportEsendexJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  esendexAccountReference: string | null
  esendexFrom: string | null
  esendexPassword: string | null
  esendexUsername: string | null
  transportName: string | null
}
type TransportExpoGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  expoToken: string | null
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportExpoJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  expoToken: string | null
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportExpoPost = {
  dataSegmentCode?: (string | null) | undefined
  expoToken: string | null
  partition: string
  transportName: string | null
}
type TransportExpoJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  expoToken: string | null
  partition: string
  transportName: string | null
}
type TransportExpoPut = {
  dataSegmentCode?: (string | null) | undefined
  expoToken: string | null
  transportName: string | null
}
type TransportExpoJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  expoToken: string | null
  transportName: string | null
}
type TransportFirebaseGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  firebasePassword: string | null
  firebaseUsername: string | null
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportFirebaseJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  firebasePassword: string | null
  firebaseUsername: string | null
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportFirebasePost = {
  dataSegmentCode?: (string | null) | undefined
  firebasePassword: string | null
  firebaseUsername: string | null
  partition: string
  transportName: string | null
}
type TransportFirebaseJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  firebasePassword: string | null
  firebaseUsername: string | null
  partition: string
  transportName: string | null
}
type TransportFirebasePut = {
  dataSegmentCode?: (string | null) | undefined
  firebasePassword: string | null
  firebaseUsername: string | null
  transportName: string | null
}
type TransportFirebaseJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  firebasePassword: string | null
  firebaseUsername: string | null
  transportName: string | null
}
type TransportFortySixElksGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  fortySixElksApiPassword: string | null
  fortySixElksApiUsername: string | null
  fortySixElksFrom: string | null
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportFortySixElksJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  fortySixElksApiPassword: string | null
  fortySixElksApiUsername: string | null
  fortySixElksFrom: string | null
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportFortySixElksPost = {
  dataSegmentCode?: (string | null) | undefined
  fortySixElksApiPassword: string | null
  fortySixElksApiUsername: string | null
  fortySixElksFrom: string | null
  partition: string
  transportName: string | null
}
type TransportFortySixElksJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  fortySixElksApiPassword: string | null
  fortySixElksApiUsername: string | null
  fortySixElksFrom: string | null
  partition: string
  transportName: string | null
}
type TransportFortySixElksPut = {
  dataSegmentCode?: (string | null) | undefined
  fortySixElksApiPassword: string | null
  fortySixElksApiUsername: string | null
  fortySixElksFrom: string | null
  transportName: string | null
}
type TransportFortySixElksJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  fortySixElksApiPassword: string | null
  fortySixElksApiUsername: string | null
  fortySixElksFrom: string | null
  transportName: string | null
}
type TransportFreeMobileGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  freeMobileApiKey: string | null
  freeMobileLogin: string | null
  freeMobilePhone: string | null
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportFreeMobileJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  freeMobileApiKey: string | null
  freeMobileLogin: string | null
  freeMobilePhone: string | null
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportFreeMobilePost = {
  dataSegmentCode?: (string | null) | undefined
  freeMobileApiKey: string | null
  freeMobileLogin: string | null
  freeMobilePhone: string | null
  partition: string
  transportName: string | null
}
type TransportFreeMobileJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  freeMobileApiKey: string | null
  freeMobileLogin: string | null
  freeMobilePhone: string | null
  partition: string
  transportName: string | null
}
type TransportFreeMobilePut = {
  dataSegmentCode?: (string | null) | undefined
  freeMobileApiKey: string | null
  freeMobileLogin: string | null
  freeMobilePhone: string | null
  transportName: string | null
}
type TransportFreeMobileJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  freeMobileApiKey: string | null
  freeMobileLogin: string | null
  freeMobilePhone: string | null
  transportName: string | null
}
type TransportFreshdeskGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  freshdeskApiKey: string | null
  freshdeskEmail: string | null
  freshdeskHost: string | null
  freshdeskPriority?: (string | null) | undefined
  freshdeskType?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportFreshdeskJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  freshdeskApiKey: string | null
  freshdeskEmail: string | null
  freshdeskHost: string | null
  freshdeskPriority?: (string | null) | undefined
  freshdeskType?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportFreshdeskPost = {
  dataSegmentCode?: (string | null) | undefined
  freshdeskApiKey: string | null
  freshdeskEmail: string | null
  freshdeskHost: string | null
  freshdeskPriority?: (string | null) | undefined
  freshdeskType?: (string | null) | undefined
  partition: string
  transportName: string | null
}
type TransportFreshdeskJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  freshdeskApiKey: string | null
  freshdeskEmail: string | null
  freshdeskHost: string | null
  freshdeskPriority?: (string | null) | undefined
  freshdeskType?: (string | null) | undefined
  partition: string
  transportName: string | null
}
type TransportFreshdeskPut = {
  dataSegmentCode?: (string | null) | undefined
  freshdeskApiKey: string | null
  freshdeskEmail: string | null
  freshdeskHost: string | null
  freshdeskPriority?: (string | null) | undefined
  freshdeskType?: (string | null) | undefined
  transportName: string | null
}
type TransportFreshdeskJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  freshdeskApiKey: string | null
  freshdeskEmail: string | null
  freshdeskHost: string | null
  freshdeskPriority?: (string | null) | undefined
  freshdeskType?: (string | null) | undefined
  transportName: string | null
}
type TransportGatewayApiGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  gatewayApiFrom: string | null
  gatewayApiToken: string | null
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportGatewayApiJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  gatewayApiFrom: string | null
  gatewayApiToken: string | null
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportGatewayApiPost = {
  dataSegmentCode?: (string | null) | undefined
  gatewayApiFrom: string | null
  gatewayApiToken: string | null
  partition: string
  transportName: string | null
}
type TransportGatewayApiJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  gatewayApiFrom: string | null
  gatewayApiToken: string | null
  partition: string
  transportName: string | null
}
type TransportGatewayApiPut = {
  dataSegmentCode?: (string | null) | undefined
  gatewayApiFrom: string | null
  gatewayApiToken: string | null
  transportName: string | null
}
type TransportGatewayApiJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  gatewayApiFrom: string | null
  gatewayApiToken: string | null
  transportName: string | null
}
type TransportGitterGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  gitterRoomId: string | null
  gitterToken: string | null
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportGitterJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  gitterRoomId: string | null
  gitterToken: string | null
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportGitterPost = {
  dataSegmentCode?: (string | null) | undefined
  gitterRoomId: string | null
  gitterToken: string | null
  partition: string
  transportName: string | null
}
type TransportGitterJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  gitterRoomId: string | null
  gitterToken: string | null
  partition: string
  transportName: string | null
}
type TransportGitterPut = {
  dataSegmentCode?: (string | null) | undefined
  gitterRoomId: string | null
  gitterToken: string | null
  transportName: string | null
}
type TransportGitterJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  gitterRoomId: string | null
  gitterToken: string | null
  transportName: string | null
}
type TransportGoogleChatGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  googleChatAccessKey: string | null
  googleChatAccessToken: string | null
  googleChatSpace: string | null
  googleChatThreadKey?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportGoogleChatJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  googleChatAccessKey: string | null
  googleChatAccessToken: string | null
  googleChatSpace: string | null
  googleChatThreadKey?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportGoogleChatPost = {
  dataSegmentCode?: (string | null) | undefined
  googleChatAccessKey: string | null
  googleChatAccessToken: string | null
  googleChatSpace: string | null
  googleChatThreadKey?: (string | null) | undefined
  partition: string
  transportName: string | null
}
type TransportGoogleChatJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  googleChatAccessKey: string | null
  googleChatAccessToken: string | null
  googleChatSpace: string | null
  googleChatThreadKey?: (string | null) | undefined
  partition: string
  transportName: string | null
}
type TransportGoogleChatPut = {
  dataSegmentCode?: (string | null) | undefined
  googleChatAccessKey: string | null
  googleChatAccessToken: string | null
  googleChatSpace: string | null
  googleChatThreadKey?: (string | null) | undefined
  transportName: string | null
}
type TransportGoogleChatJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  googleChatAccessKey: string | null
  googleChatAccessToken: string | null
  googleChatSpace: string | null
  googleChatThreadKey?: (string | null) | undefined
  transportName: string | null
}
type TransportGotifyGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  gotifyApiUrl: string | null
  gotifyAppToken: string | null
  gotifyPriority?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportGotifyJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  gotifyApiUrl: string | null
  gotifyAppToken: string | null
  gotifyPriority?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportGotifyPost = {
  dataSegmentCode?: (string | null) | undefined
  gotifyApiUrl: string | null
  gotifyAppToken: string | null
  gotifyPriority?: (string | null) | undefined
  partition: string
  transportName: string | null
}
type TransportGotifyJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  gotifyApiUrl: string | null
  gotifyAppToken: string | null
  gotifyPriority?: (string | null) | undefined
  partition: string
  transportName: string | null
}
type TransportGotifyPut = {
  dataSegmentCode?: (string | null) | undefined
  gotifyApiUrl: string | null
  gotifyAppToken: string | null
  gotifyPriority?: (string | null) | undefined
  transportName: string | null
}
type TransportGotifyJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  gotifyApiUrl: string | null
  gotifyAppToken: string | null
  gotifyPriority?: (string | null) | undefined
  transportName: string | null
}
type TransportHelpScoutGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  helpScoutCustomerEmail: string | null
  helpScoutMailboxId?: (number | null) | undefined
  helpScoutOauthToken: string | null
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportHelpScoutJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  helpScoutCustomerEmail: string | null
  helpScoutMailboxId?: (number | null) | undefined
  helpScoutOauthToken: string | null
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportHelpScoutPost = {
  dataSegmentCode?: (string | null) | undefined
  helpScoutCustomerEmail: string | null
  helpScoutMailboxId?: (number | null) | undefined
  helpScoutOauthToken: string | null
  partition: string
  transportName: string | null
}
type TransportHelpScoutJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  helpScoutCustomerEmail: string | null
  helpScoutMailboxId?: (number | null) | undefined
  helpScoutOauthToken: string | null
  partition: string
  transportName: string | null
}
type TransportHelpScoutPut = {
  dataSegmentCode?: (string | null) | undefined
  helpScoutCustomerEmail: string | null
  helpScoutMailboxId?: (number | null) | undefined
  helpScoutOauthToken: string | null
  transportName: string | null
}
type TransportHelpScoutJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  helpScoutCustomerEmail: string | null
  helpScoutMailboxId?: (number | null) | undefined
  helpScoutOauthToken: string | null
  transportName: string | null
}
type TransportInfobipGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  infobipAuthToken: string | null
  infobipFrom: string | null
  infobipHost: string | null
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportInfobipJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  infobipAuthToken: string | null
  infobipFrom: string | null
  infobipHost: string | null
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportInfobipPost = {
  dataSegmentCode?: (string | null) | undefined
  infobipAuthToken: string | null
  infobipFrom: string | null
  infobipHost: string | null
  partition: string
  transportName: string | null
}
type TransportInfobipJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  infobipAuthToken: string | null
  infobipFrom: string | null
  infobipHost: string | null
  partition: string
  transportName: string | null
}
type TransportInfobipPut = {
  dataSegmentCode?: (string | null) | undefined
  infobipAuthToken: string | null
  infobipFrom: string | null
  infobipHost: string | null
  transportName: string | null
}
type TransportInfobipJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  infobipAuthToken: string | null
  infobipFrom: string | null
  infobipHost: string | null
  transportName: string | null
}
type TransportIqsmsGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  iqsmsFrom: string | null
  iqsmsLogin: string | null
  iqsmsPassword: string | null
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportIqsmsJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  iqsmsFrom: string | null
  iqsmsLogin: string | null
  iqsmsPassword: string | null
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportIqsmsPost = {
  dataSegmentCode?: (string | null) | undefined
  iqsmsFrom: string | null
  iqsmsLogin: string | null
  iqsmsPassword: string | null
  partition: string
  transportName: string | null
}
type TransportIqsmsJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  iqsmsFrom: string | null
  iqsmsLogin: string | null
  iqsmsPassword: string | null
  partition: string
  transportName: string | null
}
type TransportIqsmsPut = {
  dataSegmentCode?: (string | null) | undefined
  iqsmsFrom: string | null
  iqsmsLogin: string | null
  iqsmsPassword: string | null
  transportName: string | null
}
type TransportIqsmsJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  iqsmsFrom: string | null
  iqsmsLogin: string | null
  iqsmsPassword: string | null
  transportName: string | null
}
type TransportKazInfoTehGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  kazInfoTehFrom: string | null
  kazInfoTehPassword: string | null
  kazInfoTehUsername: string | null
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportKazInfoTehJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  kazInfoTehFrom: string | null
  kazInfoTehPassword: string | null
  kazInfoTehUsername: string | null
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportKazInfoTehPost = {
  dataSegmentCode?: (string | null) | undefined
  kazInfoTehFrom: string | null
  kazInfoTehPassword: string | null
  kazInfoTehUsername: string | null
  partition: string
  transportName: string | null
}
type TransportKazInfoTehJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  kazInfoTehFrom: string | null
  kazInfoTehPassword: string | null
  kazInfoTehUsername: string | null
  partition: string
  transportName: string | null
}
type TransportKazInfoTehPut = {
  dataSegmentCode?: (string | null) | undefined
  kazInfoTehFrom: string | null
  kazInfoTehPassword: string | null
  kazInfoTehUsername: string | null
  transportName: string | null
}
type TransportKazInfoTehJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  kazInfoTehFrom: string | null
  kazInfoTehPassword: string | null
  kazInfoTehUsername: string | null
  transportName: string | null
}
type TransportLightSmsGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  lightSmsLogin: string | null
  lightSmsPhone: string | null
  lightSmsToken: string | null
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportLightSmsJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  lightSmsLogin: string | null
  lightSmsPhone: string | null
  lightSmsToken: string | null
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportLightSmsPost = {
  dataSegmentCode?: (string | null) | undefined
  lightSmsLogin: string | null
  lightSmsPhone: string | null
  lightSmsToken: string | null
  partition: string
  transportName: string | null
}
type TransportLightSmsJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  lightSmsLogin: string | null
  lightSmsPhone: string | null
  lightSmsToken: string | null
  partition: string
  transportName: string | null
}
type TransportLightSmsPut = {
  dataSegmentCode?: (string | null) | undefined
  lightSmsLogin: string | null
  lightSmsPhone: string | null
  lightSmsToken: string | null
  transportName: string | null
}
type TransportLightSmsJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  lightSmsLogin: string | null
  lightSmsPhone: string | null
  lightSmsToken: string | null
  transportName: string | null
}
type TransportLineNotifyGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  lineNotifyAccessToken: string | null
  lineNotifyStickerId?: (string | null) | undefined
  lineNotifyStickerPackageId?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportLineNotifyJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  lineNotifyAccessToken: string | null
  lineNotifyStickerId?: (string | null) | undefined
  lineNotifyStickerPackageId?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportLineNotifyPost = {
  dataSegmentCode?: (string | null) | undefined
  lineNotifyAccessToken: string | null
  lineNotifyStickerId?: (string | null) | undefined
  lineNotifyStickerPackageId?: (string | null) | undefined
  partition: string
  transportName: string | null
}
type TransportLineNotifyJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  lineNotifyAccessToken: string | null
  lineNotifyStickerId?: (string | null) | undefined
  lineNotifyStickerPackageId?: (string | null) | undefined
  partition: string
  transportName: string | null
}
type TransportLineNotifyPut = {
  dataSegmentCode?: (string | null) | undefined
  lineNotifyAccessToken: string | null
  lineNotifyStickerId?: (string | null) | undefined
  lineNotifyStickerPackageId?: (string | null) | undefined
  transportName: string | null
}
type TransportLineNotifyJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  lineNotifyAccessToken: string | null
  lineNotifyStickerId?: (string | null) | undefined
  lineNotifyStickerPackageId?: (string | null) | undefined
  transportName: string | null
}
type TransportLinkedInGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  linkedInToken: string | null
  linkedInUserId: string | null
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportLinkedInJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  linkedInToken: string | null
  linkedInUserId: string | null
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportLinkedInPost = {
  dataSegmentCode?: (string | null) | undefined
  linkedInToken: string | null
  linkedInUserId: string | null
  partition: string
  transportName: string | null
}
type TransportLinkedInJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  linkedInToken: string | null
  linkedInUserId: string | null
  partition: string
  transportName: string | null
}
type TransportLinkedInPut = {
  dataSegmentCode?: (string | null) | undefined
  linkedInToken: string | null
  linkedInUserId: string | null
  transportName: string | null
}
type TransportLinkedInJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  linkedInToken: string | null
  linkedInUserId: string | null
  transportName: string | null
}
type TransportMailjetGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  mailjetFrom: string | null
  mailjetToken: string | null
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportMailjetJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  mailjetFrom: string | null
  mailjetToken: string | null
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportMailjetPost = {
  dataSegmentCode?: (string | null) | undefined
  mailjetFrom: string | null
  mailjetToken: string | null
  partition: string
  transportName: string | null
}
type TransportMailjetJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  mailjetFrom: string | null
  mailjetToken: string | null
  partition: string
  transportName: string | null
}
type TransportMailjetPut = {
  dataSegmentCode?: (string | null) | undefined
  mailjetFrom: string | null
  mailjetToken: string | null
  transportName: string | null
}
type TransportMailjetJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  mailjetFrom: string | null
  mailjetToken: string | null
  transportName: string | null
}
type TransportMastodonGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  mastodonAccessToken: string | null
  mastodonHost: string | null
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportMastodonJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  mastodonAccessToken: string | null
  mastodonHost: string | null
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportMastodonPost = {
  dataSegmentCode?: (string | null) | undefined
  mastodonAccessToken: string | null
  mastodonHost: string | null
  partition: string
  transportName: string | null
}
type TransportMastodonJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  mastodonAccessToken: string | null
  mastodonHost: string | null
  partition: string
  transportName: string | null
}
type TransportMastodonPut = {
  dataSegmentCode?: (string | null) | undefined
  mastodonAccessToken: string | null
  mastodonHost: string | null
  transportName: string | null
}
type TransportMastodonJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  mastodonAccessToken: string | null
  mastodonHost: string | null
  transportName: string | null
}
type TransportMattermostGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  mattermostAccessToken: string | null
  mattermostChannel: string | null
  mattermostHost: string | null
  mattermostPath?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportMattermostJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  mattermostAccessToken: string | null
  mattermostChannel: string | null
  mattermostHost: string | null
  mattermostPath?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportMattermostPost = {
  dataSegmentCode?: (string | null) | undefined
  mattermostAccessToken: string | null
  mattermostChannel: string | null
  mattermostHost: string | null
  mattermostPath?: (string | null) | undefined
  partition: string
  transportName: string | null
}
type TransportMattermostJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  mattermostAccessToken: string | null
  mattermostChannel: string | null
  mattermostHost: string | null
  mattermostPath?: (string | null) | undefined
  partition: string
  transportName: string | null
}
type TransportMattermostPut = {
  dataSegmentCode?: (string | null) | undefined
  mattermostAccessToken: string | null
  mattermostChannel: string | null
  mattermostHost: string | null
  mattermostPath?: (string | null) | undefined
  transportName: string | null
}
type TransportMattermostJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  mattermostAccessToken: string | null
  mattermostChannel: string | null
  mattermostHost: string | null
  mattermostPath?: (string | null) | undefined
  transportName: string | null
}
type TransportMercureGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  mercureHubJwtToken: string | null
  mercureHubUrl?: (string | null) | undefined
  mercureTopic?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportMercureJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  mercureHubJwtToken: string | null
  mercureHubUrl?: (string | null) | undefined
  mercureTopic?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportMercurePost = {
  dataSegmentCode?: (string | null) | undefined
  mercureHubJwtToken: string | null
  mercureHubUrl?: (string | null) | undefined
  mercureTopic?: (string | null) | undefined
  partition: string
  transportName: string | null
}
type TransportMercureJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  mercureHubJwtToken: string | null
  mercureHubUrl?: (string | null) | undefined
  mercureTopic?: (string | null) | undefined
  partition: string
  transportName: string | null
}
type TransportMercurePut = {
  dataSegmentCode?: (string | null) | undefined
  mercureHubJwtToken: string | null
  mercureHubUrl?: (string | null) | undefined
  mercureTopic?: (string | null) | undefined
  transportName: string | null
}
type TransportMercureJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  mercureHubJwtToken: string | null
  mercureHubUrl?: (string | null) | undefined
  mercureTopic?: (string | null) | undefined
  transportName: string | null
}
type TransportMessageBirdGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  messageBirdFrom: string | null
  messageBirdToken: string | null
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportMessageBirdJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  messageBirdFrom: string | null
  messageBirdToken: string | null
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportMessageBirdPost = {
  dataSegmentCode?: (string | null) | undefined
  messageBirdFrom: string | null
  messageBirdToken: string | null
  partition: string
  transportName: string | null
}
type TransportMessageBirdJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  messageBirdFrom: string | null
  messageBirdToken: string | null
  partition: string
  transportName: string | null
}
type TransportMessageBirdPut = {
  dataSegmentCode?: (string | null) | undefined
  messageBirdFrom: string | null
  messageBirdToken: string | null
  transportName: string | null
}
type TransportMessageBirdJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  messageBirdFrom: string | null
  messageBirdToken: string | null
  transportName: string | null
}
type TransportMessageMediaGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  messageMediaApiKey: string | null
  messageMediaApiSecret: string | null
  messageMediaFrom?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportMessageMediaJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  messageMediaApiKey: string | null
  messageMediaApiSecret: string | null
  messageMediaFrom?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportMessageMediaPost = {
  dataSegmentCode?: (string | null) | undefined
  messageMediaApiKey: string | null
  messageMediaApiSecret: string | null
  messageMediaFrom?: (string | null) | undefined
  partition: string
  transportName: string | null
}
type TransportMessageMediaJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  messageMediaApiKey: string | null
  messageMediaApiSecret: string | null
  messageMediaFrom?: (string | null) | undefined
  partition: string
  transportName: string | null
}
type TransportMessageMediaPut = {
  dataSegmentCode?: (string | null) | undefined
  messageMediaApiKey: string | null
  messageMediaApiSecret: string | null
  messageMediaFrom?: (string | null) | undefined
  transportName: string | null
}
type TransportMessageMediaJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  messageMediaApiKey: string | null
  messageMediaApiSecret: string | null
  messageMediaFrom?: (string | null) | undefined
  transportName: string | null
}
type TransportMicrosoftTeamsGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  microsoftTeamsPath: string | null
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportMicrosoftTeamsJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  microsoftTeamsPath: string | null
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportMicrosoftTeamsPost = {
  dataSegmentCode?: (string | null) | undefined
  microsoftTeamsPath: string | null
  partition: string
  transportName: string | null
}
type TransportMicrosoftTeamsJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  microsoftTeamsPath: string | null
  partition: string
  transportName: string | null
}
type TransportMicrosoftTeamsPut = {
  dataSegmentCode?: (string | null) | undefined
  microsoftTeamsPath: string | null
  transportName: string | null
}
type TransportMicrosoftTeamsJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  microsoftTeamsPath: string | null
  transportName: string | null
}
type TransportMobytGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  mobytAccessToken: string | null
  mobytFrom: string | null
  mobytTypeQuality: string | null
  mobytUserKey: string | null
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportMobytJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  mobytAccessToken: string | null
  mobytFrom: string | null
  mobytTypeQuality: string | null
  mobytUserKey: string | null
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportMobytPost = {
  dataSegmentCode?: (string | null) | undefined
  mobytAccessToken: string | null
  mobytFrom: string | null
  mobytTypeQuality: string | null
  mobytUserKey: string | null
  partition: string
  transportName: string | null
}
type TransportMobytJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  mobytAccessToken: string | null
  mobytFrom: string | null
  mobytTypeQuality: string | null
  mobytUserKey: string | null
  partition: string
  transportName: string | null
}
type TransportMobytPut = {
  dataSegmentCode?: (string | null) | undefined
  mobytAccessToken: string | null
  mobytFrom: string | null
  mobytTypeQuality: string | null
  mobytUserKey: string | null
  transportName: string | null
}
type TransportMobytJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  mobytAccessToken: string | null
  mobytFrom: string | null
  mobytTypeQuality: string | null
  mobytUserKey: string | null
  transportName: string | null
}
type TransportOctopushGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  octopushApiKey: string | null
  octopushFrom: string | null
  octopushType: string | null
  octopushUserLogin: string | null
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportOctopushJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  octopushApiKey: string | null
  octopushFrom: string | null
  octopushType: string | null
  octopushUserLogin: string | null
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportOctopushPost = {
  dataSegmentCode?: (string | null) | undefined
  octopushApiKey: string | null
  octopushFrom: string | null
  octopushType: string | null
  octopushUserLogin: string | null
  partition: string
  transportName: string | null
}
type TransportOctopushJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  octopushApiKey: string | null
  octopushFrom: string | null
  octopushType: string | null
  octopushUserLogin: string | null
  partition: string
  transportName: string | null
}
type TransportOctopushPut = {
  dataSegmentCode?: (string | null) | undefined
  octopushApiKey: string | null
  octopushFrom: string | null
  octopushType: string | null
  octopushUserLogin: string | null
  transportName: string | null
}
type TransportOctopushJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  octopushApiKey: string | null
  octopushFrom: string | null
  octopushType: string | null
  octopushUserLogin: string | null
  transportName: string | null
}
type TransportOneSignalGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  oneSignalApiKey: string | null
  oneSignalAppId: string | null
  oneSignalDefaultRecipientId?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportOneSignalJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  oneSignalApiKey: string | null
  oneSignalAppId: string | null
  oneSignalDefaultRecipientId?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportOneSignalPost = {
  dataSegmentCode?: (string | null) | undefined
  oneSignalApiKey: string | null
  oneSignalAppId: string | null
  oneSignalDefaultRecipientId?: (string | null) | undefined
  partition: string
  transportName: string | null
}
type TransportOneSignalJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  oneSignalApiKey: string | null
  oneSignalAppId: string | null
  oneSignalDefaultRecipientId?: (string | null) | undefined
  partition: string
  transportName: string | null
}
type TransportOneSignalPut = {
  dataSegmentCode?: (string | null) | undefined
  oneSignalApiKey: string | null
  oneSignalAppId: string | null
  oneSignalDefaultRecipientId?: (string | null) | undefined
  transportName: string | null
}
type TransportOneSignalJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  oneSignalApiKey: string | null
  oneSignalAppId: string | null
  oneSignalDefaultRecipientId?: (string | null) | undefined
  transportName: string | null
}
type TransportOpsgenieGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  opsgenieAlias?: (string | null) | undefined
  opsgenieApiKey: string | null
  opsgenieEntity?: (string | null) | undefined
  opsgenieNote?: (string | null) | undefined
  opsgeniePriority?: (string | null) | undefined
  opsgenieUser?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportOpsgenieJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  opsgenieAlias?: (string | null) | undefined
  opsgenieApiKey: string | null
  opsgenieEntity?: (string | null) | undefined
  opsgenieNote?: (string | null) | undefined
  opsgeniePriority?: (string | null) | undefined
  opsgenieUser?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportOpsgeniePost = {
  dataSegmentCode?: (string | null) | undefined
  opsgenieAlias?: (string | null) | undefined
  opsgenieApiKey: string | null
  opsgenieEntity?: (string | null) | undefined
  opsgenieNote?: (string | null) | undefined
  opsgeniePriority?: (string | null) | undefined
  opsgenieUser?: (string | null) | undefined
  partition: string
  transportName: string | null
}
type TransportOpsgenieJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  opsgenieAlias?: (string | null) | undefined
  opsgenieApiKey: string | null
  opsgenieEntity?: (string | null) | undefined
  opsgenieNote?: (string | null) | undefined
  opsgeniePriority?: (string | null) | undefined
  opsgenieUser?: (string | null) | undefined
  partition: string
  transportName: string | null
}
type TransportOpsgeniePut = {
  dataSegmentCode?: (string | null) | undefined
  opsgenieAlias?: (string | null) | undefined
  opsgenieApiKey: string | null
  opsgenieEntity?: (string | null) | undefined
  opsgenieNote?: (string | null) | undefined
  opsgeniePriority?: (string | null) | undefined
  opsgenieUser?: (string | null) | undefined
  transportName: string | null
}
type TransportOpsgenieJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  opsgenieAlias?: (string | null) | undefined
  opsgenieApiKey: string | null
  opsgenieEntity?: (string | null) | undefined
  opsgenieNote?: (string | null) | undefined
  opsgeniePriority?: (string | null) | undefined
  opsgenieUser?: (string | null) | undefined
  transportName: string | null
}
type TransportOrangeSmsGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  orangeSmsClientId: string | null
  orangeSmsClientSecret: string | null
  orangeSmsFrom: string | null
  orangeSmsSenderName: string | null
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportOrangeSmsJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  orangeSmsClientId: string | null
  orangeSmsClientSecret: string | null
  orangeSmsFrom: string | null
  orangeSmsSenderName: string | null
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportOrangeSmsPost = {
  dataSegmentCode?: (string | null) | undefined
  orangeSmsClientId: string | null
  orangeSmsClientSecret: string | null
  orangeSmsFrom: string | null
  orangeSmsSenderName: string | null
  partition: string
  transportName: string | null
}
type TransportOrangeSmsJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  orangeSmsClientId: string | null
  orangeSmsClientSecret: string | null
  orangeSmsFrom: string | null
  orangeSmsSenderName: string | null
  partition: string
  transportName: string | null
}
type TransportOrangeSmsPut = {
  dataSegmentCode?: (string | null) | undefined
  orangeSmsClientId: string | null
  orangeSmsClientSecret: string | null
  orangeSmsFrom: string | null
  orangeSmsSenderName: string | null
  transportName: string | null
}
type TransportOrangeSmsJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  orangeSmsClientId: string | null
  orangeSmsClientSecret: string | null
  orangeSmsFrom: string | null
  orangeSmsSenderName: string | null
  transportName: string | null
}
type TransportOvhCloudGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  ovhCloudApplicationKey: string | null
  ovhCloudApplicationSecret: string | null
  ovhCloudConsumerKey: string | null
  ovhCloudSender?: (string | null) | undefined
  ovhCloudServiceName: string | null
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportOvhCloudJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  ovhCloudApplicationKey: string | null
  ovhCloudApplicationSecret: string | null
  ovhCloudConsumerKey: string | null
  ovhCloudSender?: (string | null) | undefined
  ovhCloudServiceName: string | null
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportOvhCloudPost = {
  dataSegmentCode?: (string | null) | undefined
  ovhCloudApplicationKey: string | null
  ovhCloudApplicationSecret: string | null
  ovhCloudConsumerKey: string | null
  ovhCloudSender?: (string | null) | undefined
  ovhCloudServiceName: string | null
  partition: string
  transportName: string | null
}
type TransportOvhCloudJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  ovhCloudApplicationKey: string | null
  ovhCloudApplicationSecret: string | null
  ovhCloudConsumerKey: string | null
  ovhCloudSender?: (string | null) | undefined
  ovhCloudServiceName: string | null
  partition: string
  transportName: string | null
}
type TransportOvhCloudPut = {
  dataSegmentCode?: (string | null) | undefined
  ovhCloudApplicationKey: string | null
  ovhCloudApplicationSecret: string | null
  ovhCloudConsumerKey: string | null
  ovhCloudSender?: (string | null) | undefined
  ovhCloudServiceName: string | null
  transportName: string | null
}
type TransportOvhCloudJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  ovhCloudApplicationKey: string | null
  ovhCloudApplicationSecret: string | null
  ovhCloudConsumerKey: string | null
  ovhCloudSender?: (string | null) | undefined
  ovhCloudServiceName: string | null
  transportName: string | null
}
type TransportPagerDutyGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  pagerDutyApiToken: string | null
  pagerDutyDedupKey?: (string | null) | undefined
  pagerDutyEventAction: string | null
  pagerDutyPayloadClass?: (string | null) | undefined
  pagerDutyPayloadComponent?: (string | null) | undefined
  pagerDutyPayloadGroup?: (string | null) | undefined
  pagerDutyPayloadSeverity?: (string | null) | undefined
  pagerDutyPayloadSource?: (string | null) | undefined
  pagerDutyRoutingKey: string | null
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportPagerDutyJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  pagerDutyApiToken: string | null
  pagerDutyDedupKey?: (string | null) | undefined
  pagerDutyEventAction: string | null
  pagerDutyPayloadClass?: (string | null) | undefined
  pagerDutyPayloadComponent?: (string | null) | undefined
  pagerDutyPayloadGroup?: (string | null) | undefined
  pagerDutyPayloadSeverity?: (string | null) | undefined
  pagerDutyPayloadSource?: (string | null) | undefined
  pagerDutyRoutingKey: string | null
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportPagerDutyPost = {
  dataSegmentCode?: (string | null) | undefined
  pagerDutyApiToken: string | null
  pagerDutyDedupKey?: (string | null) | undefined
  pagerDutyEventAction: string | null
  pagerDutyPayloadClass?: (string | null) | undefined
  pagerDutyPayloadComponent?: (string | null) | undefined
  pagerDutyPayloadGroup?: (string | null) | undefined
  pagerDutyPayloadSeverity?: (string | null) | undefined
  pagerDutyPayloadSource?: (string | null) | undefined
  pagerDutyRoutingKey: string | null
  partition: string
  transportName: string | null
}
type TransportPagerDutyJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  pagerDutyApiToken: string | null
  pagerDutyDedupKey?: (string | null) | undefined
  pagerDutyEventAction: string | null
  pagerDutyPayloadClass?: (string | null) | undefined
  pagerDutyPayloadComponent?: (string | null) | undefined
  pagerDutyPayloadGroup?: (string | null) | undefined
  pagerDutyPayloadSeverity?: (string | null) | undefined
  pagerDutyPayloadSource?: (string | null) | undefined
  pagerDutyRoutingKey: string | null
  partition: string
  transportName: string | null
}
type TransportPagerDutyPut = {
  dataSegmentCode?: (string | null) | undefined
  pagerDutyApiToken: string | null
  pagerDutyDedupKey?: (string | null) | undefined
  pagerDutyEventAction: string | null
  pagerDutyPayloadClass?: (string | null) | undefined
  pagerDutyPayloadComponent?: (string | null) | undefined
  pagerDutyPayloadGroup?: (string | null) | undefined
  pagerDutyPayloadSeverity?: (string | null) | undefined
  pagerDutyPayloadSource?: (string | null) | undefined
  pagerDutyRoutingKey: string | null
  transportName: string | null
}
type TransportPagerDutyJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  pagerDutyApiToken: string | null
  pagerDutyDedupKey?: (string | null) | undefined
  pagerDutyEventAction: string | null
  pagerDutyPayloadClass?: (string | null) | undefined
  pagerDutyPayloadComponent?: (string | null) | undefined
  pagerDutyPayloadGroup?: (string | null) | undefined
  pagerDutyPayloadSeverity?: (string | null) | undefined
  pagerDutyPayloadSource?: (string | null) | undefined
  pagerDutyRoutingKey: string | null
  transportName: string | null
}
type TransportPagerTreeGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  pagerTreeAccessToken: string | null
  pagerTreeAccountUserId?: (string | null) | undefined
  pagerTreeRouterId?: (string | null) | undefined
  pagerTreeTeamId?: (string | null) | undefined
  pagerTreeUrgency: string | null
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportPagerTreeJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  pagerTreeAccessToken: string | null
  pagerTreeAccountUserId?: (string | null) | undefined
  pagerTreeRouterId?: (string | null) | undefined
  pagerTreeTeamId?: (string | null) | undefined
  pagerTreeUrgency: string | null
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportPagerTreePost = {
  dataSegmentCode?: (string | null) | undefined
  pagerTreeAccessToken: string | null
  pagerTreeAccountUserId?: (string | null) | undefined
  pagerTreeRouterId?: (string | null) | undefined
  pagerTreeTeamId?: (string | null) | undefined
  pagerTreeUrgency: string | null
  partition: string
  transportName: string | null
}
type TransportPagerTreeJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  pagerTreeAccessToken: string | null
  pagerTreeAccountUserId?: (string | null) | undefined
  pagerTreeRouterId?: (string | null) | undefined
  pagerTreeTeamId?: (string | null) | undefined
  pagerTreeUrgency: string | null
  partition: string
  transportName: string | null
}
type TransportPagerTreePut = {
  dataSegmentCode?: (string | null) | undefined
  pagerTreeAccessToken: string | null
  pagerTreeAccountUserId?: (string | null) | undefined
  pagerTreeRouterId?: (string | null) | undefined
  pagerTreeTeamId?: (string | null) | undefined
  pagerTreeUrgency: string | null
  transportName: string | null
}
type TransportPagerTreeJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  pagerTreeAccessToken: string | null
  pagerTreeAccountUserId?: (string | null) | undefined
  pagerTreeRouterId?: (string | null) | undefined
  pagerTreeTeamId?: (string | null) | undefined
  pagerTreeUrgency: string | null
  transportName: string | null
}
type TransportPlivoGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  plivoAuthId: string | null
  plivoAuthToken: string | null
  plivoFrom: string | null
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportPlivoJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  plivoAuthId: string | null
  plivoAuthToken: string | null
  plivoFrom: string | null
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportPlivoPost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  plivoAuthId: string | null
  plivoAuthToken: string | null
  plivoFrom: string | null
  transportName: string | null
}
type TransportPlivoJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  plivoAuthId: string | null
  plivoAuthToken: string | null
  plivoFrom: string | null
  transportName: string | null
}
type TransportPlivoPut = {
  dataSegmentCode?: (string | null) | undefined
  plivoAuthId: string | null
  plivoAuthToken: string | null
  plivoFrom: string | null
  transportName: string | null
}
type TransportPlivoJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  plivoAuthId: string | null
  plivoAuthToken: string | null
  plivoFrom: string | null
  transportName: string | null
}
type TransportPushbulletGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  pushbulletAccessToken: string | null
  pushbulletEmail?: (string | null) | undefined
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportPushbulletJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  pushbulletAccessToken: string | null
  pushbulletEmail?: (string | null) | undefined
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportPushbulletPost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  pushbulletAccessToken: string | null
  pushbulletEmail?: (string | null) | undefined
  transportName: string | null
}
type TransportPushbulletJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  pushbulletAccessToken: string | null
  pushbulletEmail?: (string | null) | undefined
  transportName: string | null
}
type TransportPushbulletPut = {
  dataSegmentCode?: (string | null) | undefined
  pushbulletAccessToken: string | null
  pushbulletEmail?: (string | null) | undefined
  transportName: string | null
}
type TransportPushbulletJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  pushbulletAccessToken: string | null
  pushbulletEmail?: (string | null) | undefined
  transportName: string | null
}
type TransportPushoverGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  pushoverAppToken: string | null
  pushoverUserKey: string | null
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportPushoverJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  pushoverAppToken: string | null
  pushoverUserKey: string | null
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportPushoverPost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  pushoverAppToken: string | null
  pushoverUserKey: string | null
  transportName: string | null
}
type TransportPushoverJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  pushoverAppToken: string | null
  pushoverUserKey: string | null
  transportName: string | null
}
type TransportPushoverPut = {
  dataSegmentCode?: (string | null) | undefined
  pushoverAppToken: string | null
  pushoverUserKey: string | null
  transportName: string | null
}
type TransportPushoverJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  pushoverAppToken: string | null
  pushoverUserKey: string | null
  transportName: string | null
}
type TransportPushyGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  pushyApiKey: string | null
  pushyTo: string | null
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportPushyJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  pushyApiKey: string | null
  pushyTo: string | null
  resourceOwner?: (string | null) | undefined
  transportName: string | null
}
type TransportPushyPost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  pushyApiKey: string | null
  pushyTo: string | null
  transportName: string | null
}
type TransportPushyJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  pushyApiKey: string | null
  pushyTo: string | null
  transportName: string | null
}
type TransportPushyPut = {
  dataSegmentCode?: (string | null) | undefined
  pushyApiKey: string | null
  pushyTo: string | null
  transportName: string | null
}
type TransportPushyJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  pushyApiKey: string | null
  pushyTo: string | null
  transportName: string | null
}
type TransportRingCentralGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  ringCentralApiToken: string | null
  ringCentralFrom: string | null
  transportName: string | null
}
type TransportRingCentralJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  ringCentralApiToken: string | null
  ringCentralFrom: string | null
  transportName: string | null
}
type TransportRingCentralPost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  ringCentralApiToken: string | null
  ringCentralFrom: string | null
  transportName: string | null
}
type TransportRingCentralJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  ringCentralApiToken: string | null
  ringCentralFrom: string | null
  transportName: string | null
}
type TransportRingCentralPut = {
  dataSegmentCode?: (string | null) | undefined
  ringCentralApiToken: string | null
  ringCentralFrom: string | null
  transportName: string | null
}
type TransportRingCentralJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  ringCentralApiToken: string | null
  ringCentralFrom: string | null
  transportName: string | null
}
type TransportRocketChatGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  rocketChatChannel: string | null
  rocketChatToken: string | null
  transportName: string | null
}
type TransportRocketChatJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  rocketChatChannel: string | null
  rocketChatToken: string | null
  transportName: string | null
}
type TransportRocketChatPost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  rocketChatChannel: string | null
  rocketChatToken: string | null
  transportName: string | null
}
type TransportRocketChatJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  rocketChatChannel: string | null
  rocketChatToken: string | null
  transportName: string | null
}
type TransportRocketChatPut = {
  dataSegmentCode?: (string | null) | undefined
  rocketChatChannel: string | null
  rocketChatToken: string | null
  transportName: string | null
}
type TransportRocketChatJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  rocketChatChannel: string | null
  rocketChatToken: string | null
  transportName: string | null
}
type TransportSendberryGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  sendberryAuthKey: string | null
  sendberryFrom: string | null
  sendberryPassword: string | null
  sendberryUsername: string | null
  transportName: string | null
}
type TransportSendberryJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  sendberryAuthKey: string | null
  sendberryFrom: string | null
  sendberryPassword: string | null
  sendberryUsername: string | null
  transportName: string | null
}
type TransportSendberryPost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  sendberryAuthKey: string | null
  sendberryFrom: string | null
  sendberryPassword: string | null
  sendberryUsername: string | null
  transportName: string | null
}
type TransportSendberryJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  sendberryAuthKey: string | null
  sendberryFrom: string | null
  sendberryPassword: string | null
  sendberryUsername: string | null
  transportName: string | null
}
type TransportSendberryPut = {
  dataSegmentCode?: (string | null) | undefined
  sendberryAuthKey: string | null
  sendberryFrom: string | null
  sendberryPassword: string | null
  sendberryUsername: string | null
  transportName: string | null
}
type TransportSendberryJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  sendberryAuthKey: string | null
  sendberryFrom: string | null
  sendberryPassword: string | null
  sendberryUsername: string | null
  transportName: string | null
}
type TransportSendinblueGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  sendinblueApiKey: string | null
  sendinblueSenderPhone: string | null
  transportName: string | null
}
type TransportSendinblueJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  sendinblueApiKey: string | null
  sendinblueSenderPhone: string | null
  transportName: string | null
}
type TransportSendinbluePost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  sendinblueApiKey: string | null
  sendinblueSenderPhone: string | null
  transportName: string | null
}
type TransportSendinblueJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  sendinblueApiKey: string | null
  sendinblueSenderPhone: string | null
  transportName: string | null
}
type TransportSendinbluePut = {
  dataSegmentCode?: (string | null) | undefined
  sendinblueApiKey: string | null
  sendinblueSenderPhone: string | null
  transportName: string | null
}
type TransportSendinblueJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  sendinblueApiKey: string | null
  sendinblueSenderPhone: string | null
  transportName: string | null
}
type TransportSimpleTextinGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  simpleTextinApiKey: string | null
  simpleTextinFrom?: (string | null) | undefined
  transportName: string | null
}
type TransportSimpleTextinJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  simpleTextinApiKey: string | null
  simpleTextinFrom?: (string | null) | undefined
  transportName: string | null
}
type TransportSimpleTextinPost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  simpleTextinApiKey: string | null
  simpleTextinFrom?: (string | null) | undefined
  transportName: string | null
}
type TransportSimpleTextinJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  simpleTextinApiKey: string | null
  simpleTextinFrom?: (string | null) | undefined
  transportName: string | null
}
type TransportSimpleTextinPut = {
  dataSegmentCode?: (string | null) | undefined
  simpleTextinApiKey: string | null
  simpleTextinFrom?: (string | null) | undefined
  transportName: string | null
}
type TransportSimpleTextinJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  simpleTextinApiKey: string | null
  simpleTextinFrom?: (string | null) | undefined
  transportName: string | null
}
type TransportSinchGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  sinchAuthToken: string | null
  sinchFrom: string | null
  sinchServicePlanId: string | null
  transportName: string | null
}
type TransportSinchJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  sinchAuthToken: string | null
  sinchFrom: string | null
  sinchServicePlanId: string | null
  transportName: string | null
}
type TransportSinchPost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  sinchAuthToken: string | null
  sinchFrom: string | null
  sinchServicePlanId: string | null
  transportName: string | null
}
type TransportSinchJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  sinchAuthToken: string | null
  sinchFrom: string | null
  sinchServicePlanId: string | null
  transportName: string | null
}
type TransportSinchPut = {
  dataSegmentCode?: (string | null) | undefined
  sinchAuthToken: string | null
  sinchFrom: string | null
  sinchServicePlanId: string | null
  transportName: string | null
}
type TransportSinchJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  sinchAuthToken: string | null
  sinchFrom: string | null
  sinchServicePlanId: string | null
  transportName: string | null
}
type TransportSlackGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  slackChannel: string | null
  slackToken: string | null
  transportName: string | null
}
type TransportSlackJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  slackChannel: string | null
  slackToken: string | null
  transportName: string | null
}
type TransportSlackPost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  slackChannel: string | null
  slackToken: string | null
  transportName: string | null
}
type TransportSlackJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  slackChannel: string | null
  slackToken: string | null
  transportName: string | null
}
type TransportSlackPut = {
  dataSegmentCode?: (string | null) | undefined
  slackChannel: string | null
  slackToken: string | null
  transportName: string | null
}
type TransportSlackJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  slackChannel: string | null
  slackToken: string | null
  transportName: string | null
}
type TransportSmsBiurasGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  smsBiurasApiKey: string | null
  smsBiurasFrom: string | null
  smsBiurasUid: string | null
  transportName: string | null
}
type TransportSmsBiurasJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  smsBiurasApiKey: string | null
  smsBiurasFrom: string | null
  smsBiurasUid: string | null
  transportName: string | null
}
type TransportSmsBiurasPost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  smsBiurasApiKey: string | null
  smsBiurasFrom: string | null
  smsBiurasUid: string | null
  transportName: string | null
}
type TransportSmsBiurasJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  smsBiurasApiKey: string | null
  smsBiurasFrom: string | null
  smsBiurasUid: string | null
  transportName: string | null
}
type TransportSmsBiurasPut = {
  dataSegmentCode?: (string | null) | undefined
  smsBiurasApiKey: string | null
  smsBiurasFrom: string | null
  smsBiurasUid: string | null
  transportName: string | null
}
type TransportSmsBiurasJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  smsBiurasApiKey: string | null
  smsBiurasFrom: string | null
  smsBiurasUid: string | null
  transportName: string | null
}
type TransportSmsFactorGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  smsFactorPushType: string | null
  smsFactorSender: string | null
  smsFactorToken: string | null
  transportName: string | null
}
type TransportSmsFactorJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  smsFactorPushType: string | null
  smsFactorSender: string | null
  smsFactorToken: string | null
  transportName: string | null
}
type TransportSmsFactorPost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  smsFactorPushType: string | null
  smsFactorSender: string | null
  smsFactorToken: string | null
  transportName: string | null
}
type TransportSmsFactorJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  smsFactorPushType: string | null
  smsFactorSender: string | null
  smsFactorToken: string | null
  transportName: string | null
}
type TransportSmsFactorPut = {
  dataSegmentCode?: (string | null) | undefined
  smsFactorPushType: string | null
  smsFactorSender: string | null
  smsFactorToken: string | null
  transportName: string | null
}
type TransportSmsFactorJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  smsFactorPushType: string | null
  smsFactorSender: string | null
  smsFactorToken: string | null
  transportName: string | null
}
type TransportSms77Get = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  sms77ApiKey: string | null
  sms77From?: (string | null) | undefined
  transportName: string | null
}
type TransportSms77JsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  sms77ApiKey: string | null
  sms77From?: (string | null) | undefined
  transportName: string | null
}
type TransportSms77Post = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  sms77ApiKey: string | null
  sms77From?: (string | null) | undefined
  transportName: string | null
}
type TransportSms77JsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  sms77ApiKey: string | null
  sms77From?: (string | null) | undefined
  transportName: string | null
}
type TransportSms77Put = {
  dataSegmentCode?: (string | null) | undefined
  sms77ApiKey: string | null
  sms77From?: (string | null) | undefined
  transportName: string | null
}
type TransportSms77JsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  sms77ApiKey: string | null
  sms77From?: (string | null) | undefined
  transportName: string | null
}
type TransportSmsapiGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  smsapiFrom: string | null
  smsapiToken: string | null
  transportName: string | null
}
type TransportSmsapiJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  smsapiFrom: string | null
  smsapiToken: string | null
  transportName: string | null
}
type TransportSmsapiPost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  smsapiFrom: string | null
  smsapiToken: string | null
  transportName: string | null
}
type TransportSmsapiJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  smsapiFrom: string | null
  smsapiToken: string | null
  transportName: string | null
}
type TransportSmsapiPut = {
  dataSegmentCode?: (string | null) | undefined
  smsapiFrom: string | null
  smsapiToken: string | null
  transportName: string | null
}
type TransportSmsapiJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  smsapiFrom: string | null
  smsapiToken: string | null
  transportName: string | null
}
type TransportSmscGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  smscFrom: string | null
  smscLogin: string | null
  smscPassword: string | null
  transportName: string | null
}
type TransportSmscJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  smscFrom: string | null
  smscLogin: string | null
  smscPassword: string | null
  transportName: string | null
}
type TransportSmscPost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  smscFrom: string | null
  smscLogin: string | null
  smscPassword: string | null
  transportName: string | null
}
type TransportSmscJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  smscFrom: string | null
  smscLogin: string | null
  smscPassword: string | null
  transportName: string | null
}
type TransportSmscPut = {
  dataSegmentCode?: (string | null) | undefined
  smscFrom: string | null
  smscLogin: string | null
  smscPassword: string | null
  transportName: string | null
}
type TransportSmscJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  smscFrom: string | null
  smscLogin: string | null
  smscPassword: string | null
  transportName: string | null
}
type TransportSmsmodeGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  smsmodeApiKey: string | null
  smsmodeFrom: string | null
  transportName: string | null
}
type TransportSmsmodeJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  smsmodeApiKey: string | null
  smsmodeFrom: string | null
  transportName: string | null
}
type TransportSmsmodePost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  smsmodeApiKey: string | null
  smsmodeFrom: string | null
  transportName: string | null
}
type TransportSmsmodeJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  smsmodeApiKey: string | null
  smsmodeFrom: string | null
  transportName: string | null
}
type TransportSmsmodePut = {
  dataSegmentCode?: (string | null) | undefined
  smsmodeApiKey: string | null
  smsmodeFrom: string | null
  transportName: string | null
}
type TransportSmsmodeJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  smsmodeApiKey: string | null
  smsmodeFrom: string | null
  transportName: string | null
}
type TransportSpotHitGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  spotHitFrom: string | null
  spotHitToken: string | null
  transportName: string | null
}
type TransportSpotHitJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  spotHitFrom: string | null
  spotHitToken: string | null
  transportName: string | null
}
type TransportSpotHitPost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  spotHitFrom: string | null
  spotHitToken: string | null
  transportName: string | null
}
type TransportSpotHitJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  spotHitFrom: string | null
  spotHitToken: string | null
  transportName: string | null
}
type TransportSpotHitPut = {
  dataSegmentCode?: (string | null) | undefined
  spotHitFrom: string | null
  spotHitToken: string | null
  transportName: string | null
}
type TransportSpotHitJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  spotHitFrom: string | null
  spotHitToken: string | null
  transportName: string | null
}
type TransportTelegramGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  telegramChatId: string | null
  telegramToken: string | null
  transportName: string | null
}
type TransportTelegramJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  telegramChatId: string | null
  telegramToken: string | null
  transportName: string | null
}
type TransportTelegramPost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  telegramChatId: string | null
  telegramToken: string | null
  transportName: string | null
}
type TransportTelegramJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  telegramChatId: string | null
  telegramToken: string | null
  transportName: string | null
}
type TransportTelegramPut = {
  dataSegmentCode?: (string | null) | undefined
  telegramChatId: string | null
  telegramToken: string | null
  transportName: string | null
}
type TransportTelegramJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  telegramChatId: string | null
  telegramToken: string | null
  transportName: string | null
}
type TransportTelnyxGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  telnyxApiKey: string | null
  telnyxFrom: string | null
  telnyxMessagingProfileId: string | null
  transportName: string | null
}
type TransportTelnyxJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  telnyxApiKey: string | null
  telnyxFrom: string | null
  telnyxMessagingProfileId: string | null
  transportName: string | null
}
type TransportTelnyxPost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  telnyxApiKey: string | null
  telnyxFrom: string | null
  telnyxMessagingProfileId: string | null
  transportName: string | null
}
type TransportTelnyxJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  telnyxApiKey: string | null
  telnyxFrom: string | null
  telnyxMessagingProfileId: string | null
  transportName: string | null
}
type TransportTelnyxPut = {
  dataSegmentCode?: (string | null) | undefined
  telnyxApiKey: string | null
  telnyxFrom: string | null
  telnyxMessagingProfileId: string | null
  transportName: string | null
}
type TransportTelnyxJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  telnyxApiKey: string | null
  telnyxFrom: string | null
  telnyxMessagingProfileId: string | null
  transportName: string | null
}
type TransportTermiiGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  termiiApiKey: string | null
  termiiChannel: string | null
  termiiFrom: string | null
  transportName: string | null
}
type TransportTermiiJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  termiiApiKey: string | null
  termiiChannel: string | null
  termiiFrom: string | null
  transportName: string | null
}
type TransportTermiiPost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  termiiApiKey: string | null
  termiiChannel: string | null
  termiiFrom: string | null
  transportName: string | null
}
type TransportTermiiJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  termiiApiKey: string | null
  termiiChannel: string | null
  termiiFrom: string | null
  transportName: string | null
}
type TransportTermiiPut = {
  dataSegmentCode?: (string | null) | undefined
  termiiApiKey: string | null
  termiiChannel: string | null
  termiiFrom: string | null
  transportName: string | null
}
type TransportTermiiJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  termiiApiKey: string | null
  termiiChannel: string | null
  termiiFrom: string | null
  transportName: string | null
}
type TransportTrelloGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
  trelloApiKey: string | null
  trelloApiToken: string | null
  trelloListId: string | null
}
type TransportTrelloJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
  trelloApiKey: string | null
  trelloApiToken: string | null
  trelloListId: string | null
}
type TransportTrelloPost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  transportName: string | null
  trelloApiKey: string | null
  trelloApiToken: string | null
  trelloListId: string | null
}
type TransportTrelloJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  transportName: string | null
  trelloApiKey: string | null
  trelloApiToken: string | null
  trelloListId: string | null
}
type TransportTrelloPut = {
  dataSegmentCode?: (string | null) | undefined
  transportName: string | null
  trelloApiKey: string | null
  trelloApiToken: string | null
  trelloListId: string | null
}
type TransportTrelloJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  transportName: string | null
  trelloApiKey: string | null
  trelloApiToken: string | null
  trelloListId: string | null
}
type TransportTurboSmsGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
  turboSmsAuthToken: string | null
  turboSmsFrom: string | null
}
type TransportTurboSmsJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
  turboSmsAuthToken: string | null
  turboSmsFrom: string | null
}
type TransportTurboSmsPost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  transportName: string | null
  turboSmsAuthToken: string | null
  turboSmsFrom: string | null
}
type TransportTurboSmsJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  transportName: string | null
  turboSmsAuthToken: string | null
  turboSmsFrom: string | null
}
type TransportTurboSmsPut = {
  dataSegmentCode?: (string | null) | undefined
  transportName: string | null
  turboSmsAuthToken: string | null
  turboSmsFrom: string | null
}
type TransportTurboSmsJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  transportName: string | null
  turboSmsAuthToken: string | null
  turboSmsFrom: string | null
}
type TransportTwilioGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
  twilioFrom: string | null
  twilioSid: string | null
  twilioToken: string | null
}
type TransportTwilioJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
  twilioFrom: string | null
  twilioSid: string | null
  twilioToken: string | null
}
type TransportTwilioPost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  transportName: string | null
  twilioFrom: string | null
  twilioSid: string | null
  twilioToken: string | null
}
type TransportTwilioJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  transportName: string | null
  twilioFrom: string | null
  twilioSid: string | null
  twilioToken: string | null
}
type TransportTwilioPut = {
  dataSegmentCode?: (string | null) | undefined
  transportName: string | null
  twilioFrom: string | null
  twilioSid: string | null
  twilioToken: string | null
}
type TransportTwilioJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  transportName: string | null
  twilioFrom: string | null
  twilioSid: string | null
  twilioToken: string | null
}
type TransportTwitterGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
  twitterAccessToken: string | null
}
type TransportTwitterJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
  twitterAccessToken: string | null
}
type TransportTwitterPost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  transportName: string | null
  twitterAccessToken: string | null
}
type TransportTwitterJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  transportName: string | null
  twitterAccessToken: string | null
}
type TransportTwitterPut = {
  dataSegmentCode?: (string | null) | undefined
  transportName: string | null
  twitterAccessToken: string | null
}
type TransportTwitterJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  transportName: string | null
  twitterAccessToken: string | null
}
type TransportVonageGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
  vonageFrom: string | null
  vonageKey: string | null
  vonageSecret: string | null
}
type TransportVonageJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
  vonageFrom: string | null
  vonageKey: string | null
  vonageSecret: string | null
}
type TransportVonagePost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  transportName: string | null
  vonageFrom: string | null
  vonageKey: string | null
  vonageSecret: string | null
}
type TransportVonageJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  transportName: string | null
  vonageFrom: string | null
  vonageKey: string | null
  vonageSecret: string | null
}
type TransportVonagePut = {
  dataSegmentCode?: (string | null) | undefined
  transportName: string | null
  vonageFrom: string | null
  vonageKey: string | null
  vonageSecret: string | null
}
type TransportVonageJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  transportName: string | null
  vonageFrom: string | null
  vonageKey: string | null
  vonageSecret: string | null
}
type TransportWebhookGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  httpMethodCode: string
  id?: (string | null) | undefined
  mustBeEncryptedValue?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
  webhookHeaders?: (string[] | null) | undefined
  webhookUrl: string | null
}
type TransportWebhookJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  httpMethodCode: string
  id?: (string | null) | undefined
  mustBeEncryptedValue?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
  webhookHeaders?: (string[] | null) | undefined
  webhookUrl: string | null
}
type TransportWebhookPost = {
  dataSegmentCode?: (string | null) | undefined
  httpMethodCode: string
  mustBeEncryptedValue?: (string | null) | undefined
  partition: string
  transportName: string | null
  webhookHeaders?: (string[] | null) | undefined
  webhookUrl: string | null
}
type TransportWebhookJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  httpMethodCode: string
  mustBeEncryptedValue?: (string | null) | undefined
  partition: string
  transportName: string | null
  webhookHeaders?: (string[] | null) | undefined
  webhookUrl: string | null
}
type TransportWebhookPut = {
  dataSegmentCode?: (string | null) | undefined
  httpMethodCode: string
  mustBeEncryptedValue?: (string | null) | undefined
  transportName: string | null
  webhookHeaders?: (string[] | null) | undefined
  webhookUrl: string | null
}
type TransportWebhookJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  httpMethodCode: string
  mustBeEncryptedValue?: (string | null) | undefined
  transportName: string | null
  webhookHeaders?: (string[] | null) | undefined
  webhookUrl: string | null
}
type TransportYunpianGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
  yunpianApiKey: string | null
}
type TransportYunpianJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
  yunpianApiKey: string | null
}
type TransportYunpianPost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  transportName: string | null
  yunpianApiKey: string | null
}
type TransportYunpianJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  transportName: string | null
  yunpianApiKey: string | null
}
type TransportYunpianPut = {
  dataSegmentCode?: (string | null) | undefined
  transportName: string | null
  yunpianApiKey: string | null
}
type TransportYunpianJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  transportName: string | null
  yunpianApiKey: string | null
}
type TransportZendeskGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
  zendeskEmail: string | null
  zendeskHost: string | null
  zendeskToken: string | null
}
type TransportZendeskJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
  zendeskEmail: string | null
  zendeskHost: string | null
  zendeskToken: string | null
}
type TransportZendeskPost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  transportName: string | null
  zendeskEmail: string | null
  zendeskHost: string | null
  zendeskToken: string | null
}
type TransportZendeskJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  transportName: string | null
  zendeskEmail: string | null
  zendeskHost: string | null
  zendeskToken: string | null
}
type TransportZendeskPut = {
  dataSegmentCode?: (string | null) | undefined
  transportName: string | null
  zendeskEmail: string | null
  zendeskHost: string | null
  zendeskToken: string | null
}
type TransportZendeskJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  transportName: string | null
  zendeskEmail: string | null
  zendeskHost: string | null
  zendeskToken: string | null
}
type TransportZulipGet = {
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
  zulipChannel: string | null
  zulipEmail: string | null
  zulipHost: string | null
  zulipToken: string | null
}
type TransportZulipJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  createdAt?: string | undefined
  dataSegmentCode?: (string | null) | undefined
  id?: (string | null) | undefined
  partition: string
  resourceOwner?: (string | null) | undefined
  transportName: string | null
  zulipChannel: string | null
  zulipEmail: string | null
  zulipHost: string | null
  zulipToken: string | null
}
type TransportZulipPost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  transportName: string | null
  zulipChannel: string | null
  zulipEmail: string | null
  zulipHost: string | null
  zulipToken: string | null
}
type TransportZulipJsonldPost = {
  dataSegmentCode?: (string | null) | undefined
  partition: string
  transportName: string | null
  zulipChannel: string | null
  zulipEmail: string | null
  zulipHost: string | null
  zulipToken: string | null
}
type TransportZulipPut = {
  dataSegmentCode?: (string | null) | undefined
  transportName: string | null
  zulipChannel: string | null
  zulipEmail: string | null
  zulipHost: string | null
  zulipToken: string | null
}
type TransportZulipJsonldPut = {
  dataSegmentCode?: (string | null) | undefined
  transportName: string | null
  zulipChannel: string | null
  zulipEmail: string | null
  zulipHost: string | null
  zulipToken: string | null
}
type UserAccountGet = {
  accountLevelCode?: string | undefined
  creditsOveragePercentTripSwitch?: (number | null) | undefined
  email?: (string | null) | undefined
  firstName?: string | undefined
  id?: (string | null) | undefined
  isDelinquent?: boolean | undefined
  lastName?: (string | null) | undefined
  timezoneCode?: string | undefined
}
type UserAccountJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  accountLevelCode?: string | undefined
  creditsOveragePercentTripSwitch?: (number | null) | undefined
  email?: (string | null) | undefined
  firstName?: string | undefined
  id?: (string | null) | undefined
  isDelinquent?: boolean | undefined
  lastName?: (string | null) | undefined
  timezoneCode?: string | undefined
}
type UserAccountLevelCodeGet = { codeName?: string | undefined; id?: string | undefined }
type UserAccountLevelCodeJsonldGet = {
  '@context'?: string | { '@vocab': string; hydra: 'http://www.w3.org/ns/hydra/core#' } | undefined
  '@id'?: string | undefined
  '@type'?: string | undefined
  codeName?: string | undefined
  id?: string | undefined
}
type UserAccountPut = { creditsOveragePercentTripSwitch?: (number | null) | undefined }
type UserAccountJsonldPut = { creditsOveragePercentTripSwitch?: (number | null) | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/alert-log': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                monitor?: string | undefined
                'monitor[]'?: string[] | undefined
                alertService?: string | undefined
                'alertService[]'?: string[] | undefined
                alertLogStatusCode?: string | undefined
                'alertLogStatusCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: AlertLogGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                monitor?: string | undefined
                'monitor[]'?: string[] | undefined
                alertService?: string | undefined
                'alertService[]'?: string[] | undefined
                alertLogStatusCode?: string | undefined
                'alertLogStatusCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': AlertLogJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                monitor?: string | undefined
                'monitor[]'?: string[] | undefined
                alertService?: string | undefined
                'alertService[]'?: string[] | undefined
                alertLogStatusCode?: string | undefined
                'alertLogStatusCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: AlertLogGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                monitor?: string | undefined
                'monitor[]'?: string[] | undefined
                alertService?: string | undefined
                'alertService[]'?: string[] | undefined
                alertLogStatusCode?: string | undefined
                'alertLogStatusCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                monitor?: string | undefined
                'monitor[]'?: string[] | undefined
                alertService?: string | undefined
                'alertService[]'?: string[] | undefined
                alertLogStatusCode?: string | undefined
                'alertLogStatusCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                monitor?: string | undefined
                'monitor[]'?: string[] | undefined
                alertService?: string | undefined
                'alertService[]'?: string[] | undefined
                alertLogStatusCode?: string | undefined
                'alertLogStatusCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/alert-log-status-code': {
      $get:
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: AlertLogStatusCodeGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: {
              'hydra:member': AlertLogStatusCodeJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: AlertLogStatusCodeGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/alert-log-status-code/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: AlertLogStatusCodeGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: AlertLogStatusCodeJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: AlertLogStatusCodeGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/api/alert-log/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: AlertLogGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: AlertLogJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: AlertLogGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/api/alert-service': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: AlertServiceGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': AlertServiceJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: AlertServiceGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: AlertServicePost | AlertServiceJsonldPost }
            output: AlertServiceGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: AlertServicePost | AlertServiceJsonldPost }
            output: AlertServiceJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: AlertServicePost | AlertServiceJsonldPost }
            output: AlertServiceGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: AlertServicePost | AlertServiceJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: AlertServicePost | AlertServiceJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: AlertServicePost | AlertServiceJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: AlertServicePost | AlertServiceJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: AlertServicePost | AlertServiceJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/alert-service-transport-code': {
      $get:
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: AlertServiceTransportCodeGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: {
              'hydra:member': AlertServiceTransportCodeJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: AlertServiceTransportCodeGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/alert-service-transport-code/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: AlertServiceTransportCodeGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: AlertServiceTransportCodeJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: AlertServiceTransportCodeGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/api/alert-service/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: AlertServiceGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: AlertServiceJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: AlertServiceGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & { json: AlertServicePut | AlertServiceJsonldPut }
            output: AlertServiceGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: AlertServicePut | AlertServiceJsonldPut }
            output: AlertServiceJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: AlertServicePut | AlertServiceJsonldPut }
            output: AlertServiceGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: AlertServicePut | AlertServiceJsonldPut }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: AlertServicePut | AlertServiceJsonldPut }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: AlertServicePut | AlertServiceJsonldPut }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: AlertServicePut | AlertServiceJsonldPut }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: AlertServicePut | AlertServiceJsonldPut }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: AlertServicePut | AlertServiceJsonldPut }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/credits-consumption': {
      $get:
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: CreditsConsumptionGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: {
              'hydra:member': CreditsConsumptionJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: CreditsConsumptionGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/credits-consumption/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: CreditsConsumptionGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: CreditsConsumptionJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: CreditsConsumptionGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/api/http-method-code': {
      $get:
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: HttpMethodCodeGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: {
              'hydra:member': HttpMethodCodeJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: HttpMethodCodeGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/http-method-code/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: HttpMethodCodeGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: HttpMethodCodeJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: HttpMethodCodeGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/api/media-object': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: MediaObjectGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': MediaObjectJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: MediaObjectGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: {
              form: {
                dataSegmentCode?: string | undefined
                file?: File | undefined
                keywords?: string | undefined
                partition?: string | undefined
              }
            }
            output: MediaObjectGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              form: {
                dataSegmentCode?: string | undefined
                file?: File | undefined
                keywords?: string | undefined
                partition?: string | undefined
              }
            }
            output: MediaObjectJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              form: {
                dataSegmentCode?: string | undefined
                file?: File | undefined
                keywords?: string | undefined
                partition?: string | undefined
              }
            }
            output: MediaObjectGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: {
              form: {
                dataSegmentCode?: string | undefined
                file?: File | undefined
                keywords?: string | undefined
                partition?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              form: {
                dataSegmentCode?: string | undefined
                file?: File | undefined
                keywords?: string | undefined
                partition?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              form: {
                dataSegmentCode?: string | undefined
                file?: File | undefined
                keywords?: string | undefined
                partition?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              form: {
                dataSegmentCode?: string | undefined
                file?: File | undefined
                keywords?: string | undefined
                partition?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: {
              form: {
                dataSegmentCode?: string | undefined
                file?: File | undefined
                keywords?: string | undefined
                partition?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/media-object/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: MediaObjectGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: MediaObjectJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: MediaObjectGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/api/monitor': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: MonitorGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': MonitorJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: MonitorGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: MonitorPost | MonitorJsonldPost }
            output: MonitorGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: MonitorPost | MonitorJsonldPost }
            output: MonitorJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: MonitorPost | MonitorJsonldPost }
            output: MonitorGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: MonitorPost | MonitorJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: MonitorPost | MonitorJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: MonitorPost | MonitorJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: MonitorPost | MonitorJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: MonitorPost | MonitorJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/monitor-status-code': {
      $get:
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: MonitorStatusCodeGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: {
              'hydra:member': MonitorStatusCodeJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: MonitorStatusCodeGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/monitor-status-code/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: MonitorStatusCodeGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: MonitorStatusCodeJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: MonitorStatusCodeGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/api/monitor-status-log': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                monitor?: string | undefined
                'monitor[]'?: string[] | undefined
                monitorStatusCode?: string | undefined
                'monitorStatusCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: MonitorStatusLogGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                monitor?: string | undefined
                'monitor[]'?: string[] | undefined
                monitorStatusCode?: string | undefined
                'monitorStatusCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': MonitorStatusLogJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                monitor?: string | undefined
                'monitor[]'?: string[] | undefined
                monitorStatusCode?: string | undefined
                'monitorStatusCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: MonitorStatusLogGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                monitor?: string | undefined
                'monitor[]'?: string[] | undefined
                monitorStatusCode?: string | undefined
                'monitorStatusCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                monitor?: string | undefined
                'monitor[]'?: string[] | undefined
                monitorStatusCode?: string | undefined
                'monitorStatusCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                monitor?: string | undefined
                'monitor[]'?: string[] | undefined
                monitorStatusCode?: string | undefined
                'monitorStatusCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/monitor-status-log/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: MonitorStatusLogGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: MonitorStatusLogJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: MonitorStatusLogGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/api/monitor-type-code': {
      $get:
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: MonitorTypeCodeGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: {
              'hydra:member': MonitorTypeCodeJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: MonitorTypeCodeGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/monitor-type-code/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: MonitorTypeCodeGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: MonitorTypeCodeJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: MonitorTypeCodeGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/api/monitor/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: MonitorGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: MonitorJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: MonitorGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & { json: MonitorPut | MonitorJsonldPut }
            output: MonitorGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: MonitorPut | MonitorJsonldPut }
            output: MonitorJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: MonitorPut | MonitorJsonldPut }
            output: MonitorGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: MonitorPut | MonitorJsonldPut }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: MonitorPut | MonitorJsonldPut }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: MonitorPut | MonitorJsonldPut }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: MonitorPut | MonitorJsonldPut }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: MonitorPut | MonitorJsonldPut }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: MonitorPut | MonitorJsonldPut }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/partition': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: PartitionGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': PartitionJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: PartitionGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: PartitionPost | PartitionJsonldPost }
            output: PartitionGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: PartitionPost | PartitionJsonldPost }
            output: PartitionJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: PartitionPost | PartitionJsonldPost }
            output: PartitionGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: PartitionPost | PartitionJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: PartitionPost | PartitionJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: PartitionPost | PartitionJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: PartitionPost | PartitionJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: PartitionPost | PartitionJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/partition/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: PartitionGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: PartitionJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: PartitionGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & { json: PartitionPut | PartitionJsonldPut }
            output: PartitionGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: PartitionPut | PartitionJsonldPut }
            output: PartitionJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: PartitionPut | PartitionJsonldPut }
            output: PartitionGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: PartitionPut | PartitionJsonldPut }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: PartitionPut | PartitionJsonldPut }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: PartitionPut | PartitionJsonldPut }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: PartitionPut | PartitionJsonldPut }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: PartitionPut | PartitionJsonldPut }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: PartitionPut | PartitionJsonldPut }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/ping': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                monitor?: string | undefined
                'monitor[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: PingGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                monitor?: string | undefined
                'monitor[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': PingJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                monitor?: string | undefined
                'monitor[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: PingGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                monitor?: string | undefined
                'monitor[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                monitor?: string | undefined
                'monitor[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                monitor?: string | undefined
                'monitor[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: PingPost | PingJsonldPost }
            output: PingGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: PingPost | PingJsonldPost }
            output: PingJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: PingPost | PingJsonldPost }
            output: PingGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: PingPost | PingJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: PingPost | PingJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: PingPost | PingJsonldPost }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { json: PingPost | PingJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: PingPost | PingJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: PingPost | PingJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/ping-method-code': {
      $get:
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: PingMethodCodeGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: {
              'hydra:member': PingMethodCodeJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: PingMethodCodeGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/ping-method-code/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: PingMethodCodeGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: PingMethodCodeJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: PingMethodCodeGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/api/ping/:id': {
      $get:
        | { input: { param: { id: string } }; output: PingGet; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: PingJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: PingGet; outputFormat: 'text'; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/api/team-invitation': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                inviteeEmail?: string | undefined
                'inviteeEmail[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TeamInvitationGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                inviteeEmail?: string | undefined
                'inviteeEmail[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TeamInvitationJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                inviteeEmail?: string | undefined
                'inviteeEmail[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TeamInvitationGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                inviteeEmail?: string | undefined
                'inviteeEmail[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                inviteeEmail?: string | undefined
                'inviteeEmail[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                inviteeEmail?: string | undefined
                'inviteeEmail[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TeamInvitationPost | TeamInvitationJsonldPost }
            output: TeamInvitationGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TeamInvitationPost | TeamInvitationJsonldPost }
            output: TeamInvitationJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TeamInvitationPost | TeamInvitationJsonldPost }
            output: TeamInvitationGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TeamInvitationPost | TeamInvitationJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TeamInvitationPost | TeamInvitationJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TeamInvitationPost | TeamInvitationJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TeamInvitationPost | TeamInvitationJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TeamInvitationPost | TeamInvitationJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/team-invitation/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TeamInvitationGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TeamInvitationJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TeamInvitationGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/api/team-member': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                userAccount?: string | undefined
                'userAccount[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TeamMemberGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                userAccount?: string | undefined
                'userAccount[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TeamMemberJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                userAccount?: string | undefined
                'userAccount[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TeamMemberGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                userAccount?: string | undefined
                'userAccount[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                userAccount?: string | undefined
                'userAccount[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                userAccount?: string | undefined
                'userAccount[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/team-member-role-code': {
      $get:
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: TeamMemberRoleCodeGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: {
              'hydra:member': TeamMemberRoleCodeJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: TeamMemberRoleCodeGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/team-member-role-code/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: TeamMemberRoleCodeGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TeamMemberRoleCodeJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TeamMemberRoleCodeGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/api/team-member/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TeamMemberGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TeamMemberJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TeamMemberGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & { json: TeamMemberPut | TeamMemberJsonldPut }
            output: TeamMemberGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: TeamMemberPut | TeamMemberJsonldPut }
            output: TeamMemberJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: TeamMemberPut | TeamMemberJsonldPut }
            output: TeamMemberGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: TeamMemberPut | TeamMemberJsonldPut }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: TeamMemberPut | TeamMemberJsonldPut }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: TeamMemberPut | TeamMemberJsonldPut }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: TeamMemberPut | TeamMemberJsonldPut }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: TeamMemberPut | TeamMemberJsonldPut }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: TeamMemberPut | TeamMemberJsonldPut }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/timezone-code': {
      $get:
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: TimezoneCodeGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: {
              'hydra:member': TimezoneCodeJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: TimezoneCodeGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/timezone-code/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: TimezoneCodeGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TimezoneCodeJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TimezoneCodeGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/api/transport-alerta': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportAlertaGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportAlertaJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportAlertaGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportAlertaPost | TransportAlertaJsonldPost }
            output: TransportAlertaGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportAlertaPost | TransportAlertaJsonldPost }
            output: TransportAlertaJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportAlertaPost | TransportAlertaJsonldPost }
            output: TransportAlertaGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportAlertaPost | TransportAlertaJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportAlertaPost | TransportAlertaJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportAlertaPost | TransportAlertaJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportAlertaPost | TransportAlertaJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportAlertaPost | TransportAlertaJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-alerta/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportAlertaGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportAlertaJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportAlertaGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportAlertaPut | TransportAlertaJsonldPut
            }
            output: TransportAlertaGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportAlertaPut | TransportAlertaJsonldPut
            }
            output: TransportAlertaJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportAlertaPut | TransportAlertaJsonldPut
            }
            output: TransportAlertaGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportAlertaPut | TransportAlertaJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportAlertaPut | TransportAlertaJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportAlertaPut | TransportAlertaJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportAlertaPut | TransportAlertaJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportAlertaPut | TransportAlertaJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportAlertaPut | TransportAlertaJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-all-my-sms': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportAllMySmsGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportAllMySmsJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportAllMySmsGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportAllMySmsPost | TransportAllMySmsJsonldPost }
            output: TransportAllMySmsGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportAllMySmsPost | TransportAllMySmsJsonldPost }
            output: TransportAllMySmsJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportAllMySmsPost | TransportAllMySmsJsonldPost }
            output: TransportAllMySmsGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportAllMySmsPost | TransportAllMySmsJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportAllMySmsPost | TransportAllMySmsJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportAllMySmsPost | TransportAllMySmsJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportAllMySmsPost | TransportAllMySmsJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportAllMySmsPost | TransportAllMySmsJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-all-my-sms/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportAllMySmsGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportAllMySmsJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportAllMySmsGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportAllMySmsPut | TransportAllMySmsJsonldPut
            }
            output: TransportAllMySmsGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportAllMySmsPut | TransportAllMySmsJsonldPut
            }
            output: TransportAllMySmsJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportAllMySmsPut | TransportAllMySmsJsonldPut
            }
            output: TransportAllMySmsGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportAllMySmsPut | TransportAllMySmsJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportAllMySmsPut | TransportAllMySmsJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportAllMySmsPut | TransportAllMySmsJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportAllMySmsPut | TransportAllMySmsJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportAllMySmsPut | TransportAllMySmsJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportAllMySmsPut | TransportAllMySmsJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-amazon-sns': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportAmazonSnsGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportAmazonSnsJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportAmazonSnsGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportAmazonSnsPost | TransportAmazonSnsJsonldPost }
            output: TransportAmazonSnsGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportAmazonSnsPost | TransportAmazonSnsJsonldPost }
            output: TransportAmazonSnsJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportAmazonSnsPost | TransportAmazonSnsJsonldPost }
            output: TransportAmazonSnsGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportAmazonSnsPost | TransportAmazonSnsJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportAmazonSnsPost | TransportAmazonSnsJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportAmazonSnsPost | TransportAmazonSnsJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportAmazonSnsPost | TransportAmazonSnsJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportAmazonSnsPost | TransportAmazonSnsJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-amazon-sns/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportAmazonSnsGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportAmazonSnsJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportAmazonSnsGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportAmazonSnsPut | TransportAmazonSnsJsonldPut
            }
            output: TransportAmazonSnsGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportAmazonSnsPut | TransportAmazonSnsJsonldPut
            }
            output: TransportAmazonSnsJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportAmazonSnsPut | TransportAmazonSnsJsonldPut
            }
            output: TransportAmazonSnsGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportAmazonSnsPut | TransportAmazonSnsJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportAmazonSnsPut | TransportAmazonSnsJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportAmazonSnsPut | TransportAmazonSnsJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportAmazonSnsPut | TransportAmazonSnsJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportAmazonSnsPut | TransportAmazonSnsJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportAmazonSnsPut | TransportAmazonSnsJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-bandwidth': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportBandwidthGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportBandwidthJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportBandwidthGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportBandwidthPost | TransportBandwidthJsonldPost }
            output: TransportBandwidthGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportBandwidthPost | TransportBandwidthJsonldPost }
            output: TransportBandwidthJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportBandwidthPost | TransportBandwidthJsonldPost }
            output: TransportBandwidthGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportBandwidthPost | TransportBandwidthJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportBandwidthPost | TransportBandwidthJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportBandwidthPost | TransportBandwidthJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportBandwidthPost | TransportBandwidthJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportBandwidthPost | TransportBandwidthJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-bandwidth/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportBandwidthGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportBandwidthJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportBandwidthGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportBandwidthPut | TransportBandwidthJsonldPut
            }
            output: TransportBandwidthGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportBandwidthPut | TransportBandwidthJsonldPut
            }
            output: TransportBandwidthJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportBandwidthPut | TransportBandwidthJsonldPut
            }
            output: TransportBandwidthGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportBandwidthPut | TransportBandwidthJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportBandwidthPut | TransportBandwidthJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportBandwidthPut | TransportBandwidthJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportBandwidthPut | TransportBandwidthJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportBandwidthPut | TransportBandwidthJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportBandwidthPut | TransportBandwidthJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-chatwork': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportChatworkGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportChatworkJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportChatworkGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportChatworkPost | TransportChatworkJsonldPost }
            output: TransportChatworkGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportChatworkPost | TransportChatworkJsonldPost }
            output: TransportChatworkJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportChatworkPost | TransportChatworkJsonldPost }
            output: TransportChatworkGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportChatworkPost | TransportChatworkJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportChatworkPost | TransportChatworkJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportChatworkPost | TransportChatworkJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportChatworkPost | TransportChatworkJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportChatworkPost | TransportChatworkJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-chatwork/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportChatworkGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportChatworkJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportChatworkGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportChatworkPut | TransportChatworkJsonldPut
            }
            output: TransportChatworkGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportChatworkPut | TransportChatworkJsonldPut
            }
            output: TransportChatworkJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportChatworkPut | TransportChatworkJsonldPut
            }
            output: TransportChatworkGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportChatworkPut | TransportChatworkJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportChatworkPut | TransportChatworkJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportChatworkPut | TransportChatworkJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportChatworkPut | TransportChatworkJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportChatworkPut | TransportChatworkJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportChatworkPut | TransportChatworkJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-click-send': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportClickSendGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportClickSendJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportClickSendGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportClickSendPost | TransportClickSendJsonldPost }
            output: TransportClickSendGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportClickSendPost | TransportClickSendJsonldPost }
            output: TransportClickSendJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportClickSendPost | TransportClickSendJsonldPost }
            output: TransportClickSendGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportClickSendPost | TransportClickSendJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportClickSendPost | TransportClickSendJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportClickSendPost | TransportClickSendJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportClickSendPost | TransportClickSendJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportClickSendPost | TransportClickSendJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-click-send/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportClickSendGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportClickSendJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportClickSendGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportClickSendPut | TransportClickSendJsonldPut
            }
            output: TransportClickSendGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportClickSendPut | TransportClickSendJsonldPut
            }
            output: TransportClickSendJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportClickSendPut | TransportClickSendJsonldPut
            }
            output: TransportClickSendGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportClickSendPut | TransportClickSendJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportClickSendPut | TransportClickSendJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportClickSendPut | TransportClickSendJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportClickSendPut | TransportClickSendJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportClickSendPut | TransportClickSendJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportClickSendPut | TransportClickSendJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-clickatell': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportClickatellGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportClickatellJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportClickatellGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportClickatellPost | TransportClickatellJsonldPost }
            output: TransportClickatellGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportClickatellPost | TransportClickatellJsonldPost }
            output: TransportClickatellJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportClickatellPost | TransportClickatellJsonldPost }
            output: TransportClickatellGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportClickatellPost | TransportClickatellJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportClickatellPost | TransportClickatellJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportClickatellPost | TransportClickatellJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportClickatellPost | TransportClickatellJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportClickatellPost | TransportClickatellJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-clickatell/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportClickatellGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportClickatellJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportClickatellGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportClickatellPut | TransportClickatellJsonldPut
            }
            output: TransportClickatellGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportClickatellPut | TransportClickatellJsonldPut
            }
            output: TransportClickatellJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportClickatellPut | TransportClickatellJsonldPut
            }
            output: TransportClickatellGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportClickatellPut | TransportClickatellJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportClickatellPut | TransportClickatellJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportClickatellPut | TransportClickatellJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportClickatellPut | TransportClickatellJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportClickatellPut | TransportClickatellJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportClickatellPut | TransportClickatellJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-contact-everyone': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportContactEveryoneGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportContactEveryoneJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportContactEveryoneGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportContactEveryonePost | TransportContactEveryoneJsonldPost }
            output: TransportContactEveryoneGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportContactEveryonePost | TransportContactEveryoneJsonldPost }
            output: TransportContactEveryoneJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportContactEveryonePost | TransportContactEveryoneJsonldPost }
            output: TransportContactEveryoneGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportContactEveryonePost | TransportContactEveryoneJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportContactEveryonePost | TransportContactEveryoneJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportContactEveryonePost | TransportContactEveryoneJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportContactEveryonePost | TransportContactEveryoneJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportContactEveryonePost | TransportContactEveryoneJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-contact-everyone/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportContactEveryoneGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportContactEveryoneJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportContactEveryoneGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportContactEveryonePut | TransportContactEveryoneJsonldPut
            }
            output: TransportContactEveryoneGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportContactEveryonePut | TransportContactEveryoneJsonldPut
            }
            output: TransportContactEveryoneJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportContactEveryonePut | TransportContactEveryoneJsonldPut
            }
            output: TransportContactEveryoneGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportContactEveryonePut | TransportContactEveryoneJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportContactEveryonePut | TransportContactEveryoneJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportContactEveryonePut | TransportContactEveryoneJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportContactEveryonePut | TransportContactEveryoneJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportContactEveryonePut | TransportContactEveryoneJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportContactEveryonePut | TransportContactEveryoneJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-discord': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportDiscordGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportDiscordJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportDiscordGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportDiscordPost | TransportDiscordJsonldPost }
            output: TransportDiscordGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportDiscordPost | TransportDiscordJsonldPost }
            output: TransportDiscordJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportDiscordPost | TransportDiscordJsonldPost }
            output: TransportDiscordGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportDiscordPost | TransportDiscordJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportDiscordPost | TransportDiscordJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportDiscordPost | TransportDiscordJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportDiscordPost | TransportDiscordJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportDiscordPost | TransportDiscordJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-discord/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportDiscordGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportDiscordJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportDiscordGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportDiscordPut | TransportDiscordJsonldPut
            }
            output: TransportDiscordGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportDiscordPut | TransportDiscordJsonldPut
            }
            output: TransportDiscordJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportDiscordPut | TransportDiscordJsonldPut
            }
            output: TransportDiscordGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportDiscordPut | TransportDiscordJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportDiscordPut | TransportDiscordJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportDiscordPut | TransportDiscordJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportDiscordPut | TransportDiscordJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportDiscordPut | TransportDiscordJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportDiscordPut | TransportDiscordJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-email': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportEmailGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportEmailJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportEmailGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportEmailPost | TransportEmailJsonldPost }
            output: TransportEmailGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportEmailPost | TransportEmailJsonldPost }
            output: TransportEmailJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportEmailPost | TransportEmailJsonldPost }
            output: TransportEmailGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportEmailPost | TransportEmailJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportEmailPost | TransportEmailJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportEmailPost | TransportEmailJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportEmailPost | TransportEmailJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportEmailPost | TransportEmailJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-email/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportEmailGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportEmailJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportEmailGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & { json: TransportEmailPut | TransportEmailJsonldPut }
            output: TransportEmailGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: TransportEmailPut | TransportEmailJsonldPut }
            output: TransportEmailJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: TransportEmailPut | TransportEmailJsonldPut }
            output: TransportEmailGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: TransportEmailPut | TransportEmailJsonldPut }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: TransportEmailPut | TransportEmailJsonldPut }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: TransportEmailPut | TransportEmailJsonldPut }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: TransportEmailPut | TransportEmailJsonldPut }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: TransportEmailPut | TransportEmailJsonldPut }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: TransportEmailPut | TransportEmailJsonldPut }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-engagespot': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportEngagespotGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportEngagespotJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportEngagespotGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportEngagespotPost | TransportEngagespotJsonldPost }
            output: TransportEngagespotGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportEngagespotPost | TransportEngagespotJsonldPost }
            output: TransportEngagespotJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportEngagespotPost | TransportEngagespotJsonldPost }
            output: TransportEngagespotGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportEngagespotPost | TransportEngagespotJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportEngagespotPost | TransportEngagespotJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportEngagespotPost | TransportEngagespotJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportEngagespotPost | TransportEngagespotJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportEngagespotPost | TransportEngagespotJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-engagespot/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportEngagespotGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportEngagespotJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportEngagespotGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportEngagespotPut | TransportEngagespotJsonldPut
            }
            output: TransportEngagespotGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportEngagespotPut | TransportEngagespotJsonldPut
            }
            output: TransportEngagespotJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportEngagespotPut | TransportEngagespotJsonldPut
            }
            output: TransportEngagespotGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportEngagespotPut | TransportEngagespotJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportEngagespotPut | TransportEngagespotJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportEngagespotPut | TransportEngagespotJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportEngagespotPut | TransportEngagespotJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportEngagespotPut | TransportEngagespotJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportEngagespotPut | TransportEngagespotJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-esendex': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportEsendexGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportEsendexJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportEsendexGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportEsendexPost | TransportEsendexJsonldPost }
            output: TransportEsendexGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportEsendexPost | TransportEsendexJsonldPost }
            output: TransportEsendexJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportEsendexPost | TransportEsendexJsonldPost }
            output: TransportEsendexGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportEsendexPost | TransportEsendexJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportEsendexPost | TransportEsendexJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportEsendexPost | TransportEsendexJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportEsendexPost | TransportEsendexJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportEsendexPost | TransportEsendexJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-esendex/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportEsendexGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportEsendexJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportEsendexGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportEsendexPut | TransportEsendexJsonldPut
            }
            output: TransportEsendexGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportEsendexPut | TransportEsendexJsonldPut
            }
            output: TransportEsendexJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportEsendexPut | TransportEsendexJsonldPut
            }
            output: TransportEsendexGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportEsendexPut | TransportEsendexJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportEsendexPut | TransportEsendexJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportEsendexPut | TransportEsendexJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportEsendexPut | TransportEsendexJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportEsendexPut | TransportEsendexJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportEsendexPut | TransportEsendexJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-expo': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportExpoGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportExpoJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportExpoGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportExpoPost | TransportExpoJsonldPost }
            output: TransportExpoGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportExpoPost | TransportExpoJsonldPost }
            output: TransportExpoJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportExpoPost | TransportExpoJsonldPost }
            output: TransportExpoGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportExpoPost | TransportExpoJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportExpoPost | TransportExpoJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportExpoPost | TransportExpoJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportExpoPost | TransportExpoJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportExpoPost | TransportExpoJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-expo/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportExpoGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportExpoJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportExpoGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & { json: TransportExpoPut | TransportExpoJsonldPut }
            output: TransportExpoGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: TransportExpoPut | TransportExpoJsonldPut }
            output: TransportExpoJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: TransportExpoPut | TransportExpoJsonldPut }
            output: TransportExpoGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: TransportExpoPut | TransportExpoJsonldPut }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: TransportExpoPut | TransportExpoJsonldPut }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: TransportExpoPut | TransportExpoJsonldPut }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: TransportExpoPut | TransportExpoJsonldPut }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: TransportExpoPut | TransportExpoJsonldPut }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: TransportExpoPut | TransportExpoJsonldPut }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-firebase': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportFirebaseGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportFirebaseJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportFirebaseGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportFirebasePost | TransportFirebaseJsonldPost }
            output: TransportFirebaseGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportFirebasePost | TransportFirebaseJsonldPost }
            output: TransportFirebaseJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportFirebasePost | TransportFirebaseJsonldPost }
            output: TransportFirebaseGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportFirebasePost | TransportFirebaseJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportFirebasePost | TransportFirebaseJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportFirebasePost | TransportFirebaseJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportFirebasePost | TransportFirebaseJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportFirebasePost | TransportFirebaseJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-firebase/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportFirebaseGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportFirebaseJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportFirebaseGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportFirebasePut | TransportFirebaseJsonldPut
            }
            output: TransportFirebaseGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportFirebasePut | TransportFirebaseJsonldPut
            }
            output: TransportFirebaseJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportFirebasePut | TransportFirebaseJsonldPut
            }
            output: TransportFirebaseGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportFirebasePut | TransportFirebaseJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportFirebasePut | TransportFirebaseJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportFirebasePut | TransportFirebaseJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportFirebasePut | TransportFirebaseJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportFirebasePut | TransportFirebaseJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportFirebasePut | TransportFirebaseJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-forty-six-elks': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportFortySixElksGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportFortySixElksJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportFortySixElksGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportFortySixElksPost | TransportFortySixElksJsonldPost }
            output: TransportFortySixElksGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportFortySixElksPost | TransportFortySixElksJsonldPost }
            output: TransportFortySixElksJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportFortySixElksPost | TransportFortySixElksJsonldPost }
            output: TransportFortySixElksGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportFortySixElksPost | TransportFortySixElksJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportFortySixElksPost | TransportFortySixElksJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportFortySixElksPost | TransportFortySixElksJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportFortySixElksPost | TransportFortySixElksJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportFortySixElksPost | TransportFortySixElksJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-forty-six-elks/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportFortySixElksGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportFortySixElksJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportFortySixElksGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportFortySixElksPut | TransportFortySixElksJsonldPut
            }
            output: TransportFortySixElksGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportFortySixElksPut | TransportFortySixElksJsonldPut
            }
            output: TransportFortySixElksJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportFortySixElksPut | TransportFortySixElksJsonldPut
            }
            output: TransportFortySixElksGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportFortySixElksPut | TransportFortySixElksJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportFortySixElksPut | TransportFortySixElksJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportFortySixElksPut | TransportFortySixElksJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportFortySixElksPut | TransportFortySixElksJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportFortySixElksPut | TransportFortySixElksJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportFortySixElksPut | TransportFortySixElksJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-free-mobile': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportFreeMobileGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportFreeMobileJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportFreeMobileGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportFreeMobilePost | TransportFreeMobileJsonldPost }
            output: TransportFreeMobileGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportFreeMobilePost | TransportFreeMobileJsonldPost }
            output: TransportFreeMobileJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportFreeMobilePost | TransportFreeMobileJsonldPost }
            output: TransportFreeMobileGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportFreeMobilePost | TransportFreeMobileJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportFreeMobilePost | TransportFreeMobileJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportFreeMobilePost | TransportFreeMobileJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportFreeMobilePost | TransportFreeMobileJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportFreeMobilePost | TransportFreeMobileJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-free-mobile/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportFreeMobileGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportFreeMobileJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportFreeMobileGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportFreeMobilePut | TransportFreeMobileJsonldPut
            }
            output: TransportFreeMobileGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportFreeMobilePut | TransportFreeMobileJsonldPut
            }
            output: TransportFreeMobileJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportFreeMobilePut | TransportFreeMobileJsonldPut
            }
            output: TransportFreeMobileGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportFreeMobilePut | TransportFreeMobileJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportFreeMobilePut | TransportFreeMobileJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportFreeMobilePut | TransportFreeMobileJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportFreeMobilePut | TransportFreeMobileJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportFreeMobilePut | TransportFreeMobileJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportFreeMobilePut | TransportFreeMobileJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-freshdesk': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportFreshdeskGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportFreshdeskJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportFreshdeskGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportFreshdeskPost | TransportFreshdeskJsonldPost }
            output: TransportFreshdeskGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportFreshdeskPost | TransportFreshdeskJsonldPost }
            output: TransportFreshdeskJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportFreshdeskPost | TransportFreshdeskJsonldPost }
            output: TransportFreshdeskGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportFreshdeskPost | TransportFreshdeskJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportFreshdeskPost | TransportFreshdeskJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportFreshdeskPost | TransportFreshdeskJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportFreshdeskPost | TransportFreshdeskJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportFreshdeskPost | TransportFreshdeskJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-freshdesk/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportFreshdeskGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportFreshdeskJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportFreshdeskGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportFreshdeskPut | TransportFreshdeskJsonldPut
            }
            output: TransportFreshdeskGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportFreshdeskPut | TransportFreshdeskJsonldPut
            }
            output: TransportFreshdeskJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportFreshdeskPut | TransportFreshdeskJsonldPut
            }
            output: TransportFreshdeskGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportFreshdeskPut | TransportFreshdeskJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportFreshdeskPut | TransportFreshdeskJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportFreshdeskPut | TransportFreshdeskJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportFreshdeskPut | TransportFreshdeskJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportFreshdeskPut | TransportFreshdeskJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportFreshdeskPut | TransportFreshdeskJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-gateway-api': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportGatewayApiGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportGatewayApiJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportGatewayApiGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportGatewayApiPost | TransportGatewayApiJsonldPost }
            output: TransportGatewayApiGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportGatewayApiPost | TransportGatewayApiJsonldPost }
            output: TransportGatewayApiJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportGatewayApiPost | TransportGatewayApiJsonldPost }
            output: TransportGatewayApiGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportGatewayApiPost | TransportGatewayApiJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportGatewayApiPost | TransportGatewayApiJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportGatewayApiPost | TransportGatewayApiJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportGatewayApiPost | TransportGatewayApiJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportGatewayApiPost | TransportGatewayApiJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-gateway-api/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportGatewayApiGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportGatewayApiJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportGatewayApiGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportGatewayApiPut | TransportGatewayApiJsonldPut
            }
            output: TransportGatewayApiGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportGatewayApiPut | TransportGatewayApiJsonldPut
            }
            output: TransportGatewayApiJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportGatewayApiPut | TransportGatewayApiJsonldPut
            }
            output: TransportGatewayApiGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportGatewayApiPut | TransportGatewayApiJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportGatewayApiPut | TransportGatewayApiJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportGatewayApiPut | TransportGatewayApiJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportGatewayApiPut | TransportGatewayApiJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportGatewayApiPut | TransportGatewayApiJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportGatewayApiPut | TransportGatewayApiJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-gitter': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportGitterGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportGitterJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportGitterGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportGitterPost | TransportGitterJsonldPost }
            output: TransportGitterGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportGitterPost | TransportGitterJsonldPost }
            output: TransportGitterJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportGitterPost | TransportGitterJsonldPost }
            output: TransportGitterGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportGitterPost | TransportGitterJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportGitterPost | TransportGitterJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportGitterPost | TransportGitterJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportGitterPost | TransportGitterJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportGitterPost | TransportGitterJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-gitter/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportGitterGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportGitterJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportGitterGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportGitterPut | TransportGitterJsonldPut
            }
            output: TransportGitterGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportGitterPut | TransportGitterJsonldPut
            }
            output: TransportGitterJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportGitterPut | TransportGitterJsonldPut
            }
            output: TransportGitterGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportGitterPut | TransportGitterJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportGitterPut | TransportGitterJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportGitterPut | TransportGitterJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportGitterPut | TransportGitterJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportGitterPut | TransportGitterJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportGitterPut | TransportGitterJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-google-chat': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportGoogleChatGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportGoogleChatJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportGoogleChatGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportGoogleChatPost | TransportGoogleChatJsonldPost }
            output: TransportGoogleChatGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportGoogleChatPost | TransportGoogleChatJsonldPost }
            output: TransportGoogleChatJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportGoogleChatPost | TransportGoogleChatJsonldPost }
            output: TransportGoogleChatGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportGoogleChatPost | TransportGoogleChatJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportGoogleChatPost | TransportGoogleChatJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportGoogleChatPost | TransportGoogleChatJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportGoogleChatPost | TransportGoogleChatJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportGoogleChatPost | TransportGoogleChatJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-google-chat/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportGoogleChatGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportGoogleChatJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportGoogleChatGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportGoogleChatPut | TransportGoogleChatJsonldPut
            }
            output: TransportGoogleChatGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportGoogleChatPut | TransportGoogleChatJsonldPut
            }
            output: TransportGoogleChatJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportGoogleChatPut | TransportGoogleChatJsonldPut
            }
            output: TransportGoogleChatGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportGoogleChatPut | TransportGoogleChatJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportGoogleChatPut | TransportGoogleChatJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportGoogleChatPut | TransportGoogleChatJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportGoogleChatPut | TransportGoogleChatJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportGoogleChatPut | TransportGoogleChatJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportGoogleChatPut | TransportGoogleChatJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-gotify': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportGotifyGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportGotifyJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportGotifyGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportGotifyPost | TransportGotifyJsonldPost }
            output: TransportGotifyGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportGotifyPost | TransportGotifyJsonldPost }
            output: TransportGotifyJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportGotifyPost | TransportGotifyJsonldPost }
            output: TransportGotifyGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportGotifyPost | TransportGotifyJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportGotifyPost | TransportGotifyJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportGotifyPost | TransportGotifyJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportGotifyPost | TransportGotifyJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportGotifyPost | TransportGotifyJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-gotify/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportGotifyGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportGotifyJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportGotifyGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportGotifyPut | TransportGotifyJsonldPut
            }
            output: TransportGotifyGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportGotifyPut | TransportGotifyJsonldPut
            }
            output: TransportGotifyJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportGotifyPut | TransportGotifyJsonldPut
            }
            output: TransportGotifyGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportGotifyPut | TransportGotifyJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportGotifyPut | TransportGotifyJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportGotifyPut | TransportGotifyJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportGotifyPut | TransportGotifyJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportGotifyPut | TransportGotifyJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportGotifyPut | TransportGotifyJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-help-scout': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportHelpScoutGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportHelpScoutJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportHelpScoutGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportHelpScoutPost | TransportHelpScoutJsonldPost }
            output: TransportHelpScoutGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportHelpScoutPost | TransportHelpScoutJsonldPost }
            output: TransportHelpScoutJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportHelpScoutPost | TransportHelpScoutJsonldPost }
            output: TransportHelpScoutGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportHelpScoutPost | TransportHelpScoutJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportHelpScoutPost | TransportHelpScoutJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportHelpScoutPost | TransportHelpScoutJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportHelpScoutPost | TransportHelpScoutJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportHelpScoutPost | TransportHelpScoutJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-help-scout/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportHelpScoutGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportHelpScoutJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportHelpScoutGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportHelpScoutPut | TransportHelpScoutJsonldPut
            }
            output: TransportHelpScoutGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportHelpScoutPut | TransportHelpScoutJsonldPut
            }
            output: TransportHelpScoutJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportHelpScoutPut | TransportHelpScoutJsonldPut
            }
            output: TransportHelpScoutGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportHelpScoutPut | TransportHelpScoutJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportHelpScoutPut | TransportHelpScoutJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportHelpScoutPut | TransportHelpScoutJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportHelpScoutPut | TransportHelpScoutJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportHelpScoutPut | TransportHelpScoutJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportHelpScoutPut | TransportHelpScoutJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-infobip': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportInfobipGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportInfobipJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportInfobipGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportInfobipPost | TransportInfobipJsonldPost }
            output: TransportInfobipGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportInfobipPost | TransportInfobipJsonldPost }
            output: TransportInfobipJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportInfobipPost | TransportInfobipJsonldPost }
            output: TransportInfobipGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportInfobipPost | TransportInfobipJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportInfobipPost | TransportInfobipJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportInfobipPost | TransportInfobipJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportInfobipPost | TransportInfobipJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportInfobipPost | TransportInfobipJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-infobip/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportInfobipGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportInfobipJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportInfobipGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportInfobipPut | TransportInfobipJsonldPut
            }
            output: TransportInfobipGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportInfobipPut | TransportInfobipJsonldPut
            }
            output: TransportInfobipJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportInfobipPut | TransportInfobipJsonldPut
            }
            output: TransportInfobipGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportInfobipPut | TransportInfobipJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportInfobipPut | TransportInfobipJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportInfobipPut | TransportInfobipJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportInfobipPut | TransportInfobipJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportInfobipPut | TransportInfobipJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportInfobipPut | TransportInfobipJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-iqsms': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportIqsmsGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportIqsmsJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportIqsmsGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportIqsmsPost | TransportIqsmsJsonldPost }
            output: TransportIqsmsGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportIqsmsPost | TransportIqsmsJsonldPost }
            output: TransportIqsmsJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportIqsmsPost | TransportIqsmsJsonldPost }
            output: TransportIqsmsGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportIqsmsPost | TransportIqsmsJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportIqsmsPost | TransportIqsmsJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportIqsmsPost | TransportIqsmsJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportIqsmsPost | TransportIqsmsJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportIqsmsPost | TransportIqsmsJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-iqsms/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportIqsmsGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportIqsmsJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportIqsmsGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & { json: TransportIqsmsPut | TransportIqsmsJsonldPut }
            output: TransportIqsmsGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: TransportIqsmsPut | TransportIqsmsJsonldPut }
            output: TransportIqsmsJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: TransportIqsmsPut | TransportIqsmsJsonldPut }
            output: TransportIqsmsGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: TransportIqsmsPut | TransportIqsmsJsonldPut }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: TransportIqsmsPut | TransportIqsmsJsonldPut }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: TransportIqsmsPut | TransportIqsmsJsonldPut }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: TransportIqsmsPut | TransportIqsmsJsonldPut }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: TransportIqsmsPut | TransportIqsmsJsonldPut }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: TransportIqsmsPut | TransportIqsmsJsonldPut }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-kaz-info-teh': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportKazInfoTehGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportKazInfoTehJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportKazInfoTehGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportKazInfoTehPost | TransportKazInfoTehJsonldPost }
            output: TransportKazInfoTehGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportKazInfoTehPost | TransportKazInfoTehJsonldPost }
            output: TransportKazInfoTehJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportKazInfoTehPost | TransportKazInfoTehJsonldPost }
            output: TransportKazInfoTehGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportKazInfoTehPost | TransportKazInfoTehJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportKazInfoTehPost | TransportKazInfoTehJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportKazInfoTehPost | TransportKazInfoTehJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportKazInfoTehPost | TransportKazInfoTehJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportKazInfoTehPost | TransportKazInfoTehJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-kaz-info-teh/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportKazInfoTehGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportKazInfoTehJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportKazInfoTehGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportKazInfoTehPut | TransportKazInfoTehJsonldPut
            }
            output: TransportKazInfoTehGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportKazInfoTehPut | TransportKazInfoTehJsonldPut
            }
            output: TransportKazInfoTehJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportKazInfoTehPut | TransportKazInfoTehJsonldPut
            }
            output: TransportKazInfoTehGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportKazInfoTehPut | TransportKazInfoTehJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportKazInfoTehPut | TransportKazInfoTehJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportKazInfoTehPut | TransportKazInfoTehJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportKazInfoTehPut | TransportKazInfoTehJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportKazInfoTehPut | TransportKazInfoTehJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportKazInfoTehPut | TransportKazInfoTehJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-light-sms': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportLightSmsGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportLightSmsJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportLightSmsGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportLightSmsPost | TransportLightSmsJsonldPost }
            output: TransportLightSmsGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportLightSmsPost | TransportLightSmsJsonldPost }
            output: TransportLightSmsJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportLightSmsPost | TransportLightSmsJsonldPost }
            output: TransportLightSmsGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportLightSmsPost | TransportLightSmsJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportLightSmsPost | TransportLightSmsJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportLightSmsPost | TransportLightSmsJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportLightSmsPost | TransportLightSmsJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportLightSmsPost | TransportLightSmsJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-light-sms/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportLightSmsGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportLightSmsJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportLightSmsGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportLightSmsPut | TransportLightSmsJsonldPut
            }
            output: TransportLightSmsGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportLightSmsPut | TransportLightSmsJsonldPut
            }
            output: TransportLightSmsJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportLightSmsPut | TransportLightSmsJsonldPut
            }
            output: TransportLightSmsGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportLightSmsPut | TransportLightSmsJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportLightSmsPut | TransportLightSmsJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportLightSmsPut | TransportLightSmsJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportLightSmsPut | TransportLightSmsJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportLightSmsPut | TransportLightSmsJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportLightSmsPut | TransportLightSmsJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-line-notify': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportLineNotifyGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportLineNotifyJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportLineNotifyGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportLineNotifyPost | TransportLineNotifyJsonldPost }
            output: TransportLineNotifyGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportLineNotifyPost | TransportLineNotifyJsonldPost }
            output: TransportLineNotifyJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportLineNotifyPost | TransportLineNotifyJsonldPost }
            output: TransportLineNotifyGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportLineNotifyPost | TransportLineNotifyJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportLineNotifyPost | TransportLineNotifyJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportLineNotifyPost | TransportLineNotifyJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportLineNotifyPost | TransportLineNotifyJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportLineNotifyPost | TransportLineNotifyJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-line-notify/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportLineNotifyGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportLineNotifyJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportLineNotifyGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportLineNotifyPut | TransportLineNotifyJsonldPut
            }
            output: TransportLineNotifyGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportLineNotifyPut | TransportLineNotifyJsonldPut
            }
            output: TransportLineNotifyJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportLineNotifyPut | TransportLineNotifyJsonldPut
            }
            output: TransportLineNotifyGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportLineNotifyPut | TransportLineNotifyJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportLineNotifyPut | TransportLineNotifyJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportLineNotifyPut | TransportLineNotifyJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportLineNotifyPut | TransportLineNotifyJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportLineNotifyPut | TransportLineNotifyJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportLineNotifyPut | TransportLineNotifyJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-linked-in': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportLinkedInGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportLinkedInJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportLinkedInGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportLinkedInPost | TransportLinkedInJsonldPost }
            output: TransportLinkedInGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportLinkedInPost | TransportLinkedInJsonldPost }
            output: TransportLinkedInJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportLinkedInPost | TransportLinkedInJsonldPost }
            output: TransportLinkedInGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportLinkedInPost | TransportLinkedInJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportLinkedInPost | TransportLinkedInJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportLinkedInPost | TransportLinkedInJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportLinkedInPost | TransportLinkedInJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportLinkedInPost | TransportLinkedInJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-linked-in/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportLinkedInGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportLinkedInJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportLinkedInGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportLinkedInPut | TransportLinkedInJsonldPut
            }
            output: TransportLinkedInGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportLinkedInPut | TransportLinkedInJsonldPut
            }
            output: TransportLinkedInJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportLinkedInPut | TransportLinkedInJsonldPut
            }
            output: TransportLinkedInGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportLinkedInPut | TransportLinkedInJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportLinkedInPut | TransportLinkedInJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportLinkedInPut | TransportLinkedInJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportLinkedInPut | TransportLinkedInJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportLinkedInPut | TransportLinkedInJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportLinkedInPut | TransportLinkedInJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-mailjet': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportMailjetGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportMailjetJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportMailjetGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportMailjetPost | TransportMailjetJsonldPost }
            output: TransportMailjetGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportMailjetPost | TransportMailjetJsonldPost }
            output: TransportMailjetJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportMailjetPost | TransportMailjetJsonldPost }
            output: TransportMailjetGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportMailjetPost | TransportMailjetJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportMailjetPost | TransportMailjetJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportMailjetPost | TransportMailjetJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportMailjetPost | TransportMailjetJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportMailjetPost | TransportMailjetJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-mailjet/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportMailjetGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportMailjetJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportMailjetGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportMailjetPut | TransportMailjetJsonldPut
            }
            output: TransportMailjetGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMailjetPut | TransportMailjetJsonldPut
            }
            output: TransportMailjetJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMailjetPut | TransportMailjetJsonldPut
            }
            output: TransportMailjetGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMailjetPut | TransportMailjetJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMailjetPut | TransportMailjetJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMailjetPut | TransportMailjetJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMailjetPut | TransportMailjetJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMailjetPut | TransportMailjetJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMailjetPut | TransportMailjetJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-mastodon': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportMastodonGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportMastodonJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportMastodonGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportMastodonPost | TransportMastodonJsonldPost }
            output: TransportMastodonGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportMastodonPost | TransportMastodonJsonldPost }
            output: TransportMastodonJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportMastodonPost | TransportMastodonJsonldPost }
            output: TransportMastodonGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportMastodonPost | TransportMastodonJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportMastodonPost | TransportMastodonJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportMastodonPost | TransportMastodonJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportMastodonPost | TransportMastodonJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportMastodonPost | TransportMastodonJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-mastodon/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportMastodonGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportMastodonJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportMastodonGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportMastodonPut | TransportMastodonJsonldPut
            }
            output: TransportMastodonGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMastodonPut | TransportMastodonJsonldPut
            }
            output: TransportMastodonJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMastodonPut | TransportMastodonJsonldPut
            }
            output: TransportMastodonGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMastodonPut | TransportMastodonJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMastodonPut | TransportMastodonJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMastodonPut | TransportMastodonJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMastodonPut | TransportMastodonJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMastodonPut | TransportMastodonJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMastodonPut | TransportMastodonJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-mattermost': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportMattermostGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportMattermostJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportMattermostGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportMattermostPost | TransportMattermostJsonldPost }
            output: TransportMattermostGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportMattermostPost | TransportMattermostJsonldPost }
            output: TransportMattermostJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportMattermostPost | TransportMattermostJsonldPost }
            output: TransportMattermostGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportMattermostPost | TransportMattermostJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportMattermostPost | TransportMattermostJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportMattermostPost | TransportMattermostJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportMattermostPost | TransportMattermostJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportMattermostPost | TransportMattermostJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-mattermost/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportMattermostGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportMattermostJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportMattermostGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportMattermostPut | TransportMattermostJsonldPut
            }
            output: TransportMattermostGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMattermostPut | TransportMattermostJsonldPut
            }
            output: TransportMattermostJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMattermostPut | TransportMattermostJsonldPut
            }
            output: TransportMattermostGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMattermostPut | TransportMattermostJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMattermostPut | TransportMattermostJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMattermostPut | TransportMattermostJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMattermostPut | TransportMattermostJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMattermostPut | TransportMattermostJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMattermostPut | TransportMattermostJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-mercure': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportMercureGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportMercureJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportMercureGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportMercurePost | TransportMercureJsonldPost }
            output: TransportMercureGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportMercurePost | TransportMercureJsonldPost }
            output: TransportMercureJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportMercurePost | TransportMercureJsonldPost }
            output: TransportMercureGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportMercurePost | TransportMercureJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportMercurePost | TransportMercureJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportMercurePost | TransportMercureJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportMercurePost | TransportMercureJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportMercurePost | TransportMercureJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-mercure/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportMercureGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportMercureJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportMercureGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportMercurePut | TransportMercureJsonldPut
            }
            output: TransportMercureGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMercurePut | TransportMercureJsonldPut
            }
            output: TransportMercureJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMercurePut | TransportMercureJsonldPut
            }
            output: TransportMercureGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMercurePut | TransportMercureJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMercurePut | TransportMercureJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMercurePut | TransportMercureJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMercurePut | TransportMercureJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMercurePut | TransportMercureJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMercurePut | TransportMercureJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-message-bird': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportMessageBirdGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportMessageBirdJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportMessageBirdGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportMessageBirdPost | TransportMessageBirdJsonldPost }
            output: TransportMessageBirdGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportMessageBirdPost | TransportMessageBirdJsonldPost }
            output: TransportMessageBirdJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportMessageBirdPost | TransportMessageBirdJsonldPost }
            output: TransportMessageBirdGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportMessageBirdPost | TransportMessageBirdJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportMessageBirdPost | TransportMessageBirdJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportMessageBirdPost | TransportMessageBirdJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportMessageBirdPost | TransportMessageBirdJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportMessageBirdPost | TransportMessageBirdJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-message-bird/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportMessageBirdGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportMessageBirdJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportMessageBirdGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportMessageBirdPut | TransportMessageBirdJsonldPut
            }
            output: TransportMessageBirdGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMessageBirdPut | TransportMessageBirdJsonldPut
            }
            output: TransportMessageBirdJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMessageBirdPut | TransportMessageBirdJsonldPut
            }
            output: TransportMessageBirdGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMessageBirdPut | TransportMessageBirdJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMessageBirdPut | TransportMessageBirdJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMessageBirdPut | TransportMessageBirdJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMessageBirdPut | TransportMessageBirdJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMessageBirdPut | TransportMessageBirdJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMessageBirdPut | TransportMessageBirdJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-message-media': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportMessageMediaGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportMessageMediaJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportMessageMediaGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportMessageMediaPost | TransportMessageMediaJsonldPost }
            output: TransportMessageMediaGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportMessageMediaPost | TransportMessageMediaJsonldPost }
            output: TransportMessageMediaJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportMessageMediaPost | TransportMessageMediaJsonldPost }
            output: TransportMessageMediaGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportMessageMediaPost | TransportMessageMediaJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportMessageMediaPost | TransportMessageMediaJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportMessageMediaPost | TransportMessageMediaJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportMessageMediaPost | TransportMessageMediaJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportMessageMediaPost | TransportMessageMediaJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-message-media/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportMessageMediaGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportMessageMediaJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportMessageMediaGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportMessageMediaPut | TransportMessageMediaJsonldPut
            }
            output: TransportMessageMediaGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMessageMediaPut | TransportMessageMediaJsonldPut
            }
            output: TransportMessageMediaJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMessageMediaPut | TransportMessageMediaJsonldPut
            }
            output: TransportMessageMediaGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMessageMediaPut | TransportMessageMediaJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMessageMediaPut | TransportMessageMediaJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMessageMediaPut | TransportMessageMediaJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMessageMediaPut | TransportMessageMediaJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMessageMediaPut | TransportMessageMediaJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMessageMediaPut | TransportMessageMediaJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-microsoft-teams': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportMicrosoftTeamsGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportMicrosoftTeamsJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportMicrosoftTeamsGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportMicrosoftTeamsPost | TransportMicrosoftTeamsJsonldPost }
            output: TransportMicrosoftTeamsGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportMicrosoftTeamsPost | TransportMicrosoftTeamsJsonldPost }
            output: TransportMicrosoftTeamsJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportMicrosoftTeamsPost | TransportMicrosoftTeamsJsonldPost }
            output: TransportMicrosoftTeamsGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportMicrosoftTeamsPost | TransportMicrosoftTeamsJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportMicrosoftTeamsPost | TransportMicrosoftTeamsJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportMicrosoftTeamsPost | TransportMicrosoftTeamsJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportMicrosoftTeamsPost | TransportMicrosoftTeamsJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportMicrosoftTeamsPost | TransportMicrosoftTeamsJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-microsoft-teams/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportMicrosoftTeamsGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportMicrosoftTeamsJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportMicrosoftTeamsGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportMicrosoftTeamsPut | TransportMicrosoftTeamsJsonldPut
            }
            output: TransportMicrosoftTeamsGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMicrosoftTeamsPut | TransportMicrosoftTeamsJsonldPut
            }
            output: TransportMicrosoftTeamsJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMicrosoftTeamsPut | TransportMicrosoftTeamsJsonldPut
            }
            output: TransportMicrosoftTeamsGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMicrosoftTeamsPut | TransportMicrosoftTeamsJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMicrosoftTeamsPut | TransportMicrosoftTeamsJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMicrosoftTeamsPut | TransportMicrosoftTeamsJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMicrosoftTeamsPut | TransportMicrosoftTeamsJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMicrosoftTeamsPut | TransportMicrosoftTeamsJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportMicrosoftTeamsPut | TransportMicrosoftTeamsJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-mobyt': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportMobytGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportMobytJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportMobytGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportMobytPost | TransportMobytJsonldPost }
            output: TransportMobytGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportMobytPost | TransportMobytJsonldPost }
            output: TransportMobytJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportMobytPost | TransportMobytJsonldPost }
            output: TransportMobytGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportMobytPost | TransportMobytJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportMobytPost | TransportMobytJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportMobytPost | TransportMobytJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportMobytPost | TransportMobytJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportMobytPost | TransportMobytJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-mobyt/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportMobytGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportMobytJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportMobytGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & { json: TransportMobytPut | TransportMobytJsonldPut }
            output: TransportMobytGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: TransportMobytPut | TransportMobytJsonldPut }
            output: TransportMobytJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: TransportMobytPut | TransportMobytJsonldPut }
            output: TransportMobytGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: TransportMobytPut | TransportMobytJsonldPut }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: TransportMobytPut | TransportMobytJsonldPut }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: TransportMobytPut | TransportMobytJsonldPut }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: TransportMobytPut | TransportMobytJsonldPut }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: TransportMobytPut | TransportMobytJsonldPut }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: TransportMobytPut | TransportMobytJsonldPut }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-octopush': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportOctopushGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportOctopushJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportOctopushGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportOctopushPost | TransportOctopushJsonldPost }
            output: TransportOctopushGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportOctopushPost | TransportOctopushJsonldPost }
            output: TransportOctopushJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportOctopushPost | TransportOctopushJsonldPost }
            output: TransportOctopushGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportOctopushPost | TransportOctopushJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportOctopushPost | TransportOctopushJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportOctopushPost | TransportOctopushJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportOctopushPost | TransportOctopushJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportOctopushPost | TransportOctopushJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-octopush/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportOctopushGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportOctopushJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportOctopushGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportOctopushPut | TransportOctopushJsonldPut
            }
            output: TransportOctopushGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportOctopushPut | TransportOctopushJsonldPut
            }
            output: TransportOctopushJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportOctopushPut | TransportOctopushJsonldPut
            }
            output: TransportOctopushGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportOctopushPut | TransportOctopushJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportOctopushPut | TransportOctopushJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportOctopushPut | TransportOctopushJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportOctopushPut | TransportOctopushJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportOctopushPut | TransportOctopushJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportOctopushPut | TransportOctopushJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-one-signal': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportOneSignalGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportOneSignalJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportOneSignalGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportOneSignalPost | TransportOneSignalJsonldPost }
            output: TransportOneSignalGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportOneSignalPost | TransportOneSignalJsonldPost }
            output: TransportOneSignalJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportOneSignalPost | TransportOneSignalJsonldPost }
            output: TransportOneSignalGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportOneSignalPost | TransportOneSignalJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportOneSignalPost | TransportOneSignalJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportOneSignalPost | TransportOneSignalJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportOneSignalPost | TransportOneSignalJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportOneSignalPost | TransportOneSignalJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-one-signal/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportOneSignalGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportOneSignalJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportOneSignalGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportOneSignalPut | TransportOneSignalJsonldPut
            }
            output: TransportOneSignalGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportOneSignalPut | TransportOneSignalJsonldPut
            }
            output: TransportOneSignalJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportOneSignalPut | TransportOneSignalJsonldPut
            }
            output: TransportOneSignalGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportOneSignalPut | TransportOneSignalJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportOneSignalPut | TransportOneSignalJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportOneSignalPut | TransportOneSignalJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportOneSignalPut | TransportOneSignalJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportOneSignalPut | TransportOneSignalJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportOneSignalPut | TransportOneSignalJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-opsgenie': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportOpsgenieGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportOpsgenieJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportOpsgenieGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportOpsgeniePost | TransportOpsgenieJsonldPost }
            output: TransportOpsgenieGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportOpsgeniePost | TransportOpsgenieJsonldPost }
            output: TransportOpsgenieJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportOpsgeniePost | TransportOpsgenieJsonldPost }
            output: TransportOpsgenieGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportOpsgeniePost | TransportOpsgenieJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportOpsgeniePost | TransportOpsgenieJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportOpsgeniePost | TransportOpsgenieJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportOpsgeniePost | TransportOpsgenieJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportOpsgeniePost | TransportOpsgenieJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-opsgenie/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportOpsgenieGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportOpsgenieJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportOpsgenieGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportOpsgeniePut | TransportOpsgenieJsonldPut
            }
            output: TransportOpsgenieGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportOpsgeniePut | TransportOpsgenieJsonldPut
            }
            output: TransportOpsgenieJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportOpsgeniePut | TransportOpsgenieJsonldPut
            }
            output: TransportOpsgenieGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportOpsgeniePut | TransportOpsgenieJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportOpsgeniePut | TransportOpsgenieJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportOpsgeniePut | TransportOpsgenieJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportOpsgeniePut | TransportOpsgenieJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportOpsgeniePut | TransportOpsgenieJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportOpsgeniePut | TransportOpsgenieJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-orange-sms': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportOrangeSmsGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportOrangeSmsJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportOrangeSmsGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportOrangeSmsPost | TransportOrangeSmsJsonldPost }
            output: TransportOrangeSmsGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportOrangeSmsPost | TransportOrangeSmsJsonldPost }
            output: TransportOrangeSmsJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportOrangeSmsPost | TransportOrangeSmsJsonldPost }
            output: TransportOrangeSmsGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportOrangeSmsPost | TransportOrangeSmsJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportOrangeSmsPost | TransportOrangeSmsJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportOrangeSmsPost | TransportOrangeSmsJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportOrangeSmsPost | TransportOrangeSmsJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportOrangeSmsPost | TransportOrangeSmsJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-orange-sms/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportOrangeSmsGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportOrangeSmsJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportOrangeSmsGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportOrangeSmsPut | TransportOrangeSmsJsonldPut
            }
            output: TransportOrangeSmsGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportOrangeSmsPut | TransportOrangeSmsJsonldPut
            }
            output: TransportOrangeSmsJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportOrangeSmsPut | TransportOrangeSmsJsonldPut
            }
            output: TransportOrangeSmsGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportOrangeSmsPut | TransportOrangeSmsJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportOrangeSmsPut | TransportOrangeSmsJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportOrangeSmsPut | TransportOrangeSmsJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportOrangeSmsPut | TransportOrangeSmsJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportOrangeSmsPut | TransportOrangeSmsJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportOrangeSmsPut | TransportOrangeSmsJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-ovh-cloud': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportOvhCloudGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportOvhCloudJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportOvhCloudGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportOvhCloudPost | TransportOvhCloudJsonldPost }
            output: TransportOvhCloudGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportOvhCloudPost | TransportOvhCloudJsonldPost }
            output: TransportOvhCloudJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportOvhCloudPost | TransportOvhCloudJsonldPost }
            output: TransportOvhCloudGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportOvhCloudPost | TransportOvhCloudJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportOvhCloudPost | TransportOvhCloudJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportOvhCloudPost | TransportOvhCloudJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportOvhCloudPost | TransportOvhCloudJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportOvhCloudPost | TransportOvhCloudJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-ovh-cloud/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportOvhCloudGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportOvhCloudJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportOvhCloudGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportOvhCloudPut | TransportOvhCloudJsonldPut
            }
            output: TransportOvhCloudGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportOvhCloudPut | TransportOvhCloudJsonldPut
            }
            output: TransportOvhCloudJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportOvhCloudPut | TransportOvhCloudJsonldPut
            }
            output: TransportOvhCloudGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportOvhCloudPut | TransportOvhCloudJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportOvhCloudPut | TransportOvhCloudJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportOvhCloudPut | TransportOvhCloudJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportOvhCloudPut | TransportOvhCloudJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportOvhCloudPut | TransportOvhCloudJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportOvhCloudPut | TransportOvhCloudJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-pager-duty': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportPagerDutyGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportPagerDutyJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportPagerDutyGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportPagerDutyPost | TransportPagerDutyJsonldPost }
            output: TransportPagerDutyGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportPagerDutyPost | TransportPagerDutyJsonldPost }
            output: TransportPagerDutyJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportPagerDutyPost | TransportPagerDutyJsonldPost }
            output: TransportPagerDutyGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportPagerDutyPost | TransportPagerDutyJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportPagerDutyPost | TransportPagerDutyJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportPagerDutyPost | TransportPagerDutyJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportPagerDutyPost | TransportPagerDutyJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportPagerDutyPost | TransportPagerDutyJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-pager-duty/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportPagerDutyGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportPagerDutyJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportPagerDutyGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportPagerDutyPut | TransportPagerDutyJsonldPut
            }
            output: TransportPagerDutyGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportPagerDutyPut | TransportPagerDutyJsonldPut
            }
            output: TransportPagerDutyJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportPagerDutyPut | TransportPagerDutyJsonldPut
            }
            output: TransportPagerDutyGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportPagerDutyPut | TransportPagerDutyJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportPagerDutyPut | TransportPagerDutyJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportPagerDutyPut | TransportPagerDutyJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportPagerDutyPut | TransportPagerDutyJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportPagerDutyPut | TransportPagerDutyJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportPagerDutyPut | TransportPagerDutyJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-pager-tree': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportPagerTreeGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportPagerTreeJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportPagerTreeGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportPagerTreePost | TransportPagerTreeJsonldPost }
            output: TransportPagerTreeGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportPagerTreePost | TransportPagerTreeJsonldPost }
            output: TransportPagerTreeJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportPagerTreePost | TransportPagerTreeJsonldPost }
            output: TransportPagerTreeGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportPagerTreePost | TransportPagerTreeJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportPagerTreePost | TransportPagerTreeJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportPagerTreePost | TransportPagerTreeJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportPagerTreePost | TransportPagerTreeJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportPagerTreePost | TransportPagerTreeJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-pager-tree/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportPagerTreeGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportPagerTreeJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportPagerTreeGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportPagerTreePut | TransportPagerTreeJsonldPut
            }
            output: TransportPagerTreeGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportPagerTreePut | TransportPagerTreeJsonldPut
            }
            output: TransportPagerTreeJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportPagerTreePut | TransportPagerTreeJsonldPut
            }
            output: TransportPagerTreeGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportPagerTreePut | TransportPagerTreeJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportPagerTreePut | TransportPagerTreeJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportPagerTreePut | TransportPagerTreeJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportPagerTreePut | TransportPagerTreeJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportPagerTreePut | TransportPagerTreeJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportPagerTreePut | TransportPagerTreeJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-plivo': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportPlivoGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportPlivoJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportPlivoGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportPlivoPost | TransportPlivoJsonldPost }
            output: TransportPlivoGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportPlivoPost | TransportPlivoJsonldPost }
            output: TransportPlivoJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportPlivoPost | TransportPlivoJsonldPost }
            output: TransportPlivoGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportPlivoPost | TransportPlivoJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportPlivoPost | TransportPlivoJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportPlivoPost | TransportPlivoJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportPlivoPost | TransportPlivoJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportPlivoPost | TransportPlivoJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-plivo/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportPlivoGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportPlivoJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportPlivoGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & { json: TransportPlivoPut | TransportPlivoJsonldPut }
            output: TransportPlivoGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: TransportPlivoPut | TransportPlivoJsonldPut }
            output: TransportPlivoJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: TransportPlivoPut | TransportPlivoJsonldPut }
            output: TransportPlivoGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: TransportPlivoPut | TransportPlivoJsonldPut }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: TransportPlivoPut | TransportPlivoJsonldPut }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: TransportPlivoPut | TransportPlivoJsonldPut }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: TransportPlivoPut | TransportPlivoJsonldPut }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: TransportPlivoPut | TransportPlivoJsonldPut }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: TransportPlivoPut | TransportPlivoJsonldPut }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-pushbullet': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportPushbulletGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportPushbulletJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportPushbulletGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportPushbulletPost | TransportPushbulletJsonldPost }
            output: TransportPushbulletGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportPushbulletPost | TransportPushbulletJsonldPost }
            output: TransportPushbulletJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportPushbulletPost | TransportPushbulletJsonldPost }
            output: TransportPushbulletGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportPushbulletPost | TransportPushbulletJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportPushbulletPost | TransportPushbulletJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportPushbulletPost | TransportPushbulletJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportPushbulletPost | TransportPushbulletJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportPushbulletPost | TransportPushbulletJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-pushbullet/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportPushbulletGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportPushbulletJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportPushbulletGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportPushbulletPut | TransportPushbulletJsonldPut
            }
            output: TransportPushbulletGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportPushbulletPut | TransportPushbulletJsonldPut
            }
            output: TransportPushbulletJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportPushbulletPut | TransportPushbulletJsonldPut
            }
            output: TransportPushbulletGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportPushbulletPut | TransportPushbulletJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportPushbulletPut | TransportPushbulletJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportPushbulletPut | TransportPushbulletJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportPushbulletPut | TransportPushbulletJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportPushbulletPut | TransportPushbulletJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportPushbulletPut | TransportPushbulletJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-pushover': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportPushoverGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportPushoverJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportPushoverGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportPushoverPost | TransportPushoverJsonldPost }
            output: TransportPushoverGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportPushoverPost | TransportPushoverJsonldPost }
            output: TransportPushoverJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportPushoverPost | TransportPushoverJsonldPost }
            output: TransportPushoverGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportPushoverPost | TransportPushoverJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportPushoverPost | TransportPushoverJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportPushoverPost | TransportPushoverJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportPushoverPost | TransportPushoverJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportPushoverPost | TransportPushoverJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-pushover/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportPushoverGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportPushoverJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportPushoverGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportPushoverPut | TransportPushoverJsonldPut
            }
            output: TransportPushoverGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportPushoverPut | TransportPushoverJsonldPut
            }
            output: TransportPushoverJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportPushoverPut | TransportPushoverJsonldPut
            }
            output: TransportPushoverGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportPushoverPut | TransportPushoverJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportPushoverPut | TransportPushoverJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportPushoverPut | TransportPushoverJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportPushoverPut | TransportPushoverJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportPushoverPut | TransportPushoverJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportPushoverPut | TransportPushoverJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-pushy': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportPushyGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportPushyJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportPushyGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportPushyPost | TransportPushyJsonldPost }
            output: TransportPushyGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportPushyPost | TransportPushyJsonldPost }
            output: TransportPushyJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportPushyPost | TransportPushyJsonldPost }
            output: TransportPushyGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportPushyPost | TransportPushyJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportPushyPost | TransportPushyJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportPushyPost | TransportPushyJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportPushyPost | TransportPushyJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportPushyPost | TransportPushyJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-pushy/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportPushyGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportPushyJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportPushyGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & { json: TransportPushyPut | TransportPushyJsonldPut }
            output: TransportPushyGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: TransportPushyPut | TransportPushyJsonldPut }
            output: TransportPushyJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: TransportPushyPut | TransportPushyJsonldPut }
            output: TransportPushyGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: TransportPushyPut | TransportPushyJsonldPut }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: TransportPushyPut | TransportPushyJsonldPut }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: TransportPushyPut | TransportPushyJsonldPut }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: TransportPushyPut | TransportPushyJsonldPut }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: TransportPushyPut | TransportPushyJsonldPut }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: TransportPushyPut | TransportPushyJsonldPut }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-ring-central': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportRingCentralGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportRingCentralJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportRingCentralGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportRingCentralPost | TransportRingCentralJsonldPost }
            output: TransportRingCentralGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportRingCentralPost | TransportRingCentralJsonldPost }
            output: TransportRingCentralJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportRingCentralPost | TransportRingCentralJsonldPost }
            output: TransportRingCentralGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportRingCentralPost | TransportRingCentralJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportRingCentralPost | TransportRingCentralJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportRingCentralPost | TransportRingCentralJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportRingCentralPost | TransportRingCentralJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportRingCentralPost | TransportRingCentralJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-ring-central/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportRingCentralGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportRingCentralJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportRingCentralGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportRingCentralPut | TransportRingCentralJsonldPut
            }
            output: TransportRingCentralGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportRingCentralPut | TransportRingCentralJsonldPut
            }
            output: TransportRingCentralJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportRingCentralPut | TransportRingCentralJsonldPut
            }
            output: TransportRingCentralGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportRingCentralPut | TransportRingCentralJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportRingCentralPut | TransportRingCentralJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportRingCentralPut | TransportRingCentralJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportRingCentralPut | TransportRingCentralJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportRingCentralPut | TransportRingCentralJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportRingCentralPut | TransportRingCentralJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-rocket-chat': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportRocketChatGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportRocketChatJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportRocketChatGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportRocketChatPost | TransportRocketChatJsonldPost }
            output: TransportRocketChatGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportRocketChatPost | TransportRocketChatJsonldPost }
            output: TransportRocketChatJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportRocketChatPost | TransportRocketChatJsonldPost }
            output: TransportRocketChatGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportRocketChatPost | TransportRocketChatJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportRocketChatPost | TransportRocketChatJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportRocketChatPost | TransportRocketChatJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportRocketChatPost | TransportRocketChatJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportRocketChatPost | TransportRocketChatJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-rocket-chat/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportRocketChatGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportRocketChatJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportRocketChatGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportRocketChatPut | TransportRocketChatJsonldPut
            }
            output: TransportRocketChatGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportRocketChatPut | TransportRocketChatJsonldPut
            }
            output: TransportRocketChatJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportRocketChatPut | TransportRocketChatJsonldPut
            }
            output: TransportRocketChatGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportRocketChatPut | TransportRocketChatJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportRocketChatPut | TransportRocketChatJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportRocketChatPut | TransportRocketChatJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportRocketChatPut | TransportRocketChatJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportRocketChatPut | TransportRocketChatJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportRocketChatPut | TransportRocketChatJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-sendberry': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportSendberryGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportSendberryJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportSendberryGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportSendberryPost | TransportSendberryJsonldPost }
            output: TransportSendberryGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportSendberryPost | TransportSendberryJsonldPost }
            output: TransportSendberryJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportSendberryPost | TransportSendberryJsonldPost }
            output: TransportSendberryGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportSendberryPost | TransportSendberryJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportSendberryPost | TransportSendberryJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportSendberryPost | TransportSendberryJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportSendberryPost | TransportSendberryJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportSendberryPost | TransportSendberryJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-sendberry/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportSendberryGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportSendberryJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportSendberryGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportSendberryPut | TransportSendberryJsonldPut
            }
            output: TransportSendberryGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSendberryPut | TransportSendberryJsonldPut
            }
            output: TransportSendberryJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSendberryPut | TransportSendberryJsonldPut
            }
            output: TransportSendberryGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSendberryPut | TransportSendberryJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSendberryPut | TransportSendberryJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSendberryPut | TransportSendberryJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSendberryPut | TransportSendberryJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSendberryPut | TransportSendberryJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSendberryPut | TransportSendberryJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-sendinblue': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportSendinblueGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportSendinblueJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportSendinblueGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportSendinbluePost | TransportSendinblueJsonldPost }
            output: TransportSendinblueGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportSendinbluePost | TransportSendinblueJsonldPost }
            output: TransportSendinblueJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportSendinbluePost | TransportSendinblueJsonldPost }
            output: TransportSendinblueGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportSendinbluePost | TransportSendinblueJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportSendinbluePost | TransportSendinblueJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportSendinbluePost | TransportSendinblueJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportSendinbluePost | TransportSendinblueJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportSendinbluePost | TransportSendinblueJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-sendinblue/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportSendinblueGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportSendinblueJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportSendinblueGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportSendinbluePut | TransportSendinblueJsonldPut
            }
            output: TransportSendinblueGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSendinbluePut | TransportSendinblueJsonldPut
            }
            output: TransportSendinblueJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSendinbluePut | TransportSendinblueJsonldPut
            }
            output: TransportSendinblueGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSendinbluePut | TransportSendinblueJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSendinbluePut | TransportSendinblueJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSendinbluePut | TransportSendinblueJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSendinbluePut | TransportSendinblueJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSendinbluePut | TransportSendinblueJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSendinbluePut | TransportSendinblueJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-simple-textin': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportSimpleTextinGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportSimpleTextinJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportSimpleTextinGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportSimpleTextinPost | TransportSimpleTextinJsonldPost }
            output: TransportSimpleTextinGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportSimpleTextinPost | TransportSimpleTextinJsonldPost }
            output: TransportSimpleTextinJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportSimpleTextinPost | TransportSimpleTextinJsonldPost }
            output: TransportSimpleTextinGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportSimpleTextinPost | TransportSimpleTextinJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportSimpleTextinPost | TransportSimpleTextinJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportSimpleTextinPost | TransportSimpleTextinJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportSimpleTextinPost | TransportSimpleTextinJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportSimpleTextinPost | TransportSimpleTextinJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-simple-textin/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportSimpleTextinGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportSimpleTextinJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportSimpleTextinGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportSimpleTextinPut | TransportSimpleTextinJsonldPut
            }
            output: TransportSimpleTextinGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSimpleTextinPut | TransportSimpleTextinJsonldPut
            }
            output: TransportSimpleTextinJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSimpleTextinPut | TransportSimpleTextinJsonldPut
            }
            output: TransportSimpleTextinGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSimpleTextinPut | TransportSimpleTextinJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSimpleTextinPut | TransportSimpleTextinJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSimpleTextinPut | TransportSimpleTextinJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSimpleTextinPut | TransportSimpleTextinJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSimpleTextinPut | TransportSimpleTextinJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSimpleTextinPut | TransportSimpleTextinJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-sinch': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportSinchGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportSinchJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportSinchGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportSinchPost | TransportSinchJsonldPost }
            output: TransportSinchGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportSinchPost | TransportSinchJsonldPost }
            output: TransportSinchJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportSinchPost | TransportSinchJsonldPost }
            output: TransportSinchGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportSinchPost | TransportSinchJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportSinchPost | TransportSinchJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportSinchPost | TransportSinchJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportSinchPost | TransportSinchJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportSinchPost | TransportSinchJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-sinch/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportSinchGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportSinchJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportSinchGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & { json: TransportSinchPut | TransportSinchJsonldPut }
            output: TransportSinchGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: TransportSinchPut | TransportSinchJsonldPut }
            output: TransportSinchJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: TransportSinchPut | TransportSinchJsonldPut }
            output: TransportSinchGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: TransportSinchPut | TransportSinchJsonldPut }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: TransportSinchPut | TransportSinchJsonldPut }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: TransportSinchPut | TransportSinchJsonldPut }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: TransportSinchPut | TransportSinchJsonldPut }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: TransportSinchPut | TransportSinchJsonldPut }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: TransportSinchPut | TransportSinchJsonldPut }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-slack': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportSlackGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportSlackJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportSlackGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportSlackPost | TransportSlackJsonldPost }
            output: TransportSlackGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportSlackPost | TransportSlackJsonldPost }
            output: TransportSlackJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportSlackPost | TransportSlackJsonldPost }
            output: TransportSlackGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportSlackPost | TransportSlackJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportSlackPost | TransportSlackJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportSlackPost | TransportSlackJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportSlackPost | TransportSlackJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportSlackPost | TransportSlackJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-slack/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportSlackGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportSlackJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportSlackGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & { json: TransportSlackPut | TransportSlackJsonldPut }
            output: TransportSlackGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: TransportSlackPut | TransportSlackJsonldPut }
            output: TransportSlackJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: TransportSlackPut | TransportSlackJsonldPut }
            output: TransportSlackGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: TransportSlackPut | TransportSlackJsonldPut }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: TransportSlackPut | TransportSlackJsonldPut }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: TransportSlackPut | TransportSlackJsonldPut }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: TransportSlackPut | TransportSlackJsonldPut }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: TransportSlackPut | TransportSlackJsonldPut }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: TransportSlackPut | TransportSlackJsonldPut }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-sms-biuras': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportSmsBiurasGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportSmsBiurasJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportSmsBiurasGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportSmsBiurasPost | TransportSmsBiurasJsonldPost }
            output: TransportSmsBiurasGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportSmsBiurasPost | TransportSmsBiurasJsonldPost }
            output: TransportSmsBiurasJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportSmsBiurasPost | TransportSmsBiurasJsonldPost }
            output: TransportSmsBiurasGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportSmsBiurasPost | TransportSmsBiurasJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportSmsBiurasPost | TransportSmsBiurasJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportSmsBiurasPost | TransportSmsBiurasJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportSmsBiurasPost | TransportSmsBiurasJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportSmsBiurasPost | TransportSmsBiurasJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-sms-biuras/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportSmsBiurasGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportSmsBiurasJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportSmsBiurasGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportSmsBiurasPut | TransportSmsBiurasJsonldPut
            }
            output: TransportSmsBiurasGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSmsBiurasPut | TransportSmsBiurasJsonldPut
            }
            output: TransportSmsBiurasJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSmsBiurasPut | TransportSmsBiurasJsonldPut
            }
            output: TransportSmsBiurasGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSmsBiurasPut | TransportSmsBiurasJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSmsBiurasPut | TransportSmsBiurasJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSmsBiurasPut | TransportSmsBiurasJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSmsBiurasPut | TransportSmsBiurasJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSmsBiurasPut | TransportSmsBiurasJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSmsBiurasPut | TransportSmsBiurasJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-sms-factor': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportSmsFactorGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportSmsFactorJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportSmsFactorGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportSmsFactorPost | TransportSmsFactorJsonldPost }
            output: TransportSmsFactorGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportSmsFactorPost | TransportSmsFactorJsonldPost }
            output: TransportSmsFactorJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportSmsFactorPost | TransportSmsFactorJsonldPost }
            output: TransportSmsFactorGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportSmsFactorPost | TransportSmsFactorJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportSmsFactorPost | TransportSmsFactorJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportSmsFactorPost | TransportSmsFactorJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportSmsFactorPost | TransportSmsFactorJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportSmsFactorPost | TransportSmsFactorJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-sms-factor/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportSmsFactorGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportSmsFactorJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportSmsFactorGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportSmsFactorPut | TransportSmsFactorJsonldPut
            }
            output: TransportSmsFactorGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSmsFactorPut | TransportSmsFactorJsonldPut
            }
            output: TransportSmsFactorJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSmsFactorPut | TransportSmsFactorJsonldPut
            }
            output: TransportSmsFactorGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSmsFactorPut | TransportSmsFactorJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSmsFactorPut | TransportSmsFactorJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSmsFactorPut | TransportSmsFactorJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSmsFactorPut | TransportSmsFactorJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSmsFactorPut | TransportSmsFactorJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSmsFactorPut | TransportSmsFactorJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-sms77': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportSms77Get[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportSms77JsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportSms77Get[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportSms77Post | TransportSms77JsonldPost }
            output: TransportSms77Get
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportSms77Post | TransportSms77JsonldPost }
            output: TransportSms77JsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportSms77Post | TransportSms77JsonldPost }
            output: TransportSms77Get
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportSms77Post | TransportSms77JsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportSms77Post | TransportSms77JsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportSms77Post | TransportSms77JsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportSms77Post | TransportSms77JsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportSms77Post | TransportSms77JsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-sms77/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportSms77Get
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportSms77JsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportSms77Get
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & { json: TransportSms77Put | TransportSms77JsonldPut }
            output: TransportSms77Get
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: TransportSms77Put | TransportSms77JsonldPut }
            output: TransportSms77JsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: TransportSms77Put | TransportSms77JsonldPut }
            output: TransportSms77Get
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: TransportSms77Put | TransportSms77JsonldPut }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: TransportSms77Put | TransportSms77JsonldPut }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: TransportSms77Put | TransportSms77JsonldPut }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: TransportSms77Put | TransportSms77JsonldPut }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: TransportSms77Put | TransportSms77JsonldPut }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: TransportSms77Put | TransportSms77JsonldPut }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-smsapi': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportSmsapiGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportSmsapiJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportSmsapiGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportSmsapiPost | TransportSmsapiJsonldPost }
            output: TransportSmsapiGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportSmsapiPost | TransportSmsapiJsonldPost }
            output: TransportSmsapiJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportSmsapiPost | TransportSmsapiJsonldPost }
            output: TransportSmsapiGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportSmsapiPost | TransportSmsapiJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportSmsapiPost | TransportSmsapiJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportSmsapiPost | TransportSmsapiJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportSmsapiPost | TransportSmsapiJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportSmsapiPost | TransportSmsapiJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-smsapi/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportSmsapiGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportSmsapiJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportSmsapiGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportSmsapiPut | TransportSmsapiJsonldPut
            }
            output: TransportSmsapiGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSmsapiPut | TransportSmsapiJsonldPut
            }
            output: TransportSmsapiJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSmsapiPut | TransportSmsapiJsonldPut
            }
            output: TransportSmsapiGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSmsapiPut | TransportSmsapiJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSmsapiPut | TransportSmsapiJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSmsapiPut | TransportSmsapiJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSmsapiPut | TransportSmsapiJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSmsapiPut | TransportSmsapiJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSmsapiPut | TransportSmsapiJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-smsc': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportSmscGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportSmscJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportSmscGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportSmscPost | TransportSmscJsonldPost }
            output: TransportSmscGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportSmscPost | TransportSmscJsonldPost }
            output: TransportSmscJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportSmscPost | TransportSmscJsonldPost }
            output: TransportSmscGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportSmscPost | TransportSmscJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportSmscPost | TransportSmscJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportSmscPost | TransportSmscJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportSmscPost | TransportSmscJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportSmscPost | TransportSmscJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-smsc/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportSmscGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportSmscJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportSmscGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & { json: TransportSmscPut | TransportSmscJsonldPut }
            output: TransportSmscGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: TransportSmscPut | TransportSmscJsonldPut }
            output: TransportSmscJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: TransportSmscPut | TransportSmscJsonldPut }
            output: TransportSmscGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: TransportSmscPut | TransportSmscJsonldPut }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: TransportSmscPut | TransportSmscJsonldPut }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: TransportSmscPut | TransportSmscJsonldPut }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: TransportSmscPut | TransportSmscJsonldPut }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: TransportSmscPut | TransportSmscJsonldPut }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: TransportSmscPut | TransportSmscJsonldPut }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-smsmode': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportSmsmodeGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportSmsmodeJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportSmsmodeGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportSmsmodePost | TransportSmsmodeJsonldPost }
            output: TransportSmsmodeGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportSmsmodePost | TransportSmsmodeJsonldPost }
            output: TransportSmsmodeJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportSmsmodePost | TransportSmsmodeJsonldPost }
            output: TransportSmsmodeGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportSmsmodePost | TransportSmsmodeJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportSmsmodePost | TransportSmsmodeJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportSmsmodePost | TransportSmsmodeJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportSmsmodePost | TransportSmsmodeJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportSmsmodePost | TransportSmsmodeJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-smsmode/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportSmsmodeGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportSmsmodeJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportSmsmodeGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportSmsmodePut | TransportSmsmodeJsonldPut
            }
            output: TransportSmsmodeGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSmsmodePut | TransportSmsmodeJsonldPut
            }
            output: TransportSmsmodeJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSmsmodePut | TransportSmsmodeJsonldPut
            }
            output: TransportSmsmodeGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSmsmodePut | TransportSmsmodeJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSmsmodePut | TransportSmsmodeJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSmsmodePut | TransportSmsmodeJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSmsmodePut | TransportSmsmodeJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSmsmodePut | TransportSmsmodeJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSmsmodePut | TransportSmsmodeJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-spot-hit': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportSpotHitGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportSpotHitJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportSpotHitGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportSpotHitPost | TransportSpotHitJsonldPost }
            output: TransportSpotHitGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportSpotHitPost | TransportSpotHitJsonldPost }
            output: TransportSpotHitJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportSpotHitPost | TransportSpotHitJsonldPost }
            output: TransportSpotHitGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportSpotHitPost | TransportSpotHitJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportSpotHitPost | TransportSpotHitJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportSpotHitPost | TransportSpotHitJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportSpotHitPost | TransportSpotHitJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportSpotHitPost | TransportSpotHitJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-spot-hit/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportSpotHitGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportSpotHitJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportSpotHitGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportSpotHitPut | TransportSpotHitJsonldPut
            }
            output: TransportSpotHitGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSpotHitPut | TransportSpotHitJsonldPut
            }
            output: TransportSpotHitJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSpotHitPut | TransportSpotHitJsonldPut
            }
            output: TransportSpotHitGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSpotHitPut | TransportSpotHitJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSpotHitPut | TransportSpotHitJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSpotHitPut | TransportSpotHitJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSpotHitPut | TransportSpotHitJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSpotHitPut | TransportSpotHitJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportSpotHitPut | TransportSpotHitJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-telegram': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportTelegramGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportTelegramJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportTelegramGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportTelegramPost | TransportTelegramJsonldPost }
            output: TransportTelegramGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportTelegramPost | TransportTelegramJsonldPost }
            output: TransportTelegramJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportTelegramPost | TransportTelegramJsonldPost }
            output: TransportTelegramGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportTelegramPost | TransportTelegramJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportTelegramPost | TransportTelegramJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportTelegramPost | TransportTelegramJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportTelegramPost | TransportTelegramJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportTelegramPost | TransportTelegramJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-telegram/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportTelegramGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportTelegramJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportTelegramGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportTelegramPut | TransportTelegramJsonldPut
            }
            output: TransportTelegramGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTelegramPut | TransportTelegramJsonldPut
            }
            output: TransportTelegramJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTelegramPut | TransportTelegramJsonldPut
            }
            output: TransportTelegramGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTelegramPut | TransportTelegramJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTelegramPut | TransportTelegramJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTelegramPut | TransportTelegramJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTelegramPut | TransportTelegramJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTelegramPut | TransportTelegramJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTelegramPut | TransportTelegramJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-telnyx': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportTelnyxGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportTelnyxJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportTelnyxGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportTelnyxPost | TransportTelnyxJsonldPost }
            output: TransportTelnyxGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportTelnyxPost | TransportTelnyxJsonldPost }
            output: TransportTelnyxJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportTelnyxPost | TransportTelnyxJsonldPost }
            output: TransportTelnyxGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportTelnyxPost | TransportTelnyxJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportTelnyxPost | TransportTelnyxJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportTelnyxPost | TransportTelnyxJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportTelnyxPost | TransportTelnyxJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportTelnyxPost | TransportTelnyxJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-telnyx/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportTelnyxGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportTelnyxJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportTelnyxGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportTelnyxPut | TransportTelnyxJsonldPut
            }
            output: TransportTelnyxGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTelnyxPut | TransportTelnyxJsonldPut
            }
            output: TransportTelnyxJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTelnyxPut | TransportTelnyxJsonldPut
            }
            output: TransportTelnyxGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTelnyxPut | TransportTelnyxJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTelnyxPut | TransportTelnyxJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTelnyxPut | TransportTelnyxJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTelnyxPut | TransportTelnyxJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTelnyxPut | TransportTelnyxJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTelnyxPut | TransportTelnyxJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-termii': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportTermiiGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportTermiiJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportTermiiGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportTermiiPost | TransportTermiiJsonldPost }
            output: TransportTermiiGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportTermiiPost | TransportTermiiJsonldPost }
            output: TransportTermiiJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportTermiiPost | TransportTermiiJsonldPost }
            output: TransportTermiiGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportTermiiPost | TransportTermiiJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportTermiiPost | TransportTermiiJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportTermiiPost | TransportTermiiJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportTermiiPost | TransportTermiiJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportTermiiPost | TransportTermiiJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-termii/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportTermiiGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportTermiiJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportTermiiGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportTermiiPut | TransportTermiiJsonldPut
            }
            output: TransportTermiiGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTermiiPut | TransportTermiiJsonldPut
            }
            output: TransportTermiiJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTermiiPut | TransportTermiiJsonldPut
            }
            output: TransportTermiiGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTermiiPut | TransportTermiiJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTermiiPut | TransportTermiiJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTermiiPut | TransportTermiiJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTermiiPut | TransportTermiiJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTermiiPut | TransportTermiiJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTermiiPut | TransportTermiiJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-trello': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportTrelloGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportTrelloJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportTrelloGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportTrelloPost | TransportTrelloJsonldPost }
            output: TransportTrelloGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportTrelloPost | TransportTrelloJsonldPost }
            output: TransportTrelloJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportTrelloPost | TransportTrelloJsonldPost }
            output: TransportTrelloGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportTrelloPost | TransportTrelloJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportTrelloPost | TransportTrelloJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportTrelloPost | TransportTrelloJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportTrelloPost | TransportTrelloJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportTrelloPost | TransportTrelloJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-trello/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportTrelloGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportTrelloJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportTrelloGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportTrelloPut | TransportTrelloJsonldPut
            }
            output: TransportTrelloGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTrelloPut | TransportTrelloJsonldPut
            }
            output: TransportTrelloJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTrelloPut | TransportTrelloJsonldPut
            }
            output: TransportTrelloGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTrelloPut | TransportTrelloJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTrelloPut | TransportTrelloJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTrelloPut | TransportTrelloJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTrelloPut | TransportTrelloJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTrelloPut | TransportTrelloJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTrelloPut | TransportTrelloJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-turbo-sms': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportTurboSmsGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportTurboSmsJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportTurboSmsGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportTurboSmsPost | TransportTurboSmsJsonldPost }
            output: TransportTurboSmsGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportTurboSmsPost | TransportTurboSmsJsonldPost }
            output: TransportTurboSmsJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportTurboSmsPost | TransportTurboSmsJsonldPost }
            output: TransportTurboSmsGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportTurboSmsPost | TransportTurboSmsJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportTurboSmsPost | TransportTurboSmsJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportTurboSmsPost | TransportTurboSmsJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportTurboSmsPost | TransportTurboSmsJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportTurboSmsPost | TransportTurboSmsJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-turbo-sms/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportTurboSmsGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportTurboSmsJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportTurboSmsGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportTurboSmsPut | TransportTurboSmsJsonldPut
            }
            output: TransportTurboSmsGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTurboSmsPut | TransportTurboSmsJsonldPut
            }
            output: TransportTurboSmsJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTurboSmsPut | TransportTurboSmsJsonldPut
            }
            output: TransportTurboSmsGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTurboSmsPut | TransportTurboSmsJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTurboSmsPut | TransportTurboSmsJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTurboSmsPut | TransportTurboSmsJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTurboSmsPut | TransportTurboSmsJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTurboSmsPut | TransportTurboSmsJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTurboSmsPut | TransportTurboSmsJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-twilio': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportTwilioGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportTwilioJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportTwilioGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportTwilioPost | TransportTwilioJsonldPost }
            output: TransportTwilioGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportTwilioPost | TransportTwilioJsonldPost }
            output: TransportTwilioJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportTwilioPost | TransportTwilioJsonldPost }
            output: TransportTwilioGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportTwilioPost | TransportTwilioJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportTwilioPost | TransportTwilioJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportTwilioPost | TransportTwilioJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportTwilioPost | TransportTwilioJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportTwilioPost | TransportTwilioJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-twilio/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportTwilioGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportTwilioJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportTwilioGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportTwilioPut | TransportTwilioJsonldPut
            }
            output: TransportTwilioGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTwilioPut | TransportTwilioJsonldPut
            }
            output: TransportTwilioJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTwilioPut | TransportTwilioJsonldPut
            }
            output: TransportTwilioGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTwilioPut | TransportTwilioJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTwilioPut | TransportTwilioJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTwilioPut | TransportTwilioJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTwilioPut | TransportTwilioJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTwilioPut | TransportTwilioJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTwilioPut | TransportTwilioJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-twitter': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportTwitterGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportTwitterJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportTwitterGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportTwitterPost | TransportTwitterJsonldPost }
            output: TransportTwitterGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportTwitterPost | TransportTwitterJsonldPost }
            output: TransportTwitterJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportTwitterPost | TransportTwitterJsonldPost }
            output: TransportTwitterGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportTwitterPost | TransportTwitterJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportTwitterPost | TransportTwitterJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportTwitterPost | TransportTwitterJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportTwitterPost | TransportTwitterJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportTwitterPost | TransportTwitterJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-twitter/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportTwitterGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportTwitterJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportTwitterGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportTwitterPut | TransportTwitterJsonldPut
            }
            output: TransportTwitterGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTwitterPut | TransportTwitterJsonldPut
            }
            output: TransportTwitterJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTwitterPut | TransportTwitterJsonldPut
            }
            output: TransportTwitterGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTwitterPut | TransportTwitterJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTwitterPut | TransportTwitterJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTwitterPut | TransportTwitterJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTwitterPut | TransportTwitterJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTwitterPut | TransportTwitterJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportTwitterPut | TransportTwitterJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-vonage': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportVonageGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportVonageJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportVonageGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportVonagePost | TransportVonageJsonldPost }
            output: TransportVonageGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportVonagePost | TransportVonageJsonldPost }
            output: TransportVonageJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportVonagePost | TransportVonageJsonldPost }
            output: TransportVonageGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportVonagePost | TransportVonageJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportVonagePost | TransportVonageJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportVonagePost | TransportVonageJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportVonagePost | TransportVonageJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportVonagePost | TransportVonageJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-vonage/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportVonageGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportVonageJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportVonageGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportVonagePut | TransportVonageJsonldPut
            }
            output: TransportVonageGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportVonagePut | TransportVonageJsonldPut
            }
            output: TransportVonageJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportVonagePut | TransportVonageJsonldPut
            }
            output: TransportVonageGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportVonagePut | TransportVonageJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportVonagePut | TransportVonageJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportVonagePut | TransportVonageJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportVonagePut | TransportVonageJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportVonagePut | TransportVonageJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportVonagePut | TransportVonageJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-webhook': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportWebhookGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportWebhookJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportWebhookGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportWebhookPost | TransportWebhookJsonldPost }
            output: TransportWebhookGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportWebhookPost | TransportWebhookJsonldPost }
            output: TransportWebhookJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportWebhookPost | TransportWebhookJsonldPost }
            output: TransportWebhookGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportWebhookPost | TransportWebhookJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportWebhookPost | TransportWebhookJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportWebhookPost | TransportWebhookJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportWebhookPost | TransportWebhookJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportWebhookPost | TransportWebhookJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-webhook/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportWebhookGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportWebhookJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportWebhookGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportWebhookPut | TransportWebhookJsonldPut
            }
            output: TransportWebhookGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportWebhookPut | TransportWebhookJsonldPut
            }
            output: TransportWebhookJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportWebhookPut | TransportWebhookJsonldPut
            }
            output: TransportWebhookGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportWebhookPut | TransportWebhookJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportWebhookPut | TransportWebhookJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportWebhookPut | TransportWebhookJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportWebhookPut | TransportWebhookJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportWebhookPut | TransportWebhookJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportWebhookPut | TransportWebhookJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-yunpian': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportYunpianGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportYunpianJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportYunpianGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportYunpianPost | TransportYunpianJsonldPost }
            output: TransportYunpianGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportYunpianPost | TransportYunpianJsonldPost }
            output: TransportYunpianJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportYunpianPost | TransportYunpianJsonldPost }
            output: TransportYunpianGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportYunpianPost | TransportYunpianJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportYunpianPost | TransportYunpianJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportYunpianPost | TransportYunpianJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportYunpianPost | TransportYunpianJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportYunpianPost | TransportYunpianJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-yunpian/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportYunpianGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportYunpianJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportYunpianGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportYunpianPut | TransportYunpianJsonldPut
            }
            output: TransportYunpianGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportYunpianPut | TransportYunpianJsonldPut
            }
            output: TransportYunpianJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportYunpianPut | TransportYunpianJsonldPut
            }
            output: TransportYunpianGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportYunpianPut | TransportYunpianJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportYunpianPut | TransportYunpianJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportYunpianPut | TransportYunpianJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportYunpianPut | TransportYunpianJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportYunpianPut | TransportYunpianJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportYunpianPut | TransportYunpianJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-zendesk': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportZendeskGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportZendeskJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportZendeskGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportZendeskPost | TransportZendeskJsonldPost }
            output: TransportZendeskGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportZendeskPost | TransportZendeskJsonldPost }
            output: TransportZendeskJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportZendeskPost | TransportZendeskJsonldPost }
            output: TransportZendeskGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportZendeskPost | TransportZendeskJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportZendeskPost | TransportZendeskJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportZendeskPost | TransportZendeskJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportZendeskPost | TransportZendeskJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportZendeskPost | TransportZendeskJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-zendesk/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportZendeskGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportZendeskJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportZendeskGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: TransportZendeskPut | TransportZendeskJsonldPut
            }
            output: TransportZendeskGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportZendeskPut | TransportZendeskJsonldPut
            }
            output: TransportZendeskJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportZendeskPut | TransportZendeskJsonldPut
            }
            output: TransportZendeskGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: TransportZendeskPut | TransportZendeskJsonldPut
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: TransportZendeskPut | TransportZendeskJsonldPut
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: TransportZendeskPut | TransportZendeskJsonldPut
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: TransportZendeskPut | TransportZendeskJsonldPut
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: TransportZendeskPut | TransportZendeskJsonldPut
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: TransportZendeskPut | TransportZendeskJsonldPut
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-zulip': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportZulipGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {
              'hydra:member': TransportZulipJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: TransportZulipGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                dataSegmentCode?: string | undefined
                'dataSegmentCode[]'?: string[] | undefined
                partition?: string | undefined
                'partition[]'?: string[] | undefined
                'properties[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransportZulipPost | TransportZulipJsonldPost }
            output: TransportZulipGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportZulipPost | TransportZulipJsonldPost }
            output: TransportZulipJsonldGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransportZulipPost | TransportZulipJsonldPost }
            output: TransportZulipGet
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: TransportZulipPost | TransportZulipJsonldPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TransportZulipPost | TransportZulipJsonldPost }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransportZulipPost | TransportZulipJsonldPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TransportZulipPost | TransportZulipJsonldPost }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: TransportZulipPost | TransportZulipJsonldPost }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transport-zulip/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: TransportZulipGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportZulipJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransportZulipGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & { json: TransportZulipPut | TransportZulipJsonldPut }
            output: TransportZulipGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: TransportZulipPut | TransportZulipJsonldPut }
            output: TransportZulipJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: TransportZulipPut | TransportZulipJsonldPut }
            output: TransportZulipGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: TransportZulipPut | TransportZulipJsonldPut }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: TransportZulipPut | TransportZulipJsonldPut }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: TransportZulipPut | TransportZulipJsonldPut }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: TransportZulipPut | TransportZulipJsonldPut }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: TransportZulipPut | TransportZulipJsonldPut }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: TransportZulipPut | TransportZulipJsonldPut }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/user-account': {
      $get:
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: UserAccountGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: {
              'hydra:member': UserAccountJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: UserAccountGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/user-account-level-code': {
      $get:
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: UserAccountLevelCodeGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: {
              'hydra:member': UserAccountLevelCodeJsonldGet[]
              'hydra:search'?:
                | {
                    '@type'?: string | undefined
                    'hydra:mapping'?:
                      | {
                          '@type'?: string | undefined
                          property?: (string | null) | undefined
                          required?: boolean | undefined
                          variable?: string | undefined
                        }[]
                      | undefined
                    'hydra:template'?: string | undefined
                    'hydra:variableRepresentation'?: string | undefined
                  }
                | undefined
              'hydra:totalItems'?: number | undefined
              'hydra:view'?:
                | {
                    '@id'?: string | undefined
                    '@type'?: string | undefined
                    'hydra:first'?: string | undefined
                    'hydra:last'?: string | undefined
                    'hydra:next'?: string | undefined
                    'hydra:previous'?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: UserAccountLevelCodeGet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { page?: number | undefined; 'properties[]'?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/user-account-level-code/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: UserAccountLevelCodeGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: UserAccountLevelCodeJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: UserAccountLevelCodeGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/api/user-account/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: UserAccountGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: UserAccountJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: UserAccountGet
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & { json: UserAccountPut | UserAccountJsonldPut }
            output: UserAccountGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: UserAccountPut | UserAccountJsonldPut }
            output: UserAccountJsonldGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: UserAccountPut | UserAccountJsonldPut }
            output: UserAccountGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: UserAccountPut | UserAccountJsonldPut }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: UserAccountPut | UserAccountJsonldPut }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: UserAccountPut | UserAccountJsonldPut }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: UserAccountPut | UserAccountJsonldPut }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: UserAccountPut | UserAccountJsonldPut }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: UserAccountPut | UserAccountJsonldPut }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  },
  '/'
>
export default routes
