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

const AppoinmentBookingFormsViewModelSchema = z
  .strictObject({
    bookingConfirmationPage: z.string().nullable().exactOptional(),
    bookingForm: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AppoinmentBookingFormsViewModel')

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

const BookingFieldItemSchema = z
  .strictObject({
    name: z.string().nullable().exactOptional(),
    value: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BookingFieldItem')

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

const AppointmentBookModelSchema = z
  .strictObject({
    appointmentBookingFields: z.array(BookingFieldItemSchema).nullable().exactOptional(),
    customFields: CustomFieldInputModelSchema.exactOptional(),
    customerBookingFields: z.array(BookingFieldItemSchema).nullable().exactOptional(),
    customerMessage: z.string().nullable().exactOptional(),
    email: z.string().nullable().exactOptional(),
    groupSize: z.int32().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    notes: z.string().nullable().exactOptional(),
    phone: z.string().nullable().exactOptional(),
    phoneExt: z.string().nullable().exactOptional(),
    phoneType: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AppointmentBookModel')

const AppointmentCustomerViewModelSchema = z
  .strictObject({
    appointmentId: z.string().nullable().exactOptional(),
    customerId: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AppointmentCustomerViewModel')

const AppointmentInitialModelSchema = z
  .strictObject({
    appointmentBookingFields: z.array(BookingFieldItemSchema).nullable().exactOptional(),
    bookedBy: z.string().nullable().exactOptional(),
    bookingWindowId: z.string().nullable().exactOptional(),
    calendarId: z.string().nullable().exactOptional(),
    customFields: CustomFieldInputModelSchema.exactOptional(),
    customerBookingFields: z.array(BookingFieldItemSchema).nullable().exactOptional(),
    customerId: z.string().nullable().exactOptional(),
    customerMessage: z.string().nullable().exactOptional(),
    email: z.string().nullable().exactOptional(),
    endDateTime: z.iso.datetime({ offset: true }).exactOptional(),
    groupSize: z.int32().nullable().exactOptional(),
    location: z.string().nullable().exactOptional(),
    locationId: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    notes: z.string().nullable().exactOptional(),
    phone: z.string().nullable().exactOptional(),
    phoneType: z.string().nullable().exactOptional(),
    resourceGroupId: z.string().nullable().exactOptional(),
    resourceId: z.string().nullable().exactOptional(),
    resourceIds: z.string().nullable().exactOptional(),
    serviceAllocationId: z.string().nullable().exactOptional(),
    serviceId: z.string().nullable().exactOptional(),
    startDateTime: z.iso.datetime({ offset: true }).exactOptional(),
    timezoneName: z.string().nullable().exactOptional(),
    travelAppointmentId: z.string().nullable().exactOptional(),
    travelTimeMins: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AppointmentInitialModel')

const BookingFieldListItemViewModelSchema = z
  .strictObject({
    id: z.string().nullable().exactOptional(),
    leadAnswerScore: z.int32().exactOptional(),
    leadRoutingEntityId: z.int32().exactOptional(),
    leadRoutingEntityType: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    object: z.string().nullable().exactOptional(),
    value: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BookingFieldListItemViewModel')

const BookingFieldViewModelSchema = z
  .strictObject({
    businessId: z.string().nullable().exactOptional(),
    companyId: z.string().nullable().exactOptional(),
    fieldLabel: z.string().nullable().exactOptional(),
    fieldLength: z.int32().exactOptional(),
    fieldListItems: z.array(BookingFieldListItemViewModelSchema).nullable().exactOptional(),
    fieldName: z.string().nullable().exactOptional(),
    fieldRequired: z.boolean().exactOptional(),
    fieldType: z.string().nullable().exactOptional(),
    id: z.string().nullable().exactOptional(),
    leadQuestion: z.boolean().exactOptional(),
    leadQuestionWeight: z.float64().exactOptional(),
    object: z.string().nullable().exactOptional(),
    sortKey: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BookingFieldViewModel')

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

const AppointmentInitialViewModelSchema = z
  .strictObject({
    appointmentBookingFields: z.array(BookingFieldViewModelSchema).nullable().exactOptional(),
    auditTrail: z.array(AppointmentAuditViewModelSchema).nullable().exactOptional(),
    bookedBy: z.string().nullable().exactOptional(),
    bookingForms: AppoinmentBookingFormsViewModelSchema.exactOptional(),
    businessName: z.string().nullable().exactOptional(),
    calendarId: z.string().nullable().exactOptional(),
    confirmationNumber: z.string().nullable().exactOptional(),
    confirmed: z.boolean().exactOptional(),
    createDate: z.string().nullable().exactOptional(),
    customFields: z.record(z.string(), CustomFieldViewModelSchema).nullable().exactOptional(),
    customerBookingFields: z.array(BookingFieldViewModelSchema).nullable().exactOptional(),
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
  .openapi('AppointmentInitialViewModel')

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

const AppointmentNoShowModelSchema = z.strictObject({}).openapi('AppointmentNoShowModel')

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

const AppointmentRescheduleModelSchema = z
  .strictObject({
    endDateTime: z.iso.datetime({ offset: true }).exactOptional(),
    resourceId: z.string().nullable().exactOptional(),
    resourceIds: z.string().nullable().exactOptional(),
    serviceId: z.string().nullable().exactOptional(),
    startDateTime: z.iso.datetime({ offset: true }).exactOptional(),
    travelAppointmentId: z.string().nullable().exactOptional(),
    travelTimeMins: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AppointmentRescheduleModel')

const AppointmentReserveModelSchema = z
  .strictObject({
    appointmentBookingFields: z.array(BookingFieldItemSchema).nullable().exactOptional(),
    customFields: CustomFieldInputModelSchema.exactOptional(),
    customerBookingFields: z.array(BookingFieldItemSchema).nullable().exactOptional(),
    customerMessage: z.string().nullable().exactOptional(),
    email: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    notes: z.string().nullable().exactOptional(),
    phone: z.string().nullable().exactOptional(),
    phoneExt: z.string().nullable().exactOptional(),
    phoneType: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AppointmentReserveModel')

const AvailableDayViewModelSchema = z
  .strictObject({
    available: z.boolean().exactOptional(),
    bookingCount: z.int32().exactOptional(),
    bookingLimit: z.int32().exactOptional(),
    closed: z.boolean().exactOptional(),
    date: z.string().nullable().exactOptional(),
    object: z.string().nullable().exactOptional(),
    reason: z.string().nullable().exactOptional(),
    reasonCode: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AvailableDayViewModel')

const AvailabilityDayViewModelSchema = z
  .strictObject({
    availableDays: z.array(AvailableDayViewModelSchema).nullable().exactOptional(),
    object: z.string().nullable().exactOptional(),
    resourceDescription: z.string().nullable().exactOptional(),
    resourceId: z.string().nullable().exactOptional(),
    resourceName: z.string().nullable().exactOptional(),
    serviceDescription: z.string().nullable().exactOptional(),
    serviceId: z.string().nullable().exactOptional(),
    serviceName: z.string().nullable().exactOptional(),
    tzRequested: z.int32().nullable().exactOptional(),
    url: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AvailabilityDayViewModel')

const AvailableTimeViewModelSchema = z
  .strictObject({
    allowableBookings: z.int32().exactOptional(),
    allowableCapacity: z.int32().exactOptional(),
    availableBookings: z.int32().exactOptional(),
    availableCapacity: z.int32().exactOptional(),
    date: z.string().nullable().exactOptional(),
    displayTime: z.string().nullable().exactOptional(),
    duration: z.int32().exactOptional(),
    endDateTime: z.string().nullable().exactOptional(),
    resourceId: z.string().nullable().exactOptional(),
    startDateTime: z.string().nullable().exactOptional(),
    time: z.int32().exactOptional(),
    travelAppointmentId: z.string().nullable().exactOptional(),
    travelTimeMins: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AvailableTimeViewModel')

const AvailabilityViewModelSchema = z
  .strictObject({
    availableDays: z.array(AvailableDayViewModelSchema).nullable().exactOptional(),
    availableTimes: z.array(AvailableTimeViewModelSchema).nullable().exactOptional(),
    businessName: z.string().nullable().exactOptional(),
    calendarId: z.string().nullable().exactOptional(),
    calendarResourceGroupId: z.string().nullable().exactOptional(),
    endDate: z.string().nullable().exactOptional(),
    firstAvailableDate: z.string().nullable().exactOptional(),
    locationId: z.string().nullable().exactOptional(),
    object: z.string().nullable().exactOptional(),
    resourceDescription: z.string().nullable().exactOptional(),
    resourceId: z.string().nullable().exactOptional(),
    resourceIds: z.string().nullable().exactOptional(),
    resourceName: z.string().nullable().exactOptional(),
    serviceDescription: z.string().nullable().exactOptional(),
    serviceDuration: z.int32().exactOptional(),
    serviceId: z.string().nullable().exactOptional(),
    serviceName: z.string().nullable().exactOptional(),
    startDate: z.string().nullable().exactOptional(),
    timezoneName: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Returns the Timezone Name in IANA format if a TimezoneName was passed into an Availability call; otherwise this property is hidden',
      }),
    tzRequested: z
      .int32()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Returns the timezone offset if a tzOffset was supplied into an Availability call; null if a TimezoneName was passed; otherwise the Business timezone offset is returned',
      }),
    url: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AvailabilityViewModel')

const BookingFieldListViewModelSchema = z
  .strictObject({
    bookingFields: z.array(BookingFieldViewModelSchema).nullable().exactOptional(),
    object: z.string().nullable().exactOptional(),
    total: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BookingFieldListViewModel')

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

const BusinessHourViewModelSchema = z
  .strictObject({
    endTime: z.int32().exactOptional(),
    is24Hours: z.boolean().exactOptional(),
    isOpen: z.boolean().exactOptional(),
    startTime: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BusinessHourViewModel')

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

const BusinessServiceViewModelSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    object: z.string().nullable().exactOptional(),
    serviceId: z.int32().exactOptional(),
    serviceName: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BusinessServiceViewModel')

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

const CountryViewModelSchema = z
  .strictObject({
    code: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    object: z.string().nullable().exactOptional(),
  })
  .openapi({ description: 'View model for country objects', required: [] })
  .openapi('CountryViewModel')

const CustomFieldListDefinitionViewModelSchema = z
  .strictObject({
    id: z.string().nullable().exactOptional(),
    leadAnswerScore: z.int32().exactOptional(),
    leadRoutingEntityId: z.int32().exactOptional(),
    leadRoutingEntityType: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    object: z.string().nullable().exactOptional(),
    value: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CustomFieldListDefinitionViewModel')

const CustomFieldDefinitionViewModelSchema = z
  .strictObject({
    fieldKey: z.string().nullable().exactOptional(),
    fieldLabel: z.string().nullable().exactOptional(),
    fieldLength: z.int32().exactOptional(),
    fieldListItems: z.array(CustomFieldListDefinitionViewModelSchema).nullable().exactOptional(),
    fieldName: z.string().nullable().exactOptional(),
    fieldPublic: z.boolean().exactOptional(),
    fieldRequired: z.boolean().exactOptional(),
    fieldType: z.string().nullable().exactOptional(),
    id: z.string().nullable().exactOptional(),
    leadQuestion: z.boolean().exactOptional(),
    leadQuestionWeight: z.float64().exactOptional(),
    object: z.string().nullable().exactOptional(),
    sortKey: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CustomFieldDefinitionViewModel')

const CustomFieldDefinitionListViewModelSchema = z
  .strictObject({
    customFields: z.array(CustomFieldDefinitionViewModelSchema).nullable().exactOptional(),
    object: z.string().nullable().exactOptional(),
    total: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CustomFieldDefinitionListViewModel')

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

const CustomerInputModelSchema = z
  .strictObject({
    address: AddressInputModelSchema.exactOptional(),
    contact: ContactInputModelSchema.exactOptional(),
    customFields: CustomFieldInputModelSchema.exactOptional(),
    email: z.string().nullable().exactOptional(),
    firstname: z.string().nullable().exactOptional(),
    lastname: z.string().nullable().exactOptional(),
    locationId: z.string().nullable().exactOptional().openapi({ description: '' }),
    name: z.string().nullable().exactOptional(),
    notificationType: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '0 = default(Email), 1 = Email, 2 = SMS, 3 = Email and SMS' }),
    sendLeadNotification: z.boolean().exactOptional(),
    stripeCustomerId: z.string().nullable().exactOptional(),
    type: z.int32().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CustomerInputModel')

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

const CustomerUpdateModelSchema = z
  .strictObject({
    address: AddressUpdateModelSchema.exactOptional(),
    contact: ContactUpdateModelSchema.exactOptional(),
    customFields: CustomFieldUpdateModelSchema.exactOptional(),
    email: z.string().nullable().exactOptional(),
    firstname: z.string().nullable().exactOptional(),
    lastname: z.string().nullable().exactOptional(),
    locationId: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    notificationType: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '0 = default(Email), 1 = Email, 2 = SMS, 3 = Email and SMS' }),
    stripeCustomerId: z.string().nullable().exactOptional(),
    type: z.int32().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CustomerUpdateModel')

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

const ResourceServiceViewModelSchema = z
  .strictObject({
    object: z.string().nullable().exactOptional(),
    resourceId: z.int32().exactOptional(),
    resourceName: z.string().nullable().exactOptional(),
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
    googleCalendarId: z.string().nullable().exactOptional(),
    groupId: z.string().nullable().exactOptional(),
    hourly: z.float64().nullable().exactOptional(),
    id: z.string().nullable().exactOptional(),
    ignoreBusinessHours: z.boolean().exactOptional(),
    imageUrl: z.string().nullable().exactOptional(),
    locationId: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    notificationType: z.int32().exactOptional(),
    object: z.string().nullable().exactOptional(),
    outlookCalendarId: z.string().nullable().exactOptional(),
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

const ResourceServiceListViewModelSchema = z
  .strictObject({
    count: z.int32().exactOptional(),
    data: z.array(ResourceServiceViewModelSchema).nullable().exactOptional(),
    hasMore: z.boolean().exactOptional(),
    object: z.string().nullable().exactOptional(),
    total: z.int32().exactOptional(),
    url: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResourceServiceListViewModel')

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

const ServiceSortOrderSchema = z.enum(['natural', 'name']).openapi('ServiceSortOrder')

const ServicesScopeSchema = z.enum(['company', 'location', 'all']).openapi('ServicesScope')

const StateViewModelSchema = z
  .strictObject({
    code: z.string().nullable().exactOptional(),
    country: z.string().nullable().exactOptional(),
    countryName: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    object: z.string().nullable().exactOptional(),
  })
  .openapi({ description: 'View model for state object', required: [] })
  .openapi('StateViewModel')

const UnavailableTimeViewModelSchema = z
  .strictObject({
    calendarId: z.string().nullable().exactOptional(),
    date: z.string().nullable().exactOptional(),
    endDateTime: z.string().nullable().exactOptional(),
    entityId: z.int32().exactOptional(),
    entityType: z.string().nullable().exactOptional(),
    fromTime: z.int32().exactOptional(),
    locationId: z.string().nullable().exactOptional(),
    objectName: z.string().nullable().exactOptional(),
    reason: z.string().nullable().exactOptional(),
    reasonCode: z.string().nullable().exactOptional(),
    resourceId: z.string().nullable().exactOptional(),
    resourceName: z.string().nullable().exactOptional(),
    serviceId: z.string().nullable().exactOptional(),
    serviceName: z.string().nullable().exactOptional(),
    startDateTime: z.string().nullable().exactOptional(),
    toTime: z.int32().exactOptional(),
    tzOffset: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UnavailableTimeViewModel')

const UnavailableTimeListViewModelSchema = z
  .strictObject({
    object: z.string().nullable().exactOptional(),
    unavailableTimes: z.array(UnavailableTimeViewModelSchema).nullable().exactOptional(),
    url: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UnavailableTimeListViewModel')

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

export const getConsumerV1AppointmentsRoute = createRoute({
  method: 'get',
  path: '/consumer/v1/appointments',
  tags: ['Appointments'],
  summary: 'Get Appointments',
  description:
    '<p>Use this endpoint to return a <b>List of Appointments</b>. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further. For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a></p>',
  request: {
    query: z.object({
      locationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'id of business location',
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
      lastname: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by lastname or part of it',
            in: 'query',
            name: 'lastname',
            schema: { type: 'string' },
            required: false,
          },
        }),
      phone: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by phone number or part of it',
            in: 'query',
            name: 'phone',
            schema: { type: 'string' },
            required: false,
          },
        }),
      serviceId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by service',
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
            description: 'Filter by calendar',
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
            description: 'Filter by resource',
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
            description: 'Filter by customer',
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
            description: 'Filter by service allocation',
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
            description: 'Format YYYY-MM-DD. Filter by on/after startDate',
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
      status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by status: IN, BK, CN, RE, RS',
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
            description: 'Filter by the email of who booked',
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
            description: 'Page limit, default 20, max 100',
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

export const postConsumerV1AppointmentsRoute = createRoute({
  method: 'post',
  path: '/consumer/v1/appointments',
  tags: ['Appointments'],
  summary: 'Create Appointment',
  description:
    '<p>Use this endpoint to <b>Create</b> a new appointment. The appointment will be created with an "IN", Initial status. Posting an appointment with "IN" status requires minimal information and requires a "PUT book" call to complete the booking transaction, <i>PUT ​/consumer​/v1​/appointments​/{id}​/book</i>. Alternatively, you can post an appointment using the <b>completeBooking</b> option which completes the booking in one transaction, but it will require more data. The method you choose depends on your solutions workflow. </p>\r\n<p>\r\n  <b>StartDateTime</b> and <b>EndDateTime</b> are required. Use the ISO 8601 format for DateTime Timezone, e.g., <b>2016-10-30T09:00:00-5:00</b></p>\r\n<p>A valid <b>serviceId</b> is required. The serviceId provided must be valid for the location being booked. A valid serviceId is one that is scoped to a Primary Company Location or is associated with a Business Location</p>\r\n<p>OPTIONAL FIELDS INCLUDE: </p>\r\n<p>\r\n  <b>locationId</b> - if not supplied, the appointment will be posted to the primary business location. If you support multiple location, we recommend always supplying the locationId. </p>\r\n<p>\r\n  <b>resourceId</b> - not required when posting with an "IN" status but is required when the appointment is booked. Use <i>GET /consumer/v1/resources</i> for a list of resources. </p>\r\n<p>\r\n  <b>customerId</b> - if supplied the name and email will be retrieved from the customer record. </p>\r\n<p>\r\n  <b>BookedBy</b> - if not supplied the email address of the booked appointment is used or the ip address if no email address is provided. BookedBy is used in the Appointment Audit trail which can be viewed in the appointment object.</p>\r\n<p>\r\n  <b>Location</b> - is a string value representing the location of the appointment. It provides no added functionality in OnSched and should not be confused with locationId.</p>\r\n<p>\r\n  <b>TimezoneName</b> - if used timezoneName must be in IANA format, <i>America/New_York</i>. This is the timezone the appointment was booked in. Populating this information can help later in situations where appointments are booked before a Daylight Savings change. If no timezoneName is supplied, the Business Locations timezone will be used.</p>\r\n<p>\r\n  <b>COMPLETE BOOKING:</b> This parameter provides a mechanism for immediate booking with the POST appointment endpoint. To complete the booking in one transaction, populate the <b>completeBooking</b> parameter with a "BK", booked or an "RS", reserved status and provide an (<b>email</b> and <b>name</b>) or a <b>customerId</b> in the post body. Doing so will book the appointment and send notifications all in one transaction. <b>Note:</b> "IN" can also be used as a completeBooking option to support payment flows. With the "IN" option, notifications are NOT sent.</p>\r\n<p>For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a></p>',
  request: {
    query: z.object({
      completeBooking: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Options are "BK", "RS" or "IN"',
            in: 'query',
            name: 'completeBooking',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/*+json': { schema: AppointmentInitialModelSchema },
        'application/json': { schema: AppointmentInitialModelSchema },
        'application/json-patch+json': { schema: AppointmentInitialModelSchema },
        'text/json': { schema: AppointmentInitialModelSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AppointmentInitialViewModelSchema } },
    },
  },
})

export const getConsumerV1AppointmentsBookingfieldsRoute = createRoute({
  method: 'get',
  path: '/consumer/v1/appointments/bookingfields',
  tags: ['Appointments'],
  summary: 'Get Custom Fields Labels',
  description:
    '<p>Use this endpoint to return a locations <b>Appointment Booking Fields</b>. Appointment booking fields are stored with each Appointment record. They are used when you need additional information collected during your booking process. It is tied to an appointment/visit and will be stored in the appointment record. Use the field name, type, and length to determine how to update these field values when posting an appointment.</p>',
  request: {
    query: z.object({
      locationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'id of business location',
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
      content: { 'application/json': { schema: BookingFieldListViewModelSchema } },
    },
  },
})

export const getConsumerV1AppointmentsCustomfieldsRoute = createRoute({
  method: 'get',
  path: '/consumer/v1/appointments/customfields',
  tags: ['Appointments'],
  summary: 'Get Custom Fields List',
  description:
    '<p>Use this endpoint to return a locations <b>Appointment Custom Field</b> definitions. Appointment custom fields are stored with each appointment. They are used when the information collected during the booking is specific to a particular appointment/visit. The response will list the custom fields used (customField1 - 10), the field type (string, number, date, boolean) and the length of each one.</p>',
  request: {
    query: z.object({
      locationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'id of business location',
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
      content: { 'application/json': { schema: CustomFieldDefinitionListViewModelSchema } },
    },
  },
})

export const getConsumerV1AppointmentsIdRoute = createRoute({
  method: 'get',
  path: '/consumer/v1/appointments/{id}',
  tags: ['Appointments'],
  summary: 'Get Appointment',
  description:
    '<p>Use this endpoint to return an <b>Appointment</b> object. A valid <b>appointment id</b> is required. For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a></p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of appointment requested',
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

export const deleteConsumerV1AppointmentsIdRoute = createRoute({
  method: 'delete',
  path: '/consumer/v1/appointments/{id}',
  tags: ['Appointments'],
  summary: 'Delete Appointment',
  description:
    '<p>Use this endpoint to permanently <b>Delete</b> an appointment. Only appointments with a of "IN" status, initial, can be deleted. Past dated appointments cannot be deleted. A valid <b>appointment id</b> is required. Use the appointment id returned from the initial <i>POST /consumer/v1/appointments</i> endpoint.</p>\r\n<p>For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a></p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'appointment id to delete',
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

export const putConsumerV1AppointmentsIdBookRoute = createRoute({
  method: 'put',
  path: '/consumer/v1/appointments/{id}/book',
  tags: ['Appointments'],
  summary: 'Book Appointment',
  description:
    '<p>Use this endpoint to <b>Book</b> an appointment. Only appointments with an "IN" status, Initial, can be booked. A valid <b>appointment id</b> is required. Use the appointment id returned from the initial <i>POST /consumer/v1/appointments</i> endpoint. Other pertinent fields can also be updated at the time of booking by including them in the post body. <b>Note: If no name or email address was provided in the initial Post Appointment, it will be required in the post body.</b></p>\r\n<p>For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a></p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'appointment id to book',
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
        'application/*+json': { schema: AppointmentBookModelSchema },
        'application/json': { schema: AppointmentBookModelSchema },
        'application/json-patch+json': { schema: AppointmentBookModelSchema },
        'text/json': { schema: AppointmentBookModelSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AppointmentViewModelSchema } },
    },
  },
})

export const putConsumerV1AppointmentsIdCancelRoute = createRoute({
  method: 'put',
  path: '/consumer/v1/appointments/{id}/cancel',
  tags: ['Appointments'],
  summary: 'Cancel Appointment',
  description:
    '<p>Use this endpoint to <b>Cancel</b> an appointment booking or reservation. Only appointments with a "BK", booked or "RS", reserved status can be cancelled. Past dated appointments cannot be cancelled. A valid <b>appointment id</b> is required. For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a></p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'appointment id to cancel',
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

export const putConsumerV1AppointmentsIdConfirmRoute = createRoute({
  method: 'put',
  path: '/consumer/v1/appointments/{id}/confirm',
  tags: ['Appointments'],
  summary: 'Confirm Appointment',
  description:
    '<p>Use this endpoint to <b>Confirm</b> an appointment. This updates the boolean confirmed field to TRUE. <b>NOTE:</b> If the appointment status is set to "RS", Reserved, it also updates the status of the appointment to "BK", Booked. </p>\r\n<p>For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a></p>',
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
            description: 'appointment id to confirm',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      undo: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use this parameter to undo the confirmed status',
            in: 'query',
            name: 'undo',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const putConsumerV1AppointmentsIdNoshowRoute = createRoute({
  method: 'put',
  path: '/consumer/v1/appointments/{id}/noshow',
  tags: ['Appointments'],
  summary: 'Set NoShow Status',
  description:
    '<p>Use this endpoint to change the status of an appointment from "BK", Booked to <b>"NS", NoShow</b>. This gives API consumers a way to internally track No Show appointments. It provides no added functionality in OnSched.</p>\r\n<p>For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a></p>',
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
            description: 'appointment id to mark as NoShow',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/*+json': { schema: AppointmentNoShowModelSchema },
        'application/json': { schema: AppointmentNoShowModelSchema },
        'application/json-patch+json': { schema: AppointmentNoShowModelSchema },
        'text/json': { schema: AppointmentNoShowModelSchema },
      },
    },
  },
  responses: { 200: { description: 'Success' } },
})

export const putConsumerV1AppointmentsIdRescheduleRoute = createRoute({
  method: 'put',
  path: '/consumer/v1/appointments/{id}/reschedule',
  tags: ['Appointments'],
  summary: 'Reschedule Appointment',
  description:
    '<p>Use this endpoint to <b>Reschedule</b> an appointment booking. Only appointments in "BK", booked status, can be Rescheduled. Past dated appointments cannot be rescheduled. A valid <b>appointment id</b> is required.</p>\r\n<p>The <b>StartDateTime</b> and <b>EndDateTime</b> are required. Use the ISO 8601 format for DateTime Timezone, e.g., <b>2016-10-30T09:00:00-5:00</b>.</p>\r\n<p>The serviceId is optional. If changing the <b>serviceId</b>, the new service id\'s duration must match the original service\'s duration.</p>\r\n<p>The resourceId is optional. If changing the <b>resourceId</b>, verify the availability of the new resource prior to rescheduling.</p>\r\n<p>\r\n  <b>IMPORTANT:</b> Always run availability before rescheduling an appointment to verify the timeslot is open and available for the new time, service and/or resource requested. This is the only way to assure the slot is available. You cannot reschedule an appointment to a different location. If necessary, you should cancel and then book an appointment in the other location.</p>\r\n<p>For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a></p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'appointment id to reschedule',
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
        'application/*+json': { schema: AppointmentRescheduleModelSchema },
        'application/json': { schema: AppointmentRescheduleModelSchema },
        'application/json-patch+json': { schema: AppointmentRescheduleModelSchema },
        'text/json': { schema: AppointmentRescheduleModelSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AppointmentViewModelSchema } },
    },
  },
})

export const putConsumerV1AppointmentsIdReserveRoute = createRoute({
  method: 'put',
  path: '/consumer/v1/appointments/{id}/reserve',
  tags: ['Appointments'],
  summary: 'Reserve Appointment',
  description:
    '<p>Use this endpoint to <b>Reserve</b> an appointment. Only appointments with an "IN" status, Initial, can be reserved. A valid <b>appointment id</b> is required. Use the appointment id returned from the initial <i>POST /consumer/v1/appointments</i> endpoint.</p>\r\n<p>\r\n  <b>NOTE: Reservations are different from Bookings as reservations are a two-step booking process that must be managed by the API consumer.</b> An appointment that is reserved is not completely booked until other business conditions have been met. For example, an appointment may be reserved if it is not yet assigned to a resource or until the customer or resource explicitly confirms it.</p>\r\n<p>With reservations you have the ability to notify the customer of a reservation prior to officially booking and the workflow can be designed to indicate what conditions will need to be met in order to convert the reservation to a complete booking. A reservation converts to a complete booking when it is either Confirmed or Booked. </p>\r\n<p>\r\n  <b>IMPORTANT: A reserved appointment time will not be released, i.e., become available to others, until it is Cancelled. The booking timer is not used with reserved appointments.</b>\r\n</p>\r\n<p>For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a></p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'appointment id to reserve',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      sendNotifications: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'sendNotifications',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/*+json': { schema: AppointmentReserveModelSchema },
        'application/json': { schema: AppointmentReserveModelSchema },
        'application/json-patch+json': { schema: AppointmentReserveModelSchema },
        'text/json': { schema: AppointmentReserveModelSchema },
      },
    },
  },
  responses: { 200: { description: 'Success' } },
})

export const getConsumerV1AvailabilityServiceIdStartDateEndDateRoute = createRoute({
  method: 'get',
  path: '/consumer/v1/availability/{serviceId}/{startDate}/{endDate}',
  tags: ['Availability'],
  summary: 'Get Available Times',
  description:
    '<p>\r\n  <b>Choose your search criteria carefully. Availability is an expensive call.</b> If you search availability for all resources, you should only do so for a single date. If you search availability for multiple dates, you should only do so for a specific resource by specifying the optional resourceId parameter.</p>\r\n<p>A <b>serviceId</b> is required. The <b>startDate</b> and <b>endDate</b> are required and are formatted as: <b>YYYY-MM-DD</b></p>\r\n<p>A <b>resourceId</b> is optional, it is recommended if known at the time of availability call.</p>\r\n<p>\r\n  <b>timezoneName</b> is optional, it allows you to specify the IANA formatted name for the end user\'s timezone to view availability. e.g., <i>America/New_York</i>. <b>NOTE: This is the recommended approach for your implementation.</b>  The "tzOffset" parameter remains for backward compatibility.  For JavaScript, use moment.js in your client for ease of timezone detection and selection. For iOS, use the name property of the NSTimeZone returned from the localTimeZone method. For .NET, consider NodaTime or TimeZoneConverter via NuGet. </p>\r\n<p>\r\n  <b>duration</b> should only be populated if you allow the end user to select a duration, otherwise the service\'s duration will be used.</p>\r\n<p>\r\n  <b>startTime</b> and <b>endTime</b> are optional and are specified in <b>military time e.g., 800 = 8:00am, 2230 = 10:30pm</b>. Note: You will only see availability within the boundary of your business location start and end times.</p>\r\n<p>\r\n  <b>dayAvailability</b> will return day level availability for the number of days requested from the start date. See <i>GET /consumer/v1/availability/{serviceId}/{startDate}/{endDate}/days</i> for details.</p>\r\n<p>\r\n  <b>firstDayAvailable</b> only works with day availability. If set to true it will look for the first day available within the range specified by the dayAvailability parameter. The two parameters together can be a clever way to display availability for a week or month. Tip - pass in the beginning of the week or month, and available times are displayed for the first available date if exists.</p>\r\n<p>\r\n  <b>tzOffset</b> allows you to pass in the timezone offset for the end user\'s timezone of choice, e.g., (-240) for EST. If you use this option, your application should be timezone aware. The requested timezone is specified as an offset (plus or minus) from GMT time.</p>\r\n<p>Availability can be complex. For further troubleshooting refer to the: <i><b>GET /consumer/v1/availability/{serviceId}/{startDate}/{endDate}/unavailable</b></i> endpoint. This endpoint will show you all unavailable times for a given date range. Available times are created from any unblocked time periods. For more information: <a href="https://onsched.readme.io/docs/availability-overview">Availability Overview</a></p>',
  request: {
    params: z.object({
      serviceId: z
        .string()
        .openapi({
          param: {
            description: 'Service Id for availability search',
            in: 'path',
            name: 'serviceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      startDate: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description: 'Format YYYY-MM-DD: Start Date for availability search',
            in: 'path',
            name: 'startDate',
            required: true,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      endDate: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description: 'Format YYYY-MM-DD: End Date for availability search',
            in: 'path',
            name: 'endDate',
            required: true,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
    }),
    query: z.object({
      startTime: z
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
            description:
              'Format Military Time Start Time for availability search. Defaults to Business Hours Start',
            in: 'query',
            name: 'startTime',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      endTime: z
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
            description:
              'Format Military Time. End Time for availability search. Defaults to Business Hours End',
            in: 'query',
            name: 'endTime',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      locationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Id of business location, defaults to primary business location',
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
            description: 'Resource Id for availability search',
            in: 'query',
            name: 'resourceId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      resourceGroupId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Resource Group Id for availability search',
            in: 'query',
            name: 'resourceGroupId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      resourceIds: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Comma separated Resource Id's for availability search",
            in: 'query',
            name: 'resourceIds',
            schema: { type: 'string' },
            required: false,
          },
        }),
      roundRobin: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Round robin choice 0=none, 1=random, 2=balanced',
            in: 'query',
            name: 'roundRobin',
            schema: { type: 'string' },
            required: false,
          },
        }),
      duration: z
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
            description: 'Duration of the service if different from default',
            in: 'query',
            name: 'duration',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      interval: z
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
            description: 'Booking Interval if different than the default',
            in: 'query',
            name: 'interval',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      timezoneName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Requested IANA timezone Id to view availability',
            in: 'query',
            name: 'timezoneName',
            schema: { type: 'string' },
            required: false,
          },
        }),
      tzOffset: z
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
            description: 'Request timezone offset to view availability',
            in: 'query',
            name: 'tzOffset',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      destination: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'For calculating travel based availability, requires distance scope',
            in: 'query',
            name: 'destination',
            schema: { type: 'string' },
            required: false,
          },
        }),
      dayAvailabilityStartDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'Format YYYY-DD-YY: Start date for day availability, defaults to startDate',
            in: 'query',
            name: 'dayAvailabilityStartDate',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      dayAvailability: z
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
            description: 'Number of days of day availability to return',
            in: 'query',
            name: 'dayAvailability',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      firstDayAvailable: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return available times for the first available day',
            in: 'query',
            name: 'firstDayAvailable',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AvailabilityViewModelSchema } },
    },
  },
})

export const getConsumerV1AvailabilityServiceIdStartDateEndDateDaysRoute = createRoute({
  method: 'get',
  path: '/consumer/v1/availability/{serviceId}/{startDate}/{endDate}/days',
  tags: ['Availability'],
  summary: 'Get Available Days',
  description:
    '<p>This endpoint will return <b>Day Level Availability</b> for the range of dates requested. For example, if the business is closed, or there is a public holiday this endpoint will return that the "Day is unavailable".</p>\r\n<p>Day Availability is a high-level check for Holidays and Open/Available hours of a location, service and/or resource and should be used to restrict your choices of days available in your application to improve usability and performance.</p>\r\n<p>A <b>serviceId</b> is required. The <b>startDate</b> and <b>endDate</b> are required and are formatted as: <b>YYYY-MM-DD</b></p>\r\n<p>The locationId is optional, however if not supplied it defaults to the Primary Business Location for open/closed hours information. It is recommended you always provide the locationId.</p>\r\n<p>A <b>resourceId</b> is optional. If used the available days will be return day availability for the resource specified.</p>\r\n<p>The <b>tzOffset</b> parameter should be used if the appointment requester, the end user, is in a different timezone than the location or resource.</p>',
  request: {
    params: z.object({
      serviceId: z
        .string()
        .openapi({
          param: {
            description: 'Service Id for day availability search',
            in: 'path',
            name: 'serviceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      startDate: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description: 'Format YYYY-MM-DD: Start Date for availability search',
            in: 'path',
            name: 'startDate',
            required: true,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      endDate: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description: 'Format YYYY-MM-DD: End Date for availability search',
            in: 'path',
            name: 'endDate',
            required: true,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
    }),
    query: z.object({
      locationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Id of business location, defaults to primary business location',
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
            description: 'Resource Id to filter on',
            in: 'query',
            name: 'resourceId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      tzOffset: z
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
            description: 'Timezone offset to view availability for',
            in: 'query',
            name: 'tzOffset',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AvailabilityDayViewModelSchema } },
    },
  },
})

export const getConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableRoute = createRoute({
  method: 'get',
  path: '/consumer/v1/availability/{serviceId}/{startDate}/{endDate}/unavailable',
  tags: ['Availability'],
  summary: 'Get Unavailable Times',
  description:
    "<p>This endpoint is used to show <b>Unavailable</b> times and provides valuable information as to why a time slot is unavailable. If you question your availability results, populate the same parameters to this endpoint to find out why.</p>\r\n<p>A <b>serviceId</b> is required. The <b>startDate</b> and <b>endDate</b> are required and are formatted as: <b>YYYY-MM-DD</b></p>\r\n<p>Location hours, holidays, services, resources, blocks, allocations, and appointments are just some of variables that may cause time slots to become unavailable. Use this endpoint to understand why you don't see availability.</p>",
  request: {
    params: z.object({
      serviceId: z
        .string()
        .openapi({
          param: {
            description: 'Service Id for availability search',
            in: 'path',
            name: 'serviceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      startDate: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description: 'Format YYYY-MM-DD: Start Date for unavailable time search',
            in: 'path',
            name: 'startDate',
            required: true,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      endDate: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description: 'Format YYYY-MM-DD: End Date for unavailable time search',
            in: 'path',
            name: 'endDate',
            required: true,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
    }),
    query: z.object({
      locationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Id of business location, defaults to primary business location',
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
            description: 'Resource Id to filter on',
            in: 'query',
            name: 'resourceId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      duration: z
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
            description: 'Duration of the service if different from default',
            in: 'query',
            name: 'duration',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      tzOffset: z
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
            description: 'Request timezone offset to view unavailable times',
            in: 'query',
            name: 'tzOffset',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      skipTimePastUnavailability: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Set as true to remove Time Past (TP) blocks in the response',
            in: 'query',
            name: 'skipTimePastUnavailability',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UnavailableTimeListViewModelSchema } },
    },
  },
})

export const getConsumerV1CustomersRoute = createRoute({
  method: 'get',
  path: '/consumer/v1/customers',
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
            description: 'Filter by email address',
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
            description: 'Filter by lastname',
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
      content: { 'application/json': { schema: CustomerListViewModelSchema } },
    },
  },
})

export const postConsumerV1CustomersRoute = createRoute({
  method: 'post',
  path: '/consumer/v1/customers',
  tags: ['Customers'],
  summary: 'Create Customer',
  description:
    "<p>Use this endpoint to <b>Create</b> a new Customer. A customer object is automatically created with the first appointment booking if it doesn't already exist. If not specified, the business location id defaults to the primary business location.</p>\r\n<p>Required Fields: <b>Email</b> and <b>Name</b> or <b>First and Lastname</b> depending on customer type. Type 0 = Person, Type 1 = Business. For type 0, the firstname and lastname fields are used. For type 1, the Name field is used, and the name field is also used to populate the lastname.</p>",
  request: {
    body: {
      content: {
        'application/*+json': { schema: CustomerInputModelSchema },
        'application/json': { schema: CustomerInputModelSchema },
        'application/json-patch+json': { schema: CustomerInputModelSchema },
        'text/json': { schema: CustomerInputModelSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CustomerViewModelSchema } },
    },
  },
})

export const getConsumerV1CustomersBookingfieldsRoute = createRoute({
  method: 'get',
  path: '/consumer/v1/customers/bookingfields',
  tags: ['Customers'],
  summary: 'Get Customer Booking Fields',
  description:
    '<p>Use this endpoint to return <b>Customer Booking Fields</b>. Customer booking fields are stored with each customer object. They are used when the information collected during the booking is for a particular customer. Customer Booking Fields include any custom customer fields you define and want to capture with the Booking.</p>',
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
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BookingFieldListViewModelSchema } },
    },
  },
})

export const getConsumerV1CustomersCountriesRoute = createRoute({
  method: 'get',
  path: '/consumer/v1/customers/countries',
  tags: ['Customers'],
  summary: 'List Country Codes',
  description:
    '<p>Use this endpoint to return a <b>List of Countries with their associated Country Code</b>. Country codes are based on the 2-character ANSI standard. If your countries of operation are not currently listed, contact us at <i><b>support@onsched.com</b></i>.</p>',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(CountryViewModelSchema) } },
    },
  },
})

export const getConsumerV1CustomersCustomfieldsRoute = createRoute({
  method: 'get',
  path: '/consumer/v1/customers/customfields',
  tags: ['Customers'],
  summary: 'Get Customer Custom Fields',
  description:
    '<p>Use this endpoint to return <b>Customer Custom Fields</b>. Customer custom fields are stored with the customer object. They are used when the information collected during the booking is specific to a particular customer.</p>',
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
      leadQuestions: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A true/false indicator to filter on custom fields used for lead questions',
            in: 'query',
            name: 'leadQuestions',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CustomFieldDefinitionListViewModelSchema } },
    },
  },
})

export const getConsumerV1CustomersStatesRoute = createRoute({
  method: 'get',
  path: '/consumer/v1/customers/states',
  tags: ['Customers'],
  summary: 'List Country States',
  description:
    '<p>Use this endpoint to return a <b>List of Countries with their associated State Codes</b>. Supply a country code to filter results further. If states for your countries of operation are not currently listed, contact us at <i><b>support@onsched.com</b></i>.</p>',
  request: {
    query: z.object({
      country: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'country', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(StateViewModelSchema) } },
    },
  },
})

export const getConsumerV1CustomersIdRoute = createRoute({
  method: 'get',
  path: '/consumer/v1/customers/{id}',
  tags: ['Customers'],
  summary: 'Get Customer',
  description:
    "<p>Use this endpoint to return a <b>Customer</b> object. A valid <b>customer id</b> is required. Find customer id's by using the <i>GET /consumer/v1/customers</i> endpoint.</p>",
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

export const putConsumerV1CustomersIdRoute = createRoute({
  method: 'put',
  path: '/consumer/v1/customers/{id}',
  tags: ['Customers'],
  summary: 'Update Customer',
  description:
    '<p>Use this endpoint to <b>Update</b> a Customer object. A valid <b>customer id</b> is required. Note: Blank fields are not changed.</p>',
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
    body: {
      content: {
        'application/*+json': { schema: CustomerUpdateModelSchema },
        'application/json': { schema: CustomerUpdateModelSchema },
        'application/json-patch+json': { schema: CustomerUpdateModelSchema },
        'text/json': { schema: CustomerUpdateModelSchema },
      },
    },
  },
  responses: { 200: { description: 'Success' } },
})

export const deleteConsumerV1CustomersIdRoute = createRoute({
  method: 'delete',
  path: '/consumer/v1/customers/{id}',
  tags: ['Customers'],
  summary: 'Delete Customer',
  description:
    '<p>Use this endpoint to permanently <b>Delete</b> a Customer object. A valid <b>customer id</b> is required.</p>',
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
  responses: { 200: { description: 'Success' } },
})

export const getConsumerV1LocationsRoute = createRoute({
  method: 'get',
  path: '/consumer/v1/locations',
  tags: ['Locations'],
  summary: 'List Locations',
  description:
    '<p>Use this endpoint to return a <b>List of Business Locations</b>. The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20 and maximum is 100. Use the other query parameters to filter the results further. </p>\r\n<p>\r\n  <b>IMPORTANT DEPRECATION NOTICE</b>: The following online settings parameters were intended for internal use in our Portal application only. They will be deprecated on <b>OCTOBER 15, 2022</b>. These fields are currently part of the <b>SETTINGS</b> object in all location endpoints: <b>businessId, enabled, familyMembersEnabled, serviceLabel, resourceLabel, resourceAnyLabel, resourceSelection, liveMode, formFlow, availabilityForm, showServiceGroups, showOnSchedLogo, showBusinessLogo, disableAuthorization, hideNavBar, hideLocationNav, hideServiceGroupsNav, hideServicesNav, hideContinueBooking, returnToService, returnToAvailability, hideBreadCrumbNav.</b> If you are using these fields, please adjust your code to handle the deprecation or let us know by submitting a ticket to: <b><i>support@onsched.com</i></b> as we do not want to interrupt your existing workflows.</p>',
  request: {
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Location name (full or partial)',
            in: 'query',
            name: 'name',
            schema: { type: 'string' },
            required: false,
          },
        }),
      nearestTo: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Search by distance nearest Geocoords, City, Postal/Zip Code',
            in: 'query',
            name: 'nearestTo',
            schema: { type: 'string' },
            required: false,
          },
        }),
      proximity: z
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
            description: 'Maximum distance to display',
            in: 'query',
            name: 'proximity',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      units: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Distance either imperial(miles), metric(kilometers)',
            in: 'query',
            name: 'units',
            schema: { type: 'string' },
            required: false,
          },
        }),
      serviceId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Locations that offer this service',
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
            description: 'Frienldy Id of location',
            in: 'query',
            name: 'friendlyId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      regionId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Locations within a specific region',
            in: 'query',
            name: 'regionId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ignorePrimary: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: "Don't include the Primary Location",
            in: 'query',
            name: 'ignorePrimary',
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
            description: 'Page limit, default 20, max 100',
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

export const getConsumerV1LocationsIdRoute = createRoute({
  method: 'get',
  path: '/consumer/v1/locations/{id}',
  tags: ['Locations'],
  summary: 'Get Location',
  description:
    "<p>Use this endpoint to return a <b>Location</b> object. A valid business <b>location id</b> is required. Find all location id's by using the <i>GET /consumer/v1/locations</i> endpoint.</p>\r\n<p>\r\n  <b>IMPORTANT DEPRECATION NOTICE</b>: The following online settings parameters were intended for internal use in our Portal application only. They will be deprecated on <b>OCTOBER 15, 2022</b>. These fields are currently part of the <b>SETTINGS</b> object in all location endpoints: <b>businessId, enabled, familyMembersEnabled, serviceLabel, resourceLabel, resourceAnyLabel, resourceSelection, liveMode, formFlow, availabilityForm, showServiceGroups, showOnSchedLogo, showBusinessLogo, disableAuthorization, hideNavBar, hideLocationNav, hideServiceGroupsNav, hideServicesNav, hideContinueBooking, returnToService, returnToAvailability, hideBreadCrumbNav.</b> If you are using these fields, please adjust your code to handle the deprecation or let us know by submitting a ticket to: <b><i>support@onsched.com</i></b> as we do not want to interrupt your existing workflows.</p>",
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
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: LocationViewModelSchema } },
    },
  },
})

export const getConsumerV1ResourcegroupsRoute = createRoute({
  method: 'get',
  path: '/consumer/v1/resourcegroups',
  tags: ['ResourceGroups'],
  summary: 'List Resource Groups',
  description:
    '<p>Use this endpoint to return a list of <b>Resource Groups</b> for the requested location. If not specified, the business location defaults to the primary business location.</p>',
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

export const getConsumerV1ResourcegroupsIdRoute = createRoute({
  method: 'get',
  path: '/consumer/v1/resourcegroups/{id}',
  tags: ['ResourceGroups'],
  summary: 'Get Resource Group',
  description:
    "<p>Use this endpoint to return a <b>Resource Group</b> object. A valid <b>resourceGroup id</b> is required. Find resourceGroup id's by using the <i>GET /consumer/v1/resourceGroups</i> endpoint.</p>",
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of the resourceGroup object',
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

export const getConsumerV1ResourcesRoute = createRoute({
  method: 'get',
  path: '/consumer/v1/resources',
  tags: ['Resources'],
  summary: 'List Resources',
  description:
    '<p>Use this endpoint to return a <b>List of Resources</b> associated with a business location. If not specified, the business location defaults to the primary business location. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>',
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
            description: 'Filter by groupId',
            in: 'query',
            name: 'resourceGroupId',
            schema: { format: 'int32', type: 'integer' },
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
            description: 'Search by name, supports Partial name search',
            in: 'query',
            name: 'name',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sortOrder: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Specify sort order of response',
            in: 'query',
            name: 'sortOrder',
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
      description: 'resource object',
      content: { 'application/json': { schema: ResourceListViewModelSchema } },
    },
    400: { description: 'Missing or invalid values in the request' },
    404: { description: 'Resource was not found' },
  },
})

export const getConsumerV1ResourcesIdRoute = createRoute({
  method: 'get',
  path: '/consumer/v1/resources/{id}',
  tags: ['Resources'],
  summary: 'Get Resource',
  description:
    "<p>Use this endpoint to return a <b>Resource</b> object. A valid <b>resource id</b> is required. Find resource id's by using the <i>GET consumer/v1/resources</i> endpoint. </p>",
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
            description: 'id of resource object',
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
      content: { 'application/json': { schema: ResourceViewModelSchema } },
    },
  },
})

export const getConsumerV1ResourcesIdServicesRoute = createRoute({
  method: 'get',
  path: '/consumer/v1/resources/{id}/services',
  tags: ['Resources'],
  summary: 'Get Resource Linked Services',
  description:
    '<p>Use this endpoint to get a <b>List of Linked Services</b> associated with the resource requested. The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, limit is 20, the maximum limit is 100. Use the other query parameters to filter the results further.</p>\r\n<p>Resource linked services are used to explicitly define the services that can be booked for a specified resource. By default, all services are bookable for any resource. For more information: <a href="https://docs.onsched.com/docs/linked-services">Linked Services Overview</a></p>',
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
            description: 'id of resource object',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
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
      description: 'list of resource services',
      content: { 'application/json': { schema: ResourceServiceListViewModelSchema } },
    },
    400: { description: 'Missing or invalid values in the request' },
    401: { description: 'Unauthorized request' },
    404: { description: 'Resource was not found' },
  },
})

export const getConsumerV1ServicegroupsRoute = createRoute({
  method: 'get',
  path: '/consumer/v1/servicegroups',
  tags: ['ServiceGroups'],
  summary: 'List Service Groups',
  description:
    '<p>Use this endpoint to return a list of <b>Service Groups</b> for the requested location. If not specified, the business location defaults to the primary business location. Use the offset and limit parameters to control the page start and size. Default offset is 0, limit is 20, maximum is 100. Use the other query parameters to filter the results further.</p>',
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

export const getConsumerV1ServicegroupsIdRoute = createRoute({
  method: 'get',
  path: '/consumer/v1/servicegroups/{id}',
  tags: ['ServiceGroups'],
  summary: 'Get Service Group',
  description:
    "<p>Use this endpoint to return a <b>Service Group</b> object. A valid <b>serviceGroup id</b> is required. Find serviceGroup id's by using the <i>GET /consumer/v1/serviceGroups</i> endpoint.</p>",
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
            description: 'id of the serviceGroup object',
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

export const getConsumerV1ServicesRoute = createRoute({
  method: 'get',
  path: '/consumer/v1/services',
  tags: ['Services'],
  summary: 'List Services',
  description:
    '<p>Use this endpoint to <b>List Services</b> available at your business location and/or company. If not specified, the business location defaults to the primary business location. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>',
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
            description: 'Filter by groupId',
            in: 'query',
            name: 'serviceGroupId',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      defaultService: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by default service, default is false',
            in: 'query',
            name: 'defaultService',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      allLocations: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Search All Locations, default is false',
            in: 'query',
            name: 'allLocations',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      scope: ServicesScopeSchema.openapi({
        param: {
          description: 'Filter by scope, Company, Location or All, default is All',
          in: 'query',
          name: 'scope',
          schema: { $ref: '#/components/schemas/ServicesScope' },
          required: false,
        },
      }).exactOptional(),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by Name, supports Partial name search',
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
            description:
              'Filter by ServiceId, using this parameter would ignore all other parameters',
            in: 'query',
            name: 'serviceId',
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
      sortOrder: ServiceSortOrderSchema.openapi({
        param: {
          description:
            'Sort results using Natural Sort or Sorted alphabetically by Service Names, default is natural',
          in: 'query',
          name: 'sortOrder',
          schema: { $ref: '#/components/schemas/ServiceSortOrder' },
          required: false,
        },
      }).exactOptional(),
      sortDescending: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort results in Descending Order, default true',
            in: 'query',
            name: 'sortDescending',
            schema: { type: 'boolean' },
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

export const getConsumerV1ServicesAllocationsIdRoute = createRoute({
  method: 'get',
  path: '/consumer/v1/services/allocations/{id}',
  tags: ['Services'],
  summary: 'Get Service Allocation',
  description:
    "<p>Use this endpoint to return a <b>Service Allocation</b> object. A valid <b>serviceAllocation id</b> is required. Find service allocation id's by using the <i>GET/consumer​/v1​/services​/{id}​/allocations</i> endpoint.</p>",
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

export const getConsumerV1ServicesIdRoute = createRoute({
  method: 'get',
  path: '/consumer/v1/services/{id}',
  tags: ['Services'],
  summary: 'Get Service',
  description:
    "<p>Use this endpoint to return a <b>Service</b> object. A valid <b>service id</b> is required. Find service id's by using the <i>GET /consumer/v1/services</i> endpoint.</p>",
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

export const getConsumerV1ServicesIdAllocationsRoute = createRoute({
  method: 'get',
  path: '/consumer/v1/services/{id}/allocations',
  tags: ['Services'],
  summary: 'List Service Allocations',
  description:
    '<p>Use this endpoint to return a <b>List of Service Allocations</b> associated with the requested service. A valid <b>service id</b> is required. Allocations are used for Event type services/bookings. Retrieve all allocations for a location by passing in zero as the service id. Otherwise, to get allocations for a specific service supply the service id. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further. For more information: <a href="https://docs.onsched.com/reference/post_setup-v1-services-id-allocations">Create Service Allocations</a></p>',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of service to list allocations for, 0 for all',
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
            description: 'id of the location, defaults to the primary location',
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
            description: 'id of the resource to filter on',
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
            description: 'Format YYYY-MM-DD: Filter allocations on/after startDate',
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
            description: 'Format YYYY-MM-DD. Filter allocations on/before endDate',
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

export const getConsumerV1ServicesIdResourcesRoute = createRoute({
  method: 'get',
  path: '/consumer/v1/services/{id}/resources',
  tags: ['Services'],
  summary: 'List Resources for Service',
  description:
    '<p>Use this endpoint to return a list of <b>Resources that provide the Service requested</b>. A valid <b>service id</b> is required. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>',
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
      content: { 'application/json': { schema: ResourceListViewModelSchema } },
    },
  },
})
