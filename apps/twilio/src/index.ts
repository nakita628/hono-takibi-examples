import { OpenAPIHono } from '@hono/zod-openapi'
import {
  api20100401AccountHandler,
  api20100401AddOnResultHandler,
  api20100401AddressHandler,
  api20100401AllTimeHandler,
  api20100401ApplicationHandler,
  api20100401AssignedAddOnExtensionHandler,
  api20100401AssignedAddOnHandler,
  api20100401AuthCallsCredentialListMappingHandler,
  api20100401AuthCallsIpAccessControlListMappingHandler,
  api20100401AuthorizedConnectAppHandler,
  api20100401AuthRegistrationsCredentialListMappingHandler,
  api20100401AvailablePhoneNumberCountryHandler,
  api20100401BalanceHandler,
  api20100401CallHandler,
  api20100401CallNotificationHandler,
  api20100401CallRecordingHandler,
  api20100401CallTranscriptionHandler,
  api20100401ConferenceHandler,
  api20100401ConferenceRecordingHandler,
  api20100401ConnectAppHandler,
  api20100401CredentialHandler,
  api20100401CredentialListHandler,
  api20100401CredentialListMappingHandler,
  api20100401DailyHandler,
  api20100401DataHandler,
  api20100401DependentPhoneNumberHandler,
  api20100401DomainHandler,
  api20100401EventHandler,
  api20100401FeedbackHandler,
  api20100401IncomingPhoneNumberHandler,
  api20100401IncomingPhoneNumberLocalHandler,
  api20100401IncomingPhoneNumberMobileHandler,
  api20100401IncomingPhoneNumberTollFreeHandler,
  api20100401IpAccessControlListHandler,
  api20100401IpAccessControlListMappingHandler,
  api20100401KeyHandler,
  api20100401LastMonthHandler,
  api20100401LocalHandler,
  api20100401MachineToMachineHandler,
  api20100401MediaHandler,
  api20100401MediaInstanceHandler,
  api20100401MemberHandler,
  api20100401MessageHandler,
  api20100401MobileHandler,
  api20100401MonthlyHandler,
  api20100401NationalHandler,
  api20100401NewKeyHandler,
  api20100401NewSigningKeyHandler,
  api20100401NotificationHandler,
  api20100401OutgoingCallerIdHandler,
  api20100401ParticipantHandler,
  api20100401PayloadHandler,
  api20100401PaymentHandler,
  api20100401QueueHandler,
  api20100401RecordHandler,
  api20100401RecordingHandler,
  api20100401RecordingTranscriptionHandler,
  api20100401SharedCostHandler,
  api20100401ShortCodeHandler,
  api20100401SigningKeyHandler,
  api20100401SipIpAddressHandler,
  api20100401SiprecHandler,
  api20100401StreamHandler,
  api20100401ThisMonthHandler,
  api20100401TodayHandler,
  api20100401TokenHandler,
  api20100401TollFreeHandler,
  api20100401TranscriptionHandler,
  api20100401TriggerHandler,
  api20100401UserDefinedMessageHandler,
  api20100401UserDefinedMessageSubscriptionHandler,
  api20100401ValidationRequestHandler,
  api20100401VoipHandler,
  api20100401YearlyHandler,
  api20100401YesterdayHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', api20100401AccountHandler)
  .route('/', api20100401AddressHandler)
  .route('/', api20100401ApplicationHandler)
  .route('/', api20100401AuthorizedConnectAppHandler)
  .route('/', api20100401AvailablePhoneNumberCountryHandler)
  .route('/', api20100401LocalHandler)
  .route('/', api20100401MachineToMachineHandler)
  .route('/', api20100401MobileHandler)
  .route('/', api20100401NationalHandler)
  .route('/', api20100401SharedCostHandler)
  .route('/', api20100401TollFreeHandler)
  .route('/', api20100401VoipHandler)
  .route('/', api20100401BalanceHandler)
  .route('/', api20100401CallHandler)
  .route('/', api20100401EventHandler)
  .route('/', api20100401CallNotificationHandler)
  .route('/', api20100401CallRecordingHandler)
  .route('/', api20100401ConferenceHandler)
  .route('/', api20100401ConferenceRecordingHandler)
  .route('/', api20100401ConnectAppHandler)
  .route('/', api20100401DependentPhoneNumberHandler)
  .route('/', api20100401IncomingPhoneNumberHandler)
  .route('/', api20100401AssignedAddOnHandler)
  .route('/', api20100401AssignedAddOnExtensionHandler)
  .route('/', api20100401IncomingPhoneNumberLocalHandler)
  .route('/', api20100401IncomingPhoneNumberMobileHandler)
  .route('/', api20100401IncomingPhoneNumberTollFreeHandler)
  .route('/', api20100401KeyHandler)
  .route('/', api20100401NewKeyHandler)
  .route('/', api20100401MediaInstanceHandler)
  .route('/', api20100401MediaHandler)
  .route('/', api20100401MemberHandler)
  .route('/', api20100401MessageHandler)
  .route('/', api20100401FeedbackHandler)
  .route('/', api20100401NewSigningKeyHandler)
  .route('/', api20100401SigningKeyHandler)
  .route('/', api20100401NotificationHandler)
  .route('/', api20100401OutgoingCallerIdHandler)
  .route('/', api20100401ValidationRequestHandler)
  .route('/', api20100401ParticipantHandler)
  .route('/', api20100401PaymentHandler)
  .route('/', api20100401QueueHandler)
  .route('/', api20100401CallTranscriptionHandler)
  .route('/', api20100401RecordingHandler)
  .route('/', api20100401AddOnResultHandler)
  .route('/', api20100401PayloadHandler)
  .route('/', api20100401DataHandler)
  .route('/', api20100401RecordingTranscriptionHandler)
  .route('/', api20100401ShortCodeHandler)
  .route('/', api20100401AuthCallsCredentialListMappingHandler)
  .route('/', api20100401AuthCallsIpAccessControlListMappingHandler)
  .route('/', api20100401AuthRegistrationsCredentialListMappingHandler)
  .route('/', api20100401CredentialHandler)
  .route('/', api20100401CredentialListHandler)
  .route('/', api20100401CredentialListMappingHandler)
  .route('/', api20100401DomainHandler)
  .route('/', api20100401IpAccessControlListHandler)
  .route('/', api20100401IpAccessControlListMappingHandler)
  .route('/', api20100401SipIpAddressHandler)
  .route('/', api20100401SiprecHandler)
  .route('/', api20100401StreamHandler)
  .route('/', api20100401TokenHandler)
  .route('/', api20100401TranscriptionHandler)
  .route('/', api20100401RecordHandler)
  .route('/', api20100401AllTimeHandler)
  .route('/', api20100401DailyHandler)
  .route('/', api20100401LastMonthHandler)
  .route('/', api20100401MonthlyHandler)
  .route('/', api20100401ThisMonthHandler)
  .route('/', api20100401TodayHandler)
  .route('/', api20100401YearlyHandler)
  .route('/', api20100401YesterdayHandler)
  .route('/', api20100401TriggerHandler)
  .route('/', api20100401UserDefinedMessageHandler)
  .route('/', api20100401UserDefinedMessageSubscriptionHandler)

export default app
