import { createRoute, z } from '@hono/zod-openapi'

const AccessResponseSchema = z
  .object({
    access_token: z
      .string()
      .openapi({
        description: 'The access token that can be used to call the DigiLocker APIs.',
        example: 'bc125c212a4b03a9a188a858be5a163f379e878a',
      }),
    digilocker_id: z
      .string()
      .openapi({
        description: 'A unique 36 character DigiLocker Id of the user account.',
        example: '123e4567-e89b-12d3-a456-426655440000',
      }),
    dob: z
      .int()
      .openapi({
        description:
          'This is date of birth of the user as registered with DigiLocker in DDMMYYYY format.',
        example: '31121970',
      }),
    eaadhar: z
      .enum(['Y', 'N'])
      .openapi({
        description:
          'This indicates whether eAadhaar data is available for this account. Possible values are Y and N.',
      }),
    expires_in: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The duration in seconds for which the access token is valid',
        example: 3600,
      }),
    gender: z
      .enum(['M', 'F', 'T'])
      .openapi({
        description:
          'This is gender of the user as registered with DigiLocker. The possible values are M, F, T for male, female and transgender respectively.',
      }),
    name: z
      .string()
      .openapi({
        description: 'The name of the user as registered with DigiLocker.',
        example: 'Sunil Kumar',
      }),
    reference_key: z
      .string()
      .openapi({
        description: 'A unique reference of the user account.',
        example: '1c66bec26364cd6fefaabc6cae91840a',
      }),
    refresh_token: z
      .string()
      .openapi({
        description:
          'The refresh token used to refresh the above access token when it expires. Please refer to Refresh Access Token API for more details.',
        example: 'a47ab18c593703e4f83a274694db7422a8cfcb8f',
      }),
    scope: z.string().openapi({ description: 'Scope of the token.' }),
    token_type: z
      .string()
      .openapi({
        description: 'The type of token which will always be Bearer.',
        example: 'Bearer',
      }),
  })
  .openapi({
    required: [
      'access_token',
      'expires_in',
      'token_type',
      'scope',
      'refresh_token',
      'digilocker_id',
      'name',
      'dob',
      'gender',
      'eaadhar',
      'reference_key',
    ],
  })
  .openapi('AccessResponse')

const AccessTokenSchema = z
  .object({
    client_id: z.string().openapi({ example: 'ABCDEFG' }),
    client_secret: z.string().openapi({ example: 'a123456abcdeghijk7890' }),
    code: z
      .string()
      .exactOptional()
      .openapi({ example: 'ca82123a5476aa2f5e4638957c0ecc55c6ec07c1' }),
    code_verifier: z.string().exactOptional().openapi({ example: 'a123456abca' }),
    grant_type: z.literal('authorization_code'),
    redirect_uri: z
      .string()
      .exactOptional()
      .openapi({ example: 'https://ndh.digitallocker.gov.in/oauth2-redirect.html' }),
  })
  .openapi({ required: ['grant_type', 'client_id', 'client_secret'] })
  .openapi('AccessToken')

const AuthTokenResponseSchema = z
  .object({
    access_token: z
      .string()
      .openapi({
        description: 'The access token that can be used to call the\n    DigiLocker APIs.',
        example: 'bc125c212a4b03a9a188a858be5a163f379e878a',
      }),
    expires_in: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The duration in seconds for which the access token is\n            valid.',
        example: 3600,
      }),
    refresh_token: z
      .string()
      .openapi({
        description:
          'The refresh token used to refresh the above access\n  token when it expires. This will value will be\n  returned only in case of web applications and not be\n  returned for limited input devices.',
        example: 'ad6f4004cc3e53f56bda391fe485fc4d32928061',
      }),
    scope: z.string().openapi({ description: 'Scope of the token.' }),
    token_type: z
      .string()
      .openapi({
        description: 'The type of token which will always be Bearer.',
        example: 'Bearer',
      }),
  })
  .openapi({ required: ['access_token', 'expires_in', 'token_type', 'scope', 'refresh_token'] })
  .openapi('AuthTokenResponse')

const DemoAuthSchema = z
  .object({
    clientid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Provide the client id that was created during the application registration process on Partners Portal.',
      }),
    consent: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The consent indicator from the user for performing demographic authentication using Aadhaar details. This Partner Application must capture the user consent for performing the Aadhaar demographic authentication. The possible values are ‘Y’ and ‘N’. The sign up request will be processed only when this indicator is ‘Y’.',
      }),
    demoauth: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The parameter indicates whether Aadhaar demographic authentication must be successful for creating DigiLocker account. The possible values are ‘Y’ and ‘N’. The value of ‘Y’ will perform Aadhaar demographic authentication and will return errors if any in response. The value of ‘N’ will also perform Aadhaar demographic authentication but will return any error in case of authentication failure. It will create a basic mobile based account for the user. Value ‘N’ should be used when the user account needs to be created in the absence of the user.',
      }),
    dob: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'This is date of birth of the user as mentioned in Aadhaar in DDMMYYYY format.',
      }),
    gender: z
      .enum(['M', 'F', 'T'])
      .exactOptional()
      .openapi({
        description:
          'This is gender of the user as mentioned in Aadhaar. The possible values are M, F, T for male, female and transgender respectively.',
      }),
    hmac: z
      .file()
      .exactOptional()
      .openapi({
        type: 'string',
        format: 'binary',
        description:
          'Provide SHA-256 encrypted value of the client secret, clientid and ts parameters above concatenated in this sequence (client secret, clientid, ts). The hmac parameter is used by DigiLocker to ensure the data integrity and authentication of the request. Use the Client Secret Key generated during the application registration process on Partners Portal as the client secret.',
      }),
    mobile: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'This is the mobile number of the user. DigiLocker will check whether an account exists for this mobile number. Either uid or mobile is required to verify whether an account exists.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'This is name of the user as mentioned in Aadhaar.' }),
    ts: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Provide a timestamp value in UNIX (or POSIX) format in IST time zone in seconds. This timestamp value must not be older than 30 minutes.',
      }),
    uid: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'This is the Aadhaar number of the user. DigiLocker will check whether an account exists for this Aadhaar number. Either uid or mobile is required to verify whether an account exists.',
      }),
    verification: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The parameter indicates whether the mobile number provided above should be validated by DigiLocker. If this parameter is ‘Y’, the DigiLocker sends an OTP to verify the mobile number. In this case the client application will call the second API to validate the OTP. The user will be signed on only after successful OTP validation. This flow should be used when the user account is created by user himself/herself or the user is present to provide the OTP. If this parameter is ‘N’, the user account will be created without OTP validation. The OTP validation will be performed when the user signs in for the first time in DigiLocker. This flow should be used when the user account needs to be created in the absence of the user.',
      }),
  })
  .openapi({ required: [] })
  .openapi('DemoAuth')

const DemoAuthResponseSchema = z
  .object({
    details: z
      .object({
        access_token: z
          .string()
          .openapi({
            description: 'The access token that can be used to call the DigiLocker APIs.',
            example: 'bc125c212a4b03a9a188a858be5a163f379e878a',
          }),
        expires_in: z
          .string()
          .openapi({
            description: 'The duration in seconds for which the access token is valid.',
            example: 3600,
          }),
        mobile: z
          .int()
          .openapi({
            description:
              'The masked mobile number of the user on which the OTP has been sent.           ',
            example: '******3712',
          }),
        refresh_token: z
          .string()
          .openapi({
            description:
              'The refresh token used to refresh the above access token when it expires. Please refer to Refresh Access Token API for more details.',
            example: 'a47ab18c593703e4f83a274694db7422a8cfcb8f',
          }),
        scope: z.string().openapi({ description: 'Scope of the token', example: '' }),
        token_type: z
          .string()
          .openapi({
            description: 'The type of token which will always be Bearer.',
            example: 'Bearer',
          }),
      })
      .exactOptional()
      .openapi({
        required: ['access_token', 'expires_in', 'token_type', 'scope', 'refresh_token', 'mobile'],
      }),
  })
  .openapi({ required: [] })
  .openapi('DemoAuthResponse')

const DemoAuthVerifySchema = z
  .object({
    clientid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Provide the client id that was created during the application registration process on Partners Portal.',
      }),
    hmac: z
      .file()
      .exactOptional()
      .openapi({
        type: 'string',
        format: 'binary',
        description:
          'Provide SHA-256 encrypted value of the client secret, clientid and ts parameters above concatenated in this sequence (client secret, clientid, ts). The hmac parameter is used by DigiLocker to ensure the data integrity and authentication of the request. Use the Client Secret Key generated during the application registration process on Partners Portal as the client secret.',
      }),
    mobile: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'This is the mobile number of the user. DigiLocker will check whether an account exists for this mobile number. Either uid or mobile is required to verify whether an account exists.',
      }),
    otp: z.int().exactOptional().openapi({ description: 'The OTP provided by the user.' }),
    ts: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Provide a timestamp value in UNIX (or POSIX) format in IST time zone in seconds. This timestamp value must not be older than 30 minutes.',
      }),
  })
  .openapi({ required: [] })
  .openapi('DemoAuthVerify')

const DemoAuthVerifyResponseSchema = z
  .object({
    details: z
      .object({
        access_token: z
          .string()
          .openapi({
            description: 'The access token that can be used to call the DigiLocker APIs.',
            example: 'bc125c212a4b03a9a188a858be5a163f379e878a',
          }),
        expires_in: z
          .string()
          .openapi({
            description: 'The duration in seconds for which the access token is valid.',
            example: 3600,
          }),
        refresh_token: z
          .string()
          .openapi({
            description:
              'The refresh token used to refresh the above access token when it expires. Please refer to Refresh Access Token API for more details.',
            example: 'a47ab18c593703e4f83a274694db7422a8cfcb8f',
          }),
        scope: z.string().openapi({ description: 'Scope of the token', example: '' }),
        token_type: z
          .string()
          .openapi({
            description: 'The type of token which will always be Bearer.',
            example: 'Bearer',
          }),
      })
      .exactOptional()
      .openapi({
        required: ['access_token', 'expires_in', 'token_type', 'scope', 'refresh_token'],
      }),
  })
  .openapi({ required: [] })
  .openapi('DemoAuthVerifyResponse')

const DeviceAccessTokenSchema = z
  .object({
    client_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Provide the client id that was created during the application registration process on Partners Portal.',
      }),
    device_code: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The device verification code. The device_code field from Get Device Code Response.',
      }),
    dl_otp: z.string().exactOptional().openapi({ description: 'The OTP collected from the user' }),
    grant_type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The grant type, which must be “urn:ietf:params:oauth:grant-type:device_code”.',
        example: 'urn:ietf:params:oauth:grant-type:device_code',
      }),
  })
  .openapi({ required: [] })
  .openapi('DeviceAccessToken')

const DeviceAuthorizationCodeSchema = z
  .object({
    client_id: z.string().exactOptional(),
    dl_mobile: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Mobile number associated with DigiLocker account of the\n  user. The client device accepts the mobile number on the device from user and sends it in this parameter. Either the username or the mobile number must be provided.',
      }),
    dl_username: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'DigiLocker username of the user. The client device accepts the username on the device from user and sends the username in this parameter. Either the username or the mobile number must be provided.   ',
      }),
    response_type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The parameter must be set to device_code.',
        example: 'device_code',
      }),
  })
  .openapi({ required: [] })
  .openapi('DeviceAuthorizationCode')

const DeviceAuthorizationCodeResponseSchema = z
  .object({
    device_code: z
      .string()
      .openapi({ description: 'The device verification code.', example: '74tq5miHKB' }),
    dl_masked_email: z
      .string()
      .openapi({
        description: 'The masked email on which the OTP is sent.',
        example: 'xxxxxx@gmail.com',
      }),
    dl_masked_mobile: z
      .int()
      .openapi({
        description: 'The masked mobile number on which the OTP is sent.',
        example: 'XXXXXX1234',
      }),
    expires_in: z
      .int()
      .openapi({
        description: 'The duration in seconds for which the code is valid.',
        example: 600,
      }),
  })
  .openapi({ required: ['device_code', 'dl_masked_mobile', 'dl_masked_email', 'expires_in'] })
  .openapi('DeviceAuthorizationCodeResponse')

const DocTypeSchema = z
  .object({
    clientid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Provide the client id that was created during the application registration process on Partners Portal.',
      }),
    hmac: z
      .file()
      .exactOptional()
      .openapi({
        type: 'string',
        format: 'binary',
        description:
          'Provide SHA-256 encrypted value of the client secret, clientid and ts parameters above concatenated in this sequence (client secret, clientid, ts). The hmac parameter is used by DigiLocker to ensure the data integrity and authentication of the request. Use the Client Secret Key generated during the application registration process on Partners Portal as the client secret.',
      }),
    orgid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The organization id for the issuer in DigiLocker. This organization id is returned in Get List of Issuers API mentioned earlier.',
      }),
    ts: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Provide a timestamp value in UNIX (or POSIX) format in IST time zone in seconds. This timestamp value must not be older than 30 minutes.',
      }),
  })
  .openapi({ required: [] })
  .openapi('DocType')

const DocTypeResponseSchema = z
  .object({
    documents: z
      .array(
        z
          .object({ description: z.string().min(1), doctype: z.string().min(1) })
          .openapi({ required: ['doctype', 'description'] }),
      )
      .min(1)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      }),
  })
  .openapi({ required: ['documents'] })
  .openapi('DocTypeResponse')

const EaadharXamlSchemaSchema = z
  .object({
    KycRes: z
      .object({
        Rar: z.string().min(1),
        Signature: z
          .object({
            KeyInfo: z
              .object({
                X509Data: z
                  .object({
                    X509Certificate: z.string().min(1),
                    X509SubjectName: z.string().min(1),
                  })
                  .openapi({ required: ['X509SubjectName', 'X509Certificate'] }),
              })
              .openapi({ required: ['X509Data'] }),
            SignatureValue: z.string().min(1),
            SignedInfo: z
              .object({
                CanonicalizationMethod: z
                  .object({ Algorithm: z.string().min(1) })
                  .openapi({ required: ['Algorithm'] }),
                Reference: z
                  .object({
                    DigestMethod: z
                      .object({ Algorithm: z.string().min(1) })
                      .openapi({ required: ['Algorithm'] }),
                    DigestValue: z.string().min(1),
                    Transforms: z
                      .object({
                        Transform: z
                          .object({ Algorithm: z.string().min(1) })
                          .openapi({ required: ['Algorithm'] }),
                      })
                      .openapi({ required: ['Transform'] }),
                    URI: z.string(),
                  })
                  .openapi({ required: ['Transforms', 'DigestMethod', 'DigestValue', 'URI'] }),
                SignatureMethod: z
                  .object({ Algorithm: z.string().min(1) })
                  .openapi({ required: ['Algorithm'] }),
              })
              .openapi({ required: ['CanonicalizationMethod', 'SignatureMethod', 'Reference'] }),
            xmlns: z.string().min(1),
          })
          .openapi({ required: ['SignedInfo', 'SignatureValue', 'KeyInfo', 'xmlns'] }),
        UidData: z
          .object({
            LData: z
              .object({
                co: z.string().min(1),
                country: z.string().min(1),
                dist: z.string().min(1),
                lang: z.string().min(1),
                lm: z.string().min(1),
                loc: z.string().min(1),
                name: z.string().min(1),
                pc: z.string().min(1),
                state: z.string().min(1),
                vtc: z.string().min(1),
              })
              .openapi({
                required: [
                  'co',
                  'country',
                  'dist',
                  'lang',
                  'lm',
                  'loc',
                  'name',
                  'pc',
                  'state',
                  'vtc',
                ],
              }),
            Pht: z.string().min(1),
            Poa: z
              .object({
                co: z.string().min(1),
                country: z.string().min(1),
                dist: z.string().min(1),
                lm: z.string().min(1),
                loc: z.string().min(1),
                pc: z.string().min(1),
                state: z.string().min(1),
                vtc: z.string().min(1),
              })
              .openapi({ required: ['co', 'country', 'dist', 'lm', 'loc', 'pc', 'state', 'vtc'] }),
            Poi: z
              .object({
                dob: z.string().min(1),
                gender: z.string().min(1),
                name: z.string().min(1),
              })
              .openapi({ required: ['dob', 'gender', 'name'] }),
            Prn: z
              .object({ text: z.string().min(1), type: z.string().min(1) })
              .openapi({ required: ['type', 'text'] }),
            tkn: z.string().min(1),
            uid: z.string().min(1),
          })
          .openapi({ required: ['Poi', 'Poa', 'LData', 'Pht', 'Prn', 'tkn', 'uid'] }),
        code: z.string().min(1),
        ret: z.string().min(1),
        ts: z.string().min(1),
        ttl: z.string().min(1),
        txn: z.string().min(1),
      })
      .openapi({ required: ['Rar', 'UidData', 'Signature', 'code', 'ret', 'ts', 'ttl', 'txn'] }),
  })
  .openapi({ required: ['KycRes'] })
  .openapi('EaadharXamlSchema')

const FileUploadSchema = z
  .object({
    'Content-Type': z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The mime type of the file e.g. image/jpg, image/jpeg, image/png, application/pdf.',
      }),
  })
  .openapi({ required: [] })
  .openapi('FileUpload')

const FileUploadResponseSchema = z
  .object({
    details: z
      .object({
        Path: z
          .string()
          .openapi({
            description: 'The destination path of the file in DigiLocker including filename.',
          }),
        size: z.string().openapi({ description: 'Size of file.' }),
      })
      .exactOptional()
      .openapi({ required: ['Path', 'size'] }),
  })
  .openapi({ required: [] })
  .openapi('FileUploadResponse')

const GetStatisticsSchema = z
  .object({
    clientid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Provide the client id that was created during the application registration process on Partners Portal.',
      }),
    hmac: z
      .file()
      .exactOptional()
      .openapi({
        type: 'string',
        format: 'binary',
        description:
          'Provide SHA-256 encrypted value of the client secret, clientid and ts parameters above concatenated in this sequence (client secret, clientid, ts). The hmac parameter is used by DigiLocker to ensure the data integrity and authentication of the request. Use the Client Secret Key generated during the application registration process on Partners Portal as the client secret.',
      }),
    ts: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Provide a timestamp value in UNIX (or POSIX) format in IST time zone in seconds. This timestamp value must not be older than 30 minutes.',
      }),
  })
  .openapi({ required: [] })
  .openapi('GetStatistics')

const GetStatisticsResponseSchema = z
  .object({
    authentic_documents: z
      .string()
      .openapi({
        description: 'Count of authentic documents available through DigiLocker.',
        example: '3520475277',
      }),
    count_as_on: z
      .string()
      .openapi({
        description: 'The date on which this statistics is generated.',
        example: '31072019',
      }),
    issuers: z
      .string()
      .openapi({
        description: 'Count of issuer organizations registered on DigiLocker.',
        example: '134',
      }),
    monthwise_registations: z
      .object({
        count: z
          .int()
          .exactOptional()
          .openapi({
            description: 'Count of cumulative user registrations in the given month.',
            example: '124794',
          }),
        details2: z
          .object({
            count: z
              .int()
              .exactOptional()
              .openapi({
                description: 'Count of cumulative user registrations in the given month.',
                example: '124794',
              }),
            id: z
              .int()
              .exactOptional()
              .openapi({ description: 'Unique id of the list item.', example: '18496' }),
            month: z
              .int()
              .exactOptional()
              .openapi({
                description: 'Month of the year in numeric format with January as 1',
                example: '5',
              }),
            year: z
              .int()
              .exactOptional()
              .openapi({ description: 'Year in YYYY format', example: '2018' }),
          })
          .exactOptional()
          .openapi({ required: [] }),
        id: z
          .int()
          .exactOptional()
          .openapi({ description: 'Unique id of the list item.', example: '18496' }),
        month: z
          .int()
          .exactOptional()
          .openapi({
            description: 'Month of the year in numeric format with January as 1',
            example: '5',
          }),
        year: z
          .int()
          .exactOptional()
          .openapi({ description: 'Year in YYYY format', example: '2018' }),
      })
      .openapi({
        description: 'List of last 12 months cumulative user registrations',
        required: [],
      }),
    requestors: z
      .string()
      .openapi({
        description: 'Count of requester organizations registered on DigiLocker.',
        example: '45',
      }),
    users: z
      .string()
      .openapi({ description: 'Count of registered users on DigiLocker.', example: '25873490' }),
    yearwise_authentic_documents: z
      .object({
        count: z
          .int()
          .exactOptional()
          .openapi({
            description: 'Count of cumulative user authentic documents in\n  the given year.',
            example: '10134567',
          }),
        details: z
          .object({
            count: z
              .int()
              .exactOptional()
              .openapi({
                description: 'Count of cumulative user authentic documents in the given year.',
                example: '1000548093',
              }),
            id: z
              .int()
              .exactOptional()
              .openapi({ description: 'Unique id of the list item.', example: '18350' }),
            year: z
              .int()
              .exactOptional()
              .openapi({ description: 'Year in YYYY format.', example: '2017' }),
          })
          .exactOptional()
          .openapi({ required: [] }),
        details1: z
          .object({
            count: z
              .int()
              .exactOptional()
              .openapi({
                description: 'Count of cumulative user authentic documents in the given year.',
                example: '2410543684',
              }),
            id: z
              .int()
              .exactOptional()
              .openapi({ description: 'Unique id of the list item.', example: '18354' }),
            year: z
              .int()
              .exactOptional()
              .openapi({ description: 'Year in YYYY format.', example: '2018' }),
          })
          .exactOptional()
          .openapi({ required: [] }),
        details2: z
          .object({
            count: z
              .int()
              .exactOptional()
              .openapi({
                description: 'Count of cumulative user authentic documents in the given year.  ',
                example: '3520475277',
              }),
            id: z
              .int()
              .exactOptional()
              .openapi({ description: 'Unique id of the list item.', example: '18567' }),
            year: z
              .int()
              .exactOptional()
              .openapi({ description: 'Year in YYYY format.', example: '2019' }),
          })
          .exactOptional()
          .openapi({ required: [] }),
        id: z
          .int()
          .exactOptional()
          .openapi({ description: 'Unique id of the list item.', example: '18347' }),
        year: z
          .int()
          .exactOptional()
          .openapi({ description: 'Year in YYYY format.', example: '2016' }),
      })
      .openapi({
        description: 'List of cumulative year-wise counts of authentic documents in DigiLocker.',
        required: [],
      }),
  })
  .openapi({
    required: [
      'users',
      'authentic_documents',
      'issuers',
      'requestors',
      'count_as_on',
      'monthwise_registations',
      'id',
      'month',
      'year',
      'count',
      'yearwise_authentic_documents',
    ],
  })
  .openapi('GetStatisticsResponse')

const IssuerSchema = z
  .object({
    clientid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Provide the client id that was created during the application registration process on Partners Portal.',
      }),
    hmac: z
      .file()
      .exactOptional()
      .openapi({
        type: 'string',
        format: 'binary',
        description:
          'Provide SHA-256 encrypted value of the client secret, clientid and ts parameters above concatenated in this sequence (client secret, clientid, ts). The hmac parameter is used by DigiLocker to ensure the data integrity and authentication of the request. Use the Client Secret Key generated during the application registration process on Partners Portal as the client secret.',
      }),
    ts: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Provide a timestamp value in UNIX (or POSIX) format in IST time zone in seconds. This timestamp value must not be older than 30 minutes.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Issuer')

const IssuerResponseSchema = z
  .object({
    issuers: z
      .array(
        z
          .object({
            categories: z.string().min(1),
            description: z.string(),
            issuerid: z.string().min(1),
            name: z.string().min(1),
            orgid: z.string().min(1),
          })
          .openapi({ required: ['name', 'description', 'categories', 'issuerid', 'orgid'] }),
      )
      .min(1)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      }),
  })
  .openapi({ required: ['issuers'] })
  .openapi('IssuerResponse')

const PullDocumentSchemaSchema = z
  .object({
    chasis_no: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Other parameters required for fetching a document as listed in paramname field of Get Search Parameters API.',
      }),
    consent: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The consent indicator from the user for performing demographic authentication using Aadhaar details. This Partner Application must capture the user consent for performing the Aadhaar demographic authentication. The possible values are ‘Y’ and ‘N’. The sign up request will be processed only when this indicator is ‘Y’.',
      }),
    doctype: z
      .string()
      .exactOptional()
      .openapi({ description: 'A 5 character unique document type provided by DigiLocker.' }),
    orgid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The organization id for the issuer in DigiLocker. This organization id is returned in Get List of Issuers API mentioned above.',
      }),
    reg_no: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Other parameters required for fetching a document as listed in paramname field of Get Search Parameters API.',
      }),
  })
  .openapi({ required: [] })
  .openapi('PullDocumentSchema')

const PushUriSchema = z
  .object({
    action: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Action that needs to be taken for the Aadhaar number and URI combination. Possible values are A for adding a new URI, U for updating an already added URI details or D for deleting the URI.',
      }),
    clientid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Provide the client id that was created during the application registration process on Partners Portal.',
      }),
    digilockerid: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'This is the DigiLocker Id of the user that was acquired using Get User Details API.',
      }),
    docid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique number of the document. This id will be unique within the document type issued by the issuer.',
      }),
    hmac: z
      .file()
      .exactOptional()
      .openapi({
        type: 'string',
        format: 'binary',
        description:
          'Provide SHA-256 encrypted value of the client secret, clientid and ts parameters above concatenated in this sequence (client secret, clientid, ts). The hmac parameter is used by DigiLocker to ensure the data integrity and authentication of the request. Use the Client Secret Key generated during the application registration process on Partners Portal as the client secret.',
      }),
    issuedate: z
      .string()
      .exactOptional()
      .openapi({ description: 'The issue date of the document in DDMMYYYY format.' }),
    ts: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Provide a timestamp value in UNIX (or POSIX) format in IST time zone in seconds. This timestamp value must not be older than 30 minutes.',
      }),
    uri: z
      .string()
      .exactOptional()
      .openapi({ description: 'This is the unique identifier of the document.' }),
    validfrom: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The date from which the document is valid in DDMMYYYY format. This may be same as the issue date.',
      }),
    validto: z
      .string()
      .exactOptional()
      .openapi({ description: 'The expiry date of the document in DDMMYYYY format.' }),
  })
  .openapi({ required: [] })
  .openapi('PushUri')

const RefreshAccessTokenSchema = z
  .object({
    grant_type: z.string().openapi({ example: 'refresh_token' }),
    refresh_Token: z.string().openapi({ example: 'a47ab18c593703e4f83a274694db7422a8cfcb8f' }),
  })
  .openapi({ required: ['grant_type', 'refresh_Token'] })
  .openapi('RefreshAccessToken')

const RefreshTokenSchema = z
  .object({
    client_id: z.string().openapi({ example: 'ABCDEFG' }),
    client_secret: z.string().openapi({ example: 'a123456abcdeghijk7890' }),
    grant_type: z.literal('refresh_token'),
    refresh_token: z.string().openapi({ example: 'ca82123a5476aa2f5e4638957c0ecc55c6ec07c1' }),
  })
  .openapi({ required: ['grant_type', 'refresh_token', 'client_id', 'client_secret'] })
  .openapi('RefreshToken')

const Response1Schema = z
  .object({
    error: z.string().exactOptional().openapi({ description: 'repository_service_inactive' }),
    error_description: z.string().exactOptional().openapi({ description: 'Internal server error' }),
  })
  .openapi({ required: [] })
  .openapi('Response1')

const Response10Schema = z
  .object({
    error: z.string().exactOptional().openapi({ description: 'mobile_exists' }),
    error_description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A DigiLocker account already exists with this mobile number.' }),
  })
  .openapi({ required: [] })
  .openapi('Response10')

const Response11Schema = z
  .object({
    error: z.string().exactOptional().openapi({ description: 'auth_failure' }),
    error_description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The data on Aadhaar does not match with one or more of Aadhaar, Name, DOB and Gender data provided. Aadhaar demographic authentication failure.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Response11')

const Response12Schema = z
  .object({
    error: z.string().exactOptional().openapi({ description: 'invalid_parameter' }),
    error_description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'One or more of the mandatory parameters is missing or invalid. The error description text will contain one or more of the following error texts:|-  uid parameter is missing or invalid  Name parameter is missing or invalid  Dob parameter is missing or invalid  Gender parameter is missing or invalid  Mobile parameter is missing or invalid  Verification parameter is missing or invalid  Consent parameter is missing or invalid  Timestamp parameter is missing or invalid  HMAC parameter is missing or invalid',
      }),
  })
  .openapi({ required: [] })
  .openapi('Response12')

const Response13Schema = z
  .object({
    error: z.string().exactOptional().openapi({ description: 'repository_service_configerror' }),
    error_description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The issuer service is not available. Please contact DigiLocker support.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Response13')

const Response14Schema = z
  .object({
    error: z.string().exactOptional().openapi({ description: 'invalid_orgid' }),
    error_description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The orgid parameter is missing or invalid.' }),
  })
  .openapi({ required: [] })
  .openapi('Response14')

const Response15Schema = z
  .object({
    error: z.string().exactOptional().openapi({ description: 'invalid_doctype' }),
    error_description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The doctype parameter is missing or invalid.' }),
  })
  .openapi({ required: [] })
  .openapi('Response15')

const Response16Schema = z
  .object({
    error: z.string().exactOptional().openapi({ description: 'pull_response_pending' }),
    error_description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The details provided above do not exactly match with the details on the certificate. Your request has been forwarded to the Issuer department. The Issuer department will verify the details provided above. If the verification is successful, your certificate will be made available in the Issued Documents section of your DigiLocker.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Response16')

const Response17Schema = z
  .object({
    error: z.string().exactOptional().openapi({ description: 'uri_exists' }),
    error_description: z
      .string()
      .exactOptional()
      .openapi({ description: 'This document already exists in your Issued Documents.' }),
  })
  .openapi({ required: [] })
  .openapi('Response17')

const Response18Schema = z
  .object({
    error: z.string().exactOptional().openapi({ description: 'aadhaar_not_linked' }),
    error_description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'To access issued documents, please link your Aadhaar number to your DigiLocker account.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Response18')

const Response2Schema = z
  .object({
    error: z.string().exactOptional().openapi({ description: 'repository_service_unpublished' }),
    error_description: z.string().exactOptional().openapi({ description: 'Internal server error' }),
  })
  .openapi({ required: [] })
  .openapi('Response2')

const Response3Schema = z
  .object({
    error: z.string().exactOptional().openapi({ description: 'repository_service_unresponsive' }),
    error_description: z.string().exactOptional().openapi({ description: 'Internal server error' }),
  })
  .openapi({ required: [] })
  .openapi('Response3')

const Response4Schema = z
  .object({
    error: z.string().exactOptional().openapi({ description: 'repository_service_configerror' }),
    error_description: z.string().exactOptional().openapi({ description: 'Internal server error' }),
  })
  .openapi({ required: [] })
  .openapi('Response4')

const Response5Schema = z
  .object({
    error: z.string().exactOptional().openapi({ description: 'repository_service_resperror' }),
    error_description: z.string().exactOptional().openapi({ description: 'Internal server error' }),
  })
  .openapi({ required: [] })
  .openapi('Response5')

const Response6Schema = z
  .object({
    error: z.string().exactOptional().openapi({ description: 'repository_service_exception' }),
    error_description: z.string().exactOptional().openapi({ description: 'Internal server error' }),
  })
  .openapi({ required: [] })
  .openapi('Response6')

const Response7Schema = z
  .object({
    error: z.string().exactOptional().openapi({ description: 'parameter_missing' }),
    error_description: z
      .string()
      .exactOptional()
      .openapi({ description: 'One or more of the mandatory parameters is missing' }),
  })
  .openapi({ required: [] })
  .openapi('Response7')

const Response8Schema = z
  .object({
    error: z.string().exactOptional().openapi({ description: 'invalid_ts' }),
    error_description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Timestamp parameter is invalid' }),
  })
  .openapi({ required: [] })
  .openapi('Response8')

const Response9Schema = z
  .object({
    error: z.string().exactOptional().openapi({ description: 'hmac_mismatch' }),
    error_description: z.string().exactOptional().openapi({ description: 'HMAC does not match' }),
  })
  .openapi({ required: [] })
  .openapi('Response9')

const ResponseFiveSchema = z
  .object({
    error: z.string().exactOptional().openapi({ description: 'otp_error' }),
    error_description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OTP could not be sent as the account may not have a valid mobile or a valid email.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ResponseFive')

const ResponseFourSchema = z
  .object({
    error: z.string().exactOptional().openapi({ description: 'multiple_mobile_accounts' }),
    error_description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The mobile number provided is associated with more than one DigiLocker accounts. Please login using username.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ResponseFour')

const ResponseOneSchema = z
  .object({
    error: z.string().exactOptional().openapi({ description: 'invalid_response_type' }),
    error_description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The response_type parameter is invalid' }),
  })
  .openapi({ required: [] })
  .openapi('ResponseOne')

const ResponseSevenSchema = z
  .object({
    error: z.string().exactOptional().openapi({ description: 'partner_service_unresponsive' }),
    error_description: z.string().exactOptional().openapi({ description: 'Internal server error' }),
  })
  .openapi({ required: [] })
  .openapi('ResponseSeven')

const ResponseSixSchema = z
  .object({
    error: z.string().exactOptional().openapi({ description: 'unexpected_error' }),
    error_description: z.string().exactOptional().openapi({ description: 'Internal server error' }),
  })
  .openapi({ required: [] })
  .openapi('ResponseSix')

const ResponseThreeSchema = z
  .object({
    error: z.string().exactOptional().openapi({ description: 'invalid_mobile' }),
    error_description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The dl_mobile parameter is invalid' }),
  })
  .openapi({ required: [] })
  .openapi('ResponseThree')

const ResponseTwoSchema = z
  .object({
    error: z.string().exactOptional().openapi({ description: 'invalid_username' }),
    error_description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The dl_username parameter is invalid' }),
  })
  .openapi({ required: [] })
  .openapi('ResponseTwo')

const SearchParametersSchema = z
  .object({
    clientid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Provide the client id that was created during the application registration process on Partners Portal.',
      }),
    doctype: z
      .string()
      .exactOptional()
      .openapi({ description: 'A 5 character unique document type provided by DigiLocker.' }),
    hmac: z
      .file()
      .exactOptional()
      .openapi({
        type: 'string',
        format: 'binary',
        description:
          'Provide SHA-256 encrypted value of the client secret, clientid and ts parameters above concatenated in this sequence (client secret, clientid, ts). The hmac parameter is used by DigiLocker to ensure the data integrity and authentication of the request. Use the Client Secret Key generated during the application registration process on Partners Portal as the client secret.',
      }),
    orgid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The organization id for the issuer in DigiLocker. This organization id is returned in Get List of Issuers API mentioned earlier.',
      }),
    ts: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Provide a timestamp value in UNIX (or POSIX) format in IST time zone in seconds. This timestamp value must not be older than 30 minutes.',
      }),
  })
  .openapi({ required: [] })
  .openapi('SearchParameters')

const SearchParametersResponseSchema = z
  .array(
    z
      .object({
        example: z.string().min(1),
        label: z.string().min(1),
        paramname: z.string().min(1),
        valuelist: z.any().exactOptional(),
      })
      .openapi({ required: ['label', 'paramname', 'example'] }),
  )
  .min(1)
  .superRefine((items, ctx) => {
    const seen = new Map()
    for (const [i, val] of items.entries()) {
      const key = JSON.stringify(val)
      if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
      else seen.set(key, i)
    }
  })
  .openapi('SearchParametersResponse')

const VerifyAccountSchema = z
  .object({
    clientid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Provide the client id that was created during the application registration process on Partners Portal.',
      }),
    hmac: z
      .file()
      .exactOptional()
      .openapi({
        type: 'string',
        format: 'binary',
        description:
          'Provide SHA-256 encrypted value of the client secret, clientid and ts parameters above concatenated in this sequence (client secret, clientid, ts). The hmac parameter is used by DigiLocker to ensure the data integrity and authentication of the request. Use the Client Secret Key generated during the application registration process on Partners Portal as the client secret.',
      }),
    mobile: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'This is the mobile number of the user. DigiLocker will check whether an account exists for this mobile number. Either uid or mobile is required to verify whether an account exists.',
      }),
    ts: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Provide a timestamp value in UNIX (or POSIX) format in IST time zone in seconds. This timestamp value must not be older than 30 minutes.',
      }),
    uid: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'This is the Aadhaar number of the user. DigiLocker will check whether an account exists for this Aadhaar number. Either uid or mobile is required to verify whether an account exists.',
      }),
  })
  .openapi({ required: [] })
  .openapi('VerifyAccount')

const VerifyAccountResponseSchema = z
  .object({
    digilockerid: z
      .string()
      .openapi({
        description: 'A unique 36 character DigiLocker Id of the user account.',
        example: '123e4567-e89b-12d3-a456-426655440000',
      }),
    registered: z
      .string()
      .openapi({
        description:
          'true indicates that the provided Aadhaar/mobile number is already registered and false indicates otherwise.',
        example: 'true',
      }),
  })
  .openapi({ required: ['registered', 'digilockerid'] })
  .openapi('VerifyAccountResponse')

const XMLFormatSchemaSchema = z
  .object({
    CertificateData: z.array(z.object({})),
    Signature: z
      .object({
        KeyInfo: z.object({ X509Data: z.any().exactOptional() }).openapi({ required: [] }),
        SignatureValue: z.any().exactOptional(),
        SignedInfo: z.any().exactOptional(),
      })
      .openapi({ required: ['KeyInfo'] }),
  })
  .openapi({ required: ['CertificateData', 'Signature'] })
  .openapi('XMLFormatSchema')

const Customkey2SecurityScheme = { in: 'header', name: 'X-2', type: 'apiKey' }

const Customkeys1SecurityScheme = { in: 'header', name: 'X1123', type: 'apiKey' }

const BearerAuthSecurityScheme = { scheme: 'bearer', type: 'http' }

const OauthAuthorizeCodeSecurityScheme = {
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://betaapi.digitallocker.gov.in/public/oauth2/1/authorize',
      scopes: {},
      tokenUrl: 'https://betaapi.digitallocker.gov.in/public/oauth2/1/token',
    },
  },
  type: 'oauth2',
}

const OauthsecuritySecurityScheme = {
  flows: {
    clientCredentials: {
      scopes: { default: 'default scope' },
      tokenUrl: 'https://betaapi.digitallocker.gov.in/public/oauth2/1/token',
    },
  },
  type: 'oauth2',
}

export const postAccount1PushuriRoute = createRoute({
  method: 'post',
  path: '/account/1/pushuri',
  tags: ['DigiLocker Meta APIs'],
  summary: 'Push URI to Account',
  description:
    'The API can use to push or delete a single URI into Digital Locker using DigiLocker Id acquired using Get User Details API. This API can be used to push the certificate details to Digital Locker as and when a certificate is generated in the issuer system. The issuing departments must register on DigiLocker as a registered Issuer and implement the requisite Issuer APIs as mentioned in Digital Locker Issuer API Specification document prior to pushing certificates using this API.',
  operationId: 'Push URI to Account id',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              action: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Action that needs to be taken for the Aadhaar number and URI combination. Possible values are A for adding a new URI, U for updating an already added URI details or D for deleting the URI.',
                }),
              clientid: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Provide the client id that was created during the application registration process on Partners Portal.',
                }),
              digilockerid: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'This is the DigiLocker Id of the user that was acquired using Get User Details API.',
                }),
              docid: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A unique number of the document. This id will be unique within the document type issued by the issuer.',
                }),
              hmac: z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description:
                    'Provide SHA-256 encrypted value of the client secret, clientid and ts parameters above concatenated in this sequence (client secret, clientid, ts). The hmac parameter is used by DigiLocker to ensure the data integrity and authentication of the request. Use the Client Secret Key generated during the application registration process on Partners Portal as the client secret.',
                }),
              issuedate: z
                .string()
                .exactOptional()
                .openapi({ description: 'The issue date of the document in DDMMYYYY format.' }),
              ts: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Provide a timestamp value in UNIX (or POSIX) format in IST time zone in seconds. This timestamp value must not be older than 30 minutes.',
                }),
              uri: z
                .string()
                .exactOptional()
                .openapi({ description: 'This is the unique identifier of the document.' }),
              validfrom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The date from which the document is valid in DDMMYYYY format. This may be same as the issue date.',
                }),
              validto: z
                .string()
                .exactOptional()
                .openapi({ description: 'The expiry date of the document in DDMMYYYY format.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.any().openapi({ title: 'Sample' }) } },
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().exactOptional().openapi({ description: 'invalid_parameter' }),
              error_description: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'One or more of the mandatory parameters is missing or invalid. The error description text will contain one or more of the following error texts:|-  URI parameter is missing or invalid  Doctype parameter is missing or invalid  Description parameter is missing or invalid  Docid parameter is missing or invalid  Issuedate parameter is missing orinvalid  Timestamp parameter is missing or invalid  HMAC parameter is missing or invalid   URI already exists in this account   URI already exists in another account',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'Unauthorized error',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().exactOptional().openapi({ description: 'invalid_client_id' }),
              error_description: z
                .string()
                .exactOptional()
                .openapi({ description: 'The client_id parameter is invalid' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    404: {
      description: 'Not found',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().exactOptional().openapi({ description: 'invalid_digilocker_id' }),
              error_description: z
                .string()
                .exactOptional()
                .openapi({ description: 'The digilockerid parameter is invalid' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'Internal Error',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().exactOptional().openapi({ description: 'unexpected_error' }),
              error_description: z
                .string()
                .exactOptional()
                .openapi({ description: 'Internal server error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ oauthsecurity: [] }],
})

export const postAccount2VerifyRoute = createRoute({
  method: 'post',
  path: '/account/2/verify',
  tags: ['DigiLocker Meta APIs'],
  summary: 'Verify Account',
  description:
    'This API can be used to verify whether a mobile number or Aadhaar number is already registered with DigiLocker.',
  operationId: 'Verify Account id',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              clientid: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Provide the client id that was created during the application registration process on Partners Portal.',
                }),
              hmac: z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description:
                    'Provide SHA-256 encrypted value of the client secret, clientid and ts parameters above concatenated in this sequence (client secret, clientid, ts). The hmac parameter is used by DigiLocker to ensure the data integrity and authentication of the request. Use the Client Secret Key generated during the application registration process on Partners Portal as the client secret.',
                }),
              mobile: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'This is the mobile number of the user. DigiLocker will check whether an account exists for this mobile number. Either uid or mobile is required to verify whether an account exists.',
                }),
              ts: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Provide a timestamp value in UNIX (or POSIX) format in IST time zone in seconds. This timestamp value must not be older than 30 minutes.',
                }),
              uid: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'This is the Aadhaar number of the user. DigiLocker will check whether an account exists for this Aadhaar number. Either uid or mobile is required to verify whether an account exists.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: VerifyAccountResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.any().exactOptional().openapi({ description: 'invalid_parameter' }),
              error_description: z
                .any()
                .exactOptional()
                .openapi({
                  description:
                    'One or more of the mandatory parameters is missing or invalid. The error description text will contain one or more of the following error texts:|-  Either one of uid or mobile number is mandatory  Timestamp parameter is missing or invalid  HMAC parameter is missing or invalid',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'Unauthorized error',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().exactOptional().openapi({ description: 'invalid_client_id' }),
              error_description: z
                .string()
                .exactOptional()
                .openapi({ description: 'The client_id parameter is invalid' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'Internal Error',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.any().exactOptional().openapi({ description: 'unexpected_error' }),
              error_description: z
                .any()
                .exactOptional()
                .openapi({ description: 'Internal server error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ oauthsecurity: [] }],
})

export const getOauth21AuthorizeRoute = createRoute({
  method: 'get',
  path: '/oauth2/1/authorize',
  tags: ['Authorization'],
  summary: 'Get Authorization Code',
  description:
    "Call to this API starts authorization flow using OAuth 2.0 protocol. This isn't an API call—it's a DigiLocker web page that lets the user sign in to DigiLocker and authorize your application to access user’s data. After the user decides whether or not to authorize your app, they will be redirected to the redirect link provided by your application.",
  operationId: 'Get Authorization Code id',
  request: {
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const spread = new Map<string, string[]>([
          ['parameter', ['Code_challenge', 'Code_challenge_method']],
        ])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          client_id: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                description:
                  'Provide the client id that was created during the application registration process on Partners Portal.',
                in: 'query',
                name: 'client_id',
                schema: { type: 'string' },
                required: false,
              },
            }),
          response_type: z
            .string()
            .openapi({
              param: {
                description: 'Provide the grant type requested, either token or code.',
                in: 'query',
                name: 'response_type',
                required: true,
                schema: { type: 'string' },
              },
            }),
          redirect_uri: z
            .string()
            .openapi({
              param: {
                description: 'The URI to redirect the user after authorization has completed.',
                in: 'query',
                name: 'redirect_uri',
                required: true,
                schema: { type: 'string' },
              },
            }),
          state: z
            .string()
            .openapi({
              param: {
                description:
                  'This is your application specific data that will be passed back to your application through redirect_uri.',
                in: 'query',
                name: 'state',
                required: true,
                schema: { type: 'string' },
              },
            }),
          Code_challenge: z
            .object({ parameter: z.enum(['Base64URL', 'SHA256']).exactOptional() })
            .exactOptional()
            .openapi({
              param: {
                description:
                  'A unique random string called code verifier (code_verifier) is\ncreated by the client application for every authorization request.\nThe code_challenge sent as this parameter is the Base64URL (with no\npadding) encoded SHA256 hash of the code verifier.\n        Code block:\n\n       ```\n       string base64_url_encode_without_padding(string arg)\n       { \n          string s = base64encode(arg); //Regular base64encoder with padding\n          s = s.replace(’=’,’’); //Remove any trailing ’=’\n          s = s.replace(’+’, ’-’); //Replace ’+’ with ’-’\n          s = s.replace(’/’, ’_’); //Replace ’/’ with ’_’ return s;\n        }\n        ```\n',
                in: 'query',
                name: 'Code_challenge',
                required: false,
                schema: {
                  example: 'base64_url_encode_without_padding(sha256(code_verifier))',
                  properties: { parameter: { enum: ['Base64URL', 'SHA256'], type: 'string' } },
                  type: 'string',
                },
              },
              example: 'base64_url_encode_without_padding(sha256(code_verifier))',
              required: [],
            }),
          Code_challenge_method: z
            .object({ parameter: z.literal('S256').exactOptional() })
            .exactOptional()
            .openapi({
              param: {
                description:
                  'Specifies what method was used to encode a code_verifier to generate code_challenge parameter above. This parameter must be used with the code_challenge parameter. The only supported values for this parameter is S256.',
                in: 'query',
                name: 'Code_challenge_method',
                required: false,
                schema: {
                  properties: { parameter: { enum: ['S256'], type: 'string' } },
                  type: 'string',
                },
              },
              required: [],
            }),
          dl_flow: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                description:
                  'If this parameter is provided its value will always be signup. This parameter indicates that the user does not have a DigiLocker account and will be directed to the signup flow directly. After the account is created, the user will be directed to the authorization flow. If this parameter is not sent, the user will be redirected to the sign in flow.',
                in: 'query',
                name: 'dl_flow',
                required: false,
                schema: { type: 'string' },
              },
            }),
          Verified_mobile: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int(),
            )
            .exactOptional()
            .openapi({
              param: {
                description:
                  'Verified mobile number of the user. If this parameter is passed, DigiLocker will skip the mobile OTP verification step during sign up. DigiLocker will treat the mobile number passed in this parameter as a verified mobile number by the trusted client application. This parameter will be used only if dl_flow parameter mentioned above is set to signup and will be ignored otherwise.',
                in: 'query',
                name: 'Verified_mobile',
                required: false,
                schema: { type: 'integer' },
              },
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              details: z
                .object({
                  access_token: z.string(),
                  expires_in: z.int(),
                  scope: z.string(),
                  token_type: z.string(),
                })
                .exactOptional()
                .openapi({ required: ['access_token', 'expires_in', 'token_type', 'scope'] }),
            })
            .openapi({ title: 'Sample', required: [] }),
        },
      },
    },
    400: { description: 'Invalid status value' },
  },
  security: [{ oauthAuthorizeCode: [] }],
})

export const postOauth21CodeRoute = createRoute({
  method: 'post',
  path: '/oauth2/1/code',
  tags: ['Authorization API'],
  summary: 'Get Device Code',
  description:
    'The client device calls the DigiLocker API to get the device code by providing the client_id issued to the device OEM and either the username or the mobile number of the user. DigiLocker responds with a device code and then sends an OTP on the mobile number and email address associated with the user’s account. The masked mobile number and email address is also sent in response. The device should use these values to notify the users about the mobile and email address on which the OTP has been sent.',
  operationId: 'Get Device Code id',
  request: { body: { content: { 'application/json': { schema: DeviceAuthorizationCodeSchema } } } },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: DeviceAuthorizationCodeResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z.xor([
            ResponseOneSchema,
            ResponseTwoSchema,
            ResponseThreeSchema,
            ResponseFourSchema,
          ]),
        },
      },
    },
    401: {
      description: 'The client_id parameter is invalid.',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().exactOptional().openapi({ example: 'invalid_client_id' }),
              error_description: z
                .string()
                .exactOptional()
                .openapi({ example: 'The client_id parameter is invalid' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'Internal Error',
      content: { 'application/json': { schema: z.xor([ResponseFiveSchema, ResponseSixSchema]) } },
    },
  },
  security: [{ oauthsecurity: [] }],
})

export const postOauth21FileUploadRoute = createRoute({
  method: 'post',
  path: '/oauth2/1/file/upload',
  tags: ['File APIs'],
  summary: 'Upload file to locker',
  description:
    'This API can be used to save/upload a file to uploaded documents in DigiLocker. The allowed file types are JPG, JPEG, PNG and PDF. The file size must not exceed 10MB.',
  operationId: 'Upload File to Locker id',
  request: {
    headers: z.object({
      path: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The destination path of the file in DigiLocker including filename.',
            in: 'header',
            name: 'path',
            required: false,
            schema: { type: 'string' },
          },
        }),
      hmac: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This is used to verify the integrity of the file data. The client app calculates the hash message authentication code (HMAC) of the file content using SHA256 hashing algorithm and the client secret as the hashing key. The resulting HMAC is converted to Base64 format and sent in this parameter. Upon upload of file, DigiLocker calculates the HMAC of the file data and compares it with this HMAC..',
            in: 'header',
            name: 'hmac',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/octet-stream': { schema: FileUploadSchema },
        'image/jpeg': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'image/jpg': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'image/pdf': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'image/png': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: FileUploadResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .enum([
                  'path_missing',
                  'contenttype_missing',
                  'hmac_missing',
                  'filename_missing',
                  'hmac_mismatch',
                  'invalid_filename',
                  'invalid_filesize',
                  'invalid_filetype',
                  'invalid_path',
                  'file_data_missing',
                  'mimetype_mismatch',
                ])
                .exactOptional(),
              error_description: z
                .enum([
                  'Path parameter is missing',
                  'Content-Type parameter is missing',
                  'HMAC parameter is missing',
                  'Filename is missing in path parameter',
                  'HMAC does not match',
                  'Restricted characters are not allowed in file name',
                  'The file size exceeds maximum allowed file size of 10MB',
                  'The file type is not allowed',
                  'The destination folder does not exist',
                  'Missing file content in the request',
                  'The mimetype provided in Content-Type parameter does not match with the mimetype of the file',
                ])
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'Unauthorized error',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().exactOptional().openapi({ example: 'invalid_token' }),
              error_description: z
                .string()
                .exactOptional()
                .openapi({ example: 'The access token is invalid' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'Internal Error',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().exactOptional().openapi({ description: 'unexpected_error' }),
              error_description: z
                .string()
                .exactOptional()
                .openapi({ description: 'Internal server error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getOauth21FileUriRoute = createRoute({
  method: 'get',
  path: '/oauth2/1/file/{uri}',
  tags: ['File APIs'],
  summary: 'Get File from URI',
  description:
    'Returns a file from URI. This API can be used to fetch both issued document and uploaded document.',
  operationId: 'Get File from URI id',
  request: {
    params: z.object({
      uri: z
        .string()
        .openapi({
          param: {
            description: 'This is the unique identifier of the document.',
            in: 'path',
            name: 'uri',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/pdf': { schema: z.string().openapi({ example: 'pdf binary content' }) },
        'image/jpeg': { schema: z.string().openapi({ example: 'jpeg binary content' }) },
        'image/jpg': { schema: z.string().openapi({ example: 'jpg binary content' }) },
        'image/png': { schema: z.string().openapi({ example: 'png binary content' }) },
      },
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().exactOptional().openapi({ example: 'uri_missing' }),
              error_description: z
                .string()
                .exactOptional()
                .openapi({ example: 'URI parameter missing' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'Unauthorized error',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().exactOptional().openapi({ example: 'invalid_token' }),
              error_description: z
                .string()
                .exactOptional()
                .openapi({ example: 'The access token is invalid' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    404: {
      description: 'Not found',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().exactOptional().openapi({ example: 'invalid_uri' }),
              error_description: z
                .string()
                .exactOptional()
                .openapi({ example: 'No file found for given URI' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'Internal Error',
      content: {
        'application/json': {
          schema: z.xor([Response3Schema, Response4Schema, Response5Schema, Response6Schema]),
        },
      },
    },
    503: {
      description: 'Gateway timeout',
      content: { 'application/json': { schema: z.xor([Response1Schema, Response2Schema]) } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getOauth21FilesIndexRoute = createRoute({
  method: 'get',
  path: '/oauth2/1/files/',
  tags: ['File APIs'],
  summary: 'Get List of Self Uploaded Documents',
  description:
    'Returns the list of meta-data about documents or folders in user’s DigiLocker in a specific location.',
  operationId: 'Get List of Self Uploaded Documents',
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              directory: z.string().min(1),
              items: z
                .array(
                  z
                    .object({
                      date: z.string().min(1),
                      description: z.string(),
                      id: z.string().min(1).openapi({ example: 189079894 }),
                      issuer: z.string(),
                      mime: z.string(),
                      name: z.string().min(1),
                      parent: z.string().min(1),
                      size: z.string().min(1),
                      type: z.string().min(1),
                      uri: z.string(),
                    })
                    .openapi({
                      required: [
                        'id',
                        'name',
                        'type',
                        'size',
                        'date',
                        'parent',
                        'mime',
                        'uri',
                        'description',
                        'issuer',
                      ],
                    }),
                )
                .min(1)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
            })
            .openapi({ required: ['directory', 'items'], title: 'Sample' }),
        },
      },
    },
    401: {
      description: 'Unauthorized error',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().exactOptional().openapi({ example: 'invalid_token' }),
              error_description: z
                .string()
                .exactOptional()
                .openapi({ example: 'The access token is invalid' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    404: {
      description: 'Not found',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().exactOptional().openapi({ example: 'invalid_id' }),
              error_description: z
                .string()
                .exactOptional()
                .openapi({ example: 'The folder does not exist' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'Internal Error',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().exactOptional().openapi({ example: 'unexpected_error' }),
              error_description: z
                .string()
                .exactOptional()
                .openapi({ example: 'Internal server error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getOauth21FilesIssuedRoute = createRoute({
  method: 'get',
  path: '/oauth2/1/files/issued',
  tags: ['File APIs'],
  summary: 'Issued Documents',
  description: 'Returns the list of meta-data about issued documents in user’s DigiLocker.',
  operationId: 'Get List of issued Documents Version1 id',
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              details: z
                .object({
                  date: z
                    .string()
                    .openapi({
                      description:
                        'This contains the date on which the certificate was last modified in DigiLocker.',
                      example: '2015-05-12T15:50:38Z',
                    }),
                  description: z
                    .string()
                    .openapi({
                      description:
                        'This is the descriptive document type stored in DigiLocker such as ‘Income Certificate’ or ‘Driving License’.',
                      example: 'Class XII Marksheet',
                    }),
                  doctype: z
                    .string()
                    .openapi({
                      description: 'A 5 character unique document type provided by DigiLocker.',
                      example: 'HSCER',
                    }),
                  issuer: z
                    .string()
                    .openapi({ description: 'The name of the issuer.', example: 'CBSE' }),
                  issuerid: z
                    .string()
                    .openapi({
                      description: 'Unique DigiLocker issuer id as mentioned in the URI.',
                      example: 'in.gov.cbse',
                    }),
                  mime: z
                    .string()
                    .openapi({
                      description:
                        'The list of mime types for the certificate data. This field will contain “application/PDF” or “application/xml”.',
                      example: 'application/pdf',
                    }),
                  name: z
                    .string()
                    .openapi({
                      description: 'The name of the certificate.',
                      example: 'Class XII Marksheet',
                    }),
                  parent: z.string().openapi({ description: 'This will be blank.', example: ' ' }),
                  size: z.string().openapi({ description: 'This will be blank.', example: ' ' }),
                  type: z.string().openapi({ description: 'String file.', example: 'file' }),
                  uri: z
                    .string()
                    .openapi({
                      description:
                        'This is the unique identifier of the document shared by the user in DigiLocker. You will use this identifier to get the actual file from DigiLocker using the API.',
                      example: 'in.gov.cbse-HSCER-201412345678',
                    }),
                })
                .exactOptional()
                .openapi({
                  required: [
                    'type',
                    'name',
                    'size',
                    'date',
                    'parent',
                    'mime',
                    'uri',
                    'doctype',
                    'description',
                    'issuer',
                    'issuerid',
                  ],
                }),
            })
            .openapi({ title: 'Sample', required: [] }),
        },
      },
    },
    401: {
      description: 'Unauthorized error',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().exactOptional().openapi({ example: 'invalid_token' }),
              error_description: z
                .string()
                .exactOptional()
                .openapi({ example: 'The access token is invalid' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'Internal Error',
      content: { 'application/json': { schema: z.xor([ResponseSixSchema, ResponseSevenSchema]) } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getOauth21FilesIdRoute = createRoute({
  method: 'get',
  path: '/oauth2/1/files/{id}',
  tags: ['File APIs'],
  summary: 'Get List of Self Uploaded Documents',
  description:
    'Returns the list of meta-data about documents or folders in user’s DigiLocker in a specific location.',
  operationId: 'Get List of Self Uploaded Documents id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'The id of the folder to list. To list the files of root folder of a user’s locker, do not send this parameter. This is sent as a part of the URL.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              details: z
                .object({
                  date: z
                    .string()
                    .openapi({
                      description:
                        'This contains the date of file upload in case of self uploaded documents',
                      example: '2015-05-12T15:50:38Z',
                    }),
                  description: z
                    .string()
                    .openapi({
                      description:
                        'This is the descriptive document type stored in DigiLocker such as ‘Income Certificate’ or ‘Driving License’.',
                      example: '',
                    }),
                  id: z
                    .int()
                    .openapi({ description: 'The id if this item is a folder.', example: '5678' }),
                  issuer: z
                    .string()
                    .openapi({
                      description:
                        'The name of the issuer. This is blank in case of uploaded documents and folders.',
                      example: '',
                    }),
                  mime: z
                    .string()
                    .openapi({
                      description:
                        'The mime type of the file. This field will contain “application/PDF” for PDF files; “image/png” for PNG files and “image/jpg” or “image/jpeg” for JPG/JPEG files. This will be blank in case of folder.',
                      example: '',
                    }),
                  name: z
                    .string()
                    .openapi({
                      description: 'The name of the file or folder.',
                      example: 'My Documents',
                    }),
                  parent: z
                    .string()
                    .openapi({ description: 'The id of the parent folder.', example: '1234' }),
                  size: z
                    .string()
                    .openapi({ description: 'Size of file or folder.', example: '366481' }),
                  type: z
                    .string()
                    .openapi({
                      description: 'String dir for folder and string file for file.',
                      example: 'dir',
                    }),
                  uri: z
                    .string()
                    .openapi({
                      description:
                        'This is the unique identifier of the document shared by the user in DigiLocker. You will use this identifier to get the actual file from DigiLocker using the API. URI will be blank in case of folder.',
                      example: '',
                    }),
                })
                .exactOptional()
                .openapi({
                  required: [
                    'type',
                    'name',
                    'id',
                    'size',
                    'date',
                    'parent',
                    'mime',
                    'uri',
                    'description',
                    'issuer',
                  ],
                }),
            })
            .openapi({ title: 'Sample', required: [] }),
        },
      },
    },
    401: {
      description: 'Unauthorized error',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().exactOptional().openapi({ example: 'invalid_token' }),
              error_description: z
                .string()
                .exactOptional()
                .openapi({ example: 'The access token is invalid' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    404: {
      description: 'Not found',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().exactOptional().openapi({ example: 'invalid_id' }),
              error_description: z
                .string()
                .exactOptional()
                .openapi({ example: 'The folder does not exist' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'Internal Error',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().exactOptional().openapi({ example: 'unexpected_error' }),
              error_description: z
                .string()
                .exactOptional()
                .openapi({ example: 'Internal server error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postOauth21PullDoctypeRoute = createRoute({
  method: 'post',
  path: '/oauth2/1/pull/doctype',
  tags: ['DigiLocker Meta APIs'],
  summary: 'Get List of Documents Provided by an Issuer',
  description:
    'Returns a list of documents/certificates issued by an issuer organization registered with DigiLocker.',
  operationId: 'Get List of Documents Provided by an Issuer id',
  request: {
    body: { content: { 'application/x-www-form-urlencoded': { schema: DocTypeSchema } } },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: DocTypeResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.any().exactOptional().openapi({ description: 'invalid_parameter' }),
              error_description: z
                .any()
                .exactOptional()
                .openapi({
                  description:
                    'One or more of the mandatory parameters is missing or invalid. The error description text will contain one or more of the following error texts:|-  The orgid parameter is missing or invalid  Timestamp parameter is missing or invalid  HMAC parameter is missing or invalid',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'Unauthorized error',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().exactOptional().openapi({ example: 'invalid_client_id' }),
              error_description: z
                .string()
                .exactOptional()
                .openapi({ example: 'The client_id parameter is invalid' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'Internal Error',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.any().exactOptional().openapi({ description: 'unexpected_error' }),
              error_description: z
                .any()
                .exactOptional()
                .openapi({ description: 'Internal server error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ oauthsecurity: [] }],
})

export const postOauth21PullIssuersRoute = createRoute({
  method: 'post',
  path: '/oauth2/1/pull/issuers',
  tags: ['DigiLocker Meta APIs'],
  summary: 'Get List of Issuers',
  description: 'Returns the list of issuers registered with DigiLocker.',
  operationId: 'Get List of Issuers id',
  request: { body: { content: { 'application/x-www-form-urlencoded': { schema: IssuerSchema } } } },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: IssuerResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().exactOptional().openapi({ example: 'invalid_parameter' }),
              error_description: z
                .string()
                .exactOptional()
                .openapi({
                  example:
                    'One or more of the mandatory parameters is missing or invalid. The error description text will contain one or more of the following error texts:|-  Timestamp parameter is missing or invalid  HMAC parameter is missing or invalid',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'Unauthorized error',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().exactOptional().openapi({ example: 'invalid_client_id' }),
              error_description: z
                .string()
                .exactOptional()
                .openapi({ example: 'The client_id parameter is invalid' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'Internal Error',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.any().exactOptional().openapi({ description: 'unexpected_error' }),
              error_description: z
                .any()
                .exactOptional()
                .openapi({ description: 'Internal server error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ oauthsecurity: [] }],
})

export const postOauth21PullParametersRoute = createRoute({
  method: 'post',
  path: '/oauth2/1/pull/parameters',
  tags: ['DigiLocker Meta APIs'],
  summary: 'Get Search Parameters for a Document',
  description:
    'Returns a list of parameters required to search a document/certificate of an issuer organization registered with DigiLocker. These parameters are used to pull a document from issuer’s repository using Pull Document API mentioned in subsequent section.',
  operationId: 'Get Search Parameters for a Document id',
  request: {
    body: { content: { 'application/x-www-form-urlencoded': { schema: SearchParametersSchema } } },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: SearchParametersResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.any().exactOptional().openapi({ description: 'invalid_parameter' }),
              error_description: z
                .any()
                .exactOptional()
                .openapi({
                  description:
                    'One or more of the mandatory parameters is missing or invalid. The error description text will contain one or more of the following error texts:|-  The orgid parameter is missing or invalid  The doctype parameter is missing or invalid  Timestamp parameter is missing or invalid  HMAC parameter is missing or invalid',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'Unauthorized error',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().exactOptional().openapi({ example: 'invalid_client_id' }),
              error_description: z
                .string()
                .exactOptional()
                .openapi({ example: 'The client_id parameter is invalid' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'Internal Error',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.any().exactOptional().openapi({ description: 'unexpected_error' }),
              error_description: z
                .any()
                .exactOptional()
                .openapi({ description: 'Internal server error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ oauthsecurity: [] }],
})

export const postOauth21PullPulldocumentRoute = createRoute({
  method: 'post',
  path: '/oauth2/1/pull/pulldocument',
  tags: ['File APIs'],
  summary: 'Pull Document',
  description:
    'This API allows a client application to search a document/certificate from issuer’s repository using the parameters provided by a user. The searched document is saved in user’s issued document section of DigiLocker if the search is successful.',
  operationId: 'Pull Document id',
  request: {
    body: {
      content: { 'application/x-www-form-urlencoded': { schema: PullDocumentSchemaSchema } },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              details: z
                .object({ uri: z.string() })
                .exactOptional()
                .openapi({ required: ['uri'] }),
            })
            .openapi({ title: 'Sample', required: [] }),
        },
      },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: z.xor([Response13Schema, ResponseSixSchema]) } },
    },
    401: {
      description: 'Unauthorized error',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().exactOptional().openapi({ example: 'invalid_token' }),
              error_description: z
                .string()
                .exactOptional()
                .openapi({ example: 'The access token is invalid' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    404: {
      description: 'Not found',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.any().exactOptional().openapi({ description: 'record_not_found' }),
              error_description: z
                .any()
                .exactOptional()
                .openapi({
                  description:
                    'No record found in issuer database for given criteria. Please check the details and try again. If problem persists, see the FAQ section for possible causes.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'Internal Error',
      content: {
        'application/json': {
          schema: z.xor([
            Response14Schema,
            Response15Schema,
            Response16Schema,
            Response17Schema,
            Response18Schema,
          ]),
        },
      },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postOauth21RevokeRoute = createRoute({
  method: 'post',
  path: '/oauth2/1/revoke',
  tags: ['Token Revocation API'],
  summary: 'Revoke Token.',
  description:
    'Client applications can revoke a previously obtained refresh or access token when it is no longer needed. This is done by making a request to the token revocation endpoint. DigiLocker will invalidate the specified token and, if applicable, other tokens based on the same authorisation grant. This API may be used to sign out a user from DigiLocker. This API will work for server based web applications, mobile application and limited input devices.',
  operationId: 'get token revocation id',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              token: z.string().openapi({ description: 'The token that needs to be revoked.' }),
              token_type_hint: z
                .enum(['refresh_token', 'access_token'])
                .exactOptional()
                .openapi({
                  description:
                    'The type of the above token. The value will be one of access_token or refresh_token. If this parameter is not sent, DigiLocker will look for this token in both access and refresh tokens and then revoke it.',
                }),
            })
            .openapi({ required: ['token'] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'successful operation' },
    400: { description: 'The token is invalid' },
  },
  security: [{ oauthsecurity: [] }],
})

export const postOauth21TokenRoute = createRoute({
  method: 'post',
  path: '/oauth2/1/token',
  tags: ['Authorization'],
  summary: 'Get Access Token',
  description:
    "This endpoint only applies to apps using the authorization code flow. An app calls this endpoint to acquire a bearer token once the user has authorized the app. Calls to /oauth2/1/token need to be authenticated using the app's key and secret. These can either be passed as application/x-www-form-urlencoded POST parameters (see parameters below) or via HTTP basic authentication. If basic authentication is used, the app key should be provided as the username, and the app secret should be provided as the password.",
  operationId: 'getaccesstoken id',
  request: {
    body: {
      description: 'Details of documents being created.',
      content: {
        'application/json': {
          schema: z
            .object({
              'Get access token using authorization code': AccessTokenSchema.exactOptional(),
              'Get access token using device code and OTP': DeviceAccessTokenSchema.exactOptional(),
              'Get access token using refresh token': RefreshTokenSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: AccessResponseSchema } },
    },
    400: { description: 'Bad request' },
    401: { description: 'If the access token is expired or has been revoked by DigiLocker user.' },
  },
})

export const getOauth21UserRoute = createRoute({
  method: 'get',
  path: '/oauth2/1/user',
  tags: ['Account Detail API'],
  summary: 'Get User Details',
  description:
    'Client applications can call this API to get the DigiLocker Id, name, date of birth and gender of the account holder. An access token is required to call this API. The API will return the user details of the account with which the access token is linked. It is strongly recommended that the API can be called by client application only once after acquiring the access token. Since the user details do not change, the client application may store the values and use them when necessary than calling this API repeatedly.',
  operationId: 'Account Detail API id',
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              details: z
                .object({
                  digilockerid: z
                    .string()
                    .openapi({
                      description: 'A unique 36 character DigiLocker Id of the user account.',
                      example: '123e4567-e89b-12d3-a456-426655440000',
                    }),
                  dob: z
                    .string()
                    .openapi({
                      description:
                        'This is date of birth of the user as registered with DigiLocker in DDMMYYYY format.',
                      example: '31121970',
                    }),
                  eaadhar: z
                    .enum(['Y', 'N'])
                    .exactOptional()
                    .openapi({
                      description:
                        'This indicates whether eAadhaar data is available for this account. Possible values are Y and N.',
                    }),
                  gender: z
                    .enum(['M', 'F', 'T'])
                    .openapi({
                      description:
                        'This is gender of the user as registered with DigiLocker. The possible values are M, F, T for male, female and transgender respectively.',
                    }),
                  name: z
                    .string()
                    .openapi({
                      description: 'The name of the user as registered with DigiLocker.',
                      example: 'Sunil Kumar',
                    }),
                })
                .exactOptional()
                .openapi({ required: ['digilockerid', 'name', 'dob', 'gender', 'eaadhaar'] }),
            })
            .openapi({ title: 'Sample', required: [] }),
        },
      },
    },
    401: {
      description: 'Unauthorized error',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().exactOptional().openapi({ example: 'invalid_token' }),
              error_description: z
                .string()
                .exactOptional()
                .openapi({ example: 'The access token is invalid' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().exactOptional().openapi({ example: 'unexpected_error' }),
              error_description: z
                .string()
                .exactOptional()
                .openapi({ example: 'Internal server error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getOauth21XmlUriRoute = createRoute({
  method: 'get',
  path: '/oauth2/1/xml/{uri}',
  tags: ['File APIs'],
  summary: 'Get Certificate Data in XML Format from URI',
  description:
    'Returns the certificate data in machine readable XML format for a URI. This API can be used to only for issued documents. The XML data may not be available for all documents. If the XML data is available for a particular document, the mime parameter in Get List of Issued Documents API will contain application/xml. Please refer to Digital Locker XML Certificate Formats for more details of XML formats of various documents.',
  operationId: 'Get Certificate Data in XML Format from URI id',
  request: {
    params: z.object({
      uri: z
        .string()
        .openapi({
          param: { in: 'path', name: 'uri', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/xml': { schema: XMLFormatSchemaSchema } },
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().exactOptional().openapi({ example: 'uri_missing' }),
              error_description: z
                .string()
                .exactOptional()
                .openapi({ example: 'URI parameter missing' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'Unauthorized error',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().exactOptional().openapi({ example: 'invalid_token' }),
              error_description: z
                .string()
                .exactOptional()
                .openapi({ example: 'The access token is invalid' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    404: {
      description: 'Not found',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().exactOptional().openapi({ example: 'invalid_uri' }),
              error_description: z
                .string()
                .exactOptional()
                .openapi({ example: 'No file found for given URI' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'Internal Error',
      content: {
        'application/json': {
          schema: z.xor([Response3Schema, Response4Schema, Response5Schema, Response6Schema]),
        },
      },
    },
    503: {
      description: 'Gateway timeout',
      content: { 'application/json': { schema: z.xor([Response1Schema, Response2Schema]) } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getOauth22FilesIssuedRoute = createRoute({
  method: 'get',
  path: '/oauth2/2/files/issued',
  tags: ['File APIs'],
  summary: 'Issued Documents',
  description: 'Returns the list of meta-data about issued documents in user’s DigiLocker.',
  operationId: 'Get List of issued Documents id',
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              items: z
                .array(
                  z
                    .object({
                      date: z.string().min(1),
                      description: z.string().min(1),
                      doctype: z.string().min(1),
                      issuer: z.string().min(1),
                      issuerid: z.string().min(1),
                      mime: z.array(z.object({})).exactOptional(),
                      name: z.string().min(1),
                      parent: z.string(),
                      size: z.string(),
                      type: z.string().min(1),
                      uri: z.string().min(1),
                    })
                    .openapi({
                      required: [
                        'name',
                        'type',
                        'size',
                        'date',
                        'parent',
                        'uri',
                        'doctype',
                        'description',
                        'issuerid',
                        'issuer',
                      ],
                    }),
                )
                .min(1)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
              resource: z.string().min(1),
            })
            .openapi({ required: ['items', 'resource'] }),
        },
      },
    },
    401: {
      description: 'Unauthorized error',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().exactOptional().openapi({ example: 'invalid_token' }),
              error_description: z
                .string()
                .exactOptional()
                .openapi({ example: 'The access token is invalid' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'Internal Error',
      content: { 'application/json': { schema: z.xor([ResponseSixSchema, ResponseSevenSchema]) } },
    },
  },
})

export const getOauth22XmlEaadhaarRoute = createRoute({
  method: 'get',
  path: '/oauth2/2/xml/eaadhaar',
  tags: ['File APIs'],
  summary: 'Get e-Aadhaar Data in XML Format',
  description: 'Returns e-Aadhaar data in XML format for the account.',
  operationId: 'Get e-Aadhaar Data in XML Format id',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/xml': { schema: EaadharXamlSchemaSchema } },
    },
    401: {
      description: 'Unauthorized error',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().exactOptional().openapi({ example: 'invalid token' }),
              error_description: z
                .string()
                .exactOptional()
                .openapi({ example: 'The access token is invalid' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    404: {
      description: 'Not found',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.enum(['aadhaar_not_linked', 'aadhaar_not_available']).exactOptional(),
              error_description: z
                .enum([
                  'Aadhaar is not linked to the account',
                  'Aadhaar data is not available for this user. Please perform Aadhaar eKYC again.',
                ])
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'Internal Error',
      content: {
        'application/json': {
          schema: z.xor([Response3Schema, Response4Schema, Response5Schema, Response6Schema]),
        },
      },
    },
    503: {
      description: 'Gateway timeout',
      content: { 'application/json': { schema: z.xor([Response1Schema, Response2Schema]) } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postSignup1DemoauthverifyRoute = createRoute({
  method: 'post',
  path: '/signup/1/demoauthverify',
  tags: ['DigiLocker Sign up APIs'],
  summary: 'Verify OTP',
  description:
    'This API is used to verify the OTP sent by DigiLocker during the sign up API call above.',
  operationId: 'Verify OTP id',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              clientid: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Provide the client id that was created during the application registration process on Partners Portal.',
                }),
              hmac: z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description:
                    'Provide SHA-256 encrypted value of the client secret, clientid and ts parameters above concatenated in this sequence (client secret, clientid, ts). The hmac parameter is used by DigiLocker to ensure the data integrity and authentication of the request. Use the Client Secret Key generated during the application registration process on Partners Portal as the client secret.',
                }),
              mobile: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'This is the mobile number of the user. DigiLocker will check whether an account exists for this mobile number. Either uid or mobile is required to verify whether an account exists.',
                }),
              otp: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({ description: 'The OTP provided by the user.' }),
              ts: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Provide a timestamp value in UNIX (or POSIX) format in IST time zone in seconds. This timestamp value must not be older than 30 minutes.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: DemoAuthVerifyResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': { schema: z.xor([Response7Schema, Response8Schema, Response9Schema]) },
      },
    },
    401: {
      description: 'Unauthorized error',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().exactOptional().openapi({ example: 'invalid_client_id' }),
              error_description: z
                .string()
                .exactOptional()
                .openapi({ example: 'The client_id parameter is invalid' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'Internal Error',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.any().exactOptional().openapi({ description: 'unexpected_error' }),
              error_description: z
                .any()
                .exactOptional()
                .openapi({ description: 'Internal server error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ oauthsecurity: [] }],
})

export const postSignup2DemoauthRoute = createRoute({
  method: 'post',
  path: '/signup/2/demoauth',
  tags: ['DigiLocker Sign up APIs'],
  summary: 'SIGN UP',
  description:
    'This API is used to validate Aadhaar details and verify the mobile number by generating an OTP. This API call, if successful, will be followed by verify OTP call by the partner application if the user is online or available to perform OTP validation as indicated in verification parameter',
  operationId: 'SIGN UP id',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              clientid: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Provide the client id that was created during the application registration process on Partners Portal.',
                }),
              consent: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The consent indicator from the user for performing demographic authentication using Aadhaar details. This Partner Application must capture the user consent for performing the Aadhaar demographic authentication. The possible values are ‘Y’ and ‘N’. The sign up request will be processed only when this indicator is ‘Y’.',
                }),
              demoauth: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The parameter indicates whether Aadhaar demographic authentication must be successful for creating DigiLocker account. The possible values are ‘Y’ and ‘N’. The value of ‘Y’ will perform Aadhaar demographic authentication and will return errors if any in response. The value of ‘N’ will also perform Aadhaar demographic authentication but will return any error in case of authentication failure. It will create a basic mobile based account for the user. Value ‘N’ should be used when the user account needs to be created in the absence of the user.',
                }),
              dob: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'This is date of birth of the user as mentioned in Aadhaar in DDMMYYYY format.',
                }),
              gender: z
                .enum(['M', 'F', 'T'])
                .exactOptional()
                .openapi({
                  description:
                    'This is gender of the user as mentioned in Aadhaar. The possible values are M, F, T for male, female and transgender respectively.',
                }),
              hmac: z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description:
                    'Provide SHA-256 encrypted value of the client secret, clientid and ts parameters above concatenated in this sequence (client secret, clientid, ts). The hmac parameter is used by DigiLocker to ensure the data integrity and authentication of the request. Use the Client Secret Key generated during the application registration process on Partners Portal as the client secret.',
                }),
              mobile: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'This is the mobile number of the user. DigiLocker will check whether an account exists for this mobile number. Either uid or mobile is required to verify whether an account exists.',
                }),
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'This is name of the user as mentioned in Aadhaar.' }),
              ts: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Provide a timestamp value in UNIX (or POSIX) format in IST time zone in seconds. This timestamp value must not be older than 30 minutes.',
                }),
              uid: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'This is the Aadhaar number of the user. DigiLocker will check whether an account exists for this Aadhaar number. Either uid or mobile is required to verify whether an account exists.',
                }),
              verification: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The parameter indicates whether the mobile number provided above should be validated by DigiLocker. If this parameter is ‘Y’, the DigiLocker sends an OTP to verify the mobile number. In this case the client application will call the second API to validate the OTP. The user will be signed on only after successful OTP validation. This flow should be used when the user account is created by user himself/herself or the user is present to provide the OTP. If this parameter is ‘N’, the user account will be created without OTP validation. The OTP validation will be performed when the user signs in for the first time in DigiLocker. This flow should be used when the user account needs to be created in the absence of the user.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: DemoAuthResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: z.xor([Response10Schema, Response11Schema, Response12Schema]),
        },
      },
    },
    401: {
      description: 'Unauthorized error',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().exactOptional().openapi({ example: 'invalid_client_id' }),
              error_description: z
                .string()
                .exactOptional()
                .openapi({ example: 'The client_id parameter is invalid' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'Internal Error',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.any().exactOptional().openapi({ description: 'unexpected_error' }),
              error_description: z
                .any()
                .exactOptional()
                .openapi({ description: 'Internal server error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ oauthsecurity: [] }],
})

export const postStatistics1CountsRoute = createRoute({
  method: 'post',
  path: '/statistics/1/counts',
  tags: ['DigiLocker Meta APIs'],
  summary: 'Get Statistics',
  description:
    'Returns DigiLocker statistics such as the count of users, authentic documents, issuers and requesters as on a specific date.',
  operationId: 'Get Statistics id',
  request: { body: { content: { 'multipart/form-data': { schema: GetStatisticsSchema } } } },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: GetStatisticsResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().exactOptional().openapi({ description: 'invalid_parameter' }),
              error_description: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'One or more of the mandatory parameters is missing or invalid. The error description text will contain one or more of the following error texts:|-  Timestamp parameter is missing or invalid  HMAC parameter is missing or invalid',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'Unauthorized error',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().exactOptional().openapi({ description: 'invalid_client_id' }),
              error_description: z
                .string()
                .exactOptional()
                .openapi({ description: 'The client_id parameter is invalid' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'Internal Error',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().exactOptional().openapi({ description: 'unexpected_error' }),
              error_description: z
                .string()
                .exactOptional()
                .openapi({ description: 'Internal server error' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ oauthsecurity: [] }],
})
