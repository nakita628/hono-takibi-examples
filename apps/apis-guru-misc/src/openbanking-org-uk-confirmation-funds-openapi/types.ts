type OBFundsConfirmationConsent1 = {
  Data: {
    DebtorAccount: {
      Identification: string
      Name?: string | undefined
      SchemeName: string
      SecondaryIdentification?: string | undefined
    }
    ExpirationDateTime?: string | undefined
  }
}
type Links = {
  First?: string | undefined
  Last?: string | undefined
  Next?: string | undefined
  Prev?: string | undefined
  Self: string
}
type ISODateTime = string
type Meta = {
  FirstAvailableDateTime?: ISODateTime | undefined
  LastAvailableDateTime?: ISODateTime | undefined
  TotalPages?: number | undefined
}
type OBFundsConfirmationConsentResponse1 = {
  Data: {
    ConsentId: string
    CreationDateTime: string
    DebtorAccount: {
      Identification: string
      Name?: string | undefined
      SchemeName: string
      SecondaryIdentification?: string | undefined
    }
    ExpirationDateTime?: string | undefined
    Status: 'Authorised' | 'AwaitingAuthorisation' | 'Rejected' | 'Revoked'
    StatusUpdateDateTime: string
  }
  Links?: Links | undefined
  Meta?: Meta | undefined
}
type OBError1 = {
  ErrorCode: string
  Message: string
  Path?: string | undefined
  Url?: string | undefined
}
type OBErrorResponse1 = {
  Code: string
  Errors: OBError1[]
  Id?: string | undefined
  Message: string
}
type OBFundsConfirmation1 = {
  Data: {
    ConsentId: string
    InstructedAmount: { Amount: string; Currency: string }
    Reference: string
  }
}
type OBFundsConfirmationResponse1 = {
  Data: {
    ConsentId: string
    CreationDateTime: string
    FundsAvailable: boolean
    FundsConfirmationId: string
    InstructedAmount: { Amount: string; Currency: string }
    Reference: string
  }
  Links?: Links | undefined
  Meta?: Meta | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/funds-confirmation-consents': {
      $post:
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBFundsConfirmationConsent1 }
            output: OBFundsConfirmationConsentResponse1
            outputFormat: 'text'
            status: 201
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBFundsConfirmationConsent1 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBFundsConfirmationConsent1 }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBFundsConfirmationConsent1 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBFundsConfirmationConsent1 }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBFundsConfirmationConsent1 }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBFundsConfirmationConsent1 }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBFundsConfirmationConsent1 }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBFundsConfirmationConsent1 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/funds-confirmation-consents/:ConsentId': {
      $delete:
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
      $get:
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBFundsConfirmationConsentResponse1
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/funds-confirmations': {
      $post:
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBFundsConfirmation1 }
            output: OBFundsConfirmationResponse1
            outputFormat: 'text'
            status: 201
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBFundsConfirmation1 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBFundsConfirmation1 }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBFundsConfirmation1 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBFundsConfirmation1 }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBFundsConfirmation1 }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBFundsConfirmation1 }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBFundsConfirmation1 }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBFundsConfirmation1 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  },
  '/'
>
export default routes
