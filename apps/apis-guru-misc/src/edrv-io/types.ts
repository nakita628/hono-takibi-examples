type Schema1 = {
  location?: string | undefined
  manufacturer?: string | undefined
  model?: string | undefined
  protocol?: string | undefined
  public?: boolean | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/chargestations': {
      $get: {
        input: {
          query: {
            organization?: string | undefined
            location?: string | undefined
            online?: boolean | undefined
            active?: boolean | undefined
            public?: boolean | undefined
            paginate_limit?: number | undefined
            paginate_page?: string | undefined
            paginate_enabled?: boolean | undefined
            sort_by?: string | undefined
            sort_order?: 'desc' | 'asc' | undefined
            'createdAt[$gte]'?: string | undefined
            'createdAt[$lte]'?: string | undefined
            'updatedAt[$gte]'?: string | undefined
            'updatedAt[$lte]'?: string | undefined
            include_location?: boolean | undefined
            include_evses?: boolean | undefined
            include_organization?: boolean | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post:
        | {
            input: { json: Schema1 }
            output: {
              chargestation?: { [x: string]: unknown } | undefined
              message?: string | undefined
              ok?: boolean | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: Schema1 }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/v1/chargestations/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 400 }
      $get: {
        input: { param: { id: string } } & {
          query: {
            include_location?: boolean | undefined
            include_evses?: boolean | undefined
            include_organization?: boolean | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $patch:
        | {
            input: { param: { id: string } } & { json: Schema1 }
            output: {
              message?: string | undefined
              ok?: boolean | undefined
              result?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: Schema1 }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/v1/chargestations/:id/connectors': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                include_evse?: boolean | undefined
                include_organization?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                include_evse?: boolean | undefined
                include_organization?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/v1/commands': {
      $get: {
        input: {
          query: {
            paginate_limit?: number | undefined
            paginate_page?: string | undefined
            paginate_enabled?: boolean | undefined
            sort_by?: string | undefined
            sort_order?: 'desc' | 'asc' | undefined
            'createdAt[$gte]'?: string | undefined
            'createdAt[$lte]'?: string | undefined
            'updatedAt[$gte]'?: string | undefined
            'updatedAt[$lte]'?: string | undefined
            include_chargestation?: boolean | undefined
            include_driver?: boolean | undefined
            include_transaction?: boolean | undefined
            include_organization?: boolean | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/commands/cancelreservation': {
      $post:
        | {
            input: { json: { reservation?: string | undefined } }
            output: {
              message?: string | undefined
              ok?: boolean | undefined
              result?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: { reservation?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/v1/commands/chargingschedule': {
      $delete:
        | {
            input: { json: { id?: string | undefined } }
            output: {
              command?: { [x: string]: unknown } | undefined
              message?: string | undefined
              ok?: boolean | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: { id?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
      $post:
        | {
            input: {
              json: {
                connector?: string | undefined
                schedule?:
                  | {
                      endDate?: string | undefined
                      limit?: number | undefined
                      startDate?: string | undefined
                      unit?: string | undefined
                    }[]
                  | undefined
              }
            }
            output: {
              command?: { [x: string]: unknown } | undefined
              message?: string | undefined
              ok?: boolean | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                connector?: string | undefined
                schedule?:
                  | {
                      endDate?: string | undefined
                      limit?: number | undefined
                      startDate?: string | undefined
                      unit?: string | undefined
                    }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/v1/commands/remotestart': {
      $post:
        | {
            input: {
              json: {
                chargestation?: string | undefined
                connector?: string | undefined
                driver?: string | undefined
                token?: string | undefined
              }
            }
            output: {
              command?: { [x: string]: unknown } | undefined
              message?: string | undefined
              ok?: boolean | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                chargestation?: string | undefined
                connector?: string | undefined
                driver?: string | undefined
                token?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/v1/commands/remotestop': {
      $post:
        | {
            input: {
              json: {
                chargestation?: string | undefined
                driver?: string | undefined
                transaction?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: {
              json: {
                chargestation?: string | undefined
                driver?: string | undefined
                transaction?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/v1/commands/reserve': {
      $post:
        | {
            input: {
              json: {
                chargestation?: string | undefined
                connector?: string | undefined
                driver?: string | undefined
                endDate?: string | undefined
                token?: string | undefined
              }
            }
            output: {
              command?: { [x: string]: unknown } | undefined
              message?: string | undefined
              ok?: boolean | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                chargestation?: string | undefined
                connector?: string | undefined
                driver?: string | undefined
                endDate?: string | undefined
                token?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/v1/commands/reset': {
      $post:
        | {
            input: { json: { chargestation?: string | undefined; type?: string | undefined } }
            output: {
              message?: string | undefined
              ok?: boolean | undefined
              result?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: { chargestation?: string | undefined; type?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/v1/commands/unlockconnector': {
      $post:
        | {
            input: { json: { chargestation?: string | undefined; connector?: string | undefined } }
            output: {
              command?: { [x: string]: unknown } | undefined
              message?: string | undefined
              ok?: boolean | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: { chargestation?: string | undefined; connector?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/v1/commands/:id/variables': {
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
      $patch:
        | {
            input: { param: { id: string } } & {
              json: {
                value?: string | undefined
                variable?:
                  | 'MeterValueSampleInterval'
                  | 'HeartbeatInterval'
                  | 'ConnectionTimeOut'
                  | 'WebSocketPingInterval'
                  | 'TransactionMessageRetryInterval'
                  | 'TransactionMessageAttempts'
                  | undefined
              }
            }
            output: {
              message?: string | undefined
              ok?: boolean | undefined
              result?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              json: {
                value?: string | undefined
                variable?:
                  | 'MeterValueSampleInterval'
                  | 'HeartbeatInterval'
                  | 'ConnectionTimeOut'
                  | 'WebSocketPingInterval'
                  | 'TransactionMessageRetryInterval'
                  | 'TransactionMessageAttempts'
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/v1/configurations': {
      $get: {
        input: {
          query: {
            paginate_limit?: number | undefined
            paginate_page?: string | undefined
            paginate_enabled?: boolean | undefined
            sort_by?: string | undefined
            sort_order?: 'desc' | 'asc' | undefined
            'createdAt[$gte]'?: string | undefined
            'createdAt[$lte]'?: string | undefined
            'updatedAt[$gte]'?: string | undefined
            'updatedAt[$lte]'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post:
        | {
            input: { json: { key?: string | undefined; value?: string | undefined } }
            output: {
              message?: string | undefined
              ok?: boolean | undefined
              result?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: { key?: string | undefined; value?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/v1/configurations/:id': {
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/v1/connectors': {
      $get: {
        input: {
          query: {
            paginate_limit?: number | undefined
            paginate_page?: string | undefined
            paginate_enabled?: boolean | undefined
            sort_by?: string | undefined
            sort_order?: 'desc' | 'asc' | undefined
            'createdAt[$gte]'?: string | undefined
            'createdAt[$lte]'?: string | undefined
            'updatedAt[$gte]'?: string | undefined
            'updatedAt[$lte]'?: string | undefined
            include_evse?: boolean | undefined
            include_organization?: boolean | undefined
            include_rate?: boolean | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post:
        | {
            input: {
              json: {
                chargestation?: string | undefined
                format?: string | undefined
                power?: number | undefined
                power_type?: string | undefined
                rate?: string | undefined
                type?: string | undefined
              }
            }
            output: {
              message?: string | undefined
              ok?: boolean | undefined
              result?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                chargestation?: string | undefined
                format?: string | undefined
                power?: number | undefined
                power_type?: string | undefined
                rate?: string | undefined
                type?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/v1/connectors/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
      $get: {
        input: { param: { id: string } } & {
          query: {
            include_evse?: boolean | undefined
            include_organization?: boolean | undefined
            include_rate?: boolean | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $patch:
        | {
            input: { param: { id: string } } & {
              json: {
                chargestation?: string | undefined
                format?: string | undefined
                power?: number | undefined
                power_type?: string | undefined
                rate?: string | undefined
                type?: string | undefined
              }
            }
            output: {
              message?: string | undefined
              ok?: boolean | undefined
              result?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              json: {
                chargestation?: string | undefined
                format?: string | undefined
                power?: number | undefined
                power_type?: string | undefined
                rate?: string | undefined
                type?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/v1/drivers': {
      $get:
        | {
            input: {
              query: {
                active?: boolean | undefined
                paginate_limit?: number | undefined
                paginate_page?: string | undefined
                paginate_enabled?: boolean | undefined
                sort_by?: string | undefined
                sort_order?: 'desc' | 'asc' | undefined
                'createdAt[$gte]'?: string | undefined
                'createdAt[$lte]'?: string | undefined
                'updatedAt[$gte]'?: string | undefined
                'updatedAt[$lte]'?: string | undefined
                include_tokens?: boolean | undefined
                include_group?: boolean | undefined
                include_organization?: boolean | undefined
              }
            }
            output: {
              message?: string | undefined
              ok?: boolean | undefined
              result?: { [x: string]: unknown }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                active?: boolean | undefined
                paginate_limit?: number | undefined
                paginate_page?: string | undefined
                paginate_enabled?: boolean | undefined
                sort_by?: string | undefined
                sort_order?: 'desc' | 'asc' | undefined
                'createdAt[$gte]'?: string | undefined
                'createdAt[$lte]'?: string | undefined
                'updatedAt[$gte]'?: string | undefined
                'updatedAt[$lte]'?: string | undefined
                include_tokens?: boolean | undefined
                include_group?: boolean | undefined
                include_organization?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $post:
        | {
            input: {
              json: {
                active?: boolean | undefined
                address?:
                  | {
                      city?: string | undefined
                      country?: string | undefined
                      postalCode?: string | undefined
                      streetAndNumber?: string | undefined
                    }
                  | undefined
                email?: string | undefined
                firstname: string
                lastname: string
                phone?:
                  | {
                      home?: string | undefined
                      mobile?: string | undefined
                      work?: string | undefined
                    }
                  | undefined
                source: 'physical' | 'slack' | 'telegram' | 'sms'
              }
            }
            output: {
              message?: string | undefined
              ok?: boolean | undefined
              result?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                active?: boolean | undefined
                address?:
                  | {
                      city?: string | undefined
                      country?: string | undefined
                      postalCode?: string | undefined
                      streetAndNumber?: string | undefined
                    }
                  | undefined
                email?: string | undefined
                firstname: string
                lastname: string
                phone?:
                  | {
                      home?: string | undefined
                      mobile?: string | undefined
                      work?: string | undefined
                    }
                  | undefined
                source: 'physical' | 'slack' | 'telegram' | 'sms'
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/v1/drivers/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
      $get: {
        input: { param: { id: string } } & {
          query: {
            include_tokens?: boolean | undefined
            include_group?: boolean | undefined
            include_organization?: boolean | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $patch:
        | {
            input: { param: { id: string } } & {
              json: {
                active?: boolean | undefined
                address?:
                  | {
                      city?: string | undefined
                      country?: string | undefined
                      postalCode?: string | undefined
                      streetAndNumber?: string | undefined
                    }
                  | undefined
                email?: string | undefined
                firstname?: string | undefined
                lastname?: string | undefined
                phone?:
                  | {
                      home?: string | undefined
                      mobile?: string | undefined
                      work?: string | undefined
                    }
                  | undefined
                source?: string | undefined
                tokens?: { [x: string]: unknown }[] | undefined
              }
            }
            output: {
              message?: string | undefined
              ok?: boolean | undefined
              result?: { [x: string]: unknown }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: {
                active?: boolean | undefined
                address?:
                  | {
                      city?: string | undefined
                      country?: string | undefined
                      postalCode?: string | undefined
                      streetAndNumber?: string | undefined
                    }
                  | undefined
                email?: string | undefined
                firstname?: string | undefined
                lastname?: string | undefined
                phone?:
                  | {
                      home?: string | undefined
                      mobile?: string | undefined
                      work?: string | undefined
                    }
                  | undefined
                source?: string | undefined
                tokens?: { [x: string]: unknown }[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/v1/location/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
      $get: {
        input: { param: { id: string } } & {
          query: {
            include_chargestations?: boolean | undefined
            include_organization?: boolean | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $patch:
        | {
            input: { param: { id: string } } & {
              json: {
                active?: boolean | undefined
                address?:
                  | {
                      city?: string | undefined
                      country?: string | undefined
                      postalCode?: string | undefined
                      state?: string | undefined
                      streetAndNumber?: string | undefined
                    }
                  | undefined
                chargestations?: { [x: string]: unknown }[] | undefined
                coordinates?:
                  | { latitude?: number | undefined; longitude?: number | undefined }
                  | undefined
                openingHours?:
                  | {
                      '0'?:
                        | { endTime?: string | undefined; startTime?: string | undefined }[]
                        | undefined
                      '1'?:
                        | { endTime?: string | undefined; startTime?: string | undefined }[]
                        | undefined
                      '2'?:
                        | { endTime?: string | undefined; startTime?: string | undefined }[]
                        | undefined
                      '3'?:
                        | { endTime?: string | undefined; startTime?: string | undefined }[]
                        | undefined
                      '4'?:
                        | { endTime?: string | undefined; startTime?: string | undefined }[]
                        | undefined
                      '5'?:
                        | { endTime?: string | undefined; startTime?: string | undefined }[]
                        | undefined
                      '6'?:
                        | { endTime?: string | undefined; startTime?: string | undefined }[]
                        | undefined
                    }
                  | undefined
                operatorName?: string | undefined
                timezone?: string | undefined
              }
            }
            output: {
              message?: string | undefined
              ok?: boolean | undefined
              result?: { [x: string]: unknown }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: {
                active?: boolean | undefined
                address?:
                  | {
                      city?: string | undefined
                      country?: string | undefined
                      postalCode?: string | undefined
                      state?: string | undefined
                      streetAndNumber?: string | undefined
                    }
                  | undefined
                chargestations?: { [x: string]: unknown }[] | undefined
                coordinates?:
                  | { latitude?: number | undefined; longitude?: number | undefined }
                  | undefined
                openingHours?:
                  | {
                      '0'?:
                        | { endTime?: string | undefined; startTime?: string | undefined }[]
                        | undefined
                      '1'?:
                        | { endTime?: string | undefined; startTime?: string | undefined }[]
                        | undefined
                      '2'?:
                        | { endTime?: string | undefined; startTime?: string | undefined }[]
                        | undefined
                      '3'?:
                        | { endTime?: string | undefined; startTime?: string | undefined }[]
                        | undefined
                      '4'?:
                        | { endTime?: string | undefined; startTime?: string | undefined }[]
                        | undefined
                      '5'?:
                        | { endTime?: string | undefined; startTime?: string | undefined }[]
                        | undefined
                      '6'?:
                        | { endTime?: string | undefined; startTime?: string | undefined }[]
                        | undefined
                    }
                  | undefined
                operatorName?: string | undefined
                timezone?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/v1/locations': {
      $get:
        | {
            input: {
              query: {
                paginate_limit?: number | undefined
                paginate_page?: string | undefined
                paginate_enabled?: boolean | undefined
                sort_by?: string | undefined
                sort_order?: 'desc' | 'asc' | undefined
                'createdAt[$gte]'?: string | undefined
                'createdAt[$lte]'?: string | undefined
                'updatedAt[$gte]'?: string | undefined
                'updatedAt[$lte]'?: string | undefined
                include_organization?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                paginate_limit?: number | undefined
                paginate_page?: string | undefined
                paginate_enabled?: boolean | undefined
                sort_by?: string | undefined
                sort_order?: 'desc' | 'asc' | undefined
                'createdAt[$gte]'?: string | undefined
                'createdAt[$lte]'?: string | undefined
                'updatedAt[$gte]'?: string | undefined
                'updatedAt[$lte]'?: string | undefined
                include_organization?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $post:
        | {
            input: {
              json: {
                active?: boolean | undefined
                address: {
                  city?: string | undefined
                  country?: string | undefined
                  postalCode?: string | undefined
                  streetAndNumber?: string | undefined
                }
                chargestations?: { [x: string]: unknown }[] | undefined
                coordinates: { latitude?: number | undefined; longitude?: number | undefined }
                operatorName: string
              }
            }
            output: {
              message?: string | undefined
              ok?: boolean | undefined
              result?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                active?: boolean | undefined
                address: {
                  city?: string | undefined
                  country?: string | undefined
                  postalCode?: string | undefined
                  streetAndNumber?: string | undefined
                }
                chargestations?: { [x: string]: unknown }[] | undefined
                coordinates: { latitude?: number | undefined; longitude?: number | undefined }
                operatorName: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/v1/organizations': {
      $get: {
        input: {
          query: {
            paginate_limit?: number | undefined
            paginate_page?: string | undefined
            paginate_enabled?: boolean | undefined
            sort_by?: string | undefined
            sort_order?: 'desc' | 'asc' | undefined
            'createdAt[$gte]'?: string | undefined
            'createdAt[$lte]'?: string | undefined
            'updatedAt[$gte]'?: string | undefined
            'updatedAt[$lte]'?: string | undefined
            include_locations?: boolean | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/organizations/:id': {
      $get: {
        input: { param: { id: string } } & { query: { include_locations?: boolean | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
      $patch:
        | {
            input: { param: { id: string } } & {
              json: {
                active?: boolean | undefined
                address?:
                  | {
                      city?: string | undefined
                      country?: string | undefined
                      postalCode?: string | undefined
                      streetAndNumber?: string | undefined
                    }
                  | undefined
                channels?:
                  | {
                      slack?: { [x: string]: unknown } | undefined
                      telegram?: { [x: string]: unknown } | undefined
                    }
                  | undefined
                configurations?:
                  | {
                      basicAuthEnabled?: boolean | undefined
                      basicAuthPassword?: boolean | undefined
                    }
                  | undefined
                links?:
                  | {
                      about?: string | undefined
                      contact?: string | undefined
                      privacy?: string | undefined
                      support?: string | undefined
                    }
                  | undefined
                locations?: { [x: string]: unknown }[] | undefined
                logo?: string | undefined
                name?: string | undefined
                otp?: string | undefined
                stripe_connected_account_id?: string | undefined
                stripe_country?: string | undefined
                stripe_currency?: string | undefined
                stripe_reserve_amount?: number | undefined
                support?:
                  | {
                      business_hours?: string | undefined
                      chat?: { type?: string | undefined; value?: string | undefined } | undefined
                      contact_number?: string | undefined
                      email?: string | undefined
                    }
                  | undefined
                supportChat?: { id?: string | undefined; name?: string | undefined } | undefined
                theme?:
                  | {
                      colors?:
                        | { primary?: string | undefined; secondary?: string | undefined }
                        | undefined
                    }
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              json: {
                active?: boolean | undefined
                address?:
                  | {
                      city?: string | undefined
                      country?: string | undefined
                      postalCode?: string | undefined
                      streetAndNumber?: string | undefined
                    }
                  | undefined
                channels?:
                  | {
                      slack?: { [x: string]: unknown } | undefined
                      telegram?: { [x: string]: unknown } | undefined
                    }
                  | undefined
                configurations?:
                  | {
                      basicAuthEnabled?: boolean | undefined
                      basicAuthPassword?: boolean | undefined
                    }
                  | undefined
                links?:
                  | {
                      about?: string | undefined
                      contact?: string | undefined
                      privacy?: string | undefined
                      support?: string | undefined
                    }
                  | undefined
                locations?: { [x: string]: unknown }[] | undefined
                logo?: string | undefined
                name?: string | undefined
                otp?: string | undefined
                stripe_connected_account_id?: string | undefined
                stripe_country?: string | undefined
                stripe_currency?: string | undefined
                stripe_reserve_amount?: number | undefined
                support?:
                  | {
                      business_hours?: string | undefined
                      chat?: { type?: string | undefined; value?: string | undefined } | undefined
                      contact_number?: string | undefined
                      email?: string | undefined
                    }
                  | undefined
                supportChat?: { id?: string | undefined; name?: string | undefined } | undefined
                theme?:
                  | {
                      colors?:
                        | { primary?: string | undefined; secondary?: string | undefined }
                        | undefined
                    }
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/v1/realtime': {
      $get: {
        input: { header: { 'sec-websocket-protocol': string } }
        output: {}
        outputFormat: string
        status: 101
      }
    }
  } & {
    '/v1/reservations': {
      $get: {
        input: {
          query: {
            paginate_limit?: number | undefined
            paginate_page?: string | undefined
            paginate_enabled?: boolean | undefined
            sort_by?: string | undefined
            sort_order?: 'desc' | 'asc' | undefined
            'createdAt[$gte]'?: string | undefined
            'createdAt[$lte]'?: string | undefined
            'updatedAt[$gte]'?: string | undefined
            'updatedAt[$lte]'?: string | undefined
            include_chargestation?: boolean | undefined
            include_organization?: boolean | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/reservations/:id': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            include_chargestation?: boolean | undefined
            include_organization?: boolean | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $patch:
        | {
            input: { param: { id: string } } & {
              json: {
                connector?: number | undefined
                driver?: string | undefined
                endDate?: string | undefined
                evse?: number | undefined
              }
            }
            output: {
              message?: string | undefined
              ok?: boolean | undefined
              result?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              json: {
                connector?: number | undefined
                driver?: string | undefined
                endDate?: string | undefined
                evse?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/v1/tokens': {
      $get:
        | {
            input: {
              query: {
                paginate_limit?: number | undefined
                paginate_page?: string | undefined
                paginate_enabled?: boolean | undefined
                sort_by?: string | undefined
                sort_order?: 'desc' | 'asc' | undefined
                'createdAt[$gte]'?: string | undefined
                'createdAt[$lte]'?: string | undefined
                'updatedAt[$gte]'?: string | undefined
                'updatedAt[$lte]'?: string | undefined
                include_driver?: boolean | undefined
                include_organization?: boolean | undefined
              }
            }
            output: {
              message?: string | undefined
              ok?: boolean | undefined
              result?: { [x: string]: unknown }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                paginate_limit?: number | undefined
                paginate_page?: string | undefined
                paginate_enabled?: boolean | undefined
                sort_by?: string | undefined
                sort_order?: 'desc' | 'asc' | undefined
                'createdAt[$gte]'?: string | undefined
                'createdAt[$lte]'?: string | undefined
                'updatedAt[$gte]'?: string | undefined
                'updatedAt[$lte]'?: string | undefined
                include_driver?: boolean | undefined
                include_organization?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
      $post:
        | {
            input: {
              json: {
                active: boolean
                channel: 'physical' | 'slack' | 'telegram' | 'sms'
                driver: string
                physicalId: string
                type?: string | undefined
              }
            }
            output: {
              message?: string | undefined
              ok?: boolean | undefined
              result?: { [x: string]: unknown }[] | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                active: boolean
                channel: 'physical' | 'slack' | 'telegram' | 'sms'
                driver: string
                physicalId: string
                type?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/v1/tokens/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
      $get: {
        input: { param: { id: string } } & {
          query: {
            include_driver?: boolean | undefined
            include_organization?: boolean | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $patch:
        | {
            input: { param: { id: string } } & {
              json: {
                active?: boolean | undefined
                channel?: 'physical' | 'slack' | 'telegram' | 'sms' | undefined
                driver?: string | undefined
                physicalId?: string | undefined
                type?: string | undefined
              }
            }
            output: {
              message?: string | undefined
              ok?: boolean | undefined
              result?: { [x: string]: unknown }[] | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              json: {
                active?: boolean | undefined
                channel?: 'physical' | 'slack' | 'telegram' | 'sms' | undefined
                driver?: string | undefined
                physicalId?: string | undefined
                type?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/v1/transactions': {
      $get:
        | {
            input: {
              query: {
                status?: 'Started' | 'Ended' | undefined
                paginate_limit?: number | undefined
                paginate_page?: string | undefined
                paginate_enabled?: boolean | undefined
                sort_by?: string | undefined
                sort_order?: 'desc' | 'asc' | undefined
                'createdAt[$gte]'?: string | undefined
                'createdAt[$lte]'?: string | undefined
                'updatedAt[$gte]'?: string | undefined
                'updatedAt[$lte]'?: string | undefined
                include_chargestation?: boolean | undefined
                include_evse?: boolean | undefined
                include_connector?: boolean | undefined
                include_driver?: boolean | undefined
                include_token?: boolean | undefined
                include_reservation?: boolean | undefined
                include_organization?: boolean | undefined
                include_rate?: boolean | undefined
              }
            }
            output: {
              hasNext?: boolean | undefined
              hasPrevious?: boolean | undefined
              message?: string | undefined
              ok?: boolean | undefined
              result?: { [x: string]: unknown }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                status?: 'Started' | 'Ended' | undefined
                paginate_limit?: number | undefined
                paginate_page?: string | undefined
                paginate_enabled?: boolean | undefined
                sort_by?: string | undefined
                sort_order?: 'desc' | 'asc' | undefined
                'createdAt[$gte]'?: string | undefined
                'createdAt[$lte]'?: string | undefined
                'updatedAt[$gte]'?: string | undefined
                'updatedAt[$lte]'?: string | undefined
                include_chargestation?: boolean | undefined
                include_evse?: boolean | undefined
                include_connector?: boolean | undefined
                include_driver?: boolean | undefined
                include_token?: boolean | undefined
                include_reservation?: boolean | undefined
                include_organization?: boolean | undefined
                include_rate?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/v1/transactions/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                include_chargestation?: boolean | undefined
                include_evse?: boolean | undefined
                include_connector?: boolean | undefined
                include_driver?: boolean | undefined
                include_token?: boolean | undefined
                include_reservation?: boolean | undefined
                include_organization?: boolean | undefined
                include_rate?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                include_chargestation?: boolean | undefined
                include_evse?: boolean | undefined
                include_connector?: boolean | undefined
                include_driver?: boolean | undefined
                include_token?: boolean | undefined
                include_reservation?: boolean | undefined
                include_organization?: boolean | undefined
                include_rate?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/v1/transactions/:id/cost': {
      $get:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/v1/vehicles': {
      $get:
        | {
            input: {
              query: {
                active?: boolean | undefined
                paginate_limit?: number | undefined
                paginate_page?: string | undefined
                paginate_enabled?: boolean | undefined
                sort_by?: string | undefined
                sort_order?: 'desc' | 'asc' | undefined
                'createdAt[$gte]'?: string | undefined
                'createdAt[$lte]'?: string | undefined
                'updatedAt[$gte]'?: string | undefined
                'updatedAt[$lte]'?: string | undefined
                include_driver?: boolean | undefined
                include_token?: boolean | undefined
                include_organization?: boolean | undefined
              }
            }
            output: {
              message?: string | undefined
              ok?: boolean | undefined
              result?: { [x: string]: unknown }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                active?: boolean | undefined
                paginate_limit?: number | undefined
                paginate_page?: string | undefined
                paginate_enabled?: boolean | undefined
                sort_by?: string | undefined
                sort_order?: 'desc' | 'asc' | undefined
                'createdAt[$gte]'?: string | undefined
                'createdAt[$lte]'?: string | undefined
                'updatedAt[$gte]'?: string | undefined
                'updatedAt[$lte]'?: string | undefined
                include_driver?: boolean | undefined
                include_token?: boolean | undefined
                include_organization?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/v1/vehicles/:id': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            include_driver?: boolean | undefined
            include_token?: boolean | undefined
            include_organization?: boolean | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/vehicles/:id/battery': {
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/v1/vehicles/:id/charge': {
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
      $post:
        | {
            input: { param: { id: string } } & { json: { action: 'START' | 'STOP' } }
            output: {
              message?: string | undefined
              ok?: boolean | undefined
              result?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: { action: 'START' | 'STOP' } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/v1/vehicles/:id/location': {
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/v1/vehicles/:id/odometer': {
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  },
  '/'
>
export default routes
