type TextData = string
type WiFiData = {
  hidden?: boolean | undefined
  password?: string | undefined
  security?: {} | undefined
  ssid: string
}
type Recipient = string
type EmailData = {
  bcc?: Recipient | Recipient[] | undefined
  body?: string | undefined
  cc?: Recipient | Recipient[] | undefined
  subject?: string | undefined
  to: Recipient | Recipient[]
}
type VCardData = {
  birthday?: string | undefined
  cell_phone?: string | string[] | undefined
  city?: string | undefined
  country?: string | undefined
  display_name?: string | undefined
  email?: string | string[] | undefined
  encoding?: 'vcard' | undefined
  fax?: string | string[] | undefined
  first_name?: string | undefined
  home_phone?: string | string[] | undefined
  last_name: string
  latitude?: number | undefined
  longitude?: number | undefined
  memo?: string | undefined
  nickname?: string | undefined
  organization?: string | undefined
  phone?: string | string[] | undefined
  photo?: string | string[] | undefined
  po_box?: string | undefined
  region?: string | undefined
  revision?: string | undefined
  source?: string | undefined
  street?: string | undefined
  title?: string | string[] | undefined
  url?: string | string[] | undefined
  videophone?: string | string[] | undefined
  work_phone?: string | string[] | undefined
  zip_code?: string | undefined
}
type MeCardData = {
  birthday?: string | undefined
  city?: string | undefined
  country?: string | undefined
  email?: string | string[] | undefined
  encoding?: 'mecard' | undefined
  first_name?: string | undefined
  house_number?: string | undefined
  last_name: string
  memo?: string | undefined
  nickname?: string | undefined
  phone?: string | string[] | undefined
  po_box?: string | undefined
  prefecture?: string | undefined
  reading?: string | undefined
  room_number?: string | undefined
  url?: string | string[] | undefined
  videophone?: string | string[] | undefined
  zip_code?: string | undefined
}
type ContactData = VCardData | MeCardData
type CryptoPaymentData = {
  address: string
  amount?: number | undefined
  currency: {}
  label?: string | undefined
  message?: string | undefined
}
type PhoneData = { phone: string }
type SMSData = { message?: string | undefined; to: string | string[] }
type GeolocationData = { format?: {} | undefined; latitude: number; longitude: number }
type Icon = {}
type Storage = string
type URL = string
type GradientStop = { color: string; offset: number }
type LinearGradient = {
  angle?: number | undefined
  stops?: GradientStop[] | undefined
  type?: 'linear' | undefined
}
type RadialGradient = { stops?: GradientStop[] | undefined; type?: 'radial' | undefined }
type Gradient = LinearGradient | RadialGradient
type AutoQRCode = {
  data:
    | TextData
    | WiFiData
    | EmailData
    | ContactData
    | CryptoPaymentData
    | PhoneData
    | SMSData
    | GeolocationData
  image?: { modules?: boolean | undefined; uri: Icon | Storage | URL } | undefined
  output?: { filename?: string | undefined; format?: {} | undefined } | undefined
  size?:
    | {
        error_correction?: {} | undefined
        quiet_zone?: number | undefined
        width?: number | undefined
      }
    | undefined
  style?:
    | {
        background?: { color?: string | undefined } | undefined
        inner_eye?: { color?: string | undefined; shape?: {} | undefined } | undefined
        module?: { color?: string | Gradient | undefined; shape?: {} | undefined } | undefined
        outer_eye?: { color?: string | undefined; shape?: {} | undefined } | undefined
      }
    | undefined
}
type AutoQRCodeBatch = {
  items: AutoQRCode[]
  output?: { filename?: string | undefined; format?: {} | undefined } | undefined
}
type ValidationError = { loc: (string | number)[]; msg: string; type: string }
type HTTPValidationError = { detail?: ValidationError[] | undefined }
type GenericError = { detail: string }
type ImageMetadata = { created: string; id: string; size: number; source: string }
type AutoQRCodeMetadata = {
  data:
    | TextData
    | WiFiData
    | EmailData
    | ContactData
    | CryptoPaymentData
    | PhoneData
    | SMSData
    | GeolocationData
  image?: { modules?: boolean | undefined } | undefined
  output?: { filename?: string | undefined; format?: {} | undefined } | undefined
  size?: { quiet_zone?: number | undefined; width?: number | undefined } | undefined
  style?:
    | {
        background?: { color?: string | undefined } | undefined
        inner_eye?: { color?: string | undefined; shape?: {} | undefined } | undefined
        module?: { color?: string | Gradient | undefined; shape?: {} | undefined } | undefined
        outer_eye?: { color?: string | undefined; shape?: {} | undefined } | undefined
      }
    | undefined
}
type AutoQRCodeMultipartBody = { image: File; metadata: AutoQRCodeMetadata }
type ContactQRCode = {
  data: {}
  image?: { modules?: boolean | undefined; uri: Icon | Storage | URL } | undefined
  output?: { filename?: string | undefined; format?: {} | undefined } | undefined
  size?:
    | {
        error_correction?: {} | undefined
        quiet_zone?: number | undefined
        width?: number | undefined
      }
    | undefined
  style?:
    | {
        background?: { color?: string | undefined } | undefined
        inner_eye?: { color?: string | undefined; shape?: {} | undefined } | undefined
        module?: { color?: string | Gradient | undefined; shape?: {} | undefined } | undefined
        outer_eye?: { color?: string | undefined; shape?: {} | undefined } | undefined
      }
    | undefined
}
type ContactQRCodeMetadata = {
  data: {}
  image?: { modules?: boolean | undefined } | undefined
  output?: { filename?: string | undefined; format?: {} | undefined } | undefined
  size?: { quiet_zone?: number | undefined; width?: number | undefined } | undefined
  style?:
    | {
        background?: { color?: string | undefined } | undefined
        inner_eye?: { color?: string | undefined; shape?: {} | undefined } | undefined
        module?: { color?: string | Gradient | undefined; shape?: {} | undefined } | undefined
        outer_eye?: { color?: string | undefined; shape?: {} | undefined } | undefined
      }
    | undefined
}
type ContactQRCodeMultipartBody = { image: File; metadata: ContactQRCodeMetadata }
type CryptoPaymentQRCode = {
  data: {
    address: string
    amount?: number | undefined
    currency: {}
    label?: string | undefined
    message?: string | undefined
  }
  image?: { modules?: boolean | undefined; uri: Icon | Storage | URL } | undefined
  output?: { filename?: string | undefined; format?: {} | undefined } | undefined
  size?:
    | {
        error_correction?: {} | undefined
        quiet_zone?: number | undefined
        width?: number | undefined
      }
    | undefined
  style?:
    | {
        background?: { color?: string | undefined } | undefined
        inner_eye?: { color?: string | undefined; shape?: {} | undefined } | undefined
        module?: { color?: string | Gradient | undefined; shape?: {} | undefined } | undefined
        outer_eye?: { color?: string | undefined; shape?: {} | undefined } | undefined
      }
    | undefined
}
type CryptoPaymentQRCodeMetadata = {
  data: {
    address: string
    amount?: number | undefined
    currency: {}
    label?: string | undefined
    message?: string | undefined
  }
  image?: { modules?: boolean | undefined } | undefined
  output?: { filename?: string | undefined; format?: {} | undefined } | undefined
  size?: { quiet_zone?: number | undefined; width?: number | undefined } | undefined
  style?:
    | {
        background?: { color?: string | undefined } | undefined
        inner_eye?: { color?: string | undefined; shape?: {} | undefined } | undefined
        module?: { color?: string | Gradient | undefined; shape?: {} | undefined } | undefined
        outer_eye?: { color?: string | undefined; shape?: {} | undefined } | undefined
      }
    | undefined
}
type CryptoPaymentQRCodeMultipartBody = { image: File; metadata: CryptoPaymentQRCodeMetadata }
type EmailQRCode = {
  data: {
    bcc?: Recipient | Recipient[] | undefined
    body?: string | undefined
    cc?: Recipient | Recipient[] | undefined
    subject?: string | undefined
    to: Recipient | Recipient[]
  }
  image?: { modules?: boolean | undefined; uri: Icon | Storage | URL } | undefined
  output?: { filename?: string | undefined; format?: {} | undefined } | undefined
  size?:
    | {
        error_correction?: {} | undefined
        quiet_zone?: number | undefined
        width?: number | undefined
      }
    | undefined
  style?:
    | {
        background?: { color?: string | undefined } | undefined
        inner_eye?: { color?: string | undefined; shape?: {} | undefined } | undefined
        module?: { color?: string | Gradient | undefined; shape?: {} | undefined } | undefined
        outer_eye?: { color?: string | undefined; shape?: {} | undefined } | undefined
      }
    | undefined
}
type EmailQRCodeMetadata = {
  data: {
    bcc?: Recipient | Recipient[] | undefined
    body?: string | undefined
    cc?: Recipient | Recipient[] | undefined
    subject?: string | undefined
    to: Recipient | Recipient[]
  }
  image?: { modules?: boolean | undefined } | undefined
  output?: { filename?: string | undefined; format?: {} | undefined } | undefined
  size?: { quiet_zone?: number | undefined; width?: number | undefined } | undefined
  style?:
    | {
        background?: { color?: string | undefined } | undefined
        inner_eye?: { color?: string | undefined; shape?: {} | undefined } | undefined
        module?: { color?: string | Gradient | undefined; shape?: {} | undefined } | undefined
        outer_eye?: { color?: string | undefined; shape?: {} | undefined } | undefined
      }
    | undefined
}
type EmailQRCodeMultipartBody = { image: File; metadata: EmailQRCodeMetadata }
type GeolocationQRCode = {
  data: { format?: {} | undefined; latitude: number; longitude: number }
  image?: { modules?: boolean | undefined; uri: Icon | Storage | URL } | undefined
  output?: { filename?: string | undefined; format?: {} | undefined } | undefined
  size?:
    | {
        error_correction?: {} | undefined
        quiet_zone?: number | undefined
        width?: number | undefined
      }
    | undefined
  style?:
    | {
        background?: { color?: string | undefined } | undefined
        inner_eye?: { color?: string | undefined; shape?: {} | undefined } | undefined
        module?: { color?: string | Gradient | undefined; shape?: {} | undefined } | undefined
        outer_eye?: { color?: string | undefined; shape?: {} | undefined } | undefined
      }
    | undefined
}
type GeolocationQRCodeMetadata = {
  data: { format?: {} | undefined; latitude: number; longitude: number }
  image?: { modules?: boolean | undefined } | undefined
  output?: { filename?: string | undefined; format?: {} | undefined } | undefined
  size?: { quiet_zone?: number | undefined; width?: number | undefined } | undefined
  style?:
    | {
        background?: { color?: string | undefined } | undefined
        inner_eye?: { color?: string | undefined; shape?: {} | undefined } | undefined
        module?: { color?: string | Gradient | undefined; shape?: {} | undefined } | undefined
        outer_eye?: { color?: string | undefined; shape?: {} | undefined } | undefined
      }
    | undefined
}
type GeolocationQRCodeMultipartBody = { image: File; metadata: GeolocationQRCodeMetadata }
type PhoneQRCode = {
  data: { phone: string }
  image?: { modules?: boolean | undefined; uri: Icon | Storage | URL } | undefined
  output?: { filename?: string | undefined; format?: {} | undefined } | undefined
  size?:
    | {
        error_correction?: {} | undefined
        quiet_zone?: number | undefined
        width?: number | undefined
      }
    | undefined
  style?:
    | {
        background?: { color?: string | undefined } | undefined
        inner_eye?: { color?: string | undefined; shape?: {} | undefined } | undefined
        module?: { color?: string | Gradient | undefined; shape?: {} | undefined } | undefined
        outer_eye?: { color?: string | undefined; shape?: {} | undefined } | undefined
      }
    | undefined
}
type PhoneQRCodeMetadata = {
  data: { phone: string }
  image?: { modules?: boolean | undefined } | undefined
  output?: { filename?: string | undefined; format?: {} | undefined } | undefined
  size?: { quiet_zone?: number | undefined; width?: number | undefined } | undefined
  style?:
    | {
        background?: { color?: string | undefined } | undefined
        inner_eye?: { color?: string | undefined; shape?: {} | undefined } | undefined
        module?: { color?: string | Gradient | undefined; shape?: {} | undefined } | undefined
        outer_eye?: { color?: string | undefined; shape?: {} | undefined } | undefined
      }
    | undefined
}
type PhoneQRCodeMultipartBody = { image: File; metadata: PhoneQRCodeMetadata }
type SMSQRCode = {
  data: { message?: string | undefined; to: string | string[] }
  image?: { modules?: boolean | undefined; uri: Icon | Storage | URL } | undefined
  output?: { filename?: string | undefined; format?: {} | undefined } | undefined
  size?:
    | {
        error_correction?: {} | undefined
        quiet_zone?: number | undefined
        width?: number | undefined
      }
    | undefined
  style?:
    | {
        background?: { color?: string | undefined } | undefined
        inner_eye?: { color?: string | undefined; shape?: {} | undefined } | undefined
        module?: { color?: string | Gradient | undefined; shape?: {} | undefined } | undefined
        outer_eye?: { color?: string | undefined; shape?: {} | undefined } | undefined
      }
    | undefined
}
type SMSQRCodeMetadata = {
  data: { message?: string | undefined; to: string | string[] }
  image?: { modules?: boolean | undefined } | undefined
  output?: { filename?: string | undefined; format?: {} | undefined } | undefined
  size?: { quiet_zone?: number | undefined; width?: number | undefined } | undefined
  style?:
    | {
        background?: { color?: string | undefined } | undefined
        inner_eye?: { color?: string | undefined; shape?: {} | undefined } | undefined
        module?: { color?: string | Gradient | undefined; shape?: {} | undefined } | undefined
        outer_eye?: { color?: string | undefined; shape?: {} | undefined } | undefined
      }
    | undefined
}
type SMSQRCodeMultipartBody = { image: File; metadata: SMSQRCodeMetadata }
type TextQRCode = {
  data: {}
  image?: { modules?: boolean | undefined; uri: Icon | Storage | URL } | undefined
  output?: { filename?: string | undefined; format?: {} | undefined } | undefined
  size?:
    | {
        error_correction?: {} | undefined
        quiet_zone?: number | undefined
        width?: number | undefined
      }
    | undefined
  style?:
    | {
        background?: { color?: string | undefined } | undefined
        inner_eye?: { color?: string | undefined; shape?: {} | undefined } | undefined
        module?: { color?: string | Gradient | undefined; shape?: {} | undefined } | undefined
        outer_eye?: { color?: string | undefined; shape?: {} | undefined } | undefined
      }
    | undefined
}
type TextQRCodeMetadata = {
  data: {}
  image?: { modules?: boolean | undefined } | undefined
  output?: { filename?: string | undefined; format?: {} | undefined } | undefined
  size?: { quiet_zone?: number | undefined; width?: number | undefined } | undefined
  style?:
    | {
        background?: { color?: string | undefined } | undefined
        inner_eye?: { color?: string | undefined; shape?: {} | undefined } | undefined
        module?: { color?: string | Gradient | undefined; shape?: {} | undefined } | undefined
        outer_eye?: { color?: string | undefined; shape?: {} | undefined } | undefined
      }
    | undefined
}
type TextQRCodeMultipartBody = { image: File; metadata: TextQRCodeMetadata }
type WiFiQRCode = {
  data: {
    hidden?: boolean | undefined
    password?: string | undefined
    security?: {} | undefined
    ssid: string
  }
  image?: { modules?: boolean | undefined; uri: Icon | Storage | URL } | undefined
  output?: { filename?: string | undefined; format?: {} | undefined } | undefined
  size?:
    | {
        error_correction?: {} | undefined
        quiet_zone?: number | undefined
        width?: number | undefined
      }
    | undefined
  style?:
    | {
        background?: { color?: string | undefined } | undefined
        inner_eye?: { color?: string | undefined; shape?: {} | undefined } | undefined
        module?: { color?: string | Gradient | undefined; shape?: {} | undefined } | undefined
        outer_eye?: { color?: string | undefined; shape?: {} | undefined } | undefined
      }
    | undefined
}
type WiFiQRCodeMetadata = {
  data: {
    hidden?: boolean | undefined
    password?: string | undefined
    security?: {} | undefined
    ssid: string
  }
  image?: { modules?: boolean | undefined } | undefined
  output?: { filename?: string | undefined; format?: {} | undefined } | undefined
  size?: { quiet_zone?: number | undefined; width?: number | undefined } | undefined
  style?:
    | {
        background?: { color?: string | undefined } | undefined
        inner_eye?: { color?: string | undefined; shape?: {} | undefined } | undefined
        module?: { color?: string | Gradient | undefined; shape?: {} | undefined } | undefined
        outer_eye?: { color?: string | undefined; shape?: {} | undefined } | undefined
      }
    | undefined
}
type WiFiQRCodeMultipartBody = { image: File; metadata: WiFiQRCodeMetadata }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/batch/qrcode': {
      $post:
        | { input: { json: AutoQRCodeBatch }; output: File; outputFormat: 'text'; status: 200 }
        | { input: { json: AutoQRCodeBatch }; output: File; outputFormat: 'text'; status: 200 }
        | {
            input: { json: AutoQRCodeBatch }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: AutoQRCodeBatch }
            output: GenericError
            outputFormat: 'json'
            status: 424
          }
        | {
            input: { json: AutoQRCodeBatch }
            output: 'Internal Server Error'
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/images': {
      $get:
        | { input: {}; output: ImageMetadata[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: 'Internal Server Error'; outputFormat: 'text'; status: 500 }
      $post:
        | {
            input: { form: { image: File } }
            output: ImageMetadata
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: { image: File } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { form: { image: File } }
            output: 'Internal Server Error'
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/images/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: GenericError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } }
            output: 'Internal Server Error'
            outputFormat: 'text'
            status: 500
          }
      $get:
        | {
            input: { param: { id: string } }
            output: ImageMetadata
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: GenericError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } }
            output: 'Internal Server Error'
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/qrcode': {
      $post:
        | {
            input: { json: AutoQRCode } & { form: AutoQRCodeMultipartBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: AutoQRCode } & { form: AutoQRCodeMultipartBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: AutoQRCode } & { form: AutoQRCodeMultipartBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: AutoQRCode } & { form: AutoQRCodeMultipartBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: AutoQRCode } & { form: AutoQRCodeMultipartBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: AutoQRCode } & { form: AutoQRCodeMultipartBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: AutoQRCode } & { form: AutoQRCodeMultipartBody }
            output: GenericError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AutoQRCode } & { form: AutoQRCodeMultipartBody }
            output: GenericError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { json: AutoQRCode } & { form: AutoQRCodeMultipartBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: AutoQRCode } & { form: AutoQRCodeMultipartBody }
            output: GenericError
            outputFormat: 'json'
            status: 424
          }
        | {
            input: { json: AutoQRCode } & { form: AutoQRCodeMultipartBody }
            output: 'Internal Server Error'
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/qrcode/contact': {
      $post:
        | {
            input: { json: ContactQRCode } & { form: ContactQRCodeMultipartBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ContactQRCode } & { form: ContactQRCodeMultipartBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ContactQRCode } & { form: ContactQRCodeMultipartBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ContactQRCode } & { form: ContactQRCodeMultipartBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ContactQRCode } & { form: ContactQRCodeMultipartBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ContactQRCode } & { form: ContactQRCodeMultipartBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ContactQRCode } & { form: ContactQRCodeMultipartBody }
            output: GenericError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ContactQRCode } & { form: ContactQRCodeMultipartBody }
            output: GenericError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { json: ContactQRCode } & { form: ContactQRCodeMultipartBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: ContactQRCode } & { form: ContactQRCodeMultipartBody }
            output: GenericError
            outputFormat: 'json'
            status: 424
          }
        | {
            input: { json: ContactQRCode } & { form: ContactQRCodeMultipartBody }
            output: 'Internal Server Error'
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/qrcode/crypto': {
      $post:
        | {
            input: { json: CryptoPaymentQRCode } & { form: CryptoPaymentQRCodeMultipartBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: CryptoPaymentQRCode } & { form: CryptoPaymentQRCodeMultipartBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: CryptoPaymentQRCode } & { form: CryptoPaymentQRCodeMultipartBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: CryptoPaymentQRCode } & { form: CryptoPaymentQRCodeMultipartBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: CryptoPaymentQRCode } & { form: CryptoPaymentQRCodeMultipartBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: CryptoPaymentQRCode } & { form: CryptoPaymentQRCodeMultipartBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: CryptoPaymentQRCode } & { form: CryptoPaymentQRCodeMultipartBody }
            output: GenericError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CryptoPaymentQRCode } & { form: CryptoPaymentQRCodeMultipartBody }
            output: GenericError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { json: CryptoPaymentQRCode } & { form: CryptoPaymentQRCodeMultipartBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: CryptoPaymentQRCode } & { form: CryptoPaymentQRCodeMultipartBody }
            output: GenericError
            outputFormat: 'json'
            status: 424
          }
        | {
            input: { json: CryptoPaymentQRCode } & { form: CryptoPaymentQRCodeMultipartBody }
            output: 'Internal Server Error'
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/qrcode/email': {
      $post:
        | {
            input: { json: EmailQRCode } & { form: EmailQRCodeMultipartBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: EmailQRCode } & { form: EmailQRCodeMultipartBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: EmailQRCode } & { form: EmailQRCodeMultipartBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: EmailQRCode } & { form: EmailQRCodeMultipartBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: EmailQRCode } & { form: EmailQRCodeMultipartBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: EmailQRCode } & { form: EmailQRCodeMultipartBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: EmailQRCode } & { form: EmailQRCodeMultipartBody }
            output: GenericError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: EmailQRCode } & { form: EmailQRCodeMultipartBody }
            output: GenericError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { json: EmailQRCode } & { form: EmailQRCodeMultipartBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: EmailQRCode } & { form: EmailQRCodeMultipartBody }
            output: GenericError
            outputFormat: 'json'
            status: 424
          }
        | {
            input: { json: EmailQRCode } & { form: EmailQRCodeMultipartBody }
            output: 'Internal Server Error'
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/qrcode/geo': {
      $post:
        | {
            input: { json: GeolocationQRCode } & { form: GeolocationQRCodeMultipartBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: GeolocationQRCode } & { form: GeolocationQRCodeMultipartBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: GeolocationQRCode } & { form: GeolocationQRCodeMultipartBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: GeolocationQRCode } & { form: GeolocationQRCodeMultipartBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: GeolocationQRCode } & { form: GeolocationQRCodeMultipartBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: GeolocationQRCode } & { form: GeolocationQRCodeMultipartBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: GeolocationQRCode } & { form: GeolocationQRCodeMultipartBody }
            output: GenericError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: GeolocationQRCode } & { form: GeolocationQRCodeMultipartBody }
            output: GenericError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { json: GeolocationQRCode } & { form: GeolocationQRCodeMultipartBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: GeolocationQRCode } & { form: GeolocationQRCodeMultipartBody }
            output: GenericError
            outputFormat: 'json'
            status: 424
          }
        | {
            input: { json: GeolocationQRCode } & { form: GeolocationQRCodeMultipartBody }
            output: 'Internal Server Error'
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/qrcode/phone': {
      $post:
        | {
            input: { json: PhoneQRCode } & { form: PhoneQRCodeMultipartBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: PhoneQRCode } & { form: PhoneQRCodeMultipartBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: PhoneQRCode } & { form: PhoneQRCodeMultipartBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: PhoneQRCode } & { form: PhoneQRCodeMultipartBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: PhoneQRCode } & { form: PhoneQRCodeMultipartBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: PhoneQRCode } & { form: PhoneQRCodeMultipartBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: PhoneQRCode } & { form: PhoneQRCodeMultipartBody }
            output: GenericError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PhoneQRCode } & { form: PhoneQRCodeMultipartBody }
            output: GenericError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { json: PhoneQRCode } & { form: PhoneQRCodeMultipartBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: PhoneQRCode } & { form: PhoneQRCodeMultipartBody }
            output: GenericError
            outputFormat: 'json'
            status: 424
          }
        | {
            input: { json: PhoneQRCode } & { form: PhoneQRCodeMultipartBody }
            output: 'Internal Server Error'
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/qrcode/sms': {
      $post:
        | {
            input: { json: SMSQRCode } & { form: SMSQRCodeMultipartBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: SMSQRCode } & { form: SMSQRCodeMultipartBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: SMSQRCode } & { form: SMSQRCodeMultipartBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: SMSQRCode } & { form: SMSQRCodeMultipartBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: SMSQRCode } & { form: SMSQRCodeMultipartBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: SMSQRCode } & { form: SMSQRCodeMultipartBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: SMSQRCode } & { form: SMSQRCodeMultipartBody }
            output: GenericError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SMSQRCode } & { form: SMSQRCodeMultipartBody }
            output: GenericError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { json: SMSQRCode } & { form: SMSQRCodeMultipartBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: SMSQRCode } & { form: SMSQRCodeMultipartBody }
            output: GenericError
            outputFormat: 'json'
            status: 424
          }
        | {
            input: { json: SMSQRCode } & { form: SMSQRCodeMultipartBody }
            output: 'Internal Server Error'
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/qrcode/text': {
      $post:
        | {
            input: { json: TextQRCode } & { form: TextQRCodeMultipartBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: TextQRCode } & { form: TextQRCodeMultipartBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: TextQRCode } & { form: TextQRCodeMultipartBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: TextQRCode } & { form: TextQRCodeMultipartBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: TextQRCode } & { form: TextQRCodeMultipartBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: TextQRCode } & { form: TextQRCodeMultipartBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: TextQRCode } & { form: TextQRCodeMultipartBody }
            output: GenericError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: TextQRCode } & { form: TextQRCodeMultipartBody }
            output: GenericError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { json: TextQRCode } & { form: TextQRCodeMultipartBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: TextQRCode } & { form: TextQRCodeMultipartBody }
            output: GenericError
            outputFormat: 'json'
            status: 424
          }
        | {
            input: { json: TextQRCode } & { form: TextQRCodeMultipartBody }
            output: 'Internal Server Error'
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/qrcode/wifi': {
      $post:
        | {
            input: { json: WiFiQRCode } & { form: WiFiQRCodeMultipartBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: WiFiQRCode } & { form: WiFiQRCodeMultipartBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: WiFiQRCode } & { form: WiFiQRCodeMultipartBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: WiFiQRCode } & { form: WiFiQRCodeMultipartBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: WiFiQRCode } & { form: WiFiQRCodeMultipartBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: WiFiQRCode } & { form: WiFiQRCodeMultipartBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: WiFiQRCode } & { form: WiFiQRCodeMultipartBody }
            output: GenericError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: WiFiQRCode } & { form: WiFiQRCodeMultipartBody }
            output: GenericError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { json: WiFiQRCode } & { form: WiFiQRCodeMultipartBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: WiFiQRCode } & { form: WiFiQRCodeMultipartBody }
            output: GenericError
            outputFormat: 'json'
            status: 424
          }
        | {
            input: { json: WiFiQRCode } & { form: WiFiQRCodeMultipartBody }
            output: 'Internal Server Error'
            outputFormat: 'text'
            status: 500
          }
    }
  },
  '/'
>
export default routes
