type PublicPropertyValidationRule = {
  ruleArguments: string[]
  ruleType:
    | 'AFTER_DATETIME_DURATION'
    | 'AFTER_DURATION'
    | 'ALPHANUMERIC'
    | 'BEFORE_DATETIME_DURATION'
    | 'BEFORE_DURATION'
    | 'DAYS_OF_WEEK'
    | 'DECIMAL'
    | 'DOMAIN'
    | 'EMAIL'
    | 'EMAIL_ALLOWED_DOMAINS'
    | 'EMAIL_BLOCKED_DOMAINS'
    | 'END_DATE'
    | 'END_DATETIME'
    | 'FORMAT'
    | 'MAX_LENGTH'
    | 'MAX_NUMBER'
    | 'MIN_LENGTH'
    | 'MIN_NUMBER'
    | 'PHONE_NUMBER_WITH_EXPLICIT_COUNTRY_CODE'
    | 'REGEX'
    | 'SPECIAL_CHARACTERS'
    | 'START_DATE'
    | 'START_DATETIME'
    | 'URL'
    | 'URL_ALLOWED_DOMAINS'
    | 'URL_BLOCKED_DOMAINS'
    | 'WHITESPACE'
  shouldApplyNormalization?: boolean | undefined
}
type PublicPropertyValidationRuleMap = {
  propertyName: string
  propertyValidationRules: PublicPropertyValidationRule[]
}
type CollectionResponsePublicPropertyValidationRuleMapNoPaging = {
  results: PublicPropertyValidationRuleMap[]
}
type ErrorDetail = {
  code?: string | undefined
  context?: { [x: string]: string[] } | undefined
  in?: string | undefined
  message: string
  subCategory?: string | undefined
}
type Error = {
  category: string
  context?: { [x: string]: string[] } | undefined
  correlationId: string
  errors?: ErrorDetail[] | undefined
  links?: { [x: string]: string } | undefined
  message: string
  subCategory?: string | undefined
}
type CollectionResponsePublicPropertyValidationRuleNoPaging = {
  results: PublicPropertyValidationRule[]
}
type PublicPropertyValidationRuleUpdate = {
  ruleArguments: string[]
  shouldApplyNormalization?: boolean | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/crm/property-validations/2026-09/:objectTypeId': {
      $get:
        | {
            input: { param: { objectTypeId: string } }
            output: CollectionResponsePublicPropertyValidationRuleMapNoPaging
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectTypeId: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/property-validations/2026-09/:objectTypeId/:propertyName': {
      $get:
        | {
            input: { param: { objectTypeId: string; propertyName: string } }
            output: CollectionResponsePublicPropertyValidationRuleNoPaging
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectTypeId: string; propertyName: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/property-validations/2026-09/:objectTypeId/:propertyName/rule-type/:ruleType': {
      $get:
        | {
            input: {
              param: {
                objectTypeId: string
                propertyName: string
                ruleType:
                  | 'AFTER_DATETIME_DURATION'
                  | 'AFTER_DURATION'
                  | 'ALPHANUMERIC'
                  | 'BEFORE_DATETIME_DURATION'
                  | 'BEFORE_DURATION'
                  | 'DAYS_OF_WEEK'
                  | 'DECIMAL'
                  | 'DOMAIN'
                  | 'EMAIL'
                  | 'EMAIL_ALLOWED_DOMAINS'
                  | 'EMAIL_BLOCKED_DOMAINS'
                  | 'END_DATE'
                  | 'END_DATETIME'
                  | 'FORMAT'
                  | 'MAX_LENGTH'
                  | 'MAX_NUMBER'
                  | 'MIN_LENGTH'
                  | 'MIN_NUMBER'
                  | 'PHONE_NUMBER_WITH_EXPLICIT_COUNTRY_CODE'
                  | 'REGEX'
                  | 'SPECIAL_CHARACTERS'
                  | 'START_DATE'
                  | 'START_DATETIME'
                  | 'URL'
                  | 'URL_ALLOWED_DOMAINS'
                  | 'URL_BLOCKED_DOMAINS'
                  | 'WHITESPACE'
              }
            }
            output: PublicPropertyValidationRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                objectTypeId: string
                propertyName: string
                ruleType:
                  | 'AFTER_DATETIME_DURATION'
                  | 'AFTER_DURATION'
                  | 'ALPHANUMERIC'
                  | 'BEFORE_DATETIME_DURATION'
                  | 'BEFORE_DURATION'
                  | 'DAYS_OF_WEEK'
                  | 'DECIMAL'
                  | 'DOMAIN'
                  | 'EMAIL'
                  | 'EMAIL_ALLOWED_DOMAINS'
                  | 'EMAIL_BLOCKED_DOMAINS'
                  | 'END_DATE'
                  | 'END_DATETIME'
                  | 'FORMAT'
                  | 'MAX_LENGTH'
                  | 'MAX_NUMBER'
                  | 'MIN_LENGTH'
                  | 'MIN_NUMBER'
                  | 'PHONE_NUMBER_WITH_EXPLICIT_COUNTRY_CODE'
                  | 'REGEX'
                  | 'SPECIAL_CHARACTERS'
                  | 'START_DATE'
                  | 'START_DATETIME'
                  | 'URL'
                  | 'URL_ALLOWED_DOMAINS'
                  | 'URL_BLOCKED_DOMAINS'
                  | 'WHITESPACE'
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: {
              param: {
                objectTypeId: string
                propertyName: string
                ruleType:
                  | 'AFTER_DATETIME_DURATION'
                  | 'AFTER_DURATION'
                  | 'ALPHANUMERIC'
                  | 'BEFORE_DATETIME_DURATION'
                  | 'BEFORE_DURATION'
                  | 'DAYS_OF_WEEK'
                  | 'DECIMAL'
                  | 'DOMAIN'
                  | 'EMAIL'
                  | 'EMAIL_ALLOWED_DOMAINS'
                  | 'EMAIL_BLOCKED_DOMAINS'
                  | 'END_DATE'
                  | 'END_DATETIME'
                  | 'FORMAT'
                  | 'MAX_LENGTH'
                  | 'MAX_NUMBER'
                  | 'MIN_LENGTH'
                  | 'MIN_NUMBER'
                  | 'PHONE_NUMBER_WITH_EXPLICIT_COUNTRY_CODE'
                  | 'REGEX'
                  | 'SPECIAL_CHARACTERS'
                  | 'START_DATE'
                  | 'START_DATETIME'
                  | 'URL'
                  | 'URL_ALLOWED_DOMAINS'
                  | 'URL_BLOCKED_DOMAINS'
                  | 'WHITESPACE'
              }
            } & { json: PublicPropertyValidationRuleUpdate }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: {
                objectTypeId: string
                propertyName: string
                ruleType:
                  | 'AFTER_DATETIME_DURATION'
                  | 'AFTER_DURATION'
                  | 'ALPHANUMERIC'
                  | 'BEFORE_DATETIME_DURATION'
                  | 'BEFORE_DURATION'
                  | 'DAYS_OF_WEEK'
                  | 'DECIMAL'
                  | 'DOMAIN'
                  | 'EMAIL'
                  | 'EMAIL_ALLOWED_DOMAINS'
                  | 'EMAIL_BLOCKED_DOMAINS'
                  | 'END_DATE'
                  | 'END_DATETIME'
                  | 'FORMAT'
                  | 'MAX_LENGTH'
                  | 'MAX_NUMBER'
                  | 'MIN_LENGTH'
                  | 'MIN_NUMBER'
                  | 'PHONE_NUMBER_WITH_EXPLICIT_COUNTRY_CODE'
                  | 'REGEX'
                  | 'SPECIAL_CHARACTERS'
                  | 'START_DATE'
                  | 'START_DATETIME'
                  | 'URL'
                  | 'URL_ALLOWED_DOMAINS'
                  | 'URL_BLOCKED_DOMAINS'
                  | 'WHITESPACE'
              }
            } & { json: PublicPropertyValidationRuleUpdate }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
