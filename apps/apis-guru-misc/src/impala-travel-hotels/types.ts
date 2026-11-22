type NotesBookedRoom = { fromGuest: string | null; fromSeller: string | null }
type Money = { amount: number; currency: { code: string } }
type CancellationFee = {
  count?: number | undefined
  price: Money
  type: 'NON_REFUNDABLE' | 'PERCENTAGE' | 'NONE' | 'NIGHTS' | 'FLAT'
}
type CancellationPolicy = {
  end?: string | undefined
  fee: CancellationFee
  formatted: string
  start: string
}
type RateComponent = {
  formatted: string
  includedInRate?: boolean | undefined
  type: 'BREAKFAST' | 'LUNCH' | 'DINNER' | 'WELCOME_BEVERAGE' | 'ALL_INCLUSIVE'
}
type HotelAgreementStub = {
  conditions?: string[] | undefined
  dealId: string
  dealsSellable?: { remaining?: number | undefined } | undefined
  discount?: { count?: number | undefined; type?: string | undefined } | undefined
  hotelAgreementId: string
  href?: string | undefined
  specialInstructions: string | null
} | null
type TaxOrFee = {
  category?: 'VAT' | 'CITY_TAX' | 'OTHER' | undefined
  charges?: Money | undefined
  formatted?: string | undefined
}
type BookedRate = {
  cancellationPolicies: CancellationPolicy[]
  components: RateComponent[]
  end: string
  hotelAgreement: HotelAgreementStub
  maxOccupancy?: number | undefined
  retailRate: {
    taxesAndFees: { includedInRate?: TaxOrFee[] | undefined; payAtHotel?: TaxOrFee[] | undefined }
    total: Money
  }
  sellerCommissionPercentage: number
  start: string
}
type BookedRoom = {
  adults?: number | undefined
  notes: NotesBookedRoom
  rate: BookedRate
  roomType: { name: string; roomTypeId: string }
  sellerToImpalaPayment?: Money | undefined
}
type Address = {
  city: string
  country: string
  countryName: string
  line1: string
  line2?: (string | null) | undefined
  postalCode: string
  region?: (string | null) | undefined
}
type TimeRange = { from?: string | undefined; to?: string | undefined }
type Image = { altText?: (string | null) | undefined; height: number; url: string; width: number }
type Location = { latitude: number; longitude: number }
type HotelStub = {
  address: Address
  checkIn?: TimeRange | undefined
  checkOut?: TimeRange | undefined
  emails?: string[] | undefined
  hotelId: string
  href?: string | undefined
  images: Image[]
  location: Location
  name: string
  phoneNumbers?: string[] | undefined
  starRating: number | null
  timezone?: string | undefined
}
type Booking = {
  bookedRooms: BookedRoom[]
  bookingId: string
  cancellation?: ({ fee: CancellationFee } | null) | undefined
  contact: { email: string; firstName: string; lastName: string; contactId: string }
  createdAt: string
  end: string
  hotel: HotelStub
  hotelConfirmationCode?: (string | null) | undefined
  notes: { fromGuest: string | null; fromSeller: string | null }
  paymentBearerToken?: (string | null) | undefined
  paymentClientSecret?: (string | null) | undefined
  start: string
  status: 'CANCELLED' | 'PENDING' | 'ACCEPTED' | 'PAYMENT_REQUIRED' | 'PAYMENT_ABANDONED'
  updatedAt: string
}
type Pagination = { count: number; next: string | null; prev: string | null; total: number }
type ValidationResult = { code: string; field?: string | undefined; message: string }
type ValidationError = {
  code?: string | undefined
  message: string
  validations?: ValidationResult[] | undefined
}
type GenericError = { code?: string | undefined; message: string }
type NotesBooking = { fromGuest?: string | undefined; fromSeller?: string | undefined }
type BookingRequest = {
  bookingContact: { email: string; firstName: string; lastName: string }
  end: string
  notes?: NotesBooking | undefined
  paymentType?: 'API' | undefined
  rooms: { adults: number; notes?: NotesBookedRoom | undefined; rateId: string }[]
  start: string
}
type UpdateBookingVersionAtTimestamp = string
type UpdateBookingRequest = {
  bookingContact: { email: string; firstName: string; lastName: string }
  end: string
  notes?: NotesBooking | undefined
  paymentType?: 'API' | undefined
  rooms: { adults: number; notes?: NotesBookedRoom | undefined; rateId: string }[]
  start: string
  updateBookingVersionAtTimestamp: UpdateBookingVersionAtTimestamp
}
type PersonInfo = { email: string; firstName: string; lastName: string }
type UpdateBookingContactRequest = {
  bookingContact: PersonInfo
  updateBookingVersionAtTimestamp: UpdateBookingVersionAtTimestamp
}
type Amenity = { code: number; formatted: string }
type ExternalUrl = { name?: 'BOOKING.COM' | 'HOTELS.COM' | undefined; url?: string | undefined }
type Rate = {
  cancellationPolicies: CancellationPolicy[]
  components: RateComponent[]
  end: string
  hotelAgreement: HotelAgreementStub
  maxOccupancy: number
  rateId: string
  ratePlanId?: number | undefined
  retailRate: {
    taxesAndFees: { includedInRate?: TaxOrFee[] | undefined; payAtHotel?: TaxOrFee[] | undefined }
    total: Money
  }
  roomsSellable?: number | undefined
  sellerCommissionPercentage: number
  sellerToImpalaPayment?: { amount: number; currency: { code: string } } | undefined
  start: string
}
type RoomType = {
  amenities: Amenity[]
  description: string
  images: Image[]
  maxOccupancy: number
  name: string
  rates?: Rate[] | undefined
  roomTypeId: string
}
type HotelFullDetail = {
  address: Address
  amenities: Amenity[]
  checkIn: TimeRange
  checkOut: TimeRange
  contractable: boolean
  createdAt?: string | undefined
  currency: string
  description?: { short?: string | undefined } | undefined
  emails: string[]
  externalUrls: ExternalUrl[]
  hotelId: string
  images: Image[]
  location: Location
  name: string
  phoneNumbers: string[]
  roomCount: number
  roomTypes: RoomType[]
  starRating: number | null
  termsAndConditions: string
  timezone?: string | undefined
  updatedAt?: string | undefined
  websiteUrl: string | null
}
type AdjustmentConditionLengthOfStayRule = {
  rules: {
    bookableDateRange: { end: string; start: string }
    nightsRange: { max: number; min: number }
  }
  type: 'LENGTH_OF_STAY'
}
type RateAdjustment = {
  adjustmentId?: string | undefined
  amount: number
  conditions: AdjustmentConditionLengthOfStayRule[]
  type: 'PERCENTAGE'
}
type Conditions = {
  cancellationDeadline: number | null
  cancellationPolicy:
    | 'FREE_CANCELLATION'
    | 'FREE_CANCELLATION_24'
    | 'FREE_CANCELLATION_48'
    | 'FREE_CANCELLATION_WEEK'
    | 'NON_REFUNDABLE'
    | null
}
type RatePlanRestrictions = { lengthOfStay: { max?: number | undefined; min: number } }
type RatePlanRate = { adults: number; retailRate: Money; roomsSellable: number }
type RatesPerDate = {
  closed: boolean
  closedToArrival?: boolean | undefined
  closedToDeparture?: boolean | undefined
  date: string
  rates: RatePlanRate[]
  staythrough?: { min: number } | undefined
}
type RatePlanRoomType = {
  dates: RatesPerDate[]
  maxOccupancy: number
  name: string
  roomTypeId: string
}
type RatePlan = {
  adjustments?: RateAdjustment[] | undefined
  components?: RateComponent[] | undefined
  conditions: Conditions
  description: string
  hotelId: string
  ratePlanId: number
  restrictions: RatePlanRestrictions
  roomTypes: RatePlanRoomType[]
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/bookings': {
      $get:
        | {
            input: {
              query: {
                start?: { [x: string]: unknown } | undefined
                end?: { [x: string]: unknown } | undefined
                created?: { [x: string]: unknown } | undefined
                updated?: { [x: string]: unknown } | undefined
                size?: number | undefined
                offset?: number | undefined
                sortBy?: string | undefined
              }
            }
            output: { data: Booking[]; pagination: Pagination }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start?: { [x: string]: unknown } | undefined
                end?: { [x: string]: unknown } | undefined
                created?: { [x: string]: unknown } | undefined
                updated?: { [x: string]: unknown } | undefined
                size?: number | undefined
                offset?: number | undefined
                sortBy?: string | undefined
              }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                start?: { [x: string]: unknown } | undefined
                end?: { [x: string]: unknown } | undefined
                created?: { [x: string]: unknown } | undefined
                updated?: { [x: string]: unknown } | undefined
                size?: number | undefined
                offset?: number | undefined
                sortBy?: string | undefined
              }
            }
            output: GenericError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                start?: { [x: string]: unknown } | undefined
                end?: { [x: string]: unknown } | undefined
                created?: { [x: string]: unknown } | undefined
                updated?: { [x: string]: unknown } | undefined
                size?: number | undefined
                offset?: number | undefined
                sortBy?: string | undefined
              }
            }
            output: GenericError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | { input: { json: BookingRequest }; output: Booking; outputFormat: 'json'; status: 202 }
        | {
            input: { json: BookingRequest }
            output: ValidationError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: BookingRequest }
            output: GenericError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: BookingRequest }
            output: GenericError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: BookingRequest }
            output: GenericError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/bookings/:bookingId': {
      $delete:
        | {
            input: { param: { bookingId: string } }
            output: Booking
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bookingId: string } }
            output: ValidationError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { bookingId: string } }
            output: GenericError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { bookingId: string } }
            output: GenericError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { bookingId: string } }
            output: GenericError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { bookingId: string } }
            output: GenericError
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { bookingId: string } }
            output: Booking
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bookingId: string } }
            output: ValidationError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { bookingId: string } }
            output: GenericError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { bookingId: string } }
            output: GenericError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { bookingId: string } }
            output: GenericError
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { bookingId: string } } & { json: UpdateBookingRequest }
            output: Booking
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bookingId: string } } & { json: UpdateBookingRequest }
            output: ValidationError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { bookingId: string } } & { json: UpdateBookingRequest }
            output: GenericError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { bookingId: string } } & { json: UpdateBookingRequest }
            output: GenericError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { bookingId: string } } & { json: UpdateBookingRequest }
            output: GenericError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/bookings/:bookingId/booking-contact': {
      $put:
        | {
            input: { param: { bookingId: string } } & { json: UpdateBookingContactRequest }
            output: Booking
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bookingId: string } } & { json: UpdateBookingContactRequest }
            output: ValidationError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { bookingId: string } } & { json: UpdateBookingContactRequest }
            output: GenericError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { bookingId: string } } & { json: UpdateBookingContactRequest }
            output: GenericError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { bookingId: string } } & { json: UpdateBookingContactRequest }
            output: GenericError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/hotels': {
      $get:
        | {
            input: {
              query: {
                name?: { [x: string]: unknown } | undefined
                starRating?: { [x: string]: unknown } | undefined
                country?: { [x: string]: unknown } | undefined
                start?: string | undefined
                end?: string | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                hotelIds?: string[] | undefined
                created?: { [x: string]: unknown } | undefined
                updated?: { [x: string]: unknown } | undefined
                size?: number | undefined
                offset?: number | undefined
                sortBy?: string | undefined
              }
            }
            output: { data?: HotelFullDetail[] | undefined; pagination?: Pagination | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name?: { [x: string]: unknown } | undefined
                starRating?: { [x: string]: unknown } | undefined
                country?: { [x: string]: unknown } | undefined
                start?: string | undefined
                end?: string | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                hotelIds?: string[] | undefined
                created?: { [x: string]: unknown } | undefined
                updated?: { [x: string]: unknown } | undefined
                size?: number | undefined
                offset?: number | undefined
                sortBy?: string | undefined
              }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                name?: { [x: string]: unknown } | undefined
                starRating?: { [x: string]: unknown } | undefined
                country?: { [x: string]: unknown } | undefined
                start?: string | undefined
                end?: string | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                hotelIds?: string[] | undefined
                created?: { [x: string]: unknown } | undefined
                updated?: { [x: string]: unknown } | undefined
                size?: number | undefined
                offset?: number | undefined
                sortBy?: string | undefined
              }
            }
            output: GenericError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                name?: { [x: string]: unknown } | undefined
                starRating?: { [x: string]: unknown } | undefined
                country?: { [x: string]: unknown } | undefined
                start?: string | undefined
                end?: string | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                hotelIds?: string[] | undefined
                created?: { [x: string]: unknown } | undefined
                updated?: { [x: string]: unknown } | undefined
                size?: number | undefined
                offset?: number | undefined
                sortBy?: string | undefined
              }
            }
            output: GenericError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/hotels/:hotelId': {
      $get:
        | {
            input: { param: { hotelId: string } } & {
              query: { start?: string | undefined; end?: string | undefined }
            }
            output: HotelFullDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { hotelId: string } } & {
              query: { start?: string | undefined; end?: string | undefined }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { hotelId: string } } & {
              query: { start?: string | undefined; end?: string | undefined }
            }
            output: GenericError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { hotelId: string } } & {
              query: { start?: string | undefined; end?: string | undefined }
            }
            output: GenericError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { hotelId: string } } & {
              query: { start?: string | undefined; end?: string | undefined }
            }
            output: GenericError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/hotels/:hotelId/rate-plans': {
      $get:
        | {
            input: { param: { hotelId: string } } & {
              query: {
                updatedAt?: { [x: string]: unknown } | undefined
                size?: number | undefined
                offset?: number | undefined
                start?: string | undefined
                end?: string | undefined
                roomId?: string | undefined
              }
            }
            output: { data: RatePlan[]; pagination: Pagination }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { hotelId: string } } & {
              query: {
                updatedAt?: { [x: string]: unknown } | undefined
                size?: number | undefined
                offset?: number | undefined
                start?: string | undefined
                end?: string | undefined
                roomId?: string | undefined
              }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { hotelId: string } } & {
              query: {
                updatedAt?: { [x: string]: unknown } | undefined
                size?: number | undefined
                offset?: number | undefined
                start?: string | undefined
                end?: string | undefined
                roomId?: string | undefined
              }
            }
            output: GenericError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/hotels/:hotelId/rate-plans/:ratePlanId': {
      $get:
        | {
            input: { param: { hotelId: string; ratePlanId: number } } & {
              query: {
                updatedAt?: { [x: string]: unknown } | undefined
                size?: number | undefined
                offset?: number | undefined
                start?: string | undefined
                end?: string | undefined
                roomTypeId?: string | undefined
              }
            }
            output: RatePlan
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { hotelId: string; ratePlanId: number } } & {
              query: {
                updatedAt?: { [x: string]: unknown } | undefined
                size?: number | undefined
                offset?: number | undefined
                start?: string | undefined
                end?: string | undefined
                roomTypeId?: string | undefined
              }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { hotelId: string; ratePlanId: number } } & {
              query: {
                updatedAt?: { [x: string]: unknown } | undefined
                size?: number | undefined
                offset?: number | undefined
                start?: string | undefined
                end?: string | undefined
                roomTypeId?: string | undefined
              }
            }
            output: GenericError
            outputFormat: 'json'
            status: 404
          }
    }
  },
  '/'
>
export default routes
