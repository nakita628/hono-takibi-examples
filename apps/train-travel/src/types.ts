type Station = {
  id: string
  name: string
  address: string
  country_code: string
  timezone?: string | undefined
}
type Problem = {
  type?: string | undefined
  title?: string | undefined
  detail?: string | undefined
  instance?: string | undefined
  status?: number | undefined
}
type Trip = {
  id?: string | undefined
  origin?: string | undefined
  destination?: string | undefined
  departure_time?: string | undefined
  arrival_time?: string | undefined
  operator?: string | undefined
  price?: number | undefined
  bicycles_allowed?: boolean | undefined
  dogs_allowed?: boolean | undefined
}
type Booking = {
  id?: string | undefined
  trip_id?: string | undefined
  passenger_name?: string | undefined
  has_bicycle?: boolean | undefined
  has_dog?: boolean | undefined
}
type LinksSelf = { self?: string | undefined }
type BookingPayment = {
  id?: string | undefined
  amount?: number | undefined
  currency?: 'bam' | 'bgn' | 'chf' | 'eur' | 'gbp' | 'nok' | 'sek' | 'try' | undefined
  source?:
    | {
        object?: 'card' | undefined
        name: string
        number: string
        cvc: number
        exp_month: bigint
        exp_year: bigint
        address_line1?: string | undefined
        address_line2?: string | undefined
        address_city?: string | undefined
        address_country: string
        address_post_code?: string | undefined
      }
    | {
        object?: 'bank_account' | undefined
        name: string
        number: string
        sort_code?: string | undefined
        account_type: 'individual' | 'company'
        bank_name: string
        country: string
      }
    | undefined
  status?: 'pending' | 'succeeded' | 'failed' | undefined
}
type LinksBooking = { booking?: string | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/stations': {
      $get:
        | {
            input: {}
            output: {
              data?: Station[] | undefined
              links?:
                | {
                    self?: string | undefined
                    next?: string | undefined
                    prev?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              data?: Station[] | undefined
              links?:
                | {
                    self?: string | undefined
                    next?: string | undefined
                    prev?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | { input: {}; output: Problem; outputFormat: 'json'; status: 400 }
        | { input: {}; output: Problem; outputFormat: 'text'; status: 400 }
        | { input: {}; output: Problem; outputFormat: 'json'; status: 401 }
        | { input: {}; output: Problem; outputFormat: 'text'; status: 401 }
        | { input: {}; output: Problem; outputFormat: 'json'; status: 403 }
        | { input: {}; output: Problem; outputFormat: 'text'; status: 403 }
        | { input: {}; output: Problem; outputFormat: 'json'; status: 429 }
        | { input: {}; output: Problem; outputFormat: 'text'; status: 429 }
        | { input: {}; output: Problem; outputFormat: 'json'; status: 500 }
        | { input: {}; output: Problem; outputFormat: 'text'; status: 500 }
    }
  } & {
    '/trips': {
      $get:
        | {
            input: {
              query: {
                origin: string
                destination: string
                date: string
                bicycles?: boolean | undefined
                dogs?: boolean | undefined
              }
            }
            output: {
              data?: Trip[] | undefined
              links?:
                | {
                    self?: string | undefined
                    next?: string | undefined
                    prev?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                origin: string
                destination: string
                date: string
                bicycles?: boolean | undefined
                dogs?: boolean | undefined
              }
            }
            output: {
              data?: Trip[] | undefined
              links?:
                | {
                    self?: string | undefined
                    next?: string | undefined
                    prev?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                origin: string
                destination: string
                date: string
                bicycles?: boolean | undefined
                dogs?: boolean | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                origin: string
                destination: string
                date: string
                bicycles?: boolean | undefined
                dogs?: boolean | undefined
              }
            }
            output: Problem
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                origin: string
                destination: string
                date: string
                bicycles?: boolean | undefined
                dogs?: boolean | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                origin: string
                destination: string
                date: string
                bicycles?: boolean | undefined
                dogs?: boolean | undefined
              }
            }
            output: Problem
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                origin: string
                destination: string
                date: string
                bicycles?: boolean | undefined
                dogs?: boolean | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                origin: string
                destination: string
                date: string
                bicycles?: boolean | undefined
                dogs?: boolean | undefined
              }
            }
            output: Problem
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              query: {
                origin: string
                destination: string
                date: string
                bicycles?: boolean | undefined
                dogs?: boolean | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                origin: string
                destination: string
                date: string
                bicycles?: boolean | undefined
                dogs?: boolean | undefined
              }
            }
            output: Problem
            outputFormat: 'text'
            status: 429
          }
        | {
            input: {
              query: {
                origin: string
                destination: string
                date: string
                bicycles?: boolean | undefined
                dogs?: boolean | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                origin: string
                destination: string
                date: string
                bicycles?: boolean | undefined
                dogs?: boolean | undefined
              }
            }
            output: Problem
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/bookings': {
      $get:
        | {
            input: {}
            output: {
              data?: Booking[] | undefined
              links?:
                | {
                    self?: string | undefined
                    next?: string | undefined
                    prev?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              data?: Booking[] | undefined
              links?:
                | {
                    self?: string | undefined
                    next?: string | undefined
                    prev?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | { input: {}; output: Problem; outputFormat: 'json'; status: 400 }
        | { input: {}; output: Problem; outputFormat: 'text'; status: 400 }
        | { input: {}; output: Problem; outputFormat: 'json'; status: 401 }
        | { input: {}; output: Problem; outputFormat: 'text'; status: 401 }
        | { input: {}; output: Problem; outputFormat: 'json'; status: 403 }
        | { input: {}; output: Problem; outputFormat: 'text'; status: 403 }
        | { input: {}; output: Problem; outputFormat: 'json'; status: 429 }
        | { input: {}; output: Problem; outputFormat: 'text'; status: 429 }
        | { input: {}; output: Problem; outputFormat: 'json'; status: 500 }
        | { input: {}; output: Problem; outputFormat: 'text'; status: 500 }
      $post:
        | {
            input: { json: Booking }
            output: {
              id?: string | undefined
              trip_id?: string | undefined
              passenger_name?: string | undefined
              has_bicycle?: boolean | undefined
              has_dog?: boolean | undefined
              links?: LinksSelf | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: Booking }
            output: {
              id?: string | undefined
              trip_id?: string | undefined
              passenger_name?: string | undefined
              has_bicycle?: boolean | undefined
              has_dog?: boolean | undefined
              links?: LinksSelf | undefined
            }
            outputFormat: 'text'
            status: 201
          }
        | { input: { json: Booking }; output: Problem; outputFormat: 'json'; status: 400 }
        | { input: { json: Booking }; output: Problem; outputFormat: 'text'; status: 400 }
        | { input: { json: Booking }; output: Problem; outputFormat: 'json'; status: 401 }
        | { input: { json: Booking }; output: Problem; outputFormat: 'text'; status: 401 }
        | { input: { json: Booking }; output: Problem; outputFormat: 'json'; status: 404 }
        | { input: { json: Booking }; output: Problem; outputFormat: 'text'; status: 404 }
        | { input: { json: Booking }; output: Problem; outputFormat: 'json'; status: 409 }
        | { input: { json: Booking }; output: Problem; outputFormat: 'text'; status: 409 }
        | { input: { json: Booking }; output: Problem; outputFormat: 'json'; status: 429 }
        | { input: { json: Booking }; output: Problem; outputFormat: 'text'; status: 429 }
        | { input: { json: Booking }; output: Problem; outputFormat: 'json'; status: 500 }
        | { input: { json: Booking }; output: Problem; outputFormat: 'text'; status: 500 }
    }
  } & {
    '/bookings/:bookingId': {
      $get:
        | {
            input: { param: { bookingId: string } }
            output: {
              id?: string | undefined
              trip_id?: string | undefined
              passenger_name?: string | undefined
              has_bicycle?: boolean | undefined
              has_dog?: boolean | undefined
              links?: LinksSelf | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bookingId: string } }
            output: {
              id?: string | undefined
              trip_id?: string | undefined
              passenger_name?: string | undefined
              has_bicycle?: boolean | undefined
              has_dog?: boolean | undefined
              links?: LinksSelf | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { bookingId: string } }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { bookingId: string } }
            output: Problem
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { bookingId: string } }
            output: Problem
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { bookingId: string } }
            output: Problem
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { bookingId: string } }
            output: Problem
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { bookingId: string } }
            output: Problem
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { bookingId: string } }
            output: Problem
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { bookingId: string } }
            output: Problem
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { bookingId: string } }
            output: Problem
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { bookingId: string } }
            output: Problem
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { bookingId: string } }
            output: Problem
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { bookingId: string } }
            output: Problem
            outputFormat: 'text'
            status: 500
          }
      $delete:
        | { input: { param: { bookingId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { bookingId: string } }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { bookingId: string } }
            output: Problem
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { bookingId: string } }
            output: Problem
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { bookingId: string } }
            output: Problem
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { bookingId: string } }
            output: Problem
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { bookingId: string } }
            output: Problem
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { bookingId: string } }
            output: Problem
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { bookingId: string } }
            output: Problem
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { bookingId: string } }
            output: Problem
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { bookingId: string } }
            output: Problem
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { bookingId: string } }
            output: Problem
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { bookingId: string } }
            output: Problem
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/bookings/:bookingId/payment': {
      $post:
        | {
            input: { param: { bookingId: string } } & { json: BookingPayment }
            output: {
              id?: string | undefined
              amount?: number | undefined
              currency?: 'bam' | 'bgn' | 'chf' | 'eur' | 'gbp' | 'nok' | 'sek' | 'try' | undefined
              source?:
                | {
                    object?: 'card' | undefined
                    name: string
                    number: string
                    cvc: number
                    exp_month: bigint
                    exp_year: bigint
                    address_line1?: string | undefined
                    address_line2?: string | undefined
                    address_city?: string | undefined
                    address_country: string
                    address_post_code?: string | undefined
                  }
                | {
                    object?: 'bank_account' | undefined
                    name: string
                    number: string
                    sort_code?: string | undefined
                    account_type: 'individual' | 'company'
                    bank_name: string
                    country: string
                  }
                | undefined
              status?: 'pending' | 'succeeded' | 'failed' | undefined
              links?: LinksBooking | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bookingId: string } } & { json: BookingPayment }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { bookingId: string } } & { json: BookingPayment }
            output: Problem
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { bookingId: string } } & { json: BookingPayment }
            output: Problem
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { bookingId: string } } & { json: BookingPayment }
            output: Problem
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { bookingId: string } } & { json: BookingPayment }
            output: Problem
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { bookingId: string } } & { json: BookingPayment }
            output: Problem
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { bookingId: string } } & { json: BookingPayment }
            output: Problem
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { bookingId: string } } & { json: BookingPayment }
            output: Problem
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { bookingId: string } } & { json: BookingPayment }
            output: Problem
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { bookingId: string } } & { json: BookingPayment }
            output: Problem
            outputFormat: 'text'
            status: 500
          }
    }
  },
  '/'
>
export default routes
