import { createRoute, z } from '@hono/zod-openapi'

const APIErrorSchema = z
  .object({
    apiError: z
      .int32()
      .openapi({
        description:
          'API error code. If set and > 0 then an API error has occurred your request could not be completed',
      }),
    apiErrorMsg: z.string().openapi({ description: 'API error message' }),
  })
  .openapi({ required: ['apiError', 'apiErrorMsg'], title: 'APIError' })
  .openapi('APIError')

const BINLookupResponseSchema = z
  .object({
    'bin-number': z.string().openapi({ description: 'The BIN or IIN number' }),
    'card-brand': z.string().openapi({ description: 'The card brand (e.g. Visa or Mastercard)' }),
    'card-category': z
      .string()
      .openapi({
        description:
          'The card category. There are many different card categories the most common card categories are: CLASSIC, BUSINESS, CORPORATE, PLATINUM, PREPAID',
      }),
    'card-type': z
      .string()
      .openapi({ description: 'The card type, will always be one of: DEBIT, CREDIT, CHARGE CARD' }),
    country: z.string().openapi({ description: 'The full country name of the issuer' }),
    'country-code': z
      .string()
      .openapi({ description: 'The ISO 2-letter country code of the issuer' }),
    'country-code3': z
      .string()
      .openapi({ description: 'The ISO 3-letter country code of the issuer' }),
    'currency-code': z
      .string()
      .openapi({ description: 'ISO 4217 currency code associated with the country of the issuer' }),
    'ip-blocklisted': z
      .boolean()
      .openapi({
        description:
          'True if the customers IP is listed on one of our blocklists, see the <a href="http://www.neutrinoapi.com/api/ip-blocklist/">IP Blocklist API</a>',
      }),
    'ip-blocklists': z
      .array(z.string())
      .openapi({
        description: 'An array of strings indicating which blocklists this IP is listed on',
      }),
    'ip-city': z.string().openapi({ description: 'The city of the customers IP (if detectable)' }),
    'ip-country': z.string().openapi({ description: 'The country of the customers IP' }),
    'ip-country-code': z
      .string()
      .openapi({ description: 'The ISO 2-letter country code of the customers IP' }),
    'ip-country-code3': z
      .string()
      .openapi({ description: 'The ISO 3-letter country code of the customers IP' }),
    'ip-matches-bin': z
      .boolean()
      .openapi({ description: 'True if the customers IP country matches the BIN country' }),
    'ip-region': z
      .string()
      .openapi({ description: 'The region of the customers IP (if detectable)' }),
    'is-commercial': z.boolean().openapi({ description: 'Is this a commercial/business use card' }),
    'is-prepaid': z
      .boolean()
      .openapi({ description: 'Is this a prepaid or prepaid reloadable card' }),
    issuer: z.string().openapi({ description: 'The card issuer' }),
    'issuer-phone': z.string().openapi({ description: 'The card issuers phone number' }),
    'issuer-website': z.string().openapi({ description: 'The card issuers website' }),
    valid: z.boolean().openapi({ description: 'Is this a valid BIN or IIN number' }),
  })
  .openapi({
    required: [
      'country',
      'ip-city',
      'ip-matches-bin',
      'card-type',
      'card-category',
      'ip-country-code',
      'ip-country',
      'issuer',
      'ip-blocklisted',
      'valid',
      'ip-blocklists',
      'issuer-website',
      'country-code',
      'ip-region',
      'card-brand',
      'issuer-phone',
      'country-code3',
      'currency-code',
      'ip-country-code3',
      'is-commercial',
      'is-prepaid',
      'bin-number',
    ],
    title: 'BINLookupResponse',
  })
  .openapi('BINLookupResponse')

const BadWordFilterResponseSchema = z
  .object({
    'bad-words-list': z
      .array(z.string())
      .openapi({ description: 'An array of the bad words found' }),
    'bad-words-total': z.int32().openapi({ description: 'Total number of bad words detected' }),
    'censored-content': z
      .string()
      .openapi({ description: 'The censored content (only set if censor-character has been set)' }),
    'is-bad': z.boolean().openapi({ description: 'Does the text contain bad words' }),
  })
  .openapi({
    required: ['bad-words-list', 'bad-words-total', 'censored-content', 'is-bad'],
    title: 'BadWordFilterResponse',
  })
  .openapi('BadWordFilterResponse')

const BlacklistSchema = z
  .object({
    'is-listed': z.boolean().openapi({ description: 'True if the host is currently black-listed' }),
    'list-host': z.string().openapi({ description: 'The hostname of the DNSBL' }),
    'list-name': z.string().openapi({ description: 'The name of the DNSBL' }),
    'list-rating': z
      .int32()
      .openapi({
        description: 'The list rating [1-3] with 1 being the best rating and 3 the lowest rating',
      }),
    'response-time': z
      .int32()
      .openapi({ description: 'The DNSBL server response time in milliseconds' }),
    'return-code': z
      .string()
      .openapi({ description: 'The specific return code for this listing (only set if listed)' }),
    'txt-record': z
      .string()
      .openapi({ description: 'The TXT record returned for this listing (only set if listed)' }),
  })
  .openapi({
    required: [
      'is-listed',
      'list-host',
      'list-rating',
      'list-name',
      'txt-record',
      'return-code',
      'response-time',
    ],
    title: 'Blacklist',
  })
  .openapi('Blacklist')

const BlocklistSensorSchema = z
  .object({
    blocklist: z
      .string()
      .openapi({ description: 'The primary blocklist category this sensor belongs to' }),
    description: z
      .string()
      .openapi({
        description:
          'Contains details about the sensor source and what type of malicious activity was detected',
      }),
    id: z
      .int32()
      .openapi({ description: 'The sensor ID. This is a permanent and unique ID for each sensor' }),
  })
  .openapi({
    description: '',
    required: ['id', 'blocklist', 'description'],
    title: 'BlocklistSensor',
  })
  .openapi('BlocklistSensor')

const BrowserBotResponseSchema = z
  .object({
    content: z
      .string()
      .openapi({
        description:
          'The complete raw, decompressed and decoded page content. Usually will be either HTML, JSON or XML',
      }),
    elements: z
      .array(z.string())
      .openapi({
        description:
          'Array containing all the elements matching the supplied selector. <br>Each element object will contain the text content, HTML content and all current element attributes',
      }),
    'error-message': z
      .string()
      .openapi({
        description:
          "Contains the error message if an error has occurred ('is-error' will be true)",
      }),
    'exec-results': z
      .array(z.string())
      .openapi({
        description: 'If you executed any JavaScript this array holds the results as objects',
      }),
    'http-redirect-url': z
      .string()
      .openapi({ description: 'The redirected URL if the URL responded with an HTTP redirect' }),
    'http-status-code': z.int32().openapi({ description: 'The HTTP status code the URL returned' }),
    'http-status-message': z
      .string()
      .openapi({ description: 'The HTTP status message the URL returned' }),
    'is-error': z
      .boolean()
      .openapi({
        description:
          "True if an error has occurred loading the page. Check the 'error-message' field for details",
      }),
    'is-http-ok': z.boolean().openapi({ description: 'True if the HTTP status is OK (200)' }),
    'is-http-redirect': z
      .boolean()
      .openapi({ description: 'True if the URL responded with an HTTP redirect' }),
    'is-secure': z.boolean().openapi({ description: 'True if the page is secured using TLS/SSL' }),
    'is-timeout': z
      .boolean()
      .openapi({
        description:
          "True if a timeout occurred while loading the page. You can set the timeout with the request parameter 'timeout'",
      }),
    'language-code': z
      .string()
      .openapi({
        description:
          'The ISO 2-letter language code of the page. Extracted from either the HTML document or via HTTP headers',
      }),
    'load-time': z
      .float64()
      .openapi({
        description:
          'The number of seconds taken to load the page (from initial request until DOM ready)',
      }),
    'mime-type': z.string().openapi({ description: 'The document MIME type' }),
    'response-headers': z
      .record(z.string(), z.string())
      .openapi({
        description: 'Map containing all the HTTP response headers the URL responded with',
      }),
    'security-details': z
      .record(z.string(), z.string())
      .openapi({ description: 'Map containing details of the TLS/SSL setup' }),
    'server-ip': z.string().openapi({ description: 'The HTTP servers IP address' }),
    title: z.string().openapi({ description: 'The document title' }),
    url: z.string().openapi({ description: 'The page URL' }),
  })
  .openapi({
    required: [
      'url',
      'content',
      'mime-type',
      'title',
      'is-error',
      'is-timeout',
      'error-message',
      'http-status-code',
      'http-status-message',
      'is-http-ok',
      'is-http-redirect',
      'http-redirect-url',
      'server-ip',
      'load-time',
      'response-headers',
      'is-secure',
      'security-details',
      'elements',
      'exec-results',
      'language-code',
    ],
    title: 'BrowserBotResponse',
  })
  .openapi('BrowserBotResponse')

const ConvertResponseSchema = z
  .object({
    'from-type': z.string().openapi({ description: 'The type of the value being converted from' }),
    'from-value': z.string().openapi({ description: 'The value being converted from' }),
    result: z.string().openapi({ description: 'The result of the conversion in string format' }),
    'result-float': z
      .float64()
      .openapi({ description: 'The result of the conversion as a floating-point number' }),
    'to-type': z.string().openapi({ description: 'The type being converted to' }),
    valid: z
      .boolean()
      .openapi({
        description: 'True if the conversion was successful and produced a valid result',
      }),
  })
  .openapi({
    required: ['valid', 'result', 'from-value', 'to-type', 'from-type', 'result-float'],
    title: 'ConvertResponse',
  })
  .openapi('ConvertResponse')

const EmailValidateResponseSchema = z
  .object({
    domain: z.string().openapi({ description: 'The email domain' }),
    'domain-error': z
      .boolean()
      .openapi({
        description: 'True if this address has a domain error (e.g. no valid mail server records)',
      }),
    email: z
      .string()
      .openapi({
        description:
          'The email address. If you have used the fix-typos option then this will be the fixed address',
      }),
    'is-disposable': z
      .boolean()
      .openapi({
        description:
          'True if this address is a disposable, temporary or darknet related email address',
      }),
    'is-freemail': z
      .boolean()
      .openapi({ description: 'True if this address is a free-mail address' }),
    'is-personal': z
      .boolean()
      .openapi({
        description:
          'True if this address belongs to a person. False if this is a role based address, e.g. admin@, help@, office@, etc.',
      }),
    provider: z.string().openapi({ description: 'The email service provider domain' }),
    'syntax-error': z.boolean().openapi({ description: 'True if this address has a syntax error' }),
    'typos-fixed': z.boolean().openapi({ description: 'True if typos have been fixed' }),
    valid: z.boolean().openapi({ description: 'Is this a valid email' }),
  })
  .openapi({
    required: [
      'valid',
      'syntax-error',
      'domain',
      'domain-error',
      'is-freemail',
      'email',
      'is-disposable',
      'typos-fixed',
      'is-personal',
      'provider',
    ],
    title: 'EmailValidateResponse',
  })
  .openapi('EmailValidateResponse')

const EmailVerifyResponseSchema = z
  .object({
    domain: z.string().openapi({ description: 'The email domain' }),
    'domain-error': z
      .boolean()
      .openapi({
        description: 'True if this address has a domain error (e.g. no valid mail server records)',
      }),
    email: z
      .string()
      .openapi({
        description:
          'The email address. If you have used the fix-typos option then this will be the fixed address',
      }),
    'is-catch-all': z
      .boolean()
      .openapi({
        description:
          'True if this email domain has a catch-all policy (it will accept mail for any username)',
      }),
    'is-deferred': z
      .boolean()
      .openapi({
        description:
          'True if the mail server responded with a temporary failure (either a 4xx response code or unresponsive server). You can retry this address later, we recommend waiting at least 15 minutes before retrying',
      }),
    'is-disposable': z
      .boolean()
      .openapi({
        description:
          'True if this address is a disposable, temporary or darknet related email address',
      }),
    'is-freemail': z
      .boolean()
      .openapi({ description: 'True if this address is a free-mail address' }),
    'is-personal': z
      .boolean()
      .openapi({
        description:
          'True if this address is for a person. False if this is a role based address, e.g. admin@, help@, office@, etc.',
      }),
    provider: z.string().openapi({ description: 'The email service provider domain' }),
    'smtp-response': z
      .string()
      .openapi({ description: 'The raw SMTP response message received during verification' }),
    'smtp-status': z
      .string()
      .openapi({
        description:
          'The SMTP verification status for the address: <br> <ul> <li>ok - SMTP verification was successful, this is a real address that can receive mail</li> <li>invalid - this is not a valid email address (has either a domain or syntax error)</li> <li>absent - this address is not registered with the email service provider</li> <li>unresponsive - the mail server(s) for this address timed-out or refused to open an SMTP connection</li> <li>unknown - sorry, we could not reliably determine the real status of this address (this address may or may not exist)</li> </ul>',
      }),
    'syntax-error': z.boolean().openapi({ description: 'True if this address has a syntax error' }),
    'typos-fixed': z.boolean().openapi({ description: 'True if typos have been fixed' }),
    valid: z
      .boolean()
      .openapi({ description: 'Is this a valid email address (syntax and domain is valid)' }),
    verified: z
      .boolean()
      .openapi({
        description:
          'True if this address has passed SMTP verification. Check the smtp-status and smtp-response fields for specific verification details',
      }),
  })
  .openapi({
    required: [
      'valid',
      'verified',
      'email',
      'typos-fixed',
      'syntax-error',
      'domain-error',
      'domain',
      'provider',
      'is-freemail',
      'is-disposable',
      'is-personal',
      'smtp-status',
      'smtp-response',
      'is-catch-all',
      'is-deferred',
    ],
    title: 'EmailVerifyResponse',
  })
  .openapi('EmailVerifyResponse')

const TimezoneSchema = z
  .object({
    abbr: z.string().openapi({ description: 'The time zone abbreviation', example: 'EDT' }),
    date: z
      .string()
      .openapi({
        description: "The current date at the time zone (ISO 8601 format 'YYYY-MM-DD')",
        example: '2021-01-01',
      }),
    id: z
      .string()
      .openapi({
        description: 'The time zone ID as per the IANA time zone database (tzdata)',
        example: 'America/New_York',
      }),
    name: z
      .string()
      .openapi({ description: 'The full time zone name', example: 'Eastern Daylight Time' }),
    offset: z
      .string()
      .openapi({ description: "The UTC offset for the time zone (ISO 8601 format '±hh:mm')" }),
    time: z
      .string()
      .openapi({
        description: "The current time at the time zone (ISO 8601 format 'hh:mm:ss.sss')",
        example: '12:30:00.00',
      }),
  })
  .openapi({
    description: 'Map containing timezone details',
    required: ['id', 'name', 'abbr', 'date', 'time', 'offset'],
    title: 'Timezone',
  })
  .openapi('Timezone')

const LocationSchema = z
  .object({
    address: z
      .string()
      .openapi({ description: 'The complete address using comma-separated values' }),
    'address-components': z
      .record(z.string(), z.string())
      .openapi({
        description: 'The components which make up the address such as road, city, state, etc',
      }),
    city: z.string().openapi({ description: 'The city of the location' }),
    country: z.string().openapi({ description: 'The country of the location' }),
    'country-code': z
      .string()
      .openapi({ description: 'The ISO 2-letter country code of the location' }),
    'country-code3': z
      .string()
      .openapi({ description: 'The ISO 3-letter country code of the location' }),
    'currency-code': z
      .string()
      .openapi({ description: 'ISO 4217 currency code associated with the country' }),
    latitude: z.float64().openapi({ description: 'The location latitude' }),
    'location-tags': z
      .array(z.string())
      .openapi({
        description:
          'Array of strings containing any location tags associated with the address. Tags are additional pieces of metadata about a specific location, there are thousands of different tags. Some examples of tags: shop, office, cafe, bank, pub',
      }),
    'location-type': z
      .string()
      .openapi({
        description:
          'The detected location type ordered roughly from most to least precise, possible values are: <br> <ul> <li>address - indicates a precise street address</li> <li>street - accurate to the street level but may not point to the exact location of the house/building number</li> <li>city - accurate to the city level, this includes villages, towns, suburbs, etc</li> <li>postal-code - indicates a postal code area (no house or street information present)</li> <li>railway - location is part of a rail network such as a station or railway track</li> <li>natural - indicates a natural feature, for example a mountain peak or a waterway</li> <li>island - location is an island or archipelago</li> <li>administrative - indicates an administrative boundary such as a country, state or province</li> </ul>',
      }),
    longitude: z.float64().openapi({ description: 'The location longitude' }),
    'postal-address': z
      .string()
      .openapi({
        description:
          'The formatted address using local standards suitable for printing on an envelope',
      }),
    'postal-code': z.string().openapi({ description: 'The postal code for the location' }),
    'region-code': z
      .string()
      .openapi({ description: 'The ISO 3166-2 region code for the location' }),
    state: z.string().openapi({ description: 'The state of the location' }),
    timezone: z
      .record(z.string(), TimezoneSchema)
      .openapi({ description: 'Map containing timezone details for the location' }),
  })
  .openapi({
    required: [
      'country',
      'address',
      'city',
      'country-code',
      'country-code3',
      'latitude',
      'postal-code',
      'longitude',
      'state',
      'address-components',
      'currency-code',
      'location-type',
      'location-tags',
      'timezone',
      'region-code',
      'postal-address',
    ],
    title: 'Location',
  })
  .openapi('Location')

const GeocodeAddressResponseSchema = z
  .object({
    found: z.int32().openapi({ description: 'The number of possible matching locations found' }),
    locations: z
      .array(LocationSchema)
      .openapi({ description: 'Array of matching location objects' }),
  })
  .openapi({ required: ['found', 'locations'], title: 'GeocodeAddressResponse' })
  .openapi('GeocodeAddressResponse')

const GeocodeReverseResponseSchema = z
  .object({
    address: z
      .string()
      .openapi({ description: 'The complete address using comma-separated values' }),
    'address-components': z
      .record(z.string(), z.string())
      .openapi({
        description: 'The components which make up the address such as road, city, state, etc',
      }),
    city: z.string().openapi({ description: 'The city of the location' }),
    country: z.string().openapi({ description: 'The country of the location' }),
    'country-code': z
      .string()
      .openapi({ description: 'The ISO 2-letter country code of the location' }),
    'country-code3': z
      .string()
      .openapi({ description: 'The ISO 3-letter country code of the location' }),
    'currency-code': z
      .string()
      .openapi({ description: 'ISO 4217 currency code associated with the country' }),
    found: z.boolean().openapi({ description: 'True if these coordinates map to a real location' }),
    latitude: z.float64().openapi({ description: 'The location latitude' }),
    'location-tags': z
      .array(z.string())
      .openapi({
        description:
          'Array of strings containing any location tags associated with the address. Tags are additional pieces of metadata about a specific location, there are thousands of different tags. Some examples of tags: shop, office, cafe, bank, pub',
      }),
    'location-type': z
      .string()
      .openapi({
        description:
          'The detected location type ordered roughly from most to least precise, possible values are: <br> <ul> <li>address - indicates a precise street address</li> <li>street - accurate to the street level but may not point to the exact location of the house/building number</li> <li>city - accurate to the city level, this includes villages, towns, suburbs, etc</li> <li>postal-code - indicates a postal code area (no house or street information present)</li> <li>railway - location is part of a rail network such as a station or railway track</li> <li>natural - indicates a natural feature, for example a mountain peak or a waterway</li> <li>island - location is an island or archipelago</li> <li>administrative - indicates an administrative boundary such as a country, state or province</li> </ul>',
      }),
    longitude: z.float64().openapi({ description: 'The location longitude' }),
    'postal-address': z
      .string()
      .openapi({
        description:
          'The formatted address using local standards suitable for printing on an envelope',
      }),
    'postal-code': z.string().openapi({ description: 'The postal code for the location' }),
    'region-code': z
      .string()
      .openapi({ description: 'The ISO 3166-2 region code for the location' }),
    state: z.string().openapi({ description: 'The state of the location' }),
    timezone: z
      .record(z.string(), TimezoneSchema)
      .openapi({ description: 'Map containing timezone details for the location' }),
  })
  .openapi({
    required: [
      'country',
      'found',
      'address',
      'city',
      'country-code',
      'postal-code',
      'state',
      'address-components',
      'country-code3',
      'currency-code',
      'location-type',
      'location-tags',
      'latitude',
      'longitude',
      'timezone',
      'region-code',
      'postal-address',
    ],
    title: 'GeocodeReverseResponse',
  })
  .openapi('GeocodeReverseResponse')

const HLRLookupResponseSchema = z
  .object({
    country: z.string().openapi({ description: 'The phone number country' }),
    'country-code': z
      .string()
      .openapi({ description: 'The number location as an ISO 2-letter country code' }),
    'country-code3': z
      .string()
      .openapi({ description: 'The number location as an ISO 3-letter country code' }),
    'currency-code': z
      .string()
      .openapi({ description: 'ISO 4217 currency code associated with the country' }),
    'current-network': z
      .string()
      .openapi({ description: 'The currently used network/carrier name' }),
    'hlr-status': z
      .string()
      .openapi({
        description:
          'The HLR lookup status, possible values are: <br> <ul> <li>ok - the HLR lookup was successful and the device is connected</li> <li>absent - the number was once registered but the device has been switched off or out of network range for some time</li> <li>unknown - the number is not known by the mobile network</li> <li>invalid - the number is not a valid mobile MSISDN number</li> <li>fixed-line - the number is a registered fixed-line not mobile</li> <li>voip - the number has been detected as a VOIP line</li> <li>failed - the HLR lookup has failed, we could not determine the real status of this number</li> </ul>',
      }),
    'hlr-valid': z
      .boolean()
      .openapi({
        description:
          'Was the HLR lookup successful. If true then this is a working and registered cell-phone or mobile device (SMS and phone calls will be delivered)',
      }),
    imsi: z
      .string()
      .openapi({
        description: 'The mobile IMSI number (International Mobile Subscriber Identity)',
      }),
    'international-calling-code': z
      .string()
      .openapi({ description: 'The international calling code' }),
    'international-number': z
      .string()
      .openapi({ description: 'The number represented in full international format' }),
    'is-mobile': z
      .boolean()
      .openapi({
        description:
          'True if this is a mobile number (only true with 100% certainty, if the number type is unknown this value will be false)',
      }),
    'is-ported': z
      .boolean()
      .openapi({ description: 'Has this number been ported to another network' }),
    'is-roaming': z
      .boolean()
      .openapi({ description: 'Is this number currently roaming from its origin country' }),
    'local-number': z
      .string()
      .openapi({ description: 'The number represented in local dialing format' }),
    location: z
      .string()
      .openapi({
        description:
          'The number location. Could be a city, region or country depending on the type of number',
      }),
    mcc: z.string().openapi({ description: 'The mobile MCC number (Mobile Country Code)' }),
    mnc: z.string().openapi({ description: 'The mobile MNC number (Mobile Network Code)' }),
    msc: z.string().openapi({ description: 'The mobile MSC number (Mobile Switching Center)' }),
    msin: z
      .string()
      .openapi({
        description: 'The mobile MSIN number (Mobile Subscription Identification Number)',
      }),
    'number-type': z
      .string()
      .openapi({
        description:
          'The number type, possible values are: <br> <ul> <li>mobile</li> <li>fixed-line</li> <li>premium-rate</li> <li>toll-free</li> <li>voip</li> <li>unknown</li> </ul>',
      }),
    'number-valid': z.boolean().openapi({ description: 'True if this a valid phone number' }),
    'origin-network': z.string().openapi({ description: 'The origin network/carrier name' }),
    'ported-network': z
      .string()
      .openapi({
        description: 'The ported to network/carrier name (only set if the number has been ported)',
      }),
    'roaming-country-code': z
      .string()
      .openapi({
        description:
          'If the number is currently roaming, the ISO 2-letter country code of the roaming in country',
      }),
  })
  .openapi({
    required: [
      'number-valid',
      'international-calling-code',
      'mnc',
      'number-type',
      'hlr-valid',
      'hlr-status',
      'ported-network',
      'imsi',
      'mcc',
      'international-number',
      'local-number',
      'country-code',
      'is-ported',
      'msin',
      'location',
      'origin-network',
      'is-mobile',
      'is-roaming',
      'country',
      'country-code3',
      'currency-code',
      'roaming-country-code',
      'msc',
      'current-network',
    ],
    title: 'HLRLookupResponse',
  })
  .openapi('HLRLookupResponse')

const HostReputationResponseSchema = z
  .object({
    host: z.string().openapi({ description: 'The IP address or host name' }),
    'is-listed': z.boolean().openapi({ description: 'Is this host blacklisted' }),
    'list-count': z.int32().openapi({ description: 'The number of DNSBLs the host is listed on' }),
    lists: z
      .array(BlacklistSchema)
      .openapi({ description: 'Array of objects for each DNSBL checked' }),
  })
  .openapi({
    required: ['is-listed', 'lists', 'list-count', 'host'],
    title: 'HostReputationResponse',
  })
  .openapi('HostReputationResponse')

const IPBlocklistResponseSchema = z
  .object({
    blocklists: z
      .array(z.string())
      .openapi({
        description:
          'An array of strings indicating which blocklist categories this IP is listed on',
      }),
    cidr: z
      .string()
      .openapi({ description: 'The CIDR address for this listing (only set if the IP is listed)' }),
    ip: z.string().openapi({ description: 'The IP address' }),
    'is-bot': z
      .boolean()
      .openapi({
        description:
          'IP is hosting a malicious bot or is part of a botnet. This is a broad category which includes brute-force crackers',
      }),
    'is-dshield': z
      .boolean()
      .openapi({
        description: 'IP has been flagged as a significant attack source by DShield (dshield.org)',
      }),
    'is-exploit-bot': z
      .boolean()
      .openapi({
        description: 'IP is hosting an exploit finding bot or is running exploit scanning software',
      }),
    'is-hijacked': z
      .boolean()
      .openapi({
        description:
          'IP is part of a hijacked netblock or a netblock controlled by a criminal organization',
      }),
    'is-listed': z.boolean().openapi({ description: 'Is this IP on a blocklist' }),
    'is-malware': z
      .boolean()
      .openapi({ description: 'IP is involved in distributing or is running malware' }),
    'is-proxy': z
      .boolean()
      .openapi({
        description: 'IP has been detected as an anonymous web proxy or anonymous HTTP proxy',
      }),
    'is-spam-bot': z
      .boolean()
      .openapi({
        description:
          'IP address is hosting a spam bot, comment spamming or any other spamming type software',
      }),
    'is-spider': z
      .boolean()
      .openapi({ description: 'IP is running a hostile web spider / web crawler' }),
    'is-spyware': z
      .boolean()
      .openapi({ description: 'IP is involved in distributing or is running spyware' }),
    'is-tor': z
      .boolean()
      .openapi({ description: 'IP is a Tor node or running a Tor related service' }),
    'is-vpn': z
      .boolean()
      .openapi({
        description:
          "IP belongs to a public VPN provider (only set if the 'vpn-lookup' option is enabled)",
      }),
    'last-seen': z
      .int32()
      .openapi({
        description:
          'The unix time when this IP was last seen on any blocklist. IPs are automatically removed after 7 days therefor this value will never be older than 7 days',
      }),
    'list-count': z
      .int32()
      .openapi({ description: 'The number of blocklists the IP is listed on' }),
    sensors: z
      .array(BlocklistSensorSchema)
      .openapi({
        description:
          'An array of objects containing details on which specific sensors detected the IP',
      }),
  })
  .openapi({
    required: [
      'ip',
      'is-bot',
      'is-exploit-bot',
      'is-malware',
      'is-spider',
      'is-dshield',
      'list-count',
      'is-proxy',
      'is-hijacked',
      'is-tor',
      'is-spyware',
      'is-spam-bot',
      'is-listed',
      'is-vpn',
      'last-seen',
      'blocklists',
      'sensors',
      'cidr',
    ],
    title: 'IPBlocklistResponse',
  })
  .openapi('IPBlocklistResponse')

const IPInfoResponseSchema = z
  .object({
    city: z.string().openapi({ description: 'Name of the city (if detectable)' }),
    'continent-code': z.string().openapi({ description: 'ISO 2-letter continent code' }),
    country: z.string().openapi({ description: 'Full country name' }),
    'country-code': z.string().openapi({ description: 'ISO 2-letter country code' }),
    'country-code3': z.string().openapi({ description: 'ISO 3-letter country code' }),
    'currency-code': z
      .string()
      .openapi({ description: 'ISO 4217 currency code associated with the country' }),
    'host-domain': z
      .string()
      .openapi({ description: 'The IPs host domain (only set if reverse-lookup has been used)' }),
    hostname: z
      .string()
      .openapi({ description: 'The IPs full hostname (only set if reverse-lookup has been used)' }),
    ip: z.string().openapi({ description: 'The IP address' }),
    'is-bogon': z
      .boolean()
      .openapi({
        description:
          'True if this is a bogon IP address such as a private network, local network or reserved address',
      }),
    'is-v4-mapped': z
      .boolean()
      .openapi({
        description:
          'True if this is a <a href="https://en.wikipedia.org/wiki/IPv6#IPv4-mapped_IPv6_addresses">IPv4 mapped IPv6 address</a>',
      }),
    'is-v6': z.boolean().openapi({ description: 'True if this is a IPv6 address. False if IPv4' }),
    latitude: z.float64().openapi({ description: 'Location latitude' }),
    longitude: z.float64().openapi({ description: 'Location longitude' }),
    region: z.string().openapi({ description: 'Name of the region (if detectable)' }),
    'region-code': z.string().openapi({ description: 'ISO 3166-2 region code (if detectable)' }),
    timezone: z
      .record(z.string(), TimezoneSchema)
      .openapi({ description: 'Map containing timezone details for the location' }),
    valid: z.boolean().openapi({ description: 'True if this is a valid IPv4 or IPv6 address' }),
  })
  .openapi({
    required: [
      'valid',
      'country',
      'hostname',
      'city',
      'country-code',
      'latitude',
      'region',
      'longitude',
      'continent-code',
      'ip',
      'country-code3',
      'currency-code',
      'host-domain',
      'timezone',
      'is-v6',
      'is-v4-mapped',
      'is-bogon',
      'region-code',
    ],
    title: 'IPInfoResponse',
  })
  .openapi('IPInfoResponse')

const IPProbeResponseSchema = z
  .object({
    'as-age': z
      .int32()
      .openapi({
        description: 'The age of the autonomous system (AS) in number of years since registration',
      }),
    'as-cidr': z.string().openapi({ description: 'The autonomous system (AS) CIDR range' }),
    'as-country-code': z
      .string()
      .openapi({ description: 'The autonomous system (AS) ISO 2-letter country code' }),
    'as-country-code3': z
      .string()
      .openapi({ description: 'The autonomous system (AS) ISO 3-letter country code' }),
    'as-description': z
      .string()
      .openapi({ description: 'The autonomous system (AS) description / company name' }),
    'as-domains': z
      .array(z.string())
      .openapi({
        description: 'Array of all the domains associated with the autonomous system (AS)',
      }),
    asn: z.string().openapi({ description: 'The autonomous system (AS) number' }),
    city: z.string().openapi({ description: 'Full city name (if detectable)' }),
    'continent-code': z.string().openapi({ description: 'ISO 2-letter continent code' }),
    country: z.string().openapi({ description: 'Full country name' }),
    'country-code': z.string().openapi({ description: 'ISO 2-letter country code' }),
    'country-code3': z.string().openapi({ description: 'ISO 3-letter country code' }),
    'currency-code': z
      .string()
      .openapi({ description: 'ISO 4217 currency code associated with the country' }),
    'host-domain': z.string().openapi({ description: 'The IPs host domain' }),
    hostname: z.string().openapi({ description: 'The IPs full hostname (PTR)' }),
    ip: z.string().openapi({ description: 'The IP address' }),
    'is-bogon': z
      .boolean()
      .openapi({
        description:
          'True if this is a bogon IP address such as a private network, local network or reserved address',
      }),
    'is-hosting': z
      .boolean()
      .openapi({
        description:
          'True if this IP belongs to a hosting company. Note that this can still be true even if the provider type is VPN/proxy, this occurs in the case that the IP is detected as both types',
      }),
    'is-isp': z
      .boolean()
      .openapi({
        description:
          'True if this IP belongs to an internet service provider. Note that this can still be true even if the provider type is VPN/proxy, this occurs in the case that the IP is detected as both types',
      }),
    'is-proxy': z.boolean().openapi({ description: 'True if this IP ia a proxy' }),
    'is-v4-mapped': z
      .boolean()
      .openapi({
        description:
          'True if this is a <a href="https://en.wikipedia.org/wiki/IPv6#IPv4-mapped_IPv6_addresses">IPv4 mapped IPv6 address</a>',
      }),
    'is-v6': z.boolean().openapi({ description: 'True if this is a IPv6 address. False if IPv4' }),
    'is-vpn': z.boolean().openapi({ description: 'True if this IP ia a VPN' }),
    'provider-description': z
      .string()
      .openapi({
        description: 'A description of the provider (usually extracted from the providers website)',
      }),
    'provider-domain': z.string().openapi({ description: 'The domain name of the provider' }),
    'provider-type': z
      .string()
      .openapi({
        description:
          'The detected provider type, possible values are: <br> <ul> <li>isp - IP belongs to an internet service provider. This includes both mobile, home and business internet providers</li> <li>hosting - IP belongs to a hosting company. This includes website hosting, cloud computing platforms and colocation facilities</li> <li>vpn - IP belongs to a VPN provider</li> <li>proxy - IP belongs to a proxy service. This includes HTTP/SOCKS proxies and browser based proxies</li> <li>university - IP belongs to a university/college/campus</li> <li>government - IP belongs to a government department. This includes military facilities</li> <li>commercial - IP belongs to a commercial entity such as a corporate headquarters or company office</li> <li>unknown - could not identify the provider type</li> </ul>',
      }),
    'provider-website': z.string().openapi({ description: 'The website URL for the provider' }),
    region: z.string().openapi({ description: 'Full region name (if detectable)' }),
    'region-code': z.string().openapi({ description: 'ISO 3166-2 region code (if detectable)' }),
    valid: z.boolean().openapi({ description: 'True if this is a valid IPv4 or IPv6 address' }),
    'vpn-domain': z
      .string()
      .openapi({
        description:
          'The domain of the VPN provider (may be empty if the VPN domain is not detectable)',
      }),
  })
  .openapi({
    required: [
      'valid',
      'country',
      'provider-type',
      'country-code',
      'hostname',
      'provider-domain',
      'city',
      'provider-website',
      'ip',
      'region',
      'provider-description',
      'continent-code',
      'is-hosting',
      'is-isp',
      'country-code3',
      'currency-code',
      'is-vpn',
      'is-proxy',
      'asn',
      'as-cidr',
      'as-country-code',
      'as-country-code3',
      'as-domains',
      'as-description',
      'as-age',
      'host-domain',
      'vpn-domain',
      'is-v6',
      'is-v4-mapped',
      'is-bogon',
      'region-code',
    ],
    title: 'IPProbeResponse',
  })
  .openapi('IPProbeResponse')

const PhonePlaybackResponseSchema = z
  .object({
    calling: z.boolean().openapi({ description: 'True if the call is being made now' }),
    'number-valid': z.boolean().openapi({ description: 'True if this a valid phone number' }),
  })
  .openapi({ required: ['calling', 'number-valid'], title: 'PhonePlaybackResponse' })
  .openapi('PhonePlaybackResponse')

const PhoneValidateResponseSchema = z
  .object({
    country: z.string().openapi({ description: 'The phone number country' }),
    'country-code': z
      .string()
      .openapi({ description: 'The phone number country as an ISO 2-letter country code' }),
    'country-code3': z
      .string()
      .openapi({ description: 'The phone number country as an ISO 3-letter country code' }),
    'currency-code': z
      .string()
      .openapi({ description: 'ISO 4217 currency code associated with the country' }),
    'international-calling-code': z
      .string()
      .openapi({ description: 'The international calling code' }),
    'international-number': z
      .string()
      .openapi({ description: 'The number represented in full international format (E.164)' }),
    'is-mobile': z
      .boolean()
      .openapi({
        description:
          'True if this is a mobile number. If the number type is unknown this value will be false',
      }),
    'local-number': z
      .string()
      .openapi({ description: 'The number represented in local dialing format' }),
    location: z
      .string()
      .openapi({
        description:
          'The phone number location. Could be the city, region or country depending on the type of number',
      }),
    'prefix-network': z
      .string()
      .openapi({
        description:
          'The network/carrier who owns the prefix (this only works for some countries, use HLR lookup for global network detection)',
      }),
    type: z
      .string()
      .openapi({
        description:
          'The number type based on the number prefix. <br>Possible values are: <br> <ul> <li>mobile</li> <li>fixed-line</li> <li>premium-rate</li> <li>toll-free</li> <li>voip</li> <li>unknown (use HLR lookup)</li> </ul>',
      }),
    valid: z.boolean().openapi({ description: 'Is this a valid phone number' }),
  })
  .openapi({
    required: [
      'valid',
      'international-calling-code',
      'country-code',
      'location',
      'is-mobile',
      'type',
      'international-number',
      'local-number',
      'country',
      'country-code3',
      'currency-code',
      'prefix-network',
    ],
    title: 'PhoneValidateResponse',
  })
  .openapi('PhoneValidateResponse')

const PhoneVerifyResponseSchema = z
  .object({
    calling: z.boolean().openapi({ description: 'True if the call is being made now' }),
    'number-valid': z.boolean().openapi({ description: 'True if this a valid phone number' }),
    'security-code': z
      .string()
      .openapi({
        description:
          'The security code generated, you can save this code to perform your own verification or you can use the <a href="https://www.neutrinoapi.com/api/verify-security-code/">Verify Security Code API</a>',
      }),
  })
  .openapi({ required: ['number-valid', 'calling', 'security-code'], title: 'PhoneVerifyResponse' })
  .openapi('PhoneVerifyResponse')

const SMSVerifyResponseSchema = z
  .object({
    'number-valid': z.boolean().openapi({ description: 'True if this a valid phone number' }),
    'security-code': z
      .string()
      .openapi({
        description:
          'The security code generated, you can save this code to perform your own verification or you can use the <a href="https://www.neutrinoapi.com/api/verify-security-code/">Verify Security Code API</a>',
      }),
    sent: z.boolean().openapi({ description: 'True if the SMS has been sent' }),
  })
  .openapi({ required: ['number-valid', 'security-code', 'sent'], title: 'SMSVerifyResponse' })
  .openapi('SMSVerifyResponse')

const UALookupResponseSchema = z
  .object({
    'browser-engine': z
      .string()
      .openapi({
        description: 'If the client is a web browser which underlying browser engine does it use',
      }),
    'browser-release': z
      .string()
      .openapi({
        description: 'If the client is a web browser which year was this browser version released',
      }),
    'device-brand': z.string().openapi({ description: 'The device brand / manufacturer' }),
    'device-height-px': z
      .float64()
      .openapi({ description: "The device display height in CSS 'px'" }),
    'device-model': z.string().openapi({ description: 'The device model' }),
    'device-model-code': z.string().openapi({ description: 'The device model code' }),
    'device-pixel-ratio': z
      .float64()
      .openapi({
        description:
          'The device display pixel ratio (the ratio of the resolution in physical pixels to the resolution in CSS pixels)',
      }),
    'device-ppi': z.float64().openapi({ description: 'The device display PPI (pixels per inch)' }),
    'device-price': z
      .float64()
      .openapi({ description: 'The average device price on release in USD' }),
    'device-release': z
      .string()
      .openapi({ description: 'The year when this device model was released' }),
    'device-resolution': z
      .string()
      .openapi({ description: 'The device display resolution in physical pixels (e.g. 720x1280)' }),
    'device-width-px': z.float64().openapi({ description: "The device display width in CSS 'px'" }),
    'is-mobile': z
      .boolean()
      .openapi({ description: 'Is this a mobile device (e.g. a phone or tablet)' }),
    'is-webview': z
      .boolean()
      .openapi({ description: 'Is this a WebView / embedded software client' }),
    name: z.string().openapi({ description: 'The client software name' }),
    os: z.string().openapi({ description: 'The full operating system name' }),
    'os-family': z
      .string()
      .openapi({
        description:
          'The operating system family. The major OS families are: Android, Windows, macOS, iOS, Linux',
      }),
    'os-version': z.string().openapi({ description: 'The operating system full version' }),
    'os-version-major': z.string().openapi({ description: 'The operating system major version' }),
    type: z
      .string()
      .openapi({
        description:
          'The user agent type, possible values are: <br> <ul> <li>desktop</li> <li>phone</li> <li>tablet</li> <li>wearable</li> <li>tv</li> <li>console</li> <li>email</li> <li>library</li> <li>robot</li> <li>unknown</li> </ul>',
      }),
    ua: z.string().openapi({ description: 'The user agent string' }),
    version: z.string().openapi({ description: 'The client software full version' }),
    'version-major': z.string().openapi({ description: 'The client software major version' }),
  })
  .openapi({
    required: [
      'ua',
      'type',
      'name',
      'version',
      'version-major',
      'browser-engine',
      'browser-release',
      'os',
      'os-family',
      'os-version',
      'os-version-major',
      'is-mobile',
      'is-webview',
      'device-brand',
      'device-model',
      'device-model-code',
      'device-release',
      'device-price',
      'device-resolution',
      'device-ppi',
      'device-pixel-ratio',
      'device-width-px',
      'device-height-px',
    ],
    title: 'UALookupResponse',
  })
  .openapi('UALookupResponse')

const URLInfoResponseSchema = z
  .object({
    content: z
      .string()
      .openapi({
        description:
          "The actual content this URL responded with. Only set if the 'fetch-content' option was used",
      }),
    'content-encoding': z.string().openapi({ description: 'The encoding format the URL uses' }),
    'content-size': z.int32().openapi({ description: 'The size of the URL content in bytes' }),
    'content-type': z.string().openapi({ description: 'The content-type this URL serves' }),
    'http-ok': z
      .boolean()
      .openapi({ description: 'True if this URL responded with an HTTP OK (200) status' }),
    'http-redirect': z
      .boolean()
      .openapi({ description: 'True if this URL responded with an HTTP redirect' }),
    'http-status': z
      .int32()
      .openapi({
        description:
          'The HTTP status code this URL responded with. An HTTP status of 0 indicates a network level issue',
      }),
    'http-status-message': z
      .int32()
      .openapi({ description: 'The HTTP status message assoicated with the status code' }),
    'is-error': z
      .boolean()
      .openapi({
        description:
          'True if an error occurred while loading the URL. This includes network errors, TLS errors and timeouts',
      }),
    'is-timeout': z
      .boolean()
      .openapi({
        description:
          "True if a timeout occurred while loading the URL. You can set the timeout with the request parameter 'timeout'",
      }),
    'language-code': z
      .string()
      .openapi({
        description:
          'The ISO 2-letter language code of the page. Extracted from either the HTML document or via HTTP headers',
      }),
    'load-time': z
      .float64()
      .openapi({ description: 'The time taken to load the URL content in seconds' }),
    query: z
      .record(z.string(), z.string())
      .openapi({ description: 'A key-value map of the URL query paramaters' }),
    real: z.boolean().openapi({ description: 'Is this URL actually serving real content' }),
    'server-city': z
      .string()
      .openapi({ description: 'The servers IP geo-location: full city name (if detectable)' }),
    'server-country': z
      .string()
      .openapi({ description: 'The servers IP geo-location: full country name' }),
    'server-country-code': z
      .string()
      .openapi({ description: 'The servers IP geo-location: ISO 2-letter country code' }),
    'server-hostname': z.string().openapi({ description: 'The servers hostname (PTR record)' }),
    'server-ip': z
      .string()
      .openapi({ description: 'The IP address of the server hosting this URL' }),
    'server-name': z
      .string()
      .openapi({ description: 'The name of the server software hosting this URL' }),
    'server-region': z
      .string()
      .openapi({ description: 'The servers IP geo-location: full region name (if detectable)' }),
    title: z.string().openapi({ description: 'The document title' }),
    url: z
      .string()
      .openapi({
        description:
          'The fully qualified URL. This may be different to the URL requested if http-redirect is true',
      }),
    'url-path': z.string().openapi({ description: 'The URL path' }),
    'url-port': z.int32().openapi({ description: 'The URL port' }),
    'url-protocol': z.string().openapi({ description: 'The URL protocol, usually http or https' }),
    valid: z.boolean().openapi({ description: 'Is this a valid well-formed URL' }),
  })
  .openapi({
    required: [
      'http-status-message',
      'server-region',
      'query',
      'server-name',
      'url-port',
      'server-country',
      'real',
      'server-city',
      'url-path',
      'url',
      'valid',
      'server-hostname',
      'load-time',
      'http-ok',
      'content-size',
      'http-status',
      'server-country-code',
      'content-encoding',
      'server-ip',
      'url-protocol',
      'content-type',
      'http-redirect',
      'content',
      'is-timeout',
      'title',
      'language-code',
      'is-error',
    ],
    title: 'URLInfoResponse',
  })
  .openapi('URLInfoResponse')

const VerifySecurityCodeResponseSchema = z
  .object({ verified: z.boolean().openapi({ description: 'True if the code is valid' }) })
  .openapi({ required: ['verified'], title: 'VerifySecurityCodeResponse' })
  .openapi('VerifySecurityCodeResponse')

const ApiKeySecurityScheme = {
  description: 'One of your API keys',
  in: 'header',
  name: 'api-key',
  type: 'apiKey',
}

const UserIdSecurityScheme = {
  description: 'Your user ID',
  in: 'header',
  name: 'user-id',
  type: 'apiKey',
}

export const postBadWordFilterRoute = createRoute({
  method: 'post',
  path: '/bad-word-filter',
  tags: ['Data Tools'],
  summary: 'Bad Word Filter',
  description: 'Detect bad words, swear words and profanity in a given text',
  operationId: 'BadWordFilter',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              catalog: z
                .string()
                .default('strict')
                .exactOptional()
                .openapi({
                  description:
                    "Which catalog of bad words to use, we currently maintain two bad word catalogs: <br> <ul> <li>strict - the largest database of bad words which includes profanity, obscenity, sexual, rude, cuss, dirty, swear and objectionable words and phrases. This catalog is suitable for environments of all ages including educational or children's content</li> <li>obscene - like the strict catalog but does not include any mild profanities, idiomatic phrases or words which are considered formal terminology. This catalog is suitable for adult environments where certain types of bad words are considered OK</li> </ul>",
                }),
              'censor-character': z
                .string()
                .exactOptional()
                .openapi({ description: 'The character to use to censor out the bad words found' }),
              content: z
                .string()
                .openapi({
                  description:
                    'The content to scan. This can be either a URL to load from, a file upload (multipart/form-data) or an HTML content string',
                }),
            })
            .openapi({ required: ['content'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: BadWordFilterResponseSchema } },
      headers: z.object({}),
    },
    400: {
      description: 'Your API request has been rejected. Check error code for details',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    403: {
      description: 'You have failed to authenticate',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    500: {
      description: 'We messed up, sorry! Your request has caused a fatal exception',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    default: {
      description: 'We messed up, sorry! Your request has caused an error',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
  },
})

export const getBinListDownloadRoute = createRoute({
  method: 'get',
  path: '/bin-list-download',
  tags: ['E-commerce'],
  summary: 'BIN List Download',
  description: 'Download our entire BIN database for direct use on your own systems',
  operationId: 'BINListDownload',
  request: {
    query: z.object({
      'include-iso3': z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Include ISO 3-letter country codes and ISO 3-letter currency codes in the data. These will be added to columns 10 and 11 respectively',
            in: 'query',
            name: 'include-iso3',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      'include-8digit': z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Include 8-digit and higher BIN codes. This option includes all 6-digit BINs and all 8-digit and higher BINs (including some 9, 10 and 11 digit BINs where available)',
            in: 'query',
            name: 'include-8digit',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.file().default('').openapi({ type: 'string', format: 'binary' }),
        },
      },
      headers: z.object({}),
    },
    400: {
      description: 'Your API request has been rejected. Check error code for details',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    403: {
      description: 'You have failed to authenticate',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    500: {
      description: 'We messed up, sorry! Your request has caused a fatal exception',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    default: {
      description: 'We messed up, sorry! Your request has caused an error',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
  },
})

export const getBinLookupRoute = createRoute({
  method: 'get',
  path: '/bin-lookup',
  tags: ['E-commerce'],
  summary: 'BIN Lookup',
  description:
    'Perform a BIN (Bank Identification Number) or IIN (Issuer Identification Number) lookup',
  operationId: 'BINLookup',
  request: {
    query: z.object({
      'bin-number': z
        .string()
        .openapi({
          param: {
            description:
              'The BIN or IIN number. This is the first 6, 8 or 10 digits of a card number, use 8 (or more) digits for the highest level of accuracy',
            in: 'query',
            name: 'bin-number',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'customer-ip': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Pass in the customers IP address and we will return some extra information about them',
            in: 'query',
            name: 'customer-ip',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: BINLookupResponseSchema } },
      headers: z.object({}),
    },
    400: {
      description: 'Your API request has been rejected. Check error code for details',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    403: {
      description: 'You have failed to authenticate',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    500: {
      description: 'We messed up, sorry! Your request has caused a fatal exception',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    default: {
      description: 'We messed up, sorry! Your request has caused an error',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
  },
})

export const postBrowserBotRoute = createRoute({
  method: 'post',
  path: '/browser-bot',
  tags: ['WWW'],
  summary: 'Browser Bot',
  description:
    'Browser bot can extract content, interact with keyboard and mouse events, and execute JavaScript on a website',
  operationId: 'BrowserBot',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              delay: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .default(3)
                .exactOptional()
                .openapi({
                  description:
                    'Delay in seconds to wait before capturing any page data, executing selectors or JavaScript',
                }),
              exec: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string()),
                )
                .exactOptional()
                .openapi({
                  description:
                    "Execute JavaScript on the website. This parameter accepts JavaScript as either a string containing JavaScript or for sending multiple separate statements a JSON array or POST array can also be used. If a statement returns any value it will be returned in the 'exec-results' response. You can also use the following specially defined user interaction functions: <br> <br> <div> sleep(seconds); Just wait/sleep for the specified number of seconds. <br>click('selector'); Click on the first element matching the given selector. <br>focus('selector'); Focus on the first element matching the given selector. <br>keys('characters'); Send the specified keyboard characters. Use click() or focus() first to send keys to a specific element. <br>enter(); Send the Enter key. <br>tab(); Send the Tab key. <br> </div>",
                  default: '[]',
                }),
              'ignore-certificate-errors': z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(false)
                .exactOptional()
                .openapi({
                  description: 'Ignore any TLS/SSL certificate errors and load the page anyway',
                }),
              selector: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Extract content from the page DOM using this selector. Commonly known as a CSS selector, you can find a good reference <a href="https://www.w3schools.com/cssref/css_selectors.asp">here</a>',
                }),
              timeout: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .default(30)
                .exactOptional()
                .openapi({
                  description:
                    'Timeout in seconds. Give up if still trying to load the page after this number of seconds',
                }),
              url: z.string().openapi({ description: 'The URL to load' }),
              'user-agent': z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Override the browsers default user-agent string with this one',
                }),
            })
            .openapi({ required: ['url'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: BrowserBotResponseSchema } },
      headers: z.object({}),
    },
    400: {
      description: 'Your API request has been rejected. Check error code for details',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    403: {
      description: 'You have failed to authenticate',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    500: {
      description: 'We messed up, sorry! Your request has caused a fatal exception',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    default: {
      description: 'We messed up, sorry! Your request has caused an error',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
  },
})

export const getConvertRoute = createRoute({
  method: 'get',
  path: '/convert',
  tags: ['E-commerce'],
  summary: 'Convert',
  description: 'A currency and unit conversion tool',
  operationId: 'Convert',
  request: {
    query: z.object({
      'from-value': z
        .string()
        .openapi({
          param: {
            description: 'The value to convert from (e.g. 10.95)',
            in: 'query',
            name: 'from-value',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'from-type': z
        .string()
        .openapi({
          param: {
            description: 'The type of the value to convert from (e.g. USD)',
            in: 'query',
            name: 'from-type',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'to-type': z
        .string()
        .openapi({
          param: {
            description: 'The type to convert to (e.g. EUR)',
            in: 'query',
            name: 'to-type',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ConvertResponseSchema } },
      headers: z.object({}),
    },
    400: {
      description: 'Your API request has been rejected. Check error code for details',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    403: {
      description: 'You have failed to authenticate',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    500: {
      description: 'We messed up, sorry! Your request has caused a fatal exception',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    default: {
      description: 'We messed up, sorry! Your request has caused an error',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
  },
})

export const getEmailValidateRoute = createRoute({
  method: 'get',
  path: '/email-validate',
  tags: ['Data Tools'],
  summary: 'Email Validate',
  description: 'Parse, validate and clean an email address',
  operationId: 'EmailValidate',
  request: {
    query: z.object({
      email: z
        .string()
        .openapi({
          param: {
            description: 'An email address',
            in: 'query',
            name: 'email',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'fix-typos': z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Automatically attempt to fix typos in the address',
            in: 'query',
            name: 'fix-typos',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: EmailValidateResponseSchema } },
      headers: z.object({}),
    },
    400: {
      description: 'Your API request has been rejected. Check error code for details',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    403: {
      description: 'You have failed to authenticate',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    500: {
      description: 'We messed up, sorry! Your request has caused a fatal exception',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    default: {
      description: 'We messed up, sorry! Your request has caused an error',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
  },
})

export const getEmailVerifyRoute = createRoute({
  method: 'get',
  path: '/email-verify',
  tags: ['Security and Networking'],
  summary: 'Email Verify',
  description: 'SMTP based email address verification',
  operationId: 'EmailVerify',
  request: {
    query: z.object({
      email: z
        .string()
        .openapi({
          param: {
            description: 'An email address',
            in: 'query',
            name: 'email',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'fix-typos': z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Automatically attempt to fix typos in the address',
            in: 'query',
            name: 'fix-typos',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: EmailVerifyResponseSchema } },
      headers: z.object({}),
    },
    400: {
      description: 'Your API request has been rejected. Check error code for details',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    403: {
      description: 'You have failed to authenticate',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    500: {
      description: 'We messed up, sorry! Your request has caused a fatal exception',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    default: {
      description: 'We messed up, sorry! Your request has caused an error',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
  },
})

export const getGeocodeAddressRoute = createRoute({
  method: 'get',
  path: '/geocode-address',
  tags: ['Geolocation'],
  summary: 'Geocode Address',
  description: 'Geocode an address, partial address or just the name of a place',
  operationId: 'GeocodeAddress',
  request: {
    query: z.object({
      address: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The full address, partial address or name of a place to try and locate. Comma separated address components are preferred.',
            in: 'query',
            name: 'address',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'house-number': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The house/building number to locate',
            in: 'query',
            name: 'house-number',
            required: false,
            schema: { type: 'string' },
          },
        }),
      street: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The street/road name to locate',
            in: 'query',
            name: 'street',
            required: false,
            schema: { type: 'string' },
          },
        }),
      city: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The city/town name to locate',
            in: 'query',
            name: 'city',
            required: false,
            schema: { type: 'string' },
          },
        }),
      county: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The county/region name to locate',
            in: 'query',
            name: 'county',
            required: false,
            schema: { type: 'string' },
          },
        }),
      state: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The state name to locate',
            in: 'query',
            name: 'state',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'postal-code': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The postal code to locate',
            in: 'query',
            name: 'postal-code',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'country-code': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit result to this country (the default is no country bias)',
            in: 'query',
            name: 'country-code',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'language-code': z
        .string()
        .default('en')
        .exactOptional()
        .openapi({
          param: {
            description:
              'The language to display results in, available languages are: <ul> <li>de, en, es, fr, it, pt, ru, zh</li> </ul>',
            in: 'query',
            name: 'language-code',
            required: false,
            schema: { default: 'en', type: 'string' },
          },
        }),
      'fuzzy-search': z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If no matches are found for the given address, start performing a recursive fuzzy search until a geolocation is found. This option is recommended for processing user input or implementing auto-complete. We use a combination of approximate string matching and data cleansing to find possible location matches',
            in: 'query',
            name: 'fuzzy-search',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: GeocodeAddressResponseSchema } },
      headers: z.object({}),
    },
    400: {
      description: 'Your API request has been rejected. Check error code for details',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    403: {
      description: 'You have failed to authenticate',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    500: {
      description: 'We messed up, sorry! Your request has caused a fatal exception',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    default: {
      description: 'We messed up, sorry! Your request has caused an error',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
  },
})

export const getGeocodeReverseRoute = createRoute({
  method: 'get',
  path: '/geocode-reverse',
  tags: ['Geolocation'],
  summary: 'Geocode Reverse',
  description: 'Convert a geographic coordinate (latitude and longitude) into a real world address',
  operationId: 'GeocodeReverse',
  request: {
    query: z.object({
      latitude: z
        .string()
        .openapi({
          param: {
            description: 'The location latitude in decimal degrees format',
            in: 'query',
            name: 'latitude',
            required: true,
            schema: { type: 'string' },
          },
        }),
      longitude: z
        .string()
        .openapi({
          param: {
            description: 'The location longitude in decimal degrees format',
            in: 'query',
            name: 'longitude',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'language-code': z
        .string()
        .default('en')
        .exactOptional()
        .openapi({
          param: {
            description:
              'The language to display results in, available languages are: <ul> <li>de, en, es, fr, it, pt, ru</li> </ul>',
            in: 'query',
            name: 'language-code',
            required: false,
            schema: { default: 'en', type: 'string' },
          },
        }),
      zoom: z
        .string()
        .default('address')
        .exactOptional()
        .openapi({
          param: {
            description:
              'The zoom level to respond with: <br> <ul> <li>address - the most precise address available</li> <li>street - the street level</li> <li>city - the city level</li> <li>state - the state level</li> <li>country - the country level</li> </ul>',
            in: 'query',
            name: 'zoom',
            required: false,
            schema: { default: 'address', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: GeocodeReverseResponseSchema } },
      headers: z.object({}),
    },
    400: {
      description: 'Your API request has been rejected. Check error code for details',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    403: {
      description: 'You have failed to authenticate',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    500: {
      description: 'We messed up, sorry! Your request has caused a fatal exception',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    default: {
      description: 'We messed up, sorry! Your request has caused an error',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
  },
})

export const getHlrLookupRoute = createRoute({
  method: 'get',
  path: '/hlr-lookup',
  tags: ['Telephony'],
  summary: 'HLR Lookup',
  description:
    'Connect to the global mobile cellular network and retrieve the status of a mobile device',
  operationId: 'HLRLookup',
  request: {
    query: z.object({
      number: z
        .string()
        .openapi({
          param: {
            description: 'A phone number',
            in: 'query',
            name: 'number',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'country-code': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'ISO 2-letter country code, assume numbers are based in this country. <br>If not set numbers are assumed to be in international format (with or without the leading + sign)',
            in: 'query',
            name: 'country-code',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: HLRLookupResponseSchema } },
      headers: z.object({}),
    },
    400: {
      description: 'Your API request has been rejected. Check error code for details',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    403: {
      description: 'You have failed to authenticate',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    500: {
      description: 'We messed up, sorry! Your request has caused a fatal exception',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    default: {
      description: 'We messed up, sorry! Your request has caused an error',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
  },
})

export const getHostReputationRoute = createRoute({
  method: 'get',
  path: '/host-reputation',
  tags: ['Security and Networking'],
  summary: 'Host Reputation',
  description:
    'Check the reputation of an IP address, domain name or URL against a comprehensive list of blacklists and blocklists',
  operationId: 'HostReputation',
  request: {
    query: z.object({
      host: z
        .string()
        .openapi({
          param: {
            description:
              'An IP address, domain name, FQDN or URL. <br>If you supply a domain/URL it will be checked against the URI DNSBL lists',
            in: 'query',
            name: 'host',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'list-rating': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(3)
        .exactOptional()
        .openapi({
          param: {
            description: 'Only check lists with this rating or better',
            in: 'query',
            name: 'list-rating',
            required: false,
            schema: { default: 3, format: 'int32', type: 'integer' },
          },
        }),
      zones: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only check these DNSBL zones/hosts. Multiple zones can be supplied as comma-separated values',
            in: 'query',
            name: 'zones',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: HostReputationResponseSchema } },
      headers: z.object({}),
    },
    400: {
      description: 'Your API request has been rejected. Check error code for details',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    403: {
      description: 'You have failed to authenticate',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    500: {
      description: 'We messed up, sorry! Your request has caused a fatal exception',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    default: {
      description: 'We messed up, sorry! Your request has caused an error',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
  },
})

export const postHtmlCleanRoute = createRoute({
  method: 'post',
  path: '/html-clean',
  tags: ['WWW'],
  summary: 'HTML Clean',
  description: 'Clean and sanitize untrusted HTML',
  operationId: 'HTMLClean',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              content: z
                .string()
                .openapi({
                  description:
                    'The HTML content. This can be either a URL to load from, a file upload (multipart/form-data) or an HTML content string',
                }),
              'output-type': z
                .string()
                .openapi({
                  description:
                    'The level of sanitization, possible values are: <br><b>plain-text</b>: reduce the content to plain text only (no HTML tags at all) <br><b>simple-text</b>: allow only very basic text formatting tags like b, em, i, strong, u <br><b>basic-html</b>: allow advanced text formatting and hyper links <br><b>basic-html-with-images</b>: same as basic html but also allows image tags <br><b>advanced-html</b>: same as basic html with images but also allows many more common HTML tags like table, ul, dl, pre <br>',
                }),
            })
            .openapi({ required: ['content', 'output-type'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.file().default('').openapi({ type: 'string', format: 'binary' }),
        },
      },
      headers: z.object({}),
    },
    400: {
      description: 'Your API request has been rejected. Check error code for details',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    403: {
      description: 'You have failed to authenticate',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    500: {
      description: 'We messed up, sorry! Your request has caused a fatal exception',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    default: {
      description: 'We messed up, sorry! Your request has caused an error',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
  },
})

export const postHtmlRenderRoute = createRoute({
  method: 'post',
  path: '/html-render',
  tags: ['Imaging'],
  summary: 'HTML Render',
  description: 'Render HTML content to PDF, JPG or PNG',
  operationId: 'HTMLRender',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              content: z
                .string()
                .openapi({
                  description:
                    'The HTML content. This can be either a URL to load from, a file upload (multipart/form-data) or an HTML content string',
                }),
              css: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Inject custom CSS into the HTML. e.g. 'body { background-color: red;}'",
                }),
              delay: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .default(0)
                .exactOptional()
                .openapi({
                  description:
                    'Number of seconds to wait before rendering the page (can be useful for pages with animations etc)',
                }),
              footer: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The footer HTML to insert into each page. The following dynamic tags are supported: {date}, {title}, {url}, {pageNumber}, {totalPages}',
                }),
              format: z
                .string()
                .default('PDF')
                .exactOptional()
                .openapi({
                  description: 'Which format to output, available options are: PDF, PNG, JPG',
                }),
              grayscale: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(false)
                .exactOptional()
                .openapi({ description: 'Render the final document in grayscale' }),
              header: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The header HTML to insert into each page. The following dynamic tags are supported: {date}, {title}, {url}, {pageNumber}, {totalPages}',
                }),
              'ignore-certificate-errors': z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(false)
                .exactOptional()
                .openapi({ description: 'Ignore any TLS/SSL certificate errors' }),
              'image-height': z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'If rendering to an image format (PNG or JPG) use this image height (in pixels). The default is automatic which dynamically sets the image height based on the content',
                }),
              'image-width': z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .default(1024)
                .exactOptional()
                .openapi({
                  description:
                    'If rendering to an image format (PNG or JPG) use this image width (in pixels)',
                }),
              landscape: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(false)
                .exactOptional()
                .openapi({ description: 'Set the document to landscape orientation' }),
              margin: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .default(0)
                .exactOptional()
                .openapi({ description: 'The document margin (in mm)' }),
              'margin-bottom': z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .default(0)
                .exactOptional()
                .openapi({ description: 'The document bottom margin (in mm)' }),
              'margin-left': z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .default(0)
                .exactOptional()
                .openapi({ description: 'The document left margin (in mm)' }),
              'margin-right': z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .default(0)
                .exactOptional()
                .openapi({ description: 'The document right margin (in mm)' }),
              'margin-top': z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .default(0)
                .exactOptional()
                .openapi({ description: 'The document top margin (in mm)' }),
              'page-height': z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional()
                .openapi({ description: 'Set the PDF page height explicitly (in mm)' }),
              'page-size': z
                .string()
                .default('A4')
                .exactOptional()
                .openapi({
                  description:
                    'Set the document page size, can be one of: A0 - A9, B0 - B10, Comm10E, DLE or Letter',
                }),
              'page-width': z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional()
                .openapi({ description: 'Set the PDF page width explicitly (in mm)' }),
              timeout: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .default(300)
                .exactOptional()
                .openapi({
                  description:
                    'Timeout in seconds. Give up if still trying to load the HTML content after this number of seconds',
                }),
              title: z.string().exactOptional().openapi({ description: 'The document title' }),
              zoom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .default(1)
                .exactOptional()
                .openapi({
                  description:
                    'Set the zoom factor when rendering the page (2.0 for double size, 0.5 for half size)',
                }),
            })
            .openapi({ required: ['content'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.file().default('').openapi({ type: 'string', format: 'binary' }),
        },
      },
      headers: z.object({}),
    },
    400: {
      description: 'Your API request has been rejected. Check error code for details',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    403: {
      description: 'You have failed to authenticate',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    500: {
      description: 'We messed up, sorry! Your request has caused a fatal exception',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    default: {
      description: 'We messed up, sorry! Your request has caused an error',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
  },
})

export const postImageResizeRoute = createRoute({
  method: 'post',
  path: '/image-resize',
  tags: ['Imaging'],
  summary: 'Image Resize',
  description: 'Resize an image and output as either JPEG or PNG',
  operationId: 'ImageResize',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              'bg-color': z
                .string()
                .default('transparent')
                .exactOptional()
                .openapi({
                  description:
                    "The image background color in hexadecimal notation (e.g. #0000ff). For PNG output the special value of 'transparent' can also be used. For JPG output the default is black (#000000)",
                }),
              format: z
                .string()
                .default('png')
                .exactOptional()
                .openapi({ description: 'The output image format, can be either png or jpg' }),
              height: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description:
                    "The height to resize to (in px). If you don't set this field then the height will be automatic based on the requested width and image aspect ratio",
                }),
              'image-url': z
                .string()
                .openapi({
                  description:
                    'The URL or Base64 encoded Data URL for the source image. You can also upload an image file directly using multipart/form-data',
                }),
              'resize-mode': z
                .string()
                .default('scale')
                .exactOptional()
                .openapi({
                  description:
                    "The resize mode to use, we support 3 main resizing modes: <ul> <li><b>scale</b><br>Resize to within the width and height specified while preserving aspect ratio. In this mode the width or height will be automatically adjusted to fit the aspect ratio</li> <li><b>pad</b><br>Resize to exactly the width and height specified while preserving aspect ratio and pad any space left over. Any padded space will be filled in with the 'bg-color' value</li> <li><b>crop</b><br>Resize to exactly the width and height specified while preserving aspect ratio and crop any space which fall outside the area. The cropping window is centered on the original image</li> </ul>",
                }),
              width: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .openapi({ description: 'The width to resize to (in px)' }),
            })
            .openapi({ required: ['image-url', 'width'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.file().default('').openapi({ type: 'string', format: 'binary' }),
        },
      },
      headers: z.object({}),
    },
    400: {
      description: 'Your API request has been rejected. Check error code for details',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    403: {
      description: 'You have failed to authenticate',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    500: {
      description: 'We messed up, sorry! Your request has caused a fatal exception',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    default: {
      description: 'We messed up, sorry! Your request has caused an error',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
  },
})

export const postImageWatermarkRoute = createRoute({
  method: 'post',
  path: '/image-watermark',
  tags: ['Imaging'],
  summary: 'Image Watermark',
  description: 'Watermark one image with another image',
  operationId: 'ImageWatermark',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              'bg-color': z
                .string()
                .default('transparent')
                .exactOptional()
                .openapi({
                  description:
                    "The image background color in hexadecimal notation (e.g. #0000ff). For PNG output the special value of 'transparent' can also be used. For JPG output the default is black (#000000)",
                }),
              format: z
                .string()
                .default('png')
                .exactOptional()
                .openapi({ description: 'The output image format, can be either png or jpg' }),
              height: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description: 'If set resize the resulting image to this height (in px)',
                }),
              'image-url': z
                .string()
                .openapi({
                  description:
                    'The URL or Base64 encoded Data URL for the source image. You can also upload an image file directly using multipart/form-data',
                }),
              opacity: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .default(50)
                .exactOptional()
                .openapi({ description: 'The opacity of the watermark (0 to 100)' }),
              position: z
                .string()
                .default('center')
                .exactOptional()
                .openapi({
                  description:
                    'The position of the watermark image, possible values are: <br>center, top-left, top-center, top-right, bottom-left, bottom-center, bottom-right',
                }),
              'resize-mode': z
                .string()
                .default('scale')
                .exactOptional()
                .openapi({
                  description:
                    "The resize mode to use, we support 3 main resizing modes: <ul> <li><b>scale</b><br>Resize to within the width and height specified while preserving aspect ratio. In this mode the width or height will be automatically adjusted to fit the aspect ratio</li> <li><b>pad</b><br>Resize to exactly the width and height specified while preserving aspect ratio and pad any space left over. Any padded space will be filled in with the 'bg-color' value</li> <li><b>crop</b><br>Resize to exactly the width and height specified while preserving aspect ratio and crop any space which fall outside the area. The cropping window is centered on the original image</li> </ul>",
                }),
              'watermark-url': z
                .string()
                .openapi({
                  description:
                    'The URL or Base64 encoded Data URL for the watermark image. You can also upload an image file directly using multipart/form-data',
                }),
              width: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description: 'If set resize the resulting image to this width (in px)',
                }),
            })
            .openapi({ required: ['image-url', 'watermark-url'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.file().default('').openapi({ type: 'string', format: 'binary' }),
        },
      },
      headers: z.object({}),
    },
    400: {
      description: 'Your API request has been rejected. Check error code for details',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    403: {
      description: 'You have failed to authenticate',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    500: {
      description: 'We messed up, sorry! Your request has caused a fatal exception',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    default: {
      description: 'We messed up, sorry! Your request has caused an error',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
  },
})

export const getIpBlocklistRoute = createRoute({
  method: 'get',
  path: '/ip-blocklist',
  tags: ['Security and Networking'],
  summary: 'IP Blocklist',
  description: 'The IP Blocklist API will detect potentially malicious or dangerous IP addresses',
  operationId: 'IPBlocklist',
  request: {
    query: z.object({
      ip: z
        .string()
        .openapi({
          param: {
            description:
              'An IPv4 or IPv6 address. Accepts standard IP notation (with or without port number), CIDR notation and IPv6 compressed notation. If multiple IPs are passed using comma-separated values the first non-bogon address on the list will be checked',
            in: 'query',
            name: 'ip',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'vpn-lookup': z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Include public VPN provider IP addresses. <br><b>NOTE</b>: For more advanced VPN detection including the ability to identify private and stealth VPNs use the <a href="https://www.neutrinoapi.com/api/ip-probe/">IP Probe API</a>',
            in: 'query',
            name: 'vpn-lookup',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: IPBlocklistResponseSchema } },
      headers: z.object({}),
    },
    400: {
      description: 'Your API request has been rejected. Check error code for details',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    403: {
      description: 'You have failed to authenticate',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    500: {
      description: 'We messed up, sorry! Your request has caused a fatal exception',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    default: {
      description: 'We messed up, sorry! Your request has caused an error',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
  },
})

export const getIpBlocklistDownloadRoute = createRoute({
  method: 'get',
  path: '/ip-blocklist-download',
  tags: ['Security and Networking'],
  summary: 'IP Blocklist Download',
  description: 'This API is a direct feed to our IP blocklist data',
  operationId: 'IPBlocklistDownload',
  request: {
    query: z.object({
      format: z
        .string()
        .default('csv')
        .exactOptional()
        .openapi({
          param: {
            description: 'The data format. Can be either CSV or TXT',
            in: 'query',
            name: 'format',
            required: false,
            schema: { default: 'csv', type: 'string' },
          },
        }),
      'include-vpn': z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Include public VPN provider addresses, this option is only available for Tier 3 or higher accounts. Adds any IPs which are solely listed as VPN providers, IPs that are listed on multiple sensors will still be included without enabling this option. <br><b>WARNING</b>: This adds at least an additional 8 million IP addresses to the download if not using CIDR notation',
            in: 'query',
            name: 'include-vpn',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      cidr: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Output IPs using CIDR notation. This option should be preferred but is off by default for backwards compatibility',
            in: 'query',
            name: 'cidr',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      ip6: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Output the IPv6 version of the blocklist, the default is to output IPv4 only. Note that this option enables CIDR notation too as this is the only notation currently supported for IPv6',
            in: 'query',
            name: 'ip6',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.file().default('').openapi({ type: 'string', format: 'binary' }),
        },
      },
      headers: z.object({}),
    },
    400: {
      description: 'Your API request has been rejected. Check error code for details',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    403: {
      description: 'You have failed to authenticate',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    500: {
      description: 'We messed up, sorry! Your request has caused a fatal exception',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    default: {
      description: 'We messed up, sorry! Your request has caused an error',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
  },
})

export const getIpInfoRoute = createRoute({
  method: 'get',
  path: '/ip-info',
  tags: ['Geolocation'],
  summary: 'IP Info',
  description: 'Get location information about an IP address and do reverse DNS (PTR) lookups',
  operationId: 'IPInfo',
  request: {
    query: z.object({
      ip: z
        .string()
        .openapi({
          param: {
            description: 'IPv4 or IPv6 address',
            in: 'query',
            name: 'ip',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'reverse-lookup': z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Do a reverse DNS (PTR) lookup. This option can add extra delay to the request so only use it if you need it',
            in: 'query',
            name: 'reverse-lookup',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: IPInfoResponseSchema } },
      headers: z.object({}),
    },
    400: {
      description: 'Your API request has been rejected. Check error code for details',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    403: {
      description: 'You have failed to authenticate',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    500: {
      description: 'We messed up, sorry! Your request has caused a fatal exception',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    default: {
      description: 'We messed up, sorry! Your request has caused an error',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
  },
})

export const getIpProbeRoute = createRoute({
  method: 'get',
  path: '/ip-probe',
  tags: ['Security and Networking'],
  summary: 'IP Probe',
  description: 'Execute a realtime network probe against an IPv4 or IPv6 address',
  operationId: 'IPProbe',
  request: {
    query: z.object({
      ip: z
        .string()
        .openapi({
          param: {
            description: 'IPv4 or IPv6 address',
            in: 'query',
            name: 'ip',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: IPProbeResponseSchema } },
      headers: z.object({}),
    },
    400: {
      description: 'Your API request has been rejected. Check error code for details',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    403: {
      description: 'You have failed to authenticate',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    500: {
      description: 'We messed up, sorry! Your request has caused a fatal exception',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    default: {
      description: 'We messed up, sorry! Your request has caused an error',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
  },
})

export const postPhonePlaybackRoute = createRoute({
  method: 'post',
  path: '/phone-playback',
  tags: ['Telephony'],
  summary: 'Phone Playback',
  description: 'Make an automated call to any valid phone number and playback an audio message',
  operationId: 'PhonePlayback',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              'audio-url': z
                .string()
                .openapi({
                  description:
                    'A URL to a valid audio file. Accepted audio formats are: <ul> <li>MP3</li> <li>WAV</li> <li>OGG</li> </ul>You can use the following MP3 URL for testing: <br>https://www.neutrinoapi.com/test-files/test1.mp3',
                }),
              limit: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .default(3)
                .exactOptional()
                .openapi({
                  description:
                    'Limit the total number of calls allowed to the supplied phone number, if the limit is reached within the TTL then error code 14 will be returned',
                }),
              'limit-ttl': z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .default(1)
                .exactOptional()
                .openapi({
                  description:
                    "Set the TTL in number of days that the 'limit' option will remember a phone number (the default is 1 day and the maximum is 365 days)",
                }),
              number: z
                .string()
                .openapi({
                  description: 'The phone number to call. Must be in valid international format',
                }),
            })
            .openapi({ required: ['number', 'audio-url'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PhonePlaybackResponseSchema } },
      headers: z.object({}),
    },
    400: {
      description: 'Your API request has been rejected. Check error code for details',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    403: {
      description: 'You have failed to authenticate',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    500: {
      description: 'We messed up, sorry! Your request has caused a fatal exception',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    default: {
      description: 'We messed up, sorry! Your request has caused an error',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
  },
})

export const getPhoneValidateRoute = createRoute({
  method: 'get',
  path: '/phone-validate',
  tags: ['Data Tools'],
  summary: 'Phone Validate',
  description: 'Parse, validate and get location information about a phone number',
  operationId: 'PhoneValidate',
  request: {
    query: z.object({
      number: z
        .string()
        .openapi({
          param: {
            description:
              "A phone number. This can be in international format (E.164) or local format. If passing local format you must also set either the 'country-code' OR 'ip' options as well",
            in: 'query',
            name: 'number',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'country-code': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'ISO 2-letter country code, assume numbers are based in this country. If not set numbers are assumed to be in international format (with or without the leading + sign)',
            in: 'query',
            name: 'country-code',
            required: false,
            schema: { type: 'string' },
          },
        }),
      ip: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Pass in a users IP address and we will assume numbers are based in the country of the IP address',
            in: 'query',
            name: 'ip',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PhoneValidateResponseSchema } },
      headers: z.object({}),
    },
    400: {
      description: 'Your API request has been rejected. Check error code for details',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    403: {
      description: 'You have failed to authenticate',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    500: {
      description: 'We messed up, sorry! Your request has caused a fatal exception',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    default: {
      description: 'We messed up, sorry! Your request has caused an error',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
  },
})

export const postPhoneVerifyRoute = createRoute({
  method: 'post',
  path: '/phone-verify',
  tags: ['Telephony'],
  summary: 'Phone Verify',
  description:
    'Make an automated call to any valid phone number and playback a unique security code',
  operationId: 'PhoneVerify',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              'code-length': z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .default(6)
                .exactOptional()
                .openapi({
                  description:
                    'The number of digits to use in the security code (between 4 and 12)',
                }),
              'country-code': z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'ISO 2-letter country code, assume numbers are based in this country. <br>If not set numbers are assumed to be in international format (with or without the leading + sign)',
                }),
              'language-code': z
                .string()
                .default('en')
                .exactOptional()
                .openapi({
                  description:
                    'The language to playback the verification code in, available languages are: <ul> <li>de - German</li> <li>en - English</li> <li>es - Spanish</li> <li>fr - French</li> <li>it - Italian</li> <li>pt - Portuguese</li> <li>ru - Russian</li> </ul>',
                }),
              limit: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .default(3)
                .exactOptional()
                .openapi({
                  description:
                    'Limit the total number of calls allowed to the supplied phone number, if the limit is reached within the TTL then error code 14 will be returned',
                }),
              'limit-ttl': z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .default(1)
                .exactOptional()
                .openapi({
                  description:
                    "Set the TTL in number of days that the 'limit' option will remember a phone number (the default is 1 day and the maximum is 365 days)",
                }),
              number: z
                .string()
                .openapi({ description: 'The phone number to send the verification code to' }),
              'playback-delay': z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .default(800)
                .exactOptional()
                .openapi({
                  description:
                    'The delay in milliseconds between the playback of each security code',
                }),
              'security-code': z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Pass in your own security code. This is useful if you have implemented TOTP or similar 2FA methods. If not set then we will generate a secure random code',
                }),
            })
            .openapi({ required: ['number'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PhoneVerifyResponseSchema } },
      headers: z.object({}),
    },
    400: {
      description: 'Your API request has been rejected. Check error code for details',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    403: {
      description: 'You have failed to authenticate',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    500: {
      description: 'We messed up, sorry! Your request has caused a fatal exception',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    default: {
      description: 'We messed up, sorry! Your request has caused an error',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
  },
})

export const postQrCodeRoute = createRoute({
  method: 'post',
  path: '/qr-code',
  tags: ['Imaging'],
  summary: 'QR Code',
  description: 'Generate a QR code as a PNG image',
  operationId: 'QRCode',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              'bg-color': z
                .string()
                .default('#ffffff')
                .exactOptional()
                .openapi({ description: 'The QR code background color' }),
              content: z
                .string()
                .openapi({
                  description:
                    'The content to encode into the QR code (e.g. a URL or a phone number)',
                }),
              'fg-color': z
                .string()
                .default('#000000')
                .exactOptional()
                .openapi({ description: 'The QR code foreground color' }),
              height: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .default(256)
                .exactOptional()
                .openapi({ description: 'The height of the QR code (in px)' }),
              width: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .default(256)
                .exactOptional()
                .openapi({ description: 'The width of the QR code (in px)' }),
            })
            .openapi({ required: ['content'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.file().default('').openapi({ type: 'string', format: 'binary' }),
        },
      },
      headers: z.object({}),
    },
    400: {
      description: 'Your API request has been rejected. Check error code for details',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    403: {
      description: 'You have failed to authenticate',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    500: {
      description: 'We messed up, sorry! Your request has caused a fatal exception',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    default: {
      description: 'We messed up, sorry! Your request has caused an error',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
  },
})

export const postSmsVerifyRoute = createRoute({
  method: 'post',
  path: '/sms-verify',
  tags: ['Telephony'],
  summary: 'SMS Verify',
  description: 'Send a unique security code to any mobile device via SMS',
  operationId: 'SMSVerify',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              'code-length': z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .default(5)
                .exactOptional()
                .openapi({
                  description:
                    'The number of digits to use in the security code (must be between 4 and 12)',
                }),
              'country-code': z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'ISO 2-letter country code, assume numbers are based in this country. <br>If not set numbers are assumed to be in international format (with or without the leading + sign)',
                }),
              'language-code': z
                .string()
                .default('en')
                .exactOptional()
                .openapi({
                  description:
                    'The language to send the verification code in, available languages are: <ul> <li>de - German</li> <li>en - English</li> <li>es - Spanish</li> <li>fr - French</li> <li>it - Italian</li> <li>pt - Portuguese</li> <li>ru - Russian</li> </ul>',
                }),
              limit: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .default(10)
                .exactOptional()
                .openapi({
                  description:
                    'Limit the total number of SMS allowed to the supplied phone number, if the limit is reached within the TTL then error code 14 will be returned',
                }),
              'limit-ttl': z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .default(1)
                .exactOptional()
                .openapi({
                  description:
                    "Set the TTL in number of days that the 'limit' option will remember a phone number (the default is 1 day and the maximum is 365 days)",
                }),
              number: z
                .string()
                .openapi({ description: 'The phone number to send a verification code to' }),
              'security-code': z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Pass in your own security code. This is useful if you have implemented TOTP or similar 2FA methods. If not set then we will generate a secure random code',
                }),
            })
            .openapi({ required: ['number'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: SMSVerifyResponseSchema } },
      headers: z.object({}),
    },
    400: {
      description: 'Your API request has been rejected. Check error code for details',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    403: {
      description: 'You have failed to authenticate',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    500: {
      description: 'We messed up, sorry! Your request has caused a fatal exception',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    default: {
      description: 'We messed up, sorry! Your request has caused an error',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
  },
})

export const getUaLookupRoute = createRoute({
  method: 'get',
  path: '/ua-lookup',
  tags: ['Data Tools'],
  summary: 'UA Lookup',
  description:
    'Parse, validate and get detailed user-agent information from a user agent string or from client hints',
  operationId: 'UALookup',
  request: {
    query: z.object({
      ua: z
        .string()
        .openapi({
          param: {
            description:
              "The user-agent string to lookup. For client hints use the 'UA' header or the JSON data directly from 'navigator.userAgentData.brands' or 'navigator.userAgentData.getHighEntropyValues()'",
            in: 'query',
            name: 'ua',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'ua-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "For client hints this corresponds to the 'UA-Full-Version' header or 'uaFullVersion' from NavigatorUAData",
            in: 'query',
            name: 'ua-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'ua-platform': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "For client hints this corresponds to the 'UA-Platform' header or 'platform' from NavigatorUAData",
            in: 'query',
            name: 'ua-platform',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'ua-platform-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "For client hints this corresponds to the 'UA-Platform-Version' header or 'platformVersion' from NavigatorUAData",
            in: 'query',
            name: 'ua-platform-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'ua-mobile': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "For client hints this corresponds to the 'UA-Mobile' header or 'mobile' from NavigatorUAData",
            in: 'query',
            name: 'ua-mobile',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'device-model': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "For client hints this corresponds to the 'UA-Model' header or 'model' from NavigatorUAData. <br>You can also use this parameter to lookup a device directly by its model name, model code or hardware code, on android you can get the model name from: https://developer.android.com/reference/android/os/Build.html#MODEL",
            in: 'query',
            name: 'device-model',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'device-brand': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "This parameter is only used in combination with 'device-model' when doing direct device lookups without any user-agent data. Set this to the brand or manufacturer name, this is required for accurate device detection with ambiguous model names. On android you can get the device brand from: https://developer.android.com/reference/android/os/Build#MANUFACTURER",
            in: 'query',
            name: 'device-brand',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: UALookupResponseSchema } },
      headers: z.object({}),
    },
    400: {
      description: 'Your API request has been rejected. Check error code for details',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    403: {
      description: 'You have failed to authenticate',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    500: {
      description: 'We messed up, sorry! Your request has caused a fatal exception',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    default: {
      description: 'We messed up, sorry! Your request has caused an error',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
  },
})

export const getUrlInfoRoute = createRoute({
  method: 'get',
  path: '/url-info',
  tags: ['WWW'],
  summary: 'URL Info',
  description: 'Parse, analyze and retrieve content from the supplied URL',
  operationId: 'URLInfo',
  request: {
    query: z.object({
      url: z
        .string()
        .openapi({
          param: {
            description: 'The URL to probe',
            in: 'query',
            name: 'url',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'fetch-content': z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If this URL responds with html, text, json or xml then return the response. This option is useful if you want to perform further processing on the URL content (e.g. with the HTML Extract or HTML Clean APIs)',
            in: 'query',
            name: 'fetch-content',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      'ignore-certificate-errors': z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Ignore any TLS/SSL certificate errors and load the URL anyway',
            in: 'query',
            name: 'ignore-certificate-errors',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      timeout: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(60)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Timeout in seconds. Give up if still trying to load the URL after this number of seconds',
            in: 'query',
            name: 'timeout',
            required: false,
            schema: { default: 60, format: 'int32', type: 'integer' },
          },
        }),
      retry: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'If the request fails for any reason try again this many times',
            in: 'query',
            name: 'retry',
            required: false,
            schema: { default: 0, format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: URLInfoResponseSchema } },
      headers: z.object({}),
    },
    400: {
      description: 'Your API request has been rejected. Check error code for details',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    403: {
      description: 'You have failed to authenticate',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    500: {
      description: 'We messed up, sorry! Your request has caused a fatal exception',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    default: {
      description: 'We messed up, sorry! Your request has caused an error',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
  },
})

export const getVerifySecurityCodeRoute = createRoute({
  method: 'get',
  path: '/verify-security-code',
  tags: ['Telephony'],
  summary: 'Verify Security Code',
  description: 'Check if a security code sent via SMS Verify or Phone Verify is valid',
  operationId: 'VerifySecurityCode',
  request: {
    query: z.object({
      'security-code': z
        .string()
        .openapi({
          param: {
            description: 'The security code to verify',
            in: 'query',
            name: 'security-code',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'limit-by': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If set then enable additional brute-force protection by limiting the number of attempts by the supplied value. This can be set to any unique identifier you would like to limit by, for example a hash of the users email, phone number or IP address. Requests to this API will be ignored after approximately 10 failed verification attempts',
            in: 'query',
            name: 'limit-by',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: VerifySecurityCodeResponseSchema } },
      headers: z.object({}),
    },
    400: {
      description: 'Your API request has been rejected. Check error code for details',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    403: {
      description: 'You have failed to authenticate',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    500: {
      description: 'We messed up, sorry! Your request has caused a fatal exception',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    default: {
      description: 'We messed up, sorry! Your request has caused an error',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
  },
})
