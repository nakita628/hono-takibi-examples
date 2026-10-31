import { createRoute, z } from '@hono/zod-openapi'

const APIBillingPeriodUsageOutSchema = z
  .object({
    apiKey: z.string().exactOptional().openapi({ description: 'User API Key.' }),
    billingStatus: z
      .string()
      .exactOptional()
      .openapi({ description: 'Current period billing status ex OPEN.' }),
    hardLimit: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Current period hard limit (reaching the limit sends an email notification and blocks the API Key).',
      }),
    periodEnded: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: "Datetime when the the plan's current period endend.",
      }),
    periodStarted: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: "Datetime when the the plan's current period started.",
      }),
    softLimit: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Current period soft limit (reaching the limit sends an email notification).',
      }),
    stripeCurrentPeriodEnd: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          "Datetime when the the plan's current period endend (in Stripe). Internal and Stripe periodicity should ~coincide.",
      }),
    stripeCurrentPeriodStart: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          "Datetime when the the plan's current period started (in Stripe). Internal and Stripe periodicity should ~coincide.",
      }),
    subscriptionStarted: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Datetime when the user subscribed to the plan.',
      }),
    usage: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Current period usage in units (NB some API endpoints use more than one unit).',
      }),
  })
  .openapi({
    description: 'The current billing period.',
    xml: { name: 'APIBillingPeriodUsageOut' },
    required: [],
  })
  .openapi('APIBillingPeriodUsageOut')

const APIClassifierOutSchema = z
  .object({
    classifierName: z.string().exactOptional().openapi({ description: 'The classifier name' }),
    learning: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if the classifier is learning' }),
    probabilityCalibrated: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True if the classifier has finished the initial learning and calibrated probabilities (meanwhile, during initial learning, probabilities will be equal to -1)',
      }),
    serving: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True if the classifier is serving requests (has reached minimal learning, is not shutting down)',
      }),
    shuttingDown: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if the classifier is shutting down' }),
  })
  .openapi({
    description: 'The list of classifiers and versions.',
    xml: { name: 'APIClassifierOut' },
    required: [],
  })
  .openapi('APIClassifierOut')

const APIClassifierTaxonomyOutSchema = z
  .object({
    classifierName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the classifier as per apiStatus (corresponds also to the name of the service in apiServices)',
      }),
    classifyingScripts: z
      .array(
        z
          .string()
          .openapi({ description: 'The scripts / alphabets this classifiers classifies to' }),
      )
      .exactOptional()
      .openapi({ description: 'The scripts / alphabets this classifiers classifies to' }),
    taxonomyClasses: z
      .array(
        z.string().openapi({ description: 'The taxonomy classes this classifier classifies to' }),
      )
      .exactOptional()
      .openapi({ description: 'The taxonomy classes this classifier classifies to' }),
  })
  .openapi({ xml: { name: 'APIClassifierTaxonomyOut' }, required: [] })
  .openapi('APIClassifierTaxonomyOut')

const SoftwareVersionOutSchema = z
  .object({
    softwareNameAndVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'The software version' }),
    softwareVersion: z
      .array(z.int32().openapi({ description: 'The software version major minor build' }))
      .exactOptional()
      .openapi({ description: 'The software version major minor build' }),
  })
  .openapi({
    description: 'The software version.',
    xml: { name: 'SoftwareVersionOut' },
    required: [],
  })
  .openapi('SoftwareVersionOut')

const APIClassifiersStatusOutSchema = z
  .object({
    classifiers: z
      .array(APIClassifierOutSchema)
      .exactOptional()
      .openapi({ description: 'The list of classifiers and versions.' }),
    softwareVersion: SoftwareVersionOutSchema.exactOptional(),
  })
  .openapi({ xml: { name: 'APIClassifiersStatusOut' }, required: [] })
  .openapi('APIClassifiersStatusOut')

const APIKeyOutSchema = z
  .object({
    admin: z.boolean().exactOptional().openapi({ description: 'The API Key has admin role.' }),
    anonymized: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "The API Key is anonymized (using SHA-252 digest for logging). Set learnable=false and anonymized=true for highest privacy (ie. to forget data as it's processed).",
      }),
    apiKey: z
      .string()
      .exactOptional()
      .openapi({ description: 'The user API Key.', xml: { name: 'api_key' } }),
    corporate: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'The API Key has role corporate (ex SWIFT payments instead of Stripe payments).',
      }),
    disabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The API Key is temporarily or permanently disabled.' }),
    learnable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "The API Key is learnable (without assuming truthfulness) for machine learning. Set learnable=false and anonymized=true for highest privacy (ie. to forget data as it's processed).",
      }),
    partner: z.boolean().exactOptional().openapi({ description: 'The API Key has partner role.' }),
    striped: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The API Key is associated to a valid Stripe account.' }),
    userId: z.string().exactOptional().openapi({ description: 'The user identifier.' }),
    vetted: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The API Key is vetted (assumed truthful) for machine learning.' }),
  })
  .openapi({ xml: { name: 'APIKeyOut' }, required: [] })
  .openapi('APIKeyOut')

const APICounterV2OutSchema = z
  .object({
    apiKey: APIKeyOutSchema.exactOptional(),
    apiService: z
      .string()
      .exactOptional()
      .openapi({ description: 'The apiService corresponds to the classifier name.' }),
    createdDateTime: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The create datetime of the counter.',
      }),
    hostAddress: z.string().exactOptional().openapi({ description: 'The processing hostAddress.' }),
    lastFlushedDateTime: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The flush datetime of the counter.',
      }),
    lastUsedDateTime: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The last usage datetime of the counter.',
      }),
    serviceFeaturesUsage: z
      .record(
        z.string(),
        z
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
            description: 'Usage of special features, such as Chinese, Japanese.',
          }),
      )
      .exactOptional()
      .openapi({ description: 'Usage of special features, such as Chinese, Japanese.' }),
    totalUsage: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: 'The usage of the counter.' }),
  })
  .openapi({
    description: 'Detailed usage as reported by the deduplicating API counter.',
    xml: { name: 'APICallStatOut' },
    required: [],
  })
  .openapi('APICounterV2Out')

const APIPlanSubscriptionOutSchema = z
  .object({
    apiKey: z.string().exactOptional().openapi({ description: 'User API Key.' }),
    currency: z
      .string()
      .exactOptional()
      .openapi({ description: 'Current plan Currency for prices.' }),
    currencyFactor: z
      .float64()
      .exactOptional()
      .openapi({ description: 'For USD, GBP, EUR - the factor is 1.' }),
    planBaseFeesKey: z
      .string()
      .exactOptional()
      .openapi({ description: 'Current plan key (as in Stripe product).' }),
    planEnded: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Datetime when the user ended the plan.',
      }),
    planName: z.string().exactOptional().openapi({ description: 'Current plan name.' }),
    planQuota: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Current plan quota in quantity of units (NB: some API use several units per name).',
      }),
    planStarted: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Datetime when the user subscribed to the current plan.',
      }),
    planStatus: z.string().exactOptional().openapi({ description: 'Plan status.' }),
    price: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Current plan price for overages expressed in Currency (extra price per unit above the free quota).',
      }),
    priceOverage: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Current plan price for overages expressed in Currency (extra price per unit above the free quota).',
      }),
    priceOverageUSD: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Current plan price for overages expressed in USD (extra price per unit above the free quota).',
      }),
    priceUSD: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Current plan monthly price expressed in USD (includes a free quota).',
      }),
    priorPlanStarted: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Datetime when the user subscribed to the prior plan.',
      }),
    stripeCustomerId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Stripe customer identifier.' }),
    stripeStatus: z.string().exactOptional().openapi({ description: 'Stripe status ex active.' }),
    stripeSubscription: z
      .string()
      .exactOptional()
      .openapi({ description: 'Stripe subscription identifier.' }),
    taxRate: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Applicable tax rate for the plan.' }),
    userId: z.string().exactOptional().openapi({ description: 'Internal user identifier.' }),
  })
  .openapi({
    description: 'The API Plan governing the subscription.',
    xml: { name: 'APIPlanSubscriptionOut' },
    required: [],
  })
  .openapi('APIPlanSubscriptionOut')

const APIPeriodUsageOutSchema = z
  .object({
    billingPeriod: APIBillingPeriodUsageOutSchema.exactOptional(),
    overageCurrency: z
      .string()
      .exactOptional()
      .openapi({ description: 'Currency of the overage amount.' }),
    overageExclTax: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Overage amount including any tax.' }),
    overageInclTax: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Overage amount including tax (if applicable).' }),
    overageQuantity: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Quantity above monthly quota of the current subscritpion, in units.',
      }),
    subscription: APIPlanSubscriptionOutSchema.exactOptional(),
  })
  .openapi({ xml: { name: 'APICurrentUsageOut' }, required: [] })
  .openapi('APIPeriodUsageOut')

const APIServiceOutSchema = z
  .object({
    costInUnits: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Indicates how many units per call this service costs (ex. the number of units per name)',
      }),
    serviceGroup: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Groups together classifiers providing a similar service (ex. gender groups personalname_gender and personalfullname_gender)',
      }),
    serviceName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A service name corresponds to classifier name in apiStatus (ex. personalname_gender or personalfullname_gender)',
      }),
  })
  .openapi({ description: 'List of API Services', xml: { name: 'APIServiceOut' }, required: [] })
  .openapi('APIServiceOut')

const APIServicesOutSchema = z
  .object({
    apiServices: z
      .array(APIServiceOutSchema)
      .exactOptional()
      .openapi({ description: 'List of API Services' }),
  })
  .openapi({ xml: { name: 'APIServicesOut' }, required: [] })
  .openapi('APIServicesOut')

const APIUsageAggregatedOutSchema = z
  .object({
    colHeaders: z
      .array(z.string().openapi({ description: 'apiServices as column headers ' }))
      .exactOptional()
      .openapi({ description: 'apiServices as column headers ' }),
    data: z
      .array(
        z
          .array(
            z
              .int32()
              .openapi({
                description: 'Data points : usage per DAY, WEEK or MONTH and per apiService',
              }),
          )
          .openapi({
            description: 'Data points : usage per DAY, WEEK or MONTH and per apiService',
          }),
      )
      .exactOptional()
      .openapi({ description: 'Data points : usage per DAY, WEEK or MONTH and per apiService' }),
    historyTruncated: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If the history was truncaded due to data limit' }),
    periodEnd: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'End datetime of the reporting period',
      }),
    periodStart: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Start datetime of the reporting period',
      }),
    rowHeaders: z
      .array(z.string().openapi({ description: 'dates as row headers ' }))
      .exactOptional()
      .openapi({ description: 'dates as row headers ' }),
    timeUnit: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time unit is DAY, WEEK or MONTH depending on prior usage' }),
    totalUsage: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Total usage in the current period',
      }),
  })
  .openapi({ xml: { name: 'APIUsageAggregatedOut' }, required: [] })
  .openapi('APIUsageAggregatedOut')

const APIUsageHistoryOutSchema = z
  .object({
    detailedUsage: z
      .array(APICounterV2OutSchema)
      .exactOptional()
      .openapi({ description: 'Detailed usage as reported by the deduplicating API counter.' }),
  })
  .openapi({ xml: { name: 'APIUsageHistoryOut' }, required: [] })
  .openapi('APIUsageHistoryOut')

const FirstLastNameGeoInSchema = z
  .object({
    countryIso2: z
      .string()
      .exactOptional()
      .openapi({ xml: { attribute: true } }),
    firstName: z
      .string()
      .exactOptional()
      .openapi({ xml: { attribute: true } }),
    id: z
      .string()
      .exactOptional()
      .openapi({ xml: { attribute: true } }),
    lastName: z
      .string()
      .exactOptional()
      .openapi({ xml: { attribute: true } }),
  })
  .openapi({ xml: { name: 'FirstLastNameGeoIn' }, required: [] })
  .openapi('FirstLastNameGeoIn')

const CorridorInSchema = z
  .object({
    firstLastNameGeoFrom: FirstLastNameGeoInSchema.exactOptional(),
    firstLastNameGeoTo: FirstLastNameGeoInSchema.exactOptional(),
    id: z
      .string()
      .exactOptional()
      .openapi({ xml: { attribute: true } }),
  })
  .openapi({
    description:
      'Represent any transnational interaction between names (ex. remittance, communication, cross-border investment, airline travel',
    xml: { name: 'CorridorIn' },
    required: [],
  })
  .openapi('CorridorIn')

const FactInSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ xml: { attribute: true } }),
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FactIn')

const BatchCorridorInSchema = z
  .object({
    corridorFromTo: z.array(CorridorInSchema).exactOptional(),
    facts: z.array(FactInSchema).exactOptional(),
  })
  .openapi({ xml: { name: 'BatchCorridorIn' }, required: [] })
  .openapi('BatchCorridorIn')

const FirstLastNameDiasporaedOutSchema = z
  .object({
    countryIso2: z
      .string()
      .exactOptional()
      .openapi({
        description: 'From input data, the countryIso2 of geographic context (US,CA etc.)',
        xml: { attribute: true },
      }),
    ethnicitiesTop: z
      .array(z.string().openapi({ description: 'List most likely ethnicities (top 10)' }))
      .exactOptional()
      .openapi({ description: 'List most likely ethnicities (top 10)' }),
    ethnicity: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The most likely ethnicity',
        example: 'Chinese',
        xml: { attribute: true },
      }),
    ethnicityAlt: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The second best alternative ethnicity',
        example: 'Japanese',
        xml: { attribute: true },
      }),
    firstName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The first name (also known as given name)' }),
    id: z.string().exactOptional(),
    lastName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last name (also known as family name, or surname)' }),
    lifted: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the output ethnicity is based on machine learning only, or further lifted as a known fact by a country-specific rule. Let us know if you believe ethnicity is incorrect on a specific case where lifted is true.',
        xml: { attribute: true },
      }),
    probabilityAltCalibrated: z
      .float64()
      .min(-1)
      .max(1)
      .exactOptional()
      .openapi({
        description:
          'The calibrated probability for ethnicity OR ethnicityAlt to have been guessed correctly. -1 = still calibrating. ',
      }),
    probabilityCalibrated: z
      .float64()
      .min(-1)
      .max(1)
      .exactOptional()
      .openapi({
        description:
          'The calibrated probability for ethnicity to have been guessed correctly. -1 = still calibrating. ',
      }),
    score: z
      .float64()
      .min(0)
      .max(100)
      .exactOptional()
      .openapi({
        description:
          'Compatibility to NamSor_v1 Diaspora score value. Higher score is better, but score is not normalized. Use calibratedProbability if available. ',
      }),
    script: z.string().exactOptional(),
  })
  .openapi({
    description:
      'Represents the output of inferring the LIKELY ethnicity from a personal name, given an country of residence.',
    xml: { name: 'FirstLastNameDiasporaedOut' },
    required: [],
  })
  .openapi('FirstLastNameDiasporaedOut')

const FirstLastNameGenderedOutSchema = z
  .object({
    firstName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The first name (also known as given name)' }),
    genderScale: z
      .float64()
      .min(-1)
      .max(1)
      .exactOptional()
      .openapi({ description: 'Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value.' }),
    id: z.string().exactOptional(),
    lastName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last name (also known as family name, or surname)' }),
    likelyGender: z
      .enum(['male', 'female', 'unknown'])
      .exactOptional()
      .openapi({ description: 'Most likely gender' }),
    probabilityCalibrated: z
      .float64()
      .min(-1)
      .max(1)
      .exactOptional()
      .openapi({
        description:
          'The calibrated probability for inferred gender to have been guessed correctly. -1 = still calibrating. ',
      }),
    score: z
      .float64()
      .min(0)
      .max(100)
      .exactOptional()
      .openapi({
        description:
          'Compatibility to NamSor_v1 Gender score value. Higher score is better, but score is not normalized. Use calibratedProbability if available. ',
      }),
    script: z.string().exactOptional(),
  })
  .openapi({
    description: 'Represents the output of inferring the LIKELY gender from a personal name.',
    xml: { name: 'FirstLastNameGenderedOut' },
    required: [],
  })
  .openapi('FirstLastNameGenderedOut')

const FirstLastNameOriginedOutSchema = z
  .object({
    countriesOriginTop: z
      .array(z.string().openapi({ description: 'List countries of Origin (top 10)' }))
      .exactOptional()
      .openapi({ description: 'List countries of Origin (top 10)' }),
    countryOrigin: z
      .string()
      .exactOptional()
      .openapi({ description: 'Most likely country of Origin' }),
    countryOriginAlt: z
      .string()
      .exactOptional()
      .openapi({ description: 'Second best alternative : country of Origin' }),
    firstName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The first name (also known as given name)' }),
    id: z.string().exactOptional(),
    lastName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last name (also known as family name, or surname)' }),
    probabilityAltCalibrated: z
      .float64()
      .min(-1)
      .max(1)
      .exactOptional()
      .openapi({
        description:
          'The calibrated probability for countryOrigin OR countryOriginAlt to have been guessed correctly. -1 = still calibrating. ',
      }),
    probabilityCalibrated: z
      .float64()
      .min(-1)
      .max(1)
      .exactOptional()
      .openapi({
        description:
          'The calibrated probability for countryOrigin to have been guessed correctly. -1 = still calibrating. ',
      }),
    regionOrigin: z
      .string()
      .exactOptional()
      .openapi({ description: 'Most likely region of Origin (based on countryOrigin ISO2 code)' }),
    score: z
      .float64()
      .min(0)
      .max(100)
      .exactOptional()
      .openapi({
        description:
          'Compatibility to NamSor_v1 Origin score value. Higher score is better, but score is not normalized. Use calibratedProbability if available. ',
      }),
    script: z.string().exactOptional(),
    subRegionOrigin: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Most likely sub region of Origin (based on countryOrigin ISO2 code)',
      }),
    topRegionOrigin: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Most likely top region of Origin (based on countryOrigin ISO2 code)',
      }),
  })
  .openapi({
    description:
      'Represents the output of inferring the LIKELY country of Origin from a personal name.',
    xml: { name: 'FirstLastNameOriginedOut' },
    required: [],
  })
  .openapi('FirstLastNameOriginedOut')

const CorridorOutSchema = z
  .object({
    FirstLastNameDiasporaedOut: FirstLastNameDiasporaedOutSchema.exactOptional(),
    FirstLastNameGenderedOut: FirstLastNameGenderedOutSchema.exactOptional(),
    FirstLastNameOriginedOut: FirstLastNameOriginedOutSchema.exactOptional(),
    id: z
      .string()
      .exactOptional()
      .openapi({ xml: { attribute: true } }),
    script: z.string().exactOptional(),
  })
  .openapi({
    description:
      'Represent multiple classifications for corridor sender and receiver (gender, country, origin, diaspora)',
    xml: { name: 'CorridorOut' },
    required: [],
  })
  .openapi('CorridorOut')

const BatchCorridorOutSchema = z
  .object({
    corridorFromTo: z
      .array(CorridorOutSchema)
      .exactOptional()
      .openapi({ description: 'Classified corridors' }),
  })
  .openapi({ xml: { name: 'BatchCorridorOut' }, required: [] })
  .openapi('BatchCorridorOut')

const BatchFirstLastNameDiasporaedOutSchema = z
  .object({
    personalNames: z
      .array(FirstLastNameDiasporaedOutSchema)
      .exactOptional()
      .openapi({ description: 'Classified diaspora names' }),
  })
  .openapi({
    description:
      'Represents the output of inferring the LIKELY ethnicity from a personal name, given an country of residence.',
    xml: { name: 'BatchFirstLastNameDiasporaedOut' },
    required: [],
  })
  .openapi('BatchFirstLastNameDiasporaedOut')

const FirstLastNameGenderInSchema = z
  .object({
    firstName: z
      .string()
      .exactOptional()
      .openapi({ xml: { attribute: true } }),
    gender: z
      .string()
      .exactOptional()
      .openapi({ description: 'The known gender of the name', xml: { attribute: true } }),
    id: z
      .string()
      .exactOptional()
      .openapi({ xml: { attribute: true } }),
    lastName: z
      .string()
      .exactOptional()
      .openapi({ xml: { attribute: true } }),
  })
  .openapi({ xml: { name: 'FirstLastName' }, required: [] })
  .openapi('FirstLastNameGenderIn')

const BatchFirstLastNameGenderInSchema = z
  .object({
    facts: z.array(FactInSchema).exactOptional(),
    personalNames: z.array(FirstLastNameGenderInSchema).exactOptional(),
  })
  .openapi({ xml: { name: 'BatchFirstLastNameGenderIn' }, required: [] })
  .openapi('BatchFirstLastNameGenderIn')

const BatchFirstLastNameGenderedOutSchema = z
  .object({
    personalNames: z
      .array(FirstLastNameGenderedOutSchema)
      .exactOptional()
      .openapi({ description: 'Classified genderized names' }),
  })
  .openapi({
    description:
      'Represents the output of inferring the LIKELY gender from a list of personal names.',
    xml: { name: 'BatchFirstLastNameGenderedOut' },
    required: [],
  })
  .openapi('BatchFirstLastNameGenderedOut')

const BatchFirstLastNameGeoInSchema = z
  .object({
    facts: z.array(FactInSchema).exactOptional(),
    personalNames: z.array(FirstLastNameGeoInSchema).exactOptional(),
  })
  .openapi({ xml: { name: 'BatchFirstLastNameGeoIn' }, required: [] })
  .openapi('BatchFirstLastNameGeoIn')

const FirstLastNameGeoSubclassificationOutSchema = z
  .object({
    countryIso2: z
      .string()
      .exactOptional()
      .openapi({ description: 'The input country ISO2 code', xml: { attribute: true } }),
    firstName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The first name (also known as given name)' }),
    id: z.string().exactOptional(),
    lastName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last name (also known as family name, or surname)' }),
    probabilityAltCalibrated: z
      .float64()
      .min(-1)
      .max(1)
      .exactOptional()
      .openapi({
        description:
          'The calibrated probability for subclassification OR subclassificationAlt to have been guessed correctly. -1 = still calibrating. ',
      }),
    probabilityCalibrated: z
      .float64()
      .min(-1)
      .max(1)
      .exactOptional()
      .openapi({
        description:
          'The calibrated probability for subclassification to have been guessed correctly. -1 = still calibrating. ',
      }),
    score: z
      .float64()
      .min(0)
      .max(100)
      .exactOptional()
      .openapi({
        description:
          'Compatibility to NamSor_v1 Origin score value. Higher score is better, but score is not normalized. Use calibratedProbability if available. ',
      }),
    script: z.string().exactOptional(),
    subClassification: z
      .string()
      .exactOptional()
      .openapi({ description: 'Most likely subclassification ISO_3166-2 code' }),
    subClassificationAlt: z
      .string()
      .exactOptional()
      .openapi({ description: 'Second best alternative : subclassification ISO_3166-2 code' }),
    subclassificationTop: z
      .array(
        z.string().openapi({ description: 'List subclassification ISO_3166-2 codes (top 10)' }),
      )
      .exactOptional()
      .openapi({ description: 'List subclassification ISO_3166-2 codes (top 10)' }),
  })
  .openapi({
    description:
      'Represents the geographic name origin at a country subclassification level (usually regional or state level).',
    xml: { name: 'FirstLastNameGeoSubclassificationOut' },
    required: [],
  })
  .openapi('FirstLastNameGeoSubclassificationOut')

const BatchFirstLastNameGeoSubclassificationOutSchema = z
  .object({
    personalNames: z
      .array(FirstLastNameGeoSubclassificationOutSchema)
      .exactOptional()
      .openapi({ description: 'Classified names at sub country level (region or state)' }),
  })
  .openapi({
    description:
      'Represents the output of inferring the LIKELY country subclassification (regional names).',
    xml: { name: 'BatchFirstLastNameGeoSubclassificationOut' },
    required: [],
  })
  .openapi('BatchFirstLastNameGeoSubclassificationOut')

const FirstLastNameGeoZippedInSchema = z
  .object({
    countryIso2: z
      .string()
      .exactOptional()
      .openapi({ xml: { attribute: true } }),
    firstName: z
      .string()
      .exactOptional()
      .openapi({ xml: { attribute: true } }),
    id: z
      .string()
      .exactOptional()
      .openapi({ xml: { attribute: true } }),
    lastName: z
      .string()
      .exactOptional()
      .openapi({ xml: { attribute: true } }),
    zipCode: z
      .string()
      .exactOptional()
      .openapi({ xml: { attribute: true } }),
  })
  .openapi({ xml: { name: 'FirstLastNameGeoZippedIn' }, required: [] })
  .openapi('FirstLastNameGeoZippedIn')

const BatchFirstLastNameGeoZippedInSchema = z
  .object({
    facts: z.array(FactInSchema).exactOptional(),
    personalNames: z.array(FirstLastNameGeoZippedInSchema).exactOptional(),
  })
  .openapi({ xml: { name: 'BatchFirstLastNameGeoZippedIn' }, required: [] })
  .openapi('BatchFirstLastNameGeoZippedIn')

const FirstLastNameInSchema = z
  .object({
    firstName: z
      .string()
      .exactOptional()
      .openapi({ xml: { attribute: true } }),
    id: z
      .string()
      .exactOptional()
      .openapi({ xml: { attribute: true } }),
    lastName: z
      .string()
      .exactOptional()
      .openapi({ xml: { attribute: true } }),
  })
  .openapi({ xml: { name: 'FirstLastName' }, required: [] })
  .openapi('FirstLastNameIn')

const BatchFirstLastNameInSchema = z
  .object({
    facts: z.array(FactInSchema).exactOptional(),
    personalNames: z.array(FirstLastNameInSchema).exactOptional(),
  })
  .openapi({ xml: { name: 'BatchFirstLastNameIn' }, required: [] })
  .openapi('BatchFirstLastNameIn')

const BatchFirstLastNameOriginedOutSchema = z
  .object({
    personalNames: z
      .array(FirstLastNameOriginedOutSchema)
      .exactOptional()
      .openapi({ description: 'Classified origined names' }),
  })
  .openapi({
    description:
      'Represents the output of inferring the LIKELY origin from a list of personal names.',
    xml: { name: 'BatchFirstLastNameOriginedOut' },
    required: [],
  })
  .openapi('BatchFirstLastNameOriginedOut')

const FirstLastNamePhoneCodedOutSchema = z
  .object({
    countryIso2: z.string().exactOptional(),
    firstName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The first name (also known as given name)' }),
    id: z.string().exactOptional(),
    internationalPhoneNumberVerified: z
      .string()
      .exactOptional()
      .openapi({ description: 'The normalized phone number, verified using libphonenumber.' }),
    lastName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last name (also known as family name, or surname)' }),
    originCountryIso2: z
      .string()
      .exactOptional()
      .openapi({ description: 'The likely country of origin of the name.' }),
    originCountryIso2Alt: z
      .string()
      .exactOptional()
      .openapi({ description: 'The best alternative country of origin of the name.' }),
    phoneCountryCode: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The phone country code of the phone number, verified using libphonenumber.',
      }),
    phoneCountryCodeAlt: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The best alternative phone country code of the phone number.' }),
    phoneCountryIso2: z
      .string()
      .exactOptional()
      .openapi({ description: 'The likely country of the phone number.' }),
    phoneCountryIso2Alt: z
      .string()
      .exactOptional()
      .openapi({ description: 'The best alternative country of the phone number.' }),
    phoneCountryIso2Verified: z
      .string()
      .exactOptional()
      .openapi({ description: 'The phone ISO2 country code, verified using libphonenumber.' }),
    phoneNumber: z.string().exactOptional().openapi({ description: 'The input phone number.' }),
    score: z
      .float64()
      .min(0)
      .max(100)
      .exactOptional()
      .openapi({
        description:
          'Higher score is better, but score is not normalized. Use calibratedProbability if available. ',
      }),
    script: z.string().exactOptional(),
    verified: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the phone number could be positively verified using libphonenumber.',
      }),
  })
  .openapi({
    description:
      'Represents the output of inferring the LIKELY country and phone code from a personal name and phone number.',
    xml: { name: 'FirstLastNamePhoneCodedOut' },
    required: [],
  })
  .openapi('FirstLastNamePhoneCodedOut')

const BatchFirstLastNamePhoneCodedOutSchema = z
  .object({
    personalNamesWithPhoneNumbers: z
      .array(FirstLastNamePhoneCodedOutSchema)
      .exactOptional()
      .openapi({ description: 'Classified phone-coded names' }),
  })
  .openapi({
    description:
      'Represents the output of inferring the LIKELY country and phone code of personal names+phones.',
    xml: { name: 'BatchFirstLastNamePhoneCodedOut' },
    required: [],
  })
  .openapi('BatchFirstLastNamePhoneCodedOut')

const FirstLastNamePhoneNumberGeoInSchema = z
  .object({
    countryIso2: z.string().exactOptional(),
    countryIso2Alt: z.string().exactOptional(),
    firstName: z
      .string()
      .exactOptional()
      .openapi({ xml: { attribute: true } }),
    id: z
      .string()
      .exactOptional()
      .openapi({ xml: { attribute: true } }),
    lastName: z
      .string()
      .exactOptional()
      .openapi({ xml: { attribute: true } }),
    phoneNumber: z.string().exactOptional(),
  })
  .openapi({ xml: { name: 'FirstLastNamePhoneNumberGeoIn' }, required: [] })
  .openapi('FirstLastNamePhoneNumberGeoIn')

const BatchFirstLastNamePhoneNumberGeoInSchema = z
  .object({
    facts: z.array(FactInSchema).exactOptional(),
    personalNamesWithPhoneNumbers: z.array(FirstLastNamePhoneNumberGeoInSchema).exactOptional(),
  })
  .openapi({ xml: { name: 'BatchFirstLastNamePhoneNumberGeoIn' }, required: [] })
  .openapi('BatchFirstLastNamePhoneNumberGeoIn')

const FirstLastNamePhoneNumberInSchema = z
  .object({
    firstName: z
      .string()
      .exactOptional()
      .openapi({ xml: { attribute: true } }),
    id: z
      .string()
      .exactOptional()
      .openapi({ xml: { attribute: true } }),
    lastName: z
      .string()
      .exactOptional()
      .openapi({ xml: { attribute: true } }),
    phoneNumber: z.string().exactOptional(),
  })
  .openapi({ xml: { name: 'FirstLastNamePhoneNumberIn' }, required: [] })
  .openapi('FirstLastNamePhoneNumberIn')

const BatchFirstLastNamePhoneNumberInSchema = z
  .object({
    facts: z.array(FactInSchema).exactOptional(),
    personalNamesWithPhoneNumbers: z.array(FirstLastNamePhoneNumberInSchema).exactOptional(),
  })
  .openapi({ xml: { name: 'BatchFirstLastNamePhoneNumberIn' }, required: [] })
  .openapi('BatchFirstLastNamePhoneNumberIn')

const FirstLastNameUSRaceEthnicityOutSchema = z
  .object({
    firstName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The first name (also known as given name)' }),
    id: z.string().exactOptional(),
    lastName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last name (also known as family name, or surname)' }),
    probabilityAltCalibrated: z
      .float64()
      .min(-1)
      .max(1)
      .exactOptional()
      .openapi({
        description:
          'The calibrated probability for raceEthnicity OR raceEthnicityAlt to have been guessed correctly. -1 = still calibrating. ',
      }),
    probabilityCalibrated: z
      .float64()
      .min(-1)
      .max(1)
      .exactOptional()
      .openapi({
        description:
          'The calibrated probability for raceEthnicity to have been guessed correctly. -1 = still calibrating. ',
      }),
    raceEthnicitiesTop: z
      .array(z.string().openapi({ description: "List 'race'/ethnicities" }))
      .exactOptional()
      .openapi({ description: "List 'race'/ethnicities" }),
    raceEthnicity: z
      .enum(['W_NL', 'HL', 'A', 'B_NL', 'AI_AN', 'PI'])
      .exactOptional()
      .openapi({ description: "Most likely US 'race'/ethnicity", xml: { attribute: true } }),
    raceEthnicityAlt: z
      .enum(['W_NL', 'HL', 'A', 'B_NL', 'AI_AN', 'PI'])
      .exactOptional()
      .openapi({ description: "Second most likely US 'race'/ethnicity", xml: { attribute: true } }),
    score: z
      .float64()
      .min(0)
      .max(100)
      .exactOptional()
      .openapi({
        description:
          'Higher score is better, but score is not normalized. Use calibratedProbability if available. ',
      }),
    script: z.string().exactOptional(),
  })
  .openapi({
    description:
      "Represents the output of inferring the LIKELY US 'race/ethnicity' from a personal name, given US country of residence and (optionally) a ZIP5 code.",
    xml: { name: 'FirstLastNameUSRaceEthnicityOut' },
    required: [],
  })
  .openapi('FirstLastNameUSRaceEthnicityOut')

const BatchFirstLastNameUSRaceEthnicityOutSchema = z
  .object({
    personalNames: z
      .array(FirstLastNameUSRaceEthnicityOutSchema)
      .exactOptional()
      .openapi({ description: "Classified US 'race'/ethnicized names" }),
  })
  .openapi({
    description:
      "Represents the output of inferring the LIKELY US 'race/ethnicity' from a personal name, given US country of residence and (optionally) a ZIP5 code.",
    xml: { name: 'BatchFirstLastNameUSRaceEthnicityOut' },
    required: [],
  })
  .openapi('BatchFirstLastNameUSRaceEthnicityOut')

const PersonalNameInSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ xml: { attribute: true } }),
    name: z
      .string()
      .exactOptional()
      .openapi({ xml: { attribute: true } }),
  })
  .openapi({ xml: { name: 'PersonalNameIn' }, required: [] })
  .openapi('PersonalNameIn')

const MatchPersonalFirstLastNameInSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ xml: { attribute: true } }),
    name1: FirstLastNameInSchema.exactOptional(),
    name2: PersonalNameInSchema.exactOptional(),
  })
  .openapi({ xml: { name: 'MatchPersonalFirstLastNameIn' }, required: [] })
  .openapi('MatchPersonalFirstLastNameIn')

const BatchMatchPersonalFirstLastNameInSchema = z
  .object({
    facts: z.array(FactInSchema).exactOptional(),
    personalNames: z.array(MatchPersonalFirstLastNameInSchema).exactOptional(),
  })
  .openapi({ xml: { name: 'BatchMatchPersonalFirstLastNameIn' }, required: [] })
  .openapi('BatchMatchPersonalFirstLastNameIn')

const NameGeoInSchema = z
  .object({
    countryIso2: z
      .string()
      .exactOptional()
      .openapi({ xml: { attribute: true } }),
    id: z
      .string()
      .exactOptional()
      .openapi({ xml: { attribute: true } }),
    name: z
      .string()
      .exactOptional()
      .openapi({ xml: { attribute: true } }),
  })
  .openapi({ xml: { name: 'NameGeoIn' }, required: [] })
  .openapi('NameGeoIn')

const BatchNameGeoInSchema = z
  .object({
    facts: z.array(FactInSchema).exactOptional(),
    properNouns: z.array(NameGeoInSchema).exactOptional(),
  })
  .openapi({ xml: { name: 'BatchNameGeoIn' }, required: [] })
  .openapi('BatchNameGeoIn')

const NameInSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ xml: { attribute: true } }),
    name: z
      .string()
      .exactOptional()
      .openapi({ xml: { attribute: true } }),
  })
  .openapi({ xml: { name: 'NameIn' }, required: [] })
  .openapi('NameIn')

const BatchNameInSchema = z
  .object({
    facts: z.array(FactInSchema).exactOptional(),
    properNouns: z.array(NameInSchema).exactOptional(),
  })
  .openapi({ xml: { name: 'BatchNameIn' }, required: [] })
  .openapi('BatchNameIn')

const NameMatchCandidateOutSchema = z
  .object({
    candidateName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name matching candidate name' }),
    predScoreFamilyName: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The family name prediction score.' }),
    predScoreGivenName: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The given name prediction score.' }),
    probability: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The name matching estimated probability.' }),
  })
  .openapi({
    description: 'The ordered list of name matching candidates',
    xml: { name: 'NameMatchCandidateOut' },
    required: [],
  })
  .openapi('NameMatchCandidateOut')

const NameMatchCandidatesOutSchema = z
  .object({
    firstName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The first name (also known as given name)' }),
    id: z.string().exactOptional(),
    lastName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last name (also known as family name, or surname)' }),
    matchCandidates: z
      .array(NameMatchCandidateOutSchema)
      .exactOptional()
      .openapi({ description: 'The ordered list of name matching candidates' }),
    orderOption: z.string().exactOptional().openapi({ description: 'The option for ordering' }),
    script: z.string().exactOptional(),
  })
  .openapi({
    description: 'Classified matched names',
    xml: { name: 'NameMatchCandidatesOut' },
    required: [],
  })
  .openapi('NameMatchCandidatesOut')

const BatchNameMatchCandidatesOutSchema = z
  .object({
    namesAndMatchCandidates: z
      .array(NameMatchCandidatesOutSchema)
      .exactOptional()
      .openapi({ description: 'Classified matched names' }),
  })
  .openapi({ xml: { name: 'BatchNameMatchCandidatesOut' }, required: [] })
  .openapi('BatchNameMatchCandidatesOut')

const NameMatchedOutSchema = z
  .object({
    id: z.string().exactOptional(),
    matchStatus: z
      .enum(['Match', 'Mismatch'])
      .exactOptional()
      .openapi({ description: 'The name matching status.' }),
    score: z.float64().exactOptional(),
    script: z.string().exactOptional(),
  })
  .openapi({
    description: 'Classified matched names',
    xml: { name: 'NameMatchedOut' },
    required: [],
  })
  .openapi('NameMatchedOut')

const BatchNameMatchedOutSchema = z
  .object({
    matchedNames: z
      .array(NameMatchedOutSchema)
      .exactOptional()
      .openapi({ description: 'Classified matched names' }),
  })
  .openapi({ xml: { name: 'BatchNameMatchedOut' }, required: [] })
  .openapi('BatchNameMatchedOut')

const PersonalNameCastegroupOutSchema = z
  .object({
    castegroup: z.string().exactOptional().openapi({ description: 'Most likely caste group' }),
    castegroupAlt: z
      .string()
      .exactOptional()
      .openapi({ description: 'Second best alternative : caste group ' }),
    castegroupTop: z
      .array(z.string().openapi({ description: 'List caste group (top 10)' }))
      .exactOptional()
      .openapi({ description: 'List caste group (top 10)' }),
    id: z.string().exactOptional(),
    name: z.string().exactOptional().openapi({ description: 'The input name.' }),
    probabilityAltCalibrated: z
      .float64()
      .min(-1)
      .max(1)
      .exactOptional()
      .openapi({
        description:
          'The calibrated probability for country OR countryAlt to have been guessed correctly. -1 = still calibrating. ',
      }),
    probabilityCalibrated: z
      .float64()
      .min(-1)
      .max(1)
      .exactOptional()
      .openapi({
        description:
          'The calibrated probability for country to have been guessed correctly. -1 = still calibrating. ',
      }),
    score: z
      .float64()
      .min(0)
      .max(100)
      .exactOptional()
      .openapi({
        description:
          'Higher score is better, but score is not normalized. Use calibratedProbability if available. ',
      }),
    script: z.string().exactOptional(),
  })
  .openapi({
    description: 'Caste group-coded names',
    xml: { name: 'PersonalNameCastegroupOut' },
    required: [],
  })
  .openapi('PersonalNameCastegroupOut')

const BatchPersonalNameCastegroupOutSchema = z
  .object({
    personalNames: z
      .array(PersonalNameCastegroupOutSchema)
      .exactOptional()
      .openapi({ description: 'Caste group-coded names' }),
  })
  .openapi({ xml: { name: 'BatchPersonalNameCastegroupOut' }, required: [] })
  .openapi('BatchPersonalNameCastegroupOut')

const PersonalNameGenderedOutSchema = z
  .object({
    genderScale: z
      .float64()
      .min(-1)
      .max(1)
      .exactOptional()
      .openapi({ description: 'Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value.' }),
    id: z.string().exactOptional(),
    likelyGender: z
      .enum(['male', 'female', 'unknown'])
      .exactOptional()
      .openapi({ description: 'Most likely gender' }),
    name: z.string().exactOptional().openapi({ description: 'The input name' }),
    probabilityCalibrated: z
      .float64()
      .min(-1)
      .max(1)
      .exactOptional()
      .openapi({
        description:
          'The calibrated probability for inferred gender to have been guessed correctly. -1 = still calibrating. ',
      }),
    score: z
      .float64()
      .min(0)
      .max(100)
      .exactOptional()
      .openapi({
        description:
          'Compatibility to NamSor_v1 Gender score value. Higher score is better, but score is not normalized. Use calibratedProbability if available. ',
      }),
    script: z.string().exactOptional(),
  })
  .openapi({
    description: 'Classified genderized names',
    xml: { name: 'PersonalNameGenderedOut' },
    required: [],
  })
  .openapi('PersonalNameGenderedOut')

const BatchPersonalNameGenderedOutSchema = z
  .object({
    personalNames: z
      .array(PersonalNameGenderedOutSchema)
      .exactOptional()
      .openapi({ description: 'Classified genderized names' }),
  })
  .openapi({ xml: { name: 'BatchPersonalNameGenderedOut' }, required: [] })
  .openapi('BatchPersonalNameGenderedOut')

const PersonalNameGeoInSchema = z
  .object({
    countryIso2: z
      .string()
      .exactOptional()
      .openapi({ xml: { attribute: true } }),
    id: z
      .string()
      .exactOptional()
      .openapi({ xml: { attribute: true } }),
    name: z
      .string()
      .exactOptional()
      .openapi({ xml: { attribute: true } }),
  })
  .openapi({ xml: { name: 'PersonalNameGeoIn' }, required: [] })
  .openapi('PersonalNameGeoIn')

const BatchPersonalNameGeoInSchema = z
  .object({
    facts: z.array(FactInSchema).exactOptional(),
    personalNames: z.array(PersonalNameGeoInSchema).exactOptional(),
  })
  .openapi({ xml: { name: 'BatchPersonalNameGeoIn' }, required: [] })
  .openapi('BatchPersonalNameGeoIn')

const PersonalNameGeoOutSchema = z
  .object({
    countriesTop: z
      .array(z.string().openapi({ description: 'List countries (top 10)' }))
      .exactOptional()
      .openapi({ description: 'List countries (top 10)' }),
    country: z.string().exactOptional().openapi({ description: 'Most likely country ' }),
    countryAlt: z
      .string()
      .exactOptional()
      .openapi({ description: 'Second best alternative : country ' }),
    id: z.string().exactOptional(),
    name: z.string().exactOptional().openapi({ description: 'The input name.' }),
    probabilityAltCalibrated: z
      .float64()
      .min(-1)
      .max(1)
      .exactOptional()
      .openapi({
        description:
          'The calibrated probability for country OR countryAlt to have been guessed correctly. -1 = still calibrating. ',
      }),
    probabilityCalibrated: z
      .float64()
      .min(-1)
      .max(1)
      .exactOptional()
      .openapi({
        description:
          'The calibrated probability for country to have been guessed correctly. -1 = still calibrating. ',
      }),
    region: z
      .string()
      .exactOptional()
      .openapi({ description: 'Most likely region (based on country ISO2 code)' }),
    score: z
      .float64()
      .min(0)
      .max(100)
      .exactOptional()
      .openapi({
        description:
          'Higher score is better, but score is not normalized. Use calibratedProbability if available. ',
      }),
    script: z.string().exactOptional(),
    subRegion: z
      .string()
      .exactOptional()
      .openapi({ description: 'Most likely sub region (based on country ISO2 code)' }),
    topRegion: z
      .string()
      .exactOptional()
      .openapi({ description: 'Most likely top region (based on country ISO2 code)' }),
  })
  .openapi({
    description: 'Classified geo names',
    xml: { name: 'PersonalNameGeoOut' },
    required: [],
  })
  .openapi('PersonalNameGeoOut')

const BatchPersonalNameGeoOutSchema = z
  .object({
    personalNames: z
      .array(PersonalNameGeoOutSchema)
      .exactOptional()
      .openapi({ description: 'Classified geo names' }),
  })
  .openapi({ xml: { name: 'BatchPersonalNameGeoOut' }, required: [] })
  .openapi('BatchPersonalNameGeoOut')

const PersonalNameGeoSubdivisionInSchema = z
  .object({
    countryIso2: z
      .string()
      .exactOptional()
      .openapi({ xml: { attribute: true } }),
    id: z
      .string()
      .exactOptional()
      .openapi({ xml: { attribute: true } }),
    name: z
      .string()
      .exactOptional()
      .openapi({ xml: { attribute: true } }),
    subdivisionIso: z
      .string()
      .exactOptional()
      .openapi({ xml: { attribute: true } }),
  })
  .openapi({ xml: { name: 'PersonalNameGeoSubdivisionIn' }, required: [] })
  .openapi('PersonalNameGeoSubdivisionIn')

const BatchPersonalNameGeoSubdivisionInSchema = z
  .object({
    facts: z.array(FactInSchema).exactOptional(),
    personalNames: z.array(PersonalNameGeoSubdivisionInSchema).exactOptional(),
  })
  .openapi({ xml: { name: 'BatchPersonalNameGeoSubdivisionIn' }, required: [] })
  .openapi('BatchPersonalNameGeoSubdivisionIn')

const BatchPersonalNameInSchema = z
  .object({
    facts: z.array(FactInSchema).exactOptional(),
    personalNames: z.array(PersonalNameInSchema).exactOptional(),
  })
  .openapi({ xml: { name: 'BatchPersonalNameIn' }, required: [] })
  .openapi('BatchPersonalNameIn')

const FirstLastNameOutSchema = z
  .object({
    firstName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The first name (also known as given name)' }),
    id: z.string().exactOptional(),
    lastName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last name (also known as family name, or surname)' }),
    script: z.string().exactOptional(),
  })
  .openapi({
    description: 'First / last name structure corresponding to the most likely parsing.',
    xml: { name: 'FirstLastNameOut' },
    required: [],
  })
  .openapi('FirstLastNameOut')

const PersonalNameParsedOutSchema = z
  .object({
    firstLastName: FirstLastNameOutSchema.exactOptional(),
    id: z.string().exactOptional(),
    name: z.string().exactOptional().openapi({ description: 'The input name' }),
    nameParserType: z
      .enum([
        'FN1LN1',
        'LN1FN1',
        'FN1LN2',
        'LN2FN1',
        'FN1LNx',
        'LNxFN1',
        'FN2LN1',
        'LN1FN2',
        'FN2LN2',
        'LN2FN2',
        'FN2LNx',
        'LNxFN2',
        'FNxLN1',
        'LN1FNx',
        'FNxLN2',
        'LN2FNx',
        'FNxLNx',
        'LNxFNx',
      ])
      .exactOptional()
      .openapi({
        description:
          'Name parsing is addressed as a classification problem, for example FN1LN1 means a first then last name order.',
      }),
    nameParserTypeAlt: z
      .enum([
        'FN1LN1',
        'LN1FN1',
        'FN1LN2',
        'LN2FN1',
        'FN1LNx',
        'LNxFN1',
        'FN2LN1',
        'LN1FN2',
        'FN2LN2',
        'LN2FN2',
        'FN2LNx',
        'LNxFN2',
        'FNxLN1',
        'LN1FNx',
        'FNxLN2',
        'LN2FNx',
        'FNxLNx',
        'LNxFNx',
      ])
      .exactOptional()
      .openapi({
        description:
          'Second best alternative parsing. Name parsing is addressed as a classification problem, for example FN1LN1 means a first then last name order.',
      }),
    score: z
      .float64()
      .min(0)
      .max(100)
      .exactOptional()
      .openapi({
        description:
          'Higher score is better, but score is not normalized. Use calibratedProbability if available. ',
      }),
    script: z.string().exactOptional(),
  })
  .openapi({ xml: { name: 'PersonalNameParsedOut' }, required: [] })
  .openapi('PersonalNameParsedOut')

const BatchPersonalNameParsedOutSchema = z
  .object({
    personalNames: z
      .array(PersonalNameParsedOutSchema)
      .exactOptional()
      .openapi({ description: 'Classified parsed names' }),
  })
  .openapi({ xml: { name: 'BatchPersonalNameParsedOut' }, required: [] })
  .openapi('BatchPersonalNameParsedOut')

const PersonalNameReligionedOutSchema = z
  .object({
    id: z.string().exactOptional(),
    name: z.string().exactOptional().openapi({ description: 'The input name.' }),
    probabilityAltCalibrated: z
      .float64()
      .min(-1)
      .max(1)
      .exactOptional()
      .openapi({
        description:
          'The calibrated probability for country OR countryAlt to have been guessed correctly. -1 = still calibrating. ',
      }),
    probabilityCalibrated: z
      .float64()
      .min(-1)
      .max(1)
      .exactOptional()
      .openapi({
        description:
          'The calibrated probability for country to have been guessed correctly. -1 = still calibrating. ',
      }),
    religion: z.string().exactOptional().openapi({ description: 'Most likely religion' }),
    religionAlt: z
      .string()
      .exactOptional()
      .openapi({ description: 'Second best alternative : religion ' }),
    religionsTop: z
      .array(z.string().openapi({ description: 'List countries (top 10)' }))
      .exactOptional()
      .openapi({ description: 'List countries (top 10)' }),
    score: z
      .float64()
      .min(0)
      .max(100)
      .exactOptional()
      .openapi({
        description:
          'Higher score is better, but score is not normalized. Use calibratedProbability if available. ',
      }),
    script: z.string().exactOptional(),
  })
  .openapi({
    description: 'religious-coded names',
    xml: { name: 'PersonalNameReligionedOut' },
    required: [],
  })
  .openapi('PersonalNameReligionedOut')

const BatchPersonalNameReligionedOutSchema = z
  .object({
    personalNames: z
      .array(PersonalNameReligionedOutSchema)
      .exactOptional()
      .openapi({ description: 'religious-coded names' }),
  })
  .openapi({ xml: { name: 'BatchPersonalNameReligionedOut' }, required: [] })
  .openapi('BatchPersonalNameReligionedOut')

const PersonalNameSubdivisionInSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ xml: { attribute: true } }),
    name: z
      .string()
      .exactOptional()
      .openapi({ xml: { attribute: true } }),
    subdivisionIso: z
      .string()
      .exactOptional()
      .openapi({ xml: { attribute: true } }),
  })
  .openapi({ xml: { name: 'PersonalNameSubdivisionIn' }, required: [] })
  .openapi('PersonalNameSubdivisionIn')

const BatchPersonalNameSubdivisionInSchema = z
  .object({
    facts: z.array(FactInSchema).exactOptional(),
    personalNames: z.array(PersonalNameSubdivisionInSchema).exactOptional(),
  })
  .openapi({ xml: { name: 'BatchPersonalNameSubdivisionIn' }, required: [] })
  .openapi('BatchPersonalNameSubdivisionIn')

const ProperNounCategorizedOutSchema = z
  .object({
    commonType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The most likely common name type' }),
    commonTypeAlt: z
      .string()
      .exactOptional()
      .openapi({ description: 'Best alternative for : The most likely common name type' }),
    id: z.string().exactOptional(),
    name: z.string().exactOptional().openapi({ description: 'The input name' }),
    score: z
      .float64()
      .min(0)
      .max(100)
      .exactOptional()
      .openapi({
        description:
          'Higher score is better, but score is not normalized. Use calibratedProbability if available. ',
      }),
    script: z.string().exactOptional(),
  })
  .openapi({
    description: 'Classified typed proper names',
    xml: { name: 'ProperNounCategorizedOut' },
    required: [],
  })
  .openapi('ProperNounCategorizedOut')

const BatchProperNounCategorizedOutSchema = z
  .object({
    properNouns: z
      .array(ProperNounCategorizedOutSchema)
      .exactOptional()
      .openapi({ description: 'Classified typed proper names' }),
  })
  .openapi({
    description:
      'Represents the output of inferring the common type (anthroponym, toponym, brand, etc.) from a list of proper names.',
    xml: { name: 'BatchProperNounCategorizedOut' },
    required: [],
  })
  .openapi('BatchProperNounCategorizedOut')

const FeedbackLoopOutSchema = z
  .object({
    feedbackCredits: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Number of units recredited as per feedback loop successful classification',
      }),
  })
  .openapi({ xml: { name: 'FeedbackLoopOut' }, required: [] })
  .openapi('FeedbackLoopOut')

const RegionISOSchema = z
  .object({
    countryFIPS: z.string().exactOptional(),
    countryISO2: z.string().exactOptional(),
    countryISO3: z.string().exactOptional(),
    countryName: z.string().exactOptional(),
    countryNumCode: z.string().exactOptional(),
    region: z.string().exactOptional(),
    subregion: z.string().exactOptional(),
    topregion: z.string().exactOptional(),
  })
  .openapi({ description: 'List of countries and regions', required: [] })
  .openapi('RegionISO')

const RegionOutSchema = z
  .object({
    countriesAndRegions: z
      .array(RegionISOSchema)
      .exactOptional()
      .openapi({ description: 'List of countries and regions' }),
  })
  .openapi({ xml: { name: 'RegionOut' }, required: [] })
  .openapi('RegionOut')

const ApiKeySecurityScheme = {
  description: 'api_key required',
  in: 'header',
  name: 'X-API-KEY',
  type: 'apiKey',
}

export const getApi2JsonAnonymizeSourceAnonymizedTokenRoute = createRoute({
  method: 'get',
  path: '/api2/json/anonymize/{source}/{anonymized}/{token}',
  tags: ['admin'],
  summary: 'Activate/deactivate anonymization for a source.',
  operationId: 'anonymize',
  request: {
    params: z.object({
      source: z
        .string()
        .openapi({
          param: { in: 'path', name: 'source', required: true, schema: { type: 'string' } },
        }),
      anonymized: z
        .stringbool()
        .openapi({
          param: { in: 'path', name: 'anonymized', required: true, schema: { type: 'boolean' } },
        }),
      token: z
        .string()
        .openapi({
          param: { in: 'path', name: 'token', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Anonymization of a source.',
      content: { 'application/json': { schema: APIKeyOutSchema } },
    },
    401: { description: 'Missing or incorrect API Key' },
  },
})

export const getApi2JsonApiKeyInfoRoute = createRoute({
  method: 'get',
  path: '/api2/json/apiKeyInfo',
  tags: ['admin'],
  summary: 'Read API Key info.',
  operationId: 'apiKeyInfo',
  responses: {
    200: {
      description: 'Read API Key (uncached, i.e. DB read)',
      content: { 'application/json': { schema: APIKeyOutSchema } },
    },
    401: { description: 'Missing or incorrect API Key' },
  },
})

export const getApi2JsonApiServicesRoute = createRoute({
  method: 'get',
  path: '/api2/json/apiServices',
  tags: ['admin'],
  summary:
    'List of classification services and usage cost in Units per classification (default is 1=ONE Unit). Some API endpoints (ex. Corridor) combine multiple classifiers.',
  operationId: 'availableServices',
  responses: {
    200: {
      description: 'Available services',
      content: { 'application/json': { schema: APIServicesOutSchema } },
    },
    401: { description: 'Missing or incorrect token' },
  },
})

export const getApi2JsonApiStatusRoute = createRoute({
  method: 'get',
  path: '/api2/json/apiStatus',
  tags: ['admin'],
  summary:
    'Prints the current status of the classifiers. A classifier name in apiStatus corresponds to a service name in apiServices.',
  operationId: 'apiStatus',
  responses: {
    200: {
      description: 'Available classifiers and status',
      content: { 'application/json': { schema: APIClassifiersStatusOutSchema } },
    },
    401: { description: 'Missing or incorrect token' },
  },
})

export const getApi2JsonApiUsageRoute = createRoute({
  method: 'get',
  path: '/api2/json/apiUsage',
  tags: ['admin'],
  summary: 'Print current API usage.',
  operationId: 'apiUsage',
  responses: {
    200: {
      description: 'Print current API usage.',
      content: { 'application/json': { schema: APIPeriodUsageOutSchema } },
    },
    401: { description: 'Missing or incorrect API Key' },
  },
  security: [{ api_key: [] }],
})

export const getApi2JsonApiUsageHistoryRoute = createRoute({
  method: 'get',
  path: '/api2/json/apiUsageHistory',
  tags: ['admin'],
  summary: 'Print historical API usage.',
  operationId: 'apiUsageHistory',
  responses: {
    200: {
      description: 'Print historical API usage (NB. new output format form v2.0.15)',
      content: { 'application/json': { schema: APIUsageHistoryOutSchema } },
    },
    401: { description: 'Missing or incorrect API Key' },
  },
  security: [{ api_key: [] }],
})

export const getApi2JsonApiUsageHistoryAggregateRoute = createRoute({
  method: 'get',
  path: '/api2/json/apiUsageHistoryAggregate',
  tags: ['admin'],
  summary: 'Print historical API usage (in an aggregated view, by service, by day/hour/min).',
  operationId: 'apiUsageHistoryAggregate',
  responses: {
    200: {
      description: 'Print historical API usage.',
      content: { 'application/json': { schema: APIUsageAggregatedOutSchema } },
    },
    401: { description: 'Missing or incorrect API Key' },
  },
  security: [{ api_key: [] }],
})

export const getApi2JsonCastegroupIndianFullSubDivisionIso31662PersonalNameFullRoute = createRoute({
  method: 'get',
  path: '/api2/json/castegroupIndianFull/{subDivisionIso31662}/{personalNameFull}',
  tags: ['indian'],
  summary:
    '[USES 10 UNITS PER NAME] Infer the likely Indian name castegroup of a personal full name.',
  operationId: 'castegroupIndianFull',
  request: {
    params: z.object({
      subDivisionIso31662: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'subDivisionIso31662',
            required: true,
            schema: { type: 'string' },
          },
        }),
      personalNameFull: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'personalNameFull',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A castegroup-coded name.',
      content: { 'application/json': { schema: PersonalNameCastegroupOutSchema } },
    },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const postApi2JsonCastegroupIndianFullBatchRoute = createRoute({
  method: 'post',
  path: '/api2/json/castegroupIndianFullBatch',
  tags: ['indian'],
  summary:
    '[USES 10 UNITS PER NAME] Infer the likely Indian name castegroup of up to 100 personal full names. ',
  operationId: 'castegroupIndianFullBatch',
  request: {
    body: {
      description: 'A list of personal names',
      content: { 'application/json': { schema: BatchPersonalNameSubdivisionInSchema } },
    },
  },
  responses: {
    200: {
      description: 'A list of castegroup-coded names.',
      content: { 'application/json': { schema: BatchPersonalNameCastegroupOutSchema } },
    },
    400: { description: 'Bad request (ex. too many names)' },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const getApi2JsonChineseNameCandidatesChineseSurnameLatinChineseGivenNameLatinRoute =
  createRoute({
    method: 'get',
    path: '/api2/json/chineseNameCandidates/{chineseSurnameLatin}/{chineseGivenNameLatin}',
    tags: ['chinese'],
    summary: 'Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming',
    operationId: 'chineseNameCandidates',
    request: {
      params: z.object({
        chineseSurnameLatin: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'chineseSurnameLatin',
              required: true,
              schema: { type: 'string' },
            },
          }),
        chineseGivenNameLatin: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'chineseGivenNameLatin',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'A romanized name.',
        content: { 'application/json': { schema: NameMatchCandidatesOutSchema } },
      },
      401: { description: 'Missing or incorrect API Key' },
      403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
    },
    security: [{ api_key: [] }],
  })

export const postApi2JsonChineseNameCandidatesBatchRoute = createRoute({
  method: 'post',
  path: '/api2/json/chineseNameCandidatesBatch',
  tags: ['chinese'],
  summary:
    'Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming',
  operationId: 'chineseNameCandidatesBatch',
  request: {
    body: {
      description:
        'A list of personal Chinese names in LATIN, firstName = chineseGivenName; lastName=chineseSurname',
      content: { 'application/json': { schema: BatchFirstLastNameInSchema } },
    },
  },
  responses: {
    200: {
      description: 'A list of genderized names.',
      content: { 'application/json': { schema: BatchNameMatchCandidatesOutSchema } },
    },
    400: { description: 'Bad request (ex. too many names)' },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const postApi2JsonChineseNameCandidatesGenderBatchRoute = createRoute({
  method: 'post',
  path: '/api2/json/chineseNameCandidatesGenderBatch',
  tags: ['chinese'],
  summary:
    'Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname) ex. Wang Xiaoming.',
  operationId: 'chineseNameCandidatesGenderBatch',
  request: {
    body: {
      description:
        'A list of personal Chinese names in LATIN, firstName = chineseGivenName; lastName=chineseSurname',
      content: { 'application/json': { schema: BatchFirstLastNameGenderInSchema } },
    },
  },
  responses: {
    200: {
      description: 'A list of genderized names.',
      content: { 'application/json': { schema: BatchNameMatchCandidatesOutSchema } },
    },
    400: { description: 'Bad request (ex. too many names)' },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const getApi2JsonChineseNameGenderCandidatesChineseSurnameLatinChineseGivenNameLatinKnownGenderRoute =
  createRoute({
    method: 'get',
    path: '/api2/json/chineseNameGenderCandidates/{chineseSurnameLatin}/{chineseGivenNameLatin}/{knownGender}',
    tags: ['chinese'],
    summary:
      "Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming - having a known gender ('male' or 'female')",
    operationId: 'chineseNameGenderCandidates',
    request: {
      params: z.object({
        chineseSurnameLatin: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'chineseSurnameLatin',
              required: true,
              schema: { type: 'string' },
            },
          }),
        chineseGivenNameLatin: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'chineseGivenNameLatin',
              required: true,
              schema: { type: 'string' },
            },
          }),
        knownGender: z
          .string()
          .openapi({
            param: { in: 'path', name: 'knownGender', required: true, schema: { type: 'string' } },
          }),
      }),
    },
    responses: {
      200: {
        description: 'A romanized name.',
        content: { 'application/json': { schema: NameMatchCandidatesOutSchema } },
      },
      401: { description: 'Missing or incorrect API Key' },
      403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
    },
    security: [{ api_key: [] }],
  })

export const getApi2JsonChineseNameMatchChineseSurnameLatinChineseGivenNameLatinChineseNameRoute =
  createRoute({
    method: 'get',
    path: '/api2/json/chineseNameMatch/{chineseSurnameLatin}/{chineseGivenNameLatin}/{chineseName}',
    tags: ['chinese'],
    summary:
      'Return a score for matching Chinese name ex. 王晓明 with a romanized name ex. Wang Xiaoming',
    operationId: 'chineseNameMatch',
    request: {
      params: z.object({
        chineseSurnameLatin: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'chineseSurnameLatin',
              required: true,
              schema: { type: 'string' },
            },
          }),
        chineseGivenNameLatin: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'chineseGivenNameLatin',
              required: true,
              schema: { type: 'string' },
            },
          }),
        chineseName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'chineseName', required: true, schema: { type: 'string' } },
          }),
      }),
    },
    responses: {
      200: {
        description: 'A romanized name.',
        content: { 'application/json': { schema: NameMatchedOutSchema } },
      },
      401: { description: 'Missing or incorrect API Key' },
      403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
    },
    security: [{ api_key: [] }],
  })

export const postApi2JsonChineseNameMatchBatchRoute = createRoute({
  method: 'post',
  path: '/api2/json/chineseNameMatchBatch',
  tags: ['chinese'],
  summary:
    'Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming',
  operationId: 'chineseNameMatchBatch',
  request: {
    body: {
      description:
        'A list of personal Chinese names in LATIN, firstName = chineseGivenName; lastName=chineseSurname',
      content: { 'application/json': { schema: BatchMatchPersonalFirstLastNameInSchema } },
    },
  },
  responses: {
    200: {
      description: 'A list of genderized names.',
      content: { 'application/json': { schema: BatchNameMatchedOutSchema } },
    },
    400: { description: 'Bad request (ex. too many names)' },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const getApi2JsonCorridorCountryIso2FromFirstNameFromLastNameFromCountryIso2ToFirstNameToLastNameToRoute =
  createRoute({
    method: 'get',
    path: '/api2/json/corridor/{countryIso2From}/{firstNameFrom}/{lastNameFrom}/{countryIso2To}/{firstNameTo}/{lastNameTo}',
    tags: ['personal'],
    summary:
      '[USES 20 UNITS PER NAME COUPLE] Infer several classifications for a cross border interaction between names (ex. remit, travel, intl com)',
    operationId: 'corridor',
    request: {
      params: z.object({
        countryIso2From: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'countryIso2From',
              required: true,
              schema: { type: 'string' },
            },
          }),
        firstNameFrom: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'firstNameFrom',
              required: true,
              schema: { type: 'string' },
            },
          }),
        lastNameFrom: z
          .string()
          .openapi({
            param: { in: 'path', name: 'lastNameFrom', required: true, schema: { type: 'string' } },
          }),
        countryIso2To: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'countryIso2To',
              required: true,
              schema: { type: 'string' },
            },
          }),
        firstNameTo: z
          .string()
          .openapi({
            param: { in: 'path', name: 'firstNameTo', required: true, schema: { type: 'string' } },
          }),
        lastNameTo: z
          .string()
          .openapi({
            param: { in: 'path', name: 'lastNameTo', required: true, schema: { type: 'string' } },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Two classified names.',
        content: { 'application/json': { schema: CorridorOutSchema } },
      },
      401: { description: 'Missing or incorrect API Key' },
      403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
    },
    security: [{ api_key: [] }],
  })

export const postApi2JsonCorridorBatchRoute = createRoute({
  method: 'post',
  path: '/api2/json/corridorBatch',
  tags: ['personal'],
  summary:
    '[USES 20 UNITS PER NAME PAIR] Infer several classifications for up to 100 cross border interaction between names (ex. remit, travel, intl com)',
  operationId: 'corridorBatch',
  request: {
    body: {
      description: 'A list of name pairs, with country code (nameFrom -> nameTo).',
      content: { 'application/json': { schema: BatchCorridorInSchema } },
    },
  },
  responses: {
    200: {
      description: 'A list of classified name pairs.',
      content: { 'application/json': { schema: BatchCorridorOutSchema } },
    },
    400: { description: 'Bad request (ex. too many names)' },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const getApi2JsonCountryPersonalNameFullRoute = createRoute({
  method: 'get',
  path: '/api2/json/country/{personalNameFull}',
  tags: ['personal'],
  summary:
    '[USES 10 UNITS PER NAME] Infer the likely country of residence of a personal full name, or one surname. Assumes names as they are in the country of residence OR the country of origin.',
  operationId: 'country',
  request: {
    params: z.object({
      personalNameFull: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'personalNameFull',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A origined name.',
      content: { 'application/json': { schema: PersonalNameGeoOutSchema } },
    },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const postApi2JsonCountryBatchRoute = createRoute({
  method: 'post',
  path: '/api2/json/countryBatch',
  tags: ['personal'],
  summary:
    '[USES 10 UNITS PER NAME] Infer the likely country of residence of up to 100 personal full names, or surnames. Assumes names as they are in the country of residence OR the country of origin.',
  operationId: 'countryBatch',
  request: {
    body: {
      description: 'A list of personal names',
      content: { 'application/json': { schema: BatchPersonalNameInSchema } },
    },
  },
  responses: {
    200: {
      description: 'A list of genderized names.',
      content: { 'application/json': { schema: BatchPersonalNameGeoOutSchema } },
    },
    400: { description: 'Bad request (ex. too many names)' },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const getApi2JsonDiasporaCountryIso2FirstNameLastNameRoute = createRoute({
  method: 'get',
  path: '/api2/json/diaspora/{countryIso2}/{firstName}/{lastName}',
  tags: ['personal'],
  summary:
    '[USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of a personal name, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)',
  operationId: 'diaspora',
  request: {
    params: z.object({
      countryIso2: z
        .string()
        .openapi({
          param: { in: 'path', name: 'countryIso2', required: true, schema: { type: 'string' } },
        }),
      firstName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'firstName', required: true, schema: { type: 'string' } },
        }),
      lastName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'lastName', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A diaspora / ethnicity for given name and geography.',
      content: { 'application/json': { schema: FirstLastNameDiasporaedOutSchema } },
    },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const postApi2JsonDiasporaBatchRoute = createRoute({
  method: 'post',
  path: '/api2/json/diasporaBatch',
  tags: ['personal'],
  summary:
    '[USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of up to 100 personal names, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)',
  operationId: 'diasporaBatch',
  request: {
    body: {
      description: 'A list of personal names',
      content: { 'application/json': { schema: BatchFirstLastNameGeoInSchema } },
    },
  },
  responses: {
    200: {
      description: 'A list of diaspora / ethnicity given a name and residency.',
      content: { 'application/json': { schema: BatchFirstLastNameDiasporaedOutSchema } },
    },
    400: { description: 'Bad request (ex. too many names)' },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const getApi2JsonGenderFirstNameRoute = createRoute({
  method: 'get',
  path: '/api2/json/gender/{firstName}',
  tags: ['personal'],
  summary:
    "Infer the likely gender of a just a fiven name, assuming default 'US' local context. Please use preferably full names and local geographic context for better accuracy.",
  operationId: 'gender',
  request: {
    params: z.object({
      firstName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'firstName', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A genderized name.',
      content: { 'application/json': { schema: FirstLastNameGenderedOutSchema } },
    },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const getApi2JsonGenderFirstNameLastNameRoute = createRoute({
  method: 'get',
  path: '/api2/json/gender/{firstName}/{lastName}',
  tags: ['personal'],
  summary: 'Infer the likely gender of a name.',
  operationId: 'gender_1',
  request: {
    params: z.object({
      firstName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'firstName', required: true, schema: { type: 'string' } },
        }),
      lastName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'lastName', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A genderized name.',
      content: { 'application/json': { schema: FirstLastNameGenderedOutSchema } },
    },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const postApi2JsonGenderBatchRoute = createRoute({
  method: 'post',
  path: '/api2/json/genderBatch',
  tags: ['personal'],
  summary:
    'Infer the likely gender of up to 100 names, detecting automatically the cultural context.',
  operationId: 'genderBatch',
  request: {
    body: {
      description: 'A list of personal names',
      content: { 'application/json': { schema: BatchFirstLastNameInSchema } },
    },
  },
  responses: {
    200: {
      description: 'A list of genderized names.',
      content: { 'application/json': { schema: BatchFirstLastNameGenderedOutSchema } },
    },
    400: { description: 'Bad request (ex. too many names)' },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const getApi2JsonGenderChineseNameChineseNameRoute = createRoute({
  method: 'get',
  path: '/api2/json/genderChineseName/{chineseName}',
  tags: ['chinese'],
  summary: 'Infer the likely gender of a Chinese full name ex. 王晓明',
  operationId: 'genderChineseName',
  request: {
    params: z.object({
      chineseName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'chineseName', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A genderized name.',
      content: { 'application/json': { schema: PersonalNameGenderedOutSchema } },
    },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const postApi2JsonGenderChineseNameBatchRoute = createRoute({
  method: 'post',
  path: '/api2/json/genderChineseNameBatch',
  tags: ['chinese'],
  summary: 'Infer the likely gender of up to 100 full names ex. 王晓明',
  operationId: 'genderChineseNameBatch',
  request: {
    body: {
      description: 'A list of personal names, with a country ISO2 code',
      content: { 'application/json': { schema: BatchPersonalNameInSchema } },
    },
  },
  responses: {
    200: {
      description: 'A list of genderized names.',
      content: { 'application/json': { schema: BatchPersonalNameGenderedOutSchema } },
    },
    400: { description: 'Bad request (ex. too many names)' },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const getApi2JsonGenderChineseNamePinyinChineseSurnameLatinChineseGivenNameLatinRoute =
  createRoute({
    method: 'get',
    path: '/api2/json/genderChineseNamePinyin/{chineseSurnameLatin}/{chineseGivenNameLatin}',
    tags: ['chinese'],
    summary: 'Infer the likely gender of a Chinese name in LATIN (Pinyin).',
    operationId: 'genderChineseNamePinyin',
    request: {
      params: z.object({
        chineseSurnameLatin: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'chineseSurnameLatin',
              required: true,
              schema: { type: 'string' },
            },
          }),
        chineseGivenNameLatin: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'chineseGivenNameLatin',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'A genderized name.',
        content: { 'application/json': { schema: FirstLastNameGenderedOutSchema } },
      },
      401: { description: 'Missing or incorrect API Key' },
      403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
    },
    security: [{ api_key: [] }],
  })

export const postApi2JsonGenderChineseNamePinyinBatchRoute = createRoute({
  method: 'post',
  path: '/api2/json/genderChineseNamePinyinBatch',
  tags: ['chinese'],
  summary: 'Infer the likely gender of up to 100 Chinese names in LATIN (Pinyin).',
  operationId: 'genderChineseNamePinyinBatch',
  request: {
    body: {
      description: 'A list of names, with country code.',
      content: { 'application/json': { schema: BatchFirstLastNameInSchema } },
    },
  },
  responses: {
    200: {
      description: 'A list of genderized names.',
      content: { 'application/json': { schema: BatchFirstLastNameGenderedOutSchema } },
    },
    400: { description: 'Bad request (ex. too many names)' },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const getApi2JsonGenderFullFullNameRoute = createRoute({
  method: 'get',
  path: '/api2/json/genderFull/{fullName}',
  tags: ['personal'],
  summary: 'Infer the likely gender of a full name, ex. John H. Smith',
  operationId: 'genderFull',
  request: {
    params: z.object({
      fullName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'fullName', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A genderized name.',
      content: { 'application/json': { schema: PersonalNameGenderedOutSchema } },
    },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const postApi2JsonGenderFullBatchRoute = createRoute({
  method: 'post',
  path: '/api2/json/genderFullBatch',
  tags: ['personal'],
  summary:
    'Infer the likely gender of up to 100 full names, detecting automatically the cultural context.',
  operationId: 'genderFullBatch',
  request: {
    body: {
      description: 'A list of personal names',
      content: { 'application/json': { schema: BatchPersonalNameInSchema } },
    },
  },
  responses: {
    200: {
      description: 'A list of genderized names.',
      content: { 'application/json': { schema: BatchPersonalNameGenderedOutSchema } },
    },
    400: { description: 'Bad request (ex. too many names)' },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const getApi2JsonGenderFullGeoFullNameCountryIso2Route = createRoute({
  method: 'get',
  path: '/api2/json/genderFullGeo/{fullName}/{countryIso2}',
  tags: ['personal'],
  summary: 'Infer the likely gender of a full name, given a local context (ISO2 country code).',
  operationId: 'genderFullGeo',
  request: {
    params: z.object({
      fullName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'fullName', required: true, schema: { type: 'string' } },
        }),
      countryIso2: z
        .string()
        .openapi({
          param: { in: 'path', name: 'countryIso2', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A genderized name.',
      content: { 'application/json': { schema: PersonalNameGenderedOutSchema } },
    },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const postApi2JsonGenderFullGeoBatchRoute = createRoute({
  method: 'post',
  path: '/api2/json/genderFullGeoBatch',
  tags: ['personal'],
  summary:
    'Infer the likely gender of up to 100 full names, with a given cultural context (country ISO2 code).',
  operationId: 'genderFullGeoBatch',
  request: {
    body: {
      description: 'A list of personal names, with a country ISO2 code',
      content: { 'application/json': { schema: BatchPersonalNameGeoInSchema } },
    },
  },
  responses: {
    200: {
      description: 'A list of genderized names.',
      content: { 'application/json': { schema: BatchPersonalNameGenderedOutSchema } },
    },
    400: { description: 'Bad request (ex. too many names)' },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const getApi2JsonGenderGeoFirstNameLastNameCountryIso2Route = createRoute({
  method: 'get',
  path: '/api2/json/genderGeo/{firstName}/{lastName}/{countryIso2}',
  tags: ['personal'],
  summary: 'Infer the likely gender of a name, given a local context (ISO2 country code).',
  operationId: 'genderGeo',
  request: {
    params: z.object({
      firstName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'firstName', required: true, schema: { type: 'string' } },
        }),
      lastName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'lastName', required: true, schema: { type: 'string' } },
        }),
      countryIso2: z
        .string()
        .openapi({
          param: { in: 'path', name: 'countryIso2', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A genderized name.',
      content: { 'application/json': { schema: FirstLastNameGenderedOutSchema } },
    },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const postApi2JsonGenderGeoBatchRoute = createRoute({
  method: 'post',
  path: '/api2/json/genderGeoBatch',
  tags: ['personal'],
  summary:
    'Infer the likely gender of up to 100 names, each given a local context (ISO2 country code).',
  operationId: 'genderGeoBatch',
  request: {
    body: {
      description: 'A list of names, with country code.',
      content: { 'application/json': { schema: BatchFirstLastNameGeoInSchema } },
    },
  },
  responses: {
    200: {
      description: 'A list of genderized names.',
      content: { 'application/json': { schema: BatchFirstLastNameGenderedOutSchema } },
    },
    400: { description: 'Bad request (ex. too many names)' },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const getApi2JsonGenderJapaneseNameJapaneseSurnameJapaneseGivenNameRoute = createRoute({
  method: 'get',
  path: '/api2/json/genderJapaneseName/{japaneseSurname}/{japaneseGivenName}',
  tags: ['japanese'],
  summary: 'Infer the likely gender of a Japanese name in LATIN (Pinyin).',
  operationId: 'genderJapaneseNamePinyin',
  request: {
    params: z.object({
      japaneseSurname: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'japaneseSurname',
            required: true,
            schema: { type: 'string' },
          },
        }),
      japaneseGivenName: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'japaneseGivenName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A genderized name.',
      content: { 'application/json': { schema: FirstLastNameGenderedOutSchema } },
    },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const postApi2JsonGenderJapaneseNameBatchRoute = createRoute({
  method: 'post',
  path: '/api2/json/genderJapaneseNameBatch',
  tags: ['japanese'],
  summary: 'Infer the likely gender of up to 100 Japanese names in LATIN (Pinyin).',
  operationId: 'genderJapaneseNamePinyinBatch',
  request: {
    body: {
      description: 'A list of names, with country code.',
      content: { 'application/json': { schema: BatchFirstLastNameInSchema } },
    },
  },
  responses: {
    200: {
      description: 'A list of genderized names.',
      content: { 'application/json': { schema: BatchFirstLastNameGenderedOutSchema } },
    },
    400: { description: 'Bad request (ex. too many names)' },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const getApi2JsonGenderJapaneseNameFullJapaneseNameRoute = createRoute({
  method: 'get',
  path: '/api2/json/genderJapaneseNameFull/{japaneseName}',
  tags: ['japanese'],
  summary: 'Infer the likely gender of a Japanese full name ex. 王晓明',
  operationId: 'genderJapaneseNameFull',
  request: {
    params: z.object({
      japaneseName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'japaneseName', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A genderized name.',
      content: { 'application/json': { schema: PersonalNameGenderedOutSchema } },
    },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const postApi2JsonGenderJapaneseNameFullBatchRoute = createRoute({
  method: 'post',
  path: '/api2/json/genderJapaneseNameFullBatch',
  tags: ['japanese'],
  summary: 'Infer the likely gender of up to 100 full names',
  operationId: 'genderJapaneseNameFullBatch',
  request: {
    body: {
      description: 'A list of personal names',
      content: { 'application/json': { schema: BatchPersonalNameInSchema } },
    },
  },
  responses: {
    200: {
      description: 'A list of genderized names.',
      content: { 'application/json': { schema: BatchPersonalNameGenderedOutSchema } },
    },
    400: { description: 'Bad request (ex. too many names)' },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const postApi2JsonJapaneseNameGenderKanjiCandidatesBatchRoute = createRoute({
  method: 'post',
  path: '/api2/json/japaneseNameGenderKanjiCandidatesBatch',
  tags: ['japanese'],
  summary:
    'Identify japanese name candidates in KANJI, based on the romanized name (firstName = japaneseGivenName; lastName=japaneseSurname) with KNOWN gender, ex. Yamamoto Sanae',
  operationId: 'japaneseNameGenderKanjiCandidatesBatch',
  request: {
    body: {
      description:
        'A list of personal japanese names in LATIN, firstName = japaneseGivenName; lastName=japaneseSurname and known gender',
      content: { 'application/json': { schema: BatchFirstLastNameGenderInSchema } },
    },
  },
  responses: {
    200: {
      description: 'A list of genderized names.',
      content: { 'application/json': { schema: BatchNameMatchCandidatesOutSchema } },
    },
    400: { description: 'Bad request (ex. too many names)' },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const getApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinRoute =
  createRoute({
    method: 'get',
    path: '/api2/json/japaneseNameKanjiCandidates/{japaneseSurnameLatin}/{japaneseGivenNameLatin}',
    tags: ['japanese'],
    summary:
      'Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae',
    operationId: 'japaneseNameKanjiCandidates',
    request: {
      params: z.object({
        japaneseSurnameLatin: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'japaneseSurnameLatin',
              required: true,
              schema: { type: 'string' },
            },
          }),
        japaneseGivenNameLatin: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'japaneseGivenNameLatin',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'A romanized name.',
        content: { 'application/json': { schema: NameMatchCandidatesOutSchema } },
      },
      401: { description: 'Missing or incorrect API Key' },
      403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
    },
    security: [{ api_key: [] }],
  })

export const getApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinKnownGenderRoute =
  createRoute({
    method: 'get',
    path: '/api2/json/japaneseNameKanjiCandidates/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{knownGender}',
    tags: ['japanese'],
    summary:
      'Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae - and a known gender.',
    operationId: 'japaneseNameKanjiCandidates_1',
    request: {
      params: z.object({
        japaneseSurnameLatin: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'japaneseSurnameLatin',
              required: true,
              schema: { type: 'string' },
            },
          }),
        japaneseGivenNameLatin: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'japaneseGivenNameLatin',
              required: true,
              schema: { type: 'string' },
            },
          }),
        knownGender: z
          .string()
          .openapi({
            param: { in: 'path', name: 'knownGender', required: true, schema: { type: 'string' } },
          }),
      }),
    },
    responses: {
      200: {
        description: 'A romanized name.',
        content: { 'application/json': { schema: NameMatchCandidatesOutSchema } },
      },
      401: { description: 'Missing or incorrect API Key' },
      403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
    },
    security: [{ api_key: [] }],
  })

export const postApi2JsonJapaneseNameKanjiCandidatesBatchRoute = createRoute({
  method: 'post',
  path: '/api2/json/japaneseNameKanjiCandidatesBatch',
  tags: ['japanese'],
  summary:
    'Identify japanese name candidates in KANJI, based on the romanized name (firstName = japaneseGivenName; lastName=japaneseSurname), ex. Yamamoto Sanae',
  operationId: 'japaneseNameKanjiCandidatesBatch',
  request: {
    body: {
      description:
        'A list of personal japanese names in LATIN, firstName = japaneseGivenName; lastName=japaneseSurname',
      content: { 'application/json': { schema: BatchFirstLastNameInSchema } },
    },
  },
  responses: {
    200: {
      description: 'A list of genderized names.',
      content: { 'application/json': { schema: BatchNameMatchCandidatesOutSchema } },
    },
    400: { description: 'Bad request (ex. too many names)' },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const getApi2JsonJapaneseNameLatinCandidatesJapaneseSurnameKanjiJapaneseGivenNameKanjiRoute =
  createRoute({
    method: 'get',
    path: '/api2/json/japaneseNameLatinCandidates/{japaneseSurnameKanji}/{japaneseGivenNameKanji}',
    tags: ['japanese'],
    summary: 'Romanize japanese name, based on the name in Kanji.',
    operationId: 'japaneseNameLatinCandidates',
    request: {
      params: z.object({
        japaneseSurnameKanji: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'japaneseSurnameKanji',
              required: true,
              schema: { type: 'string' },
            },
          }),
        japaneseGivenNameKanji: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'japaneseGivenNameKanji',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'A romanized name.',
        content: { 'application/json': { schema: NameMatchCandidatesOutSchema } },
      },
      401: { description: 'Missing or incorrect API Key' },
      403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
    },
    security: [{ api_key: [] }],
  })

export const postApi2JsonJapaneseNameLatinCandidatesBatchRoute = createRoute({
  method: 'post',
  path: '/api2/json/japaneseNameLatinCandidatesBatch',
  tags: ['japanese'],
  summary: 'Romanize japanese names, based on the name in KANJI',
  operationId: 'japaneseNameLatinCandidatesBatch',
  request: {
    body: {
      description:
        'A list of personal japanese names in KANJI, firstName = japaneseGivenName; lastName=japaneseSurname',
      content: { 'application/json': { schema: BatchFirstLastNameInSchema } },
    },
  },
  responses: {
    200: {
      description: 'A list of genderized names.',
      content: { 'application/json': { schema: BatchNameMatchCandidatesOutSchema } },
    },
    400: { description: 'Bad request (ex. too many names)' },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const getApi2JsonJapaneseNameMatchJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseNameRoute =
  createRoute({
    method: 'get',
    path: '/api2/json/japaneseNameMatch/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{japaneseName}',
    tags: ['japanese'],
    summary:
      'Return a score for matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae',
    operationId: 'japaneseNameMatch',
    request: {
      params: z.object({
        japaneseSurnameLatin: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'japaneseSurnameLatin',
              required: true,
              schema: { type: 'string' },
            },
          }),
        japaneseGivenNameLatin: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'japaneseGivenNameLatin',
              required: true,
              schema: { type: 'string' },
            },
          }),
        japaneseName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'japaneseName', required: true, schema: { type: 'string' } },
          }),
      }),
    },
    responses: {
      200: {
        description: 'A romanized name.',
        content: { 'application/json': { schema: NameMatchedOutSchema } },
      },
      401: { description: 'Missing or incorrect API Key' },
      403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
    },
    security: [{ api_key: [] }],
  })

export const postApi2JsonJapaneseNameMatchBatchRoute = createRoute({
  method: 'post',
  path: '/api2/json/japaneseNameMatchBatch',
  tags: ['japanese'],
  summary:
    'Return a score for matching a list of Japanese names in KANJI ex. 山本 早苗 with romanized names ex. Yamamoto Sanae',
  operationId: 'japaneseNameMatchBatch',
  request: {
    body: {
      description:
        'A list of personal Japanese names in LATIN, firstName = japaneseGivenName; lastName=japaneseSurname',
      content: { 'application/json': { schema: BatchMatchPersonalFirstLastNameInSchema } },
    },
  },
  responses: {
    200: {
      description: 'A list of matched names.',
      content: { 'application/json': { schema: BatchNameMatchedOutSchema } },
    },
    400: { description: 'Bad request (ex. too many names)' },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const getApi2JsonJapaneseNameMatchFeedbackLoopJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseNameRoute =
  createRoute({
    method: 'get',
    path: '/api2/json/japaneseNameMatchFeedbackLoop/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{japaneseName}',
    tags: ['japanese'],
    summary:
      '[CREDITS 1 UNIT] Feedback loop to better perform matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae',
    operationId: 'japaneseNameMatchFeedbackLoop',
    request: {
      params: z.object({
        japaneseSurnameLatin: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'japaneseSurnameLatin',
              required: true,
              schema: { type: 'string' },
            },
          }),
        japaneseGivenNameLatin: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'japaneseGivenNameLatin',
              required: true,
              schema: { type: 'string' },
            },
          }),
        japaneseName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'japaneseName', required: true, schema: { type: 'string' } },
          }),
      }),
    },
    responses: {
      200: {
        description: 'A romanized name.',
        content: { 'application/json': { schema: FeedbackLoopOutSchema } },
      },
      401: { description: 'Missing or incorrect API Key' },
      403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
    },
    security: [{ api_key: [] }],
  })

export const getApi2JsonLearnableSourceLearnableTokenRoute = createRoute({
  method: 'get',
  path: '/api2/json/learnable/{source}/{learnable}/{token}',
  tags: ['admin'],
  summary: 'Activate/deactivate learning from a source.',
  operationId: 'learnable',
  request: {
    params: z.object({
      source: z
        .string()
        .openapi({
          param: {
            description: 'The API Key to set as learnable/non learnable.',
            in: 'path',
            name: 'source',
            required: true,
            schema: { type: 'string' },
          },
        }),
      learnable: z
        .stringbool()
        .openapi({
          param: { in: 'path', name: 'learnable', required: true, schema: { type: 'boolean' } },
        }),
      token: z
        .string()
        .openapi({
          param: { in: 'path', name: 'token', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Set learning from source.',
      content: { 'application/json': { schema: APIKeyOutSchema } },
    },
    401: { description: 'Missing or incorrect API Key' },
  },
})

export const getApi2JsonNameTypeProperNounRoute = createRoute({
  method: 'get',
  path: '/api2/json/nameType/{properNoun}',
  tags: ['general'],
  summary: 'Infer the likely type of a proper noun (personal name, brand name, place name etc.)',
  operationId: 'nameType',
  request: {
    params: z.object({
      properNoun: z
        .string()
        .openapi({
          param: { in: 'path', name: 'properNoun', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A typed name.',
      content: { 'application/json': { schema: ProperNounCategorizedOutSchema } },
    },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const postApi2JsonNameTypeBatchRoute = createRoute({
  method: 'post',
  path: '/api2/json/nameTypeBatch',
  tags: ['general'],
  summary:
    'Infer the likely common type of up to 100 proper nouns (personal name, brand name, place name etc.)',
  operationId: 'nameTypeBatch',
  request: {
    body: {
      description: 'A list of proper names',
      content: { 'application/json': { schema: BatchNameInSchema } },
    },
  },
  responses: {
    200: {
      description: 'A list of commonTypeized names.',
      content: { 'application/json': { schema: BatchProperNounCategorizedOutSchema } },
    },
    400: { description: 'Bad request (ex. too many names)' },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const getApi2JsonNameTypeGeoProperNounCountryIso2Route = createRoute({
  method: 'get',
  path: '/api2/json/nameTypeGeo/{properNoun}/{countryIso2}',
  tags: ['general'],
  summary: 'Infer the likely type of a proper noun (personal name, brand name, place name etc.)',
  operationId: 'nameTypeGeo',
  request: {
    params: z.object({
      properNoun: z
        .string()
        .openapi({
          param: { in: 'path', name: 'properNoun', required: true, schema: { type: 'string' } },
        }),
      countryIso2: z
        .string()
        .openapi({
          param: { in: 'path', name: 'countryIso2', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A typed name.',
      content: { 'application/json': { schema: ProperNounCategorizedOutSchema } },
    },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const postApi2JsonNameTypeGeoBatchRoute = createRoute({
  method: 'post',
  path: '/api2/json/nameTypeGeoBatch',
  tags: ['general'],
  summary:
    'Infer the likely common type of up to 100 proper nouns (personal name, brand name, place name etc.)',
  operationId: 'nameTypeGeoBatch',
  request: {
    body: {
      description: 'A list of proper names',
      content: { 'application/json': { schema: BatchNameGeoInSchema } },
    },
  },
  responses: {
    200: {
      description: 'A list of commonTypeized names.',
      content: { 'application/json': { schema: BatchProperNounCategorizedOutSchema } },
    },
    400: { description: 'Bad request (ex. too many names)' },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const getApi2JsonOriginFirstNameLastNameRoute = createRoute({
  method: 'get',
  path: '/api2/json/origin/{firstName}/{lastName}',
  tags: ['personal'],
  summary:
    "[USES 10 UNITS PER NAME] Infer the likely country of origin of a personal name. Assumes names as they are in the country of origin. For US, CA, AU, NZ and other melting-pots : use 'diaspora' instead.",
  operationId: 'origin',
  request: {
    params: z.object({
      firstName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'firstName', required: true, schema: { type: 'string' } },
        }),
      lastName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'lastName', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A origined name.',
      content: { 'application/json': { schema: FirstLastNameOriginedOutSchema } },
    },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const postApi2JsonOriginBatchRoute = createRoute({
  method: 'post',
  path: '/api2/json/originBatch',
  tags: ['personal'],
  summary:
    '[USES 10 UNITS PER NAME] Infer the likely country of origin of up to 100 names, detecting automatically the cultural context.',
  operationId: 'originBatch',
  request: {
    body: {
      description: 'A list of personal names',
      content: { 'application/json': { schema: BatchFirstLastNameInSchema } },
    },
  },
  responses: {
    200: {
      description: 'A list of genderized names.',
      content: { 'application/json': { schema: BatchFirstLastNameOriginedOutSchema } },
    },
    400: { description: 'Bad request (ex. too many names)' },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const getApi2JsonParseChineseNameChineseNameRoute = createRoute({
  method: 'get',
  path: '/api2/json/parseChineseName/{chineseName}',
  tags: ['chinese'],
  summary:
    'Infer the likely first/last name structure of a name, ex. 王晓明 -> 王(surname) 晓明(given name)',
  operationId: 'parseChineseName',
  request: {
    params: z.object({
      chineseName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'chineseName', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A origined name.',
      content: { 'application/json': { schema: PersonalNameParsedOutSchema } },
    },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const postApi2JsonParseChineseNameBatchRoute = createRoute({
  method: 'post',
  path: '/api2/json/parseChineseNameBatch',
  tags: ['chinese'],
  summary:
    'Infer the likely first/last name structure of a name, ex. 王晓明 -> 王(surname) 晓明(given name).',
  operationId: 'parseChineseNameBatch',
  request: {
    body: {
      description: 'A list of personal names',
      content: { 'application/json': { schema: BatchPersonalNameInSchema } },
    },
  },
  responses: {
    200: {
      description: 'A list of parsed names.',
      content: { 'application/json': { schema: BatchPersonalNameParsedOutSchema } },
    },
    400: { description: 'Bad request (ex. too many names)' },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const getApi2JsonParseJapaneseNameJapaneseNameRoute = createRoute({
  method: 'get',
  path: '/api2/json/parseJapaneseName/{japaneseName}',
  tags: ['japanese'],
  summary: 'Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae',
  operationId: 'parseJapaneseName',
  request: {
    params: z.object({
      japaneseName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'japaneseName', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A origined name.',
      content: { 'application/json': { schema: PersonalNameParsedOutSchema } },
    },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const postApi2JsonParseJapaneseNameBatchRoute = createRoute({
  method: 'post',
  path: '/api2/json/parseJapaneseNameBatch',
  tags: ['japanese'],
  summary: 'Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae ',
  operationId: 'parseJapaneseNameBatch',
  request: {
    body: {
      description: 'A list of personal names',
      content: { 'application/json': { schema: BatchPersonalNameInSchema } },
    },
  },
  responses: {
    200: {
      description: 'A list of parsed names.',
      content: { 'application/json': { schema: BatchPersonalNameParsedOutSchema } },
    },
    400: { description: 'Bad request (ex. too many names)' },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const getApi2JsonParseNameNameFullRoute = createRoute({
  method: 'get',
  path: '/api2/json/parseName/{nameFull}',
  tags: ['personal'],
  summary:
    'Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. ',
  operationId: 'parseName',
  request: {
    params: z.object({
      nameFull: z
        .string()
        .openapi({
          param: { in: 'path', name: 'nameFull', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A origined name.',
      content: { 'application/json': { schema: PersonalNameParsedOutSchema } },
    },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const getApi2JsonParseNameNameFullCountryIso2Route = createRoute({
  method: 'get',
  path: '/api2/json/parseName/{nameFull}/{countryIso2}',
  tags: ['personal'],
  summary:
    'Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. For better accuracy, provide a geographic context.',
  operationId: 'parseNameGeo',
  request: {
    params: z.object({
      nameFull: z
        .string()
        .openapi({
          param: { in: 'path', name: 'nameFull', required: true, schema: { type: 'string' } },
        }),
      countryIso2: z
        .string()
        .openapi({
          param: { in: 'path', name: 'countryIso2', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A origined name.',
      content: { 'application/json': { schema: PersonalNameParsedOutSchema } },
    },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const postApi2JsonParseNameBatchRoute = createRoute({
  method: 'post',
  path: '/api2/json/parseNameBatch',
  tags: ['personal'],
  summary:
    'Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John.',
  operationId: 'parseNameBatch',
  request: {
    body: {
      description: 'A list of personal names',
      content: { 'application/json': { schema: BatchPersonalNameInSchema } },
    },
  },
  responses: {
    200: {
      description: 'A list of parsed names.',
      content: { 'application/json': { schema: BatchPersonalNameParsedOutSchema } },
    },
    400: { description: 'Bad request (ex. too many names)' },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const postApi2JsonParseNameGeoBatchRoute = createRoute({
  method: 'post',
  path: '/api2/json/parseNameGeoBatch',
  tags: ['personal'],
  summary:
    'Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. Giving a local context improves precision. ',
  operationId: 'parseNameGeoBatch',
  request: {
    body: {
      description: 'A list of personal names',
      content: { 'application/json': { schema: BatchPersonalNameGeoInSchema } },
    },
  },
  responses: {
    200: {
      description: 'A list of parsed names.',
      content: { 'application/json': { schema: BatchPersonalNameParsedOutSchema } },
    },
    400: { description: 'Bad request (ex. too many names)' },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const getApi2JsonPhoneCodeFirstNameLastNamePhoneNumberRoute = createRoute({
  method: 'get',
  path: '/api2/json/phoneCode/{firstName}/{lastName}/{phoneNumber}',
  tags: ['social'],
  summary:
    '[USES 11 UNITS PER NAME] Infer the likely country and phone prefix, given a personal name and formatted / unformatted phone number.',
  operationId: 'phoneCode',
  request: {
    params: z.object({
      firstName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'firstName', required: true, schema: { type: 'string' } },
        }),
      lastName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'lastName', required: true, schema: { type: 'string' } },
        }),
      phoneNumber: z
        .string()
        .openapi({
          param: { in: 'path', name: 'phoneNumber', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A name with country and phone code.',
      content: { 'application/json': { schema: FirstLastNamePhoneCodedOutSchema } },
    },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const postApi2JsonPhoneCodeBatchRoute = createRoute({
  method: 'post',
  path: '/api2/json/phoneCodeBatch',
  tags: ['social'],
  summary:
    '[USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, detecting automatically the local context given a name and formatted / unformatted phone number.',
  operationId: 'phoneCodeBatch',
  request: {
    body: {
      description: 'A list of personal names',
      content: { 'application/json': { schema: BatchFirstLastNamePhoneNumberInSchema } },
    },
  },
  responses: {
    200: {
      description: 'A list of genderized names.',
      content: { 'application/json': { schema: BatchFirstLastNamePhoneCodedOutSchema } },
    },
    400: { description: 'Bad request (ex. too many names)' },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const getApi2JsonPhoneCodeGeoFirstNameLastNamePhoneNumberCountryIso2Route = createRoute({
  method: 'get',
  path: '/api2/json/phoneCodeGeo/{firstName}/{lastName}/{phoneNumber}/{countryIso2}',
  tags: ['social'],
  summary:
    '[USES 11 UNITS PER NAME] Infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).',
  operationId: 'phoneCodeGeo',
  request: {
    params: z.object({
      firstName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'firstName', required: true, schema: { type: 'string' } },
        }),
      lastName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'lastName', required: true, schema: { type: 'string' } },
        }),
      phoneNumber: z
        .string()
        .openapi({
          param: { in: 'path', name: 'phoneNumber', required: true, schema: { type: 'string' } },
        }),
      countryIso2: z
        .string()
        .openapi({
          param: { in: 'path', name: 'countryIso2', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A name with country and phone code.',
      content: { 'application/json': { schema: FirstLastNamePhoneCodedOutSchema } },
    },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const postApi2JsonPhoneCodeGeoBatchRoute = createRoute({
  method: 'post',
  path: '/api2/json/phoneCodeGeoBatch',
  tags: ['social'],
  summary:
    '[USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, with a local context (ISO2 country of residence).',
  operationId: 'phoneCodeGeoBatch',
  request: {
    body: {
      description: 'A list of personal names',
      content: { 'application/json': { schema: BatchFirstLastNamePhoneNumberGeoInSchema } },
    },
  },
  responses: {
    200: {
      description: 'A list of genderized names.',
      content: { 'application/json': { schema: BatchFirstLastNamePhoneCodedOutSchema } },
    },
    400: { description: 'Bad request (ex. too many names)' },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const getApi2JsonPhoneCodeGeoFeedbackLoopFirstNameLastNamePhoneNumberPhoneNumberE164CountryIso2Route =
  createRoute({
    method: 'get',
    path: '/api2/json/phoneCodeGeoFeedbackLoop/{firstName}/{lastName}/{phoneNumber}/{phoneNumberE164}/{countryIso2}',
    tags: ['social'],
    summary:
      '[CREDITS 1 UNIT] Feedback loop to better infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).',
    operationId: 'phoneCodeGeoFeedbackLoop',
    request: {
      params: z.object({
        firstName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'firstName', required: true, schema: { type: 'string' } },
          }),
        lastName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'lastName', required: true, schema: { type: 'string' } },
          }),
        phoneNumber: z
          .string()
          .openapi({
            param: { in: 'path', name: 'phoneNumber', required: true, schema: { type: 'string' } },
          }),
        phoneNumberE164: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'phoneNumberE164',
              required: true,
              schema: { type: 'string' },
            },
          }),
        countryIso2: z
          .string()
          .openapi({
            param: { in: 'path', name: 'countryIso2', required: true, schema: { type: 'string' } },
          }),
      }),
    },
    responses: {
      200: {
        description: 'A name with country and phone code.',
        content: { 'application/json': { schema: FirstLastNamePhoneCodedOutSchema } },
      },
      401: { description: 'Missing or incorrect API Key' },
      403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
    },
    security: [{ api_key: [] }],
  })

export const getApi2JsonPinyinChineseNameChineseNameRoute = createRoute({
  method: 'get',
  path: '/api2/json/pinyinChineseName/{chineseName}',
  tags: ['chinese'],
  summary:
    'Romanize the Chinese name to Pinyin, ex. 王晓明 -> Wang (surname) Xiaoming (given name)',
  operationId: 'pinyinChineseName',
  request: {
    params: z.object({
      chineseName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'chineseName', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A pinyin name.',
      content: { 'application/json': { schema: PersonalNameParsedOutSchema } },
    },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const postApi2JsonPinyinChineseNameBatchRoute = createRoute({
  method: 'post',
  path: '/api2/json/pinyinChineseNameBatch',
  tags: ['chinese'],
  summary:
    'Romanize a list of Chinese name to Pinyin, ex. 王晓明 -> Wang (surname) Xiaoming (given name).',
  operationId: 'pinyinChineseNameBatch',
  request: {
    body: {
      description: 'A list of Chinese names',
      content: { 'application/json': { schema: BatchPersonalNameInSchema } },
    },
  },
  responses: {
    200: {
      description: 'A list of Pinyin names.',
      content: { 'application/json': { schema: BatchPersonalNameParsedOutSchema } },
    },
    400: { description: 'Bad request (ex. too many names)' },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const getApi2JsonRegionsRoute = createRoute({
  method: 'get',
  path: '/api2/json/regions',
  tags: ['admin'],
  summary: 'Print basic source statistics.',
  operationId: 'regions',
  responses: {
    200: {
      description: 'List of countries and regions.',
      content: { 'application/json': { schema: RegionOutSchema } },
    },
    401: { description: 'Missing or incorrect API Key' },
  },
})

export const getApi2JsonReligionFullCountryIso2SubDivisionIso31662PersonalNameFullRoute =
  createRoute({
    method: 'get',
    path: '/api2/json/religionFull/{countryIso2}/{subDivisionIso31662}/{personalNameFull}',
    tags: ['personal'],
    summary:
      '[USES 10 UNITS PER NAME] Infer the likely religion of a personal full name. NB: only for INDIA (as of current version).',
    operationId: 'religionFull',
    request: {
      params: z.object({
        countryIso2: z
          .string()
          .openapi({
            param: { in: 'path', name: 'countryIso2', required: true, schema: { type: 'string' } },
          }),
        subDivisionIso31662: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subDivisionIso31662',
              required: true,
              schema: { type: 'string' },
            },
          }),
        personalNameFull: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'personalNameFull',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'A religion-coded name.',
        content: { 'application/json': { schema: PersonalNameReligionedOutSchema } },
      },
      401: { description: 'Missing or incorrect API Key' },
      403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
    },
    security: [{ api_key: [] }],
  })

export const postApi2JsonReligionFullBatchRoute = createRoute({
  method: 'post',
  path: '/api2/json/religionFullBatch',
  tags: ['personal'],
  summary:
    '[USES 10 UNITS PER NAME] Infer the likely religion of up to 100 personal full names. NB: only for India as of currently.',
  operationId: 'religionFullBatch',
  request: {
    body: {
      description: 'A list of personal names',
      content: { 'application/json': { schema: BatchPersonalNameGeoSubdivisionInSchema } },
    },
  },
  responses: {
    200: {
      description: 'A list of religion-coded names.',
      content: { 'application/json': { schema: BatchPersonalNameReligionedOutSchema } },
    },
    400: { description: 'Bad request (ex. too many names)' },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const getApi2JsonReligionIndianFullSubDivisionIso31662PersonalNameFullRoute = createRoute({
  method: 'get',
  path: '/api2/json/religionIndianFull/{subDivisionIso31662}/{personalNameFull}',
  tags: ['indian'],
  summary:
    '[USES 10 UNITS PER NAME] Infer the likely religion of a personal Indian full name, provided the Indian state or Union territory (NB/ this can be inferred using the subclassification endpoint).',
  operationId: 'religion',
  request: {
    params: z.object({
      subDivisionIso31662: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'subDivisionIso31662',
            required: true,
            schema: { type: 'string' },
          },
        }),
      personalNameFull: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'personalNameFull',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A religion-coded name.',
      content: { 'application/json': { schema: PersonalNameReligionedOutSchema } },
    },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const postApi2JsonReligionIndianFullBatchRoute = createRoute({
  method: 'post',
  path: '/api2/json/religionIndianFullBatch',
  tags: ['indian'],
  summary:
    '[USES 10 UNITS PER NAME] Infer the likely religion of up to 100 personal full Indian names, provided the subclassification at State or Union territory level (NB/ can be inferred using the subclassification endpoint).',
  operationId: 'religionIndianFullBatch',
  request: {
    body: {
      description: 'A list of personal names',
      content: { 'application/json': { schema: BatchPersonalNameSubdivisionInSchema } },
    },
  },
  responses: {
    200: {
      description: 'A list of religion-coded names.',
      content: { 'application/json': { schema: BatchPersonalNameReligionedOutSchema } },
    },
    400: { description: 'Bad request (ex. too many names)' },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const getApi2JsonSoftwareVersionRoute = createRoute({
  method: 'get',
  path: '/api2/json/softwareVersion',
  tags: ['admin'],
  summary: 'Get the current software version',
  operationId: 'softwareVersion',
  responses: {
    200: {
      description: 'The current software version',
      content: { 'application/json': { schema: SoftwareVersionOutSchema } },
    },
    401: { description: 'Missing or incorrect token' },
  },
})

export const getApi2JsonSubclassificationCountryIso2FirstNameLastNameRoute = createRoute({
  method: 'get',
  path: '/api2/json/subclassification/{countryIso2}/{firstName}/{lastName}',
  tags: ['personal'],
  summary:
    "[USES 10 UNITS PER NAME] Infer the likely origin of a name at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code 'IN').",
  operationId: 'subclassification',
  request: {
    params: z.object({
      countryIso2: z
        .string()
        .openapi({
          param: { in: 'path', name: 'countryIso2', required: true, schema: { type: 'string' } },
        }),
      firstName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'firstName', required: true, schema: { type: 'string' } },
        }),
      lastName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'lastName', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A classified name at a sub-country level.',
      content: { 'application/json': { schema: FirstLastNameGeoSubclassificationOutSchema } },
    },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const postApi2JsonSubclassificationBatchRoute = createRoute({
  method: 'post',
  path: '/api2/json/subclassificationBatch',
  tags: ['personal'],
  summary:
    "[USES 10 UNITS PER NAME] Infer the likely origin of a list of up to 100 names at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code 'IN').",
  operationId: 'subclassificationBatch',
  request: {
    body: {
      description: 'A list of personal names',
      content: { 'application/json': { schema: BatchFirstLastNameGeoInSchema } },
    },
  },
  responses: {
    200: {
      description: 'A list of classified names at a sub-country level.',
      content: { 'application/json': { schema: BatchFirstLastNameGeoSubclassificationOutSchema } },
    },
    400: { description: 'Bad request (ex. too many names)' },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const getApi2JsonSubclassificationIndianFirstNameLastNameRoute = createRoute({
  method: 'get',
  path: '/api2/json/subclassificationIndian/{firstName}/{lastName}',
  tags: ['indian'],
  summary:
    '[USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on the name.',
  operationId: 'subclassificationIndian',
  request: {
    params: z.object({
      firstName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'firstName', required: true, schema: { type: 'string' } },
        }),
      lastName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'lastName', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A classified name at a sub-country level.',
      content: { 'application/json': { schema: FirstLastNameGeoSubclassificationOutSchema } },
    },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const postApi2JsonSubclassificationIndianBatchRoute = createRoute({
  method: 'post',
  path: '/api2/json/subclassificationIndianBatch',
  tags: ['indian'],
  summary:
    '[USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on a list of up to 100 names.',
  operationId: 'subclassificationIndianBatch',
  request: {
    body: {
      description: 'A list of personal names',
      content: { 'application/json': { schema: BatchFirstLastNameGeoInSchema } },
    },
  },
  responses: {
    200: {
      description: 'A list of classified names at a subcountry level.',
      content: { 'application/json': { schema: BatchFirstLastNameGeoSubclassificationOutSchema } },
    },
    400: { description: 'Bad request (ex. too many names)' },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const getApi2JsonTaxonomyClassesClassifierNameRoute = createRoute({
  method: 'get',
  path: '/api2/json/taxonomyClasses/{classifierName}',
  tags: ['admin'],
  summary: 'Print the taxonomy classes valid for the given classifier.',
  operationId: 'taxonomyClasses',
  request: {
    params: z.object({
      classifierName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'classifierName', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Available plans',
      content: { 'application/json': { schema: APIClassifierTaxonomyOutSchema } },
    },
    401: { description: 'Missing or incorrect token' },
  },
})

export const getApi2JsonUsRaceEthnicityFirstNameLastNameRoute = createRoute({
  method: 'get',
  path: '/api2/json/usRaceEthnicity/{firstName}/{lastName}',
  tags: ['personal'],
  summary:
    "[USES 10 UNITS PER NAME] Infer a US resident's likely race/ethnicity according to US Census taxonomy W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).",
  operationId: 'usRaceEthnicity',
  request: {
    params: z.object({
      firstName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'firstName', required: true, schema: { type: 'string' } },
        }),
      lastName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'lastName', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description:
        "a US resident's likely race/ethnicity : W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino), AI_AN (American Indian or Alaskan Native*) and PI (Pacific Islander*). *optionally",
      content: { 'application/json': { schema: FirstLastNameUSRaceEthnicityOutSchema } },
    },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const postApi2JsonUsRaceEthnicityBatchRoute = createRoute({
  method: 'post',
  path: '/api2/json/usRaceEthnicityBatch',
  tags: ['personal'],
  summary:
    "[USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).",
  operationId: 'usRaceEthnicityBatch',
  request: {
    body: {
      description: 'A list of personal names',
      content: { 'application/json': { schema: BatchFirstLastNameGeoInSchema } },
    },
  },
  responses: {
    200: {
      description:
        "A list of US resident's likely race/ethnicity. W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino), AI_AN (American Indian or Alaskan Native*) and PI (Pacific Islander*). *optionally",
      content: { 'application/json': { schema: BatchFirstLastNameUSRaceEthnicityOutSchema } },
    },
    400: { description: 'Bad request (ex. too many names)' },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const getApi2JsonUsRaceEthnicityZIP5FirstNameLastNameZip5CodeRoute = createRoute({
  method: 'get',
  path: '/api2/json/usRaceEthnicityZIP5/{firstName}/{lastName}/{zip5Code}',
  tags: ['personal'],
  summary:
    "[USES 10 UNITS PER NAME] Infer a US resident's likely race/ethnicity according to US Census taxonomy, using (optional) ZIP5 code info. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).",
  operationId: 'usRaceEthnicityZIP5',
  request: {
    params: z.object({
      firstName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'firstName', required: true, schema: { type: 'string' } },
        }),
      lastName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'lastName', required: true, schema: { type: 'string' } },
        }),
      zip5Code: z
        .string()
        .openapi({
          param: { in: 'path', name: 'zip5Code', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description:
        "a US resident's likely race/ethnicity : W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino), AI_AN (American Indian or Alaskan Native*) and PI (Pacific Islander*). *optionally",
      content: { 'application/json': { schema: FirstLastNameUSRaceEthnicityOutSchema } },
    },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})

export const postApi2JsonUsZipRaceEthnicityBatchRoute = createRoute({
  method: 'post',
  path: '/api2/json/usZipRaceEthnicityBatch',
  tags: ['personal'],
  summary:
    "[USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy, with (optional) ZIP code. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).",
  operationId: 'usZipRaceEthnicityBatch',
  request: {
    body: {
      description: 'A list of personal names',
      content: { 'application/json': { schema: BatchFirstLastNameGeoZippedInSchema } },
    },
  },
  responses: {
    200: {
      description:
        "A list of US resident's likely race/ethnicity. W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino), AI_AN (American Indian or Alaskan Native*) and PI (Pacific Islander*). *optionally",
      content: { 'application/json': { schema: BatchFirstLastNameUSRaceEthnicityOutSchema } },
    },
    400: { description: 'Bad request (ex. too many names)' },
    401: { description: 'Missing or incorrect API Key' },
    403: { description: 'Email not Verified, or API Limit Reached, or API Key Disabled' },
  },
  security: [{ api_key: [] }],
})
