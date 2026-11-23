type OrderAddress = {
  City?: string | undefined
  Geolocation?: { Latitude?: number | undefined; Longitude?: number | undefined } | undefined
  Lines?: string[] | undefined
  PostalCode?: string | undefined
}
type OrderItem2 = {
  Items?: OrderItem2 | undefined
  Name?: string | undefined
  Quantity?: number | undefined
  Reference?: string | undefined
  TotalPrice?: number | undefined
  UnitPrice?: number | undefined
}[]
type OrderItemRestriction = { Type?: 'Alcohol' | undefined }
type AcceptanceRequested = {
  Currency?: string | undefined
  Customer?:
    | {
        Id?: (number | null) | undefined
        Name?: string | undefined
        PreviousRestaurantOrderCount?: number | undefined
        PreviousTotalOrderCount?: number | undefined
      }
    | undefined
  CustomerNotes?: { [x: string]: string } | undefined
  FriendlyOrderReference?: string | undefined
  Fulfilment?:
    | {
        Address?: OrderAddress | undefined
        CustomerDueAsap?: boolean | undefined
        CustomerDueDate?: string | undefined
        Method?: 'Delivery' | 'Collection' | undefined
        PhoneMaskingCode?: string | undefined
        PhoneNumber?: string | undefined
        PreparationTime?: string | undefined
      }
    | undefined
  IsTest?: boolean | undefined
  Items?: OrderItem2 | undefined
  OrderId?: string | undefined
  Payment?:
    | {
        Lines?:
          | { Paid?: boolean | undefined; Type?: string | undefined; Value?: number | undefined }[]
          | undefined
      }
    | undefined
  PlacedDate?: string | undefined
  PriceBreakdown?:
    | {
        Discount?: (number | null) | undefined
        Fees?:
          | {
              Delivery?: (number | null) | undefined
              Other?: (number | null) | undefined
              ServiceCharge?: (number | null) | undefined
            }
          | undefined
        Items?: (number | null) | undefined
        Taxes?: (number | null) | undefined
        Tips?: (number | null) | undefined
      }
    | undefined
  Restaurant?:
    | {
        Address?: OrderAddress | undefined
        Id?: string | undefined
        Name?: string | undefined
        PhoneNumber?: string | undefined
        Reference?: string | undefined
        TimeZone?: string | undefined
      }
    | undefined
  Restrictions?: OrderItemRestriction[] | undefined
  TotalPrice?: number | undefined
}
type AttemptedDeliveryResolved = {
  OrderId?: string | undefined
  Resolution?:
    | {
        Cancellation?:
          | {
              Reason?:
                | 'new_address_not_within_area'
                | 'unable_to_reprepare'
                | 'driver_not_available'
                | 'area_unsafe'
                | 'customer_doesnt_want_anymore'
                | undefined
            }
          | undefined
        Redelivery?:
          | {
              CustomerTimeZone?: string | undefined
              NewDueDate?: string | undefined
              Status?: 'driver_at_address' | 'repreparing' | undefined
            }
          | undefined
        Type?: 'order_cancelled' | 'redeliver_order' | undefined
      }
    | undefined
  Tenant?: 'uk' | 'dk' | 'es' | 'ie' | 'it' | 'no' | 'au' | 'nz' | undefined
}
type CheckoutIssue = {
  code:
    | 'RESTAURANT_NOT_TAKING_ORDERS'
    | 'SERVICE_TYPE_UNAVAILABLE'
    | 'ITEMS_UNORDERABLE'
    | 'ADDITIONAL_ITEMS_REQUIRED'
    | 'MINIMUM_ORDER_VALUE_NOT_MET'
    | 'FULFILMENT_TIME_UNAVAILABLE'
    | 'LOCATION_UNDELIVERABLE'
    | 'AGE_VERIFICATION_FAILED'
    | 'FIRST_NAME_REQUIRED'
    | 'PHONE_NUMBER_REQUIRED'
    | 'DATE_OF_BIRTH_REQUIRED'
    | 'FULFILMENT_TIME_REQUIRED'
    | 'ADDRESS_LINES_REQUIRED'
    | 'LOCALITY_REQUIRED'
    | 'ADMINISTRATIVE_AREA_REQUIRED'
    | 'POSTAL_CODE_REQUIRED'
    | 'GEOLOCATION_REQUIRED'
}
type CheckoutGetResponse = {
  customer: {
    firstName?: (string | null) | undefined
    lastName?: (string | null) | undefined
    phoneNumber?: (string | null) | undefined
  }
  fulfilment: {
    location?:
      | ({
          address?:
            | ({
                administrativeArea?: (string | null) | undefined
                lines?: string[] | undefined
                locality?: (string | null) | undefined
                postalCode?: (string | null) | undefined
              } | null)
            | undefined
          geolocation?: ({ latitude: number; longitude: number } | null) | undefined
        } | null)
      | undefined
    time?:
      | ({ asap: boolean; scheduled?: ({ from: string; to: string } | null) | undefined } | null)
      | undefined
  }
  isFulfillable: boolean
  issues: CheckoutIssue[]
  restaurant: { availabilityId: string; id: string }
  serviceType: 'delivery' | 'collection'
}
type CheckoutGet400Error = {
  fault?:
    | ({
        errors: { description: string; errorCode: 'TENANT_INVALID' | 'CHECKOUT_ID_INVALID' }[]
        faultId: string
        traceId: string
      } | null)
    | undefined
}
type CheckoutDefaultError = {
  fault?:
    | ({ errors: { description: string }[]; faultId: string; traceId: string } | null)
    | undefined
}
type Checkout404Error = {
  fault?:
    | ({
        errors: { description: string; errorCode: 'TENANT_NOT_SUPPORTED' | 'CHECKOUT_NOT_FOUND' }[]
        faultId: string
        traceId: string
      } | null)
    | undefined
}
type Checkout409Error = {
  fault?:
    | ({
        errors: { description: string; errorCode: 'CHECKOUT_INVALID' }[]
        faultId: string
        traceId: string
      } | null)
    | undefined
}
type CheckoutUpdateRequest = {
  customer?:
    | ({
        dateOfBirth?: (string | null) | undefined
        firstName?: (string | null) | undefined
        lastName?: (string | null) | undefined
        phoneNumber?: (string | null) | undefined
      } | null)
    | undefined
  fulfilment?:
    | ({
        location?:
          | ({
              address?:
                | ({
                    administrativeArea?: (string | null) | undefined
                    lines?: (string[] | null) | undefined
                    locality?: (string | null) | undefined
                    postalCode?: (string | null) | undefined
                  } | null)
                | undefined
              geolocation?: ({ latitude: number; longitude: number } | null) | undefined
            } | null)
          | undefined
        time?:
          | ({
              asap?: boolean | undefined
              scheduled?: ({ from: string; to: string } | null) | undefined
            } | null)
          | undefined
      } | null)
    | undefined
  notes?: ({ note: string; type: 'delivery' }[] | null) | undefined
}
type CheckoutUpdateResponse = { isFulfillable: boolean; issues: CheckoutIssue[] }
type CheckoutUpdate400Error = {
  fault?:
    | ({
        errors: {
          description: string
          errorCode:
            | 'TENANT_INVALID'
            | 'CHECKOUT_ID_INVALID'
            | 'INVALID_REQUEST'
            | 'FIRST_NAME_INVALID'
            | 'LAST_NAME_INVALID'
            | 'PHONE_NUMBER_INVALID'
            | 'DATE_OF_BIRTH_INVALID'
            | 'FULFILMENT_TIME_INVALID'
            | 'ADDRESS_LINES_INVALID'
            | 'LOCALITY_INVALID'
            | 'ADMINISTRATIVE_AREA_INVALID'
            | 'POSTAL_CODE_INVALID'
            | 'GEOLOCATION_INVALID'
            | 'DELIVERY_NOTE_INVALID'
        }[]
        faultId: string
        traceId: string
      } | null)
    | undefined
}
type GetAvailableFulfilmentTimesResponse = {
  asapAvailable: boolean
  times: { from: string; to: string }[]
}
type AvailableFulfilmentTimes409Error = {
  fault?:
    | ({
        errors: {
          description: string
          errorCode: 'FULFILMENT_TIME_BANDS_INVALID' | 'FULFILMENT_TIME_BANDS_NOT_FOUND'
        }[]
        faultId: string
        traceId: string
      } | null)
    | undefined
}
type _4XXErrorSchema = {
  fault?:
    | {
        errors?: { description?: string | undefined; errorCode?: string | undefined }[] | undefined
        faultId: string
        traceId?: string | undefined
      }
    | undefined
}
type _500ErrorSchema = {
  fault?:
    | {
        errors?: { description?: 'Internal Server Error' | undefined }[] | undefined
        faultId: string
        traceId?: string | undefined
      }
    | undefined
}
type _5XXErrorSchema = {
  fault?:
    | {
        errors?: { description?: string | undefined; errorCode?: string | undefined }[] | undefined
        faultId: string
        traceId?: string | undefined
      }
    | undefined
}
type ConsumerMarketingPreference = {
  channelName?: 'Email' | 'Push' | 'Sms' | undefined
  dateUpdated?: string | undefined
  isSubscribed?: boolean | undefined
}[]
type ConsumerCreate = {
  emailAddress: string
  firstName: string
  lastName: string
  marketingPreferences?: ConsumerMarketingPreference | undefined
  password?: string | undefined
  registrationSource?: 'Native' | 'Guest' | undefined
}
type ConsumerCreateResponse = { token: string; type: 'otac' }
type CommunicationChannels = 'email' | 'sms' | 'push'
type ChannelSubscriptionsWithDerivedField = {
  isDefault?: boolean | undefined
  subscribedChannels?: CommunicationChannels[] | undefined
}
type CommunicationPreferences = { marketing?: ChannelSubscriptionsWithDerivedField | undefined }
type CommunicationTypes = 'marketing'
type ChannelSubscriptions = { subscribedChannels?: CommunicationChannels[] | undefined }
type AttemptedDeliveryCreated = {
  OrderId?: string | undefined
  Reason?: string | undefined
  RestaurantId?: number | undefined
  Tenant?: string | undefined
}
type RestaurantDeliveryFees = {
  bands?: { fee?: number | undefined; minimumAmount?: number | undefined }[] | undefined
  minimumOrderValue?: number | undefined
  restaurantId?: string | undefined
}
type EstimatedDeliveryTime = {
  DurationInMinutes?: string | undefined
  RestaurantReference?: string | undefined
}
type CreateDeliveryPool = { name: string; restaurants?: number[] | undefined }
type PatchDeliveryPool = { name?: string | undefined; restaurants?: number[] | undefined }
type EstimatedTime = { bestGuess?: string | undefined }
type DeliveryPoolHours = {
  friday: { closed?: boolean | undefined; poolTimes: { endTime: string; startTime: string }[] }
  monday: { closed?: boolean | undefined; poolTimes: { endTime: string; startTime: string }[] }
  saturday: { closed?: boolean | undefined; poolTimes: { endTime: string; startTime: string }[] }
  sunday: { closed?: boolean | undefined; poolTimes: { endTime: string; startTime: string }[] }
  thursday: { closed?: boolean | undefined; poolTimes: { endTime: string; startTime: string }[] }
  tuesday: { closed?: boolean | undefined; poolTimes: { endTime: string; startTime: string }[] }
  wednesday: { closed?: boolean | undefined; poolTimes: { endTime: string; startTime: string }[] }
}
type DeliveryRestaurantslist = { restaurants?: number[] | undefined }
type DriverStatus = {
  DriverContactNumber?: string | undefined
  DriverName?: string | undefined
  EstimatedDeliveryTime?: string | undefined
  EstimatedPickupTime?: string | undefined
  Event?:
    | 'DriverAssigned'
    | 'DriverAtRestaurant'
    | 'OnItsWay'
    | 'AtDeliveryAddress'
    | 'Delivered'
    | undefined
  OrderId?: string | undefined
  TimeStamp?: string | undefined
}
type LocationV2 = { Latitude: number; Longitude: number }
type DriverLocation = {
  Location?: LocationV2 | undefined
  OrderId?: string | undefined
  TimeStamp?: string | undefined
}
type LateOrderCompensationOption = {
  amount?: number | undefined
  isRecommended?: boolean | undefined
}
type LateOrderCompensationOptions = LateOrderCompensationOption[]
type LateOrderCompensationQuery2 = {
  compensationOptions?: LateOrderCompensationOptions | undefined
  orderId?: string | undefined
  restaurantId?: string | undefined
  tenant?: string | undefined
}
type LateOrderQuery = {
  orderId?: string | undefined
  restaurantId?: string | undefined
  tenant?: string | undefined
}
type MenuIngestionComplete = {
  correlationId?: string | undefined
  fault?:
    | {
        errors?: { code?: string | undefined; description?: string | undefined }[] | undefined
        id?: string | undefined
      }
    | undefined
  restaurantId?: string | undefined
  result?: 'success' | 'fail' | undefined
  tenant?: 'au' | 'dk' | 'es' | 'ie' | 'it' | 'no' | 'uk' | 'nz' | undefined
  timestamp?: string | undefined
}
type OrderAccepted = {
  AcceptedFor?: string | undefined
  Event?: string | undefined
  OrderId?: string | undefined
}
type OrderCancelled2 = {
  Event?: string | undefined
  OrderId?: string | undefined
  Reason?:
    | 'cust_cancelled_changed_mind'
    | 'cust_cancelled_delivery_too_long'
    | 'cust_cancelled_made_mistake'
    | 'cust_cancelled_other'
    | 'delivery_partner_cancelled'
    | 'rest_cancelled_customer_absent'
    | 'rest_cancelled_customer_requested'
    | 'rest_cancelled_declined'
    | 'rest_cancelled_drivers_unavailable'
    | 'rest_cancelled_fake_order'
    | 'rest_cancelled_other'
    | 'rest_cancelled_out_of_stock'
    | 'rest_cancelled_too_busy'
    | 'system_cancelled_other'
    | 'system_cancelled_test_order'
    | undefined
}
type OrderEligibleForRestaurantCompensation = {
  IsEligible?: boolean | undefined
  OrderId?: string | undefined
}
type ReadyForPickup = { Event?: 'Ready for pickup' | undefined; Timestamp?: string | undefined }
type Location = {
  Accuracy?: number | undefined
  Heading?: number | undefined
  Latitude: number
  Longitude: number
  Speed?: number | undefined
}
type ItemV2 = {
  Items?: ItemV2[] | undefined
  Name?: string | undefined
  Quantity?: number | undefined
  Reference?: string | undefined
  UnitPrice?: number | undefined
}
type OrderReadyForPreparation = {
  Currency?: string | undefined
  Customer?: { Id?: string | undefined; Name?: string | undefined } | undefined
  CustomerNotes?: { [x: string]: string } | undefined
  Fulfilment?:
    | {
        Address?:
          | {
              City?: string | undefined
              Geolocation?: Location | undefined
              Lines?: string[] | undefined
              PostalCode?: string | undefined
            }
          | undefined
        CustomerDueAsap?: boolean | undefined
        CustomerDueDate?: string | undefined
        Method?: 'Delivery' | 'Collection' | undefined
        PhoneNumber?: string | undefined
        PreparationTime?: string | undefined
        PrepareFor?: string | undefined
      }
    | undefined
  IsTest?: boolean | undefined
  Items?: ItemV2[] | undefined
  OrderId?: string | undefined
  Payment?:
    | {
        Lines?:
          | {
              Paid?: boolean | undefined
              Type?: 'card' | 'cash' | 'credit' | 'other' | undefined
              Value?: number | undefined
            }[]
          | undefined
      }
    | undefined
  PlacedDate?: string | undefined
  PriceBreakdown?:
    | {
        Discount?: number | undefined
        Fees?:
          | {
              Delivery?: number | undefined
              Other?: number | undefined
              ServiceCharge?: number | undefined
            }
          | undefined
        Items?: number | undefined
        Taxes?: number | undefined
        Tips?: number | undefined
      }
    | undefined
  Restaurant?:
    | {
        Address?:
          | {
              City?: string | undefined
              Geolocation?: Location | undefined
              Lines?: string[] | undefined
              PostalCode?: string | undefined
            }
          | undefined
        Id?: string | undefined
        Name?: string | undefined
        PhoneNumber?: string | undefined
        Reference?: string | undefined
      }
    | undefined
  TotalPrice?: number | undefined
}
type OrderRejected = {
  Event?: string | undefined
  RejectedAt?: string | undefined
  RejectedBy?: string | undefined
  RejectedReason?: string | undefined
}
type Connectorder = {
  BasketInfo?:
    | {
        BasketId?: string | undefined
        DeliveryCharge?: number | undefined
        Discount?: number | undefined
        Discounts?:
          | {
              Discount?: number | undefined
              DiscountType?: string | undefined
              Id?: number | undefined
              QualifyingValue?: number | undefined
            }[]
          | undefined
        GroupedBasketItems?:
          | {
              BasketItem?:
                | {
                    CombinedPrice?: number | undefined
                    Discounts?:
                      | { Amount?: number | undefined; DiscountType?: string | undefined }[]
                      | undefined
                    MealParts?:
                      | {
                          GroupId?: number | undefined
                          MealPartId?: number | undefined
                          Name?: string | undefined
                          OptionalAccessories?:
                            | {
                                Name?: string | undefined
                                OptionalAccessoryId?: number | undefined
                                Quantity?: number | undefined
                                UnitPrice?: number | undefined
                              }[]
                            | undefined
                          RequiredAccessories?:
                            | {
                                GroupId?: number | undefined
                                Name?: string | undefined
                                RequiredAccessoryId?: number | undefined
                                UnitPrice?: number | undefined
                              }[]
                            | undefined
                          Synonym?: string | undefined
                        }[]
                      | undefined
                    MenuCardNumber?: string | undefined
                    MultiBuyDiscounts?:
                      | {
                          Amount?: number | undefined
                          DiscountType?: string | undefined
                          OrderItemId?: string | undefined
                          ProductTypeId?: number | undefined
                        }[]
                      | undefined
                    Name?: string | undefined
                    OptionalAccessories?:
                      | {
                          Name?: string | undefined
                          OptionalAccessoryId?: number | undefined
                          Quantity?: number | undefined
                          UnitPrice?: number | undefined
                        }[]
                      | undefined
                    ProductId?: number | undefined
                    ProductTypeId?: number | undefined
                    RequiredAccessories?:
                      | {
                          GroupId?: number | undefined
                          Name?: string | undefined
                          RequiredAccessoryId?: number | undefined
                          UnitPrice?: number | undefined
                        }[]
                      | undefined
                    Synonym?: string | undefined
                    UnitPrice?: number | undefined
                  }
                | undefined
              CombinedPrice?: number | undefined
              MenuCardNumber?: string | undefined
              OrderSubId?: number | undefined
              Quantity?: number | undefined
            }[]
          | undefined
        MenuId?: number | undefined
        MultiBuyDiscount?: number | undefined
        SubTotal?: number | undefined
        ToSpend?: number | undefined
        Total?: number | undefined
      }
    | undefined
  CustomerInfo?:
    | {
        Address?: string | undefined
        City?: string | undefined
        DisplayPhoneNumber?: string | undefined
        Email?: string | undefined
        Id?: string | undefined
        Latitude?: number | undefined
        LocationAccuracyDescription?: string | undefined
        LocationAccuracyInMeters?: number | undefined
        LocationSource?: string | undefined
        Longitude?: number | undefined
        Name?: string | undefined
        PhoneMaskingCode?: string | undefined
        PhoneNumber?: string | undefined
        Postcode?: string | undefined
        PreviousRestuarantOrderCount?: number | undefined
        TimeZone?: string | undefined
      }
    | undefined
  CustomerOrderId?: number | undefined
  FriendlyOrderReference?: string | undefined
  Id?: string | undefined
  IsAMiniFistPumpOrder?: boolean | undefined
  Order?:
    | {
        DueDate?: string | undefined
        DueDateWithUtcOffset?: string | undefined
        InitialDueDate?: string | undefined
        InitialDueDateWithUtcOffset?: string | undefined
        NoteToRestaurant?: string | undefined
        PickupNoticePeriod?: string | undefined
        PlacedDate?: string | undefined
        PromptAsap?: boolean | undefined
        RdsPickupTimeWithUtcOffset?: string | undefined
        ServiceType?: 'Collection' | 'Delivery' | undefined
      }
    | undefined
  OrderId?: string | undefined
  OrderReference?: string | undefined
  PaymentInfo?:
    | {
        CashOnDelivery?: boolean | undefined
        DriverTipValue?: number | undefined
        PaidDate?: string | undefined
        PaymentLines?:
          | {
              CardFee?: number | undefined
              Type?: 'Card' | undefined
              Value?: number | undefined
            }[]
          | undefined
        Total?: number | undefined
        TotalComplementary?: number | undefined
      }
    | undefined
  RestaurantInfo?:
    | {
        AddressLines?: string[] | undefined
        City?: string | undefined
        DispatchMethod?: string | undefined
        EmailAddress?: string | undefined
        Id?: string | undefined
        Latitude?: number | undefined
        Longitude?: number | undefined
        Name?: string | undefined
        PhoneNumber?: string | undefined
        PickupNotes?: string | undefined
        Postcode?: string | undefined
      }
    | undefined
  Restrictions?: OrderItemRestriction[] | undefined
}
type ConnectorderList = Connectorder[]
type OrderTimeUpdated = {
  dayOfWeek?:
    | 'Sunday'
    | 'Monday'
    | 'Tuesday'
    | 'Wednesday'
    | 'Thursday'
    | 'Friday'
    | 'Saturday'
    | undefined
  lowerBoundMinutes?: number | undefined
  restaurantId?: string | undefined
  serviceType?: 'Delivery' | 'Collection' | undefined
  upperBoundMinutes?: number | undefined
}
type AddressV2 = {
  City: string
  GeoLocation?: LocationV2 | undefined
  Lines: string[]
  PostalCode: string
}
type CustomerV2 = {
  Address: AddressV2
  DisplayPhoneNumber?: string | undefined
  Email?: string | undefined
  Name: string
  PhoneNumber: string
}
type FulfilmentV2 = {
  DueAsap?: boolean | undefined
  DueDate: string
  Method: 'Delivery' | 'Collection'
}
type ItemsV2 = {
  Items?: ItemV2[] | undefined
  Name: string
  Quantity: number
  Reference: string
  TotalPrice: number
  UnitPrice?: number | undefined
}
type Fee2 = { Type?: string | undefined; Value?: number | undefined }
type LinesV2 = {
  LastCardDigits?: string | undefined
  Paid?: boolean | undefined
  ServiceFee?: number | undefined
  Type: 'Cash' | 'Card' | 'AccountCredit' | 'Voucher'
  Value?: number | undefined
}
type TaxV2 = { Percentage: number; Type: string; Value: number }
type PaymentV2 = {
  Fees?: Fee2[] | undefined
  Lines: LinesV2[]
  PaidDate?: string | undefined
  Taxes?: TaxV2[] | undefined
  Tips?: Fee2[] | undefined
}
type RestaurantV2 = { Id?: number | undefined } | { Reference?: string | undefined }
type OrderRequestV2 = {
  Customer: CustomerV2
  CustomerNotes?:
    | { NoteForDelivery?: string | undefined; NoteForRestaurant?: string | undefined }
    | undefined
  FriendlyOrderReference?: string | undefined
  Fulfilment: FulfilmentV2
  IsTest?: boolean | undefined
  Items: ItemsV2[]
  OrderReference: string
  Payment: PaymentV2
  Restaurant: RestaurantV2
  TotalPrice: number
}
type BulkDeliveryDetails = {
  EtaAtDeliveryAddress?: string | undefined
  EtaAtRestaurant?: string | undefined
  Location?: Location | undefined
  OrderId?: string | undefined
  TimeStampWithUtcOffset?: string | undefined
}
type BulkDeliveryDetailsList = BulkDeliveryDetails[]
type OrderAcceptRequest = { TimeAcceptedFor?: string | undefined }
type OrderCancelRequest = { Message?: string | undefined }
type DeliveryDetails = {
  Location?: Location | undefined
  TimeStampWithUtcOffset?: string | undefined
}
type DeliveryDriverDetailsWithEta = {
  EtaAtDeliveryAddress?: string | undefined
  Location?: Location | undefined
  TimeStampWithUtcOffset?: string | undefined
}
type EtaEstimate = { bestGuess?: string | undefined; estimatedAt?: string | undefined }
type VehicleDetails = { Vehicle?: string | undefined; VehicleRegistration?: string | undefined }
type DeliveryDriverAssignedDetails = {
  DriverContactNumber?: string | undefined
  DriverName?: string | undefined
  EtaAtDeliveryAddress?: string | undefined
  EtaAtRestaurant?: string | undefined
  Location?: Location | undefined
  TimeStampWithUtcOffset?: string | undefined
  VehicleDetails?: VehicleDetails | undefined
}
type DeliveryDriverLocation = {
  EtaAtDeliveryAddress?: string | undefined
  EtaAtRestaurant?: string | undefined
  Location?: Location | undefined
  TimeStampWithUtcOffset?: string | undefined
}
type DeliveryDriverUnassignedDetails = {
  Comment?: string | undefined
  DriverContactNumber?: string | undefined
  DriverName?: string | undefined
  EtaAtDeliveryAddress?: string | undefined
  EtaAtRestaurant?: string | undefined
  'Location:'?: Location | undefined
  Reason?: string | undefined
  TimeStampWithUtcOffset?: string | undefined
  UnassignedBy?: string | undefined
}
type ExtensibleObject = { [x: string]: unknown }
type OnItsWayDetails = {
  EstimatedArrivalTime?: string | undefined
  Location?: Location | undefined
  TimeStampWithUtcOffset?: string | undefined
}
type OrderDueDateRequest = { DueDate?: string | undefined }
type OrderRejectRequest = { Message?: string | undefined }
type LateOrderRestaurantResponse = {
  additionalDeliveryTimeToAddMinutes?: number | undefined
  lateOrderStatus?: 'Preparing' | 'OnItsWay' | 'Delivered' | undefined
}
type LateOrderCompensationRestaurantResolution = {
  acceptedAmount?: number | undefined
  isAccepted?: boolean | undefined
  orderId?: string | undefined
  rejectedReasonCode?:
    | 'BadTraffic'
    | 'BadWeather'
    | 'BusierThanExpected'
    | 'CompensatedWithItem'
    | 'NoReason'
    | undefined
}
type CreateRestaurantCompensationQuery = {
  Comments?: string | undefined
  ReasonCode?: 'NotSet' | 'BeingPrepared' | 'OnItsWay' | 'Delivered' | 'Unknown' | undefined
}
type AttemptedDeliveryResponseReceived = {
  Notes?: string | undefined
  OrderId?: string | undefined
  Tenant?: string | undefined
  Update?: string | undefined
}
type RestaurantOfflineStatus = {
  AllowRestaurantOverride?: (boolean | null) | undefined
  IsOffline?: boolean | undefined
  RestaurantId?: string | undefined
  Tenant?: 'au' | 'dk' | 'es' | 'ie' | 'it' | 'no' | 'uk' | 'nz' | undefined
}
type LocalDateTime = string
type SearchRestaurant = {
  Address?:
    | {
        City?: string | undefined
        FirstLine?: string | undefined
        Latitude?: number | undefined
        Longitude?: number | undefined
        Postcode?: string | undefined
      }
    | undefined
  Badges?: { [x: string]: unknown }[] | undefined
  BrandName?: string | undefined
  City?: string | undefined
  CollectionMenuId?: (number | null) | undefined
  CuisineTypes?: { Id?: number | undefined; IsTopCuisine?: boolean | undefined }[] | undefined
  Cuisines?: { Name?: string | undefined; SeoName?: string | undefined }[] | undefined
  Deals?:
    | {
        Description?: string | undefined
        DiscountPercent?: number | undefined
        OfferType?: string | undefined
        QualifyingPrice?: number | undefined
      }[]
    | undefined
  DefaultDisplayRank?: number | undefined
  DeliveryChargeBands?:
    | {
        BasketThresholdPrice?: number | undefined
        DeliveryChargeBelowThreshold?: number | undefined
      }[]
    | undefined
  DeliveryCost?: number | undefined
  DeliveryEtaMinutes?:
    | {
        Approximate?: (number | null) | undefined
        RangeLower?: number | undefined
        RangeUpper?: number | undefined
      }
    | undefined
  DeliveryMenuId?: number | undefined
  DeliveryOpeningTime?: string | undefined
  DeliveryOpeningTimeLocal?: LocalDateTime | undefined
  DeliveryOpeningTimeUtc?: (string | null) | undefined
  DeliveryStartTime?: string | undefined
  DeliveryTime?: (number | null) | undefined
  DeliveryTimeMinutes?: (number | null) | undefined
  DeliveryWorkingTimeMinutes?: number | undefined
  DeliveryZipcode?: (string | null) | undefined
  Description?: string | undefined
  DriveDistance?: number | undefined
  DriveInfoCalculated?: boolean | undefined
  HygieneRating?: (number | null) | undefined
  Id?: number | undefined
  IsBrand?: boolean | undefined
  IsCloseBy?: boolean | undefined
  IsCollection?: boolean | undefined
  IsDelivery?: boolean | undefined
  IsFreeDelivery?: boolean | undefined
  IsHalal?: boolean | undefined
  IsNew?: boolean | undefined
  IsOpenNow?: boolean | undefined
  IsOpenNowForCollection?: boolean | undefined
  IsOpenNowForDelivery?: boolean | undefined
  IsOpenNowForPreorder?: boolean | undefined
  IsPremier?: boolean | undefined
  IsSponsored?: boolean | undefined
  IsTemporarilyOffline?: boolean | undefined
  IsTemporaryBoost?: boolean | undefined
  IsTestRestaurant?: boolean | undefined
  LastUpdated?: LocalDateTime | undefined
  Latitude?: number | undefined
  Logo?: { StandardResolutionURL?: string | undefined }[] | undefined
  LogoUrl?: string | undefined
  Longitude?: number | undefined
  MinimumDeliveryValue?: number | undefined
  Name?: string | undefined
  NewnessDate?: LocalDateTime | undefined
  NumberOfRatings?: number | undefined
  OfferPercent?: number | undefined
  Offers?: { [x: string]: unknown }[] | undefined
  OpeningTime?: string | undefined
  OpeningTimeIso?: LocalDateTime | undefined
  OpeningTimeLocal?: LocalDateTime | undefined
  OpeningTimeUtc?: (string | null) | undefined
  OpeningTimes?: { [x: string]: unknown }[] | undefined
  Postcode?: string | undefined
  Rating?:
    | { Average?: number | undefined; Count?: number | undefined; StarRating?: number | undefined }
    | undefined
  RatingAverage?: number | undefined
  RatingStars?: number | undefined
  ReasonWhyTemporarilyOffline?: string | undefined
  Score?: number | undefined
  ScoreMetaData?: { Key?: string | undefined; Value?: string | undefined }[] | undefined
  SecondDateRank?: number | undefined
  SecondDateRanking?: number | undefined
  SendsOnItsWayNotifications?: boolean | undefined
  ServiceableAreas?: { [x: string]: unknown }[] | undefined
  ShowSmiley?: boolean | undefined
  SmileyDate?: ({ [x: string]: unknown } | null) | undefined
  SmileyElite?: boolean | undefined
  SmileyResult?: ({ [x: string]: unknown } | null) | undefined
  SmileyUrl?: ({ [x: string]: unknown } | null) | undefined
  SponsoredPosition?: number | undefined
  Tags?: string[] | undefined
  UniqueName?: string | undefined
  Url?: string | undefined
}
type RestaurantPromotedPlacementInfo = {
  defaultPromoted?: boolean | undefined
  restaurantId?: string | undefined
}
type SearchResponse = {
  CuisineSets?:
    | {
        Cuisines?: { Name?: string | undefined; SeoName?: string | undefined }[] | undefined
        Id?: string | undefined
        Name?: string | undefined
        Type?: string | undefined
      }[]
    | undefined
  Dishes?:
    | {
        Best?:
          | {
              FullName?: string | undefined
              Price?: number | undefined
              ProductId?: number | undefined
              StrProductId?: string | undefined
            }[]
          | undefined
        RestaurantId?: number | undefined
        Similar?:
          | {
              FullName?: string | undefined
              Price?: number | undefined
              ProductId?: number | undefined
            }[]
          | undefined
      }[]
    | undefined
  MetaData?:
    | {
        Area?: string | undefined
        CanonicalName?: string | undefined
        CuisineDetails?:
          | {
              Name?: string | undefined
              SeoName?: string | undefined
              Total?: number | undefined
            }[]
          | undefined
        District?: string | undefined
        Latitude?: number | undefined
        Longitude?: number | undefined
        Postcode?: string | undefined
        ResultCount?: number | undefined
        SearchedTerms?: ({ [x: string]: unknown } | null) | undefined
        TagDetails?:
          | {
              BackgroundColour?: string | undefined
              Colour?: string | undefined
              DisplayName?: string | undefined
              Key?: string | undefined
              Priority?: number | undefined
            }[]
          | undefined
      }
    | undefined
  RestaurantSets?:
    | {
        Id?: string | undefined
        Name?: string | undefined
        Restaurants?:
          | {
              Id?: number | undefined
              Metadata?: { Key?: string | undefined; Value?: string | undefined }[] | undefined
            }[]
          | undefined
        Type?: string | undefined
      }[]
    | undefined
  Restaurants?: SearchRestaurant[] | undefined
  ShortResultText?: string | undefined
  Views?:
    | {
        Components?:
          | {
              Id?: string | undefined
              TemplateName?: string | undefined
              TrackingId?: string | undefined
              Type?: string | undefined
              ViewData?: { [x: string]: unknown } | undefined
            }
          | undefined
        Target?: string | undefined
      }[]
    | undefined
  area?: string | undefined
  deliveryFees?: { restaurants?: { [x: string]: RestaurantDeliveryFees } | undefined } | undefined
  promotedPlacement?:
    | {
        filteredSearchPromotedLimit?: number | undefined
        rankedIds?: number[] | undefined
        restaurants?: { [x: string]: RestaurantPromotedPlacementInfo } | undefined
      }
    | undefined
}
type ExternalSearchResponse = {
  Restaurants?:
    | {
        Address?:
          | {
              City?: string | undefined
              FirstLine?: string | undefined
              Latitude?: number | undefined
              Longitude?: number | undefined
              Postcode?: string | undefined
            }
          | undefined
        DeliveryEtaMinutes?:
          | {
              Approximate?: number | undefined
              RangeLower?: number | undefined
              RangeUpper?: number | undefined
            }
          | undefined
        DriveDistance?: number | undefined
        DriveInfoCalculated?: boolean | undefined
        Id?: number | undefined
        IsOpenNow?: boolean | undefined
        IsOpenNowForDelivery?: boolean | undefined
        Name?: string | undefined
        UniqueName?: string | undefined
        Url?: string | undefined
      }[]
    | undefined
}
type SearchWebResponse = {
  Closed?: SearchRestaurant[] | undefined
  Offline?: SearchRestaurant[] | undefined
  Open?: SearchRestaurant[] | undefined
}
type RestaurantETAs = { etaAtRestaurant?: number | undefined; restaurantId?: string | undefined }[]
type IgnoredRestaurantIds = { ignoredRestaurantIds?: string[] | undefined }
type MenuBase = {
  currency?: string | undefined
  description?: string | undefined
  name?: string | undefined
  restaurantId?: string | undefined
}
type Time = {
  daysOfTheWeek?:
    | ('monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday')[]
    | undefined
  fromDateTime?: string | undefined
  toDateTime?: string | undefined
}
type Availability = {
  description?: string | undefined
  id?: string | undefined
  name?: string | undefined
  serviceTypes?: ('collection' | 'delivery')[] | undefined
  times?: Time[] | undefined
}
type PagedAvailabilitiesResponse = {
  paging?: { cursors?: { after?: string | undefined } | undefined } | undefined
  availabilities?: Availability[] | undefined
}
type CategoryBase = {
  description?: string | undefined
  id?: string | undefined
  name?: string | undefined
}
type PagedCategoriesResponse = {
  paging?: { cursors?: { after?: string | undefined } | undefined } | undefined
  categories?: CategoryBase[] | undefined
}
type PagedCategoryItemsResponse = {
  paging?: { cursors?: { after?: string | undefined } | undefined } | undefined
  itemIds?: string[] | undefined
}
type MenuItemBase = {
  description?: string | undefined
  id?: string | undefined
  labels?: ('hot' | 'vegetarian' | 'alcohol')[] | undefined
  name?: string | undefined
  requireOtherProducts?: boolean | undefined
  type?: 'menuItem' | 'deal' | undefined
}
type PagedMenuItemsResponse = {
  paging?: { cursors?: { after?: string | undefined } | undefined } | undefined
  items?: MenuItemBase[] | undefined
}
type MenuDealGroupBase = {
  id?: string | undefined
  name?: string | undefined
  numberOfChoices?: number | undefined
}
type PagedMenuDealGroupsResponse = {
  paging?: { cursors?: { after?: string | undefined } | undefined } | undefined
  dealGroups?: MenuDealGroupBase[] | undefined
}
type DealItemVariation = {
  additionPrice?: number | undefined
  dealItemVariationId?: string | undefined
  maxChoices?: number | undefined
  minChoices?: number | undefined
}
type PagedDealItemVariationResponse = {
  paging?: { cursors?: { after?: string | undefined } | undefined } | undefined
  dealItemVariations?: DealItemVariation[] | undefined
}
type MenuModifier = {
  additionPrice?: number | undefined
  id?: string | undefined
  maxChoices?: number | undefined
  minChoices?: number | undefined
  name?: string | undefined
}
type MenuModifierGroup = {
  id?: string | undefined
  maxChoices?: number | undefined
  minChoices?: number | undefined
  modifiers?: MenuModifier[] | undefined
  name?: string | undefined
}
type PagedMenuModifierGroupsResponse = {
  paging?: { cursors?: { after?: string | undefined } | undefined } | undefined
  modifierGroups?: MenuModifierGroup[] | undefined
}
type Variation = {
  availabilityIds?: string[] | undefined
  basePrice?: number | undefined
  dealGroupsIds?: string[] | undefined
  dealOnly?: boolean | undefined
  id?: string | undefined
  kitchenNumber?: string | undefined
  modifierGroupsIds?: string[] | undefined
  name?: string | undefined
  type?: 'noVariation' | 'variation' | undefined
}
type PagedVariationsResponse = {
  paging?: { cursors?: { after?: string | undefined } | undefined } | undefined
  variations?: Variation[] | undefined
}
type Item = {
  additionalContext?: (string | null) | undefined
  decision?: 'NotDecided' | 'Accepted' | 'Rejected' | undefined
  id?: string | undefined
  name?: string | undefined
  quantity?: number | undefined
  totalClaimed?: number | undefined
  unitPrice?: number | undefined
}
type ClaimResolution = {
  decision?: 'Accepted' | 'PartiallyAccepted' | 'Rejected' | undefined
  resolvedChannel?: string | undefined
  resolvedDate?: string | undefined
  totalClaimedAccepted?: number | undefined
} | null
type ItemDecision = { decision?: 'Accepted' | 'Rejected' | undefined; id?: string | undefined }
type Justification = {
  comments?: (string | null) | undefined
  reason?:
    | 'AlreadyRefunded'
    | 'ItemReplaced'
    | 'PartialRefundRequired'
    | 'WasNotMissing'
    | 'WillRedeliver'
    | 'OrderWasHot'
    | 'OrderWasOnTime'
    | 'OrderWasPacked'
    | 'FoodWasIntact'
    | 'AddExtraItem'
    | 'Other'
    | undefined
} | null
type OrderClaimRestaurantResponse = {
  decision?: 'Accepted' | 'Rejected' | 'PartiallyAccepted' | undefined
  items?: (ItemDecision[] | null) | undefined
  justification?: Justification | undefined
} | null
type OrderClaim = {
  affectedItems?: (Item[] | null) | undefined
  currency?: string | undefined
  expirationDate?: string | undefined
  friendlyOrderReference?: string | undefined
  id?: string | undefined
  issueType?: 'Missing' | 'Damaged' | 'Cold' | 'LateOrder' | 'FoodNotArrived' | undefined
  orderId?: string | undefined
  resolution?: ClaimResolution | undefined
  restaurantResponse?: OrderClaimRestaurantResponse | undefined
  state?: 'Open' | 'Closed' | undefined
  submittedDate?: string | undefined
  totalClaimed?: number | undefined
}
type ClaimsResponse = { claims?: OrderClaim[] | undefined }
type ServiceTypeFeeConfiguration = { amount?: number | undefined }
type Fee = {
  description?: string | undefined
  serviceTypes?:
    | {
        collection?: ServiceTypeFeeConfiguration | undefined
        default?: ServiceTypeFeeConfiguration | undefined
        delivery?: ServiceTypeFeeConfiguration | undefined
      }
    | undefined
}
type RestaurantFees = { bagFee?: Fee | undefined }
type Category = {
  description?: string | undefined
  id?: string | undefined
  name?: string | undefined
  itemIds?: string[] | undefined
}
type MenuDealGroup = {
  id?: string | undefined
  name?: string | undefined
  numberOfChoices?: number | undefined
  dealItemVariations?: DealItemVariation[] | undefined
}
type MenuItem = {
  description?: string | undefined
  id?: string | undefined
  labels?: ('hot' | 'vegetarian' | 'alcohol')[] | undefined
  name?: string | undefined
  requireOtherProducts?: boolean | undefined
  type?: 'menuItem' | 'deal' | undefined
  dealGroups?: MenuDealGroup[] | undefined
  imageUrl?: string | undefined
  modifierGroups?: MenuModifierGroup[] | undefined
  variations?: Variation[] | undefined
}
type Menu = {
  currency?: string | undefined
  description?: string | undefined
  name?: string | undefined
  restaurantId?: string | undefined
  availabilities?: Availability[] | undefined
  categories?: Category[] | undefined
  items?: MenuItem[] | undefined
}
type ConsumerErrorResponse = { code?: number | undefined; codeText?: string | undefined }
type MenuIngestionResponse = { correlationId?: string | undefined }
type OrderTime = {
  dayOfWeek?:
    | 'Sunday'
    | 'Monday'
    | 'Tuesday'
    | 'Wednesday'
    | 'Thursday'
    | 'Friday'
    | 'Saturday'
    | undefined
  lowerBoundMinutes?: number | undefined
  serviceType?: 'Delivery' | 'Collection' | undefined
  upperBoundMinutes?: number | undefined
}
type UpdateOrderTimeRequest2 = {
  lowerBoundMinutes?: number | undefined
  upperBoundMinutes?: number | undefined
}
type ServiceTimesCollection = { end?: string | undefined; start?: string | undefined }[]
type ServiceTimes = {
  serviceTimes?:
    | {
        friday?:
          | {
              collection?: ServiceTimesCollection | undefined
              delivery?: ServiceTimesCollection | undefined
            }
          | undefined
        monday?:
          | {
              collection?: ServiceTimesCollection | undefined
              delivery?: ServiceTimesCollection | undefined
            }
          | undefined
        saturday?:
          | {
              collection?: ServiceTimesCollection | undefined
              delivery?: ServiceTimesCollection | undefined
            }
          | undefined
        sunday?:
          | {
              collection?: ServiceTimesCollection | undefined
              delivery?: ServiceTimesCollection | undefined
            }
          | undefined
        thursday?:
          | {
              collection?: ServiceTimesCollection | undefined
              delivery?: ServiceTimesCollection | undefined
            }
          | undefined
        tuesday?:
          | {
              collection?: ServiceTimesCollection | undefined
              delivery?: ServiceTimesCollection | undefined
            }
          | undefined
        wednesday?:
          | {
              collection?: ServiceTimesCollection | undefined
              delivery?: ServiceTimesCollection | undefined
            }
          | undefined
      }
    | undefined
}
type AutoCompleteSearchResponseItem = {
  classification?: 'Restaurant' | 'Cuisine' | 'Dish' | undefined
  term?: string | undefined
}
type AutoCompleteSearchResponse = { terms?: AutoCompleteSearchResponseItem[] | undefined }
type RestaurantSearchProduct = {
  fullName?: string | undefined
  price?: number | undefined
  productId?: string | undefined
}
type RestaurantSearchResponseItem = {
  isSponsored?: boolean | undefined
  products?: RestaurantSearchProduct[] | undefined
  restaurantId?: string | undefined
}
type RestaurantSearchResponse = { restaurants?: RestaurantSearchResponseItem[] | undefined }
type SendToPosFailed = { OrderId?: string | undefined }
type UserRole = 'System' | 'Operations' | 'Restaurant'
type LegacyTempOfflineStatus =
  | 'Unset'
  | 'None'
  | 'TempOffline'
  | 'ClosedToday'
  | 'ClosedDueToEvent'
  | 'FailedJctConnection'
  | 'NoTrOverride'
  | 'IgnoredOrders'
type OfflineRestaurantsRequestModel = {
  allowRestaurantOverride: boolean
  category?: string | undefined
  duration?: string | undefined
  endDate?: (string | null) | undefined
  legacyTempOfflineType?: LegacyTempOfflineStatus | undefined
  name: string
  reason: string
  restaurantIds: string
  startDate: string
}
type ValidationError = {
  attemptedValue?: (string | null) | undefined
  customState?: (string | null) | undefined
  errorCode?: string | undefined
  errorMessage?: string | undefined
  formattedMessageArguments?: string[] | undefined
  formattedMessagePlaceHolderValues?: { [x: string]: unknown } | undefined
  propertyName?: string | undefined
  resourceName?: (string | null) | undefined
  severity?: number | undefined
}
type CreateAttemptedDelivery = { ReasonCode?: 'problem_with_address' | 'no_answer' | undefined }
type ResolveAttemptedDeliveryRedeliver = {
  NewDueDate?: string | undefined
  Status?: 'driver_at_address' | 'repreparing' | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/acceptance-requested': {
      $post: { input: { json: AcceptanceRequested }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/attempted-delivery-query-resolved': {
      $put: {
        input: { json: AttemptedDeliveryResolved }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/checkout/:tenant/:checkoutId': {
      $get:
        | {
            input: { param: { tenant: string; checkoutId: string } } & {
              header: { 'User-Agent': string }
            }
            output: CheckoutGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenant: string; checkoutId: string } } & {
              header: { 'User-Agent': string }
            }
            output: CheckoutGet400Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tenant: string; checkoutId: string } } & {
              header: { 'User-Agent': string }
            }
            output: CheckoutDefaultError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tenant: string; checkoutId: string } } & {
              header: { 'User-Agent': string }
            }
            output: CheckoutDefaultError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tenant: string; checkoutId: string } } & {
              header: { 'User-Agent': string }
            }
            output: Checkout404Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tenant: string; checkoutId: string } } & {
              header: { 'User-Agent': string }
            }
            output: Checkout409Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { tenant: string; checkoutId: string } } & {
              header: { 'User-Agent': string }
            }
            output: CheckoutDefaultError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { tenant: string; checkoutId: string } } & {
              header: { 'User-Agent': string }
            }
            output: CheckoutDefaultError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { tenant: string; checkoutId: string } } & {
              header: { 'User-Agent': string }
            }
            output: CheckoutDefaultError
            outputFormat: 'json'
            status: 503
          }
      $patch:
        | {
            input: { param: { tenant: string; checkoutId: string } } & {
              header: { 'User-Agent': string }
            } & { json: CheckoutUpdateRequest }
            output: CheckoutUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenant: string; checkoutId: string } } & {
              header: { 'User-Agent': string }
            } & { json: CheckoutUpdateRequest }
            output: CheckoutUpdate400Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tenant: string; checkoutId: string } } & {
              header: { 'User-Agent': string }
            } & { json: CheckoutUpdateRequest }
            output: CheckoutDefaultError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tenant: string; checkoutId: string } } & {
              header: { 'User-Agent': string }
            } & { json: CheckoutUpdateRequest }
            output: CheckoutDefaultError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tenant: string; checkoutId: string } } & {
              header: { 'User-Agent': string }
            } & { json: CheckoutUpdateRequest }
            output: Checkout404Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tenant: string; checkoutId: string } } & {
              header: { 'User-Agent': string }
            } & { json: CheckoutUpdateRequest }
            output: Checkout409Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { tenant: string; checkoutId: string } } & {
              header: { 'User-Agent': string }
            } & { json: CheckoutUpdateRequest }
            output: CheckoutDefaultError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { tenant: string; checkoutId: string } } & {
              header: { 'User-Agent': string }
            } & { json: CheckoutUpdateRequest }
            output: CheckoutDefaultError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { tenant: string; checkoutId: string } } & {
              header: { 'User-Agent': string }
            } & { json: CheckoutUpdateRequest }
            output: CheckoutDefaultError
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/checkout/:tenant/:checkoutId/fulfilment/availabletimes': {
      $get:
        | {
            input: { param: { tenant: string; checkoutId: string } } & {
              header: { 'User-Agent': string }
            }
            output: GetAvailableFulfilmentTimesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenant: string; checkoutId: string } } & {
              header: { 'User-Agent': string }
            }
            output: CheckoutGet400Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tenant: string; checkoutId: string } } & {
              header: { 'User-Agent': string }
            }
            output: Checkout404Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tenant: string; checkoutId: string } } & {
              header: { 'User-Agent': string }
            }
            output: AvailableFulfilmentTimes409Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { tenant: string; checkoutId: string } } & {
              header: { 'User-Agent': string }
            }
            output: CheckoutDefaultError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { tenant: string; checkoutId: string } } & {
              header: { 'User-Agent': string }
            }
            output: CheckoutDefaultError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { tenant: string; checkoutId: string } } & {
              header: { 'User-Agent': string }
            }
            output: CheckoutDefaultError
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/consumers/:tenant': {
      $get:
        | {
            input: { param: { tenant: string } } & {
              query: { emailAddress: string; accountType: 'registered'; count: string }
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tenant: string } } & {
              query: { emailAddress: string; accountType: 'registered'; count: string }
            }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tenant: string } } & {
              query: { emailAddress: string; accountType: 'registered'; count: string }
            }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tenant: string } } & {
              query: { emailAddress: string; accountType: 'registered'; count: string }
            }
            output: _500ErrorSchema
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { tenant: string } } & {
              query: { emailAddress: string; accountType: 'registered'; count: string }
            }
            output: _5XXErrorSchema
            outputFormat: 'json'
            status: 501
          }
      $post:
        | {
            input: { param: { tenant: string } } & { json: ConsumerCreate }
            output: ConsumerCreateResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { tenant: string } } & { json: ConsumerCreate }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tenant: string } } & { json: ConsumerCreate }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tenant: string } } & { json: ConsumerCreate }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tenant: string } } & { json: ConsumerCreate }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { tenant: string } } & { json: ConsumerCreate }
            output: _500ErrorSchema
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/consumers/:tenant/me/communication-preferences': {
      $get:
        | {
            input: { param: { tenant: string } }
            output: CommunicationPreferences
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenant: string } }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tenant: string } }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tenant: string } }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tenant: string } }
            output: _500ErrorSchema
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/consumers/:tenant/me/communication-preferences/:type': {
      $get:
        | {
            input: { param: { tenant: string; type: CommunicationTypes } }
            output: ChannelSubscriptionsWithDerivedField
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenant: string; type: CommunicationTypes } }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tenant: string; type: CommunicationTypes } }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tenant: string; type: CommunicationTypes } }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tenant: string; type: CommunicationTypes } }
            output: _500ErrorSchema
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { tenant: string; type: CommunicationTypes } } & {
              json: ChannelSubscriptions
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { tenant: string; type: CommunicationTypes } } & {
              json: ChannelSubscriptions
            }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tenant: string; type: CommunicationTypes } } & {
              json: ChannelSubscriptions
            }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tenant: string; type: CommunicationTypes } } & {
              json: ChannelSubscriptions
            }
            output: _500ErrorSchema
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/consumers/:tenant/me/communication-preferences/:type/subscribedChannels/:channel': {
      $delete:
        | {
            input: { param: { tenant: string; type: CommunicationTypes; channel: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { tenant: string; type: CommunicationTypes; channel: string } }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tenant: string; type: CommunicationTypes; channel: string } }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tenant: string; type: CommunicationTypes; channel: string } }
            output: _500ErrorSchema
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              param: { tenant: string; type: CommunicationTypes; channel: CommunicationChannels }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: { tenant: string; type: CommunicationTypes; channel: CommunicationChannels }
            }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { tenant: string; type: CommunicationTypes; channel: CommunicationChannels }
            }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { tenant: string; type: CommunicationTypes; channel: CommunicationChannels }
            }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { tenant: string; type: CommunicationTypes; channel: CommunicationChannels }
            }
            output: _500ErrorSchema
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/delivery-failed': {
      $put: {
        input: { json: AttemptedDeliveryCreated }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/delivery-fees/:tenant': {
      $get:
        | {
            input: { param: { tenant: string } } & {
              query: {
                restaurantIds: string[]
                deliveryTime: string
                zone?: string | undefined
                latlong?: number[] | undefined
              }
            }
            output: { restaurants?: RestaurantDeliveryFees[] | undefined } | null
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenant: string } } & {
              query: {
                restaurantIds: string[]
                deliveryTime: string
                zone?: string | undefined
                latlong?: number[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { tenant: string } } & {
              query: {
                restaurantIds: string[]
                deliveryTime: string
                zone?: string | undefined
                latlong?: number[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/delivery/estimate': {
      $get: {
        input: {
          query: {
            restaurantReference: string
            toLat?: string | undefined
            toLon?: string | undefined
            toPostcode?: string | undefined
          }
        }
        output: EstimatedDeliveryTime
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/delivery/pools': {
      $get:
        | {
            input: {}
            output: {
              'delivery-pool-id'?:
                | { name?: string | undefined; restaurants?: number[] | undefined }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
      $post:
        | { input: { json: CreateDeliveryPool }; output: {}; outputFormat: string; status: 201 }
        | { input: { json: CreateDeliveryPool }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: CreateDeliveryPool }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/delivery/pools/:deliveryPoolId': {
      $delete:
        | {
            input: { param: { deliveryPoolId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { deliveryPoolId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { deliveryPoolId: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $get:
        | {
            input: { param: { deliveryPoolId: string } }
            output: { name?: string | undefined; restaurants?: number[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { deliveryPoolId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { deliveryPoolId: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $patch:
        | {
            input: { param: { deliveryPoolId: string } } & { json: PatchDeliveryPool }
            output: { name?: string | undefined; restaurants?: number[] | undefined }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { deliveryPoolId: string } } & { json: PatchDeliveryPool }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { deliveryPoolId: string } } & { json: PatchDeliveryPool }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { deliveryPoolId: string } } & { json: PatchDeliveryPool }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { deliveryPoolId: string } } & { json: PatchDeliveryPool }
            output: {}
            outputFormat: string
            status: 500
          }
      $put:
        | {
            input: { param: { deliveryPoolId: string } } & { json: CreateDeliveryPool }
            output: { name?: string | undefined; restaurants?: number[] | undefined }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { deliveryPoolId: string } } & { json: CreateDeliveryPool }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { deliveryPoolId: string } } & { json: CreateDeliveryPool }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { deliveryPoolId: string } } & { json: CreateDeliveryPool }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { deliveryPoolId: string } } & { json: CreateDeliveryPool }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/delivery/pools/:deliveryPoolId/availability/relative': {
      $get:
        | {
            input: { param: { deliveryPoolId: string } }
            output: { bestGuess?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { deliveryPoolId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { deliveryPoolId: string } } & { json: EstimatedTime }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { deliveryPoolId: string } } & { json: EstimatedTime }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/delivery/pools/:deliveryPoolId/hours': {
      $put:
        | {
            input: { param: { deliveryPoolId: string } } & { json: DeliveryPoolHours }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { deliveryPoolId: string } } & { json: DeliveryPoolHours }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/delivery/pools/:deliveryPoolId/restaurants': {
      $delete:
        | {
            input: { param: { deliveryPoolId: string } } & {
              json: { restaurants?: number[] | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { deliveryPoolId: string } } & {
              json: { restaurants?: number[] | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { deliveryPoolId: string } } & {
              json: { restaurants?: number[] | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { deliveryPoolId: string } }
            output: DeliveryRestaurantslist
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { deliveryPoolId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { deliveryPoolId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { deliveryPoolId: string } }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/driver-assigned-to-delivery': {
      $put: { input: { json: DriverStatus }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/driver-at-delivery-address': {
      $put: { input: { json: DriverStatus }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/driver-at-restaurant': {
      $put: { input: { json: DriverStatus }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/driver-has-delivered-order': {
      $put: { input: { json: DriverStatus }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/driver-location': {
      $put: { input: { json: DriverLocation }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/driver-on-their-way-to-delivery-address': {
      $put: { input: { json: DriverStatus }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/late-order-compensation-query': {
      $post: {
        input: { json: LateOrderCompensationQuery2 }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/late-order-query': {
      $post: { input: { json: LateOrderQuery }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/menu-ingestion-complete': {
      $post: {
        input: { json: MenuIngestionComplete }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/order-accepted': {
      $post: { input: { json: OrderAccepted }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/order-cancelled': {
      $post: { input: { json: OrderCancelled2 }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/order-eligible-for-restaurant-compensation': {
      $post: {
        input: { json: OrderEligibleForRestaurantCompensation }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/order-is-ready-for-pickup': {
      $put:
        | { input: { json: ReadyForPickup }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { json: ReadyForPickup }
            output: {
              Details?: string | undefined
              Message?: string | undefined
              OrderId?: string | undefined
              Timestamp?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/order-ready-for-preparation-async': {
      $post:
        | {
            input: { json: OrderReadyForPreparation }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { json: OrderReadyForPreparation }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/order-ready-for-preparation-sync': {
      $post: {
        input: { json: OrderReadyForPreparation }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/order-rejected': {
      $post: { input: { json: OrderRejected }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/order-requires-delivery-acceptance': {
      $put:
        | { input: { json: ConnectorderList }; output: {}; outputFormat: string; status: 201 }
        | {
            input: { json: ConnectorderList }
            output: {
              errors?:
                | {
                    code?:
                      | 'outside_hours'
                      | 'too_busy'
                      | 'too_far'
                      | 'not_supported'
                      | 'bad_address'
                      | 'bad_request'
                      | 'restaurant_not_configured'
                      | 'duplicate'
                      | 'other'
                      | undefined
                    message?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/order-time-updated': {
      $post: { input: { json: OrderTimeUpdated }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/orders': {
      $post:
        | {
            input: { header: { 'x-je-api-version'?: number | undefined } } & {
              json: OrderRequestV2
            }
            output: { OrderId?: string | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'x-je-api-version'?: number | undefined } } & {
              json: OrderRequestV2
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'x-je-api-version'?: number | undefined } } & {
              json: OrderRequestV2
            }
            output: { OrderId?: string | undefined }
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/orders/deliverystate/driverlocation': {
      $put: {
        input: { json: BulkDeliveryDetailsList }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/orders/:orderId/accept': {
      $put:
        | {
            input: { param: { orderId: string } } & { json: OrderAcceptRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { orderId: string } } & { json: OrderAcceptRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { orderId: string } } & { json: OrderAcceptRequest }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/orders/:orderId/cancel': {
      $put:
        | {
            input: { param: { orderId: string } } & { json: OrderCancelRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { orderId: string } } & { json: OrderCancelRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { orderId: string } } & { json: OrderCancelRequest }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/orders/:orderId/complete': {
      $post:
        | { input: { param: { orderId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { orderId: string } }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { orderId: string } }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { orderId: string } }
            output: _500ErrorSchema
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/orders/:orderId/deliverystate/atdeliveryaddress': {
      $put: {
        input: { param: { orderId: string } } & { json: DeliveryDetails }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/orders/:orderId/deliverystate/atrestaurant': {
      $put: {
        input: { param: { orderId: string } } & { json: DeliveryDriverDetailsWithEta }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/orders/:orderId/deliverystate/atrestauranteta': {
      $put: {
        input: { param: { orderId: string } } & { json: EtaEstimate }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/orders/:orderId/deliverystate/delivered': {
      $put: {
        input: { param: { orderId: string } } & { json: DeliveryDetails }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/orders/:orderId/deliverystate/driverassigned': {
      $put: {
        input: { param: { orderId: string } } & { json: DeliveryDriverAssignedDetails }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/orders/:orderId/deliverystate/driverlocation': {
      $put: {
        input: { param: { orderId: string } } & { json: DeliveryDriverLocation }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/orders/:orderId/deliverystate/driverunassigned': {
      $put:
        | {
            input: { param: { orderId: string } } & { json: DeliveryDriverUnassignedDetails }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { orderId: string } } & { json: DeliveryDriverUnassignedDetails }
            output: ExtensibleObject
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/orders/:orderId/deliverystate/onitsway': {
      $put: {
        input: { param: { orderId: string } } & { json: OnItsWayDetails }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/orders/:orderId/duedate': {
      $put:
        | {
            input: { param: { orderId: string } } & { json: OrderDueDateRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { orderId: string } } & { json: OrderDueDateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { orderId: string } } & { json: OrderDueDateRequest }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/orders/:orderId/ignore': {
      $put:
        | { input: { param: { orderId: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { orderId: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { orderId: string } }; output: {}; outputFormat: string; status: 409 }
    }
  } & {
    '/orders/:orderId/readyforcollection': {
      $post:
        | { input: { param: { orderId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { orderId: string } }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { orderId: string } }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { orderId: string } }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { orderId: string } }
            output: _500ErrorSchema
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/orders/:orderId/reject': {
      $put:
        | {
            input: { param: { orderId: string } } & { json: OrderRejectRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { orderId: string } } & { json: OrderRejectRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { orderId: string } } & { json: OrderRejectRequest }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/orders/:tenant/:orderId/consumerqueries/lateorder/restaurantresponse': {
      $post:
        | {
            input: { param: { tenant: string; orderId: string } } & {
              header: { Authorization: string }
            } & { json: LateOrderRestaurantResponse }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { tenant: string; orderId: string } } & {
              header: { Authorization: string }
            } & { json: LateOrderRestaurantResponse }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tenant: string; orderId: string } } & {
              header: { Authorization: string }
            } & { json: LateOrderRestaurantResponse }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tenant: string; orderId: string } } & {
              header: { Authorization: string }
            } & { json: LateOrderRestaurantResponse }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tenant: string; orderId: string } } & {
              header: { Authorization: string }
            } & { json: LateOrderRestaurantResponse }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { tenant: string; orderId: string } } & {
              header: { Authorization: string }
            } & { json: LateOrderRestaurantResponse }
            output: _500ErrorSchema
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/orders/:tenant/:orderId/consumerqueries/lateordercompensation/restaurantresponse': {
      $post:
        | {
            input: { param: { tenant: string; orderId: string } } & {
              header: { Authorization: string }
            } & { json: LateOrderCompensationRestaurantResolution }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { tenant: string; orderId: string } } & {
              header: { Authorization: string }
            } & { json: LateOrderCompensationRestaurantResolution }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tenant: string; orderId: string } } & {
              header: { Authorization: string }
            } & { json: LateOrderCompensationRestaurantResolution }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tenant: string; orderId: string } } & {
              header: { Authorization: string }
            } & { json: LateOrderCompensationRestaurantResolution }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tenant: string; orderId: string } } & {
              header: { Authorization: string }
            } & { json: LateOrderCompensationRestaurantResolution }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { tenant: string; orderId: string } } & {
              header: { Authorization: string }
            } & { json: LateOrderCompensationRestaurantResolution }
            output: _500ErrorSchema
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/orders/:tenant/:orderId/restaurantqueries/compensation': {
      $post:
        | {
            input: { param: { tenant: string; orderId: string } } & {
              header: { Authorization: string }
            } & { json: CreateRestaurantCompensationQuery }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { tenant: string; orderId: string } } & {
              header: { Authorization: string }
            } & { json: CreateRestaurantCompensationQuery }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tenant: string; orderId: string } } & {
              header: { Authorization: string }
            } & { json: CreateRestaurantCompensationQuery }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tenant: string; orderId: string } } & {
              header: { Authorization: string }
            } & { json: CreateRestaurantCompensationQuery }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tenant: string; orderId: string } } & {
              header: { Authorization: string }
            } & { json: CreateRestaurantCompensationQuery }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tenant: string; orderId: string } } & {
              header: { Authorization: string }
            } & { json: CreateRestaurantCompensationQuery }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { tenant: string; orderId: string } } & {
              header: { Authorization: string }
            } & { json: CreateRestaurantCompensationQuery }
            output: _500ErrorSchema
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/redelivery-requested': {
      $put: {
        input: { json: AttemptedDeliveryResponseReceived }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/restaurant-offline-status': {
      $put: {
        input: { json: RestaurantOfflineStatus }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/restaurant-online-status': {
      $put: {
        input: { json: RestaurantOfflineStatus }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/restaurants/bylatlong': {
      $get:
        | {
            input: {
              query: {
                latitude: number
                longitude: number
                cuisine?: string | undefined
                restaurantName?: string | undefined
                brandName?: string | undefined
              }
            } & { header: { Authorization: string; 'Accept-Tenant'?: string | undefined } }
            output: SearchResponse | ExternalSearchResponse | SearchWebResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                latitude: number
                longitude: number
                cuisine?: string | undefined
                restaurantName?: string | undefined
                brandName?: string | undefined
              }
            } & { header: { Authorization: string; 'Accept-Tenant'?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                latitude: number
                longitude: number
                cuisine?: string | undefined
                restaurantName?: string | undefined
                brandName?: string | undefined
              }
            } & { header: { Authorization: string; 'Accept-Tenant'?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                latitude: number
                longitude: number
                cuisine?: string | undefined
                restaurantName?: string | undefined
                brandName?: string | undefined
              }
            } & { header: { Authorization: string; 'Accept-Tenant'?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/restaurants/bypostcode/:postcode': {
      $get:
        | {
            input: { param: { postcode: string } } & {
              query: {
                cuisine?: string | undefined
                restaurantName?: string | undefined
                brandName?: string | undefined
              }
            } & {
              header: { Authorization?: string | undefined; 'Accept-Tenant'?: string | undefined }
            }
            output: SearchResponse | ExternalSearchResponse | SearchWebResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { postcode: string } } & {
              query: {
                cuisine?: string | undefined
                restaurantName?: string | undefined
                brandName?: string | undefined
              }
            } & {
              header: { Authorization?: string | undefined; 'Accept-Tenant'?: string | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { postcode: string } } & {
              query: {
                cuisine?: string | undefined
                restaurantName?: string | undefined
                brandName?: string | undefined
              }
            } & {
              header: { Authorization?: string | undefined; 'Accept-Tenant'?: string | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { postcode: string } } & {
              query: {
                cuisine?: string | undefined
                restaurantName?: string | undefined
                brandName?: string | undefined
              }
            } & {
              header: { Authorization?: string | undefined; 'Accept-Tenant'?: string | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/restaurants/driver/eta': {
      $put:
        | {
            input: { json: RestaurantETAs }
            output: IgnoredRestaurantIds
            outputFormat: 'json'
            status: 202
          }
        | { input: { json: RestaurantETAs }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/restaurants/:tenant/:restaurantId/catalogue': {
      $get:
        | {
            input: { param: { tenant: string; restaurantId: string } }
            output: MenuBase
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenant: string; restaurantId: string } }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tenant: string; restaurantId: string } }
            output: _500ErrorSchema
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/restaurants/:tenant/:restaurantId/catalogue/availabilities': {
      $get:
        | {
            input: { param: { tenant: string; restaurantId: string } } & {
              query: { limit: number; after?: string | undefined }
            }
            output: PagedAvailabilitiesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenant: string; restaurantId: string } } & {
              query: { limit: number; after?: string | undefined }
            }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tenant: string; restaurantId: string } } & {
              query: { limit: number; after?: string | undefined }
            }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tenant: string; restaurantId: string } } & {
              query: { limit: number; after?: string | undefined }
            }
            output: _500ErrorSchema
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/restaurants/:tenant/:restaurantId/catalogue/categories': {
      $get:
        | {
            input: { param: { tenant: string; restaurantId: string } } & {
              query: { limit: number; after?: string | undefined }
            }
            output: PagedCategoriesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenant: string; restaurantId: string } } & {
              query: { limit: number; after?: string | undefined }
            }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tenant: string; restaurantId: string } } & {
              query: { limit: number; after?: string | undefined }
            }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tenant: string; restaurantId: string } } & {
              query: { limit: number; after?: string | undefined }
            }
            output: _500ErrorSchema
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/restaurants/:tenant/:restaurantId/catalogue/categories/:categoryId/items': {
      $get:
        | {
            input: { param: { tenant: string; restaurantId: string; categoryId: string } } & {
              query: { limit: number; after?: string | undefined }
            }
            output: PagedCategoryItemsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenant: string; restaurantId: string; categoryId: string } } & {
              query: { limit: number; after?: string | undefined }
            }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tenant: string; restaurantId: string; categoryId: string } } & {
              query: { limit: number; after?: string | undefined }
            }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tenant: string; restaurantId: string; categoryId: string } } & {
              query: { limit: number; after?: string | undefined }
            }
            output: _500ErrorSchema
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/restaurants/:tenant/:restaurantId/catalogue/items': {
      $get:
        | {
            input: { param: { tenant: string; restaurantId: string } } & {
              query: { limit: number; after?: string | undefined }
            }
            output: PagedMenuItemsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenant: string; restaurantId: string } } & {
              query: { limit: number; after?: string | undefined }
            }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tenant: string; restaurantId: string } } & {
              query: { limit: number; after?: string | undefined }
            }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tenant: string; restaurantId: string } } & {
              query: { limit: number; after?: string | undefined }
            }
            output: _500ErrorSchema
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/restaurants/:tenant/:restaurantId/catalogue/items/:itemId/dealgroups': {
      $get:
        | {
            input: { param: { tenant: string; restaurantId: string; itemId: string } } & {
              query: { limit: number; after?: string | undefined }
            }
            output: PagedMenuDealGroupsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenant: string; restaurantId: string; itemId: string } } & {
              query: { limit: number; after?: string | undefined }
            }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tenant: string; restaurantId: string; itemId: string } } & {
              query: { limit: number; after?: string | undefined }
            }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tenant: string; restaurantId: string; itemId: string } } & {
              query: { limit: number; after?: string | undefined }
            }
            output: _500ErrorSchema
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/restaurants/:tenant/:restaurantId/catalogue/items/:itemId/dealgroups/:dealGroupId/dealitemvariations': {
      $get:
        | {
            input: {
              param: { tenant: string; restaurantId: string; itemId: string; dealGroupId: string }
            } & { query: { limit: number; after?: string | undefined } }
            output: PagedDealItemVariationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { tenant: string; restaurantId: string; itemId: string; dealGroupId: string }
            } & { query: { limit: number; after?: string | undefined } }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { tenant: string; restaurantId: string; itemId: string; dealGroupId: string }
            } & { query: { limit: number; after?: string | undefined } }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { tenant: string; restaurantId: string; itemId: string; dealGroupId: string }
            } & { query: { limit: number; after?: string | undefined } }
            output: _500ErrorSchema
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/restaurants/:tenant/:restaurantId/catalogue/items/:itemId/modifiergroups': {
      $get:
        | {
            input: { param: { tenant: string; restaurantId: string; itemId: string } } & {
              query: { limit: number; after?: string | undefined }
            }
            output: PagedMenuModifierGroupsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenant: string; restaurantId: string; itemId: string } } & {
              query: { limit: number; after?: string | undefined }
            }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tenant: string; restaurantId: string; itemId: string } } & {
              query: { limit: number; after?: string | undefined }
            }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tenant: string; restaurantId: string; itemId: string } } & {
              query: { limit: number; after?: string | undefined }
            }
            output: _500ErrorSchema
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/restaurants/:tenant/:restaurantId/catalogue/items/:itemId/variations': {
      $get:
        | {
            input: { param: { tenant: string; restaurantId: string; itemId: string } } & {
              query: { limit: number; after?: string | undefined }
            }
            output: PagedVariationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenant: string; restaurantId: string; itemId: string } } & {
              query: { limit: number; after?: string | undefined }
            }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tenant: string; restaurantId: string; itemId: string } } & {
              query: { limit: number; after?: string | undefined }
            }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tenant: string; restaurantId: string; itemId: string } } & {
              query: { limit: number; after?: string | undefined }
            }
            output: _500ErrorSchema
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/restaurants/:tenant/:restaurantId/customerclaims': {
      $get:
        | {
            input: { param: { tenant: string; restaurantId: string } } & {
              query: {
                fromDate?: (string | null) | undefined
                toDate?: (string | null) | undefined
                limit?: (number | null) | undefined
                offset?: (number | null) | undefined
              }
            } & { header: { Accept?: string | undefined } }
            output: ClaimsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenant: string; restaurantId: string } } & {
              query: {
                fromDate?: (string | null) | undefined
                toDate?: (string | null) | undefined
                limit?: (number | null) | undefined
                offset?: (number | null) | undefined
              }
            } & { header: { Accept?: string | undefined } }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tenant: string; restaurantId: string } } & {
              query: {
                fromDate?: (string | null) | undefined
                toDate?: (string | null) | undefined
                limit?: (number | null) | undefined
                offset?: (number | null) | undefined
              }
            } & { header: { Accept?: string | undefined } }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tenant: string; restaurantId: string } } & {
              query: {
                fromDate?: (string | null) | undefined
                toDate?: (string | null) | undefined
                limit?: (number | null) | undefined
                offset?: (number | null) | undefined
              }
            } & { header: { Accept?: string | undefined } }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tenant: string; restaurantId: string } } & {
              query: {
                fromDate?: (string | null) | undefined
                toDate?: (string | null) | undefined
                limit?: (number | null) | undefined
                offset?: (number | null) | undefined
              }
            } & { header: { Accept?: string | undefined } }
            output: _500ErrorSchema
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/restaurants/:tenant/:restaurantId/customerclaims/:id': {
      $get:
        | {
            input: { param: { tenant: string; restaurantId: string; id: string } } & {
              header: { Accept?: string | undefined }
            }
            output: OrderClaim
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenant: string; restaurantId: string; id: string } } & {
              header: { Accept?: string | undefined }
            }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tenant: string; restaurantId: string; id: string } } & {
              header: { Accept?: string | undefined }
            }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tenant: string; restaurantId: string; id: string } } & {
              header: { Accept?: string | undefined }
            }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tenant: string; restaurantId: string; id: string } } & {
              header: { Accept?: string | undefined }
            }
            output: _500ErrorSchema
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/restaurants/:tenant/:restaurantId/customerclaims/:id/restaurantresponse': {
      $post:
        | {
            input: { param: { tenant: string; restaurantId: string; id: string } } & {
              header: { 'Content-Type': string }
            } & { json: OrderClaimRestaurantResponse }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { tenant: string; restaurantId: string; id: string } } & {
              header: { 'Content-Type': string }
            } & { json: OrderClaimRestaurantResponse }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tenant: string; restaurantId: string; id: string } } & {
              header: { 'Content-Type': string }
            } & { json: OrderClaimRestaurantResponse }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tenant: string; restaurantId: string; id: string } } & {
              header: { 'Content-Type': string }
            } & { json: OrderClaimRestaurantResponse }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tenant: string; restaurantId: string; id: string } } & {
              header: { 'Content-Type': string }
            } & { json: OrderClaimRestaurantResponse }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tenant: string; restaurantId: string; id: string } } & {
              header: { 'Content-Type': string }
            } & { json: OrderClaimRestaurantResponse }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { tenant: string; restaurantId: string; id: string } } & {
              header: { 'Content-Type': string }
            } & { json: OrderClaimRestaurantResponse }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { tenant: string; restaurantId: string; id: string } } & {
              header: { 'Content-Type': string }
            } & { json: OrderClaimRestaurantResponse }
            output: _500ErrorSchema
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/restaurants/:tenant/:restaurantId/customerclaims/:id/restaurantresponse/justification': {
      $put:
        | {
            input: { param: { tenant: string; restaurantId: string; id: string } } & {
              header: { 'Content-Type': string }
            } & { json: Justification }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { tenant: string; restaurantId: string; id: string } } & {
              header: { 'Content-Type': string }
            } & { json: Justification }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tenant: string; restaurantId: string; id: string } } & {
              header: { 'Content-Type': string }
            } & { json: Justification }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tenant: string; restaurantId: string; id: string } } & {
              header: { 'Content-Type': string }
            } & { json: Justification }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tenant: string; restaurantId: string; id: string } } & {
              header: { 'Content-Type': string }
            } & { json: Justification }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tenant: string; restaurantId: string; id: string } } & {
              header: { 'Content-Type': string }
            } & { json: Justification }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { tenant: string; restaurantId: string; id: string } } & {
              header: { 'Content-Type': string }
            } & { json: Justification }
            output: _500ErrorSchema
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/restaurants/:tenant/:restaurantId/fees': {
      $get:
        | {
            input: { param: { tenant: string; restaurantId: string } } & {
              header: { 'User-Agent'?: string | undefined }
            }
            output: RestaurantFees
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenant: string; restaurantId: string } } & {
              header: { 'User-Agent'?: string | undefined }
            }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tenant: string; restaurantId: string } } & {
              header: { 'User-Agent'?: string | undefined }
            }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tenant: string; restaurantId: string } } & {
              header: { 'User-Agent'?: string | undefined }
            }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tenant: string; restaurantId: string } } & {
              header: { 'User-Agent'?: string | undefined }
            }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tenant: string; restaurantId: string } } & {
              header: { 'User-Agent'?: string | undefined }
            }
            output: _500ErrorSchema
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { tenant: string; restaurantId: string } } & {
              header: { 'User-Agent'?: string | undefined }
            } & { json: RestaurantFees }
            output: RestaurantFees
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenant: string; restaurantId: string } } & {
              header: { 'User-Agent'?: string | undefined }
            } & { json: RestaurantFees }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tenant: string; restaurantId: string } } & {
              header: { 'User-Agent'?: string | undefined }
            } & { json: RestaurantFees }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tenant: string; restaurantId: string } } & {
              header: { 'User-Agent'?: string | undefined }
            } & { json: RestaurantFees }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tenant: string; restaurantId: string } } & {
              header: { 'User-Agent'?: string | undefined }
            } & { json: RestaurantFees }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tenant: string; restaurantId: string } } & {
              header: { 'User-Agent'?: string | undefined }
            } & { json: RestaurantFees }
            output: _500ErrorSchema
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/restaurants/:tenant/:restaurantId/menu': {
      $get:
        | {
            input: { param: { tenant: string; restaurantId: string } } & {
              header: { Authorization: string }
            }
            output: Menu
            outputFormat: 'json'
            status: 301
          }
        | {
            input: { param: { tenant: string; restaurantId: string } } & {
              header: { Authorization: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { tenant: string; restaurantId: string } } & {
              header: { Authorization: string }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { tenant: string; restaurantId: string } } & {
              header: { Authorization: string }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { tenant: string; restaurantId: string } } & {
              header: { Authorization: string }
            }
            output: ConsumerErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { tenant: string; restaurantId: string } } & {
              header: { Authorization: string; 'Content-Type'?: string | undefined }
            } & { json: Menu }
            output: MenuIngestionResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { tenant: string; restaurantId: string } } & {
              header: { Authorization: string; 'Content-Type'?: string | undefined }
            } & { json: Menu }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tenant: string; restaurantId: string } } & {
              header: { Authorization: string; 'Content-Type'?: string | undefined }
            } & { json: Menu }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { tenant: string; restaurantId: string } } & {
              header: { Authorization: string; 'Content-Type'?: string | undefined }
            } & { json: Menu }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { tenant: string; restaurantId: string } } & {
              header: { Authorization: string; 'Content-Type'?: string | undefined }
            } & { json: Menu }
            output: ConsumerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/restaurants/:tenant/:restaurantId/ordertimes': {
      $get:
        | {
            input: { param: { tenant: string; restaurantId: string } } & {
              header: { Authorization: string }
            }
            output: OrderTime[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenant: string; restaurantId: string } } & {
              header: { Authorization: string }
            }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tenant: string; restaurantId: string } } & {
              header: { Authorization: string }
            }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tenant: string; restaurantId: string } } & {
              header: { Authorization: string }
            }
            output: _500ErrorSchema
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/restaurants/:tenant/:restaurantId/ordertimes/:dayOfWeek/:serviceType': {
      $put:
        | {
            input: {
              param: {
                tenant: string
                restaurantId: string
                dayOfWeek:
                  | 'Sunday'
                  | 'Monday'
                  | 'Tuesday'
                  | 'Wednesday'
                  | 'Thursday'
                  | 'Friday'
                  | 'Saturday'
                serviceType: 'Delivery' | 'Collection'
              }
            } & { header: { Authorization: string } } & { json: UpdateOrderTimeRequest2 }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: {
                tenant: string
                restaurantId: string
                dayOfWeek:
                  | 'Sunday'
                  | 'Monday'
                  | 'Tuesday'
                  | 'Wednesday'
                  | 'Thursday'
                  | 'Friday'
                  | 'Saturday'
                serviceType: 'Delivery' | 'Collection'
              }
            } & { header: { Authorization: string } } & { json: UpdateOrderTimeRequest2 }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                tenant: string
                restaurantId: string
                dayOfWeek:
                  | 'Sunday'
                  | 'Monday'
                  | 'Tuesday'
                  | 'Wednesday'
                  | 'Thursday'
                  | 'Friday'
                  | 'Saturday'
                serviceType: 'Delivery' | 'Collection'
              }
            } & { header: { Authorization: string } } & { json: UpdateOrderTimeRequest2 }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                tenant: string
                restaurantId: string
                dayOfWeek:
                  | 'Sunday'
                  | 'Monday'
                  | 'Tuesday'
                  | 'Wednesday'
                  | 'Thursday'
                  | 'Friday'
                  | 'Saturday'
                serviceType: 'Delivery' | 'Collection'
              }
            } & { header: { Authorization: string } } & { json: UpdateOrderTimeRequest2 }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                tenant: string
                restaurantId: string
                dayOfWeek:
                  | 'Sunday'
                  | 'Monday'
                  | 'Tuesday'
                  | 'Wednesday'
                  | 'Thursday'
                  | 'Friday'
                  | 'Saturday'
                serviceType: 'Delivery' | 'Collection'
              }
            } & { header: { Authorization: string } } & { json: UpdateOrderTimeRequest2 }
            output: _500ErrorSchema
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/restaurants/:tenant/:restaurantId/servicetimes': {
      $get:
        | {
            input: { param: { tenant: string; restaurantId: string } }
            output: ServiceTimes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenant: string; restaurantId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { tenant: string; restaurantId: string } }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tenant: string; restaurantId: string } }
            output: _500ErrorSchema
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { tenant: string; restaurantId: string } } & { json: ServiceTimes }
            output: ServiceTimes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenant: string; restaurantId: string } } & { json: ServiceTimes }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tenant: string; restaurantId: string } } & { json: ServiceTimes }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { tenant: string; restaurantId: string } } & { json: ServiceTimes }
            output: _500ErrorSchema
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/search/autocomplete/:tenant': {
      $get:
        | {
            input: { param: { tenant: string } } & {
              query: { searchTerm: string; latlong: number[]; limit?: number | undefined }
            }
            output: AutoCompleteSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenant: string } } & {
              query: { searchTerm: string; latlong: number[]; limit?: number | undefined }
            }
            output: {
              fault?:
                | {
                    errors?:
                      | {
                          description?: string | undefined
                          errorCode?: string | undefined
                          fields?: string[] | undefined
                        }[]
                      | undefined
                    faultId: string
                    traceId?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tenant: string } } & {
              query: { searchTerm: string; latlong: number[]; limit?: number | undefined }
            }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tenant: string } } & {
              query: { searchTerm: string; latlong: number[]; limit?: number | undefined }
            }
            output: _500ErrorSchema
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { tenant: string } } & {
              query: { searchTerm: string; latlong: number[]; limit?: number | undefined }
            }
            output: { fault?: { faultId: string; traceId?: string | undefined } | undefined }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/search/restaurants/:tenant': {
      $get:
        | {
            input: { param: { tenant: string } } & {
              query: { searchTerm: string; latlong: number[]; limit?: number | undefined }
            }
            output: RestaurantSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenant: string } } & {
              query: { searchTerm: string; latlong: number[]; limit?: number | undefined }
            }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tenant: string } } & {
              query: { searchTerm: string; latlong: number[]; limit?: number | undefined }
            }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tenant: string } } & {
              query: { searchTerm: string; latlong: number[]; limit?: number | undefined }
            }
            output: _4XXErrorSchema
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { tenant: string } } & {
              query: { searchTerm: string; latlong: number[]; limit?: number | undefined }
            }
            output: _500ErrorSchema
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { tenant: string } } & {
              query: { searchTerm: string; latlong: number[]; limit?: number | undefined }
            }
            output: { fault?: { faultId: string; traceId?: string | undefined } | undefined }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/send-to-pos-failed': {
      $post: { input: { json: SendToPosFailed }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/v1/:tenant/restaurants/event/offline': {
      $post:
        | {
            input: { param: { tenant: string } } & {
              header: { 'X-JE-Requester': string; 'X-JE-User-Role': UserRole }
            } & { json: OfflineRestaurantsRequestModel }
            output: { restaurantEventId?: string | undefined; restaurantIds?: string | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { tenant: string } } & {
              header: { 'X-JE-Requester': string; 'X-JE-User-Role': UserRole }
            } & { json: OfflineRestaurantsRequestModel }
            output: ValidationError[]
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tenant: string } } & {
              header: { 'X-JE-Requester': string; 'X-JE-User-Role': UserRole }
            } & { json: OfflineRestaurantsRequestModel }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/:tenant/restaurants/:id/event/offline': {
      $delete:
        | {
            input: { param: { tenant: string; id: string } } & {
              header: { 'X-JE-Requester': string; 'X-JE-User-Role': UserRole }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { tenant: string; id: string } } & {
              header: { 'X-JE-Requester': string; 'X-JE-User-Role': UserRole }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { tenant: string; id: string } } & {
              header: { 'X-JE-Requester': string; 'X-JE-User-Role': UserRole }
            }
            output: ValidationError[]
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tenant: string; id: string } } & {
              header: { 'X-JE-Requester': string; 'X-JE-User-Role': UserRole }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/:tenant/orders/:orderId/queries/attempteddelivery': {
      $post:
        | {
            input: { param: { tenant: string; orderId: string } } & {
              header: { Authorization: string }
            } & { json: CreateAttemptedDelivery }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { tenant: string; orderId: string } } & {
              header: { Authorization: string }
            } & { json: CreateAttemptedDelivery }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { tenant: string; orderId: string } } & {
              header: { Authorization: string }
            } & { json: CreateAttemptedDelivery }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { tenant: string; orderId: string } } & {
              header: { Authorization: string }
            } & { json: CreateAttemptedDelivery }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { tenant: string; orderId: string } } & {
              header: { Authorization: string }
            } & { json: CreateAttemptedDelivery }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/:tenant/orders/:orderId/queries/attempteddelivery/resolution/redeliverorder': {
      $post:
        | {
            input: { param: { tenant: string; orderId: string } } & {
              header: { Authorization: string }
            } & { json: ResolveAttemptedDeliveryRedeliver }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { tenant: string; orderId: string } } & {
              header: { Authorization: string }
            } & { json: ResolveAttemptedDeliveryRedeliver }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { tenant: string; orderId: string } } & {
              header: { Authorization: string }
            } & { json: ResolveAttemptedDeliveryRedeliver }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { tenant: string; orderId: string } } & {
              header: { Authorization: string }
            } & { json: ResolveAttemptedDeliveryRedeliver }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { tenant: string; orderId: string } } & {
              header: { Authorization: string }
            } & { json: ResolveAttemptedDeliveryRedeliver }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes
