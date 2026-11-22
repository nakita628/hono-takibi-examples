type Leg1 = { destination_airport_code: string; origin_airport_code: string; travel_class: string }
type AirtravelMultilegRequest = {
  apiKey_l1: string
  apiKey_l2: string
  contactEmail: string
  contactFirstName: string
  contactLastName: string
  leg1: Leg1
  leg2: Leg1
  leg3: Leg1
  legs_count: string
  number_of_passengers: string
  travel_mode: string
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/airtravelCoordinates': {
      $post: {
        input: { header: { 'Content-Type': string } } & {
          json: {
            apiKey_l1: string
            apiKey_l2: string
            destination_airport_latitude: number
            destination_airport_longitude: number
            number_of_passengers: number
            origin_airport_latitude: number
            origin_airport_longitude: number
            travel_class: string
            travel_mode: string
          }
        } & {
          form: {
            apiKey_l1: string
            apiKey_l2: string
            destination_airport_latitude: number
            destination_airport_longitude: number
            number_of_passengers: number
            origin_airport_latitude: number
            origin_airport_longitude: number
            travel_class: string
            travel_mode: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/airtravelCoordinates/confirmCarbonOffset': {
      $patch: {
        input: {
          json: {
            carbonOffset: string
            contactEmail?: string | undefined
            contactFirstName?: string | undefined
            contactLastName?: string | undefined
            transaction_id: string
          }
        } & {
          form: {
            carbonOffset: string
            contactEmail?: string | undefined
            contactFirstName?: string | undefined
            contactLastName?: string | undefined
            transaction_id: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/airtravelCoordinates/confirmPayment': {
      $patch: {
        input: {
          json: {
            apiKey_l1: string
            apiKey_l2: string
            confirmPayment: string
            paymentID: number
            transaction_id: string
          }
        } & {
          form: {
            apiKey_l1: string
            apiKey_l2: string
            confirmPayment: string
            paymentID: number
            transaction_id: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/airtravelCoordinates/confirmPlanting': {
      $patch: {
        input: {
          json: {
            apiKey_l1: string
            apiKey_l2: string
            confirmPlanting: string
            transaction_id: string
          }
        } & {
          form: {
            apiKey_l1: string
            apiKey_l2: string
            confirmPlanting: string
            transaction_id: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/airtravelCoordinates/confirmTransaction': {
      $patch: {
        input: { json: { confirmTransaction: string; transaction_id: string } } & {
          form: { confirmTransaction: string; transaction_id: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/airtravelMultileg': {
      $post: {
        input: { json: AirtravelMultilegRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/airtravelMultileg/confirmCarbonOffset': {
      $patch: {
        input: {
          json: {
            carbonOffset: string
            contactEmail?: string | undefined
            contactFirstName?: string | undefined
            contactLastName?: string | undefined
            transaction_id: string
          }
        } & {
          form: {
            carbonOffset: string
            contactEmail?: string | undefined
            contactFirstName?: string | undefined
            contactLastName?: string | undefined
            transaction_id: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/airtravelMultileg/confirmPayment': {
      $patch: {
        input: {
          json: {
            apiKey_l1: string
            apiKey_l2: string
            confirmPayment: string
            paymentID: number
            transaction_id: string
          }
        } & {
          form: {
            apiKey_l1: string
            apiKey_l2: string
            confirmPayment: string
            paymentID: number
            transaction_id: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/airtravelMultileg/confirmPlanting': {
      $patch: {
        input: {
          json: {
            apiKey_l1: string
            apiKey_l2: string
            confirmPlanting: string
            transaction_id: string
          }
        } & {
          form: {
            apiKey_l1: string
            apiKey_l2: string
            confirmPlanting: string
            transaction_id: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/airtravelMultileg/confirmTransaction': {
      $patch: {
        input: { json: { confirmTransaction: string; transaction_id: string } } & {
          form: { confirmTransaction: string; transaction_id: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/ecommerceDelivery': {
      $post: {
        input: { header: { 'Content-Type': string } } & {
          json: {
            apiKey_l1: string
            apiKey_l2: string
            destination_airport_code?: string | undefined
            destination_latitude: number
            destination_longitude: number
            origin_airport_code?: string | undefined
            origin_latitude: number
            origin_longitude: number
            volumetric_weight: number
            waybill_type: string
          }
        } & {
          form: {
            apiKey_l1: string
            apiKey_l2: string
            destination_airport_code?: string | undefined
            destination_latitude: number
            destination_longitude: number
            origin_airport_code?: string | undefined
            origin_latitude: number
            origin_longitude: number
            volumetric_weight: number
            waybill_type: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/ecommerceDelivery/confirmCarbonOffset': {
      $patch: {
        input: {
          json: {
            carbonOffset: string
            contactEmail?: string | undefined
            contactFirstName?: string | undefined
            contactLastName?: string | undefined
            transaction_id: string
          }
        } & {
          form: {
            carbonOffset: string
            contactEmail?: string | undefined
            contactFirstName?: string | undefined
            contactLastName?: string | undefined
            transaction_id: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/ecommerceDelivery/confirmPayment': {
      $patch: {
        input: {
          json: {
            apiKey_l1: string
            apiKey_l2: string
            confirmPayment: string
            paymentID: number
            transaction_id: string
          }
        } & {
          form: {
            apiKey_l1: string
            apiKey_l2: string
            confirmPayment: string
            paymentID: number
            transaction_id: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/ecommerceDelivery/confirmPlanting': {
      $patch: {
        input: {
          json: {
            apiKey_l1: string
            apiKey_l2: string
            confirmPlanting: string
            transaction_id: string
          }
        } & {
          form: {
            apiKey_l1: string
            apiKey_l2: string
            confirmPlanting: string
            transaction_id: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/ecommerceDelivery/confirmTransaction': {
      $patch: {
        input: { json: { confirmTransaction: string; transaction_id: string } } & {
          form: { confirmTransaction: string; transaction_id: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/requestApiKey': {
      $post: {
        input: {
          json: {
            apiKey_l1: string
            apiKey_l2: string
            email: string
            password: number
            userFirstName: string
            userLastName: string
          }
        } & {
          form: {
            apiKey_l1: string
            apiKey_l2: string
            email: string
            password: number
            userFirstName: string
            userLastName: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/roadDistance': {
      $post: {
        input: {
          json: {
            apiKey_l1: string
            apiKey_l2: string
            travel_distance: number
            trip_end: number
            trip_start: number
            vehicle_make?: string | undefined
            vehicle_type: string
            vehicle_year?: number | undefined
          }
        } & {
          form: {
            apiKey_l1: string
            apiKey_l2: string
            travel_distance: number
            trip_end: number
            trip_start: number
            vehicle_make?: string | undefined
            vehicle_type: string
            vehicle_year?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/roadDistance/confirmCarbonOffset': {
      $patch: {
        input: {
          json: {
            carbonOffset: string
            contactEmail?: string | undefined
            contactFirstName?: string | undefined
            contactLastName?: string | undefined
            transaction_id: string
          }
        } & {
          form: {
            carbonOffset: string
            contactEmail?: string | undefined
            contactFirstName?: string | undefined
            contactLastName?: string | undefined
            transaction_id: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/roadDistance/confirmPayment': {
      $patch: {
        input: {
          json: {
            apiKey_l1: string
            apiKey_l2: string
            confirmPayment: string
            paymentID: number
            transaction_id: string
          }
        } & {
          form: {
            apiKey_l1: string
            apiKey_l2: string
            confirmPayment: string
            paymentID: number
            transaction_id: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/roadDistance/confirmPlanting': {
      $patch: {
        input: {
          json: {
            apiKey_l1: string
            apiKey_l2: string
            confirmPlanting: string
            transaction_id: string
          }
        } & {
          form: {
            apiKey_l1: string
            apiKey_l2: string
            confirmPlanting: string
            transaction_id: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/roadDistance/confirmTransaction': {
      $patch: {
        input: { json: { confirmTransaction: string; transaction_id: string } } & {
          form: { confirmTransaction: string; transaction_id: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/urbanDelivery': {
      $post: {
        input: {
          json: {
            apiKey_l1: string
            apiKey_l2: string
            destination_latitude: number
            destination_longitude: number
            item_count: number
            origin_latitude: number
            origin_longitude: number
            vehicle_type: string
          }
        } & {
          form: {
            apiKey_l1: string
            apiKey_l2: string
            destination_latitude: number
            destination_longitude: number
            item_count: number
            origin_latitude: number
            origin_longitude: number
            vehicle_type: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/urbanDelivery/confirmCarbonOffset': {
      $patch: {
        input: {
          json: {
            carbonOffset: string
            contactEmail?: string | undefined
            contactFirstName?: string | undefined
            contactLastName?: string | undefined
            transaction_id: string
          }
        } & {
          form: {
            carbonOffset: string
            contactEmail?: string | undefined
            contactFirstName?: string | undefined
            contactLastName?: string | undefined
            transaction_id: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/urbanDelivery/confirmPayment': {
      $patch: {
        input: {
          json: {
            apiKey_l1: string
            apiKey_l2: string
            confirmPayment: string
            paymentID: number
            transaction_id: string
          }
        } & {
          form: {
            apiKey_l1: string
            apiKey_l2: string
            confirmPayment: string
            paymentID: number
            transaction_id: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/urbanDelivery/confirmPlanting': {
      $patch: {
        input: {
          json: {
            apiKey_l1: string
            apiKey_l2: string
            confirmPlanting: string
            transaction_id: string
          }
        } & {
          form: {
            apiKey_l1: string
            apiKey_l2: string
            confirmPlanting: string
            transaction_id: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/urbanDelivery/confirmTransaction': {
      $patch: {
        input: { json: { confirmTransaction: string; transaction_id: string } } & {
          form: { confirmTransaction: string; transaction_id: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
