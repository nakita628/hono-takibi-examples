import { createRoute, z } from '@hono/zod-openapi'

const ErrorThrottledSchema = z
  .object({
    detail: z
      .string()
      .openapi({
        description: 'Additional information about the error',
        example: 'Please wait, then retry your request',
      }),
    instance: z
      .string()
      .openapi({ description: 'Internal Trace ID', example: 'bf0ca0bf927b3b52e3cb03217e1a1ddf' }),
    title: z.string().openapi({ description: 'Generic error message', example: 'Rate Limit Hit' }),
    type: z
      .string()
      .openapi({
        description: 'Link to error / remediation options',
        example: 'https://developer.vonage.com/api-errors/verify#rate-limit',
      }),
  })
  .openapi({ required: ['type', 'title', 'detail', 'instance'] })
  .openapi('ErrorThrottled')

const ApiKeySchema = z
  .string()
  .openapi({
    description:
      'You can find your API key in your [account dashboard](https://dashboard.nexmo.com)',
    example: 'abcd1234',
  })
  .openapi('ApiKey')

const ApiSecretSchema = z
  .string()
  .openapi({
    description:
      'You can find your API secret in your [account dashboard](https://dashboard.nexmo.com)',
    example: 'Sup3rS3cr3t!!',
  })
  .openapi('ApiSecret')

const CheckErrorResponseSchema = z
  .object({
    error_text: z
      .string()
      .exactOptional()
      .openapi({
        description: 'If the `status` is non-zero, this explains the error encountered.',
        example: 'The code inserted does not match the expected value',
      }),
    request_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `request_id` that you received in the response to the Verify request and used in the Verify check request.',
        example: 'abcdef0123456789abcdef0123456789',
      }),
    status: z
      .enum(['0', '1', '2', '3', '4', '5', '6', '16', '17'])
      .exactOptional()
      .openapi({
        description:
          'Code | Text | Description\n-- | -- | --\n0 | Success | The request was successfully accepted by Vonage.\n1 | Throttled | You are trying to send more than the maximum of 30 requests per second.\n2 | Your request is incomplete and missing the mandatory parameter `$parameter` | The stated parameter is missing.\n3 | Invalid value for parameter `$parameter` | Invalid value for parameter. If you see Facility not allowed in the error text, check that you are using the correct Base URL in your request.\n4 | Invalid credentials were provided | The supplied API key or secret in the request is either invalid or disabled.\n5 | Internal Error | An error occurred processing this request in the Cloud Communications Platform.\n6 | The Vonage platform was unable to process this message for the following reason: `$reason` | The request could not be routed.\n16 | The code inserted does not match the expected value |\n17 | The wrong code was provided too many times | You can run Verify check on a specific `request_id` up to three times unless a new verification code is generated. If you check a request more than three times, it is set to FAILED and you cannot check it again.\n',
        example: '16',
      }),
  })
  .openapi({ description: 'Error', xml: { name: 'verify_response' }, required: [] })
  .openapi('CheckErrorResponse')

const CheckRequestSchema = z
  .object({
    api_key: ApiKeySchema,
    api_secret: ApiSecretSchema,
    code: z
      .string()
      .min(4)
      .max(6)
      .openapi({ description: 'The verification code entered by your user.', example: '1234' }),
    ip_address: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: '(This field is no longer used)',
        example: '123.0.0.255',
      }),
    request_id: z
      .string()
      .max(32)
      .openapi({
        description:
          'The Verify request to check. This is the `request_id` you received in the response to the Verify request.',
        example: 'abcdef0123456789abcdef0123456789',
      }),
  })
  .openapi({ required: ['api_key', 'api_secret', 'request_id', 'code'] })
  .openapi('CheckRequest')

const EstimatedPriceMessagesSentSchema = z
  .string()
  .openapi({
    description:
      'This field may not be present, depending on your pricing model. The\nvalue indicates the cost (in EUR) of the calls made and messages sent\nfor the verification process. This value may be updated during and\nshortly after the request completes because user input events can\noverlap with message/call events. When this field is present, the total\ncost of the verification is the sum of this field and the `price` field.\n',
    example: '0.03330000',
  })
  .openapi('EstimatedPriceMessagesSent')

const CheckResponseSchema = z
  .object({
    currency: z
      .string()
      .exactOptional()
      .openapi({ description: 'The currency code.', example: 'EUR' }),
    estimated_price_messages_sent: EstimatedPriceMessagesSentSchema.exactOptional(),
    event_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the verification event, such as an SMS or TTS call.',
        example: '0A00000012345678',
      }),
    price: z
      .string()
      .exactOptional()
      .openapi({ description: 'The cost incurred for this request.', example: '0.10000000' }),
    request_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `request_id` that you received in the response to the Verify request and used in the Verify check request.',
        example: 'abcdef0123456789abcdef0123456789',
      }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A value of `0` indicates that your user entered the correct code. If it is non-zero, check the `error_text`.',
        example: '0',
      }),
  })
  .openapi({ description: 'Success', xml: { name: 'verify_response' }, required: [] })
  .openapi('CheckResponse')

const ControlErrorResponseSchema = z
  .object({
    error_text: z
      .string()
      .exactOptional()
      .openapi({
        description: 'If the `status` is non-zero, this explains the error encountered.',
        example: "The requestId 'abcdef0123456789abcdef' does not exist or its no longer active.",
      }),
    status: z
      .enum(['0', '1', '2', '3', '4', '5', '6', '8', '9', '19'])
      .exactOptional()
      .openapi({
        description:
          'Code | Text | Description\n-- | -- | --\n0 | Success | The request was successfully accepted by Vonage.\n1 | Throttled | You are trying to send more than the maximum of 30 requests per second.\n2 | Your request is incomplete and missing the mandatory parameter `$parameter` | The stated parameter is missing.\n3 | Invalid value for parameter `$parameter` | Invalid value for parameter. If you see Facility not allowed in the error text, check that you are using the correct Base URL in your request.\n4 | Invalid credentials were provided | The supplied API key or secret in the request is either invalid or disabled.\n5 | Internal Error | An error occurred processing this request in the Cloud Communications Platform.\n6 | The Vonage platform was unable to process this message for the following reason: `$reason` | The request could not be routed.\n8 | The api_key you supplied is for an account that has been barred from submitting messages. |\n9 | Partner quota exceeded | Your account does not have sufficient credit to process this request.\n19 | For `cancel`: Either you have not waited at least 30 secs after sending a Verify request before cancelling or Verify has made too many attempts to deliver the verification code for this request and you must now wait for the process to complete. For `trigger_next_event`: All attempts to deliver the verification code for this request have completed and there are no remaining events to advance to.\n',
        example: '6',
      }),
  })
  .openapi({ description: 'Error', xml: { name: 'response' }, required: [] })
  .openapi('ControlErrorResponse')

const ControlRequestSchema = z
  .object({
    api_key: ApiKeySchema,
    api_secret: ApiSecretSchema,
    cmd: z
      .enum(['cancel', 'trigger_next_event'])
      .openapi({
        description:
          'The possible commands are `cancel` to request cancellation of the verification process, or `trigger_next_event` to advance  to the next verification event (if any). Cancellation is only possible 30 seconds after the start of the verification request and before the second event (either TTS or SMS) has taken place.',
        example: 'cancel',
      }),
    request_id: z
      .string()
      .openapi({
        description: 'The `request_id` you received in the response to the Verify request.',
        example: 'abcdef0123456789abcdef0123456789',
      }),
  })
  .openapi({ required: ['api_key', 'api_secret', 'request_id', 'cmd'] })
  .openapi('ControlRequest')

const ControlResponseSchema = z
  .object({
    command: z
      .enum(['cancel', 'trigger_next_event'])
      .exactOptional()
      .openapi({ description: 'The `cmd` you sent in the request.', example: 'cancel' }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description: '`cmd` | Code | Description\n-- | -- | --\nAny | 0 | Success\n',
        example: '0',
      }),
  })
  .openapi({ description: 'Success', xml: { name: 'response' }, required: [] })
  .openapi('ControlResponse')

const NetworkUnblockSchema = z
  .object({
    network: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Network code', example: 32526 }),
    unblock_duration: z
      .int()
      .min(0)
      .max(86400)
      .default(3600)
      .exactOptional()
      .openapi({
        description: 'An optional duration the unblock will be applied for in seconds',
        example: '3600',
        required: ['false'],
      }),
  })
  .openapi({ required: [] })
  .openapi('NetworkUnblock')

const NetworkUnblockResponseForbiddenSchema = z
  .object({
    detail: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Verbose description of the server error.',
        example: 'Your account does not have permission to perform this action.',
      }),
    instance: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Instance ID', example: 'bf0ca0bf927b3b52e3cb03217e1a1ddf' }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'Full string text of the HTTP error code.', example: 'Forbidden' }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A URL link to the API documentation for this type of error.',
        example: 'https://developer.vonage.com/api-errors#forbidden',
      }),
  })
  .openapi({
    description: 'Forbidden',
    xml: { name: 'networkUnblockResponseForbidden' },
    required: [],
  })
  .openapi('NetworkUnblockResponseForbidden')

const NetworkUnblockResponseInvalidDurationSchema = z
  .object({
    detail: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Verbose description of the server error.',
        example: 'Unblock duration is invalid.',
      }),
    instance: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Instance ID', example: 'bf0ca0bf927b3b52e3cb03217e1a1ddf' }),
    invalid_parameters: z
      .array(
        z
          .object({
            name: z
              .string()
              .exactOptional()
              .openapi({ description: 'The name of the parameter.', example: 'network' }),
            reason: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The reason for the parameter error.',
                example: 'Network not found',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Detailed payload of errors.' }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Full string text of the HTTP error code.',
        example: 'Invalid unblock_duration parameter',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A URL link to the API documentation for this type of error.',
        example: 'https://developer.vonage.com/api-errors#invalid-paramater',
      }),
  })
  .openapi({
    description: 'Invalid Duration',
    xml: { name: 'networkUnblockResponseInvalidDuration' },
    required: [],
  })
  .openapi('NetworkUnblockResponseInvalidDuration')

const NetworkUnblockResponseNotFoundSchema = z
  .object({
    detail: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Verbose description of the server error.',
        example: 'The network you provided does not have an active block.',
      }),
    instance: z
      .string()
      .exactOptional()
      .openapi({ description: 'InstanceID', example: 'bf0ca0bf927b3b52e3cb03217e1a1ddf' }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'Full string text of the HTTP error code.', example: 'Not Found' }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A URL link to the API documentation for this type of error.',
        example: 'https://developer.vonage.com/api-errors#bad-request',
      }),
  })
  .openapi({
    description: 'Not Found',
    xml: { name: 'networkUnblockResponseNotFound' },
    required: [],
  })
  .openapi('NetworkUnblockResponseNotFound')

const NetworkUnblockResponseOkSchema = z
  .object({
    network: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique network ID', example: '23410' }),
    unblocked_until: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Gives the DateTime when the unblock will expire.',
        example: '2024-04-22T08:34:58Z',
      }),
  })
  .openapi({ description: 'Success', xml: { name: 'networkUnblockResponse' }, required: [] })
  .openapi('NetworkUnblockResponseOk')

const NetworkUnblockResponseUnprocessableNetworkSchema = z
  .object({
    detail: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Verbose description of the server error.',
        example: 'Network is not in the request.',
      }),
    instance: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Instance ID', example: 'bf0ca0bf927b3b52e3cb03217e1a1ddf' }),
    invalid_parameters: z
      .array(
        z
          .object({
            name: z
              .string()
              .exactOptional()
              .openapi({ description: 'The name of the parameter.', example: 'network' }),
            reason: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The reason for the parameter error.',
                example: 'Network not found',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Detailed payload of errors.' }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Full string text of the HTTP error code.',
        example: 'Network not found.',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A URL link to the API documentation for this type of error.',
        example: 'https://developer.vonage.com/api-errors#invalid-paramater',
      }),
  })
  .openapi({
    description: 'Invalid Network',
    xml: { name: 'networkUnblockResponseUnprocessableNetwork' },
    required: [],
  })
  .openapi('NetworkUnblockResponseUnprocessableNetwork')

const Psd2RequestSchema = z
  .object({
    amount: z
      .float32()
      .openapi({
        description: 'The decimal amount of the payment to be confirmed, in Euros',
        example: '48.00',
      }),
    api_key: ApiKeySchema,
    api_secret: ApiSecretSchema,
    code_length: z
      .union([z.literal(4), z.literal(6)])
      .default(4)
      .exactOptional()
      .openapi({ description: 'The length of the verification code.', example: 6 }),
    country: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If you do not provide `number` in international format or you are not sure if `number` is correctly formatted, specify the two-character country code in `country`. Verify will then format the number for you.',
        example: 'GB',
      }),
    lg: z
      .enum([
        'en-gb',
        'bg-bg',
        'cs-cz',
        'da-dk',
        'de-de',
        'ee-et',
        'el-gr',
        'es-es',
        'fi-fi',
        'fr-fr',
        'ga-ie',
        'hu-hu',
        'it-it',
        'lv-lv',
        'lt-lt',
        'mt-mt',
        'nl-nl',
        'pl-pl',
        'sk-sk',
        'sl-si',
        'sv-se',
      ])
      .default('en-gb')
      .exactOptional()
      .openapi({
        description:
          'By default, the SMS or text-to-speech (TTS) message is generated in the locale that matches the `number`. For example, the text message or TTS message for a `33*` number is sent in French. Use this parameter to explicitly control the language used.\n*Note: Voice calls in English for `bg-bg`, `ee-et`, `ga-ie`, `lv-lv`, `lt-lt`, `mt-mt`, `sk-sk`, `sk-si`',
        example: 'es-es',
      }),
    next_event_wait: z
      .int()
      .min(60)
      .max(900)
      .default(300)
      .exactOptional()
      .openapi({
        description:
          'Specifies the wait time in seconds between attempts to deliver the verification code.',
        example: 120,
      }),
    number: z
      .string()
      .openapi({
        description:
          'The mobile or landline phone number to verify. Unless you are setting `country` explicitly, this number must be in [E.164](https://en.wikipedia.org/wiki/E.164) format.',
        example: '447700900000',
      }),
    payee: z
      .string()
      .max(18)
      .openapi({
        description:
          'An alphanumeric string to indicate to the user the name of the recipient that they are confirming a payment to.',
        example: 'Acme Inc',
      }),
    pin_expiry: z
      .int()
      .min(60)
      .max(3600)
      .default(300)
      .exactOptional()
      .openapi({
        description:
          'How long the generated verification code is valid for, in seconds. When you specify both `pin_expiry` and `next_event_wait` then `pin_expiry` must be an integer multiple of `next_event_wait` otherwise `pin_expiry` is defaulted to equal next_event_wait. See [changing the event timings](https://developer.nexmo.com/verify/guides/changing-default-timings).',
        example: 240,
      }),
    workflow_id: z
      .union([
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
        z.literal(6),
        z.literal(7),
      ])
      .default(1)
      .exactOptional()
      .openapi({
        description:
          'Selects the predefined sequence of SMS and TTS (Text To Speech) actions to use in order to convey the PIN to your user. For example, an id of 1 identifies the workflow SMS - TTS - TTS. For a list of all workflows and their associated ids, please visit the [developer portal](https://developer.nexmo.com/verify/guides/workflows-and-events).',
        example: 4,
      }),
  })
  .openapi({ required: ['api_key', 'api_secret', 'number', 'payee', 'amount'] })
  .openapi('Psd2Request')

const RequestErrorResponseSchema = z
  .object({
    error_text: z
      .string()
      .exactOptional()
      .openapi({
        description: 'If `status` is non-zero, this explains the error encountered.',
        example: 'Your request is incomplete and missing the mandatory parameter `number`',
      }),
    network: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The Network ID of the blocking network, if relevant to the error.',
        example: '244523',
      }),
    request_id: z
      .string()
      .max(32)
      .exactOptional()
      .openapi({
        description:
          'The unique ID of the Verify request. This may be blank in an error situation.',
        example: '',
      }),
    status: z
      .enum(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '15', '20', '29'])
      .exactOptional()
      .openapi({
        description:
          'Code | Text | Description\n-- | -- | --\n0 | Success | The request was successfully accepted by Vonage.\n1 | Throttled | You are trying to send more than the maximum of 30 requests per second.\n2 | Your request is incomplete and missing the mandatory parameter `$parameter` | The stated parameter is missing.\n3 | Invalid value for parameter `$parameter` | Invalid value for parameter. If you see Facility not allowed in the error text, check that you are using the correct Base URL in your request.\n4 | Invalid credentials were provided | The supplied API key or secret in the request is either invalid or disabled.\n5 | Internal Error | An error occurred processing this request in the Cloud Communications Platform.\n6 | The Vonage platform was unable to process this message for the following reason: `$reason` | The request could not be routed.\n7 | The number you are trying to verify is blacklisted for verification. | Returns a `network` property but no `request_id` will be present in the response.\n8 | The api_key you supplied is for an account that has been barred from submitting messages. |\n9 | Partner quota exceeded | Your account does not have sufficient credit to process this request.\n10 | Concurrent verifications to the same number are not allowed. | This will return a `request_id`.\n15 | The destination number is not in a supported network | The request has been rejected. Find out more about this error in the [Knowledge Base](https://help.nexmo.com/hc/en-us/articles/360018406532-Verify-On-demand-Service-to-High-Risk-Countries)\n20 | This account does not support the parameter: pin_code. | Only certain accounts have the ability to set the `pin_code`. Please contact your account manager for more information.\n29 | Non-Permitted Destination | Your Vonage account is still in demo mode. While in demo mode you must add target numbers to the approved list for your account. Add funds to your account to remove this limitation.\n',
        example: '2',
      }),
  })
  .openapi({ description: 'Error', xml: { name: 'verify_response' }, required: [] })
  .openapi('RequestErrorResponse')

const RequestResponseSchema = z
  .object({
    request_id: z
      .string()
      .max(32)
      .exactOptional()
      .openapi({
        description:
          'The unique ID of the Verify request. You need this `request_id` for the Verify check.',
        example: 'abcdef0123456789abcdef0123456789',
      }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Indicates the outcome of the request; zero is success',
        example: '0',
      }),
  })
  .openapi({ description: 'Success', xml: { name: 'verify_response' }, required: [] })
  .openapi('RequestResponse')

const SearchErrorResponseSchema = z
  .object({
    error_text: z
      .string()
      .exactOptional()
      .openapi({
        description: 'If `status` is not `SUCCESS`, this message explains the issue encountered.',
        example: 'No response found',
      }),
    request_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `request_id` that you received in the response to the Verify request and used in the Verify search request. May be empty in an error situation.',
        example: 'abcdef0123456789abcdef0123456789',
      }),
    status: z
      .enum(['IN PROGRESS', 'FAILED', 'EXPIRED', 'CANCELLED', '101'])
      .exactOptional()
      .openapi({
        description:
          'Code | Description\n-- | --\nIN PROGRESS | The search is still in progress.\nSUCCESS | Your user entered a correct verification code.\nFAILED | Your user entered an incorrect code more than three times.\nEXPIRED | Your user did not enter a code before the `pin_expiry` time elapsed.\nCANCELLED | The verification process was cancelled by a Verify control request.\n101 | You supplied an invalid `request_id`, or the data is not available. Note that for recently-completed requests, there can be a delay of up to 1 minute before the results are available in search.\n',
        example: 'IN PROGRESS',
      }),
  })
  .openapi({ description: 'Error', xml: { name: 'verify_request' }, required: [] })
  .openapi('SearchErrorResponse')

const SearchResponseSchema = z
  .object({
    account_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Vonage account ID the request was for.', example: 'abcdef01' }),
    checks: z
      .array(
        z
          .object({
            code: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The code supplied with this check request',
                example: '987654',
              }),
            date_received: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'The date and time this check was received (in the format YYYY-MM-DD HH:MM:SS)',
                example: '2020-01-01 12:00:00',
              }),
            ip_address: z
              .string()
              .exactOptional()
              .openapi({
                deprecated: true,
                description: 'The IP address, if available (this field is no longer used).',
                example: '123.0.0.255',
              }),
            status: z.enum(['VALID', 'INVALID']).exactOptional(),
          })
          .openapi({ xml: { name: 'check' }, required: [] }),
      )
      .exactOptional()
      .openapi({
        description: 'The list of checks made for this verification and their outcomes.',
        xml: { wrapped: true },
      }),
    currency: z
      .string()
      .exactOptional()
      .openapi({ description: 'The currency code.', example: 'EUR' }),
    date_finalized: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date and time the verification request was completed. This response parameter is in the following format YYYY-MM-DD HH:MM:SS.',
        example: '2020-01-01 12:00:00',
      }),
    date_submitted: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date and time the verification request was submitted, in the following format YYYY-MM-DD HH:MM:SS.',
        example: '2020-01-01 12:00:00',
      }),
    estimated_price_messages_sent: EstimatedPriceMessagesSentSchema.exactOptional(),
    events: z
      .array(
        z
          .object({ id: z.string().exactOptional(), type: z.enum(['tts', 'sms']).exactOptional() })
          .openapi({ xml: { name: 'event' }, required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'The events that have taken place to verify this number, and their unique identifiers.',
        xml: { wrapped: true },
      }),
    first_event_date: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time the first verification attempt was made, in the following format YYYY-MM-DD HH:MM:SS.',
        example: '2020-01-01 12:00:00',
      }),
    last_event_date: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time the last verification attempt was made, in the following format YYYY-MM-DD HH:MM:SS.',
        example: '2020-01-01 12:00:00',
      }),
    number: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The phone number this verification request was used for.',
        example: '447700900000',
      }),
    price: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The cost incurred for this verification request.',
        example: '0.10000000',
      }),
    request_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `request_id` that you received in the response to the Verify request and used in the Verify search request.',
        example: 'abcdef0123456789abcdef0123456789',
      }),
    sender_id: z
      .string()
      .default('verify')
      .exactOptional()
      .openapi({
        description: 'The `sender_id` you provided in the Verify request.',
        example: 'mySenderId',
      }),
    status: z
      .enum(['IN PROGRESS', 'SUCCESS', 'FAILED', 'EXPIRED', 'CANCELLED'])
      .exactOptional()
      .openapi({
        description:
          'Code | Description\n-- | --\nIN PROGRESS | The search is still in progress.\nSUCCESS | Your user entered a correct verification code.\nFAILED | Your user entered an incorrect code more than three times.\nEXPIRED | Your user did not enter a code before the `pin_expiry` time elapsed.\nCANCELLED | The verification process was cancelled by a Verify control request.\n',
        example: 'IN PROGRESS',
      }),
  })
  .openapi({ description: 'Success', xml: { name: 'verify_request' }, required: [] })
  .openapi('SearchResponse')

const VerifyRequestSchema = z
  .object({
    api_key: ApiKeySchema,
    api_secret: ApiSecretSchema,
    brand: z
      .string()
      .max(18)
      .openapi({
        description:
          'An 18-character alphanumeric string you can use to personalize the verification request SMS body, to help users identify your company or application name. For example: "Your `Acme Inc` PIN is ..."',
        example: 'Acme Inc',
      }),
    code_length: z
      .union([z.literal(4), z.literal(6)])
      .default(4)
      .exactOptional()
      .openapi({ description: 'The length of the verification code.', example: 6 }),
    country: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If you do not provide `number` in international format or you are not sure if `number` is correctly formatted, specify the two-character country code in `country`. Verify will then format the number for you.',
        example: 'GB',
      }),
    lg: z
      .enum([
        'ar-xa',
        'cs-cz',
        'cy-cy',
        'cy-gb',
        'da-dk',
        'de-de',
        'el-gr',
        'en-au',
        'en-gb',
        'en-in',
        'en-us',
        'es-es',
        'es-mx',
        'es-us',
        'fi-fi',
        'fil-ph',
        'fr-ca',
        'fr-fr',
        'hi-in',
        'hu-hu',
        'id-id',
        'is-is',
        'it-it',
        'ja-jp',
        'ko-kr',
        'nb-no',
        'nl-nl',
        'pl-pl',
        'pt-br',
        'pt-pt',
        'ro-ro',
        'ru-ru',
        'sv-se',
        'th-th',
        'tr-tr',
        'vi-vn',
        'yue-cn',
        'zh-cn',
        'zh-tw',
      ])
      .default('en-us')
      .exactOptional()
      .openapi({
        description:
          'By default, the SMS or text-to-speech (TTS) message is generated in the locale that matches the `number`. For example, the text message or TTS message for a `33*` number is sent in French. Use this parameter to explicitly control the language used for the Verify request. A list of languages is available: <https://developer.nexmo.com/verify/guides/verify-languages>',
        example: 'en-us',
      }),
    next_event_wait: z
      .int()
      .min(60)
      .max(900)
      .default(300)
      .exactOptional()
      .openapi({
        description:
          'Specifies the wait time in seconds between attempts to deliver the verification code.',
        example: 120,
      }),
    number: z
      .string()
      .openapi({
        description:
          'The mobile or landline phone number to verify. Unless you are setting `country` explicitly, this number must be in [E.164](https://en.wikipedia.org/wiki/E.164) format.',
        example: '447700900000',
      }),
    pin_code: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A custom PIN to send to the user. If a PIN is not provided, Verify will generate a random PIN for you. <b>This feature is not enabled by default</b> - please discuss with your Account Manager if you would like it enabled. If this feature is not enabled on your account, error status `20` will be returned.',
        example: 'AKFG-3424',
      }),
    pin_expiry: z
      .int()
      .min(60)
      .max(3600)
      .default(300)
      .exactOptional()
      .openapi({
        description:
          'How long the generated verification code is valid for, in seconds. When you specify both `pin_expiry` and `next_event_wait` then `pin_expiry` must be an integer multiple of `next_event_wait` otherwise `pin_expiry` is defaulted to equal next_event_wait. See [changing the event timings](https://developer.nexmo.com/verify/guides/changing-default-timings).',
        example: 240,
      }),
    sender_id: z
      .string()
      .max(11)
      .default('VERIFY')
      .exactOptional()
      .openapi({
        description:
          'An 11-character alphanumeric string that represents the [identity of the sender](https://developer.nexmo.com/messaging/sms/guides/custom-sender-id) of the verification request. Depending on the destination of the phone number you are sending the verification SMS to, restrictions might apply.',
        example: 'ACME',
      }),
    workflow_id: z
      .union([
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
        z.literal(6),
        z.literal(7),
      ])
      .default(1)
      .exactOptional()
      .openapi({
        description:
          'Selects the predefined sequence of SMS and TTS (Text To Speech) actions to use in order to convey the PIN to your user. For example, an id of 1 identifies the workflow SMS - TTS - TTS. For a list of all workflows and their associated ids, please visit the [developer portal](https://developer.nexmo.com/verify/guides/workflows-and-events).',
        example: 4,
      }),
  })
  .openapi({ required: ['api_key', 'api_secret', 'number', 'brand'] })
  .openapi('VerifyRequest')

const ApiKeyParamsSchema = ApiKeySchema.openapi({
  param: {
    in: 'query',
    name: 'api_key',
    required: true,
    schema: { $ref: '#/components/schemas/api_key' },
  },
})

const ApiSecretParamsSchema = ApiSecretSchema.openapi({
  param: {
    in: 'query',
    name: 'api_secret',
    required: true,
    schema: { $ref: '#/components/schemas/api_secret' },
  },
})

const FormatParamsSchema = z
  .enum(['json', 'xml'])
  .openapi({
    param: {
      description: 'The response format.',
      example: 'json',
      in: 'path',
      name: 'format',
      required: true,
      schema: { enum: ['json', 'xml'], type: 'string' },
    },
  })

export const postCheckFormatRoute = createRoute({
  method: 'post',
  path: '/check/{format}',
  summary: 'Verify Check',
  description:
    'Use Verify check to confirm that the PIN you received from your user matches the one sent by Vonage in your Verify request.\n\n1. Send the verification `code` that your user supplied, with the corresponding `request_id` from the Verify request.\n2. Check the `status` of the response to determine if the code the user supplied matches the one sent by Vonage.\n\n*Note that this endpoint is available by `GET` request as well as `POST`.*',
  operationId: 'verifyCheck',
  request: {
    params: z.object({ format: FormatParamsSchema }),
    body: {
      content: { 'application/x-www-form-urlencoded': { schema: CheckRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.xor([CheckResponseSchema, CheckErrorResponseSchema]),
          examples: {
            'incorrect-code': {
              summary: 'PIN code is incorrect',
              value: {
                error_text: 'The code inserted does not match the expected value',
                status: '16',
              },
            },
            'internal-error': {
              summary: 'Internal Error',
              value: { error_text: 'Internal Error', status: '5' },
            },
            'invalid-creds': {
              summary: 'Invalid credentials',
              value: { error_text: 'Bad credentials', status: '4' },
            },
            'invalid-param': {
              summary: 'Invalid parameter',
              value: { error_text: 'Invalid value for param: request_id', status: '3' },
            },
            'missing-param': {
              summary: 'Missing a parameter',
              value: { error_text: 'Missing api_key', status: '2' },
            },
            success: {
              summary: 'The supplied code is correct for this request. Verification successful.',
              value: {
                currency: 'EUR',
                estimated_price_messages_sent: '0.03330000',
                event_id: '0A00000012345678',
                price: '0.10000000',
                request_id: 'abcdef0123456789abcdef0123456789',
                status: '0',
              },
            },
            throttled: {
              summary: 'Request limit exceeded',
              value: { error_text: 'Throttled', status: '1' },
            },
            'too-many-fails': {
              summary: 'Too many incorrect codes',
              value: {
                error_text: 'The wrong code was provided too many times. Request terminated',
                status: '17',
              },
            },
            'unknown-requestid': {
              summary: 'This request_id is unknown or inactive',
              value: {
                error_text:
                  "The Vonage platform was unable to process this message for the following reason: Request 'abcdef0123456789abcdef0123456789' was not found or it has been verified already.",
                status: '6',
              },
            },
          },
        },
        'text/xml': { schema: z.xor([CheckResponseSchema, CheckErrorResponseSchema]) },
      },
    },
  },
})

export const postControlFormatRoute = createRoute({
  method: 'post',
  path: '/control/{format}',
  summary: 'Verify Control',
  description:
    'Control the progress of your Verify requests. To cancel an existing Verify request, or to trigger the next verification event:\n\n\n1. Send a Verify control request with the appropriate command (`cmd`) for what you want to achieve.\n\n2. Check the `status` in the response.\n\n\n*Note that this endpoint is available by `GET` request as well as `POST`.*',
  operationId: 'verifyControl',
  request: {
    params: z.object({ format: FormatParamsSchema }),
    body: {
      content: { 'application/x-www-form-urlencoded': { schema: ControlRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.xor([ControlResponseSchema, ControlErrorResponseSchema]),
          examples: {
            'cancel-early': {
              summary: 'Cancellation requested less than 30 seconds into the request',
              value: {
                error_text:
                  "Verification request ['abcdef0123456789abcdef0123456789'] can't be cancelled within the first 30 seconds.",
                status: '19',
              },
            },
            'cancel-late': {
              summary: 'Cancellation requested after too many retry attempts',
              value: {
                error_text:
                  "Verification request  ['abcdef0123456789abcdef0123456789'] can't be cancelled now. Too many attempts to re-deliver have already been made.",
                status: '19',
              },
            },
            'internal-error': {
              summary: 'Internal Error',
              value: { error_text: 'Internal Error', status: '5' },
            },
            'invalid-creds': {
              summary: 'Invalid credentials',
              value: { error_text: 'Bad credentials', status: '4' },
            },
            'invalid-param': {
              summary: 'Invalid parameter',
              value: { error_text: 'Invalid value for param: request_id', status: '3' },
            },
            'missing-param': {
              summary: 'Missing a parameter',
              value: { error_text: 'Missing api_key', status: '2' },
            },
            'success-cancel': {
              summary: 'The request has been cancelled',
              value: { command: 'cancel', status: '0' },
            },
            'success-trigger': {
              summary: 'The next event has been triggered',
              value: { command: 'trigger_next_event', status: '0' },
            },
            throttled: {
              summary: 'Request limit exceeded',
              value: { error_text: 'Throttled', status: '1' },
            },
            'trigger-end': {
              summary: 'No more events to trigger',
              value: {
                error_text:
                  "No more events are left to execute for the request ['abcdef0123456789abcdef0123456789']",
                status: '19',
              },
            },
          },
        },
        'text/xml': { schema: z.xor([ControlResponseSchema, ControlErrorResponseSchema]) },
      },
    },
  },
})

export const postNetworkUnblockRoute = createRoute({
  method: 'post',
  path: '/network-unblock',
  tags: ['Fraud Management'],
  summary: 'Request a network unblock',
  description:
    'Request to unblock a network that has been blocked due to potential fraud detection\n<div class="Vlt-callout Vlt-callout--critical">\n  <div class="Vlt-callout__content">\n    <h4>Network Unblock is switched off by default.</h4>\n    Please contact Sales to enable the Network Unblock API for your account.\n  </div>\n</div>',
  operationId: 'networkUnblock',
  request: {
    body: { content: { 'application/json': { schema: NetworkUnblockSchema } }, required: true },
  },
  responses: {
    202: {
      description: 'Accepted',
      content: { 'application/json': { schema: NetworkUnblockResponseOkSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: NetworkUnblockResponseForbiddenSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: NetworkUnblockResponseNotFoundSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: {
        'application/json': {
          schema: z.xor([
            NetworkUnblockResponseUnprocessableNetworkSchema,
            NetworkUnblockResponseInvalidDurationSchema,
          ]),
        },
      },
    },
    429: {
      description: 'Rate Limited',
      content: { 'application/json': { schema: ErrorThrottledSchema } },
    },
  },
})

export const postPsd2FormatRoute = createRoute({
  method: 'post',
  path: '/psd2/{format}',
  summary: 'PSD2 (Payment Services Directive 2) Request',
  description:
    'Use Verify request to generate and send a PIN to your user to authorize a payment:\n1. Create a request to send a verification code to your user.\n2. Check the `status` field in the response to ensure that your request was successful (zero is success).\n3. Use the `request_id` field in the response for the Verify check.\n(Please note that XML format is not supported for the Payment Services Directive endpoint at this time.)',
  operationId: 'verifyRequestWithPSD2',
  request: {
    params: z.object({ format: FormatParamsSchema }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              amount: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float32(),
                )
                .openapi({
                  description: 'The decimal amount of the payment to be confirmed, in Euros',
                  example: '48.00',
                }),
              api_key: ApiKeySchema,
              api_secret: ApiSecretSchema,
              code_length: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.union([z.literal(4), z.literal(6)]),
                )
                .default(4)
                .exactOptional()
                .openapi({ description: 'The length of the verification code.', example: 6 }),
              country: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'If you do not provide `number` in international format or you are not sure if `number` is correctly formatted, specify the two-character country code in `country`. Verify will then format the number for you.',
                  example: 'GB',
                }),
              lg: z
                .enum([
                  'en-gb',
                  'bg-bg',
                  'cs-cz',
                  'da-dk',
                  'de-de',
                  'ee-et',
                  'el-gr',
                  'es-es',
                  'fi-fi',
                  'fr-fr',
                  'ga-ie',
                  'hu-hu',
                  'it-it',
                  'lv-lv',
                  'lt-lt',
                  'mt-mt',
                  'nl-nl',
                  'pl-pl',
                  'sk-sk',
                  'sl-si',
                  'sv-se',
                ])
                .default('en-gb')
                .exactOptional()
                .openapi({
                  description:
                    'By default, the SMS or text-to-speech (TTS) message is generated in the locale that matches the `number`. For example, the text message or TTS message for a `33*` number is sent in French. Use this parameter to explicitly control the language used.\n*Note: Voice calls in English for `bg-bg`, `ee-et`, `ga-ie`, `lv-lv`, `lt-lt`, `mt-mt`, `sk-sk`, `sk-si`',
                  example: 'es-es',
                }),
              next_event_wait: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int().min(60).max(900),
                )
                .default(300)
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the wait time in seconds between attempts to deliver the verification code.',
                  example: 120,
                }),
              number: z
                .string()
                .openapi({
                  description:
                    'The mobile or landline phone number to verify. Unless you are setting `country` explicitly, this number must be in [E.164](https://en.wikipedia.org/wiki/E.164) format.',
                  example: '447700900000',
                }),
              payee: z
                .string()
                .max(18)
                .openapi({
                  description:
                    'An alphanumeric string to indicate to the user the name of the recipient that they are confirming a payment to.',
                  example: 'Acme Inc',
                }),
              pin_expiry: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int().min(60).max(3600),
                )
                .default(300)
                .exactOptional()
                .openapi({
                  description:
                    'How long the generated verification code is valid for, in seconds. When you specify both `pin_expiry` and `next_event_wait` then `pin_expiry` must be an integer multiple of `next_event_wait` otherwise `pin_expiry` is defaulted to equal next_event_wait. See [changing the event timings](https://developer.nexmo.com/verify/guides/changing-default-timings).',
                  example: 240,
                }),
              workflow_id: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.union([
                    z.literal(1),
                    z.literal(2),
                    z.literal(3),
                    z.literal(4),
                    z.literal(5),
                    z.literal(6),
                    z.literal(7),
                  ]),
                )
                .default(1)
                .exactOptional()
                .openapi({
                  description:
                    'Selects the predefined sequence of SMS and TTS (Text To Speech) actions to use in order to convey the PIN to your user. For example, an id of 1 identifies the workflow SMS - TTS - TTS. For a list of all workflows and their associated ids, please visit the [developer portal](https://developer.nexmo.com/verify/guides/workflows-and-events).',
                  example: 4,
                }),
            })
            .openapi({ required: ['api_key', 'api_secret', 'number', 'payee', 'amount'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.xor([RequestResponseSchema, RequestErrorResponseSchema]) },
      },
    },
  },
})

export const getSearchFormatRoute = createRoute({
  method: 'get',
  path: '/search/{format}',
  summary: 'Verify Search',
  description:
    'Use Verify search to check the status of past or current verification requests:\n\n1. Send a Verify search request containing the `request_id`s of the verification requests you are interested in.\n2. Use the `status` of each verification request in the `checks` array of the response object to determine the outcome.\n\n*Note that this endpoint is available by `POST` request as well as `GET`.*',
  operationId: 'verifySearch',
  request: {
    params: z.object({ format: FormatParamsSchema }),
    query: z.object({
      api_key: ApiKeyParamsSchema,
      api_secret: ApiSecretParamsSchema,
      request_id: z
        .string()
        .openapi({
          param: {
            description:
              'The `request_id` you received in the Verify Request Response. Required if `request_ids` not provided.',
            example: 'abcdef0123456789abcdef0123456789',
            in: 'query',
            name: 'request_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      request_ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().openapi({ example: 'abcdef0123456789abcdef0123456789' })).max(10),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'More than one `request_id`. Each `request_id` is a new parameter in the Verify Search request. Required if `request_id` not provided.',
            explode: true,
            in: 'query',
            name: 'request_ids',
            required: false,
            schema: {
              items: { example: 'abcdef0123456789abcdef0123456789', type: 'string' },
              maxItems: 10,
              type: 'array',
            },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.xor([SearchResponseSchema, SearchErrorResponseSchema]),
          examples: {
            'internal-error': {
              summary: 'Internal Error',
              value: { error_text: 'Internal Error', status: '5' },
            },
            'invalid-creds': {
              summary: 'Invalid credentials',
              value: { error_text: 'Bad credentials', status: '4' },
            },
            'invalid-param': {
              summary: 'Invalid parameter',
              value: { error_text: 'Invalid value for param: request_id', status: '3' },
            },
            'missing-param': {
              summary: 'Missing a parameter',
              value: { error_text: 'Missing api_key', status: '2' },
            },
            'not-found': {
              summary:
                'Request not found (this also occurs immediately after completion, wait 60 seconds and try again)',
              value: { error_text: 'No response found', status: '101' },
            },
            success: {
              summary: 'The request was found',
              value: {
                account_id: 'abcdef01',
                checks: [
                  {
                    code: '1111',
                    date_received: '2020-01-01 12:00:00',
                    ip_address: '',
                    status: 'INVALID',
                  },
                  {
                    code: '1234',
                    date_received: '2020-01-01 12:02:00',
                    ip_address: '',
                    status: 'VALID',
                  },
                ],
                currency: 'EUR',
                date_finalized: '2020-01-01 12:00:00',
                date_submitted: '2020-01-01 12:00:00',
                estimated_price_messages_sent: '0.06660000',
                events: [
                  { id: '0A00000012345678', type: 'sms' },
                  { id: '0A00000012345679', type: 'sms' },
                ],
                first_event_date: '2020-01-01 12:00:00',
                last_event_date: '2020-01-01 12:00:00',
                number: '447700900000',
                price: '0.1000000',
                request_id: 'abcdef0123456789abcdef0123456789',
                sender_id: 'verify',
                status: 'SUCCESS',
              },
            },
            throttled: {
              summary: 'Request limit exceeded',
              value: { error_text: 'Throttled', status: '1' },
            },
          },
        },
        'text/xml': { schema: z.xor([SearchResponseSchema, SearchErrorResponseSchema]) },
      },
    },
  },
})

export const postFormatRoute = createRoute({
  method: 'post',
  path: '/{format}',
  tags: ['Requests'],
  summary: 'Request a Verification',
  description:
    'Use Verify request to generate and send a PIN to your user:\n\n1. Create a request to send a verification code to your user.\n\n2. Check the `status` field in the response to ensure that your request was successful (zero is success).\n\n3. Use the `request_id` field in the response for the Verify check.\n\n*Note that this endpoint is available by `GET` request as well as `POST`.*',
  operationId: 'verifyRequest',
  request: {
    params: z.object({ format: FormatParamsSchema }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              api_key: ApiKeySchema,
              api_secret: ApiSecretSchema,
              brand: z
                .string()
                .max(18)
                .openapi({
                  description:
                    'An 18-character alphanumeric string you can use to personalize the verification request SMS body, to help users identify your company or application name. For example: "Your `Acme Inc` PIN is ..."',
                  example: 'Acme Inc',
                }),
              code_length: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.union([z.literal(4), z.literal(6)]),
                )
                .default(4)
                .exactOptional()
                .openapi({ description: 'The length of the verification code.', example: 6 }),
              country: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'If you do not provide `number` in international format or you are not sure if `number` is correctly formatted, specify the two-character country code in `country`. Verify will then format the number for you.',
                  example: 'GB',
                }),
              lg: z
                .enum([
                  'ar-xa',
                  'cs-cz',
                  'cy-cy',
                  'cy-gb',
                  'da-dk',
                  'de-de',
                  'el-gr',
                  'en-au',
                  'en-gb',
                  'en-in',
                  'en-us',
                  'es-es',
                  'es-mx',
                  'es-us',
                  'fi-fi',
                  'fil-ph',
                  'fr-ca',
                  'fr-fr',
                  'hi-in',
                  'hu-hu',
                  'id-id',
                  'is-is',
                  'it-it',
                  'ja-jp',
                  'ko-kr',
                  'nb-no',
                  'nl-nl',
                  'pl-pl',
                  'pt-br',
                  'pt-pt',
                  'ro-ro',
                  'ru-ru',
                  'sv-se',
                  'th-th',
                  'tr-tr',
                  'vi-vn',
                  'yue-cn',
                  'zh-cn',
                  'zh-tw',
                ])
                .default('en-us')
                .exactOptional()
                .openapi({
                  description:
                    'By default, the SMS or text-to-speech (TTS) message is generated in the locale that matches the `number`. For example, the text message or TTS message for a `33*` number is sent in French. Use this parameter to explicitly control the language used for the Verify request. A list of languages is available: <https://developer.nexmo.com/verify/guides/verify-languages>',
                  example: 'en-us',
                }),
              next_event_wait: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int().min(60).max(900),
                )
                .default(300)
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the wait time in seconds between attempts to deliver the verification code.',
                  example: 120,
                }),
              number: z
                .string()
                .openapi({
                  description:
                    'The mobile or landline phone number to verify. Unless you are setting `country` explicitly, this number must be in [E.164](https://en.wikipedia.org/wiki/E.164) format.',
                  example: '447700900000',
                }),
              pin_code: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A custom PIN to send to the user. If a PIN is not provided, Verify will generate a random PIN for you. <b>This feature is not enabled by default</b> - please discuss with your Account Manager if you would like it enabled. If this feature is not enabled on your account, error status `20` will be returned.',
                  example: 'AKFG-3424',
                }),
              pin_expiry: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int().min(60).max(3600),
                )
                .default(300)
                .exactOptional()
                .openapi({
                  description:
                    'How long the generated verification code is valid for, in seconds. When you specify both `pin_expiry` and `next_event_wait` then `pin_expiry` must be an integer multiple of `next_event_wait` otherwise `pin_expiry` is defaulted to equal next_event_wait. See [changing the event timings](https://developer.nexmo.com/verify/guides/changing-default-timings).',
                  example: 240,
                }),
              sender_id: z
                .string()
                .max(11)
                .default('VERIFY')
                .exactOptional()
                .openapi({
                  description:
                    'An 11-character alphanumeric string that represents the [identity of the sender](https://developer.nexmo.com/messaging/sms/guides/custom-sender-id) of the verification request. Depending on the destination of the phone number you are sending the verification SMS to, restrictions might apply.',
                  example: 'ACME',
                }),
              workflow_id: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.union([
                    z.literal(1),
                    z.literal(2),
                    z.literal(3),
                    z.literal(4),
                    z.literal(5),
                    z.literal(6),
                    z.literal(7),
                  ]),
                )
                .default(1)
                .exactOptional()
                .openapi({
                  description:
                    'Selects the predefined sequence of SMS and TTS (Text To Speech) actions to use in order to convey the PIN to your user. For example, an id of 1 identifies the workflow SMS - TTS - TTS. For a list of all workflows and their associated ids, please visit the [developer portal](https://developer.nexmo.com/verify/guides/workflows-and-events).',
                  example: 4,
                }),
            })
            .openapi({ required: ['api_key', 'api_secret', 'number', 'brand'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.xor([RequestResponseSchema, RequestErrorResponseSchema]),
          examples: {
            'account-disabled': {
              summary: 'Account is barred',
              value: {
                error_text:
                  'The api_key you supplied is for an account that has been barred from submitting messages.',
                status: '8',
              },
            },
            blacklist: {
              summary: 'Blacklisted number',
              value: {
                error_text: 'The number you are trying to verify is blacklisted for verification.',
                status: '7',
              },
            },
            'cannot-process': {
              summary: 'Unable to process message',
              value: {
                error_text:
                  'The Vonage platform was unable to process this message for the following reason: The request could not be routed.',
                status: '6',
              },
            },
            concurrent: {
              summary: 'Concurrent verifications',
              value: {
                error_text: 'Concurrent verifications to the same number are not allowed',
                request_id: 'abcdef0123456789abcdef0123456789',
                status: '10',
              },
            },
            'internal-error': {
              summary: 'Internal Error',
              value: { error_text: 'Internal Error', status: '5' },
            },
            'invalid-creds': {
              summary: 'Invalid credentials',
              value: { error_text: 'Invalid credentials were provided', status: '4' },
            },
            'invalid-param': {
              summary: 'Invalid parameter',
              value: { error_text: 'Invalid value for number', status: '3' },
            },
            'missing-param': {
              summary: 'Missing a parameter',
              value: { error_text: 'Missing api_key', status: '2' },
            },
            'not-permitted': {
              summary: 'Non-Permitted Destination',
              value: {
                error_text:
                  'Your Vonage account is still in demo mode. While in demo mode you must add target numbers to the approved list for your account. Add funds to your account to remove this limitation.',
                status: '29',
              },
            },
            'quota-exceeded': {
              summary: 'Quota exceeded',
              value: { error_text: 'Partner quota exceeded', status: '9' },
            },
            rejected: {
              summary: 'Rejected',
              value: {
                error_text: 'The destination number is not in a supported network',
                status: '15',
              },
            },
            success: {
              summary: 'Request was started',
              value: { request_id: 'abcdef0123456789abcdef0123456789', status: '0' },
            },
            throttled: {
              summary: 'Request limit exceeded',
              value: { error_text: 'Throttled', status: '1' },
            },
          },
        },
        'text/xml': { schema: z.xor([RequestResponseSchema, RequestErrorResponseSchema]) },
      },
    },
  },
})
