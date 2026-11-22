type BulkCredentialRequest = {
  amount?: number | undefined
  connection_id: string
  name?: string | undefined
  tag: string
}
type MobileOperatorNetworkPreferencesRequest = {
  mobile_operator_network_id?: string | undefined
  priority?: number | undefined
}
type MobileOperatorNetworksPreferencesRequest = MobileOperatorNetworkPreferencesRequest[]
type MobileOperatorNetworkPreferencesResponse = {
  mobile_operator_network_id?: string | undefined
  mobile_operator_network_name?: string | undefined
  priority?: number | undefined
}
type MobileOperatorNetworksPreferencesResponse = MobileOperatorNetworkPreferencesResponse[]
type CompleteOTAUpdate = {
  created_at?: string | undefined
  id?: string | undefined
  record_type?: string | undefined
  settings?:
    | {
        mobile_operator_networks_preferences?: MobileOperatorNetworksPreferencesResponse | undefined
      }
    | undefined
  sim_card_id?: string | undefined
  status?: 'in-progress' | 'completed' | 'failed' | undefined
  type?: 'sim_card_network_preferences' | undefined
  updated_at?: string | undefined
}
type SIMCardNetworkPreferenceWithOTAUpdates = {
  created_at?: string | undefined
  mobile_operator_networks_preferences?: MobileOperatorNetworksPreferencesResponse | undefined
  ota_updates?: CompleteOTAUpdate[] | undefined
  record_type?: string | undefined
  sim_card_id?: string | undefined
  updated_at?: string | undefined
}
type Error = {
  code: string
  detail?: string | undefined
  meta?: { [x: string]: unknown } | undefined
  source?: { parameter?: string | undefined; pointer?: string | undefined } | undefined
  title: string
}
type Errors = { errors?: Error[] | undefined }
type SIMCardRegistration = {
  registration_codes: string[]
  sim_card_group_id?: string | undefined
  status?: 'enabled' | 'disabled' | 'standby' | undefined
  tags?: string[] | undefined
}
type SimpleSIMCard = {
  created_at?: string | undefined
  iccid?: string | undefined
  id?: string | undefined
  imsi?: string | undefined
  msisdn?: string | undefined
  record_type?: string | undefined
  sim_card_group_id?: string | undefined
  status?:
    | 'registering'
    | 'enabling'
    | 'enabled'
    | 'disabling'
    | 'disabled'
    | 'data_limit_exceeded'
    | undefined
  tags?: string[] | undefined
  updated_at?: string | undefined
}
type AddressBook = boolean
type AdministrativeArea = string
type Borough = string
type BusinessName = string
type CountryCode = string
type CustomerReference = string
type ExtendedAddress = string
type FirstName = string
type LastName = string
type Locality = string
type Neighborhood = string
type PhoneNumber2 = string
type PostalCode = string
type StreetAddress = string
type ValidateAddress2 = boolean
type Address = {
  address_book?: AddressBook | undefined
  administrative_area?: AdministrativeArea | undefined
  borough?: Borough | undefined
  business_name?: BusinessName | undefined
  country_code?: CountryCode | undefined
  created_at?: string | undefined
  customer_reference?: CustomerReference | undefined
  extended_address?: ExtendedAddress | undefined
  first_name?: FirstName | undefined
  id?: string | undefined
  last_name?: LastName | undefined
  locality?: Locality | undefined
  neighborhood?: Neighborhood | undefined
  phone_number?: PhoneNumber2 | undefined
  postal_code?: PostalCode | undefined
  record_type?: string | undefined
  street_address?: StreetAddress | undefined
  updated_at?: string | undefined
  validate_address?: ValidateAddress2 | undefined
}
type PaginationMeta = {
  page_number?: number | undefined
  page_size?: number | undefined
  total_pages?: number | undefined
  total_results?: number | undefined
}
type AddressCreate = {
  address_book?: AddressBook | undefined
  administrative_area?: AdministrativeArea | undefined
  borough?: Borough | undefined
  business_name: BusinessName
  country_code: CountryCode
  customer_reference?: CustomerReference | undefined
  extended_address?: ExtendedAddress | undefined
  first_name: FirstName
  last_name: LastName
  locality: Locality
  neighborhood?: Neighborhood | undefined
  phone_number?: PhoneNumber2 | undefined
  postal_code?: PostalCode | undefined
  street_address: StreetAddress
  validate_address?: ValidateAddress2 | undefined
}
type ValidateAddressRequest = {
  administrative_area?: AdministrativeArea | undefined
  country_code: CountryCode
  extended_address?: ExtendedAddress | undefined
  locality?: Locality | undefined
  postal_code: PostalCode
  street_address: StreetAddress
}
type ValidateAddress = {
  administrative_area?: AdministrativeArea | undefined
  country_code?: CountryCode | undefined
  extended_address?: ExtendedAddress | undefined
  locality?: Locality | undefined
  postal_code?: PostalCode | undefined
  street_address?: StreetAddress | undefined
}
type ValidateAddressResult = {
  errors?: Error[] | undefined
  record_type?: string | undefined
  result: 'valid' | 'invalid'
  suggested: ValidateAddress
}
type Active = boolean
type Name2 = string
type OrganizationId = string
type ShortName = string
type AuthenticationProvider = {
  active?: Active | undefined
  created_at?: string | undefined
  id?: string | undefined
  name?: Name2 | undefined
  organization_id?: OrganizationId | undefined
  record_type?: string | undefined
  settings?:
    | {
        assertion_consumer_service_url?: string | undefined
        idp_cert_fingerprint?: string | undefined
        idp_cert_fingerprint_algorithm?: 'sha1' | 'sha256' | 'sha384' | 'sha512' | undefined
        idp_entity_id?: string | undefined
        idp_sso_target_url?: string | undefined
        name_identifier_format?: string | undefined
        service_provider_entity_id?: string | undefined
      }
    | undefined
  short_name?: ShortName | undefined
  updated_at?: string | undefined
}
type Settings = {
  idp_cert_fingerprint: string
  idp_cert_fingerprint_algorithm?: 'sha1' | 'sha256' | 'sha384' | 'sha512' | undefined
  idp_entity_id: string
  idp_sso_target_url: string
}
type SettingsUrl = string
type AuthenticationProviderCreate = {
  active?: Active | undefined
  name: Name2
  settings: Settings
  settings_url?: SettingsUrl | undefined
  short_name: ShortName
}
type UpdateAuthenticationProviderRequest = {
  active?: Active | undefined
  name?: Name2 | undefined
  settings?: Settings | undefined
  settings_url?: SettingsUrl | undefined
  short_name?: ShortName | undefined
}
type CostInformation = {
  currency?: string | undefined
  monthly_cost?: string | undefined
  upfront_cost?: string | undefined
}
type Feature = { name?: string | undefined }
type RegionInformation = {
  region_name?: string | undefined
  region_type?: 'country_code' | 'rate_center' | 'state' | 'location' | undefined
}
type AvailablePhoneNumberBlock = {
  cost_information?: CostInformation | undefined
  features?: Feature[] | undefined
  range?: number | undefined
  record_type?: 'available_phone_number_block' | undefined
  region_information?: RegionInformation[] | undefined
  starting_number?: string | undefined
}
type AvailablePhoneNumbersMetadata = {
  best_effort_results?: number | undefined
  total_results?: number | undefined
}
type AvailablePhoneNumber = {
  best_effort?: boolean | undefined
  cost_information?: CostInformation | undefined
  features?: Feature[] | undefined
  phone_number?: string | undefined
  quickship?: boolean | undefined
  record_type?: 'available_phone_number' | undefined
  region_information?: RegionInformation[] | undefined
  reservable?: boolean | undefined
  vanity_format?: string | undefined
}
type UserBalance = {
  available_credit?: string | undefined
  balance?: string | undefined
  credit_limit?: string | undefined
  currency?: string | undefined
  record_type?: 'balance' | undefined
}
type BillingGroup = {
  created_at?: string | undefined
  deleted_at?: string | undefined
  id?: string | undefined
  name?: string | undefined
  organization_id?: string | undefined
  record_type?: 'billing_group' | undefined
  updated_at?: string | undefined
}
type NewBillingGroup = { name?: string | undefined }
type UpdateBillingGroup = { name?: string | undefined }
type CallControlApplicationInbound = {
  channel_limit?: number | undefined
  sip_subdomain?: string | undefined
  sip_subdomain_receive_settings?: 'only_my_connections' | 'from_anyone' | undefined
}
type CallControlApplicationOutbound = {
  channel_limit?: number | undefined
  outbound_voice_profile_id?: string | undefined
}
type CallControlApplication = {
  active?: boolean | undefined
  anchorsite_override?:
    | '"Latency"'
    | '"Chicago, IL"'
    | '"Ashburn, VA"'
    | '"San Jose, CA"'
    | undefined
  application_name?: string | undefined
  created_at?: string | undefined
  dtmf_type?: 'RFC 2833' | 'Inband' | 'SIP INFO' | undefined
  first_command_timeout?: boolean | undefined
  first_command_timeout_secs?: number | undefined
  id?: string | undefined
  inbound?: CallControlApplicationInbound | undefined
  outbound?: CallControlApplicationOutbound | undefined
  record_type?: 'call_control_application' | undefined
  updated_at?: string | undefined
  webhook_api_version?: '1' | '2' | undefined
  webhook_event_failover_url?: (string | null) | undefined
  webhook_event_url?: string | undefined
  webhook_timeout_secs?: (number | null) | undefined
}
type CreateCallControlApplicationRequest = {
  active?: boolean | undefined
  anchorsite_override?:
    | '"Latency"'
    | '"Chicago, IL"'
    | '"Ashburn, VA"'
    | '"San Jose, CA"'
    | undefined
  application_name: string
  dtmf_type?: 'RFC 2833' | 'Inband' | 'SIP INFO' | undefined
  first_command_timeout?: boolean | undefined
  first_command_timeout_secs?: number | undefined
  inbound?: CallControlApplicationInbound | undefined
  outbound?: CallControlApplicationOutbound | undefined
  webhook_api_version?: '1' | '2' | undefined
  webhook_event_failover_url?: (string | null) | undefined
  webhook_event_url: string
  webhook_timeout_secs?: (number | null) | undefined
}
type UpdateCallControlApplicationRequest = {
  active?: boolean | undefined
  anchorsite_override?:
    | '"Latency"'
    | '"Chicago, IL"'
    | '"Ashburn, VA"'
    | '"San Jose, CA"'
    | undefined
  application_name: string
  dtmf_type?: 'RFC 2833' | 'Inband' | 'SIP INFO' | undefined
  first_command_timeout?: boolean | undefined
  first_command_timeout_secs?: number | undefined
  inbound?: CallControlApplicationInbound | undefined
  outbound?: CallControlApplicationOutbound | undefined
  webhook_api_version?: '1' | '2' | undefined
  webhook_event_failover_url?: (string | null) | undefined
  webhook_event_url: string
  webhook_timeout_secs?: (number | null) | undefined
}
type CallEvent = {
  call_leg_id: string
  call_session_id: string
  event_timestamp: string
  metadata: { [x: string]: unknown }
  name: string
  record_type: 'call_event'
  type: 'command' | 'webhook'
}
type CustomSipHeader = { name: string; value: string }
type CallRequest = {
  answering_machine_detection?:
    | 'detect'
    | 'detect_beep'
    | 'detect_words'
    | 'greeting_end'
    | 'disabled'
    | undefined
  answering_machine_detection_config?:
    | {
        after_greeting_silence_millis?: number | undefined
        between_words_silence_millis?: number | undefined
        greeting_duration_millis?: number | undefined
        greeting_silence_duration_millis?: number | undefined
        greeting_total_analysis_time_millis?: number | undefined
        initial_silence_millis?: number | undefined
        maximum_number_of_words?: number | undefined
        maximum_word_length_millis?: number | undefined
        silence_threshold?: number | undefined
        total_analysis_time_millis?: number | undefined
      }
    | undefined
  audio_url?: string | undefined
  billing_group_id?: string | undefined
  client_state?: string | undefined
  command_id?: string | undefined
  connection_id: string
  custom_headers?: CustomSipHeader[] | undefined
  from: string
  from_display_name?: string | undefined
  link_to?: string | undefined
  media_name?: string | undefined
  sip_auth_password?: string | undefined
  sip_auth_username?: string | undefined
  time_limit_secs?: number | undefined
  timeout_secs?: number | undefined
  to: string
  webhook_url?: string | undefined
  webhook_url_method?: 'POST' | 'GET' | undefined
}
type Call = {
  call_control_id: string
  call_leg_id: string
  call_session_id: string
  is_alive: boolean
  record_type: 'call'
}
type AnswerRequest = {
  billing_group_id?: string | undefined
  client_state?: string | undefined
  command_id?: string | undefined
  webhook_url?: string | undefined
  webhook_url_method?: 'POST' | 'GET' | undefined
}
type CallControlCommandResult = { result?: string | undefined }
type BridgeRequest = {
  call_control_id: string
  client_state?: string | undefined
  command_id?: string | undefined
  park_after_unbridge?: string | undefined
  queue?: string | undefined
}
type EnqueueRequest = {
  client_state?: string | undefined
  command_id?: string | undefined
  max_size?: number | undefined
  max_wait_time_secs?: number | undefined
  queue_name?: string | undefined
}
type StartForkingRequest = {
  client_state?: string | undefined
  command_id?: string | undefined
  rx?: string | undefined
  stream_type?: 'raw' | 'decrypted' | undefined
  target?: string | undefined
  tx?: string | undefined
}
type StopForkingRequest = { client_state?: string | undefined; command_id?: string | undefined }
type StopGatherRequest = { client_state?: string | undefined; command_id?: string | undefined }
type GatherUsingAudioRequest = {
  audio_url?: string | undefined
  client_state?: string | undefined
  command_id?: string | undefined
  inter_digit_timeout_millis?: number | undefined
  invalid_audio_url?: string | undefined
  invalid_media_name?: string | undefined
  maximum_digits?: number | undefined
  maximum_tries?: number | undefined
  media_name?: string | undefined
  minimum_digits?: number | undefined
  terminating_digit?: string | undefined
  timeout_millis?: number | undefined
  valid_digits?: string | undefined
}
type GatherUsingSpeakRequest = {
  client_state?: string | undefined
  command_id?: string | undefined
  inter_digit_timeout_millis?: number | undefined
  invalid_payload?: string | undefined
  language:
    | 'arb'
    | 'cmn-CN'
    | 'cy-GB'
    | 'da-DK'
    | 'de-DE'
    | 'en-AU'
    | 'en-GB'
    | 'en-GB-WLS'
    | 'en-IN'
    | 'en-US'
    | 'es-ES'
    | 'es-MX'
    | 'es-US'
    | 'fr-CA'
    | 'fr-FR'
    | 'hi-IN'
    | 'is-IS'
    | 'it-IT'
    | 'ja-JP'
    | 'ko-KR'
    | 'nb-NO'
    | 'nl-NL'
    | 'pl-PL'
    | 'pt-BR'
    | 'pt-PT'
    | 'ro-RO'
    | 'ru-RU'
    | 'sv-SE'
    | 'tr-TR'
  maximum_digits?: number | undefined
  maximum_tries?: number | undefined
  minimum_digits?: number | undefined
  payload: string
  payload_type?: 'text' | 'ssml' | undefined
  service_level?: 'basic' | 'premium' | undefined
  terminating_digit?: string | undefined
  timeout_millis?: number | undefined
  valid_digits?: string | undefined
  voice: 'male' | 'female'
}
type HangupRequest = { client_state?: string | undefined; command_id?: string | undefined }
type LeaveQueueRequest = { client_state?: string | undefined; command_id?: string | undefined }
type Loopcount = string | number
type PlayAudioUrlRequest = {
  audio_url?: string | undefined
  client_state?: string | undefined
  command_id?: string | undefined
  loop?: Loopcount | undefined
  media_name?: string | undefined
  overlay?: boolean | undefined
  stop?: string | undefined
  target_legs?: string | undefined
}
type PlaybackStopRequest = {
  client_state?: string | undefined
  command_id?: string | undefined
  stop?: string | undefined
}
type PauseRecordingRequest = { client_state?: string | undefined; command_id?: string | undefined }
type ResumeRecordingRequest = { client_state?: string | undefined; command_id?: string | undefined }
type StartRecordingRequest = {
  channels: 'single' | 'dual'
  client_state?: string | undefined
  command_id?: string | undefined
  format: 'wav' | 'mp3'
  max_length?: number | undefined
  play_beep?: boolean | undefined
}
type StopRecordingRequest = { client_state?: string | undefined; command_id?: string | undefined }
type ReferRequest = {
  client_state?: string | undefined
  command_id?: string | undefined
  custom_headers?: CustomSipHeader[] | undefined
  sip_address: string
  sip_auth_password?: string | undefined
  sip_auth_username?: string | undefined
}
type RejectRequest = {
  cause: 'CALL_REJECTED' | 'USER_BUSY'
  client_state?: string | undefined
  command_id?: string | undefined
}
type SendDTMFRequest = {
  client_state?: string | undefined
  command_id?: string | undefined
  digits: string
  duration_millis?: number | undefined
}
type SpeakRequest = {
  client_state?: string | undefined
  command_id?: string | undefined
  language:
    | 'arb'
    | 'cmn-CN'
    | 'cy-GB'
    | 'da-DK'
    | 'de-DE'
    | 'en-AU'
    | 'en-GB'
    | 'en-GB-WLS'
    | 'en-IN'
    | 'en-US'
    | 'es-ES'
    | 'es-MX'
    | 'es-US'
    | 'fr-CA'
    | 'fr-FR'
    | 'hi-IN'
    | 'is-IS'
    | 'it-IT'
    | 'ja-JP'
    | 'ko-KR'
    | 'nb-NO'
    | 'nl-NL'
    | 'pl-PL'
    | 'pt-BR'
    | 'pt-PT'
    | 'ro-RO'
    | 'ru-RU'
    | 'sv-SE'
    | 'tr-TR'
  payload: string
  payload_type?: 'text' | 'ssml' | undefined
  service_level?: 'basic' | 'premium' | undefined
  stop?: string | undefined
  voice: 'male' | 'female'
}
type TranscriptionStartRequest = {
  client_state?: string | undefined
  command_id?: string | undefined
  language?: 'de' | 'en' | 'es' | 'fr' | 'it' | 'pl' | undefined
}
type TranscriptionStopRequest = {
  client_state?: string | undefined
  command_id?: string | undefined
}
type TransferCallRequest = {
  answering_machine_detection?:
    | 'detect'
    | 'detect_beep'
    | 'detect_words'
    | 'greeting_end'
    | 'disabled'
    | undefined
  answering_machine_detection_config?:
    | {
        after_greeting_silence_millis?: number | undefined
        between_words_silence_millis?: number | undefined
        greeting_duration_millis?: number | undefined
        greeting_silence_duration_millis?: number | undefined
        greeting_total_analysis_time_millis?: number | undefined
        initial_silence_millis?: number | undefined
        maximum_number_of_words?: number | undefined
        maximum_word_length_millis?: number | undefined
        silence_threshold?: number | undefined
        total_analysis_time_millis?: number | undefined
      }
    | undefined
  audio_url?: string | undefined
  client_state?: string | undefined
  command_id?: string | undefined
  custom_headers?: CustomSipHeader[] | undefined
  from?: string | undefined
  from_display_name?: string | undefined
  media_name?: string | undefined
  sip_auth_password?: string | undefined
  sip_auth_username?: string | undefined
  target_leg_client_state?: string | undefined
  time_limit_secs?: number | undefined
  timeout_secs?: number | undefined
  to: string
  webhook_url?: string | undefined
  webhook_url_method?: 'POST' | 'GET' | undefined
}
type Comment = {
  body?: string | undefined
  comment_record_id?: string | undefined
  comment_record_type?:
    | 'number_order'
    | 'sub_number_order'
    | 'number_order_phone_number'
    | undefined
  commenter?: string | undefined
  commenter_type?: 'admin' | 'user' | undefined
  created_at?: string | undefined
  id?: string | undefined
  read_at?: string | undefined
  updated_at?: string | undefined
}
type Conference = {
  connection_id?: string | undefined
  created_at: string
  end_reason?: 'all_left' | 'ended_via_api' | 'host_left' | 'time_exceeded' | undefined
  ended_by?:
    | { call_control_id?: string | undefined; call_session_id?: string | undefined }
    | undefined
  expires_at: string
  id: string
  name: string
  record_type: 'conference'
  region?: string | undefined
  status?: 'init' | 'in_progress' | 'completed' | undefined
  updated_at?: string | undefined
}
type CreateConferenceRequest = {
  beep_enabled?: 'always' | 'never' | 'on_enter' | 'on_exit' | undefined
  call_control_id: string
  client_state?: string | undefined
  comfort_noise?: boolean | undefined
  command_id?: string | undefined
  duration_minutes?: number | undefined
  hold_audio_url?: string | undefined
  hold_media_name?: string | undefined
  name: string
  start_conference_on_create?: boolean | undefined
}
type Participant = {
  call_control_id: string
  call_leg_id: string
  conference: { id?: string | undefined; name?: string | undefined }
  created_at: string
  end_conference_on_exit: boolean
  id: string
  muted: boolean
  on_hold: boolean
  record_type: 'participant'
  soft_end_conference_on_exit: boolean
  status: 'joining' | 'joined' | 'left'
  updated_at: string
  whisper_call_control_ids: string[]
}
type ConferenceCallRequest = {
  call_control_id: string
  client_state?: string | undefined
  command_id?: string | undefined
  from: string
  hold?: boolean | undefined
  hold_audio_url?: string | undefined
  hold_media_name?: string | undefined
  mute?: boolean | undefined
  start_conference_on_enter?: boolean | undefined
  supervisor_role?: 'barge' | 'monitor' | 'none' | 'whisper' | undefined
  to: string
  whisper_call_control_ids?: string[] | undefined
}
type ConferenceCommandResult = { result: string }
type ConferenceHoldRequest = {
  audio_url?: string | undefined
  call_control_ids?: string[] | undefined
  media_name?: string | undefined
}
type JoinConferenceRequest = {
  beep_enabled?: 'always' | 'never' | 'on_enter' | 'on_exit' | undefined
  call_control_id: string
  client_state?: string | undefined
  command_id?: string | undefined
  end_conference_on_exit?: boolean | undefined
  hold?: boolean | undefined
  hold_audio_url?: string | undefined
  hold_media_name?: string | undefined
  mute?: boolean | undefined
  soft_end_conference_on_exit?: boolean | undefined
  start_conference_on_enter?: boolean | undefined
  supervisor_role?: 'barge' | 'monitor' | 'none' | 'whisper' | undefined
  whisper_call_control_ids?: string[] | undefined
}
type LeaveConferenceRequest = {
  beep_enabled?: 'always' | 'never' | 'on_enter' | 'on_exit' | undefined
  call_control_id: string
  command_id?: string | undefined
}
type ConferenceMuteRequest = { call_control_ids?: string[] | undefined }
type ConferencePlayRequest = {
  audio_url?: string | undefined
  call_control_ids?: string[] | undefined
  loop?: Loopcount | undefined
  media_name?: string | undefined
}
type ConferenceSpeakRequest = {
  call_control_ids?: string[] | undefined
  command_id?: string | undefined
  language:
    | 'arb'
    | 'cmn-CN'
    | 'cy-GB'
    | 'da-DK'
    | 'de-DE'
    | 'en-AU'
    | 'en-GB'
    | 'en-GB-WLS'
    | 'en-IN'
    | 'en-US'
    | 'es-ES'
    | 'es-MX'
    | 'es-US'
    | 'fr-CA'
    | 'fr-FR'
    | 'hi-IN'
    | 'is-IS'
    | 'it-IT'
    | 'ja-JP'
    | 'ko-KR'
    | 'nb-NO'
    | 'nl-NL'
    | 'pl-PL'
    | 'pt-BR'
    | 'pt-PT'
    | 'ro-RO'
    | 'ru-RU'
    | 'sv-SE'
    | 'tr-TR'
  payload: string
  payload_type?: 'text' | 'ssml' | undefined
  voice: 'male' | 'female'
}
type ConferenceStopRequest = { call_control_ids?: string[] | undefined }
type ConferenceUnholdRequest = { call_control_ids: string[] }
type ConferenceUnmuteRequest = { call_control_ids?: string[] | undefined }
type UpdateConferenceRequest = {
  call_control_id: string
  command_id?: string | undefined
  supervisor_role: 'barge' | 'monitor' | 'none' | 'whisper'
  whisper_call_control_ids?: string[] | undefined
}
type AnchorsiteOverride =
  | 'Latency'
  | 'Chicago, IL'
  | 'Ashburn, VA'
  | 'San Jose, CA'
  | 'Sydney, Australia'
  | 'Amsterdam, Netherlands'
  | 'London, UK'
  | 'Toronto, Canada'
  | 'Vancouver, Canada'
  | 'Frankfurt, Germany'
type OutboundVoiceProfileId = string
type Connection = {
  active?: boolean | undefined
  anchorsite_override?: AnchorsiteOverride | undefined
  connection_name?: string | undefined
  created_at?: string | undefined
  id?: string | undefined
  outbound_voice_profile_id?: OutboundVoiceProfileId | undefined
  record_type?: string | undefined
  updated_at?: string | undefined
  webhook_api_version?: '1' | '2' | undefined
  webhook_event_failover_url?: (string | null) | undefined
  webhook_event_url?: (string | null) | undefined
}
type DtmfType = 'RFC 2833' | 'Inband' | 'SIP INFO'
type EncryptedMedia = 'SRTP' | 'ZRTP'
type CredentialInbound = {
  ani_number_format?: '+E.164' | 'E.164' | '+E.164-national' | 'E.164-national' | undefined
  channel_limit?: number | undefined
  codecs?: string[] | undefined
  dnis_number_format?: '+e164' | 'e164' | 'national' | 'sip_username' | undefined
  generate_ringback_tone?: boolean | undefined
  isup_headers_enabled?: boolean | undefined
  prack_enabled?: boolean | undefined
  privacy_zone_enabled?: boolean | undefined
  sip_compact_headers_enabled?: boolean | undefined
  timeout_1xx_secs?: number | undefined
  timeout_2xx_secs?: string | undefined
}
type CredentialOutbound = {
  ani_override?: string | undefined
  ani_override_type?: 'always' | 'normal' | 'emergency' | undefined
  call_parking_enabled?: boolean | undefined
  channel_limit?: number | undefined
  generate_ringback_tone?: boolean | undefined
  instant_ringback_enabled?: boolean | undefined
  localization?: string | undefined
  outbound_voice_profile_id?: OutboundVoiceProfileId | undefined
  t38_reinvite_source?:
    | 'telnyx'
    | 'customer'
    | 'disabled'
    | 'passthru'
    | 'caller-passthru'
    | 'callee-passthru'
    | undefined
}
type ConnectionRtcpSettings = {
  capture_enabled?: boolean | undefined
  port?: 'rtcp-mux' | 'rtp+1' | undefined
  report_frequency_secs?: number | undefined
}
type CredentialConnection = {
  active?: boolean | undefined
  anchorsite_override?: AnchorsiteOverride | undefined
  connection_name?: string | undefined
  created_at?: string | undefined
  default_on_hold_comfort_noise_enabled?: boolean | undefined
  dtmf_type?: DtmfType | undefined
  encode_contact_header_enabled?: boolean | undefined
  encrypted_media?: EncryptedMedia | undefined
  id?: string | undefined
  inbound?: CredentialInbound | undefined
  onnet_t38_passthrough_enabled?: boolean | undefined
  outbound?: CredentialOutbound | undefined
  password?: string | undefined
  record_type?: string | undefined
  rtcp_settings?: ConnectionRtcpSettings | undefined
  sip_uri_calling_preference?: 'disabled' | 'unrestricted' | 'internal' | undefined
  updated_at?: string | undefined
  user_name?: string | undefined
  webhook_api_version?: '1' | '2' | undefined
  webhook_event_failover_url?: (string | null) | undefined
  webhook_event_url?: string | undefined
  webhook_timeout_secs?: (number | null) | undefined
}
type CreateCredentialConnectionRequest = {
  active?: boolean | undefined
  anchorsite_override?: AnchorsiteOverride | undefined
  connection_name: string
  default_on_hold_comfort_noise_enabled?: boolean | undefined
  dtmf_type?: DtmfType | undefined
  encode_contact_header_enabled?: boolean | undefined
  encrypted_media?: EncryptedMedia | undefined
  inbound?: CredentialInbound | undefined
  onnet_t38_passthrough_enabled?: boolean | undefined
  outbound?: CredentialOutbound | undefined
  password: string
  rtcp_settings?: ConnectionRtcpSettings | undefined
  sip_uri_calling_preference?: 'disabled' | 'unrestricted' | 'internal' | undefined
  user_name: string
  webhook_api_version?: '1' | '2' | undefined
  webhook_event_failover_url?: (string | null) | undefined
  webhook_event_url?: string | undefined
  webhook_timeout_secs?: (number | null) | undefined
}
type UpdateCredentialConnectionRequest = {
  active?: boolean | undefined
  anchorsite_override?: AnchorsiteOverride | undefined
  connection_name?: string | undefined
  default_on_hold_comfort_noise_enabled?: boolean | undefined
  dtmf_type?: DtmfType | undefined
  encode_contact_header_enabled?: boolean | undefined
  encrypted_media?: EncryptedMedia | undefined
  inbound?: CredentialInbound | undefined
  onnet_t38_passthrough_enabled?: boolean | undefined
  outbound?: CredentialOutbound | undefined
  password?: string | undefined
  rtcp_settings?: ConnectionRtcpSettings | undefined
  sip_uri_calling_preference?: 'disabled' | 'unrestricted' | 'internal' | undefined
  user_name?: string | undefined
  webhook_api_version?: '1' | '2' | undefined
  webhook_event_failover_url?: (string | null) | undefined
  webhook_event_url?: string | undefined
  webhook_timeout_secs?: (number | null) | undefined
}
type MessageDetailRecord = {
  carrier?: string | undefined
  carrier_fee?: string | undefined
  cld?: string | undefined
  cli?: string | undefined
  completed_at?: string | undefined
  cost?: string | undefined
  country_code?: string | undefined
  created_at?: string | undefined
  currency?: string | undefined
  delivery_status?: string | undefined
  delivery_status_failover_url?: string | undefined
  delivery_status_webhook_url?: string | undefined
  direction?: 'inbound' | 'outbound' | undefined
  errors?: string[] | undefined
  fteu?: boolean | undefined
  mcc?: string | undefined
  message_type?: 'SMS' | 'MMS' | 'RCS' | undefined
  mnc?: string | undefined
  on_net?: boolean | undefined
  parts?: number | undefined
  profile_id?: string | undefined
  profile_name?: string | undefined
  rate?: string | undefined
  record_type: string
  sent_at?: string | undefined
  source_country_code?: string | undefined
  status?:
    | 'gw_timeout'
    | 'delivered'
    | 'dlr_unconfirmed'
    | 'dlr_timeout'
    | 'received'
    | 'gw_reject'
    | 'failed'
    | undefined
  tags?: string | undefined
  updated_at?: string | undefined
  user_id?: string | undefined
  uuid?: string | undefined
}
type ConferenceDetailRecord = {
  call_leg_id?: string | undefined
  call_sec?: number | undefined
  call_session_id?: string | undefined
  connection_id?: string | undefined
  ended_at?: string | undefined
  expires_at?: string | undefined
  id?: string | undefined
  is_telnyx_billable?: boolean | undefined
  name?: string | undefined
  participant_call_sec?: number | undefined
  participant_count?: number | undefined
  record_type: string
  region?: string | undefined
  started_at?: string | undefined
  user_id?: string | undefined
}
type ConferenceParticipantDetailRecord = {
  billed_sec?: number | undefined
  call_leg_id?: string | undefined
  call_sec?: number | undefined
  call_session_id?: string | undefined
  conference_id?: string | undefined
  cost?: string | undefined
  currency?: string | undefined
  destination_number?: string | undefined
  id?: string | undefined
  is_telnyx_billable?: boolean | undefined
  joined_at?: string | undefined
  left_at?: string | undefined
  originating_number?: string | undefined
  rate?: string | undefined
  rate_measured_in?: string | undefined
  record_type: string
  user_id?: string | undefined
}
type DetailRecord = MessageDetailRecord | ConferenceDetailRecord | ConferenceParticipantDetailRecord
type DetailRecordsSearchResponse = {
  data?: DetailRecord[] | undefined
  meta?: PaginationMeta | undefined
}
type DocServiceDocumentLink = {
  created_at?: string | undefined
  id?: string | undefined
  record_type?: string | undefined
  updated_at?: string | undefined
  document_id?: string | undefined
  linked_record_type?: string | undefined
  linked_resource_id?: string | undefined
}
type DocServiceDocument = {
  created_at?: string | undefined
  id?: string | undefined
  record_type?: string | undefined
  updated_at?: string | undefined
  content_type?: string | undefined
  filename?: string | undefined
  sha256?: string | undefined
  size?: { amount?: number | undefined; unit?: string | undefined } | undefined
  status?: 'pending' | 'verified' | 'denied' | undefined
}
type DocServiceDocumentUploadURL = { url: string }
type DocServiceDocumentUploadInline = { file: string }
type CreateDocServiceDocumentRequest = DocServiceDocumentUploadURL | DocServiceDocumentUploadInline
type CreateMultiPartDocServiceDocumentRequest = { file?: File | undefined }
type ConnectionActive = boolean
type ApplicationName = string
type IntId = string
type WebhookEventFailoverUrl = string | null
type WebhookEventUrl = string
type WebhookTimeoutSecs = number | null
type FaxApplication = {
  active?: ConnectionActive | undefined
  anchorsite_override?: AnchorsiteOverride | undefined
  application_name?: ApplicationName | undefined
  created_at?: string | undefined
  id?: IntId | undefined
  inbound?:
    | {
        channel_limit?: number | undefined
        sip_subdomain?: string | undefined
        sip_subdomain_receive_settings?: 'only_my_connections' | 'from_anyone' | undefined
      }
    | undefined
  outbound?:
    | {
        channel_limit?: number | undefined
        outbound_voice_profile_id?: OutboundVoiceProfileId | undefined
      }
    | undefined
  record_type?: string | undefined
  updated_at?: string | undefined
  webhook_event_failover_url?: WebhookEventFailoverUrl | undefined
  webhook_event_url?: WebhookEventUrl | undefined
  webhook_timeout_secs?: WebhookTimeoutSecs | undefined
}
type CreateFaxApplicationRequest = {
  active?: ConnectionActive | undefined
  anchorsite_override?: AnchorsiteOverride | undefined
  application_name: ApplicationName
  inbound?:
    | {
        channel_limit?: number | undefined
        sip_subdomain?: string | undefined
        sip_subdomain_receive_settings?: 'only_my_connections' | 'from_anyone' | undefined
      }
    | undefined
  outbound?:
    | {
        channel_limit?: number | undefined
        outbound_voice_profile_id?: OutboundVoiceProfileId | undefined
      }
    | undefined
  webhook_event_failover_url?: WebhookEventFailoverUrl | undefined
  webhook_event_url: WebhookEventUrl
  webhook_timeout_secs?: WebhookTimeoutSecs | undefined
}
type UpdateFaxApplicationRequest = {
  active?: ConnectionActive | undefined
  anchorsite_override?: AnchorsiteOverride | undefined
  application_name: ApplicationName
  inbound?:
    | {
        channel_limit?: number | undefined
        sip_subdomain?: string | undefined
        sip_subdomain_receive_settings?: 'only_my_connections' | 'from_anyone' | undefined
      }
    | undefined
  outbound?:
    | {
        channel_limit?: number | undefined
        outbound_voice_profile_id?: OutboundVoiceProfileId | undefined
      }
    | undefined
  webhook_event_failover_url?: WebhookEventFailoverUrl | undefined
  webhook_event_url: WebhookEventUrl
  webhook_timeout_secs?: WebhookTimeoutSecs | undefined
}
type Fax = {
  connection_id?: string | undefined
  created_at?: string | undefined
  direction?: 'inbound' | 'outbound' | undefined
  from?: string | undefined
  id?: string | undefined
  media_name?: string | undefined
  media_url?: string | undefined
  quality?: string | undefined
  record_type?: 'fax' | undefined
  status?:
    | 'queued'
    | 'media.processed'
    | 'sending'
    | 'delivered'
    | 'failed'
    | 'initiated'
    | 'receiving'
    | 'media.processing'
    | 'received'
    | undefined
  store_media?: boolean | undefined
  stored_media_url?: string | undefined
  to?: string | undefined
  updated_at?: string | undefined
  webhook_failover_url?: string | undefined
  webhook_url?: string | undefined
}
type SendFaxRequest = {
  connection_id: string
  from: string
  media_name?: string | undefined
  media_url?: string | undefined
  quality?: string | undefined
  store_media?: boolean | undefined
  to: string
}
type SendFaxMultipartRequest = {
  connection_id: string
  contents: File
  from: string
  quality?: string | undefined
  store_media?: boolean | undefined
  to: string
}
type InboundFqdn = {
  ani_number_format?: '+E.164' | 'E.164' | '+E.164-national' | 'E.164-national' | undefined
  channel_limit?: (number | null) | undefined
  codecs?: string[] | undefined
  default_routing_method?: 'sequential' | 'round-robin' | undefined
  dnis_number_format?: '+e164' | 'e164' | 'national' | 'sip_username' | undefined
  generate_ringback_tone?: boolean | undefined
  isup_headers_enabled?: boolean | undefined
  prack_enabled?: boolean | undefined
  privacy_zone_enabled?: boolean | undefined
  sip_compact_headers_enabled?: boolean | undefined
  sip_region?: 'US' | 'Europe' | 'Australia' | undefined
  sip_subdomain?: (string | null) | undefined
  sip_subdomain_receive_settings?: 'only_my_connections' | 'from_anyone' | undefined
  timeout_1xx_secs?: number | undefined
  timeout_2xx_secs?: number | undefined
}
type FqdnConnectionTransportProtocol = 'UDP' | 'TCP' | 'TLS'
type FqdnConnection = {
  active?: boolean | undefined
  anchorsite_override?: AnchorsiteOverride | undefined
  connection_name: string
  created_at?: string | undefined
  default_on_hold_comfort_noise_enabled?: boolean | undefined
  dtmf_type?: DtmfType | undefined
  encode_contact_header_enabled?: boolean | undefined
  encrypted_media?: EncryptedMedia | undefined
  id?: string | undefined
  inbound?: InboundFqdn | undefined
  onnet_t38_passthrough_enabled?: boolean | undefined
  record_type?: string | undefined
  rtcp_settings?: ConnectionRtcpSettings | undefined
  transport_protocol?: FqdnConnectionTransportProtocol | undefined
  updated_at?: string | undefined
  webhook_api_version?: '1' | '2' | undefined
  webhook_event_failover_url?: (string | null) | undefined
  webhook_event_url?: string | undefined
  webhook_timeout_secs?: (number | null) | undefined
}
type CreateFqdnConnectionRequest = {
  active?: boolean | undefined
  anchorsite_override?: AnchorsiteOverride | undefined
  connection_name: string
  default_on_hold_comfort_noise_enabled?: boolean | undefined
  dtmf_type?: DtmfType | undefined
  encode_contact_header_enabled?: boolean | undefined
  encrypted_media?: EncryptedMedia | undefined
  inbound?: InboundFqdn | undefined
  onnet_t38_passthrough_enabled?: boolean | undefined
  rtcp_settings?: ConnectionRtcpSettings | undefined
  transport_protocol?: FqdnConnectionTransportProtocol | undefined
  webhook_api_version?: '1' | '2' | undefined
  webhook_event_failover_url?: (string | null) | undefined
  webhook_event_url?: string | undefined
  webhook_timeout_secs?: (number | null) | undefined
}
type UpdateFqdnConnectionRequest = {
  active?: boolean | undefined
  anchorsite_override?: AnchorsiteOverride | undefined
  connection_name?: string | undefined
  default_on_hold_comfort_noise_enabled?: boolean | undefined
  dtmf_type?: DtmfType | undefined
  encode_contact_header_enabled?: boolean | undefined
  encrypted_media?: EncryptedMedia | undefined
  inbound?: InboundFqdn | undefined
  onnet_t38_passthrough_enabled?: boolean | undefined
  rtcp_settings?: ConnectionRtcpSettings | undefined
  transport_protocol?: FqdnConnectionTransportProtocol | undefined
  webhook_api_version?: '1' | '2' | undefined
  webhook_event_failover_url?: (string | null) | undefined
  webhook_event_url?: string | undefined
  webhook_timeout_secs?: (number | null) | undefined
}
type Fqdn = {
  connection_id?: string | undefined
  created_at?: string | undefined
  dns_record_type?: string | undefined
  fqdn?: string | undefined
  id?: string | undefined
  port?: number | undefined
  record_type?: string | undefined
  updated_at?: string | undefined
}
type CreateFqdnRequest = {
  connection_id: string
  dns_record_type: string
  fqdn: string
  port?: (number | null) | undefined
}
type UpdateFqdnRequest = {
  connection_id?: string | undefined
  dns_record_type?: string | undefined
  fqdn?: string | undefined
  port?: (number | null) | undefined
}
type InventoryCoverage = {
  count?: number | undefined
  coverage_type?: 'number' | 'block' | undefined
  group?: string | undefined
  group_type?: string | undefined
  number_range?: number | undefined
  number_type?: 'did' | 'toll-free' | undefined
  phone_number_type?:
    | 'local'
    | 'toll_free'
    | 'national'
    | 'landline'
    | 'shared_cost'
    | 'mobile'
    | undefined
  record_type?: string | undefined
}
type InventoryCoverageMetadata = { total_results?: number | undefined }
type InboundIp = {
  ani_number_format?: '+E.164' | 'E.164' | '+E.164-national' | 'E.164-national' | undefined
  channel_limit?: number | undefined
  codecs?: string[] | undefined
  default_primary_ip_id?: string | undefined
  default_routing_method?: 'sequential' | 'round-robin' | undefined
  default_secondary_ip_id?: string | undefined
  default_tertiary_ip_id?: string | undefined
  dnis_number_format?: '+e164' | 'e164' | 'national' | 'sip_username' | undefined
  generate_ringback_tone?: boolean | undefined
  isup_headers_enabled?: boolean | undefined
  prack_enabled?: boolean | undefined
  privacy_zone_enabled?: boolean | undefined
  sip_compact_headers_enabled?: boolean | undefined
  sip_region?: 'US' | 'Europe' | 'Australia' | undefined
  sip_subdomain?: string | undefined
  sip_subdomain_receive_settings?: 'only_my_connections' | 'from_anyone' | undefined
  timeout_1xx_secs?: number | undefined
  timeout_2xx_secs?: number | undefined
}
type OutboundIp = {
  ani_override?: string | undefined
  ani_override_type?: 'always' | 'normal' | 'emergency' | undefined
  call_parking_enabled?: boolean | undefined
  channel_limit?: number | undefined
  generate_ringback_tone?: boolean | undefined
  instant_ringback_enabled?: boolean | undefined
  ip_authentication_method?: 'tech-prefixp-charge-info' | 'token' | undefined
  ip_authentication_token?: string | undefined
  localization?: string | undefined
  outbound_voice_profile_id?: OutboundVoiceProfileId | undefined
  t38_reinvite_source?:
    | 'telnyx'
    | 'customer'
    | 'disabled'
    | 'passthru'
    | 'caller-passthru'
    | 'callee-passthru'
    | undefined
  tech_prefix?: string | undefined
}
type IpConnection = {
  active?: boolean | undefined
  anchorsite_override?: AnchorsiteOverride | undefined
  connection_name?: string | undefined
  created_at?: string | undefined
  default_on_hold_comfort_noise_enabled?: boolean | undefined
  dtmf_type?: DtmfType | undefined
  encode_contact_header_enabled?: boolean | undefined
  encrypted_media?: EncryptedMedia | undefined
  id?: string | undefined
  inbound?: InboundIp | undefined
  onnet_t38_passthrough_enabled?: boolean | undefined
  outbound?: OutboundIp | undefined
  record_type?: string | undefined
  rtcp_settings?: ConnectionRtcpSettings | undefined
  transport_protocol?: 'UDP' | 'TCP' | 'TLS' | undefined
  updated_at?: string | undefined
  webhook_api_version?: '1' | '2' | undefined
  webhook_event_failover_url?: (string | null) | undefined
  webhook_event_url?: string | undefined
  webhook_timeout_secs?: (number | null) | undefined
}
type CreateInboundIpRequest = {
  ani_number_format?: '+E.164' | 'E.164' | '+E.164-national' | 'E.164-national' | undefined
  channel_limit?: number | undefined
  codecs?: string[] | undefined
  default_routing_method?: 'sequential' | 'round-robin' | undefined
  dnis_number_format?: '+e164' | 'e164' | 'national' | 'sip_username' | undefined
  generate_ringback_tone?: boolean | undefined
  isup_headers_enabled?: boolean | undefined
  prack_enabled?: boolean | undefined
  privacy_zone_enabled?: boolean | undefined
  sip_compact_headers_enabled?: boolean | undefined
  sip_region?: 'US' | 'Europe' | 'Australia' | undefined
  sip_subdomain?: string | undefined
  sip_subdomain_receive_settings?: 'only_my_connections' | 'from_anyone' | undefined
  timeout_1xx_secs?: number | undefined
  timeout_2xx_secs?: number | undefined
}
type CreateIpConnectionRequest = {
  active?: boolean | undefined
  anchorsite_override?: AnchorsiteOverride | undefined
  connection_name?: string | undefined
  default_on_hold_comfort_noise_enabled?: boolean | undefined
  dtmf_type?: DtmfType | undefined
  encode_contact_header_enabled?: boolean | undefined
  encrypted_media?: EncryptedMedia | undefined
  inbound?: CreateInboundIpRequest | undefined
  onnet_t38_passthrough_enabled?: boolean | undefined
  outbound?: OutboundIp | undefined
  rtcp_settings?: ConnectionRtcpSettings | undefined
  transport_protocol?: 'UDP' | 'TCP' | 'TLS' | undefined
  webhook_api_version?: '1' | '2' | undefined
  webhook_event_failover_url?: (string | null) | undefined
  webhook_event_url?: string | undefined
  webhook_timeout_secs?: (number | null) | undefined
}
type UpdateIpConnectionRequest = {
  active?: boolean | undefined
  anchorsite_override?: AnchorsiteOverride | undefined
  connection_name?: string | undefined
  default_on_hold_comfort_noise_enabled?: boolean | undefined
  dtmf_type?: DtmfType | undefined
  encode_contact_header_enabled?: boolean | undefined
  encrypted_media?: EncryptedMedia | undefined
  inbound?: InboundIp | undefined
  onnet_t38_passthrough_enabled?: boolean | undefined
  outbound?: OutboundIp | undefined
  rtcp_settings?: ConnectionRtcpSettings | undefined
  transport_protocol?: 'UDP' | 'TCP' | 'TLS' | undefined
  webhook_api_version?: '1' | '2' | undefined
  webhook_event_failover_url?: (string | null) | undefined
  webhook_event_url?: string | undefined
  webhook_timeout_secs?: (number | null) | undefined
}
type Ip = {
  connection_id?: string | undefined
  created_at?: string | undefined
  id?: string | undefined
  ip_address?: string | undefined
  port?: number | undefined
  record_type?: string | undefined
  updated_at?: string | undefined
}
type CreateIpRequest = {
  connection_id?: string | undefined
  ip_address: string
  port?: number | undefined
}
type UpdateIpRequest = {
  connection_id?: string | undefined
  ip_address: string
  port?: number | undefined
}
type NewLedgerBillingGroupReport = { month?: number | undefined; year?: number | undefined }
type LedgerBillingGroupReport = {
  created_at?: string | undefined
  id?: string | undefined
  organization_id?: string | undefined
  record_type?: 'ledger_billing_group_report' | undefined
  report_url?: (string | null) | undefined
  status?: 'pending' | 'complete' | 'failed' | 'deleted' | undefined
  updated_at?: string | undefined
}
type ManagedAccountBalance = {
  available_credit?: string | undefined
  balance?: string | undefined
  credit_limit?: string | undefined
  currency?: string | undefined
  record_type?: 'balance' | undefined
}
type ManagedAccount = {
  api_key: string
  api_token: string
  api_user: string
  balance?: ManagedAccountBalance | undefined
  created_at: string
  email: string
  id: string
  manager_account_id: string
  organization_name?: string | undefined
  record_type: 'managed_account'
  updated_at: string
}
type CreateManagedAccountRequest = {
  business_name: string
  email?: string | undefined
  password?: string | undefined
}
type UnprocessableEntityError = {
  code: string
  detail?: string | undefined
  meta?: { [x: string]: unknown } | undefined
  source?: { parameter?: string | undefined; pointer?: string | undefined } | undefined
  title: string
}
type MediaResource = {
  created_at?: string | undefined
  expires_at?: string | undefined
  media_name?: string | undefined
  updated_at?: string | undefined
}
type UploadMediaRequest = {
  media_name?: string | undefined
  media_url: string
  ttl_secs?: number | undefined
}
type UploadMediaMultipartRequest = {
  media: File
  media_name?: string | undefined
  ttl_secs?: number | undefined
}
type UpdateMediaRequest = { media_url?: string | undefined; ttl_secs?: number | undefined }
type UpdateMediaMultipartRequest = { media?: File | undefined; ttl_secs?: number | undefined }
type Direction = 'INBOUND' | 'OUTBOUND'
type MessageStatus =
  | 'GW_TIMEOUT'
  | 'DELIVERED'
  | 'DLR_UNCONFIRMED'
  | 'DLR_TIMEOUT'
  | 'RECEIVED'
  | 'GW_REJECT'
  | 'FAILED'
type MessageType =
  | 'audio'
  | 'contacts'
  | 'document'
  | 'hsm'
  | 'image'
  | 'location'
  | 'template'
  | 'text'
  | 'video'
  | 'voice'
  | 'unknown'
type Product =
  | 'LONG_CODE'
  | 'SHORT_CODE'
  | 'SHORT_CODE_FTEU'
  | 'TOLL_FREE'
  | 'ALPHANUMERIC_ID'
  | 'RCS'
type MdrDetailResponse = {
  cld?: string | undefined
  cli?: string | undefined
  cost?: string | undefined
  created_at?: string | undefined
  currency?: 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'USD' | undefined
  direction?: string | undefined
  id?: string | undefined
  message_type?: 'SMS' | 'MMS' | undefined
  parts?: number | undefined
  profile_name?: string | undefined
  rate?: string | undefined
  record_type?: string | undefined
  status?:
    | 'GW_TIMEOUT'
    | 'DELIVERED'
    | 'DLR_UNCONFIRMED'
    | 'DLR_TIMEOUT'
    | 'RECEIVED'
    | 'GW_REJECT'
    | 'FAILED'
    | undefined
}
type MdrGetDetailResponse = {
  data?: MdrDetailResponse[] | undefined
  meta?: PaginationMeta | undefined
}
type MessageBody = { message_body?: string | undefined; record_type?: string | undefined }
type MdrMessageBodyResponse = { data?: MessageBody | undefined }
type ToNumber = string
type CreateMessageRequest = {
  auto_detect?: boolean | undefined
  from?: string | undefined
  media_urls?: string[] | undefined
  messaging_profile_id?: string | undefined
  subject?: string | undefined
  text?: string | undefined
  to: ToNumber
  type?: 'SMS' | 'MMS' | undefined
  use_profile_webhooks?: boolean | undefined
  webhook_failover_url?: string | undefined
  webhook_url?: string | undefined
}
type OutboundMessagePayload = {
  completed_at?: string | undefined
  cost?: ({ amount?: string | undefined; currency?: string | undefined } | null) | undefined
  direction?: 'outbound' | undefined
  encoding?: string | undefined
  errors?: Error[] | undefined
  from?:
    | {
        carrier?: string | undefined
        line_type?:
          | 'Wireline'
          | 'Wireless'
          | 'VoWiFi'
          | 'VoIP'
          | 'Pre-Paid Wireless'
          | ''
          | undefined
        phone_number?: string | undefined
      }
    | undefined
  id?: string | undefined
  media?:
    | {
        content_type?: (string | null) | undefined
        sha256?: (string | null) | undefined
        size?: (number | null) | undefined
        url?: string | undefined
      }[]
    | undefined
  messaging_profile_id?: string | undefined
  organization_id?: string | undefined
  parts?: number | undefined
  received_at?: string | undefined
  record_type?: 'message' | undefined
  sent_at?: string | undefined
  subject?: (string | null) | undefined
  tags?: string[] | undefined
  text?: string | undefined
  to?:
    | {
        carrier?: string | undefined
        line_type?:
          | 'Wireline'
          | 'Wireless'
          | 'VoWiFi'
          | 'VoIP'
          | 'Pre-Paid Wireless'
          | ''
          | undefined
        phone_number?: string | undefined
        status?:
          | 'queued'
          | 'sending'
          | 'sent'
          | 'expired'
          | 'sending_failed'
          | 'delivery_unconfirmed'
          | 'delivered'
          | 'delivery_failed'
          | undefined
      }[]
    | undefined
  type?: 'SMS' | 'MMS' | undefined
  valid_until?: (string | null) | undefined
  webhook_failover_url?: (string | null) | undefined
  webhook_url?: (string | null) | undefined
}
type CreateLongCodeMessageRequest = {
  auto_detect?: boolean | undefined
  from: string
  media_urls?: string[] | undefined
  subject?: string | undefined
  text?: string | undefined
  to: ToNumber
  type?: 'SMS' | 'MMS' | undefined
  use_profile_webhooks?: boolean | undefined
  webhook_failover_url?: string | undefined
  webhook_url?: string | undefined
}
type CreateNumberPoolMessageRequest = {
  auto_detect?: boolean | undefined
  media_urls?: string[] | undefined
  messaging_profile_id: string
  subject?: string | undefined
  text?: string | undefined
  to: ToNumber
  type?: 'SMS' | 'MMS' | undefined
  use_profile_webhooks?: boolean | undefined
  webhook_failover_url?: string | undefined
  webhook_url?: string | undefined
}
type CreateShortCodeMessageRequest = {
  auto_detect?: boolean | undefined
  from: string
  media_urls?: string[] | undefined
  subject?: string | undefined
  text?: string | undefined
  to: ToNumber
  type?: 'SMS' | 'MMS' | undefined
  use_profile_webhooks?: boolean | undefined
  webhook_failover_url?: string | undefined
  webhook_url?: string | undefined
}
type HostedNumber = {
  id?: string | undefined
  phone_number?: string | undefined
  record_type?: string | undefined
  status?: 'deleted' | 'failed' | 'pending' | 'successful' | undefined
}
type MessagingHostedNumberOrder = {
  id?: string | undefined
  messaging_profile_id?: (string | null) | undefined
  phone_numbers?: HostedNumber[] | undefined
  record_type?: string | undefined
  status?: 'failed' | 'pending' | 'successful' | undefined
}
type CreateMessagingHostedNumberOrderRequest = {
  messaging_profile_id?: string | undefined
  phone_numbers?: string[] | undefined
}
type UploadFileMessagingHostedNumberOrderRequest = {
  bill?: File | undefined
  loa?: File | undefined
}
type MessagingProfileHighLevelMetrics = {
  inbound?: { received?: number | undefined } | undefined
  messaging_profile_id?: string | undefined
  outbound?:
    | {
        delivered?: number | undefined
        error_ratio?: number | undefined
        sent?: number | undefined
      }
    | undefined
  phone_numbers?: number | undefined
  record_type?: 'messaging_profile_metrics' | undefined
}
type NumberPoolSettings = {
  geomatch?: boolean | undefined
  long_code_weight: number
  skip_unhealthy: boolean
  sticky_sender?: boolean | undefined
  toll_free_weight: number
} | null
type UrlShortenerSettings = {
  domain: string
  prefix?: string | undefined
  replace_blacklist_only?: boolean | undefined
  send_webhooks?: boolean | undefined
} | null
type MessagingProfile = {
  created_at?: string | undefined
  enabled?: boolean | undefined
  id?: string | undefined
  name?: string | undefined
  number_pool_settings?: NumberPoolSettings | undefined
  record_type?: 'messaging_profile' | undefined
  updated_at?: string | undefined
  url_shortener_settings?: UrlShortenerSettings | undefined
  v1_secret?: string | undefined
  webhook_api_version?: '1' | '2' | '2010-04-01' | undefined
  webhook_failover_url?: (string | null) | undefined
  webhook_url?: (string | null) | undefined
  whitelisted_destinations?: (string[] | null) | undefined
}
type CreateMessagingProfileRequest = {
  enabled?: boolean | undefined
  name: string
  number_pool_settings?: NumberPoolSettings | undefined
  url_shortener_settings?: UrlShortenerSettings | undefined
  webhook_api_version?: '1' | '2' | '2010-04-01' | undefined
  webhook_failover_url?: (string | null) | undefined
  webhook_url?: (string | null) | undefined
}
type UpdateMessagingProfileRequest = {
  created_at?: string | undefined
  enabled?: boolean | undefined
  id?: string | undefined
  name?: string | undefined
  number_pool_settings?: NumberPoolSettings | undefined
  record_type?: 'messaging_profile' | undefined
  updated_at?: string | undefined
  url_shortener_settings?: UrlShortenerSettings | undefined
  v1_secret?: string | undefined
  webhook_api_version?: '1' | '2' | '2010-04-01' | undefined
  webhook_failover_url?: (string | null) | undefined
  webhook_url?: (string | null) | undefined
  whitelisted_destinations?: (string[] | null) | undefined
}
type MessagingProfileMessageTypeMetrics = {
  delivered?: number | undefined
  label?: string | undefined
  outbound_error_ratio?: number | undefined
  received?: number | undefined
  sent?: number | undefined
}
type MessagingProfileDetailedMetric = {
  metrics?: MessagingProfileMessageTypeMetrics[] | undefined
  timestamp?: string | undefined
}
type MessagingProfileDetailedMetrics = {
  detailed?: MessagingProfileDetailedMetric[] | undefined
  overview?: MessagingProfileHighLevelMetrics | undefined
}
type MessagingFeatureSet = {
  domestic_two_way: boolean
  international_inbound: boolean
  international_outbound: boolean
} | null
type NumberHealthMetrics = {
  inbound_outbound_ratio: number
  message_count: number
  spam_ratio: number
  success_ratio: number
}
type PhoneNumberWithMessagingSettings = {
  country_code?: string | undefined
  created_at?: string | undefined
  eligible_messaging_products?: string[] | undefined
  features?:
    | { mms?: MessagingFeatureSet | undefined; sms?: MessagingFeatureSet | undefined }
    | undefined
  health?: NumberHealthMetrics | undefined
  id?: string | undefined
  messaging_product?: string | undefined
  messaging_profile_id?: (string | null) | undefined
  phone_number?: string | undefined
  record_type?: 'messaging_phone_number' | 'messaging_settings' | undefined
  traffic_type?: string | undefined
  type?:
    | 'long-code'
    | 'toll-free'
    | 'short-code'
    | 'longcode'
    | 'tollfree'
    | 'shortcode'
    | undefined
  updated_at?: string | undefined
}
type ShortCode = {
  country_code?: string | undefined
  created_at?: string | undefined
  id?: string | undefined
  messaging_profile_id: string | null
  record_type?: 'short_code' | undefined
  short_code?: string | undefined
  updated_at?: string | undefined
}
type MessagingUrlDomain = {
  id?: string | undefined
  record_type?: string | undefined
  url_domain?: string | undefined
  use_case?: string | undefined
}
type MobileOperatorNetwork = {
  country_code?: string | undefined
  id?: string | undefined
  mcc?: string | undefined
  mnc?: string | undefined
  name?: string | undefined
  record_type?: string | undefined
  tadig?: string | undefined
}
type NotificationChannel = {
  channel_destination?: string | undefined
  channel_type_id?: 'sms' | 'voice' | 'email' | 'webhook' | undefined
  created_at?: string | undefined
  id?: string | undefined
  notification_profile_id?: string | undefined
  updated_at?: string | undefined
}
type NotificationEventCondition = {
  allow_multiple_channels?: boolean | undefined
  associated_record_type?: 'account' | 'phone_number' | undefined
  asynchronous?: boolean | undefined
  created_at?: string | undefined
  description?: string | undefined
  enabled?: boolean | undefined
  id?: string | undefined
  name?: string | undefined
  notification_event_id?: string | undefined
  parameters?:
    | {
        data_type?: string | undefined
        name?: string | undefined
        optional?: boolean | undefined
      }[]
    | undefined
  supported_channels?: string[] | undefined
  updated_at?: string | undefined
}
type NotificationEvent = {
  created_at?: string | undefined
  enabled?: boolean | undefined
  id?: string | undefined
  name?: string | undefined
  notification_category?: string | undefined
  updated_at?: string | undefined
}
type NotificationProfile = {
  created_at?: string | undefined
  id?: string | undefined
  name?: string | undefined
  updated_at?: string | undefined
}
type NotificationSetting = {
  associated_record_type?: string | undefined
  associated_record_type_value?: string | undefined
  created_at?: string | undefined
  id?: string | undefined
  notification_channel_id?: string | undefined
  notification_event_condition_id?: string | undefined
  notification_profile_id?: string | undefined
  parameters?: { name?: string | undefined; value?: string | undefined }[] | undefined
  status?:
    | 'enabled'
    | 'enable-received'
    | 'enable-pending'
    | 'enable-submtited'
    | 'delete-received'
    | 'delete-pending'
    | 'delete-submitted'
    | 'deleted'
    | undefined
  updated_at?: string | undefined
}
type NumberBlockOrder = {
  connection_id?: string | undefined
  created_at?: string | undefined
  customer_reference?: string | undefined
  id?: string | undefined
  messaging_profile_id?: string | undefined
  phone_numbers_count?: number | undefined
  range?: number | undefined
  record_type?: string | undefined
  requirements_met?: boolean | undefined
  starting_number?: string | undefined
  status?: 'pending' | 'success' | 'failure' | undefined
  updated_at?: string | undefined
}
type CreateNumberBlockOrderRequest = {
  connection_id?: string | undefined
  created_at?: string | undefined
  customer_reference?: string | undefined
  errors?: string | undefined
  id?: string | undefined
  messaging_profile_id?: string | undefined
  phone_numbers_count?: number | undefined
  range: number
  record_type?: string | undefined
  requirements_met?: boolean | undefined
  starting_number: string
  status?: 'pending' | 'success' | 'failure' | undefined
  updated_at?: string | undefined
}
type CallerName = { caller_name?: string | undefined; error_code?: string | undefined }
type Carrier = {
  error_code?: string | undefined
  mobile_country_code?: string | undefined
  mobile_network_code?: string | undefined
  name?: string | undefined
  type?:
    | 'fixed line'
    | 'mobile'
    | 'voip'
    | 'fixed line or mobile'
    | 'toll free'
    | 'premium rate'
    | 'shared cost'
    | 'personal number'
    | 'pager'
    | 'uan'
    | 'voicemail'
    | 'unknown'
    | undefined
}
type Portability = {
  altspid?: string | undefined
  altspid_carrier_name?: string | undefined
  altspid_carrier_type?: string | undefined
  city?: string | undefined
  line_type?: string | undefined
  lrn?: string | undefined
  ocn?: string | undefined
  ported_date?: string | undefined
  ported_status?: 'Y' | 'N' | '' | undefined
  spid?: string | undefined
  spid_carrier_name?: string | undefined
  spid_carrier_type?: string | undefined
  state?: string | undefined
}
type NumberLookupRecord = {
  caller_name?: CallerName | undefined
  carrier?: Carrier | undefined
  country_code?: string | undefined
  fraud?: string | undefined
  national_format?: string | undefined
  phone_number?: string | undefined
  portability?: Portability | undefined
  record_type?: string | undefined
}
type NumberOrderDocument = {
  created_at?: string | undefined
  customer_reference?: string | undefined
  file_id?: string | undefined
  id?: string | undefined
  record_type?: string | undefined
  requirement_type?: 'address_proof' | 'identification' | 'reg_form' | undefined
  requirements_id?: string | undefined
}
type CreateNumberOrderDocumentRequest = {
  created_at?: string | undefined
  customer_reference?: string | undefined
  file_id?: string | undefined
  id?: string | undefined
  record_type?: string | undefined
  requirement_type?: 'address_proof' | 'identification' | 'reg_form' | undefined
  requirements_id?: string | undefined
}
type UpdateNumberOrderDocumentRequest = {
  created_at?: string | undefined
  customer_reference?: string | undefined
  file_id?: string | undefined
  id?: string | undefined
  record_type?: string | undefined
  requirement_type?: 'address_proof' | 'identification' | 'reg_form' | undefined
  requirements_id?: string | undefined
}
type PhoneNumberRegulatoryRequirement = {
  field_type?: 'textual' | 'datetime' | 'address' | 'document' | undefined
  record_type?: string | undefined
  requirement_id?: string | undefined
  field_value?: string | undefined
}
type NumberOrderPhoneNumber = {
  country_code?: string | undefined
  id?: string | undefined
  order_request_id?: string | undefined
  phone_number?: string | undefined
  phone_number_type?: 'local' | 'toll-free' | 'mobile' | 'national' | 'shared-cost' | undefined
  record_type?: string | undefined
  regulatory_requirements?: PhoneNumberRegulatoryRequirement[] | undefined
  requirements_met?: boolean | undefined
  status?: 'pending' | 'success' | 'failure' | undefined
  sub_number_order_id?: string | undefined
}
type UpdateRegulatoryRequirement = {
  field_value?: string | undefined
  requirement_id?: string | undefined
}
type UpdateNumberOrderPhoneNumberRequest = {
  regulatory_requirements?: UpdateRegulatoryRequirement[] | undefined
}
type NumberOrder = {
  billing_group_id?: string | undefined
  connection_id?: string | undefined
  created_at?: string | undefined
  customer_reference?: string | undefined
  id?: string | undefined
  messaging_profile_id?: string | undefined
  phone_numbers_count?: number | undefined
  record_type?: string | undefined
  requirements_met?: boolean | undefined
  status?: 'pending' | 'success' | 'failure' | undefined
  updated_at?: string | undefined
}
type PhoneNumber = {
  id?: string | undefined
  phone_number?: string | undefined
  record_type?: string | undefined
  regulatory_group_id?: string | undefined
  regulatory_requirements?: PhoneNumberRegulatoryRequirement[] | undefined
  requirements_met?: boolean | undefined
  status?: 'pending' | 'success' | 'failure' | undefined
}
type CreateNumberOrderRequest = {
  billing_group_id?: string | undefined
  connection_id?: string | undefined
  created_at?: string | undefined
  customer_reference?: string | undefined
  id?: string | undefined
  messaging_profile_id?: string | undefined
  phone_numbers?: PhoneNumber[] | undefined
  phone_numbers_count?: number | undefined
  record_type?: string | undefined
  requirements_met?: boolean | undefined
  status?: 'pending' | 'success' | 'failure' | undefined
  updated_at?: string | undefined
}
type NumberOrderWithPhoneNumbers = {
  billing_group_id?: string | undefined
  connection_id?: string | undefined
  created_at?: string | undefined
  customer_reference?: string | undefined
  id?: string | undefined
  messaging_profile_id?: string | undefined
  phone_numbers_count?: number | undefined
  record_type?: string | undefined
  requirements_met?: boolean | undefined
  status?: 'pending' | 'success' | 'failure' | undefined
  updated_at?: string | undefined
  phone_numbers?: PhoneNumber[] | undefined
}
type UpdateNumberOrderRequest = {
  created_at?: string | undefined
  customer_reference?: string | undefined
  id?: string | undefined
  phone_numbers?: PhoneNumber[] | undefined
  phone_numbers_count?: number | undefined
  record_type?: string | undefined
  requirements_met?: boolean | undefined
  status?: 'pending' | 'success' | 'failure' | undefined
  updated_at?: string | undefined
}
type ReservedPhoneNumber = {
  created_at?: string | undefined
  expired_at?: string | undefined
  id?: string | undefined
  phone_number?: string | undefined
  record_type?: string | undefined
  status?: 'pending' | 'success' | 'failure' | undefined
  updated_at?: string | undefined
}
type NumberReservation = {
  created_at?: string | undefined
  customer_reference?: string | undefined
  id?: string | undefined
  phone_numbers?: ReservedPhoneNumber[] | undefined
  record_type?: string | undefined
  status?: 'pending' | 'success' | 'failure' | undefined
  updated_at?: string | undefined
}
type CreateNumberReservationRequest = {
  created_at?: string | undefined
  customer_reference?: string | undefined
  id?: string | undefined
  phone_numbers?: ReservedPhoneNumber[] | undefined
  record_type?: string | undefined
  status?: 'pending' | 'success' | 'failure' | undefined
  updated_at?: string | undefined
}
type SimplifiedOTAUpdate = {
  created_at?: string | undefined
  id?: string | undefined
  record_type?: string | undefined
  sim_card_id?: string | undefined
  status?: 'in-progress' | 'completed' | 'failed' | undefined
  type?: 'sim_card_network_preferences' | undefined
  updated_at?: string | undefined
}
type OutboundCallRecording = {
  call_recording_caller_phone_numbers?: string[] | undefined
  call_recording_channels?: 'single' | 'dual' | undefined
  call_recording_format?: 'wav' | 'mp3' | undefined
  call_recording_type?: 'all' | 'none' | 'by_caller_phone_number' | undefined
}
type ServicePlan = 'us' | 'international' | 'global'
type TrafficType = 'conversational' | 'short_duration'
type UsagePaymentMethod = 'tariff' | 'rate-deck'
type OutboundVoiceProfile = {
  billing_group_id?: (string | null) | undefined
  call_recording?: OutboundCallRecording | undefined
  concurrent_call_limit?: (number | null) | undefined
  connections_count?: number | undefined
  created_at?: string | undefined
  daily_spend_limit?: string | undefined
  daily_spend_limit_enabled?: boolean | undefined
  enabled?: boolean | undefined
  id?: string | undefined
  max_destination_rate?: number | undefined
  name: string
  record_type?: string | undefined
  service_plan?: ServicePlan | undefined
  tags?: string[] | undefined
  traffic_type?: TrafficType | undefined
  updated_at?: string | undefined
  usage_payment_method?: UsagePaymentMethod | undefined
  whitelisted_destinations?: string[] | undefined
}
type CreateOutboundVoiceProfileRequest = {
  billing_group_id?: (string | null) | undefined
  call_recording?: OutboundCallRecording | undefined
  concurrent_call_limit?: (number | null) | undefined
  daily_spend_limit?: string | undefined
  daily_spend_limit_enabled?: boolean | undefined
  enabled?: boolean | undefined
  max_destination_rate?: number | undefined
  name: string
  service_plan?: ServicePlan | undefined
  tags?: string[] | undefined
  traffic_type?: TrafficType | undefined
  usage_payment_method?: UsagePaymentMethod | undefined
  whitelisted_destinations?: string[] | undefined
}
type UpdateOutboundVoiceProfileRequest = {
  billing_group_id?: (string | null) | undefined
  call_recording?: OutboundCallRecording | undefined
  concurrent_call_limit?: (number | null) | undefined
  daily_spend_limit?: string | undefined
  daily_spend_limit_enabled?: boolean | undefined
  enabled?: boolean | undefined
  max_destination_rate?: number | undefined
  name: string
  service_plan?: ServicePlan | undefined
  tags?: string[] | undefined
  traffic_type?: TrafficType | undefined
  usage_payment_method?: UsagePaymentMethod | undefined
  whitelisted_destinations?: string[] | undefined
}
type PhoneNumberBlocksJobFailedOperation = {
  errors?: Error[] | undefined
  id?: string | undefined
  phone_number?: string | undefined
}
type PhoneNumberBlocksJobSuccessfulOperation = {
  id?: string | undefined
  phone_number?: string | undefined
}
type PhoneNumberBlocksJob = {
  created_at?: string | undefined
  etc?: string | undefined
  failed_operations?: PhoneNumberBlocksJobFailedOperation[] | undefined
  id?: string | undefined
  record_type?: string | undefined
  status?: 'pending' | 'in_progress' | 'completed' | 'failed' | undefined
  successful_operations?: PhoneNumberBlocksJobSuccessfulOperation[] | undefined
  type?: 'delete_phone_number_block' | undefined
  updated_at?: string | undefined
}
type PhoneNumberBlocksJobDeletePhoneNumberBlockRequest = { phone_number_block_id: string }
type PhoneNumberDetailed = {
  billing_group_id?: string | undefined
  call_forwarding_enabled?: boolean | undefined
  call_recording_enabled?: boolean | undefined
  caller_id_name_enabled?: boolean | undefined
  cnam_listing_enabled?: boolean | undefined
  connection_id?: string | undefined
  connection_name?: string | undefined
  created_at?: string | undefined
  customer_reference?: string | undefined
  emergency_address_id?: string | undefined
  emergency_enabled?: boolean | undefined
  external_pin?: string | undefined
  id?: IntId | undefined
  messaging_profile_id?: string | undefined
  messaging_profile_name?: string | undefined
  number_level_routing?: 'enabled' | 'disabled' | undefined
  phone_number?: string | undefined
  phone_number_type?: 'longcode' | 'tollfree' | undefined
  purchased_at?: string | undefined
  record_type?: string | undefined
  status?:
    | 'purchase-pending'
    | 'purchase-failed'
    | 'port-pending'
    | 'port-failed'
    | 'active'
    | 'deleted'
    | 'emergency-only'
    | 'ported-out'
    | 'port-out-pending'
    | undefined
  t38_fax_gateway_enabled?: boolean | undefined
  tags?: string[] | undefined
}
type CsvDownload = {
  id?: string | undefined
  record_type?: string | undefined
  status?: 'pending' | 'complete' | 'failed' | 'expired' | undefined
  url?: string | undefined
}
type PhoneNumbersJobFailedOperation = {
  errors?: Error[] | undefined
  id?: string | undefined
  phone_number?: string | undefined
}
type PhoneNumbersJobPendingOperation = {
  id?: string | undefined
  phone_number?: string | undefined
}
type PhoneNumbersJobSuccessfulOperation = {
  id?: string | undefined
  phone_number?: string | undefined
}
type PhoneNumbersJob = {
  created_at?: string | undefined
  etc?: string | undefined
  failed_operations?: PhoneNumbersJobFailedOperation[] | undefined
  id?: string | undefined
  pending_operations?: PhoneNumbersJobPendingOperation[] | undefined
  record_type?: string | undefined
  status?: 'pending' | 'in_progress' | 'completed' | 'failed' | 'expired' | undefined
  successful_operations?: PhoneNumbersJobSuccessfulOperation[] | undefined
  type?: 'update_emergency_settings' | 'delete_phone_numbers' | 'update_phone_numbers' | undefined
  updated_at?: string | undefined
}
type PhoneNumbersJobDeletePhoneNumbersRequest = { phone_numbers: string[] }
type PhoneNumbersJobUpdateEmergencySettingsRequest = {
  emergency_address_id: string
  emergency_enabled: boolean
  phone_numbers: string[]
}
type PhoneNumbersJobUpdatePhoneNumbersRequest = {
  billing_group_id?: string | undefined
  connection_id?: string | undefined
  customer_reference?: string | undefined
  external_pin?: string | undefined
  phone_numbers: string[]
  tags?: string[] | undefined
}
type CallForwarding = {
  call_forwarding_enabled?: boolean | undefined
  forwarding_type?: 'always' | 'on_failure' | undefined
  forwards_to?: string | undefined
}
type CallRecording = {
  inbound_call_recording_channels?: 'single' | 'dual' | undefined
  inbound_call_recording_enabled?: boolean | undefined
  inbound_call_recording_format?: 'wav' | 'mp3' | undefined
}
type CnamListing = {
  cnam_listing_details?: string | undefined
  cnam_listing_enabled?: boolean | undefined
}
type EmergencySettings = {
  emergency_address_id?: string | undefined
  emergency_enabled?: boolean | undefined
  emergency_status?: 'disabled' | 'active' | 'provisioning' | 'deprovisioning' | undefined
}
type MediaFeatures = {
  accept_any_rtp_packets_enabled?: boolean | undefined
  media_handling_mode?: 'default' | 'proxy' | undefined
  rtp_auto_adjust_enabled?: boolean | undefined
  t38_fax_gateway_enabled?: boolean | undefined
}
type PhoneNumberWithVoiceSettings = {
  call_forwarding?: CallForwarding | undefined
  call_recording?: CallRecording | undefined
  cnam_listing?: CnamListing | undefined
  connection_id?: string | undefined
  customer_reference?: string | undefined
  emergency?: EmergencySettings | undefined
  id?: string | undefined
  media_features?: MediaFeatures | undefined
  phone_number?: string | undefined
  record_type?: string | undefined
  tech_prefix_enabled?: boolean | undefined
  translated_number?: string | undefined
  usage_payment_method?: 'pay-per-minute' | 'channel' | undefined
}
type PhoneNumberDeletedDetailed = {
  billing_group_id?: string | undefined
  call_forwarding_enabled?: boolean | undefined
  call_recording_enabled?: boolean | undefined
  caller_id_name_enabled?: boolean | undefined
  cnam_listing_enabled?: boolean | undefined
  connection_id?: string | undefined
  connection_name?: string | undefined
  created_at?: string | undefined
  customer_reference?: string | undefined
  emergency_address_id?: string | undefined
  emergency_enabled?: boolean | undefined
  external_pin?: string | undefined
  id?: IntId | undefined
  messaging_profile_id?: string | undefined
  messaging_profile_name?: string | undefined
  number_level_routing?: 'enabled' | 'disabled' | undefined
  phone_number?: string | undefined
  phone_number_type?: 'longcode' | 'tollfree' | undefined
  purchased_at?: string | undefined
  record_type?: string | undefined
  status?:
    | 'purchase-pending'
    | 'purchase-failed'
    | 'port-pending'
    | 'port-failed'
    | 'active'
    | 'deleted'
    | 'emergency-only'
    | 'ported-out'
    | 'port-out-pending'
    | undefined
  t38_fax_gateway_enabled?: boolean | undefined
  tags?: string[] | undefined
  updated_at?: string | undefined
}
type UpdatePhoneNumberRequest = {
  billing_group_id?: string | undefined
  connection_id?: string | undefined
  customer_reference?: string | undefined
  external_pin?: string | undefined
  id?: string | undefined
  number_level_routing?: 'enabled' | 'disabled' | undefined
  tags?: string[] | undefined
}
type PhoneNumberEnableEmergencyRequest = {
  emergency_address_id: string
  emergency_enabled: boolean
}
type UpdatePhoneNumberMessagingSettingsRequest = {
  messaging_product?: string | undefined
  messaging_profile_id?: string | undefined
}
type UpdatePhoneNumberVoiceSettingsRequest = {
  call_forwarding?: CallForwarding | undefined
  call_recording?: CallRecording | undefined
  cnam_listing?: CnamListing | undefined
  media_features?: MediaFeatures | undefined
  tech_prefix_enabled?: boolean | undefined
  translated_number?: string | undefined
  usage_payment_method?: 'pay-per-minute' | 'channel' | undefined
}
type PortabilityCheckDetails = {
  fast_portable?: boolean | undefined
  not_portable_reason?: string | undefined
  phone_number?: string | undefined
  portable?: boolean | undefined
  record_type?: string | undefined
}
type PortingOrdersExceptionType = {
  code?:
    | 'ACCOUNT_NUMBER_MISMATCH'
    | 'AUTH_PERSON_MISMATCH'
    | 'BTN_ATN_MISMATCH'
    | 'ENTITY_NAME_MISMATCH'
    | 'FOC_EXPIRED'
    | 'FOC_REJECTED'
    | 'LOCATION_MISMATCH'
    | 'LSR_PENDING'
    | 'MAIN_BTN_PORTING'
    | 'OSP_IRRESPONSIVE'
    | 'OTHER'
    | 'PASSCODE_PIN_INVALID'
    | 'PHONE_NUMBER_HAS_SPECIAL_FEATURE'
    | 'PHONE_NUMBER_MISMATCH'
    | 'PHONE_NUMBER_NOT_PORTABLE'
    | 'PORT_TYPE_INCORRECT'
    | 'PORTING_ORDER_SPLIT_REQUIRED'
    | 'PORTING_ORDER_SPLIT_REQUIRED'
    | 'POSTAL_CODE_MISMATCH'
    | 'RATE_CENTER_NOT_PORTABLE'
    | 'SV_CONFLICT'
    | 'SV_UNKNOWN_FAILURE'
    | undefined
  description?: string | undefined
}
type PortingOrderStatus = {
  details?: PortingOrdersExceptionType[] | undefined
  value?:
    | 'draft'
    | 'in-process'
    | 'submitted'
    | 'exception'
    | 'foc-date-confirmed'
    | 'ported'
    | 'canceled'
    | 'cancel-pending'
    | undefined
}
type PortingOrderType = 'full' | 'partial'
type ActivationStatus =
  | 'New'
  | 'Pending'
  | 'Conflict'
  | 'Cancel Pending'
  | 'Failed'
  | 'Concurred'
  | 'Activate RDY'
  | 'Disconnect Pending'
  | 'Concurrence Sent'
  | 'Old'
  | 'Sending'
  | 'Active'
  | 'Canceled'
type PortingOrderActivationSettings = {
  activation_status?: ActivationStatus | undefined
  fast_port_eligible?: boolean | undefined
  foc_datetime_actual?: string | undefined
  foc_datetime_requested?: string | undefined
}
type PortingOrderEndUserAdmin = {
  account_number?: string | undefined
  auth_person_name?: string | undefined
  billing_phone_number?: string | undefined
  business_identifier?: string | undefined
  entity_name?: string | undefined
  pin_passcode?: string | undefined
  tax_identifier?: string | undefined
}
type PortingOrderEndUserLocation = {
  administrative_area?: string | undefined
  country_code?: string | undefined
  extended_address?: string | undefined
  locality?: string | undefined
  postal_code?: string | undefined
  street_address?: string | undefined
}
type PortingEndUser = {
  admin?: PortingOrderEndUserAdmin | undefined
  location?: PortingOrderEndUserLocation | undefined
}
type RemainingNumbersAction = 'keep' | 'disconnect'
type PortingOrderMisc = {
  new_billing_phone_number?: string | undefined
  remaining_numbers_action?: RemainingNumbersAction | undefined
  type?: PortingOrderType | undefined
}
type PortingOrderPhoneNumberConfiguration = {
  connection_id?: string | undefined
  emergency_address_id?: string | undefined
  messaging_profile_id?: string | undefined
  tags?: string[] | undefined
}
type PortingOrderRequirement = {
  field_type?: 'document' | undefined
  field_value?: string | undefined
  record_type?: string | undefined
  requirement_type_id?: string | undefined
}
type PortingOrderUserFeedback = {
  user_comment?: string | undefined
  user_rating?: number | undefined
}
type PortingOrder = {
  activation_settings?: PortingOrderActivationSettings | undefined
  created_at?: string | undefined
  end_user?: PortingEndUser | undefined
  id?: string | undefined
  misc?: PortingOrderMisc | undefined
  old_service_provider_ocn?: string | undefined
  phone_number_configuration?: PortingOrderPhoneNumberConfiguration | undefined
  porting_phone_numbers_count?: number | undefined
  record_type?: string | undefined
  requirements?: PortingOrderRequirement[] | undefined
  status?: PortingOrderStatus | undefined
  support_key?: string | undefined
  updated_at?: string | undefined
  user_feedback?: PortingOrderUserFeedback | undefined
  user_reference?: string | undefined
  webhook_url?: string | undefined
}
type CreatePortingOrder = { phone_numbers: string[] }
type UpdatePortingOrderRequirement = { field_value: string; requirement_type_id: string }
type UpdatePortingOrder = {
  activation_settings?: { foc_datetime_requested?: string | undefined } | undefined
  customer_reference?: string | undefined
  end_user?: PortingEndUser | undefined
  misc?: PortingOrderMisc | undefined
  phone_number_configuration?: PortingOrderPhoneNumberConfiguration | undefined
  requirements?: UpdatePortingOrderRequirement[] | undefined
  user_feedback?: PortingOrderUserFeedback | undefined
  webhook_url?: string | undefined
}
type PortingOrdersActivationJob = {
  created_at?: string | undefined
  id?: string | undefined
  record_type?: string | undefined
  status?: 'created' | 'in-process' | 'completed' | 'failed' | undefined
  updated_at?: string | undefined
}
type PortingOrdersComment = {
  body?: string | undefined
  created_at?: string | undefined
  id?: string | undefined
  porting_order_id?: string | undefined
  record_type?: string | undefined
  user_type?: 'admin' | 'user' | 'system' | undefined
}
type CreatePortingOrderComment = { body?: string | undefined }
type PortabilityStatus = 'pending' | 'confirmed' | 'provisional'
type PortoutDetails = {
  carrier_name?: string | undefined
  created_at?: string | undefined
  foc_date?: string | undefined
  id?: string | undefined
  phone_numbers?: string[] | undefined
  record_type?: string | undefined
  requested_foc_date?: string | undefined
  spid?: string | undefined
  status?:
    | 'pending'
    | 'authorized'
    | 'ported'
    | 'rejected'
    | 'rejected-pending'
    | 'canceled'
    | undefined
  updated_at?: string | undefined
}
type Metadata = {
  page_number?: number | undefined
  page_size?: number | undefined
  total_pages?: number | undefined
  total_results?: number | undefined
}
type PortoutComment = {
  body: string
  created_at: string
  id: string
  portout_id?: string | undefined
  record_type?: string | undefined
  user_id: string
}
type PrivateWirelessGatewayStatus = {
  error_code?: string | undefined
  error_description?: string | undefined
  value?: 'provisioning' | 'provisioned' | 'failed' | 'decommissioning' | undefined
}
type PrivateWirelessGateway = {
  created_at?: string | undefined
  id?: string | undefined
  ip_range?: string | undefined
  name?: string | undefined
  network_id?: string | undefined
  record_type?: string | undefined
  region_code?: string | undefined
  status?: PrivateWirelessGatewayStatus | undefined
  updated_at?: string | undefined
}
type Queue = {
  average_wait_time_secs: number
  created_at: string
  current_size: number
  id: string
  max_size: number
  name: string
  record_type: 'queue'
  updated_at: string
}
type QueueCall = {
  call_control_id: string
  call_leg_id: string
  call_session_id: string
  connection_id: string
  enqueued_at: string
  from: string
  queue_id: string
  queue_position: number
  record_type: 'queue_call'
  to: string
  wait_time_secs: number
}
type Recording = {
  call_leg_id?: string | undefined
  call_session_id?: string | undefined
  channels: 'single' | 'dual'
  conference_id?: string | undefined
  created_at: string
  download_urls: { mp3?: string | undefined; wav?: string | undefined }
  duration_millis: number
  id: string
  record_type: 'recording'
  recording_ended_at: string
  recording_started_at: string
  source: 'conference' | 'call'
  status: 'completed'
  updated_at: string
}
type Filter = {
  billing_group?: string | undefined
  cld?: string | undefined
  cld_filter?: 'contains' | 'starts_with' | 'ends_with' | undefined
  cli?: string | undefined
  cli_filter?: 'contains' | 'starts_with' | 'ends_with' | undefined
  filter_type?: 'and' | 'or' | undefined
  tags_list?: string | undefined
}
type MdrDetailReportResponse = {
  connections?: bigint[] | undefined
  created_at?: string | undefined
  directions?: ('INBOUND' | 'OUTBOUND')[] | undefined
  end_date?: string | undefined
  filters?: Filter[] | undefined
  id?: string | undefined
  profiles?: string | undefined
  record_type?: string | undefined
  record_types?: ('INCOMPLETE' | 'COMPLETED' | 'ERRORS')[] | undefined
  report_name?: string | undefined
  report_url?: string | undefined
  start_date?: string | undefined
  status?: 'PENDING' | 'COMPLETE' | 'FAILED' | 'EXPIRED' | undefined
  updated_at?: string | undefined
}
type MdrGetDetailReportResponse = {
  data?: MdrDetailReportResponse[] | undefined
  meta?: PaginationMeta | undefined
}
type MdrPostDetailReportRequest = {
  connections?: bigint[] | undefined
  directions?: ('INBOUND' | 'OUTBOUND')[] | undefined
  end_date: string
  filters?: Filter[] | undefined
  include_message_body?: boolean | undefined
  profiles?: string | undefined
  record_types?: ('INCOMPLETE' | 'COMPLETED' | 'ERRORS')[] | undefined
  report_name?: string | undefined
  start_date: string
}
type MdrPostDetailReportResponse = { data?: MdrDetailReportResponse | undefined }
type MdrDeleteDetailReportResponse = { data?: MdrDetailReportResponse | undefined }
type MdrGetDetailReportByIdResponse = { data?: MdrDetailReportResponse | undefined }
type CdrUsageReportResponse = {
  aggregation_type?: 'NO_AGGREGATION' | 'CONNECTION' | 'TAG' | 'BILLING_GROUP' | undefined
  connections?: bigint[] | undefined
  created_at?: string | undefined
  end_time?: string | undefined
  id?: string | undefined
  product_breakdown?:
    | 'NO_BREAKDOWN'
    | 'DID_VS_TOLL_FREE'
    | 'COUNTRY'
    | 'DID_VS_TOLL_FREE_PER_COUNTRY'
    | undefined
  record_type?: string | undefined
  report_url?: string | undefined
  result?: { [x: string]: unknown } | undefined
  start_time?: string | undefined
  status?: 'PENDING' | 'COMPLETE' | 'FAILED' | 'EXPIRED' | undefined
  updated_at?: string | undefined
}
type CdrGetSyncUsageReportResponse = { data?: CdrUsageReportResponse | undefined }
type MdrUsageRecord = {
  carrier_passthrough_fee?: string | undefined
  connection?: string | undefined
  cost?: string | undefined
  currency?: string | undefined
  delivered?: string | undefined
  direction?: string | undefined
  message_type?: string | undefined
  parts?: string | undefined
  product?: string | undefined
  profile_id?: string | undefined
  received?: string | undefined
  sent?: string | undefined
  tags?: string | undefined
  tn_type?: string | undefined
}
type MdrUsageReportResponse = {
  aggregation_type?: 'NO_AGGREGATION' | 'PROFILE' | 'TAGS' | undefined
  connections?: bigint[] | undefined
  created_at?: string | undefined
  end_date?: string | undefined
  id?: string | undefined
  profiles?: string | undefined
  record_type?: string | undefined
  report_url?: string | undefined
  result?: MdrUsageRecord[] | undefined
  start_date?: string | undefined
  status?: 'PENDING' | 'COMPLETE' | 'FAILED' | 'EXPIRED' | undefined
  updated_at?: string | undefined
}
type MdrGetUsageReportsResponse = {
  data?: MdrUsageReportResponse[] | undefined
  meta?: PaginationMeta | undefined
}
type MdrPostUsageReportsResponse = { data?: MdrUsageReportResponse | undefined }
type MdrGetSyncUsageReportResponse = { data?: MdrUsageReportResponse | undefined }
type MdrDeleteUsageReportsResponse = { data?: MdrUsageReportResponse | undefined }
type MdrGetUsageReportsByIdResponse = { data?: MdrUsageReportResponse | undefined }
type WirelessCost = {
  amount?: string | undefined
  currency?: 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'USD' | undefined
}
type DownlinkData = { amount?: number | undefined; unit?: 'B' | 'KB' | 'MB' | undefined }
type WirelessRate = {
  amount?: string | undefined
  currency?: 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'USD' | undefined
}
type UplinkData = { amount?: number | undefined; unit?: 'B' | 'KB' | 'MB' | undefined }
type ExternalWdrDetailRecordDto = {
  cost?: WirelessCost | undefined
  created_at?: string | undefined
  downlink_data?: DownlinkData | undefined
  duration_seconds?: number | undefined
  id?: string | undefined
  imsi?: string | undefined
  mcc?: string | undefined
  mnc?: string | undefined
  phone_number?: string | undefined
  rate?: WirelessRate | undefined
  record_type?: string | undefined
  sim_card_id?: string | undefined
  sim_group_id?: string | undefined
  sim_group_name?: string | undefined
  uplink_data?: UplinkData | undefined
}
type ExternalWdrGetDetailResponse = {
  data?: ExternalWdrDetailRecordDto[] | undefined
  meta?: PaginationMeta | undefined
}
type DocReqsRequirementType = {
  acceptance_criteria?:
    | { locality_limit?: string | undefined; time_limit?: string | undefined }
    | undefined
  created_at?: string | undefined
  description?: string | undefined
  example?: string | undefined
  id?: string | undefined
  name?: string | undefined
  record_type?: string | undefined
  type?: 'document' | 'address' | 'textual' | undefined
  updated_at?: string | undefined
}
type DocReqsRequirementTypeList = DocReqsRequirementType[]
type DocReqsRequirement = {
  action?: 'both' | 'ordering' | 'porting' | undefined
  country_code?: string | undefined
  created_at?: string | undefined
  id?: string | undefined
  locality?: string | undefined
  phone_number_type?: 'local' | 'national' | 'toll_free' | undefined
  record_type?: string | undefined
  requirements_types?: DocReqsRequirementType[] | undefined
  updated_at?: string | undefined
}
type DocReqsRequirementList = DocReqsRequirement[]
type RoomParticipant = {
  context?: string | undefined
  id?: string | undefined
  joined_at?: string | undefined
  left_at?: string | undefined
  record_type?: string | undefined
  session_id?: string | undefined
  updated_at?: string | undefined
}
type RoomSession = {
  active?: boolean | undefined
  created_at?: string | undefined
  ended_at?: string | undefined
  id?: string | undefined
  participants?: RoomParticipant[] | undefined
  record_type?: string | undefined
  room_id?: string | undefined
  updated_at?: string | undefined
}
type Room = {
  active_session_id?: string | undefined
  created_at?: string | undefined
  id?: string | undefined
  max_participants?: number | undefined
  record_type?: string | undefined
  sessions?: RoomSession[] | undefined
  unique_name?: string | undefined
  updated_at?: string | undefined
}
type CreateRoomRequest = { max_participants?: number | undefined; unique_name?: string | undefined }
type CreateRoomClientTokenRequest = {
  refresh_token_ttl_secs?: number | undefined
  token_ttl_secs?: number | undefined
}
type RefreshRoomClientTokenRequest = { refresh_token: string; token_ttl_secs?: number | undefined }
type UpdateShortCodeRequest = { messaging_profile_id: string }
type SIMCardGroupAction = {
  created_at?: string | undefined
  id?: string | undefined
  record_type?: string | undefined
  settings?: { private_wireless_gateway_id?: string | undefined } | undefined
  sim_card_group_id?: string | undefined
  status?: 'in-progress' | 'completed' | 'failed' | undefined
  type?: 'set_private_wireless_gateway' | 'remove_private_wireless_gateway' | undefined
  updated_at?: string | undefined
}
type ConsumedData = { amount?: number | undefined; unit?: string | undefined }
type SIMCardGroup = {
  consumed_data?: ConsumedData | undefined
  created_at?: string | undefined
  data_limit?: number | undefined
  default?: boolean | undefined
  id?: string | undefined
  name?: string | undefined
  private_wireless_gateway_id?: string | undefined
  record_type?: string | undefined
  updated_at?: string | undefined
}
type SIMCardGroupCreate = { data_limit?: number | undefined; name: string }
type SIMCardGroupPatch = { data_limit?: number | undefined; name?: string | undefined }
type SIMCardOrderPreview = {
  quantity?: number | undefined
  record_type?: string | undefined
  shipping_cost?: { amount?: string | undefined; currency?: string | undefined } | undefined
  sim_cards_cost?: { amount?: string | undefined; currency?: string | undefined } | undefined
  total_cost?: { amount?: string | undefined; currency?: string | undefined } | undefined
}
type SIMCardOrder = {
  cost?: { amount?: string | undefined; currency?: string | undefined } | undefined
  created_at?: string | undefined
  id?: string | undefined
  order_address?:
    | {
        administrative_area?: string | undefined
        country_code?: string | undefined
        extended_address?: string | undefined
        id?: string | undefined
        locality?: string | undefined
        postal_code?: string | undefined
        street_address?: string | undefined
      }
    | undefined
  quantity?: number | undefined
  record_type?: string | undefined
  status?: 'pending' | 'processing' | 'ready_to_ship' | 'shipped' | 'delivered' | undefined
  tracking_url?: string | undefined
  updated_at?: string | undefined
}
type SimCardOrderCreate = { address_id: string; quantity: number }
type SIMCardRegistrationCodeValidation = {
  invalid_detail?: (string | null) | undefined
  record_type?: string | undefined
  registration_code?: string | undefined
  valid?: boolean | undefined
}
type SIMCardRegistrationCodeValidations = { data?: SIMCardRegistrationCodeValidation[] | undefined }
type SIMCard = {
  created_at?: string | undefined
  iccid?: string | undefined
  id?: string | undefined
  imsi?: string | undefined
  ipv4?: string | undefined
  ipv6?: string | undefined
  msisdn?: string | undefined
  record_type?: string | undefined
  sim_card_group_id?: string | undefined
  status?:
    | 'registering'
    | 'enabling'
    | 'enabled'
    | 'disabling'
    | 'disabled'
    | 'data_limit_exceeded'
    | undefined
  tags?: string[] | undefined
  updated_at?: string | undefined
}
type SIMCardPublicIPStatus = {
  error_code?: string | undefined
  error_description?: string | undefined
  value?: 'provisioning' | 'provisioned' | 'failed' | 'decommissioning' | undefined
}
type SIMCardPublicIP = {
  created_at?: string | undefined
  ip?: string | undefined
  record_type?: string | undefined
  sim_card_id?: string | undefined
  status?: SIMCardPublicIPStatus | undefined
  type?: 'ipv4' | undefined
  updated_at?: string | undefined
}
type WirelessConnectivityLog = {
  apn?: string | undefined
  id?: number | undefined
  imei?: string | undefined
  imsi?: string | undefined
  ipv4?: string | undefined
  ipv6?: string | undefined
  log_type?: 'registration' | 'data' | undefined
  mobile_country_code?: string | undefined
  mobile_network_code?: string | undefined
  radio_access_technology?: string | undefined
  record_type?: string | undefined
  sim_card_id?: string | undefined
  start_time?: string | undefined
  state?: string | undefined
  stop_time?: string | undefined
}
type SubNumberOrderRegulatoryRequirement = {
  field_type?: 'textual' | 'datetime' | 'address' | 'document' | undefined
  record_type?: string | undefined
  requirement_id?: string | undefined
}
type SubNumberOrder = {
  country_code?: string | undefined
  created_at?: string | undefined
  id?: string | undefined
  order_request_id?: string | undefined
  phone_number_type?: 'local' | 'toll-free' | 'mobile' | 'national' | 'shared-cost' | undefined
  phone_numbers_count?: number | undefined
  record_type?: string | undefined
  regulatory_requirements?: SubNumberOrderRegulatoryRequirement[] | undefined
  requirements_met?: boolean | undefined
  updated_at?: string | undefined
  user_id?: string | undefined
}
type UpdateSubNumberOrderRequest = {
  regulatory_requirements?: UpdateRegulatoryRequirement[] | undefined
}
type TelephonyCredential = {
  created_at?: string | undefined
  expired?: boolean | undefined
  expires_at?: string | undefined
  id?: string | undefined
  name?: string | undefined
  record_type?: string | undefined
  resource_id?: string | undefined
  sip_password?: string | undefined
  sip_username?: string | undefined
  updated_at?: string | undefined
}
type TelephonyCredentialCreateRequest = {
  connection_id: string
  expires_at?: string | undefined
  name?: string | undefined
  tag?: string | undefined
}
type TelephonyCredentialUpdateRequest = {
  connection_id?: string | undefined
  expires_at?: string | undefined
  name?: string | undefined
  tag?: string | undefined
}
type CreatedAt = string
type FirstCommandTimeout = boolean
type FirstCommandTimeoutSecs = number
type UpdatedAt = string
type TexmlApplication = {
  active?: ConnectionActive | undefined
  anchorsite_override?: AnchorsiteOverride | undefined
  created_at?: CreatedAt | undefined
  dtmf_type?: DtmfType | undefined
  first_command_timeout?: FirstCommandTimeout | undefined
  first_command_timeout_secs?: FirstCommandTimeoutSecs | undefined
  friendly_name?: ApplicationName | undefined
  id?: IntId | undefined
  inbound?:
    | {
        channel_limit?: number | undefined
        sip_subdomain?: string | undefined
        sip_subdomain_receive_settings?: 'only_my_connections' | 'from_anyone' | undefined
      }
    | undefined
  outbound?:
    | {
        channel_limit?: number | undefined
        outbound_voice_profile_id?: OutboundVoiceProfileId | undefined
      }
    | undefined
  record_type?: string | undefined
  status_callback?: string | undefined
  status_callback_method?: 'get' | 'post' | undefined
  updated_at?: UpdatedAt | undefined
  voice_fallback_url?: string | undefined
  voice_method?: 'get' | 'post' | undefined
  voice_url?: string | undefined
}
type CreateTexmlApplicationRequest = {
  active?: ConnectionActive | undefined
  anchorsite_override?: AnchorsiteOverride | undefined
  dtmf_type?: DtmfType | undefined
  first_command_timeout?: FirstCommandTimeout | undefined
  first_command_timeout_secs?: FirstCommandTimeoutSecs | undefined
  friendly_name: ApplicationName
  inbound?:
    | {
        channel_limit?: number | undefined
        sip_subdomain?: string | undefined
        sip_subdomain_receive_settings?: 'only_my_connections' | 'from_anyone' | undefined
      }
    | undefined
  outbound?:
    | {
        channel_limit?: number | undefined
        outbound_voice_profile_id?: OutboundVoiceProfileId | undefined
      }
    | undefined
  status_callback?: string | undefined
  status_callback_method?: 'get' | 'post' | undefined
  voice_fallback_url?: string | undefined
  voice_method?: 'get' | 'post' | undefined
  voice_url: string
}
type UpdateTexmlApplicationRequest = {
  active?: ConnectionActive | undefined
  anchorsite_override?: AnchorsiteOverride | undefined
  dtmf_type?: DtmfType | undefined
  first_command_timeout?: FirstCommandTimeout | undefined
  first_command_timeout_secs?: FirstCommandTimeoutSecs | undefined
  friendly_name: ApplicationName
  inbound?:
    | {
        channel_limit?: number | undefined
        sip_subdomain?: string | undefined
        sip_subdomain_receive_settings?: 'only_my_connections' | 'from_anyone' | undefined
      }
    | undefined
  outbound?:
    | {
        channel_limit?: number | undefined
        outbound_voice_profile_id?: OutboundVoiceProfileId | undefined
      }
    | undefined
  status_callback?: string | undefined
  status_callback_method?: 'get' | 'post' | undefined
  voice_fallback_url?: string | undefined
  voice_method?: 'get' | 'post' | undefined
  voice_url: string
}
type VerificationRecordType = 'verification'
type VerificationStatus =
  | 'pending'
  | 'sms_delivery_failed'
  | 'accepted'
  | 'expired'
  | 'not_enough_credit'
  | 'network_error'
  | 'number_unreachable'
  | 'internal_error'
  | 'invalid_destination'
  | 'timed_out'
type VerificationType =
  | 'sms_verification'
  | 'psd2_verification'
  | 'whatsapp_verification'
  | 'call_verification'
  | 'flashcall_verification'
type Verification = {
  call_timeout_secs?: number | undefined
  created_at?: string | undefined
  id?: string | undefined
  phone_number?: string | undefined
  record_type?: VerificationRecordType | undefined
  status?: VerificationStatus | undefined
  timeout_secs?: number | undefined
  updated_at?: string | undefined
  verification_type?: VerificationType | undefined
  verify_profile_id?: string | undefined
}
type Meta = {
  page_number?: number | undefined
  page_size?: number | undefined
  total_pages?: number | undefined
  total_results?: number | undefined
}
type ListVerificationsResponse = { data: Verification[]; meta: Meta }
type VerifyVerificationCodeRequest = { code: string }
type VerifyVerificationCodeResponse = {
  data: { phone_number: string; response_code: 'accepted' | 'rejected' }
}
type CreateVerificationRequestCall = {
  call_timeout_secs?: number | undefined
  phone_number: string
  timeout_secs?: number | undefined
  verify_profile_id: string
}
type CreateVerificationResponse = { data: Verification }
type CreateVerificationRequestFlashcall = {
  phone_number: string
  timeout_secs?: number | undefined
  verify_profile_id: string
}
type Currencies = 'USD' | 'EUR' | 'GBP' | 'AUD' | 'CAD'
type CreateVerificationRequestPSD2 = {
  amount: string
  currency: Currencies
  payee: string
  phone_number: string
  timeout_secs?: number | undefined
  verify_profile_id: string
}
type CreateVerificationRequestSMS = {
  phone_number: string
  timeout_secs?: number | undefined
  verify_profile_id: string
}
type CreateVerificationRequestWhatsapp = {
  phone_number: string
  timeout_secs?: number | undefined
  verify_profile_id: string
}
type RetrieveVerificationResponse = { data: Verification }
type VerifyProfileCallResponse = {
  default_call_timeout_secs?: number | undefined
  default_verification_timeout_secs?: number | undefined
  speech_template?: string | undefined
}
type VerifyProfileFlashcallResponse = { default_verification_timeout_secs?: number | undefined }
type VerifyProfilePSD2Response = { default_verification_timeout_secs?: number | undefined }
type VerificationProfileRecordType = 'verification_profile'
type VerifyProfileSMSResponse = {
  default_verification_timeout_secs?: number | undefined
  messaging_enabled?: boolean | undefined
  messaging_template?: string | undefined
  rcs_enabled?: boolean | undefined
  vsms_enabled?: boolean | undefined
}
type VerifyProfileWhatsappResponse = {
  app_name?: string | undefined
  default_verification_timeout_secs?: number | undefined
}
type VerifyProfileResponse = {
  call?: VerifyProfileCallResponse | undefined
  created_at?: string | undefined
  flashcall?: VerifyProfileFlashcallResponse | undefined
  id?: string | undefined
  language?: string | undefined
  name?: string | undefined
  psd2?: VerifyProfilePSD2Response | undefined
  record_type?: VerificationProfileRecordType | undefined
  sms?: VerifyProfileSMSResponse | undefined
  updated_at?: string | undefined
  webhook_failover_url?: string | undefined
  webhook_url?: string | undefined
  whatsapp?: VerifyProfileWhatsappResponse | undefined
}
type ListVerifyProfilesResponse = { data: VerifyProfileResponse[]; meta: Meta }
type CreateVerifyProfileCallRequest = {
  default_call_timeout_secs?: number | undefined
  default_verification_timeout_secs?: number | undefined
  speech_template?: string | undefined
}
type CreateVerifyProfileFlashcallRequest = {
  default_verification_timeout_secs?: number | undefined
}
type CreateVerifyProfilePSD2Request = { default_verification_timeout_secs?: number | undefined }
type CreateVerifyProfileSMSRequest = {
  default_verification_timeout_secs?: number | undefined
  messaging_enabled?: boolean | undefined
  messaging_template?: string | undefined
  rcs_enabled?: boolean | undefined
  vsms_enabled?: boolean | undefined
}
type CreateVerifyProfileWhatsappRequest = {
  app_name?: string | undefined
  default_verification_timeout_secs?: number | undefined
}
type VerifyProfileResponseDataWrapper = { data?: VerifyProfileResponse | undefined }
type UpdateVerifyProfileCallRequest = {
  default_call_timeout_secs?: number | undefined
  default_verification_timeout_secs?: number | undefined
  speech_template?: string | undefined
}
type UpdateVerifyProfileFlashcallRequest = {
  default_verification_timeout_secs?: number | undefined
}
type UpdateVerifyProfilePSD2Request = { default_verification_timeout_secs?: number | undefined }
type UpdateVerifyProfileSMSRequest = {
  default_verification_timeout_secs?: number | undefined
  messaging_enabled?: boolean | undefined
  messaging_template?: string | undefined
  rcs_enabled?: boolean | undefined
  vsms_enabled?: boolean | undefined
}
type UpdateVerifyProfileWhatsappRequest = {
  app_name?: string | undefined
  default_verification_timeout_secs?: number | undefined
}
type Error2 = { code?: string | undefined; detail?: string | undefined; title?: string | undefined }
type HttpHeaders = string[]
type Http = {
  request?: { headers?: HttpHeaders | undefined; url?: string | undefined } | undefined
  response?:
    | ({
        body?: string | undefined
        headers?: HttpHeaders | undefined
        status?: number | undefined
      } | null)
    | undefined
}
type Attempt = {
  errors?: Error2[] | undefined
  finished_at?: string | undefined
  http?: Http | undefined
  started_at?: string | undefined
  status?: 'delivered' | 'failed' | undefined
}
type WebhookDelivery = {
  attempts?: Attempt[] | undefined
  finished_at?: string | undefined
  id?: string | undefined
  record_type?: string | undefined
  started_at?: string | undefined
  status?: 'delivered' | 'failed' | undefined
  user_id?: string | undefined
  webhook?:
    | {
        event_type?: 'webhook.command' | undefined
        id?: string | undefined
        occurred_at?: string | undefined
        payload?: { [x: string]: unknown } | undefined
        record_type?: 'event' | undefined
      }
    | undefined
}
type PaginationMetaSimple = {
  page_number?: number | undefined
  page_size?: number | undefined
  total_pages?: number | undefined
  total_results?: number | undefined
}
type CheckContactRequestBody = {
  blocking?: 'no_wait' | 'wait' | undefined
  contacts: string[]
  whatsapp_user_id: string
}
type CheckContact = {
  id?: string | undefined
  input?: string | undefined
  record_type?: 'whatsapp_contact' | undefined
  status?: 'processing' | 'valid' | 'invalid' | undefined
}
type WhatsAppDetailRecordReport = {
  created_at?: string | undefined
  download_link?: string | undefined
  end_date?: string | undefined
  id?: string | undefined
  record_type?: string | undefined
  start_date?: string | undefined
  status?: 'PENDING' | 'COMPLETE' | 'FAILED' | 'EXPIRED' | undefined
}
type WhatsAppGetAllDetailReportResponse = {
  data?: WhatsAppDetailRecordReport[] | undefined
  meta?: PaginationMeta | undefined
}
type WhatsAppReportsReq = { end_date: string; start_date: string }
type WhatsAppDetailReportResponse = { data?: WhatsAppDetailRecordReport | undefined }
type MediaRequestBody = { media_content_type: string; upload_file: File; whatsapp_user_id: string }
type UploadMedia = { id?: string | undefined; record_type?: 'whatsapp_media_id' | undefined }
type Audio = { id?: string | undefined; link?: string | undefined }
type WhatsAppContactAddress = {
  city: string
  country: string
  country_code: string
  state: string
  street: string
  type: string
  zip: string
}
type Email = { email: string; type: string }
type Name = {
  first_name?: string | undefined
  formatted_name: string
  last_name?: string | undefined
  prefix?: string | undefined
  suffix?: string | undefined
}
type Organization = { company: string; department?: string | undefined; title?: string | undefined }
type Phone = { id?: string | undefined; phone?: string | undefined; type?: string | undefined }
type Url = { type?: string | undefined; url?: string | undefined }
type Contact = {
  addresses?: WhatsAppContactAddress[] | undefined
  birthday?: string | undefined
  emails?: Email[] | undefined
  ims?: string[] | undefined
  name?: Name | undefined
  org?: Organization | undefined
  phones?: Phone[] | undefined
  urls?: Url[] | undefined
}
type Document = {
  caption?: string | undefined
  filename?: string | undefined
  id?: string | undefined
  link?: string | undefined
}
type Language = { code: string; policy: 'fallback' | 'deterministic' }
type Currency = { amount_1000: number; currency_code: string; fallback_value?: string | undefined }
type DateTimeComponent = {
  day_of_month?: number | undefined
  day_of_week?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | undefined
  hour?: number | undefined
  minute?: number | undefined
  month?: number | undefined
  year?: number | undefined
}
type DateTimeUnixEpoch = { timestamp?: number | undefined }
type DateTimeObject = {
  component?: DateTimeComponent | undefined
  unix_epoch?: DateTimeUnixEpoch | undefined
}
type LocalizableParam = {
  currency?: Currency | undefined
  date_time?: DateTimeObject | undefined
  default: string
}
type Hsm = {
  element_name: string
  language: Language
  localizable_params: LocalizableParam[]
  namespace: string
}
type Image = { caption?: string | undefined; id?: string | undefined; link?: string | undefined }
type Location = { address: string; latitude: string; longitude: string; name: string }
type Video = { caption?: string | undefined; id?: string | undefined; link?: string | undefined }
type TemplateParameters = {
  currency?: Currency | undefined
  date_time?: DateTimeObject | undefined
  document?: Document | undefined
  image?: Image | undefined
  text?: string | undefined
  type: 'text' | 'currency' | 'date_time' | 'image' | 'document' | 'video'
  video?: Video | undefined
}[]
type TemplateComponents = {
  parameters?: TemplateParameters | undefined
  type: 'header' | 'body' | 'footer'
}[]
type Template = {
  components?: TemplateComponents | undefined
  language: Language
  name: string
  namespace: string
}
type Text = { body: string }
type CreateWhatsAppMessageRequest = {
  audio?: Audio | undefined
  contacts?: Contact[] | undefined
  document?: Document | undefined
  hsm?: Hsm | undefined
  image?: Image | undefined
  location?: Location | undefined
  preview_url?: boolean | undefined
  template?: Template | undefined
  text?: Text | undefined
  to: string
  type?: MessageType | undefined
  video?: Video | undefined
  whatsapp_user_id: string
}
type Message = { id?: string | undefined; record_type?: 'whatsapp_message_id' | undefined }
type MarkMessageAsReadRequestBody = { status: string; whatsapp_user_id: string }
type Money = {
  amount?: string | undefined
  currency?: 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'USD' | undefined
}
type WhatsAppUsageAggregation = {
  cost?: Money | undefined
  count?: string | undefined
  direction?: string | undefined
  message_type?: string | undefined
  recipient_country_code?: string | undefined
  record_type?: string | undefined
  status?: string | undefined
  telnyx_fee?: Money | undefined
  whatsapp_fee?: Money | undefined
}
type WhatsAppUsageAggregationsResponseContainer = { data?: WhatsAppUsageAggregation[] | undefined }
type WhatsAppUser = {
  id?: string | undefined
  record_type?: 'whatsapp_user' | undefined
  webhook_url?: string | undefined
}
type UpdateUserRequest = { webhook_url: string }
type WdrReport = {
  created_at?: string | undefined
  end_time?: string | undefined
  id?: string | undefined
  record_type?: string | undefined
  report_url?: string | undefined
  start_time?: string | undefined
  status?: 'pending' | 'complete' | 'failed' | 'deleted' | undefined
  updated_at?: string | undefined
}
type WdrReportRequest = { end_time?: string | undefined; start_time?: string | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/actions/bulk/telephony_credentials': {
      $delete:
        | {
            input: { query: { 'filter[tag]': string } }
            output: { data?: { credentials?: number | undefined } | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { 'filter[tag]': string } }
            output: {}
            outputFormat: string
            status: 422
          }
      $patch:
        | {
            input: { query: { 'filter[tag]': string } } & { json: BulkCredentialRequest }
            output: { data?: { credentials?: number | undefined } | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { 'filter[tag]': string } } & { json: BulkCredentialRequest }
            output: {}
            outputFormat: string
            status: 422
          }
      $post:
        | {
            input: { json: BulkCredentialRequest }
            output: { data?: { credentials?: number | undefined } | undefined }
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: BulkCredentialRequest }; output: {}; outputFormat: string; status: 422 }
    }
  } & {
    '/actions/network_preferences/sim_cards': {
      $put:
        | {
            input: {
              json: {
                mobile_operator_networks_preferences?:
                  | MobileOperatorNetworksPreferencesRequest
                  | undefined
                sim_card_ids?: string[] | undefined
              }
            }
            output: {
              data?: SIMCardNetworkPreferenceWithOTAUpdates[] | undefined
              errors?: Error[] | undefined
            }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              json: {
                mobile_operator_networks_preferences?:
                  | MobileOperatorNetworksPreferencesRequest
                  | undefined
                sim_card_ids?: string[] | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/actions/register/sim_cards': {
      $post: {
        input: { json: SIMCardRegistration }
        output: { data?: SimpleSIMCard[] | undefined; errors?: Error[] | undefined }
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/actions/:action/telephony_credentials': {
      $post:
        | {
            input: { param: { action: 'activate' | 'deactivate' } } & {
              query: { 'filter[tag]': string }
            }
            output: { data?: { credentials?: number | undefined } | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { action: 'activate' | 'deactivate' } } & {
              query: { 'filter[tag]': string }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { action: 'activate' | 'deactivate' } } & {
              query: { 'filter[tag]': string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { action: 'activate' | 'deactivate' } } & {
              query: { 'filter[tag]': string }
            }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/addresses': {
      $get:
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[customer_reference][eq]'?: string | undefined
                'filter[customer_reference][contains]'?: string | undefined
                'filter[used_as_emergency]'?: string | undefined
                'filter[street_address][contains]'?: string | undefined
                'filter[address_book][eq]'?: string | undefined
                sort?:
                  | 'created_at'
                  | 'first_name'
                  | 'last_name'
                  | 'business_name'
                  | 'street_address'
                  | undefined
              }
            }
            output: { data?: Address[] | undefined; meta?: PaginationMeta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[customer_reference][eq]'?: string | undefined
                'filter[customer_reference][contains]'?: string | undefined
                'filter[used_as_emergency]'?: string | undefined
                'filter[street_address][contains]'?: string | undefined
                'filter[address_book][eq]'?: string | undefined
                sort?:
                  | 'created_at'
                  | 'first_name'
                  | 'last_name'
                  | 'business_name'
                  | 'street_address'
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[customer_reference][eq]'?: string | undefined
                'filter[customer_reference][contains]'?: string | undefined
                'filter[used_as_emergency]'?: string | undefined
                'filter[street_address][contains]'?: string | undefined
                'filter[address_book][eq]'?: string | undefined
                sort?:
                  | 'created_at'
                  | 'first_name'
                  | 'last_name'
                  | 'business_name'
                  | 'street_address'
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[customer_reference][eq]'?: string | undefined
                'filter[customer_reference][contains]'?: string | undefined
                'filter[used_as_emergency]'?: string | undefined
                'filter[street_address][contains]'?: string | undefined
                'filter[address_book][eq]'?: string | undefined
                sort?:
                  | 'created_at'
                  | 'first_name'
                  | 'last_name'
                  | 'business_name'
                  | 'street_address'
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { json: AddressCreate }
            output: { data?: Address | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: AddressCreate }; output: {}; outputFormat: string; status: 422 }
    }
  } & {
    '/addresses/actions/validate': {
      $post:
        | {
            input: { json: ValidateAddressRequest }
            output: { data?: ValidateAddressResult | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: ValidateAddressRequest }; output: {}; outputFormat: string; status: 422 }
    }
  } & {
    '/addresses/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: { data?: Address | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: Address | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
    }
  } & {
    '/authentication_providers': {
      $get:
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                sort?:
                  | 'name'
                  | '-name'
                  | 'short_name'
                  | '-short_name'
                  | 'active'
                  | '-active'
                  | 'created_at'
                  | '-created_at'
                  | 'updated_at'
                  | '-updated_at'
                  | undefined
              }
            }
            output: {
              data?: AuthenticationProvider[] | undefined
              meta?: PaginationMeta | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                sort?:
                  | 'name'
                  | '-name'
                  | 'short_name'
                  | '-short_name'
                  | 'active'
                  | '-active'
                  | 'created_at'
                  | '-created_at'
                  | 'updated_at'
                  | '-updated_at'
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                sort?:
                  | 'name'
                  | '-name'
                  | 'short_name'
                  | '-short_name'
                  | 'active'
                  | '-active'
                  | 'created_at'
                  | '-created_at'
                  | 'updated_at'
                  | '-updated_at'
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                sort?:
                  | 'name'
                  | '-name'
                  | 'short_name'
                  | '-short_name'
                  | 'active'
                  | '-active'
                  | 'created_at'
                  | '-created_at'
                  | 'updated_at'
                  | '-updated_at'
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { json: AuthenticationProviderCreate }
            output: { data?: AuthenticationProvider | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AuthenticationProviderCreate }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/authentication_providers/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: { data?: AuthenticationProvider | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: AuthenticationProvider | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
      $patch:
        | {
            input: { param: { id: string } } & { json: UpdateAuthenticationProviderRequest }
            output: { data?: AuthenticationProvider | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: UpdateAuthenticationProviderRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: UpdateAuthenticationProviderRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: UpdateAuthenticationProviderRequest }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/available_phone_number_blocks': {
      $get:
        | {
            input: {
              query: {
                'filter[phone_number][starts_with]'?: string | undefined
                'filter[phone_number][ends_with]'?: string | undefined
                'filter[phone_number][contains]'?: string | undefined
                'filter[locality]'?: string | undefined
                'filter[administrative_area]'?: string | undefined
                'filter[country_code]'?: string | undefined
                'filter[national_destination_code]'?: string | undefined
                'filter[rate_center]'?: string | undefined
                'filter[number_type]'?: 'toll-free' | undefined
                'filter[features]'?: ('sms' | 'mms' | 'voice' | 'fax' | 'emergency')[] | undefined
                'filter[minimum_block_size]'?: number | undefined
                'filter[limit]'?: number | undefined
              }
            }
            output: {
              data?: AvailablePhoneNumberBlock[] | undefined
              meta?: AvailablePhoneNumbersMetadata | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'filter[phone_number][starts_with]'?: string | undefined
                'filter[phone_number][ends_with]'?: string | undefined
                'filter[phone_number][contains]'?: string | undefined
                'filter[locality]'?: string | undefined
                'filter[administrative_area]'?: string | undefined
                'filter[country_code]'?: string | undefined
                'filter[national_destination_code]'?: string | undefined
                'filter[rate_center]'?: string | undefined
                'filter[number_type]'?: 'toll-free' | undefined
                'filter[features]'?: ('sms' | 'mms' | 'voice' | 'fax' | 'emergency')[] | undefined
                'filter[minimum_block_size]'?: number | undefined
                'filter[limit]'?: number | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/available_phone_numbers': {
      $get:
        | {
            input: {
              query: {
                'filter[phone_number][starts_with]'?: string | undefined
                'filter[phone_number][ends_with]'?: string | undefined
                'filter[phone_number][contains]'?: string | undefined
                'filter[locality]'?: string | undefined
                'filter[administrative_area]'?: string | undefined
                'filter[country_code]'?: string | undefined
                'filter[national_destination_code]'?: string | undefined
                'filter[rate_center]'?: string | undefined
                'filter[number_type]'?: 'toll-free' | 'national' | 'mobile' | 'local' | undefined
                'filter[features]'?: ('sms' | 'mms' | 'voice' | 'fax' | 'emergency')[] | undefined
                'filter[limit]'?: number | undefined
                'filter[best_effort]'?: boolean | undefined
                'filter[quickship]'?: boolean | undefined
                'filter[reservable]'?: boolean | undefined
                'filter[exclude_held_numbers]'?: boolean | undefined
              }
            }
            output: {
              data?: AvailablePhoneNumber[] | undefined
              meta?: AvailablePhoneNumbersMetadata | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'filter[phone_number][starts_with]'?: string | undefined
                'filter[phone_number][ends_with]'?: string | undefined
                'filter[phone_number][contains]'?: string | undefined
                'filter[locality]'?: string | undefined
                'filter[administrative_area]'?: string | undefined
                'filter[country_code]'?: string | undefined
                'filter[national_destination_code]'?: string | undefined
                'filter[rate_center]'?: string | undefined
                'filter[number_type]'?: 'toll-free' | 'national' | 'mobile' | 'local' | undefined
                'filter[features]'?: ('sms' | 'mms' | 'voice' | 'fax' | 'emergency')[] | undefined
                'filter[limit]'?: number | undefined
                'filter[best_effort]'?: boolean | undefined
                'filter[quickship]'?: boolean | undefined
                'filter[reservable]'?: boolean | undefined
                'filter[exclude_held_numbers]'?: boolean | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/balance': {
      $get:
        | {
            input: {}
            output: { data?: UserBalance | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: Errors; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/billing_groups': {
      $get:
        | {
            input: {
              query: { 'page[number]'?: number | undefined; 'page[size]'?: number | undefined }
            }
            output: { data?: BillingGroup[] | undefined; meta?: PaginationMeta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { 'page[number]'?: number | undefined; 'page[size]'?: number | undefined }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: NewBillingGroup }
            output: { data?: BillingGroup | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: NewBillingGroup }; output: Errors; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/billing_groups/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: { data?: BillingGroup | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Errors; outputFormat: 'json'; status: 200 }
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: BillingGroup | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Errors; outputFormat: 'json'; status: 200 }
      $patch:
        | {
            input: { param: { id: string } } & { json: UpdateBillingGroup }
            output: { data?: BillingGroup | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: UpdateBillingGroup }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/call_control_applications': {
      $get:
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[application_name][contains]'?: string | undefined
                'filter[outbound_voice_profile_id]'?: string | undefined
                sort?: 'created_at' | 'connection_name' | 'active' | undefined
              }
            }
            output: {
              data?: CallControlApplication[] | undefined
              meta?: PaginationMeta | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[application_name][contains]'?: string | undefined
                'filter[outbound_voice_profile_id]'?: string | undefined
                sort?: 'created_at' | 'connection_name' | 'active' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[application_name][contains]'?: string | undefined
                'filter[outbound_voice_profile_id]'?: string | undefined
                sort?: 'created_at' | 'connection_name' | 'active' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[application_name][contains]'?: string | undefined
                'filter[outbound_voice_profile_id]'?: string | undefined
                sort?: 'created_at' | 'connection_name' | 'active' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { json: CreateCallControlApplicationRequest }
            output: { data?: CallControlApplication | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateCallControlApplicationRequest }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/call_control_applications/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: { data?: CallControlApplication | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: CallControlApplication | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
      $patch:
        | {
            input: { param: { id: string } } & { json: UpdateCallControlApplicationRequest }
            output: { data?: CallControlApplication | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: UpdateCallControlApplicationRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: UpdateCallControlApplicationRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: UpdateCallControlApplicationRequest }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/call_events': {
      $get:
        | {
            input: {
              query: {
                'filter[call_leg_id]'?: string | undefined
                'filter[call_session_id]'?: string | undefined
                'filter[status]'?: 'delivered' | 'failed' | undefined
                'filter[type]'?: 'command' | 'webhook' | undefined
                'filter[event_timestamp][gt]'?: string | undefined
                'filter[event_timestamp][gte]'?: string | undefined
                'filter[event_timestamp][lt]'?: string | undefined
                'filter[event_timestamp][lte]'?: string | undefined
                'filter[event_timestamp][eq]'?: string | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
              }
            }
            output: { data?: CallEvent[] | undefined; meta?: PaginationMeta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'filter[call_leg_id]'?: string | undefined
                'filter[call_session_id]'?: string | undefined
                'filter[status]'?: 'delivered' | 'failed' | undefined
                'filter[type]'?: 'command' | 'webhook' | undefined
                'filter[event_timestamp][gt]'?: string | undefined
                'filter[event_timestamp][gte]'?: string | undefined
                'filter[event_timestamp][lt]'?: string | undefined
                'filter[event_timestamp][lte]'?: string | undefined
                'filter[event_timestamp][eq]'?: string | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/calls': {
      $post:
        | {
            input: { json: CallRequest }
            output: { data?: Call | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: CallRequest }; output: Errors; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/calls/:call_control_id': {
      $get:
        | {
            input: { param: { call_control_id: string } }
            output: { data?: Call | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { call_control_id: string } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/calls/:call_control_id/actions/answer': {
      $post:
        | {
            input: { param: { call_control_id: string } } & { json: AnswerRequest }
            output: { data?: CallControlCommandResult | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { call_control_id: string } } & { json: AnswerRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/calls/:call_control_id/actions/bridge': {
      $post:
        | {
            input: { param: { call_control_id: string } } & { json: BridgeRequest }
            output: { data?: CallControlCommandResult | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { call_control_id: string } } & { json: BridgeRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/calls/:call_control_id/actions/enqueue': {
      $post:
        | {
            input: { param: { call_control_id: string } } & { json: EnqueueRequest }
            output: { data?: CallControlCommandResult | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { call_control_id: string } } & { json: EnqueueRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/calls/:call_control_id/actions/fork_start': {
      $post:
        | {
            input: { param: { call_control_id: string } } & { json: StartForkingRequest }
            output: { data?: CallControlCommandResult | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { call_control_id: string } } & { json: StartForkingRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/calls/:call_control_id/actions/fork_stop': {
      $post:
        | {
            input: { param: { call_control_id: string } } & { json: StopForkingRequest }
            output: { data?: CallControlCommandResult | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { call_control_id: string } } & { json: StopForkingRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/calls/:call_control_id/actions/gather_stop': {
      $post:
        | {
            input: { param: { call_control_id: string } } & { json: StopGatherRequest }
            output: { data?: CallControlCommandResult | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { call_control_id: string } } & { json: StopGatherRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/calls/:call_control_id/actions/gather_using_audio': {
      $post:
        | {
            input: { param: { call_control_id: string } } & { json: GatherUsingAudioRequest }
            output: { data?: CallControlCommandResult | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { call_control_id: string } } & { json: GatherUsingAudioRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/calls/:call_control_id/actions/gather_using_speak': {
      $post:
        | {
            input: { param: { call_control_id: string } } & { json: GatherUsingSpeakRequest }
            output: { data?: CallControlCommandResult | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { call_control_id: string } } & { json: GatherUsingSpeakRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/calls/:call_control_id/actions/hangup': {
      $post:
        | {
            input: { param: { call_control_id: string } } & { json: HangupRequest }
            output: { data?: CallControlCommandResult | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { call_control_id: string } } & { json: HangupRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/calls/:call_control_id/actions/leave_queue': {
      $post:
        | {
            input: { param: { call_control_id: string } } & { json: LeaveQueueRequest }
            output: { data?: CallControlCommandResult | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { call_control_id: string } } & { json: LeaveQueueRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/calls/:call_control_id/actions/playback_start': {
      $post:
        | {
            input: { param: { call_control_id: string } } & { json: PlayAudioUrlRequest }
            output: { data?: CallControlCommandResult | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { call_control_id: string } } & { json: PlayAudioUrlRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/calls/:call_control_id/actions/playback_stop': {
      $post:
        | {
            input: { param: { call_control_id: string } } & { json: PlaybackStopRequest }
            output: { data?: CallControlCommandResult | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { call_control_id: string } } & { json: PlaybackStopRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/calls/:call_control_id/actions/record_pause': {
      $post:
        | {
            input: { param: { call_control_id: string } } & { json: PauseRecordingRequest }
            output: { data?: CallControlCommandResult | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { call_control_id: string } } & { json: PauseRecordingRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/calls/:call_control_id/actions/record_resume': {
      $post:
        | {
            input: { param: { call_control_id: string } } & { json: ResumeRecordingRequest }
            output: { data?: CallControlCommandResult | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { call_control_id: string } } & { json: ResumeRecordingRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/calls/:call_control_id/actions/record_start': {
      $post:
        | {
            input: { param: { call_control_id: string } } & { json: StartRecordingRequest }
            output: { data?: CallControlCommandResult | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { call_control_id: string } } & { json: StartRecordingRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/calls/:call_control_id/actions/record_stop': {
      $post:
        | {
            input: { param: { call_control_id: string } } & { json: StopRecordingRequest }
            output: { data?: CallControlCommandResult | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { call_control_id: string } } & { json: StopRecordingRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/calls/:call_control_id/actions/refer': {
      $post:
        | {
            input: { param: { call_control_id: string } } & { json: ReferRequest }
            output: { data?: CallControlCommandResult | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { call_control_id: string } } & { json: ReferRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/calls/:call_control_id/actions/reject': {
      $post:
        | {
            input: { param: { call_control_id: string } } & { json: RejectRequest }
            output: { data?: CallControlCommandResult | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { call_control_id: string } } & { json: RejectRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/calls/:call_control_id/actions/send_dtmf': {
      $post:
        | {
            input: { param: { call_control_id: string } } & { json: SendDTMFRequest }
            output: { data?: CallControlCommandResult | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { call_control_id: string } } & { json: SendDTMFRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/calls/:call_control_id/actions/speak': {
      $post:
        | {
            input: { param: { call_control_id: string } } & { json: SpeakRequest }
            output: { data?: CallControlCommandResult | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { call_control_id: string } } & { json: SpeakRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/calls/:call_control_id/actions/transcription_start': {
      $post:
        | {
            input: { param: { call_control_id: string } } & { json: TranscriptionStartRequest }
            output: { data?: CallControlCommandResult | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { call_control_id: string } } & { json: TranscriptionStartRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/calls/:call_control_id/actions/transcription_stop': {
      $post:
        | {
            input: { param: { call_control_id: string } } & { json: TranscriptionStopRequest }
            output: { data?: CallControlCommandResult | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { call_control_id: string } } & { json: TranscriptionStopRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/calls/:call_control_id/actions/transfer': {
      $post:
        | {
            input: { param: { call_control_id: string } } & { json: TransferCallRequest }
            output: { data?: CallControlCommandResult | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { call_control_id: string } } & { json: TransferCallRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/comments': {
      $get:
        | {
            input: {
              query: { 'filter[comment_record_type]': string; 'filter[comment_record_id]': string }
            }
            output: { data?: Comment[] | undefined; meta?: PaginationMeta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { 'filter[comment_record_type]': string; 'filter[comment_record_id]': string }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: Comment }
            output: {
              data?:
                | {
                    body?: string | undefined
                    comment_record_id?: string | undefined
                    comment_record_type?:
                      | 'number_order'
                      | 'sub_number_order'
                      | 'number_order_phone_number'
                      | undefined
                    commenter?: string | undefined
                    commenter_type?: 'admin' | 'user' | undefined
                    created_at?: string | undefined
                    id?: string | undefined
                    read_at?: string | undefined
                    updated_at?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: Comment }; output: Errors; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/comments/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: {
              data?:
                | {
                    body?: string | undefined
                    comment_record_id?: string | undefined
                    comment_record_type?:
                      | 'number_order'
                      | 'sub_number_order'
                      | 'number_order_phone_number'
                      | undefined
                    commenter?: string | undefined
                    commenter_type?: 'admin' | 'user' | undefined
                    created_at?: string | undefined
                    id?: string | undefined
                    read_at?: string | undefined
                    updated_at?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Errors; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/comments/:id/read': {
      $patch:
        | {
            input: { param: { id: string } }
            output: {
              data?:
                | {
                    body?: string | undefined
                    comment_record_id?: string | undefined
                    comment_record_type?:
                      | 'number_order'
                      | 'sub_number_order'
                      | 'number_order_phone_number'
                      | undefined
                    commenter?: string | undefined
                    commenter_type?: 'admin' | 'user' | undefined
                    created_at?: string | undefined
                    id?: string | undefined
                    read_at?: string | undefined
                    updated_at?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Errors; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/conferences': {
      $get:
        | {
            input: {
              query: {
                'filter[name]'?: string | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
              }
            }
            output: { data?: Conference[] | undefined; meta?: PaginationMeta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'filter[name]'?: string | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                'filter[name]'?: string | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 422
          }
      $post:
        | {
            input: { json: CreateConferenceRequest }
            output: { data?: Conference | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateConferenceRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: CreateConferenceRequest }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/conferences/:conference_id/participants': {
      $get:
        | {
            input: { param: { conference_id: string } } & {
              query: {
                'filter[muted]'?: boolean | undefined
                'filter[on_hold]'?: boolean | undefined
                'filter[whispering]'?: boolean | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
              }
            }
            output: { data?: Participant[] | undefined; meta?: PaginationMeta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { conference_id: string } } & {
              query: {
                'filter[muted]'?: boolean | undefined
                'filter[on_hold]'?: boolean | undefined
                'filter[whispering]'?: boolean | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { conference_id: string } } & {
              query: {
                'filter[muted]'?: boolean | undefined
                'filter[on_hold]'?: boolean | undefined
                'filter[whispering]'?: boolean | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { conference_id: string } } & {
              query: {
                'filter[muted]'?: boolean | undefined
                'filter[on_hold]'?: boolean | undefined
                'filter[whispering]'?: boolean | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/conferences/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: Conference | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/conferences/:id/actions/dial_participant': {
      $post:
        | {
            input: { param: { id: string } } & { json: ConferenceCallRequest }
            output: { data?: ConferenceCommandResult | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: ConferenceCallRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: ConferenceCallRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: ConferenceCallRequest }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/conferences/:id/actions/hold': {
      $post:
        | {
            input: { param: { id: string } } & { json: ConferenceHoldRequest }
            output: { data?: ConferenceCommandResult | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: ConferenceHoldRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: ConferenceHoldRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: ConferenceHoldRequest }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/conferences/:id/actions/join': {
      $post:
        | {
            input: { param: { id: string } } & { json: JoinConferenceRequest }
            output: { data?: ConferenceCommandResult | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: JoinConferenceRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: JoinConferenceRequest }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/conferences/:id/actions/leave': {
      $post:
        | {
            input: { param: { id: string } } & { json: LeaveConferenceRequest }
            output: { data?: ConferenceCommandResult | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: LeaveConferenceRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: LeaveConferenceRequest }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/conferences/:id/actions/mute': {
      $post:
        | {
            input: { param: { id: string } } & { json: ConferenceMuteRequest }
            output: { data?: ConferenceCommandResult | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: ConferenceMuteRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: ConferenceMuteRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: ConferenceMuteRequest }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/conferences/:id/actions/play': {
      $post:
        | {
            input: { param: { id: string } } & { json: ConferencePlayRequest }
            output: { data?: ConferenceCommandResult | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: ConferencePlayRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: ConferencePlayRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: ConferencePlayRequest }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/conferences/:id/actions/record_start': {
      $post:
        | {
            input: { param: { id: string } } & { json: StartRecordingRequest }
            output: { data?: ConferenceCommandResult | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: StartRecordingRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: StartRecordingRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: StartRecordingRequest }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/conferences/:id/actions/record_stop': {
      $post:
        | {
            input: { param: { id: string } } & { json: StopRecordingRequest }
            output: { data?: ConferenceCommandResult | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: StopRecordingRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: StopRecordingRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: StopRecordingRequest }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/conferences/:id/actions/speak': {
      $post:
        | {
            input: { param: { id: string } } & { json: ConferenceSpeakRequest }
            output: { data?: ConferenceCommandResult | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: ConferenceSpeakRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: ConferenceSpeakRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: ConferenceSpeakRequest }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/conferences/:id/actions/stop': {
      $post:
        | {
            input: { param: { id: string } } & { json: ConferenceStopRequest }
            output: { data?: ConferenceCommandResult | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: ConferenceStopRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: ConferenceStopRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: ConferenceStopRequest }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/conferences/:id/actions/unhold': {
      $post:
        | {
            input: { param: { id: string } } & { json: ConferenceUnholdRequest }
            output: { data?: ConferenceCommandResult | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: ConferenceUnholdRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: ConferenceUnholdRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: ConferenceUnholdRequest }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/conferences/:id/actions/unmute': {
      $post:
        | {
            input: { param: { id: string } } & { json: ConferenceUnmuteRequest }
            output: { data?: ConferenceCommandResult | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: ConferenceUnmuteRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: ConferenceUnmuteRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: ConferenceUnmuteRequest }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/conferences/:id/actions/update': {
      $post:
        | {
            input: { param: { id: string } } & { json: UpdateConferenceRequest }
            output: { data?: ConferenceCommandResult | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: UpdateConferenceRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: UpdateConferenceRequest }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/connections': {
      $get:
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[connection_name][contains]'?: string | undefined
                'filter[outbound_voice_profile_id]'?: string | undefined
                sort?: 'created_at' | 'connection_name' | 'active' | undefined
              }
            }
            output: { data?: Connection[] | undefined; meta?: PaginationMeta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[connection_name][contains]'?: string | undefined
                'filter[outbound_voice_profile_id]'?: string | undefined
                sort?: 'created_at' | 'connection_name' | 'active' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[connection_name][contains]'?: string | undefined
                'filter[outbound_voice_profile_id]'?: string | undefined
                sort?: 'created_at' | 'connection_name' | 'active' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[connection_name][contains]'?: string | undefined
                'filter[outbound_voice_profile_id]'?: string | undefined
                sort?: 'created_at' | 'connection_name' | 'active' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/connections/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: Connection | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
    }
  } & {
    '/credential_connections': {
      $get:
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[connection_name][contains]'?: string | undefined
                'filter[outbound.outbound_voice_profile_id]'?: string | undefined
                sort?: 'created_at' | 'connection_name' | 'active' | undefined
              }
            }
            output: { data?: CredentialConnection[] | undefined; meta?: PaginationMeta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[connection_name][contains]'?: string | undefined
                'filter[outbound.outbound_voice_profile_id]'?: string | undefined
                sort?: 'created_at' | 'connection_name' | 'active' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[connection_name][contains]'?: string | undefined
                'filter[outbound.outbound_voice_profile_id]'?: string | undefined
                sort?: 'created_at' | 'connection_name' | 'active' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[connection_name][contains]'?: string | undefined
                'filter[outbound.outbound_voice_profile_id]'?: string | undefined
                sort?: 'created_at' | 'connection_name' | 'active' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { json: CreateCredentialConnectionRequest }
            output: { data?: CredentialConnection | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateCredentialConnectionRequest }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/credential_connections/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: { data?: CredentialConnection | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: CredentialConnection | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
      $patch:
        | {
            input: { param: { id: string } } & { json: UpdateCredentialConnectionRequest }
            output: { data?: CredentialConnection | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: UpdateCredentialConnectionRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: UpdateCredentialConnectionRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: UpdateCredentialConnectionRequest }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/detail_records': {
      $get: {
        input: {
          query: {
            'filter[record_type]': string
            'filter[date_range]'?: string | undefined
            filter?: { [x: string]: unknown } | undefined
            'page[number]'?: number | undefined
            'page[size]'?: number | undefined
            sort?: string[] | undefined
          }
        }
        output: DetailRecordsSearchResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/document_links': {
      $get:
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[document_id]'?: string | undefined
                'filter[linked_record_type]'?: string | undefined
                'filter[linked_resource_id]'?: string | undefined
              }
            }
            output: {
              data?: DocServiceDocumentLink[] | undefined
              meta?: PaginationMeta | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[document_id]'?: string | undefined
                'filter[linked_record_type]'?: string | undefined
                'filter[linked_resource_id]'?: string | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/documents': {
      $get:
        | {
            input: {
              query: { 'page[number]'?: number | undefined; 'page[size]'?: number | undefined }
            }
            output: { data?: DocServiceDocument[] | undefined; meta?: PaginationMeta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { 'page[number]'?: number | undefined; 'page[size]'?: number | undefined }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: CreateDocServiceDocumentRequest } & {
              form: CreateMultiPartDocServiceDocumentRequest
            }
            output: { data?: DocServiceDocument | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateDocServiceDocumentRequest } & {
              form: CreateMultiPartDocServiceDocumentRequest
            }
            output: Errors
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: CreateDocServiceDocumentRequest } & {
              form: CreateMultiPartDocServiceDocumentRequest
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/documents/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: { data?: DocServiceDocument | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Errors; outputFormat: 'json'; status: 200 }
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: DocServiceDocument | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Errors; outputFormat: 'json'; status: 200 }
      $patch:
        | {
            input: { param: { id: string } } & { json: DocServiceDocument }
            output: { data?: DocServiceDocument | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: DocServiceDocument }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/documents/:id/download': {
      $get:
        | { input: { param: { id: string } }; output: File; outputFormat: 'text'; status: 200 }
        | { input: { param: { id: string } }; output: Errors; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/fax_applications': {
      $get:
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[application_name][contains]'?: string | undefined
                'filter[outbound_voice_profile_id]'?: string | undefined
                sort?: 'created_at' | 'connection_name' | 'active' | undefined
              }
            }
            output: { data?: FaxApplication[] | undefined; meta?: PaginationMeta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[application_name][contains]'?: string | undefined
                'filter[outbound_voice_profile_id]'?: string | undefined
                sort?: 'created_at' | 'connection_name' | 'active' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[application_name][contains]'?: string | undefined
                'filter[outbound_voice_profile_id]'?: string | undefined
                sort?: 'created_at' | 'connection_name' | 'active' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[application_name][contains]'?: string | undefined
                'filter[outbound_voice_profile_id]'?: string | undefined
                sort?: 'created_at' | 'connection_name' | 'active' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { json: CreateFaxApplicationRequest }
            output: { data?: FaxApplication | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateFaxApplicationRequest }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/fax_applications/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: { data?: FaxApplication | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: FaxApplication | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
      $patch:
        | {
            input: { param: { id: string } } & { json: UpdateFaxApplicationRequest }
            output: { data?: FaxApplication | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: UpdateFaxApplicationRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: UpdateFaxApplicationRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: UpdateFaxApplicationRequest }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/faxes': {
      $get:
        | {
            input: {
              query: {
                'filter[created_at][gte]'?: string | undefined
                'filter[created_at][gt]'?: string | undefined
                'filter[created_at][lte]'?: string | undefined
                'filter[created_at][lt]'?: string | undefined
                'filter[direction][eq]'?: string | undefined
                'filter[from][eq]'?: string | undefined
                'page[size]'?: number | undefined
                'page[number]'?: number | undefined
              }
            }
            output: { data?: Fax[] | undefined; meta?: { [x: string]: unknown } | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'filter[created_at][gte]'?: string | undefined
                'filter[created_at][gt]'?: string | undefined
                'filter[created_at][lte]'?: string | undefined
                'filter[created_at][lt]'?: string | undefined
                'filter[direction][eq]'?: string | undefined
                'filter[from][eq]'?: string | undefined
                'page[size]'?: number | undefined
                'page[number]'?: number | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: SendFaxRequest } & { form: SendFaxMultipartRequest }
            output: { data?: Fax | undefined }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: SendFaxRequest } & { form: SendFaxMultipartRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/faxes/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: Errors; outputFormat: 'json'; status: 200 }
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: Fax | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Errors; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/faxes/:id/actions/refresh': {
      $post:
        | {
            input: { param: { id: string } }
            output: { result?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: Errors; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/fqdn_connections': {
      $get:
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[connection_name][contains]'?: string | undefined
                sort?: 'created_at' | 'connection_name' | 'active' | undefined
              }
            }
            output: { data?: FqdnConnection[] | undefined; meta?: PaginationMeta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[connection_name][contains]'?: string | undefined
                sort?: 'created_at' | 'connection_name' | 'active' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[connection_name][contains]'?: string | undefined
                sort?: 'created_at' | 'connection_name' | 'active' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[connection_name][contains]'?: string | undefined
                sort?: 'created_at' | 'connection_name' | 'active' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { json: CreateFqdnConnectionRequest }
            output: { data?: FqdnConnection | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateFqdnConnectionRequest }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/fqdn_connections/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: { data?: FqdnConnection | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: FqdnConnection | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
      $patch:
        | {
            input: { param: { id: string } } & { json: UpdateFqdnConnectionRequest }
            output: { data?: FqdnConnection | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: UpdateFqdnConnectionRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: UpdateFqdnConnectionRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: UpdateFqdnConnectionRequest }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/fqdns': {
      $get:
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[connection_id]'?: string | undefined
                'filter[fqdn]'?: string | undefined
                'filter[port]'?: number | undefined
                'filter[dns_record_type]'?: string | undefined
              }
            }
            output: { data?: Fqdn[] | undefined; meta?: PaginationMeta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[connection_id]'?: string | undefined
                'filter[fqdn]'?: string | undefined
                'filter[port]'?: number | undefined
                'filter[dns_record_type]'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[connection_id]'?: string | undefined
                'filter[fqdn]'?: string | undefined
                'filter[port]'?: number | undefined
                'filter[dns_record_type]'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
      $post:
        | {
            input: { json: CreateFqdnRequest }
            output: { data?: Fqdn | undefined }
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: CreateFqdnRequest }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: CreateFqdnRequest }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/fqdns/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: { data?: Fqdn | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: Fqdn | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
      $patch:
        | {
            input: { param: { id: string } } & { json: UpdateFqdnRequest }
            output: { data?: Fqdn | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: UpdateFqdnRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: UpdateFqdnRequest }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/inventory_coverage': {
      $get:
        | {
            input: {
              query: {
                'filter[npa]'?: number | undefined
                'filter[nxx]'?: number | undefined
                'filter[administrative_area]'?: string | undefined
                'filter[number_type]'?: 'did' | 'toll-free' | undefined
                'filter[phone_number_type]'?:
                  | 'local'
                  | 'toll_free'
                  | 'national'
                  | 'mobile'
                  | 'landline'
                  | 'shared_cost'
                  | undefined
                'filter[country_code]'?: 'US' | 'CA' | 'GB' | undefined
                'filter[count]'?: boolean | undefined
                'filter[groupBy]':
                  | 'rate_center'
                  | 'locality'
                  | 'npa'
                  | 'national_destination_code'
                  | 'nxx'
              }
            }
            output: {
              data?: InventoryCoverage[] | undefined
              meta?: InventoryCoverageMetadata | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'filter[npa]'?: number | undefined
                'filter[nxx]'?: number | undefined
                'filter[administrative_area]'?: string | undefined
                'filter[number_type]'?: 'did' | 'toll-free' | undefined
                'filter[phone_number_type]'?:
                  | 'local'
                  | 'toll_free'
                  | 'national'
                  | 'mobile'
                  | 'landline'
                  | 'shared_cost'
                  | undefined
                'filter[country_code]'?: 'US' | 'CA' | 'GB' | undefined
                'filter[count]'?: boolean | undefined
                'filter[groupBy]':
                  | 'rate_center'
                  | 'locality'
                  | 'npa'
                  | 'national_destination_code'
                  | 'nxx'
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/ip_connections': {
      $get:
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[connection_name][contains]'?: string | undefined
                'filter[outbound.outbound_voice_profile_id]'?: string | undefined
                sort?: 'created_at' | 'connection_name' | 'active' | undefined
              }
            }
            output: { data?: IpConnection[] | undefined; meta?: PaginationMeta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[connection_name][contains]'?: string | undefined
                'filter[outbound.outbound_voice_profile_id]'?: string | undefined
                sort?: 'created_at' | 'connection_name' | 'active' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[connection_name][contains]'?: string | undefined
                'filter[outbound.outbound_voice_profile_id]'?: string | undefined
                sort?: 'created_at' | 'connection_name' | 'active' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[connection_name][contains]'?: string | undefined
                'filter[outbound.outbound_voice_profile_id]'?: string | undefined
                sort?: 'created_at' | 'connection_name' | 'active' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { json: CreateIpConnectionRequest }
            output: { data?: IpConnection | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateIpConnectionRequest }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/ip_connections/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: { data?: IpConnection | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: IpConnection | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
      $patch:
        | {
            input: { param: { id: string } } & { json: UpdateIpConnectionRequest }
            output: { data?: IpConnection | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: UpdateIpConnectionRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: UpdateIpConnectionRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: UpdateIpConnectionRequest }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/ips': {
      $get:
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[connection_id]'?: string | undefined
                'filter[ip_address]'?: string | undefined
                'filter[port]'?: number | undefined
              }
            }
            output: { data?: Ip[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[connection_id]'?: string | undefined
                'filter[ip_address]'?: string | undefined
                'filter[port]'?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[connection_id]'?: string | undefined
                'filter[ip_address]'?: string | undefined
                'filter[port]'?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
      $post:
        | {
            input: { json: CreateIpRequest }
            output: { data?: Ip | undefined }
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: CreateIpRequest }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: CreateIpRequest }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/ips/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: { data?: Ip | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: Ip | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
      $patch:
        | {
            input: { param: { id: string } } & { json: UpdateIpRequest }
            output: { data?: Ip | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: UpdateIpRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: UpdateIpRequest }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/ledger_billing_group_reports': {
      $post:
        | {
            input: { json: NewLedgerBillingGroupReport }
            output: { data?: LedgerBillingGroupReport | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: NewLedgerBillingGroupReport }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/ledger_billing_group_reports/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: LedgerBillingGroupReport | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Errors; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/managed_accounts': {
      $get:
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[email][contains]'?: string | undefined
                'filter[email][eq]'?: string | undefined
                sort?: 'created_at' | 'email' | undefined
              }
            }
            output: { data?: ManagedAccount[] | undefined; meta?: PaginationMeta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[email][contains]'?: string | undefined
                'filter[email][eq]'?: string | undefined
                sort?: 'created_at' | 'email' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
      $post:
        | {
            input: { json: CreateManagedAccountRequest }
            output: { data?: ManagedAccount | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateManagedAccountRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: CreateManagedAccountRequest }
            output: { errors?: UnprocessableEntityError[] | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/managed_accounts/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: ManagedAccount | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/managed_accounts/:id/actions/disable': {
      $post:
        | {
            input: { param: { id: string } }
            output: { data?: ManagedAccount | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | {
            input: { param: { id: string } }
            output: { errors?: UnprocessableEntityError[] | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/managed_accounts/:id/actions/enable': {
      $post:
        | {
            input: { param: { id: string } }
            output: { data?: ManagedAccount | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | {
            input: { param: { id: string } }
            output: { errors?: UnprocessableEntityError[] | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/media': {
      $get:
        | {
            input: {}
            output: { data?: MediaResource[] | undefined; meta?: PaginationMeta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: Errors; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { json: UploadMediaRequest } & { form: UploadMediaMultipartRequest }
            output: { data?: MediaResource | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: UploadMediaRequest } & { form: UploadMediaMultipartRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/media/:media_name': {
      $delete:
        | {
            input: { param: { media_name: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { media_name: string } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { media_name: string } }
            output: { data?: MediaResource | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { media_name: string } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { media_name: string } } & { json: UpdateMediaRequest } & {
              form: UpdateMediaMultipartRequest
            }
            output: { data?: MediaResource | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { media_name: string } } & { json: UpdateMediaRequest } & {
              form: UpdateMediaMultipartRequest
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/media/:media_name/download': {
      $get:
        | {
            input: { param: { media_name: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { media_name: string } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/message_detail_records': {
      $get: {
        input: {
          query: {
            start_date: string
            end_date: string
            id?: string | undefined
            direction?: Direction | undefined
            outbound_profile_id?: string | undefined
            cld?: string | undefined
            cli?: string | undefined
            status?: MessageStatus | undefined
            message_type?: MessageType | undefined
            country_iso?: string | undefined
            error?: string | undefined
            normalized_carrier?: string | undefined
            tag?: string | undefined
            mcc?: string | undefined
            mnc?: string | undefined
            product?: Product | undefined
            'page[number]'?: number | undefined
            'page[size]'?: number | undefined
            sort?: string[] | undefined
          }
        }
        output: MdrGetDetailResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/message_detail_records/:id/message_body': {
      $get: {
        input: { param: { id: string } }
        output: MdrMessageBodyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/messages': {
      $post:
        | {
            input: { json: CreateMessageRequest }
            output: { data?: OutboundMessagePayload | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateMessageRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/messages/long_code': {
      $post:
        | {
            input: { json: CreateLongCodeMessageRequest }
            output: { data?: OutboundMessagePayload | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateLongCodeMessageRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/messages/number_pool': {
      $post:
        | {
            input: { json: CreateNumberPoolMessageRequest }
            output: { data?: OutboundMessagePayload | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateNumberPoolMessageRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/messages/short_code': {
      $post:
        | {
            input: { json: CreateShortCodeMessageRequest }
            output: { data?: OutboundMessagePayload | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateShortCodeMessageRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/messages/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: OutboundMessagePayload | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Errors; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/messaging_hosted_number_orders': {
      $get:
        | {
            input: {
              query: { 'page[number]'?: number | undefined; 'page[size]'?: number | undefined }
            }
            output: {
              data?: MessagingHostedNumberOrder[] | undefined
              meta?: PaginationMeta | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { 'page[number]'?: number | undefined; 'page[size]'?: number | undefined }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: CreateMessagingHostedNumberOrderRequest }
            output: { data?: MessagingHostedNumberOrder | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateMessagingHostedNumberOrderRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/messaging_hosted_number_orders/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: MessagingHostedNumberOrder | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Errors; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/messaging_hosted_number_orders/:id/actions/file_upload': {
      $post:
        | {
            input: { param: { id: string } } & { form: UploadFileMessagingHostedNumberOrderRequest }
            output: { data?: MessagingHostedNumberOrder | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { form: UploadFileMessagingHostedNumberOrderRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/messaging_hosted_numbers/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: { data?: HostedNumber | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Errors; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/messaging_profile_metrics': {
      $get:
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                id?: string | undefined
                time_frame?: '1h' | '3h' | '24h' | '3d' | '7d' | '30d' | undefined
              }
            }
            output: {
              data?: MessagingProfileHighLevelMetrics[] | undefined
              meta?: PaginationMeta | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                id?: string | undefined
                time_frame?: '1h' | '3h' | '24h' | '3d' | '7d' | '30d' | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/messaging_profiles': {
      $get:
        | {
            input: {
              query: { 'page[number]'?: number | undefined; 'page[size]'?: number | undefined }
            }
            output: { data?: MessagingProfile[] | undefined; meta?: PaginationMeta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { 'page[number]'?: number | undefined; 'page[size]'?: number | undefined }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: CreateMessagingProfileRequest }
            output: { data?: MessagingProfile | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateMessagingProfileRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/messaging_profiles/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: { data?: MessagingProfile | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Errors; outputFormat: 'json'; status: 200 }
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: MessagingProfile | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Errors; outputFormat: 'json'; status: 200 }
      $patch:
        | {
            input: { param: { id: string } } & { json: UpdateMessagingProfileRequest }
            output: { data?: MessagingProfile | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: UpdateMessagingProfileRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/messaging_profiles/:id/metrics': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { time_frame?: '1h' | '3h' | '24h' | '3d' | '7d' | '30d' | undefined }
            }
            output: { data?: MessagingProfileDetailedMetrics | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { time_frame?: '1h' | '3h' | '24h' | '3d' | '7d' | '30d' | undefined }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/messaging_profiles/:id/phone_numbers': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { 'page[number]'?: number | undefined; 'page[size]'?: number | undefined }
            }
            output: {
              data?: PhoneNumberWithMessagingSettings[] | undefined
              meta?: PaginationMeta | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { 'page[number]'?: number | undefined; 'page[size]'?: number | undefined }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/messaging_profiles/:id/short_codes': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { 'page[number]'?: number | undefined; 'page[size]'?: number | undefined }
            }
            output: { data?: ShortCode[] | undefined; meta?: PaginationMeta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { 'page[number]'?: number | undefined; 'page[size]'?: number | undefined }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/messaging_url_domains': {
      $get:
        | {
            input: {
              query: { 'page[number]'?: number | undefined; 'page[size]'?: number | undefined }
            }
            output: { data?: MessagingUrlDomain[] | undefined; meta?: PaginationMeta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { 'page[number]'?: number | undefined; 'page[size]'?: number | undefined }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/mobile_operator_networks': {
      $get:
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[name][starts_with]'?: string | undefined
                'filter[name][contains]'?: string | undefined
                'filter[name][ends_with]'?: string | undefined
                'filter[country_code]'?: string | undefined
                'filter[mcc]'?: string | undefined
                'filter[mnc]'?: string | undefined
                'filter[tadig]'?: string | undefined
              }
            }
            output: {
              data?: MobileOperatorNetwork[] | undefined
              meta?: PaginationMeta | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[name][starts_with]'?: string | undefined
                'filter[name][contains]'?: string | undefined
                'filter[name][ends_with]'?: string | undefined
                'filter[country_code]'?: string | undefined
                'filter[mcc]'?: string | undefined
                'filter[mnc]'?: string | undefined
                'filter[tadig]'?: string | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/notification_channels': {
      $get:
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[channel_type_id][eq]'?: 'webhook' | 'sms' | 'email' | 'voice' | undefined
              }
            }
            output: { data?: NotificationChannel[] | undefined; meta?: PaginationMeta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[channel_type_id][eq]'?: 'webhook' | 'sms' | 'email' | 'voice' | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: NotificationChannel }
            output: { data?: NotificationChannel | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: NotificationChannel }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/notification_channels/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: { data?: NotificationChannel | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Errors; outputFormat: 'json'; status: 200 }
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: NotificationChannel | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Errors; outputFormat: 'json'; status: 200 }
      $patch:
        | {
            input: { param: { id: string } } & { json: NotificationChannel }
            output: { data?: NotificationChannel | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: NotificationChannel }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/notification_event_conditions': {
      $get:
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[associated_record_type][eq]'?: 'account' | 'phone_number' | undefined
              }
            }
            output: {
              data?: NotificationEventCondition[] | undefined
              meta?: PaginationMeta | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[associated_record_type][eq]'?: 'account' | 'phone_number' | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/notification_events': {
      $get:
        | {
            input: {
              query: { 'page[number]'?: number | undefined; 'page[size]'?: number | undefined }
            }
            output: { data?: NotificationEvent[] | undefined; meta?: PaginationMeta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { 'page[number]'?: number | undefined; 'page[size]'?: number | undefined }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/notification_profiles': {
      $get:
        | {
            input: {
              query: { 'page[number]'?: number | undefined; 'page[size]'?: number | undefined }
            }
            output: { data?: NotificationProfile[] | undefined; meta?: PaginationMeta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { 'page[number]'?: number | undefined; 'page[size]'?: number | undefined }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: NotificationProfile }
            output: { data?: NotificationProfile | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: NotificationProfile }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/notification_profiles/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: { data?: NotificationProfile | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Errors; outputFormat: 'json'; status: 200 }
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: NotificationProfile | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Errors; outputFormat: 'json'; status: 200 }
      $patch:
        | {
            input: { param: { id: string } } & { json: NotificationProfile }
            output: { data?: NotificationProfile | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: NotificationProfile }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/notification_settings': {
      $get:
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[notification_profile_id][eq]'?: string | undefined
                'filter[notification_channel][eq]'?: string | undefined
                'filter[notification_event_condition_id][eq]'?: string | undefined
                'filter[associated_record_type][eq]'?: 'account' | 'phone_number' | undefined
                'filter[status][eq]'?:
                  | 'enabled'
                  | 'enable-received'
                  | 'enable-pending'
                  | 'enable-submtited'
                  | 'delete-received'
                  | 'delete-pending'
                  | 'delete-submitted'
                  | 'deleted'
                  | undefined
              }
            }
            output: { data?: NotificationSetting[] | undefined; meta?: PaginationMeta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[notification_profile_id][eq]'?: string | undefined
                'filter[notification_channel][eq]'?: string | undefined
                'filter[notification_event_condition_id][eq]'?: string | undefined
                'filter[associated_record_type][eq]'?: 'account' | 'phone_number' | undefined
                'filter[status][eq]'?:
                  | 'enabled'
                  | 'enable-received'
                  | 'enable-pending'
                  | 'enable-submtited'
                  | 'delete-received'
                  | 'delete-pending'
                  | 'delete-submitted'
                  | 'deleted'
                  | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: NotificationSetting }
            output: { data?: NotificationSetting | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: NotificationSetting }
            output: { data?: NotificationSetting | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: NotificationSetting }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/notification_settings/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: { data?: NotificationSetting | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: { data?: NotificationSetting | undefined }
            outputFormat: 'json'
            status: 201
          }
        | { input: { param: { id: string } }; output: Errors; outputFormat: 'json'; status: 200 }
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: NotificationSetting | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Errors; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/number_block_orders': {
      $get:
        | {
            input: {
              query: {
                'filter[status]'?: string | undefined
                'filter[created_at][gt]'?: string | undefined
                'filter[created_at][lt]'?: string | undefined
                'filter[phone_numbers.starting_number]'?: string | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
              }
            }
            output: { data?: NumberBlockOrder[] | undefined; meta?: PaginationMeta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'filter[status]'?: string | undefined
                'filter[created_at][gt]'?: string | undefined
                'filter[created_at][lt]'?: string | undefined
                'filter[phone_numbers.starting_number]'?: string | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: CreateNumberBlockOrderRequest }
            output: { data?: NumberBlockOrder | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateNumberBlockOrderRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/number_block_orders/:number_block_order_id': {
      $get:
        | {
            input: { param: { number_block_order_id: string } }
            output: { data?: NumberBlockOrder | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { number_block_order_id: string } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/number_lookup/:phone_number': {
      $get:
        | {
            input: { param: { phone_number: string } } & {
              query: { type?: 'carrier' | 'caller-name' | undefined }
            }
            output: { data?: NumberLookupRecord | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { phone_number: string } } & {
              query: { type?: 'carrier' | 'caller-name' | undefined }
            }
            output: Errors
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { phone_number: string } } & {
              query: { type?: 'carrier' | 'caller-name' | undefined }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/number_order_documents': {
      $get:
        | {
            input: {
              query: {
                'filter[requirement_id]'?: string | undefined
                'filter[created_at][gt]'?: string | undefined
                'filter[created_at][lt]'?: string | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
              }
            }
            output: { data?: NumberOrderDocument[] | undefined; meta?: PaginationMeta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'filter[requirement_id]'?: string | undefined
                'filter[created_at][gt]'?: string | undefined
                'filter[created_at][lt]'?: string | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: CreateNumberOrderDocumentRequest }
            output: { data?: NumberOrderDocument | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateNumberOrderDocumentRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/number_order_documents/:number_order_document_id': {
      $get:
        | {
            input: { param: { number_order_document_id: string } }
            output: { data?: NumberOrderDocument | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { number_order_document_id: string } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { number_order_document_id: string } } & {
              json: UpdateNumberOrderDocumentRequest
            }
            output: { data?: NumberOrderDocument | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { number_order_document_id: string } } & {
              json: UpdateNumberOrderDocumentRequest
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/number_order_phone_numbers': {
      $get:
        | {
            input: {}
            output: {
              data?: NumberOrderPhoneNumber[] | undefined
              meta?: PaginationMeta | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: Errors; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/number_order_phone_numbers/:number_order_phone_number_id': {
      $get:
        | {
            input: { param: { number_order_phone_number_id: string } }
            output: { data?: NumberOrderPhoneNumber | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { number_order_phone_number_id: string } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { number_order_phone_number_id: string } } & {
              json: UpdateNumberOrderPhoneNumberRequest
            }
            output: { data?: NumberOrderPhoneNumber | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { number_order_phone_number_id: string } } & {
              json: UpdateNumberOrderPhoneNumberRequest
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/number_orders': {
      $get:
        | {
            input: {
              query: {
                'filter[status]'?: string | undefined
                'filter[created_at][gt]'?: string | undefined
                'filter[created_at][lt]'?: string | undefined
                'filter[phone_numbers_count]'?: string | undefined
                'filter[customer_reference]'?: string | undefined
                'filter[requirements_met]'?: boolean | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
              }
            }
            output: { data?: NumberOrder[] | undefined; meta?: PaginationMeta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'filter[status]'?: string | undefined
                'filter[created_at][gt]'?: string | undefined
                'filter[created_at][lt]'?: string | undefined
                'filter[phone_numbers_count]'?: string | undefined
                'filter[customer_reference]'?: string | undefined
                'filter[requirements_met]'?: boolean | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: CreateNumberOrderRequest }
            output: { data?: NumberOrderWithPhoneNumbers | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateNumberOrderRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/number_orders/:number_order_id': {
      $get:
        | {
            input: { param: { number_order_id: string } }
            output: { data?: NumberOrderWithPhoneNumbers | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { number_order_id: string } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { number_order_id: string } } & { json: UpdateNumberOrderRequest }
            output: { data?: NumberOrderWithPhoneNumbers | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { number_order_id: string } } & { json: UpdateNumberOrderRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/number_reservations': {
      $get:
        | {
            input: {
              query: {
                'filter[status]'?: string | undefined
                'filter[created_at][gt]'?: string | undefined
                'filter[created_at][lt]'?: string | undefined
                'filter[phone_numbers.phone_number]'?: string | undefined
                'filter[customer_reference]'?: string | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
              }
            }
            output: { data?: NumberReservation[] | undefined; meta?: PaginationMeta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'filter[status]'?: string | undefined
                'filter[created_at][gt]'?: string | undefined
                'filter[created_at][lt]'?: string | undefined
                'filter[phone_numbers.phone_number]'?: string | undefined
                'filter[customer_reference]'?: string | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: CreateNumberReservationRequest }
            output: { data?: NumberReservation | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateNumberReservationRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/number_reservations/:number_reservation_id': {
      $get:
        | {
            input: { param: { number_reservation_id: string } }
            output: { data?: NumberReservation | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { number_reservation_id: string } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/number_reservations/:number_reservation_id/actions/extend': {
      $post:
        | {
            input: { param: { number_reservation_id: string } }
            output: { data?: NumberReservation | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { number_reservation_id: string } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/ota_updates': {
      $get:
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[status]'?: 'in-progress' | 'completed' | 'failed' | undefined
                'filter[sim_card_id]'?: string | undefined
                'filter[type]'?: 'sim_card_network_preferences' | undefined
              }
            }
            output: { data?: SimplifiedOTAUpdate[] | undefined; meta?: PaginationMeta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[status]'?: 'in-progress' | 'completed' | 'failed' | undefined
                'filter[sim_card_id]'?: string | undefined
                'filter[type]'?: 'sim_card_network_preferences' | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/ota_updates/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: CompleteOTAUpdate | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Errors; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/outbound_voice_profiles': {
      $get:
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[name][contains]'?: string | undefined
                sort?:
                  | 'enabled'
                  | '-enabled'
                  | 'created_at'
                  | '-created_at'
                  | 'name'
                  | '-name'
                  | 'service_plan'
                  | '-service_plan'
                  | 'traffic_type'
                  | '-traffic_type'
                  | 'usage_payment_method'
                  | '-usage_payment_method'
                  | undefined
              }
            }
            output: { data?: OutboundVoiceProfile[] | undefined; meta?: PaginationMeta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[name][contains]'?: string | undefined
                sort?:
                  | 'enabled'
                  | '-enabled'
                  | 'created_at'
                  | '-created_at'
                  | 'name'
                  | '-name'
                  | 'service_plan'
                  | '-service_plan'
                  | 'traffic_type'
                  | '-traffic_type'
                  | 'usage_payment_method'
                  | '-usage_payment_method'
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[name][contains]'?: string | undefined
                sort?:
                  | 'enabled'
                  | '-enabled'
                  | 'created_at'
                  | '-created_at'
                  | 'name'
                  | '-name'
                  | 'service_plan'
                  | '-service_plan'
                  | 'traffic_type'
                  | '-traffic_type'
                  | 'usage_payment_method'
                  | '-usage_payment_method'
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 422
          }
      $post:
        | {
            input: { json: CreateOutboundVoiceProfileRequest }
            output: { data?: OutboundVoiceProfile | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateOutboundVoiceProfileRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: CreateOutboundVoiceProfileRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { json: CreateOutboundVoiceProfileRequest }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/outbound_voice_profiles/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: { data?: OutboundVoiceProfile | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: OutboundVoiceProfile | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
      $patch:
        | {
            input: { param: { id: string } } & { json: UpdateOutboundVoiceProfileRequest }
            output: { data?: OutboundVoiceProfile | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: UpdateOutboundVoiceProfileRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: UpdateOutboundVoiceProfileRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: UpdateOutboundVoiceProfileRequest }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/phone_number_blocks/jobs': {
      $get:
        | {
            input: {
              query: {
                'filter[type]'?: 'delete_phone_number_block' | undefined
                'filter[status]'?: 'pending' | 'in_progress' | 'completed' | 'failed' | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                sort?: 'created_at' | undefined
              }
            }
            output: { data?: PhoneNumberBlocksJob[] | undefined; meta?: PaginationMeta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'filter[type]'?: 'delete_phone_number_block' | undefined
                'filter[status]'?: 'pending' | 'in_progress' | 'completed' | 'failed' | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                sort?: 'created_at' | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/phone_number_blocks/jobs/delete_phone_number_block': {
      $post:
        | {
            input: { json: PhoneNumberBlocksJobDeletePhoneNumberBlockRequest }
            output: { data?: PhoneNumberBlocksJob | undefined }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: PhoneNumberBlocksJobDeletePhoneNumberBlockRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/phone_number_blocks/jobs/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: PhoneNumberBlocksJob | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Errors; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/phone_numbers': {
      $get:
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[tag]'?: string | undefined
                'filter[phone_number]'?: string | undefined
                'filter[status]'?:
                  | 'purchase_pending'
                  | 'purchase_failed'
                  | 'port_pending'
                  | 'active'
                  | 'deleted'
                  | 'port_failed'
                  | 'emergency_only'
                  | 'ported_out'
                  | 'port_out_pending'
                  | undefined
                'filter[voice.connection_name][contains]'?: string | undefined
                'filter[voice.connection_name][starts_with]'?: string | undefined
                'filter[voice.connection_name][ends_with]'?: string | undefined
                'filter[voice.connection_name][eq]'?: string | undefined
                'filter[usage_payment_method]'?: 'pay-per-minute' | 'channel' | undefined
                'filter[billing_group_id]'?: string | undefined
                'filter[emergency_address_id]'?: string | undefined
                'filter[customer_reference]'?: string | undefined
                sort?:
                  | 'purchased_at'
                  | 'phone_number'
                  | 'connection_name'
                  | 'usage_payment_method'
                  | undefined
              }
            }
            output: { data?: PhoneNumberDetailed[] | undefined; meta?: PaginationMeta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[tag]'?: string | undefined
                'filter[phone_number]'?: string | undefined
                'filter[status]'?:
                  | 'purchase_pending'
                  | 'purchase_failed'
                  | 'port_pending'
                  | 'active'
                  | 'deleted'
                  | 'port_failed'
                  | 'emergency_only'
                  | 'ported_out'
                  | 'port_out_pending'
                  | undefined
                'filter[voice.connection_name][contains]'?: string | undefined
                'filter[voice.connection_name][starts_with]'?: string | undefined
                'filter[voice.connection_name][ends_with]'?: string | undefined
                'filter[voice.connection_name][eq]'?: string | undefined
                'filter[usage_payment_method]'?: 'pay-per-minute' | 'channel' | undefined
                'filter[billing_group_id]'?: string | undefined
                'filter[emergency_address_id]'?: string | undefined
                'filter[customer_reference]'?: string | undefined
                sort?:
                  | 'purchased_at'
                  | 'phone_number'
                  | 'connection_name'
                  | 'usage_payment_method'
                  | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/phone_numbers/csv_downloads': {
      $get:
        | {
            input: {
              query: { 'page[number]'?: number | undefined; 'page[size]'?: number | undefined }
            }
            output: { data?: CsvDownload[] | undefined; meta?: PaginationMeta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { 'page[number]'?: number | undefined; 'page[size]'?: number | undefined }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {}
            output: { data?: CsvDownload[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: Errors; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/phone_numbers/csv_downloads/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: CsvDownload[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Errors; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/phone_numbers/inbound_channels': {
      $get:
        | {
            input: {}
            output: {
              data?: { channels?: number | undefined; record_type?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
        | { input: {}; output: {}; outputFormat: string; status: 422 }
      $patch:
        | {
            input: { json: { channels: number } }
            output: {
              data?: { channels?: number | undefined; record_type?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { channels: number } }
            output: {
              errors?:
                | {
                    code: string
                    detail?: string | undefined
                    meta?: { [x: string]: unknown } | undefined
                    source?:
                      | { parameter?: string | undefined; pointer?: string | undefined }
                      | undefined
                    title: string
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/phone_numbers/jobs': {
      $get:
        | {
            input: {
              query: {
                'filter[type]'?:
                  | 'update_emergency_settings'
                  | 'delete_phone_numbers'
                  | 'update_phone_numbers'
                  | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                sort?: 'created_at' | undefined
              }
            }
            output: { data?: PhoneNumbersJob[] | undefined; meta?: PaginationMeta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'filter[type]'?:
                  | 'update_emergency_settings'
                  | 'delete_phone_numbers'
                  | 'update_phone_numbers'
                  | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                sort?: 'created_at' | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/phone_numbers/jobs/delete_phone_numbers': {
      $post:
        | {
            input: { json: PhoneNumbersJobDeletePhoneNumbersRequest }
            output: { data?: PhoneNumbersJob | undefined }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: PhoneNumbersJobDeletePhoneNumbersRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/phone_numbers/jobs/update_emergency_settings': {
      $post:
        | {
            input: { json: PhoneNumbersJobUpdateEmergencySettingsRequest }
            output: { data?: PhoneNumbersJob | undefined }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: PhoneNumbersJobUpdateEmergencySettingsRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/phone_numbers/jobs/update_phone_numbers': {
      $post:
        | {
            input: { json: PhoneNumbersJobUpdatePhoneNumbersRequest }
            output: { data?: PhoneNumbersJob | undefined }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: PhoneNumbersJobUpdatePhoneNumbersRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/phone_numbers/jobs/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: PhoneNumbersJob | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Errors; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/phone_numbers/messaging': {
      $get:
        | {
            input: {
              query: { 'page[number]'?: number | undefined; 'page[size]'?: number | undefined }
            }
            output: {
              data?: PhoneNumberWithMessagingSettings[] | undefined
              meta?: PaginationMeta | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { 'page[number]'?: number | undefined; 'page[size]'?: number | undefined }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/phone_numbers/voice': {
      $get:
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[phone_number]'?: string | undefined
                'filter[connection_name][contains]'?: string | undefined
                'filter[customer_reference]'?: string | undefined
                'filter[usage_payment_method]'?: 'pay-per-minute' | 'channel' | undefined
                sort?:
                  | 'purchased_at'
                  | 'phone_number'
                  | 'connection_name'
                  | 'usage_payment_method'
                  | undefined
              }
            }
            output: {
              data?: PhoneNumberWithVoiceSettings[] | undefined
              meta?: PaginationMeta | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[phone_number]'?: string | undefined
                'filter[connection_name][contains]'?: string | undefined
                'filter[customer_reference]'?: string | undefined
                'filter[usage_payment_method]'?: 'pay-per-minute' | 'channel' | undefined
                sort?:
                  | 'purchased_at'
                  | 'phone_number'
                  | 'connection_name'
                  | 'usage_payment_method'
                  | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/phone_numbers/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: { data?: PhoneNumberDeletedDetailed | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Errors; outputFormat: 'json'; status: 200 }
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: PhoneNumberDetailed | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Errors; outputFormat: 'json'; status: 200 }
      $patch:
        | {
            input: { param: { id: string } } & { json: UpdatePhoneNumberRequest }
            output: { data?: PhoneNumberDetailed | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: UpdatePhoneNumberRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/phone_numbers/:id/actions/enable_emergency': {
      $post:
        | {
            input: { param: { id: string } } & { json: PhoneNumberEnableEmergencyRequest }
            output: { data?: PhoneNumberWithVoiceSettings | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: PhoneNumberEnableEmergencyRequest }
            output: { data?: PhoneNumberWithVoiceSettings | undefined }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } } & { json: PhoneNumberEnableEmergencyRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/phone_numbers/:id/messaging': {
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: PhoneNumberWithMessagingSettings | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Errors; outputFormat: 'json'; status: 200 }
      $patch:
        | {
            input: { param: { id: string } } & { json: UpdatePhoneNumberMessagingSettingsRequest }
            output: { data?: PhoneNumberWithMessagingSettings | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: UpdatePhoneNumberMessagingSettingsRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/phone_numbers/:id/voice': {
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: PhoneNumberWithVoiceSettings | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Errors; outputFormat: 'json'; status: 200 }
      $patch:
        | {
            input: { param: { id: string } } & { json: UpdatePhoneNumberVoiceSettingsRequest }
            output: { data?: PhoneNumberWithVoiceSettings | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: UpdatePhoneNumberVoiceSettingsRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/portability_checks': {
      $post:
        | {
            input: { json: { phone_numbers?: string[] | undefined } }
            output: { data?: PortabilityCheckDetails[] | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: { phone_numbers?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: { phone_numbers?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/porting_orders': {
      $get:
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                include_phone_numbers?: boolean | undefined
                'filter[status]'?: PortingOrderStatus | undefined
                'filter[customer_reference]'?: string | undefined
                'filter[phone_numbers][country_code]'?: string | undefined
                'filter[phone_numbers][carrier_name]'?: string | undefined
                'filter[misc][type]'?: PortingOrderType | undefined
                'filter[end_user][admin][entity_name]'?: string | undefined
                'filter[end_user][admin][auth_person_name]'?: string | undefined
                'filter[activation_settings][fast_port_eligible]'?: boolean | undefined
                'filter[activation_settings][foc_datetime_requested][gt]'?: string | undefined
                'filter[activation_settings][foc_datetime_requested][lt]'?: string | undefined
                sort?:
                  | 'created_at'
                  | '-created_at'
                  | 'activation_settings.foc_datetime_requested'
                  | '-activation_settings.foc_datetime_requested'
                  | undefined
              }
            }
            output: { data?: PortingOrder[] | undefined; meta?: PaginationMeta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                include_phone_numbers?: boolean | undefined
                'filter[status]'?: PortingOrderStatus | undefined
                'filter[customer_reference]'?: string | undefined
                'filter[phone_numbers][country_code]'?: string | undefined
                'filter[phone_numbers][carrier_name]'?: string | undefined
                'filter[misc][type]'?: PortingOrderType | undefined
                'filter[end_user][admin][entity_name]'?: string | undefined
                'filter[end_user][admin][auth_person_name]'?: string | undefined
                'filter[activation_settings][fast_port_eligible]'?: boolean | undefined
                'filter[activation_settings][foc_datetime_requested][gt]'?: string | undefined
                'filter[activation_settings][foc_datetime_requested][lt]'?: string | undefined
                sort?:
                  | 'created_at'
                  | '-created_at'
                  | 'activation_settings.foc_datetime_requested'
                  | '-activation_settings.foc_datetime_requested'
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                include_phone_numbers?: boolean | undefined
                'filter[status]'?: PortingOrderStatus | undefined
                'filter[customer_reference]'?: string | undefined
                'filter[phone_numbers][country_code]'?: string | undefined
                'filter[phone_numbers][carrier_name]'?: string | undefined
                'filter[misc][type]'?: PortingOrderType | undefined
                'filter[end_user][admin][entity_name]'?: string | undefined
                'filter[end_user][admin][auth_person_name]'?: string | undefined
                'filter[activation_settings][fast_port_eligible]'?: boolean | undefined
                'filter[activation_settings][foc_datetime_requested][gt]'?: string | undefined
                'filter[activation_settings][foc_datetime_requested][lt]'?: string | undefined
                sort?:
                  | 'created_at'
                  | '-created_at'
                  | 'activation_settings.foc_datetime_requested'
                  | '-activation_settings.foc_datetime_requested'
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 422
          }
      $post:
        | {
            input: { json: CreatePortingOrder }
            output: { data?: PortingOrder[] | undefined }
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: CreatePortingOrder }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: CreatePortingOrder }; output: {}; outputFormat: string; status: 422 }
    }
  } & {
    '/porting_orders/exception_types': {
      $get:
        | {
            input: {}
            output: { data?: PortingOrdersExceptionType[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 422 }
    }
  } & {
    '/porting_orders/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: {
              data?: PortingOrder | undefined
              meta?: { phone_numbers_url?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
      $get:
        | {
            input: { param: { id: string } } & {
              query: { include_phone_numbers?: boolean | undefined }
            }
            output: {
              data?: PortingOrder | undefined
              meta?: { phone_numbers_url?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { include_phone_numbers?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: UpdatePortingOrder }
            output: {
              data?: PortingOrder | undefined
              meta?: { phone_numbers_url?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: UpdatePortingOrder }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: UpdatePortingOrder }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/porting_orders/:id/actions/activate': {
      $post:
        | {
            input: { param: { id: string } }
            output: { data?: PortingOrdersActivationJob | undefined }
            outputFormat: 'json'
            status: 202
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
    }
  } & {
    '/porting_orders/:id/actions/cancel': {
      $post:
        | {
            input: { param: { id: string } }
            output: {
              data?: PortingOrder | undefined
              meta?: { phone_numbers_url?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
    }
  } & {
    '/porting_orders/:id/actions/confirm': {
      $post:
        | {
            input: { param: { id: string } }
            output: {
              data?: PortingOrder | undefined
              meta?: { phone_numbers_url?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
    }
  } & {
    '/porting_orders/:id/activation_jobs': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { 'page[number]'?: number | undefined; 'page[size]'?: number | undefined }
            }
            output: {
              data?: PortingOrdersActivationJob[] | undefined
              meta?: PaginationMeta | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { 'page[number]'?: number | undefined; 'page[size]'?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { 'page[number]'?: number | undefined; 'page[size]'?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/porting_orders/:id/activation_jobs/:activationJobId': {
      $get:
        | {
            input: { param: { id: string; activationJobId: string } }
            output: { data?: PortingOrdersActivationJob | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; activationJobId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string; activationJobId: string } }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/porting_orders/:id/comments': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { 'page[number]'?: number | undefined; 'page[size]'?: number | undefined }
            }
            output: { data?: PortingOrdersComment[] | undefined; meta?: PaginationMeta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { 'page[number]'?: number | undefined; 'page[size]'?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { 'page[number]'?: number | undefined; 'page[size]'?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 422
          }
      $post:
        | {
            input: { param: { id: string } } & { json: CreatePortingOrderComment }
            output: { data?: PortingOrdersComment | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & { json: CreatePortingOrderComment }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: CreatePortingOrderComment }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/porting_orders/:id/loa_template': {
      $get:
        | { input: { param: { id: string } }; output: File; outputFormat: 'text'; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/porting_phone_numbers': {
      $get:
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[porting_order_id]'?: string | undefined
                'filter[phone_number]'?: string | undefined
                'filter[activation_status]'?: ActivationStatus | undefined
                'filter[portability_status]'?: PortabilityStatus | undefined
              }
            }
            output: { data?: PhoneNumber[] | undefined; meta?: PaginationMeta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[porting_order_id]'?: string | undefined
                'filter[phone_number]'?: string | undefined
                'filter[activation_status]'?: ActivationStatus | undefined
                'filter[portability_status]'?: PortabilityStatus | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[porting_order_id]'?: string | undefined
                'filter[phone_number]'?: string | undefined
                'filter[activation_status]'?: ActivationStatus | undefined
                'filter[portability_status]'?: PortabilityStatus | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/portouts': {
      $get:
        | {
            input: {
              query: {
                'filter[carrier_name]'?: string | undefined
                'filter[spid]'?: string | undefined
                'filter[status]'?:
                  | 'pending'
                  | 'authorized'
                  | 'ported'
                  | 'rejected'
                  | 'rejected-pending'
                  | 'canceled'
                  | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
              }
            }
            output: { data?: PortoutDetails[] | undefined; meta?: Metadata | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'filter[carrier_name]'?: string | undefined
                'filter[spid]'?: string | undefined
                'filter[status]'?:
                  | 'pending'
                  | 'authorized'
                  | 'ported'
                  | 'rejected'
                  | 'rejected-pending'
                  | 'canceled'
                  | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                'filter[carrier_name]'?: string | undefined
                'filter[spid]'?: string | undefined
                'filter[status]'?:
                  | 'pending'
                  | 'authorized'
                  | 'ported'
                  | 'rejected'
                  | 'rejected-pending'
                  | 'canceled'
                  | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                'filter[carrier_name]'?: string | undefined
                'filter[spid]'?: string | undefined
                'filter[status]'?:
                  | 'pending'
                  | 'authorized'
                  | 'ported'
                  | 'rejected'
                  | 'rejected-pending'
                  | 'canceled'
                  | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/portouts/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: PortoutDetails | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
    }
  } & {
    '/portouts/:id/comments': {
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: PortoutComment[] | undefined; meta?: Metadata | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
      $post:
        | {
            input: { param: { id: string } } & { json: { body?: string | undefined } }
            output: { data?: PortoutComment | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & { json: { body?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: { body?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: { body?: string | undefined } }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/portouts/:id/:status': {
      $patch:
        | {
            input: { param: { id: string; status: 'authorized' | 'rejected' } }
            output: { data?: PortoutDetails | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; status: 'authorized' | 'rejected' } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string; status: 'authorized' | 'rejected' } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string; status: 'authorized' | 'rejected' } }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/private_wireless_gateways': {
      $get:
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[name]'?: string | undefined
                'filter[ip_range]'?: string | undefined
                'filter[region_code]'?: string | undefined
                'filter[created_at]'?: string | undefined
                'filter[updated_at]'?: string | undefined
              }
            }
            output: {
              data?: PrivateWirelessGateway[] | undefined
              meta?: PaginationMeta | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[name]'?: string | undefined
                'filter[ip_range]'?: string | undefined
                'filter[region_code]'?: string | undefined
                'filter[created_at]'?: string | undefined
                'filter[updated_at]'?: string | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: { name: string; network_id: string } }
            output: { data?: PrivateWirelessGateway | undefined }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: { name: string; network_id: string } }
            output: Errors
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: { name: string; network_id: string } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/private_wireless_gateways/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: { data?: PrivateWirelessGateway | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { id: string } }; output: Errors; outputFormat: 'json'; status: 200 }
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: PrivateWirelessGateway | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { id: string } }; output: Errors; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/queues/:queue_name': {
      $get:
        | {
            input: { param: { queue_name: string } }
            output: { data?: Queue | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { queue_name: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/queues/:queue_name/calls': {
      $get:
        | {
            input: { param: { queue_name: string } } & {
              query: { 'page[number]'?: number | undefined; 'page[size]'?: number | undefined }
            }
            output: { data?: QueueCall[] | undefined; meta?: PaginationMeta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { queue_name: string } } & {
              query: { 'page[number]'?: number | undefined; 'page[size]'?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/queues/:queue_name/calls/:call_control_id': {
      $get:
        | {
            input: { param: { queue_name: string; call_control_id: string } }
            output: { data?: QueueCall | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { queue_name: string; call_control_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/recordings': {
      $get:
        | {
            input: {
              query: {
                'filter[conference_id]'?: string | undefined
                'filter[created_at][gte]'?: string | undefined
                'filter[created_at][lte]'?: string | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
              }
            }
            output: { data?: Recording[] | undefined; meta?: PaginationMeta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'filter[conference_id]'?: string | undefined
                'filter[created_at][gte]'?: string | undefined
                'filter[created_at][lte]'?: string | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                'filter[conference_id]'?: string | undefined
                'filter[created_at][gte]'?: string | undefined
                'filter[created_at][lte]'?: string | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/recordings/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: Recording | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/reports/batch_mdr_reports': {
      $get: {
        input: { query: { 'page[number]'?: number | undefined; 'page[size]'?: number | undefined } }
        output: MdrGetDetailReportResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: MdrPostDetailReportRequest }
        output: MdrPostDetailReportResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/reports/batch_mdr_reports/:id': {
      $delete: {
        input: { param: { id: string } }
        output: MdrDeleteDetailReportResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: string } }
        output: MdrGetDetailReportByIdResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/reports/cdr_usage_reports/sync': {
      $get: {
        input: {
          query: {
            start_date?: string | undefined
            end_date?: string | undefined
            aggregation_type: 'NO_AGGREGATION' | 'CONNECTION' | 'TAG' | 'BILLING_GROUP'
            product_breakdown:
              | 'NO_BREAKDOWN'
              | 'DID_VS_TOLL_FREE'
              | 'COUNTRY'
              | 'DID_VS_TOLL_FREE_PER_COUNTRY'
            connections?: number[] | undefined
          }
        }
        output: CdrGetSyncUsageReportResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/reports/mdr_usage_reports': {
      $get: {
        input: { query: { 'page[number]'?: number | undefined; 'page[size]'?: number | undefined } }
        output: MdrGetUsageReportsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: { input: {}; output: MdrPostUsageReportsResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/reports/mdr_usage_reports/sync': {
      $get: {
        input: {
          query: {
            start_date?: string | undefined
            end_date?: string | undefined
            aggregation_type: 'NO_AGGREGATION' | 'PROFILE' | 'TAGS'
            profiles?: string[] | undefined
          }
        }
        output: MdrGetSyncUsageReportResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/reports/mdr_usage_reports/:id': {
      $delete: {
        input: { param: { id: string } }
        output: MdrDeleteUsageReportsResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: string } }
        output: MdrGetUsageReportsByIdResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/reports/mdrs': {
      $get: {
        input: {
          query: {
            start_date?: string | undefined
            end_date?: string | undefined
            id?: string | undefined
            direction?: 'INBOUND' | 'OUTBOUND' | undefined
            profile?: string | undefined
            cld?: string | undefined
            cli?: string | undefined
            status?:
              | 'GW_TIMEOUT'
              | 'DELIVERED'
              | 'DLR_UNCONFIRMED'
              | 'DLR_TIMEOUT'
              | 'RECEIVED'
              | 'GW_REJECT'
              | 'FAILED'
              | undefined
            message_type?: 'SMS' | 'MMS' | undefined
          }
        }
        output: MdrGetDetailResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/reports/wdrs': {
      $get: {
        input: {
          query: {
            start_date?: string | undefined
            end_date?: string | undefined
            id?: string | undefined
            mcc?: string | undefined
            mnc?: string | undefined
            imsi?: string | undefined
            sim_group_name?: string | undefined
            sim_group_id?: string | undefined
            sim_card_id?: string | undefined
            phone_number?: string | undefined
            'page[number]'?: number | undefined
            'page[size]'?: number | undefined
            sort?: string[] | undefined
          }
        }
        output: ExternalWdrGetDetailResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/requirement_types': {
      $get:
        | {
            input: {
              query: {
                'filter[name][contains]'?: string | undefined
                'sort[]'?: 'created_at' | 'name' | 'updated_at' | undefined
              }
            }
            output: {
              data?: DocReqsRequirementTypeList | undefined
              meta?: PaginationMeta | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'filter[name][contains]'?: string | undefined
                'sort[]'?: 'created_at' | 'name' | 'updated_at' | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/requirement_types/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: DocReqsRequirementType | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Errors; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/requirements': {
      $get:
        | {
            input: {
              query: {
                'filter[country_code]'?: string | undefined
                'filter[phone_number_type]'?: 'local' | 'national' | 'toll-free' | undefined
                'filter[action]'?: 'ordering' | 'porting' | undefined
                'sort[]'?: 'action' | 'country_code' | 'locality' | 'phone_number_type' | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
              }
            }
            output: { data?: DocReqsRequirementList | undefined; meta?: PaginationMeta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'filter[country_code]'?: string | undefined
                'filter[phone_number_type]'?: 'local' | 'national' | 'toll-free' | undefined
                'filter[action]'?: 'ordering' | 'porting' | undefined
                'sort[]'?: 'action' | 'country_code' | 'locality' | 'phone_number_type' | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/requirements/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: DocReqsRequirement | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Errors; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/room_participants': {
      $get: {
        input: {
          query: {
            'filter[date_joined_at][eq]'?: string | undefined
            'filter[date_joined_at][gte]'?: string | undefined
            'filter[date_joined_at][lte]'?: string | undefined
            'filter[date_updated_at][eq]'?: string | undefined
            'filter[date_updated_at][gte]'?: string | undefined
            'filter[date_updated_at][lte]'?: string | undefined
            'filter[date_left_at][eq]'?: string | undefined
            'filter[date_left_at][gte]'?: string | undefined
            'filter[date_left_at][lte]'?: string | undefined
            'filter[context]'?: string | undefined
            'filter[session_id]'?: string | undefined
            'page[size]'?: number | undefined
            'page[number]'?: number | undefined
          }
        }
        output: { data?: RoomParticipant[] | undefined; meta?: PaginationMeta | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/room_participants/:room_participant_id': {
      $get:
        | {
            input: { param: { room_participant_id: string } }
            output: { data?: RoomParticipant | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { room_participant_id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/room_sessions': {
      $get: {
        input: {
          query: {
            'filter[date_created_at][eq]'?: string | undefined
            'filter[date_created_at][gte]'?: string | undefined
            'filter[date_created_at][lte]'?: string | undefined
            'filter[date_updated_at][eq]'?: string | undefined
            'filter[date_updated_at][gte]'?: string | undefined
            'filter[date_updated_at][lte]'?: string | undefined
            'filter[date_ended_at][eq]'?: string | undefined
            'filter[date_ended_at][gte]'?: string | undefined
            'filter[date_ended_at][lte]'?: string | undefined
            'filter[room_id]'?: string | undefined
            'filter[active]'?: boolean | undefined
            include_participants?: boolean | undefined
            'page[size]'?: number | undefined
            'page[number]'?: number | undefined
          }
        }
        output: { data?: RoomSession[] | undefined; meta?: PaginationMeta | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/room_sessions/:room_session_id': {
      $get:
        | {
            input: { param: { room_session_id: string } } & {
              query: { include_participants?: boolean | undefined }
            }
            output: { data?: RoomSession | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { room_session_id: string } } & {
              query: { include_participants?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/room_sessions/:room_session_id/participants': {
      $get: {
        input: { param: { room_session_id: string } } & {
          query: {
            'filter[date_joined_at][eq]'?: string | undefined
            'filter[date_joined_at][gte]'?: string | undefined
            'filter[date_joined_at][lte]'?: string | undefined
            'filter[date_updated_at][eq]'?: string | undefined
            'filter[date_updated_at][gte]'?: string | undefined
            'filter[date_updated_at][lte]'?: string | undefined
            'filter[date_left_at][eq]'?: string | undefined
            'filter[date_left_at][gte]'?: string | undefined
            'filter[date_left_at][lte]'?: string | undefined
            'filter[context]'?: string | undefined
            'page[size]'?: number | undefined
            'page[number]'?: number | undefined
          }
        }
        output: { data?: RoomParticipant[] | undefined; meta?: PaginationMeta | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/rooms': {
      $get: {
        input: {
          query: {
            'filter[date_created_at][eq]'?: string | undefined
            'filter[date_created_at][gte]'?: string | undefined
            'filter[date_created_at][lte]'?: string | undefined
            'filter[date_updated_at][eq]'?: string | undefined
            'filter[date_updated_at][gte]'?: string | undefined
            'filter[date_updated_at][lte]'?: string | undefined
            'filter[unique_name]'?: string | undefined
            include_sessions?: boolean | undefined
            'page[size]'?: number | undefined
            'page[number]'?: number | undefined
          }
        }
        output: { data?: Room[] | undefined; meta?: PaginationMeta | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { json: CreateRoomRequest }
            output: { data?: Room | undefined }
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: CreateRoomRequest }; output: Errors; outputFormat: 'json'; status: 422 }
    }
  } & {
    '/rooms/:room_id': {
      $delete:
        | { input: { param: { room_id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { room_id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { room_id: string } } & {
              query: { include_sessions?: boolean | undefined }
            }
            output: { data?: Room | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { room_id: string } } & {
              query: { include_sessions?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/rooms/:room_id/actions/generate_join_client_token': {
      $post:
        | {
            input: { param: { room_id: string } } & { json: CreateRoomClientTokenRequest }
            output: {
              data?:
                | {
                    refresh_token?: string | undefined
                    refresh_token_expires_at?: string | undefined
                    token?: string | undefined
                    token_expires_at?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { room_id: string } } & { json: CreateRoomClientTokenRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/rooms/:room_id/actions/refresh_client_token': {
      $post:
        | {
            input: { param: { room_id: string } } & { json: RefreshRoomClientTokenRequest }
            output: {
              data?:
                | { token?: string | undefined; token_expires_at?: string | undefined }
                | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { room_id: string } } & { json: RefreshRoomClientTokenRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/rooms/:room_id/sessions': {
      $get: {
        input: { param: { room_id: string } } & {
          query: {
            'filter[date_created_at][eq]'?: string | undefined
            'filter[date_created_at][gte]'?: string | undefined
            'filter[date_created_at][lte]'?: string | undefined
            'filter[date_updated_at][eq]'?: string | undefined
            'filter[date_updated_at][gte]'?: string | undefined
            'filter[date_updated_at][lte]'?: string | undefined
            'filter[date_ended_at][eq]'?: string | undefined
            'filter[date_ended_at][gte]'?: string | undefined
            'filter[date_ended_at][lte]'?: string | undefined
            'filter[active]'?: boolean | undefined
            include_participants?: boolean | undefined
            'page[size]'?: number | undefined
            'page[number]'?: number | undefined
          }
        }
        output: { data?: RoomSession[] | undefined; meta?: PaginationMeta | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/short_codes': {
      $get:
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[messaging_profile_id]'?: string | undefined
              }
            }
            output: { data?: ShortCode[] | undefined; meta?: PaginationMeta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[messaging_profile_id]'?: string | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/short_codes/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: ShortCode | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Errors; outputFormat: 'json'; status: 200 }
      $patch:
        | {
            input: { param: { id: string } } & { json: UpdateShortCodeRequest }
            output: { data?: ShortCode | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: UpdateShortCodeRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sim_card_group_actions': {
      $get:
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[sim_card_group_id]'?: string | undefined
                'filter[status]'?: 'in-progress' | 'completed' | 'failed' | undefined
                'filter[type]'?:
                  | 'set_private_wireless_gateway'
                  | 'remove_private_wireless_gateway'
                  | undefined
              }
            }
            output: { data?: SIMCardGroupAction[] | undefined; meta?: PaginationMeta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[sim_card_group_id]'?: string | undefined
                'filter[status]'?: 'in-progress' | 'completed' | 'failed' | undefined
                'filter[type]'?:
                  | 'set_private_wireless_gateway'
                  | 'remove_private_wireless_gateway'
                  | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sim_card_group_actions/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: SIMCardGroupAction | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Errors; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/sim_card_groups': {
      $get:
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[name]'?: string | undefined
              }
            }
            output: { data?: SIMCardGroup[] | undefined; meta?: PaginationMeta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[name]'?: string | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: SIMCardGroupCreate }
            output: { data?: SIMCardGroup | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: SIMCardGroupCreate }; output: Errors; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/sim_card_groups/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: { data?: SIMCardGroup | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Errors; outputFormat: 'json'; status: 200 }
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: SIMCardGroup | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Errors; outputFormat: 'json'; status: 200 }
      $patch:
        | {
            input: { param: { id: string } } & { json: SIMCardGroupPatch }
            output: { data?: SIMCardGroup | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: SIMCardGroupPatch }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sim_card_groups/:id/actions/remove_private_wireless_gateway': {
      $post:
        | {
            input: { param: { id: string } }
            output: { data?: SIMCardGroupAction | undefined }
            outputFormat: 'json'
            status: 202
          }
        | { input: { param: { id: string } }; output: Errors; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/sim_card_groups/:id/actions/set_private_wireless_gateway': {
      $post:
        | {
            input: { param: { id: string } } & { json: { private_wireless_gateway_id: string } }
            output: { data?: SIMCardGroupAction | undefined }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } } & { json: { private_wireless_gateway_id: string } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sim_card_order_preview': {
      $post:
        | {
            input: { json: { address_id: string; quantity: number } }
            output: { data?: SIMCardOrderPreview | undefined }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: { address_id: string; quantity: number } }
            output: Errors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/sim_card_orders': {
      $get:
        | {
            input: {
              query: {
                'filter[created_at]'?: string | undefined
                'filter[updated_at]'?: string | undefined
                'filter[quantity]'?: number | undefined
                'filter[cost.amount]'?: string | undefined
                'filter[cost.currency]'?: string | undefined
                'filter[address.id]'?: string | undefined
                'filter[address.street_address]'?: string | undefined
                'filter[address.extended_address]'?: string | undefined
                'filter[address.locality]'?: string | undefined
                'filter[address.administrative_area]'?: string | undefined
                'filter[address.country_code]'?: string | undefined
                'filter[address.postal_code]'?: string | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
              }
            }
            output: { data?: SIMCardOrder[] | undefined; meta?: PaginationMeta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'filter[created_at]'?: string | undefined
                'filter[updated_at]'?: string | undefined
                'filter[quantity]'?: number | undefined
                'filter[cost.amount]'?: string | undefined
                'filter[cost.currency]'?: string | undefined
                'filter[address.id]'?: string | undefined
                'filter[address.street_address]'?: string | undefined
                'filter[address.extended_address]'?: string | undefined
                'filter[address.locality]'?: string | undefined
                'filter[address.administrative_area]'?: string | undefined
                'filter[address.country_code]'?: string | undefined
                'filter[address.postal_code]'?: string | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: SimCardOrderCreate }
            output: { data?: SIMCardOrder | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: SimCardOrderCreate }; output: Errors; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/sim_card_orders/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: SIMCardOrder | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { id: string } }; output: Errors; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/sim_cards': {
      $get:
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                include_sim_card_group?: boolean | undefined
                'filter[sim_card_group_id]'?: string | undefined
                'filter[tags]'?: string[] | undefined
                'filter[iccid]'?: string | undefined
              }
            }
            output: { data?: SimpleSIMCard[] | undefined; meta?: PaginationMeta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                include_sim_card_group?: boolean | undefined
                'filter[sim_card_group_id]'?: string | undefined
                'filter[tags]'?: string[] | undefined
                'filter[iccid]'?: string | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sim_cards/actions/validate_registration_codes': {
      $post:
        | {
            input: { json: { registration_codes?: string[] | undefined } }
            output: SIMCardRegistrationCodeValidations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { registration_codes?: string[] | undefined } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sim_cards/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: { data?: SIMCard | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Errors; outputFormat: 'json'; status: 200 }
      $get:
        | {
            input: { param: { id: string } } & {
              query: { include_sim_card_group?: boolean | undefined }
            }
            output: { data?: SIMCard | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { include_sim_card_group?: boolean | undefined }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: SIMCard }
            output: { data?: SIMCard | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: SIMCard }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sim_cards/:id/actions/disable': {
      $post:
        | {
            input: { param: { id: string } }
            output: { data?: SimpleSIMCard | undefined }
            outputFormat: 'json'
            status: 202
          }
        | { input: { param: { id: string } }; output: Errors; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/sim_cards/:id/actions/enable': {
      $post:
        | {
            input: { param: { id: string } }
            output: { data?: SimpleSIMCard | undefined }
            outputFormat: 'json'
            status: 202
          }
        | { input: { param: { id: string } }; output: Errors; outputFormat: 'json'; status: 422 }
        | { input: { param: { id: string } }; output: Errors; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/sim_cards/:id/actions/set_standby': {
      $post:
        | {
            input: { param: { id: string } }
            output: { data?: SimpleSIMCard | undefined }
            outputFormat: 'json'
            status: 202
          }
        | { input: { param: { id: string } }; output: Errors; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/sim_cards/:sim_card_id/network_preferences': {
      $delete:
        | {
            input: { param: { sim_card_id: string } }
            output: { data?: SIMCardNetworkPreferenceWithOTAUpdates | undefined }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { sim_card_id: string } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { sim_card_id: string } } & {
              query: { include_ota_updates?: boolean | undefined }
            }
            output: { data?: SIMCardNetworkPreferenceWithOTAUpdates | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sim_card_id: string } } & {
              query: { include_ota_updates?: boolean | undefined }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { sim_card_id: string } } & {
              json: {
                mobile_operator_networks_preferences?:
                  | MobileOperatorNetworkPreferencesRequest[]
                  | undefined
              }
            }
            output: { data?: SIMCardNetworkPreferenceWithOTAUpdates | undefined }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { sim_card_id: string } } & {
              json: {
                mobile_operator_networks_preferences?:
                  | MobileOperatorNetworkPreferencesRequest[]
                  | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sim_cards/:sim_card_id/public_ip': {
      $delete:
        | {
            input: { param: { sim_card_id: string } }
            output: { data?: SIMCardPublicIP | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sim_card_id: string } }
            output: { data?: SIMCardPublicIP | undefined }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { sim_card_id: string } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { sim_card_id: string } }
            output: { data?: SIMCardPublicIP | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sim_card_id: string } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { sim_card_id: string } }
            output: { data?: SIMCardPublicIP | undefined }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { sim_card_id: string } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sim_cards/:sim_card_id/wireless_connectivity_logs': {
      $get:
        | {
            input: { param: { sim_card_id: string } } & {
              query: { 'page[number]'?: number | undefined; 'page[size]'?: number | undefined }
            }
            output: {
              data?: WirelessConnectivityLog[] | undefined
              meta?: PaginationMeta | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sim_card_id: string } } & {
              query: { 'page[number]'?: number | undefined; 'page[size]'?: number | undefined }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sub_number_orders': {
      $get:
        | {
            input: {
              query: {
                'filter[user_id]'?: string | undefined
                'filter[order_request_id]'?: string | undefined
                'filter[country_code]'?: string | undefined
                'filter[phone_number_type]'?: string | undefined
                'filter[phone_numbers_count]'?: number | undefined
              }
            }
            output: { data?: SubNumberOrder[] | undefined; meta?: PaginationMeta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'filter[user_id]'?: string | undefined
                'filter[order_request_id]'?: string | undefined
                'filter[country_code]'?: string | undefined
                'filter[phone_number_type]'?: string | undefined
                'filter[phone_numbers_count]'?: number | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sub_number_orders/:sub_number_order_id': {
      $get:
        | {
            input: { param: { sub_number_order_id: string } } & {
              query: { 'filter[include_phone_numbers]'?: boolean | undefined }
            }
            output: { data?: SubNumberOrder | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sub_number_order_id: string } } & {
              query: { 'filter[include_phone_numbers]'?: boolean | undefined }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { sub_number_order_id: string } } & {
              json: UpdateSubNumberOrderRequest
            }
            output: { data?: SubNumberOrder | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sub_number_order_id: string } } & {
              json: UpdateSubNumberOrderRequest
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/telephony_credentials': {
      $get:
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[tag]'?: string | undefined
                'filter[name]'?: string | undefined
                'filter[status]'?: string | undefined
                'filter[resource_id]'?: string | undefined
                'filter[sip_username]'?: string | undefined
              }
            }
            output: { data?: TelephonyCredential[] | undefined; meta?: PaginationMeta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[tag]'?: string | undefined
                'filter[name]'?: string | undefined
                'filter[status]'?: string | undefined
                'filter[resource_id]'?: string | undefined
                'filter[sip_username]'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[tag]'?: string | undefined
                'filter[name]'?: string | undefined
                'filter[status]'?: string | undefined
                'filter[resource_id]'?: string | undefined
                'filter[sip_username]'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[tag]'?: string | undefined
                'filter[name]'?: string | undefined
                'filter[status]'?: string | undefined
                'filter[resource_id]'?: string | undefined
                'filter[sip_username]'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { json: TelephonyCredentialCreateRequest }
            output: { data?: TelephonyCredential | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TelephonyCredentialCreateRequest }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/telephony_credentials/tags': {
      $get:
        | {
            input: {
              query: { 'page[number]'?: number | undefined; 'page[size]'?: number | undefined }
            }
            output: {
              data?: { amount?: number | undefined; tag?: string | undefined }[] | undefined
              meta?: PaginationMeta | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { 'page[number]'?: number | undefined; 'page[size]'?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: { 'page[number]'?: number | undefined; 'page[size]'?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: { 'page[number]'?: number | undefined; 'page[size]'?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/telephony_credentials/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: { data?: TelephonyCredential | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: TelephonyCredential | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
      $patch:
        | {
            input: { param: { id: string } } & { json: TelephonyCredentialUpdateRequest }
            output: { data?: TelephonyCredential | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: TelephonyCredentialUpdateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: TelephonyCredentialUpdateRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: TelephonyCredentialUpdateRequest }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/telephony_credentials/:id/actions/:action': {
      $post:
        | {
            input: { param: { id: string; action: 'activate' | 'deactivate' } }
            output: { data?: TelephonyCredential | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; action: 'activate' | 'deactivate' } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string; action: 'activate' | 'deactivate' } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string; action: 'activate' | 'deactivate' } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/telephony_credentials/:id/token': {
      $post:
        | { input: { param: { id: string } }; output: string; outputFormat: 'text'; status: 201 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/texml_applications': {
      $get:
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[friendly_name][contains]'?: string | undefined
                'filter[outbound_voice_profile_id]'?: string | undefined
                sort?: 'created_at' | 'connection_name' | 'active' | undefined
              }
            }
            output: { data?: TexmlApplication[] | undefined; meta?: PaginationMeta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[friendly_name][contains]'?: string | undefined
                'filter[outbound_voice_profile_id]'?: string | undefined
                sort?: 'created_at' | 'connection_name' | 'active' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[friendly_name][contains]'?: string | undefined
                'filter[outbound_voice_profile_id]'?: string | undefined
                sort?: 'created_at' | 'connection_name' | 'active' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                'filter[friendly_name][contains]'?: string | undefined
                'filter[outbound_voice_profile_id]'?: string | undefined
                sort?: 'created_at' | 'connection_name' | 'active' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { json: CreateTexmlApplicationRequest }
            output: { data?: TexmlApplication | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateTexmlApplicationRequest }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/texml_applications/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: { data?: TexmlApplication | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: TexmlApplication | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
      $patch:
        | {
            input: { param: { id: string } } & { json: UpdateTexmlApplicationRequest }
            output: { data?: TexmlApplication | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: UpdateTexmlApplicationRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: UpdateTexmlApplicationRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: UpdateTexmlApplicationRequest }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/verifications/by_phone_number/:phone_number': {
      $get:
        | {
            input: { param: { phone_number: string } }
            output: ListVerificationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { phone_number: string } }
            output: Errors
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/verifications/by_phone_number/:phone_number/actions/verify': {
      $post:
        | {
            input: { param: { phone_number: string } } & { json: VerifyVerificationCodeRequest }
            output: VerifyVerificationCodeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { phone_number: string } } & { json: VerifyVerificationCodeRequest }
            output: Errors
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/verifications/call': {
      $post:
        | {
            input: { json: CreateVerificationRequestCall }
            output: CreateVerificationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateVerificationRequestCall }
            output: Errors
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/verifications/flashcall': {
      $post:
        | {
            input: { json: CreateVerificationRequestFlashcall }
            output: CreateVerificationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateVerificationRequestFlashcall }
            output: Errors
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/verifications/psd2': {
      $post:
        | {
            input: { json: CreateVerificationRequestPSD2 }
            output: CreateVerificationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateVerificationRequestPSD2 }
            output: Errors
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/verifications/sms': {
      $post:
        | {
            input: { json: CreateVerificationRequestSMS }
            output: CreateVerificationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateVerificationRequestSMS }
            output: Errors
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/verifications/whatsapp': {
      $post:
        | {
            input: { json: CreateVerificationRequestWhatsapp }
            output: CreateVerificationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateVerificationRequestWhatsapp }
            output: Errors
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/verifications/:verification_id': {
      $get:
        | {
            input: { param: { verification_id: string } }
            output: RetrieveVerificationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { verification_id: string } }
            output: Errors
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/verify_profiles': {
      $get:
        | {
            input: {
              query: {
                'filter[name]'?: string | undefined
                'page[size]'?: number | undefined
                'page[number]'?: number | undefined
              }
            }
            output: ListVerifyProfilesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'filter[name]'?: string | undefined
                'page[size]'?: number | undefined
                'page[number]'?: number | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              json: {
                call?: CreateVerifyProfileCallRequest | undefined
                flashcall?: CreateVerifyProfileFlashcallRequest | undefined
                language?: string | undefined
                name: string
                psd2?: CreateVerifyProfilePSD2Request | undefined
                sms?: CreateVerifyProfileSMSRequest | undefined
                webhook_failover_url?: string | undefined
                webhook_url?: string | undefined
                whatsapp?: CreateVerifyProfileWhatsappRequest | undefined
              }
            }
            output: VerifyProfileResponseDataWrapper
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                call?: CreateVerifyProfileCallRequest | undefined
                flashcall?: CreateVerifyProfileFlashcallRequest | undefined
                language?: string | undefined
                name: string
                psd2?: CreateVerifyProfilePSD2Request | undefined
                sms?: CreateVerifyProfileSMSRequest | undefined
                webhook_failover_url?: string | undefined
                webhook_url?: string | undefined
                whatsapp?: CreateVerifyProfileWhatsappRequest | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/verify_profiles/:verify_profile_id': {
      $delete:
        | {
            input: { param: { verify_profile_id: string } }
            output: VerifyProfileResponseDataWrapper
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { verify_profile_id: string } }
            output: Errors
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: { param: { verify_profile_id: string } }
            output: VerifyProfileResponseDataWrapper
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { verify_profile_id: string } }
            output: Errors
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: { param: { verify_profile_id: string } } & {
              json: {
                call?: UpdateVerifyProfileCallRequest | undefined
                flashcall?: UpdateVerifyProfileFlashcallRequest | undefined
                language?: string | undefined
                name?: string | undefined
                psd2?: UpdateVerifyProfilePSD2Request | undefined
                sms?: UpdateVerifyProfileSMSRequest | undefined
                webhook_failover_url?: string | undefined
                webhook_url?: string | undefined
                whatsapp?: UpdateVerifyProfileWhatsappRequest | undefined
              }
            }
            output: VerifyProfileResponseDataWrapper
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { verify_profile_id: string } } & {
              json: {
                call?: UpdateVerifyProfileCallRequest | undefined
                flashcall?: UpdateVerifyProfileFlashcallRequest | undefined
                language?: string | undefined
                name?: string | undefined
                psd2?: UpdateVerifyProfilePSD2Request | undefined
                sms?: UpdateVerifyProfileSMSRequest | undefined
                webhook_failover_url?: string | undefined
                webhook_url?: string | undefined
                whatsapp?: UpdateVerifyProfileWhatsappRequest | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/webhook_deliveries': {
      $get:
        | {
            input: {
              query: {
                'filter[status][eq]'?: 'delivered' | 'failed' | undefined
                'filter[webhook][contains]'?: string | undefined
                'filter[attempts][contains]'?: string | undefined
                'filter[started_at][gte]'?: string | undefined
                'filter[started_at][lte]'?: string | undefined
                'filter[finished_at][gte]'?: string | undefined
                'filter[finished_at][lte]'?: string | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
              }
            }
            output: {
              data?: WebhookDelivery[] | undefined
              meta?: PaginationMetaSimple | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'filter[status][eq]'?: 'delivered' | 'failed' | undefined
                'filter[webhook][contains]'?: string | undefined
                'filter[attempts][contains]'?: string | undefined
                'filter[started_at][gte]'?: string | undefined
                'filter[started_at][lte]'?: string | undefined
                'filter[finished_at][gte]'?: string | undefined
                'filter[finished_at][lte]'?: string | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                'filter[status][eq]'?: 'delivered' | 'failed' | undefined
                'filter[webhook][contains]'?: string | undefined
                'filter[attempts][contains]'?: string | undefined
                'filter[started_at][gte]'?: string | undefined
                'filter[started_at][lte]'?: string | undefined
                'filter[finished_at][gte]'?: string | undefined
                'filter[finished_at][lte]'?: string | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/webhook_deliveries/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: WebhookDelivery | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/whatsapp_contacts': {
      $post:
        | {
            input: { json: CheckContactRequestBody }
            output: { data?: CheckContact[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CheckContactRequestBody }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/whatsapp_detail_record_reports': {
      $get: {
        input: { query: { 'page[number]'?: number | undefined; 'page[size]'?: number | undefined } }
        output: WhatsAppGetAllDetailReportResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WhatsAppReportsReq }
        output: WhatsAppDetailReportResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/whatsapp_detail_record_reports/:id': {
      $delete: {
        input: { param: { id: string } }
        output: WhatsAppDetailReportResponse
        outputFormat: 'json'
        status: 200
      }
      $get:
        | {
            input: { param: { id: string } }
            output: WhatsAppDetailReportResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/whatsapp_media': {
      $post:
        | {
            input: { form: MediaRequestBody }
            output: { data?: UploadMedia[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { form: MediaRequestBody }; output: Errors; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/whatsapp_media/:whatsapp_user_id/:media_id': {
      $delete:
        | {
            input: { param: { whatsapp_user_id: string; media_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { whatsapp_user_id: string; media_id: string } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { whatsapp_user_id: string; media_id: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { whatsapp_user_id: string; media_id: string } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/whatsapp_messages': {
      $post:
        | {
            input: { json: CreateWhatsAppMessageRequest }
            output: { data?: Message | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateWhatsAppMessageRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/whatsapp_messages/:message_id': {
      $patch:
        | {
            input: { param: { message_id: string } } & { json: MarkMessageAsReadRequestBody }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { message_id: string } } & { json: MarkMessageAsReadRequestBody }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/whatsapp_usage_aggregations': {
      $get: {
        input: { query: { start_date?: string | undefined; end_date?: string | undefined } }
        output: WhatsAppUsageAggregationsResponseContainer
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/whatsapp_users/:whatsapp_user_id': {
      $get:
        | {
            input: { param: { whatsapp_user_id: string } }
            output: { data?: WhatsAppUser | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { whatsapp_user_id: string } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { whatsapp_user_id: string } } & { json: UpdateUserRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { whatsapp_user_id: string } } & { json: UpdateUserRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/wireless/detail_records_reports': {
      $get:
        | {
            input: {
              query: { 'page[number]'?: number | undefined; 'page[size]'?: number | undefined }
            }
            output: { data?: WdrReport[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { 'page[number]'?: number | undefined; 'page[size]'?: number | undefined }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: WdrReportRequest }
            output: { data?: WdrReport | undefined }
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: WdrReportRequest }; output: Errors; outputFormat: 'json'; status: 422 }
        | { input: { json: WdrReportRequest }; output: Errors; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/wireless/detail_records_reports/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: { data?: WdrReport | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { id: string } }; output: Errors; outputFormat: 'json'; status: 200 }
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: WdrReport | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { id: string } }; output: Errors; outputFormat: 'json'; status: 200 }
    }
  },
  '/'
>
export default routes
