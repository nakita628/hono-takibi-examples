type PushUri = {
  action?: string | undefined
  clientid?: string | undefined
  digilockerid?: number | undefined
  docid?: string | undefined
  hmac?: File | undefined
  issuedate?: string | undefined
  ts?: string | undefined
  uri?: string | undefined
  validfrom?: number | undefined
  validto?: string | undefined
}
type VerifyAccount = {
  clientid?: string | undefined
  hmac?: File | undefined
  mobile?: number | undefined
  ts?: string | undefined
  uid?: number | undefined
}
type VerifyAccountResponse = { digilockerid: string; registered: string }
type DeviceAuthorizationCode = {
  client_id?: string | undefined
  dl_mobile?: number | undefined
  dl_username?: string | undefined
  response_type?: string | undefined
}
type DeviceAuthorizationCodeResponse = {
  device_code: string
  dl_masked_email: string
  dl_masked_mobile: number
  expires_in: number
}
type ResponseOne = { error?: string | undefined; error_description?: string | undefined }
type ResponseTwo = { error?: string | undefined; error_description?: string | undefined }
type ResponseThree = { error?: string | undefined; error_description?: string | undefined }
type ResponseFour = { error?: string | undefined; error_description?: string | undefined }
type ResponseFive = { error?: string | undefined; error_description?: string | undefined }
type ResponseSix = { error?: string | undefined; error_description?: string | undefined }
type FileUpload = { 'Content-Type'?: string | undefined }
type FileUploadResponse = { details?: { Path: string; size: string } | undefined }
type Response3 = { error?: string | undefined; error_description?: string | undefined }
type Response4 = { error?: string | undefined; error_description?: string | undefined }
type Response5 = { error?: string | undefined; error_description?: string | undefined }
type Response6 = { error?: string | undefined; error_description?: string | undefined }
type Response1 = { error?: string | undefined; error_description?: string | undefined }
type Response2 = { error?: string | undefined; error_description?: string | undefined }
type ResponseSeven = { error?: string | undefined; error_description?: string | undefined }
type DocType = {
  clientid?: string | undefined
  hmac?: File | undefined
  orgid?: string | undefined
  ts?: string | undefined
}
type DocTypeResponse = { documents: { description: string; doctype: string }[] }
type Issuer = { clientid?: string | undefined; hmac?: File | undefined; ts?: string | undefined }
type IssuerResponse = {
  issuers: {
    categories: string
    description: string
    issuerid: string
    name: string
    orgid: string
  }[]
}
type SearchParameters = {
  clientid?: string | undefined
  doctype?: string | undefined
  hmac?: File | undefined
  orgid?: string | undefined
  ts?: string | undefined
}
type SearchParametersResponse = {
  example: string
  label: string
  paramname: string
  valuelist?: { [x: string]: unknown } | undefined
}[]
type PullDocumentSchema = {
  chasis_no?: string | undefined
  consent?: string | undefined
  doctype?: string | undefined
  orgid?: string | undefined
  reg_no?: string | undefined
}
type Response13 = { error?: string | undefined; error_description?: string | undefined }
type Response14 = { error?: string | undefined; error_description?: string | undefined }
type Response15 = { error?: string | undefined; error_description?: string | undefined }
type Response16 = { error?: string | undefined; error_description?: string | undefined }
type Response17 = { error?: string | undefined; error_description?: string | undefined }
type Response18 = { error?: string | undefined; error_description?: string | undefined }
type AccessToken = {
  client_id: string
  client_secret: string
  code?: string | undefined
  code_verifier?: string | undefined
  grant_type: 'authorization_code'
  redirect_uri?: string | undefined
}
type DeviceAccessToken = {
  client_id?: string | undefined
  device_code?: string | undefined
  dl_otp?: string | undefined
  grant_type?: string | undefined
}
type RefreshToken = {
  client_id: string
  client_secret: string
  grant_type: 'refresh_token'
  refresh_token: string
}
type AccessResponse = {
  access_token: string
  digilocker_id: string
  dob: number
  eaadhar: 'Y' | 'N'
  expires_in: bigint
  gender: 'M' | 'F' | 'T'
  name: string
  reference_key: string
  refresh_token: string
  scope: string
  token_type: string
}
type XMLFormatSchema = {
  CertificateData: { [x: string]: unknown }[]
  Signature: {
    KeyInfo: { X509Data?: { [x: string]: unknown } | undefined }
    SignatureValue?: { [x: string]: unknown } | undefined
    SignedInfo?: { [x: string]: unknown } | undefined
  }
}
type EaadharXamlSchema = {
  KycRes: {
    Rar: string
    Signature: {
      KeyInfo: { X509Data: { X509Certificate: string; X509SubjectName: string } }
      SignatureValue: string
      SignedInfo: {
        CanonicalizationMethod: { Algorithm: string }
        Reference: {
          DigestMethod: { Algorithm: string }
          DigestValue: string
          Transforms: { Transform: { Algorithm: string } }
          URI: string
        }
        SignatureMethod: { Algorithm: string }
      }
      xmlns: string
    }
    UidData: {
      LData: {
        co: string
        country: string
        dist: string
        lang: string
        lm: string
        loc: string
        name: string
        pc: string
        state: string
        vtc: string
      }
      Pht: string
      Poa: {
        co: string
        country: string
        dist: string
        lm: string
        loc: string
        pc: string
        state: string
        vtc: string
      }
      Poi: { dob: string; gender: string; name: string }
      Prn: { text: string; type: string }
      tkn: string
      uid: string
    }
    code: string
    ret: string
    ts: string
    ttl: string
    txn: string
  }
}
type DemoAuthVerify = {
  clientid?: string | undefined
  hmac?: File | undefined
  mobile?: number | undefined
  otp?: number | undefined
  ts?: string | undefined
}
type DemoAuthVerifyResponse = {
  details?:
    | {
        access_token: string
        expires_in: string
        refresh_token: string
        scope: string
        token_type: string
      }
    | undefined
}
type Response7 = { error?: string | undefined; error_description?: string | undefined }
type Response8 = { error?: string | undefined; error_description?: string | undefined }
type Response9 = { error?: string | undefined; error_description?: string | undefined }
type DemoAuth = {
  clientid?: string | undefined
  consent?: string | undefined
  demoauth?: string | undefined
  dob?: number | undefined
  gender?: 'M' | 'F' | 'T' | undefined
  hmac?: File | undefined
  mobile?: number | undefined
  name?: string | undefined
  ts?: string | undefined
  uid?: number | undefined
  verification?: string | undefined
}
type DemoAuthResponse = {
  details?:
    | {
        access_token: string
        expires_in: string
        mobile: number
        refresh_token: string
        scope: string
        token_type: string
      }
    | undefined
}
type Response10 = { error?: string | undefined; error_description?: string | undefined }
type Response11 = { error?: string | undefined; error_description?: string | undefined }
type Response12 = { error?: string | undefined; error_description?: string | undefined }
type GetStatistics = {
  clientid?: string | undefined
  hmac?: File | undefined
  ts?: string | undefined
}
type GetStatisticsResponse = {
  authentic_documents: string
  count_as_on: string
  issuers: string
  monthwise_registations: {
    count?: number | undefined
    details2?:
      | {
          count?: number | undefined
          id?: number | undefined
          month?: number | undefined
          year?: number | undefined
        }
      | undefined
    id?: number | undefined
    month?: number | undefined
    year?: number | undefined
  }
  requestors: string
  users: string
  yearwise_authentic_documents: {
    count?: number | undefined
    details?:
      | { count?: number | undefined; id?: number | undefined; year?: number | undefined }
      | undefined
    details1?:
      | { count?: number | undefined; id?: number | undefined; year?: number | undefined }
      | undefined
    details2?:
      | { count?: number | undefined; id?: number | undefined; year?: number | undefined }
      | undefined
    id?: number | undefined
    year?: number | undefined
  }
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/account/1/pushuri': {
      $post:
        | {
            input: { form: PushUri }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: PushUri }
            output: { error?: string | undefined; error_description?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { form: PushUri }
            output: { error?: string | undefined; error_description?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { form: PushUri }
            output: { error?: string | undefined; error_description?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { form: PushUri }
            output: { error?: string | undefined; error_description?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/account/2/verify': {
      $post:
        | {
            input: { form: VerifyAccount }
            output: VerifyAccountResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: VerifyAccount }
            output: {
              error?: { [x: string]: unknown } | undefined
              error_description?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { form: VerifyAccount }
            output: { error?: string | undefined; error_description?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { form: VerifyAccount }
            output: {
              error?: { [x: string]: unknown } | undefined
              error_description?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/oauth2/1/authorize': {
      $get:
        | {
            input: {
              query: {
                client_id?: string | undefined
                response_type: string
                redirect_uri: string
                state: string
                Code_challenge?: string | undefined
                Code_challenge_method?: string | undefined
                dl_flow?: string | undefined
                Verified_mobile?: number | undefined
              }
            }
            output: {
              details?:
                | { access_token: string; expires_in: number; scope: string; token_type: string }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                client_id?: string | undefined
                response_type: string
                redirect_uri: string
                state: string
                Code_challenge?: string | undefined
                Code_challenge_method?: string | undefined
                dl_flow?: string | undefined
                Verified_mobile?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/oauth2/1/code': {
      $post:
        | {
            input: { json: DeviceAuthorizationCode }
            output: DeviceAuthorizationCodeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DeviceAuthorizationCode }
            output: ResponseOne | ResponseTwo | ResponseThree | ResponseFour
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: DeviceAuthorizationCode }
            output: { error?: string | undefined; error_description?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: DeviceAuthorizationCode }
            output: ResponseFive | ResponseSix
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/oauth2/1/file/upload': {
      $post:
        | {
            input: { header: { path?: string | undefined; hmac?: string | undefined } } & {
              json: FileUpload
            }
            output: FileUploadResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { path?: string | undefined; hmac?: string | undefined } } & {
              json: FileUpload
            }
            output: {
              error?:
                | 'path_missing'
                | 'contenttype_missing'
                | 'hmac_missing'
                | 'filename_missing'
                | 'hmac_mismatch'
                | 'invalid_filename'
                | 'invalid_filesize'
                | 'invalid_filetype'
                | 'invalid_path'
                | 'file_data_missing'
                | 'mimetype_mismatch'
                | undefined
              error_description?:
                | 'Path parameter is missing'
                | 'Content-Type parameter is missing'
                | 'HMAC parameter is missing'
                | 'Filename is missing in path parameter'
                | 'HMAC does not match'
                | 'Restricted characters are not allowed in file name'
                | 'The file size exceeds maximum allowed file size of 10MB'
                | 'The file type is not allowed'
                | 'The destination folder does not exist'
                | 'Missing file content in the request'
                | 'The mimetype provided in Content-Type parameter does not match with the mimetype of the file'
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { path?: string | undefined; hmac?: string | undefined } } & {
              json: FileUpload
            }
            output: { error?: string | undefined; error_description?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { path?: string | undefined; hmac?: string | undefined } } & {
              json: FileUpload
            }
            output: { error?: string | undefined; error_description?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/oauth2/1/file/:uri': {
      $get:
        | { input: { param: { uri: string } }; output: string; outputFormat: 'text'; status: 200 }
        | { input: { param: { uri: string } }; output: string; outputFormat: 'text'; status: 200 }
        | { input: { param: { uri: string } }; output: string; outputFormat: 'text'; status: 200 }
        | { input: { param: { uri: string } }; output: string; outputFormat: 'text'; status: 200 }
        | {
            input: { param: { uri: string } }
            output: { error?: string | undefined; error_description?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { uri: string } }
            output: { error?: string | undefined; error_description?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uri: string } }
            output: { error?: string | undefined; error_description?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { uri: string } }
            output: Response3 | Response4 | Response5 | Response6
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { uri: string } }
            output: Response1 | Response2
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/oauth2/1/files/': {
      $get:
        | {
            input: {}
            output: {
              directory: string
              items: {
                date: string
                description: string
                id: string
                issuer: string
                mime: string
                name: string
                parent: string
                size: string
                type: string
                uri: string
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: { error?: string | undefined; error_description?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {}
            output: { error?: string | undefined; error_description?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {}
            output: { error?: string | undefined; error_description?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/oauth2/1/files/issued': {
      $get:
        | {
            input: {}
            output: {
              details?:
                | {
                    date: string
                    description: string
                    doctype: string
                    issuer: string
                    issuerid: string
                    mime: string
                    name: string
                    parent: string
                    size: string
                    type: string
                    uri: string
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: { error?: string | undefined; error_description?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | { input: {}; output: ResponseSix | ResponseSeven; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/oauth2/1/files/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: {
              details?:
                | {
                    date: string
                    description: string
                    id: number
                    issuer: string
                    mime: string
                    name: string
                    parent: string
                    size: string
                    type: string
                    uri: string
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: { error?: string | undefined; error_description?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: { error?: string | undefined; error_description?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: { error?: string | undefined; error_description?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/oauth2/1/pull/doctype': {
      $post:
        | {
            input: { json: DocType } & { form: DocType }
            output: DocTypeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DocType } & { form: DocType }
            output: {
              error?: { [x: string]: unknown } | undefined
              error_description?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: DocType } & { form: DocType }
            output: { error?: string | undefined; error_description?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: DocType } & { form: DocType }
            output: {
              error?: { [x: string]: unknown } | undefined
              error_description?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/oauth2/1/pull/issuers': {
      $post:
        | {
            input: { json: Issuer } & { form: Issuer }
            output: IssuerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: Issuer } & { form: Issuer }
            output: { error?: string | undefined; error_description?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: Issuer } & { form: Issuer }
            output: { error?: string | undefined; error_description?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: Issuer } & { form: Issuer }
            output: {
              error?: { [x: string]: unknown } | undefined
              error_description?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/oauth2/1/pull/parameters': {
      $post:
        | {
            input: { json: SearchParameters } & { form: SearchParameters }
            output: SearchParametersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SearchParameters } & { form: SearchParameters }
            output: {
              error?: { [x: string]: unknown } | undefined
              error_description?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SearchParameters } & { form: SearchParameters }
            output: { error?: string | undefined; error_description?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: SearchParameters } & { form: SearchParameters }
            output: {
              error?: { [x: string]: unknown } | undefined
              error_description?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/oauth2/1/pull/pulldocument': {
      $post:
        | {
            input: { json: PullDocumentSchema } & { form: PullDocumentSchema }
            output: { details?: { uri: string } | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PullDocumentSchema } & { form: PullDocumentSchema }
            output: Response13 | ResponseSix
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PullDocumentSchema } & { form: PullDocumentSchema }
            output: { error?: string | undefined; error_description?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: PullDocumentSchema } & { form: PullDocumentSchema }
            output: {
              error?: { [x: string]: unknown } | undefined
              error_description?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: PullDocumentSchema } & { form: PullDocumentSchema }
            output: Response14 | Response15 | Response16 | Response17 | Response18
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/oauth2/1/revoke': {
      $post:
        | {
            input: {
              json: {
                token: string
                token_type_hint?: 'refresh_token' | 'access_token' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              json: {
                token: string
                token_type_hint?: 'refresh_token' | 'access_token' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/oauth2/1/token': {
      $post:
        | {
            input: {
              json: {
                'Get access token using authorization code'?: AccessToken | undefined
                'Get access token using device code and OTP'?: DeviceAccessToken | undefined
                'Get access token using refresh token'?: RefreshToken | undefined
              }
            }
            output: AccessResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                'Get access token using authorization code'?: AccessToken | undefined
                'Get access token using device code and OTP'?: DeviceAccessToken | undefined
                'Get access token using refresh token'?: RefreshToken | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              json: {
                'Get access token using authorization code'?: AccessToken | undefined
                'Get access token using device code and OTP'?: DeviceAccessToken | undefined
                'Get access token using refresh token'?: RefreshToken | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/oauth2/1/user': {
      $get:
        | {
            input: {}
            output: {
              details?:
                | {
                    digilockerid: string
                    dob: string
                    eaadhar?: 'Y' | 'N' | undefined
                    gender: 'M' | 'F' | 'T'
                    name: string
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: { error?: string | undefined; error_description?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {}
            output: { error?: string | undefined; error_description?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/oauth2/1/xml/:uri': {
      $get:
        | {
            input: { param: { uri: string } }
            output: XMLFormatSchema
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { uri: string } }
            output: { error?: string | undefined; error_description?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { uri: string } }
            output: { error?: string | undefined; error_description?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uri: string } }
            output: { error?: string | undefined; error_description?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { uri: string } }
            output: Response3 | Response4 | Response5 | Response6
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { uri: string } }
            output: Response1 | Response2
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/oauth2/2/files/issued': {
      $get:
        | {
            input: {}
            output: {
              items: {
                date: string
                description: string
                doctype: string
                issuer: string
                issuerid: string
                mime?: { [x: string]: unknown }[] | undefined
                name: string
                parent: string
                size: string
                type: string
                uri: string
              }[]
              resource: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: { error?: string | undefined; error_description?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | { input: {}; output: ResponseSix | ResponseSeven; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/oauth2/2/xml/eaadhaar': {
      $get:
        | { input: {}; output: EaadharXamlSchema; outputFormat: 'text'; status: 200 }
        | {
            input: {}
            output: { error?: string | undefined; error_description?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {}
            output: {
              error?: 'aadhaar_not_linked' | 'aadhaar_not_available' | undefined
              error_description?:
                | 'Aadhaar is not linked to the account'
                | 'Aadhaar data is not available for this user. Please perform Aadhaar eKYC again.'
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {}
            output: Response3 | Response4 | Response5 | Response6
            outputFormat: 'json'
            status: 500
          }
        | { input: {}; output: Response1 | Response2; outputFormat: 'json'; status: 503 }
    }
  } & {
    '/signup/1/demoauthverify': {
      $post:
        | {
            input: { form: DemoAuthVerify }
            output: DemoAuthVerifyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: DemoAuthVerify }
            output: Response7 | Response8 | Response9
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { form: DemoAuthVerify }
            output: { error?: string | undefined; error_description?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { form: DemoAuthVerify }
            output: {
              error?: { [x: string]: unknown } | undefined
              error_description?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/signup/2/demoauth': {
      $post:
        | { input: { form: DemoAuth }; output: DemoAuthResponse; outputFormat: 'json'; status: 200 }
        | {
            input: { form: DemoAuth }
            output: Response10 | Response11 | Response12
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { form: DemoAuth }
            output: { error?: string | undefined; error_description?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { form: DemoAuth }
            output: {
              error?: { [x: string]: unknown } | undefined
              error_description?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/statistics/1/counts': {
      $post:
        | {
            input: { form: GetStatistics }
            output: GetStatisticsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: GetStatistics }
            output: { error?: string | undefined; error_description?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { form: GetStatistics }
            output: { error?: string | undefined; error_description?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { form: GetStatistics }
            output: { error?: string | undefined; error_description?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
