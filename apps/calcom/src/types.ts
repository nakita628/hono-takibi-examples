type RefreshApiKeyInput = {
  apiKeyDaysValid?: number | undefined
  apiKeyNeverExpires?: boolean | undefined
}
type ApiKeyOutput = { apiKey: string }
type RefreshApiKeyOutput = { status: 'success' | 'error'; data: ApiKeyOutput }
type BookingInputAddressLocation_2024_08_13 = { type: string }
type BookingInputAttendeeAddressLocation_2024_08_13 = { type: string; address: string }
type BookingInputAttendeeDefinedLocation_2024_08_13 = { type: string; location: string }
type BookingInputAttendeePhoneLocation_2024_08_13 = { type: string; phone: string }
type BookingInputIntegrationLocation_2024_08_13 = {
  type: string
  integration:
    | 'cal-video'
    | 'google-meet'
    | 'zoom'
    | 'whereby-video'
    | 'whatsapp-video'
    | 'webex-video'
    | 'telegram-video'
    | 'tandem'
    | 'sylaps-video'
    | 'skype-video'
    | 'sirius-video'
    | 'signal-video'
    | 'shimmer-video'
    | 'salesroom-video'
    | 'roam-video'
    | 'riverside-video'
    | 'ping-video'
    | 'office365-video'
    | 'mirotalk-video'
    | 'jitsi'
    | 'jelly-video'
    | 'jelly-conferencing'
    | 'huddle'
    | 'facetime-video'
    | 'element-call-video'
    | 'eightxeight-video'
    | 'discord-video'
    | 'demodesk-video'
    | 'campfire-video'
}
type BookingInputLinkLocation_2024_08_13 = { type: string }
type BookingInputPhoneLocation_2024_08_13 = { type: string }
type BookingInputOrganizersDefaultAppLocation_2024_08_13 = { type: string }
type CreateBookingInput_2024_08_13 = {
  start: string
  attendee: {
    name: string
    timeZone: string
    phoneNumber?: string | undefined
    language?:
      | 'ar'
      | 'ca'
      | 'de'
      | 'es'
      | 'eu'
      | 'he'
      | 'id'
      | 'ja'
      | 'lv'
      | 'pl'
      | 'ro'
      | 'sr'
      | 'th'
      | 'vi'
      | 'az'
      | 'cs'
      | 'el'
      | 'es-419'
      | 'fi'
      | 'hr'
      | 'it'
      | 'km'
      | 'nl'
      | 'pt'
      | 'ru'
      | 'sv'
      | 'tr'
      | 'zh-CN'
      | 'bg'
      | 'da'
      | 'en'
      | 'et'
      | 'fr'
      | 'hu'
      | 'iw'
      | 'ko'
      | 'no'
      | 'pt-BR'
      | 'sk'
      | 'ta'
      | 'uk'
      | 'zh-TW'
      | 'bn'
      | undefined
    email?: string | undefined
  }
  bookingFieldsResponses?: { [x: string]: unknown } | undefined
  eventTypeId?: number | undefined
  eventTypeSlug?: string | undefined
  username?: string | undefined
  teamSlug?: string | undefined
  organizationSlug?: string | undefined
  guests?: string[] | undefined
  meetingUrl?: string | undefined
  location?:
    | BookingInputAddressLocation_2024_08_13
    | BookingInputAttendeeAddressLocation_2024_08_13
    | BookingInputAttendeeDefinedLocation_2024_08_13
    | BookingInputAttendeePhoneLocation_2024_08_13
    | BookingInputIntegrationLocation_2024_08_13
    | BookingInputLinkLocation_2024_08_13
    | BookingInputPhoneLocation_2024_08_13
    | BookingInputOrganizersDefaultAppLocation_2024_08_13
    | undefined
  metadata?: { [x: string]: unknown } | undefined
  lengthInMinutes?: number | undefined
  routing?:
    | {
        responseId: number
        teamMemberIds: number[]
        teamMemberEmail?: string | undefined
        skipContactOwner?: boolean | undefined
        crmAppSlug?: string | undefined
        crmOwnerRecordType?: string | undefined
      }
    | undefined
  emailVerificationCode?: string | undefined
}
type CreateRecurringBookingInput_2024_08_13 = {
  start: string
  attendee: {
    name: string
    timeZone: string
    phoneNumber?: string | undefined
    language?:
      | 'ar'
      | 'ca'
      | 'de'
      | 'es'
      | 'eu'
      | 'he'
      | 'id'
      | 'ja'
      | 'lv'
      | 'pl'
      | 'ro'
      | 'sr'
      | 'th'
      | 'vi'
      | 'az'
      | 'cs'
      | 'el'
      | 'es-419'
      | 'fi'
      | 'hr'
      | 'it'
      | 'km'
      | 'nl'
      | 'pt'
      | 'ru'
      | 'sv'
      | 'tr'
      | 'zh-CN'
      | 'bg'
      | 'da'
      | 'en'
      | 'et'
      | 'fr'
      | 'hu'
      | 'iw'
      | 'ko'
      | 'no'
      | 'pt-BR'
      | 'sk'
      | 'ta'
      | 'uk'
      | 'zh-TW'
      | 'bn'
      | undefined
    email?: string | undefined
  }
  bookingFieldsResponses?: { [x: string]: unknown } | undefined
  eventTypeId?: number | undefined
  eventTypeSlug?: string | undefined
  username?: string | undefined
  teamSlug?: string | undefined
  organizationSlug?: string | undefined
  guests?: string[] | undefined
  meetingUrl?: string | undefined
  location?:
    | BookingInputAddressLocation_2024_08_13
    | BookingInputAttendeeAddressLocation_2024_08_13
    | BookingInputAttendeeDefinedLocation_2024_08_13
    | BookingInputAttendeePhoneLocation_2024_08_13
    | BookingInputIntegrationLocation_2024_08_13
    | BookingInputLinkLocation_2024_08_13
    | BookingInputPhoneLocation_2024_08_13
    | BookingInputOrganizersDefaultAppLocation_2024_08_13
    | undefined
  metadata?: { [x: string]: unknown } | undefined
  lengthInMinutes?: number | undefined
  routing?:
    | {
        responseId: number
        teamMemberIds: number[]
        teamMemberEmail?: string | undefined
        skipContactOwner?: boolean | undefined
        crmAppSlug?: string | undefined
        crmOwnerRecordType?: string | undefined
      }
    | undefined
  emailVerificationCode?: string | undefined
  recurrenceCount?: number | undefined
}
type BookingHost = {
  id: number
  name: string
  email: string
  displayEmail: string
  username: string
  timeZone: string
}
type EventType = { id: number; slug: string }
type BookingAttendee = {
  name: string
  email: string
  displayEmail: string
  timeZone: string
  language?:
    | 'ar'
    | 'ca'
    | 'de'
    | 'es'
    | 'eu'
    | 'he'
    | 'id'
    | 'ja'
    | 'lv'
    | 'pl'
    | 'ro'
    | 'sr'
    | 'th'
    | 'vi'
    | 'az'
    | 'cs'
    | 'el'
    | 'es-419'
    | 'fi'
    | 'hr'
    | 'it'
    | 'km'
    | 'nl'
    | 'pt'
    | 'ru'
    | 'sv'
    | 'tr'
    | 'zh-CN'
    | 'bg'
    | 'da'
    | 'en'
    | 'et'
    | 'fr'
    | 'hu'
    | 'iw'
    | 'ko'
    | 'no'
    | 'pt-BR'
    | 'sk'
    | 'ta'
    | 'uk'
    | 'zh-TW'
    | 'bn'
    | undefined
  absent: boolean
  phoneNumber?: string | undefined
}
type BookingOutput_2024_08_13 = {
  id: number
  uid: string
  title: string
  description: string
  hosts: BookingHost[]
  status: 'cancelled' | 'accepted' | 'rejected' | 'pending'
  cancellationReason?: string | undefined
  cancelledByEmail?: string | undefined
  reschedulingReason?: string | undefined
  rescheduledByEmail?: string | undefined
  rescheduledFromUid?: string | undefined
  rescheduledToUid?: string | undefined
  start: string
  end: string
  duration: number
  eventTypeId: number
  eventType: EventType
  meetingUrl?: string | undefined
  location: string
  absentHost: boolean
  createdAt: string
  updatedAt: string
  metadata?: { [x: string]: unknown } | undefined
  rating?: number | undefined
  icsUid?: string | undefined
  attendees: BookingAttendee[]
  guests?: string[] | undefined
  bookingFieldsResponses: { [x: string]: unknown }
}
type RecurringBookingOutput_2024_08_13 = {
  id: number
  uid: string
  title: string
  description: string
  hosts: BookingHost[]
  status: 'cancelled' | 'accepted' | 'rejected' | 'pending'
  cancellationReason?: string | undefined
  cancelledByEmail?: string | undefined
  reschedulingReason?: string | undefined
  rescheduledByEmail?: string | undefined
  rescheduledFromUid?: string | undefined
  rescheduledToUid?: string | undefined
  start: string
  end: string
  duration: number
  eventTypeId: number
  eventType: EventType
  meetingUrl?: string | undefined
  location: string
  absentHost: boolean
  createdAt: string
  updatedAt: string
  metadata?: { [x: string]: unknown } | undefined
  rating?: number | undefined
  icsUid?: string | undefined
  attendees: BookingAttendee[]
  guests?: string[] | undefined
  bookingFieldsResponses: { [x: string]: unknown }
  recurringBookingUid: string
}
type SeatedAttendee = {
  name: string
  email: string
  displayEmail: string
  timeZone: string
  language?:
    | 'ar'
    | 'ca'
    | 'de'
    | 'es'
    | 'eu'
    | 'he'
    | 'id'
    | 'ja'
    | 'lv'
    | 'pl'
    | 'ro'
    | 'sr'
    | 'th'
    | 'vi'
    | 'az'
    | 'cs'
    | 'el'
    | 'es-419'
    | 'fi'
    | 'hr'
    | 'it'
    | 'km'
    | 'nl'
    | 'pt'
    | 'ru'
    | 'sv'
    | 'tr'
    | 'zh-CN'
    | 'bg'
    | 'da'
    | 'en'
    | 'et'
    | 'fr'
    | 'hu'
    | 'iw'
    | 'ko'
    | 'no'
    | 'pt-BR'
    | 'sk'
    | 'ta'
    | 'uk'
    | 'zh-TW'
    | 'bn'
    | undefined
  absent: boolean
  phoneNumber?: string | undefined
  seatUid: string
  bookingFieldsResponses: { [x: string]: unknown }
  metadata?: { [x: string]: unknown } | undefined
}
type CreateSeatedBookingOutput_2024_08_13 = {
  id: number
  uid: string
  title: string
  description: string
  hosts: BookingHost[]
  status: 'cancelled' | 'accepted' | 'rejected' | 'pending'
  cancellationReason?: string | undefined
  cancelledByEmail?: string | undefined
  reschedulingReason?: string | undefined
  rescheduledByEmail?: string | undefined
  rescheduledFromUid?: string | undefined
  rescheduledToUid?: string | undefined
  start: string
  end: string
  duration: number
  eventTypeId: number
  eventType: EventType
  meetingUrl?: string | undefined
  location: string
  absentHost: boolean
  createdAt: string
  updatedAt: string
  metadata?: { [x: string]: unknown } | undefined
  rating?: number | undefined
  icsUid?: string | undefined
  seatUid: string
  attendees: SeatedAttendee[]
}
type CreateRecurringSeatedBookingOutput_2024_08_13 = {
  id: number
  uid: string
  title: string
  description: string
  hosts: BookingHost[]
  status: 'cancelled' | 'accepted' | 'rejected' | 'pending'
  cancellationReason?: string | undefined
  cancelledByEmail?: string | undefined
  reschedulingReason?: string | undefined
  rescheduledByEmail?: string | undefined
  rescheduledFromUid?: string | undefined
  rescheduledToUid?: string | undefined
  start: string
  end: string
  duration: number
  eventTypeId: number
  eventType: EventType
  meetingUrl?: string | undefined
  location: string
  absentHost: boolean
  createdAt: string
  updatedAt: string
  metadata?: { [x: string]: unknown } | undefined
  rating?: number | undefined
  icsUid?: string | undefined
  seatUid: string
  attendees: SeatedAttendee[]
  recurringBookingUid: string
}
type CreateBookingOutput_2024_08_13 = {
  status: 'success' | 'error'
  data:
    | BookingOutput_2024_08_13
    | RecurringBookingOutput_2024_08_13[]
    | CreateSeatedBookingOutput_2024_08_13
    | CreateRecurringSeatedBookingOutput_2024_08_13[]
}
type GetSeatedBookingOutput_2024_08_13 = {
  id: number
  uid: string
  title: string
  description: string
  hosts: BookingHost[]
  status: 'cancelled' | 'accepted' | 'rejected' | 'pending'
  cancellationReason?: string | undefined
  cancelledByEmail?: string | undefined
  reschedulingReason?: string | undefined
  rescheduledByEmail?: string | undefined
  rescheduledFromUid?: string | undefined
  rescheduledToUid?: string | undefined
  start: string
  end: string
  duration: number
  eventTypeId: number
  eventType: EventType
  meetingUrl?: string | undefined
  location: string
  absentHost: boolean
  createdAt: string
  updatedAt: string
  metadata?: { [x: string]: unknown } | undefined
  rating?: number | undefined
  icsUid?: string | undefined
  attendees: SeatedAttendee[]
}
type GetRecurringSeatedBookingOutput_2024_08_13 = {
  id: number
  uid: string
  title: string
  description: string
  hosts: BookingHost[]
  status: 'cancelled' | 'accepted' | 'rejected' | 'pending'
  cancellationReason?: string | undefined
  cancelledByEmail?: string | undefined
  reschedulingReason?: string | undefined
  rescheduledByEmail?: string | undefined
  rescheduledFromUid?: string | undefined
  rescheduledToUid?: string | undefined
  start: string
  end: string
  duration: number
  eventTypeId: number
  eventType: EventType
  meetingUrl?: string | undefined
  location: string
  absentHost: boolean
  createdAt: string
  updatedAt: string
  metadata?: { [x: string]: unknown } | undefined
  rating?: number | undefined
  icsUid?: string | undefined
  attendees: SeatedAttendee[]
  recurringBookingUid: string
}
type PaginationMetaDto = {
  totalItems: number
  remainingItems: number
  returnedItems: number
  itemsPerPage: number
  currentPage: number
  totalPages: number
  hasNextPage: boolean
  hasPreviousPage: boolean
}
type GetBookingsOutput_2024_08_13 = {
  status: 'success' | 'error'
  data: (
    | BookingOutput_2024_08_13
    | RecurringBookingOutput_2024_08_13
    | GetSeatedBookingOutput_2024_08_13
    | GetRecurringSeatedBookingOutput_2024_08_13
  )[]
  pagination: PaginationMetaDto
  error?: { [x: string]: unknown } | undefined
}
type GetBookingOutput_2024_08_13 = {
  status: 'success' | 'error'
  data:
    | BookingOutput_2024_08_13
    | RecurringBookingOutput_2024_08_13
    | RecurringBookingOutput_2024_08_13[]
    | GetSeatedBookingOutput_2024_08_13
    | GetRecurringSeatedBookingOutput_2024_08_13
    | GetRecurringSeatedBookingOutput_2024_08_13[]
  error?: { [x: string]: unknown } | undefined
}
type RecordingItem = {
  id: string
  roomName: string
  startTs: number
  status: string
  maxParticipants?: number | undefined
  duration: number
  shareToken: string
  downloadLink?: (string | null) | undefined
  error?: (string | null) | undefined
}
type GetBookingRecordingsOutput = {
  status: 'success' | 'error'
  error?: { [x: string]: unknown } | undefined
  data: RecordingItem[]
}
type GetBookingTranscriptsOutput = {
  status: 'success' | 'error'
  data: string[]
  error?: { [x: string]: unknown } | undefined
}
type RescheduleBookingInput_2024_08_13 = {
  start: string
  rescheduledBy?: string | undefined
  reschedulingReason?: string | undefined
  emailVerificationCode?: string | undefined
}
type RescheduleSeatedBookingInput_2024_08_13 = {
  start: string
  rescheduledBy?: string | undefined
  seatUid: string
  emailVerificationCode?: string | undefined
}
type RescheduleBookingOutput_2024_08_13 = {
  status: 'success' | 'error'
  data:
    | BookingOutput_2024_08_13
    | RecurringBookingOutput_2024_08_13
    | CreateSeatedBookingOutput_2024_08_13
    | CreateRecurringSeatedBookingOutput_2024_08_13
}
type CancelBookingInput_2024_08_13 = {
  cancellationReason?: string | undefined
  cancelSubsequentBookings?: boolean | undefined
}
type CancelSeatedBookingInput_2024_08_13 = {
  seatUid: string
  cancellationReason?: string | undefined
}
type CancelBookingOutput_2024_08_13 = {
  status: 'success' | 'error'
  data:
    | BookingOutput_2024_08_13
    | RecurringBookingOutput_2024_08_13
    | RecurringBookingOutput_2024_08_13[]
    | GetSeatedBookingOutput_2024_08_13
    | GetRecurringSeatedBookingOutput_2024_08_13
    | GetRecurringSeatedBookingOutput_2024_08_13[]
}
type MarkAbsentAttendee = { email: string; absent: boolean }
type MarkAbsentBookingInput_2024_08_13 = {
  host?: boolean | undefined
  attendees?: MarkAbsentAttendee[] | undefined
}
type MarkAbsentBookingOutput_2024_08_13 = {
  status: 'success' | 'error'
  data: BookingOutput_2024_08_13 | RecurringBookingOutput_2024_08_13
}
type ReassignBookingOutput_2024_08_13 = {
  status: 'success' | 'error'
  data: ReassignBookingOutput_2024_08_13
}
type ReassignToUserBookingInput_2024_08_13 = { reason?: string | undefined }
type DeclineBookingInput_2024_08_13 = { reason?: string | undefined }
type CalendarLink = { label: string; link: string }
type CalendarLinksOutput_2024_08_13 = { status: { [x: string]: unknown }; data: CalendarLink[] }
type BookingReference = {
  type: string
  eventUid: string
  destinationCalendarId: string | null
  id: number
}
type BookingReferencesOutput_2024_08_13 = {
  status: { [x: string]: unknown }
  data: BookingReference[]
}
type CalMeetingParticipant = {
  userId: string | null
  userName: string | null
  joinTime: number
  duration: number
}
type CalMeetingSession = {
  id: string
  room: string
  startTime: number
  duration: number
  ongoing: boolean
  maxParticipants: number
  participants: CalMeetingParticipant[]
}
type GetBookingVideoSessionsOutput = {
  status: 'success' | 'error'
  data: CalMeetingSession[]
  error?: { [x: string]: unknown } | undefined
}
type UpdateInputAddressLocation_2024_08_13 = { type: string; address: string }
type UpdateBookingInputAttendeeAddressLocation_2024_08_13 = { type: string; address: string }
type UpdateBookingInputAttendeeDefinedLocation_2024_08_13 = { type: string; location: string }
type UpdateBookingInputAttendeePhoneLocation_2024_08_13 = { type: string; phone: string }
type UpdateBookingInputLinkLocation_2024_08_13 = { type: string; link: string }
type UpdateBookingInputPhoneLocation_2024_08_13 = { type: string; phone: string }
type UpdateBookingInputIntegrationLocation_2024_08_13 = {
  type: string
  integration:
    | 'cal-video'
    | 'google-meet'
    | 'zoom'
    | 'whereby-video'
    | 'whatsapp-video'
    | 'webex-video'
    | 'telegram-video'
    | 'tandem'
    | 'sylaps-video'
    | 'skype-video'
    | 'sirius-video'
    | 'signal-video'
    | 'shimmer-video'
    | 'salesroom-video'
    | 'roam-video'
    | 'riverside-video'
    | 'ping-video'
    | 'office365-video'
    | 'mirotalk-video'
    | 'jitsi'
    | 'jelly-video'
    | 'jelly-conferencing'
    | 'huddle'
    | 'facetime-video'
    | 'element-call-video'
    | 'eightxeight-video'
    | 'discord-video'
    | 'demodesk-video'
    | 'campfire-video'
}
type UpdateBookingLocationInput_2024_08_13 = {
  location?:
    | UpdateInputAddressLocation_2024_08_13
    | UpdateBookingInputAttendeeAddressLocation_2024_08_13
    | UpdateBookingInputAttendeeDefinedLocation_2024_08_13
    | UpdateBookingInputAttendeePhoneLocation_2024_08_13
    | UpdateBookingInputLinkLocation_2024_08_13
    | UpdateBookingInputPhoneLocation_2024_08_13
    | UpdateBookingInputIntegrationLocation_2024_08_13
    | undefined
}
type UpdateBookingLocationOutput_2024_08_13 = {
  status: 'success' | 'error'
  data:
    | BookingOutput_2024_08_13
    | RecurringBookingOutput_2024_08_13
    | RecurringBookingOutput_2024_08_13[]
    | GetSeatedBookingOutput_2024_08_13
    | GetRecurringSeatedBookingOutput_2024_08_13
    | GetRecurringSeatedBookingOutput_2024_08_13[]
}
type BookingAttendeeWithId_2024_08_13 = {
  name: string
  email: string
  displayEmail: string
  timeZone: string
  language?:
    | 'ar'
    | 'ca'
    | 'de'
    | 'es'
    | 'eu'
    | 'he'
    | 'id'
    | 'ja'
    | 'lv'
    | 'pl'
    | 'ro'
    | 'sr'
    | 'th'
    | 'vi'
    | 'az'
    | 'cs'
    | 'el'
    | 'es-419'
    | 'fi'
    | 'hr'
    | 'it'
    | 'km'
    | 'nl'
    | 'pt'
    | 'ru'
    | 'sv'
    | 'tr'
    | 'zh-CN'
    | 'bg'
    | 'da'
    | 'en'
    | 'et'
    | 'fr'
    | 'hu'
    | 'iw'
    | 'ko'
    | 'no'
    | 'pt-BR'
    | 'sk'
    | 'ta'
    | 'uk'
    | 'zh-TW'
    | 'bn'
    | undefined
  absent: boolean
  phoneNumber?: string | undefined
  id: number
}
type GetBookingAttendeesOutput_2024_08_13 = {
  status: 'success' | 'error'
  data: BookingAttendeeWithId_2024_08_13[]
}
type AddAttendeeInput_2024_08_13 = {
  name: string
  timeZone: string
  phoneNumber?: string | undefined
  language?:
    | 'ar'
    | 'ca'
    | 'de'
    | 'es'
    | 'eu'
    | 'he'
    | 'id'
    | 'ja'
    | 'lv'
    | 'pl'
    | 'ro'
    | 'sr'
    | 'th'
    | 'vi'
    | 'az'
    | 'cs'
    | 'el'
    | 'es-419'
    | 'fi'
    | 'hr'
    | 'it'
    | 'km'
    | 'nl'
    | 'pt'
    | 'ru'
    | 'sv'
    | 'tr'
    | 'zh-CN'
    | 'bg'
    | 'da'
    | 'en'
    | 'et'
    | 'fr'
    | 'hu'
    | 'iw'
    | 'ko'
    | 'no'
    | 'pt-BR'
    | 'sk'
    | 'ta'
    | 'uk'
    | 'zh-TW'
    | 'bn'
    | undefined
  email: string
}
type BookingAttendeeOutput_2024_08_13 = {
  name: string
  email: string
  displayEmail: string
  timeZone: string
  language?:
    | 'ar'
    | 'ca'
    | 'de'
    | 'es'
    | 'eu'
    | 'he'
    | 'id'
    | 'ja'
    | 'lv'
    | 'pl'
    | 'ro'
    | 'sr'
    | 'th'
    | 'vi'
    | 'az'
    | 'cs'
    | 'el'
    | 'es-419'
    | 'fi'
    | 'hr'
    | 'it'
    | 'km'
    | 'nl'
    | 'pt'
    | 'ru'
    | 'sv'
    | 'tr'
    | 'zh-CN'
    | 'bg'
    | 'da'
    | 'en'
    | 'et'
    | 'fr'
    | 'hu'
    | 'iw'
    | 'ko'
    | 'no'
    | 'pt-BR'
    | 'sk'
    | 'ta'
    | 'uk'
    | 'zh-TW'
    | 'bn'
    | undefined
  absent: boolean
  phoneNumber?: string | undefined
  id: number
  bookingId: number
}
type AddAttendeeOutput_2024_08_13 = {
  status: 'success' | 'error'
  data: BookingAttendeeOutput_2024_08_13
}
type GetBookingAttendeeOutput_2024_08_13 = {
  status: 'success' | 'error'
  data: BookingAttendeeWithId_2024_08_13
}
type RemovedAttendeeOutput_2024_08_13 = {
  id: number
  bookingId: number
  name: string
  email: string
  timeZone: string
}
type RemoveAttendeeOutput_2024_08_13 = {
  status: 'success' | 'error'
  data: RemovedAttendeeOutput_2024_08_13
}
type Guest = {
  email: string
  name?: string | undefined
  timeZone?: string | undefined
  phoneNumber?: string | undefined
  language?:
    | 'ar'
    | 'ca'
    | 'de'
    | 'es'
    | 'eu'
    | 'he'
    | 'id'
    | 'ja'
    | 'lv'
    | 'pl'
    | 'ro'
    | 'sr'
    | 'th'
    | 'vi'
    | 'az'
    | 'cs'
    | 'el'
    | 'es-419'
    | 'fi'
    | 'hr'
    | 'it'
    | 'km'
    | 'nl'
    | 'pt'
    | 'ru'
    | 'sv'
    | 'tr'
    | 'zh-CN'
    | 'bg'
    | 'da'
    | 'en'
    | 'et'
    | 'fr'
    | 'hu'
    | 'iw'
    | 'ko'
    | 'no'
    | 'pt-BR'
    | 'sk'
    | 'ta'
    | 'uk'
    | 'zh-TW'
    | 'bn'
    | undefined
}
type AddGuestsInput_2024_08_13 = { guests: Guest[] }
type AddGuestsOutput_2024_08_13 = {
  status: 'success' | 'error'
  data:
    | BookingOutput_2024_08_13
    | RecurringBookingOutput_2024_08_13
    | RecurringBookingOutput_2024_08_13[]
    | GetSeatedBookingOutput_2024_08_13
    | GetRecurringSeatedBookingOutput_2024_08_13
    | GetRecurringSeatedBookingOutput_2024_08_13[]
}
type CalendarConnectionItem = {
  connectionId: string
  type: 'google' | 'office365' | 'apple'
  email?: (string | null) | undefined
}
type ListConnectionsData = { connections: CalendarConnectionItem[] }
type ListConnectionsOutput = { status: 'success' | 'error'; data: ListConnectionsData }
type CalendarEventVideoLocation = {
  type: 'video'
  url: string
  label?: (string | null) | undefined
  password?: (string | null) | undefined
  meetingCode?: (string | null) | undefined
  accessCode?: (string | null) | undefined
}
type CalendarEventPhoneLocation = {
  type: 'phone'
  url: string
  label?: (string | null) | undefined
  pin?: (string | null) | undefined
  password?: (string | null) | undefined
  accessCode?: (string | null) | undefined
  regionCode?: (string | null) | undefined
}
type CalendarEventSipLocation = {
  type: 'sip'
  url: string
  label?: (string | null) | undefined
  pin?: (string | null) | undefined
  password?: (string | null) | undefined
}
type CalendarEventMoreLocation = { type: 'more'; url: string; label?: (string | null) | undefined }
type CalendarEventResponseStatus = 'accepted' | 'pending' | 'declined' | 'needsAction'
type CalendarEventAttendee = {
  email: string
  name?: string | undefined
  responseStatus?: CalendarEventResponseStatus | undefined
  self?: (boolean | null) | undefined
  optional?: (boolean | null) | undefined
  host?: (boolean | null) | undefined
}
type CalendarEventStatus = 'accepted' | 'pending' | 'declined' | 'cancelled'
type CalendarEventHost = {
  email: string
  name?: (string | null) | undefined
  responseStatus?: CalendarEventResponseStatus | undefined
}
type CalendarSource = 'google' | 'office365' | 'apple'
type UnifiedCalendarEventOutput = {
  start: { time?: string | undefined; timeZone?: string | undefined }
  end: { time?: string | undefined; timeZone?: string | undefined }
  id: string
  title: string
  description?: (string | null) | undefined
  locations?:
    | (
        | (
            | CalendarEventVideoLocation
            | CalendarEventPhoneLocation
            | CalendarEventSipLocation
            | CalendarEventMoreLocation
          )[]
        | null
      )
    | undefined
  attendees?: (CalendarEventAttendee[] | null) | undefined
  status?: CalendarEventStatus | undefined
  hosts?: (CalendarEventHost[] | null) | undefined
  calendarEventOwner?: { email: string; name?: (string | null) | undefined } | undefined
  source: CalendarSource
}
type ListUnifiedCalendarEventsOutput = {
  status: 'success' | 'error'
  data: UnifiedCalendarEventOutput[]
}
type CreateEventAttendee = { email: string; name?: string | undefined }
type CreateUnifiedCalendarEventInput = {
  title: string
  start: { time: string; timeZone: string }
  end: { time: string; timeZone: string }
  description?: (string | null) | undefined
  attendees?: CreateEventAttendee[] | undefined
}
type GetUnifiedCalendarEventOutput = {
  status: 'success' | 'error'
  data: UnifiedCalendarEventOutput
}
type UpdateCalendarEventAttendee = {
  email?: string | undefined
  name?: string | undefined
  responseStatus?: CalendarEventResponseStatus | undefined
  self?: (boolean | null) | undefined
  optional?: (boolean | null) | undefined
  host?: (boolean | null) | undefined
}
type UpdateUnifiedCalendarEventInput = {
  start?: { time?: string | undefined; timeZone?: string | undefined } | undefined
  end?: { time?: string | undefined; timeZone?: string | undefined } | undefined
  title?: string | undefined
  description?: (string | null) | undefined
  attendees?: (UpdateCalendarEventAttendee[] | null) | undefined
  status?: CalendarEventStatus | undefined
}
type BusyTimesOutput = { start: string; end: string; source?: (string | null) | undefined }
type GetBusyTimesOutput = { status: 'success' | 'error'; data: BusyTimesOutput[] }
type CreateIcsFeedInputDto = { urls: string[]; readOnly?: boolean | undefined }
type CreateIcsFeedOutput = {
  id: number
  type: string
  userId: number | null
  teamId: number | null
  appId: string | null
  invalid: boolean | null
}
type CreateIcsFeedOutputResponseDto = { status: 'success' | 'error'; data: CreateIcsFeedOutput }
type Integration = {
  appData?: ({ [x: string]: unknown } | null) | undefined
  dirName?: string | undefined
  __template?: string | undefined
  name: string
  description: string
  installed?: boolean | undefined
  type: string
  title?: string | undefined
  variant: string
  category?: string | undefined
  categories: string[]
  logo: string
  publisher: string
  slug: string
  url: string
  email: string
  locationOption: { [x: string]: unknown } | null
}
type Primary = {
  externalId: string
  integration?: string | undefined
  name?: string | undefined
  primary: boolean | null
  readOnly: boolean
  email?: string | undefined
  isSelected: boolean
  credentialId: number
  delegationCredentialId?: (string | null) | undefined
}
type Calendar = {
  externalId: string
  integration?: string | undefined
  name?: string | undefined
  primary?: (boolean | null) | undefined
  readOnly: boolean
  email?: string | undefined
  isSelected: boolean
  credentialId: number
  delegationCredentialId?: (string | null) | undefined
}
type ConnectedCalendar = {
  integration: Integration
  credentialId: number
  delegationCredentialId?: (string | null) | undefined
  primary?: Primary | undefined
  calendars?: Calendar[] | undefined
}
type DestinationCalendar = {
  id: { [x: string]: unknown }
  integration: string
  externalId: string
  primaryEmail: string | null
  userId: number | null
  eventTypeId: number | null
  credentialId: number | null
  delegationCredentialId?: (string | null) | undefined
  name?: (string | null) | undefined
  primary?: boolean | undefined
  readOnly?: boolean | undefined
  email?: string | undefined
  integrationTitle?: string | undefined
}
type ConnectedCalendarsData = {
  connectedCalendars: ConnectedCalendar[]
  destinationCalendar: DestinationCalendar
}
type ConnectedCalendarsOutput = { status: 'success' | 'error'; data: ConnectedCalendarsData }
type CreateCalendarCredentialsInput = { username: string; password: string }
type DeleteCalendarCredentialsInputBodyDto = { id: number }
type DeletedCalendarCredentialsOutputDto = {
  id: number
  type: string
  userId: number | null
  teamId: number | null
  appId: string | null
  invalid: boolean | null
}
type DeletedCalendarCredentialsOutputResponseDto = {
  status: 'success' | 'error'
  data: DeletedCalendarCredentialsOutputDto
}
type ConferencingAppsOutputDto = {
  id: number
  type: string
  userId: number
  invalid?: (boolean | null) | undefined
}
type ConferencingAppOutputResponseDto = {
  status: 'success' | 'error'
  data: ConferencingAppsOutputDto
}
type GetConferencingAppsOauthUrlResponseDto = { status: 'success' | 'error' }
type ConferencingAppsOutputResponseDto = {
  status: 'success' | 'error'
  data: ConferencingAppsOutputDto[]
}
type SetDefaultConferencingAppOutputResponseDto = { status: 'success' | 'error' }
type DefaultConferencingAppsOutputDto = {
  appSlug?: string | undefined
  appLink?: string | undefined
}
type GetDefaultConferencingAppOutputResponseDto = {
  status: 'success' | 'error'
  data?: DefaultConferencingAppsOutputDto | undefined
}
type DisconnectConferencingAppOutputResponseDto = { status: 'success' | 'error' }
type ManagedUserOutput = {
  id: number
  email: string
  username: string | null
  name: string | null
  bio: string | null
  timeZone: string
  weekStart: string
  createdDate: string
  timeFormat: number | null
  defaultScheduleId: number | null
  locale?:
    | 'ar'
    | 'ca'
    | 'de'
    | 'es'
    | 'eu'
    | 'he'
    | 'id'
    | 'ja'
    | 'lv'
    | 'pl'
    | 'ro'
    | 'sr'
    | 'th'
    | 'vi'
    | 'az'
    | 'cs'
    | 'el'
    | 'es-419'
    | 'fi'
    | 'hr'
    | 'it'
    | 'km'
    | 'nl'
    | 'pt'
    | 'ru'
    | 'sv'
    | 'tr'
    | 'zh-CN'
    | 'bg'
    | 'da'
    | 'en'
    | 'et'
    | 'fr'
    | 'hu'
    | 'iw'
    | 'ko'
    | 'no'
    | 'pt-BR'
    | 'sk'
    | 'ta'
    | 'uk'
    | 'zh-TW'
    | 'bn'
    | undefined
  avatarUrl?: (string | null) | undefined
  metadata?: { [x: string]: unknown } | undefined
}
type GetManagedUsersOutput = { status: 'success' | 'error'; data: ManagedUserOutput[] }
type CreateManagedUserInput = {
  email: string
  name: string
  timeFormat?: 12 | 24 | undefined
  weekStart?:
    | 'Monday'
    | 'Tuesday'
    | 'Wednesday'
    | 'Thursday'
    | 'Friday'
    | 'Saturday'
    | 'Sunday'
    | undefined
  timeZone?: string | undefined
  locale?:
    | 'ar'
    | 'ca'
    | 'de'
    | 'es'
    | 'eu'
    | 'he'
    | 'id'
    | 'ja'
    | 'lv'
    | 'pl'
    | 'ro'
    | 'sr'
    | 'th'
    | 'vi'
    | 'az'
    | 'cs'
    | 'el'
    | 'es-419'
    | 'fi'
    | 'hr'
    | 'it'
    | 'km'
    | 'nl'
    | 'pt'
    | 'ru'
    | 'sv'
    | 'tr'
    | 'zh-CN'
    | 'bg'
    | 'da'
    | 'en'
    | 'et'
    | 'fr'
    | 'hu'
    | 'iw'
    | 'ko'
    | 'no'
    | 'pt-BR'
    | 'sk'
    | 'ta'
    | 'uk'
    | 'zh-TW'
    | 'bn'
    | undefined
  avatarUrl?: string | undefined
  bio?: string | undefined
  metadata?: { [x: string]: unknown } | undefined
}
type CreateManagedUserData = {
  accessToken: string
  refreshToken: string
  user: ManagedUserOutput
  accessTokenExpiresAt: number
  refreshTokenExpiresAt: number
}
type CreateManagedUserOutput = {
  status: 'success' | 'error'
  data: CreateManagedUserData
  error?: { [x: string]: unknown } | undefined
}
type GetManagedUserOutput = { status: 'success' | 'error'; data: ManagedUserOutput }
type UpdateManagedUserInput = {
  email?: string | undefined
  name?: string | undefined
  timeFormat?: 12 | 24 | undefined
  defaultScheduleId?: number | undefined
  weekStart?:
    | 'Monday'
    | 'Tuesday'
    | 'Wednesday'
    | 'Thursday'
    | 'Friday'
    | 'Saturday'
    | 'Sunday'
    | undefined
  timeZone?: string | undefined
  locale?:
    | 'ar'
    | 'ca'
    | 'de'
    | 'es'
    | 'eu'
    | 'he'
    | 'id'
    | 'ja'
    | 'lv'
    | 'pl'
    | 'ro'
    | 'sr'
    | 'th'
    | 'vi'
    | 'az'
    | 'cs'
    | 'el'
    | 'es-419'
    | 'fi'
    | 'hr'
    | 'it'
    | 'km'
    | 'nl'
    | 'pt'
    | 'ru'
    | 'sv'
    | 'tr'
    | 'zh-CN'
    | 'bg'
    | 'da'
    | 'en'
    | 'et'
    | 'fr'
    | 'hu'
    | 'iw'
    | 'ko'
    | 'no'
    | 'pt-BR'
    | 'sk'
    | 'ta'
    | 'uk'
    | 'zh-TW'
    | 'bn'
    | undefined
  avatarUrl?: string | undefined
  bio?: string | undefined
  metadata?: { [x: string]: unknown } | undefined
}
type KeysDto = {
  accessToken: string
  refreshToken: string
  accessTokenExpiresAt: number
  refreshTokenExpiresAt: number
}
type KeysResponseDto = { status: 'success' | 'error'; data: KeysDto }
type RefreshTokenInput = { refreshToken: string }
type CreateWebhookInputDto = {
  payloadTemplate?: string | undefined
  active: boolean
  subscriberUrl: string
  triggers: (
    | 'BOOKING_CREATED'
    | 'BOOKING_PAYMENT_INITIATED'
    | 'BOOKING_PAID'
    | 'BOOKING_RESCHEDULED'
    | 'BOOKING_REQUESTED'
    | 'BOOKING_CANCELLED'
    | 'BOOKING_REJECTED'
    | 'BOOKING_NO_SHOW_UPDATED'
    | 'FORM_SUBMITTED'
    | 'MEETING_ENDED'
    | 'MEETING_STARTED'
    | 'RECORDING_READY'
    | 'INSTANT_MEETING'
    | 'RECORDING_TRANSCRIPTION_GENERATED'
    | 'OOO_CREATED'
    | 'AFTER_HOSTS_CAL_VIDEO_NO_SHOW'
    | 'AFTER_GUESTS_CAL_VIDEO_NO_SHOW'
    | 'FORM_SUBMITTED_NO_EVENT'
    | 'DELEGATION_CREDENTIAL_ERROR'
    | 'WRONG_ASSIGNMENT_REPORT'
  )[]
  secret?: string | undefined
  version?: '2021-10-20' | undefined
}
type OAuthClientWebhookOutputDto = {
  payloadTemplate: string
  triggers: (
    | 'BOOKING_CREATED'
    | 'BOOKING_PAYMENT_INITIATED'
    | 'BOOKING_PAID'
    | 'BOOKING_RESCHEDULED'
    | 'BOOKING_REQUESTED'
    | 'BOOKING_CANCELLED'
    | 'BOOKING_REJECTED'
    | 'BOOKING_NO_SHOW_UPDATED'
    | 'FORM_SUBMITTED'
    | 'MEETING_ENDED'
    | 'MEETING_STARTED'
    | 'RECORDING_READY'
    | 'INSTANT_MEETING'
    | 'RECORDING_TRANSCRIPTION_GENERATED'
    | 'OOO_CREATED'
    | 'AFTER_HOSTS_CAL_VIDEO_NO_SHOW'
    | 'AFTER_GUESTS_CAL_VIDEO_NO_SHOW'
    | 'FORM_SUBMITTED_NO_EVENT'
    | 'DELEGATION_CREDENTIAL_ERROR'
    | 'WRONG_ASSIGNMENT_REPORT'
  )[]
  oAuthClientId: string
  id: number
  subscriberUrl: string
  active: boolean
  secret?: string | undefined
}
type OAuthClientWebhookOutputResponseDto = {
  status: 'success' | 'error'
  data: OAuthClientWebhookOutputDto
}
type OAuthClientWebhooksOutputResponseDto = {
  status: 'success' | 'error'
  data: OAuthClientWebhookOutputDto[]
}
type DeleteManyWebhooksOutputResponseDto = { status: 'success' | 'error'; data: string }
type UpdateWebhookInputDto = {
  payloadTemplate?: string | undefined
  active?: boolean | undefined
  subscriberUrl?: string | undefined
  triggers?:
    | (
        | 'BOOKING_CREATED'
        | 'BOOKING_PAYMENT_INITIATED'
        | 'BOOKING_PAID'
        | 'BOOKING_RESCHEDULED'
        | 'BOOKING_REQUESTED'
        | 'BOOKING_CANCELLED'
        | 'BOOKING_REJECTED'
        | 'BOOKING_NO_SHOW_UPDATED'
        | 'FORM_SUBMITTED'
        | 'MEETING_ENDED'
        | 'MEETING_STARTED'
        | 'RECORDING_READY'
        | 'INSTANT_MEETING'
        | 'RECORDING_TRANSCRIPTION_GENERATED'
        | 'OOO_CREATED'
        | 'AFTER_HOSTS_CAL_VIDEO_NO_SHOW'
        | 'AFTER_GUESTS_CAL_VIDEO_NO_SHOW'
        | 'FORM_SUBMITTED_NO_EVENT'
        | 'DELEGATION_CREDENTIAL_ERROR'
        | 'WRONG_ASSIGNMENT_REPORT'
      )[]
    | undefined
  secret?: string | undefined
  version?: '2021-10-20' | undefined
}
type CreateOAuthClientInput = {
  logo?: string | undefined
  name: string
  redirectUris: string[]
  permissions: (
    | 'EVENT_TYPE_READ'
    | 'EVENT_TYPE_WRITE'
    | 'BOOKING_READ'
    | 'BOOKING_WRITE'
    | 'SCHEDULE_READ'
    | 'SCHEDULE_WRITE'
    | 'APPS_READ'
    | 'APPS_WRITE'
    | 'PROFILE_READ'
    | 'PROFILE_WRITE'
    | '*'
  )[]
  bookingRedirectUri?: string | undefined
  bookingCancelRedirectUri?: string | undefined
  bookingRescheduleRedirectUri?: string | undefined
  areEmailsEnabled?: boolean | undefined
  areDefaultEventTypesEnabled?: boolean | undefined
  areCalendarEventsEnabled?: boolean | undefined
}
type CreateOAuthClientResponseDto = {
  status: 'success' | 'error'
  data: { clientId: string; clientSecret: string }
}
type PlatformOAuthClientDto = {
  id: string
  name: string
  secret: string
  permissions: (
    | 'EVENT_TYPE_READ'
    | 'EVENT_TYPE_WRITE'
    | 'BOOKING_READ'
    | 'BOOKING_WRITE'
    | 'SCHEDULE_READ'
    | 'SCHEDULE_WRITE'
    | 'APPS_READ'
    | 'APPS_WRITE'
    | 'PROFILE_READ'
    | 'PROFILE_WRITE'
  )[]
  logo?: { [x: string]: unknown } | undefined
  redirectUris: string[]
  organizationId: number
  createdAt: string
  areEmailsEnabled: boolean
  areDefaultEventTypesEnabled: boolean
  areCalendarEventsEnabled: boolean
  bookingRedirectUri?: string | undefined
  bookingCancelRedirectUri?: string | undefined
  bookingRescheduleRedirectUri?: string | undefined
}
type GetOAuthClientsResponseDto = { status: 'success' | 'error'; data: PlatformOAuthClientDto[] }
type GetOAuthClientResponseDto = { status: 'success' | 'error'; data: PlatformOAuthClientDto }
type UpdateOAuthClientInput = {
  logo?: string | undefined
  name?: string | undefined
  redirectUris?: string[] | undefined
  bookingRedirectUri?: string | undefined
  bookingCancelRedirectUri?: string | undefined
  bookingRescheduleRedirectUri?: string | undefined
  areEmailsEnabled?: boolean | undefined
  areDefaultEventTypesEnabled?: boolean | undefined
  areCalendarEventsEnabled?: boolean | undefined
}
type DestinationCalendarsInputBodyDto = {
  integration: 'apple_calendar' | 'google_calendar' | 'office365_calendar'
  externalId: string
  delegationCredentialId?: string | undefined
}
type DestinationCalendarsOutputDto = {
  userId: number
  integration: string
  externalId: string
  credentialId: number | null
}
type DestinationCalendarsOutputResponseDto = {
  status: 'success' | 'error'
  data: DestinationCalendarsOutputDto
}
type NameDefaultFieldInput_2024_06_14 = {
  type: string
  label: string
  placeholder: string
  disableOnPrefill?: boolean | undefined
}
type EmailDefaultFieldInput_2024_06_14 = {
  type: string
  label: string
  required?: { [x: string]: unknown } | undefined
  hidden?: boolean | undefined
  placeholder: string
  disableOnPrefill?: boolean | undefined
}
type TitleDefaultFieldInput_2024_06_14 = {
  slug: string
  required?: boolean | undefined
  hidden?: boolean | undefined
  label?: string | undefined
  placeholder?: string | undefined
  disableOnPrefill?: boolean | undefined
}
type LocationDefaultFieldInput_2024_06_14 = { slug: string; label?: string | undefined }
type NotesDefaultFieldInput_2024_06_14 = {
  slug: string
  required?: boolean | undefined
  hidden?: boolean | undefined
  label?: string | undefined
  placeholder?: string | undefined
  disableOnPrefill?: boolean | undefined
}
type GuestsDefaultFieldInput_2024_06_14 = {
  slug: string
  required?: boolean | undefined
  hidden?: boolean | undefined
  label?: string | undefined
  placeholder?: string | undefined
  disableOnPrefill?: boolean | undefined
}
type RescheduleReasonDefaultFieldInput_2024_06_14 = {
  slug: string
  required?: boolean | undefined
  hidden?: boolean | undefined
  label?: string | undefined
  placeholder?: string | undefined
  disableOnPrefill?: boolean | undefined
}
type PhoneFieldInput_2024_06_14 = {
  type: string
  slug: string
  label: string
  required: boolean
  placeholder: string
  disableOnPrefill?: boolean | undefined
  hidden: boolean
}
type AddressFieldInput_2024_06_14 = {
  type: string
  slug: string
  label: string
  required: boolean
  placeholder: string
  disableOnPrefill?: boolean | undefined
  hidden: boolean
}
type TextFieldInput_2024_06_14 = {
  type: string
  slug: string
  label: string
  required: boolean
  placeholder: string
  disableOnPrefill?: boolean | undefined
  hidden: boolean
}
type NumberFieldInput_2024_06_14 = {
  type: string
  slug: string
  label: string
  required: boolean
  placeholder: string
  disableOnPrefill?: boolean | undefined
  hidden: boolean
}
type TextAreaFieldInput_2024_06_14 = {
  type: string
  slug: string
  label: string
  required: boolean
  placeholder: string
  disableOnPrefill?: boolean | undefined
  hidden: boolean
}
type SelectFieldInput_2024_06_14 = {
  type: string
  slug: string
  label: string
  required: boolean
  placeholder: string
  options: string[]
  disableOnPrefill?: boolean | undefined
  hidden: boolean
}
type MultiSelectFieldInput_2024_06_14 = {
  type: string
  slug: string
  label: string
  required: boolean
  options: string[]
  disableOnPrefill?: boolean | undefined
  hidden: boolean
}
type MultiEmailFieldInput_2024_06_14 = {
  type: string
  slug: string
  label: string
  required: boolean
  placeholder: string
  disableOnPrefill?: boolean | undefined
  hidden: boolean
}
type CheckboxGroupFieldInput_2024_06_14 = {
  type: string
  slug: string
  label: string
  required: boolean
  options: string[]
  disableOnPrefill?: boolean | undefined
  hidden: boolean
}
type RadioGroupFieldInput_2024_06_14 = {
  type: string
  slug: string
  label: string
  required: boolean
  options: string[]
  disableOnPrefill?: boolean | undefined
  hidden: boolean
}
type BooleanFieldInput_2024_06_14 = {
  type: string
  slug: string
  label: string
  required: boolean
  disableOnPrefill?: boolean | undefined
  hidden: boolean
}
type UrlFieldInput_2024_06_14 = {
  type: string
  slug: string
  label: string
  required: boolean
  placeholder: string
  disableOnPrefill?: boolean | undefined
  hidden: boolean
}
type BaseBookingLimitsCount_2024_06_14 = {
  day?: number | undefined
  week?: number | undefined
  month?: number | undefined
  year?: number | undefined
  disabled?: boolean | undefined
}
type Disabled_2024_06_14 = { disabled: boolean }
type BookerActiveBookingsLimit_2024_06_14 = {
  maximumActiveBookings?: number | undefined
  offerReschedule?: boolean | undefined
}
type BaseBookingLimitsDuration_2024_06_14 = {
  day?: number | undefined
  week?: number | undefined
  month?: number | undefined
  year?: number | undefined
}
type BusinessDaysWindow_2024_06_14 = {
  type: 'businessDays' | 'calendarDays' | 'range'
  value: number
  rolling?: boolean | undefined
}
type CalendarDaysWindow_2024_06_14 = {
  type: 'businessDays' | 'calendarDays' | 'range'
  value: number
  rolling?: boolean | undefined
}
type RangeWindow_2024_06_14 = { type: 'businessDays' | 'calendarDays' | 'range'; value: string[] }
type BaseConfirmationPolicy_2024_06_14 = {
  type: 'always' | 'time'
  noticeThreshold?: { unit: string; count: number } | undefined
  blockUnconfirmedBookingsInBooker: boolean
}
type Recurrence_2024_06_14 = {
  interval: number
  occurrences: number
  frequency: 'yearly' | 'monthly' | 'weekly'
}
type EventTypeColor_2024_06_14 = { lightThemeHex: string; darkThemeHex: string }
type Seats_2024_06_14 = {
  seatsPerTimeSlot: number
  showAttendeeInfo: boolean
  showAvailabilityCount: boolean
}
type DestinationCalendar_2024_06_14 = { integration: string; externalId: string }
type InputAddressLocation_2024_06_14 = { type: string; address: string; public: boolean }
type InputLinkLocation_2024_06_14 = { type: string; link: string; public: boolean }
type InputIntegrationLocation_2024_06_14 = {
  type: string
  integration:
    | 'cal-video'
    | 'google-meet'
    | 'zoom'
    | 'whereby-video'
    | 'whatsapp-video'
    | 'webex-video'
    | 'telegram-video'
    | 'tandem'
    | 'sylaps-video'
    | 'skype-video'
    | 'sirius-video'
    | 'signal-video'
    | 'shimmer-video'
    | 'salesroom-video'
    | 'roam-video'
    | 'riverside-video'
    | 'ping-video'
    | 'office365-video'
    | 'mirotalk-video'
    | 'jitsi'
    | 'jelly-video'
    | 'jelly-conferencing'
    | 'huddle'
    | 'facetime-video'
    | 'element-call-video'
    | 'eightxeight-video'
    | 'discord-video'
    | 'demodesk-video'
    | 'campfire-video'
}
type InputPhoneLocation_2024_06_14 = { type: string; phone: string; public: boolean }
type InputAttendeeAddressLocation_2024_06_14 = { type: string }
type InputAttendeePhoneLocation_2024_06_14 = { type: string }
type InputAttendeeDefinedLocation_2024_06_14 = { type: string }
type CreateEventTypeInput_2024_06_14 = {
  lengthInMinutes: number
  lengthInMinutesOptions?: string[] | undefined
  title: string
  slug: string
  description?: string | undefined
  bookingFields?:
    | (
        | NameDefaultFieldInput_2024_06_14
        | EmailDefaultFieldInput_2024_06_14
        | TitleDefaultFieldInput_2024_06_14
        | LocationDefaultFieldInput_2024_06_14
        | NotesDefaultFieldInput_2024_06_14
        | GuestsDefaultFieldInput_2024_06_14
        | RescheduleReasonDefaultFieldInput_2024_06_14
        | PhoneFieldInput_2024_06_14
        | AddressFieldInput_2024_06_14
        | TextFieldInput_2024_06_14
        | NumberFieldInput_2024_06_14
        | TextAreaFieldInput_2024_06_14
        | SelectFieldInput_2024_06_14
        | MultiSelectFieldInput_2024_06_14
        | MultiEmailFieldInput_2024_06_14
        | CheckboxGroupFieldInput_2024_06_14
        | RadioGroupFieldInput_2024_06_14
        | BooleanFieldInput_2024_06_14
        | UrlFieldInput_2024_06_14
      )[]
    | undefined
  disableGuests?: boolean | undefined
  slotInterval?: number | undefined
  minimumBookingNotice?: number | undefined
  beforeEventBuffer?: number | undefined
  afterEventBuffer?: number | undefined
  scheduleId?: number | undefined
  bookingLimitsCount?: BaseBookingLimitsCount_2024_06_14 | Disabled_2024_06_14 | undefined
  bookerActiveBookingsLimit?: BookerActiveBookingsLimit_2024_06_14 | Disabled_2024_06_14 | undefined
  onlyShowFirstAvailableSlot?: boolean | undefined
  bookingLimitsDuration?: BaseBookingLimitsDuration_2024_06_14 | Disabled_2024_06_14 | undefined
  bookingWindow?:
    | BusinessDaysWindow_2024_06_14
    | CalendarDaysWindow_2024_06_14
    | RangeWindow_2024_06_14
    | Disabled_2024_06_14
    | undefined
  offsetStart?: number | undefined
  bookerLayouts?:
    | {
        defaultLayout: 'month' | 'week' | 'column'
        enabledLayouts: ('month' | 'week' | 'column')[]
      }
    | undefined
  confirmationPolicy?: BaseConfirmationPolicy_2024_06_14 | Disabled_2024_06_14 | undefined
  recurrence?: Recurrence_2024_06_14 | Disabled_2024_06_14 | undefined
  requiresBookerEmailVerification?: boolean | undefined
  hideCalendarNotes?: boolean | undefined
  lockTimeZoneToggleOnBookingPage?: boolean | undefined
  color?: EventTypeColor_2024_06_14 | undefined
  seats?: Seats_2024_06_14 | Disabled_2024_06_14 | undefined
  customName?: string | undefined
  destinationCalendar?: DestinationCalendar_2024_06_14 | undefined
  useDestinationCalendarEmail?: boolean | undefined
  hideCalendarEventDetails?: boolean | undefined
  successRedirectUrl?: string | undefined
  hideOrganizerEmail?: boolean | undefined
  calVideoSettings?:
    | {
        disableRecordingForOrganizer?: boolean | undefined
        disableRecordingForGuests?: boolean | undefined
        redirectUrlOnExit?: { [x: string]: unknown } | undefined
        enableAutomaticRecordingForOrganizer?: boolean | undefined
        enableAutomaticTranscription?: boolean | undefined
        disableTranscriptionForGuests?: boolean | undefined
        disableTranscriptionForOrganizer?: boolean | undefined
        sendTranscriptionEmails?: boolean | undefined
      }
    | undefined
  hidden?: boolean | undefined
  bookingRequiresAuthentication?: boolean | undefined
  disableCancelling?: { disabled?: boolean | undefined } | undefined
  disableRescheduling?:
    | { disabled?: boolean | undefined; minutesBefore?: number | undefined }
    | undefined
  interfaceLanguage?:
    | ''
    | 'en'
    | 'ar'
    | 'az'
    | 'bg'
    | 'bn'
    | 'ca'
    | 'cs'
    | 'da'
    | 'de'
    | 'el'
    | 'es'
    | 'es-419'
    | 'eu'
    | 'et'
    | 'fi'
    | 'fr'
    | 'he'
    | 'hu'
    | 'it'
    | 'ja'
    | 'km'
    | 'ko'
    | 'nl'
    | 'no'
    | 'pl'
    | 'pt-BR'
    | 'pt'
    | 'ro'
    | 'ru'
    | 'sk-SK'
    | 'sr'
    | 'sv'
    | 'tr'
    | 'uk'
    | 'vi'
    | 'zh-CN'
    | 'zh-TW'
    | undefined
  allowReschedulingPastBookings?: boolean | undefined
  allowReschedulingCancelledBookings?: boolean | undefined
  showOptimizedSlots?: boolean | undefined
  locations?:
    | (
        | InputAddressLocation_2024_06_14
        | InputLinkLocation_2024_06_14
        | InputIntegrationLocation_2024_06_14
        | InputPhoneLocation_2024_06_14
        | InputAttendeeAddressLocation_2024_06_14
        | InputAttendeePhoneLocation_2024_06_14
        | InputAttendeeDefinedLocation_2024_06_14
      )[]
    | undefined
}
type OutputAddressLocation_2024_06_14 = { type: string; address: string; public: boolean }
type OutputLinkLocation_2024_06_14 = { type: string; link: string; public: boolean }
type OutputIntegrationLocation_2024_06_14 = {
  type: string
  integration:
    | 'cal-video'
    | 'google-meet'
    | 'zoom'
    | 'whereby-video'
    | 'whatsapp-video'
    | 'webex-video'
    | 'telegram-video'
    | 'tandem'
    | 'sylaps-video'
    | 'skype-video'
    | 'sirius-video'
    | 'signal-video'
    | 'shimmer-video'
    | 'salesroom-video'
    | 'roam-video'
    | 'riverside-video'
    | 'ping-video'
    | 'office365-video'
    | 'mirotalk-video'
    | 'jitsi'
    | 'jelly-video'
    | 'jelly-conferencing'
    | 'huddle'
    | 'facetime-video'
    | 'element-call-video'
    | 'eightxeight-video'
    | 'discord-video'
    | 'demodesk-video'
    | 'campfire-video'
  link?: string | undefined
  credentialId?: number | undefined
}
type OutputPhoneLocation_2024_06_14 = { type: string; phone: string; public: boolean }
type OutputOrganizersDefaultAppLocation_2024_06_14 = { type: string }
type OutputUnknownLocation_2024_06_14 = { type: string; location: string }
type NameDefaultFieldOutput_2024_06_14 = {
  type: string
  label: string
  placeholder: string
  disableOnPrefill?: boolean | undefined
  isDefault: { [x: string]: unknown }
  slug: string
  required: boolean
}
type EmailDefaultFieldOutput_2024_06_14 = {
  type: string
  label: string
  required?: { [x: string]: unknown } | undefined
  hidden?: boolean | undefined
  placeholder: string
  disableOnPrefill?: boolean | undefined
  isDefault: { [x: string]: unknown }
  slug: string
}
type LocationDefaultFieldOutput_2024_06_14 = {
  isDefault: { [x: string]: unknown }
  slug: string
  type: string
  required: boolean
  hidden: boolean
  label: string
}
type RescheduleReasonDefaultFieldOutput_2024_06_14 = {
  slug: string
  required?: boolean | undefined
  hidden?: boolean | undefined
  label?: string | undefined
  placeholder?: string | undefined
  disableOnPrefill?: boolean | undefined
  isDefault: { [x: string]: unknown }
  type: string
}
type TitleDefaultFieldOutput_2024_06_14 = {
  slug: string
  required?: boolean | undefined
  hidden?: boolean | undefined
  label?: string | undefined
  placeholder?: string | undefined
  disableOnPrefill?: boolean | undefined
  isDefault: { [x: string]: unknown }
  type: string
}
type NotesDefaultFieldOutput_2024_06_14 = {
  slug: string
  required?: boolean | undefined
  hidden?: boolean | undefined
  label?: string | undefined
  placeholder?: string | undefined
  disableOnPrefill?: boolean | undefined
  isDefault: { [x: string]: unknown }
  type: string
}
type GuestsDefaultFieldOutput_2024_06_14 = {
  slug: string
  required?: boolean | undefined
  hidden?: boolean | undefined
  label?: string | undefined
  placeholder?: string | undefined
  disableOnPrefill?: boolean | undefined
  isDefault: { [x: string]: unknown }
  type: string
}
type PhoneFieldOutput_2024_06_14 = {
  type: string
  slug: string
  label: string
  required: boolean
  placeholder: string
  disableOnPrefill?: boolean | undefined
  hidden: boolean
  isDefault: { [x: string]: unknown }
}
type AddressFieldOutput_2024_06_14 = {
  type: string
  slug: string
  label: string
  required: boolean
  placeholder: string
  disableOnPrefill?: boolean | undefined
  hidden: boolean
  isDefault: { [x: string]: unknown }
}
type TextFieldOutput_2024_06_14 = {
  type: string
  slug: string
  label: string
  required: boolean
  placeholder: string
  disableOnPrefill?: boolean | undefined
  hidden: boolean
  isDefault: { [x: string]: unknown }
}
type NumberFieldOutput_2024_06_14 = {
  type: string
  slug: string
  label: string
  required: boolean
  placeholder: string
  disableOnPrefill?: boolean | undefined
  hidden: boolean
  isDefault: { [x: string]: unknown }
}
type TextAreaFieldOutput_2024_06_14 = {
  type: string
  slug: string
  label: string
  required: boolean
  placeholder: string
  disableOnPrefill?: boolean | undefined
  hidden: boolean
  isDefault: { [x: string]: unknown }
}
type SelectFieldOutput_2024_06_14 = {
  type: string
  slug: string
  label: string
  required: boolean
  placeholder: string
  options: string[]
  disableOnPrefill?: boolean | undefined
  hidden: boolean
  isDefault: { [x: string]: unknown }
}
type MultiSelectFieldOutput_2024_06_14 = {
  type: string
  slug: string
  label: string
  required: boolean
  options: string[]
  disableOnPrefill?: boolean | undefined
  hidden: boolean
  isDefault: { [x: string]: unknown }
}
type MultiEmailFieldOutput_2024_06_14 = {
  type: string
  slug: string
  label: string
  required: boolean
  placeholder: string
  disableOnPrefill?: boolean | undefined
  hidden: boolean
  isDefault: { [x: string]: unknown }
}
type CheckboxGroupFieldOutput_2024_06_14 = {
  type: string
  slug: string
  label: string
  required: boolean
  options: string[]
  disableOnPrefill?: boolean | undefined
  hidden: boolean
  isDefault: { [x: string]: unknown }
}
type RadioGroupFieldOutput_2024_06_14 = {
  type: string
  slug: string
  label: string
  required: boolean
  options: string[]
  disableOnPrefill?: boolean | undefined
  hidden: boolean
  isDefault: { [x: string]: unknown }
}
type BooleanFieldOutput_2024_06_14 = {
  type: string
  slug: string
  label: string
  required: boolean
  disableOnPrefill?: boolean | undefined
  hidden: boolean
  isDefault: { [x: string]: unknown }
}
type UrlFieldOutput_2024_06_14 = {
  type: string
  slug: string
  label: string
  required: boolean
  placeholder: string
  disableOnPrefill?: boolean | undefined
  hidden: boolean
  isDefault: { [x: string]: unknown }
}
type BookerActiveBookingsLimitOutput_2024_06_14 = {
  maximumActiveBookings?: number | undefined
  offerReschedule?: boolean | undefined
}
type BookerLayouts_2024_06_14 = {
  defaultLayout: 'month' | 'week' | 'column'
  enabledLayouts: ('month' | 'week' | 'column')[]
}
type EventTypeOutput_2024_06_14 = {
  id: number
  lengthInMinutes: number
  lengthInMinutesOptions?: number[] | undefined
  title: string
  slug: string
  description: string
  locations: (
    | OutputAddressLocation_2024_06_14
    | OutputLinkLocation_2024_06_14
    | OutputIntegrationLocation_2024_06_14
    | OutputPhoneLocation_2024_06_14
    | OutputOrganizersDefaultAppLocation_2024_06_14
    | OutputUnknownLocation_2024_06_14
  )[]
  bookingFields: (
    | NameDefaultFieldOutput_2024_06_14
    | EmailDefaultFieldOutput_2024_06_14
    | LocationDefaultFieldOutput_2024_06_14
    | RescheduleReasonDefaultFieldOutput_2024_06_14
    | TitleDefaultFieldOutput_2024_06_14
    | NotesDefaultFieldOutput_2024_06_14
    | GuestsDefaultFieldOutput_2024_06_14
    | PhoneFieldOutput_2024_06_14
    | AddressFieldOutput_2024_06_14
    | TextFieldOutput_2024_06_14
    | NumberFieldOutput_2024_06_14
    | TextAreaFieldOutput_2024_06_14
    | SelectFieldOutput_2024_06_14
    | MultiSelectFieldOutput_2024_06_14
    | MultiEmailFieldOutput_2024_06_14
    | CheckboxGroupFieldOutput_2024_06_14
    | RadioGroupFieldOutput_2024_06_14
    | BooleanFieldOutput_2024_06_14
    | UrlFieldOutput_2024_06_14
  )[]
  disableGuests: boolean
  slotInterval?: ({ [x: string]: unknown } | null) | undefined
  minimumBookingNotice?: number | undefined
  beforeEventBuffer?: number | undefined
  afterEventBuffer?: number | undefined
  recurrence: { interval: number; occurrences: number; frequency: 'yearly' | 'monthly' | 'weekly' }
  metadata: { [x: string]: unknown }
  price: number
  currency: string
  lockTimeZoneToggleOnBookingPage: boolean
  seatsPerTimeSlot?: ({ [x: string]: unknown } | null) | undefined
  forwardParamsSuccessRedirect: { [x: string]: unknown } | null
  successRedirectUrl: { [x: string]: unknown } | null
  isInstantEvent: boolean
  seatsShowAvailabilityCount?: (boolean | null) | undefined
  scheduleId: number | null
  bookingLimitsCount?: { [x: string]: unknown } | undefined
  bookerActiveBookingsLimit?: BookerActiveBookingsLimitOutput_2024_06_14 | undefined
  onlyShowFirstAvailableSlot?: boolean | undefined
  bookingLimitsDuration?: { [x: string]: unknown } | undefined
  bookingWindow?:
    | (BusinessDaysWindow_2024_06_14 | CalendarDaysWindow_2024_06_14 | RangeWindow_2024_06_14)[]
    | undefined
  bookerLayouts?: BookerLayouts_2024_06_14 | undefined
  confirmationPolicy?: { [x: string]: unknown } | undefined
  requiresBookerEmailVerification?: boolean | undefined
  hideCalendarNotes?: boolean | undefined
  color?: EventTypeColor_2024_06_14 | undefined
  seats?: Seats_2024_06_14 | undefined
  offsetStart?: number | undefined
  customName?: string | undefined
  destinationCalendar?: DestinationCalendar_2024_06_14 | undefined
  useDestinationCalendarEmail?: boolean | undefined
  hideCalendarEventDetails?: boolean | undefined
  hideOrganizerEmail?: boolean | undefined
  calVideoSettings?:
    | {
        disableRecordingForOrganizer?: boolean | undefined
        disableRecordingForGuests?: boolean | undefined
        redirectUrlOnExit?: { [x: string]: unknown } | undefined
        enableAutomaticRecordingForOrganizer?: boolean | undefined
        enableAutomaticTranscription?: boolean | undefined
        disableTranscriptionForGuests?: boolean | undefined
        disableTranscriptionForOrganizer?: boolean | undefined
        sendTranscriptionEmails?: boolean | undefined
      }
    | undefined
  hidden: boolean
  bookingRequiresAuthentication: boolean
  disableCancelling?: { disabled?: boolean | undefined } | undefined
  disableRescheduling?:
    | { disabled?: boolean | undefined; minutesBefore?: number | undefined }
    | undefined
  interfaceLanguage?: (string | null) | undefined
  allowReschedulingPastBookings?: boolean | undefined
  allowReschedulingCancelledBookings?: (boolean | null) | undefined
  showOptimizedSlots?: (boolean | null) | undefined
  ownerId: number
  users: string[]
  bookingUrl: string
}
type CreateEventTypeOutput_2024_06_14 = {
  status: 'success' | 'error'
  data: EventTypeOutput_2024_06_14
}
type GetEventTypesOutput_2024_06_14 = {
  status: 'success' | 'error'
  data: EventTypeOutput_2024_06_14[]
}
type EventTypeTeam = {
  id: number
  slug: string
  bannerUrl: string
  name: string
  logoUrl: string
  weekStart: string
  brandColor: string
  darkBrandColor: string
  theme: string
}
type TeamEventTypeOutput_2024_06_14 = {
  id: number
  lengthInMinutes: number
  lengthInMinutesOptions?: number[] | undefined
  title: string
  slug: string
  description: string
  locations: (
    | OutputAddressLocation_2024_06_14
    | OutputLinkLocation_2024_06_14
    | OutputIntegrationLocation_2024_06_14
    | OutputPhoneLocation_2024_06_14
    | OutputOrganizersDefaultAppLocation_2024_06_14
    | OutputUnknownLocation_2024_06_14
  )[]
  bookingFields: (
    | NameDefaultFieldOutput_2024_06_14
    | EmailDefaultFieldOutput_2024_06_14
    | LocationDefaultFieldOutput_2024_06_14
    | RescheduleReasonDefaultFieldOutput_2024_06_14
    | TitleDefaultFieldOutput_2024_06_14
    | NotesDefaultFieldOutput_2024_06_14
    | GuestsDefaultFieldOutput_2024_06_14
    | PhoneFieldOutput_2024_06_14
    | AddressFieldOutput_2024_06_14
    | TextFieldOutput_2024_06_14
    | NumberFieldOutput_2024_06_14
    | TextAreaFieldOutput_2024_06_14
    | SelectFieldOutput_2024_06_14
    | MultiSelectFieldOutput_2024_06_14
    | MultiEmailFieldOutput_2024_06_14
    | CheckboxGroupFieldOutput_2024_06_14
    | RadioGroupFieldOutput_2024_06_14
    | BooleanFieldOutput_2024_06_14
    | UrlFieldOutput_2024_06_14
  )[]
  disableGuests: boolean
  slotInterval?: ({ [x: string]: unknown } | null) | undefined
  minimumBookingNotice?: number | undefined
  beforeEventBuffer?: number | undefined
  afterEventBuffer?: number | undefined
  recurrence: { interval: number; occurrences: number; frequency: 'yearly' | 'monthly' | 'weekly' }
  metadata: { [x: string]: unknown }
  price: number
  currency: string
  lockTimeZoneToggleOnBookingPage: boolean
  seatsPerTimeSlot?: ({ [x: string]: unknown } | null) | undefined
  forwardParamsSuccessRedirect: { [x: string]: unknown } | null
  successRedirectUrl: { [x: string]: unknown } | null
  isInstantEvent: boolean
  seatsShowAvailabilityCount?: (boolean | null) | undefined
  scheduleId: number | null
  bookingLimitsCount?: { [x: string]: unknown } | undefined
  bookerActiveBookingsLimit?: BookerActiveBookingsLimitOutput_2024_06_14 | undefined
  onlyShowFirstAvailableSlot?: boolean | undefined
  bookingLimitsDuration?: { [x: string]: unknown } | undefined
  bookingWindow?:
    | (BusinessDaysWindow_2024_06_14 | CalendarDaysWindow_2024_06_14 | RangeWindow_2024_06_14)[]
    | undefined
  bookerLayouts?: BookerLayouts_2024_06_14 | undefined
  confirmationPolicy?: { [x: string]: unknown } | undefined
  requiresBookerEmailVerification?: boolean | undefined
  hideCalendarNotes?: boolean | undefined
  color?: EventTypeColor_2024_06_14 | undefined
  seats?: Seats_2024_06_14 | undefined
  offsetStart?: number | undefined
  customName?: string | undefined
  destinationCalendar?: DestinationCalendar_2024_06_14 | undefined
  useDestinationCalendarEmail?: boolean | undefined
  hideCalendarEventDetails?: boolean | undefined
  hideOrganizerEmail?: boolean | undefined
  calVideoSettings?:
    | {
        disableRecordingForOrganizer?: boolean | undefined
        disableRecordingForGuests?: boolean | undefined
        redirectUrlOnExit?: { [x: string]: unknown } | undefined
        enableAutomaticRecordingForOrganizer?: boolean | undefined
        enableAutomaticTranscription?: boolean | undefined
        disableTranscriptionForGuests?: boolean | undefined
        disableTranscriptionForOrganizer?: boolean | undefined
        sendTranscriptionEmails?: boolean | undefined
      }
    | undefined
  hidden: boolean
  bookingRequiresAuthentication: boolean
  disableCancelling?: { disabled?: boolean | undefined } | undefined
  disableRescheduling?:
    | { disabled?: boolean | undefined; minutesBefore?: number | undefined }
    | undefined
  interfaceLanguage?: (string | null) | undefined
  allowReschedulingPastBookings?: boolean | undefined
  allowReschedulingCancelledBookings?: (boolean | null) | undefined
  showOptimizedSlots?: (boolean | null) | undefined
  teamId: number
  ownerId?: ({ [x: string]: unknown } | null) | undefined
  parentEventTypeId?: ({ [x: string]: unknown } | null) | undefined
  hosts: string[]
  assignAllTeamMembers?: boolean | undefined
  schedulingType: 'roundRobin' | 'collective' | 'managed'
  team: EventTypeTeam
  emailSettings?:
    | { disableEmailsToAttendees?: boolean | undefined; disableEmailsToHosts?: boolean | undefined }
    | undefined
  rescheduleWithSameRoundRobinHost?: boolean | undefined
}
type GetEventTypeOutput_2024_06_14 = {
  status: 'success' | 'error'
  data: EventTypeOutput_2024_06_14 | TeamEventTypeOutput_2024_06_14
}
type UpdateEventTypeInput_2024_06_14 = {
  lengthInMinutes?: number | undefined
  lengthInMinutesOptions?: string[] | undefined
  title?: string | undefined
  slug?: string | undefined
  description?: string | undefined
  bookingFields?:
    | (
        | NameDefaultFieldInput_2024_06_14
        | EmailDefaultFieldInput_2024_06_14
        | TitleDefaultFieldInput_2024_06_14
        | LocationDefaultFieldInput_2024_06_14
        | NotesDefaultFieldInput_2024_06_14
        | GuestsDefaultFieldInput_2024_06_14
        | RescheduleReasonDefaultFieldInput_2024_06_14
        | PhoneFieldInput_2024_06_14
        | AddressFieldInput_2024_06_14
        | TextFieldInput_2024_06_14
        | NumberFieldInput_2024_06_14
        | TextAreaFieldInput_2024_06_14
        | SelectFieldInput_2024_06_14
        | MultiSelectFieldInput_2024_06_14
        | MultiEmailFieldInput_2024_06_14
        | CheckboxGroupFieldInput_2024_06_14
        | RadioGroupFieldInput_2024_06_14
        | BooleanFieldInput_2024_06_14
      )[]
    | undefined
  disableGuests?: boolean | undefined
  slotInterval?: number | undefined
  minimumBookingNotice?: number | undefined
  beforeEventBuffer?: number | undefined
  afterEventBuffer?: number | undefined
  scheduleId?: number | undefined
  bookingLimitsCount?: BaseBookingLimitsCount_2024_06_14 | Disabled_2024_06_14 | undefined
  bookerActiveBookingsLimit?: BookerActiveBookingsLimit_2024_06_14 | Disabled_2024_06_14 | undefined
  onlyShowFirstAvailableSlot?: boolean | undefined
  bookingLimitsDuration?: BaseBookingLimitsDuration_2024_06_14 | Disabled_2024_06_14 | undefined
  bookingWindow?:
    | BusinessDaysWindow_2024_06_14
    | CalendarDaysWindow_2024_06_14
    | RangeWindow_2024_06_14
    | Disabled_2024_06_14
    | undefined
  offsetStart?: number | undefined
  bookerLayouts?:
    | {
        defaultLayout: 'month' | 'week' | 'column'
        enabledLayouts: ('month' | 'week' | 'column')[]
      }
    | undefined
  confirmationPolicy?: BaseConfirmationPolicy_2024_06_14 | Disabled_2024_06_14 | undefined
  recurrence?: Recurrence_2024_06_14 | Disabled_2024_06_14 | undefined
  requiresBookerEmailVerification?: boolean | undefined
  hideCalendarNotes?: boolean | undefined
  lockTimeZoneToggleOnBookingPage?: boolean | undefined
  color?: EventTypeColor_2024_06_14 | undefined
  seats?: Seats_2024_06_14 | Disabled_2024_06_14 | undefined
  customName?: string | undefined
  destinationCalendar?: DestinationCalendar_2024_06_14 | undefined
  useDestinationCalendarEmail?: boolean | undefined
  hideCalendarEventDetails?: boolean | undefined
  successRedirectUrl?: string | undefined
  hideOrganizerEmail?: boolean | undefined
  calVideoSettings?:
    | {
        disableRecordingForOrganizer?: boolean | undefined
        disableRecordingForGuests?: boolean | undefined
        redirectUrlOnExit?: { [x: string]: unknown } | undefined
        enableAutomaticRecordingForOrganizer?: boolean | undefined
        enableAutomaticTranscription?: boolean | undefined
        disableTranscriptionForGuests?: boolean | undefined
        disableTranscriptionForOrganizer?: boolean | undefined
        sendTranscriptionEmails?: boolean | undefined
      }
    | undefined
  hidden?: boolean | undefined
  bookingRequiresAuthentication?: boolean | undefined
  disableCancelling?: { disabled?: boolean | undefined } | undefined
  disableRescheduling?:
    | { disabled?: boolean | undefined; minutesBefore?: number | undefined }
    | undefined
  interfaceLanguage?:
    | ''
    | 'en'
    | 'ar'
    | 'az'
    | 'bg'
    | 'bn'
    | 'ca'
    | 'cs'
    | 'da'
    | 'de'
    | 'el'
    | 'es'
    | 'es-419'
    | 'eu'
    | 'et'
    | 'fi'
    | 'fr'
    | 'he'
    | 'hu'
    | 'it'
    | 'ja'
    | 'km'
    | 'ko'
    | 'nl'
    | 'no'
    | 'pl'
    | 'pt-BR'
    | 'pt'
    | 'ro'
    | 'ru'
    | 'sk-SK'
    | 'sr'
    | 'sv'
    | 'tr'
    | 'uk'
    | 'vi'
    | 'zh-CN'
    | 'zh-TW'
    | undefined
  allowReschedulingPastBookings?: boolean | undefined
  allowReschedulingCancelledBookings?: boolean | undefined
  showOptimizedSlots?: boolean | undefined
  locations?:
    | (
        | InputAddressLocation_2024_06_14
        | InputLinkLocation_2024_06_14
        | InputIntegrationLocation_2024_06_14
        | InputPhoneLocation_2024_06_14
        | InputAttendeeAddressLocation_2024_06_14
        | InputAttendeePhoneLocation_2024_06_14
        | InputAttendeeDefinedLocation_2024_06_14
      )[]
    | undefined
}
type UpdateEventTypeOutput_2024_06_14 = {
  status: 'success' | 'error'
  data: EventTypeOutput_2024_06_14
}
type DeleteData_2024_06_14 = { id: number; lengthInMinutes: number; title: string; slug: string }
type DeleteEventTypeOutput_2024_06_14 = { status: 'success' | 'error'; data: DeleteData_2024_06_14 }
type EventTypeWebhookOutputDto = {
  payloadTemplate: string
  triggers: (
    | 'BOOKING_CREATED'
    | 'BOOKING_PAYMENT_INITIATED'
    | 'BOOKING_PAID'
    | 'BOOKING_RESCHEDULED'
    | 'BOOKING_REQUESTED'
    | 'BOOKING_CANCELLED'
    | 'BOOKING_REJECTED'
    | 'BOOKING_NO_SHOW_UPDATED'
    | 'FORM_SUBMITTED'
    | 'MEETING_ENDED'
    | 'MEETING_STARTED'
    | 'RECORDING_READY'
    | 'INSTANT_MEETING'
    | 'RECORDING_TRANSCRIPTION_GENERATED'
    | 'OOO_CREATED'
    | 'AFTER_HOSTS_CAL_VIDEO_NO_SHOW'
    | 'AFTER_GUESTS_CAL_VIDEO_NO_SHOW'
    | 'FORM_SUBMITTED_NO_EVENT'
    | 'DELEGATION_CREDENTIAL_ERROR'
    | 'WRONG_ASSIGNMENT_REPORT'
  )[]
  eventTypeId: number
  id: number
  subscriberUrl: string
  active: boolean
  secret?: string | undefined
}
type EventTypeWebhookOutputResponseDto = {
  status: 'success' | 'error'
  data: EventTypeWebhookOutputDto
}
type EventTypeWebhooksOutputResponseDto = {
  status: 'success' | 'error'
  data: EventTypeWebhookOutputDto[]
}
type CreatePrivateLinkInput = { expiresAt?: string | undefined; maxUsageCount?: number | undefined }
type TimeBasedPrivateLinkOutput = {
  linkId: string
  eventTypeId: number
  isExpired: boolean
  bookingUrl: string
  expiresAt: string
}
type UsageBasedPrivateLinkOutput = {
  linkId: string
  eventTypeId: number
  isExpired: boolean
  bookingUrl: string
  maxUsageCount: number
  usageCount: number
}
type CreatePrivateLinkOutput = {
  status: string
  data: TimeBasedPrivateLinkOutput | UsageBasedPrivateLinkOutput
}
type GetPrivateLinksOutput = {
  status: string
  data: (TimeBasedPrivateLinkOutput | UsageBasedPrivateLinkOutput)[]
}
type UpdatePrivateLinkBody = { expiresAt?: string | undefined; maxUsageCount?: number | undefined }
type UpdatePrivateLinkOutput = {
  status: string
  data: TimeBasedPrivateLinkOutput | UsageBasedPrivateLinkOutput
}
type DeletePrivateLinkOutput = {
  status: string
  data: { linkId?: string | undefined; message?: string | undefined }
}
type MeOrgOutput = { isPlatform: boolean; id: number }
type MeOutput = {
  id: number
  username: string
  email: string
  name: string | null
  avatarUrl: string | null
  bio: string | null
  timeFormat: number
  defaultScheduleId: number | null
  weekStart: string
  timeZone: string
  organizationId: number | null
  organization?: MeOrgOutput | undefined
}
type GetMeOutput = { status: 'success' | 'error'; data: MeOutput }
type UpdateMeOutput = { status: 'success' | 'error'; data: MeOutput }
type OAuth2ClientDto = {
  client_id: string
  redirect_uris: string[]
  name: string
  logo?: (string | null) | undefined
  is_trusted: boolean
  client_type: 'CONFIDENTIAL' | 'PUBLIC'
}
type OAuth2ClientResponseDto = { status: 'success' | 'error'; data: OAuth2ClientDto }
type OAuth2ExchangeConfidentialInput = {
  client_id: string
  grant_type: 'authorization_code'
  code: string
  redirect_uri: string
  client_secret: string
}
type OAuth2ExchangePublicInput = {
  client_id: string
  grant_type: 'authorization_code'
  code: string
  redirect_uri: string
  code_verifier: string
}
type OAuth2RefreshConfidentialInput = {
  client_id: string
  grant_type: 'refresh_token'
  refresh_token: string
  client_secret: string
}
type OAuth2RefreshPublicInput = {
  client_id: string
  grant_type: 'refresh_token'
  refresh_token: string
}
type OAuth2TokensDto = {
  access_token: string
  token_type: string
  refresh_token: string
  expires_in: number
}
type ScheduleAvailabilityInput_2024_06_11 = {
  days: ('Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday')[]
  startTime: string
  endTime: string
}
type ScheduleOverrideInput_2024_06_11 = { date: string; startTime: string; endTime: string }
type CreateScheduleInput_2024_06_11 = {
  name: string
  timeZone: string
  availability?: ScheduleAvailabilityInput_2024_06_11[] | undefined
  isDefault: boolean
  overrides?: ScheduleOverrideInput_2024_06_11[] | undefined
}
type ScheduleOutput_2024_06_11 = {
  id: number
  ownerId: number
  name: string
  timeZone: string
  availability: ScheduleAvailabilityInput_2024_06_11[]
  isDefault: boolean
  overrides: ScheduleOverrideInput_2024_06_11[]
}
type CreateScheduleOutput_2024_06_11 = {
  status: 'success' | 'error'
  data: ScheduleOutput_2024_06_11
}
type GetSchedulesOutput_2024_06_11 = {
  status: 'success' | 'error'
  data: ScheduleOutput_2024_06_11[]
  error?: { [x: string]: unknown } | undefined
}
type GetDefaultScheduleOutput_2024_06_11 = {
  status: 'success' | 'error'
  data: ScheduleOutput_2024_06_11
}
type GetScheduleOutput_2024_06_11 = {
  status: 'success' | 'error'
  data: {
    id: number
    ownerId: number
    name: string
    timeZone: string
    availability: ScheduleAvailabilityInput_2024_06_11[]
    isDefault: boolean
    overrides: ScheduleOverrideInput_2024_06_11[]
  }
  error?: { [x: string]: unknown } | undefined
}
type UpdateScheduleInput_2024_06_11 = {
  name?: string | undefined
  timeZone?: string | undefined
  availability?: ScheduleAvailabilityInput_2024_06_11[] | undefined
  isDefault?: boolean | undefined
  overrides?: ScheduleOverrideInput_2024_06_11[] | undefined
}
type UpdateScheduleOutput_2024_06_11 = {
  status: 'success' | 'error'
  data: ScheduleOutput_2024_06_11
  error?: { [x: string]: unknown } | undefined
}
type DeleteScheduleOutput_2024_06_11 = { status: 'success' | 'error' }
type SelectedCalendarsInputDto = {
  integration: string
  externalId: string
  credentialId: number
  delegationCredentialId?: string | undefined
}
type SelectedCalendarOutputDto = {
  userId: number
  integration: string
  externalId: string
  credentialId: number | null
}
type SelectedCalendarOutputResponseDto = {
  status: 'success' | 'error'
  data: SelectedCalendarOutputDto
}
type ReserveSlotInput_2024_09_04 = {
  eventTypeId: number
  slotStart: string
  slotDuration?: number | undefined
  reservationDuration?: number | undefined
}
type ReserveSlotOutput_2024_09_04 = {
  eventTypeId: number
  slotStart: string
  slotEnd: string
  slotDuration: number
  reservationUid: string
  reservationDuration: number
  reservationUntil: string
}
type ReserveSlotOutputResponse_2024_09_04 = {
  status: 'success' | 'error'
  data: ReserveSlotOutput_2024_09_04
}
type GetReservedSlotOutput_2024_09_04 = { status: 'success' | 'error'; data: {} }
type StripConnectOutputDto = { authUrl: string }
type StripConnectOutputResponseDto = { status: 'success' | 'error'; data: StripConnectOutputDto }
type StripCredentialsSaveOutputResponseDto = { url: string }
type StripCredentialsCheckOutputResponseDto = { status: { [x: string]: unknown } }
type RequestEmailVerificationInput = { email: string }
type RequestEmailVerificationOutput = { status: 'success' | 'error' }
type RequestPhoneVerificationInput = { phone: string }
type RequestPhoneVerificationOutput = { status: 'success' | 'error' }
type VerifyEmailInput = { email: string; code: string }
type UserVerifiedEmailOutputData = { id: number; email: string; userId: number }
type UserVerifiedEmailOutput = { status: 'success' | 'error'; data: UserVerifiedEmailOutputData }
type VerifyPhoneInput = { phone: string; code: string }
type UserVerifiedPhoneOutputData = { id: number; phoneNumber: string; userId: number }
type UserVerifiedPhoneOutput = { status: 'success' | 'error'; data: UserVerifiedPhoneOutputData }
type UserVerifiedEmailsOutput = { status: 'success' | 'error'; data: UserVerifiedEmailOutputData[] }
type UserVerifiedPhonesOutput = { status: 'success' | 'error'; data: UserVerifiedPhoneOutputData[] }
type UserWebhookOutputDto = {
  payloadTemplate: string
  triggers: (
    | 'BOOKING_CREATED'
    | 'BOOKING_PAYMENT_INITIATED'
    | 'BOOKING_PAID'
    | 'BOOKING_RESCHEDULED'
    | 'BOOKING_REQUESTED'
    | 'BOOKING_CANCELLED'
    | 'BOOKING_REJECTED'
    | 'BOOKING_NO_SHOW_UPDATED'
    | 'FORM_SUBMITTED'
    | 'MEETING_ENDED'
    | 'MEETING_STARTED'
    | 'RECORDING_READY'
    | 'INSTANT_MEETING'
    | 'RECORDING_TRANSCRIPTION_GENERATED'
    | 'OOO_CREATED'
    | 'AFTER_HOSTS_CAL_VIDEO_NO_SHOW'
    | 'AFTER_GUESTS_CAL_VIDEO_NO_SHOW'
    | 'FORM_SUBMITTED_NO_EVENT'
    | 'DELEGATION_CREDENTIAL_ERROR'
    | 'WRONG_ASSIGNMENT_REPORT'
  )[]
  userId: number
  id: number
  subscriberUrl: string
  active: boolean
  secret?: string | undefined
}
type UserWebhookOutputResponseDto = { status: 'success' | 'error'; data: UserWebhookOutputDto }
type UserWebhooksOutputResponseDto = { status: 'success' | 'error'; data: UserWebhookOutputDto[] }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v2/api-keys/refresh': {
      $post: {
        input: { header: { Authorization: string } } & { json: RefreshApiKeyInput }
        output: RefreshApiKeyOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bookings': {
      $post: {
        input: {
          header: {
            'cal-api-version': string
            Authorization?: string | undefined
            'x-cal-secret-key'?: string | undefined
            'x-cal-client-id'?: string | undefined
          }
        } & { json: CreateBookingInput_2024_08_13 | CreateRecurringBookingInput_2024_08_13 }
        output: CreateBookingOutput_2024_08_13
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: {
          query: {
            status?: ('upcoming' | 'recurring' | 'past' | 'cancelled' | 'unconfirmed')[] | undefined
            attendeeEmail?: string | undefined
            attendeeName?: string | undefined
            bookingUid?: string | undefined
            eventTypeIds?: string | undefined
            eventTypeId?: string | undefined
            teamsIds?: string | undefined
            teamId?: string | undefined
            afterStart?: string | undefined
            beforeEnd?: string | undefined
            afterCreatedAt?: string | undefined
            beforeCreatedAt?: string | undefined
            afterUpdatedAt?: string | undefined
            beforeUpdatedAt?: string | undefined
            sortStart?: 'asc' | 'desc' | undefined
            sortEnd?: 'asc' | 'desc' | undefined
            sortCreated?: 'asc' | 'desc' | undefined
            sortUpdatedAt?: 'asc' | 'desc' | undefined
            take?: number | undefined
            skip?: number | undefined
          }
        } & { header: { 'cal-api-version': string; Authorization: string } }
        output: GetBookingsOutput_2024_08_13
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bookings/by-seat/:seatUid': {
      $get: {
        input: { param: { seatUid: string } } & {
          header: {
            'cal-api-version': string
            Authorization?: string | undefined
            'x-cal-secret-key'?: string | undefined
            'x-cal-client-id'?: string | undefined
          }
        }
        output: GetBookingOutput_2024_08_13
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bookings/:bookingUid': {
      $get: {
        input: { param: { bookingUid: string } } & {
          header: {
            'cal-api-version': string
            Authorization?: string | undefined
            'x-cal-secret-key'?: string | undefined
            'x-cal-client-id'?: string | undefined
          }
        }
        output: GetBookingOutput_2024_08_13
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bookings/:bookingUid/recordings': {
      $get: {
        input: { param: { bookingUid: string } } & {
          header: { 'cal-api-version': string; Authorization: string }
        }
        output: GetBookingRecordingsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bookings/:bookingUid/transcripts': {
      $get: {
        input: { param: { bookingUid: string } } & {
          header: { 'cal-api-version': string; Authorization: string }
        }
        output: GetBookingTranscriptsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bookings/:bookingUid/reschedule': {
      $post: {
        input: { param: { bookingUid: string } } & {
          header: {
            'cal-api-version': string
            Authorization?: string | undefined
            'x-cal-secret-key'?: string | undefined
            'x-cal-client-id'?: string | undefined
          }
        } & { json: RescheduleBookingInput_2024_08_13 | RescheduleSeatedBookingInput_2024_08_13 }
        output: RescheduleBookingOutput_2024_08_13
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/v2/bookings/:bookingUid/cancel': {
      $post: {
        input: { param: { bookingUid: string } } & {
          header: {
            'cal-api-version': string
            Authorization?: string | undefined
            'x-cal-secret-key'?: string | undefined
            'x-cal-client-id'?: string | undefined
          }
        } & { json: CancelBookingInput_2024_08_13 | CancelSeatedBookingInput_2024_08_13 }
        output: CancelBookingOutput_2024_08_13
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bookings/:bookingUid/mark-absent': {
      $post: {
        input: { param: { bookingUid: string } } & {
          header: { 'cal-api-version': string; Authorization: string }
        } & { json: MarkAbsentBookingInput_2024_08_13 }
        output: MarkAbsentBookingOutput_2024_08_13
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bookings/:bookingUid/reassign': {
      $post: {
        input: { param: { bookingUid: string } } & {
          header: { 'cal-api-version': string; Authorization: string }
        }
        output: ReassignBookingOutput_2024_08_13
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bookings/:bookingUid/reassign/:userId': {
      $post: {
        input: { param: { bookingUid: string; userId: number } } & {
          header: { 'cal-api-version': string; Authorization: string }
        } & { json: ReassignToUserBookingInput_2024_08_13 }
        output: ReassignBookingOutput_2024_08_13
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bookings/:bookingUid/confirm': {
      $post: {
        input: { param: { bookingUid: string } } & {
          header: { 'cal-api-version': string; Authorization: string }
        }
        output: GetBookingOutput_2024_08_13
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bookings/:bookingUid/decline': {
      $post: {
        input: { param: { bookingUid: string } } & {
          header: { 'cal-api-version': string; Authorization: string }
        } & { json: DeclineBookingInput_2024_08_13 }
        output: GetBookingOutput_2024_08_13
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bookings/:bookingUid/calendar-links': {
      $get: {
        input: { param: { bookingUid: string } } & {
          header: { 'cal-api-version': string; Authorization: string }
        }
        output: CalendarLinksOutput_2024_08_13
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bookings/:bookingUid/references': {
      $get: {
        input: { param: { bookingUid: string } } & {
          query: {
            type?:
              | 'google_calendar'
              | 'office365_calendar'
              | 'daily_video'
              | 'google_video'
              | 'office365_video'
              | 'zoom_video'
              | undefined
          }
        } & { header: { 'cal-api-version': string; Authorization: string } }
        output: BookingReferencesOutput_2024_08_13
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bookings/:bookingUid/conferencing-sessions': {
      $get: {
        input: { param: { bookingUid: string } } & {
          header: { 'cal-api-version': string; Authorization: string }
        }
        output: GetBookingVideoSessionsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bookings/:bookingUid/location': {
      $patch: {
        input: { param: { bookingUid: string } } & {
          header: { 'cal-api-version': string; Authorization: string }
        } & { json: UpdateBookingLocationInput_2024_08_13 }
        output: UpdateBookingLocationOutput_2024_08_13
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bookings/:bookingUid/attendees': {
      $get: {
        input: { param: { bookingUid: string } } & {
          header: { 'cal-api-version': string; Authorization: string }
        }
        output: GetBookingAttendeesOutput_2024_08_13
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { bookingUid: string } } & {
          header: { 'cal-api-version': string; Authorization: string }
        } & { json: AddAttendeeInput_2024_08_13 }
        output: AddAttendeeOutput_2024_08_13
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/v2/bookings/:bookingUid/attendees/:attendeeId': {
      $get: {
        input: { param: { bookingUid: string; attendeeId: number } } & {
          header: { 'cal-api-version': string; Authorization: string }
        }
        output: GetBookingAttendeeOutput_2024_08_13
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { bookingUid: string; attendeeId: number } } & {
          header: { 'cal-api-version': string; Authorization: string }
        }
        output: RemoveAttendeeOutput_2024_08_13
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bookings/:bookingUid/guests': {
      $post: {
        input: { param: { bookingUid: string } } & {
          header: { 'cal-api-version': string; Authorization: string }
        } & { json: AddGuestsInput_2024_08_13 }
        output: AddGuestsOutput_2024_08_13
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/calendars/connections': {
      $get: {
        input: { header: { Authorization: string } }
        output: ListConnectionsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/calendars/connections/:connectionId/events': {
      $get: {
        input: { param: { connectionId: string } } & {
          query: {
            from: string
            to: string
            timeZone?: string | undefined
            calendarId?: string | undefined
          }
        } & { header: { Authorization: string } }
        output: ListUnifiedCalendarEventsOutput
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { connectionId: string } } & {
          query: { calendarId?: string | undefined }
        } & { header: { Authorization: string } } & { json: CreateUnifiedCalendarEventInput }
        output: GetUnifiedCalendarEventOutput
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/v2/calendars/connections/:connectionId/events/:eventId': {
      $get: {
        input: { param: { connectionId: string; eventId: string } } & {
          query: { calendarId?: string | undefined }
        } & { header: { Authorization: string } }
        output: GetUnifiedCalendarEventOutput
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { connectionId: string; eventId: string } } & {
          query: { calendarId?: string | undefined }
        } & { header: { Authorization: string } } & { json: UpdateUnifiedCalendarEventInput }
        output: GetUnifiedCalendarEventOutput
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { connectionId: string; eventId: string } } & {
          query: { calendarId?: string | undefined }
        } & { header: { Authorization: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v2/calendars/connections/:connectionId/freebusy': {
      $get: {
        input: { param: { connectionId: string } } & {
          query: { from: string; to: string; timeZone?: string | undefined }
        } & { header: { Authorization: string } }
        output: GetBusyTimesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/calendars/:calendar/events/:eventUid': {
      $get: {
        input: { param: { calendar: 'google'; eventUid: string } } & {
          header: { Authorization: string }
        }
        output: GetUnifiedCalendarEventOutput
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { calendar: 'google'; eventUid: string } } & {
          header: { Authorization: string }
        } & { json: UpdateUnifiedCalendarEventInput }
        output: GetUnifiedCalendarEventOutput
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { calendar: 'google' | 'office365' | 'apple'; eventUid: string } } & {
          header: { Authorization: string }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v2/calendars/:calendar/event/:eventUid': {
      $get: {
        input: { param: { calendar: 'google'; eventUid: string } } & {
          header: { Authorization: string }
        }
        output: GetUnifiedCalendarEventOutput
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { calendar: 'google'; eventUid: string } } & {
          header: { Authorization: string }
        } & { json: UpdateUnifiedCalendarEventInput }
        output: GetUnifiedCalendarEventOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/calendars/:calendar/events': {
      $get: {
        input: { param: { calendar: 'google' | 'office365' | 'apple' } } & {
          query: {
            from: string
            to: string
            timeZone?: string | undefined
            calendarId?: string | undefined
          }
        } & { header: { Authorization: string } }
        output: ListUnifiedCalendarEventsOutput
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { calendar: 'google' | 'office365' | 'apple' } } & {
          header: { Authorization: string }
        } & { json: CreateUnifiedCalendarEventInput }
        output: GetUnifiedCalendarEventOutput
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/v2/calendars/:calendar/freebusy': {
      $get: {
        input: { param: { calendar: 'google' | 'office365' | 'apple' } } & {
          query: { from: string; to: string; timeZone?: string | undefined }
        } & { header: { Authorization: string } }
        output: GetBusyTimesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/calendars/ics-feed/save': {
      $post: {
        input: { header: { Authorization: string } } & { json: CreateIcsFeedInputDto }
        output: CreateIcsFeedOutputResponseDto
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/v2/calendars/ics-feed/check': {
      $get: {
        input: { header: { Authorization: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/calendars/busy-times': {
      $get: {
        input: {
          query: {
            loggedInUsersTz?: string | undefined
            timeZone?: string | undefined
            dateFrom?: string | undefined
            dateTo?: string | undefined
            credentialId: number
            externalId: string
          }
        } & { header: { Authorization: string } }
        output: GetBusyTimesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/calendars': {
      $get: {
        input: { header: { Authorization: string } }
        output: ConnectedCalendarsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/calendars/:calendar/connect': {
      $get: {
        input: { param: { calendar: 'office365' | 'google' } } & {
          query: { isDryRun: boolean; redir?: string | undefined }
        } & { header: { Authorization: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/calendars/:calendar/save': {
      $get: {
        input: { param: { calendar: 'office365' | 'google' } } & {
          query: { state: string; code: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v2/calendars/:calendar/credentials': {
      $post: {
        input: { param: { calendar: 'apple' } } & { header: { Authorization: string } } & {
          json: CreateCalendarCredentialsInput
        }
        output: {}
        outputFormat: string
        status: 201
      }
    }
  } & {
    '/v2/calendars/:calendar/check': {
      $get: {
        input: { param: { calendar: 'apple' | 'google' | 'office365' } } & {
          header: { Authorization: string }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/calendars/:calendar/disconnect': {
      $post: {
        input: { param: { calendar: 'apple' | 'google' | 'office365' } } & {
          header: { Authorization: string }
        } & { json: DeleteCalendarCredentialsInputBodyDto }
        output: DeletedCalendarCredentialsOutputResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/conferencing/:app/connect': {
      $post: {
        input: { param: { app: 'google-meet' } } & { header: { Authorization: string } }
        output: ConferencingAppOutputResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/conferencing/:app/oauth/auth-url': {
      $get: {
        input: { param: { app: 'zoom' | 'msteams' } } & {
          query: { returnTo: string; onErrorReturnTo: string }
        } & { header: { Authorization: string } }
        output: GetConferencingAppsOauthUrlResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/conferencing/:app/oauth/callback': {
      $get: {
        input: { param: { app: 'zoom' | 'msteams' } } & { query: { state: string; code: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v2/conferencing': {
      $get: {
        input: { header: { Authorization: string } }
        output: ConferencingAppsOutputResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/conferencing/:app/default': {
      $post: {
        input: { param: { app: 'google-meet' | 'zoom' | 'msteams' | 'daily-video' } } & {
          header: { Authorization: string }
        }
        output: SetDefaultConferencingAppOutputResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/conferencing/default': {
      $get: {
        input: { header: { Authorization: string } }
        output: GetDefaultConferencingAppOutputResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/conferencing/:app/disconnect': {
      $delete: {
        input: { param: { app: 'google-meet' | 'zoom' | 'msteams' } } & {
          header: { Authorization: string }
        }
        output: DisconnectConferencingAppOutputResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/oauth-clients/:clientId/users': {
      $get: {
        input: { param: { clientId: string } } & {
          query: {
            limit?: number | undefined
            offset?: number | undefined
            emails?: string[] | undefined
          }
        } & { header: { 'x-cal-secret-key': string } }
        output: GetManagedUsersOutput
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { clientId: string } } & { header: { 'x-cal-secret-key': string } } & {
          json: CreateManagedUserInput
        }
        output: CreateManagedUserOutput
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/v2/oauth-clients/:clientId/users/:userId': {
      $get: {
        input: { param: { clientId: string; userId: number } } & {
          header: { 'x-cal-secret-key': string }
        }
        output: GetManagedUserOutput
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { clientId: string; userId: number } } & {
          header: { 'x-cal-secret-key': string }
        } & { json: UpdateManagedUserInput }
        output: GetManagedUserOutput
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { clientId: string; userId: number } } & {
          header: { 'x-cal-secret-key': string }
        }
        output: GetManagedUserOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/oauth-clients/:clientId/users/:userId/force-refresh': {
      $post: {
        input: { param: { userId: number; clientId: string } } & {
          header: { 'x-cal-secret-key': string }
        }
        output: KeysResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/oauth/:clientId/refresh': {
      $post: {
        input: { param: { clientId: string } } & { header: { 'x-cal-secret-key': string } } & {
          json: RefreshTokenInput
        }
        output: KeysResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/oauth-clients/:clientId/webhooks': {
      $post: {
        input: { param: { clientId: string } } & { header: { 'x-cal-secret-key': string } } & {
          json: CreateWebhookInputDto
        }
        output: OAuthClientWebhookOutputResponseDto
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { clientId: string } } & {
          query: { take?: number | undefined; skip?: number | undefined }
        } & { header: { 'x-cal-secret-key': string } }
        output: OAuthClientWebhooksOutputResponseDto
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { clientId: string } } & { header: { 'x-cal-secret-key': string } }
        output: DeleteManyWebhooksOutputResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/oauth-clients/:clientId/webhooks/:webhookId': {
      $patch: {
        input: { param: { webhookId: string; clientId: string } } & {
          header: { 'x-cal-secret-key': string }
        } & { json: UpdateWebhookInputDto }
        output: OAuthClientWebhookOutputResponseDto
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { webhookId: string; clientId: string } } & {
          header: { 'x-cal-secret-key': string }
        }
        output: OAuthClientWebhookOutputResponseDto
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { webhookId: string; clientId: string } } & {
          header: { 'x-cal-secret-key': string }
        }
        output: OAuthClientWebhookOutputResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/oauth-clients': {
      $post: {
        input: { header: { Authorization: string } } & { json: CreateOAuthClientInput }
        output: CreateOAuthClientResponseDto
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { header: { Authorization: string } }
        output: GetOAuthClientsResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/oauth-clients/:clientId': {
      $get: {
        input: { param: { clientId: string } } & { header: { Authorization: string } }
        output: GetOAuthClientResponseDto
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { clientId: string } } & { header: { Authorization: string } } & {
          json: UpdateOAuthClientInput
        }
        output: GetOAuthClientResponseDto
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { clientId: string } } & { header: { Authorization: string } }
        output: GetOAuthClientResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/destination-calendars': {
      $put: {
        input: { header: { Authorization: string } } & { json: DestinationCalendarsInputBodyDto }
        output: DestinationCalendarsOutputResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/event-types': {
      $post: {
        input: { header: { 'cal-api-version': string; Authorization: string } } & {
          json: CreateEventTypeInput_2024_06_14
        }
        output: CreateEventTypeOutput_2024_06_14
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: {
          query: {
            username?: string | undefined
            eventSlug?: string | undefined
            usernames?: string | undefined
            orgSlug?: string | undefined
            orgId?: number | undefined
            sortCreatedAt?: 'asc' | 'desc' | undefined
          }
        } & {
          header: {
            'cal-api-version': string
            Authorization?: string | undefined
            'x-cal-secret-key'?: string | undefined
            'x-cal-client-id'?: string | undefined
          }
        }
        output: GetEventTypesOutput_2024_06_14
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/event-types/:eventTypeId': {
      $get: {
        input: { param: { eventTypeId: string } } & {
          header: { 'cal-api-version': string; Authorization: string }
        }
        output: GetEventTypeOutput_2024_06_14
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { eventTypeId: number } } & {
          header: { 'cal-api-version': string; Authorization: string }
        } & { json: UpdateEventTypeInput_2024_06_14 }
        output: UpdateEventTypeOutput_2024_06_14
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { eventTypeId: number } } & {
          header: { 'cal-api-version': string; Authorization: string }
        }
        output: DeleteEventTypeOutput_2024_06_14
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/event-types/:eventTypeId/webhooks': {
      $post: {
        input: { param: { eventTypeId: number } } & { header: { Authorization: string } } & {
          json: CreateWebhookInputDto
        }
        output: EventTypeWebhookOutputResponseDto
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { eventTypeId: number } } & {
          query: { take?: number | undefined; skip?: number | undefined }
        } & { header: { Authorization: string } }
        output: EventTypeWebhooksOutputResponseDto
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { eventTypeId: number } } & { header: { Authorization: string } }
        output: DeleteManyWebhooksOutputResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/event-types/:eventTypeId/webhooks/:webhookId': {
      $patch: {
        input: { param: { webhookId: string; eventTypeId: number } } & {
          header: { Authorization: string }
        } & { json: UpdateWebhookInputDto }
        output: EventTypeWebhookOutputResponseDto
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { webhookId: string; eventTypeId: number } } & {
          header: { Authorization: string }
        }
        output: EventTypeWebhookOutputResponseDto
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { webhookId: string; eventTypeId: number } } & {
          header: { Authorization: string }
        }
        output: EventTypeWebhookOutputResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/event-types/:eventTypeId/private-links': {
      $post: {
        input: { param: { eventTypeId: number } } & { header: { Authorization: string } } & {
          json: CreatePrivateLinkInput
        }
        output: CreatePrivateLinkOutput
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { eventTypeId: number } } & { header: { Authorization: string } }
        output: GetPrivateLinksOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/event-types/:eventTypeId/private-links/:linkId': {
      $patch: {
        input: { param: { eventTypeId: number; linkId: string } } & {
          header: { Authorization: string }
        } & { json: UpdatePrivateLinkBody }
        output: UpdatePrivateLinkOutput
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { eventTypeId: number; linkId: string } } & {
          header: { Authorization: string }
        }
        output: DeletePrivateLinkOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/me': {
      $get: {
        input: { header: { Authorization: string } }
        output: GetMeOutput
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { header: { Authorization: string } } & { json: UpdateManagedUserInput }
        output: UpdateMeOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/auth/oauth2/clients/:clientId': {
      $get: {
        input: { param: { clientId: string } }
        output: OAuth2ClientResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/auth/oauth2/token': {
      $post: {
        input: {
          json:
            | OAuth2ExchangeConfidentialInput
            | OAuth2ExchangePublicInput
            | OAuth2RefreshConfidentialInput
            | OAuth2RefreshPublicInput
        }
        output: OAuth2TokensDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/schedules': {
      $post: {
        input: { header: { Authorization: string; 'cal-api-version': string } } & {
          json: CreateScheduleInput_2024_06_11
        }
        output: CreateScheduleOutput_2024_06_11
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { header: { Authorization: string; 'cal-api-version': string } }
        output: GetSchedulesOutput_2024_06_11
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/schedules/default': {
      $get: {
        input: { header: { Authorization: string; 'cal-api-version': string } }
        output: GetDefaultScheduleOutput_2024_06_11
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/schedules/:scheduleId': {
      $get: {
        input: { param: { scheduleId: number } } & {
          header: { Authorization: string; 'cal-api-version': string }
        }
        output: GetScheduleOutput_2024_06_11
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { scheduleId: string } } & {
          header: { Authorization: string; 'cal-api-version': string }
        } & { json: UpdateScheduleInput_2024_06_11 }
        output: UpdateScheduleOutput_2024_06_11
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { scheduleId: number } } & {
          header: { Authorization: string; 'cal-api-version': string }
        }
        output: DeleteScheduleOutput_2024_06_11
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/selected-calendars': {
      $post: {
        input: { header: { Authorization: string } } & { json: SelectedCalendarsInputDto }
        output: SelectedCalendarOutputResponseDto
        outputFormat: 'json'
        status: 201
      }
      $delete: {
        input: {
          query: {
            integration: string
            externalId: string
            credentialId: string
            delegationCredentialId?: string | undefined
          }
        } & { header: { Authorization: string } }
        output: SelectedCalendarOutputResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/slots': {
      $get: {
        input: {
          query: {
            bookingUidToReschedule?: string | undefined
            start: string
            end: string
            organizationSlug?: string | undefined
            teamSlug?: string | undefined
            username?: string | undefined
            eventTypeSlug?: string | undefined
            eventTypeId?: number | undefined
            usernames?: string | undefined
            format?: string | undefined
            duration?: number | undefined
            timeZone?: string | undefined
          }
        } & { header: { 'cal-api-version': string } }
        output:
          | { [x: string]: string[] }
          | { [x: string]: { start?: string | undefined; end?: string | undefined }[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/slots/reservations': {
      $post: {
        input: {
          header: {
            'cal-api-version': string
            Authorization?: string | undefined
            'x-cal-client-id'?: string | undefined
          }
        } & { json: ReserveSlotInput_2024_09_04 }
        output: ReserveSlotOutputResponse_2024_09_04
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/v2/slots/reservations/:uid': {
      $get: {
        input: { param: { uid: string } } & { header: { 'cal-api-version': string } }
        output: GetReservedSlotOutput_2024_09_04
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { uid: string } } & { header: { 'cal-api-version': string } } & {
          json: ReserveSlotInput_2024_09_04
        }
        output: ReserveSlotOutputResponse_2024_09_04
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { uid: string } } & { header: { 'cal-api-version': string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/stripe/connect': {
      $get: {
        input: { header: { Authorization: string } }
        output: StripConnectOutputResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/stripe/save': {
      $get: {
        input: { query: { state: string; code: string } }
        output: StripCredentialsSaveOutputResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/stripe/check': {
      $get: {
        input: { header: { Authorization: string } }
        output: StripCredentialsCheckOutputResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/verified-resources/emails/verification-code/request': {
      $post: {
        input: { header: { Authorization: string } } & { json: RequestEmailVerificationInput }
        output: RequestEmailVerificationOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/verified-resources/phones/verification-code/request': {
      $post: {
        input: { header: { Authorization: string } } & { json: RequestPhoneVerificationInput }
        output: RequestPhoneVerificationOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/verified-resources/emails/verification-code/verify': {
      $post: {
        input: { header: { Authorization: string } } & { json: VerifyEmailInput }
        output: UserVerifiedEmailOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/verified-resources/phones/verification-code/verify': {
      $post: {
        input: { header: { Authorization: string } } & { json: VerifyPhoneInput }
        output: UserVerifiedPhoneOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/verified-resources/emails': {
      $get: {
        input: { query: { take?: number | undefined; skip?: number | undefined } } & {
          header: { Authorization: string }
        }
        output: UserVerifiedEmailsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/verified-resources/phones': {
      $get: {
        input: { query: { take?: number | undefined; skip?: number | undefined } } & {
          header: { Authorization: string }
        }
        output: UserVerifiedPhonesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/verified-resources/emails/:id': {
      $get: {
        input: { param: { id: number } } & { header: { Authorization: string } }
        output: UserVerifiedEmailOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/verified-resources/phones/:id': {
      $get: {
        input: { param: { id: number } } & { header: { Authorization: string } }
        output: UserVerifiedPhoneOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/webhooks': {
      $post: {
        input: { header: { Authorization: string } } & { json: CreateWebhookInputDto }
        output: UserWebhookOutputResponseDto
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { query: { take?: number | undefined; skip?: number | undefined } } & {
          header: { Authorization: string }
        }
        output: UserWebhooksOutputResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/webhooks/:webhookId': {
      $patch: {
        input: { param: { webhookId: string } } & { header: { Authorization: string } } & {
          json: UpdateWebhookInputDto
        }
        output: UserWebhookOutputResponseDto
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { webhookId: string } } & { header: { Authorization: string } }
        output: UserWebhookOutputResponseDto
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { webhookId: string } } & { header: { Authorization: string } }
        output: UserWebhookOutputResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
