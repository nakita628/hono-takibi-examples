declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/baggage/baggagetripandcontact/:searchID': {
      $get: {
        input: { param: { searchID: string } } & { header: { Accept: string } }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/offers/fares/allfares': {
      $get: {
        input: {
          query: {
            catalogues: string
            origin: string
            destination: string
            'travel-date': string
            'return-date'?: string | undefined
            'cabin-class'?: string | undefined
            travelers?: string | undefined
            'fare-family'?: string | undefined
            trackingid?: string | undefined
          }
        } & { header: { Accept?: string | undefined } }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/offers/fares/bestfares': {
      $get: {
        input: {
          query: {
            catalogues: string
            origin: string
            destination: string
            'travel-date': string
            'trip-duration': string
            range: string
            'cabin-class'?: string | undefined
            country?: string | undefined
            trackingid?: string | undefined
            'fare-family'?: string | undefined
          }
        } & { header: { Accept: string } }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/offers/fares/deeplink': {
      $get: {
        input: {
          query: {
            catalogues: string
            trackingid: string
            country: string
            lang: string
            origin?: string | undefined
            'origin-name'?: string | undefined
            destination?: string | undefined
            'destination-name'?: string | undefined
            'travel-date'?: string | undefined
            'return-date'?: string | undefined
            'cabin-class'?: string | undefined
            'outbound-segments'?: string | undefined
            'return-segments'?: string | undefined
            travelers?: string | undefined
            fare?: string | undefined
            'net-fare'?: string | undefined
            'fare-currency'?: string | undefined
            partnerid?: string | undefined
            'encryption-key'?: string | undefined
          }
        } & { header: { Accept: string } }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/offers/fares/deeplink/ffp': {
      $get: {
        input: {
          query: {
            catalogues: string
            origin: string
            destination: string
            'travel-date': string
            trackingid: string
            country: string
            lang: string
            'return-date'?: string | undefined
            'cabin-class'?: string | undefined
            travelers?: string | undefined
            partnerid?: string | undefined
            'encryption-key'?: string | undefined
          }
        } & { header: { Accept: string } }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/offers/fares/deeplink/itco': {
      $get: {
        input: {
          query: {
            catalogues: string
            origin: string
            destination: string
            'travel-date': string
            'outbound-segments': string
            fare: string
            'fare-currency': string
            trackingid: string
            country: string
            lang: string
            'return-date'?: string | undefined
            'cabin-class'?: string | undefined
            'return-segments'?: string | undefined
            travelers?: string | undefined
            'net-fare'?: string | undefined
            partnerid?: string | undefined
            'encryption-key'?: string | undefined
          }
        } & { header: { Accept: string } }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/offers/fares/fares': {
      $get: {
        input: {
          query: {
            catalogues: string
            segments: string
            carriers: string
            travelers?: string | undefined
            'fare-types'?: string | undefined
          }
        } & { header: { Accept: string } }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/offers/fares/lowestfares': {
      $get: {
        input: {
          query: {
            catalogues: string
            origin: string
            destination: string
            'travel-date': string
            'return-date'?: string | undefined
            'cabin-class'?: string | undefined
            travelers?: string | undefined
            'fare-family'?: string | undefined
            country?: string | undefined
          }
        } & { header: { Accept: string } }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/offers/fares/subscriptions': {
      $get: {
        input: {
          query: {
            origin: string
            destination: string
            'cabin-class': string
            'trip-duration': string
            email: string
            lang: string
            country?: string | undefined
            trackingid?: string | undefined
          }
        } & { header: { Accept: string } }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/offers/ond/route/:origin/:destination': {
      $get: {
        input: { param: { origin: string; destination: string } } & {
          query: {
            catalogues?: string | undefined
            limit?: string | undefined
            offset?: string | undefined
          }
        } & { header: { Accept: string } }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/offers/ond/status': {
      $get: {
        input: {
          query: {
            catalogues?: string | undefined
            'new-routes'?: string | undefined
            'old-routes'?: string | undefined
          }
        } & { header: { Accept: string } }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/offers/ond/top': {
      $get: {
        input: { query: { catalogues?: string | undefined; origin?: string | undefined } } & {
          header: { Accept: string }
        }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/orders/orders/:orderID/:name': {
      $get: {
        input: { param: { orderID: string; name: string } } & { header: { Accept: string } }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/preflight/autocheckin/:ticketnumber': {
      $put: {
        input: { param: { ticketnumber: string } } & { query: { emailAddress: string } } & {
          header: { Accept: string }
        }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/promotions/priceoffers/flights/ond/:origin/:destination': {
      $get: {
        input: { param: { origin: string; destination: string } } & {
          query: { departureDate: string; returnDate: string; service?: string | undefined }
        }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/references/seatdetails/:aircraftCode/:cabinCode': {
      $get: {
        input: { param: { aircraftCode: string; cabinCode: string } } & {
          query: { lang?: string | undefined }
        } & { header: { Accept: string } }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
