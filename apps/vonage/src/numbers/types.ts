type Country = string
type Ownednumber = {
  country?: Country | undefined
  features?: string[] | undefined
  messagesCallbackType?: string | undefined
  messagesCallbackValue?: string | undefined
  moHttpUrl?: string | undefined
  msisdn?: string | undefined
  type?: string | undefined
  voiceCallbackType?: string | undefined
  voiceCallbackValue?: string | undefined
}
type InboundNumbers = { count?: number | undefined; numbers?: Ownednumber[] | undefined }
type AccountUnauthorized = {
  'error-code'?: string | undefined
  'error-code-label'?: string | undefined
}
type NumberDetails = { country: Country; msisdn: string; target_api_key?: string | undefined }
type Response = { 'error-code'?: string | undefined; 'error-code-label'?: string | undefined }
type Unauthorized = { 'error-code'?: string | undefined; 'error-code-label'?: string | undefined }
type Response420 = { 'error-code'?: string | undefined; 'error-code-label'?: string | undefined }
type Availablenumber = {
  cost?: string | undefined
  country?: Country | undefined
  features?: string[] | undefined
  msisdn?: string | undefined
  type?: string | undefined
}
type AvailableNumbers = { count?: number | undefined; numbers?: Availablenumber[] | undefined }
type NumberDetailsUpdate = {
  app_id?: string | undefined
  country: Country
  messagesCallbackType?: 'app' | undefined
  messagesCallbackValue?: string | undefined
  moHttpUrl?: string | undefined
  moSmppSysType?: string | undefined
  msisdn: string
  voiceCallbackType?: 'sip' | 'tel' | 'app' | undefined
  voiceCallbackValue?: string | undefined
  voiceStatusCallback?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/account/numbers': {
      $get:
        | {
            input: {
              query: {
                application_id?: string | undefined
                has_application?: boolean | undefined
                country?: Country | undefined
                pattern?: string | undefined
                search_pattern?: 0 | 1 | 2 | undefined
                size?: number | undefined
                index?: number | undefined
              }
            }
            output: InboundNumbers
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                application_id?: string | undefined
                has_application?: boolean | undefined
                country?: Country | undefined
                pattern?: string | undefined
                search_pattern?: 0 | 1 | 2 | undefined
                size?: number | undefined
                index?: number | undefined
              }
            }
            output: InboundNumbers
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                application_id?: string | undefined
                has_application?: boolean | undefined
                country?: Country | undefined
                pattern?: string | undefined
                search_pattern?: 0 | 1 | 2 | undefined
                size?: number | undefined
                index?: number | undefined
              }
            }
            output: AccountUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                application_id?: string | undefined
                has_application?: boolean | undefined
                country?: Country | undefined
                pattern?: string | undefined
                search_pattern?: 0 | 1 | 2 | undefined
                size?: number | undefined
                index?: number | undefined
              }
            }
            output: AccountUnauthorized
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/number/buy': {
      $post:
        | {
            input: { json: NumberDetails } & { form: NumberDetails }
            output: Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: NumberDetails } & { form: NumberDetails }
            output: Response
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: NumberDetails } & { form: NumberDetails }
            output: Unauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: NumberDetails } & { form: NumberDetails }
            output: Unauthorized
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: NumberDetails } & { form: NumberDetails }
            output: Response420
            outputFormat: 'json'
            status: 420
          }
        | {
            input: { json: NumberDetails } & { form: NumberDetails }
            output: Response420
            outputFormat: 'text'
            status: 420
          }
    }
  } & {
    '/number/cancel': {
      $post:
        | {
            input: { json: NumberDetails } & { form: NumberDetails }
            output: Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: NumberDetails } & { form: NumberDetails }
            output: Response
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: NumberDetails } & { form: NumberDetails }
            output: Unauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: NumberDetails } & { form: NumberDetails }
            output: Unauthorized
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/number/search': {
      $get:
        | {
            input: {
              query: {
                country: Country
                type?: 'landline' | 'mobile-lvn' | 'landline-toll-free' | undefined
                pattern?: string | undefined
                search_pattern?: 0 | 1 | 2 | undefined
                features?:
                  | 'SMS'
                  | 'VOICE'
                  | 'SMS,VOICE'
                  | 'MMS'
                  | 'SMS,MMS'
                  | 'VOICE,MMS'
                  | 'SMS,MMS,VOICE'
                  | undefined
                size?: number | undefined
                index?: number | undefined
              }
            }
            output: AvailableNumbers
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                country: Country
                type?: 'landline' | 'mobile-lvn' | 'landline-toll-free' | undefined
                pattern?: string | undefined
                search_pattern?: 0 | 1 | 2 | undefined
                features?:
                  | 'SMS'
                  | 'VOICE'
                  | 'SMS,VOICE'
                  | 'MMS'
                  | 'SMS,MMS'
                  | 'VOICE,MMS'
                  | 'SMS,MMS,VOICE'
                  | undefined
                size?: number | undefined
                index?: number | undefined
              }
            }
            output: AvailableNumbers
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                country: Country
                type?: 'landline' | 'mobile-lvn' | 'landline-toll-free' | undefined
                pattern?: string | undefined
                search_pattern?: 0 | 1 | 2 | undefined
                features?:
                  | 'SMS'
                  | 'VOICE'
                  | 'SMS,VOICE'
                  | 'MMS'
                  | 'SMS,MMS'
                  | 'VOICE,MMS'
                  | 'SMS,MMS,VOICE'
                  | undefined
                size?: number | undefined
                index?: number | undefined
              }
            }
            output: AccountUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                country: Country
                type?: 'landline' | 'mobile-lvn' | 'landline-toll-free' | undefined
                pattern?: string | undefined
                search_pattern?: 0 | 1 | 2 | undefined
                features?:
                  | 'SMS'
                  | 'VOICE'
                  | 'SMS,VOICE'
                  | 'MMS'
                  | 'SMS,MMS'
                  | 'VOICE,MMS'
                  | 'SMS,MMS,VOICE'
                  | undefined
                size?: number | undefined
                index?: number | undefined
              }
            }
            output: AccountUnauthorized
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/number/update': {
      $post:
        | {
            input: { json: NumberDetailsUpdate } & { form: NumberDetailsUpdate }
            output: Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: NumberDetailsUpdate } & { form: NumberDetailsUpdate }
            output: Response
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: NumberDetailsUpdate } & { form: NumberDetailsUpdate }
            output: Unauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: NumberDetailsUpdate } & { form: NumberDetailsUpdate }
            output: Unauthorized
            outputFormat: 'text'
            status: 401
          }
    }
  },
  '/'
>
export default routes
