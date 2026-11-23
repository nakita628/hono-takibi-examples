type AccountEnumStatus = 'active' | 'suspended' | 'closed'
type AccountEnumType = 'Trial' | 'Full'
type ApiV2010Account = {
  auth_token?: (string | null) | undefined
  date_created?: (string | null) | undefined
  date_updated?: (string | null) | undefined
  friendly_name?: (string | null) | undefined
  owner_account_sid?: (string | null) | undefined
  sid?: (string | null) | undefined
  status?: AccountEnumStatus | undefined
  subresource_uris?: ({ [x: string]: unknown } | null) | undefined
  type?: AccountEnumType | undefined
  uri?: (string | null) | undefined
}
type ApiV2010AccountAddress = {
  account_sid?: (string | null) | undefined
  city?: (string | null) | undefined
  customer_name?: (string | null) | undefined
  date_created?: (string | null) | undefined
  date_updated?: (string | null) | undefined
  friendly_name?: (string | null) | undefined
  iso_country?: (string | null) | undefined
  postal_code?: (string | null) | undefined
  region?: (string | null) | undefined
  sid?: (string | null) | undefined
  street?: (string | null) | undefined
  uri?: (string | null) | undefined
  emergency_enabled?: (boolean | null) | undefined
  validated?: (boolean | null) | undefined
  verified?: (boolean | null) | undefined
  street_secondary?: (string | null) | undefined
}
type ApiV2010AccountApplication = {
  account_sid?: (string | null) | undefined
  api_version?: (string | null) | undefined
  date_created?: (string | null) | undefined
  date_updated?: (string | null) | undefined
  friendly_name?: (string | null) | undefined
  message_status_callback?: (string | null) | undefined
  sid?: (string | null) | undefined
  sms_fallback_method?: 'GET' | 'POST' | undefined
  sms_fallback_url?: (string | null) | undefined
  sms_method?: 'GET' | 'POST' | undefined
  sms_status_callback?: (string | null) | undefined
  sms_url?: (string | null) | undefined
  status_callback?: (string | null) | undefined
  status_callback_method?: 'GET' | 'POST' | undefined
  uri?: (string | null) | undefined
  voice_caller_id_lookup?: (boolean | null) | undefined
  voice_fallback_method?: 'GET' | 'POST' | undefined
  voice_fallback_url?: (string | null) | undefined
  voice_method?: 'GET' | 'POST' | undefined
  voice_url?: (string | null) | undefined
  public_application_connect_enabled?: (boolean | null) | undefined
}
type AuthorizedConnectAppEnumPermission = 'get-all' | 'post-all'
type ApiV2010AccountAuthorizedConnectApp = {
  account_sid?: (string | null) | undefined
  connect_app_company_name?: (string | null) | undefined
  connect_app_description?: (string | null) | undefined
  connect_app_friendly_name?: (string | null) | undefined
  connect_app_homepage_url?: (string | null) | undefined
  connect_app_sid?: (string | null) | undefined
  permissions?: (AuthorizedConnectAppEnumPermission[] | null) | undefined
  uri?: (string | null) | undefined
}
type ApiV2010AccountAvailablePhoneNumberCountry = {
  country_code?: (string | null) | undefined
  country?: (string | null) | undefined
  uri?: (string | null) | undefined
  beta?: (boolean | null) | undefined
  subresource_uris?: ({ [x: string]: unknown } | null) | undefined
}
type ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberLocal = {
  friendly_name?: (string | null) | undefined
  phone_number?: (string | null) | undefined
  lata?: (string | null) | undefined
  locality?: (string | null) | undefined
  rate_center?: (string | null) | undefined
  latitude?: (number | null) | undefined
  longitude?: (number | null) | undefined
  region?: (string | null) | undefined
  postal_code?: (string | null) | undefined
  iso_country?: (string | null) | undefined
  address_requirements?: (string | null) | undefined
  beta?: (boolean | null) | undefined
  capabilities?:
    | ({
        mms?: boolean | undefined
        sms?: boolean | undefined
        voice?: boolean | undefined
        fax?: boolean | undefined
      } | null)
    | undefined
}
type ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberMachineToMachine = {
  friendly_name?: (string | null) | undefined
  phone_number?: (string | null) | undefined
  lata?: (string | null) | undefined
  locality?: (string | null) | undefined
  rate_center?: (string | null) | undefined
  latitude?: (number | null) | undefined
  longitude?: (number | null) | undefined
  region?: (string | null) | undefined
  postal_code?: (string | null) | undefined
  iso_country?: (string | null) | undefined
  address_requirements?: (string | null) | undefined
  beta?: (boolean | null) | undefined
  capabilities?:
    | ({
        mms?: boolean | undefined
        sms?: boolean | undefined
        voice?: boolean | undefined
        fax?: boolean | undefined
      } | null)
    | undefined
}
type ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberMobile = {
  friendly_name?: (string | null) | undefined
  phone_number?: (string | null) | undefined
  lata?: (string | null) | undefined
  locality?: (string | null) | undefined
  rate_center?: (string | null) | undefined
  latitude?: (number | null) | undefined
  longitude?: (number | null) | undefined
  region?: (string | null) | undefined
  postal_code?: (string | null) | undefined
  iso_country?: (string | null) | undefined
  address_requirements?: (string | null) | undefined
  beta?: (boolean | null) | undefined
  capabilities?:
    | ({
        mms?: boolean | undefined
        sms?: boolean | undefined
        voice?: boolean | undefined
        fax?: boolean | undefined
      } | null)
    | undefined
}
type ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNational = {
  friendly_name?: (string | null) | undefined
  phone_number?: (string | null) | undefined
  lata?: (string | null) | undefined
  locality?: (string | null) | undefined
  rate_center?: (string | null) | undefined
  latitude?: (number | null) | undefined
  longitude?: (number | null) | undefined
  region?: (string | null) | undefined
  postal_code?: (string | null) | undefined
  iso_country?: (string | null) | undefined
  address_requirements?: (string | null) | undefined
  beta?: (boolean | null) | undefined
  capabilities?:
    | ({
        mms?: boolean | undefined
        sms?: boolean | undefined
        voice?: boolean | undefined
        fax?: boolean | undefined
      } | null)
    | undefined
}
type ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberSharedCost = {
  friendly_name?: (string | null) | undefined
  phone_number?: (string | null) | undefined
  lata?: (string | null) | undefined
  locality?: (string | null) | undefined
  rate_center?: (string | null) | undefined
  latitude?: (number | null) | undefined
  longitude?: (number | null) | undefined
  region?: (string | null) | undefined
  postal_code?: (string | null) | undefined
  iso_country?: (string | null) | undefined
  address_requirements?: (string | null) | undefined
  beta?: (boolean | null) | undefined
  capabilities?:
    | ({
        mms?: boolean | undefined
        sms?: boolean | undefined
        voice?: boolean | undefined
        fax?: boolean | undefined
      } | null)
    | undefined
}
type ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberTollFree = {
  friendly_name?: (string | null) | undefined
  phone_number?: (string | null) | undefined
  lata?: (string | null) | undefined
  locality?: (string | null) | undefined
  rate_center?: (string | null) | undefined
  latitude?: (number | null) | undefined
  longitude?: (number | null) | undefined
  region?: (string | null) | undefined
  postal_code?: (string | null) | undefined
  iso_country?: (string | null) | undefined
  address_requirements?: (string | null) | undefined
  beta?: (boolean | null) | undefined
  capabilities?:
    | ({
        mms?: boolean | undefined
        sms?: boolean | undefined
        voice?: boolean | undefined
        fax?: boolean | undefined
      } | null)
    | undefined
}
type ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberVoip = {
  friendly_name?: (string | null) | undefined
  phone_number?: (string | null) | undefined
  lata?: (string | null) | undefined
  locality?: (string | null) | undefined
  rate_center?: (string | null) | undefined
  latitude?: (number | null) | undefined
  longitude?: (number | null) | undefined
  region?: (string | null) | undefined
  postal_code?: (string | null) | undefined
  iso_country?: (string | null) | undefined
  address_requirements?: (string | null) | undefined
  beta?: (boolean | null) | undefined
  capabilities?:
    | ({
        mms?: boolean | undefined
        sms?: boolean | undefined
        voice?: boolean | undefined
        fax?: boolean | undefined
      } | null)
    | undefined
}
type ApiV2010AccountBalance = {
  account_sid?: (string | null) | undefined
  balance?: (string | null) | undefined
  currency?: (string | null) | undefined
}
type CallEnumStatus =
  | 'queued'
  | 'ringing'
  | 'in-progress'
  | 'completed'
  | 'busy'
  | 'failed'
  | 'no-answer'
  | 'canceled'
type ApiV2010AccountCall = {
  sid?: (string | null) | undefined
  date_created?: (string | null) | undefined
  date_updated?: (string | null) | undefined
  parent_call_sid?: (string | null) | undefined
  account_sid?: (string | null) | undefined
  to?: (string | null) | undefined
  to_formatted?: (string | null) | undefined
  from?: (string | null) | undefined
  from_formatted?: (string | null) | undefined
  phone_number_sid?: (string | null) | undefined
  status?: CallEnumStatus | undefined
  start_time?: (string | null) | undefined
  end_time?: (string | null) | undefined
  duration?: (string | null) | undefined
  price?: (string | null) | undefined
  price_unit?: (string | null) | undefined
  direction?: (string | null) | undefined
  answered_by?: (string | null) | undefined
  api_version?: (string | null) | undefined
  forwarded_from?: (string | null) | undefined
  group_sid?: (string | null) | undefined
  caller_name?: (string | null) | undefined
  queue_time?: (string | null) | undefined
  stir_verstat?: (string | null) | undefined
  trunk_sid?: (string | null) | undefined
  uri?: (string | null) | undefined
  subresource_uris?: ({ [x: string]: unknown } | null) | undefined
}
type CallEnumUpdateStatus = 'canceled' | 'completed'
type ApiV2010AccountCallCallEvent = {
  request?: ({ [x: string]: unknown } | null) | undefined
  response?: ({ [x: string]: unknown } | null) | undefined
}
type ApiV2010AccountCallCallNotificationInstance = {
  account_sid?: (string | null) | undefined
  api_version?: (string | null) | undefined
  call_sid?: (string | null) | undefined
  date_created?: (string | null) | undefined
  date_updated?: (string | null) | undefined
  error_code?: (string | null) | undefined
  log?: (string | null) | undefined
  message_date?: (string | null) | undefined
  message_text?: (string | null) | undefined
  more_info?: (string | null) | undefined
  request_method?: 'GET' | 'POST' | undefined
  request_url?: (string | null) | undefined
  request_variables?: (string | null) | undefined
  response_body?: (string | null) | undefined
  response_headers?: (string | null) | undefined
  sid?: (string | null) | undefined
  uri?: (string | null) | undefined
}
type ApiV2010AccountCallCallNotification = {
  account_sid?: (string | null) | undefined
  api_version?: (string | null) | undefined
  call_sid?: (string | null) | undefined
  date_created?: (string | null) | undefined
  date_updated?: (string | null) | undefined
  error_code?: (string | null) | undefined
  log?: (string | null) | undefined
  message_date?: (string | null) | undefined
  message_text?: (string | null) | undefined
  more_info?: (string | null) | undefined
  request_method?: 'GET' | 'POST' | undefined
  request_url?: (string | null) | undefined
  sid?: (string | null) | undefined
  uri?: (string | null) | undefined
}
type CallRecordingEnumStatus =
  | 'in-progress'
  | 'paused'
  | 'stopped'
  | 'processing'
  | 'completed'
  | 'absent'
type CallRecordingEnumSource =
  | 'DialVerb'
  | 'Conference'
  | 'OutboundAPI'
  | 'Trunking'
  | 'RecordVerb'
  | 'StartCallRecordingAPI'
  | 'StartConferenceRecordingAPI'
type ApiV2010AccountCallCallRecording = {
  account_sid?: (string | null) | undefined
  api_version?: (string | null) | undefined
  call_sid?: (string | null) | undefined
  conference_sid?: (string | null) | undefined
  date_created?: (string | null) | undefined
  date_updated?: (string | null) | undefined
  start_time?: (string | null) | undefined
  duration?: (string | null) | undefined
  sid?: (string | null) | undefined
  price?: (number | null) | undefined
  uri?: (string | null) | undefined
  encryption_details?: ({ [x: string]: unknown } | null) | undefined
  price_unit?: (string | null) | undefined
  status?: CallRecordingEnumStatus | undefined
  channels?: number | undefined
  source?: CallRecordingEnumSource | undefined
  error_code?: (number | null) | undefined
  track?: (string | null) | undefined
}
type ConferenceEnumStatus = 'init' | 'in-progress' | 'completed'
type ConferenceEnumReasonConferenceEnded =
  | 'conference-ended-via-api'
  | 'participant-with-end-conference-on-exit-left'
  | 'participant-with-end-conference-on-exit-kicked'
  | 'last-participant-kicked'
  | 'last-participant-left'
type ApiV2010AccountConference = {
  account_sid?: (string | null) | undefined
  date_created?: (string | null) | undefined
  date_updated?: (string | null) | undefined
  api_version?: (string | null) | undefined
  friendly_name?: (string | null) | undefined
  region?: (string | null) | undefined
  sid?: (string | null) | undefined
  status?: ConferenceEnumStatus | undefined
  uri?: (string | null) | undefined
  subresource_uris?: ({ [x: string]: unknown } | null) | undefined
  reason_conference_ended?: ConferenceEnumReasonConferenceEnded | undefined
  call_sid_ending_conference?: (string | null) | undefined
}
type ConferenceEnumUpdateStatus = 'completed'
type ConferenceRecordingEnumStatus =
  | 'in-progress'
  | 'paused'
  | 'stopped'
  | 'processing'
  | 'completed'
  | 'absent'
type ConferenceRecordingEnumSource =
  | 'DialVerb'
  | 'Conference'
  | 'OutboundAPI'
  | 'Trunking'
  | 'RecordVerb'
  | 'StartCallRecordingAPI'
  | 'StartConferenceRecordingAPI'
type ApiV2010AccountConferenceConferenceRecording = {
  account_sid?: (string | null) | undefined
  api_version?: (string | null) | undefined
  call_sid?: (string | null) | undefined
  conference_sid?: (string | null) | undefined
  date_created?: (string | null) | undefined
  date_updated?: (string | null) | undefined
  start_time?: (string | null) | undefined
  duration?: (string | null) | undefined
  sid?: (string | null) | undefined
  price?: (string | null) | undefined
  price_unit?: (string | null) | undefined
  status?: ConferenceRecordingEnumStatus | undefined
  channels?: number | undefined
  source?: ConferenceRecordingEnumSource | undefined
  error_code?: (number | null) | undefined
  encryption_details?: ({ [x: string]: unknown } | null) | undefined
  uri?: (string | null) | undefined
}
type ConnectAppEnumPermission = 'get-all' | 'post-all'
type ApiV2010AccountConnectApp = {
  account_sid?: (string | null) | undefined
  authorize_redirect_url?: (string | null) | undefined
  company_name?: (string | null) | undefined
  deauthorize_callback_method?: 'GET' | 'POST' | undefined
  deauthorize_callback_url?: (string | null) | undefined
  description?: (string | null) | undefined
  friendly_name?: (string | null) | undefined
  homepage_url?: (string | null) | undefined
  permissions?: (ConnectAppEnumPermission[] | null) | undefined
  sid?: (string | null) | undefined
  uri?: (string | null) | undefined
}
type DependentPhoneNumberEnumAddressRequirement = 'none' | 'any' | 'local' | 'foreign'
type DependentPhoneNumberEnumEmergencyStatus = 'Active' | 'Inactive'
type ApiV2010AccountAddressDependentPhoneNumber = {
  sid?: (string | null) | undefined
  account_sid?: (string | null) | undefined
  friendly_name?: (string | null) | undefined
  phone_number?: (string | null) | undefined
  voice_url?: (string | null) | undefined
  voice_method?: 'GET' | 'POST' | undefined
  voice_fallback_method?: 'GET' | 'POST' | undefined
  voice_fallback_url?: (string | null) | undefined
  voice_caller_id_lookup?: (boolean | null) | undefined
  date_created?: (string | null) | undefined
  date_updated?: (string | null) | undefined
  sms_fallback_method?: 'GET' | 'POST' | undefined
  sms_fallback_url?: (string | null) | undefined
  sms_method?: 'GET' | 'POST' | undefined
  sms_url?: (string | null) | undefined
  address_requirements?: DependentPhoneNumberEnumAddressRequirement | undefined
  capabilities?: ({ [x: string]: unknown } | null) | undefined
  status_callback?: (string | null) | undefined
  status_callback_method?: 'GET' | 'POST' | undefined
  api_version?: (string | null) | undefined
  sms_application_sid?: (string | null) | undefined
  voice_application_sid?: (string | null) | undefined
  trunk_sid?: (string | null) | undefined
  emergency_status?: DependentPhoneNumberEnumEmergencyStatus | undefined
  emergency_address_sid?: (string | null) | undefined
  uri?: (string | null) | undefined
}
type IncomingPhoneNumberEnumEmergencyStatus = 'Active' | 'Inactive'
type IncomingPhoneNumberEnumVoiceReceiveMode = 'voice' | 'fax'
type IncomingPhoneNumberEnumAddressRequirement = 'none' | 'any' | 'local' | 'foreign'
type IncomingPhoneNumberEnumEmergencyAddressStatus =
  | 'registered'
  | 'unregistered'
  | 'pending-registration'
  | 'registration-failure'
  | 'pending-unregistration'
  | 'unregistration-failure'
type ApiV2010AccountIncomingPhoneNumber = {
  account_sid?: (string | null) | undefined
  address_sid?: (string | null) | undefined
  address_requirements?: IncomingPhoneNumberEnumAddressRequirement | undefined
  api_version?: (string | null) | undefined
  beta?: (boolean | null) | undefined
  capabilities?:
    | ({
        mms?: boolean | undefined
        sms?: boolean | undefined
        voice?: boolean | undefined
        fax?: boolean | undefined
      } | null)
    | undefined
  date_created?: (string | null) | undefined
  date_updated?: (string | null) | undefined
  friendly_name?: (string | null) | undefined
  identity_sid?: (string | null) | undefined
  phone_number?: (string | null) | undefined
  origin?: (string | null) | undefined
  sid?: (string | null) | undefined
  sms_application_sid?: (string | null) | undefined
  sms_fallback_method?: 'GET' | 'POST' | undefined
  sms_fallback_url?: (string | null) | undefined
  sms_method?: 'GET' | 'POST' | undefined
  sms_url?: (string | null) | undefined
  status_callback?: (string | null) | undefined
  status_callback_method?: 'GET' | 'POST' | undefined
  trunk_sid?: (string | null) | undefined
  uri?: (string | null) | undefined
  voice_receive_mode?: IncomingPhoneNumberEnumVoiceReceiveMode | undefined
  voice_application_sid?: (string | null) | undefined
  voice_caller_id_lookup?: (boolean | null) | undefined
  voice_fallback_method?: 'GET' | 'POST' | undefined
  voice_fallback_url?: (string | null) | undefined
  voice_method?: 'GET' | 'POST' | undefined
  voice_url?: (string | null) | undefined
  emergency_status?: IncomingPhoneNumberEnumEmergencyStatus | undefined
  emergency_address_sid?: (string | null) | undefined
  emergency_address_status?: IncomingPhoneNumberEnumEmergencyAddressStatus | undefined
  bundle_sid?: (string | null) | undefined
  status?: (string | null) | undefined
  type?: (string | null) | undefined
}
type ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn = {
  sid?: (string | null) | undefined
  account_sid?: (string | null) | undefined
  resource_sid?: (string | null) | undefined
  friendly_name?: (string | null) | undefined
  description?: (string | null) | undefined
  configuration?: ({ [x: string]: unknown } | null) | undefined
  unique_name?: (string | null) | undefined
  date_created?: (string | null) | undefined
  date_updated?: (string | null) | undefined
  uri?: (string | null) | undefined
  subresource_uris?: ({ [x: string]: unknown } | null) | undefined
}
type ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnIncomingPhoneNumberAssignedAddOnExtension =
  {
    sid?: (string | null) | undefined
    account_sid?: (string | null) | undefined
    resource_sid?: (string | null) | undefined
    assigned_add_on_sid?: (string | null) | undefined
    friendly_name?: (string | null) | undefined
    product_name?: (string | null) | undefined
    unique_name?: (string | null) | undefined
    uri?: (string | null) | undefined
    enabled?: (boolean | null) | undefined
  }
type IncomingPhoneNumberLocalEnumAddressRequirement = 'none' | 'any' | 'local' | 'foreign'
type IncomingPhoneNumberLocalEnumVoiceReceiveMode = 'voice' | 'fax'
type IncomingPhoneNumberLocalEnumEmergencyStatus = 'Active' | 'Inactive'
type IncomingPhoneNumberLocalEnumEmergencyAddressStatus =
  | 'registered'
  | 'unregistered'
  | 'pending-registration'
  | 'registration-failure'
  | 'pending-unregistration'
  | 'unregistration-failure'
type ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal = {
  account_sid?: (string | null) | undefined
  address_sid?: (string | null) | undefined
  address_requirements?: IncomingPhoneNumberLocalEnumAddressRequirement | undefined
  api_version?: (string | null) | undefined
  beta?: (boolean | null) | undefined
  capabilities?:
    | ({
        mms?: boolean | undefined
        sms?: boolean | undefined
        voice?: boolean | undefined
        fax?: boolean | undefined
      } | null)
    | undefined
  date_created?: (string | null) | undefined
  date_updated?: (string | null) | undefined
  friendly_name?: (string | null) | undefined
  identity_sid?: (string | null) | undefined
  phone_number?: (string | null) | undefined
  origin?: (string | null) | undefined
  sid?: (string | null) | undefined
  sms_application_sid?: (string | null) | undefined
  sms_fallback_method?: 'GET' | 'POST' | undefined
  sms_fallback_url?: (string | null) | undefined
  sms_method?: 'GET' | 'POST' | undefined
  sms_url?: (string | null) | undefined
  status_callback?: (string | null) | undefined
  status_callback_method?: 'GET' | 'POST' | undefined
  trunk_sid?: (string | null) | undefined
  uri?: (string | null) | undefined
  voice_receive_mode?: IncomingPhoneNumberLocalEnumVoiceReceiveMode | undefined
  voice_application_sid?: (string | null) | undefined
  voice_caller_id_lookup?: (boolean | null) | undefined
  voice_fallback_method?: 'GET' | 'POST' | undefined
  voice_fallback_url?: (string | null) | undefined
  voice_method?: 'GET' | 'POST' | undefined
  voice_url?: (string | null) | undefined
  emergency_status?: IncomingPhoneNumberLocalEnumEmergencyStatus | undefined
  emergency_address_sid?: (string | null) | undefined
  emergency_address_status?: IncomingPhoneNumberLocalEnumEmergencyAddressStatus | undefined
  bundle_sid?: (string | null) | undefined
  status?: (string | null) | undefined
}
type IncomingPhoneNumberMobileEnumAddressRequirement = 'none' | 'any' | 'local' | 'foreign'
type IncomingPhoneNumberMobileEnumVoiceReceiveMode = 'voice' | 'fax'
type IncomingPhoneNumberMobileEnumEmergencyStatus = 'Active' | 'Inactive'
type IncomingPhoneNumberMobileEnumEmergencyAddressStatus =
  | 'registered'
  | 'unregistered'
  | 'pending-registration'
  | 'registration-failure'
  | 'pending-unregistration'
  | 'unregistration-failure'
type ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile = {
  account_sid?: (string | null) | undefined
  address_sid?: (string | null) | undefined
  address_requirements?: IncomingPhoneNumberMobileEnumAddressRequirement | undefined
  api_version?: (string | null) | undefined
  beta?: (boolean | null) | undefined
  capabilities?:
    | ({
        mms?: boolean | undefined
        sms?: boolean | undefined
        voice?: boolean | undefined
        fax?: boolean | undefined
      } | null)
    | undefined
  date_created?: (string | null) | undefined
  date_updated?: (string | null) | undefined
  friendly_name?: (string | null) | undefined
  identity_sid?: (string | null) | undefined
  phone_number?: (string | null) | undefined
  origin?: (string | null) | undefined
  sid?: (string | null) | undefined
  sms_application_sid?: (string | null) | undefined
  sms_fallback_method?: 'GET' | 'POST' | undefined
  sms_fallback_url?: (string | null) | undefined
  sms_method?: 'GET' | 'POST' | undefined
  sms_url?: (string | null) | undefined
  status_callback?: (string | null) | undefined
  status_callback_method?: 'GET' | 'POST' | undefined
  trunk_sid?: (string | null) | undefined
  uri?: (string | null) | undefined
  voice_receive_mode?: IncomingPhoneNumberMobileEnumVoiceReceiveMode | undefined
  voice_application_sid?: (string | null) | undefined
  voice_caller_id_lookup?: (boolean | null) | undefined
  voice_fallback_method?: 'GET' | 'POST' | undefined
  voice_fallback_url?: (string | null) | undefined
  voice_method?: 'GET' | 'POST' | undefined
  voice_url?: (string | null) | undefined
  emergency_status?: IncomingPhoneNumberMobileEnumEmergencyStatus | undefined
  emergency_address_sid?: (string | null) | undefined
  emergency_address_status?: IncomingPhoneNumberMobileEnumEmergencyAddressStatus | undefined
  bundle_sid?: (string | null) | undefined
  status?: (string | null) | undefined
}
type IncomingPhoneNumberTollFreeEnumAddressRequirement = 'none' | 'any' | 'local' | 'foreign'
type IncomingPhoneNumberTollFreeEnumVoiceReceiveMode = 'voice' | 'fax'
type IncomingPhoneNumberTollFreeEnumEmergencyStatus = 'Active' | 'Inactive'
type IncomingPhoneNumberTollFreeEnumEmergencyAddressStatus =
  | 'registered'
  | 'unregistered'
  | 'pending-registration'
  | 'registration-failure'
  | 'pending-unregistration'
  | 'unregistration-failure'
type ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree = {
  account_sid?: (string | null) | undefined
  address_sid?: (string | null) | undefined
  address_requirements?: IncomingPhoneNumberTollFreeEnumAddressRequirement | undefined
  api_version?: (string | null) | undefined
  beta?: (boolean | null) | undefined
  capabilities?:
    | ({
        mms?: boolean | undefined
        sms?: boolean | undefined
        voice?: boolean | undefined
        fax?: boolean | undefined
      } | null)
    | undefined
  date_created?: (string | null) | undefined
  date_updated?: (string | null) | undefined
  friendly_name?: (string | null) | undefined
  identity_sid?: (string | null) | undefined
  phone_number?: (string | null) | undefined
  origin?: (string | null) | undefined
  sid?: (string | null) | undefined
  sms_application_sid?: (string | null) | undefined
  sms_fallback_method?: 'GET' | 'POST' | undefined
  sms_fallback_url?: (string | null) | undefined
  sms_method?: 'GET' | 'POST' | undefined
  sms_url?: (string | null) | undefined
  status_callback?: (string | null) | undefined
  status_callback_method?: 'GET' | 'POST' | undefined
  trunk_sid?: (string | null) | undefined
  uri?: (string | null) | undefined
  voice_receive_mode?: IncomingPhoneNumberTollFreeEnumVoiceReceiveMode | undefined
  voice_application_sid?: (string | null) | undefined
  voice_caller_id_lookup?: (boolean | null) | undefined
  voice_fallback_method?: 'GET' | 'POST' | undefined
  voice_fallback_url?: (string | null) | undefined
  voice_method?: 'GET' | 'POST' | undefined
  voice_url?: (string | null) | undefined
  emergency_status?: IncomingPhoneNumberTollFreeEnumEmergencyStatus | undefined
  emergency_address_sid?: (string | null) | undefined
  emergency_address_status?: IncomingPhoneNumberTollFreeEnumEmergencyAddressStatus | undefined
  bundle_sid?: (string | null) | undefined
  status?: (string | null) | undefined
}
type ApiV2010AccountKey = {
  sid?: (string | null) | undefined
  friendly_name?: (string | null) | undefined
  date_created?: (string | null) | undefined
  date_updated?: (string | null) | undefined
}
type ApiV2010AccountNewKey = {
  sid?: (string | null) | undefined
  friendly_name?: (string | null) | undefined
  date_created?: (string | null) | undefined
  date_updated?: (string | null) | undefined
  secret?: (string | null) | undefined
}
type ApiV2010AccountMessageMedia = {
  account_sid?: (string | null) | undefined
  content_type?: (string | null) | undefined
  date_created?: (string | null) | undefined
  date_updated?: (string | null) | undefined
  parent_sid?: (string | null) | undefined
  sid?: (string | null) | undefined
  uri?: (string | null) | undefined
}
type ApiV2010AccountQueueMember = {
  call_sid?: (string | null) | undefined
  date_enqueued?: (string | null) | undefined
  position?: number | undefined
  uri?: (string | null) | undefined
  wait_time?: number | undefined
  queue_sid?: (string | null) | undefined
}
type MessageEnumContentRetention = 'retain' | 'discard'
type MessageEnumAddressRetention = 'retain' | 'obfuscate'
type MessageEnumTrafficType = 'free'
type MessageEnumScheduleType = 'fixed'
type MessageEnumRiskCheck = 'enable' | 'disable'
type MessageEnumDirection = 'inbound' | 'outbound-api' | 'outbound-call' | 'outbound-reply'
type MessageEnumStatus =
  | 'queued'
  | 'sending'
  | 'sent'
  | 'failed'
  | 'delivered'
  | 'undelivered'
  | 'receiving'
  | 'received'
  | 'accepted'
  | 'scheduled'
  | 'read'
  | 'partially_delivered'
  | 'canceled'
type ApiV2010AccountMessage = {
  body?: (string | null) | undefined
  num_segments?: (string | null) | undefined
  direction?: MessageEnumDirection | undefined
  from?: (string | null) | undefined
  to?: (string | null) | undefined
  date_updated?: (string | null) | undefined
  price?: (string | null) | undefined
  error_message?: (string | null) | undefined
  uri?: (string | null) | undefined
  account_sid?: (string | null) | undefined
  num_media?: (string | null) | undefined
  status?: MessageEnumStatus | undefined
  messaging_service_sid?: (string | null) | undefined
  sid?: (string | null) | undefined
  date_sent?: (string | null) | undefined
  date_created?: (string | null) | undefined
  error_code?: (number | null) | undefined
  price_unit?: (string | null) | undefined
  api_version?: (string | null) | undefined
  subresource_uris?: ({ [x: string]: unknown } | null) | undefined
}
type MessageEnumUpdateStatus = 'canceled'
type MessageFeedbackEnumOutcome = 'confirmed' | 'unconfirmed'
type ApiV2010AccountMessageMessageFeedback = {
  account_sid?: (string | null) | undefined
  message_sid?: (string | null) | undefined
  outcome?: MessageFeedbackEnumOutcome | undefined
  date_created?: (string | null) | undefined
  date_updated?: (string | null) | undefined
  uri?: (string | null) | undefined
}
type ApiV2010AccountNewSigningKey = {
  sid?: (string | null) | undefined
  friendly_name?: (string | null) | undefined
  date_created?: (string | null) | undefined
  date_updated?: (string | null) | undefined
  secret?: (string | null) | undefined
}
type ApiV2010AccountSigningKey = {
  sid?: (string | null) | undefined
  friendly_name?: (string | null) | undefined
  date_created?: (string | null) | undefined
  date_updated?: (string | null) | undefined
}
type ApiV2010AccountNotificationInstance = {
  account_sid?: (string | null) | undefined
  api_version?: (string | null) | undefined
  call_sid?: (string | null) | undefined
  date_created?: (string | null) | undefined
  date_updated?: (string | null) | undefined
  error_code?: (string | null) | undefined
  log?: (string | null) | undefined
  message_date?: (string | null) | undefined
  message_text?: (string | null) | undefined
  more_info?: (string | null) | undefined
  request_method?: 'GET' | 'POST' | undefined
  request_url?: (string | null) | undefined
  request_variables?: (string | null) | undefined
  response_body?: (string | null) | undefined
  response_headers?: (string | null) | undefined
  sid?: (string | null) | undefined
  uri?: (string | null) | undefined
}
type ApiV2010AccountNotification = {
  account_sid?: (string | null) | undefined
  api_version?: (string | null) | undefined
  call_sid?: (string | null) | undefined
  date_created?: (string | null) | undefined
  date_updated?: (string | null) | undefined
  error_code?: (string | null) | undefined
  log?: (string | null) | undefined
  message_date?: (string | null) | undefined
  message_text?: (string | null) | undefined
  more_info?: (string | null) | undefined
  request_method?: 'GET' | 'POST' | undefined
  request_url?: (string | null) | undefined
  sid?: (string | null) | undefined
  uri?: (string | null) | undefined
}
type ApiV2010AccountOutgoingCallerId = {
  sid?: (string | null) | undefined
  date_created?: (string | null) | undefined
  date_updated?: (string | null) | undefined
  friendly_name?: (string | null) | undefined
  account_sid?: (string | null) | undefined
  phone_number?: (string | null) | undefined
  uri?: (string | null) | undefined
}
type ApiV2010AccountValidationRequest = {
  account_sid?: (string | null) | undefined
  call_sid?: (string | null) | undefined
  friendly_name?: (string | null) | undefined
  phone_number?: (string | null) | undefined
  validation_code?: (string | null) | undefined
}
type ParticipantEnumStatus =
  | 'queued'
  | 'connecting'
  | 'ringing'
  | 'connected'
  | 'complete'
  | 'failed'
type ApiV2010AccountConferenceParticipant = {
  account_sid?: (string | null) | undefined
  call_sid?: (string | null) | undefined
  label?: (string | null) | undefined
  call_sid_to_coach?: (string | null) | undefined
  coaching?: (boolean | null) | undefined
  conference_sid?: (string | null) | undefined
  date_created?: (string | null) | undefined
  date_updated?: (string | null) | undefined
  end_conference_on_exit?: (boolean | null) | undefined
  muted?: (boolean | null) | undefined
  hold?: (boolean | null) | undefined
  start_conference_on_enter?: (boolean | null) | undefined
  status?: ParticipantEnumStatus | undefined
  queue_time?: (string | null) | undefined
  uri?: (string | null) | undefined
}
type PaymentsEnumBankAccountType = 'consumer-checking' | 'consumer-savings' | 'commercial-checking'
type PaymentsEnumPaymentMethod = 'credit-card' | 'ach-debit'
type PaymentsEnumTokenType = 'one-time' | 'reusable' | 'payment-method'
type ApiV2010AccountCallPayments = {
  account_sid?: (string | null) | undefined
  call_sid?: (string | null) | undefined
  sid?: (string | null) | undefined
  date_created?: (string | null) | undefined
  date_updated?: (string | null) | undefined
  uri?: (string | null) | undefined
}
type PaymentsEnumCapture =
  | 'payment-card-number'
  | 'expiration-date'
  | 'security-code'
  | 'postal-code'
  | 'bank-routing-number'
  | 'bank-account-number'
  | 'payment-card-number-matcher'
  | 'expiration-date-matcher'
  | 'security-code-matcher'
  | 'postal-code-matcher'
type PaymentsEnumStatus = 'complete' | 'cancel'
type ApiV2010AccountQueue = {
  date_updated?: (string | null) | undefined
  current_size?: number | undefined
  friendly_name?: (string | null) | undefined
  uri?: (string | null) | undefined
  account_sid?: (string | null) | undefined
  average_wait_time?: number | undefined
  sid?: (string | null) | undefined
  date_created?: (string | null) | undefined
  max_size?: number | undefined
}
type RealtimeTranscriptionEnumTrack = 'inbound_track' | 'outbound_track' | 'both_tracks'
type RealtimeTranscriptionEnumStatus = 'in-progress' | 'stopped'
type ApiV2010AccountCallRealtimeTranscription = {
  sid?: (string | null) | undefined
  account_sid?: (string | null) | undefined
  call_sid?: (string | null) | undefined
  name?: (string | null) | undefined
  status?: RealtimeTranscriptionEnumStatus | undefined
  date_updated?: (string | null) | undefined
  uri?: (string | null) | undefined
}
type RealtimeTranscriptionEnumUpdateStatus = 'stopped'
type RecordingEnumStatus =
  | 'in-progress'
  | 'paused'
  | 'stopped'
  | 'processing'
  | 'completed'
  | 'absent'
  | 'deleted'
type RecordingEnumSource =
  | 'DialVerb'
  | 'Conference'
  | 'OutboundAPI'
  | 'Trunking'
  | 'RecordVerb'
  | 'StartCallRecordingAPI'
  | 'StartConferenceRecordingAPI'
type ApiV2010AccountRecording = {
  account_sid?: (string | null) | undefined
  api_version?: (string | null) | undefined
  call_sid?: (string | null) | undefined
  conference_sid?: (string | null) | undefined
  date_created?: (string | null) | undefined
  date_updated?: (string | null) | undefined
  start_time?: (string | null) | undefined
  duration?: (string | null) | undefined
  sid?: (string | null) | undefined
  price?: (string | null) | undefined
  price_unit?: (string | null) | undefined
  status?: RecordingEnumStatus | undefined
  channels?: (number | null) | undefined
  source?: RecordingEnumSource | undefined
  error_code?: (number | null) | undefined
  uri?: (string | null) | undefined
  encryption_details?: ({ [x: string]: unknown } | null) | undefined
  subresource_uris?: ({ [x: string]: unknown } | null) | undefined
  media_url?: (string | null) | undefined
}
type RecordingAddOnResultEnumStatus =
  | 'canceled'
  | 'completed'
  | 'deleted'
  | 'failed'
  | 'in-progress'
  | 'init'
  | 'processing'
  | 'queued'
type ApiV2010AccountRecordingRecordingAddOnResult = {
  sid?: (string | null) | undefined
  account_sid?: (string | null) | undefined
  status?: RecordingAddOnResultEnumStatus | undefined
  add_on_sid?: (string | null) | undefined
  add_on_configuration_sid?: (string | null) | undefined
  date_created?: (string | null) | undefined
  date_updated?: (string | null) | undefined
  date_completed?: (string | null) | undefined
  reference_sid?: (string | null) | undefined
  subresource_uris?: ({ [x: string]: unknown } | null) | undefined
}
type ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload = {
  sid?: (string | null) | undefined
  add_on_result_sid?: (string | null) | undefined
  account_sid?: (string | null) | undefined
  label?: (string | null) | undefined
  add_on_sid?: (string | null) | undefined
  add_on_configuration_sid?: (string | null) | undefined
  content_type?: (string | null) | undefined
  date_created?: (string | null) | undefined
  date_updated?: (string | null) | undefined
  reference_sid?: (string | null) | undefined
  subresource_uris?: ({ [x: string]: unknown } | null) | undefined
}
type ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayloadRecordingAddOnResultPayloadData =
  { redirect_to?: (string | null) | undefined }
type RecordingTranscriptionEnumStatus = 'in-progress' | 'completed' | 'failed'
type ApiV2010AccountRecordingRecordingTranscription = {
  account_sid?: (string | null) | undefined
  api_version?: (string | null) | undefined
  date_created?: (string | null) | undefined
  date_updated?: (string | null) | undefined
  duration?: (string | null) | undefined
  price?: (number | null) | undefined
  price_unit?: (string | null) | undefined
  recording_sid?: (string | null) | undefined
  sid?: (string | null) | undefined
  status?: RecordingTranscriptionEnumStatus | undefined
  transcription_text?: (string | null) | undefined
  type?: (string | null) | undefined
  uri?: (string | null) | undefined
}
type ApiV2010AccountShortCode = {
  account_sid?: (string | null) | undefined
  api_version?: (string | null) | undefined
  date_created?: (string | null) | undefined
  date_updated?: (string | null) | undefined
  friendly_name?: (string | null) | undefined
  short_code?: (string | null) | undefined
  sid?: (string | null) | undefined
  sms_fallback_method?: 'GET' | 'POST' | undefined
  sms_fallback_url?: (string | null) | undefined
  sms_method?: 'GET' | 'POST' | undefined
  sms_url?: (string | null) | undefined
  uri?: (string | null) | undefined
}
type ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping = {
  account_sid?: (string | null) | undefined
  date_created?: (string | null) | undefined
  date_updated?: (string | null) | undefined
  friendly_name?: (string | null) | undefined
  sid?: (string | null) | undefined
}
type ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIpAccessControlListMapping = {
  account_sid?: (string | null) | undefined
  date_created?: (string | null) | undefined
  date_updated?: (string | null) | undefined
  friendly_name?: (string | null) | undefined
  sid?: (string | null) | undefined
}
type ApiV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping =
  {
    account_sid?: (string | null) | undefined
    date_created?: (string | null) | undefined
    date_updated?: (string | null) | undefined
    friendly_name?: (string | null) | undefined
    sid?: (string | null) | undefined
  }
type ApiV2010AccountSipSipCredentialListSipCredential = {
  sid?: (string | null) | undefined
  account_sid?: (string | null) | undefined
  credential_list_sid?: (string | null) | undefined
  username?: (string | null) | undefined
  date_created?: (string | null) | undefined
  date_updated?: (string | null) | undefined
  uri?: (string | null) | undefined
}
type ApiV2010AccountSipSipCredentialList = {
  account_sid?: (string | null) | undefined
  date_created?: (string | null) | undefined
  date_updated?: (string | null) | undefined
  friendly_name?: (string | null) | undefined
  sid?: (string | null) | undefined
  subresource_uris?: ({ [x: string]: unknown } | null) | undefined
  uri?: (string | null) | undefined
}
type ApiV2010AccountSipSipDomainSipCredentialListMapping = {
  account_sid?: (string | null) | undefined
  date_created?: (string | null) | undefined
  date_updated?: (string | null) | undefined
  domain_sid?: (string | null) | undefined
  friendly_name?: (string | null) | undefined
  sid?: (string | null) | undefined
  uri?: (string | null) | undefined
}
type ApiV2010AccountSipSipDomain = {
  account_sid?: (string | null) | undefined
  api_version?: (string | null) | undefined
  auth_type?: (string | null) | undefined
  date_created?: (string | null) | undefined
  date_updated?: (string | null) | undefined
  domain_name?: (string | null) | undefined
  friendly_name?: (string | null) | undefined
  sid?: (string | null) | undefined
  uri?: (string | null) | undefined
  voice_fallback_method?: 'GET' | 'POST' | undefined
  voice_fallback_url?: (string | null) | undefined
  voice_method?: 'GET' | 'POST' | undefined
  voice_status_callback_method?: 'GET' | 'POST' | undefined
  voice_status_callback_url?: (string | null) | undefined
  voice_url?: (string | null) | undefined
  subresource_uris?: ({ [x: string]: unknown } | null) | undefined
  sip_registration?: (boolean | null) | undefined
  emergency_calling_enabled?: (boolean | null) | undefined
  secure?: (boolean | null) | undefined
  byoc_trunk_sid?: (string | null) | undefined
  emergency_caller_sid?: (string | null) | undefined
}
type ApiV2010AccountSipSipIpAccessControlList = {
  sid?: (string | null) | undefined
  account_sid?: (string | null) | undefined
  friendly_name?: (string | null) | undefined
  date_created?: (string | null) | undefined
  date_updated?: (string | null) | undefined
  subresource_uris?: ({ [x: string]: unknown } | null) | undefined
  uri?: (string | null) | undefined
}
type ApiV2010AccountSipSipDomainSipIpAccessControlListMapping = {
  account_sid?: (string | null) | undefined
  date_created?: (string | null) | undefined
  date_updated?: (string | null) | undefined
  domain_sid?: (string | null) | undefined
  friendly_name?: (string | null) | undefined
  sid?: (string | null) | undefined
  uri?: (string | null) | undefined
}
type ApiV2010AccountSipSipIpAccessControlListSipIpAddress = {
  sid?: (string | null) | undefined
  account_sid?: (string | null) | undefined
  friendly_name?: (string | null) | undefined
  ip_address?: (string | null) | undefined
  cidr_prefix_length?: number | undefined
  ip_access_control_list_sid?: (string | null) | undefined
  date_created?: (string | null) | undefined
  date_updated?: (string | null) | undefined
  uri?: (string | null) | undefined
}
type SiprecEnumTrack = 'inbound_track' | 'outbound_track' | 'both_tracks'
type SiprecEnumStatus = 'in-progress' | 'stopped'
type ApiV2010AccountCallSiprec = {
  sid?: (string | null) | undefined
  account_sid?: (string | null) | undefined
  call_sid?: (string | null) | undefined
  name?: (string | null) | undefined
  status?: SiprecEnumStatus | undefined
  date_updated?: (string | null) | undefined
  uri?: (string | null) | undefined
}
type SiprecEnumUpdateStatus = 'stopped'
type StreamEnumTrack = 'inbound_track' | 'outbound_track' | 'both_tracks'
type StreamEnumStatus = 'in-progress' | 'stopped'
type ApiV2010AccountCallStream = {
  sid?: (string | null) | undefined
  account_sid?: (string | null) | undefined
  call_sid?: (string | null) | undefined
  name?: (string | null) | undefined
  status?: StreamEnumStatus | undefined
  date_updated?: (string | null) | undefined
  uri?: (string | null) | undefined
}
type StreamEnumUpdateStatus = 'stopped'
type ApiV2010AccountToken = {
  account_sid?: (string | null) | undefined
  date_created?: (string | null) | undefined
  date_updated?: (string | null) | undefined
  ice_servers?:
    | (
        | {
            credential?: string | undefined
            username?: string | undefined
            url?: string | undefined
            urls?: string | undefined
          }[]
        | null
      )
    | undefined
  password?: (string | null) | undefined
  ttl?: (string | null) | undefined
  username?: (string | null) | undefined
}
type TranscriptionEnumStatus = 'in-progress' | 'completed' | 'failed'
type ApiV2010AccountTranscription = {
  account_sid?: (string | null) | undefined
  api_version?: (string | null) | undefined
  date_created?: (string | null) | undefined
  date_updated?: (string | null) | undefined
  duration?: (string | null) | undefined
  price?: (number | null) | undefined
  price_unit?: (string | null) | undefined
  recording_sid?: (string | null) | undefined
  sid?: (string | null) | undefined
  status?: TranscriptionEnumStatus | undefined
  transcription_text?: (string | null) | undefined
  type?: (string | null) | undefined
  uri?: (string | null) | undefined
}
type ApiV2010AccountUsageUsageRecord = {
  account_sid?: (string | null) | undefined
  api_version?: (string | null) | undefined
  as_of?: (string | null) | undefined
  category?: (string | null) | undefined
  count?: (string | null) | undefined
  count_unit?: (string | null) | undefined
  description?: (string | null) | undefined
  end_date?: (string | null) | undefined
  price?: (number | null) | undefined
  price_unit?: (string | null) | undefined
  start_date?: (string | null) | undefined
  subresource_uris?: ({ [x: string]: unknown } | null) | undefined
  uri?: (string | null) | undefined
  usage?: (string | null) | undefined
  usage_unit?: (string | null) | undefined
}
type ApiV2010AccountUsageUsageRecordUsageRecordAllTime = {
  account_sid?: (string | null) | undefined
  api_version?: (string | null) | undefined
  as_of?: (string | null) | undefined
  category?: (string | null) | undefined
  count?: (string | null) | undefined
  count_unit?: (string | null) | undefined
  description?: (string | null) | undefined
  end_date?: (string | null) | undefined
  price?: (number | null) | undefined
  price_unit?: (string | null) | undefined
  start_date?: (string | null) | undefined
  subresource_uris?: ({ [x: string]: unknown } | null) | undefined
  uri?: (string | null) | undefined
  usage?: (string | null) | undefined
  usage_unit?: (string | null) | undefined
}
type ApiV2010AccountUsageUsageRecordUsageRecordDaily = {
  account_sid?: (string | null) | undefined
  api_version?: (string | null) | undefined
  as_of?: (string | null) | undefined
  category?: (string | null) | undefined
  count?: (string | null) | undefined
  count_unit?: (string | null) | undefined
  description?: (string | null) | undefined
  end_date?: (string | null) | undefined
  price?: (number | null) | undefined
  price_unit?: (string | null) | undefined
  start_date?: (string | null) | undefined
  subresource_uris?: ({ [x: string]: unknown } | null) | undefined
  uri?: (string | null) | undefined
  usage?: (string | null) | undefined
  usage_unit?: (string | null) | undefined
}
type ApiV2010AccountUsageUsageRecordUsageRecordLastMonth = {
  account_sid?: (string | null) | undefined
  api_version?: (string | null) | undefined
  as_of?: (string | null) | undefined
  category?: (string | null) | undefined
  count?: (string | null) | undefined
  count_unit?: (string | null) | undefined
  description?: (string | null) | undefined
  end_date?: (string | null) | undefined
  price?: (number | null) | undefined
  price_unit?: (string | null) | undefined
  start_date?: (string | null) | undefined
  subresource_uris?: ({ [x: string]: unknown } | null) | undefined
  uri?: (string | null) | undefined
  usage?: (string | null) | undefined
  usage_unit?: (string | null) | undefined
}
type ApiV2010AccountUsageUsageRecordUsageRecordMonthly = {
  account_sid?: (string | null) | undefined
  api_version?: (string | null) | undefined
  as_of?: (string | null) | undefined
  category?: (string | null) | undefined
  count?: (string | null) | undefined
  count_unit?: (string | null) | undefined
  description?: (string | null) | undefined
  end_date?: (string | null) | undefined
  price?: (number | null) | undefined
  price_unit?: (string | null) | undefined
  start_date?: (string | null) | undefined
  subresource_uris?: ({ [x: string]: unknown } | null) | undefined
  uri?: (string | null) | undefined
  usage?: (string | null) | undefined
  usage_unit?: (string | null) | undefined
}
type ApiV2010AccountUsageUsageRecordUsageRecordThisMonth = {
  account_sid?: (string | null) | undefined
  api_version?: (string | null) | undefined
  as_of?: (string | null) | undefined
  category?: (string | null) | undefined
  count?: (string | null) | undefined
  count_unit?: (string | null) | undefined
  description?: (string | null) | undefined
  end_date?: (string | null) | undefined
  price?: (number | null) | undefined
  price_unit?: (string | null) | undefined
  start_date?: (string | null) | undefined
  subresource_uris?: ({ [x: string]: unknown } | null) | undefined
  uri?: (string | null) | undefined
  usage?: (string | null) | undefined
  usage_unit?: (string | null) | undefined
}
type ApiV2010AccountUsageUsageRecordUsageRecordToday = {
  account_sid?: (string | null) | undefined
  api_version?: (string | null) | undefined
  as_of?: (string | null) | undefined
  category?: (string | null) | undefined
  count?: (string | null) | undefined
  count_unit?: (string | null) | undefined
  description?: (string | null) | undefined
  end_date?: (string | null) | undefined
  price?: (number | null) | undefined
  price_unit?: (string | null) | undefined
  start_date?: (string | null) | undefined
  subresource_uris?: ({ [x: string]: unknown } | null) | undefined
  uri?: (string | null) | undefined
  usage?: (string | null) | undefined
  usage_unit?: (string | null) | undefined
}
type ApiV2010AccountUsageUsageRecordUsageRecordYearly = {
  account_sid?: (string | null) | undefined
  api_version?: (string | null) | undefined
  as_of?: (string | null) | undefined
  category?: (string | null) | undefined
  count?: (string | null) | undefined
  count_unit?: (string | null) | undefined
  description?: (string | null) | undefined
  end_date?: (string | null) | undefined
  price?: (number | null) | undefined
  price_unit?: (string | null) | undefined
  start_date?: (string | null) | undefined
  subresource_uris?: ({ [x: string]: unknown } | null) | undefined
  uri?: (string | null) | undefined
  usage?: (string | null) | undefined
  usage_unit?: (string | null) | undefined
}
type ApiV2010AccountUsageUsageRecordUsageRecordYesterday = {
  account_sid?: (string | null) | undefined
  api_version?: (string | null) | undefined
  as_of?: (string | null) | undefined
  category?: (string | null) | undefined
  count?: (string | null) | undefined
  count_unit?: (string | null) | undefined
  description?: (string | null) | undefined
  end_date?: (string | null) | undefined
  price?: (number | null) | undefined
  price_unit?: (string | null) | undefined
  start_date?: (string | null) | undefined
  subresource_uris?: ({ [x: string]: unknown } | null) | undefined
  uri?: (string | null) | undefined
  usage?: (string | null) | undefined
  usage_unit?: (string | null) | undefined
}
type UsageTriggerEnumRecurring = 'daily' | 'monthly' | 'yearly' | 'alltime'
type UsageTriggerEnumTriggerField = 'count' | 'usage' | 'price'
type ApiV2010AccountUsageUsageTrigger = {
  account_sid?: (string | null) | undefined
  api_version?: (string | null) | undefined
  callback_method?: 'GET' | 'POST' | undefined
  callback_url?: (string | null) | undefined
  current_value?: (string | null) | undefined
  date_created?: (string | null) | undefined
  date_fired?: (string | null) | undefined
  date_updated?: (string | null) | undefined
  friendly_name?: (string | null) | undefined
  recurring?: UsageTriggerEnumRecurring | undefined
  sid?: (string | null) | undefined
  trigger_by?: UsageTriggerEnumTriggerField | undefined
  trigger_value?: (string | null) | undefined
  uri?: (string | null) | undefined
  usage_category?: (string | null) | undefined
  usage_record_uri?: (string | null) | undefined
}
type ApiV2010AccountCallUserDefinedMessage = {
  account_sid?: (string | null) | undefined
  call_sid?: (string | null) | undefined
  sid?: (string | null) | undefined
  date_created?: (string | null) | undefined
}
type ApiV2010AccountCallUserDefinedMessageSubscription = {
  account_sid?: (string | null) | undefined
  call_sid?: (string | null) | undefined
  sid?: (string | null) | undefined
  date_created?: (string | null) | undefined
  uri?: (string | null) | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/2010-04-01/Accounts.json': {
      $post: {
        input: { json: { FriendlyName?: string | undefined } } & {
          form: { FriendlyName?: string | undefined }
        }
        output: ApiV2010Account
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: {
          query: {
            FriendlyName?: string | undefined
            Status?: AccountEnumStatus | undefined
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          accounts?: ApiV2010Account[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:Sid.json': {
      $get: {
        input: { param: { Sid: string } }
        output: ApiV2010Account
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { Sid: string } } & {
              json: { FriendlyName?: string | undefined; Status?: AccountEnumStatus | undefined }
            } & {
              form: { FriendlyName?: string | undefined; Status?: AccountEnumStatus | undefined }
            }
            output: ApiV2010Account
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Sid: string } } & {
              json: { FriendlyName?: string | undefined; Status?: AccountEnumStatus | undefined }
            } & {
              form: { FriendlyName?: string | undefined; Status?: AccountEnumStatus | undefined }
            }
            output: {
              code?: number | undefined
              message?: string | undefined
              more_info?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Addresses.json': {
      $post: {
        input: { param: { AccountSid: string } } & {
          json: {
            CustomerName: string
            Street: string
            City: string
            Region: string
            PostalCode: string
            IsoCountry: string
            FriendlyName?: string | undefined
            EmergencyEnabled?: boolean | undefined
            AutoCorrectAddress?: boolean | undefined
            StreetSecondary?: string | undefined
          }
        } & {
          form: {
            CustomerName: string
            Street: string
            City: string
            Region: string
            PostalCode: string
            IsoCountry: string
            FriendlyName?: string | undefined
            EmergencyEnabled?: boolean | undefined
            AutoCorrectAddress?: boolean | undefined
            StreetSecondary?: string | undefined
          }
        }
        output: ApiV2010AccountAddress
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { AccountSid: string } } & {
          query: {
            CustomerName?: string | undefined
            FriendlyName?: string | undefined
            EmergencyEnabled?: boolean | undefined
            IsoCountry?: string | undefined
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          addresses?: ApiV2010AccountAddress[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Addresses/:Sid.json': {
      $delete: {
        input: { param: { AccountSid: string; Sid: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { AccountSid: string; Sid: string } }
        output: ApiV2010AccountAddress
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { AccountSid: string; Sid: string } } & {
          json: {
            FriendlyName?: string | undefined
            CustomerName?: string | undefined
            Street?: string | undefined
            City?: string | undefined
            Region?: string | undefined
            PostalCode?: string | undefined
            EmergencyEnabled?: boolean | undefined
            AutoCorrectAddress?: boolean | undefined
            StreetSecondary?: string | undefined
          }
        } & {
          form: {
            FriendlyName?: string | undefined
            CustomerName?: string | undefined
            Street?: string | undefined
            City?: string | undefined
            Region?: string | undefined
            PostalCode?: string | undefined
            EmergencyEnabled?: boolean | undefined
            AutoCorrectAddress?: boolean | undefined
            StreetSecondary?: string | undefined
          }
        }
        output: ApiV2010AccountAddress
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Applications.json': {
      $post: {
        input: { param: { AccountSid: string } } & {
          json: {
            ApiVersion?: string | undefined
            VoiceUrl?: string | undefined
            VoiceMethod?: 'GET' | 'POST' | undefined
            VoiceFallbackUrl?: string | undefined
            VoiceFallbackMethod?: 'GET' | 'POST' | undefined
            StatusCallback?: string | undefined
            StatusCallbackMethod?: 'GET' | 'POST' | undefined
            VoiceCallerIdLookup?: boolean | undefined
            SmsUrl?: string | undefined
            SmsMethod?: 'GET' | 'POST' | undefined
            SmsFallbackUrl?: string | undefined
            SmsFallbackMethod?: 'GET' | 'POST' | undefined
            SmsStatusCallback?: string | undefined
            MessageStatusCallback?: string | undefined
            FriendlyName?: string | undefined
            PublicApplicationConnectEnabled?: boolean | undefined
          }
        } & {
          form: {
            ApiVersion?: string | undefined
            VoiceUrl?: string | undefined
            VoiceMethod?: 'GET' | 'POST' | undefined
            VoiceFallbackUrl?: string | undefined
            VoiceFallbackMethod?: 'GET' | 'POST' | undefined
            StatusCallback?: string | undefined
            StatusCallbackMethod?: 'GET' | 'POST' | undefined
            VoiceCallerIdLookup?: boolean | undefined
            SmsUrl?: string | undefined
            SmsMethod?: 'GET' | 'POST' | undefined
            SmsFallbackUrl?: string | undefined
            SmsFallbackMethod?: 'GET' | 'POST' | undefined
            SmsStatusCallback?: string | undefined
            MessageStatusCallback?: string | undefined
            FriendlyName?: string | undefined
            PublicApplicationConnectEnabled?: boolean | undefined
          }
        }
        output: ApiV2010AccountApplication
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { AccountSid: string } } & {
          query: {
            FriendlyName?: string | undefined
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          applications?: ApiV2010AccountApplication[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Applications/:Sid.json': {
      $delete: {
        input: { param: { AccountSid: string; Sid: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { AccountSid: string; Sid: string } }
        output: ApiV2010AccountApplication
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { AccountSid: string; Sid: string } } & {
          json: {
            FriendlyName?: string | undefined
            ApiVersion?: string | undefined
            VoiceUrl?: string | undefined
            VoiceMethod?: 'GET' | 'POST' | undefined
            VoiceFallbackUrl?: string | undefined
            VoiceFallbackMethod?: 'GET' | 'POST' | undefined
            StatusCallback?: string | undefined
            StatusCallbackMethod?: 'GET' | 'POST' | undefined
            VoiceCallerIdLookup?: boolean | undefined
            SmsUrl?: string | undefined
            SmsMethod?: 'GET' | 'POST' | undefined
            SmsFallbackUrl?: string | undefined
            SmsFallbackMethod?: 'GET' | 'POST' | undefined
            SmsStatusCallback?: string | undefined
            MessageStatusCallback?: string | undefined
            PublicApplicationConnectEnabled?: boolean | undefined
          }
        } & {
          form: {
            FriendlyName?: string | undefined
            ApiVersion?: string | undefined
            VoiceUrl?: string | undefined
            VoiceMethod?: 'GET' | 'POST' | undefined
            VoiceFallbackUrl?: string | undefined
            VoiceFallbackMethod?: 'GET' | 'POST' | undefined
            StatusCallback?: string | undefined
            StatusCallbackMethod?: 'GET' | 'POST' | undefined
            VoiceCallerIdLookup?: boolean | undefined
            SmsUrl?: string | undefined
            SmsMethod?: 'GET' | 'POST' | undefined
            SmsFallbackUrl?: string | undefined
            SmsFallbackMethod?: 'GET' | 'POST' | undefined
            SmsStatusCallback?: string | undefined
            MessageStatusCallback?: string | undefined
            PublicApplicationConnectEnabled?: boolean | undefined
          }
        }
        output: ApiV2010AccountApplication
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/AuthorizedConnectApps/:ConnectAppSid.json': {
      $get: {
        input: { param: { AccountSid: string; ConnectAppSid: string } }
        output: ApiV2010AccountAuthorizedConnectApp
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/AuthorizedConnectApps.json': {
      $get: {
        input: { param: { AccountSid: string } } & {
          query: {
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          authorized_connect_apps?: ApiV2010AccountAuthorizedConnectApp[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/AvailablePhoneNumbers.json': {
      $get: {
        input: { param: { AccountSid: string } } & {
          query: {
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          countries?: ApiV2010AccountAvailablePhoneNumberCountry[] | undefined
          uri?: (string | null) | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/AvailablePhoneNumbers/:CountryCode.json': {
      $get: {
        input: { param: { AccountSid: string; CountryCode: string } }
        output: ApiV2010AccountAvailablePhoneNumberCountry
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/AvailablePhoneNumbers/:CountryCode/Local.json': {
      $get: {
        input: { param: { AccountSid: string; CountryCode: string } } & {
          query: {
            AreaCode?: number | undefined
            Contains?: string | undefined
            SmsEnabled?: boolean | undefined
            MmsEnabled?: boolean | undefined
            VoiceEnabled?: boolean | undefined
            ExcludeAllAddressRequired?: boolean | undefined
            ExcludeLocalAddressRequired?: boolean | undefined
            ExcludeForeignAddressRequired?: boolean | undefined
            Beta?: boolean | undefined
            NearNumber?: string | undefined
            NearLatLong?: string | undefined
            Distance?: number | undefined
            InPostalCode?: string | undefined
            InRegion?: string | undefined
            InRateCenter?: string | undefined
            InLata?: string | undefined
            InLocality?: string | undefined
            FaxEnabled?: boolean | undefined
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          available_phone_numbers?:
            | ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberLocal[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/AvailablePhoneNumbers/:CountryCode/MachineToMachine.json': {
      $get: {
        input: { param: { AccountSid: string; CountryCode: string } } & {
          query: {
            AreaCode?: number | undefined
            Contains?: string | undefined
            SmsEnabled?: boolean | undefined
            MmsEnabled?: boolean | undefined
            VoiceEnabled?: boolean | undefined
            ExcludeAllAddressRequired?: boolean | undefined
            ExcludeLocalAddressRequired?: boolean | undefined
            ExcludeForeignAddressRequired?: boolean | undefined
            Beta?: boolean | undefined
            NearNumber?: string | undefined
            NearLatLong?: string | undefined
            Distance?: number | undefined
            InPostalCode?: string | undefined
            InRegion?: string | undefined
            InRateCenter?: string | undefined
            InLata?: string | undefined
            InLocality?: string | undefined
            FaxEnabled?: boolean | undefined
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          available_phone_numbers?:
            | ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberMachineToMachine[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/AvailablePhoneNumbers/:CountryCode/Mobile.json': {
      $get: {
        input: { param: { AccountSid: string; CountryCode: string } } & {
          query: {
            AreaCode?: number | undefined
            Contains?: string | undefined
            SmsEnabled?: boolean | undefined
            MmsEnabled?: boolean | undefined
            VoiceEnabled?: boolean | undefined
            ExcludeAllAddressRequired?: boolean | undefined
            ExcludeLocalAddressRequired?: boolean | undefined
            ExcludeForeignAddressRequired?: boolean | undefined
            Beta?: boolean | undefined
            NearNumber?: string | undefined
            NearLatLong?: string | undefined
            Distance?: number | undefined
            InPostalCode?: string | undefined
            InRegion?: string | undefined
            InRateCenter?: string | undefined
            InLata?: string | undefined
            InLocality?: string | undefined
            FaxEnabled?: boolean | undefined
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          available_phone_numbers?:
            | ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberMobile[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/AvailablePhoneNumbers/:CountryCode/National.json': {
      $get: {
        input: { param: { AccountSid: string; CountryCode: string } } & {
          query: {
            AreaCode?: number | undefined
            Contains?: string | undefined
            SmsEnabled?: boolean | undefined
            MmsEnabled?: boolean | undefined
            VoiceEnabled?: boolean | undefined
            ExcludeAllAddressRequired?: boolean | undefined
            ExcludeLocalAddressRequired?: boolean | undefined
            ExcludeForeignAddressRequired?: boolean | undefined
            Beta?: boolean | undefined
            NearNumber?: string | undefined
            NearLatLong?: string | undefined
            Distance?: number | undefined
            InPostalCode?: string | undefined
            InRegion?: string | undefined
            InRateCenter?: string | undefined
            InLata?: string | undefined
            InLocality?: string | undefined
            FaxEnabled?: boolean | undefined
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          available_phone_numbers?:
            | ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNational[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/AvailablePhoneNumbers/:CountryCode/SharedCost.json': {
      $get: {
        input: { param: { AccountSid: string; CountryCode: string } } & {
          query: {
            AreaCode?: number | undefined
            Contains?: string | undefined
            SmsEnabled?: boolean | undefined
            MmsEnabled?: boolean | undefined
            VoiceEnabled?: boolean | undefined
            ExcludeAllAddressRequired?: boolean | undefined
            ExcludeLocalAddressRequired?: boolean | undefined
            ExcludeForeignAddressRequired?: boolean | undefined
            Beta?: boolean | undefined
            NearNumber?: string | undefined
            NearLatLong?: string | undefined
            Distance?: number | undefined
            InPostalCode?: string | undefined
            InRegion?: string | undefined
            InRateCenter?: string | undefined
            InLata?: string | undefined
            InLocality?: string | undefined
            FaxEnabled?: boolean | undefined
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          available_phone_numbers?:
            | ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberSharedCost[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/AvailablePhoneNumbers/:CountryCode/TollFree.json': {
      $get: {
        input: { param: { AccountSid: string; CountryCode: string } } & {
          query: {
            AreaCode?: number | undefined
            Contains?: string | undefined
            SmsEnabled?: boolean | undefined
            MmsEnabled?: boolean | undefined
            VoiceEnabled?: boolean | undefined
            ExcludeAllAddressRequired?: boolean | undefined
            ExcludeLocalAddressRequired?: boolean | undefined
            ExcludeForeignAddressRequired?: boolean | undefined
            Beta?: boolean | undefined
            NearNumber?: string | undefined
            NearLatLong?: string | undefined
            Distance?: number | undefined
            InPostalCode?: string | undefined
            InRegion?: string | undefined
            InRateCenter?: string | undefined
            InLata?: string | undefined
            InLocality?: string | undefined
            FaxEnabled?: boolean | undefined
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          available_phone_numbers?:
            | ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberTollFree[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/AvailablePhoneNumbers/:CountryCode/Voip.json': {
      $get: {
        input: { param: { AccountSid: string; CountryCode: string } } & {
          query: {
            AreaCode?: number | undefined
            Contains?: string | undefined
            SmsEnabled?: boolean | undefined
            MmsEnabled?: boolean | undefined
            VoiceEnabled?: boolean | undefined
            ExcludeAllAddressRequired?: boolean | undefined
            ExcludeLocalAddressRequired?: boolean | undefined
            ExcludeForeignAddressRequired?: boolean | undefined
            Beta?: boolean | undefined
            NearNumber?: string | undefined
            NearLatLong?: string | undefined
            Distance?: number | undefined
            InPostalCode?: string | undefined
            InRegion?: string | undefined
            InRateCenter?: string | undefined
            InLata?: string | undefined
            InLocality?: string | undefined
            FaxEnabled?: boolean | undefined
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          available_phone_numbers?:
            | ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberVoip[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Balance.json': {
      $get: {
        input: { param: { AccountSid: string } }
        output: ApiV2010AccountBalance
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Calls.json': {
      $post: {
        input: { param: { AccountSid: string } } & {
          json: {
            To: string
            From: string
            Method?: 'GET' | 'POST' | undefined
            FallbackUrl?: string | undefined
            FallbackMethod?: 'GET' | 'POST' | undefined
            StatusCallback?: string | undefined
            StatusCallbackEvent?: string[] | undefined
            StatusCallbackMethod?: 'GET' | 'POST' | undefined
            SendDigits?: string | undefined
            Timeout?: number | undefined
            Record?: boolean | undefined
            RecordingChannels?: string | undefined
            RecordingStatusCallback?: string | undefined
            RecordingStatusCallbackMethod?: 'GET' | 'POST' | undefined
            RecordingConfigurationId?: string | undefined
            SipAuthUsername?: string | undefined
            SipAuthPassword?: string | undefined
            MachineDetection?: string | undefined
            MachineDetectionTimeout?: number | undefined
            RecordingStatusCallbackEvent?: string[] | undefined
            Trim?: string | undefined
            CallerId?: string | undefined
            MachineDetectionSpeechThreshold?: number | undefined
            MachineDetectionSpeechEndThreshold?: number | undefined
            MachineDetectionSilenceTimeout?: number | undefined
            AsyncAmd?: string | undefined
            AsyncAmdStatusCallback?: string | undefined
            AsyncAmdStatusCallbackMethod?: 'GET' | 'POST' | undefined
            Passports?: string | undefined
            Byoc?: string | undefined
            CallReason?: string | undefined
            CallToken?: string | undefined
            RecordingTrack?: string | undefined
            TimeLimit?: number | undefined
            ClientNotificationUrl?: string | undefined
            Url?: string | undefined
            Twiml?: string | undefined
            ApplicationSid?: string | undefined
          }
        } & {
          form: {
            To: string
            From: string
            Method?: 'GET' | 'POST' | undefined
            FallbackUrl?: string | undefined
            FallbackMethod?: 'GET' | 'POST' | undefined
            StatusCallback?: string | undefined
            StatusCallbackEvent?: string[] | undefined
            StatusCallbackMethod?: 'GET' | 'POST' | undefined
            SendDigits?: string | undefined
            Timeout?: number | undefined
            Record?: boolean | undefined
            RecordingChannels?: string | undefined
            RecordingStatusCallback?: string | undefined
            RecordingStatusCallbackMethod?: 'GET' | 'POST' | undefined
            RecordingConfigurationId?: string | undefined
            SipAuthUsername?: string | undefined
            SipAuthPassword?: string | undefined
            MachineDetection?: string | undefined
            MachineDetectionTimeout?: number | undefined
            RecordingStatusCallbackEvent?: string[] | undefined
            Trim?: string | undefined
            CallerId?: string | undefined
            MachineDetectionSpeechThreshold?: number | undefined
            MachineDetectionSpeechEndThreshold?: number | undefined
            MachineDetectionSilenceTimeout?: number | undefined
            AsyncAmd?: string | undefined
            AsyncAmdStatusCallback?: string | undefined
            AsyncAmdStatusCallbackMethod?: 'GET' | 'POST' | undefined
            Passports?: string | undefined
            Byoc?: string | undefined
            CallReason?: string | undefined
            CallToken?: string | undefined
            RecordingTrack?: string | undefined
            TimeLimit?: number | undefined
            ClientNotificationUrl?: string | undefined
            Url?: string | undefined
            Twiml?: string | undefined
            ApplicationSid?: string | undefined
          }
        }
        output: ApiV2010AccountCall
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { AccountSid: string } } & {
          query: {
            To?: string | undefined
            From?: string | undefined
            ParentCallSid?: string | undefined
            Status?: CallEnumStatus | undefined
            StartTime?: string | undefined
            'StartTime<'?: string | undefined
            'StartTime>'?: string | undefined
            EndTime?: string | undefined
            'EndTime<'?: string | undefined
            'EndTime>'?: string | undefined
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          calls?: ApiV2010AccountCall[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Calls/:Sid.json': {
      $delete: {
        input: { param: { AccountSid: string; Sid: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { AccountSid: string; Sid: string } }
        output: ApiV2010AccountCall
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { AccountSid: string; Sid: string } } & {
          json: {
            Url?: string | undefined
            Method?: 'GET' | 'POST' | undefined
            Status?: CallEnumUpdateStatus | undefined
            FallbackUrl?: string | undefined
            FallbackMethod?: 'GET' | 'POST' | undefined
            StatusCallback?: string | undefined
            StatusCallbackMethod?: 'GET' | 'POST' | undefined
            Twiml?: string | undefined
            TimeLimit?: number | undefined
          }
        } & {
          form: {
            Url?: string | undefined
            Method?: 'GET' | 'POST' | undefined
            Status?: CallEnumUpdateStatus | undefined
            FallbackUrl?: string | undefined
            FallbackMethod?: 'GET' | 'POST' | undefined
            StatusCallback?: string | undefined
            StatusCallbackMethod?: 'GET' | 'POST' | undefined
            Twiml?: string | undefined
            TimeLimit?: number | undefined
          }
        }
        output: ApiV2010AccountCall
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Events.json': {
      $get: {
        input: { param: { AccountSid: string; CallSid: string } } & {
          query: {
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          events?: ApiV2010AccountCallCallEvent[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Notifications/:Sid.json': {
      $get: {
        input: { param: { AccountSid: string; CallSid: string; Sid: string } }
        output: ApiV2010AccountCallCallNotificationInstance
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Notifications.json': {
      $get: {
        input: { param: { AccountSid: string; CallSid: string } } & {
          query: {
            Log?: number | undefined
            MessageDate?: string | undefined
            'MessageDate<'?: string | undefined
            'MessageDate>'?: string | undefined
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          notifications?: ApiV2010AccountCallCallNotification[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Recordings.json': {
      $post:
        | {
            input: { param: { AccountSid: string; CallSid: string } } & {
              json: {
                RecordingStatusCallbackEvent?: string[] | undefined
                RecordingStatusCallback?: string | undefined
                RecordingStatusCallbackMethod?: 'GET' | 'POST' | undefined
                Trim?: string | undefined
                RecordingChannels?: string | undefined
                RecordingTrack?: string | undefined
                RecordingConfigurationId?: string | undefined
              }
            } & {
              form: {
                RecordingStatusCallbackEvent?: string[] | undefined
                RecordingStatusCallback?: string | undefined
                RecordingStatusCallbackMethod?: 'GET' | 'POST' | undefined
                Trim?: string | undefined
                RecordingChannels?: string | undefined
                RecordingTrack?: string | undefined
                RecordingConfigurationId?: string | undefined
              }
            }
            output: ApiV2010AccountCallCallRecording
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { AccountSid: string; CallSid: string } } & {
              json: {
                RecordingStatusCallbackEvent?: string[] | undefined
                RecordingStatusCallback?: string | undefined
                RecordingStatusCallbackMethod?: 'GET' | 'POST' | undefined
                Trim?: string | undefined
                RecordingChannels?: string | undefined
                RecordingTrack?: string | undefined
                RecordingConfigurationId?: string | undefined
              }
            } & {
              form: {
                RecordingStatusCallbackEvent?: string[] | undefined
                RecordingStatusCallback?: string | undefined
                RecordingStatusCallbackMethod?: 'GET' | 'POST' | undefined
                Trim?: string | undefined
                RecordingChannels?: string | undefined
                RecordingTrack?: string | undefined
                RecordingConfigurationId?: string | undefined
              }
            }
            output: ApiV2010AccountCallCallRecording
            outputFormat: 'json'
            status: 201
          }
      $get: {
        input: { param: { AccountSid: string; CallSid: string } } & {
          query: {
            DateCreated?: string | undefined
            'DateCreated<'?: string | undefined
            'DateCreated>'?: string | undefined
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          recordings?: ApiV2010AccountCallCallRecording[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Recordings/:Sid.json': {
      $post:
        | {
            input: { param: { AccountSid: string; CallSid: string; Sid: string } } & {
              json: { Status: CallRecordingEnumStatus; PauseBehavior?: string | undefined }
            } & { form: { Status: CallRecordingEnumStatus; PauseBehavior?: string | undefined } }
            output: ApiV2010AccountCallCallRecording
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { AccountSid: string; CallSid: string; Sid: string } } & {
              json: { Status: CallRecordingEnumStatus; PauseBehavior?: string | undefined }
            } & { form: { Status: CallRecordingEnumStatus; PauseBehavior?: string | undefined } }
            output: {
              code?: number | undefined
              message?: string | undefined
              more_info?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 408
          }
      $get: {
        input: { param: { AccountSid: string; CallSid: string; Sid: string } }
        output: ApiV2010AccountCallCallRecording
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { AccountSid: string; CallSid: string; Sid: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Conferences/:Sid.json': {
      $get: {
        input: { param: { AccountSid: string; Sid: string } }
        output: ApiV2010AccountConference
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { AccountSid: string; Sid: string } } & {
          json: {
            Status?: ConferenceEnumUpdateStatus | undefined
            AnnounceUrl?: string | undefined
            AnnounceMethod?: 'GET' | 'POST' | undefined
          }
        } & {
          form: {
            Status?: ConferenceEnumUpdateStatus | undefined
            AnnounceUrl?: string | undefined
            AnnounceMethod?: 'GET' | 'POST' | undefined
          }
        }
        output: ApiV2010AccountConference
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Conferences.json': {
      $get: {
        input: { param: { AccountSid: string } } & {
          query: {
            DateCreated?: string | undefined
            'DateCreated<'?: string | undefined
            'DateCreated>'?: string | undefined
            DateUpdated?: string | undefined
            'DateUpdated<'?: string | undefined
            'DateUpdated>'?: string | undefined
            FriendlyName?: string | undefined
            Status?: ConferenceEnumStatus | undefined
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          conferences?: ApiV2010AccountConference[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Conferences/:ConferenceSid/Recordings.json': {
      $get: {
        input: { param: { AccountSid: string; ConferenceSid: string } } & {
          query: {
            DateCreated?: string | undefined
            'DateCreated<'?: string | undefined
            'DateCreated>'?: string | undefined
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          recordings?: ApiV2010AccountConferenceConferenceRecording[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Conferences/:ConferenceSid/Recordings/:Sid.json': {
      $post: {
        input: { param: { AccountSid: string; ConferenceSid: string; Sid: string } } & {
          json: { Status: ConferenceRecordingEnumStatus; PauseBehavior?: string | undefined }
        } & { form: { Status: ConferenceRecordingEnumStatus; PauseBehavior?: string | undefined } }
        output: ApiV2010AccountConferenceConferenceRecording
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { AccountSid: string; ConferenceSid: string; Sid: string } }
        output: ApiV2010AccountConferenceConferenceRecording
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { AccountSid: string; ConferenceSid: string; Sid: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/ConnectApps/:Sid.json': {
      $get: {
        input: { param: { AccountSid: string; Sid: string } }
        output: ApiV2010AccountConnectApp
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { AccountSid: string; Sid: string } } & {
          json: {
            AuthorizeRedirectUrl?: string | undefined
            CompanyName?: string | undefined
            DeauthorizeCallbackMethod?: 'GET' | 'POST' | undefined
            DeauthorizeCallbackUrl?: string | undefined
            Description?: string | undefined
            FriendlyName?: string | undefined
            HomepageUrl?: string | undefined
            Permissions?: ConnectAppEnumPermission[] | undefined
          }
        } & {
          form: {
            AuthorizeRedirectUrl?: string | undefined
            CompanyName?: string | undefined
            DeauthorizeCallbackMethod?: 'GET' | 'POST' | undefined
            DeauthorizeCallbackUrl?: string | undefined
            Description?: string | undefined
            FriendlyName?: string | undefined
            HomepageUrl?: string | undefined
            Permissions?: ConnectAppEnumPermission[] | undefined
          }
        }
        output: ApiV2010AccountConnectApp
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { AccountSid: string; Sid: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/ConnectApps.json': {
      $get: {
        input: { param: { AccountSid: string } } & {
          query: {
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          connect_apps?: ApiV2010AccountConnectApp[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Addresses/:AddressSid/DependentPhoneNumbers.json': {
      $get: {
        input: { param: { AccountSid: string; AddressSid: string } } & {
          query: {
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          dependent_phone_numbers?: ApiV2010AccountAddressDependentPhoneNumber[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/:Sid.json': {
      $post: {
        input: { param: { AccountSid: string; Sid: string } } & {
          json: {
            AccountSid?: string | undefined
            ApiVersion?: string | undefined
            FriendlyName?: string | undefined
            SmsApplicationSid?: string | undefined
            SmsFallbackMethod?: 'GET' | 'POST' | undefined
            SmsFallbackUrl?: string | undefined
            SmsMethod?: 'GET' | 'POST' | undefined
            SmsUrl?: string | undefined
            StatusCallback?: string | undefined
            StatusCallbackMethod?: 'GET' | 'POST' | undefined
            VoiceApplicationSid?: string | undefined
            VoiceCallerIdLookup?: boolean | undefined
            VoiceFallbackMethod?: 'GET' | 'POST' | undefined
            VoiceFallbackUrl?: string | undefined
            VoiceMethod?: 'GET' | 'POST' | undefined
            VoiceUrl?: string | undefined
            EmergencyStatus?: IncomingPhoneNumberEnumEmergencyStatus | undefined
            EmergencyAddressSid?: string | undefined
            TrunkSid?: string | undefined
            VoiceReceiveMode?: IncomingPhoneNumberEnumVoiceReceiveMode | undefined
            IdentitySid?: string | undefined
            AddressSid?: string | undefined
            BundleSid?: string | undefined
          }
        } & {
          form: {
            AccountSid?: string | undefined
            ApiVersion?: string | undefined
            FriendlyName?: string | undefined
            SmsApplicationSid?: string | undefined
            SmsFallbackMethod?: 'GET' | 'POST' | undefined
            SmsFallbackUrl?: string | undefined
            SmsMethod?: 'GET' | 'POST' | undefined
            SmsUrl?: string | undefined
            StatusCallback?: string | undefined
            StatusCallbackMethod?: 'GET' | 'POST' | undefined
            VoiceApplicationSid?: string | undefined
            VoiceCallerIdLookup?: boolean | undefined
            VoiceFallbackMethod?: 'GET' | 'POST' | undefined
            VoiceFallbackUrl?: string | undefined
            VoiceMethod?: 'GET' | 'POST' | undefined
            VoiceUrl?: string | undefined
            EmergencyStatus?: IncomingPhoneNumberEnumEmergencyStatus | undefined
            EmergencyAddressSid?: string | undefined
            TrunkSid?: string | undefined
            VoiceReceiveMode?: IncomingPhoneNumberEnumVoiceReceiveMode | undefined
            IdentitySid?: string | undefined
            AddressSid?: string | undefined
            BundleSid?: string | undefined
          }
        }
        output: ApiV2010AccountIncomingPhoneNumber
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { AccountSid: string; Sid: string } }
        output: ApiV2010AccountIncomingPhoneNumber
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { AccountSid: string; Sid: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers.json': {
      $get: {
        input: { param: { AccountSid: string } } & {
          query: {
            Beta?: boolean | undefined
            FriendlyName?: string | undefined
            PhoneNumber?: string | undefined
            Origin?: string | undefined
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          incoming_phone_numbers?: ApiV2010AccountIncomingPhoneNumber[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { AccountSid: string } } & {
          json: {
            ApiVersion?: string | undefined
            FriendlyName?: string | undefined
            SmsApplicationSid?: string | undefined
            SmsFallbackMethod?: 'GET' | 'POST' | undefined
            SmsFallbackUrl?: string | undefined
            SmsMethod?: 'GET' | 'POST' | undefined
            SmsUrl?: string | undefined
            StatusCallback?: string | undefined
            StatusCallbackMethod?: 'GET' | 'POST' | undefined
            VoiceApplicationSid?: string | undefined
            VoiceCallerIdLookup?: boolean | undefined
            VoiceFallbackMethod?: 'GET' | 'POST' | undefined
            VoiceFallbackUrl?: string | undefined
            VoiceMethod?: 'GET' | 'POST' | undefined
            VoiceUrl?: string | undefined
            EmergencyStatus?: IncomingPhoneNumberEnumEmergencyStatus | undefined
            EmergencyAddressSid?: string | undefined
            TrunkSid?: string | undefined
            IdentitySid?: string | undefined
            AddressSid?: string | undefined
            VoiceReceiveMode?: IncomingPhoneNumberEnumVoiceReceiveMode | undefined
            BundleSid?: string | undefined
            PhoneNumber?: string | undefined
            AreaCode?: string | undefined
          }
        } & {
          form: {
            ApiVersion?: string | undefined
            FriendlyName?: string | undefined
            SmsApplicationSid?: string | undefined
            SmsFallbackMethod?: 'GET' | 'POST' | undefined
            SmsFallbackUrl?: string | undefined
            SmsMethod?: 'GET' | 'POST' | undefined
            SmsUrl?: string | undefined
            StatusCallback?: string | undefined
            StatusCallbackMethod?: 'GET' | 'POST' | undefined
            VoiceApplicationSid?: string | undefined
            VoiceCallerIdLookup?: boolean | undefined
            VoiceFallbackMethod?: 'GET' | 'POST' | undefined
            VoiceFallbackUrl?: string | undefined
            VoiceMethod?: 'GET' | 'POST' | undefined
            VoiceUrl?: string | undefined
            EmergencyStatus?: IncomingPhoneNumberEnumEmergencyStatus | undefined
            EmergencyAddressSid?: string | undefined
            TrunkSid?: string | undefined
            IdentitySid?: string | undefined
            AddressSid?: string | undefined
            VoiceReceiveMode?: IncomingPhoneNumberEnumVoiceReceiveMode | undefined
            BundleSid?: string | undefined
            PhoneNumber?: string | undefined
            AreaCode?: string | undefined
          }
        }
        output: ApiV2010AccountIncomingPhoneNumber
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/:ResourceSid/AssignedAddOns/:Sid.json': {
      $get: {
        input: { param: { AccountSid: string; ResourceSid: string; Sid: string } }
        output: ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { AccountSid: string; ResourceSid: string; Sid: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/:ResourceSid/AssignedAddOns.json': {
      $get: {
        input: { param: { AccountSid: string; ResourceSid: string } } & {
          query: {
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          assigned_add_ons?:
            | ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { AccountSid: string; ResourceSid: string } } & {
          json: { InstalledAddOnSid: string }
        } & { form: { InstalledAddOnSid: string } }
        output: ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/:ResourceSid/AssignedAddOns/:AssignedAddOnSid/Extensions/:Sid.json': {
      $get: {
        input: {
          param: { AccountSid: string; ResourceSid: string; AssignedAddOnSid: string; Sid: string }
        }
        output: ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnIncomingPhoneNumberAssignedAddOnExtension
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/:ResourceSid/AssignedAddOns/:AssignedAddOnSid/Extensions.json': {
      $get: {
        input: { param: { AccountSid: string; ResourceSid: string; AssignedAddOnSid: string } } & {
          query: {
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          extensions?:
            | ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnIncomingPhoneNumberAssignedAddOnExtension[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/Local.json': {
      $get: {
        input: { param: { AccountSid: string } } & {
          query: {
            Beta?: boolean | undefined
            FriendlyName?: string | undefined
            PhoneNumber?: string | undefined
            Origin?: string | undefined
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          incoming_phone_numbers?:
            | ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { AccountSid: string } } & {
          json: {
            PhoneNumber: string
            ApiVersion?: string | undefined
            FriendlyName?: string | undefined
            SmsApplicationSid?: string | undefined
            SmsFallbackMethod?: 'GET' | 'POST' | undefined
            SmsFallbackUrl?: string | undefined
            SmsMethod?: 'GET' | 'POST' | undefined
            SmsUrl?: string | undefined
            StatusCallback?: string | undefined
            StatusCallbackMethod?: 'GET' | 'POST' | undefined
            VoiceApplicationSid?: string | undefined
            VoiceCallerIdLookup?: boolean | undefined
            VoiceFallbackMethod?: 'GET' | 'POST' | undefined
            VoiceFallbackUrl?: string | undefined
            VoiceMethod?: 'GET' | 'POST' | undefined
            VoiceUrl?: string | undefined
            IdentitySid?: string | undefined
            AddressSid?: string | undefined
            EmergencyStatus?: IncomingPhoneNumberLocalEnumEmergencyStatus | undefined
            EmergencyAddressSid?: string | undefined
            TrunkSid?: string | undefined
            VoiceReceiveMode?: IncomingPhoneNumberLocalEnumVoiceReceiveMode | undefined
            BundleSid?: string | undefined
          }
        } & {
          form: {
            PhoneNumber: string
            ApiVersion?: string | undefined
            FriendlyName?: string | undefined
            SmsApplicationSid?: string | undefined
            SmsFallbackMethod?: 'GET' | 'POST' | undefined
            SmsFallbackUrl?: string | undefined
            SmsMethod?: 'GET' | 'POST' | undefined
            SmsUrl?: string | undefined
            StatusCallback?: string | undefined
            StatusCallbackMethod?: 'GET' | 'POST' | undefined
            VoiceApplicationSid?: string | undefined
            VoiceCallerIdLookup?: boolean | undefined
            VoiceFallbackMethod?: 'GET' | 'POST' | undefined
            VoiceFallbackUrl?: string | undefined
            VoiceMethod?: 'GET' | 'POST' | undefined
            VoiceUrl?: string | undefined
            IdentitySid?: string | undefined
            AddressSid?: string | undefined
            EmergencyStatus?: IncomingPhoneNumberLocalEnumEmergencyStatus | undefined
            EmergencyAddressSid?: string | undefined
            TrunkSid?: string | undefined
            VoiceReceiveMode?: IncomingPhoneNumberLocalEnumVoiceReceiveMode | undefined
            BundleSid?: string | undefined
          }
        }
        output: ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/Mobile.json': {
      $get: {
        input: { param: { AccountSid: string } } & {
          query: {
            Beta?: boolean | undefined
            FriendlyName?: string | undefined
            PhoneNumber?: string | undefined
            Origin?: string | undefined
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          incoming_phone_numbers?:
            | ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { AccountSid: string } } & {
          json: {
            PhoneNumber: string
            ApiVersion?: string | undefined
            FriendlyName?: string | undefined
            SmsApplicationSid?: string | undefined
            SmsFallbackMethod?: 'GET' | 'POST' | undefined
            SmsFallbackUrl?: string | undefined
            SmsMethod?: 'GET' | 'POST' | undefined
            SmsUrl?: string | undefined
            StatusCallback?: string | undefined
            StatusCallbackMethod?: 'GET' | 'POST' | undefined
            VoiceApplicationSid?: string | undefined
            VoiceCallerIdLookup?: boolean | undefined
            VoiceFallbackMethod?: 'GET' | 'POST' | undefined
            VoiceFallbackUrl?: string | undefined
            VoiceMethod?: 'GET' | 'POST' | undefined
            VoiceUrl?: string | undefined
            IdentitySid?: string | undefined
            AddressSid?: string | undefined
            EmergencyStatus?: IncomingPhoneNumberMobileEnumEmergencyStatus | undefined
            EmergencyAddressSid?: string | undefined
            TrunkSid?: string | undefined
            VoiceReceiveMode?: IncomingPhoneNumberMobileEnumVoiceReceiveMode | undefined
            BundleSid?: string | undefined
          }
        } & {
          form: {
            PhoneNumber: string
            ApiVersion?: string | undefined
            FriendlyName?: string | undefined
            SmsApplicationSid?: string | undefined
            SmsFallbackMethod?: 'GET' | 'POST' | undefined
            SmsFallbackUrl?: string | undefined
            SmsMethod?: 'GET' | 'POST' | undefined
            SmsUrl?: string | undefined
            StatusCallback?: string | undefined
            StatusCallbackMethod?: 'GET' | 'POST' | undefined
            VoiceApplicationSid?: string | undefined
            VoiceCallerIdLookup?: boolean | undefined
            VoiceFallbackMethod?: 'GET' | 'POST' | undefined
            VoiceFallbackUrl?: string | undefined
            VoiceMethod?: 'GET' | 'POST' | undefined
            VoiceUrl?: string | undefined
            IdentitySid?: string | undefined
            AddressSid?: string | undefined
            EmergencyStatus?: IncomingPhoneNumberMobileEnumEmergencyStatus | undefined
            EmergencyAddressSid?: string | undefined
            TrunkSid?: string | undefined
            VoiceReceiveMode?: IncomingPhoneNumberMobileEnumVoiceReceiveMode | undefined
            BundleSid?: string | undefined
          }
        }
        output: ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/TollFree.json': {
      $get: {
        input: { param: { AccountSid: string } } & {
          query: {
            Beta?: boolean | undefined
            FriendlyName?: string | undefined
            PhoneNumber?: string | undefined
            Origin?: string | undefined
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          incoming_phone_numbers?:
            | ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { AccountSid: string } } & {
          json: {
            PhoneNumber: string
            ApiVersion?: string | undefined
            FriendlyName?: string | undefined
            SmsApplicationSid?: string | undefined
            SmsFallbackMethod?: 'GET' | 'POST' | undefined
            SmsFallbackUrl?: string | undefined
            SmsMethod?: 'GET' | 'POST' | undefined
            SmsUrl?: string | undefined
            StatusCallback?: string | undefined
            StatusCallbackMethod?: 'GET' | 'POST' | undefined
            VoiceApplicationSid?: string | undefined
            VoiceCallerIdLookup?: boolean | undefined
            VoiceFallbackMethod?: 'GET' | 'POST' | undefined
            VoiceFallbackUrl?: string | undefined
            VoiceMethod?: 'GET' | 'POST' | undefined
            VoiceUrl?: string | undefined
            IdentitySid?: string | undefined
            AddressSid?: string | undefined
            EmergencyStatus?: IncomingPhoneNumberTollFreeEnumEmergencyStatus | undefined
            EmergencyAddressSid?: string | undefined
            TrunkSid?: string | undefined
            VoiceReceiveMode?: IncomingPhoneNumberTollFreeEnumVoiceReceiveMode | undefined
            BundleSid?: string | undefined
          }
        } & {
          form: {
            PhoneNumber: string
            ApiVersion?: string | undefined
            FriendlyName?: string | undefined
            SmsApplicationSid?: string | undefined
            SmsFallbackMethod?: 'GET' | 'POST' | undefined
            SmsFallbackUrl?: string | undefined
            SmsMethod?: 'GET' | 'POST' | undefined
            SmsUrl?: string | undefined
            StatusCallback?: string | undefined
            StatusCallbackMethod?: 'GET' | 'POST' | undefined
            VoiceApplicationSid?: string | undefined
            VoiceCallerIdLookup?: boolean | undefined
            VoiceFallbackMethod?: 'GET' | 'POST' | undefined
            VoiceFallbackUrl?: string | undefined
            VoiceMethod?: 'GET' | 'POST' | undefined
            VoiceUrl?: string | undefined
            IdentitySid?: string | undefined
            AddressSid?: string | undefined
            EmergencyStatus?: IncomingPhoneNumberTollFreeEnumEmergencyStatus | undefined
            EmergencyAddressSid?: string | undefined
            TrunkSid?: string | undefined
            VoiceReceiveMode?: IncomingPhoneNumberTollFreeEnumVoiceReceiveMode | undefined
            BundleSid?: string | undefined
          }
        }
        output: ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Keys/:Sid.json': {
      $get: {
        input: { param: { AccountSid: string; Sid: string } }
        output: ApiV2010AccountKey
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { AccountSid: string; Sid: string } } & {
          json: { FriendlyName?: string | undefined }
        } & { form: { FriendlyName?: string | undefined } }
        output: ApiV2010AccountKey
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { AccountSid: string; Sid: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Keys.json': {
      $get: {
        input: { param: { AccountSid: string } } & {
          query: {
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          keys?: ApiV2010AccountKey[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { AccountSid: string } } & {
          json: { FriendlyName?: string | undefined }
        } & { form: { FriendlyName?: string | undefined } }
        output: ApiV2010AccountNewKey
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Messages/:MessageSid/Media/:Sid.json': {
      $delete: {
        input: { param: { AccountSid: string; MessageSid: string; Sid: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { AccountSid: string; MessageSid: string; Sid: string } }
        output: ApiV2010AccountMessageMedia
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Messages/:MessageSid/Media.json': {
      $get: {
        input: { param: { AccountSid: string; MessageSid: string } } & {
          query: {
            DateCreated?: string | undefined
            'DateCreated<'?: string | undefined
            'DateCreated>'?: string | undefined
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          media_list?: ApiV2010AccountMessageMedia[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Queues/:QueueSid/Members/:CallSid.json': {
      $get: {
        input: { param: { AccountSid: string; QueueSid: string; CallSid: string } }
        output: ApiV2010AccountQueueMember
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { AccountSid: string; QueueSid: string; CallSid: string } } & {
          json: { Url: string; Method?: 'GET' | 'POST' | undefined }
        } & { form: { Url: string; Method?: 'GET' | 'POST' | undefined } }
        output: ApiV2010AccountQueueMember
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Queues/:QueueSid/Members.json': {
      $get: {
        input: { param: { AccountSid: string; QueueSid: string } } & {
          query: {
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          queue_members?: ApiV2010AccountQueueMember[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Messages.json': {
      $post: {
        input: { param: { AccountSid: string } } & {
          json: {
            To: string
            StatusCallback?: string | undefined
            ApplicationSid?: string | undefined
            MaxPrice?: number | undefined
            ProvideFeedback?: boolean | undefined
            Attempt?: number | undefined
            ValidityPeriod?: number | undefined
            ForceDelivery?: boolean | undefined
            ContentRetention?: MessageEnumContentRetention | undefined
            AddressRetention?: MessageEnumAddressRetention | undefined
            SmartEncoded?: boolean | undefined
            PersistentAction?: string[] | undefined
            TrafficType?: MessageEnumTrafficType | undefined
            ShortenUrls?: boolean | undefined
            ScheduleType?: MessageEnumScheduleType | undefined
            SendAt?: string | undefined
            SendAsMms?: boolean | undefined
            ContentVariables?: string | undefined
            MessageIntent?: string | undefined
            RiskCheck?: MessageEnumRiskCheck | undefined
            From?: string | undefined
            FallbackFrom?: string | undefined
            MessagingServiceSid?: string | undefined
            Body?: string | undefined
            MediaUrl?: string[] | undefined
            ContentSid?: string | undefined
          }
        } & {
          form: {
            To: string
            StatusCallback?: string | undefined
            ApplicationSid?: string | undefined
            MaxPrice?: number | undefined
            ProvideFeedback?: boolean | undefined
            Attempt?: number | undefined
            ValidityPeriod?: number | undefined
            ForceDelivery?: boolean | undefined
            ContentRetention?: MessageEnumContentRetention | undefined
            AddressRetention?: MessageEnumAddressRetention | undefined
            SmartEncoded?: boolean | undefined
            PersistentAction?: string[] | undefined
            TrafficType?: MessageEnumTrafficType | undefined
            ShortenUrls?: boolean | undefined
            ScheduleType?: MessageEnumScheduleType | undefined
            SendAt?: string | undefined
            SendAsMms?: boolean | undefined
            ContentVariables?: string | undefined
            MessageIntent?: string | undefined
            RiskCheck?: MessageEnumRiskCheck | undefined
            From?: string | undefined
            FallbackFrom?: string | undefined
            MessagingServiceSid?: string | undefined
            Body?: string | undefined
            MediaUrl?: string[] | undefined
            ContentSid?: string | undefined
          }
        }
        output: ApiV2010AccountMessage
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { AccountSid: string } } & {
          query: {
            To?: string | undefined
            From?: string | undefined
            DateSent?: string | undefined
            'DateSent<'?: string | undefined
            'DateSent>'?: string | undefined
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          messages?: ApiV2010AccountMessage[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Messages/:Sid.json': {
      $delete: {
        input: { param: { AccountSid: string; Sid: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { AccountSid: string; Sid: string } }
        output: ApiV2010AccountMessage
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { AccountSid: string; Sid: string } } & {
          json: { Body?: string | undefined; Status?: MessageEnumUpdateStatus | undefined }
        } & { form: { Body?: string | undefined; Status?: MessageEnumUpdateStatus | undefined } }
        output: ApiV2010AccountMessage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Messages/:MessageSid/Feedback.json': {
      $post: {
        input: { param: { AccountSid: string; MessageSid: string } } & {
          json: { Outcome?: MessageFeedbackEnumOutcome | undefined }
        } & { form: { Outcome?: MessageFeedbackEnumOutcome | undefined } }
        output: ApiV2010AccountMessageMessageFeedback
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/SigningKeys.json': {
      $post: {
        input: { param: { AccountSid: string } } & {
          json: { FriendlyName?: string | undefined }
        } & { form: { FriendlyName?: string | undefined } }
        output: ApiV2010AccountNewSigningKey
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { AccountSid: string } } & {
          query: {
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          signing_keys?: ApiV2010AccountSigningKey[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Notifications/:Sid.json': {
      $get: {
        input: { param: { AccountSid: string; Sid: string } }
        output: ApiV2010AccountNotificationInstance
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Notifications.json': {
      $get: {
        input: { param: { AccountSid: string } } & {
          query: {
            Log?: number | undefined
            MessageDate?: string | undefined
            'MessageDate<'?: string | undefined
            'MessageDate>'?: string | undefined
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          notifications?: ApiV2010AccountNotification[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/OutgoingCallerIds/:Sid.json': {
      $get: {
        input: { param: { AccountSid: string; Sid: string } }
        output: ApiV2010AccountOutgoingCallerId
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { AccountSid: string; Sid: string } } & {
          json: { FriendlyName?: string | undefined }
        } & { form: { FriendlyName?: string | undefined } }
        output: ApiV2010AccountOutgoingCallerId
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { AccountSid: string; Sid: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/OutgoingCallerIds.json': {
      $get: {
        input: { param: { AccountSid: string } } & {
          query: {
            PhoneNumber?: string | undefined
            FriendlyName?: string | undefined
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          outgoing_caller_ids?: ApiV2010AccountOutgoingCallerId[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { AccountSid: string } } & {
          json: {
            PhoneNumber: string
            FriendlyName?: string | undefined
            CallDelay?: number | undefined
            Extension?: string | undefined
            StatusCallback?: string | undefined
            StatusCallbackMethod?: 'GET' | 'POST' | undefined
          }
        } & {
          form: {
            PhoneNumber: string
            FriendlyName?: string | undefined
            CallDelay?: number | undefined
            Extension?: string | undefined
            StatusCallback?: string | undefined
            StatusCallbackMethod?: 'GET' | 'POST' | undefined
          }
        }
        output: ApiV2010AccountValidationRequest
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Conferences/:ConferenceSid/Participants/:CallSid.json': {
      $get: {
        input: { param: { AccountSid: string; ConferenceSid: string; CallSid: string } }
        output: ApiV2010AccountConferenceParticipant
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { AccountSid: string; ConferenceSid: string; CallSid: string } } & {
          json: {
            Muted?: boolean | undefined
            Hold?: boolean | undefined
            HoldUrl?: string | undefined
            HoldMethod?: 'GET' | 'POST' | undefined
            AnnounceUrl?: string | undefined
            AnnounceMethod?: 'GET' | 'POST' | undefined
            WaitUrl?: string | undefined
            WaitMethod?: 'GET' | 'POST' | undefined
            BeepOnExit?: boolean | undefined
            EndConferenceOnExit?: boolean | undefined
            Coaching?: boolean | undefined
            CallSidToCoach?: string | undefined
          }
        } & {
          form: {
            Muted?: boolean | undefined
            Hold?: boolean | undefined
            HoldUrl?: string | undefined
            HoldMethod?: 'GET' | 'POST' | undefined
            AnnounceUrl?: string | undefined
            AnnounceMethod?: 'GET' | 'POST' | undefined
            WaitUrl?: string | undefined
            WaitMethod?: 'GET' | 'POST' | undefined
            BeepOnExit?: boolean | undefined
            EndConferenceOnExit?: boolean | undefined
            Coaching?: boolean | undefined
            CallSidToCoach?: string | undefined
          }
        }
        output: ApiV2010AccountConferenceParticipant
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { AccountSid: string; ConferenceSid: string; CallSid: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Conferences/:ConferenceSid/Participants.json': {
      $post: {
        input: { param: { AccountSid: string; ConferenceSid: string } } & {
          json: {
            From: string
            To: string
            StatusCallback?: string | undefined
            StatusCallbackMethod?: 'GET' | 'POST' | undefined
            StatusCallbackEvent?: string[] | undefined
            Label?: string | undefined
            Timeout?: number | undefined
            Record?: boolean | undefined
            Muted?: boolean | undefined
            Beep?: string | undefined
            StartConferenceOnEnter?: boolean | undefined
            EndConferenceOnExit?: boolean | undefined
            WaitUrl?: string | undefined
            WaitMethod?: 'GET' | 'POST' | undefined
            EarlyMedia?: boolean | undefined
            MaxParticipants?: number | undefined
            ConferenceRecord?: string | undefined
            ConferenceTrim?: string | undefined
            ConferenceStatusCallback?: string | undefined
            ConferenceStatusCallbackMethod?: 'GET' | 'POST' | undefined
            ConferenceStatusCallbackEvent?: string[] | undefined
            RecordingChannels?: string | undefined
            RecordingStatusCallback?: string | undefined
            RecordingStatusCallbackMethod?: 'GET' | 'POST' | undefined
            SipAuthUsername?: string | undefined
            SipAuthPassword?: string | undefined
            Region?: string | undefined
            ConferenceRecordingStatusCallback?: string | undefined
            ConferenceRecordingStatusCallbackMethod?: 'GET' | 'POST' | undefined
            RecordingStatusCallbackEvent?: string[] | undefined
            ConferenceRecordingStatusCallbackEvent?: string[] | undefined
            Coaching?: boolean | undefined
            CallSidToCoach?: string | undefined
            JitterBufferSize?: string | undefined
            Byoc?: string | undefined
            CallerId?: string | undefined
            CallReason?: string | undefined
            RecordingTrack?: string | undefined
            RecordingConfigurationId?: string | undefined
            TimeLimit?: number | undefined
            MachineDetection?: string | undefined
            MachineDetectionTimeout?: number | undefined
            MachineDetectionSpeechThreshold?: number | undefined
            MachineDetectionSpeechEndThreshold?: number | undefined
            MachineDetectionSilenceTimeout?: number | undefined
            AmdStatusCallback?: string | undefined
            AmdStatusCallbackMethod?: 'GET' | 'POST' | undefined
            Trim?: string | undefined
            CallToken?: string | undefined
            Passports?: string | undefined
            ClientNotificationUrl?: string | undefined
            CallerDisplayName?: string | undefined
            EmergencyCallerPosition?: string | undefined
            EmergencyCallerLocation?: string | undefined
            EmergencyName?: string | undefined
            EmergencyAddress?: string | undefined
            EmergencyZipCode?: string | undefined
            EmergencyCity?: string | undefined
            EmergencyState?: string | undefined
            EmergencyCountry?: string | undefined
          }
        } & {
          form: {
            From: string
            To: string
            StatusCallback?: string | undefined
            StatusCallbackMethod?: 'GET' | 'POST' | undefined
            StatusCallbackEvent?: string[] | undefined
            Label?: string | undefined
            Timeout?: number | undefined
            Record?: boolean | undefined
            Muted?: boolean | undefined
            Beep?: string | undefined
            StartConferenceOnEnter?: boolean | undefined
            EndConferenceOnExit?: boolean | undefined
            WaitUrl?: string | undefined
            WaitMethod?: 'GET' | 'POST' | undefined
            EarlyMedia?: boolean | undefined
            MaxParticipants?: number | undefined
            ConferenceRecord?: string | undefined
            ConferenceTrim?: string | undefined
            ConferenceStatusCallback?: string | undefined
            ConferenceStatusCallbackMethod?: 'GET' | 'POST' | undefined
            ConferenceStatusCallbackEvent?: string[] | undefined
            RecordingChannels?: string | undefined
            RecordingStatusCallback?: string | undefined
            RecordingStatusCallbackMethod?: 'GET' | 'POST' | undefined
            SipAuthUsername?: string | undefined
            SipAuthPassword?: string | undefined
            Region?: string | undefined
            ConferenceRecordingStatusCallback?: string | undefined
            ConferenceRecordingStatusCallbackMethod?: 'GET' | 'POST' | undefined
            RecordingStatusCallbackEvent?: string[] | undefined
            ConferenceRecordingStatusCallbackEvent?: string[] | undefined
            Coaching?: boolean | undefined
            CallSidToCoach?: string | undefined
            JitterBufferSize?: string | undefined
            Byoc?: string | undefined
            CallerId?: string | undefined
            CallReason?: string | undefined
            RecordingTrack?: string | undefined
            RecordingConfigurationId?: string | undefined
            TimeLimit?: number | undefined
            MachineDetection?: string | undefined
            MachineDetectionTimeout?: number | undefined
            MachineDetectionSpeechThreshold?: number | undefined
            MachineDetectionSpeechEndThreshold?: number | undefined
            MachineDetectionSilenceTimeout?: number | undefined
            AmdStatusCallback?: string | undefined
            AmdStatusCallbackMethod?: 'GET' | 'POST' | undefined
            Trim?: string | undefined
            CallToken?: string | undefined
            Passports?: string | undefined
            ClientNotificationUrl?: string | undefined
            CallerDisplayName?: string | undefined
            EmergencyCallerPosition?: string | undefined
            EmergencyCallerLocation?: string | undefined
            EmergencyName?: string | undefined
            EmergencyAddress?: string | undefined
            EmergencyZipCode?: string | undefined
            EmergencyCity?: string | undefined
            EmergencyState?: string | undefined
            EmergencyCountry?: string | undefined
          }
        }
        output: ApiV2010AccountConferenceParticipant
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { AccountSid: string; ConferenceSid: string } } & {
          query: {
            Muted?: boolean | undefined
            Hold?: boolean | undefined
            Coaching?: boolean | undefined
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          participants?: ApiV2010AccountConferenceParticipant[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Payments.json': {
      $post: {
        input: { param: { AccountSid: string; CallSid: string } } & {
          json: {
            IdempotencyKey: string
            StatusCallback: string
            BankAccountType?: PaymentsEnumBankAccountType | undefined
            ChargeAmount?: number | undefined
            Currency?: string | undefined
            Description?: string | undefined
            Input?: string | undefined
            MinPostalCodeLength?: number | undefined
            Parameter?: { [x: string]: unknown } | undefined
            PaymentConnector?: string | undefined
            PaymentMethod?: PaymentsEnumPaymentMethod | undefined
            PostalCode?: boolean | undefined
            SecurityCode?: boolean | undefined
            Timeout?: number | undefined
            TokenType?: PaymentsEnumTokenType | undefined
            ValidCardTypes?: string | undefined
            RequireMatchingInputs?: string | undefined
            Confirmation?: 'true' | 'false' | undefined
          }
        } & {
          form: {
            IdempotencyKey: string
            StatusCallback: string
            BankAccountType?: PaymentsEnumBankAccountType | undefined
            ChargeAmount?: number | undefined
            Currency?: string | undefined
            Description?: string | undefined
            Input?: string | undefined
            MinPostalCodeLength?: number | undefined
            Parameter?: { [x: string]: unknown } | undefined
            PaymentConnector?: string | undefined
            PaymentMethod?: PaymentsEnumPaymentMethod | undefined
            PostalCode?: boolean | undefined
            SecurityCode?: boolean | undefined
            Timeout?: number | undefined
            TokenType?: PaymentsEnumTokenType | undefined
            ValidCardTypes?: string | undefined
            RequireMatchingInputs?: string | undefined
            Confirmation?: 'true' | 'false' | undefined
          }
        }
        output: ApiV2010AccountCallPayments
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Payments/:Sid.json': {
      $post: {
        input: { param: { AccountSid: string; CallSid: string; Sid: string } } & {
          json: {
            IdempotencyKey: string
            StatusCallback: string
            Capture?: PaymentsEnumCapture | undefined
            Status?: PaymentsEnumStatus | undefined
          }
        } & {
          form: {
            IdempotencyKey: string
            StatusCallback: string
            Capture?: PaymentsEnumCapture | undefined
            Status?: PaymentsEnumStatus | undefined
          }
        }
        output: ApiV2010AccountCallPayments
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Queues/:Sid.json': {
      $get: {
        input: { param: { AccountSid: string; Sid: string } }
        output: ApiV2010AccountQueue
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { AccountSid: string; Sid: string } } & {
          json: { FriendlyName?: string | undefined; MaxSize?: number | undefined }
        } & { form: { FriendlyName?: string | undefined; MaxSize?: number | undefined } }
        output: ApiV2010AccountQueue
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { AccountSid: string; Sid: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Queues.json': {
      $get: {
        input: { param: { AccountSid: string } } & {
          query: {
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          queues?: ApiV2010AccountQueue[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { AccountSid: string } } & {
          json: { FriendlyName: string; MaxSize?: number | undefined }
        } & { form: { FriendlyName: string; MaxSize?: number | undefined } }
        output: ApiV2010AccountQueue
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Transcriptions.json': {
      $post: {
        input: { param: { AccountSid: string; CallSid: string } } & {
          json: {
            Name?: string | undefined
            Track?: RealtimeTranscriptionEnumTrack | undefined
            StatusCallbackUrl?: string | undefined
            StatusCallbackMethod?: 'GET' | 'POST' | undefined
            InboundTrackLabel?: string | undefined
            OutboundTrackLabel?: string | undefined
            PartialResults?: boolean | undefined
            LanguageCode?: string | undefined
            TranscriptionEngine?: string | undefined
            ProfanityFilter?: boolean | undefined
            SpeechModel?: string | undefined
            Hints?: string | undefined
            EnableAutomaticPunctuation?: boolean | undefined
            IntelligenceService?: string | undefined
            ConversationConfiguration?: string | undefined
            ConversationId?: string | undefined
            TranscriptionConfigurationId?: string | undefined
            EnableProviderData?: boolean | undefined
          }
        } & {
          form: {
            Name?: string | undefined
            Track?: RealtimeTranscriptionEnumTrack | undefined
            StatusCallbackUrl?: string | undefined
            StatusCallbackMethod?: 'GET' | 'POST' | undefined
            InboundTrackLabel?: string | undefined
            OutboundTrackLabel?: string | undefined
            PartialResults?: boolean | undefined
            LanguageCode?: string | undefined
            TranscriptionEngine?: string | undefined
            ProfanityFilter?: boolean | undefined
            SpeechModel?: string | undefined
            Hints?: string | undefined
            EnableAutomaticPunctuation?: boolean | undefined
            IntelligenceService?: string | undefined
            ConversationConfiguration?: string | undefined
            ConversationId?: string | undefined
            TranscriptionConfigurationId?: string | undefined
            EnableProviderData?: boolean | undefined
          }
        }
        output: ApiV2010AccountCallRealtimeTranscription
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Transcriptions/:Sid.json': {
      $post: {
        input: { param: { AccountSid: string; CallSid: string; Sid: string } } & {
          json: { Status: RealtimeTranscriptionEnumUpdateStatus }
        } & { form: { Status: RealtimeTranscriptionEnumUpdateStatus } }
        output: ApiV2010AccountCallRealtimeTranscription
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Recordings/:Sid.json': {
      $get: {
        input: { param: { AccountSid: string; Sid: string } } & {
          query: { IncludeSoftDeleted?: boolean | undefined }
        }
        output: ApiV2010AccountRecording
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { AccountSid: string; Sid: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Recordings.json': {
      $get: {
        input: { param: { AccountSid: string } } & {
          query: {
            DateCreated?: string | undefined
            'DateCreated<'?: string | undefined
            'DateCreated>'?: string | undefined
            CallSid?: string | undefined
            ConferenceSid?: string | undefined
            IncludeSoftDeleted?: boolean | undefined
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          recordings?: ApiV2010AccountRecording[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Recordings/:ReferenceSid/AddOnResults/:Sid.json': {
      $get: {
        input: { param: { AccountSid: string; ReferenceSid: string; Sid: string } }
        output: ApiV2010AccountRecordingRecordingAddOnResult
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { AccountSid: string; ReferenceSid: string; Sid: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Recordings/:ReferenceSid/AddOnResults.json': {
      $get: {
        input: { param: { AccountSid: string; ReferenceSid: string } } & {
          query: {
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          add_on_results?: ApiV2010AccountRecordingRecordingAddOnResult[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Recordings/:ReferenceSid/AddOnResults/:AddOnResultSid/Payloads/:Sid.json': {
      $get: {
        input: {
          param: { AccountSid: string; ReferenceSid: string; AddOnResultSid: string; Sid: string }
        }
        output: ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: {
          param: { AccountSid: string; ReferenceSid: string; AddOnResultSid: string; Sid: string }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Recordings/:ReferenceSid/AddOnResults/:AddOnResultSid/Payloads.json': {
      $get: {
        input: { param: { AccountSid: string; ReferenceSid: string; AddOnResultSid: string } } & {
          query: {
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          payloads?:
            | ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Recordings/:ReferenceSid/AddOnResults/:AddOnResultSid/Payloads/:PayloadSid/Data.json': {
      $get: {
        input: {
          param: {
            AccountSid: string
            ReferenceSid: string
            AddOnResultSid: string
            PayloadSid: string
          }
        }
        output: ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayloadRecordingAddOnResultPayloadData
        outputFormat: 'json'
        status: 307
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Recordings/:RecordingSid/Transcriptions/:Sid.json': {
      $get: {
        input: { param: { AccountSid: string; RecordingSid: string; Sid: string } }
        output: ApiV2010AccountRecordingRecordingTranscription
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { AccountSid: string; RecordingSid: string; Sid: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Recordings/:RecordingSid/Transcriptions.json': {
      $get: {
        input: { param: { AccountSid: string; RecordingSid: string } } & {
          query: {
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          transcriptions?: ApiV2010AccountRecordingRecordingTranscription[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/SMS/ShortCodes/:Sid.json': {
      $get: {
        input: { param: { AccountSid: string; Sid: string } }
        output: ApiV2010AccountShortCode
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { AccountSid: string; Sid: string } } & {
          json: {
            FriendlyName?: string | undefined
            ApiVersion?: string | undefined
            SmsUrl?: string | undefined
            SmsMethod?: 'GET' | 'POST' | undefined
            SmsFallbackUrl?: string | undefined
            SmsFallbackMethod?: 'GET' | 'POST' | undefined
          }
        } & {
          form: {
            FriendlyName?: string | undefined
            ApiVersion?: string | undefined
            SmsUrl?: string | undefined
            SmsMethod?: 'GET' | 'POST' | undefined
            SmsFallbackUrl?: string | undefined
            SmsFallbackMethod?: 'GET' | 'POST' | undefined
          }
        }
        output: ApiV2010AccountShortCode
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/SMS/ShortCodes.json': {
      $get: {
        input: { param: { AccountSid: string } } & {
          query: {
            FriendlyName?: string | undefined
            ShortCode?: string | undefined
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          short_codes?: ApiV2010AccountShortCode[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/SigningKeys/:Sid.json': {
      $get: {
        input: { param: { AccountSid: string; Sid: string } }
        output: ApiV2010AccountSigningKey
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { AccountSid: string; Sid: string } } & {
          json: { FriendlyName?: string | undefined }
        } & { form: { FriendlyName?: string | undefined } }
        output: ApiV2010AccountSigningKey
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { AccountSid: string; Sid: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/Auth/Calls/CredentialListMappings.json': {
      $post: {
        input: { param: { AccountSid: string; DomainSid: string } } & {
          json: { CredentialListSid: string }
        } & { form: { CredentialListSid: string } }
        output: ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { AccountSid: string; DomainSid: string } } & {
          query: {
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          contents?:
            | ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/Auth/Calls/CredentialListMappings/:Sid.json': {
      $get: {
        input: { param: { AccountSid: string; DomainSid: string; Sid: string } }
        output: ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { AccountSid: string; DomainSid: string; Sid: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/Auth/Calls/IpAccessControlListMappings.json': {
      $post: {
        input: { param: { AccountSid: string; DomainSid: string } } & {
          json: { IpAccessControlListSid: string }
        } & { form: { IpAccessControlListSid: string } }
        output: ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIpAccessControlListMapping
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { AccountSid: string; DomainSid: string } } & {
          query: {
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          contents?:
            | ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIpAccessControlListMapping[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/Auth/Calls/IpAccessControlListMappings/:Sid.json': {
      $get: {
        input: { param: { AccountSid: string; DomainSid: string; Sid: string } }
        output: ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIpAccessControlListMapping
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { AccountSid: string; DomainSid: string; Sid: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/Auth/Registrations/CredentialListMappings.json': {
      $post: {
        input: { param: { AccountSid: string; DomainSid: string } } & {
          json: { CredentialListSid: string }
        } & { form: { CredentialListSid: string } }
        output: ApiV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { AccountSid: string; DomainSid: string } } & {
          query: {
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          contents?:
            | ApiV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/Auth/Registrations/CredentialListMappings/:Sid.json': {
      $get: {
        input: { param: { AccountSid: string; DomainSid: string; Sid: string } }
        output: ApiV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { AccountSid: string; DomainSid: string; Sid: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/SIP/CredentialLists/:CredentialListSid/Credentials.json': {
      $get: {
        input: { param: { AccountSid: string; CredentialListSid: string } } & {
          query: {
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          credentials?: ApiV2010AccountSipSipCredentialListSipCredential[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { AccountSid: string; CredentialListSid: string } } & {
          json: { Username: string; Password: string }
        } & { form: { Username: string; Password: string } }
        output: ApiV2010AccountSipSipCredentialListSipCredential
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/SIP/CredentialLists/:CredentialListSid/Credentials/:Sid.json': {
      $get: {
        input: { param: { AccountSid: string; CredentialListSid: string; Sid: string } }
        output: ApiV2010AccountSipSipCredentialListSipCredential
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { AccountSid: string; CredentialListSid: string; Sid: string } } & {
          json: { Password?: string | undefined }
        } & { form: { Password?: string | undefined } }
        output: ApiV2010AccountSipSipCredentialListSipCredential
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { AccountSid: string; CredentialListSid: string; Sid: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/SIP/CredentialLists.json': {
      $get: {
        input: { param: { AccountSid: string } } & {
          query: {
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          credential_lists?: ApiV2010AccountSipSipCredentialList[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { AccountSid: string } } & { json: { FriendlyName: string } } & {
          form: { FriendlyName: string }
        }
        output: ApiV2010AccountSipSipCredentialList
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/SIP/CredentialLists/:Sid.json': {
      $get: {
        input: { param: { AccountSid: string; Sid: string } }
        output: ApiV2010AccountSipSipCredentialList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { AccountSid: string; Sid: string } } & {
          json: { FriendlyName: string }
        } & { form: { FriendlyName: string } }
        output: ApiV2010AccountSipSipCredentialList
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { AccountSid: string; Sid: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/CredentialListMappings.json': {
      $post: {
        input: { param: { AccountSid: string; DomainSid: string } } & {
          json: { CredentialListSid: string }
        } & { form: { CredentialListSid: string } }
        output: ApiV2010AccountSipSipDomainSipCredentialListMapping
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { AccountSid: string; DomainSid: string } } & {
          query: {
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          credential_list_mappings?:
            | ApiV2010AccountSipSipDomainSipCredentialListMapping[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/CredentialListMappings/:Sid.json': {
      $get: {
        input: { param: { AccountSid: string; DomainSid: string; Sid: string } }
        output: ApiV2010AccountSipSipDomainSipCredentialListMapping
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { AccountSid: string; DomainSid: string; Sid: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains.json': {
      $get: {
        input: { param: { AccountSid: string } } & {
          query: {
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          domains?: ApiV2010AccountSipSipDomain[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { AccountSid: string } } & {
          json: {
            DomainName: string
            FriendlyName?: string | undefined
            VoiceUrl?: string | undefined
            VoiceMethod?: 'GET' | 'POST' | undefined
            VoiceFallbackUrl?: string | undefined
            VoiceFallbackMethod?: 'GET' | 'POST' | undefined
            VoiceStatusCallbackUrl?: string | undefined
            VoiceStatusCallbackMethod?: 'GET' | 'POST' | undefined
            SipRegistration?: boolean | undefined
            EmergencyCallingEnabled?: boolean | undefined
            Secure?: boolean | undefined
            ByocTrunkSid?: string | undefined
            EmergencyCallerSid?: string | undefined
          }
        } & {
          form: {
            DomainName: string
            FriendlyName?: string | undefined
            VoiceUrl?: string | undefined
            VoiceMethod?: 'GET' | 'POST' | undefined
            VoiceFallbackUrl?: string | undefined
            VoiceFallbackMethod?: 'GET' | 'POST' | undefined
            VoiceStatusCallbackUrl?: string | undefined
            VoiceStatusCallbackMethod?: 'GET' | 'POST' | undefined
            SipRegistration?: boolean | undefined
            EmergencyCallingEnabled?: boolean | undefined
            Secure?: boolean | undefined
            ByocTrunkSid?: string | undefined
            EmergencyCallerSid?: string | undefined
          }
        }
        output: ApiV2010AccountSipSipDomain
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:Sid.json': {
      $get: {
        input: { param: { AccountSid: string; Sid: string } }
        output: ApiV2010AccountSipSipDomain
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { AccountSid: string; Sid: string } } & {
          json: {
            FriendlyName?: string | undefined
            VoiceFallbackMethod?: 'GET' | 'POST' | undefined
            VoiceFallbackUrl?: string | undefined
            VoiceMethod?: 'GET' | 'POST' | undefined
            VoiceStatusCallbackMethod?: 'GET' | 'POST' | undefined
            VoiceStatusCallbackUrl?: string | undefined
            VoiceUrl?: string | undefined
            SipRegistration?: boolean | undefined
            DomainName?: string | undefined
            EmergencyCallingEnabled?: boolean | undefined
            Secure?: boolean | undefined
            ByocTrunkSid?: string | undefined
            EmergencyCallerSid?: string | undefined
          }
        } & {
          form: {
            FriendlyName?: string | undefined
            VoiceFallbackMethod?: 'GET' | 'POST' | undefined
            VoiceFallbackUrl?: string | undefined
            VoiceMethod?: 'GET' | 'POST' | undefined
            VoiceStatusCallbackMethod?: 'GET' | 'POST' | undefined
            VoiceStatusCallbackUrl?: string | undefined
            VoiceUrl?: string | undefined
            SipRegistration?: boolean | undefined
            DomainName?: string | undefined
            EmergencyCallingEnabled?: boolean | undefined
            Secure?: boolean | undefined
            ByocTrunkSid?: string | undefined
            EmergencyCallerSid?: string | undefined
          }
        }
        output: ApiV2010AccountSipSipDomain
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { AccountSid: string; Sid: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/SIP/IpAccessControlLists.json': {
      $get: {
        input: { param: { AccountSid: string } } & {
          query: {
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          ip_access_control_lists?: ApiV2010AccountSipSipIpAccessControlList[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { AccountSid: string } } & { json: { FriendlyName: string } } & {
          form: { FriendlyName: string }
        }
        output: ApiV2010AccountSipSipIpAccessControlList
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/SIP/IpAccessControlLists/:Sid.json': {
      $get: {
        input: { param: { AccountSid: string; Sid: string } }
        output: ApiV2010AccountSipSipIpAccessControlList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { AccountSid: string; Sid: string } } & {
          json: { FriendlyName: string }
        } & { form: { FriendlyName: string } }
        output: ApiV2010AccountSipSipIpAccessControlList
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { AccountSid: string; Sid: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/IpAccessControlListMappings/:Sid.json': {
      $get: {
        input: { param: { AccountSid: string; DomainSid: string; Sid: string } }
        output: ApiV2010AccountSipSipDomainSipIpAccessControlListMapping
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { AccountSid: string; DomainSid: string; Sid: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/IpAccessControlListMappings.json': {
      $post: {
        input: { param: { AccountSid: string; DomainSid: string } } & {
          json: { IpAccessControlListSid: string }
        } & { form: { IpAccessControlListSid: string } }
        output: ApiV2010AccountSipSipDomainSipIpAccessControlListMapping
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { AccountSid: string; DomainSid: string } } & {
          query: {
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          ip_access_control_list_mappings?:
            | ApiV2010AccountSipSipDomainSipIpAccessControlListMapping[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/SIP/IpAccessControlLists/:IpAccessControlListSid/IpAddresses.json': {
      $get: {
        input: { param: { AccountSid: string; IpAccessControlListSid: string } } & {
          query: {
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          ip_addresses?: ApiV2010AccountSipSipIpAccessControlListSipIpAddress[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { AccountSid: string; IpAccessControlListSid: string } } & {
          json: { FriendlyName: string; IpAddress: string; CidrPrefixLength?: number | undefined }
        } & {
          form: { FriendlyName: string; IpAddress: string; CidrPrefixLength?: number | undefined }
        }
        output: ApiV2010AccountSipSipIpAccessControlListSipIpAddress
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/SIP/IpAccessControlLists/:IpAccessControlListSid/IpAddresses/:Sid.json': {
      $get: {
        input: { param: { AccountSid: string; IpAccessControlListSid: string; Sid: string } }
        output: ApiV2010AccountSipSipIpAccessControlListSipIpAddress
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { AccountSid: string; IpAccessControlListSid: string; Sid: string } } & {
          json: {
            IpAddress?: string | undefined
            FriendlyName?: string | undefined
            CidrPrefixLength?: number | undefined
          }
        } & {
          form: {
            IpAddress?: string | undefined
            FriendlyName?: string | undefined
            CidrPrefixLength?: number | undefined
          }
        }
        output: ApiV2010AccountSipSipIpAccessControlListSipIpAddress
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { AccountSid: string; IpAccessControlListSid: string; Sid: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Siprec.json': {
      $post: {
        input: { param: { AccountSid: string; CallSid: string } } & {
          json: {
            Name?: string | undefined
            ConnectorName?: string | undefined
            Track?: SiprecEnumTrack | undefined
            StatusCallback?: string | undefined
            StatusCallbackMethod?: 'GET' | 'POST' | undefined
            'Parameter1.Name'?: string | undefined
            'Parameter1.Value'?: string | undefined
            'Parameter2.Name'?: string | undefined
            'Parameter2.Value'?: string | undefined
            'Parameter3.Name'?: string | undefined
            'Parameter3.Value'?: string | undefined
            'Parameter4.Name'?: string | undefined
            'Parameter4.Value'?: string | undefined
            'Parameter5.Name'?: string | undefined
            'Parameter5.Value'?: string | undefined
            'Parameter6.Name'?: string | undefined
            'Parameter6.Value'?: string | undefined
            'Parameter7.Name'?: string | undefined
            'Parameter7.Value'?: string | undefined
            'Parameter8.Name'?: string | undefined
            'Parameter8.Value'?: string | undefined
            'Parameter9.Name'?: string | undefined
            'Parameter9.Value'?: string | undefined
            'Parameter10.Name'?: string | undefined
            'Parameter10.Value'?: string | undefined
            'Parameter11.Name'?: string | undefined
            'Parameter11.Value'?: string | undefined
            'Parameter12.Name'?: string | undefined
            'Parameter12.Value'?: string | undefined
            'Parameter13.Name'?: string | undefined
            'Parameter13.Value'?: string | undefined
            'Parameter14.Name'?: string | undefined
            'Parameter14.Value'?: string | undefined
            'Parameter15.Name'?: string | undefined
            'Parameter15.Value'?: string | undefined
            'Parameter16.Name'?: string | undefined
            'Parameter16.Value'?: string | undefined
            'Parameter17.Name'?: string | undefined
            'Parameter17.Value'?: string | undefined
            'Parameter18.Name'?: string | undefined
            'Parameter18.Value'?: string | undefined
            'Parameter19.Name'?: string | undefined
            'Parameter19.Value'?: string | undefined
            'Parameter20.Name'?: string | undefined
            'Parameter20.Value'?: string | undefined
            'Parameter21.Name'?: string | undefined
            'Parameter21.Value'?: string | undefined
            'Parameter22.Name'?: string | undefined
            'Parameter22.Value'?: string | undefined
            'Parameter23.Name'?: string | undefined
            'Parameter23.Value'?: string | undefined
            'Parameter24.Name'?: string | undefined
            'Parameter24.Value'?: string | undefined
            'Parameter25.Name'?: string | undefined
            'Parameter25.Value'?: string | undefined
            'Parameter26.Name'?: string | undefined
            'Parameter26.Value'?: string | undefined
            'Parameter27.Name'?: string | undefined
            'Parameter27.Value'?: string | undefined
            'Parameter28.Name'?: string | undefined
            'Parameter28.Value'?: string | undefined
            'Parameter29.Name'?: string | undefined
            'Parameter29.Value'?: string | undefined
            'Parameter30.Name'?: string | undefined
            'Parameter30.Value'?: string | undefined
            'Parameter31.Name'?: string | undefined
            'Parameter31.Value'?: string | undefined
            'Parameter32.Name'?: string | undefined
            'Parameter32.Value'?: string | undefined
            'Parameter33.Name'?: string | undefined
            'Parameter33.Value'?: string | undefined
            'Parameter34.Name'?: string | undefined
            'Parameter34.Value'?: string | undefined
            'Parameter35.Name'?: string | undefined
            'Parameter35.Value'?: string | undefined
            'Parameter36.Name'?: string | undefined
            'Parameter36.Value'?: string | undefined
            'Parameter37.Name'?: string | undefined
            'Parameter37.Value'?: string | undefined
            'Parameter38.Name'?: string | undefined
            'Parameter38.Value'?: string | undefined
            'Parameter39.Name'?: string | undefined
            'Parameter39.Value'?: string | undefined
            'Parameter40.Name'?: string | undefined
            'Parameter40.Value'?: string | undefined
            'Parameter41.Name'?: string | undefined
            'Parameter41.Value'?: string | undefined
            'Parameter42.Name'?: string | undefined
            'Parameter42.Value'?: string | undefined
            'Parameter43.Name'?: string | undefined
            'Parameter43.Value'?: string | undefined
            'Parameter44.Name'?: string | undefined
            'Parameter44.Value'?: string | undefined
            'Parameter45.Name'?: string | undefined
            'Parameter45.Value'?: string | undefined
            'Parameter46.Name'?: string | undefined
            'Parameter46.Value'?: string | undefined
            'Parameter47.Name'?: string | undefined
            'Parameter47.Value'?: string | undefined
            'Parameter48.Name'?: string | undefined
            'Parameter48.Value'?: string | undefined
            'Parameter49.Name'?: string | undefined
            'Parameter49.Value'?: string | undefined
            'Parameter50.Name'?: string | undefined
            'Parameter50.Value'?: string | undefined
            'Parameter51.Name'?: string | undefined
            'Parameter51.Value'?: string | undefined
            'Parameter52.Name'?: string | undefined
            'Parameter52.Value'?: string | undefined
            'Parameter53.Name'?: string | undefined
            'Parameter53.Value'?: string | undefined
            'Parameter54.Name'?: string | undefined
            'Parameter54.Value'?: string | undefined
            'Parameter55.Name'?: string | undefined
            'Parameter55.Value'?: string | undefined
            'Parameter56.Name'?: string | undefined
            'Parameter56.Value'?: string | undefined
            'Parameter57.Name'?: string | undefined
            'Parameter57.Value'?: string | undefined
            'Parameter58.Name'?: string | undefined
            'Parameter58.Value'?: string | undefined
            'Parameter59.Name'?: string | undefined
            'Parameter59.Value'?: string | undefined
            'Parameter60.Name'?: string | undefined
            'Parameter60.Value'?: string | undefined
            'Parameter61.Name'?: string | undefined
            'Parameter61.Value'?: string | undefined
            'Parameter62.Name'?: string | undefined
            'Parameter62.Value'?: string | undefined
            'Parameter63.Name'?: string | undefined
            'Parameter63.Value'?: string | undefined
            'Parameter64.Name'?: string | undefined
            'Parameter64.Value'?: string | undefined
            'Parameter65.Name'?: string | undefined
            'Parameter65.Value'?: string | undefined
            'Parameter66.Name'?: string | undefined
            'Parameter66.Value'?: string | undefined
            'Parameter67.Name'?: string | undefined
            'Parameter67.Value'?: string | undefined
            'Parameter68.Name'?: string | undefined
            'Parameter68.Value'?: string | undefined
            'Parameter69.Name'?: string | undefined
            'Parameter69.Value'?: string | undefined
            'Parameter70.Name'?: string | undefined
            'Parameter70.Value'?: string | undefined
            'Parameter71.Name'?: string | undefined
            'Parameter71.Value'?: string | undefined
            'Parameter72.Name'?: string | undefined
            'Parameter72.Value'?: string | undefined
            'Parameter73.Name'?: string | undefined
            'Parameter73.Value'?: string | undefined
            'Parameter74.Name'?: string | undefined
            'Parameter74.Value'?: string | undefined
            'Parameter75.Name'?: string | undefined
            'Parameter75.Value'?: string | undefined
            'Parameter76.Name'?: string | undefined
            'Parameter76.Value'?: string | undefined
            'Parameter77.Name'?: string | undefined
            'Parameter77.Value'?: string | undefined
            'Parameter78.Name'?: string | undefined
            'Parameter78.Value'?: string | undefined
            'Parameter79.Name'?: string | undefined
            'Parameter79.Value'?: string | undefined
            'Parameter80.Name'?: string | undefined
            'Parameter80.Value'?: string | undefined
            'Parameter81.Name'?: string | undefined
            'Parameter81.Value'?: string | undefined
            'Parameter82.Name'?: string | undefined
            'Parameter82.Value'?: string | undefined
            'Parameter83.Name'?: string | undefined
            'Parameter83.Value'?: string | undefined
            'Parameter84.Name'?: string | undefined
            'Parameter84.Value'?: string | undefined
            'Parameter85.Name'?: string | undefined
            'Parameter85.Value'?: string | undefined
            'Parameter86.Name'?: string | undefined
            'Parameter86.Value'?: string | undefined
            'Parameter87.Name'?: string | undefined
            'Parameter87.Value'?: string | undefined
            'Parameter88.Name'?: string | undefined
            'Parameter88.Value'?: string | undefined
            'Parameter89.Name'?: string | undefined
            'Parameter89.Value'?: string | undefined
            'Parameter90.Name'?: string | undefined
            'Parameter90.Value'?: string | undefined
            'Parameter91.Name'?: string | undefined
            'Parameter91.Value'?: string | undefined
            'Parameter92.Name'?: string | undefined
            'Parameter92.Value'?: string | undefined
            'Parameter93.Name'?: string | undefined
            'Parameter93.Value'?: string | undefined
            'Parameter94.Name'?: string | undefined
            'Parameter94.Value'?: string | undefined
            'Parameter95.Name'?: string | undefined
            'Parameter95.Value'?: string | undefined
            'Parameter96.Name'?: string | undefined
            'Parameter96.Value'?: string | undefined
            'Parameter97.Name'?: string | undefined
            'Parameter97.Value'?: string | undefined
            'Parameter98.Name'?: string | undefined
            'Parameter98.Value'?: string | undefined
            'Parameter99.Name'?: string | undefined
            'Parameter99.Value'?: string | undefined
          }
        } & {
          form: {
            Name?: string | undefined
            ConnectorName?: string | undefined
            Track?: SiprecEnumTrack | undefined
            StatusCallback?: string | undefined
            StatusCallbackMethod?: 'GET' | 'POST' | undefined
            'Parameter1.Name'?: string | undefined
            'Parameter1.Value'?: string | undefined
            'Parameter2.Name'?: string | undefined
            'Parameter2.Value'?: string | undefined
            'Parameter3.Name'?: string | undefined
            'Parameter3.Value'?: string | undefined
            'Parameter4.Name'?: string | undefined
            'Parameter4.Value'?: string | undefined
            'Parameter5.Name'?: string | undefined
            'Parameter5.Value'?: string | undefined
            'Parameter6.Name'?: string | undefined
            'Parameter6.Value'?: string | undefined
            'Parameter7.Name'?: string | undefined
            'Parameter7.Value'?: string | undefined
            'Parameter8.Name'?: string | undefined
            'Parameter8.Value'?: string | undefined
            'Parameter9.Name'?: string | undefined
            'Parameter9.Value'?: string | undefined
            'Parameter10.Name'?: string | undefined
            'Parameter10.Value'?: string | undefined
            'Parameter11.Name'?: string | undefined
            'Parameter11.Value'?: string | undefined
            'Parameter12.Name'?: string | undefined
            'Parameter12.Value'?: string | undefined
            'Parameter13.Name'?: string | undefined
            'Parameter13.Value'?: string | undefined
            'Parameter14.Name'?: string | undefined
            'Parameter14.Value'?: string | undefined
            'Parameter15.Name'?: string | undefined
            'Parameter15.Value'?: string | undefined
            'Parameter16.Name'?: string | undefined
            'Parameter16.Value'?: string | undefined
            'Parameter17.Name'?: string | undefined
            'Parameter17.Value'?: string | undefined
            'Parameter18.Name'?: string | undefined
            'Parameter18.Value'?: string | undefined
            'Parameter19.Name'?: string | undefined
            'Parameter19.Value'?: string | undefined
            'Parameter20.Name'?: string | undefined
            'Parameter20.Value'?: string | undefined
            'Parameter21.Name'?: string | undefined
            'Parameter21.Value'?: string | undefined
            'Parameter22.Name'?: string | undefined
            'Parameter22.Value'?: string | undefined
            'Parameter23.Name'?: string | undefined
            'Parameter23.Value'?: string | undefined
            'Parameter24.Name'?: string | undefined
            'Parameter24.Value'?: string | undefined
            'Parameter25.Name'?: string | undefined
            'Parameter25.Value'?: string | undefined
            'Parameter26.Name'?: string | undefined
            'Parameter26.Value'?: string | undefined
            'Parameter27.Name'?: string | undefined
            'Parameter27.Value'?: string | undefined
            'Parameter28.Name'?: string | undefined
            'Parameter28.Value'?: string | undefined
            'Parameter29.Name'?: string | undefined
            'Parameter29.Value'?: string | undefined
            'Parameter30.Name'?: string | undefined
            'Parameter30.Value'?: string | undefined
            'Parameter31.Name'?: string | undefined
            'Parameter31.Value'?: string | undefined
            'Parameter32.Name'?: string | undefined
            'Parameter32.Value'?: string | undefined
            'Parameter33.Name'?: string | undefined
            'Parameter33.Value'?: string | undefined
            'Parameter34.Name'?: string | undefined
            'Parameter34.Value'?: string | undefined
            'Parameter35.Name'?: string | undefined
            'Parameter35.Value'?: string | undefined
            'Parameter36.Name'?: string | undefined
            'Parameter36.Value'?: string | undefined
            'Parameter37.Name'?: string | undefined
            'Parameter37.Value'?: string | undefined
            'Parameter38.Name'?: string | undefined
            'Parameter38.Value'?: string | undefined
            'Parameter39.Name'?: string | undefined
            'Parameter39.Value'?: string | undefined
            'Parameter40.Name'?: string | undefined
            'Parameter40.Value'?: string | undefined
            'Parameter41.Name'?: string | undefined
            'Parameter41.Value'?: string | undefined
            'Parameter42.Name'?: string | undefined
            'Parameter42.Value'?: string | undefined
            'Parameter43.Name'?: string | undefined
            'Parameter43.Value'?: string | undefined
            'Parameter44.Name'?: string | undefined
            'Parameter44.Value'?: string | undefined
            'Parameter45.Name'?: string | undefined
            'Parameter45.Value'?: string | undefined
            'Parameter46.Name'?: string | undefined
            'Parameter46.Value'?: string | undefined
            'Parameter47.Name'?: string | undefined
            'Parameter47.Value'?: string | undefined
            'Parameter48.Name'?: string | undefined
            'Parameter48.Value'?: string | undefined
            'Parameter49.Name'?: string | undefined
            'Parameter49.Value'?: string | undefined
            'Parameter50.Name'?: string | undefined
            'Parameter50.Value'?: string | undefined
            'Parameter51.Name'?: string | undefined
            'Parameter51.Value'?: string | undefined
            'Parameter52.Name'?: string | undefined
            'Parameter52.Value'?: string | undefined
            'Parameter53.Name'?: string | undefined
            'Parameter53.Value'?: string | undefined
            'Parameter54.Name'?: string | undefined
            'Parameter54.Value'?: string | undefined
            'Parameter55.Name'?: string | undefined
            'Parameter55.Value'?: string | undefined
            'Parameter56.Name'?: string | undefined
            'Parameter56.Value'?: string | undefined
            'Parameter57.Name'?: string | undefined
            'Parameter57.Value'?: string | undefined
            'Parameter58.Name'?: string | undefined
            'Parameter58.Value'?: string | undefined
            'Parameter59.Name'?: string | undefined
            'Parameter59.Value'?: string | undefined
            'Parameter60.Name'?: string | undefined
            'Parameter60.Value'?: string | undefined
            'Parameter61.Name'?: string | undefined
            'Parameter61.Value'?: string | undefined
            'Parameter62.Name'?: string | undefined
            'Parameter62.Value'?: string | undefined
            'Parameter63.Name'?: string | undefined
            'Parameter63.Value'?: string | undefined
            'Parameter64.Name'?: string | undefined
            'Parameter64.Value'?: string | undefined
            'Parameter65.Name'?: string | undefined
            'Parameter65.Value'?: string | undefined
            'Parameter66.Name'?: string | undefined
            'Parameter66.Value'?: string | undefined
            'Parameter67.Name'?: string | undefined
            'Parameter67.Value'?: string | undefined
            'Parameter68.Name'?: string | undefined
            'Parameter68.Value'?: string | undefined
            'Parameter69.Name'?: string | undefined
            'Parameter69.Value'?: string | undefined
            'Parameter70.Name'?: string | undefined
            'Parameter70.Value'?: string | undefined
            'Parameter71.Name'?: string | undefined
            'Parameter71.Value'?: string | undefined
            'Parameter72.Name'?: string | undefined
            'Parameter72.Value'?: string | undefined
            'Parameter73.Name'?: string | undefined
            'Parameter73.Value'?: string | undefined
            'Parameter74.Name'?: string | undefined
            'Parameter74.Value'?: string | undefined
            'Parameter75.Name'?: string | undefined
            'Parameter75.Value'?: string | undefined
            'Parameter76.Name'?: string | undefined
            'Parameter76.Value'?: string | undefined
            'Parameter77.Name'?: string | undefined
            'Parameter77.Value'?: string | undefined
            'Parameter78.Name'?: string | undefined
            'Parameter78.Value'?: string | undefined
            'Parameter79.Name'?: string | undefined
            'Parameter79.Value'?: string | undefined
            'Parameter80.Name'?: string | undefined
            'Parameter80.Value'?: string | undefined
            'Parameter81.Name'?: string | undefined
            'Parameter81.Value'?: string | undefined
            'Parameter82.Name'?: string | undefined
            'Parameter82.Value'?: string | undefined
            'Parameter83.Name'?: string | undefined
            'Parameter83.Value'?: string | undefined
            'Parameter84.Name'?: string | undefined
            'Parameter84.Value'?: string | undefined
            'Parameter85.Name'?: string | undefined
            'Parameter85.Value'?: string | undefined
            'Parameter86.Name'?: string | undefined
            'Parameter86.Value'?: string | undefined
            'Parameter87.Name'?: string | undefined
            'Parameter87.Value'?: string | undefined
            'Parameter88.Name'?: string | undefined
            'Parameter88.Value'?: string | undefined
            'Parameter89.Name'?: string | undefined
            'Parameter89.Value'?: string | undefined
            'Parameter90.Name'?: string | undefined
            'Parameter90.Value'?: string | undefined
            'Parameter91.Name'?: string | undefined
            'Parameter91.Value'?: string | undefined
            'Parameter92.Name'?: string | undefined
            'Parameter92.Value'?: string | undefined
            'Parameter93.Name'?: string | undefined
            'Parameter93.Value'?: string | undefined
            'Parameter94.Name'?: string | undefined
            'Parameter94.Value'?: string | undefined
            'Parameter95.Name'?: string | undefined
            'Parameter95.Value'?: string | undefined
            'Parameter96.Name'?: string | undefined
            'Parameter96.Value'?: string | undefined
            'Parameter97.Name'?: string | undefined
            'Parameter97.Value'?: string | undefined
            'Parameter98.Name'?: string | undefined
            'Parameter98.Value'?: string | undefined
            'Parameter99.Name'?: string | undefined
            'Parameter99.Value'?: string | undefined
          }
        }
        output: ApiV2010AccountCallSiprec
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Siprec/:Sid.json': {
      $post: {
        input: { param: { AccountSid: string; CallSid: string; Sid: string } } & {
          json: { Status: SiprecEnumUpdateStatus }
        } & { form: { Status: SiprecEnumUpdateStatus } }
        output: ApiV2010AccountCallSiprec
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Streams.json': {
      $post: {
        input: { param: { AccountSid: string; CallSid: string } } & {
          json: {
            Url: string
            Name?: string | undefined
            Track?: StreamEnumTrack | undefined
            StatusCallback?: string | undefined
            StatusCallbackMethod?: 'GET' | 'POST' | undefined
            'Parameter1.Name'?: string | undefined
            'Parameter1.Value'?: string | undefined
            'Parameter2.Name'?: string | undefined
            'Parameter2.Value'?: string | undefined
            'Parameter3.Name'?: string | undefined
            'Parameter3.Value'?: string | undefined
            'Parameter4.Name'?: string | undefined
            'Parameter4.Value'?: string | undefined
            'Parameter5.Name'?: string | undefined
            'Parameter5.Value'?: string | undefined
            'Parameter6.Name'?: string | undefined
            'Parameter6.Value'?: string | undefined
            'Parameter7.Name'?: string | undefined
            'Parameter7.Value'?: string | undefined
            'Parameter8.Name'?: string | undefined
            'Parameter8.Value'?: string | undefined
            'Parameter9.Name'?: string | undefined
            'Parameter9.Value'?: string | undefined
            'Parameter10.Name'?: string | undefined
            'Parameter10.Value'?: string | undefined
            'Parameter11.Name'?: string | undefined
            'Parameter11.Value'?: string | undefined
            'Parameter12.Name'?: string | undefined
            'Parameter12.Value'?: string | undefined
            'Parameter13.Name'?: string | undefined
            'Parameter13.Value'?: string | undefined
            'Parameter14.Name'?: string | undefined
            'Parameter14.Value'?: string | undefined
            'Parameter15.Name'?: string | undefined
            'Parameter15.Value'?: string | undefined
            'Parameter16.Name'?: string | undefined
            'Parameter16.Value'?: string | undefined
            'Parameter17.Name'?: string | undefined
            'Parameter17.Value'?: string | undefined
            'Parameter18.Name'?: string | undefined
            'Parameter18.Value'?: string | undefined
            'Parameter19.Name'?: string | undefined
            'Parameter19.Value'?: string | undefined
            'Parameter20.Name'?: string | undefined
            'Parameter20.Value'?: string | undefined
            'Parameter21.Name'?: string | undefined
            'Parameter21.Value'?: string | undefined
            'Parameter22.Name'?: string | undefined
            'Parameter22.Value'?: string | undefined
            'Parameter23.Name'?: string | undefined
            'Parameter23.Value'?: string | undefined
            'Parameter24.Name'?: string | undefined
            'Parameter24.Value'?: string | undefined
            'Parameter25.Name'?: string | undefined
            'Parameter25.Value'?: string | undefined
            'Parameter26.Name'?: string | undefined
            'Parameter26.Value'?: string | undefined
            'Parameter27.Name'?: string | undefined
            'Parameter27.Value'?: string | undefined
            'Parameter28.Name'?: string | undefined
            'Parameter28.Value'?: string | undefined
            'Parameter29.Name'?: string | undefined
            'Parameter29.Value'?: string | undefined
            'Parameter30.Name'?: string | undefined
            'Parameter30.Value'?: string | undefined
            'Parameter31.Name'?: string | undefined
            'Parameter31.Value'?: string | undefined
            'Parameter32.Name'?: string | undefined
            'Parameter32.Value'?: string | undefined
            'Parameter33.Name'?: string | undefined
            'Parameter33.Value'?: string | undefined
            'Parameter34.Name'?: string | undefined
            'Parameter34.Value'?: string | undefined
            'Parameter35.Name'?: string | undefined
            'Parameter35.Value'?: string | undefined
            'Parameter36.Name'?: string | undefined
            'Parameter36.Value'?: string | undefined
            'Parameter37.Name'?: string | undefined
            'Parameter37.Value'?: string | undefined
            'Parameter38.Name'?: string | undefined
            'Parameter38.Value'?: string | undefined
            'Parameter39.Name'?: string | undefined
            'Parameter39.Value'?: string | undefined
            'Parameter40.Name'?: string | undefined
            'Parameter40.Value'?: string | undefined
            'Parameter41.Name'?: string | undefined
            'Parameter41.Value'?: string | undefined
            'Parameter42.Name'?: string | undefined
            'Parameter42.Value'?: string | undefined
            'Parameter43.Name'?: string | undefined
            'Parameter43.Value'?: string | undefined
            'Parameter44.Name'?: string | undefined
            'Parameter44.Value'?: string | undefined
            'Parameter45.Name'?: string | undefined
            'Parameter45.Value'?: string | undefined
            'Parameter46.Name'?: string | undefined
            'Parameter46.Value'?: string | undefined
            'Parameter47.Name'?: string | undefined
            'Parameter47.Value'?: string | undefined
            'Parameter48.Name'?: string | undefined
            'Parameter48.Value'?: string | undefined
            'Parameter49.Name'?: string | undefined
            'Parameter49.Value'?: string | undefined
            'Parameter50.Name'?: string | undefined
            'Parameter50.Value'?: string | undefined
            'Parameter51.Name'?: string | undefined
            'Parameter51.Value'?: string | undefined
            'Parameter52.Name'?: string | undefined
            'Parameter52.Value'?: string | undefined
            'Parameter53.Name'?: string | undefined
            'Parameter53.Value'?: string | undefined
            'Parameter54.Name'?: string | undefined
            'Parameter54.Value'?: string | undefined
            'Parameter55.Name'?: string | undefined
            'Parameter55.Value'?: string | undefined
            'Parameter56.Name'?: string | undefined
            'Parameter56.Value'?: string | undefined
            'Parameter57.Name'?: string | undefined
            'Parameter57.Value'?: string | undefined
            'Parameter58.Name'?: string | undefined
            'Parameter58.Value'?: string | undefined
            'Parameter59.Name'?: string | undefined
            'Parameter59.Value'?: string | undefined
            'Parameter60.Name'?: string | undefined
            'Parameter60.Value'?: string | undefined
            'Parameter61.Name'?: string | undefined
            'Parameter61.Value'?: string | undefined
            'Parameter62.Name'?: string | undefined
            'Parameter62.Value'?: string | undefined
            'Parameter63.Name'?: string | undefined
            'Parameter63.Value'?: string | undefined
            'Parameter64.Name'?: string | undefined
            'Parameter64.Value'?: string | undefined
            'Parameter65.Name'?: string | undefined
            'Parameter65.Value'?: string | undefined
            'Parameter66.Name'?: string | undefined
            'Parameter66.Value'?: string | undefined
            'Parameter67.Name'?: string | undefined
            'Parameter67.Value'?: string | undefined
            'Parameter68.Name'?: string | undefined
            'Parameter68.Value'?: string | undefined
            'Parameter69.Name'?: string | undefined
            'Parameter69.Value'?: string | undefined
            'Parameter70.Name'?: string | undefined
            'Parameter70.Value'?: string | undefined
            'Parameter71.Name'?: string | undefined
            'Parameter71.Value'?: string | undefined
            'Parameter72.Name'?: string | undefined
            'Parameter72.Value'?: string | undefined
            'Parameter73.Name'?: string | undefined
            'Parameter73.Value'?: string | undefined
            'Parameter74.Name'?: string | undefined
            'Parameter74.Value'?: string | undefined
            'Parameter75.Name'?: string | undefined
            'Parameter75.Value'?: string | undefined
            'Parameter76.Name'?: string | undefined
            'Parameter76.Value'?: string | undefined
            'Parameter77.Name'?: string | undefined
            'Parameter77.Value'?: string | undefined
            'Parameter78.Name'?: string | undefined
            'Parameter78.Value'?: string | undefined
            'Parameter79.Name'?: string | undefined
            'Parameter79.Value'?: string | undefined
            'Parameter80.Name'?: string | undefined
            'Parameter80.Value'?: string | undefined
            'Parameter81.Name'?: string | undefined
            'Parameter81.Value'?: string | undefined
            'Parameter82.Name'?: string | undefined
            'Parameter82.Value'?: string | undefined
            'Parameter83.Name'?: string | undefined
            'Parameter83.Value'?: string | undefined
            'Parameter84.Name'?: string | undefined
            'Parameter84.Value'?: string | undefined
            'Parameter85.Name'?: string | undefined
            'Parameter85.Value'?: string | undefined
            'Parameter86.Name'?: string | undefined
            'Parameter86.Value'?: string | undefined
            'Parameter87.Name'?: string | undefined
            'Parameter87.Value'?: string | undefined
            'Parameter88.Name'?: string | undefined
            'Parameter88.Value'?: string | undefined
            'Parameter89.Name'?: string | undefined
            'Parameter89.Value'?: string | undefined
            'Parameter90.Name'?: string | undefined
            'Parameter90.Value'?: string | undefined
            'Parameter91.Name'?: string | undefined
            'Parameter91.Value'?: string | undefined
            'Parameter92.Name'?: string | undefined
            'Parameter92.Value'?: string | undefined
            'Parameter93.Name'?: string | undefined
            'Parameter93.Value'?: string | undefined
            'Parameter94.Name'?: string | undefined
            'Parameter94.Value'?: string | undefined
            'Parameter95.Name'?: string | undefined
            'Parameter95.Value'?: string | undefined
            'Parameter96.Name'?: string | undefined
            'Parameter96.Value'?: string | undefined
            'Parameter97.Name'?: string | undefined
            'Parameter97.Value'?: string | undefined
            'Parameter98.Name'?: string | undefined
            'Parameter98.Value'?: string | undefined
            'Parameter99.Name'?: string | undefined
            'Parameter99.Value'?: string | undefined
          }
        } & {
          form: {
            Url: string
            Name?: string | undefined
            Track?: StreamEnumTrack | undefined
            StatusCallback?: string | undefined
            StatusCallbackMethod?: 'GET' | 'POST' | undefined
            'Parameter1.Name'?: string | undefined
            'Parameter1.Value'?: string | undefined
            'Parameter2.Name'?: string | undefined
            'Parameter2.Value'?: string | undefined
            'Parameter3.Name'?: string | undefined
            'Parameter3.Value'?: string | undefined
            'Parameter4.Name'?: string | undefined
            'Parameter4.Value'?: string | undefined
            'Parameter5.Name'?: string | undefined
            'Parameter5.Value'?: string | undefined
            'Parameter6.Name'?: string | undefined
            'Parameter6.Value'?: string | undefined
            'Parameter7.Name'?: string | undefined
            'Parameter7.Value'?: string | undefined
            'Parameter8.Name'?: string | undefined
            'Parameter8.Value'?: string | undefined
            'Parameter9.Name'?: string | undefined
            'Parameter9.Value'?: string | undefined
            'Parameter10.Name'?: string | undefined
            'Parameter10.Value'?: string | undefined
            'Parameter11.Name'?: string | undefined
            'Parameter11.Value'?: string | undefined
            'Parameter12.Name'?: string | undefined
            'Parameter12.Value'?: string | undefined
            'Parameter13.Name'?: string | undefined
            'Parameter13.Value'?: string | undefined
            'Parameter14.Name'?: string | undefined
            'Parameter14.Value'?: string | undefined
            'Parameter15.Name'?: string | undefined
            'Parameter15.Value'?: string | undefined
            'Parameter16.Name'?: string | undefined
            'Parameter16.Value'?: string | undefined
            'Parameter17.Name'?: string | undefined
            'Parameter17.Value'?: string | undefined
            'Parameter18.Name'?: string | undefined
            'Parameter18.Value'?: string | undefined
            'Parameter19.Name'?: string | undefined
            'Parameter19.Value'?: string | undefined
            'Parameter20.Name'?: string | undefined
            'Parameter20.Value'?: string | undefined
            'Parameter21.Name'?: string | undefined
            'Parameter21.Value'?: string | undefined
            'Parameter22.Name'?: string | undefined
            'Parameter22.Value'?: string | undefined
            'Parameter23.Name'?: string | undefined
            'Parameter23.Value'?: string | undefined
            'Parameter24.Name'?: string | undefined
            'Parameter24.Value'?: string | undefined
            'Parameter25.Name'?: string | undefined
            'Parameter25.Value'?: string | undefined
            'Parameter26.Name'?: string | undefined
            'Parameter26.Value'?: string | undefined
            'Parameter27.Name'?: string | undefined
            'Parameter27.Value'?: string | undefined
            'Parameter28.Name'?: string | undefined
            'Parameter28.Value'?: string | undefined
            'Parameter29.Name'?: string | undefined
            'Parameter29.Value'?: string | undefined
            'Parameter30.Name'?: string | undefined
            'Parameter30.Value'?: string | undefined
            'Parameter31.Name'?: string | undefined
            'Parameter31.Value'?: string | undefined
            'Parameter32.Name'?: string | undefined
            'Parameter32.Value'?: string | undefined
            'Parameter33.Name'?: string | undefined
            'Parameter33.Value'?: string | undefined
            'Parameter34.Name'?: string | undefined
            'Parameter34.Value'?: string | undefined
            'Parameter35.Name'?: string | undefined
            'Parameter35.Value'?: string | undefined
            'Parameter36.Name'?: string | undefined
            'Parameter36.Value'?: string | undefined
            'Parameter37.Name'?: string | undefined
            'Parameter37.Value'?: string | undefined
            'Parameter38.Name'?: string | undefined
            'Parameter38.Value'?: string | undefined
            'Parameter39.Name'?: string | undefined
            'Parameter39.Value'?: string | undefined
            'Parameter40.Name'?: string | undefined
            'Parameter40.Value'?: string | undefined
            'Parameter41.Name'?: string | undefined
            'Parameter41.Value'?: string | undefined
            'Parameter42.Name'?: string | undefined
            'Parameter42.Value'?: string | undefined
            'Parameter43.Name'?: string | undefined
            'Parameter43.Value'?: string | undefined
            'Parameter44.Name'?: string | undefined
            'Parameter44.Value'?: string | undefined
            'Parameter45.Name'?: string | undefined
            'Parameter45.Value'?: string | undefined
            'Parameter46.Name'?: string | undefined
            'Parameter46.Value'?: string | undefined
            'Parameter47.Name'?: string | undefined
            'Parameter47.Value'?: string | undefined
            'Parameter48.Name'?: string | undefined
            'Parameter48.Value'?: string | undefined
            'Parameter49.Name'?: string | undefined
            'Parameter49.Value'?: string | undefined
            'Parameter50.Name'?: string | undefined
            'Parameter50.Value'?: string | undefined
            'Parameter51.Name'?: string | undefined
            'Parameter51.Value'?: string | undefined
            'Parameter52.Name'?: string | undefined
            'Parameter52.Value'?: string | undefined
            'Parameter53.Name'?: string | undefined
            'Parameter53.Value'?: string | undefined
            'Parameter54.Name'?: string | undefined
            'Parameter54.Value'?: string | undefined
            'Parameter55.Name'?: string | undefined
            'Parameter55.Value'?: string | undefined
            'Parameter56.Name'?: string | undefined
            'Parameter56.Value'?: string | undefined
            'Parameter57.Name'?: string | undefined
            'Parameter57.Value'?: string | undefined
            'Parameter58.Name'?: string | undefined
            'Parameter58.Value'?: string | undefined
            'Parameter59.Name'?: string | undefined
            'Parameter59.Value'?: string | undefined
            'Parameter60.Name'?: string | undefined
            'Parameter60.Value'?: string | undefined
            'Parameter61.Name'?: string | undefined
            'Parameter61.Value'?: string | undefined
            'Parameter62.Name'?: string | undefined
            'Parameter62.Value'?: string | undefined
            'Parameter63.Name'?: string | undefined
            'Parameter63.Value'?: string | undefined
            'Parameter64.Name'?: string | undefined
            'Parameter64.Value'?: string | undefined
            'Parameter65.Name'?: string | undefined
            'Parameter65.Value'?: string | undefined
            'Parameter66.Name'?: string | undefined
            'Parameter66.Value'?: string | undefined
            'Parameter67.Name'?: string | undefined
            'Parameter67.Value'?: string | undefined
            'Parameter68.Name'?: string | undefined
            'Parameter68.Value'?: string | undefined
            'Parameter69.Name'?: string | undefined
            'Parameter69.Value'?: string | undefined
            'Parameter70.Name'?: string | undefined
            'Parameter70.Value'?: string | undefined
            'Parameter71.Name'?: string | undefined
            'Parameter71.Value'?: string | undefined
            'Parameter72.Name'?: string | undefined
            'Parameter72.Value'?: string | undefined
            'Parameter73.Name'?: string | undefined
            'Parameter73.Value'?: string | undefined
            'Parameter74.Name'?: string | undefined
            'Parameter74.Value'?: string | undefined
            'Parameter75.Name'?: string | undefined
            'Parameter75.Value'?: string | undefined
            'Parameter76.Name'?: string | undefined
            'Parameter76.Value'?: string | undefined
            'Parameter77.Name'?: string | undefined
            'Parameter77.Value'?: string | undefined
            'Parameter78.Name'?: string | undefined
            'Parameter78.Value'?: string | undefined
            'Parameter79.Name'?: string | undefined
            'Parameter79.Value'?: string | undefined
            'Parameter80.Name'?: string | undefined
            'Parameter80.Value'?: string | undefined
            'Parameter81.Name'?: string | undefined
            'Parameter81.Value'?: string | undefined
            'Parameter82.Name'?: string | undefined
            'Parameter82.Value'?: string | undefined
            'Parameter83.Name'?: string | undefined
            'Parameter83.Value'?: string | undefined
            'Parameter84.Name'?: string | undefined
            'Parameter84.Value'?: string | undefined
            'Parameter85.Name'?: string | undefined
            'Parameter85.Value'?: string | undefined
            'Parameter86.Name'?: string | undefined
            'Parameter86.Value'?: string | undefined
            'Parameter87.Name'?: string | undefined
            'Parameter87.Value'?: string | undefined
            'Parameter88.Name'?: string | undefined
            'Parameter88.Value'?: string | undefined
            'Parameter89.Name'?: string | undefined
            'Parameter89.Value'?: string | undefined
            'Parameter90.Name'?: string | undefined
            'Parameter90.Value'?: string | undefined
            'Parameter91.Name'?: string | undefined
            'Parameter91.Value'?: string | undefined
            'Parameter92.Name'?: string | undefined
            'Parameter92.Value'?: string | undefined
            'Parameter93.Name'?: string | undefined
            'Parameter93.Value'?: string | undefined
            'Parameter94.Name'?: string | undefined
            'Parameter94.Value'?: string | undefined
            'Parameter95.Name'?: string | undefined
            'Parameter95.Value'?: string | undefined
            'Parameter96.Name'?: string | undefined
            'Parameter96.Value'?: string | undefined
            'Parameter97.Name'?: string | undefined
            'Parameter97.Value'?: string | undefined
            'Parameter98.Name'?: string | undefined
            'Parameter98.Value'?: string | undefined
            'Parameter99.Name'?: string | undefined
            'Parameter99.Value'?: string | undefined
          }
        }
        output: ApiV2010AccountCallStream
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Streams/:Sid.json': {
      $post: {
        input: { param: { AccountSid: string; CallSid: string; Sid: string } } & {
          json: { Status: StreamEnumUpdateStatus }
        } & { form: { Status: StreamEnumUpdateStatus } }
        output: ApiV2010AccountCallStream
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Tokens.json': {
      $post: {
        input: { param: { AccountSid: string } } & { json: { Ttl?: number | undefined } } & {
          form: { Ttl?: number | undefined }
        }
        output: ApiV2010AccountToken
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Transcriptions/:Sid.json': {
      $get: {
        input: { param: { AccountSid: string; Sid: string } }
        output: ApiV2010AccountTranscription
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { AccountSid: string; Sid: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Transcriptions.json': {
      $get: {
        input: { param: { AccountSid: string } } & {
          query: {
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          transcriptions?: ApiV2010AccountTranscription[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Usage/Records.json': {
      $get: {
        input: { param: { AccountSid: string } } & {
          query: {
            Category?: string | undefined
            StartDate?: string | undefined
            EndDate?: string | undefined
            IncludeSubaccounts?: boolean | undefined
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          usage_records?: ApiV2010AccountUsageUsageRecord[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Usage/Records/AllTime.json': {
      $get: {
        input: { param: { AccountSid: string } } & {
          query: {
            Category?: string | undefined
            StartDate?: string | undefined
            EndDate?: string | undefined
            IncludeSubaccounts?: boolean | undefined
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          usage_records?: ApiV2010AccountUsageUsageRecordUsageRecordAllTime[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Usage/Records/Daily.json': {
      $get: {
        input: { param: { AccountSid: string } } & {
          query: {
            Category?: string | undefined
            StartDate?: string | undefined
            EndDate?: string | undefined
            IncludeSubaccounts?: boolean | undefined
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          usage_records?: ApiV2010AccountUsageUsageRecordUsageRecordDaily[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Usage/Records/LastMonth.json': {
      $get: {
        input: { param: { AccountSid: string } } & {
          query: {
            Category?: string | undefined
            StartDate?: string | undefined
            EndDate?: string | undefined
            IncludeSubaccounts?: boolean | undefined
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          usage_records?: ApiV2010AccountUsageUsageRecordUsageRecordLastMonth[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Usage/Records/Monthly.json': {
      $get: {
        input: { param: { AccountSid: string } } & {
          query: {
            Category?: string | undefined
            StartDate?: string | undefined
            EndDate?: string | undefined
            IncludeSubaccounts?: boolean | undefined
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          usage_records?: ApiV2010AccountUsageUsageRecordUsageRecordMonthly[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Usage/Records/ThisMonth.json': {
      $get: {
        input: { param: { AccountSid: string } } & {
          query: {
            Category?: string | undefined
            StartDate?: string | undefined
            EndDate?: string | undefined
            IncludeSubaccounts?: boolean | undefined
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          usage_records?: ApiV2010AccountUsageUsageRecordUsageRecordThisMonth[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Usage/Records/Today.json': {
      $get: {
        input: { param: { AccountSid: string } } & {
          query: {
            Category?: string | undefined
            StartDate?: string | undefined
            EndDate?: string | undefined
            IncludeSubaccounts?: boolean | undefined
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          usage_records?: ApiV2010AccountUsageUsageRecordUsageRecordToday[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Usage/Records/Yearly.json': {
      $get: {
        input: { param: { AccountSid: string } } & {
          query: {
            Category?: string | undefined
            StartDate?: string | undefined
            EndDate?: string | undefined
            IncludeSubaccounts?: boolean | undefined
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          usage_records?: ApiV2010AccountUsageUsageRecordUsageRecordYearly[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Usage/Records/Yesterday.json': {
      $get: {
        input: { param: { AccountSid: string } } & {
          query: {
            Category?: string | undefined
            StartDate?: string | undefined
            EndDate?: string | undefined
            IncludeSubaccounts?: boolean | undefined
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          usage_records?: ApiV2010AccountUsageUsageRecordUsageRecordYesterday[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Usage/Triggers/:Sid.json': {
      $get: {
        input: { param: { AccountSid: string; Sid: string } }
        output: ApiV2010AccountUsageUsageTrigger
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { AccountSid: string; Sid: string } } & {
          json: {
            CallbackMethod?: 'GET' | 'POST' | undefined
            CallbackUrl?: string | undefined
            FriendlyName?: string | undefined
          }
        } & {
          form: {
            CallbackMethod?: 'GET' | 'POST' | undefined
            CallbackUrl?: string | undefined
            FriendlyName?: string | undefined
          }
        }
        output: ApiV2010AccountUsageUsageTrigger
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { AccountSid: string; Sid: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Usage/Triggers.json': {
      $post: {
        input: { param: { AccountSid: string } } & {
          json: {
            CallbackUrl: string
            TriggerValue: string
            UsageCategory: string
            CallbackMethod?: 'GET' | 'POST' | undefined
            FriendlyName?: string | undefined
            Recurring?: UsageTriggerEnumRecurring | undefined
            TriggerBy?: UsageTriggerEnumTriggerField | undefined
          }
        } & {
          form: {
            CallbackUrl: string
            TriggerValue: string
            UsageCategory: string
            CallbackMethod?: 'GET' | 'POST' | undefined
            FriendlyName?: string | undefined
            Recurring?: UsageTriggerEnumRecurring | undefined
            TriggerBy?: UsageTriggerEnumTriggerField | undefined
          }
        }
        output: ApiV2010AccountUsageUsageTrigger
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { AccountSid: string } } & {
          query: {
            Recurring?: UsageTriggerEnumRecurring | undefined
            TriggerBy?: UsageTriggerEnumTriggerField | undefined
            UsageCategory?: string | undefined
            PageSize?: bigint | undefined
            Page?: number | undefined
            PageToken?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          first_page_uri?: string | undefined
          next_page_uri?: (string | null) | undefined
          page?: number | undefined
          page_size?: number | undefined
          previous_page_uri?: (string | null) | undefined
          start?: number | undefined
          uri?: string | undefined
          usage_triggers?: ApiV2010AccountUsageUsageTrigger[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/UserDefinedMessages.json': {
      $post: {
        input: { param: { AccountSid: string; CallSid: string } } & {
          json: { Content: string; IdempotencyKey?: string | undefined }
        } & { form: { Content: string; IdempotencyKey?: string | undefined } }
        output: ApiV2010AccountCallUserDefinedMessage
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/UserDefinedMessageSubscriptions.json': {
      $post: {
        input: { param: { AccountSid: string; CallSid: string } } & {
          json: {
            Callback: string
            IdempotencyKey?: string | undefined
            Method?: 'GET' | 'POST' | undefined
          }
        } & {
          form: {
            Callback: string
            IdempotencyKey?: string | undefined
            Method?: 'GET' | 'POST' | undefined
          }
        }
        output: ApiV2010AccountCallUserDefinedMessageSubscription
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/UserDefinedMessageSubscriptions/:Sid.json': {
      $delete: {
        input: { param: { AccountSid: string; CallSid: string; Sid: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  },
  '/'
>
export default routes
