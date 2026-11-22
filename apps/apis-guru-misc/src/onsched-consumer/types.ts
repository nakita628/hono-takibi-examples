type AppointmentAuditViewModel = {
  appointmentId?: (string | null) | undefined
  id?: (string | null) | undefined
  modificationType?: (string | null) | undefined
  modifiedBy?: (string | null) | undefined
  modifiedOn?: (string | null) | undefined
  notesAfter?: (string | null) | undefined
  notesBefore?: (string | null) | undefined
  statusAfter?: (string | null) | undefined
  statusBefore?: (string | null) | undefined
}
type CustomFieldViewModel = {
  name?: (string | null) | undefined
  value?: (string | null) | undefined
}
type AppointmentCustomerViewModel = {
  appointmentId?: (string | null) | undefined
  customerId?: (string | null) | undefined
}
type AppointmentResourceViewModel = {
  appointmentId?: (string | null) | undefined
  resourceEmail?: (string | null) | undefined
  resourceGroupId?: (string | null) | undefined
  resourceId?: (string | null) | undefined
  resourceImageUrl?: (string | null) | undefined
  resourceName?: (string | null) | undefined
}
type AppointmentViewModel = {
  auditTrail?: (AppointmentAuditViewModel[] | null) | undefined
  bookedBy?: (string | null) | undefined
  businessName?: (string | null) | undefined
  calendarId?: (string | null) | undefined
  confirmationNumber?: (string | null) | undefined
  confirmed?: boolean | undefined
  createDate?: (string | null) | undefined
  customFields?: ({ [x: string]: CustomFieldViewModel } | null) | undefined
  customerId?: (string | null) | undefined
  customerMessage?: (string | null) | undefined
  customers?: (AppointmentCustomerViewModel[] | null) | undefined
  date?: (string | null) | undefined
  dateInternational?: (string | null) | undefined
  downloadIcsUrl?: (string | null) | undefined
  duration?: number | undefined
  email?: (string | null) | undefined
  emailConfirmationSent?: (string | null) | undefined
  emailReminderSent?: (string | null) | undefined
  endDateTime?: (string | null) | undefined
  firstname?: (string | null) | undefined
  groupSize?: (number | null) | undefined
  id?: (string | null) | undefined
  ipAddress?: (string | null) | undefined
  lastModifiedBy?: (string | null) | undefined
  lastModifiedOn?: (string | null) | undefined
  lastname?: (string | null) | undefined
  latitude?: (string | null) | undefined
  location?: (string | null) | undefined
  locationId?: (string | null) | undefined
  longitude?: (string | null) | undefined
  name?: (string | null) | undefined
  notes?: (string | null) | undefined
  object?: (string | null) | undefined
  onlineBooking?: (boolean | null) | undefined
  paymentStatus?: number | undefined
  phone?: (string | null) | undefined
  phoneExt?: (string | null) | undefined
  phoneType?: (string | null) | undefined
  rescheduledId?: (string | null) | undefined
  resourceEmail?: (string | null) | undefined
  resourceGroupId?: (string | null) | undefined
  resourceGroupName?: (string | null) | undefined
  resourceId?: (string | null) | undefined
  resourceImageUrl?: (string | null) | undefined
  resourceName?: (string | null) | undefined
  resources?: (AppointmentResourceViewModel[] | null) | undefined
  serviceAllocationId?: (string | null) | undefined
  serviceId?: (string | null) | undefined
  serviceImageUrl?: (string | null) | undefined
  serviceName?: (string | null) | undefined
  smsConfirmationSent?: (string | null) | undefined
  smsReminderSent?: (string | null) | undefined
  startDateTime?: (string | null) | undefined
  status?: (string | null) | undefined
  stripeChargeId?: (string | null) | undefined
  stripeRefundId?: (string | null) | undefined
  time?: number | undefined
  timezone?: (number | null) | undefined
  timezoneIana?: (string | null) | undefined
  timezoneId?: (string | null) | undefined
}
type AppointmentListViewModel = {
  count?: number | undefined
  data?: (AppointmentViewModel[] | null) | undefined
  hasMore?: boolean | undefined
  object?: (string | null) | undefined
  total?: number | undefined
  url?: (string | null) | undefined
}
type BookingFieldItem = { name?: (string | null) | undefined; value?: (string | null) | undefined }
type CustomFieldInputModel = {
  field1?: (string | null) | undefined
  field10?: (string | null) | undefined
  field2?: (string | null) | undefined
  field3?: (string | null) | undefined
  field4?: (string | null) | undefined
  field5?: (string | null) | undefined
  field6?: (string | null) | undefined
  field7?: (string | null) | undefined
  field8?: (string | null) | undefined
  field9?: (string | null) | undefined
}
type AppointmentInitialModel = {
  appointmentBookingFields?: (BookingFieldItem[] | null) | undefined
  bookedBy?: (string | null) | undefined
  bookingWindowId?: (string | null) | undefined
  calendarId?: (string | null) | undefined
  customFields?: CustomFieldInputModel | undefined
  customerBookingFields?: (BookingFieldItem[] | null) | undefined
  customerId?: (string | null) | undefined
  customerMessage?: (string | null) | undefined
  email?: (string | null) | undefined
  endDateTime?: string | undefined
  groupSize?: (number | null) | undefined
  location?: (string | null) | undefined
  locationId?: (string | null) | undefined
  name?: (string | null) | undefined
  notes?: (string | null) | undefined
  phone?: (string | null) | undefined
  phoneType?: (string | null) | undefined
  resourceGroupId?: (string | null) | undefined
  resourceId?: (string | null) | undefined
  resourceIds?: (string | null) | undefined
  serviceAllocationId?: (string | null) | undefined
  serviceId?: (string | null) | undefined
  startDateTime?: string | undefined
  timezoneName?: (string | null) | undefined
  travelAppointmentId?: (string | null) | undefined
  travelTimeMins?: number | undefined
}
type BookingFieldListItemViewModel = {
  id?: (string | null) | undefined
  leadAnswerScore?: number | undefined
  leadRoutingEntityId?: number | undefined
  leadRoutingEntityType?: (string | null) | undefined
  name?: (string | null) | undefined
  object?: (string | null) | undefined
  value?: (string | null) | undefined
}
type BookingFieldViewModel = {
  businessId?: (string | null) | undefined
  companyId?: (string | null) | undefined
  fieldLabel?: (string | null) | undefined
  fieldLength?: number | undefined
  fieldListItems?: (BookingFieldListItemViewModel[] | null) | undefined
  fieldName?: (string | null) | undefined
  fieldRequired?: boolean | undefined
  fieldType?: (string | null) | undefined
  id?: (string | null) | undefined
  leadQuestion?: boolean | undefined
  leadQuestionWeight?: number | undefined
  object?: (string | null) | undefined
  sortKey?: number | undefined
}
type AppoinmentBookingFormsViewModel = {
  bookingConfirmationPage?: (string | null) | undefined
  bookingForm?: (string | null) | undefined
}
type AppointmentInitialViewModel = {
  appointmentBookingFields?: (BookingFieldViewModel[] | null) | undefined
  auditTrail?: (AppointmentAuditViewModel[] | null) | undefined
  bookedBy?: (string | null) | undefined
  bookingForms?: AppoinmentBookingFormsViewModel | undefined
  businessName?: (string | null) | undefined
  calendarId?: (string | null) | undefined
  confirmationNumber?: (string | null) | undefined
  confirmed?: boolean | undefined
  createDate?: (string | null) | undefined
  customFields?: ({ [x: string]: CustomFieldViewModel } | null) | undefined
  customerBookingFields?: (BookingFieldViewModel[] | null) | undefined
  customerId?: (string | null) | undefined
  customerMessage?: (string | null) | undefined
  customers?: (AppointmentCustomerViewModel[] | null) | undefined
  date?: (string | null) | undefined
  dateInternational?: (string | null) | undefined
  downloadIcsUrl?: (string | null) | undefined
  duration?: number | undefined
  email?: (string | null) | undefined
  emailConfirmationSent?: (string | null) | undefined
  emailReminderSent?: (string | null) | undefined
  endDateTime?: (string | null) | undefined
  firstname?: (string | null) | undefined
  groupSize?: (number | null) | undefined
  id?: (string | null) | undefined
  ipAddress?: (string | null) | undefined
  lastModifiedBy?: (string | null) | undefined
  lastModifiedOn?: (string | null) | undefined
  lastname?: (string | null) | undefined
  latitude?: (string | null) | undefined
  location?: (string | null) | undefined
  locationId?: (string | null) | undefined
  longitude?: (string | null) | undefined
  name?: (string | null) | undefined
  notes?: (string | null) | undefined
  object?: (string | null) | undefined
  onlineBooking?: (boolean | null) | undefined
  paymentStatus?: number | undefined
  phone?: (string | null) | undefined
  phoneExt?: (string | null) | undefined
  phoneType?: (string | null) | undefined
  rescheduledId?: (string | null) | undefined
  resourceEmail?: (string | null) | undefined
  resourceGroupId?: (string | null) | undefined
  resourceGroupName?: (string | null) | undefined
  resourceId?: (string | null) | undefined
  resourceImageUrl?: (string | null) | undefined
  resourceName?: (string | null) | undefined
  resources?: (AppointmentResourceViewModel[] | null) | undefined
  serviceAllocationId?: (string | null) | undefined
  serviceId?: (string | null) | undefined
  serviceImageUrl?: (string | null) | undefined
  serviceName?: (string | null) | undefined
  smsConfirmationSent?: (string | null) | undefined
  smsReminderSent?: (string | null) | undefined
  startDateTime?: (string | null) | undefined
  status?: (string | null) | undefined
  stripeChargeId?: (string | null) | undefined
  stripeRefundId?: (string | null) | undefined
  time?: number | undefined
  timezone?: (number | null) | undefined
  timezoneIana?: (string | null) | undefined
  timezoneId?: (string | null) | undefined
}
type BookingFieldListViewModel = {
  bookingFields?: (BookingFieldViewModel[] | null) | undefined
  object?: (string | null) | undefined
  total?: number | undefined
}
type CustomFieldListDefinitionViewModel = {
  id?: (string | null) | undefined
  leadAnswerScore?: number | undefined
  leadRoutingEntityId?: number | undefined
  leadRoutingEntityType?: (string | null) | undefined
  name?: (string | null) | undefined
  object?: (string | null) | undefined
  value?: (string | null) | undefined
}
type CustomFieldDefinitionViewModel = {
  fieldKey?: (string | null) | undefined
  fieldLabel?: (string | null) | undefined
  fieldLength?: number | undefined
  fieldListItems?: (CustomFieldListDefinitionViewModel[] | null) | undefined
  fieldName?: (string | null) | undefined
  fieldPublic?: boolean | undefined
  fieldRequired?: boolean | undefined
  fieldType?: (string | null) | undefined
  id?: (string | null) | undefined
  leadQuestion?: boolean | undefined
  leadQuestionWeight?: number | undefined
  object?: (string | null) | undefined
  sortKey?: number | undefined
}
type CustomFieldDefinitionListViewModel = {
  customFields?: (CustomFieldDefinitionViewModel[] | null) | undefined
  object?: (string | null) | undefined
  total?: number | undefined
}
type AppointmentBookModel = {
  appointmentBookingFields?: (BookingFieldItem[] | null) | undefined
  customFields?: CustomFieldInputModel | undefined
  customerBookingFields?: (BookingFieldItem[] | null) | undefined
  customerMessage?: (string | null) | undefined
  email?: (string | null) | undefined
  groupSize?: (number | null) | undefined
  name?: (string | null) | undefined
  notes?: (string | null) | undefined
  phone?: (string | null) | undefined
  phoneExt?: (string | null) | undefined
  phoneType?: (string | null) | undefined
}
type AppointmentNoShowModel = {}
type AppointmentRescheduleModel = {
  endDateTime?: string | undefined
  resourceId?: (string | null) | undefined
  resourceIds?: (string | null) | undefined
  serviceId?: (string | null) | undefined
  startDateTime?: string | undefined
  travelAppointmentId?: (string | null) | undefined
  travelTimeMins?: number | undefined
}
type AppointmentReserveModel = {
  appointmentBookingFields?: (BookingFieldItem[] | null) | undefined
  customFields?: CustomFieldInputModel | undefined
  customerBookingFields?: (BookingFieldItem[] | null) | undefined
  customerMessage?: (string | null) | undefined
  email?: (string | null) | undefined
  name?: (string | null) | undefined
  notes?: (string | null) | undefined
  phone?: (string | null) | undefined
  phoneExt?: (string | null) | undefined
  phoneType?: (string | null) | undefined
}
type AvailableDayViewModel = {
  available?: boolean | undefined
  bookingCount?: number | undefined
  bookingLimit?: number | undefined
  closed?: boolean | undefined
  date?: (string | null) | undefined
  object?: (string | null) | undefined
  reason?: (string | null) | undefined
  reasonCode?: number | undefined
}
type AvailableTimeViewModel = {
  allowableBookings?: number | undefined
  allowableCapacity?: number | undefined
  availableBookings?: number | undefined
  availableCapacity?: number | undefined
  date?: (string | null) | undefined
  displayTime?: (string | null) | undefined
  duration?: number | undefined
  endDateTime?: (string | null) | undefined
  resourceId?: (string | null) | undefined
  startDateTime?: (string | null) | undefined
  time?: number | undefined
  travelAppointmentId?: (string | null) | undefined
  travelTimeMins?: number | undefined
}
type AvailabilityViewModel = {
  availableDays?: (AvailableDayViewModel[] | null) | undefined
  availableTimes?: (AvailableTimeViewModel[] | null) | undefined
  businessName?: (string | null) | undefined
  calendarId?: (string | null) | undefined
  calendarResourceGroupId?: (string | null) | undefined
  endDate?: (string | null) | undefined
  firstAvailableDate?: (string | null) | undefined
  locationId?: (string | null) | undefined
  object?: (string | null) | undefined
  resourceDescription?: (string | null) | undefined
  resourceId?: (string | null) | undefined
  resourceIds?: (string | null) | undefined
  resourceName?: (string | null) | undefined
  serviceDescription?: (string | null) | undefined
  serviceDuration?: number | undefined
  serviceId?: (string | null) | undefined
  serviceName?: (string | null) | undefined
  startDate?: (string | null) | undefined
  timezoneName?: (string | null) | undefined
  tzRequested?: (number | null) | undefined
  url?: (string | null) | undefined
}
type AvailabilityDayViewModel = {
  availableDays?: (AvailableDayViewModel[] | null) | undefined
  object?: (string | null) | undefined
  resourceDescription?: (string | null) | undefined
  resourceId?: (string | null) | undefined
  resourceName?: (string | null) | undefined
  serviceDescription?: (string | null) | undefined
  serviceId?: (string | null) | undefined
  serviceName?: (string | null) | undefined
  tzRequested?: (number | null) | undefined
  url?: (string | null) | undefined
}
type UnavailableTimeViewModel = {
  calendarId?: (string | null) | undefined
  date?: (string | null) | undefined
  endDateTime?: (string | null) | undefined
  entityId?: number | undefined
  entityType?: (string | null) | undefined
  fromTime?: number | undefined
  locationId?: (string | null) | undefined
  objectName?: (string | null) | undefined
  reason?: (string | null) | undefined
  reasonCode?: (string | null) | undefined
  resourceId?: (string | null) | undefined
  resourceName?: (string | null) | undefined
  serviceId?: (string | null) | undefined
  serviceName?: (string | null) | undefined
  startDateTime?: (string | null) | undefined
  toTime?: number | undefined
  tzOffset?: number | undefined
}
type UnavailableTimeListViewModel = {
  object?: (string | null) | undefined
  unavailableTimes?: (UnavailableTimeViewModel[] | null) | undefined
  url?: (string | null) | undefined
}
type AddressViewModel = {
  addressLine1?: (string | null) | undefined
  addressLine2?: (string | null) | undefined
  city?: (string | null) | undefined
  country?: (string | null) | undefined
  postalCode?: (string | null) | undefined
  state?: (string | null) | undefined
}
type ContactViewModel = {
  businessPhone?: (string | null) | undefined
  businessPhoneExt?: (string | null) | undefined
  conferenceInfo?: (string | null) | undefined
  homePhone?: (string | null) | undefined
  mobilePhone?: (string | null) | undefined
  phoneType?: (string | null) | undefined
  skypeUsername?: (string | null) | undefined
}
type CustomerViewModel = {
  address?: AddressViewModel | undefined
  birthdate?: (string | null) | undefined
  businessName?: (string | null) | undefined
  companyName?: (string | null) | undefined
  contact?: ContactViewModel | undefined
  createdBy?: (string | null) | undefined
  createdOn?: (string | null) | undefined
  customFields?: ({ [x: string]: CustomFieldViewModel } | null) | undefined
  deletedStatus?: boolean | undefined
  deletedTime?: (string | null) | undefined
  disabled?: (boolean | null) | undefined
  email?: (string | null) | undefined
  emailInfo?: (boolean | null) | undefined
  emailPromotion?: (boolean | null) | undefined
  firstname?: (string | null) | undefined
  gender?: (string | null) | undefined
  groupId?: (string | null) | undefined
  id?: (string | null) | undefined
  inviteEmailSent?: (string | null) | undefined
  lastVisitDate?: (string | null) | undefined
  lastname?: (string | null) | undefined
  latitude?: (string | null) | undefined
  locationId?: (string | null) | undefined
  longitude?: (string | null) | undefined
  modifiedBy?: (string | null) | undefined
  modifiedOn?: (string | null) | undefined
  name?: (string | null) | undefined
  notificationType?: (string | null) | undefined
  object?: (string | null) | undefined
  registeredBy?: (string | null) | undefined
  registrationDate?: (string | null) | undefined
  resourceId?: (string | null) | undefined
  stripeCustomerId?: (string | null) | undefined
  subscriptionId?: (string | null) | undefined
  verificationDate?: (string | null) | undefined
  verifiedBy?: (string | null) | undefined
  welcomeEmailSent?: (string | null) | undefined
}
type CustomerListViewModel = {
  count?: number | undefined
  data?: (CustomerViewModel[] | null) | undefined
  hasMore?: boolean | undefined
  object?: (string | null) | undefined
  total?: number | undefined
  url?: (string | null) | undefined
}
type AddressInputModel = {
  addressLine1?: (string | null) | undefined
  addressLine2?: (string | null) | undefined
  city?: (string | null) | undefined
  country?: (string | null) | undefined
  postalCode?: (string | null) | undefined
  state?: (string | null) | undefined
}
type ContactInputModel = {
  businessPhone?: (string | null) | undefined
  businessPhoneExt?: (string | null) | undefined
  conferenceInfo?: (string | null) | undefined
  homePhone?: (string | null) | undefined
  mobilePhone?: (string | null) | undefined
  preferredPhoneType?: (string | null) | undefined
  skypeUsername?: (string | null) | undefined
}
type CustomerInputModel = {
  address?: AddressInputModel | undefined
  contact?: ContactInputModel | undefined
  customFields?: CustomFieldInputModel | undefined
  email?: (string | null) | undefined
  firstname?: (string | null) | undefined
  lastname?: (string | null) | undefined
  locationId?: (string | null) | undefined
  name?: (string | null) | undefined
  notificationType?: (string | null) | undefined
  sendLeadNotification?: boolean | undefined
  stripeCustomerId?: (string | null) | undefined
  type?: (number | null) | undefined
}
type CountryViewModel = {
  code?: (string | null) | undefined
  name?: (string | null) | undefined
  object?: (string | null) | undefined
}
type StateViewModel = {
  code?: (string | null) | undefined
  country?: (string | null) | undefined
  countryName?: (string | null) | undefined
  name?: (string | null) | undefined
  object?: (string | null) | undefined
}
type AddressUpdateModel = {
  addressLine1?: (string | null) | undefined
  addressLine2?: (string | null) | undefined
  city?: (string | null) | undefined
  country?: (string | null) | undefined
  postalCode?: (string | null) | undefined
  state?: (string | null) | undefined
}
type ContactUpdateModel = {
  businessPhone?: (string | null) | undefined
  businessPhoneExt?: (string | null) | undefined
  conferenceInfo?: (string | null) | undefined
  homePhone?: (string | null) | undefined
  mobilePhone?: (string | null) | undefined
  preferredPhoneType?: (string | null) | undefined
  skypeUsername?: (string | null) | undefined
}
type CustomFieldUpdateModel = {
  field1?: (string | null) | undefined
  field10?: (string | null) | undefined
  field2?: (string | null) | undefined
  field3?: (string | null) | undefined
  field4?: (string | null) | undefined
  field5?: (string | null) | undefined
  field6?: (string | null) | undefined
  field7?: (string | null) | undefined
  field8?: (string | null) | undefined
  field9?: (string | null) | undefined
}
type CustomerUpdateModel = {
  address?: AddressUpdateModel | undefined
  contact?: ContactUpdateModel | undefined
  customFields?: CustomFieldUpdateModel | undefined
  email?: (string | null) | undefined
  firstname?: (string | null) | undefined
  lastname?: (string | null) | undefined
  locationId?: (string | null) | undefined
  name?: (string | null) | undefined
  notificationType?: (string | null) | undefined
  stripeCustomerId?: (string | null) | undefined
  type?: (number | null) | undefined
}
type AppointmentReminderViewModel = {
  emailFirstReminder?: number | undefined
  emailFirstReminderInterval?: number | undefined
  emailSecondReminder?: number | undefined
  emailSecondReminderInterval?: number | undefined
  smsFirstReminder?: number | undefined
  smsFirstReminderInterval?: number | undefined
  smsSecondReminder?: number | undefined
  smsSecondReminderInterval?: number | undefined
}
type BusinessHolidayViewModel = {
  businessClosed?: boolean | undefined
  holidayName?: (string | null) | undefined
  id?: (string | null) | undefined
  publicHolidayId?: number | undefined
}
type BusinessHourViewModel = {
  endTime?: number | undefined
  is24Hours?: boolean | undefined
  isOpen?: boolean | undefined
  startTime?: number | undefined
}
type BusinessHoursViewModel = {
  fri?: BusinessHourViewModel | undefined
  mon?: BusinessHourViewModel | undefined
  sat?: BusinessHourViewModel | undefined
  sun?: BusinessHourViewModel | undefined
  thu?: BusinessHourViewModel | undefined
  tue?: BusinessHourViewModel | undefined
  wed?: BusinessHourViewModel | undefined
}
type BusinessDefaultsViewModel = {
  autoUpdateCustomer?: (boolean | null) | undefined
  businessNotification?: (boolean | null) | undefined
  customerCity?: (boolean | null) | undefined
  customerState?: (boolean | null) | undefined
  emailInfo?: (boolean | null) | undefined
  enableUtcTimezone?: (boolean | null) | undefined
  object?: (string | null) | undefined
}
type BusinessServiceViewModel = {
  id?: number | undefined
  object?: (string | null) | undefined
  serviceId?: number | undefined
  serviceName?: (string | null) | undefined
}
type OnlineSettingsViewModel = {
  availabilityForm?: number | undefined
  bookAheadUnit?: number | undefined
  bookAheadValue?: number | undefined
  bookInAdvance?: number | undefined
  bookWithAccount?: boolean | undefined
  bookingConfirmationMessage?: (string | null) | undefined
  bookingMessage?: (string | null) | undefined
  bookingPolicy?: (string | null) | undefined
  bookingTimerMins?: number | undefined
  businessId?: (string | null) | undefined
  companyId?: (string | null) | undefined
  customerBookingsPerDay?: number | undefined
  customerVerification?: boolean | undefined
  defaultService?: (boolean | null) | undefined
  defaultToCustomerTimezone?: boolean | undefined
  disableAuthorization?: (boolean | null) | undefined
  enableWorldTimezones?: (boolean | null) | undefined
  enabled?: boolean | undefined
  familyMembersEnabled?: boolean | undefined
  firstAvailable?: (boolean | null) | undefined
  formFlow?: number | undefined
  hideBreadCrumbNav?: boolean | undefined
  hideContinueBooking?: (boolean | null) | undefined
  hideLocationNav?: (boolean | null) | undefined
  hideNavBar?: (boolean | null) | undefined
  hideServiceGroupsNav?: (boolean | null) | undefined
  hideServicesNav?: (boolean | null) | undefined
  id?: number | undefined
  lateCancelAction?: number | undefined
  lateCancelHours?: number | undefined
  lateRescheduleAction?: number | undefined
  lateRescheduleHours?: number | undefined
  liveMode?: (boolean | null) | undefined
  locationId?: (string | null) | undefined
  object?: (string | null) | undefined
  resourceAnyLabel?: (string | null) | undefined
  resourceLabel?: (string | null) | undefined
  resourceSelection?: boolean | undefined
  returnToAvailability?: boolean | undefined
  returnToService?: boolean | undefined
  serviceLabel?: (string | null) | undefined
  showBusinessLogo?: boolean | undefined
  showOnSchedLogo?: boolean | undefined
  showServiceGroups?: boolean | undefined
}
type TravelViewModel = {
  distance?: (string | null) | undefined
  proximity?: (string | null) | undefined
  startAddress?: (string | null) | undefined
  startLat?: (string | null) | undefined
  startLon?: (string | null) | undefined
  units?: (string | null) | undefined
}
type LocationViewModel = {
  address?: AddressViewModel | undefined
  adminEmail?: (string | null) | undefined
  adminName?: (string | null) | undefined
  appointmentReminders?: AppointmentReminderViewModel | undefined
  businessHolidays?: (BusinessHolidayViewModel[] | null) | undefined
  businessHours?: BusinessHoursViewModel | undefined
  companyId?: (string | null) | undefined
  companyName?: (string | null) | undefined
  defaults?: BusinessDefaultsViewModel | undefined
  email?: (string | null) | undefined
  fax?: (string | null) | undefined
  friendlyId?: (string | null) | undefined
  id?: (string | null) | undefined
  imageUrl?: (string | null) | undefined
  latitude?: number | undefined
  logo?: (string | null) | undefined
  longitude?: number | undefined
  name?: (string | null) | undefined
  object?: (string | null) | undefined
  phone?: (string | null) | undefined
  primaryBusiness?: boolean | undefined
  primaryCalendarId?: (string | null) | undefined
  regionId?: (string | null) | undefined
  services?: (BusinessServiceViewModel[] | null) | undefined
  settings?: OnlineSettingsViewModel | undefined
  timezoneIana?: (string | null) | undefined
  timezoneId?: (string | null) | undefined
  timezoneOffset?: (number | null) | undefined
  travel?: TravelViewModel | undefined
  website?: (string | null) | undefined
}
type LocationListViewModel = {
  count?: number | undefined
  data?: (LocationViewModel[] | null) | undefined
  hasMore?: boolean | undefined
  object?: (string | null) | undefined
  total?: number | undefined
  url?: (string | null) | undefined
}
type ResourceGroupViewModel = {
  bookingNotification?: number | undefined
  deletedStatus?: boolean | undefined
  deletedTime?: (string | null) | undefined
  description?: (string | null) | undefined
  email?: (string | null) | undefined
  id?: (string | null) | undefined
  locationId?: (string | null) | undefined
  name?: (string | null) | undefined
  object?: (string | null) | undefined
}
type ResourceGroupListViewModel = {
  count?: number | undefined
  data?: (ResourceGroupViewModel[] | null) | undefined
  hasMore?: boolean | undefined
  object?: (string | null) | undefined
  total?: number | undefined
  url?: (string | null) | undefined
}
type ResourceHourViewModel = { endTime?: number | undefined; startTime?: number | undefined }
type ResourceHoursViewModel = {
  fri?: ResourceHourViewModel | undefined
  mon?: ResourceHourViewModel | undefined
  sat?: ResourceHourViewModel | undefined
  sun?: ResourceHourViewModel | undefined
  thu?: ResourceHourViewModel | undefined
  tue?: ResourceHourViewModel | undefined
  wed?: ResourceHourViewModel | undefined
}
type ResourceServiceViewModel = {
  object?: (string | null) | undefined
  resourceId?: number | undefined
  resourceName?: (string | null) | undefined
  serviceId?: number | undefined
  serviceName?: (string | null) | undefined
}
type ResourceViewModel = {
  address?: AddressViewModel | undefined
  availability?: ResourceHoursViewModel | undefined
  bioLink?: (string | null) | undefined
  bookingNotification?: number | undefined
  calendarAvailability?: number | undefined
  contact?: ContactViewModel | undefined
  customFields?: CustomFieldInputModel | undefined
  deletedStatus?: boolean | undefined
  deletedTime?: (string | null) | undefined
  description?: (string | null) | undefined
  effectiveDate?: (string | null) | undefined
  email?: (string | null) | undefined
  gender?: (string | null) | undefined
  googleCalendarId?: (string | null) | undefined
  groupId?: (string | null) | undefined
  hourly?: (number | null) | undefined
  id?: (string | null) | undefined
  ignoreBusinessHours?: boolean | undefined
  imageUrl?: (string | null) | undefined
  locationId?: (string | null) | undefined
  name?: (string | null) | undefined
  notificationType?: number | undefined
  object?: (string | null) | undefined
  outlookCalendarId?: (string | null) | undefined
  recurringAvailability?: (boolean | null) | undefined
  services?: (ResourceServiceViewModel[] | null) | undefined
  skypeName?: (string | null) | undefined
  sortKey?: number | undefined
  timezoneIana?: (string | null) | undefined
  timezoneId?: (string | null) | undefined
  timezoneOffset?: (number | null) | undefined
}
type ResourceListViewModel = {
  count?: number | undefined
  data?: (ResourceViewModel[] | null) | undefined
  hasMore?: boolean | undefined
  object?: (string | null) | undefined
  total?: number | undefined
  url?: (string | null) | undefined
}
type ResourceServiceListViewModel = {
  count?: number | undefined
  data?: (ResourceServiceViewModel[] | null) | undefined
  hasMore?: boolean | undefined
  object?: (string | null) | undefined
  total?: number | undefined
  url?: (string | null) | undefined
}
type ServiceGroupViewModel = {
  companyId?: (string | null) | undefined
  description?: (string | null) | undefined
  id?: (string | null) | undefined
  imageUrl?: (string | null) | undefined
  isDeleted?: boolean | undefined
  locationId?: (string | null) | undefined
  name?: (string | null) | undefined
  object?: (string | null) | undefined
  type?: number | undefined
}
type ServiceGroupListViewModel = {
  count?: number | undefined
  data?: (ServiceGroupViewModel[] | null) | undefined
  hasMore?: boolean | undefined
  object?: (string | null) | undefined
  total?: number | undefined
  url?: (string | null) | undefined
}
type ServicesScope = 'company' | 'location' | 'all'
type ServiceSortOrder = 'natural' | 'name'
type ServiceHourViewModel = { endTime?: number | undefined; startTime?: number | undefined }
type ServiceHoursViewModel = {
  fri?: ServiceHourViewModel | undefined
  mon?: ServiceHourViewModel | undefined
  sat?: ServiceHourViewModel | undefined
  sun?: ServiceHourViewModel | undefined
  thu?: ServiceHourViewModel | undefined
  tue?: ServiceHourViewModel | undefined
  wed?: ServiceHourViewModel | undefined
}
type ServiceViewModel = {
  availability?: ServiceHoursViewModel | undefined
  bookAheadUnit?: number | undefined
  bookAheadValue?: number | undefined
  bookInAdvance?: number | undefined
  bookingInterval?: number | undefined
  bookingLimit?: number | undefined
  calendarId?: (string | null) | undefined
  calendarResourceGroupId?: (string | null) | undefined
  cancellationFeeAmount?: number | undefined
  cancellationFeeTaxable?: boolean | undefined
  companyId?: (string | null) | undefined
  consumerPadding?: boolean | undefined
  customFields?: CustomFieldInputModel | undefined
  dailyBookingLimitCount?: number | undefined
  dailyBookingLimitMinutes?: number | undefined
  defaultService?: boolean | undefined
  description?: (string | null) | undefined
  duration?: number | undefined
  durationInterval?: number | undefined
  durationMax?: number | undefined
  durationMin?: number | undefined
  durationSelect?: boolean | undefined
  feeAmount?: number | undefined
  feeTaxable?: boolean | undefined
  id?: (string | null) | undefined
  imageUrl?: (string | null) | undefined
  locationId?: (string | null) | undefined
  maxBookingLimit?: number | undefined
  maxCapacity?: number | undefined
  maxGroupSize?: number | undefined
  maxResourceBookingLimit?: number | undefined
  mediaPageUrl?: (string | null) | undefined
  name?: (string | null) | undefined
  nonRefundable?: boolean | undefined
  object?: (string | null) | undefined
  padding?: number | undefined
  roundRobin?: number | undefined
  serviceGroupId?: (number | null) | undefined
  serviceGroupName?: (string | null) | undefined
  showOnline?: boolean | undefined
  type?: (string | null) | undefined
}
type ServiceListViewModel = {
  count?: number | undefined
  data?: (ServiceViewModel[] | null) | undefined
  hasMore?: boolean | undefined
  object?: (string | null) | undefined
  total?: number | undefined
  url?: (string | null) | undefined
}
type RepeatViewModel = {
  frequency?: (string | null) | undefined
  interval?: number | undefined
  monthDay?: (string | null) | undefined
  monthType?: (string | null) | undefined
  weekdays?: (string | null) | undefined
}
type PhoneViewModel = {
  businessPhone?: (string | null) | undefined
  businessPhoneExt?: (string | null) | undefined
  homePhone?: (string | null) | undefined
  mobilePhone?: (string | null) | undefined
  phoneType?: (string | null) | undefined
}
type ServiceAllocationViewModel = {
  bookingCount?: number | undefined
  bookingLimit?: number | undefined
  deletedStatus?: boolean | undefined
  deletedTime?: (string | null) | undefined
  endDate?: (string | null) | undefined
  endTime?: number | undefined
  id?: (string | null) | undefined
  locationId?: (string | null) | undefined
  object?: (string | null) | undefined
  reason?: (string | null) | undefined
  repeat?: RepeatViewModel | undefined
  repeats?: boolean | undefined
  resourceAddress?: AddressViewModel | undefined
  resourceDescription?: (string | null) | undefined
  resourceId?: (string | null) | undefined
  resourceImageUrl?: (string | null) | undefined
  resourceName?: (string | null) | undefined
  resourcePhone?: PhoneViewModel | undefined
  serviceDescription?: (string | null) | undefined
  serviceDuration?: number | undefined
  serviceId?: (string | null) | undefined
  serviceImageUrl?: (string | null) | undefined
  serviceName?: (string | null) | undefined
  startDate?: (string | null) | undefined
  startTime?: number | undefined
  timezoneName?: (string | null) | undefined
  timezoneOffset?: (number | null) | undefined
}
type ServiceAllocationListViewModel = {
  count?: number | undefined
  data?: (ServiceAllocationViewModel[] | null) | undefined
  hasMore?: boolean | undefined
  object?: (string | null) | undefined
  total?: number | undefined
  url?: (string | null) | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/consumer/v1/appointments': {
      $get: {
        input: {
          query: {
            locationId?: string | undefined
            email?: string | undefined
            lastname?: string | undefined
            phone?: string | undefined
            serviceId?: string | undefined
            calendarId?: string | undefined
            resourceId?: string | undefined
            customerId?: string | undefined
            serviceAllocationId?: string | undefined
            startDate?: string | undefined
            endDate?: string | undefined
            status?: string | undefined
            bookedBy?: string | undefined
            offset?: number | undefined
            limit?: number | undefined
          }
        }
        output: AppointmentListViewModel
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { query: { completeBooking?: string | undefined } } & {
          json: AppointmentInitialModel
        }
        output: AppointmentInitialViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/consumer/v1/appointments/bookingfields': {
      $get: {
        input: { query: { locationId?: string | undefined } }
        output: BookingFieldListViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/consumer/v1/appointments/customfields': {
      $get: {
        input: { query: { locationId?: string | undefined } }
        output: CustomFieldDefinitionListViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/consumer/v1/appointments/:id': {
      $delete: {
        input: { param: { id: string } }
        output: AppointmentViewModel
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: string } }
        output: AppointmentViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/consumer/v1/appointments/:id/book': {
      $put: {
        input: { param: { id: string } } & { json: AppointmentBookModel }
        output: AppointmentViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/consumer/v1/appointments/:id/cancel': {
      $put: {
        input: { param: { id: string } }
        output: AppointmentViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/consumer/v1/appointments/:id/confirm': {
      $put: {
        input: { param: { id: number } } & { query: { undo?: boolean | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/consumer/v1/appointments/:id/noshow': {
      $put: {
        input: { param: { id: number } } & { json: AppointmentNoShowModel }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/consumer/v1/appointments/:id/reschedule': {
      $put: {
        input: { param: { id: string } } & { json: AppointmentRescheduleModel }
        output: AppointmentViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/consumer/v1/appointments/:id/reserve': {
      $put: {
        input: { param: { id: string } } & {
          query: { sendNotifications?: boolean | undefined }
        } & { json: AppointmentReserveModel }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/consumer/v1/availability/:serviceId/:startDate/:endDate': {
      $get: {
        input: { param: { serviceId: string; startDate: string; endDate: string } } & {
          query: {
            startTime?: number | undefined
            endTime?: number | undefined
            locationId?: string | undefined
            resourceId?: string | undefined
            resourceGroupId?: string | undefined
            resourceIds?: string | undefined
            roundRobin?: string | undefined
            duration?: number | undefined
            interval?: number | undefined
            timezoneName?: string | undefined
            tzOffset?: number | undefined
            destination?: string | undefined
            dayAvailabilityStartDate?: string | undefined
            dayAvailability?: number | undefined
            firstDayAvailable?: boolean | undefined
          }
        }
        output: AvailabilityViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/consumer/v1/availability/:serviceId/:startDate/:endDate/days': {
      $get: {
        input: { param: { serviceId: string; startDate: string; endDate: string } } & {
          query: {
            locationId?: string | undefined
            resourceId?: string | undefined
            tzOffset?: number | undefined
          }
        }
        output: AvailabilityDayViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/consumer/v1/availability/:serviceId/:startDate/:endDate/unavailable': {
      $get: {
        input: { param: { serviceId: string; startDate: string; endDate: string } } & {
          query: {
            locationId?: string | undefined
            resourceId?: string | undefined
            duration?: number | undefined
            tzOffset?: number | undefined
            skipTimePastUnavailability?: boolean | undefined
          }
        }
        output: UnavailableTimeListViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/consumer/v1/customers': {
      $get: {
        input: {
          query: {
            locationId?: string | undefined
            groupId?: string | undefined
            email?: string | undefined
            lastname?: string | undefined
            deleted?: boolean | undefined
            offset?: number | undefined
            limit?: number | undefined
          }
        }
        output: CustomerListViewModel
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: CustomerInputModel }
        output: CustomerViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/consumer/v1/customers/bookingfields': {
      $get: {
        input: { query: { locationId?: string | undefined } }
        output: BookingFieldListViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/consumer/v1/customers/countries': {
      $get: { input: {}; output: CountryViewModel[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/consumer/v1/customers/customfields': {
      $get: {
        input: { query: { locationId?: string | undefined; leadQuestions?: boolean | undefined } }
        output: CustomFieldDefinitionListViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/consumer/v1/customers/states': {
      $get: {
        input: { query: { country?: string | undefined } }
        output: StateViewModel[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/consumer/v1/customers/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
      $get: {
        input: { param: { id: string } }
        output: CustomerViewModel
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: CustomerUpdateModel }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/consumer/v1/locations': {
      $get: {
        input: {
          query: {
            name?: string | undefined
            nearestTo?: string | undefined
            proximity?: number | undefined
            units?: string | undefined
            serviceId?: string | undefined
            friendlyId?: string | undefined
            regionId?: string | undefined
            ignorePrimary?: boolean | undefined
            offset?: number | undefined
            limit?: number | undefined
          }
        }
        output: LocationListViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/consumer/v1/locations/:id': {
      $get: {
        input: { param: { id: string } }
        output: LocationViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/consumer/v1/resourcegroups': {
      $get: {
        input: {
          query: {
            locationId?: string | undefined
            deleted?: boolean | undefined
            offset?: number | undefined
            limit?: number | undefined
          }
        }
        output: ResourceGroupListViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/consumer/v1/resourcegroups/:id': {
      $get: {
        input: { param: { id: string } }
        output: ResourceGroupViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/consumer/v1/resources': {
      $get:
        | {
            input: {
              query: {
                locationId?: string | undefined
                resourceGroupId?: number | undefined
                email?: string | undefined
                name?: string | undefined
                sortOrder?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ResourceListViewModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                locationId?: string | undefined
                resourceGroupId?: number | undefined
                email?: string | undefined
                name?: string | undefined
                sortOrder?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                locationId?: string | undefined
                resourceGroupId?: number | undefined
                email?: string | undefined
                name?: string | undefined
                sortOrder?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/consumer/v1/resources/:id': {
      $get: {
        input: { param: { id: number } }
        output: ResourceViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/consumer/v1/resources/:id/services': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ResourceServiceListViewModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/consumer/v1/servicegroups': {
      $get: {
        input: {
          query: {
            locationId?: string | undefined
            offset?: number | undefined
            limit?: number | undefined
          }
        }
        output: ServiceGroupListViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/consumer/v1/servicegroups/:id': {
      $get: {
        input: { param: { id: number } }
        output: ServiceGroupViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/consumer/v1/services': {
      $get: {
        input: {
          query: {
            locationId?: string | undefined
            serviceGroupId?: number | undefined
            defaultService?: boolean | undefined
            allLocations?: boolean | undefined
            scope?: ServicesScope | undefined
            name?: string | undefined
            serviceId?: string | undefined
            offset?: number | undefined
            limit?: number | undefined
            sortOrder?: ServiceSortOrder | undefined
            sortDescending?: boolean | undefined
          }
        }
        output: ServiceListViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/consumer/v1/services/allocations/:id': {
      $get: {
        input: { param: { id: string } }
        output: ServiceAllocationViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/consumer/v1/services/:id': {
      $get: {
        input: { param: { id: number } }
        output: ServiceViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/consumer/v1/services/:id/allocations': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                locationId?: string | undefined
                resourceId?: string | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ServiceAllocationListViewModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                locationId?: string | undefined
                resourceId?: string | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                locationId?: string | undefined
                resourceId?: string | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                locationId?: string | undefined
                resourceId?: string | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/consumer/v1/services/:id/resources': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            locationId?: string | undefined
            offset?: number | undefined
            limit?: number | undefined
          }
        }
        output: ResourceListViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
