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
type BusinessUserPermissionViewModel = {
  access?: (string | null) | undefined
  function?: (string | null) | undefined
  object?: (string | null) | undefined
}
type BusinessUserViewModel = {
  accountId?: (string | null) | undefined
  businessName?: (string | null) | undefined
  email?: (string | null) | undefined
  id?: (string | null) | undefined
  identityAccount?: boolean | undefined
  locationId?: (string | null) | undefined
  name?: (string | null) | undefined
  object?: (string | null) | undefined
  permissions?: (BusinessUserPermissionViewModel[] | null) | undefined
  resourceId?: (string | null) | undefined
  resourceName?: (string | null) | undefined
  role?: (string | null) | undefined
}
type BusinessUserListViewModel = {
  count?: number | undefined
  data?: (BusinessUserViewModel[] | null) | undefined
  hasMore?: boolean | undefined
  object?: (string | null) | undefined
  total?: number | undefined
  url?: (string | null) | undefined
}
type BusinessUserInputModel = {
  email?: (string | null) | undefined
  locationId?: (string | null) | undefined
  name?: (string | null) | undefined
  resourceId?: (string | null) | undefined
  role?: (string | null) | undefined
  sendRegistrationInvite?: boolean | undefined
}
type BusinessPermissionViewModel = {
  access?: (string | null) | undefined
  function?: (string | null) | undefined
  object?: (string | null) | undefined
  role?: (string | null) | undefined
}
type BusinessPermissionListViewModel = {
  count?: number | undefined
  data?: (BusinessPermissionViewModel[] | null) | undefined
  hasMore?: boolean | undefined
  object?: (string | null) | undefined
  total?: number | undefined
  url?: (string | null) | undefined
}
type AuthorizedCompanyViewModel = {
  id?: (string | null) | undefined
  name?: (string | null) | undefined
  object?: (string | null) | undefined
}
type AuthorizedCompanyListViewModel = {
  count?: number | undefined
  data?: (AuthorizedCompanyViewModel[] | null) | undefined
  email?: (string | null) | undefined
  hasMore?: boolean | undefined
  object?: (string | null) | undefined
  total?: number | undefined
  url?: (string | null) | undefined
}
type BusinessUserUpdateModel = {
  email?: (string | null) | undefined
  name?: (string | null) | undefined
  resourceId?: (string | null) | undefined
  role?: (string | null) | undefined
  sendRegistrationInvite?: boolean | undefined
}
type CalendarHourViewModel = { endTime?: number | undefined; startTime?: number | undefined }
type CalendarHoursViewModel = {
  fri?: CalendarHourViewModel | undefined
  mon?: CalendarHourViewModel | undefined
  sat?: CalendarHourViewModel | undefined
  sun?: CalendarHourViewModel | undefined
  thu?: CalendarHourViewModel | undefined
  tue?: CalendarHourViewModel | undefined
  wed?: CalendarHourViewModel | undefined
}
type ScheduleViewModel = {
  availability?: CalendarHoursViewModel | undefined
  bookingsPerSlot?: number | undefined
  deletedStatus?: boolean | undefined
  deletedTime?: (string | null) | undefined
  id?: (string | null) | undefined
  interval?: number | undefined
  locationId?: (string | null) | undefined
  name?: (string | null) | undefined
  object?: (string | null) | undefined
  primary?: boolean | undefined
  resourceGroupId?: (string | null) | undefined
  type?: (string | null) | undefined
}
type ScheduleListViewModel = {
  count?: number | undefined
  data?: (ScheduleViewModel[] | null) | undefined
  hasMore?: boolean | undefined
  object?: (string | null) | undefined
  total?: number | undefined
  url?: (string | null) | undefined
}
type WeekDayInputModel = { endTime?: number | undefined; startTime?: number | undefined }
type AvailabilityInputModel = {
  fri?: WeekDayInputModel | undefined
  mon?: WeekDayInputModel | undefined
  sat?: WeekDayInputModel | undefined
  sun?: WeekDayInputModel | undefined
  thu?: WeekDayInputModel | undefined
  tue?: WeekDayInputModel | undefined
  wed?: WeekDayInputModel | undefined
}
type ScheduleInputModel = {
  availability?: AvailabilityInputModel | undefined
  bookingsPerSlot?: number | undefined
  interval?: number | undefined
  locationId?: (string | null) | undefined
  name?: (string | null) | undefined
  resourceGroupId?: (string | null) | undefined
  type?: (string | null) | undefined
}
type RepeatViewModel = {
  frequency?: (string | null) | undefined
  interval?: number | undefined
  monthDay?: (string | null) | undefined
  monthType?: (string | null) | undefined
  weekdays?: (string | null) | undefined
}
type CalendarBlockViewModel = {
  calendarId?: (string | null) | undefined
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
  startDate?: (string | null) | undefined
  startTime?: number | undefined
}
type RepeatInputModel = {
  frequency?: (string | null) | undefined
  interval?: (number | null) | undefined
  monthDay?: (number | null) | undefined
  monthType?: (string | null) | undefined
  weekdays?: (string | null) | undefined
}
type CalendarBlockUpdateModel = {
  endDate?: (string | null) | undefined
  endTime?: (number | null) | undefined
  reason?: (string | null) | undefined
  repeat?: RepeatInputModel | undefined
  repeats?: (boolean | null) | undefined
  startDate?: (string | null) | undefined
  startTime?: (number | null) | undefined
}
type ScheduleUpdateModel = {
  availability?: AvailabilityInputModel | undefined
  bookingsPerSlot?: number | undefined
  interval?: number | undefined
  locationId?: (string | null) | undefined
  name?: (string | null) | undefined
  resourceGroupId?: (string | null) | undefined
  type?: (string | null) | undefined
}
type CalendarBlockInputModel = {
  endDate?: (string | null) | undefined
  endTime?: (number | null) | undefined
  reason?: (string | null) | undefined
  repeat?: RepeatInputModel | undefined
  repeats?: (boolean | null) | undefined
  startDate?: (string | null) | undefined
  startTime?: (number | null) | undefined
}
type ResourceBlockViewModel = {
  businessId?: number | undefined
  deletedStatus?: boolean | undefined
  deletedTime?: (string | null) | undefined
  endDate?: (string | null) | undefined
  endTime?: number | undefined
  id?: number | undefined
  object?: (string | null) | undefined
  reason?: (string | null) | undefined
  repeat?: RepeatViewModel | undefined
  repeats?: boolean | undefined
  resourceId?: number | undefined
  startDate?: (string | null) | undefined
  startTime?: number | undefined
}
type CalendarBlockListViewModel = {
  count?: number | undefined
  data?: (CalendarBlockViewModel[] | null) | undefined
  hasMore?: boolean | undefined
  object?: (string | null) | undefined
  total?: number | undefined
  url?: (string | null) | undefined
}
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
type CompanyViewModel = {
  addressLine1?: (string | null) | undefined
  addressLine2?: (string | null) | undefined
  bookingWebhookUrl?: (string | null) | undefined
  city?: (string | null) | undefined
  clientId?: (string | null) | undefined
  clientSecret?: (string | null) | undefined
  country?: (string | null) | undefined
  customerWebhookUrl?: (string | null) | undefined
  deletedStatus?: boolean | undefined
  deletedTime?: (string | null) | undefined
  disableEmailAndSmsNotifications?: boolean | undefined
  email?: (string | null) | undefined
  fax?: (string | null) | undefined
  id?: (string | null) | undefined
  name?: (string | null) | undefined
  notificationFromEmailAddress?: (string | null) | undefined
  notificationFromName?: (string | null) | undefined
  object?: (string | null) | undefined
  phone?: (string | null) | undefined
  postalCode?: (string | null) | undefined
  registrationDate?: (string | null) | undefined
  registrationEmail?: (string | null) | undefined
  reminderWebhookUrl?: (string | null) | undefined
  resourceWebhookUrl?: (string | null) | undefined
  state?: (string | null) | undefined
  timezoneId?: (string | null) | undefined
  timezoneName?: (string | null) | undefined
  webhookSignatureHash?: (string | null) | undefined
  website?: (string | null) | undefined
}
type CompanyInputModel = {
  addressLine1?: (string | null) | undefined
  addressLine2?: (string | null) | undefined
  bookingWebhookUrl?: (string | null) | undefined
  city?: (string | null) | undefined
  country?: (string | null) | undefined
  customerWebhookUrl?: (string | null) | undefined
  disableEmailAndSmsNotifications?: (boolean | null) | undefined
  email?: (string | null) | undefined
  fax?: (string | null) | undefined
  name?: (string | null) | undefined
  notificationFromEmailAddress?: (string | null) | undefined
  notificationFromName?: (string | null) | undefined
  phone?: (string | null) | undefined
  postalCode?: (string | null) | undefined
  registrationEmail?: (string | null) | undefined
  reminderWebhookUrl?: (string | null) | undefined
  resourceWebhookUrl?: (string | null) | undefined
  state?: (string | null) | undefined
  timezoneName?: (string | null) | undefined
  webhookSignatureHash?: (string | null) | undefined
  website?: (string | null) | undefined
}
type CompanyUpdateModel = {
  addressLine1?: (string | null) | undefined
  addressLine2?: (string | null) | undefined
  bookingWebhookUrl?: (string | null) | undefined
  city?: (string | null) | undefined
  country?: (string | null) | undefined
  customerWebhookUrl?: (string | null) | undefined
  disableEmailAndSmsNotifications?: (boolean | null) | undefined
  email?: (string | null) | undefined
  fax?: (string | null) | undefined
  name?: (string | null) | undefined
  notificationFromEmailAddress?: (string | null) | undefined
  notificationFromName?: (string | null) | undefined
  phone?: (string | null) | undefined
  postalCode?: (string | null) | undefined
  registrationEmail?: (string | null) | undefined
  reminderWebhookUrl?: (string | null) | undefined
  resourceWebhookUrl?: (string | null) | undefined
  state?: (string | null) | undefined
  timezoneName?: (string | null) | undefined
  webhookSignatureHash?: (string | null) | undefined
  website?: (string | null) | undefined
}
type CompanyDomainViewModel = {
  domain?: (string | null) | undefined
  id?: (string | null) | undefined
  object?: (string | null) | undefined
}
type CompanyDomainListViewModel = {
  data?: (CompanyDomainViewModel[] | null) | undefined
  object?: (string | null) | undefined
  url?: (string | null) | undefined
}
type CompanyDomainInputModel = { domain?: (string | null) | undefined }
type CompanyDomainUpdateModel = { domain?: (string | null) | undefined }
type EmailTemplateViewModel = {
  customized?: boolean | undefined
  description?: (string | null) | undefined
  name?: (string | null) | undefined
  object?: (string | null) | undefined
  scope?: (string | null) | undefined
}
type EmailTemplateListViewModel = {
  data?: (EmailTemplateViewModel[] | null) | undefined
  object?: (string | null) | undefined
  total?: number | undefined
  url?: (string | null) | undefined
}
type MasterEmailTemplateSettingsViewModel = {
  centerEmailContent?: boolean | undefined
  centerEmailContentPanel?: boolean | undefined
  centerEmailFooter?: boolean | undefined
  contentBackgroundColor?: (string | null) | undefined
  contentColor?: (string | null) | undefined
  contentLinkColor?: (string | null) | undefined
  emailBackgroundColor?: (string | null) | undefined
  emailColor?: (string | null) | undefined
  emailLinkColor?: (string | null) | undefined
  footerFontSize?: (string | null) | undefined
  footerLogoHeight?: (string | null) | undefined
  footerLogoPadding?: (string | null) | undefined
  footerPanelEmailContact?: boolean | undefined
  footerPanelPhoneContact?: boolean | undefined
  footerPanelWebsiteContact?: boolean | undefined
  headerLogoHeight?: (string | null) | undefined
  headerLogoPadding?: (string | null) | undefined
  panelBackgroundColor?: (string | null) | undefined
  panelColor?: (string | null) | undefined
  panelLinkColor?: (string | null) | undefined
  privacyPolicyLink?: (string | null) | undefined
  showContentPanel?: boolean | undefined
  showFooterLogo?: boolean | undefined
  showFooterPanel?: boolean | undefined
  showHeaderLogo?: boolean | undefined
  showHeaderPanel?: boolean | undefined
  version?: (string | null) | undefined
}
type MasterTemplateSettingsInputModel = {
  centerEmailContent?: (boolean | null) | undefined
  centerEmailContentPanel?: (boolean | null) | undefined
  centerEmailFooter?: (boolean | null) | undefined
  contentBackgroundColor?: (string | null) | undefined
  contentColor?: (string | null) | undefined
  contentLinkColor?: (string | null) | undefined
  emailBackgroundColor?: (string | null) | undefined
  emailColor?: (string | null) | undefined
  emailLinkColor?: (string | null) | undefined
  footerFontSize?: (string | null) | undefined
  footerLogoHeight?: (string | null) | undefined
  footerLogoPadding?: (string | null) | undefined
  footerPanelEmailContact?: (boolean | null) | undefined
  footerPanelPhoneContact?: (boolean | null) | undefined
  footerPanelWebsiteContact?: (boolean | null) | undefined
  headerLogoHeight?: (string | null) | undefined
  headerLogoPadding?: (string | null) | undefined
  panelBackgroundColor?: (string | null) | undefined
  panelColor?: (string | null) | undefined
  panelLinkColor?: (string | null) | undefined
  privacyPolicyLink?: (string | null) | undefined
  showContentPanel?: (boolean | null) | undefined
  showFooterLogo?: (boolean | null) | undefined
  showFooterPanel?: (boolean | null) | undefined
  showHeaderLogo?: (boolean | null) | undefined
  showHeaderPanel?: (boolean | null) | undefined
}
type ContentResult = {
  content?: (string | null) | undefined
  contentType?: (string | null) | undefined
  statusCode?: (number | null) | undefined
}
type RegionViewModel = {
  id?: (string | null) | undefined
  name?: (string | null) | undefined
  object?: (string | null) | undefined
}
type RegionListViewModel = {
  count?: number | undefined
  data?: (RegionViewModel[] | null) | undefined
  hasMore?: boolean | undefined
  object?: (string | null) | undefined
  total?: number | undefined
  url?: (string | null) | undefined
}
type RegionInputModel = { name?: (string | null) | undefined }
type RegionUpdateModel = { name?: (string | null) | undefined }
type TimezonesViewModel = {
  name?: (string | null) | undefined
  region?: (string | null) | undefined
  timezoneIanna?: (string | null) | undefined
  tzOffset?: number | undefined
}
type TimezoneViewModel = {
  object?: (string | null) | undefined
  regions?: (string[] | null) | undefined
  timezones?: (TimezonesViewModel[] | null) | undefined
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
type CustomerPrivacyViewModel = {
  appointments?: (AppointmentViewModel[] | null) | undefined
  customer?: CustomerViewModel | undefined
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
type AddressInputModel = {
  addressLine1?: (string | null) | undefined
  addressLine2?: (string | null) | undefined
  city?: (string | null) | undefined
  country?: (string | null) | undefined
  postalCode?: (string | null) | undefined
  state?: (string | null) | undefined
}
type AppointmentRemindersInputModel = {
  emailFirstReminder?: (number | null) | undefined
  emailFirstReminderInterval?: number | undefined
  emailSecondReminder?: (number | null) | undefined
  emailSecondReminderInterval?: number | undefined
  smsFirstReminder?: (number | null) | undefined
  smsFirstReminderInterval?: number | undefined
  smsSecondReminder?: (number | null) | undefined
  smsSecondReminderInterval?: number | undefined
}
type BusinessHourInputModel = {
  endTime?: number | undefined
  is24Hours?: boolean | undefined
  isOpen?: boolean | undefined
  startTime?: number | undefined
}
type BusinessHoursInputModel = {
  fri?: BusinessHourInputModel | undefined
  mon?: BusinessHourInputModel | undefined
  sat?: BusinessHourInputModel | undefined
  sun?: BusinessHourInputModel | undefined
  thu?: BusinessHourInputModel | undefined
  tue?: BusinessHourInputModel | undefined
  wed?: BusinessHourInputModel | undefined
}
type BusinessDefaultsInputModel = {
  autoUpdateCustomer?: (boolean | null) | undefined
  businessNotification?: (boolean | null) | undefined
  customerCity?: (boolean | null) | undefined
  customerState?: (boolean | null) | undefined
  emailInfo?: (boolean | null) | undefined
  enableUtcTimezone?: (boolean | null) | undefined
}
type OnlineSettingsInputModel = {
  bookAheadUnit?: (number | null) | undefined
  bookAheadValue?: (number | null) | undefined
  bookInAdvance?: (number | null) | undefined
  bookingTimerMins?: (number | null) | undefined
  customerBookingsPerDay?: (number | null) | undefined
  enableWorldTimezones?: (boolean | null) | undefined
}
type LocationInputModel = {
  address?: AddressInputModel | undefined
  adminEmail?: (string | null) | undefined
  adminName?: (string | null) | undefined
  appointmentReminders?: AppointmentRemindersInputModel | undefined
  businessHours?: BusinessHoursInputModel | undefined
  defaults?: BusinessDefaultsInputModel | undefined
  email?: (string | null) | undefined
  fax?: (string | null) | undefined
  friendlyId?: (string | null) | undefined
  name?: (string | null) | undefined
  phone?: (string | null) | undefined
  regionId?: (string | null) | undefined
  settings?: OnlineSettingsInputModel | undefined
  timezoneName?: (string | null) | undefined
  website?: (string | null) | undefined
}
type LocationsInputModel = { locations?: (LocationInputModel[] | null) | undefined }
type AddressUpdateModel = {
  addressLine1?: (string | null) | undefined
  addressLine2?: (string | null) | undefined
  city?: (string | null) | undefined
  country?: (string | null) | undefined
  postalCode?: (string | null) | undefined
  state?: (string | null) | undefined
}
type BusinessHoursUpdateModel = {
  fri?: BusinessHourInputModel | undefined
  mon?: BusinessHourInputModel | undefined
  sat?: BusinessHourInputModel | undefined
  sun?: BusinessHourInputModel | undefined
  thu?: BusinessHourInputModel | undefined
  tue?: BusinessHourInputModel | undefined
  wed?: BusinessHourInputModel | undefined
}
type BusinessDefaultsUpdateModel = {
  autoUpdateCustomer?: (boolean | null) | undefined
  businessNotification?: (boolean | null) | undefined
  customerCity?: (boolean | null) | undefined
  customerState?: (boolean | null) | undefined
  emailInfo?: (boolean | null) | undefined
  enableUtcTimezone?: (boolean | null) | undefined
}
type OnlineSettingsUpdateModel = {
  bookAheadUnit?: (number | null) | undefined
  bookAheadValue?: (number | null) | undefined
  bookInAdvance?: (number | null) | undefined
  bookingTimerMins?: (number | null) | undefined
  customerBookingsPerDay?: (number | null) | undefined
  enableWorldTimezones?: (boolean | null) | undefined
}
type LocationUpdateModel = {
  address?: AddressUpdateModel | undefined
  adminEmail?: (string | null) | undefined
  adminName?: (string | null) | undefined
  appointmentReminders?: AppointmentRemindersInputModel | undefined
  businessHours?: BusinessHoursUpdateModel | undefined
  defaults?: BusinessDefaultsUpdateModel | undefined
  email?: (string | null) | undefined
  fax?: (string | null) | undefined
  friendlyId?: (string | null) | undefined
  name?: (string | null) | undefined
  phone?: (string | null) | undefined
  regionId?: (string | null) | undefined
  settings?: OnlineSettingsUpdateModel | undefined
  timezoneName?: (string | null) | undefined
  website?: (string | null) | undefined
}
type EmailTemplateInputModel = {
  templateContent?: (string | null) | undefined
  templateName?: (string | null) | undefined
}
type GoogleServiceAccountCreds = {
  auth_provider_x509_cert_url?: (string | null) | undefined
  auth_uri?: (string | null) | undefined
  client_email?: (string | null) | undefined
  client_id?: (string | null) | undefined
  client_x509_cert_url?: (string | null) | undefined
  private_key?: (string | null) | undefined
  private_key_id?: (string | null) | undefined
  project_id?: (string | null) | undefined
  token_uri?: (string | null) | undefined
  type?: (string | null) | undefined
}
type BusinessServiceListViewModel = {
  count?: number | undefined
  data?: (BusinessServiceViewModel[] | null) | undefined
  hasMore?: boolean | undefined
  object?: (string | null) | undefined
  total?: number | undefined
  url?: (string | null) | undefined
}
type ResourceImageInputModel = {
  imageFileData?: (string | null) | undefined
  imageFileName?: (string | null) | undefined
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
type ResourceGroupInputModel = {
  description?: (string | null) | undefined
  email?: (string | null) | undefined
  locationId?: (string | null) | undefined
  name?: (string | null) | undefined
}
type ResourceGroupUpdateModel = {
  description?: (string | null) | undefined
  email?: (string | null) | undefined
  name?: (string | null) | undefined
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
type ResourceOptionsInputModel = {
  bioLink?: (string | null) | undefined
  bookingNotification?: (number | null) | undefined
  calendarAvailability?: (number | null) | undefined
  displayColor?: (string | null) | undefined
  effectiveDate?: (string | null) | undefined
  gender?: (string | null) | undefined
  googleCalendarId?: (string | null) | undefined
  hourly?: (number | null) | undefined
  ignoreBusinessHours?: (boolean | null) | undefined
  notificationType?: (number | null) | undefined
  outlookCalendarId?: (string | null) | undefined
  sortKey?: (number | null) | undefined
}
type PhoneViewModel = {
  businessPhone?: (string | null) | undefined
  businessPhoneExt?: (string | null) | undefined
  homePhone?: (string | null) | undefined
  mobilePhone?: (string | null) | undefined
  phoneType?: (string | null) | undefined
}
type ResourceServiceViewModel = {
  object?: (string | null) | undefined
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
  googleCalendarAuthUrl?: (string | null) | undefined
  googleCalendarAuthorized?: boolean | undefined
  googleCalendarId?: (string | null) | undefined
  groupId?: (number | null) | undefined
  hourly?: (number | null) | undefined
  id?: (string | null) | undefined
  ignoreBusinessHours?: boolean | undefined
  imageUrl?: (string | null) | undefined
  locationId?: (string | null) | undefined
  name?: (string | null) | undefined
  notificationType?: number | undefined
  object?: (string | null) | undefined
  options?: ResourceOptionsInputModel | undefined
  outlookCalendarAuthUrl?: (string | null) | undefined
  outlookCalendarAuthorized?: boolean | undefined
  outlookCalendarId?: (string | null) | undefined
  phone?: PhoneViewModel | undefined
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
type ContactInputModel = {
  businessPhone?: (string | null) | undefined
  businessPhoneExt?: (string | null) | undefined
  conferenceInfo?: (string | null) | undefined
  homePhone?: (string | null) | undefined
  mobilePhone?: (string | null) | undefined
  preferredPhoneType?: (string | null) | undefined
  skypeUsername?: (string | null) | undefined
}
type ResourceInputModel = {
  address?: AddressInputModel | undefined
  availability?: AvailabilityInputModel | undefined
  contact?: ContactInputModel | undefined
  customFields?: CustomFieldInputModel | undefined
  description?: (string | null) | undefined
  email?: (string | null) | undefined
  groupId?: (string | null) | undefined
  locationId?: (string | null) | undefined
  name?: (string | null) | undefined
  options?: ResourceOptionsInputModel | undefined
  recurringAvailability?: (boolean | null) | undefined
  serviceIds?: (string[] | null) | undefined
  timezoneId?: (string | null) | undefined
}
type ResourceAllocationViewModel = {
  businessId?: number | undefined
  deletedStatus?: boolean | undefined
  deletedTime?: (string | null) | undefined
  endDate?: (string | null) | undefined
  endTime?: number | undefined
  id?: number | undefined
  object?: (string | null) | undefined
  reason?: (string | null) | undefined
  repeat?: RepeatViewModel | undefined
  repeats?: boolean | undefined
  resourceId?: number | undefined
  startDate?: (string | null) | undefined
  startTime?: number | undefined
}
type ResourceAllocationUpdateModel = {
  endDate?: (string | null) | undefined
  endTime?: (number | null) | undefined
  reason?: (string | null) | undefined
  repeat?: RepeatInputModel | undefined
  repeats?: (boolean | null) | undefined
  startDate?: (string | null) | undefined
  startTime?: (number | null) | undefined
}
type ResourceBlockUpdateModel = {
  allDay?: (boolean | null) | undefined
  endDate?: (string | null) | undefined
  endTime?: (number | null) | undefined
  reason?: (string | null) | undefined
  repeat?: RepeatInputModel | undefined
  repeats?: (boolean | null) | undefined
  startDate?: (string | null) | undefined
  startTime?: (number | null) | undefined
}
type ResourcesInputModel = { resources?: (ResourceInputModel[] | null) | undefined }
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
type ResourceOptionsUpdateModel = {
  bioLink?: (string | null) | undefined
  bookingNotification?: (number | null) | undefined
  calendarAvailability?: (number | null) | undefined
  displayColor?: (string | null) | undefined
  effectiveDate?: (string | null) | undefined
  gender?: (string | null) | undefined
  googleCalendarId?: (string | null) | undefined
  hourly?: (number | null) | undefined
  ignoreBusinessHours?: (boolean | null) | undefined
  notificationType?: (number | null) | undefined
  outlookCalendarId?: (string | null) | undefined
  sortKey?: (number | null) | undefined
}
type ResourceBulkUpdateModel = {
  address?: AddressUpdateModel | undefined
  availability?: AvailabilityInputModel | undefined
  contact?: ContactUpdateModel | undefined
  customFields?: CustomFieldUpdateModel | undefined
  description?: (string | null) | undefined
  email?: (string | null) | undefined
  groupId?: (string | null) | undefined
  id?: (string | null) | undefined
  name?: (string | null) | undefined
  options?: ResourceOptionsUpdateModel | undefined
  recurringAvailability?: (boolean | null) | undefined
  serviceIds?: (string[] | null) | undefined
  timezoneId?: (string | null) | undefined
}
type ResourcesUpdateModel = { resources?: (ResourceBulkUpdateModel[] | null) | undefined }
type SystemTimezoneViewModel = {
  baseUtcOffset?: number | undefined
  daylightName?: (string | null) | undefined
  displayName?: (string | null) | undefined
  standardName?: (string | null) | undefined
  supportsDaylightSavingTime?: boolean | undefined
  timezoneIana?: (string | null) | undefined
  timezoneId?: (string | null) | undefined
}
type ResourceUpdateModel = {
  address?: AddressUpdateModel | undefined
  availability?: AvailabilityInputModel | undefined
  contact?: ContactUpdateModel | undefined
  customFields?: CustomFieldUpdateModel | undefined
  description?: (string | null) | undefined
  email?: (string | null) | undefined
  groupId?: (string | null) | undefined
  locationId?: (string | null) | undefined
  name?: (string | null) | undefined
  options?: ResourceOptionsUpdateModel | undefined
  recurringAvailability?: (boolean | null) | undefined
  serviceIds?: (string[] | null) | undefined
  timezoneId?: (string | null) | undefined
}
type ResourceAllocationListViewModel = {
  count?: number | undefined
  data?: (ResourceAllocationViewModel[] | null) | undefined
  hasMore?: boolean | undefined
  object?: (string | null) | undefined
  total?: number | undefined
  url?: (string | null) | undefined
}
type ResourceAllocationInputModel = {
  endDate?: (string | null) | undefined
  endTime?: (number | null) | undefined
  reason?: (string | null) | undefined
  repeat?: RepeatInputModel | undefined
  repeats?: (boolean | null) | undefined
  startDate?: (string | null) | undefined
  startTime?: (number | null) | undefined
}
type WeekDayViewModel2 = {
  displayEndTime?: (string | null) | undefined
  displayStartTime?: (string | null) | undefined
  endTime?: number | undefined
  startTime?: number | undefined
}
type AvailabilityViewModel2 = {
  fri?: WeekDayViewModel2 | undefined
  mon?: WeekDayViewModel2 | undefined
  sat?: WeekDayViewModel2 | undefined
  sun?: WeekDayViewModel2 | undefined
  thu?: WeekDayViewModel2 | undefined
  tue?: WeekDayViewModel2 | undefined
  wed?: WeekDayViewModel2 | undefined
}
type ResourceAvailabilityViewModel = {
  businessId?: number | undefined
  ignoreBusinessHours?: boolean | undefined
  resourceId?: number | undefined
  resourceName?: (string | null) | undefined
  resourceTzo?: number | undefined
  weekdays?: AvailabilityViewModel2 | undefined
}
type ResourceBlockInputModel = {
  allDay?: (boolean | null) | undefined
  endDate?: (string | null) | undefined
  endTime?: (number | null) | undefined
  reason?: (string | null) | undefined
  repeat?: RepeatInputModel | undefined
  repeats?: (boolean | null) | undefined
  startDate?: (string | null) | undefined
  startTime?: (number | null) | undefined
}
type ResourceBlockListViewModel = {
  count?: number | undefined
  data?: (ResourceBlockViewModel[] | null) | undefined
  hasMore?: boolean | undefined
  object?: (string | null) | undefined
  total?: number | undefined
  url?: (string | null) | undefined
}
type CalendarAuthViewModel = {
  calendarAuthUrl?: (string | null) | undefined
  calendarId?: (string | null) | undefined
  object?: (string | null) | undefined
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
type ServiceGroupInputModel = {
  description?: (string | null) | undefined
  locationId?: (string | null) | undefined
  name?: (string | null) | undefined
  type?: (number | null) | undefined
}
type ServiceFeesInputModel = {
  cancellationFeeAmount?: number | undefined
  cancellationFeeTaxable?: boolean | undefined
  feeAmount?: number | undefined
  feeTaxable?: boolean | undefined
  nonRefundable?: boolean | undefined
}
type ServiceOptionsInputModel = {
  consumerPadding?: (boolean | null) | undefined
  defaultService?: (boolean | null) | undefined
  durationInterval?: (number | null) | undefined
  durationMax?: (number | null) | undefined
  durationMin?: (number | null) | undefined
  durationSelect?: (boolean | null) | undefined
  padding?: (number | null) | undefined
}
type ServiceSettingsInputModel = {
  bookAheadUnit?: (number | null) | undefined
  bookAheadValue?: (number | null) | undefined
  bookInAdvance?: (number | null) | undefined
}
type ServiceInputModel = {
  availability?: AvailabilityInputModel | undefined
  bookingInterval?: number | undefined
  bookingLimit?: number | undefined
  customFields?: CustomFieldInputModel | undefined
  description?: (string | null) | undefined
  duration?: number | undefined
  fees?: ServiceFeesInputModel | undefined
  locationId?: (string | null) | undefined
  maxCapacity?: number | undefined
  maxGroupSize?: number | undefined
  mediaPageUrl?: (string | null) | undefined
  name?: (string | null) | undefined
  options?: ServiceOptionsInputModel | undefined
  public?: boolean | undefined
  serviceGroupId?: (string | null) | undefined
  settings?: ServiceSettingsInputModel | undefined
  type?: (string | null) | undefined
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
type ServiceAllocationUpdateModel = {
  bookingLimit?: number | undefined
  endDate?: (string | null) | undefined
  endTime?: (number | null) | undefined
  locationId?: (string | null) | undefined
  reason?: (string | null) | undefined
  repeat?: RepeatInputModel | undefined
  repeats?: (boolean | null) | undefined
  resourceId?: (string | null) | undefined
  startDate?: (string | null) | undefined
  startTime?: (number | null) | undefined
}
type RepeatUpdateModel = {
  frequency?: (string | null) | undefined
  interval?: (number | null) | undefined
  monthDay?: (number | null) | undefined
  monthType?: (string | null) | undefined
  weekdays?: (string | null) | undefined
}
type ServiceBlockUpdateModel = {
  endDate?: (string | null) | undefined
  endTime?: (number | null) | undefined
  reason?: (string | null) | undefined
  repeat?: RepeatUpdateModel | undefined
  repeats?: (boolean | null) | undefined
  startDate?: (string | null) | undefined
  startTime?: (number | null) | undefined
}
type ServiceBlockViewModel = {
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
  serviceId?: (string | null) | undefined
  startDate?: (string | null) | undefined
  startTime?: number | undefined
}
type ServiceCalendarInputModel = {
  calendarId?: (string | null) | undefined
  locationId?: (string | null) | undefined
  serviceId?: (string | null) | undefined
}
type ServiceCalendarViewModel = {
  calendarId?: (string | null) | undefined
  calendarName?: (string | null) | undefined
  id?: (string | null) | undefined
  locationId?: (string | null) | undefined
  serviceId?: (string | null) | undefined
  serviceName?: (string | null) | undefined
}
type ServiceFeesUpdateModel = {
  cancellationFeeAmount?: (number | null) | undefined
  cancellationFeeTaxable?: (boolean | null) | undefined
  feeAmount?: (number | null) | undefined
  feeTaxable?: (boolean | null) | undefined
  nonRefundable?: (boolean | null) | undefined
}
type ServiceOptionsUpdateModel = {
  consumerPadding?: (boolean | null) | undefined
  defaultService?: (boolean | null) | undefined
  durationInterval?: (number | null) | undefined
  durationMax?: (number | null) | undefined
  durationMin?: (number | null) | undefined
  durationSelect?: (boolean | null) | undefined
  padding?: (number | null) | undefined
}
type ServiceSettingsUpdateModel = {
  bookAheadUnit?: (number | null) | undefined
  bookAheadValue?: (number | null) | undefined
  bookInAdvance?: (number | null) | undefined
}
type ServiceUpdateModel = {
  availability?: AvailabilityInputModel | undefined
  bookingInterval?: (number | null) | undefined
  bookingLimit?: (number | null) | undefined
  customFields?: CustomFieldUpdateModel | undefined
  description?: (string | null) | undefined
  duration?: (number | null) | undefined
  fees?: ServiceFeesUpdateModel | undefined
  locationId?: (string | null) | undefined
  maxCapacity?: (number | null) | undefined
  maxGroupSize?: (number | null) | undefined
  mediaPageUrl?: (string | null) | undefined
  name?: (string | null) | undefined
  options?: ServiceOptionsUpdateModel | undefined
  public?: (boolean | null) | undefined
  serviceGroupId?: (string | null) | undefined
  settings?: ServiceSettingsUpdateModel | undefined
  type?: (string | null) | undefined
}
type ServiceAllocationListViewModel = {
  count?: number | undefined
  data?: (ServiceAllocationViewModel[] | null) | undefined
  hasMore?: boolean | undefined
  object?: (string | null) | undefined
  total?: number | undefined
  url?: (string | null) | undefined
}
type ServiceAllocationInputModel = {
  bookingLimit?: number | undefined
  endDate?: (string | null) | undefined
  endTime?: (number | null) | undefined
  locationId?: (string | null) | undefined
  reason?: (string | null) | undefined
  repeat?: RepeatInputModel | undefined
  repeats?: (boolean | null) | undefined
  resourceId?: (string | null) | undefined
  startDate?: (string | null) | undefined
  startTime?: (number | null) | undefined
}
type ServiceAllocationsInputModel = {
  serviceAllocations?: (ServiceAllocationInputModel[] | null) | undefined
}
type ServiceAvailabilityViewModel = {
  ignoreBusinessHours?: boolean | undefined
  serviceId?: number | undefined
  serviceName?: (string | null) | undefined
  weekdays?: AvailabilityViewModel2 | undefined
}
type ServiceBlockInputModel = {
  endDate?: (string | null) | undefined
  endTime?: (number | null) | undefined
  locationId?: (string | null) | undefined
  reason?: (string | null) | undefined
  repeat?: RepeatInputModel | undefined
  repeats?: boolean | undefined
  startDate?: (string | null) | undefined
  startTime?: (number | null) | undefined
}
type ServiceBlockListViewModel = {
  count?: number | undefined
  data?: (ServiceBlockViewModel[] | null) | undefined
  hasMore?: boolean | undefined
  object?: (string | null) | undefined
  total?: number | undefined
  url?: (string | null) | undefined
}
type ServiceImageInputModel = {
  imageFileData?: (string | null) | undefined
  imageFileName?: (string | null) | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/setup/v1/appointments': {
      $get: {
        input: {
          query: {
            locationId?: string | undefined
            email?: string | undefined
            lastname?: string | undefined
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
    }
  } & {
    '/setup/v1/appointments/:id': {
      $get: {
        input: { param: { id: string } }
        output: AppointmentViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/appointments/:id/reassign/resource/:resourceId': {
      $put: {
        input: { param: { id: string; resourceId: string } }
        output: AppointmentViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/businessusers': {
      $get: {
        input: {
          query: {
            locationId?: string | undefined
            email?: string | undefined
            role?: string | undefined
            offset?: number | undefined
            limit?: number | undefined
          }
        }
        output: BusinessUserListViewModel
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: BusinessUserInputModel }
        output: BusinessUserViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/businessusers/permissions': {
      $get: {
        input: {
          query: {
            role?: string | undefined
            offset?: number | undefined
            limit?: number | undefined
          }
        }
        output: BusinessPermissionListViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/businessusers/:email/companies': {
      $get: {
        input: { param: { email: string } } & {
          query: {
            searchText?: string | undefined
            offset?: number | undefined
            limit?: number | undefined
          }
        }
        output: AuthorizedCompanyListViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/businessusers/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
      $get: {
        input: { param: { id: string } }
        output: BusinessUserViewModel
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: BusinessUserUpdateModel }
        output: BusinessUserViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/calendars': {
      $get: {
        input: {
          query: {
            locationId?: string | undefined
            deleted?: boolean | undefined
            offset?: number | undefined
            limit?: number | undefined
          }
        }
        output: ScheduleListViewModel
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: ScheduleInputModel }
        output: ScheduleViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/calendars/block/:id': {
      $delete: {
        input: { param: { id: string } }
        output: CalendarBlockViewModel
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: CalendarBlockUpdateModel }
        output: CalendarBlockViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/calendars/blocks/:id': {
      $get: {
        input: { param: { id: string } }
        output: CalendarBlockViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/calendars/:id': {
      $delete: {
        input: { param: { id: string } }
        output: ScheduleViewModel
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: string } }
        output: ScheduleViewModel
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: ScheduleUpdateModel }
        output: ScheduleViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/calendars/:id/block': {
      $post: {
        input: { param: { id: string } } & { json: CalendarBlockInputModel }
        output: ResourceBlockViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/calendars/:id/blocks': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: CalendarBlockListViewModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/setup/v1/calendars/:id/recover': {
      $put: {
        input: { param: { id: string } }
        output: ScheduleViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/calendars/:id/services': {
      $get: {
        input: { param: { id: string } } & {
          query: { offset?: number | undefined; limit?: number | undefined }
        }
        output: ServiceListViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/companies': {
      $get: { input: {}; output: CompanyViewModel; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: CompanyInputModel }
        output: CompanyViewModel
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { json: CompanyUpdateModel }
        output: CompanyViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/companies/domains': {
      $get: { input: {}; output: CompanyDomainListViewModel; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: CompanyDomainInputModel }
        output: CompanyDomainViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/companies/domains/:id': {
      $delete: {
        input: { param: { id: string } }
        output: CompanyDomainViewModel
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: string } }
        output: CompanyDomainViewModel
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: CompanyDomainUpdateModel }
        output: CompanyDomainViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/companies/email/templates': {
      $get: { input: {}; output: EmailTemplateListViewModel; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/setup/v1/companies/email/templates/master': {
      $delete: {
        input: {}
        output: MasterEmailTemplateSettingsViewModel
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {}
        output: MasterEmailTemplateSettingsViewModel
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: MasterTemplateSettingsInputModel }
        output: MasterEmailTemplateSettingsViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/companies/email/templates/:templateName': {
      $get: {
        input: { param: { templateName: string } }
        output: ContentResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/companies/regions': {
      $get:
        | {
            input: { query: { offset?: number | undefined; limit?: number | undefined } }
            output: RegionListViewModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { offset?: number | undefined; limit?: number | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { offset?: number | undefined; limit?: number | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { offset?: number | undefined; limit?: number | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post: {
        input: { json: RegionInputModel }
        output: RegionViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/companies/regions/:id': {
      $delete: {
        input: { param: { id: string } }
        output: RegionViewModel
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: string } }
        output: RegionViewModel
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: RegionUpdateModel }
        output: RegionViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/companies/timezones/:date': {
      $get: {
        input: { param: { date: string } }
        output: TimezoneViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/customers': {
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
    }
  } & {
    '/setup/v1/customers/:id': {
      $get: {
        input: { param: { id: string } }
        output: CustomerViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/customers/:id/privacy': {
      $get: {
        input: { param: { id: string } }
        output: CustomerPrivacyViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/locations': {
      $get: {
        input: {
          query: {
            name?: string | undefined
            serviceId?: string | undefined
            friendlyId?: string | undefined
            deleted?: boolean | undefined
            offset?: number | undefined
            limit?: number | undefined
          }
        }
        output: LocationListViewModel
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: LocationInputModel }
        output: LocationViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/locations/bulk': {
      $post: {
        input: { json: LocationsInputModel }
        output: LocationViewModel[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/locations/services/:id': {
      $delete: {
        input: { param: { id: string } }
        output: LocationViewModel
        outputFormat: 'json'
        status: 200
      }
      $get:
        | {
            input: { param: { id: string } }
            output: BusinessServiceViewModel
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/setup/v1/locations/:id': {
      $delete: {
        input: { param: { id: string } }
        output: LocationViewModel
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: string } }
        output: LocationViewModel
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { query: { removeRegion?: boolean | undefined } } & {
          json: LocationUpdateModel
        }
        output: LocationViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/locations/:id/appointmentreminders': {
      $get: {
        input: { param: { id: string } }
        output: AppointmentReminderViewModel
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: AppointmentRemindersInputModel }
        output: LocationViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/locations/:id/deleteallimages': {
      $delete: {
        input: { param: { id: string } } & { query: { uppercase?: boolean | undefined } }
        output: boolean
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/locations/:id/deleteimage': {
      $delete: {
        input: { param: { id: string } }
        output: LocationViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/locations/:id/email/templates': {
      $get: {
        input: { param: { id: string } }
        output: EmailTemplateListViewModel
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string } } & { json: EmailTemplateInputModel }
        output: ContentResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/locations/:id/email/templates/master': {
      $delete: {
        input: { param: { id: string } }
        output: MasterEmailTemplateSettingsViewModel
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: string } }
        output: MasterEmailTemplateSettingsViewModel
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string } } & { json: MasterTemplateSettingsInputModel }
        output: MasterEmailTemplateSettingsViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/locations/:id/email/templates/:templateName': {
      $delete: {
        input: { param: { id: string; templateName: string } }
        output: ContentResult
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: string; templateName: string } }
        output: ContentResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/locations/:id/google/service/account': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: { param: { id: string } } & { json: GoogleServiceAccountCreds }
        output: GoogleServiceAccountCreds
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/locations/:id/holidays/:holidayId/:closed': {
      $put: {
        input: { param: { id: string; holidayId: string; closed: boolean } }
        output: LocationViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/locations/:id/recover': {
      $put: {
        input: { param: { id: string } }
        output: LocationViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/locations/:id/services': {
      $delete: {
        input: { param: { id: string } }
        output: LocationViewModel
        outputFormat: 'json'
        status: 200
      }
      $get:
        | {
            input: { param: { id: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: BusinessServiceListViewModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post: {
        input: { param: { id: string } } & { json: string[] }
        output: LocationViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/locations/:id/settings/scope/:settingsScope': {
      $put: {
        input: { param: { id: string; settingsScope: string } }
        output: LocationViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/locations/:id/uploadimage': {
      $post: {
        input: { param: { id: string } } & { json: ResourceImageInputModel }
        output: LocationViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/resourcegroups': {
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
      $post: {
        input: { json: ResourceGroupInputModel }
        output: ResourceGroupViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/resourcegroups/:id': {
      $delete: {
        input: { param: { id: string } }
        output: ResourceGroupViewModel
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: string } }
        output: ResourceGroupViewModel
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: ResourceGroupUpdateModel }
        output: ResourceGroupViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/resourcegroups/:id/recover': {
      $put: {
        input: { param: { id: string } }
        output: ResourceViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/resources': {
      $get:
        | {
            input: {
              query: {
                locationId?: string | undefined
                resourceGroupId?: string | undefined
                email?: string | undefined
                name?: string | undefined
                deleted?: boolean | undefined
                googleAuthReturnUrl?: string | undefined
                outlookAuthReturnUrl?: string | undefined
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
                resourceGroupId?: string | undefined
                email?: string | undefined
                name?: string | undefined
                deleted?: boolean | undefined
                googleAuthReturnUrl?: string | undefined
                outlookAuthReturnUrl?: string | undefined
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
                resourceGroupId?: string | undefined
                email?: string | undefined
                name?: string | undefined
                deleted?: boolean | undefined
                googleAuthReturnUrl?: string | undefined
                outlookAuthReturnUrl?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post: {
        input: {
          query: {
            googleAuthReturnUrl?: string | undefined
            outlookAuthReturnUrl?: string | undefined
          }
        } & { json: ResourceInputModel }
        output: ResourceViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/resources/allocations/:id': {
      $delete: {
        input: { param: { id: string } }
        output: ResourceBlockViewModel
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: string } }
        output: ResourceAllocationViewModel
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: ResourceAllocationUpdateModel }
        output: ResourceBlockViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/resources/block/:id': {
      $delete: {
        input: { param: { id: string } }
        output: ResourceBlockViewModel
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: ResourceBlockUpdateModel }
        output: ResourceBlockViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/resources/blocks/:id': {
      $get: {
        input: { param: { id: string } }
        output: ResourceBlockViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/resources/bulk': {
      $post: {
        input: {
          query: {
            googleAuthReturnUrl?: string | undefined
            outlookAuthReturnUrl?: string | undefined
          }
        } & { json: ResourcesInputModel }
        output: ResourceViewModel[]
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: {
          query: {
            googleAuthReturnUrl?: string | undefined
            outlookAuthReturnUrl?: string | undefined
          }
        } & { json: ResourcesUpdateModel }
        output: ResourceViewModel[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/resources/timezones': {
      $get: { input: {}; output: SystemTimezoneViewModel; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/setup/v1/resources/:id': {
      $delete: {
        input: { param: { id: string } }
        output: ResourceViewModel
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: string } } & {
          query: {
            googleAuthReturnUrl?: string | undefined
            outlookAuthReturnUrl?: string | undefined
          }
        }
        output: ResourceViewModel
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          query: {
            googleAuthReturnUrl?: string | undefined
            outlookAuthReturnUrl?: string | undefined
          }
        } & { json: ResourceUpdateModel }
        output: ResourceViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/resources/:id/allocations': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                startDate?: string | undefined
                endDate?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ResourceAllocationListViewModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
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
      $post: {
        input: { param: { id: string } } & { json: ResourceAllocationInputModel }
        output: ResourceBlockViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/resources/:id/availability': {
      $get: {
        input: { param: { id: string } }
        output: ResourceAvailabilityViewModel
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: AvailabilityInputModel }
        output: ResourceAvailabilityViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/resources/:id/block': {
      $post: {
        input: { param: { id: string } } & { json: ResourceBlockInputModel }
        output: ResourceBlockViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/resources/:id/blocks': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                startDate?: string | undefined
                endDate?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ResourceBlockListViewModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
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
    '/setup/v1/resources/:id/calendar/auth/google/:googleEmailAddress': {
      $get: {
        input: { param: { id: string; googleEmailAddress: string } } & {
          query: { googleAuthReturnUrl?: string | undefined }
        }
        output: CalendarAuthViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/resources/:id/calendar/auth/outlook/:outlookEmailAddress': {
      $get: {
        input: { param: { id: string; outlookEmailAddress: string } } & {
          query: { outlookAuthReturnUrl?: string | undefined }
        }
        output: CalendarAuthViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/resources/:id/deleteimage': {
      $delete: {
        input: { param: { id: string } }
        output: ResourceViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/resources/:id/reassign/appointments/:resourceId': {
      $put: {
        input: { param: { id: string; resourceId: string } } & {
          query: {
            startDate?: string | undefined
            endDate?: string | undefined
            calendarId?: string | undefined
          }
        }
        output: AppointmentViewModel[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/resources/:id/recover': {
      $put: {
        input: { param: { id: string } } & {
          query: {
            googleAuthReturnUrl?: string | undefined
            outlookAuthReturnUrl?: string | undefined
          }
        }
        output: ResourceViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/resources/:id/services': {
      $delete: {
        input: { param: { id: string } }
        output: ResourceViewModel
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string } } & { json: string[] }
        output: ResourceViewModel
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: string[] }
        output: ResourceViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/resources/:id/uploadimage': {
      $post: {
        input: { param: { id: string } } & { json: ResourceImageInputModel }
        output: ResourceViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/servicegroups': {
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
      $post: {
        input: { json: ServiceGroupInputModel }
        output: ServiceGroupViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/servicegroups/:id': {
      $delete: {
        input: { param: { id: number } }
        output: ServiceGroupViewModel
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: number } }
        output: ServiceGroupViewModel
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: ServiceGroupInputModel }
        output: ServiceGroupViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/servicegroups/:id/recover': {
      $put: {
        input: { param: { id: number } }
        output: ServiceGroupViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/services': {
      $get: {
        input: {
          query: {
            locationId?: string | undefined
            serviceGroupId?: number | undefined
            deleted?: boolean | undefined
            offset?: number | undefined
            limit?: number | undefined
          }
        }
        output: ServiceListViewModel
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: ServiceInputModel }
        output: ServiceViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/services/allocations/:id': {
      $delete: {
        input: { param: { id: string } }
        output: ServiceAllocationViewModel
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: string } }
        output: ServiceAllocationViewModel
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: ServiceAllocationUpdateModel }
        output: ServiceAllocationViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/services/block/:id': {
      $delete: {
        input: { param: { id: string } }
        output: ResourceBlockViewModel
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: ServiceBlockUpdateModel }
        output: ServiceBlockViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/services/blocks/:id': {
      $get: {
        input: { param: { id: string } }
        output: ResourceBlockViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/services/calendar': {
      $post: {
        input: { json: ServiceCalendarInputModel }
        output: ServiceCalendarViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/services/calendar/:id': {
      $delete: {
        input: { param: { id: string } }
        output: ServiceCalendarViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/services/:id': {
      $delete: {
        input: { param: { id: string } }
        output: ServiceViewModel
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: number } }
        output: ServiceViewModel
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: ServiceUpdateModel }
        output: ServiceViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/services/:id/allocations': {
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
      $post: {
        input: { param: { id: string } } & { json: ServiceAllocationInputModel }
        output: ServiceAllocationViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/services/:id/allocations/bulk': {
      $post: {
        input: { param: { id: string } } & { json: ServiceAllocationsInputModel }
        output: ServiceAllocationViewModel[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/services/:id/availability': {
      $get: {
        input: { param: { id: string } }
        output: ServiceAvailabilityViewModel
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: AvailabilityInputModel }
        output: ServiceAvailabilityViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/services/:id/block': {
      $post: {
        input: { param: { id: string } } & { json: ServiceBlockInputModel }
        output: ServiceBlockViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/services/:id/blocks': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                startDate?: string | undefined
                endDate?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ServiceBlockListViewModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
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
    '/setup/v1/services/:id/calendar': {
      $get: {
        input: { param: { id: string } } & { query: { locationId?: string | undefined } }
        output: ServiceCalendarViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/services/:id/deleteimage': {
      $delete: {
        input: { param: { id: string } }
        output: ServiceViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/services/:id/recover': {
      $put: {
        input: { param: { id: string } }
        output: ServiceViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/services/:id/resources': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            offset?: number | undefined
            limit?: number | undefined
            googleAuthReturnUrl?: string | undefined
            outlookAuthReturnUrl?: string | undefined
          }
        }
        output: ResourceListViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setup/v1/services/:id/uploadimage': {
      $post: {
        input: { param: { id: string } } & { json: ServiceImageInputModel }
        output: ServiceViewModel
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
