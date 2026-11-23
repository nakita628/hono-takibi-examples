declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/chargers': {
      $get: {
        input: { query: { 'field[]'?: ('chargeState' | 'location')[] | undefined } }
        output: {
          chargeState?:
            | {
                chargeRate?: number | undefined
                isCharging?: boolean | undefined
                isPluggedIn?: boolean | undefined
              }
            | undefined
          id?: string | undefined
          information?:
            | {
                brand?: string | undefined
                id?: string | undefined
                model?: string | undefined
                year?: number | undefined
              }
            | undefined
          isReachable?: boolean | undefined
          lastSeen?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/chargers/:chargerId': {
      $get: {
        input: { param: { chargerId: string } } & {
          query: { 'field[]'?: ('chargeState' | 'location')[] | undefined }
        }
        output: {
          chargeState?:
            | {
                chargeRate?: number | undefined
                isCharging?: boolean | undefined
                isPluggedIn?: boolean | undefined
              }
            | undefined
          id?: string | undefined
          information?:
            | {
                brand?: string | undefined
                id?: string | undefined
                model?: string | undefined
                year?: number | undefined
              }
            | undefined
          isReachable?: boolean | undefined
          lastSeen?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/chargers/:chargerId/charging': {
      $post: {
        input: { param: { chargerId: string } } & { json: { action: 'START' | 'STOP' } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/charging-locations': {
      $get: {
        input: {}
        output: {
          id: string
          latitude?: number | undefined
          longitude?: number | undefined
          name?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          json: {
            id: string
            latitude?: number | undefined
            longitude?: number | undefined
            name?: string | undefined
          }
        }
        output: {
          id: string
          latitude?: number | undefined
          longitude?: number | undefined
          name?: string | undefined
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/charging-locations/:chargingLocationId': {
      $delete: {
        input: { param: { chargingLocationId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { chargingLocationId: string } }
        output: {
          id: string
          latitude?: number | undefined
          longitude?: number | undefined
          name?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { chargingLocationId: string } } & {
          json: {
            id: string
            latitude?: number | undefined
            longitude?: number | undefined
            name?: string | undefined
          }
        }
        output: {
          id: string
          latitude?: number | undefined
          longitude?: number | undefined
          name?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/health/ready': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: string; outputFormat: 'json'; status: 503 }
    }
  } & {
    '/health/vendors': {
      $get: {
        input: {}
        output: {
          displayName?: string | undefined
          status?: 'READY' | 'ELEVATED_ERROR_RATE' | 'OUTAGE' | undefined
          vendor?:
            | 'TESLA'
            | 'BMW'
            | 'AUDI'
            | 'VOLKSWAGEN'
            | 'HYUNDAI'
            | 'PEUGEOT'
            | 'NISSAN'
            | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/me': {
      $get: {
        input: {}
        output: {
          id?: string | undefined
          linkedVendors?:
            | {
                isValid?: boolean | undefined
                vendor?:
                  | 'TESLA'
                  | 'BMW'
                  | 'AUDI'
                  | 'VOLKSWAGEN'
                  | 'HYUNDAI'
                  | 'PEUGEOT'
                  | 'NISSAN'
                  | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/me/vendors/:vendor': {
      $delete: {
        input: {
          param: {
            vendor: 'TESLA' | 'BMW' | 'AUDI' | 'VOLKSWAGEN' | 'HYUNDAI' | 'PEUGEOT' | 'NISSAN'
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/statistics/charging': {
      $get: {
        input: {
          query: {
            resolution?: 'HOUR' | 'DAY' | 'WEEK' | 'MONTH' | 'YEAR' | undefined
            startDate: string
            endDate?: string | undefined
            vehicleId?: string | undefined
            chargingLocationId?: string | undefined
          }
        }
        output: {
          costSum: number
          date: string
          kw: { max: number; mean: number; min: number }
          kwhSum: number
          price: { max: number; mean: number; min: number }
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:userId': {
      $delete: {
        input: { param: { userId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/users/:userId/authorization': {
      $delete: {
        input: { param: { userId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/users/:userId/link': {
      $post: {
        input: { param: { userId: string } } & {
          json: {
            forceLanguage?: string | undefined
            linkMultiple?: boolean | undefined
            userImage?: string | undefined
            userName?: string | undefined
            vendor?:
              | 'TESLA'
              | 'BMW'
              | 'AUDI'
              | 'VOLKSWAGEN'
              | 'HYUNDAI'
              | 'PEUGEOT'
              | 'NISSAN'
              | undefined
          }
        }
        output: { linkState?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/vehicles': {
      $get: {
        input: { query: { 'field[]'?: { [x: string]: unknown }[] | undefined } }
        output: {
          chargeState?:
            | {
                batteryCapacity?: number | undefined
                batteryLevel?: number | undefined
                chargeLimit?: number | undefined
                chargeRate?: number | undefined
                chargeTimeRemaining?: number | undefined
                isCharging?: boolean | undefined
                isChargingReasons?: ({ override: true } | 'DEFAULT')[] | undefined
                isPluggedIn?: boolean | undefined
                range?: number | undefined
              }
            | undefined
          chargingLocationId: string
          id: string
          information?:
            | {
                brand?: string | undefined
                id?: string | undefined
                model?: string | undefined
                year?: number | undefined
              }
            | undefined
          isReachable: boolean
          lastSeen: string
          location?:
            | {
                lastUpdated?: string | undefined
                latitude?: number | undefined
                longitude?: number | undefined
              }
            | undefined
          odometer?: { distance?: number | undefined; lastUpdated?: string | undefined } | undefined
          smartChargingPolicy?:
            | { deadline?: string | undefined; isEnabled?: boolean | undefined }
            | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/vehicles/:vehicleId': {
      $get: {
        input: { param: { vehicleId: string } } & {
          query: {
            'field[]'?:
              | ('smartChargingPolicy' | 'chargeState' | 'location' | 'information' | 'odometer')[]
              | undefined
          }
        }
        output: {
          chargeState?:
            | {
                batteryCapacity?: number | undefined
                batteryLevel?: number | undefined
                chargeLimit?: number | undefined
                chargeRate?: number | undefined
                chargeTimeRemaining?: number | undefined
                isCharging?: boolean | undefined
                isChargingReasons?: ({ override: true } | 'DEFAULT')[] | undefined
                isPluggedIn?: boolean | undefined
                range?: number | undefined
              }
            | undefined
          chargingLocationId: string
          id: string
          information?:
            | {
                brand?: string | undefined
                id?: string | undefined
                model?: string | undefined
                year?: number | undefined
              }
            | undefined
          isReachable: boolean
          lastSeen: string
          location?:
            | {
                lastUpdated?: string | undefined
                latitude?: number | undefined
                longitude?: number | undefined
              }
            | undefined
          odometer?: { distance?: number | undefined; lastUpdated?: string | undefined } | undefined
          smartChargingPolicy?:
            | { deadline?: string | undefined; isEnabled?: boolean | undefined }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/vehicles/:vehicleId/charge-state': {
      $get: {
        input: { param: { vehicleId: string } }
        output: {
          batteryCapacity?: number | undefined
          batteryLevel?: number | undefined
          chargeLimit?: number | undefined
          chargeRate?: number | undefined
          chargeTimeRemaining?: number | undefined
          isCharging?: boolean | undefined
          isChargingReasons?: ({ override: true } | 'DEFAULT')[] | undefined
          isPluggedIn?: boolean | undefined
          range?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/vehicles/:vehicleId/charging': {
      $post: {
        input: { param: { vehicleId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/vehicles/:vehicleId/information': {
      $get: {
        input: { param: { vehicleId: string } }
        output: {
          brand?: string | undefined
          id?: string | undefined
          model?: string | undefined
          year?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/vehicles/:vehicleId/location': {
      $get: {
        input: { param: { vehicleId: string } }
        output: {
          lastUpdated?: string | undefined
          latitude?: number | undefined
          longitude?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/vehicles/:vehicleId/odometer': {
      $get: {
        input: { param: { vehicleId: string } }
        output: { distance?: number | undefined; lastUpdated?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/vehicles/:vehicleId/smart-charging-policy': {
      $get: {
        input: { param: { vehicleId: string } }
        output: { deadline?: string | undefined; isEnabled?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { vehicleId: string } } & {
          json: { deadline?: string | undefined; isEnabled?: boolean | undefined }
        }
        output: { deadline?: string | undefined; isEnabled?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/vehicles/:vehicleId/watch': {
      $post: {
        input: { param: { vehicleId: string } } & {
          json: {
            properties?:
              | 'BATTERY_LEVEL'
              | 'RANGE'
              | 'IS_PLUGGED_IN'
              | 'IS_CHARGING'
              | 'IS_CHARGING_REASONS'
              | 'LOCATION'
              | undefined
          }
        }
        output: {
          properties?:
            | 'BATTERY_LEVEL'
            | 'RANGE'
            | 'IS_PLUGGED_IN'
            | 'IS_CHARGING'
            | 'IS_CHARGING_REASONS'
            | 'LOCATION'
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webhooks/firehose': {
      $put: {
        input: { json: { secret?: string | undefined; url?: string | undefined } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/webhooks/firehose/test': {
      $post: { input: {}; output: string; outputFormat: 'json'; status: 200 }
    }
  },
  '/'
>
export default routes
