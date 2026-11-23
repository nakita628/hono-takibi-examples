type BookingEngineId = 'FreesaleBE' | 'UnconditionalBE' | 'DeferredCRMBE' | 'FreesaleOnRequestBE'
type CurrencyCode = string
type MerchantNetPriceFrom = number
type MerchantNetPriceFromFormatted = string
type OnRequestPeriod = number | null
type OnSale = boolean
type Price = number
type PriceFormatted = string
type Rating = number
type ReviewCount = number
type Rrp = number
type RrpFormatted = string
type SavingAmount = string
type SavingAmountFormated = string
type SpecialOfferAvailable = boolean
type TranslationLevel = 0 | 80 | 100
type WebURL = string | null
type AgeBandId = number
type BandId = number
type BookingStatusItinerary = {
  amended?: boolean | undefined
  cancelled?: boolean | undefined
  confirmed?: boolean | undefined
  failed?: boolean | undefined
  level?: 'ITEM' | 'ITINERARY' | undefined
  pending?: boolean | undefined
  status?: number | undefined
  text?: string | undefined
  type?:
    | 'WAITING'
    | 'CONFIRMED'
    | 'PENDING'
    | 'FAILED'
    | 'CANCELLED'
    | 'AMENDED'
    | 'PENDING_AMEND'
    | undefined
}
type BookingEngineIdResponse = 'UF' | 'OR' | 'FO'
type BookingStatusItem = {
  amended?: boolean | undefined
  cancelled?: boolean | undefined
  confirmed?: boolean | undefined
  failed?: boolean | undefined
  level?: 'ITEM' | 'ITINERARY' | undefined
  pending?: boolean | undefined
  status?: number | undefined
  text?: string | undefined
  type?:
    | 'WAITING'
    | 'CONFIRMED'
    | 'UNAVAILABLE'
    | 'PENDING'
    | 'FAILED'
    | 'CANCELLED'
    | 'EXPIRED'
    | 'AMENDED'
    | 'PENDING_AMEND'
    | 'REJECTED'
    | 'ON_HOLD'
    | undefined
}
type CancellationReason = {
  cancellationReasonCode?: string | undefined
  cancellationReasonText?: string | undefined
}
type CancellationReasonsResponse = { reasons?: CancellationReason[] | undefined }
type _401UNAUTHORIZED = {
  code?: 'UNAUTHORIZED' | undefined
  message?: 'Invalid API key' | undefined
  timestamp?: string | undefined
  trackingId?: string | undefined
}
type _406NOTACCEPTABLE = {
  code?: 'INVALID_HEADER_VALUE' | undefined
  message?: string | undefined
  timestamp?: string | undefined
  trackingId?: string | undefined
}
type _500INTERNALSERVERERROR = {
  code?: 'INTERNAL_SERVER_ERROR' | undefined
  message?: 'Internal server error' | undefined
  timestamp?: string | undefined
  trackingId?: string | undefined
}
type _503SERVICEUNAVAILABLE = {
  code?: 'SERVICE_UNAVAILABLE' | undefined
  message?: 'Internal server error' | undefined
  timestamp?: string | undefined
  trackingId?: string | undefined
}
type CancellationRequest = { reasonCode?: string | undefined }
type CancelBookingResponse = {
  bookingId?: string | undefined
  reason?: 'ALREADY_CANCELLED' | 'NOT_CANCELLABLE' | undefined
  status?: 'ACCEPTED' | 'DECLINED' | undefined
}
type RefundDetails = {
  currencyCode?: string | undefined
  itemPrice?: number | undefined
  refundAmount?: number | undefined
  refundPercentage?: number | undefined
}
type CancelBookingQuoteResponse = {
  bookingId?: string | undefined
  refundDetails?: RefundDetails | undefined
  status?: 'CANCELLABLE' | 'CANCELLED' | 'NOT_CANCELLABLE' | undefined
}
type RatingCounts = {
  '1'?: number | undefined
  '2'?: number | undefined
  '3'?: number | undefined
  '4'?: number | undefined
  '5'?: number | undefined
}
type ReviewObject = {
  ownerAvatarURL?: (string | null) | undefined
  ownerCountry?: (string | null) | undefined
  ownerId?: number | undefined
  ownerName?: string | undefined
  productCode?: string | undefined
  productTitle?: string | undefined
  productUrlName?: string | undefined
  publishedDate?: string | undefined
  rating?: number | undefined
  review?: string | undefined
  reviewId?: number | undefined
  sortOrder?: number | undefined
  sslSupported?: boolean | undefined
  submissionDate?: string | undefined
  viatorFeedback?: string | undefined
  viatorNotes?: string | undefined
}
type Reviews = ReviewObject[]
type SpecialOffer = string
type PhotoObject = {
  caption?: string | undefined
  editorsPick?: boolean | undefined
  ownerAvatarURL?: (string | null) | undefined
  ownerCountry?: (string | null) | undefined
  ownerId?: number | undefined
  ownerName?: string | undefined
  photoHiResURL?: string | undefined
  photoId?: number | undefined
  photoMediumResURL?: string | undefined
  photoURL?: string | undefined
  productCode?: string | undefined
  productTitle?: string | undefined
  productUrlName?: string | undefined
  sortOrder?: number | undefined
  sslSupported?: boolean | undefined
  thumbnailURL?: string | undefined
  timeUploaded?: string | undefined
  title?: string | undefined
}
type SortOrder =
  | 'TOP_SELLERS'
  | 'REVIEW_AVG_RATING_A'
  | 'REVIEW_AVG_RATING_D'
  | 'PRICE_FROM_A'
  | 'PRICE_FROM_D'
type TopX = string
type SearchFreetextResponse = {
  searchType?: 'PRODUCT' | 'DESTINATION' | 'ATTRACTION' | 'RECOMMENDATION' | undefined
  sortOrder?: number | undefined
}
type DestinationType = 'CITY' | 'COUNTRY' | 'REGION'
type IataCode = string | null
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/available/products': {
      $post: {
        input: { header: { 'Accept-Language': string } } & {
          json: {
            currencyCode?: string | undefined
            endDate?: string | undefined
            numAdults?: number | undefined
            productCodes?: string[] | undefined
            startDate?: string | undefined
          }
        }
        output: {
          dateStamp?: (string | null) | undefined
          errorCodes?: (string[] | null) | undefined
          errorMessage?: ({ [x: string]: unknown }[] | null) | undefined
          errorMessageText?: (string | null) | undefined
          errorName?: (string | null) | undefined
          errorReference?: (string | null) | undefined
          errorType?: (string | null) | undefined
          extraInfo?: ({ [x: string]: unknown } | null) | undefined
          extraObject?: ({ [x: string]: unknown } | null) | undefined
          success?: (boolean | null) | undefined
          totalCount?: (number | null) | undefined
          vmid?: (string | null) | undefined
          data?:
            | {
                admission?: string | undefined
                available?: boolean | undefined
                bookingEngineId?: BookingEngineId | undefined
                catIds?: number[] | undefined
                code?: string | undefined
                currencyCode?: CurrencyCode | undefined
                duration?: string | undefined
                essential?: string | undefined
                merchantCancellable?: boolean | undefined
                merchantNetPriceFrom?: MerchantNetPriceFrom | undefined
                merchantNetPriceFromFormatted?: MerchantNetPriceFromFormatted | undefined
                onRequestPeriod?: OnRequestPeriod | undefined
                onSale?: OnSale | undefined
                panoramaCount?: number | undefined
                pas?:
                  | {
                      incompleteQuote?: boolean | undefined
                      productCode?: string | undefined
                      removedChildAges?: string[] | undefined
                      tourGrades?:
                        | {
                            [x: string]: {
                              availDates?:
                                | {
                                    dateList?: string | undefined
                                    priceFrom?: string | undefined
                                    priceQuote?:
                                      | {
                                          generalRetailPrice?: string | undefined
                                          merchantNetPrice?: string | undefined
                                          retailPrice?: string | undefined
                                        }
                                      | undefined
                                  }[]
                                | undefined
                              bookingEngine?: string | undefined
                              description?: string | undefined
                              languageServices?:
                                | { [x: string]: { [x: string]: unknown }[] }
                                | undefined
                              sapi?: boolean | undefined
                              title?: string | undefined
                              tourGradeCode?: string | undefined
                            }
                          }
                        | undefined
                      travellerMix?: string | undefined
                    }
                  | undefined
                photoCount?: number | undefined
                price?: Price | undefined
                priceFormatted?: PriceFormatted | undefined
                primaryDestinationId?: number | undefined
                primaryDestinationName?: string | undefined
                primaryDestinationUrlName?: string | undefined
                primaryGroupId?: string | undefined
                productUrlName?: string | undefined
                rating?: Rating | undefined
                reviewCount?: ReviewCount | undefined
                rrp?: Rrp | undefined
                rrpFormatted?: RrpFormatted | undefined
                savingAmount?: SavingAmount | undefined
                savingAmountFormated?: SavingAmountFormated | undefined
                shortDescription?: string | undefined
                shortTitle?: string | undefined
                sortOrder?: number | undefined
                specialOfferAvailable?: SpecialOfferAvailable | undefined
                specialReservation?: boolean | undefined
                specialReservationDetails?: string | undefined
                sslSupported?: boolean | undefined
                subCatIds?: number[] | undefined
                supplierCode?: string | undefined
                supplierName?: string | undefined
                thumbnailHiResURL?: string | undefined
                thumbnailURL?: string | undefined
                title?: string | undefined
                translationLevel?: TranslationLevel | undefined
                uniqueShortDescription?: string | undefined
                videoCount?: number | undefined
                webURL?: WebURL | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/booking/availability': {
      $post: {
        input: { header: { 'Accept-Language': string } } & {
          json: {
            ageBands?: { bandId?: AgeBandId | undefined; count?: number | undefined }[] | undefined
            currencyCode?: string | undefined
            month?: string | undefined
            productCode?: string | undefined
            year?: string | undefined
          }
        }
        output: {
          dateStamp?: (string | null) | undefined
          errorCodes?: (string[] | null) | undefined
          errorMessage?: ({ [x: string]: unknown }[] | null) | undefined
          errorMessageText?: (string | null) | undefined
          errorName?: (string | null) | undefined
          errorReference?: (string | null) | undefined
          errorType?: (string | null) | undefined
          extraInfo?: ({ [x: string]: unknown } | null) | undefined
          extraObject?: ({ [x: string]: unknown } | null) | undefined
          success?: (boolean | null) | undefined
          totalCount?: (number | null) | undefined
          vmid?: (string | null) | undefined
          data?:
            | {
                availability?:
                  | {
                      available?: boolean | undefined
                      bookingDate?: string | undefined
                      currencyCode?: string | undefined
                      gradeCode?: string | undefined
                      merchantNetPrice?: number | undefined
                      merchantNetPriceFormatted?: string | undefined
                      retailPrice?: number | undefined
                      retailPriceFormatted?: string | undefined
                      sortOrder?: number | undefined
                      unavailableReason?: string | undefined
                    }[]
                  | undefined
                firstAvailableDate?: string | undefined
                lastAvailableDate?: string | undefined
                productCode?: string | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/booking/availability/dates': {
      $get: {
        input: { query: { productCode?: string | undefined } } & {
          header: { 'Accept-Language': string }
        }
        output: {
          dateStamp?: (string | null) | undefined
          errorCodes?: (string[] | null) | undefined
          errorMessage?: ({ [x: string]: unknown }[] | null) | undefined
          errorMessageText?: (string | null) | undefined
          errorName?: (string | null) | undefined
          errorReference?: (string | null) | undefined
          errorType?: (string | null) | undefined
          extraInfo?: ({ [x: string]: unknown } | null) | undefined
          extraObject?: ({ [x: string]: unknown } | null) | undefined
          success?: (boolean | null) | undefined
          totalCount?: (number | null) | undefined
          vmid?: (string | null) | undefined
          data?: { [x: string]: string[] } | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/booking/availability/tourgrades': {
      $post: {
        input: { header: { 'Accept-Language': string } } & {
          json: {
            ageBands?: { bandId?: BandId | undefined; count?: number | undefined }[] | undefined
            bookingDate?: string | undefined
            currencyCode?: string | undefined
            productCode?: string | undefined
          }
        }
        output: {
          dateStamp?: (string | null) | undefined
          errorCodes?: (string[] | null) | undefined
          errorMessage?: ({ [x: string]: unknown }[] | null) | undefined
          errorMessageText?: (string | null) | undefined
          errorName?: (string | null) | undefined
          errorReference?: (string | null) | undefined
          errorType?: (string | null) | undefined
          extraInfo?: ({ [x: string]: unknown } | null) | undefined
          extraObject?: ({ [x: string]: unknown } | null) | undefined
          success?: (boolean | null) | undefined
          totalCount?: (number | null) | undefined
          vmid?: (string | null) | undefined
          data?:
            | {
                ageBands?: { [x: string]: unknown }[] | undefined
                ageBandsRequired?:
                  | {
                      bandId?: BandId | undefined
                      maximumCountRequired?: number | undefined
                      minimumCountRequired?: number | undefined
                    }[][]
                  | undefined
                available?: boolean | undefined
                bookingDate?: string | undefined
                currencyCode?: string | undefined
                defaultLanguageCode?: string | undefined
                gradeCode?: string | undefined
                gradeDepartureTime?: string | undefined
                gradeDescription?: string | undefined
                gradeTitle?: string | undefined
                langServices?: { [x: string]: unknown } | undefined
                merchantNetPrice?: number | undefined
                merchantNetPriceFormatted?: string | undefined
                retailPrice?: number | undefined
                retailPriceFormatted?: string | undefined
                sortOrder?: number | undefined
                unavailableReason?: string | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/booking/availability/tourgrades/pricingmatrix': {
      $post: {
        input: { header: { 'Accept-Language': string } } & {
          json: {
            currencyCode?: string | undefined
            month?: string | undefined
            productCode?: string | undefined
            year?: string | undefined
          }
        }
        output: {
          dateStamp?: (string | null) | undefined
          errorCodes?: (string[] | null) | undefined
          errorMessage?: ({ [x: string]: unknown }[] | null) | undefined
          errorMessageText?: (string | null) | undefined
          errorName?: (string | null) | undefined
          errorReference?: (string | null) | undefined
          errorType?: (string | null) | undefined
          extraInfo?: ({ [x: string]: unknown } | null) | undefined
          extraObject?: ({ [x: string]: unknown } | null) | undefined
          success?: (boolean | null) | undefined
          totalCount?: (number | null) | undefined
          vmid?: (string | null) | undefined
          data?:
            | {
                bookingMonth?: string | undefined
                dates?:
                  | {
                      bookingDate?: string | undefined
                      callForLastMinAvailability?: boolean | undefined
                      sortOrder?: number | undefined
                      tourGrades?:
                        | {
                            gradeCode?: string | undefined
                            gradeTitle?: string | undefined
                            pricingMatrix?:
                              | {
                                  ageBandPrices?:
                                    | {
                                        bandId?: BandId | undefined
                                        maximumCountRequired?: number | undefined
                                        minimumCountRequired?: number | undefined
                                        prices?:
                                          | {
                                              currencyCode?: string | undefined
                                              merchantNetPrice?: number | undefined
                                              merchantNetPriceFormatted?: string | undefined
                                              minNoOfTravellersRequiredForPrice?: number | undefined
                                              price?: number | undefined
                                              priceFormatted?: string | undefined
                                              sortOrder?: number | undefined
                                            }[]
                                          | undefined
                                        sortOrder?: number | undefined
                                      }[]
                                    | undefined
                                  bookingDate?: string | undefined
                                  pricingUnit?: string | undefined
                                  sortOrder?: number | undefined
                                }[]
                              | undefined
                            sortOrder?: number | undefined
                          }[]
                        | undefined
                    }[]
                  | undefined
                pricingUnit?: string | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/booking/book': {
      $post: {
        input: { header: { 'Accept-Language': string } } & {
          json: {
            booker?:
              | {
                  cellPhone?: string | undefined
                  cellPhoneCountryCode?: string | undefined
                  email?: string | undefined
                  firstname: string
                  homePhone?: string | undefined
                  surname: string
                  title?: string | undefined
                }
              | undefined
            currencyCode?: string | undefined
            demo?: boolean | undefined
            items?:
              | {
                  bookingQuestionAnswers?:
                    | { answer?: string | undefined; questionId?: number | undefined }[]
                    | undefined
                  hotelId?: string | undefined
                  languageOptionCode?: string | undefined
                  partnerItemDetail?: { distributorItemRef?: string | undefined } | undefined
                  pickupPoint?: string | undefined
                  productCode?: string | undefined
                  specialRequirements?: string | undefined
                  tourGradeCode?: string | undefined
                  travelDate?: string | undefined
                  travellers?:
                    | {
                        bandId?: BandId | undefined
                        firstname?: string | undefined
                        leadTraveller?: boolean | undefined
                        surname?: string | undefined
                        title?: string | undefined
                      }[]
                    | undefined
                }[]
              | undefined
            partnerDetail?: { distributorRef?: string | undefined } | undefined
          }
        }
        output: {
          dateStamp?: (string | null) | undefined
          errorCodes?: (string[] | null) | undefined
          errorMessage?: ({ [x: string]: unknown }[] | null) | undefined
          errorMessageText?: (string | null) | undefined
          errorName?: (string | null) | undefined
          errorReference?: (string | null) | undefined
          errorType?: (string | null) | undefined
          extraInfo?: ({ [x: string]: unknown } | null) | undefined
          extraObject?: ({ [x: string]: unknown } | null) | undefined
          success?: (boolean | null) | undefined
          totalCount?: (number | null) | undefined
          vmid?: (string | null) | undefined
          data?:
            | {
                bookerEmail?: string | undefined
                bookingDate?: string | undefined
                bookingStatus?: BookingStatusItinerary | undefined
                currencyCode?: string | undefined
                distributorRef?: string | undefined
                exchangeRate?: number | undefined
                hasVoucher?: boolean | undefined
                itemSummaries?:
                  | {
                      applePassSupported?: boolean | undefined
                      barcodeOption?: string | undefined
                      barcodeType?: string | undefined
                      bookingEngineId?: BookingEngineIdResponse | undefined
                      bookingStatus?: BookingStatusItem | undefined
                      currencyCode?: string | undefined
                      departsFrom?: string | undefined
                      departurePoint?: string | undefined
                      departurePointAddress?: string | undefined
                      departurePointDirections?: string | undefined
                      destId?: number | undefined
                      distributorItemRef?: string | undefined
                      hoursConfirmed?: string | undefined
                      itemId?: number | undefined
                      itineraryId?: number | undefined
                      languageServicesCode?: string | undefined
                      lastRetailPrice?: number | undefined
                      lastRetailPriceFormatted?: string | undefined
                      leadTravellerFirstname?: string | undefined
                      leadTravellerSurname?: string | undefined
                      leadTravellerTitle?: string | undefined
                      merchantCancellable?: boolean | undefined
                      merchantNetPrice?: number | undefined
                      merchantNetPriceFormatted?: string | undefined
                      merchantTermsAndConditions?:
                        | {
                            amountRefundable?: string | undefined
                            cancellationFromTourDate?:
                              | {
                                  dayRangeMax?: number | undefined
                                  dayRangeMin?: number | undefined
                                  percentageRefundable?: number | undefined
                                  policyEndTimestamp?: number | undefined
                                  policyStartTimestamp?: number | undefined
                                }[]
                              | undefined
                            termsAndConditions?: string | undefined
                          }
                        | undefined
                      obfsId?: number | undefined
                      passbooks?: string | undefined
                      pickupHotelId?: string | undefined
                      pickupHotelName?: string | undefined
                      price?: number | undefined
                      priceFormatted?: string | undefined
                      priceUSD?: number | undefined
                      productCode?: string | undefined
                      productPulledDown?: boolean | undefined
                      productTitle?: string | undefined
                      productWidgetList?: string | undefined
                      rulesApplied?: string | undefined
                      savingAmount?: SavingAmount | undefined
                      savingAmountFormated?: SavingAmountFormated | undefined
                      sortOrder?: number | undefined
                      startingTime?: string | undefined
                      supplierName?: string | undefined
                      supplierPhoneNumber?: string | undefined
                      termsAndConditions?: { [x: string]: unknown } | undefined
                      tourGradeCode?: string | undefined
                      tourGradeDescription?: string | undefined
                      travelDate?: string | undefined
                      travellerAgeBands?:
                        | {
                            ageBandId?: AgeBandId | undefined
                            count?: number | undefined
                            description?: string | undefined
                            pluralDescription?: string | undefined
                            sortOrder?: number | undefined
                          }[]
                        | undefined
                      voucherKey?: string | undefined
                      voucherOption?: string | undefined
                      voucherRequirements?: string | undefined
                      voucherURL?: string | undefined
                      vouchers?: string | undefined
                    }[]
                  | undefined
                itineraryId?: number | undefined
                omniPreRuleList?: string | undefined
                paypalRedirectURL?: string | undefined
                rulesApplied?: string | undefined
                securityToken?: string | undefined
                sortOrder?: number | undefined
                totalPrice?: number | undefined
                totalPriceFormatted?: string | undefined
                totalPriceUSD?: number | undefined
                userId?: string | undefined
                voucherKey?: string | undefined
                voucherURL?: string | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/booking/calculateprice': {
      $post: {
        input: { header: { 'Accept-Language': string } } & {
          json: {
            currencyCode?: string | undefined
            items?:
              | {
                  productCode?: string | undefined
                  tourGradeCode?: string | undefined
                  travelDate?: string | undefined
                  travellers?: { bandId?: BandId | undefined }[] | undefined
                }[]
              | undefined
          }
        }
        output: {
          dateStamp?: (string | null) | undefined
          errorCodes?: (string[] | null) | undefined
          errorMessage?: ({ [x: string]: unknown }[] | null) | undefined
          errorMessageText?: (string | null) | undefined
          errorName?: (string | null) | undefined
          errorReference?: (string | null) | undefined
          errorType?: (string | null) | undefined
          extraInfo?: ({ [x: string]: unknown } | null) | undefined
          extraObject?: ({ [x: string]: unknown } | null) | undefined
          success?: (boolean | null) | undefined
          totalCount?: (number | null) | undefined
          vmid?: (string | null) | undefined
          data?:
            | {
                currencyCode?: string | undefined
                hasPromoCode?: boolean | undefined
                itinerary?:
                  | {
                      bookerEmail?: string | undefined
                      bookingDate?: string | undefined
                      bookingStatus?: BookingStatusItinerary | undefined
                      currencyCode?: string | undefined
                      distributorRef?: string | undefined
                      exchangeRate?: number | undefined
                      hasVoucher?: boolean | undefined
                      itemSummaries?:
                        | {
                            applePassSupported?: boolean | undefined
                            barcodeOption?: string | undefined
                            barcodeType?: string | undefined
                            bookingEngineId?: BookingEngineIdResponse | undefined
                            bookingStatus?: BookingStatusItem | undefined
                            currencyCode?: string | undefined
                            departsFrom?: string | undefined
                            departurePoint?: string | undefined
                            departurePointAddress?: string | undefined
                            departurePointDirections?: string | undefined
                            destId?: number | undefined
                            distributorItemRef?: string | undefined
                            hoursConfirmed?: number | undefined
                            itemId?: number | undefined
                            itineraryId?: number | undefined
                            languageServicesLanguageCode?: string | undefined
                            lastRetailPrice?: number | undefined
                            lastRetailPriceFormatted?: string | undefined
                            leadTravellerFirstname?: string | undefined
                            leadTravellerSurname?: string | undefined
                            leadTravellerTitle?: string | undefined
                            merchantCancellable?: boolean | undefined
                            merchantNetPrice?: number | undefined
                            merchantNetPriceFormatted?: string | undefined
                            obfsId?: number | undefined
                            passbooks?: string | undefined
                            pickupHotelId?: number | undefined
                            pickupHotelName?: string | undefined
                            price?: number | undefined
                            priceFormatted?: string | undefined
                            priceUSD?: number | undefined
                            productCode?: string | undefined
                            productPulledDown?: boolean | undefined
                            productTitle?: string | undefined
                            productWidgetList?: string | undefined
                            rulesApplied?: string[] | undefined
                            savingAmount?: SavingAmount | undefined
                            savingAmountFormated?: SavingAmountFormated | undefined
                            sortOrder?: number | undefined
                            startingTime?: string | undefined
                            supplierName?: string | undefined
                            supplierPhoneNumber?: string | undefined
                            termsAndConditions?: string | undefined
                            tourGradeCode?: string | undefined
                            tourGradeDescription?: string | undefined
                            travelDate?: string | undefined
                            travellerAgeBands?:
                              | {
                                  ageBandId?: AgeBandId | undefined
                                  count?: number | undefined
                                  description?: string | undefined
                                  pluralDescription?: string | undefined
                                  sortOrder?: number | undefined
                                }[]
                              | undefined
                            voucherKey?: string | undefined
                            voucherOption?: string | undefined
                            voucherRequirements?: string | undefined
                            voucherURL?: string | undefined
                            vouchers?: string | undefined
                          }[]
                        | undefined
                      itineraryId?: number | undefined
                      omniPreRuleList?: number | undefined
                      paypalRedirectURL?: string | undefined
                      rulesApplied?: string[] | undefined
                      securityToken?: string | undefined
                      sortOrder?: number | undefined
                      totalPrice?: number | undefined
                      totalPriceFormatted?: string | undefined
                      totalPriceUSD?: number | undefined
                      userId?: number | undefined
                      voucherKey?: string | undefined
                      voucherURL?: string | undefined
                    }
                  | undefined
                itineraryFromPrice?: number | undefined
                itineraryFromPriceFormatted?: string | undefined
                itineraryNewPrice?: number | undefined
                itineraryNewPriceFormatted?: string | undefined
                itinerarySaving?: number | undefined
                itinerarySavingFormatted?: string | undefined
                paymentGatewayInfo?: string | undefined
                promoCode?: string | undefined
                promoCodeExpired?: boolean | undefined
                promoCodeValid?: boolean | undefined
                rulesApplied?: string[] | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/booking/hotels': {
      $get: {
        input: { query: { productCode?: string | undefined; destId?: number | undefined } } & {
          header: { 'Accept-Language': string }
        }
        output: {
          dateStamp?: (string | null) | undefined
          errorCodes?: (string[] | null) | undefined
          errorMessage?: ({ [x: string]: unknown }[] | null) | undefined
          errorMessageText?: (string | null) | undefined
          errorName?: (string | null) | undefined
          errorReference?: (string | null) | undefined
          errorType?: (string | null) | undefined
          extraInfo?: ({ [x: string]: unknown } | null) | undefined
          extraObject?: ({ [x: string]: unknown } | null) | undefined
          success?: (boolean | null) | undefined
          totalCount?: (number | null) | undefined
          vmid?: (string | null) | undefined
          data?:
            | {
                address?: string | undefined
                brand?: string | undefined
                city?: string | undefined
                destinationId?: number | undefined
                hotelString?: string | undefined
                id?: string | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                name?: string | undefined
                notes?: string | undefined
                phone?: string | undefined
                postcode?: string | undefined
                productCodes?: string[] | undefined
                sortOrder?: number | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/booking/mybookings': {
      $get: {
        input: {
          query: {
            voucherKey?: string | undefined
            email?: string | undefined
            itineraryOrItemId?: string | undefined
          }
        } & { header: { 'Accept-Language': string } }
        output: {
          dateStamp?: (string | null) | undefined
          errorCodes?: (string[] | null) | undefined
          errorMessage?: ({ [x: string]: unknown }[] | null) | undefined
          errorMessageText?: (string | null) | undefined
          errorName?: (string | null) | undefined
          errorReference?: (string | null) | undefined
          errorType?: (string | null) | undefined
          extraInfo?: ({ [x: string]: unknown } | null) | undefined
          extraObject?: ({ [x: string]: unknown } | null) | undefined
          success?: (boolean | null) | undefined
          totalCount?: (number | null) | undefined
          vmid?: (string | null) | undefined
          data?:
            | {
                bookerEmail?: string | undefined
                bookingDate?: string | undefined
                bookingStatus?: BookingStatusItinerary | undefined
                currencyCode?: string | undefined
                distributorRef?: string | undefined
                exchangeRate?: number | undefined
                hasVoucher?: boolean | undefined
                itemSummaries?:
                  | {
                      barcodeOption?: string | undefined
                      barcodeType?: string | undefined
                      bookingEngineId?: BookingEngineIdResponse | undefined
                      bookingStatus?: BookingStatusItem | undefined
                      currencyCode?: string | undefined
                      departsFrom?: string | undefined
                      departurePoint?: string | undefined
                      departurePointAddress?: string | undefined
                      departurePointDirections?: string | undefined
                      destId?: number | undefined
                      distributorItemRef?: string | undefined
                      hoursConfirmed?: number | undefined
                      itemId?: string | undefined
                      itineraryId?: number | undefined
                      languageServicesLanguageCode?: string | undefined
                      lastRetailPrice?: number | undefined
                      lastRetailPriceFormatted?: string | undefined
                      leadTravellerFirstname?: string | undefined
                      leadTravellerSurname?: string | undefined
                      leadTravellerTitle?: string | undefined
                      merchantCancellable?: boolean | undefined
                      merchantNetPrice?: number | undefined
                      merchantNetPriceFormatted?: string | undefined
                      merchantTermsAndConditions?:
                        | {
                            amountRefundable?: string | undefined
                            cancellationFromTourDate?:
                              | {
                                  dayRangeMax?: number | undefined
                                  dayRangeMin?: number | undefined
                                  percentageRefundable?: number | undefined
                                  policyEndTimestamp?: number | undefined
                                  policyStartTimestamp?: number | undefined
                                }[]
                              | undefined
                            termsAndConditions?: string | undefined
                          }
                        | undefined
                      obfsId?: string | undefined
                      passbooks?: string | undefined
                      price?: number | undefined
                      priceFormatted?: string | undefined
                      priceUSD?: number | undefined
                      productCode?: string | undefined
                      productPulledDown?: boolean | undefined
                      productTitle?: string | undefined
                      productWidgetList?: string | undefined
                      rulesApplied?: string | undefined
                      savingAmount?: SavingAmount | undefined
                      savingAmountFormated?: SavingAmountFormated | undefined
                      sortOrder?: number | undefined
                      termsAndConditions?: string | undefined
                      tourGradeCode?: string | undefined
                      tourGradeDescription?: string | undefined
                      travelDate?: string | undefined
                      travellerAgeBands?:
                        | {
                            ageBandId?: AgeBandId | undefined
                            count?: number | undefined
                            description?: string | undefined
                            pluralDescription?: string | undefined
                            sortOrder?: number | undefined
                          }[]
                        | undefined
                      voucherKey?: string | undefined
                      voucherOption?: string | undefined
                      voucherRequirements?: string | undefined
                      voucherURL?: string | undefined
                      vouchers?: string | undefined
                    }[]
                  | undefined
                itineraryId?: number | undefined
                rulesApplied?: string | undefined
                sortOrder?: number | undefined
                totalPrice?: number | undefined
                totalPriceFormatted?: string | undefined
                totalPriceUSD?: number | undefined
                userId?: string | undefined
                voucherKey?: string | undefined
                voucherURL?: string | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/booking/pastbooking': {
      $get: {
        input: {
          query: {
            voucherKey?: string | undefined
            email?: string | undefined
            itemId?: string | undefined
          }
        } & { header: { 'Accept-Language': string } }
        output: {
          dateStamp?: (string | null) | undefined
          errorCodes?: (string[] | null) | undefined
          errorMessage?: ({ [x: string]: unknown }[] | null) | undefined
          errorMessageText?: (string | null) | undefined
          errorName?: (string | null) | undefined
          errorReference?: (string | null) | undefined
          errorType?: (string | null) | undefined
          extraInfo?: ({ [x: string]: unknown } | null) | undefined
          extraObject?: ({ [x: string]: unknown } | null) | undefined
          success?: (boolean | null) | undefined
          totalCount?: (number | null) | undefined
          vmid?: (string | null) | undefined
          data?:
            | {
                bookerEmail?: string | undefined
                bookingDate?: string | undefined
                bookingStatus?: BookingStatusItinerary | undefined
                currencyCode?: string | undefined
                distributorRef?: string | undefined
                exchangeRate?: number | undefined
                hasVoucher?: boolean | undefined
                itemSummaries?:
                  | {
                      barcodeOption?: string | undefined
                      barcodeType?: string | undefined
                      bookingEngineId?: BookingEngineIdResponse | undefined
                      bookingStatus?: BookingStatusItem | undefined
                      currencyCode?: string | undefined
                      departsFrom?: string | undefined
                      departurePoint?: string | undefined
                      departurePointAddress?: string | undefined
                      departurePointDirections?: string | undefined
                      destId?: number | undefined
                      distributorItemRef?: string | undefined
                      hoursConfirmed?: number | undefined
                      itemId?: string | undefined
                      itineraryId?: number | undefined
                      languageServicesLanguageCode?: string | undefined
                      lastRetailPrice?: number | undefined
                      lastRetailPriceFormatted?: string | undefined
                      leadTravellerFirstname?: string | undefined
                      leadTravellerSurname?: string | undefined
                      leadTravellerTitle?: string | undefined
                      merchantCancellable?: boolean | undefined
                      merchantNetPrice?: number | undefined
                      merchantNetPriceFormatted?: string | undefined
                      merchantTermsAndConditions?:
                        | {
                            amountRefundable?: string | undefined
                            cancellationFromTourDate?:
                              | {
                                  dayRangeMax?: number | undefined
                                  dayRangeMin?: number | undefined
                                  percentageRefundable?: number | undefined
                                  policyEndTimestamp?: number | undefined
                                  policyStartTimestamp?: number | undefined
                                }[]
                              | undefined
                            termsAndConditions?: string | undefined
                          }
                        | undefined
                      obfsId?: string | undefined
                      passbooks?: string | undefined
                      price?: number | undefined
                      priceFormatted?: string | undefined
                      priceUSD?: number | undefined
                      productCode?: string | undefined
                      productPulledDown?: boolean | undefined
                      productTitle?: string | undefined
                      productWidgetList?: string | undefined
                      rulesApplied?: string | undefined
                      savingAmount?: SavingAmount | undefined
                      savingAmountFormated?: SavingAmountFormated | undefined
                      sortOrder?: number | undefined
                      termsAndConditions?: string | undefined
                      tourGradeCode?: string | undefined
                      tourGradeDescription?: string | undefined
                      travelDate?: string | undefined
                      travellerAgeBands?:
                        | {
                            ageBandId?: AgeBandId | undefined
                            count?: number | undefined
                            description?: string | undefined
                            pluralDescription?: string | undefined
                            sortOrder?: number | undefined
                          }[]
                        | undefined
                      voucherKey?: string | undefined
                      voucherOption?: string | undefined
                      voucherRequirements?: string | undefined
                      voucherURL?: string | undefined
                      vouchers?: string | undefined
                    }[]
                  | undefined
                itineraryId?: number | undefined
                rulesApplied?: string | undefined
                sortOrder?: number | undefined
                totalPrice?: number | undefined
                totalPriceFormatted?: string | undefined
                totalPriceUSD?: number | undefined
                userId?: string | undefined
                voucherKey?: string | undefined
                voucherURL?: string | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/booking/pricingmatrix': {
      $post: {
        input: { header: { 'Accept-Language': string } } & {
          json: {
            bookingDate?: string | undefined
            currencyCode?: string | undefined
            productCode?: string | undefined
            tourGradeCode?: string | undefined
          }
        }
        output: {
          dateStamp?: (string | null) | undefined
          errorCodes?: (string[] | null) | undefined
          errorMessage?: ({ [x: string]: unknown }[] | null) | undefined
          errorMessageText?: (string | null) | undefined
          errorName?: (string | null) | undefined
          errorReference?: (string | null) | undefined
          errorType?: (string | null) | undefined
          extraInfo?: ({ [x: string]: unknown } | null) | undefined
          extraObject?: ({ [x: string]: unknown } | null) | undefined
          success?: (boolean | null) | undefined
          totalCount?: (number | null) | undefined
          vmid?: (string | null) | undefined
          data?:
            | {
                ageBandPrices?:
                  | {
                      bandId?: BandId | undefined
                      maximumCountRequired?: number | undefined
                      minimumCountRequired?: number | undefined
                      prices?:
                        | {
                            currencyCode?: string | undefined
                            merchantNetPrice?: number | undefined
                            merchantNetPriceFormatted?: string | undefined
                            minNoOfTravellersRequiredForPrice?: number | undefined
                            price?: number | undefined
                            priceFormatted?: string | undefined
                            sortOrder?: string | undefined
                          }[]
                        | undefined
                      sortOrder?: number | undefined
                    }[]
                  | undefined
                bookingDate?: string | undefined
                pricingUnit?: string | undefined
                sortOrder?: number | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/booking/status': {
      $post: {
        input: { header: { 'Accept-Language': string } } & {
          json: {
            bookingDateFrom?: string | undefined
            bookingDateTo?: string | undefined
            distributorItemRefs?: string[] | undefined
            distributorRefs?: string[] | undefined
            itemIds?: number[] | undefined
            leadFirstName?: string | undefined
            leadSurname?: string | undefined
            test?: boolean | undefined
          }
        }
        output: {
          dateStamp?: (string | null) | undefined
          errorCodes?: (string[] | null) | undefined
          errorMessage?: ({ [x: string]: unknown }[] | null) | undefined
          errorMessageText?: (string | null) | undefined
          errorName?: (string | null) | undefined
          errorReference?: (string | null) | undefined
          errorType?: (string | null) | undefined
          extraInfo?: ({ [x: string]: unknown } | null) | undefined
          extraObject?: ({ [x: string]: unknown } | null) | undefined
          success?: (boolean | null) | undefined
          totalCount?: (number | null) | undefined
          vmid?: (string | null) | undefined
          data?:
            | {
                bookingDate?: string | undefined
                bookingStatus?: BookingStatusItinerary | undefined
                distributorRef?: string | undefined
                itemSummaries?:
                  | {
                      bookingStatus?: BookingStatusItem | undefined
                      distributorItemRef?: string | undefined
                      itemId?: number | undefined
                      itineraryId?: number | undefined
                      sortOrder?: number | undefined
                      travelDate?: string | undefined
                    }[]
                  | undefined
                itineraryId?: number | undefined
                sortOrder?: number | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/booking/status/items': {
      $post: {
        input: { header: { 'Accept-Language': string } } & {
          json: {
            bookingDateFrom?: string | undefined
            bookingDateTo?: string | undefined
            distributorItemRefs?: string[] | undefined
            distributorRefs?: string[] | undefined
            itemIds?: number[] | undefined
            leadFirstName?: string | undefined
            leadSurname?: string | undefined
            test?: boolean | undefined
          }
        }
        output: {
          dateStamp?: (string | null) | undefined
          errorCodes?: (string[] | null) | undefined
          errorMessage?: ({ [x: string]: unknown }[] | null) | undefined
          errorMessageText?: (string | null) | undefined
          errorName?: (string | null) | undefined
          errorReference?: (string | null) | undefined
          errorType?: (string | null) | undefined
          extraInfo?: ({ [x: string]: unknown } | null) | undefined
          extraObject?: ({ [x: string]: unknown } | null) | undefined
          success?: (boolean | null) | undefined
          totalCount?: (number | null) | undefined
          vmid?: (string | null) | undefined
          data?:
            | {
                bookingStatus?: BookingStatusItem | undefined
                distributorItemRef?: string | undefined
                itemId?: number | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/booking/voucher': {
      $get: {
        input: {
          query: {
            leadLastName?: string | undefined
            itemId?: number | undefined
            embeddedResources?: boolean | undefined
            voucherKey?: string | undefined
            fullHTML?: boolean | undefined
            mobileVoucher?: boolean | undefined
          }
        } & { header: { 'Accept-Language': string } }
        output: {
          dateStamp?: (string | null) | undefined
          errorCodes?: (string[] | null) | undefined
          errorMessage?: ({ [x: string]: unknown }[] | null) | undefined
          errorMessageText?: (string | null) | undefined
          errorName?: (string | null) | undefined
          errorReference?: (string | null) | undefined
          errorType?: (string | null) | undefined
          extraInfo?: ({ [x: string]: unknown } | null) | undefined
          extraObject?: ({ [x: string]: unknown } | null) | undefined
          success?: (boolean | null) | undefined
          totalCount?: (number | null) | undefined
          vmid?: (string | null) | undefined
          data?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bookings/cancel-reasons': {
      $get:
        | {
            input: { header: { 'Accept-Language': string } }
            output: CancellationReasonsResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language': string } }
            output: _401UNAUTHORIZED
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Accept-Language': string } }
            output: _406NOTACCEPTABLE
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { header: { 'Accept-Language': string } }
            output: _500INTERNALSERVERERROR
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { 'Accept-Language': string } }
            output: _503SERVICEUNAVAILABLE
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/bookings/:booking-reference/cancel': {
      $post:
        | {
            input: { param: { 'booking-reference': string } } & {
              header: { 'Accept-Language': string }
            } & { json: CancellationRequest }
            output: CancelBookingResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'booking-reference': string } } & {
              header: { 'Accept-Language': string }
            } & { json: CancellationRequest }
            output: {
              code?: 'BAD_REQUEST' | undefined
              message?: 'Missing cancellation reason' | undefined
              timestamp?: string | undefined
              trackingId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { 'booking-reference': string } } & {
              header: { 'Accept-Language': string }
            } & { json: CancellationRequest }
            output: _401UNAUTHORIZED
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { 'booking-reference': string } } & {
              header: { 'Accept-Language': string }
            } & { json: CancellationRequest }
            output: {
              code?: 'NOT_FOUND' | undefined
              message?: 'Booking not found' | undefined
              timestamp?: string | undefined
              trackingId?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { 'booking-reference': string } } & {
              header: { 'Accept-Language': string }
            } & { json: CancellationRequest }
            output: _406NOTACCEPTABLE
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { 'booking-reference': string } } & {
              header: { 'Accept-Language': string }
            } & { json: CancellationRequest }
            output: _500INTERNALSERVERERROR
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { 'booking-reference': string } } & {
              header: { 'Accept-Language': string }
            } & { json: CancellationRequest }
            output: _503SERVICEUNAVAILABLE
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/bookings/:booking-reference/cancel-quote': {
      $get:
        | {
            input: { param: { 'booking-reference': string } }
            output: CancelBookingQuoteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'booking-reference': string } }
            output: _401UNAUTHORIZED
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { 'booking-reference': string } }
            output: _406NOTACCEPTABLE
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { 'booking-reference': string } }
            output: _500INTERNALSERVERERROR
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { 'booking-reference': string } }
            output: _503SERVICEUNAVAILABLE
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/health/check': {
      $get: {
        input: { header: { 'Accept-Language': string } }
        output: {
          allGood?: (boolean | null) | undefined
          capiOk?: (boolean | null) | undefined
          dbOk?: (boolean | null) | undefined
          memcachedOk?: (boolean | null) | undefined
          message?: (string | null) | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/merchant/cancellation': {
      $post:
        | {
            input: { header: { 'Accept-Language': string } } & {
              json: {
                cancelItems?:
                  | {
                      cancelCode?: string | undefined
                      cancelDescription?: string | undefined
                      distributorItemRef?: string | undefined
                      itemId?: number | undefined
                    }[]
                  | undefined
                distributorRef?: string | undefined
                itineraryId?: number | undefined
              }
            }
            output: {
              dateStamp?: (string | null) | undefined
              errorCodes?: (string[] | null) | undefined
              errorMessage?: ({ [x: string]: unknown }[] | null) | undefined
              errorMessageText?: (string | null) | undefined
              errorName?: (string | null) | undefined
              errorReference?: (string | null) | undefined
              errorType?: (string | null) | undefined
              extraInfo?: ({ [x: string]: unknown } | null) | undefined
              extraObject?: ({ [x: string]: unknown } | null) | undefined
              success?: (boolean | null) | undefined
              totalCount?: (number | null) | undefined
              vmid?: (string | null) | undefined
              data?:
                | {
                    cancelItems?:
                      | {
                          cancellationResponseDescription?: string | undefined
                          cancellationResponseStatusCode?: string | undefined
                          distributorItemRef?: string | undefined
                          itemId?: string | undefined
                        }[]
                      | undefined
                    distributorRef?: string | undefined
                    itineraryId?: number | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language': string } } & {
              json: {
                cancelItems?:
                  | {
                      cancelCode?: string | undefined
                      cancelDescription?: string | undefined
                      distributorItemRef?: string | undefined
                      itemId?: number | undefined
                    }[]
                  | undefined
                distributorRef?: string | undefined
                itineraryId?: number | undefined
              }
            }
            output: {
              dateStamp?: (string | null) | undefined
              errorCodes?: (string[] | null) | undefined
              errorMessage?: ({ [x: string]: unknown }[] | null) | undefined
              errorMessageText?: (string | null) | undefined
              errorName?: (string | null) | undefined
              errorReference?: (string | null) | undefined
              errorType?: (string | null) | undefined
              extraInfo?: ({ [x: string]: unknown } | null) | undefined
              extraObject?: ({ [x: string]: unknown } | null) | undefined
              success?: (boolean | null) | undefined
              totalCount?: (number | null) | undefined
              vmid?: (string | null) | undefined
              data?:
                | {
                    cancellationResponseDescription?: string | undefined
                    cancellationResponseStatusCode?: string | undefined
                    distributorItemRef?: string | undefined
                    itemId?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/product': {
      $get: {
        input: {
          query: {
            currencyCode?: string | undefined
            sortOrder?:
              | 'REVIEW_RATING_A'
              | 'REVIEW_RATING_D'
              | 'REVIEW_RATING_SUBMISSION_DATE_D'
              | undefined
            voucherOption?: 'VOUCHER_PAPER_ONLY' | 'VOUCHER_E' | undefined
            code?: string | undefined
            showUnavailable?: boolean | undefined
            excludeTourGradeAvailability?: boolean | undefined
          }
        } & { header: { 'Accept-Language': string } }
        output: {
          dateStamp?: (string | null) | undefined
          errorCodes?: (string[] | null) | undefined
          errorMessage?: ({ [x: string]: unknown }[] | null) | undefined
          errorMessageText?: (string | null) | undefined
          errorName?: (string | null) | undefined
          errorReference?: (string | null) | undefined
          errorType?: (string | null) | undefined
          extraInfo?: ({ [x: string]: unknown } | null) | undefined
          extraObject?: ({ [x: string]: unknown } | null) | undefined
          success?: (boolean | null) | undefined
          totalCount?: (number | null) | undefined
          vmid?: (string | null) | undefined
          data?:
            | {
                additionalInfo?: string[] | undefined
                admission?: (string | null) | undefined
                ageBands?:
                  | {
                      adult?: boolean | undefined
                      ageFrom?: number | undefined
                      ageTo?: number | undefined
                      bandId?: BandId | undefined
                      count?: number | undefined
                      description?: string | undefined
                      pluralDescription?: string | undefined
                      sortOrder?: number | undefined
                      treatAsAdult?: boolean | undefined
                    }[]
                  | undefined
                allTravellerNamesRequired?: boolean | undefined
                applePassSupported?: boolean | undefined
                available?: boolean | undefined
                bookingEngineId?: BookingEngineId | undefined
                bookingQuestions?:
                  | {
                      message?: string | undefined
                      questionId?: number | undefined
                      required?: boolean | undefined
                      sortOrder?: number | undefined
                      stringQuestionId?: string | undefined
                      subTitle?: string | undefined
                      title?: string | undefined
                    }[]
                  | undefined
                catIds?: number[] | undefined
                city?: string | undefined
                code?: string | undefined
                country?: string | undefined
                currencyCode?: string | undefined
                departurePoint?: string | undefined
                departureTime?: string | undefined
                departureTimeComments?: string | undefined
                description?: string | undefined
                destinationId?: number | undefined
                duration?: string | undefined
                essential?: (string | null) | undefined
                exclusions?: string[] | undefined
                highlights?: (number | null) | undefined
                hotelPickup?: boolean | undefined
                inclusions?: string[] | undefined
                itinerary?: string | undefined
                location?: string | undefined
                mapURL?: (string | null) | undefined
                maxTravellerCount?: number | undefined
                merchantCancellable?: boolean | undefined
                merchantNetPriceFrom?: MerchantNetPriceFrom | undefined
                merchantNetPriceFromFormatted?: MerchantNetPriceFromFormatted | undefined
                merchantTermsAndConditions?:
                  | ({
                      amountRefundable?: (number | null) | undefined
                      cancellationFromTourDate?:
                        | {
                            dayRangeMax?: (number | null) | undefined
                            dayRangeMin?: number | undefined
                            percentageRefundable?: number | undefined
                            policyEndTimestamp?: (number | null) | undefined
                            policyStartTimestamp?: (number | null) | undefined
                          }[]
                        | undefined
                      merchantTermsAndConditionsType?: number | undefined
                      termsAndConditions?: string | undefined
                    } | null)
                  | undefined
                onRequestPeriod?: OnRequestPeriod | undefined
                onSale?: OnSale | undefined
                operates?: string | undefined
                panoramaCount?: number | undefined
                pas?: { [x: string]: unknown } | undefined
                passengerAttributes?:
                  | (
                      | {
                          customAttribute_kgs?: string | undefined
                          customAttribute_lbs?: string | undefined
                          errorMissingMessage?: string | undefined
                          errorValidationMessage?: string | undefined
                          questionId?: string | undefined
                          required?: boolean | undefined
                          title?: string | undefined
                          validateType?: string | undefined
                        }[]
                      | null
                    )
                  | undefined
                photoCount?: number | undefined
                price?: Price | undefined
                priceFormatted?: PriceFormatted | undefined
                primaryDestinationId?: number | undefined
                primaryDestinationName?: string | undefined
                primaryDestinationUrlName?: string | undefined
                primaryGroupId?: (string | null) | undefined
                productPhotos?:
                  | {
                      caption?: string | undefined
                      photoURL?: string | undefined
                      supplier?: string | undefined
                    }[]
                  | undefined
                productUrlName?: string | undefined
                rating?: Rating | undefined
                ratingCounts?: RatingCounts | undefined
                region?: string | undefined
                returnDetails?: string | undefined
                reviewCount?: ReviewCount | undefined
                reviews?: Reviews | undefined
                rrp?: Rrp | undefined
                rrpFormatted?: RrpFormatted | undefined
                salesPoints?: string[] | undefined
                savingAmount?: SavingAmount | undefined
                savingAmountFormated?: SavingAmountFormated | undefined
                shortDescription?: string | undefined
                shortTitle?: string | undefined
                specialOffer?: SpecialOffer | undefined
                specialOfferAvailable?: SpecialOfferAvailable | undefined
                specialReservation?: boolean | undefined
                specialReservationDetails?: (string | null) | undefined
                sslSupported?: boolean | undefined
                subCatIds?: number[] | undefined
                supplierCode?: string | undefined
                supplierName?: string | undefined
                thumbnailHiResURL?: string | undefined
                thumbnailURL?: string | undefined
                title?: string | undefined
                tourGrades?:
                  | {
                      currencyCode?: string | undefined
                      defaultLanguageCode?: string | undefined
                      gradeCode?: string | undefined
                      gradeDepartureTime?: string | undefined
                      gradeDescription?: string | undefined
                      gradeTitle?: string | undefined
                      langServices?: { [x: string]: string } | undefined
                      merchantNetPriceFrom?: MerchantNetPriceFrom | undefined
                      merchantNetPriceFromFormatted?: MerchantNetPriceFromFormatted | undefined
                      priceFrom?: number | undefined
                      priceFromFormatted?: string | undefined
                      sortOrder?: number | undefined
                    }[]
                  | undefined
                tourGradesAvailable?: boolean | undefined
                translationLevel?: TranslationLevel | undefined
                userPhotos?: PhotoObject[] | undefined
                videoCount?: number | undefined
                videos?: (string | null) | undefined
                voucherOption?: string | undefined
                voucherRequirements?: { [x: string]: unknown } | undefined
                webURL?: WebURL | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/product/photos': {
      $get: {
        input: {
          query: {
            topX?: string | undefined
            code?: string | undefined
            showUnavailable?: boolean | undefined
          }
        } & { header: { 'Accept-Language': string } }
        output: {
          dateStamp?: (string | null) | undefined
          errorCodes?: (string[] | null) | undefined
          errorMessage?: ({ [x: string]: unknown }[] | null) | undefined
          errorMessageText?: (string | null) | undefined
          errorName?: (string | null) | undefined
          errorReference?: (string | null) | undefined
          errorType?: (string | null) | undefined
          extraInfo?: ({ [x: string]: unknown } | null) | undefined
          extraObject?: ({ [x: string]: unknown } | null) | undefined
          success?: (boolean | null) | undefined
          totalCount?: (number | null) | undefined
          vmid?: (string | null) | undefined
          data?: PhotoObject[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/product/reviews': {
      $get: {
        input: {
          query: {
            sortOrder?:
              | 'REVIEW_RATING_A'
              | 'REVIEW_RATING_D'
              | 'REVIEW_RATING_SUBMISSION_DATE_D'
              | undefined
            topX?: string | undefined
            code?: string | undefined
            showUnavailable?: boolean | undefined
          }
        } & { header: { 'Accept-Language': string } }
        output: {
          dateStamp?: (string | null) | undefined
          errorCodes?: (string[] | null) | undefined
          errorMessage?: ({ [x: string]: unknown }[] | null) | undefined
          errorMessageText?: (string | null) | undefined
          errorName?: (string | null) | undefined
          errorReference?: (string | null) | undefined
          errorType?: (string | null) | undefined
          extraInfo?: ({ [x: string]: unknown } | null) | undefined
          extraObject?: ({ [x: string]: unknown } | null) | undefined
          success?: (boolean | null) | undefined
          totalCount?: (number | null) | undefined
          vmid?: (string | null) | undefined
          data?: ReviewObject[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/search/freetext': {
      $post: {
        input: { header: { 'Accept-Language': string } } & {
          json: {
            currencyCode?: string | undefined
            destId?: number | undefined
            searchTypes?:
              | ('PRODUCT' | 'DESTINATION' | 'ATTRACTION' | 'RECOMMENDATION')[]
              | undefined
            sortOrder?: SortOrder | undefined
            text?: string | undefined
            topX?: TopX | undefined
          }
        }
        output: {
          dateStamp?: (string | null) | undefined
          errorCodes?: (string[] | null) | undefined
          errorMessage?: ({ [x: string]: unknown }[] | null) | undefined
          errorMessageText?: (string | null) | undefined
          errorName?: (string | null) | undefined
          errorReference?: (string | null) | undefined
          errorType?: (string | null) | undefined
          extraInfo?: ({ [x: string]: unknown } | null) | undefined
          extraObject?: ({ [x: string]: unknown } | null) | undefined
          success?: (boolean | null) | undefined
          totalCount?: (number | null) | undefined
          vmid?: (string | null) | undefined
          data?: SearchFreetextResponse[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/search/products': {
      $post: {
        input: { header: { 'Accept-Language': string } } & {
          json: {
            catId?: number | undefined
            currencyCode?: string | undefined
            destId?: number | undefined
            endDate?: string | undefined
            seoId?: string | undefined
            sortOrder?:
              | 'TOP_SELLERS'
              | 'REVIEW_AVG_RATING_A'
              | 'REVIEW_AVG_RATING_D'
              | 'PRICE_FROM_A'
              | 'PRICE_FROM_D'
              | undefined
            startDate?: string | undefined
            subCatId?: number | undefined
            topX?: TopX | undefined
          }
        }
        output: {
          dateStamp?: (string | null) | undefined
          errorCodes?: (string[] | null) | undefined
          errorMessage?: ({ [x: string]: unknown }[] | null) | undefined
          errorMessageText?: (string | null) | undefined
          errorName?: (string | null) | undefined
          errorReference?: (string | null) | undefined
          errorType?: (string | null) | undefined
          extraInfo?: ({ [x: string]: unknown } | null) | undefined
          extraObject?: ({ [x: string]: unknown } | null) | undefined
          success?: (boolean | null) | undefined
          totalCount?: (number | null) | undefined
          vmid?: (string | null) | undefined
          data?:
            | {
                admission?: (string | null) | undefined
                available?: boolean | undefined
                bookingEngineId?: BookingEngineId | undefined
                catIds?: number[] | undefined
                code?: string | undefined
                currencyCode?: string | undefined
                duration?: string | undefined
                essential?: (string | null) | undefined
                merchantCancellable?: boolean | undefined
                merchantNetPriceFrom?: MerchantNetPriceFrom | undefined
                merchantNetPriceFromFormatted?: MerchantNetPriceFromFormatted | undefined
                onRequestPeriod?: OnRequestPeriod | undefined
                onSale?: OnSale | undefined
                panoramaCount?: number | undefined
                pas?: ({ [x: string]: unknown } | null) | undefined
                photoCount?: number | undefined
                price?: Price | undefined
                priceFormatted?: PriceFormatted | undefined
                primaryDestinationId?: number | undefined
                primaryDestinationName?: string | undefined
                primaryDestinationUrlName?: string | undefined
                primaryGroupId?: number | undefined
                productUrlName?: string | undefined
                rating?: Rating | undefined
                reviewCount?: ReviewCount | undefined
                rrp?: Rrp | undefined
                rrpformatted?: RrpFormatted | undefined
                savingAmount?: SavingAmount | undefined
                savingAmountFormated?: SavingAmountFormated | undefined
                shortDescription?: string | undefined
                shortTitle?: string | undefined
                sortOrder?: number | undefined
                specialOfferAvailable?: boolean | undefined
                specialReservation?: boolean | undefined
                specialReservationDetails?: (string | null) | undefined
                sslSupported?: { [x: string]: unknown } | undefined
                subCatIds?: number[] | undefined
                supplierCode?: string | undefined
                supplierName?: string | undefined
                thumbnailHiResURL?: string | undefined
                thumbnailURL?: string | undefined
                title?: string | undefined
                translationLevel?: TranslationLevel | undefined
                uniqueShortDescription?: (string | null) | undefined
                videoCount?: number | undefined
                webURL?: WebURL | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/search/products/codes': {
      $post: {
        input: { header: { 'Accept-Language': string } } & {
          json: { currencyCode?: string | undefined; productCodes?: string[] | undefined }
        }
        output: {
          dateStamp?: (string | null) | undefined
          errorCodes?: (string[] | null) | undefined
          errorMessage?: ({ [x: string]: unknown }[] | null) | undefined
          errorMessageText?: (string | null) | undefined
          errorName?: (string | null) | undefined
          errorReference?: (string | null) | undefined
          errorType?: (string | null) | undefined
          extraInfo?: ({ [x: string]: unknown } | null) | undefined
          extraObject?: ({ [x: string]: unknown } | null) | undefined
          success?: (boolean | null) | undefined
          totalCount?: (number | null) | undefined
          vmid?: (string | null) | undefined
          data?:
            | {
                admission?: (string | null) | undefined
                bookingEngineId?: BookingEngineId | undefined
                catIds?: number[] | undefined
                code?: string | undefined
                currencyCode?: string | undefined
                duration?: string | undefined
                essential?: (string | null) | undefined
                merchantCancellable?: boolean | undefined
                merchantNetPriceFrom?: MerchantNetPriceFrom | undefined
                merchantNetPriceFromFormatted?: MerchantNetPriceFromFormatted | undefined
                onRequestPeriod?: OnRequestPeriod | undefined
                onSale?: OnSale | undefined
                panoramaCount?: number | undefined
                pas?: ({ [x: string]: unknown } | null) | undefined
                photoCount?: number | undefined
                price?: Price | undefined
                priceFormatted?: string | undefined
                primaryDestinationId?: number | undefined
                primaryDestinationName?: string | undefined
                primaryGroupId?: (string | null) | undefined
                rating?: Rating | undefined
                reviewCount?: ReviewCount | undefined
                rrp?: Rrp | undefined
                rrpformatted?: RrpFormatted | undefined
                savingAmount?: SavingAmount | undefined
                savingAmountFormated?: SavingAmountFormated | undefined
                shortDescription?: string | undefined
                shortTitle?: string | undefined
                sortOrder?: number | undefined
                specialOfferAvailable?: boolean | undefined
                specialReservation?: boolean | undefined
                specialReservationDetails?: (string | null) | undefined
                subCatIds?: number[] | undefined
                supplierCode?: string | undefined
                supplierName?: string | undefined
                thumbnailHiResURL?: string | undefined
                thumbnailURL?: string | undefined
                title?: string | undefined
                translationLevel?: TranslationLevel | undefined
                uniqueShortDescription?: (string | null) | undefined
                videoCount?: number | undefined
                webURL?: WebURL | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/taxonomy/attractions': {
      $post: {
        input: { header: { 'Accept-Language': string } } & {
          json: {
            destId?: number | undefined
            sortOrder?:
              | 'SEO_PUBLISHED_DATE_D'
              | 'SEO_PUBLISHED_DATE_A'
              | 'SEO_REVIEW_AVG_RATING_D'
              | 'SEO_REVIEW_AVG_RATING_A'
              | 'SEO_ALPHABETICAL'
              | undefined
            topX?: TopX | undefined
          }
        }
        output: {
          dateStamp?: (string | null) | undefined
          errorCodes?: (string[] | null) | undefined
          errorMessage?: ({ [x: string]: unknown }[] | null) | undefined
          errorMessageText?: (string | null) | undefined
          errorName?: (string | null) | undefined
          errorReference?: (string | null) | undefined
          errorType?: (string | null) | undefined
          extraInfo?: ({ [x: string]: unknown } | null) | undefined
          extraObject?: ({ [x: string]: unknown } | null) | undefined
          success?: (boolean | null) | undefined
          totalCount?: (number | null) | undefined
          vmid?: (string | null) | undefined
          data?:
            | {
                attractionCity?: string | undefined
                attractionLatitude?: number | undefined
                attractionLongitude?: number | undefined
                attractionState?: string | undefined
                attractionStreetAddress?: string | undefined
                destinationId?: number | undefined
                pageUrlName?: string | undefined
                photoCount?: number | undefined
                primaryDestinationId?: number | undefined
                primaryDestinationName?: string | undefined
                primaryDestinationUrlName?: string | undefined
                productCount?: number | undefined
                publishedDate?: string | undefined
                rating?: number | undefined
                seoId?: number | undefined
                sortOrder?: number | undefined
                thumbnailHiResURL?: string | undefined
                thumbnailURL?: string | undefined
                title?: string | undefined
                webURL?: WebURL | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/taxonomy/categories': {
      $get: {
        input: { query: { destId?: number | undefined } } & {
          header: { 'Accept-Language': string }
        }
        output: {
          dateStamp?: (string | null) | undefined
          errorCodes?: (string[] | null) | undefined
          errorMessage?: ({ [x: string]: unknown }[] | null) | undefined
          errorMessageText?: (string | null) | undefined
          errorName?: (string | null) | undefined
          errorReference?: (string | null) | undefined
          errorType?: (string | null) | undefined
          extraInfo?: ({ [x: string]: unknown } | null) | undefined
          extraObject?: ({ [x: string]: unknown } | null) | undefined
          success?: (boolean | null) | undefined
          totalCount?: (number | null) | undefined
          vmid?: (string | null) | undefined
          data?:
            | {
                groupName?: string | undefined
                groupUrlName?: string | undefined
                id?: number | undefined
                productCount?: number | undefined
                subcategories?:
                  | {
                      categoryId?: number | undefined
                      sortorder?: number | undefined
                      subCategoryUrlName?: string | undefined
                      subcategoryId?: number | undefined
                      subcategoryName?: string | undefined
                    }[]
                  | undefined
                thumbnailURL?: string | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/taxonomy/destinations': {
      $get: {
        input: { header: { 'Accept-Language': string } }
        output: {
          dateStamp?: (string | null) | undefined
          errorCodes?: (string[] | null) | undefined
          errorMessage?: ({ [x: string]: unknown }[] | null) | undefined
          errorMessageText?: (string | null) | undefined
          errorName?: (string | null) | undefined
          errorReference?: (string | null) | undefined
          errorType?: (string | null) | undefined
          extraInfo?: ({ [x: string]: unknown } | null) | undefined
          extraObject?: ({ [x: string]: unknown } | null) | undefined
          success?: (boolean | null) | undefined
          totalCount?: (number | null) | undefined
          vmid?: (string | null) | undefined
          data?:
            | {
                defaultCurrencyCode?: string | undefined
                destinationId?: number | undefined
                destinationName?: string | undefined
                destinationType?: DestinationType | undefined
                destinationUrlName?: string | undefined
                iataCode?: IataCode | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                lookupId?: string | undefined
                parentId?: number | undefined
                selectable?: boolean | undefined
                sortOrder?: number | undefined
                timeZone?: string | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
