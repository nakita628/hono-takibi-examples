import { createRoute, z } from '@hono/zod-openapi'

const AddressInputModelSchema = z
  .strictObject({
    addressLine1: z.string().nullable().exactOptional(),
    addressLine2: z.string().nullable().exactOptional(),
    city: z.string().nullable().exactOptional(),
    country: z.string().nullable().exactOptional(),
    postalCode: z.string().nullable().exactOptional(),
    state: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AddressInputModel')

const AddressUpdateModelSchema = z
  .strictObject({
    addressLine1: z.string().nullable().exactOptional(),
    addressLine2: z.string().nullable().exactOptional(),
    city: z.string().nullable().exactOptional(),
    country: z.string().nullable().exactOptional(),
    postalCode: z.string().nullable().exactOptional(),
    state: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AddressUpdateModel')

const AddressViewModelSchema = z
  .strictObject({
    addressLine1: z.string().nullable().exactOptional(),
    addressLine2: z.string().nullable().exactOptional(),
    city: z.string().nullable().exactOptional(),
    country: z.string().nullable().exactOptional(),
    postalCode: z.string().nullable().exactOptional(),
    state: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AddressViewModel')

const AppointmentAuditViewModelSchema = z
  .strictObject({
    appointmentId: z.string().nullable().exactOptional(),
    id: z.string().nullable().exactOptional(),
    modificationType: z.string().nullable().exactOptional(),
    modifiedBy: z.string().nullable().exactOptional(),
    modifiedOn: z.string().nullable().exactOptional(),
    notesAfter: z.string().nullable().exactOptional(),
    notesBefore: z.string().nullable().exactOptional(),
    statusAfter: z.string().nullable().exactOptional(),
    statusBefore: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AppointmentAuditViewModel')

const AppointmentCustomerViewModelSchema = z
  .strictObject({
    appointmentId: z.string().nullable().exactOptional(),
    customerId: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AppointmentCustomerViewModel')

const CustomFieldViewModelSchema = z
  .strictObject({
    name: z.string().nullable().exactOptional(),
    value: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CustomFieldViewModel')

const AppointmentResourceViewModelSchema = z
  .strictObject({
    appointmentId: z.string().nullable().exactOptional(),
    resourceEmail: z.string().nullable().exactOptional(),
    resourceGroupId: z.string().nullable().exactOptional(),
    resourceId: z.string().nullable().exactOptional(),
    resourceImageUrl: z.string().nullable().exactOptional(),
    resourceName: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AppointmentResourceViewModel')

const AppointmentViewModelSchema = z
  .strictObject({
    auditTrail: z.array(AppointmentAuditViewModelSchema).nullable().exactOptional(),
    bookedBy: z.string().nullable().exactOptional(),
    businessName: z.string().nullable().exactOptional(),
    calendarId: z.string().nullable().exactOptional(),
    confirmationNumber: z.string().nullable().exactOptional(),
    confirmed: z.boolean().exactOptional(),
    createDate: z.string().nullable().exactOptional(),
    customFields: z.record(z.string(), CustomFieldViewModelSchema).nullable().exactOptional(),
    customerId: z.string().nullable().exactOptional(),
    customerMessage: z.string().nullable().exactOptional(),
    customers: z.array(AppointmentCustomerViewModelSchema).nullable().exactOptional(),
    date: z.string().nullable().exactOptional(),
    dateInternational: z.string().nullable().exactOptional(),
    downloadIcsUrl: z.string().nullable().exactOptional(),
    duration: z.int32().exactOptional(),
    email: z.string().nullable().exactOptional(),
    emailConfirmationSent: z.string().nullable().exactOptional(),
    emailReminderSent: z.string().nullable().exactOptional(),
    endDateTime: z.string().nullable().exactOptional(),
    firstname: z.string().nullable().exactOptional(),
    groupSize: z.int32().nullable().exactOptional(),
    id: z.string().nullable().exactOptional(),
    ipAddress: z.string().nullable().exactOptional(),
    lastModifiedBy: z.string().nullable().exactOptional(),
    lastModifiedOn: z.string().nullable().exactOptional(),
    lastname: z.string().nullable().exactOptional(),
    latitude: z.string().nullable().exactOptional(),
    location: z.string().nullable().exactOptional(),
    locationId: z.string().nullable().exactOptional(),
    longitude: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    notes: z.string().nullable().exactOptional(),
    object: z.string().nullable().exactOptional(),
    onlineBooking: z.boolean().nullable().exactOptional(),
    paymentStatus: z.int32().exactOptional(),
    phone: z.string().nullable().exactOptional(),
    phoneExt: z.string().nullable().exactOptional(),
    phoneType: z.string().nullable().exactOptional(),
    rescheduledId: z.string().nullable().exactOptional(),
    resourceEmail: z.string().nullable().exactOptional(),
    resourceGroupId: z.string().nullable().exactOptional(),
    resourceGroupName: z.string().nullable().exactOptional(),
    resourceId: z.string().nullable().exactOptional(),
    resourceImageUrl: z.string().nullable().exactOptional(),
    resourceName: z.string().nullable().exactOptional(),
    resources: z.array(AppointmentResourceViewModelSchema).nullable().exactOptional(),
    serviceAllocationId: z.string().nullable().exactOptional(),
    serviceId: z.string().nullable().exactOptional(),
    serviceImageUrl: z.string().nullable().exactOptional(),
    serviceName: z.string().nullable().exactOptional(),
    smsConfirmationSent: z.string().nullable().exactOptional(),
    smsReminderSent: z.string().nullable().exactOptional(),
    startDateTime: z.string().nullable().exactOptional(),
    status: z.string().nullable().exactOptional(),
    stripeChargeId: z.string().nullable().exactOptional(),
    stripeRefundId: z.string().nullable().exactOptional(),
    time: z.int32().exactOptional(),
    timezone: z.int32().nullable().exactOptional(),
    timezoneIana: z.string().nullable().exactOptional(),
    timezoneId: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AppointmentViewModel')

const AppointmentListViewModelSchema = z
  .strictObject({
    count: z.int32().exactOptional(),
    data: z.array(AppointmentViewModelSchema).nullable().exactOptional(),
    hasMore: z.boolean().exactOptional(),
    object: z.string().nullable().exactOptional(),
    total: z.int32().exactOptional(),
    url: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AppointmentListViewModel')

const AppointmentReminderViewModelSchema = z
  .strictObject({
    emailFirstReminder: z.int32().exactOptional(),
    emailFirstReminderInterval: z.int32().exactOptional(),
    emailSecondReminder: z.int32().exactOptional(),
    emailSecondReminderInterval: z.int32().exactOptional(),
    smsFirstReminder: z.int32().exactOptional(),
    smsFirstReminderInterval: z.int32().exactOptional(),
    smsSecondReminder: z.int32().exactOptional(),
    smsSecondReminderInterval: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AppointmentReminderViewModel')

const AppointmentRemindersInputModelSchema = z
  .strictObject({
    emailFirstReminder: z.int32().nullable().exactOptional(),
    emailFirstReminderInterval: z.int32().exactOptional(),
    emailSecondReminder: z.int32().nullable().exactOptional(),
    emailSecondReminderInterval: z.int32().exactOptional(),
    smsFirstReminder: z.int32().nullable().exactOptional(),
    smsFirstReminderInterval: z.int32().exactOptional(),
    smsSecondReminder: z.int32().nullable().exactOptional(),
    smsSecondReminderInterval: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AppointmentRemindersInputModel')

const AuthorizedCompanyViewModelSchema = z
  .strictObject({
    id: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    object: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AuthorizedCompanyViewModel')

const AuthorizedCompanyListViewModelSchema = z
  .strictObject({
    count: z.int32().exactOptional(),
    data: z.array(AuthorizedCompanyViewModelSchema).nullable().exactOptional(),
    email: z.string().nullable().exactOptional(),
    hasMore: z.boolean().exactOptional(),
    object: z.string().nullable().exactOptional(),
    total: z.int32().exactOptional(),
    url: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AuthorizedCompanyListViewModel')

const WeekDayInputModelSchema = z
  .strictObject({ endTime: z.int32().exactOptional(), startTime: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('WeekDayInputModel')

const AvailabilityInputModelSchema = z
  .strictObject({
    fri: WeekDayInputModelSchema.exactOptional(),
    mon: WeekDayInputModelSchema.exactOptional(),
    sat: WeekDayInputModelSchema.exactOptional(),
    sun: WeekDayInputModelSchema.exactOptional(),
    thu: WeekDayInputModelSchema.exactOptional(),
    tue: WeekDayInputModelSchema.exactOptional(),
    wed: WeekDayInputModelSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AvailabilityInputModel')

const WeekDayViewModel2Schema = z
  .strictObject({
    displayEndTime: z.string().nullable().exactOptional(),
    displayStartTime: z.string().nullable().exactOptional(),
    endTime: z.int32().exactOptional(),
    startTime: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('WeekDayViewModel2')

const AvailabilityViewModel2Schema = z
  .strictObject({
    fri: WeekDayViewModel2Schema.exactOptional(),
    mon: WeekDayViewModel2Schema.exactOptional(),
    sat: WeekDayViewModel2Schema.exactOptional(),
    sun: WeekDayViewModel2Schema.exactOptional(),
    thu: WeekDayViewModel2Schema.exactOptional(),
    tue: WeekDayViewModel2Schema.exactOptional(),
    wed: WeekDayViewModel2Schema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AvailabilityViewModel2')

const BusinessDefaultsInputModelSchema = z
  .strictObject({
    autoUpdateCustomer: z.boolean().nullable().exactOptional(),
    businessNotification: z.boolean().nullable().exactOptional(),
    customerCity: z.boolean().nullable().exactOptional(),
    customerState: z.boolean().nullable().exactOptional(),
    emailInfo: z.boolean().nullable().exactOptional(),
    enableUtcTimezone: z.boolean().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BusinessDefaultsInputModel')

const BusinessDefaultsUpdateModelSchema = z
  .strictObject({
    autoUpdateCustomer: z.boolean().nullable().exactOptional(),
    businessNotification: z.boolean().nullable().exactOptional(),
    customerCity: z.boolean().nullable().exactOptional(),
    customerState: z.boolean().nullable().exactOptional(),
    emailInfo: z.boolean().nullable().exactOptional(),
    enableUtcTimezone: z.boolean().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BusinessDefaultsUpdateModel')

const BusinessDefaultsViewModelSchema = z
  .strictObject({
    autoUpdateCustomer: z.boolean().nullable().exactOptional(),
    businessNotification: z.boolean().nullable().exactOptional(),
    customerCity: z.boolean().nullable().exactOptional(),
    customerState: z.boolean().nullable().exactOptional(),
    emailInfo: z.boolean().nullable().exactOptional(),
    enableUtcTimezone: z.boolean().nullable().exactOptional(),
    object: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BusinessDefaultsViewModel')

const BusinessHolidayViewModelSchema = z
  .strictObject({
    businessClosed: z.boolean().exactOptional(),
    holidayName: z.string().nullable().exactOptional(),
    id: z.string().nullable().exactOptional(),
    publicHolidayId: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BusinessHolidayViewModel')

const BusinessHourInputModelSchema = z
  .strictObject({
    endTime: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'endTime is entered in military format. e.g. 1800 = 6pm end, 2400 = midnight end of day.\r\nFor 24 hours enter startTime = 0 and endTime = 2400',
      }),
    is24Hours: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true then available for 24 hours. startTime must be zero and endTime must be 2400.',
      }),
    isOpen: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If false, then not available entire day, starTime and endTime must both be zero. If true, then available between startTime and endTime.',
      }),
    startTime: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'startTime is entered in military format. e.g. 0 = midnight start, 900 = 9am start',
      }),
  })
  .openapi({ required: [] })
  .openapi('BusinessHourInputModel')

const BusinessHourViewModelSchema = z
  .strictObject({
    endTime: z.int32().exactOptional(),
    is24Hours: z.boolean().exactOptional(),
    isOpen: z.boolean().exactOptional(),
    startTime: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BusinessHourViewModel')

const BusinessHoursInputModelSchema = z
  .strictObject({
    fri: BusinessHourInputModelSchema.exactOptional(),
    mon: BusinessHourInputModelSchema.exactOptional(),
    sat: BusinessHourInputModelSchema.exactOptional(),
    sun: BusinessHourInputModelSchema.exactOptional(),
    thu: BusinessHourInputModelSchema.exactOptional(),
    tue: BusinessHourInputModelSchema.exactOptional(),
    wed: BusinessHourInputModelSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BusinessHoursInputModel')

const BusinessHoursUpdateModelSchema = z
  .strictObject({
    fri: BusinessHourInputModelSchema.exactOptional(),
    mon: BusinessHourInputModelSchema.exactOptional(),
    sat: BusinessHourInputModelSchema.exactOptional(),
    sun: BusinessHourInputModelSchema.exactOptional(),
    thu: BusinessHourInputModelSchema.exactOptional(),
    tue: BusinessHourInputModelSchema.exactOptional(),
    wed: BusinessHourInputModelSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BusinessHoursUpdateModel')

const BusinessHoursViewModelSchema = z
  .strictObject({
    fri: BusinessHourViewModelSchema.exactOptional(),
    mon: BusinessHourViewModelSchema.exactOptional(),
    sat: BusinessHourViewModelSchema.exactOptional(),
    sun: BusinessHourViewModelSchema.exactOptional(),
    thu: BusinessHourViewModelSchema.exactOptional(),
    tue: BusinessHourViewModelSchema.exactOptional(),
    wed: BusinessHourViewModelSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BusinessHoursViewModel')

const BusinessPermissionViewModelSchema = z
  .strictObject({
    access: z.string().nullable().exactOptional(),
    function: z.string().nullable().exactOptional(),
    object: z.string().nullable().exactOptional(),
    role: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BusinessPermissionViewModel')

const BusinessPermissionListViewModelSchema = z
  .strictObject({
    count: z.int32().exactOptional(),
    data: z.array(BusinessPermissionViewModelSchema).nullable().exactOptional(),
    hasMore: z.boolean().exactOptional(),
    object: z.string().nullable().exactOptional(),
    total: z.int32().exactOptional(),
    url: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BusinessPermissionListViewModel')

const BusinessServiceViewModelSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    object: z.string().nullable().exactOptional(),
    serviceId: z.int32().exactOptional(),
    serviceName: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BusinessServiceViewModel')

const BusinessServiceListViewModelSchema = z
  .strictObject({
    count: z.int32().exactOptional(),
    data: z.array(BusinessServiceViewModelSchema).nullable().exactOptional(),
    hasMore: z.boolean().exactOptional(),
    object: z.string().nullable().exactOptional(),
    total: z.int32().exactOptional(),
    url: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BusinessServiceListViewModel')

const BusinessUserInputModelSchema = z
  .strictObject({
    email: z.string().nullable().exactOptional(),
    locationId: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    resourceId: z.string().nullable().exactOptional(),
    role: z.string().nullable().exactOptional(),
    sendRegistrationInvite: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BusinessUserInputModel')

const BusinessUserPermissionViewModelSchema = z
  .strictObject({
    access: z.string().nullable().exactOptional(),
    function: z.string().nullable().exactOptional(),
    object: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BusinessUserPermissionViewModel')

const BusinessUserViewModelSchema = z
  .strictObject({
    accountId: z.uuid().nullable().exactOptional(),
    businessName: z.string().nullable().exactOptional(),
    email: z.string().nullable().exactOptional(),
    id: z.string().nullable().exactOptional(),
    identityAccount: z.boolean().exactOptional(),
    locationId: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    object: z.string().nullable().exactOptional(),
    permissions: z.array(BusinessUserPermissionViewModelSchema).nullable().exactOptional(),
    resourceId: z.string().nullable().exactOptional(),
    resourceName: z.string().nullable().exactOptional(),
    role: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BusinessUserViewModel')

const BusinessUserListViewModelSchema = z
  .strictObject({
    count: z.int32().exactOptional(),
    data: z.array(BusinessUserViewModelSchema).nullable().exactOptional(),
    hasMore: z.boolean().exactOptional(),
    object: z.string().nullable().exactOptional(),
    total: z.int32().exactOptional(),
    url: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BusinessUserListViewModel')

const BusinessUserUpdateModelSchema = z
  .strictObject({
    email: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    resourceId: z.string().nullable().exactOptional(),
    role: z.string().nullable().exactOptional(),
    sendRegistrationInvite: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BusinessUserUpdateModel')

const CalendarAuthViewModelSchema = z
  .strictObject({
    calendarAuthUrl: z.string().nullable().exactOptional(),
    calendarId: z.string().nullable().exactOptional(),
    object: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CalendarAuthViewModel')

const RepeatInputModelSchema = z
  .strictObject({
    frequency: z.string().nullable().exactOptional(),
    interval: z.int32().nullable().exactOptional(),
    monthDay: z.int32().nullable().exactOptional(),
    monthType: z.string().nullable().exactOptional(),
    weekdays: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RepeatInputModel')

const CalendarBlockInputModelSchema = z
  .strictObject({
    endDate: z.iso.date().nullable().exactOptional(),
    endTime: z.int32().nullable().exactOptional(),
    reason: z.string().nullable().exactOptional(),
    repeat: RepeatInputModelSchema.exactOptional(),
    repeats: z.boolean().nullable().exactOptional(),
    startDate: z.iso.date().nullable().exactOptional(),
    startTime: z.int32().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CalendarBlockInputModel')

const RepeatViewModelSchema = z
  .strictObject({
    frequency: z.string().nullable().exactOptional(),
    interval: z.int32().exactOptional(),
    monthDay: z.string().nullable().exactOptional(),
    monthType: z.string().nullable().exactOptional(),
    weekdays: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RepeatViewModel')

const CalendarBlockViewModelSchema = z
  .strictObject({
    calendarId: z.string().nullable().exactOptional(),
    deletedStatus: z.boolean().exactOptional(),
    deletedTime: z.string().nullable().exactOptional(),
    endDate: z.string().nullable().exactOptional(),
    endTime: z.int32().exactOptional(),
    id: z.string().nullable().exactOptional(),
    locationId: z.string().nullable().exactOptional(),
    object: z.string().nullable().exactOptional(),
    reason: z.string().nullable().exactOptional(),
    repeat: RepeatViewModelSchema.exactOptional(),
    repeats: z.boolean().exactOptional(),
    startDate: z.string().nullable().exactOptional(),
    startTime: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CalendarBlockViewModel')

const CalendarBlockListViewModelSchema = z
  .strictObject({
    count: z.int32().exactOptional(),
    data: z.array(CalendarBlockViewModelSchema).nullable().exactOptional(),
    hasMore: z.boolean().exactOptional(),
    object: z.string().nullable().exactOptional(),
    total: z.int32().exactOptional(),
    url: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CalendarBlockListViewModel')

const CalendarBlockUpdateModelSchema = z
  .strictObject({
    endDate: z.iso.date().nullable().exactOptional(),
    endTime: z.int32().nullable().exactOptional(),
    reason: z.string().nullable().exactOptional(),
    repeat: RepeatInputModelSchema.exactOptional(),
    repeats: z.boolean().nullable().exactOptional(),
    startDate: z.iso.date().nullable().exactOptional(),
    startTime: z.int32().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CalendarBlockUpdateModel')

const CalendarHourViewModelSchema = z
  .strictObject({ endTime: z.int32().exactOptional(), startTime: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('CalendarHourViewModel')

const CalendarHoursViewModelSchema = z
  .strictObject({
    fri: CalendarHourViewModelSchema.exactOptional(),
    mon: CalendarHourViewModelSchema.exactOptional(),
    sat: CalendarHourViewModelSchema.exactOptional(),
    sun: CalendarHourViewModelSchema.exactOptional(),
    thu: CalendarHourViewModelSchema.exactOptional(),
    tue: CalendarHourViewModelSchema.exactOptional(),
    wed: CalendarHourViewModelSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CalendarHoursViewModel')

const CompanyDomainInputModelSchema = z
  .strictObject({ domain: z.string().nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('CompanyDomainInputModel')

const CompanyDomainViewModelSchema = z
  .strictObject({
    domain: z.string().nullable().exactOptional(),
    id: z.string().nullable().exactOptional(),
    object: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CompanyDomainViewModel')

const CompanyDomainListViewModelSchema = z
  .strictObject({
    data: z.array(CompanyDomainViewModelSchema).nullable().exactOptional(),
    object: z.string().nullable().exactOptional(),
    url: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CompanyDomainListViewModel')

const CompanyDomainUpdateModelSchema = z
  .strictObject({ domain: z.string().nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('CompanyDomainUpdateModel')

const CompanyInputModelSchema = z
  .strictObject({
    addressLine1: z.string().nullable().exactOptional(),
    addressLine2: z.string().nullable().exactOptional(),
    bookingWebhookUrl: z.string().nullable().exactOptional(),
    city: z.string().nullable().exactOptional(),
    country: z.string().nullable().exactOptional(),
    customerWebhookUrl: z.string().nullable().exactOptional(),
    disableEmailAndSmsNotifications: z.boolean().nullable().exactOptional(),
    email: z.string().nullable().exactOptional(),
    fax: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    notificationFromEmailAddress: z.string().nullable().exactOptional(),
    notificationFromName: z.string().nullable().exactOptional(),
    phone: z.string().nullable().exactOptional(),
    postalCode: z.string().nullable().exactOptional(),
    registrationEmail: z.string().nullable().exactOptional(),
    reminderWebhookUrl: z.string().nullable().exactOptional(),
    resourceWebhookUrl: z.string().nullable().exactOptional(),
    state: z.string().nullable().exactOptional(),
    timezoneName: z.string().nullable().exactOptional(),
    webhookSignatureHash: z.string().nullable().exactOptional(),
    website: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CompanyInputModel')

const CompanyUpdateModelSchema = z
  .strictObject({
    addressLine1: z.string().nullable().exactOptional(),
    addressLine2: z.string().nullable().exactOptional(),
    bookingWebhookUrl: z.string().nullable().exactOptional(),
    city: z.string().nullable().exactOptional(),
    country: z.string().nullable().exactOptional(),
    customerWebhookUrl: z.string().nullable().exactOptional(),
    disableEmailAndSmsNotifications: z.boolean().nullable().exactOptional(),
    email: z.string().nullable().exactOptional(),
    fax: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    notificationFromEmailAddress: z.string().nullable().exactOptional(),
    notificationFromName: z.string().nullable().exactOptional(),
    phone: z.string().nullable().exactOptional(),
    postalCode: z.string().nullable().exactOptional(),
    registrationEmail: z.string().nullable().exactOptional(),
    reminderWebhookUrl: z.string().nullable().exactOptional(),
    resourceWebhookUrl: z.string().nullable().exactOptional(),
    state: z.string().nullable().exactOptional(),
    timezoneName: z.string().nullable().exactOptional(),
    webhookSignatureHash: z.string().nullable().exactOptional(),
    website: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CompanyUpdateModel')

const CompanyViewModelSchema = z
  .strictObject({
    addressLine1: z.string().nullable().exactOptional(),
    addressLine2: z.string().nullable().exactOptional(),
    bookingWebhookUrl: z.string().nullable().exactOptional(),
    city: z.string().nullable().exactOptional(),
    clientId: z.string().nullable().exactOptional(),
    clientSecret: z.string().nullable().exactOptional(),
    country: z.string().nullable().exactOptional(),
    customerWebhookUrl: z.string().nullable().exactOptional(),
    deletedStatus: z.boolean().exactOptional(),
    deletedTime: z.string().nullable().exactOptional(),
    disableEmailAndSmsNotifications: z.boolean().exactOptional(),
    email: z.string().nullable().exactOptional(),
    fax: z.string().nullable().exactOptional(),
    id: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    notificationFromEmailAddress: z.string().nullable().exactOptional(),
    notificationFromName: z.string().nullable().exactOptional(),
    object: z.string().nullable().exactOptional(),
    phone: z.string().nullable().exactOptional(),
    postalCode: z.string().nullable().exactOptional(),
    registrationDate: z.string().nullable().exactOptional(),
    registrationEmail: z.string().nullable().exactOptional(),
    reminderWebhookUrl: z.string().nullable().exactOptional(),
    resourceWebhookUrl: z.string().nullable().exactOptional(),
    state: z.string().nullable().exactOptional(),
    timezoneId: z.string().nullable().exactOptional(),
    timezoneName: z.string().nullable().exactOptional(),
    webhookSignatureHash: z.string().nullable().exactOptional(),
    website: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CompanyViewModel')

const ContactInputModelSchema = z
  .strictObject({
    businessPhone: z.string().nullable().exactOptional(),
    businessPhoneExt: z.string().nullable().exactOptional(),
    conferenceInfo: z.string().nullable().exactOptional(),
    homePhone: z.string().nullable().exactOptional(),
    mobilePhone: z.string().nullable().exactOptional(),
    preferredPhoneType: z.string().nullable().exactOptional(),
    skypeUsername: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ContactInputModel')

const ContactUpdateModelSchema = z
  .strictObject({
    businessPhone: z.string().nullable().exactOptional(),
    businessPhoneExt: z.string().nullable().exactOptional(),
    conferenceInfo: z.string().nullable().exactOptional(),
    homePhone: z.string().nullable().exactOptional(),
    mobilePhone: z.string().nullable().exactOptional(),
    preferredPhoneType: z.string().nullable().exactOptional(),
    skypeUsername: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ContactUpdateModel')

const ContactViewModelSchema = z
  .strictObject({
    businessPhone: z.string().nullable().exactOptional(),
    businessPhoneExt: z.string().nullable().exactOptional(),
    conferenceInfo: z.string().nullable().exactOptional(),
    homePhone: z.string().nullable().exactOptional(),
    mobilePhone: z.string().nullable().exactOptional(),
    phoneType: z.string().nullable().exactOptional(),
    skypeUsername: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ContactViewModel')

const ContentResultSchema = z
  .strictObject({
    content: z.string().nullable().exactOptional(),
    contentType: z.string().nullable().exactOptional(),
    statusCode: z.int32().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ContentResult')

const CustomFieldInputModelSchema = z
  .strictObject({
    field1: z.string().nullable().exactOptional(),
    field10: z.string().nullable().exactOptional(),
    field2: z.string().nullable().exactOptional(),
    field3: z.string().nullable().exactOptional(),
    field4: z.string().nullable().exactOptional(),
    field5: z.string().nullable().exactOptional(),
    field6: z.string().nullable().exactOptional(),
    field7: z.string().nullable().exactOptional(),
    field8: z.string().nullable().exactOptional(),
    field9: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CustomFieldInputModel')

const CustomFieldUpdateModelSchema = z
  .strictObject({
    field1: z.string().nullable().exactOptional(),
    field10: z.string().nullable().exactOptional(),
    field2: z.string().nullable().exactOptional(),
    field3: z.string().nullable().exactOptional(),
    field4: z.string().nullable().exactOptional(),
    field5: z.string().nullable().exactOptional(),
    field6: z.string().nullable().exactOptional(),
    field7: z.string().nullable().exactOptional(),
    field8: z.string().nullable().exactOptional(),
    field9: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CustomFieldUpdateModel')

const CustomerViewModelSchema = z
  .strictObject({
    address: AddressViewModelSchema.exactOptional(),
    birthdate: z.string().nullable().exactOptional(),
    businessName: z.string().nullable().exactOptional(),
    companyName: z.string().nullable().exactOptional(),
    contact: ContactViewModelSchema.exactOptional(),
    createdBy: z.string().nullable().exactOptional(),
    createdOn: z.string().nullable().exactOptional(),
    customFields: z.record(z.string(), CustomFieldViewModelSchema).nullable().exactOptional(),
    deletedStatus: z.boolean().exactOptional(),
    deletedTime: z.string().nullable().exactOptional(),
    disabled: z.boolean().nullable().exactOptional(),
    email: z.string().nullable().exactOptional(),
    emailInfo: z.boolean().nullable().exactOptional(),
    emailPromotion: z.boolean().nullable().exactOptional(),
    firstname: z.string().nullable().exactOptional(),
    gender: z.string().nullable().exactOptional(),
    groupId: z.string().nullable().exactOptional(),
    id: z.string().nullable().exactOptional(),
    inviteEmailSent: z.string().nullable().exactOptional(),
    lastVisitDate: z.string().nullable().exactOptional(),
    lastname: z.string().nullable().exactOptional(),
    latitude: z.string().nullable().exactOptional(),
    locationId: z.string().nullable().exactOptional(),
    longitude: z.string().nullable().exactOptional(),
    modifiedBy: z.string().nullable().exactOptional(),
    modifiedOn: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    notificationType: z.string().nullable().exactOptional(),
    object: z.string().nullable().exactOptional(),
    registeredBy: z.string().nullable().exactOptional(),
    registrationDate: z.string().nullable().exactOptional(),
    resourceId: z.string().nullable().exactOptional(),
    stripeCustomerId: z.string().nullable().exactOptional(),
    subscriptionId: z.string().nullable().exactOptional(),
    verificationDate: z.string().nullable().exactOptional(),
    verifiedBy: z.string().nullable().exactOptional(),
    welcomeEmailSent: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CustomerViewModel')

const CustomerListViewModelSchema = z
  .strictObject({
    count: z.int32().exactOptional(),
    data: z.array(CustomerViewModelSchema).nullable().exactOptional(),
    hasMore: z.boolean().exactOptional(),
    object: z.string().nullable().exactOptional(),
    total: z.int32().exactOptional(),
    url: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CustomerListViewModel')

const CustomerPrivacyViewModelSchema = z
  .strictObject({
    appointments: z.array(AppointmentViewModelSchema).nullable().exactOptional(),
    customer: CustomerViewModelSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CustomerPrivacyViewModel')

const EmailTemplateInputModelSchema = z
  .strictObject({
    templateContent: z.string().nullable().exactOptional(),
    templateName: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EmailTemplateInputModel')

const EmailTemplateViewModelSchema = z
  .strictObject({
    customized: z.boolean().exactOptional(),
    description: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    object: z.string().nullable().exactOptional(),
    scope: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EmailTemplateViewModel')

const EmailTemplateListViewModelSchema = z
  .strictObject({
    data: z.array(EmailTemplateViewModelSchema).nullable().exactOptional(),
    object: z.string().nullable().exactOptional(),
    total: z.int32().exactOptional(),
    url: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EmailTemplateListViewModel')

const GoogleServiceAccountCredsSchema = z
  .strictObject({
    auth_provider_x509_cert_url: z.string().nullable().exactOptional(),
    auth_uri: z.string().nullable().exactOptional(),
    client_email: z.string().nullable().exactOptional(),
    client_id: z.string().nullable().exactOptional(),
    client_x509_cert_url: z.string().nullable().exactOptional(),
    private_key: z.string().nullable().exactOptional(),
    private_key_id: z.string().nullable().exactOptional(),
    project_id: z.string().nullable().exactOptional(),
    token_uri: z.string().nullable().exactOptional(),
    type: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GoogleServiceAccountCreds')

const OnlineSettingsInputModelSchema = z
  .strictObject({
    bookAheadUnit: z.int32().nullable().exactOptional(),
    bookAheadValue: z.int32().nullable().exactOptional(),
    bookInAdvance: z.int32().nullable().exactOptional(),
    bookingTimerMins: z.int32().nullable().exactOptional(),
    customerBookingsPerDay: z.int32().nullable().exactOptional(),
    enableWorldTimezones: z.boolean().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OnlineSettingsInputModel')

const LocationInputModelSchema = z
  .strictObject({
    address: AddressInputModelSchema.exactOptional(),
    adminEmail: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Field is required.' }),
    adminName: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'This field is no longer required and has been deprecated.' }),
    appointmentReminders: AppointmentRemindersInputModelSchema.exactOptional(),
    businessHours: BusinessHoursInputModelSchema.exactOptional(),
    defaults: BusinessDefaultsInputModelSchema.exactOptional(),
    email: z.string().nullable().exactOptional(),
    fax: z.string().nullable().exactOptional(),
    friendlyId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Use the friendlyId as an alternative to the assigned locationId\r\nChoose something easy and meaningful. Must be unique within your company.\r\nFriendlyId's are limited to maximum of 64 characters.",
      }),
    name: z.string().nullable().exactOptional(),
    phone: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'GroupSize Limits the number of people that can come\r\nalong on a single appointment',
      }),
    regionId: z.string().nullable().exactOptional(),
    settings: OnlineSettingsInputModelSchema.exactOptional(),
    timezoneName: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Field is required. It is in Iana format. e.g. America/New_York. Use moment.js in your client for ease of timezone detection and selection',
      }),
    website: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LocationInputModel')

const OnlineSettingsViewModelSchema = z
  .strictObject({
    availabilityForm: z.int32().exactOptional(),
    bookAheadUnit: z.int32().exactOptional(),
    bookAheadValue: z.int32().exactOptional(),
    bookInAdvance: z.int32().exactOptional(),
    bookWithAccount: z.boolean().exactOptional(),
    bookingConfirmationMessage: z.string().nullable().exactOptional(),
    bookingMessage: z.string().nullable().exactOptional(),
    bookingPolicy: z.string().nullable().exactOptional(),
    bookingTimerMins: z.int32().exactOptional(),
    businessId: z.string().nullable().exactOptional(),
    companyId: z.string().nullable().exactOptional(),
    customerBookingsPerDay: z.int32().exactOptional(),
    customerVerification: z.boolean().exactOptional(),
    defaultService: z.boolean().nullable().exactOptional(),
    defaultToCustomerTimezone: z.boolean().exactOptional(),
    disableAuthorization: z.boolean().nullable().exactOptional(),
    enableWorldTimezones: z.boolean().nullable().exactOptional(),
    enabled: z.boolean().exactOptional(),
    familyMembersEnabled: z.boolean().exactOptional(),
    firstAvailable: z.boolean().nullable().exactOptional(),
    formFlow: z.int32().exactOptional(),
    hideBreadCrumbNav: z.boolean().exactOptional(),
    hideContinueBooking: z.boolean().nullable().exactOptional(),
    hideLocationNav: z.boolean().nullable().exactOptional(),
    hideNavBar: z.boolean().nullable().exactOptional(),
    hideServiceGroupsNav: z.boolean().nullable().exactOptional(),
    hideServicesNav: z.boolean().nullable().exactOptional(),
    id: z.int32().exactOptional(),
    lateCancelAction: z.int32().exactOptional(),
    lateCancelHours: z.int32().exactOptional(),
    lateRescheduleAction: z.int32().exactOptional(),
    lateRescheduleHours: z.int32().exactOptional(),
    liveMode: z.boolean().nullable().exactOptional(),
    locationId: z.string().nullable().exactOptional(),
    object: z.string().nullable().exactOptional(),
    resourceAnyLabel: z.string().nullable().exactOptional(),
    resourceLabel: z.string().nullable().exactOptional(),
    resourceSelection: z.boolean().exactOptional(),
    returnToAvailability: z.boolean().exactOptional(),
    returnToService: z.boolean().exactOptional(),
    serviceLabel: z.string().nullable().exactOptional(),
    showBusinessLogo: z.boolean().exactOptional(),
    showOnSchedLogo: z.boolean().exactOptional(),
    showServiceGroups: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OnlineSettingsViewModel')

const TravelViewModelSchema = z
  .strictObject({
    distance: z.string().nullable().exactOptional(),
    proximity: z.string().nullable().exactOptional(),
    startAddress: z.string().nullable().exactOptional(),
    startLat: z.string().nullable().exactOptional(),
    startLon: z.string().nullable().exactOptional(),
    units: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TravelViewModel')

const LocationViewModelSchema = z
  .strictObject({
    address: AddressViewModelSchema.exactOptional(),
    adminEmail: z.string().nullable().exactOptional(),
    adminName: z.string().nullable().exactOptional(),
    appointmentReminders: AppointmentReminderViewModelSchema.exactOptional(),
    businessHolidays: z.array(BusinessHolidayViewModelSchema).nullable().exactOptional(),
    businessHours: BusinessHoursViewModelSchema.exactOptional(),
    companyId: z.string().nullable().exactOptional(),
    companyName: z.string().nullable().exactOptional(),
    defaults: BusinessDefaultsViewModelSchema.exactOptional(),
    email: z.string().nullable().exactOptional(),
    fax: z.string().nullable().exactOptional(),
    friendlyId: z.string().nullable().exactOptional(),
    id: z.string().nullable().exactOptional(),
    imageUrl: z.string().nullable().exactOptional(),
    latitude: z.float64().exactOptional(),
    logo: z.string().nullable().exactOptional(),
    longitude: z.float64().exactOptional(),
    name: z.string().nullable().exactOptional(),
    object: z.string().nullable().exactOptional(),
    phone: z.string().nullable().exactOptional(),
    primaryBusiness: z.boolean().exactOptional(),
    primaryCalendarId: z.string().nullable().exactOptional(),
    regionId: z.string().nullable().exactOptional(),
    services: z.array(BusinessServiceViewModelSchema).nullable().exactOptional(),
    settings: OnlineSettingsViewModelSchema.exactOptional(),
    timezoneIana: z.string().nullable().exactOptional(),
    timezoneId: z.string().nullable().exactOptional(),
    timezoneOffset: z.int32().nullable().exactOptional(),
    travel: TravelViewModelSchema.exactOptional(),
    website: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LocationViewModel')

const LocationListViewModelSchema = z
  .strictObject({
    count: z.int32().exactOptional(),
    data: z.array(LocationViewModelSchema).nullable().exactOptional(),
    hasMore: z.boolean().exactOptional(),
    object: z.string().nullable().exactOptional(),
    total: z.int32().exactOptional(),
    url: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LocationListViewModel')

const OnlineSettingsUpdateModelSchema = z
  .strictObject({
    bookAheadUnit: z.int32().nullable().exactOptional(),
    bookAheadValue: z.int32().nullable().exactOptional(),
    bookInAdvance: z.int32().nullable().exactOptional(),
    bookingTimerMins: z.int32().nullable().exactOptional(),
    customerBookingsPerDay: z.int32().nullable().exactOptional(),
    enableWorldTimezones: z.boolean().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OnlineSettingsUpdateModel')

const LocationUpdateModelSchema = z
  .strictObject({
    address: AddressUpdateModelSchema.exactOptional(),
    adminEmail: z.string().nullable().exactOptional(),
    adminName: z.string().nullable().exactOptional(),
    appointmentReminders: AppointmentRemindersInputModelSchema.exactOptional(),
    businessHours: BusinessHoursUpdateModelSchema.exactOptional(),
    defaults: BusinessDefaultsUpdateModelSchema.exactOptional(),
    email: z.string().nullable().exactOptional(),
    fax: z.string().nullable().exactOptional(),
    friendlyId: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    phone: z.string().nullable().exactOptional(),
    regionId: z.string().nullable().exactOptional(),
    settings: OnlineSettingsUpdateModelSchema.exactOptional(),
    timezoneName: z.string().nullable().exactOptional(),
    website: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LocationUpdateModel')

const LocationsInputModelSchema = z
  .strictObject({ locations: z.array(LocationInputModelSchema).nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('LocationsInputModel')

const MasterEmailTemplateSettingsViewModelSchema = z
  .strictObject({
    centerEmailContent: z.boolean().exactOptional(),
    centerEmailContentPanel: z.boolean().exactOptional(),
    centerEmailFooter: z.boolean().exactOptional(),
    contentBackgroundColor: z.string().nullable().exactOptional(),
    contentColor: z.string().nullable().exactOptional(),
    contentLinkColor: z.string().nullable().exactOptional(),
    emailBackgroundColor: z.string().nullable().exactOptional(),
    emailColor: z.string().nullable().exactOptional(),
    emailLinkColor: z.string().nullable().exactOptional(),
    footerFontSize: z.string().nullable().exactOptional(),
    footerLogoHeight: z.string().nullable().exactOptional(),
    footerLogoPadding: z.string().nullable().exactOptional(),
    footerPanelEmailContact: z.boolean().exactOptional(),
    footerPanelPhoneContact: z.boolean().exactOptional(),
    footerPanelWebsiteContact: z.boolean().exactOptional(),
    headerLogoHeight: z.string().nullable().exactOptional(),
    headerLogoPadding: z.string().nullable().exactOptional(),
    panelBackgroundColor: z.string().nullable().exactOptional(),
    panelColor: z.string().nullable().exactOptional(),
    panelLinkColor: z.string().nullable().exactOptional(),
    privacyPolicyLink: z.string().nullable().exactOptional(),
    showContentPanel: z.boolean().exactOptional(),
    showFooterLogo: z.boolean().exactOptional(),
    showFooterPanel: z.boolean().exactOptional(),
    showHeaderLogo: z.boolean().exactOptional(),
    showHeaderPanel: z.boolean().exactOptional(),
    version: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MasterEmailTemplateSettingsViewModel')

const MasterTemplateSettingsInputModelSchema = z
  .strictObject({
    centerEmailContent: z.boolean().nullable().exactOptional(),
    centerEmailContentPanel: z.boolean().nullable().exactOptional(),
    centerEmailFooter: z.boolean().nullable().exactOptional(),
    contentBackgroundColor: z.string().nullable().exactOptional(),
    contentColor: z.string().nullable().exactOptional(),
    contentLinkColor: z.string().nullable().exactOptional(),
    emailBackgroundColor: z.string().nullable().exactOptional(),
    emailColor: z.string().nullable().exactOptional(),
    emailLinkColor: z.string().nullable().exactOptional(),
    footerFontSize: z.string().nullable().exactOptional(),
    footerLogoHeight: z.string().nullable().exactOptional(),
    footerLogoPadding: z.string().nullable().exactOptional(),
    footerPanelEmailContact: z.boolean().nullable().exactOptional(),
    footerPanelPhoneContact: z.boolean().nullable().exactOptional(),
    footerPanelWebsiteContact: z.boolean().nullable().exactOptional(),
    headerLogoHeight: z.string().nullable().exactOptional(),
    headerLogoPadding: z.string().nullable().exactOptional(),
    panelBackgroundColor: z.string().nullable().exactOptional(),
    panelColor: z.string().nullable().exactOptional(),
    panelLinkColor: z.string().nullable().exactOptional(),
    privacyPolicyLink: z.string().nullable().exactOptional(),
    showContentPanel: z.boolean().nullable().exactOptional(),
    showFooterLogo: z.boolean().nullable().exactOptional(),
    showFooterPanel: z.boolean().nullable().exactOptional(),
    showHeaderLogo: z.boolean().nullable().exactOptional(),
    showHeaderPanel: z.boolean().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MasterTemplateSettingsInputModel')

const PhoneViewModelSchema = z
  .strictObject({
    businessPhone: z.string().nullable().exactOptional(),
    businessPhoneExt: z.string().nullable().exactOptional(),
    homePhone: z.string().nullable().exactOptional(),
    mobilePhone: z.string().nullable().exactOptional(),
    phoneType: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PhoneViewModel')

const RegionInputModelSchema = z
  .strictObject({ name: z.string().nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('RegionInputModel')

const RegionViewModelSchema = z
  .strictObject({
    id: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    object: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RegionViewModel')

const RegionListViewModelSchema = z
  .strictObject({
    count: z.int32().exactOptional(),
    data: z.array(RegionViewModelSchema).nullable().exactOptional(),
    hasMore: z.boolean().exactOptional(),
    object: z.string().nullable().exactOptional(),
    total: z.int32().exactOptional(),
    url: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RegionListViewModel')

const RegionUpdateModelSchema = z
  .strictObject({ name: z.string().nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('RegionUpdateModel')

const RepeatUpdateModelSchema = z
  .strictObject({
    frequency: z.string().nullable().exactOptional(),
    interval: z.int32().nullable().exactOptional(),
    monthDay: z.int32().nullable().exactOptional(),
    monthType: z.string().nullable().exactOptional(),
    weekdays: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RepeatUpdateModel')

const ResourceAllocationInputModelSchema = z
  .strictObject({
    endDate: z.iso.date().nullable().exactOptional(),
    endTime: z.int32().nullable().exactOptional(),
    reason: z.string().nullable().exactOptional(),
    repeat: RepeatInputModelSchema.exactOptional(),
    repeats: z.boolean().nullable().exactOptional(),
    startDate: z.iso.date().nullable().exactOptional(),
    startTime: z.int32().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResourceAllocationInputModel')

const ResourceAllocationViewModelSchema = z
  .strictObject({
    businessId: z.int32().exactOptional(),
    deletedStatus: z.boolean().exactOptional(),
    deletedTime: z.string().nullable().exactOptional(),
    endDate: z.string().nullable().exactOptional(),
    endTime: z.int32().exactOptional(),
    id: z.int32().exactOptional(),
    object: z.string().nullable().exactOptional(),
    reason: z.string().nullable().exactOptional(),
    repeat: RepeatViewModelSchema.exactOptional(),
    repeats: z.boolean().exactOptional(),
    resourceId: z.int32().exactOptional(),
    startDate: z.string().nullable().exactOptional(),
    startTime: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResourceAllocationViewModel')

const ResourceAllocationListViewModelSchema = z
  .strictObject({
    count: z.int32().exactOptional(),
    data: z.array(ResourceAllocationViewModelSchema).nullable().exactOptional(),
    hasMore: z.boolean().exactOptional(),
    object: z.string().nullable().exactOptional(),
    total: z.int32().exactOptional(),
    url: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResourceAllocationListViewModel')

const ResourceAllocationUpdateModelSchema = z
  .strictObject({
    endDate: z.iso.date().nullable().exactOptional(),
    endTime: z.int32().nullable().exactOptional(),
    reason: z.string().nullable().exactOptional(),
    repeat: RepeatInputModelSchema.exactOptional(),
    repeats: z.boolean().nullable().exactOptional(),
    startDate: z.iso.date().nullable().exactOptional(),
    startTime: z.int32().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResourceAllocationUpdateModel')

const ResourceAvailabilityViewModelSchema = z
  .strictObject({
    businessId: z.int32().exactOptional(),
    ignoreBusinessHours: z.boolean().exactOptional(),
    resourceId: z.int32().exactOptional(),
    resourceName: z.string().nullable().exactOptional(),
    resourceTzo: z.int32().exactOptional(),
    weekdays: AvailabilityViewModel2Schema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResourceAvailabilityViewModel')

const ResourceBlockInputModelSchema = z
  .strictObject({
    allDay: z.boolean().nullable().exactOptional(),
    endDate: z.iso.date().nullable().exactOptional(),
    endTime: z.int32().nullable().exactOptional(),
    reason: z.string().nullable().exactOptional(),
    repeat: RepeatInputModelSchema.exactOptional(),
    repeats: z.boolean().nullable().exactOptional(),
    startDate: z.iso.date().nullable().exactOptional(),
    startTime: z.int32().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResourceBlockInputModel')

const ResourceBlockViewModelSchema = z
  .strictObject({
    businessId: z.int32().exactOptional(),
    deletedStatus: z.boolean().exactOptional(),
    deletedTime: z.string().nullable().exactOptional(),
    endDate: z.string().nullable().exactOptional(),
    endTime: z.int32().exactOptional(),
    id: z.int32().exactOptional(),
    object: z.string().nullable().exactOptional(),
    reason: z.string().nullable().exactOptional(),
    repeat: RepeatViewModelSchema.exactOptional(),
    repeats: z.boolean().exactOptional(),
    resourceId: z.int32().exactOptional(),
    startDate: z.string().nullable().exactOptional(),
    startTime: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResourceBlockViewModel')

const ResourceBlockListViewModelSchema = z
  .strictObject({
    count: z.int32().exactOptional(),
    data: z.array(ResourceBlockViewModelSchema).nullable().exactOptional(),
    hasMore: z.boolean().exactOptional(),
    object: z.string().nullable().exactOptional(),
    total: z.int32().exactOptional(),
    url: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResourceBlockListViewModel')

const ResourceBlockUpdateModelSchema = z
  .strictObject({
    allDay: z.boolean().nullable().exactOptional(),
    endDate: z.iso.date().nullable().exactOptional(),
    endTime: z.int32().nullable().exactOptional(),
    reason: z.string().nullable().exactOptional(),
    repeat: RepeatInputModelSchema.exactOptional(),
    repeats: z.boolean().nullable().exactOptional(),
    startDate: z.iso.date().nullable().exactOptional(),
    startTime: z.int32().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResourceBlockUpdateModel')

const ResourceOptionsUpdateModelSchema = z
  .strictObject({
    bioLink: z.string().nullable().exactOptional(),
    bookingNotification: z.int32().nullable().exactOptional(),
    calendarAvailability: z
      .int32()
      .nullable()
      .exactOptional()
      .openapi({
        description: '0 = OnSched Availability, 1 = Google Calendar, 2 = Outlook Calendar',
      }),
    displayColor: z.string().nullable().exactOptional(),
    effectiveDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    gender: z.string().nullable().exactOptional(),
    googleCalendarId: z.string().nullable().exactOptional(),
    hourly: z.float64().nullable().exactOptional(),
    ignoreBusinessHours: z.boolean().nullable().exactOptional(),
    notificationType: z
      .int32()
      .nullable()
      .exactOptional()
      .openapi({ description: '0 = None, 1=Online Bookings 2=All Bookings.' }),
    outlookCalendarId: z.string().nullable().exactOptional(),
    sortKey: z.int32().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResourceOptionsUpdateModel')

const ResourceBulkUpdateModelSchema = z
  .strictObject({
    address: AddressUpdateModelSchema.exactOptional(),
    availability: AvailabilityInputModelSchema.exactOptional(),
    contact: ContactUpdateModelSchema.exactOptional(),
    customFields: CustomFieldUpdateModelSchema.exactOptional(),
    description: z.string().nullable().exactOptional(),
    email: z.string().nullable().exactOptional(),
    groupId: z.string().nullable().exactOptional(),
    id: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    options: ResourceOptionsUpdateModelSchema.exactOptional(),
    recurringAvailability: z.boolean().nullable().exactOptional(),
    serviceIds: z.array(z.string()).nullable().exactOptional(),
    timezoneId: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResourceBulkUpdateModel')

const ResourceGroupInputModelSchema = z
  .strictObject({
    description: z.string().nullable().exactOptional(),
    email: z.string().nullable().exactOptional(),
    locationId: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResourceGroupInputModel')

const ResourceGroupViewModelSchema = z
  .strictObject({
    bookingNotification: z.int32().exactOptional(),
    deletedStatus: z.boolean().exactOptional(),
    deletedTime: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    description: z.string().nullable().exactOptional(),
    email: z.string().nullable().exactOptional(),
    id: z.string().nullable().exactOptional(),
    locationId: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    object: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResourceGroupViewModel')

const ResourceGroupListViewModelSchema = z
  .strictObject({
    count: z.int32().exactOptional(),
    data: z.array(ResourceGroupViewModelSchema).nullable().exactOptional(),
    hasMore: z.boolean().exactOptional(),
    object: z.string().nullable().exactOptional(),
    total: z.int32().exactOptional(),
    url: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResourceGroupListViewModel')

const ResourceGroupUpdateModelSchema = z
  .strictObject({
    description: z.string().nullable().exactOptional(),
    email: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResourceGroupUpdateModel')

const ResourceHourViewModelSchema = z
  .strictObject({ endTime: z.int32().exactOptional(), startTime: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('ResourceHourViewModel')

const ResourceHoursViewModelSchema = z
  .strictObject({
    fri: ResourceHourViewModelSchema.exactOptional(),
    mon: ResourceHourViewModelSchema.exactOptional(),
    sat: ResourceHourViewModelSchema.exactOptional(),
    sun: ResourceHourViewModelSchema.exactOptional(),
    thu: ResourceHourViewModelSchema.exactOptional(),
    tue: ResourceHourViewModelSchema.exactOptional(),
    wed: ResourceHourViewModelSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResourceHoursViewModel')

const ResourceImageInputModelSchema = z
  .strictObject({
    imageFileData: z.string().nullable().exactOptional(),
    imageFileName: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResourceImageInputModel')

const ResourceOptionsInputModelSchema = z
  .strictObject({
    bioLink: z.string().nullable().exactOptional(),
    bookingNotification: z.int32().nullable().exactOptional(),
    calendarAvailability: z
      .int32()
      .nullable()
      .exactOptional()
      .openapi({
        description: '0 = OnSched Availability, 1 = Google Calendar, 2 = Outlook Calendar',
      }),
    displayColor: z.string().nullable().exactOptional(),
    effectiveDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    gender: z.string().nullable().exactOptional(),
    googleCalendarId: z.string().nullable().exactOptional(),
    hourly: z.float64().nullable().exactOptional(),
    ignoreBusinessHours: z.boolean().nullable().exactOptional(),
    notificationType: z
      .int32()
      .nullable()
      .exactOptional()
      .openapi({ description: '0 = None, 1=Online Bookings 2=All Bookings.' }),
    outlookCalendarId: z.string().nullable().exactOptional(),
    sortKey: z.int32().nullable().exactOptional(),
  })
  .openapi({ description: 'Options for the new resource', required: [] })
  .openapi('ResourceOptionsInputModel')

const ResourceInputModelSchema = z
  .strictObject({
    address: AddressInputModelSchema.exactOptional(),
    availability: AvailabilityInputModelSchema.exactOptional(),
    contact: ContactInputModelSchema.exactOptional(),
    customFields: CustomFieldInputModelSchema.exactOptional(),
    description: z.string().nullable().exactOptional(),
    email: z.string().nullable().exactOptional(),
    groupId: z.string().nullable().exactOptional(),
    locationId: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    options: ResourceOptionsInputModelSchema.exactOptional(),
    recurringAvailability: z.boolean().nullable().exactOptional(),
    serviceIds: z.array(z.string()).nullable().exactOptional(),
    timezoneId: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResourceInputModel')

const ResourceServiceViewModelSchema = z
  .strictObject({
    object: z.string().nullable().exactOptional(),
    serviceId: z.int32().exactOptional(),
    serviceName: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResourceServiceViewModel')

const ResourceViewModelSchema = z
  .strictObject({
    address: AddressViewModelSchema.exactOptional(),
    availability: ResourceHoursViewModelSchema.exactOptional(),
    bioLink: z.string().nullable().exactOptional(),
    bookingNotification: z.int32().exactOptional(),
    calendarAvailability: z.int32().exactOptional(),
    contact: ContactViewModelSchema.exactOptional(),
    customFields: CustomFieldInputModelSchema.exactOptional(),
    deletedStatus: z.boolean().exactOptional(),
    deletedTime: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    description: z.string().nullable().exactOptional(),
    effectiveDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    email: z.string().nullable().exactOptional(),
    gender: z.string().nullable().exactOptional(),
    googleCalendarAuthUrl: z.string().nullable().exactOptional(),
    googleCalendarAuthorized: z.boolean().exactOptional(),
    googleCalendarId: z.string().nullable().exactOptional(),
    groupId: z.int32().nullable().exactOptional(),
    hourly: z.float64().nullable().exactOptional(),
    id: z.string().nullable().exactOptional(),
    ignoreBusinessHours: z.boolean().exactOptional(),
    imageUrl: z.string().nullable().exactOptional(),
    locationId: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    notificationType: z.int32().exactOptional(),
    object: z.string().nullable().exactOptional(),
    options: ResourceOptionsInputModelSchema.exactOptional(),
    outlookCalendarAuthUrl: z.string().nullable().exactOptional(),
    outlookCalendarAuthorized: z.boolean().exactOptional(),
    outlookCalendarId: z.string().nullable().exactOptional(),
    phone: PhoneViewModelSchema.exactOptional(),
    recurringAvailability: z.boolean().nullable().exactOptional(),
    services: z.array(ResourceServiceViewModelSchema).nullable().exactOptional(),
    skypeName: z.string().nullable().exactOptional(),
    sortKey: z.int32().exactOptional(),
    timezoneIana: z.string().nullable().exactOptional(),
    timezoneId: z.string().nullable().exactOptional(),
    timezoneOffset: z.int32().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResourceViewModel')

const ResourceListViewModelSchema = z
  .strictObject({
    count: z.int32().exactOptional(),
    data: z.array(ResourceViewModelSchema).nullable().exactOptional(),
    hasMore: z.boolean().exactOptional(),
    object: z.string().nullable().exactOptional(),
    total: z.int32().exactOptional(),
    url: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResourceListViewModel')

const ResourceUpdateModelSchema = z
  .strictObject({
    address: AddressUpdateModelSchema.exactOptional(),
    availability: AvailabilityInputModelSchema.exactOptional(),
    contact: ContactUpdateModelSchema.exactOptional(),
    customFields: CustomFieldUpdateModelSchema.exactOptional(),
    description: z.string().nullable().exactOptional(),
    email: z.string().nullable().exactOptional(),
    groupId: z.string().nullable().exactOptional(),
    locationId: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    options: ResourceOptionsUpdateModelSchema.exactOptional(),
    recurringAvailability: z.boolean().nullable().exactOptional(),
    serviceIds: z.array(z.string()).nullable().exactOptional(),
    timezoneId: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResourceUpdateModel')

const ResourcesInputModelSchema = z
  .strictObject({ resources: z.array(ResourceInputModelSchema).nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('ResourcesInputModel')

const ResourcesUpdateModelSchema = z
  .strictObject({ resources: z.array(ResourceBulkUpdateModelSchema).nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('ResourcesUpdateModel')

const ScheduleInputModelSchema = z
  .strictObject({
    availability: AvailabilityInputModelSchema.exactOptional(),
    bookingsPerSlot: z.int32().exactOptional(),
    interval: z.int32().exactOptional(),
    locationId: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    resourceGroupId: z.string().nullable().exactOptional(),
    type: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ScheduleInputModel')

const ScheduleViewModelSchema = z
  .strictObject({
    availability: CalendarHoursViewModelSchema.exactOptional(),
    bookingsPerSlot: z.int32().exactOptional(),
    deletedStatus: z.boolean().exactOptional(),
    deletedTime: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    id: z.string().nullable().exactOptional(),
    interval: z.int32().exactOptional(),
    locationId: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    object: z.string().nullable().exactOptional(),
    primary: z.boolean().exactOptional(),
    resourceGroupId: z.string().nullable().exactOptional(),
    type: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ScheduleViewModel')

const ScheduleListViewModelSchema = z
  .strictObject({
    count: z.int32().exactOptional(),
    data: z.array(ScheduleViewModelSchema).nullable().exactOptional(),
    hasMore: z.boolean().exactOptional(),
    object: z.string().nullable().exactOptional(),
    total: z.int32().exactOptional(),
    url: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ScheduleListViewModel')

const ScheduleUpdateModelSchema = z
  .strictObject({
    availability: AvailabilityInputModelSchema.exactOptional(),
    bookingsPerSlot: z.int32().exactOptional(),
    interval: z.int32().exactOptional(),
    locationId: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    resourceGroupId: z.string().nullable().exactOptional(),
    type: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ScheduleUpdateModel')

const ServiceAllocationInputModelSchema = z
  .strictObject({
    bookingLimit: z.int32().exactOptional(),
    endDate: z.iso.date().nullable().exactOptional(),
    endTime: z.int32().nullable().exactOptional(),
    locationId: z.string().nullable().exactOptional(),
    reason: z.string().nullable().exactOptional(),
    repeat: RepeatInputModelSchema.exactOptional(),
    repeats: z.boolean().nullable().exactOptional(),
    resourceId: z.string().nullable().exactOptional(),
    startDate: z.iso.date().nullable().exactOptional(),
    startTime: z.int32().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ServiceAllocationInputModel')

const ServiceAllocationViewModelSchema = z
  .strictObject({
    bookingCount: z.int32().exactOptional(),
    bookingLimit: z.int32().exactOptional(),
    deletedStatus: z.boolean().exactOptional(),
    deletedTime: z.string().nullable().exactOptional(),
    endDate: z.string().nullable().exactOptional(),
    endTime: z.int32().exactOptional(),
    id: z.string().nullable().exactOptional(),
    locationId: z.string().nullable().exactOptional(),
    object: z.string().nullable().exactOptional(),
    reason: z.string().nullable().exactOptional(),
    repeat: RepeatViewModelSchema.exactOptional(),
    repeats: z.boolean().exactOptional(),
    resourceAddress: AddressViewModelSchema.exactOptional(),
    resourceDescription: z.string().nullable().exactOptional(),
    resourceId: z.string().nullable().exactOptional(),
    resourceImageUrl: z.string().nullable().exactOptional(),
    resourceName: z.string().nullable().exactOptional(),
    resourcePhone: PhoneViewModelSchema.exactOptional(),
    serviceDescription: z.string().nullable().exactOptional(),
    serviceDuration: z.int32().exactOptional(),
    serviceId: z.string().nullable().exactOptional(),
    serviceImageUrl: z.string().nullable().exactOptional(),
    serviceName: z.string().nullable().exactOptional(),
    startDate: z.string().nullable().exactOptional(),
    startTime: z.int32().exactOptional(),
    timezoneName: z.string().nullable().exactOptional(),
    timezoneOffset: z.int32().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ServiceAllocationViewModel')

const ServiceAllocationListViewModelSchema = z
  .strictObject({
    count: z.int32().exactOptional(),
    data: z.array(ServiceAllocationViewModelSchema).nullable().exactOptional(),
    hasMore: z.boolean().exactOptional(),
    object: z.string().nullable().exactOptional(),
    total: z.int32().exactOptional(),
    url: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ServiceAllocationListViewModel')

const ServiceAllocationUpdateModelSchema = z
  .strictObject({
    bookingLimit: z.int32().exactOptional(),
    endDate: z.iso.date().nullable().exactOptional(),
    endTime: z.int32().nullable().exactOptional(),
    locationId: z.string().nullable().exactOptional(),
    reason: z.string().nullable().exactOptional(),
    repeat: RepeatInputModelSchema.exactOptional(),
    repeats: z.boolean().nullable().exactOptional(),
    resourceId: z.string().nullable().exactOptional(),
    startDate: z.iso.date().nullable().exactOptional(),
    startTime: z.int32().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ServiceAllocationUpdateModel')

const ServiceAllocationsInputModelSchema = z
  .strictObject({
    serviceAllocations: z.array(ServiceAllocationInputModelSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ServiceAllocationsInputModel')

const ServiceAvailabilityViewModelSchema = z
  .strictObject({
    ignoreBusinessHours: z.boolean().exactOptional(),
    serviceId: z.int32().exactOptional(),
    serviceName: z.string().nullable().exactOptional(),
    weekdays: AvailabilityViewModel2Schema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ServiceAvailabilityViewModel')

const ServiceBlockInputModelSchema = z
  .strictObject({
    endDate: z.iso.date().nullable().exactOptional(),
    endTime: z.int32().nullable().exactOptional(),
    locationId: z.string().nullable().exactOptional(),
    reason: z.string().nullable().exactOptional(),
    repeat: RepeatInputModelSchema.exactOptional(),
    repeats: z.boolean().exactOptional(),
    startDate: z.iso.date().nullable().exactOptional(),
    startTime: z.int32().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ServiceBlockInputModel')

const ServiceBlockViewModelSchema = z
  .strictObject({
    deletedStatus: z.boolean().exactOptional(),
    deletedTime: z.string().nullable().exactOptional(),
    endDate: z.string().nullable().exactOptional(),
    endTime: z.int32().exactOptional(),
    id: z.string().nullable().exactOptional(),
    locationId: z.string().nullable().exactOptional(),
    object: z.string().nullable().exactOptional(),
    reason: z.string().nullable().exactOptional(),
    repeat: RepeatViewModelSchema.exactOptional(),
    repeats: z.boolean().exactOptional(),
    serviceId: z.string().nullable().exactOptional(),
    startDate: z.string().nullable().exactOptional(),
    startTime: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ServiceBlockViewModel')

const ServiceBlockListViewModelSchema = z
  .strictObject({
    count: z.int32().exactOptional(),
    data: z.array(ServiceBlockViewModelSchema).nullable().exactOptional(),
    hasMore: z.boolean().exactOptional(),
    object: z.string().nullable().exactOptional(),
    total: z.int32().exactOptional(),
    url: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ServiceBlockListViewModel')

const ServiceBlockUpdateModelSchema = z
  .strictObject({
    endDate: z.iso.date().nullable().exactOptional(),
    endTime: z.int32().nullable().exactOptional(),
    reason: z.string().nullable().exactOptional(),
    repeat: RepeatUpdateModelSchema.exactOptional(),
    repeats: z.boolean().nullable().exactOptional(),
    startDate: z.iso.date().nullable().exactOptional(),
    startTime: z.int32().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ServiceBlockUpdateModel')

const ServiceCalendarInputModelSchema = z
  .strictObject({
    calendarId: z.string().nullable().exactOptional(),
    locationId: z.string().nullable().exactOptional(),
    serviceId: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ServiceCalendarInputModel')

const ServiceCalendarViewModelSchema = z
  .strictObject({
    calendarId: z.string().nullable().exactOptional(),
    calendarName: z.string().nullable().exactOptional(),
    id: z.string().nullable().exactOptional(),
    locationId: z.string().nullable().exactOptional(),
    serviceId: z.string().nullable().exactOptional(),
    serviceName: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ServiceCalendarViewModel')

const ServiceFeesInputModelSchema = z
  .strictObject({
    cancellationFeeAmount: z.float64().exactOptional(),
    cancellationFeeTaxable: z.boolean().exactOptional(),
    feeAmount: z.float64().exactOptional(),
    feeTaxable: z.boolean().exactOptional(),
    nonRefundable: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ServiceFeesInputModel')

const ServiceFeesUpdateModelSchema = z
  .strictObject({
    cancellationFeeAmount: z.float64().nullable().exactOptional(),
    cancellationFeeTaxable: z.boolean().nullable().exactOptional(),
    feeAmount: z.float64().nullable().exactOptional(),
    feeTaxable: z.boolean().nullable().exactOptional(),
    nonRefundable: z.boolean().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ServiceFeesUpdateModel')

const ServiceGroupInputModelSchema = z
  .strictObject({
    description: z.string().nullable().exactOptional(),
    locationId: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    type: z.int32().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ServiceGroupInputModel')

const ServiceGroupViewModelSchema = z
  .strictObject({
    companyId: z.string().nullable().exactOptional(),
    description: z.string().nullable().exactOptional(),
    id: z.string().nullable().exactOptional(),
    imageUrl: z.string().nullable().exactOptional(),
    isDeleted: z.boolean().exactOptional(),
    locationId: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    object: z.string().nullable().exactOptional(),
    type: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ServiceGroupViewModel')

const ServiceGroupListViewModelSchema = z
  .strictObject({
    count: z.int32().exactOptional(),
    data: z.array(ServiceGroupViewModelSchema).nullable().exactOptional(),
    hasMore: z.boolean().exactOptional(),
    object: z.string().nullable().exactOptional(),
    total: z.int32().exactOptional(),
    url: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ServiceGroupListViewModel')

const ServiceHourViewModelSchema = z
  .strictObject({ endTime: z.int32().exactOptional(), startTime: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('ServiceHourViewModel')

const ServiceHoursViewModelSchema = z
  .strictObject({
    fri: ServiceHourViewModelSchema.exactOptional(),
    mon: ServiceHourViewModelSchema.exactOptional(),
    sat: ServiceHourViewModelSchema.exactOptional(),
    sun: ServiceHourViewModelSchema.exactOptional(),
    thu: ServiceHourViewModelSchema.exactOptional(),
    tue: ServiceHourViewModelSchema.exactOptional(),
    wed: ServiceHourViewModelSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ServiceHoursViewModel')

const ServiceImageInputModelSchema = z
  .strictObject({
    imageFileData: z.string().nullable().exactOptional(),
    imageFileName: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ServiceImageInputModel')

const ServiceOptionsInputModelSchema = z
  .strictObject({
    consumerPadding: z.boolean().nullable().exactOptional(),
    defaultService: z.boolean().nullable().exactOptional(),
    durationInterval: z.int32().nullable().exactOptional(),
    durationMax: z.int32().nullable().exactOptional(),
    durationMin: z.int32().nullable().exactOptional(),
    durationSelect: z.boolean().nullable().exactOptional(),
    padding: z.int32().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ServiceOptionsInputModel')

const ServiceSettingsInputModelSchema = z
  .strictObject({
    bookAheadUnit: z.int32().nullable().exactOptional(),
    bookAheadValue: z.int32().nullable().exactOptional(),
    bookInAdvance: z.int32().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ServiceSettingsInputModel')

const ServiceInputModelSchema = z
  .strictObject({
    availability: AvailabilityInputModelSchema.exactOptional(),
    bookingInterval: z.int32().exactOptional(),
    bookingLimit: z.int32().exactOptional(),
    customFields: CustomFieldInputModelSchema.exactOptional(),
    description: z.string().nullable().exactOptional(),
    duration: z.int32().exactOptional(),
    fees: ServiceFeesInputModelSchema.exactOptional(),
    locationId: z.string().nullable().exactOptional(),
    maxCapacity: z.int32().exactOptional(),
    maxGroupSize: z.int32().exactOptional(),
    mediaPageUrl: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    options: ServiceOptionsInputModelSchema.exactOptional(),
    public: z.boolean().exactOptional(),
    serviceGroupId: z.string().nullable().exactOptional(),
    settings: ServiceSettingsInputModelSchema.exactOptional(),
    type: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ServiceInputModel')

const ServiceViewModelSchema = z
  .strictObject({
    availability: ServiceHoursViewModelSchema.exactOptional(),
    bookAheadUnit: z.int32().exactOptional(),
    bookAheadValue: z.int32().exactOptional(),
    bookInAdvance: z.int32().exactOptional(),
    bookingInterval: z.int32().exactOptional(),
    bookingLimit: z.int32().exactOptional(),
    calendarId: z.string().nullable().exactOptional(),
    calendarResourceGroupId: z.string().nullable().exactOptional(),
    cancellationFeeAmount: z.float64().exactOptional(),
    cancellationFeeTaxable: z.boolean().exactOptional(),
    companyId: z.string().nullable().exactOptional(),
    consumerPadding: z.boolean().exactOptional(),
    customFields: CustomFieldInputModelSchema.exactOptional(),
    dailyBookingLimitCount: z.int32().exactOptional(),
    dailyBookingLimitMinutes: z.int32().exactOptional(),
    defaultService: z.boolean().exactOptional(),
    description: z.string().nullable().exactOptional(),
    duration: z.int32().exactOptional(),
    durationInterval: z.int32().exactOptional(),
    durationMax: z.int32().exactOptional(),
    durationMin: z.int32().exactOptional(),
    durationSelect: z.boolean().exactOptional(),
    feeAmount: z.float64().exactOptional(),
    feeTaxable: z.boolean().exactOptional(),
    id: z.string().nullable().exactOptional(),
    imageUrl: z.string().nullable().exactOptional(),
    locationId: z.string().nullable().exactOptional(),
    maxBookingLimit: z.int32().exactOptional(),
    maxCapacity: z.int32().exactOptional(),
    maxGroupSize: z.int32().exactOptional(),
    maxResourceBookingLimit: z.int32().exactOptional(),
    mediaPageUrl: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    nonRefundable: z.boolean().exactOptional(),
    object: z.string().nullable().exactOptional(),
    padding: z.int32().exactOptional(),
    roundRobin: z.int32().exactOptional(),
    serviceGroupId: z.int32().nullable().exactOptional(),
    serviceGroupName: z.string().nullable().exactOptional(),
    showOnline: z.boolean().exactOptional(),
    type: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ServiceViewModel')

const ServiceListViewModelSchema = z
  .strictObject({
    count: z.int32().exactOptional(),
    data: z.array(ServiceViewModelSchema).nullable().exactOptional(),
    hasMore: z.boolean().exactOptional(),
    object: z.string().nullable().exactOptional(),
    total: z.int32().exactOptional(),
    url: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ServiceListViewModel')

const ServiceOptionsUpdateModelSchema = z
  .strictObject({
    consumerPadding: z.boolean().nullable().exactOptional(),
    defaultService: z.boolean().nullable().exactOptional(),
    durationInterval: z.int32().nullable().exactOptional(),
    durationMax: z.int32().nullable().exactOptional(),
    durationMin: z.int32().nullable().exactOptional(),
    durationSelect: z.boolean().nullable().exactOptional(),
    padding: z.int32().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ServiceOptionsUpdateModel')

const ServiceSettingsUpdateModelSchema = z
  .strictObject({
    bookAheadUnit: z.int32().nullable().exactOptional(),
    bookAheadValue: z.int32().nullable().exactOptional(),
    bookInAdvance: z.int32().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ServiceSettingsUpdateModel')

const ServiceUpdateModelSchema = z
  .strictObject({
    availability: AvailabilityInputModelSchema.exactOptional(),
    bookingInterval: z.int32().nullable().exactOptional(),
    bookingLimit: z.int32().nullable().exactOptional(),
    customFields: CustomFieldUpdateModelSchema.exactOptional(),
    description: z.string().nullable().exactOptional(),
    duration: z.int32().nullable().exactOptional(),
    fees: ServiceFeesUpdateModelSchema.exactOptional(),
    locationId: z.string().nullable().exactOptional(),
    maxCapacity: z.int32().nullable().exactOptional(),
    maxGroupSize: z.int32().nullable().exactOptional(),
    mediaPageUrl: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    options: ServiceOptionsUpdateModelSchema.exactOptional(),
    public: z.boolean().nullable().exactOptional(),
    serviceGroupId: z.string().nullable().exactOptional(),
    settings: ServiceSettingsUpdateModelSchema.exactOptional(),
    type: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ServiceUpdateModel')

const SystemTimezoneViewModelSchema = z
  .strictObject({
    baseUtcOffset: z.int32().exactOptional(),
    daylightName: z.string().nullable().exactOptional(),
    displayName: z.string().nullable().exactOptional(),
    standardName: z.string().nullable().exactOptional(),
    supportsDaylightSavingTime: z.boolean().exactOptional(),
    timezoneIana: z.string().nullable().exactOptional(),
    timezoneId: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SystemTimezoneViewModel')

const TimezonesViewModelSchema = z
  .strictObject({
    name: z.string().nullable().exactOptional(),
    region: z.string().nullable().exactOptional(),
    timezoneIanna: z.string().nullable().exactOptional(),
    tzOffset: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TimezonesViewModel')

const TimezoneViewModelSchema = z
  .strictObject({
    object: z.string().nullable().exactOptional(),
    regions: z.array(z.string()).nullable().exactOptional(),
    timezones: z.array(TimezonesViewModelSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TimezoneViewModel')

const Oauth2SecurityScheme = {
  flows: {
    clientCredentials: {
      scopes: {
        OnSchedApi: 'Consumer and Setup Interface',
        distance: 'Travel and Distance calculations',
      },
      tokenUrl: 'https://sandbox-identity.onsched.com/connect/token',
    },
  },
  type: 'oauth2',
}

export const getSetupV1AppointmentsRoute = createRoute({
  method: 'get',
  path: '/setup/v1/appointments',
  tags: ['Appointments'],
  summary: 'List Appointments',
  description:
    '<p>Use this endpoint to return a <b>List of Appointments</b>. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further. For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a></p>',
  request: {
    query: z.object({
      locationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'id of business location, defaults to primary business location',
            in: 'query',
            name: 'locationId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter appointments by email address',
            in: 'query',
            name: 'email',
            schema: { type: 'string' },
            required: false,
          },
        }),
      lastname: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter appointments by lastname or part of',
            in: 'query',
            name: 'lastname',
            schema: { type: 'string' },
            required: false,
          },
        }),
      serviceId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter appointments by service',
            in: 'query',
            name: 'serviceId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      calendarId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter appointments by calendar',
            in: 'query',
            name: 'calendarId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      resourceId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter appointments by resource',
            in: 'query',
            name: 'resourceId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      customerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter appointments by customer',
            in: 'query',
            name: 'customerId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      serviceAllocationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter appointments by service allocation',
            in: 'query',
            name: 'serviceAllocationId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      startDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Format YYYY-MM-DD: Filter appointments by on/after startDate',
            in: 'query',
            name: 'startDate',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      endDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Format YYYY-MM-DD: Filter appointments on/before endDate',
            in: 'query',
            name: 'endDate',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter appointments by status: IN, BK, CN, RE, RS',
            in: 'query',
            name: 'status',
            schema: { type: 'string' },
            required: false,
          },
        }),
      bookedBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter appointments by user email who booked',
            in: 'query',
            name: 'bookedBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Starting row of page, default 0',
            in: 'query',
            name: 'offset',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Page limit default 20, max 100',
            in: 'query',
            name: 'limit',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AppointmentListViewModelSchema } },
    },
  },
})

export const getSetupV1AppointmentsIdRoute = createRoute({
  method: 'get',
  path: '/setup/v1/appointments/{id}',
  tags: ['Appointments'],
  summary: 'Get Appointment',
  description:
    "<p>Use this endpoint to return an <b>Appointment</b> object. A valid <b>appointment id</b> is required. Find appointment id's by using the <i>GET​/setup​/v1​/appointments</i> endpoint.</p>",
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of appointment object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AppointmentViewModelSchema } },
    },
  },
})

export const putSetupV1AppointmentsIdReassignResourceResourceIdRoute = createRoute({
  method: 'put',
  path: '/setup/v1/appointments/{id}/reassign/resource/{resourceId}',
  tags: ['Appointments'],
  summary: 'Reassign Appointment',
  description:
    "<p>Use this endpoint to <b>Reassign</b> an appointment from one resource to another. The result returned is a single appointment that was reassigned to the target resource. A valid <b>appointment id</b> and <b>resource id</b> is required. Find appointment id's by using the <i>GET /setup/v1/appointments</i> endpoint, find resource id's by using the <i>GET ​/setup​/v1​/resources</i> endpoint.</p>",
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of appointment object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      resourceId: z
        .string()
        .openapi({
          param: {
            description: 'id of target resource',
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AppointmentViewModelSchema } },
    },
  },
})

export const getSetupV1BusinessusersRoute = createRoute({
  method: 'get',
  path: '/setup/v1/businessusers',
  tags: ['BusinessUsers'],
  summary: 'List Users',
  description:
    '<p>Use this endpoint to return a <b>List of Business Users and their Roles</b>. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>',
  request: {
    query: z.object({
      locationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'id of business location, defaults to primary business location',
            in: 'query',
            name: 'locationId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by email address',
            in: 'query',
            name: 'email',
            schema: { type: 'string' },
            required: false,
          },
        }),
      role: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter user role',
            in: 'query',
            name: 'role',
            schema: { type: 'string' },
            required: false,
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Starting row of page, default 0',
            in: 'query',
            name: 'offset',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Page limit default 20, max 100',
            in: 'query',
            name: 'limit',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BusinessUserListViewModelSchema } },
    },
  },
})

export const postSetupV1BusinessusersRoute = createRoute({
  method: 'post',
  path: '/setup/v1/businessusers',
  tags: ['BusinessUsers'],
  summary: 'Create User',
  description:
    '<p>Use this endpoint to <b>Create</b> a Business User. If not specified, the business location defaults to the primary business location. </p>\r\n<p>Required fields: <b>Name</b>, <b>Email</b> and <b>Role</b><b>Note:</b> If the businessUser is a bookable resource (bizresource) then a resourceId is required.</p>\r\n<p>For role, use one of the values listed. <b>Business Roles Include: bizowner</b> (Business Owner), <b>bizadmin</b> (Business Administrator), <b>bizresource</b> (Business User - Bookable Resource).</p>\r\n<p>The <b>sendRegistrationInvite</b> parameter is available to API consumers for their own use. It provides no added functionality in OnSched.</p>',
  request: {
    body: {
      content: {
        'application/*+json': { schema: BusinessUserInputModelSchema },
        'application/json': { schema: BusinessUserInputModelSchema },
        'application/json-patch+json': { schema: BusinessUserInputModelSchema },
        'text/json': { schema: BusinessUserInputModelSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BusinessUserViewModelSchema } },
    },
  },
})

export const getSetupV1BusinessusersPermissionsRoute = createRoute({
  method: 'get',
  path: '/setup/v1/businessusers/permissions',
  tags: ['BusinessUsers'],
  summary: 'List User Permissions',
  description:
    '<p>Use this endpoint to return a <b>List of Business User Permissions by Role</b>. Results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>',
  request: {
    query: z.object({
      role: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter permissions by role',
            in: 'query',
            name: 'role',
            schema: { type: 'string' },
            required: false,
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Starting row of page, default 0',
            in: 'query',
            name: 'offset',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Page limit default 20, max 100',
            in: 'query',
            name: 'limit',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BusinessPermissionListViewModelSchema } },
    },
  },
})

export const getSetupV1BusinessusersEmailCompaniesRoute = createRoute({
  method: 'get',
  path: '/setup/v1/businessusers/{email}/companies',
  tags: ['BusinessUsers'],
  summary: 'List User Companies',
  description:
    '<p>Use this endpoint to return a <b>List of Companies</b> associated with the business users email requested. A business user <b>email</b> address is required. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>',
  request: {
    params: z.object({
      email: z
        .string()
        .openapi({
          param: {
            description: 'Email of business user',
            in: 'path',
            name: 'email',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      searchText: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'All or partial company name',
            in: 'query',
            name: 'searchText',
            schema: { type: 'string' },
            required: false,
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Starting row of page, default 0',
            in: 'query',
            name: 'offset',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Page limit default 20, max 100',
            in: 'query',
            name: 'limit',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AuthorizedCompanyListViewModelSchema } },
    },
  },
})

export const getSetupV1BusinessusersIdRoute = createRoute({
  method: 'get',
  path: '/setup/v1/businessusers/{id}',
  tags: ['BusinessUsers'],
  summary: 'Get User',
  description:
    "<p>Use this endpoint to return a <b>Business User</b> object. A valid <b>businessUser id</b> is required. Find businessUser id's using the <i>GET /setup/v1/businessusers</i> endpoint.</p>",
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of businessUser object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BusinessUserViewModelSchema } },
    },
  },
})

export const putSetupV1BusinessusersIdRoute = createRoute({
  method: 'put',
  path: '/setup/v1/businessusers/{id}',
  tags: ['BusinessUsers'],
  summary: 'Update User',
  description:
    '<p>Use this endpoint to <b>Update</b> a Business User. A valid <b>businessUser id</b> is required.</p>\r\n<p>\r\n  <b>Business Roles Include: bizowner</b> (Business Owner), <b>bizadmin</b> (Business Administrator), <b>bizresource</b> (Business User - Bookable Resource).</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    body: {
      content: {
        'application/*+json': { schema: BusinessUserUpdateModelSchema },
        'application/json': { schema: BusinessUserUpdateModelSchema },
        'application/json-patch+json': { schema: BusinessUserUpdateModelSchema },
        'text/json': { schema: BusinessUserUpdateModelSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BusinessUserViewModelSchema } },
    },
  },
})

export const deleteSetupV1BusinessusersIdRoute = createRoute({
  method: 'delete',
  path: '/setup/v1/businessusers/{id}',
  tags: ['BusinessUsers'],
  summary: 'Delete User',
  description:
    '<p>Use this endpoint to permanently <b>Delete</b> a Business User. A valid <b>businessUser id</b> is required.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getSetupV1CalendarsRoute = createRoute({
  method: 'get',
  path: '/setup/v1/calendars',
  tags: ['Calendars'],
  summary: 'List Calendars',
  description:
    '<p>Use this endpoint to return a <b>List of Calendars</b> from the requested location. If not specified, the business location defaults to the primary business location. </p>',
  request: {
    query: z.object({
      locationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'id of business location, defaults to primary business location',
            in: 'query',
            name: 'locationId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      deleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by deleted status',
            in: 'query',
            name: 'deleted',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Starting row of page, default 0',
            in: 'query',
            name: 'offset',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Page limit default 20, max 100',
            in: 'query',
            name: 'limit',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ScheduleListViewModelSchema } },
    },
  },
})

export const postSetupV1CalendarsRoute = createRoute({
  method: 'post',
  path: '/setup/v1/calendars',
  tags: ['Calendars'],
  summary: 'DEPRECATING: Create',
  description:
    '<p>\r\n  <b>DEPRECATING:</b> Create Calendar</p>\r\n<p>We are no longer supporting Multiple Calendar Functionality as it is part of our Legacy Application and has no relevance in the API.</p>',
  request: {
    body: {
      content: {
        'application/*+json': { schema: ScheduleInputModelSchema },
        'application/json': { schema: ScheduleInputModelSchema },
        'application/json-patch+json': { schema: ScheduleInputModelSchema },
        'text/json': { schema: ScheduleInputModelSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ScheduleViewModelSchema } },
    },
  },
})

export const putSetupV1CalendarsBlockIdRoute = createRoute({
  method: 'put',
  path: '/setup/v1/calendars/block/{id}',
  tags: ['Calendars'],
  summary: 'Update Calendar Block',
  description:
    '<p>Use this endpoint to <b>Create</b> a Calendar Block. A valid <b>calendarBlock id</b> is required. Refer to the <i>POST ​/setup​/v1​/calendars​/{id}​/block</i> endpoint for fieldnames and details.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of calendarBlock object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Resource Block input model',
      content: {
        'application/*+json': { schema: CalendarBlockUpdateModelSchema },
        'application/json': { schema: CalendarBlockUpdateModelSchema },
        'application/json-patch+json': { schema: CalendarBlockUpdateModelSchema },
        'text/json': { schema: CalendarBlockUpdateModelSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CalendarBlockViewModelSchema } },
    },
  },
})

export const deleteSetupV1CalendarsBlockIdRoute = createRoute({
  method: 'delete',
  path: '/setup/v1/calendars/block/{id}',
  tags: ['Calendars'],
  summary: 'Delete Calendar Block',
  description:
    '<p>Use this endpoint to permanently <b>Delete</b> a calendar block. A valid <b>calendarBlock id</b> is required.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of a calendarBlock object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CalendarBlockViewModelSchema } },
    },
  },
})

export const getSetupV1CalendarsBlocksIdRoute = createRoute({
  method: 'get',
  path: '/setup/v1/calendars/blocks/{id}',
  tags: ['Calendars'],
  summary: 'Get Calendar Block',
  description:
    '<p>Use this endpoint to return a <b>Calendar Block</b>. A valid <b>calendarBlock id</b> is required. </p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of calendarBlock object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CalendarBlockViewModelSchema } },
    },
  },
})

export const getSetupV1CalendarsIdRoute = createRoute({
  method: 'get',
  path: '/setup/v1/calendars/{id}',
  tags: ['Calendars'],
  summary: 'Get Calendar',
  description:
    '<p>Use this endpoint to return a <b>Calendar</b> object. A valid <b>calendar id</b> is required.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of calendar object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ScheduleViewModelSchema } },
    },
  },
})

export const putSetupV1CalendarsIdRoute = createRoute({
  method: 'put',
  path: '/setup/v1/calendars/{id}',
  tags: ['Calendars'],
  summary: 'Update Calendar',
  description:
    '<p>Use this endpoint to <b>Update</b> a calendar object. A valid <b>calendar id</b> is required. When your company was created a calendar object was automatically created with 24-hour weekly availability. Its <b>name = Main</b>, the <b>type = resource</b> and by default the <b>interval = 30 mins</b>. We are currently supporting resource calendar type. Other types were part of our Legacy Application and has no relevance in the API product.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of calendar object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Input model for the calendar object',
      content: {
        'application/*+json': { schema: ScheduleUpdateModelSchema },
        'application/json': { schema: ScheduleUpdateModelSchema },
        'application/json-patch+json': { schema: ScheduleUpdateModelSchema },
        'text/json': { schema: ScheduleUpdateModelSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ScheduleViewModelSchema } },
    },
  },
})

export const deleteSetupV1CalendarsIdRoute = createRoute({
  method: 'delete',
  path: '/setup/v1/calendars/{id}',
  tags: ['Calendars'],
  summary: 'Delete Calendar',
  description:
    '<p>Use this endpoint to <b>Delete</b> a calendar object. A valid <b>calendar id</b> is required. The calendar is not permanently deleted and can be recovered by using the <i>PUT ​/setup​/v1​/calendars​/{id}​/recover </i>endpoint.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of calendar object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ScheduleViewModelSchema } },
    },
  },
})

export const postSetupV1CalendarsIdBlockRoute = createRoute({
  method: 'post',
  path: '/setup/v1/calendars/{id}/block',
  tags: ['Calendars'],
  summary: 'Create Calendar Block',
  description:
    '<p>Use this endpoint to <b>Create</b> a Calendar Block. A valid <b>calendar id</b> is required.</p>\r\n<p>Required fields: <b>startDate, endDate, startTime, endTime</b> and <b>reason</b>.</p>\r\n<p>Calendar blocks can be set to specific time ranges or for the whole day. Th block a whole day set the startTime to 0 and endTime to 2400.</p>\r\n<p>Calendar blocks can be for a specific date range instance or set to repeat at a specified frequency.</p>\r\n<p>\r\n  <b>Repeat object: (repeats = true)</b>\r\n</p>\r\n<p>The <b>frequency</b> can be set to a value of <b>D, W or M</b> for <b>Day, Week</b> or <b>Month</b> respectively.</p>\r\n<p>Use the <b>interval</b> property to specify the interval that the block repeats. For example, an interval of 2 for a weekly block means that the block will repeat every 2nd week beginning at the day specified. A daily block with an interval of 10 means the block will repeat every 10 days. The interval property applies to all repeat frequencies. <b>If using the repeat functionality an interval value is required</b>.</p>\r\n<p>\r\n  <b>DAILY BLOCKS</b>: Will repeat for each day of the week for the date range specified for the interval specified.  An interval value of “1” repeats every day, and an interval value of “3” is every 3rd day.</p>\r\n<p>\r\n  <b>WEEKLY BLOCKS</b>: Will repeat only on the specified days of the week for the date range specified. For weekly the <b>frequency</b>  is required and should be set to <b>“W”</b>.  You must specify the <b>weekdays</b> parameter. Weekdays are expressed as a string of digits with each single digit in the string representing a day of the week. The possible values are <b>0,1,2,3,4,5,6</b> where <b>0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday</b>. For example, a weekly frequency with an interval of “1”, and an entry of weekdays = “24”, will repeat each week on Tuesday and Thursday for the duration of the block date range.</p>\r\n<p>\r\n  <b>MONTHLY BLOCKS</b>: Will repeat either on the day of the month specified in the <b>monthDay</b> property or on the day of the week and week of the month specified by the <b>monthType</b> property.  In both cases <b>frequency</b> is required and should be set to <b>“M”</b>, monthly, <b>monthDay</b> is the day of the month you want blocked.  If monthDay=’15’ this means to block the 15th of every month in the date range requested. Using monthDay in conjunction with monthType addresses “day of the week and week of the month” scenario.  There are two possible values for monthType: <b>D for Day of Month</b> or <b>W for Week of Month.</b> For <b>monthType D</b>, monthDay value must be between 1 and 31. It is the day of the month to repeat on. For <b>monthType M</b>, monthDay value contains 2 digits: day of week (0-6), (0,1,2,3,4,5,6 where 0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday) and week of month (1-5). 1 being the first week, 2 being the second. The third Thursday of the month is depicted as a monthType=”M” and monthDay=”43”.</p>\r\n<p>\r\n  <b>Repeats will end on the date specified by the end date.</b>\r\n</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of calendar object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/*+json': { schema: CalendarBlockInputModelSchema },
        'application/json': { schema: CalendarBlockInputModelSchema },
        'application/json-patch+json': { schema: CalendarBlockInputModelSchema },
        'text/json': { schema: CalendarBlockInputModelSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ResourceBlockViewModelSchema } },
    },
  },
})

export const getSetupV1CalendarsIdBlocksRoute = createRoute({
  method: 'get',
  path: '/setup/v1/calendars/{id}/blocks',
  tags: ['Calendars'],
  summary: 'List Calendar Blocks',
  description:
    '<p>Use this endpoint to return a <b>List of Calendar Blocks</b> for the requested calendar. A valid <b>calendar id</b> is required. </p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of calendar to list blocks',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Starting row of page, default 0',
            in: 'query',
            name: 'offset',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Page limit default 20, max 100',
            in: 'query',
            name: 'limit',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Valid response',
      content: { 'application/json': { schema: CalendarBlockListViewModelSchema } },
    },
    400: { description: 'Missing or invalid values in the request' },
    401: { description: 'Authorization error.' },
    404: { description: 'Resource was not found' },
  },
})

export const putSetupV1CalendarsIdRecoverRoute = createRoute({
  method: 'put',
  path: '/setup/v1/calendars/{id}/recover',
  tags: ['Calendars'],
  summary: 'Recover Calendar',
  description:
    '<p>Use this endpoint to <b>Recover</b> a previously deleted calendar object. A valid <b>calendar id</b> is required.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of calendar object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ScheduleViewModelSchema } },
    },
  },
})

export const getSetupV1CalendarsIdServicesRoute = createRoute({
  method: 'get',
  path: '/setup/v1/calendars/{id}/services',
  tags: ['Calendars'],
  summary: 'List Calendar Services',
  description:
    "<p>Use this endpoint to return a <b>List of Linked Services</b> of a calendar object. A valid <b>calendar id</b> is required. Find calendar id's by using the <i>GET /setup/v1/calendars</i> endpoint.</p>",
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of calendar object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Starting row of page, default 0',
            in: 'query',
            name: 'offset',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Page limit default 20, max 100',
            in: 'query',
            name: 'limit',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ServiceListViewModelSchema } },
    },
  },
})

export const getSetupV1CompaniesRoute = createRoute({
  method: 'get',
  path: '/setup/v1/companies',
  tags: ['Companies'],
  summary: 'Get Company',
  description:
    '<p>Use this endpoint to return the <b>Authorized Company</b> information. The company is the main entity that oversees all business locations defined below it, hierarchically. </p>\r\n<p>Access to the company credentials gives you access to all business locations defined in the authorized company. Client credentials resolve to a single company and are purposely hidden from this endpoint.</p>',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CompanyViewModelSchema } },
    },
  },
})

export const putSetupV1CompaniesRoute = createRoute({
  method: 'put',
  path: '/setup/v1/companies',
  tags: ['Companies'],
  summary: 'Update Company',
  description:
    '<p>Use this endpoint to <b>Update</b> the authorized company information. Your client credentials resolve to a single company. The timezoneName must be expressed as an IANA Timezone, e.g., <i>America/New_York</i>. </p>\r\n<p>For more information: <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones">Timezone IANA Wiki</a></p>',
  request: {
    body: {
      description: 'Company Update Model',
      content: {
        'application/*+json': { schema: CompanyUpdateModelSchema },
        'application/json': { schema: CompanyUpdateModelSchema },
        'application/json-patch+json': { schema: CompanyUpdateModelSchema },
        'text/json': { schema: CompanyUpdateModelSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CompanyViewModelSchema } },
    },
  },
})

export const postSetupV1CompaniesRoute = createRoute({
  method: 'post',
  path: '/setup/v1/companies',
  tags: ['Companies'],
  summary: 'Create Company',
  description:
    '<p>Use this endpoint to <b>Create</b> a new authorized company.</p>\r\n<p>\r\n  <b>Note: Special API Partner credentials are required to access this endpoint.</b>\r\n</p>\r\n<p>The <b>name, registrationEmail, phone, country</b> and <b>timezoneName</b> are required fields. For <b>country</b> use the standard ISO 3166 2-character country code.</p>\r\n<p>The <b>timezoneName</b> must be expressed as an IANA Timezone e.g., <i>America/New_York</i>.</p>\r\n<p>For more information: <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones">Timezone IANA Wiki</a></p>',
  request: {
    body: {
      description: 'Company Input Model',
      content: {
        'application/*+json': { schema: CompanyInputModelSchema },
        'application/json': { schema: CompanyInputModelSchema },
        'application/json-patch+json': { schema: CompanyInputModelSchema },
        'text/json': { schema: CompanyInputModelSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CompanyViewModelSchema } },
    },
  },
})

export const getSetupV1CompaniesDomainsRoute = createRoute({
  method: 'get',
  path: '/setup/v1/companies/domains',
  tags: ['Companies'],
  summary: 'List Company Domains',
  description:
    '<p>Use this endpoint to return a <b>List of Company Domains</b> for the authorized company. To share the OnSchedJS booking widget on your website or in your application your domain must be listed.</p>',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CompanyDomainListViewModelSchema } },
    },
  },
})

export const postSetupV1CompaniesDomainsRoute = createRoute({
  method: 'post',
  path: '/setup/v1/companies/domains',
  tags: ['Companies'],
  summary: 'Create Company Domain',
  description:
    '<p>Use this endpoint to <b>Create</b> an OnSchedJs domain for your authorized company. To share the OnSchedJS booking widget on your website or in your application you must add the domain.</p>',
  request: {
    body: {
      description: 'Company Domain Input Model',
      content: {
        'application/*+json': { schema: CompanyDomainInputModelSchema },
        'application/json': { schema: CompanyDomainInputModelSchema },
        'application/json-patch+json': { schema: CompanyDomainInputModelSchema },
        'text/json': { schema: CompanyDomainInputModelSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CompanyDomainViewModelSchema } },
    },
  },
})

export const getSetupV1CompaniesDomainsIdRoute = createRoute({
  method: 'get',
  path: '/setup/v1/companies/domains/{id}',
  tags: ['Companies'],
  summary: 'Get Company Domain',
  description:
    '<p>Use this endpoint to return a <b>Company Domain</b> object. A valid <b>companyDomain id</b> is required. </p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of companyDomain object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CompanyDomainViewModelSchema } },
    },
  },
})

export const putSetupV1CompaniesDomainsIdRoute = createRoute({
  method: 'put',
  path: '/setup/v1/companies/domains/{id}',
  tags: ['Companies'],
  summary: 'Update Company Domain',
  description:
    '<p>Use this endpoint to <b>Update</b> an OnSchedJs domain for your authorized company. A valid <b>companyDomain id</b> is required.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of companyDomain object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Company Domain Update Model',
      content: {
        'application/*+json': { schema: CompanyDomainUpdateModelSchema },
        'application/json': { schema: CompanyDomainUpdateModelSchema },
        'application/json-patch+json': { schema: CompanyDomainUpdateModelSchema },
        'text/json': { schema: CompanyDomainUpdateModelSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CompanyDomainViewModelSchema } },
    },
  },
})

export const deleteSetupV1CompaniesDomainsIdRoute = createRoute({
  method: 'delete',
  path: '/setup/v1/companies/domains/{id}',
  tags: ['Companies'],
  summary: 'Delete Company Domain',
  description:
    '<p>Use this endpoint to <b>Delete</b> an OnSchedJs domain from your authorized company. A valid <b>companyDomain id</b> is required.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of companyDomain object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CompanyDomainViewModelSchema } },
    },
  },
})

export const getSetupV1CompaniesEmailTemplatesRoute = createRoute({
  method: 'get',
  path: '/setup/v1/companies/email/templates',
  tags: ['Companies'],
  summary: 'List Email Templates',
  description:
    '<p>Use this endpoint to return a <b>List of Email Templates</b> that are provided and may be customized. If the template has been customized, the customized property is true. The scope parameter indicates if the email template has been customized at the Business Location level or Company level. This endpoint returns <b>only company level templates</b>, so the scope is always company.</p>',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EmailTemplateListViewModelSchema } },
    },
  },
})

export const getSetupV1CompaniesEmailTemplatesMasterRoute = createRoute({
  method: 'get',
  path: '/setup/v1/companies/email/templates/master',
  tags: ['Companies'],
  summary: 'Get Master Template Settings',
  description:
    '<p>Use this endpoint to return the <b>Master Email Template Settings</b>. Settings exist for showing or hiding email panels and for changing color schemes. </p>',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MasterEmailTemplateSettingsViewModelSchema } },
    },
  },
})

export const postSetupV1CompaniesEmailTemplatesMasterRoute = createRoute({
  method: 'post',
  path: '/setup/v1/companies/email/templates/master',
  tags: ['Companies'],
  summary: 'Create Master Template Settings',
  description:
    '<p>Use this endpoint to <b>Create Custom Master Email Template Settings</b>. Settings exist for showing or hiding email panels and for changing color schemes. Use the <i>GET ​/setup​/v1​/companies​/email​/templates</i> endpoint to display the settings offered. Changes to the Master Template Settings will be reflected in all business locations associated with this company. </p>\r\n<p>The email template endpoints work a little differently than most. There are no endpoints to update the templates, we use the post endpoint to create a custom template instead. This endpoint creates a new custom Master Template Settings file that will be used instead. If you delete it you are deleting the custom template settings you created and the original default Master Template created by OnSched would be reactivated.</p>',
  request: {
    body: {
      content: {
        'application/*+json': { schema: MasterTemplateSettingsInputModelSchema },
        'application/json': { schema: MasterTemplateSettingsInputModelSchema },
        'application/json-patch+json': { schema: MasterTemplateSettingsInputModelSchema },
        'text/json': { schema: MasterTemplateSettingsInputModelSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MasterEmailTemplateSettingsViewModelSchema } },
    },
  },
})

export const deleteSetupV1CompaniesEmailTemplatesMasterRoute = createRoute({
  method: 'delete',
  path: '/setup/v1/companies/email/templates/master',
  tags: ['Companies'],
  summary: 'Delete Master Template Settings',
  description:
    '<p>Use this endpoint to <b>Delete Custom Master Email Template Settings</b>. Deleting a custom master email template setting will reactivate the original default OnSched template settings.</p>',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MasterEmailTemplateSettingsViewModelSchema } },
    },
  },
})

export const getSetupV1CompaniesEmailTemplatesTemplateNameRoute = createRoute({
  method: 'get',
  path: '/setup/v1/companies/email/templates/{templateName}',
  tags: ['Companies'],
  summary: 'Get Email Template',
  description:
    "<p>Use this endpoint to return the requested <b>Email Template</b>. If it wasn't customized the default template is returned. The response content is in html format. A valid emailTemplate <b>name</b> is required. Find template names by using the: <i>GET ​/setup​/v1​/companies​/email​/templates</i> endpoint. Note: The master template cannot be accessed here. </p>\r\n<p>To create custom company email templates, go to the <i>POST ​/setup​/v1​/locations​/{id}​/email​/templates</i> endpoint and create a template using the Primary Business Location Id.</p>",
  request: {
    params: z.object({
      templateName: z
        .string()
        .openapi({
          param: {
            description: 'Email template name',
            in: 'path',
            name: 'templateName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ContentResultSchema } },
    },
  },
})

export const getSetupV1CompaniesRegionsRoute = createRoute({
  method: 'get',
  path: '/setup/v1/companies/regions',
  tags: ['Companies'],
  summary: 'List Regions',
  description:
    '<p>Use this endpoint to return a list of <b>Regions</b> in the authorized company. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further. </p>',
  request: {
    query: z.object({
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Starting row of page, default 0',
            in: 'query',
            name: 'offset',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Page limit default 20, max 100',
            in: 'query',
            name: 'limit',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "region object's",
      content: { 'application/json': { schema: RegionListViewModelSchema } },
    },
    400: { description: 'Missing or invalid values in the request' },
    401: { description: 'Authorization error.' },
    404: { description: 'Resource was not found' },
  },
})

export const postSetupV1CompaniesRegionsRoute = createRoute({
  method: 'post',
  path: '/setup/v1/companies/regions',
  tags: ['Companies'],
  summary: 'Create Region',
  description:
    '<p>Use this endpoint to <b>Create</b> a region object. Regions can be mapped to business locations. They can be used by the locations endpoints to filter locations by region id.</p>',
  request: {
    body: {
      description: '',
      content: {
        'application/*+json': { schema: RegionInputModelSchema },
        'application/json': { schema: RegionInputModelSchema },
        'application/json-patch+json': { schema: RegionInputModelSchema },
        'text/json': { schema: RegionInputModelSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RegionViewModelSchema } },
    },
  },
})

export const getSetupV1CompaniesRegionsIdRoute = createRoute({
  method: 'get',
  path: '/setup/v1/companies/regions/{id}',
  tags: ['Companies'],
  summary: 'Get Region',
  description:
    '<p>Use this endpoint to return a <b>Region</b> object. A valid <b>region id</b> is required.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of a region object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RegionViewModelSchema } },
    },
  },
})

export const putSetupV1CompaniesRegionsIdRoute = createRoute({
  method: 'put',
  path: '/setup/v1/companies/regions/{id}',
  tags: ['Companies'],
  summary: 'Update Region',
  description:
    '<p>Use this endpoint to <b>Update</b> a region object. A valid <b>region id</b> is required.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of Region',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Region Update Model',
      content: {
        'application/*+json': { schema: RegionUpdateModelSchema },
        'application/json': { schema: RegionUpdateModelSchema },
        'application/json-patch+json': { schema: RegionUpdateModelSchema },
        'text/json': { schema: RegionUpdateModelSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RegionViewModelSchema } },
    },
  },
})

export const deleteSetupV1CompaniesRegionsIdRoute = createRoute({
  method: 'delete',
  path: '/setup/v1/companies/regions/{id}',
  tags: ['Companies'],
  summary: 'Delete Region',
  description:
    "<p>Use this endpoint to <b>Delete</b> a region object. A valid <b>region id</b> is required. If the region is related to any business locations it won't be deleted. You must first remove any references to region id from the business locations prior to deleting.</p>",
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of Region',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RegionViewModelSchema } },
    },
  },
})

export const getSetupV1CompaniesTimezonesDateRoute = createRoute({
  method: 'get',
  path: '/setup/v1/companies/timezones/{date}',
  tags: ['Companies'],
  summary: 'List Time Zones',
  description:
    '<p>Use this endpoint to return a <b>List of timezone names, timezoneIana and tzOffset values</b> calculated for the date requested. Daylight Savings may or may not apply depending on the date specified.</p>',
  request: {
    params: z.object({
      date: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description: '"YYYY-MM-DD: Date for timezone info"',
            in: 'path',
            name: 'date',
            required: true,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TimezoneViewModelSchema } },
    },
  },
})

export const getSetupV1CustomersRoute = createRoute({
  method: 'get',
  path: '/setup/v1/customers',
  tags: ['Customers'],
  summary: 'List Customers',
  description:
    '<p>Use this endpoint to return a <b>List of Customers</b>. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>',
  request: {
    query: z.object({
      locationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'id of business location, defaults to primary business location',
            in: 'query',
            name: 'locationId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      groupId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by groupId',
            in: 'query',
            name: 'groupId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by email address.',
            in: 'query',
            name: 'email',
            schema: { type: 'string' },
            required: false,
          },
        }),
      lastname: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Search by lastname.',
            in: 'query',
            name: 'lastname',
            schema: { type: 'string' },
            required: false,
          },
        }),
      deleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by deleted status.',
            in: 'query',
            name: 'deleted',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Starting row of page, default 0',
            in: 'query',
            name: 'offset',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Page limit default 20, max 100',
            in: 'query',
            name: 'limit',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CustomerListViewModelSchema } },
    },
  },
})

export const getSetupV1CustomersIdRoute = createRoute({
  method: 'get',
  path: '/setup/v1/customers/{id}',
  tags: ['Customers'],
  summary: 'Get Customer',
  description:
    "<p>Use this endpoint to return a <b>Customer</b> object. A valid <b>customer id</b> is required. Find customer id's by using the <i>GET /setup/v1/customers</i> endpoint.</p>",
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of customer object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CustomerViewModelSchema } },
    },
  },
})

export const getSetupV1CustomersIdPrivacyRoute = createRoute({
  method: 'get',
  path: '/setup/v1/customers/{id}/privacy',
  tags: ['Customers'],
  summary: 'Get Customer Data',
  description:
    "<p>Use this endpoint to return the <b>Customer</b> object. A valid <b>customer id</b> is required. Find customer id's using the <i>GET /setup/v1/customers</i> endpoint.</p>",
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of customer object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CustomerPrivacyViewModelSchema } },
    },
  },
})

export const getSetupV1LocationsRoute = createRoute({
  method: 'get',
  path: '/setup/v1/locations',
  tags: ['Locations'],
  summary: 'List Locations',
  description:
    '<p>Use this endpoint to <b>List Business Locations</b> associated with your company. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>\r\n<p>\r\n  <b>IMPORTANT DEPRECATION NOTICE</b>: The following online settings parameters were intended for internal use in our Portal application only. They will be deprecated on <b>OCTOBER 15, 2022</b>. These fields are currently part of the <b>SETTINGS</b> object in all location endpoints: <b>businessId, enabled, familyMembersEnabled, serviceLabel, resourceLabel, resourceAnyLabel, resourceSelection, liveMode, formFlow, availabilityForm, showServiceGroups, showOnSchedLogo, showBusinessLogo, disableAuthorization, hideNavBar, hideLocationNav, hideServiceGroupsNav, hideServicesNav, hideContinueBooking, returnToService, returnToAvailability, hideBreadCrumbNav.</b> If you are using these fields, please adjust your code to handle the deprecation or let us know by submitting a ticket to: <b><i>support@onsched.com</i></b> as we do not want to interrupt your existing workflows.</p>',
  request: {
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Location name(full or partial) to filter on',
            in: 'query',
            name: 'name',
            schema: { type: 'string' },
            required: false,
          },
        }),
      serviceId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Find locations that offer this service',
            in: 'query',
            name: 'serviceId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      friendlyId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'friendlyId of location',
            in: 'query',
            name: 'friendlyId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      deleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter locations on deleted status',
            in: 'query',
            name: 'deleted',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Starting row of page, default 0',
            in: 'query',
            name: 'offset',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Page limit default 20, max 100',
            in: 'query',
            name: 'limit',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: LocationListViewModelSchema } },
    },
  },
})

export const postSetupV1LocationsRoute = createRoute({
  method: 'post',
  path: '/setup/v1/locations',
  tags: ['Locations'],
  summary: 'Create Location',
  description:
    '<p>Use this endpoint to <b>Create</b> a new business location. The result is a business location object with a GUID assigned to the location.</p>\r\n<p>The <b>name</b> and <b>timezoneName</b> fields are required. The <b>timezoneName</b> must be expressed as an IANA Timezone e.g., <i>America/New_York</i>. Refer to: <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones">Timezone Wiki</a> for a listing of IANA time zones.</p>\r\n<p>\r\n  <b>Business hours</b> are set by defining the <b>startTime</b> and <b>endTime</b> values for each day available/open. All days of the week must be provided when setting availability. Days are defined as <b>sun, mon, tue, wed, thu, fri and sat</b>. Start and End Times are entered in <b>military format. e.g., 800 is 8:00am, 2230 is 10:30pm</b>. If there is no physical location and the business hours are irrelevant, set the hours to open 24 hours by setting startTime=0 and endTime=2400. To set a whole day as unavailable, set both the startTime and endTime to 0. </p>\r\n<p>\r\n  <b>Settings</b> can be set here. Booking timer minutes, book ahead restrictions and customer bookings per day are all available here. Please read about the settings scope parameter before setting these values as it may simplify your process.</p>\r\n<p>\r\n  <b>Settings Scope</b> can be set to the company or the business location level. You can have all locations use the same company level settings or individual business locations can define their own, business location scope. If you want to use the company settings throughout all locations, do not pass in <b>settings element</b>. To create business location scoped settings, pass in the <b>settings element</b> with the field values defined in the post body. </p>\r\n<p>\r\n  <b>Appointment Reminders</b> Reminder values are used to define how many hours, days, or weeks (interval value) prior to the appointment to send the reminder. <b>Interval</b> values are used to define the reminder interval: <b>1 = Hours</b>, <b>2 = Days</b> and <b>3 = Weeks</b>. The reminder fields are numbers. If you are using the hours interval, use a number from 1 to 24.</p>\r\n<p>Example 1: <b>emailFirstReminder:  1, emailFirstReminderInterval:  2</b> - results in 1st reminder being sent <b>1 Day before</b> the appointment time.</p>\r\n<p>Example 2: <b>emailSecondReminder: 3, emailSecondReminderInterval: 1</b> - results in 2nd reminder being sent <b>3 Hours before</b> the appointment time.</p>\r\n<p>\r\n  <b>IMPORTANT DEPRECATION NOTICE</b>: The following online settings parameters were intended for internal use in our Portal application only. They will be deprecated on <b>OCTOBER 15, 2022</b>. These fields are currently part of the <b>SETTINGS</b> object in all location endpoints: <b>businessId, enabled, familyMembersEnabled, serviceLabel, resourceLabel, resourceAnyLabel, resourceSelection, liveMode, formFlow, availabilityForm, showServiceGroups, showOnSchedLogo, showBusinessLogo, disableAuthorization, hideNavBar, hideLocationNav, hideServiceGroupsNav, hideServicesNav, hideContinueBooking, returnToService, returnToAvailability, hideBreadCrumbNav.</b> If you are using these fields, please adjust your code to handle the deprecation or let us know by submitting a ticket to: <b><i>support@onsched.com</i></b> as we do not want to interrupt your existing workflows.</p>',
  request: {
    body: {
      content: {
        'application/*+json': { schema: LocationInputModelSchema },
        'application/json': { schema: LocationInputModelSchema },
        'application/json-patch+json': { schema: LocationInputModelSchema },
        'text/json': { schema: LocationInputModelSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: LocationViewModelSchema } },
    },
  },
})

export const postSetupV1LocationsBulkRoute = createRoute({
  method: 'post',
  path: '/setup/v1/locations/bulk',
  tags: ['Locations'],
  summary: 'Create Locations Bulk',
  description:
    '<p>Use this endpoint to <b>Create Bulk</b> business locations. The posted list of locations cannot exceed 100 location objects per transaction for performance purposes. The result is a list of new business location objects with a GUID assigned to each location.</p>\r\n<p>The <b>name</b> and <b>timezoneName</b> fields are required. The <b>timezoneName</b> must be expressed as an IANA Timezone e.g., <i>America/New_York</i>. Refer to: <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones">Timezone Wiki</a> for a listing of IANA time zones.</p>\r\n<p>\r\n  <b>Business hours</b> are set by defining the <b>startTime</b> and <b>endTime</b> values for each day available/open. All days of the week must be provided when setting availability. Days are defined as <b>sun, mon, tue, wed, thu, fri and sat</b>. Start and End Times are entered in <b>military format. e.g., 800 is 8:00am, 2230 is 10:30pm</b>. If there is no physical location and the business hours are irrelevant, set the hours to open 24 hours by setting startTime=0 and endTime=2400. To set a whole day as unavailable, set both the startTime and endTime to 0. </p>\r\n<p>\r\n  <b>Settings</b> can be set here. Booking timer minutes, book ahead restrictions and customer bookings per day are all available here. Please read about the settings scope parameter before setting these values as it may simplify your process.</p>\r\n<p>\r\n  <b>Settings Scope</b> can be set to the company or the business location level. You can have all locations use the same company level settings or individual business locations can define their own, business location scope. If you want to use the company settings throughout all locations, do not pass in <b>settings element</b>. To create business location scoped settings, pass in the <b>settings element</b> with the field values defined in the post body. </p>\r\n<p>\r\n  <b>Appointment Reminders</b> Reminder values are used to define how many hours, days, or weeks (interval value) prior to the appointment to send the reminder. <b>Interval</b> values are used to define the reminder interval: <b>1 = Hours</b>, <b>2 = Days</b> and <b>3 = Weeks</b>. The reminder fields are numbers. If you are using the hours interval, use a number from 1 to 24.</p>\r\n<p>Example 1: <b>emailFirstReminder:  1, emailFirstReminderInterval:  2</b> - results in 1st reminder being sent <b>1 Day before</b> the appointment time.</p>\r\n<p>Example 2: <b>emailSecondReminder: 3, emailSecondReminderInterval: 1</b> - results in 2nd reminder being sent <b>3 Hours before</b> the appointment time.</p>\r\n<p>\r\n  <b>IMPORTANT DEPRECATION NOTICE</b>: The following online settings parameters were intended for internal use in our Portal application only. They will be deprecated on <b>OCTOBER 15, 2022</b>. These fields are currently part of the <b>SETTINGS</b> object in all location endpoints: <b>businessId, enabled, familyMembersEnabled, serviceLabel, resourceLabel, resourceAnyLabel, resourceSelection, liveMode, formFlow, availabilityForm, showServiceGroups, showOnSchedLogo, showBusinessLogo, disableAuthorization, hideNavBar, hideLocationNav, hideServiceGroupsNav, hideServicesNav, hideContinueBooking, returnToService, returnToAvailability, hideBreadCrumbNav.</b> If you are using these fields, please adjust your code to handle the deprecation or let us know by submitting a ticket to: <b><i>support@onsched.com</i></b> as we do not want to interrupt your existing workflows.</p>',
  request: {
    body: {
      content: {
        'application/*+json': { schema: LocationsInputModelSchema },
        'application/json': { schema: LocationsInputModelSchema },
        'application/json-patch+json': { schema: LocationsInputModelSchema },
        'text/json': { schema: LocationsInputModelSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(LocationViewModelSchema) } },
    },
  },
})

export const getSetupV1LocationsServicesIdRoute = createRoute({
  method: 'get',
  path: '/setup/v1/locations/services/{id}',
  tags: ['Locations'],
  summary: 'Get Linked Service',
  description:
    '<p>Use this endpoint to <b>Get a Linked Service</b>. A valid <b>locationService id</b> is required.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of locationService object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'location service objects',
      content: { 'application/json': { schema: BusinessServiceViewModelSchema } },
    },
    400: { description: 'Missing or invalid values in the request' },
    401: { description: 'Authorization error.' },
    404: { description: 'Location was not found' },
  },
})

export const deleteSetupV1LocationsServicesIdRoute = createRoute({
  method: 'delete',
  path: '/setup/v1/locations/services/{id}',
  tags: ['Locations'],
  summary: 'Unlink Service',
  description:
    '<p>Use this endpoint to <b>Unlink</b> a location service from a business location. A valid <b>locationService id</b> is required. Find location services by using the <i>GET ​/setup​/v1​/locations​/{id}​/services</i> endpoint. </p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of locationService object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: LocationViewModelSchema } },
    },
  },
})

export const getSetupV1LocationsIdRoute = createRoute({
  method: 'get',
  path: '/setup/v1/locations/{id}',
  tags: ['Locations'],
  summary: 'Get Location',
  description:
    "<p>Use this endpoint to return a <b>Location</b> object. A valid <b>location id</b> is required. If not specified, the business location defaults to the primary business location. Find all business location id's, by using the <i>GET /consumer/v1/locations</i> endpoint.</p>\r\n<p>\r\n  <b>IMPORTANT DEPRECATION NOTICE</b>: The following online settings parameters were intended for internal use in our Portal application only. They will be deprecated on <b>OCTOBER 15, 2022</b>. These fields are currently part of the <b>SETTINGS</b> object in all location endpoints: <b>businessId, enabled, familyMembersEnabled, serviceLabel, resourceLabel, resourceAnyLabel, resourceSelection, liveMode, formFlow, availabilityForm, showServiceGroups, showOnSchedLogo, showBusinessLogo, disableAuthorization, hideNavBar, hideLocationNav, hideServiceGroupsNav, hideServicesNav, hideContinueBooking, returnToService, returnToAvailability, hideBreadCrumbNav.</b> If you are using these fields, please adjust your code to handle the deprecation or let us know by submitting a ticket to: <b><i>support@onsched.com</i></b> as we do not want to interrupt your existing workflows.</p>",
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of business location, defaults to primary business location',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: LocationViewModelSchema } },
    },
  },
})

export const putSetupV1LocationsIdRoute = createRoute({
  method: 'put',
  path: '/setup/v1/locations/{id}',
  tags: ['Locations'],
  summary: 'Update Location',
  description:
    '<p>Use this endpoint to <b>Update</b> a business location object. A valid business <b>location id</b> is required. The optional removeRegion query parameter can be used to remove the region relationship from the location.</p>\r\n<p>If the settings element is populated the scope will be set to the business location with the settings supplied. If your settings are uniform across all locations, then do not supply the settings element and the location will use the settings defined on the primary business location (company scoped). Company scoped settings cascade down to the locations. You can override any location that needs different settings by providing settings in the update model. Use the <i>PUT /setup/v1/locations/{id}/settings/scope/{settingsScope}</i> endpoint to change the settings scope only. This is typically used when switching from business location scope back to company.</p>\r\n<p>Refer to: <i><b>POST ​/setup​/v1​/locations</b></i> endpoint for details.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    query: z.object({
      removeRegion: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'removeRegion',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: LocationUpdateModelSchema },
        'application/json': { schema: LocationUpdateModelSchema },
        'application/json-patch+json': { schema: LocationUpdateModelSchema },
        'text/json': { schema: LocationUpdateModelSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: LocationViewModelSchema } },
    },
  },
})

export const deleteSetupV1LocationsIdRoute = createRoute({
  method: 'delete',
  path: '/setup/v1/locations/{id}',
  tags: ['Locations'],
  summary: 'Delete Location',
  description:
    '<p>Use this endpoint to <b>Delete</b> a business location. A valid business <b>location id</b> is required. The location is not permanently deleted and can be recovered by using the <i>PUT /setup​/v1​/locations​/{id}​/recover</i> endpoint.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of business location, defaults to primary business location',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: LocationViewModelSchema } },
    },
  },
})

export const getSetupV1LocationsIdAppointmentremindersRoute = createRoute({
  method: 'get',
  path: '/setup/v1/locations/{id}/appointmentreminders',
  tags: ['Locations'],
  summary: 'Get Reminders',
  description:
    '<p>Use this endpoint to <b>Get Email and SMS appointment reminder settings</b> for the requested location. A valid business <b>location id</b> is required. </p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of business location, defaults to primary business location',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AppointmentReminderViewModelSchema } },
    },
  },
})

export const putSetupV1LocationsIdAppointmentremindersRoute = createRoute({
  method: 'put',
  path: '/setup/v1/locations/{id}/appointmentreminders',
  tags: ['Locations'],
  summary: 'Update Reminders',
  description:
    '<p>Use this endpoint to <b>Update</b> Email and SMS appointment reminder settings for the requested location. A valid business <b>location id</b> is required. </p>\r\n<p>\r\n  <b>Appointment Reminders</b> Reminder values are used to define how many hours, days, or weeks (interval value) prior to the appointment to send the reminder. <b>Interval</b> values are used to define the reminder interval: <b>1 = Hours</b>, <b>2 = Days</b> and <b>3 = Weeks</b>. The reminder fields are numbers. If you are using the hours interval, use a number from 1 to 24.</p>\r\n<p>Example 1: <b>emailFirstReminder:  1, emailFirstReminderInterval:  2</b> - results in 1st reminder being sent <b>1 Day before</b> the appointment time.</p>\r\n<p>Example 2: <b>emailSecondReminder: 3, emailSecondReminderInterval: 1</b> - results in 2nd reminder being sent <b>3 Hours before</b> the appointment time.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of business location, defaults to primary business location',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'input model for reminders',
      content: {
        'application/*+json': { schema: AppointmentRemindersInputModelSchema },
        'application/json': { schema: AppointmentRemindersInputModelSchema },
        'application/json-patch+json': { schema: AppointmentRemindersInputModelSchema },
        'text/json': { schema: AppointmentRemindersInputModelSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: LocationViewModelSchema } },
    },
  },
})

export const deleteSetupV1LocationsIdDeleteallimagesRoute = createRoute({
  method: 'delete',
  path: '/setup/v1/locations/{id}/deleteallimages',
  tags: ['Locations'],
  summary: 'Delete All Location Images',
  description:
    '<p>Use this endpoint to <b>Delete All</b> location images from the location blob storage container. An option exists to use upper case for matching the subdirectory name. Legacy apps stored pics using upper case while the API uses lower case names.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    query: z.object({
      uppercase: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'uppercase', schema: { type: 'boolean' }, required: false },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: z.boolean() } } },
  },
})

export const deleteSetupV1LocationsIdDeleteimageRoute = createRoute({
  method: 'delete',
  path: '/setup/v1/locations/{id}/deleteimage',
  tags: ['Locations'],
  summary: 'Delete Location Image',
  description:
    '<p>Use this endpoint to <b>Delete</b> a previously uploaded location image. A valid business <b>location id</b> is required.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of business location, defaults to primary business location',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: LocationViewModelSchema } },
    },
  },
})

export const getSetupV1LocationsIdEmailTemplatesRoute = createRoute({
  method: 'get',
  path: '/setup/v1/locations/{id}/email/templates',
  tags: ['Locations'],
  summary: 'List Email Templates',
  description:
    '<p>Use this endpoint to return a <b>List of Email Templates</b> that are provided and may be customized. If the template has been customized, the customized property is true. The scope parameter indicates if the email template has been customized. This endpoint returns <b>only company level templates</b>, so the scope is always company.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EmailTemplateListViewModelSchema } },
    },
  },
})

export const postSetupV1LocationsIdEmailTemplatesRoute = createRoute({
  method: 'post',
  path: '/setup/v1/locations/{id}/email/templates',
  tags: ['Locations'],
  summary: 'Create Custom Template',
  description:
    '<p>Use this endpoint to a <b>Create</b> a Custom Email Template. You must convert the content to a base64 encoded string. Updates to the primary business location create company scoped custom templates. Updates to non-primary business locations create business location scoped custom templates. The master template cannot be updated with this endpoint.</p>\r\n<p>The email template endpoints work a little differently than most. There are no endpoints to update the templates, we use the post endpoint to create a custom template instead. This endpoint creates a new email template that will be used instead. If you delete it, you are deleting the custom template you created and the original default template created by OnSched will be reactivated.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of business location, defaults to primary business location',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Input model for email template',
      content: {
        'application/*+json': { schema: EmailTemplateInputModelSchema },
        'application/json': { schema: EmailTemplateInputModelSchema },
        'application/json-patch+json': { schema: EmailTemplateInputModelSchema },
        'text/json': { schema: EmailTemplateInputModelSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ContentResultSchema } },
    },
  },
})

export const getSetupV1LocationsIdEmailTemplatesMasterRoute = createRoute({
  method: 'get',
  path: '/setup/v1/locations/{id}/email/templates/master',
  tags: ['Locations'],
  summary: 'Get Master Template Settings',
  description:
    '<p>Use this endpoint to get <b>Master Email Template Settings</b>. A valid business <b>location id</b> is required. Settings exist for showing or hiding panels and for changing color schemes. </p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of business location, defaults to primary business location',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MasterEmailTemplateSettingsViewModelSchema } },
    },
  },
})

export const postSetupV1LocationsIdEmailTemplatesMasterRoute = createRoute({
  method: 'post',
  path: '/setup/v1/locations/{id}/email/templates/master',
  tags: ['Locations'],
  summary: 'Create Master Template Settings',
  description:
    '<p>Use this endpoint to <b>Create Custom Master Email Template Settings</b>. A valid business <b>location id</b> is required. Settings exist for showing or hiding email panels and for changing color schemes. Use the <i>GET ​/setup​/v1​/locations​/{id}​/email​/templates​/masterSettings</i> endpoint to display the settings offered. Changes to the Master Template Settings will be reflected in all business locations associated with this company. </p>\r\n<p>The email template endpoints work a little differently than most. There are no endpoints to update the templates, we use the post endpoint to create a custom template instead. This endpoint creates a new custom Master Template Settings file that will be used instead. If you delete it, you are deleting the custom template settings you created and the original default Master Template created by OnSched would be reactivated.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of business location, defaults to primary business location',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Input model for master email template settings',
      content: {
        'application/*+json': { schema: MasterTemplateSettingsInputModelSchema },
        'application/json': { schema: MasterTemplateSettingsInputModelSchema },
        'application/json-patch+json': { schema: MasterTemplateSettingsInputModelSchema },
        'text/json': { schema: MasterTemplateSettingsInputModelSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MasterEmailTemplateSettingsViewModelSchema } },
    },
  },
})

export const deleteSetupV1LocationsIdEmailTemplatesMasterRoute = createRoute({
  method: 'delete',
  path: '/setup/v1/locations/{id}/email/templates/master',
  tags: ['Locations'],
  summary: 'Delete Master Template Settings',
  description:
    '<p>Use this endpoint to <b>Delete Custom Master Email Template Settings</b>. A valid business <b>location id</b> is required. Deleting a custom master email template will reactivate the original default OnSched template settings.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of business location, defaults to primary business location',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MasterEmailTemplateSettingsViewModelSchema } },
    },
  },
})

export const getSetupV1LocationsIdEmailTemplatesTemplateNameRoute = createRoute({
  method: 'get',
  path: '/setup/v1/locations/{id}/email/templates/{templateName}',
  tags: ['Locations'],
  summary: 'Get Email Template',
  description:
    "<p>Use this endpoint to return the requested <b>Email Template</b>. The template is from the primary business location. If it wasn't customized the default template is returned. The response content is in html format. A valid <b>emailTemplate name</b> is required. Find template names by using the <i>GET ​/setup​/v1​/locations​/{id}​/email​/templates</i> endpoint. Note: The master template cannot be accessed here. </p>",
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of business location',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      templateName: z
        .string()
        .openapi({
          param: {
            description: 'name of the email template',
            in: 'path',
            name: 'templateName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ContentResultSchema } },
    },
  },
})

export const deleteSetupV1LocationsIdEmailTemplatesTemplateNameRoute = createRoute({
  method: 'delete',
  path: '/setup/v1/locations/{id}/email/templates/{templateName}',
  tags: ['Locations'],
  summary: 'Delete Custom Template',
  description:
    '<p>Use this endpoint to <b>Delete</b> a Custom Email Template that was previously created. A valid business <b>location id</b> and email <b>templateName</b> are required. Deleting a custom email template will revert the template back to its default originally created by OnSched. Changes will be reflected in all business locations associated with this company.</p>\r\n<p>The email template endpoints work a little differently than most. When you delete you are deleting the custom template you created, and the original default Email Template created by OnSched will be reactivated.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of business location, defaults to primary business location',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      templateName: z
        .string()
        .openapi({
          param: {
            description: 'Name of the email template',
            in: 'path',
            name: 'templateName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ContentResultSchema } },
    },
  },
})

export const postSetupV1LocationsIdGoogleServiceAccountRoute = createRoute({
  method: 'post',
  path: '/setup/v1/locations/{id}/google/service/account',
  tags: ['Locations'],
  summary: 'Create Google Cal Access',
  description:
    '<p>Use this endpoint to <b>Authorize Access</b> to google calendar users in your organization. You must create/have a Google Service account as an admin of your GSuite, then save the credentials as a Json Key file. This <b>Json Key</b> and a valid business <b>location id</b> are required. </p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of business location, defaults to primary business location',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Generated Json Key file from Google',
      content: {
        'application/*+json': { schema: GoogleServiceAccountCredsSchema },
        'application/json': { schema: GoogleServiceAccountCredsSchema },
        'application/json-patch+json': { schema: GoogleServiceAccountCredsSchema },
        'text/json': { schema: GoogleServiceAccountCredsSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GoogleServiceAccountCredsSchema } },
    },
  },
})

export const deleteSetupV1LocationsIdGoogleServiceAccountRoute = createRoute({
  method: 'delete',
  path: '/setup/v1/locations/{id}/google/service/account',
  tags: ['Locations'],
  summary: 'Delete Google Cal Access',
  description:
    '<p>Use this endpoint to <b>Delete</b> authorized access to all google calendar users in your organization. Upon deletion Google Calendars will no longer be synced for resources.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of business location, defaults to primary business location',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const putSetupV1LocationsIdHolidaysHolidayIdClosedRoute = createRoute({
  method: 'put',
  path: '/setup/v1/locations/{id}/holidays/{holidayId}/{closed}',
  tags: ['Locations'],
  summary: 'Update Location Holidays',
  description:
    '<p>Use this endpoint to <b>Update</b> Business Holidays as Opened or Closed. A valid business <b>location id</b> is required. If not specified, the business location defaults to the primary business location.</p>\r\n<p>Holidays are automatically defined with the initial Post Location endpoint and are based on country code. Find your location holiday codes by using the: <i>GET /setup​/v1​/locations​/{id}</i> endpoint. Change your holidays to open or closed by passing in the <b>holidayId</b> along with the <b>closed</b> boolean value to change the status of a specific holiday. Pass in an <b>asterisk *</b> for the holidayId then all business holidays will be set as defined.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      holidayId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'holidayId', required: true, schema: { type: 'string' } },
        }),
      closed: z
        .stringbool()
        .openapi({
          param: { in: 'path', name: 'closed', required: true, schema: { type: 'boolean' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: LocationViewModelSchema } },
    },
  },
})

export const putSetupV1LocationsIdRecoverRoute = createRoute({
  method: 'put',
  path: '/setup/v1/locations/{id}/recover',
  tags: ['Locations'],
  summary: 'Recover Location',
  description:
    '<p>Use this endpoint to <b>Recover</b> a deleted business location. A valid business <b>location id</b> is required.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: LocationViewModelSchema } },
    },
  },
})

export const getSetupV1LocationsIdServicesRoute = createRoute({
  method: 'get',
  path: '/setup/v1/locations/{id}/services',
  tags: ['Locations'],
  summary: 'List Location Linked Services',
  description:
    '<p>Use this endpoint to return a list of <b>Location Linked Services</b>. A valid business <b>location id</b> is required. By default, there are no location linked services attached to a location. Refer to the: <i>POST /setup​/v1​/locations​/{id}​/services</i> for details. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of business location, defaults to primary business location',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Starting row of page, default 0',
            in: 'query',
            name: 'offset',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Page limit default 20, max 100',
            in: 'query',
            name: 'limit',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'location service objects',
      content: { 'application/json': { schema: BusinessServiceListViewModelSchema } },
    },
    400: { description: 'Missing or invalid values in the request' },
    401: { description: 'Authorization error' },
    404: { description: 'Location was not found' },
  },
})

export const postSetupV1LocationsIdServicesRoute = createRoute({
  method: 'post',
  path: '/setup/v1/locations/{id}/services',
  tags: ['Locations'],
  summary: 'Create Linked Service',
  description:
    '<p>Use this endpoint to <b>Link Services</b> to a location object. A valid business <b>location id</b> is required. By default, there are <i>no services linked</i> to a location. </p>\r\n<p>Services are definable globally at the Company level and associated with the Primary Business Location, or at a Secondary Business Location. When accessing the Services endpoints, by default, API consumers are provided with a <b>combined</b> list of Services defined from both the Primary and Secondary Business Location.</p>\r\n<p>If necessary, the list of Service(s) provided can be cherry-picked/linked to <b>only include specific Service(s)</b> by using this endpoint. This allows for a subset of defined Services to be provided for a location.</p>\r\n<p>Supplying the list of services ids to cherry-pick/link to the location in the request body will explicitly define which Primary Location Services are offered by the specified business location.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of business location, defaults to primary business location',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: "array of valid service object id's",
      content: {
        'application/*+json': { schema: z.array(z.string()) },
        'application/json': { schema: z.array(z.string()) },
        'application/json-patch+json': { schema: z.array(z.string()) },
        'text/json': { schema: z.array(z.string()) },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: LocationViewModelSchema } },
    },
  },
})

export const deleteSetupV1LocationsIdServicesRoute = createRoute({
  method: 'delete',
  path: '/setup/v1/locations/{id}/services',
  tags: ['Locations'],
  summary: 'Delete Linked Services',
  description:
    '<p>Use this endpoint to <b>Delete All</b> location linked services from a business location. A valid business <b>location id</b> is required. </p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of business location, defaults to primary business location',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: LocationViewModelSchema } },
    },
  },
})

export const putSetupV1LocationsIdSettingsScopeSettingsScopeRoute = createRoute({
  method: 'put',
  path: '/setup/v1/locations/{id}/settings/scope/{settingsScope}',
  tags: ['Locations'],
  summary: 'Update Location Scope',
  description:
    '<p>Use this endpoint to <b>Update</b> a business locations online booking settings scope. A valid business <b>location id</b> is required.</p>\r\n<p>\r\n  <b>settingsScope</b> values are <b>0 = company scope, 1 = business location scope</b>. To inherit the online settings defined in the primary business location, then use value = 0 for company scope. Otherwise, to override the settings for a specific location then use value = 1 for business location scope. <b>Note</b>: You cannot change the settings scope of the Primary Business Location.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      settingsScope: z
        .string()
        .openapi({
          param: { in: 'path', name: 'settingsScope', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: LocationViewModelSchema } },
    },
  },
})

export const postSetupV1LocationsIdUploadimageRoute = createRoute({
  method: 'post',
  path: '/setup/v1/locations/{id}/uploadimage',
  tags: ['Locations'],
  summary: 'Upload Location Image',
  description:
    '<p>Use this endpoint to <b>Upload</b> an image to a location object. A valid business <b>location id</b> is required. You must convert the image to a <b>base64 encoded string</b> and pass that string as input along with your <b>filename</b>.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of business location, defaults to primary business location',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Input model for image upload',
      content: {
        'application/*+json': { schema: ResourceImageInputModelSchema },
        'application/json': { schema: ResourceImageInputModelSchema },
        'application/json-patch+json': { schema: ResourceImageInputModelSchema },
        'text/json': { schema: ResourceImageInputModelSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: LocationViewModelSchema } },
    },
  },
})

export const getSetupV1ResourcegroupsRoute = createRoute({
  method: 'get',
  path: '/setup/v1/resourcegroups',
  tags: ['ResourceGroups'],
  summary: 'List Resource Groups',
  description:
    '<p>Use this endpoint to <b>List Resource Groups</b> for the specified location. If not specified, the business location defaults to the primary business location. <b>Name</b> is a required field.</p>\r\n<p>Use the offset and limit parameters to control the page start and size. Default offset is 0, limit is 20, maximum is 100. Use the query parameters to filter the results further.</p>',
  request: {
    query: z.object({
      locationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'id of business location, defaults to primary business location',
            in: 'query',
            name: 'locationId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      deleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter results by deleted status',
            in: 'query',
            name: 'deleted',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Starting row of page, default 0',
            in: 'query',
            name: 'offset',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Page limit default 20, max 100',
            in: 'query',
            name: 'limit',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ResourceGroupListViewModelSchema } },
    },
  },
})

export const postSetupV1ResourcegroupsRoute = createRoute({
  method: 'post',
  path: '/setup/v1/resourcegroups',
  tags: ['ResourceGroups'],
  summary: 'Create Resource Group',
  description:
    '<p>Use this endpoint to <b>Create</b> a resourceGroup object. Resource groups are used to categorize your resources.</p>',
  request: {
    body: {
      description: 'Resource input model',
      content: {
        'application/*+json': { schema: ResourceGroupInputModelSchema },
        'application/json': { schema: ResourceGroupInputModelSchema },
        'application/json-patch+json': { schema: ResourceGroupInputModelSchema },
        'text/json': { schema: ResourceGroupInputModelSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ResourceGroupViewModelSchema } },
    },
  },
})

export const getSetupV1ResourcegroupsIdRoute = createRoute({
  method: 'get',
  path: '/setup/v1/resourcegroups/{id}',
  tags: ['ResourceGroups'],
  summary: 'Get Resource Group',
  description:
    "<p>Use this endpoint to return a <b>Resource Group</b> object. A valid <b>resourceGroup id</b> is required. Find resourceGroup id's by using the <i>GET setup/v1/resourceGroups</i> endpoint.</p>",
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of resourceGroup object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ResourceGroupViewModelSchema } },
    },
  },
})

export const putSetupV1ResourcegroupsIdRoute = createRoute({
  method: 'put',
  path: '/setup/v1/resourcegroups/{id}',
  tags: ['ResourceGroups'],
  summary: 'Update Resource Group',
  description:
    '<p>Use this endpoint to <b>Update</b> a resourceGroup object. A valid <b>resourceGroup id</b> is required. </p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of resourcGroup object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Resource Group Update Model',
      content: {
        'application/*+json': { schema: ResourceGroupUpdateModelSchema },
        'application/json': { schema: ResourceGroupUpdateModelSchema },
        'application/json-patch+json': { schema: ResourceGroupUpdateModelSchema },
        'text/json': { schema: ResourceGroupUpdateModelSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ResourceGroupViewModelSchema } },
    },
  },
})

export const deleteSetupV1ResourcegroupsIdRoute = createRoute({
  method: 'delete',
  path: '/setup/v1/resourcegroups/{id}',
  tags: ['ResourceGroups'],
  summary: 'Delete Resource Group',
  description:
    '<p>Use this endpoint to <b>Delete</b> a resourceGroup object. A valid <b>resourceGroup id</b> is required. The resource group is not permanently deleted and can be recovered by using the <i>PUT ​/setup​/v1​/resourcegroups​/{id}​/recover</i> endpoint.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of resourceGroup object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ResourceGroupViewModelSchema } },
    },
  },
})

export const putSetupV1ResourcegroupsIdRecoverRoute = createRoute({
  method: 'put',
  path: '/setup/v1/resourcegroups/{id}/recover',
  tags: ['ResourceGroups'],
  summary: 'Recover Resource Group',
  description:
    '<p>Use this endpoint to <b>Recover</b> a deleted resourceGroup object. A valid <b>resourceGroup id</b> is required.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of resourceGroup object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ResourceViewModelSchema } },
    },
  },
})

export const getSetupV1ResourcesRoute = createRoute({
  method: 'get',
  path: '/setup/v1/resources',
  tags: ['Resources'],
  summary: 'List Resources',
  description:
    '<p>Use this endpoint to return a <b>List of Resources</b>. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>',
  request: {
    query: z.object({
      locationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'id of business location, defaults to primary business location',
            in: 'query',
            name: 'locationId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      resourceGroupId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by group Id',
            in: 'query',
            name: 'resourceGroupId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by email address',
            in: 'query',
            name: 'email',
            schema: { type: 'string' },
            required: false,
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Search by name',
            in: 'query',
            name: 'name',
            schema: { type: 'string' },
            required: false,
          },
        }),
      deleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Show by deleted status, default is false',
            in: 'query',
            name: 'deleted',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      googleAuthReturnUrl: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Google calendar authorization return url',
            in: 'query',
            name: 'googleAuthReturnUrl',
            schema: { type: 'string' },
            required: false,
          },
        }),
      outlookAuthReturnUrl: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Outlook calendar authorization return url',
            in: 'query',
            name: 'outlookAuthReturnUrl',
            schema: { type: 'string' },
            required: false,
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Starting row of page, default 0',
            in: 'query',
            name: 'offset',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Page limit default 20, max is 100',
            in: 'query',
            name: 'limit',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'resource object',
      content: { 'application/json': { schema: ResourceListViewModelSchema } },
    },
    400: { description: 'Missing or invalid values in the request' },
    404: { description: 'Resource was not found' },
  },
})

export const postSetupV1ResourcesRoute = createRoute({
  method: 'post',
  path: '/setup/v1/resources',
  tags: ['Resources'],
  summary: 'Create Resource',
  description:
    '<p>Use this endpoint to <b>Create</b> a new resource.</p>\r\n<p>Required Fields: <b>Email Address</b> and <b>Name</b></p>\r\n<p>Providing a single or many serviceId(s) in the service array will result the resource explicitly being available to provide those services only. While passing in an empty array will result in all services being available to the resources. This includes all company and business scoped services. See the <i>POST ​/setup​/v1​/resources​/{id}​/services</i> endpoint for details about explicitly linking services.</p>\r\n<p>Set the resource availability type by using the <b>recurringAvailability</b> flag. Set recurringAvailability to <b>True</b> for <b>Weekly Availability</b> or <b>False</b> for <b>Resource Allocations</b>.</p>',
  request: {
    query: z.object({
      googleAuthReturnUrl: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Google calendar authorization return url',
            in: 'query',
            name: 'googleAuthReturnUrl',
            schema: { type: 'string' },
            required: false,
          },
        }),
      outlookAuthReturnUrl: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Outlook calendar authorization return url',
            in: 'query',
            name: 'outlookAuthReturnUrl',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'Resource input model',
      content: {
        'application/*+json': { schema: ResourceInputModelSchema },
        'application/json': { schema: ResourceInputModelSchema },
        'application/json-patch+json': { schema: ResourceInputModelSchema },
        'text/json': { schema: ResourceInputModelSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ResourceViewModelSchema } },
    },
  },
})

export const getSetupV1ResourcesAllocationsIdRoute = createRoute({
  method: 'get',
  path: '/setup/v1/resources/allocations/{id}',
  tags: ['Resources'],
  summary: 'Get Allocation',
  description:
    '<p>Use this endpoint to return a <b>Resource Allocation</b>. A valid <b>resourceAllocation id</b> is required. </p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of resourceAllocation object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ResourceAllocationViewModelSchema } },
    },
  },
})

export const putSetupV1ResourcesAllocationsIdRoute = createRoute({
  method: 'put',
  path: '/setup/v1/resources/allocations/{id}',
  tags: ['Resources'],
  summary: 'Update Allocation',
  description:
    '<p>Use this endpoint to <b>Update</b> a resource allocation. A valid <b>resourceAllocation id</b> is required. Refer to the <i>POST /setup/v1/resources/{id}/allocations</i> endpoint for details.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of resourceAllocation object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Resource allocation update model',
      content: {
        'application/*+json': { schema: ResourceAllocationUpdateModelSchema },
        'application/json': { schema: ResourceAllocationUpdateModelSchema },
        'application/json-patch+json': { schema: ResourceAllocationUpdateModelSchema },
        'text/json': { schema: ResourceAllocationUpdateModelSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ResourceBlockViewModelSchema } },
    },
  },
})

export const deleteSetupV1ResourcesAllocationsIdRoute = createRoute({
  method: 'delete',
  path: '/setup/v1/resources/allocations/{id}',
  tags: ['Resources'],
  summary: 'Delete Allocation',
  description:
    '<p>Use this endpoint to <b>Delete</b> a Resource Allocation. A valid <b>resourceAllocation id</b> is required.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of resourceAllocation object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ResourceBlockViewModelSchema } },
    },
  },
})

export const putSetupV1ResourcesBlockIdRoute = createRoute({
  method: 'put',
  path: '/setup/v1/resources/block/{id}',
  tags: ['Resources'],
  summary: 'Update Block',
  description:
    '<p>Use this endpoint to <b>Update</b> a Resource Block. A valid <b>resourceBlock id</b> is required. Refer to the <i>POST ​/setup​/v1​/resources​/{id}​/block</i> endpoint for fieldnames and details.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of resourceBlock object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Resource Block update model',
      content: {
        'application/*+json': { schema: ResourceBlockUpdateModelSchema },
        'application/json': { schema: ResourceBlockUpdateModelSchema },
        'application/json-patch+json': { schema: ResourceBlockUpdateModelSchema },
        'text/json': { schema: ResourceBlockUpdateModelSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ResourceBlockViewModelSchema } },
    },
  },
})

export const deleteSetupV1ResourcesBlockIdRoute = createRoute({
  method: 'delete',
  path: '/setup/v1/resources/block/{id}',
  tags: ['Resources'],
  summary: 'Delete Block',
  description:
    '<p>Use this endpoint to <b>Delete</b> a Resource Block. A valid <b>resourceBlock id</b> is required.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of resourceBlock object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ResourceBlockViewModelSchema } },
    },
  },
})

export const getSetupV1ResourcesBlocksIdRoute = createRoute({
  method: 'get',
  path: '/setup/v1/resources/blocks/{id}',
  tags: ['Resources'],
  summary: 'Get Block',
  description:
    '<p>Use this endpoint to <b>Get</b> a Resource Block. A valid <b>resourceBlock id</b> is required.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of resourceBlock object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ResourceBlockViewModelSchema } },
    },
  },
})

export const putSetupV1ResourcesBulkRoute = createRoute({
  method: 'put',
  path: '/setup/v1/resources/bulk',
  tags: ['Resources'],
  summary: 'Update Resources Bulk',
  description:
    "<p>Use this endpoint to <b>Bulk Update</b> resources. Valid <b>resource id's</b> are required. The list of resources cannot exceed 100 resource objects per transaction for performance purposes.</p>\r\n<p>Required Fields: <b>Email Address</b> and <b>Name</b></p>\r\n<p>Providing a single or many serviceId(s) in the service array will result the resource explicitly being available to provide those services only. While passing in an empty array will result in all services being available to the resources. This includes all company and business scoped services. See the <i>POST ​/setup​/v1​/resources​/{id}​/services</i> endpoint for details about explicitly linking services.</p>\r\n<p>Set the resource availability type by using the <b>recurringAvailability</b> flag. Set recurringAvailability to <b>True</b> for <b>Weekly Availability</b> or <b>False</b> for <b>Resource Allocations</b>.</p>",
  request: {
    query: z.object({
      googleAuthReturnUrl: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Google calendar authorization return url',
            in: 'query',
            name: 'googleAuthReturnUrl',
            schema: { type: 'string' },
            required: false,
          },
        }),
      outlookAuthReturnUrl: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Outlook calendar authorization return url',
            in: 'query',
            name: 'outlookAuthReturnUrl',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'Resources update model',
      content: {
        'application/*+json': { schema: ResourcesUpdateModelSchema },
        'application/json': { schema: ResourcesUpdateModelSchema },
        'application/json-patch+json': { schema: ResourcesUpdateModelSchema },
        'text/json': { schema: ResourcesUpdateModelSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(ResourceViewModelSchema) } },
    },
  },
})

export const postSetupV1ResourcesBulkRoute = createRoute({
  method: 'post',
  path: '/setup/v1/resources/bulk',
  tags: ['Resources'],
  summary: 'Create Resources Bulk',
  description:
    '<p>Use this endpoint to <b>Bulk Create</b> resources. Valid <b>resource ids</b> are required. The posted list of resources cannot exceed 100 resource objects per transaction for performance purposes.</p>\r\n<p>Required Fields: <b>Email Address</b> and <b>Name</b></p>\r\n<p>Providing a single or many serviceId(s) in the service array will result the resource explicitly being available to provide those services only. While passing in an empty array will result in all services being available to the resources. This includes all company and business scoped services. See the <i>POST ​/setup​/v1​/resources​/{id}​/services</i> endpoint for details about explicitly linking services.</p>\r\n<p>Set the resource availability type by using the <b>recurringAvailability</b> flag. Set recurringAvailability to <b>True</b> for <b>Weekly Availability</b> or <b>False</b> for <b>Resource Allocations</b>.</p>',
  request: {
    query: z.object({
      googleAuthReturnUrl: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Google calendar authorization return url',
            in: 'query',
            name: 'googleAuthReturnUrl',
            schema: { type: 'string' },
            required: false,
          },
        }),
      outlookAuthReturnUrl: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Outlook calendar authorization return url',
            in: 'query',
            name: 'outlookAuthReturnUrl',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'Resources input model',
      content: {
        'application/*+json': { schema: ResourcesInputModelSchema },
        'application/json': { schema: ResourcesInputModelSchema },
        'application/json-patch+json': { schema: ResourcesInputModelSchema },
        'text/json': { schema: ResourcesInputModelSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(ResourceViewModelSchema) } },
    },
  },
})

export const getSetupV1ResourcesTimezonesRoute = createRoute({
  method: 'get',
  path: '/setup/v1/resources/timezones',
  tags: ['Resources'],
  summary: 'Get Time Zones',
  description: '<p>Use this endpoint to return a <b>List of Time Zones</b>.</p>',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SystemTimezoneViewModelSchema } },
    },
  },
})

export const getSetupV1ResourcesIdRoute = createRoute({
  method: 'get',
  path: '/setup/v1/resources/{id}',
  tags: ['Resources'],
  summary: 'Get Resource',
  description:
    "<p>Use this endpoint to return a <b>Resource</b> object. A valid <b>resource id</b> is required. Find resource id's by using the: <i>GET /setup/v1/resources</i> endpoint.</p>",
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of resource object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      googleAuthReturnUrl: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Google calendar authorization return url',
            in: 'query',
            name: 'googleAuthReturnUrl',
            schema: { type: 'string' },
            required: false,
          },
        }),
      outlookAuthReturnUrl: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Outlook calendar authorization return url',
            in: 'query',
            name: 'outlookAuthReturnUrl',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ResourceViewModelSchema } },
    },
  },
})

export const putSetupV1ResourcesIdRoute = createRoute({
  method: 'put',
  path: '/setup/v1/resources/{id}',
  tags: ['Resources'],
  summary: 'Update Resource',
  description:
    '<p>Use this endpoint to <b>Update</b> a resource. A valid <b>resource id</b> is required.</p>\r\n<p>Required Fields: <b>Email Address</b> and <b>Name</b></p>\r\n<p>Providing a single or many serviceId(s) in the service array will result the resource explicitly being available to provide those services only. While passing in an empty array will result in all services being available to the resources. This includes all company and business scoped services. See the <i>POST ​/setup​/v1​/resources​/{id}​/services</i> endpoint for details about explicitly linking services.</p>\r\n<p>Set the resource availability type by using the <b>recurringAvailability</b> flag. Set recurringAvailability to <b>True</b> for <b>Weekly Availability</b> or <b>False</b> for <b>Resource Allocations</b>.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of resource object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      googleAuthReturnUrl: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Google calendar authorization return url',
            in: 'query',
            name: 'googleAuthReturnUrl',
            schema: { type: 'string' },
            required: false,
          },
        }),
      outlookAuthReturnUrl: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Outlook calendar authorization return url',
            in: 'query',
            name: 'outlookAuthReturnUrl',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'Resource Update Model',
      content: {
        'application/*+json': { schema: ResourceUpdateModelSchema },
        'application/json': { schema: ResourceUpdateModelSchema },
        'application/json-patch+json': { schema: ResourceUpdateModelSchema },
        'text/json': { schema: ResourceUpdateModelSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ResourceViewModelSchema } },
    },
  },
})

export const deleteSetupV1ResourcesIdRoute = createRoute({
  method: 'delete',
  path: '/setup/v1/resources/{id}',
  tags: ['Resources'],
  summary: 'Delete Resource',
  description:
    '<p>Use this endpoint to <b>Delete</b> a resource. The resource is not permanently deleted and can be recovered. A valid <b>resource id</b> is required.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of resource object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ResourceViewModelSchema } },
    },
  },
})

export const getSetupV1ResourcesIdAllocationsRoute = createRoute({
  method: 'get',
  path: '/setup/v1/resources/{id}/allocations',
  tags: ['Resources'],
  summary: 'List Resource Allocations',
  description:
    "<p>Use this endpoint to return a list of <b>Resource Allocations</b> for a specified resource. We recommend using allocations if a resource's schedule changes frequently from day to day or week to week. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>",
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of resource to list allocations for',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      startDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'yyyy-mm-dd, filter allocations on/after startDate',
            in: 'query',
            name: 'startDate',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      endDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'yyyy-mm-dd, filter on/before endDate',
            in: 'query',
            name: 'endDate',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Starting row of page, default 0',
            in: 'query',
            name: 'offset',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Page limit default 20, max 100',
            in: 'query',
            name: 'limit',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'resource allocation objects',
      content: { 'application/json': { schema: ResourceAllocationListViewModelSchema } },
    },
    400: { description: 'Missing or invalid values in the request' },
    401: { description: 'Authorization error.' },
    404: { description: 'Resource was not found' },
  },
})

export const postSetupV1ResourcesIdAllocationsRoute = createRoute({
  method: 'post',
  path: '/setup/v1/resources/{id}/allocations',
  tags: ['Resources'],
  summary: 'Create Allocation',
  description:
    '<p>Use this endpoint to <b>Create</b> a resource allocation for a resource. A valid <b>resource id</b> is required.</p>\r\n<p>Required fields: <b>startDate, endDate, startTime, endTime</b> and <b>reason</b>. Resource allocations can be set to specific time ranges or for the whole day by setting startTime=0 and endTime=2400. They can repeat for a specific date range instance or set to repeat at a specified frequency.</p>\r\n<p>\r\n  <b>Repeat object: (repeats = true)</b>\r\n</p>\r\n<p>The <b>frequency</b> can be set to a value of <b>D, W or M </b>for <b>Day, Week</b> or <b>Month</b> respectively.</p>\r\n<p>Use the <b>interval</b> property to specify the interval that the allocation repeats. For example, an interval of 2 for a weekly allocation means that the allocation will repeat every 2nd week beginning at the day specified. A daily allocation with an interval of 10 means the allocation will repeat every 10 days. The interval property applies to all repeat frequencies.  <b>If using the repeat functionality an interval value is required</b>.</p>\r\n<p>\r\n  <b>DAILY ALLOCATIONS</b>: Will repeat for each day of the week for the date range specified for the interval specified.  An interval value of “1” repeats every day, and an interval value of “3” is every 3rd day.</p>\r\n<p>\r\n  <b>WEEKLY ALLOCATIONS</b>: Will repeat only on the specified days of the week for the date range specified. For weekly the <b>frequency</b> is required and should be set to <b>“W”</b>. You must specify the <b>“weekdays”</b> parameter. Weekdays are expressed as a string of digits with each single digit in the string representing a day of the week. The possible values are <b>0,1,2,3,4,5,6</b> where <b>0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday</b>.  For example, a weekly frequency with an interval of “1”, and an entry of weekdays = “24”, will repeat each week on Tuesday and Thursday for the duration of the allocation date range.</p>\r\n<p>\r\n  <b>MONTHLY ALLOCATIONS</b>: Will repeat either on the day of the month specified in the <b>monthDay</b> property or on the day of the week and week of the month specified by the <b>monthType</b> property.  In both cases <b>frequency</b> is required and should be set to <b>“M”</b>, monthly. <b>monthDay</b> is the day of the month you want allocated.  If monthDay=’15’ this means to allocate the 15th of every month in the date range requested. Using monthDay in conjunction with monthType addresses “day of the week and week of the month” scenario.  There are two possible values for monthType: <b>D for Day of Month</b> or <b>W for Week of Month.</b> For <b>monthType D</b>, monthDay value must be between 1 and 31. It is the day of the month to repeat on.  For <b>monthType M</b>, monthDay value contains 2 digits:  day of week (0-6), (0,1,2,3,4,5,6 where 0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday) and week of month (1-5). 1 being the first week, 2 being the second. The third Thursday of the month is depicted as a monthType=”M” and monthDay=”43”.</p>\r\n<p>\r\n  <b>Repeats will end on the date specified by the end date.</b>\r\n</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of resource object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/*+json': { schema: ResourceAllocationInputModelSchema },
        'application/json': { schema: ResourceAllocationInputModelSchema },
        'application/json-patch+json': { schema: ResourceAllocationInputModelSchema },
        'text/json': { schema: ResourceAllocationInputModelSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ResourceBlockViewModelSchema } },
    },
  },
})

export const getSetupV1ResourcesIdAvailabilityRoute = createRoute({
  method: 'get',
  path: '/setup/v1/resources/{id}/availability',
  tags: ['Resources'],
  summary: 'List Weekly Availability',
  description:
    "<p>Use this endpoint to view the <b>Weekly Availability</b> for a resource. The displayed available times are represented in the resource's timezone. The resource timezone can be set to any world timezone. If not provided, by default it is set to the Business timezone.</p>",
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of resource object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ResourceAvailabilityViewModelSchema } },
    },
  },
})

export const putSetupV1ResourcesIdAvailabilityRoute = createRoute({
  method: 'put',
  path: '/setup/v1/resources/{id}/availability',
  tags: ['Resources'],
  summary: 'Update Weekly Availability',
  description:
    '<p>Use this endpoint to <b>Update</b> resource weekly availability. A valid <b>resource id</b> is required. The availability day entries are created when a resource object is created.</p>\r\n<p>To update weekly availability hours, all days of the week must be provided. Days are defined as <b>sun, mon, tue, wed, thu, fri</b> and <b>sat</b>. The <b>startTime</b> and <b>endTime</b> fields are entered in <b>military format. e.g., 800 is 8:00am, 2230 is 10:30pm</b>. We support 24-hour availability, set startTime=0 and endTime=2400. To set a whole day as unavailable, set both the startTime and endTime to 0.</p>\r\n<p>If you require times in between specified hours to be unavailable, use the resource blocks endpoints. Times entered represent the timezone of the resource. Resources can be set to any world timezone. </p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of resource object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Resource Availability Input Model',
      content: {
        'application/*+json': { schema: AvailabilityInputModelSchema },
        'application/json': { schema: AvailabilityInputModelSchema },
        'application/json-patch+json': { schema: AvailabilityInputModelSchema },
        'text/json': { schema: AvailabilityInputModelSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ResourceAvailabilityViewModelSchema } },
    },
  },
})

export const postSetupV1ResourcesIdBlockRoute = createRoute({
  method: 'post',
  path: '/setup/v1/resources/{id}/block',
  tags: ['Resources'],
  summary: 'Create Block',
  description:
    '<p>Use this endpoint to <b>Create</b> a Resource Block. A valid <b>resource id</b> is required.</p>\r\n<p>Required fields: <b>startDate, endDate, startTime, endTime</b> and <b>reason</b>.</p>\r\n<p>Resource blocks can be set to specific time ranges or for the whole day. Use the <b>AllDay</b> setting to create an all-day block. <b>AllDay</b> will automatically set startTime to 0 and endTime to 2400.</p>\r\n<p>Resource blocks can be for a specific date range instance or set to repeat at a specified frequency. </p>\r\n<p>\r\n  <b>Repeat object: (repeats = true)</b>\r\n</p>\r\n<p>The <b>frequency</b> can be set to a value of <b>D, W or M</b> for <b>Day, Week</b> or <b>Month</b> respectively.</p>\r\n<p>Use the <b>interval</b> property to specify the interval that the block repeats. For example, an interval of 2 for a weekly block means that the block will repeat every 2nd week beginning at the day specified. A daily block with an interval of 10 means the block will repeat every 10 days. The interval property applies to all repeat frequencies. <b>If using the repeat functionality an interval value is required</b>.</p>\r\n<p>\r\n  <b>DAILY BLOCKS</b>: Will repeat for each day of the week for the date range specified for the interval specified.  An interval value of “1” repeats every day, and an interval value of “3” is every 3rd day.</p>\r\n<p>\r\n  <b>WEEKLY BLOCKS</b>: Will repeat only on the specified days of the week for the date range specified. For weekly the <b>frequency</b> is required and should be set to <b>“W”</b>.  You must specify the <b>weekdays</b> parameter. Weekdays are expressed as a string of digits with each single digit in the string representing a day of the week. The possible values are <b>0,1,2,3,4,5,6</b> where <b>0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday</b>. For example, a weekly frequency with an interval of “1”, and an entry of weekdays = “24”, will repeat each week on Tuesday and Thursday for the duration of the block date range.</p>\r\n<p>\r\n  <b>MONTHLY BLOCKS</b>: Will repeat either on the day of the month specified in the <b>monthDay</b> property or on the day of the week and week of the month specified by the <b>monthType</b> property.  In both cases <b>frequency</b> is required and should be set to <b>“M”</b>, monthly, <b>monthDay</b> is the day of the month you want blocked.  If monthDay=’15’ this means to block the 15th of every month in the date range requested. Using monthDay in conjunction with monthType addresses “day of the week and week of the month” scenario.  There are two possible values for monthType: <b>D for Day of Month</b> or <b>W for Week of Month.</b> For <b>monthType D</b>, monthDay value must be between 1 and 31. It is the day of the month to repeat on. For <b>monthType M</b>, monthDay value contains 2 digits: day of week (0-6), (0,1,2,3,4,5,6 where 0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday) and week of month (1-5). 1 being the first week, 2 being the second. The third Thursday of the month is depicted as a monthType=”M” and monthDay=”43”. </p>\r\n<p>\r\n  <b>Repeats will end on the date specified by the end date.</b>\r\n</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of resource object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/*+json': { schema: ResourceBlockInputModelSchema },
        'application/json': { schema: ResourceBlockInputModelSchema },
        'application/json-patch+json': { schema: ResourceBlockInputModelSchema },
        'text/json': { schema: ResourceBlockInputModelSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ResourceBlockViewModelSchema } },
    },
  },
})

export const getSetupV1ResourcesIdBlocksRoute = createRoute({
  method: 'get',
  path: '/setup/v1/resources/{id}/blocks',
  tags: ['Resources'],
  summary: 'List Resource Blocks',
  description:
    '<p>Use this endpoint to return a list of <b>Resource Blocks</b>. A valid <b>resource id</b> is required. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of resource to list blocks for',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      startDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'YYYY-MM-DD, filter blocks on/after startDate',
            in: 'query',
            name: 'startDate',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      endDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'YYYY-MM-DD, filter on/before endDate',
            in: 'query',
            name: 'endDate',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Starting row of page, default 0',
            in: 'query',
            name: 'offset',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Page limit default 20, max 100',
            in: 'query',
            name: 'limit',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "resource block object's",
      content: { 'application/json': { schema: ResourceBlockListViewModelSchema } },
    },
    400: { description: 'Missing or invalid values in the request' },
    401: { description: 'Authorization error.' },
    404: { description: 'Resource was not found' },
  },
})

export const getSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressRoute = createRoute({
  method: 'get',
  path: '/setup/v1/resources/{id}/calendar/auth/google/{googleEmailAddress}',
  tags: ['Resources'],
  summary: 'Get Resource Google URL',
  description:
    '<p>Use this endpoint to return the <b>Resources Google Calendar Authorization URL</b>. A valid <b>resource id</b> and <b>Google Email Address</b> are required.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of resource object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      googleEmailAddress: z
        .string()
        .openapi({
          param: {
            description: 'Email address of Google Calendar',
            in: 'path',
            name: 'googleEmailAddress',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      googleAuthReturnUrl: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Google calendar authorization return url',
            in: 'query',
            name: 'googleAuthReturnUrl',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CalendarAuthViewModelSchema } },
    },
  },
})

export const getSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressRoute = createRoute({
  method: 'get',
  path: '/setup/v1/resources/{id}/calendar/auth/outlook/{outlookEmailAddress}',
  tags: ['Resources'],
  summary: 'Get Resource Outlook URL',
  description:
    '<p>Use this endpoint to return the <b>Resources Outlook Calendar Authorization URL</b>. A valid <b>resource id</b> and <b>Outlook Email Address</b> are required.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of resource object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      outlookEmailAddress: z
        .string()
        .openapi({
          param: {
            description: 'Email address of Outlook Calendar',
            in: 'path',
            name: 'outlookEmailAddress',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      outlookAuthReturnUrl: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Outlook calendar authorization return url',
            in: 'query',
            name: 'outlookAuthReturnUrl',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CalendarAuthViewModelSchema } },
    },
  },
})

export const deleteSetupV1ResourcesIdDeleteimageRoute = createRoute({
  method: 'delete',
  path: '/setup/v1/resources/{id}/deleteimage',
  tags: ['Resources'],
  summary: 'Delete Resource Image',
  description:
    '<p>Use this endpoint to permanently <b>Delete</b> a previously uploaded resource image. A valid <b>resource id</b> is required.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of resource object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ResourceViewModelSchema } },
    },
  },
})

export const putSetupV1ResourcesIdReassignAppointmentsResourceIdRoute = createRoute({
  method: 'put',
  path: '/setup/v1/resources/{id}/reassign/appointments/{resourceId}',
  tags: ['Resources'],
  summary: 'Reassign Resource',
  description:
    "<p>Use this endpoint to <b>Reassign</b> appointments from one resource to another. If the startDate is not supplied, the default is today's date + 1 day; If the endDate is not supplied, all future appointments from the start date will be reassigned. If the calendar id is not supplied the default is the primary calendar of the location.</p>",
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of the original resource',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      resourceId: z
        .string()
        .openapi({
          param: {
            description: 'id of the target resource',
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      startDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'YYYY-MM-DD, Appt range start date',
            in: 'query',
            name: 'startDate',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      endDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'YYYY-MM-DD, Appt range end date',
            in: 'query',
            name: 'endDate',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      calendarId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'CalendarId of calendar containing appointments',
            in: 'query',
            name: 'calendarId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(AppointmentViewModelSchema) } },
    },
  },
})

export const putSetupV1ResourcesIdRecoverRoute = createRoute({
  method: 'put',
  path: '/setup/v1/resources/{id}/recover',
  tags: ['Resources'],
  summary: 'Recover Resource',
  description:
    '<p>Use this endpoint to <b>Recover</b> a deleted resource. A valid <b>resource id</b> is required.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of resource object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      googleAuthReturnUrl: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Google calendar authorization return url',
            in: 'query',
            name: 'googleAuthReturnUrl',
            schema: { type: 'string' },
            required: false,
          },
        }),
      outlookAuthReturnUrl: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Outlook calendar authorization return url',
            in: 'query',
            name: 'outlookAuthReturnUrl',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ResourceViewModelSchema } },
    },
  },
})

export const putSetupV1ResourcesIdServicesRoute = createRoute({
  method: 'put',
  path: '/setup/v1/resources/{id}/services',
  tags: ['Resources'],
  summary: 'Update Linked Services',
  description:
    '<p>Use this endpoint to <b>Update</b> the linked services of a Resource. A valid <b>resource id</b> is required.</p>\r\n<p>Updating services with this endpoint will update the linked services available to the resource. Only those services will be available to the resource.</p>\r\n<p>\r\n  <b>Note:</b> This is a destructive process, any existing linked services will be removed and replaced with the list of services supplied here. Provide the resources complete list of services when using this endpoint.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of resource object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: "Array of valid service object id's",
      content: {
        'application/*+json': { schema: z.array(z.string()) },
        'application/json': { schema: z.array(z.string()) },
        'application/json-patch+json': { schema: z.array(z.string()) },
        'text/json': { schema: z.array(z.string()) },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ResourceViewModelSchema } },
    },
  },
})

export const postSetupV1ResourcesIdServicesRoute = createRoute({
  method: 'post',
  path: '/setup/v1/resources/{id}/services',
  tags: ['Resources'],
  summary: 'Create Linked Services',
  description:
    '<p>Use this endpoint to explicitly <b>Link Services</b> to a Resource. A valid <b>resource id</b> is required.</p>\r\n<p>\r\n  <b>Note:</b> By default, the services array is empty which signifies that all services are provided by the resource. Linking services here will add to the linked service(s) array available to this resource. This will limit the services available to the resource.</p>\r\n<p>You cannot post services that already exist in the array, you can only add new ones. Use the <i>PUT ​/setup​/v1​/resources​/{id}​/services</i> endpoint to update the entire list.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of resource object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: "Array of valid service object id's",
      content: {
        'application/*+json': { schema: z.array(z.string()) },
        'application/json': { schema: z.array(z.string()) },
        'application/json-patch+json': { schema: z.array(z.string()) },
        'text/json': { schema: z.array(z.string()) },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ResourceViewModelSchema } },
    },
  },
})

export const deleteSetupV1ResourcesIdServicesRoute = createRoute({
  method: 'delete',
  path: '/setup/v1/resources/{id}/services',
  tags: ['Resources'],
  summary: 'Delete Linked Services',
  description:
    '<p>Use this endpoint to <b>Delete</b> linked services from a Resource, i.e. unlink the services. A valid <b>resource id</b> is required. Once deleted, all services become available to the resource.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of resource object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ResourceViewModelSchema } },
    },
  },
})

export const postSetupV1ResourcesIdUploadimageRoute = createRoute({
  method: 'post',
  path: '/setup/v1/resources/{id}/uploadimage',
  tags: ['Resources'],
  summary: 'Upload Resource Image',
  description:
    '<p>Use this endpoint to <b>Upload</b> a resource image to the resource. A valid <b>resource id</b> is required. You must convert the image to a <b>base64 encoded string</b> and pass that string as input along with your <b>filename</b>.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of resource object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Input model for image upload',
      content: {
        'application/*+json': { schema: ResourceImageInputModelSchema },
        'application/json': { schema: ResourceImageInputModelSchema },
        'application/json-patch+json': { schema: ResourceImageInputModelSchema },
        'text/json': { schema: ResourceImageInputModelSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ResourceViewModelSchema } },
    },
  },
})

export const getSetupV1ServicegroupsRoute = createRoute({
  method: 'get',
  path: '/setup/v1/servicegroups',
  tags: ['ServiceGroups'],
  summary: 'List Service Groups',
  description:
    '<p>Use this endpoint to return a list of <b>Service Groups</b> for the requested location. If no business location is specified it will default to the Primary Business Location of the company. Use the offset and limit parameters to control the page start and size. Default offset is 0, limit is 20, maximum is 100. Use the other query parameters to filter the results further.</p>',
  request: {
    query: z.object({
      locationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'id of business location, defaults to primary business location',
            in: 'query',
            name: 'locationId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Starting row of page, default 0',
            in: 'query',
            name: 'offset',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Page limit default 20, max 100',
            in: 'query',
            name: 'limit',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ServiceGroupListViewModelSchema } },
    },
  },
})

export const postSetupV1ServicegroupsRoute = createRoute({
  method: 'post',
  path: '/setup/v1/servicegroups',
  tags: ['ServiceGroups'],
  summary: 'Create Service Group',
  description:
    '<p>Use this endpoint to <b>Create</b> a Service Group. If no locationId is specified in the body, the business location will default to the primary business location. Service groups are used to categorize services. Service groups are optional and only make sense if you have multiple services that will be easier read if categorized. Only the service group Type of 0 is supported by the API. It defaults to 0 if not supplied.</p>',
  request: {
    body: {
      content: {
        'application/*+json': { schema: ServiceGroupInputModelSchema },
        'application/json': { schema: ServiceGroupInputModelSchema },
        'application/json-patch+json': { schema: ServiceGroupInputModelSchema },
        'text/json': { schema: ServiceGroupInputModelSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ServiceGroupViewModelSchema } },
    },
  },
})

export const getSetupV1ServicegroupsIdRoute = createRoute({
  method: 'get',
  path: '/setup/v1/servicegroups/{id}',
  tags: ['ServiceGroups'],
  summary: 'Get Service Group',
  description:
    "<p>Use this endpoint to return a <b>Service Group</b> object. A valid <b>serviceGroup id</b> is required. Find service group id's by using the <i>GET /setup/v1/serviceGroups</i> endpoint.</p>",
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'id of serviceGroup object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ServiceGroupViewModelSchema } },
    },
  },
})

export const putSetupV1ServicegroupsIdRoute = createRoute({
  method: 'put',
  path: '/setup/v1/servicegroups/{id}',
  tags: ['ServiceGroups'],
  summary: 'Update Service Group',
  description:
    '<p>Use this endpoint to <b>Update</b> a Service Group object. A valid <b>serviceGroup id</b> is required. </p>',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'id of serviceGroup object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: ServiceGroupInputModelSchema },
        'application/json': { schema: ServiceGroupInputModelSchema },
        'application/json-patch+json': { schema: ServiceGroupInputModelSchema },
        'text/json': { schema: ServiceGroupInputModelSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ServiceGroupViewModelSchema } },
    },
  },
})

export const deleteSetupV1ServicegroupsIdRoute = createRoute({
  method: 'delete',
  path: '/setup/v1/servicegroups/{id}',
  tags: ['ServiceGroups'],
  summary: 'Delete Service Group',
  description:
    '<p>Use this endpoint to <b>Delete</b> a Service Group object. A valid <b>serviceGroup id</b> is required. The service group is not permanently deleted and can be recovered by using the <i>PUT ​/setup​/v1​/servicegroups​/{id}​/recover</i> endpoint.</p>',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'id of serviceGroup object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ServiceGroupViewModelSchema } },
    },
  },
})

export const putSetupV1ServicegroupsIdRecoverRoute = createRoute({
  method: 'put',
  path: '/setup/v1/servicegroups/{id}/recover',
  tags: ['ServiceGroups'],
  summary: 'Recover Service Group',
  description:
    '<p>Use this endpoint to <b>Recover</b> a deleted Service Group. A valid <b>serviceGroup id</b> is required. </p>',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'id of serviceGroup object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ServiceGroupViewModelSchema } },
    },
  },
})

export const getSetupV1ServicesRoute = createRoute({
  method: 'get',
  path: '/setup/v1/services',
  tags: ['Services'],
  summary: 'List Services',
  description:
    '<p>Use this endpoint to return a <b>List of Service</b>. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>',
  request: {
    query: z.object({
      locationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'id of business location, defaults to primary business location',
            in: 'query',
            name: 'locationId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      serviceGroupId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter services by groupId',
            in: 'query',
            name: 'serviceGroupId',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      deleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by deleted status',
            in: 'query',
            name: 'deleted',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Starting row of page, default 0',
            in: 'query',
            name: 'offset',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Page limit default 20, max 100',
            in: 'query',
            name: 'limit',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ServiceListViewModelSchema } },
    },
  },
})

export const postSetupV1ServicesRoute = createRoute({
  method: 'post',
  path: '/setup/v1/services',
  tags: ['Services'],
  summary: 'Create Service',
  description:
    '<p>Use this endpoint to <b>Create</b> a new service. If not specified, the business location defaults to the primary business location. Note: Posting a service to the Primary Business Location will scope as company scoped and make the service available to all locations. If you want a service to only be available from a specific location, include the business location id.</p>\r\n<p>Required fields: <b>Name</b> and <b>Duration</b></p>\r\n<p>The service <b>Type</b> is either, <b>1 = Appointment</b> or <b>2 = Event</b>. Default is 1 if not specified.</p>\r\n<p>For type = 1, Appointments - Create an availability entry for each weekday to provide the service for. <b>All days of the week must be provided when adding service availability.</b> Days are defined as <b>sun, mon, tue, wed, thu, fri</b> and <b>sat</b>. Start and End Times are entered in military format. e.g., 800 is 8:00am, 2230 is 10:30pm. If not provided, it defaults to the primary location business hours.</p>\r\n<p>We support 24-hour availability, set startTime=0 and endTime=2400. To set a whole day as unavailable, set both the startTime and endTime to 0. If you require times in between specified hours to be unavailable, use the service block endpoint at: <i>POST ​/setup​/v1​/services​/{id}​/block</i>.</p>\r\n<p>For type = 2, Events - Create service allocations for their availability. Refer to the: <i>POST /setup​/v1​/services​/{id}​/allocations</i> to set up service allocations for the event.</p>\r\n<p>Options are available for customer selected durations, for details: <a href="https://docs.onsched.com/docs/services-overview#variable-duration">Variable Duration Overview</a></p>\r\n<p>Additional parameters include but are not limited to bookingLimit, maxCapacity and maxGroupSize. For details: <a href="https://docs.onsched.com/docs/service-max-capacity">Service Limits Overview</a></p>',
  request: {
    body: {
      content: {
        'application/*+json': { schema: ServiceInputModelSchema },
        'application/json': { schema: ServiceInputModelSchema },
        'application/json-patch+json': { schema: ServiceInputModelSchema },
        'text/json': { schema: ServiceInputModelSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ServiceViewModelSchema } },
    },
  },
})

export const getSetupV1ServicesAllocationsIdRoute = createRoute({
  method: 'get',
  path: '/setup/v1/services/allocations/{id}',
  tags: ['Services'],
  summary: 'Get Allocation',
  description:
    '<p>Use this endpoint to <b>Get a Service Allocation</b>. A valid <b>serviceAllocation id</b> is required.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of serviceAllocation object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ServiceAllocationViewModelSchema } },
    },
  },
})

export const putSetupV1ServicesAllocationsIdRoute = createRoute({
  method: 'put',
  path: '/setup/v1/services/allocations/{id}',
  tags: ['Services'],
  summary: 'Update Allocation',
  description:
    '<p>Use this endpoint to <b>Update</b> a service allocation. A valid <b>serviceAllocation id</b> is required. Refer to the <i>POST /setup/v1/services/{id}/allocations</i> endpoint for fields names and details.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of serviceAllocation object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Service allocation update model',
      content: {
        'application/*+json': { schema: ServiceAllocationUpdateModelSchema },
        'application/json': { schema: ServiceAllocationUpdateModelSchema },
        'application/json-patch+json': { schema: ServiceAllocationUpdateModelSchema },
        'text/json': { schema: ServiceAllocationUpdateModelSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ServiceAllocationViewModelSchema } },
    },
  },
})

export const deleteSetupV1ServicesAllocationsIdRoute = createRoute({
  method: 'delete',
  path: '/setup/v1/services/allocations/{id}',
  tags: ['Services'],
  summary: 'Delete Allocation',
  description:
    '<p>Use this endpoint to permanently <b>Delete</b> a service allocation. A valid <b>serviceAllocation id</b> is required.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of serviceAllocation object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ServiceAllocationViewModelSchema } },
    },
  },
})

export const putSetupV1ServicesBlockIdRoute = createRoute({
  method: 'put',
  path: '/setup/v1/services/block/{id}',
  tags: ['Services'],
  summary: 'Update Block',
  description:
    '<p>Use this endpoint to <b>Update</b> a Service Block. A valid <b>serviceBlock id</b> is required.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of serviceBlock object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Service Block update model',
      content: {
        'application/*+json': { schema: ServiceBlockUpdateModelSchema },
        'application/json': { schema: ServiceBlockUpdateModelSchema },
        'application/json-patch+json': { schema: ServiceBlockUpdateModelSchema },
        'text/json': { schema: ServiceBlockUpdateModelSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ServiceBlockViewModelSchema } },
    },
  },
})

export const deleteSetupV1ServicesBlockIdRoute = createRoute({
  method: 'delete',
  path: '/setup/v1/services/block/{id}',
  tags: ['Services'],
  summary: 'Delete Block',
  description:
    '<p>Use this endpoint to permanently <b>Delete</b> a Service Block. A valid <b>serviceBlock id</b> is required.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of serviceBlock object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ResourceBlockViewModelSchema } },
    },
  },
})

export const getSetupV1ServicesBlocksIdRoute = createRoute({
  method: 'get',
  path: '/setup/v1/services/blocks/{id}',
  tags: ['Services'],
  summary: 'Get Block',
  description:
    '<p>Use this endpoint to <b>Get a Service Block</b>. A valid <b>serviceBlock id</b> is required.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of serviceBlock object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ResourceBlockViewModelSchema } },
    },
  },
})

export const postSetupV1ServicesCalendarRoute = createRoute({
  method: 'post',
  path: '/setup/v1/services/calendar',
  tags: ['Services'],
  summary: 'Link Service to Calendar',
  description: '<p>Use this endpoint to <b>Link a Service</b> to a calendar. </p>',
  request: {
    body: {
      content: {
        'application/*+json': { schema: ServiceCalendarInputModelSchema },
        'application/json': { schema: ServiceCalendarInputModelSchema },
        'application/json-patch+json': { schema: ServiceCalendarInputModelSchema },
        'text/json': { schema: ServiceCalendarInputModelSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ServiceCalendarViewModelSchema } },
    },
  },
})

export const deleteSetupV1ServicesCalendarIdRoute = createRoute({
  method: 'delete',
  path: '/setup/v1/services/calendar/{id}',
  tags: ['Services'],
  summary: 'Delete Service Links',
  description:
    '<p>Use this endpoint to <b>Delete</b> service links from the calendar specified. A valid <b>calendar id</b> is required.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of calender to delete service links from',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ServiceCalendarViewModelSchema } },
    },
  },
})

export const getSetupV1ServicesIdRoute = createRoute({
  method: 'get',
  path: '/setup/v1/services/{id}',
  tags: ['Services'],
  summary: 'Get Service',
  description:
    "<p>Use this endpoint to return a <b>Service</b> object. A valid <b>service id</b> is required. Find service id's by using the <i>GET /setup/v1/services</i> endpoint.</p>",
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'id of service object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ServiceViewModelSchema } },
    },
  },
})

export const putSetupV1ServicesIdRoute = createRoute({
  method: 'put',
  path: '/setup/v1/services/{id}',
  tags: ['Services'],
  summary: 'Update Service',
  description:
    '<p>Use this endpoint to <b>Update</b> a service object. A valid <b>service id</b> is required.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    body: {
      content: {
        'application/*+json': { schema: ServiceUpdateModelSchema },
        'application/json': { schema: ServiceUpdateModelSchema },
        'application/json-patch+json': { schema: ServiceUpdateModelSchema },
        'text/json': { schema: ServiceUpdateModelSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ServiceViewModelSchema } },
    },
  },
})

export const deleteSetupV1ServicesIdRoute = createRoute({
  method: 'delete',
  path: '/setup/v1/services/{id}',
  tags: ['Services'],
  summary: 'Delete Service',
  description:
    '<p>Use this endpoint to <b>Delete</b> a service object. A valid <b>service id</b> is required. The service is not permanently deleted and can be recovered by using the <i>PUT /setup​/v1​/services​/{id}​/recover</i> endpoint.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of service object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ServiceViewModelSchema } },
    },
  },
})

export const getSetupV1ServicesIdAllocationsRoute = createRoute({
  method: 'get',
  path: '/setup/v1/services/{id}/allocations',
  tags: ['Services'],
  summary: 'List Service Allocations',
  description:
    '<p>Use this endpoint to return a <b>List of Service Allocations</b> for a specified service. A valid <b>service id</b> is required. Service allocations are used for <b>Event type services only</b> where the events are offered on specific dates and times. Retrieve all allocations for a location by passing in 0 as the service id.</p>\r\n<p>The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of  service to list allocations for, 0 for all',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      locationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The id of the location. Defaults to the primary location',
            in: 'query',
            name: 'locationId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      resourceId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The id of the resource to filter on',
            in: 'query',
            name: 'resourceId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      startDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Format YYYY-MM-DD. Filter appointments by on/after startDate',
            in: 'query',
            name: 'startDate',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      endDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Format YYYY-MM-DD. Filter appointments on/before endDate',
            in: 'query',
            name: 'endDate',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Starting row of page, default 0',
            in: 'query',
            name: 'offset',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Page limit default 20, max 100',
            in: 'query',
            name: 'limit',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'service alloaction object',
      content: { 'application/json': { schema: ServiceAllocationListViewModelSchema } },
    },
    400: { description: 'Missing or invalid values in the request' },
    401: { description: 'Authorization error.' },
    404: { description: 'Service was not found' },
  },
})

export const postSetupV1ServicesIdAllocationsRoute = createRoute({
  method: 'post',
  path: '/setup/v1/services/{id}/allocations',
  tags: ['Services'],
  summary: 'Create Allocation',
  description:
    '<p>Use this endpoint to <b>Create</b> a service allocation for a service. A valid <b>service id</b> is required. Service allocations are used for <b>Event type services only</b>. Service allocations allow you to specify the time(s) a service is available as opposed to using weekly availability which represents a weekly schedule, ie: Mon-Fri 9am-5pm.</p>\r\n<p>Required fields: <b>startDate, endDate, startTime, endTime</b> and <b>reason</b>. Service allocations can be set to specific time ranges or for the whole day by setting startTime=0 and endTime=2400. Service allocations can repeat for a specific date range instance or set to repeat at a specified frequency.</p>\r\n<p>\r\n  <b>Repeat object: (repeats = true)</b>\r\n</p>\r\n<p>The <b>frequency</b> can be set to a value of <b>D, W or M</b> for <b>Day, Week</b> or <b>Month</b> respectively.</p>\r\n<p>Use the <b>interval</b> property to specify the interval that the allocation repeats. For example, an interval of 2 for a weekly allocation means that the allocation will repeat every 2nd week beginning at the day specified. A daily allocation with an interval of 10 means the allocation will repeat every 10 days. The interval property applies to all repeat frequencies.  <b>If using the repeat functionality an interval value is required</b>.</p>\r\n<p>\r\n  <b>DAILY ALLOCATIONS</b>: Will repeat for each day of the week for the date range specified for the interval specified.  An interval value of “1” repeats every day, and an interval value of “3” is every 3rd day.</p>\r\n<p>\r\n  <b>WEEKLY ALLOCATIONS</b>: Will repeat only on the specified days of the week for the date range specified. For weekly the <b>frequency</b> is required and should be set to <b>“W”</b>. You must specify the <b>“weekdays”</b> parameter. Weekdays are expressed as a string of digits with each single digit in the string representing a day of the week. The possible values are <b>0,1,2,3,4,5,6</b> where <b>0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday</b>.  For example, a weekly frequency with an interval of “1”, and an entry of weekdays = “24”, will repeat each week on Tuesday and Thursday for the duration of the allocation date range.</p>\r\n<p>\r\n  <b>MONTHLY ALLOCATIONS</b>: Will repeat either on the day of the month specified in the <b>monthDay</b> property or on the day of the week and week of the month specified by the <b>monthType</b> property.  In both cases <b>frequency</b> is required and should be set to <b>“M”</b>, monthly. <b>monthDay</b> is the day of the month you want allocated.  If monthDay=’15’ this means to allocate the 15th of every month in the date range requested. Using monthDay in conjunction with monthType addresses “day of the week and week of the month” scenario.  There are two possible values for monthType: <b>D for Day of Month</b> or <b>W for Week of Month.</b> For <b>monthType D</b>, monthDay value must be between 1 and 31. It is the day of the month to repeat on.  For <b>monthType M</b>, monthDay value contains 2 digits:  day of week (0-6), (0,1,2,3,4,5,6 where 0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday) and week of month (1-5). 1 being the first week, 2 being the second. The third Thursday of the month is depicted as a monthType=”M” and monthDay=”43”.</p>\r\n<p>\r\n  <b>Repeats will end on the date specified by the end date.</b>\r\n</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of service object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/*+json': { schema: ServiceAllocationInputModelSchema },
        'application/json': { schema: ServiceAllocationInputModelSchema },
        'application/json-patch+json': { schema: ServiceAllocationInputModelSchema },
        'text/json': { schema: ServiceAllocationInputModelSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ServiceAllocationViewModelSchema } },
    },
  },
})

export const postSetupV1ServicesIdAllocationsBulkRoute = createRoute({
  method: 'post',
  path: '/setup/v1/services/{id}/allocations/bulk',
  tags: ['Services'],
  summary: 'Create Allocations Bulk',
  description:
    '<p>Use this endpoint to <b>Create</b> bulk service allocations. A valid <b>service id</b> is required. Use this endpoint only if you need to POST multiple service allocations in one transaction. For details refer to: <a href="POST ​/setup​/v1​/services​/{id}​/allocations">Post Service Allocation</a></p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of service object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/*+json': { schema: ServiceAllocationsInputModelSchema },
        'application/json': { schema: ServiceAllocationsInputModelSchema },
        'application/json-patch+json': { schema: ServiceAllocationsInputModelSchema },
        'text/json': { schema: ServiceAllocationsInputModelSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(ServiceAllocationViewModelSchema) } },
    },
  },
})

export const getSetupV1ServicesIdAvailabilityRoute = createRoute({
  method: 'get',
  path: '/setup/v1/services/{id}/availability',
  tags: ['Services'],
  summary: 'Get Weekly Availability',
  description:
    '<p>Use this endpoint to return the <b>Weekly Service Availability</b> for an appointment service. A valid <b>service id</b> is required. Weekly availability is returned for services where the Type = 1. For event type services, where service Type = 2, refer to the <i>GET ​/setup​/v1​/services​/{id}​/allocations</i> endpoint.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of service object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ServiceAvailabilityViewModelSchema } },
    },
  },
})

export const putSetupV1ServicesIdAvailabilityRoute = createRoute({
  method: 'put',
  path: '/setup/v1/services/{id}/availability',
  tags: ['Services'],
  summary: 'Update Weekly Availability',
  description:
    '<p>Use this endpoint to <b>Update</b> service weekly availability. A valid <b>service id</b> is required. The availability day entries are created when a service object is created.</p>\r\n<p>To update weekly availability hours, all days of the week must be provided. Days are defined as <b>sun, mon, tue, wed, thu, fri</b> and <b>sat</b>. The <b>startTime</b> and <b>endTime</b> fields are entered in <b>military format. e.g., 800 is 8:00am, 2230 is 10:30pm</b>. We support 24-hour availability, set startTime=0 and endTime=2400. To set a whole day as unavailable, set both the startTime and endTime to 0.</p>\r\n<p>If you require times in between specified hours to be unavailable, use the resource blocks endpoints. Times entered represent the timezone of the business location.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of service object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Service Availability Input Model',
      content: {
        'application/*+json': { schema: AvailabilityInputModelSchema },
        'application/json': { schema: AvailabilityInputModelSchema },
        'application/json-patch+json': { schema: AvailabilityInputModelSchema },
        'text/json': { schema: AvailabilityInputModelSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ServiceAvailabilityViewModelSchema } },
    },
  },
})

export const postSetupV1ServicesIdBlockRoute = createRoute({
  method: 'post',
  path: '/setup/v1/services/{id}/block',
  tags: ['Services'],
  summary: 'Create Block',
  description:
    '<p>Use this endpoint to <b>Create</b> a Service Block. A valid <b>service id</b> is required.</p>\r\n<p>Required fields: <b>startDate, endDate, startTime, endTime</b> and <b>reason</b>.</p>\r\n<p>Service blocks can be set to specific time ranges or for the whole day. To block a whole day set startTime to 0 and endTime to 2400.</p>\r\n<p>Service blocks can be for a specific date range instance or set to repeat at a specified frequency. </p>\r\n<p>\r\n  <b>Repeat object: (repeats = true)</b>\r\n</p>\r\n<p>The <b>frequency</b> can be set to a value of <b>D, W or M</b> for <b>Day, Week</b> or <b>Month</b> respectively.</p>\r\n<p>Use the <b>interval</b> property to specify the interval that the block repeats. For example, an interval of 2 for a weekly block means that the block will repeat every 2nd week beginning at the day specified. A daily block with an interval of 10 means the block will repeat every 10 days. The interval property applies to all repeat frequencies. <b>If using the repeat functionality an interval value is required</b>.</p>\r\n<p>\r\n  <b>DAILY BLOCKS</b>: Will repeat for each day of the week for the date range specified for the interval specified.  An interval value of “1” repeats every day, and an interval value of “3” is every 3rd day.</p>\r\n<p>\r\n  <b>WEEKLY BLOCKS</b>: Will repeat only on the specified days of the week for the date range specified. For weekly the <b>frequency</b> is required and should be set to <b>“W”</b>.  You must specify the <b>weekdays</b> parameter. Weekdays are expressed as a string of digits with each single digit in the string representing a day of the week. The possible values are <b>0,1,2,3,4,5,6</b> where <b>0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday</b>. For example, a weekly frequency with an interval of “1”, and an entry of weekdays = “24”, will repeat each week on Tuesday and Thursday for the duration of the block date range.</p>\r\n<p>\r\n  <b>MONTHLY BLOCKS</b>: Will repeat either on the day of the month specified in the <b>monthDay</b> property or on the day of the week and week of the month specified by the <b>monthType</b> property.  In both cases <b>frequency</b> is required and should be set to <b>“M”</b>, monthly, <b>monthDay</b> is the day of the month you want blocked.  If monthDay=’15’ this means to block the 15th of every month in the date range requested. Using monthDay in conjunction with monthType addresses “day of the week and week of the month” scenario.  There are two possible values for monthType: <b>D for Day of Month</b> or <b>W for Week of Month.</b> For <b>monthType D</b>, monthDay value must be between 1 and 31. It is the day of the month to repeat on. For <b>monthType M</b>, monthDay value contains 2 digits: day of week (0-6), (0,1,2,3,4,5,6 where 0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday) and week of month (1-5). 1 being the first week, 2 being the second. The third Thursday of the month is depicted as a monthType=”M” and monthDay=”43”.</p>\r\n<p>\r\n  <b>Repeats will end on the date specified by the end date.</b>\r\n</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of service object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/*+json': { schema: ServiceBlockInputModelSchema },
        'application/json': { schema: ServiceBlockInputModelSchema },
        'application/json-patch+json': { schema: ServiceBlockInputModelSchema },
        'text/json': { schema: ServiceBlockInputModelSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ServiceBlockViewModelSchema } },
    },
  },
})

export const getSetupV1ServicesIdBlocksRoute = createRoute({
  method: 'get',
  path: '/setup/v1/services/{id}/blocks',
  tags: ['Services'],
  summary: 'List Service Blocks',
  description:
    '<p>Use this endpoint to return a list of <b>Service Blocks</b>. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of service to list blocks for',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      startDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Format YYYY-MM-DD. Filter blocks on/after startDate',
            in: 'query',
            name: 'startDate',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      endDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Format YYYY-MM-DD. Filter on/before endDate',
            in: 'query',
            name: 'endDate',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Starting row of page, default 0',
            in: 'query',
            name: 'offset',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Page limit default 20, max 100',
            in: 'query',
            name: 'limit',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "service block object's",
      content: { 'application/json': { schema: ServiceBlockListViewModelSchema } },
    },
    400: { description: 'Missing or invalid values in the request' },
    401: { description: 'Authorization error.' },
    404: { description: 'Service was not found' },
  },
})

export const getSetupV1ServicesIdCalendarRoute = createRoute({
  method: 'get',
  path: '/setup/v1/services/{id}/calendar',
  tags: ['Services'],
  summary: 'Get Linked Calendar',
  description:
    '<p>Use this endpoint to <b>Get the Linked Calendar</b> for the service requested. A valid <b>service id</b> is required. A service can only be linked to one calendar in a location.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of service object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      locationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'id of business location, defaults to primary business location',
            in: 'query',
            name: 'locationId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ServiceCalendarViewModelSchema } },
    },
  },
})

export const deleteSetupV1ServicesIdDeleteimageRoute = createRoute({
  method: 'delete',
  path: '/setup/v1/services/{id}/deleteimage',
  tags: ['Services'],
  summary: 'Delete Service Image',
  description:
    '<p>Use this endpoint to permanently <b>Delete</b> a previously uploaded service image. A valid <b>service id</b> is required.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of service object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ServiceViewModelSchema } },
    },
  },
})

export const putSetupV1ServicesIdRecoverRoute = createRoute({
  method: 'put',
  path: '/setup/v1/services/{id}/recover',
  tags: ['Services'],
  summary: 'Recover Service',
  description:
    '<p>Use this endpoint to <b>Recover</b> a deleted service object. A valid <b>service id</b> is required.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ServiceViewModelSchema } },
    },
  },
})

export const getSetupV1ServicesIdResourcesRoute = createRoute({
  method: 'get',
  path: '/setup/v1/services/{id}/resources',
  tags: ['Services'],
  summary: 'List Resources for Service',
  description:
    '<p>Use this endpoint to return a list of <b>Resources</b> that provide the requested service. A valid <b>service id</b> is required. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of service object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Starting row of page, default 0',
            in: 'query',
            name: 'offset',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Page limit default 20, max 100',
            in: 'query',
            name: 'limit',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      googleAuthReturnUrl: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Google calendar authorization return url',
            in: 'query',
            name: 'googleAuthReturnUrl',
            schema: { type: 'string' },
            required: false,
          },
        }),
      outlookAuthReturnUrl: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Outlook calendar authorization return url',
            in: 'query',
            name: 'outlookAuthReturnUrl',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ResourceListViewModelSchema } },
    },
  },
})

export const postSetupV1ServicesIdUploadimageRoute = createRoute({
  method: 'post',
  path: '/setup/v1/services/{id}/uploadimage',
  tags: ['Services'],
  summary: 'Upload Service Image',
  description:
    '<p>Use this endpoint to <b>Upload</b> an image to the service. A valid <b>service id</b> is required. You must convert the image to a <b>base64 encoded string</b> and pass that string as input along with your <b>filename</b>.</p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of service object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Input model for image upload',
      content: {
        'application/*+json': { schema: ServiceImageInputModelSchema },
        'application/json': { schema: ServiceImageInputModelSchema },
        'application/json-patch+json': { schema: ServiceImageInputModelSchema },
        'text/json': { schema: ServiceImageInputModelSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ServiceViewModelSchema } },
    },
  },
})
