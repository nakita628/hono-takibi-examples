type NameType = 'firstname' | 'surname' | 'fullname'
type IdType = 'VAT' | 'SSN'
type NumberValidation = { country: string; number: string }
type TextDto = { text?: (string | null) | undefined }
type LoremType = 'normal' | 'business'
type TextType = 'paragraphs' | 'words'
type TextActionType = 'Transform' | 'Replace'
type CaseType = 'LowerCase' | 'UpperCase' | 'SentenceCase' | 'TitleCase'
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/Card': {
      $get: {
        input: { query: { type?: string | undefined } } & {
          header: { 'X-Api-Key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Card/Types': {
      $get: {
        input: { header: { 'X-Api-Key'?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Finance/Countries': {
      $get: {
        input: { header: { 'X-Api-Key'?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Finance/CryptoAddress': {
      $get: {
        input: { query: { cryptoType?: string | undefined } } & {
          header: { 'X-Api-Key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Finance/CryptoAddress/Types': {
      $get: {
        input: { header: { 'X-Api-Key'?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Finance/Iban/:countryCode': {
      $get: {
        input: { param: { countryCode: string } } & { header: { 'X-Api-Key'?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Finance/Vat/Validator': {
      $post: {
        input: { query: { country: string; vat: string } } & {
          header: { 'X-Api-Key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Misc/Cultures': {
      $get: {
        input: { header: { 'X-Api-Key'?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Misc/Random-Address': {
      $get: {
        input: { query: { number: number; culture?: string | undefined } } & {
          header: { 'X-Api-Key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Name': {
      $get: {
        input: { query: { nameType: NameType; quantity: number } } & {
          header: { 'X-Api-Key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Name/BrandName': {
      $post: {
        input: { query: { startingWords: string } } & {
          header: { 'X-Api-Key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Name/BusinessName': {
      $post: {
        input: { query: { number: number; cultureCode?: string | undefined } } & {
          header: { 'X-Api-Key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Name/Cultures': {
      $get: {
        input: { header: { 'X-Api-Key'?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Name/Suggestions': {
      $get: {
        input: { query: { startingWords: string } } & {
          header: { 'X-Api-Key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Phone/Countries': {
      $get: {
        input: { header: { 'X-Api-Key'?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Phone/Generate': {
      $get: {
        input: { query: { CountryCode: string; Quantity: number } } & {
          header: { 'X-Api-Key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Phone/IMEI': {
      $get: {
        input: { query: { Quantity: number } } & { header: { 'X-Api-Key'?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Phone/Validate': {
      $get: {
        input: { query: { telephone: string; CountryCode?: string | undefined } } & {
          header: { 'X-Api-Key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/SocialNumber': {
      $get: {
        input: { header: { 'X-Api-Key'?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { query: { idType: IdType } } & { header: { 'X-Api-Key'?: string | undefined } } & {
          json: NumberValidation
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Text/Humanize': {
      $post: {
        input: { header: { 'X-Api-Key'?: string | undefined } } & { json: TextDto }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Text/LoremIpsum': {
      $get: {
        input: { query: { loremType: LoremType; type: TextType; number: number } } & {
          header: { 'X-Api-Key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Text/Password': {
      $get: {
        input: {
          query: { length: number; hasDigits: boolean; hasUppercase: boolean; hasSpecial: boolean }
        } & { header: { 'X-Api-Key'?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Text/Review': {
      $post: {
        input: { query: { product: string; quantity: number } } & {
          header: { 'X-Api-Key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Text/Transform': {
      $post: {
        input: {
          query: {
            textActionType: TextActionType
            caseType?: CaseType | undefined
            find?: string | undefined
            replace?: string | undefined
          }
        } & { header: { 'X-Api-Key'?: string | undefined } } & { json: TextDto }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
