import { createRoute, z } from '@hono/zod-openapi'

const AbTestCreateRequestVNextSchema = z
  .object({
    contentId: z.string().openapi({ description: 'ID of the object to test.', example: null }),
    variationName: z
      .string()
      .openapi({ description: 'Name of the variation to be created.', example: null }),
  })
  .openapi({ required: ['contentId', 'variationName'], example: null })
  .openapi('AbTestCreateRequestVNext')

const EmailStatisticsDataSchema = z
  .object({
    counters: z
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
          .openapi({ type: 'integer', format: 'int64', example: null }),
      )
      .openapi({
        description: 'Counters like number of `sent`, `open` or `delivered`.',
        example: null,
      }),
    deviceBreakdown: z
      .record(
        z.string(),
        z
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
              .openapi({ type: 'integer', format: 'int64', example: null }),
          )
          .openapi({ example: null }),
      )
      .openapi({ description: 'Statistics by device.', example: null }),
    qualifierStats: z
      .record(
        z.string(),
        z
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
              .openapi({ type: 'integer', format: 'int64', example: null }),
          )
          .openapi({ example: null }),
      )
      .openapi({ description: 'Number of emails that were dropped and bounced.', example: null }),
    ratios: z
      .record(z.string(), z.number().openapi({ example: null }))
      .openapi({ description: 'Ratios like `openratio` or `clickratio`', example: null }),
  })
  .openapi({ required: ['counters', 'deviceBreakdown', 'qualifierStats', 'ratios'], example: null })
  .openapi('EmailStatisticsData')

const AggregateEmailStatisticsSchema = z
  .object({
    aggregate: EmailStatisticsDataSchema,
    campaignAggregations: z
      .record(z.string(), EmailStatisticsDataSchema)
      .openapi({ description: 'The aggregated statistics per campaign.', example: null }),
    emails: z
      .array(
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
          .openapi({ type: 'integer', format: 'int64', example: null }),
      )
      .openapi({
        description: 'List of email IDs that were sent during the time span.',
        example: null,
      }),
  })
  .openapi({ required: ['aggregate', 'campaignAggregations', 'emails'], example: null })
  .openapi('AggregateEmailStatistics')

const NextPageSchema = z
  .object({
    after: z
      .string()
      .openapi({
        description:
          'The cursor token value to get the next set of results. Use this value as query parameter (&after=...) to obtain the next page.',
        example: null,
      }),
    link: z
      .string()
      .exactOptional()
      .openapi({ description: 'The link to the next page.', example: null }),
  })
  .openapi({
    required: ['after'],
    description:
      'Specifies the paging information needed to retrieve the next set of results in a paginated API response',
    example: null,
  })
  .openapi('NextPage')

const PreviousPageSchema = z
  .object({
    before: z
      .string()
      .openapi({
        description:
          'The cursor token value to get the previous set of results. Use this value as query parameter (&before=...) to obtain the previous page.',
        example: null,
      }),
    link: z
      .string()
      .exactOptional()
      .openapi({ description: 'The link to the previous page.', example: null }),
  })
  .openapi({
    required: ['before'],
    description:
      'specifies the paging information needed to retrieve the previous set of results in a paginated API response',
    example: null,
  })
  .openapi('PreviousPage')

const PagingSchema = z
  .object({ next: NextPageSchema.exactOptional(), prev: PreviousPageSchema.exactOptional() })
  .openapi({
    description:
      'Represents the pagination information for navigating through a list of results in the API. It provides details on how to access the previous or next set of results.',
    example: null,
    required: [],
  })
  .openapi('Paging')

const IntervalSchema = z
  .object({
    end: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The end timestamp of the interval, in ISO8601 format.',
        example: null,
      }),
    start: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The start timestamp of the interval, in ISO8601 format.',
        example: null,
      }),
  })
  .openapi({ required: ['end', 'start'], example: null })
  .openapi('Interval')

const EmailStatisticIntervalSchema = z
  .object({ aggregations: EmailStatisticsDataSchema, interval: IntervalSchema })
  .openapi({ required: ['aggregations', 'interval'], example: null })
  .openapi('EmailStatisticInterval')

const CollectionResponseWithTotalEmailStatisticIntervalSchema = z
  .object({
    paging: PagingSchema.exactOptional(),
    results: z
      .array(EmailStatisticIntervalSchema)
      .openapi({
        description:
          'An array of EmailStatisticInterval objects, each representing statistics for a specific time interval.',
        example: null,
      }),
    total: z
      .int32()
      .openapi({
        description:
          'An integer representing the total number of email statistic intervals available.',
        example: null,
      }),
  })
  .openapi({ required: ['results', 'total'], example: null })
  .openapi('CollectionResponseWithTotalEmailStatisticInterval')

const SmartEmailFieldSchema = z.object({}).openapi({ example: null }).openapi('SmartEmailField')

const PublicFontStyleSchema = z
  .object({
    bold: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A boolean indicating whether the text should be bold.',
        example: null,
      }),
    color: z
      .string()
      .exactOptional()
      .openapi({ description: 'The color of the font, represented as a string.', example: null }),
    font: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The type of font to be used, represented as a string.',
        example: null,
      }),
    italic: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A boolean indicating whether the text should be italicized.',
        example: null,
      }),
    size: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The size of the font, represented as an integer.', example: null }),
    underline: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A boolean indicating whether the text should be underlined.',
        example: null,
      }),
  })
  .openapi({ example: null, required: [] })
  .openapi('PublicFontStyle')

const PublicButtonStyleSettingsSchema = z
  .object({
    backgroundColor: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'An object representing the background color of the button.',
        example: null,
      }),
    cornerRadius: z
      .int32()
      .exactOptional()
      .openapi({
        description: "An integer specifying the radius of the button's corners.",
        example: null,
      }),
    fontStyle: PublicFontStyleSchema.exactOptional(),
  })
  .openapi({ example: null, required: [] })
  .openapi('PublicButtonStyleSettings')

const PublicDividerStyleSettingsSchema = z
  .object({
    color: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'An object representing the color settings of the divider.',
        example: null,
      }),
    height: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the height of the divider.',
        example: null,
      }),
    lineType: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string indicating the type of line used for the divider.',
        example: null,
      }),
  })
  .openapi({ example: null, required: [] })
  .openapi('PublicDividerStyleSettings')

const PublicEmailStyleSettingsSchema = z
  .object({
    backgroundColor: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The background color of the email, represented as a string.',
        example: null,
      }),
    backgroundImage: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The URL of the background image used in the email.',
        example: null,
      }),
    backgroundImageType: z
      .enum(['REPEAT', 'SINGLE', 'STRETCH'])
      .exactOptional()
      .openapi({
        description:
          "The type of background image display, with valid values including 'SINGLE', 'STRETCH', and 'REPEAT'.",
        example: null,
      }),
    bodyBorderColor: z
      .string()
      .exactOptional()
      .openapi({ description: 'The color of the border around the email body.', example: null }),
    bodyBorderColorChoice: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the choice of border color for the email body.',
        example: null,
      }),
    bodyBorderWidth: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The width of the border around the email body, represented as a number.',
        example: null,
      }),
    bodyColor: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The color of the email body, represented as a string.',
        example: null,
      }),
    buttonStyleSettings: PublicButtonStyleSettingsSchema.exactOptional(),
    colorPickerFavorite1: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A favorite color option available in the color picker, represented as a string.',
        example: null,
      }),
    colorPickerFavorite2: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A favorite color option available in the color picker, represented as a string.',
        example: null,
      }),
    colorPickerFavorite3: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A favorite color option available in the color picker, represented as a string.',
        example: null,
      }),
    colorPickerFavorite4: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A favorite color option available in the color picker, represented as a string.',
        example: null,
      }),
    colorPickerFavorite5: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A favorite color option available in the color picker, represented as a string.',
        example: null,
      }),
    colorPickerFavorite6: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A favorite color option available in the color picker, represented as a string.',
        example: null,
      }),
    dividerStyleSettings: PublicDividerStyleSettingsSchema.exactOptional(),
    emailBodyPadding: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The padding applied to the email body, represented as a string.',
        example: null,
      }),
    emailBodyWidth: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The width of the email body, represented as a string.',
        example: null,
      }),
    headingOneFont: PublicFontStyleSchema.exactOptional(),
    headingTwoFont: PublicFontStyleSchema.exactOptional(),
    linksFont: PublicFontStyleSchema.exactOptional(),
    primaryAccentColor: z
      .string()
      .exactOptional()
      .openapi({ description: 'The primary accent color used in the email.', example: null }),
    primaryFont: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The primary font used in the email, represented as a string.',
        example: null,
      }),
    primaryFontColor: z
      .string()
      .exactOptional()
      .openapi({ description: 'The color of the primary font.', example: null }),
    primaryFontLineHeight: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The line height of the primary font, represented as a string.',
        example: null,
      }),
    primaryFontSize: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The size of the primary font, represented as a number.',
        example: null,
      }),
    secondaryAccentColor: z
      .string()
      .exactOptional()
      .openapi({ description: 'The secondary accent color used in the email.', example: null }),
    secondaryFont: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The secondary font used in the email, represented as a string.',
        example: null,
      }),
    secondaryFontColor: z
      .string()
      .exactOptional()
      .openapi({ description: 'The color of the secondary font.', example: null }),
    secondaryFontLineHeight: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The line height of the secondary font, represented as a string.',
        example: null,
      }),
    secondaryFontSize: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The size of the secondary font, represented as a number.',
        example: null,
      }),
  })
  .openapi({ example: null, required: [] })
  .openapi('PublicEmailStyleSettings')

const PublicEmailContentSchema = z
  .object({
    flexAreas: z
      .record(z.string(), z.object({}).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'An object containing flexible area configurations, where each key is an area identifier and the value is an object with area properties.',
        example: null,
      }),
    plainTextVersion: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string containing the plain text version of the email content.',
        example: null,
      }),
    smartFields: z
      .record(z.string(), SmartEmailFieldSchema)
      .exactOptional()
      .openapi({
        description:
          'An object containing smart field configurations, where each key is a field identifier and the value is a SmartEmailField object.',
        example: null,
      }),
    styleSettings: PublicEmailStyleSettingsSchema.exactOptional(),
    templatePath: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the path to the email template used for this email.',
        example: null,
      }),
    themeSettingsValues: z
      .record(z.string(), z.object({}).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'An object containing theme settings values, where each key is a setting identifier and the value is an object with setting properties.',
        example: null,
      }),
    widgetContainers: z
      .record(z.string(), z.object({}).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'An object containing widget container configurations, where each key is a container identifier and the value is an object with container properties.',
        example: null,
      }),
    widgets: z
      .record(z.string(), z.object({}).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'An object containing widget configurations, where each key is a widget identifier and the value is an object with widget properties.',
        example: null,
      }),
  })
  .openapi({ example: null, required: [] })
  .openapi('PublicEmailContent')

const PublicEmailFromDetailsSchema = z
  .object({
    customReplyTo: z
      .string()
      .exactOptional()
      .openapi({ description: 'The reply to recipients will see.', example: null }),
    fromName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name recipients will see.', example: null }),
    replyTo: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The from address and reply to email address (if no customReplyTo defined) recipients will see.',
        example: null,
      }),
  })
  .openapi({ example: null, required: [] })
  .openapi('PublicEmailFromDetails')

const PublicRssEmailDetailsSchema = z
  .object({
    blogEmailType: z
      .string()
      .exactOptional()
      .openapi({ description: 'A string representing the type of blog email.', example: null }),
    blogImageMaxWidth: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The maximum width for images in the blog, specified as an integer.',
        example: null,
      }),
    blogLayout: z
      .enum(['FULL_POST', 'SUMMARY_NO_FEATURED_IMAGE', 'SUMMARY_WITH_FEATURED_IMAGE'])
      .exactOptional()
      .openapi({
        description:
          "The layout of the blog in the email. Valid values include 'SUMMARY_NO_FEATURED_IMAGE', 'SUMMARY_WITH_FEATURED_IMAGE', and 'FULL_POST'.",
        example: null,
      }),
    hubspotBlogId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the HubSpot blog associated with the RSS email. It is a string.',
        example: null,
      }),
    maxEntries: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of entries to include from the RSS feed. It is an integer value.',
        example: null,
      }),
    rssEntryTemplate: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the template used for each RSS entry in the email.',
        example: null,
      }),
    timing: z
      .record(z.string(), z.object({}).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'An object representing the timing configuration for the RSS email. The specific properties of this object are not detailed in the specification.',
        example: null,
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The URL of the RSS feed to be used in the email. It is a string.',
        example: null,
      }),
    useHeadlineAsSubject: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'A boolean indicating whether to use the headline of the RSS entry as the subject of the email.',
        example: null,
      }),
  })
  .openapi({ example: null, required: [] })
  .openapi('PublicRssEmailDetails')

const PublicEmailSubscriptionDetailsSchema = z
  .object({
    officeLocationId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the selected office location.', example: null }),
    preferencesGroupId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The identifier for the preferences group associated with the subscription. It is a string value.',
        example: null,
      }),
    subscriptionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the subscription.', example: null }),
    subscriptionName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the email subscription. It is a string value.',
        example: null,
      }),
  })
  .openapi({ example: null, required: [] })
  .openapi('PublicEmailSubscriptionDetails')

const PublicEmailTestingDetailsSchema = z
  .object({
    abSampleSizeDefault: z
      .enum([
        'automated_loser_variant',
        'automated_master',
        'automated_variant',
        'loser_variant',
        'mab_master',
        'mab_variant',
        'master',
        'variant',
      ])
      .exactOptional()
      .openapi({
        description:
          'Version of the email that should be sent if there are too few recipients to conduct an AB test.',
        example: null,
      }),
    abSamplingDefault: z
      .enum([
        'automated_loser_variant',
        'automated_master',
        'automated_variant',
        'loser_variant',
        'mab_master',
        'mab_variant',
        'master',
        'variant',
      ])
      .exactOptional()
      .openapi({
        description:
          'Version of the email that should be sent if the results are inconclusive after the test period, master or variant.',
        example: null,
      }),
    abStatus: z
      .enum([
        'automated_loser_variant',
        'automated_master',
        'automated_variant',
        'loser_variant',
        'mab_master',
        'mab_variant',
        'master',
        'variant',
      ])
      .exactOptional()
      .openapi({ description: 'Status of the AB test.', example: null }),
    abSuccessMetric: z
      .enum(['CLICKS_BY_DELIVERED', 'CLICKS_BY_OPENS', 'OPENS_BY_DELIVERED'])
      .exactOptional()
      .openapi({
        description: 'Metric to determine the version that will be sent to the remaining contacts.',
        example: null,
      }),
    abTestPercentage: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The size of your test group.', example: null }),
    hoursToWait: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Time limit on gathering test results. After this time is up, the winning version will be sent to the remaining contacts.',
        example: null,
      }),
    isAbVariation: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the email is an A/B test variation.',
        example: null,
      }),
    testId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the AB test.', example: null }),
  })
  .openapi({ required: ['isAbVariation'], example: null })
  .openapi('PublicEmailTestingDetails')

const PublicEmailRecipientsSchema = z
  .object({
    exclude: z
      .array(z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({ description: 'Excluded IDs.', example: null }),
    include: z
      .array(z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({ description: 'Included IDs.', example: null }),
  })
  .openapi({ example: null, required: [] })
  .openapi('PublicEmailRecipients')

const PublicEmailToDetailsSchema = z
  .object({
    contactIds: PublicEmailRecipientsSchema.exactOptional(),
    contactIlsLists: PublicEmailRecipientsSchema.exactOptional(),
    contactLists: PublicEmailRecipientsSchema.exactOptional(),
    limitSendFrequency: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'A boolean indicating whether the frequency of sending emails to the recipients should be limited.',
        example: null,
      }),
    suppressGraymail: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether to send to unengaged contacts (false) or not (true).',
        example: null,
      }),
  })
  .openapi({ example: null, required: [] })
  .openapi('PublicEmailToDetails')

const PublicWebversionDetailsSchema = z
  .object({
    domain: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string specifying the domain where the web version of the email is hosted.',
        example: null,
      }),
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A boolean indicating whether the web version of the email is enabled.',
        example: null,
      }),
    expiresAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'A string in date-time format specifying when the web version page will expire.',
        example: null,
      }),
    isPageRedirected: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'A boolean indicating whether the web version page is redirected to another URL.',
        example: null,
      }),
    metaDescription: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string providing the meta description for the web version of the email.',
        example: null,
      }),
    pageExpiryEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A boolean indicating whether the web version page has an expiry set.',
        example: null,
      }),
    redirectToPageId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string representing the ID of the page to which the web version is redirected.',
        example: null,
      }),
    redirectToUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string containing the URL to which the web version page is redirected.',
        example: null,
      }),
    slug: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the unique slug for the web version of the email.',
        example: null,
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the title of the web version of the email.',
        example: null,
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string containing the full URL of the web version of the email.',
        example: null,
      }),
  })
  .openapi({ example: null, required: [] })
  .openapi('PublicWebversionDetails')

const PublicEmailSchema = z
  .object({
    activeDomain: z
      .string()
      .exactOptional()
      .openapi({ description: 'The active domain of the email.', example: null }),
    allEmailCampaignIds: z
      .array(z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({ description: 'List of emailCampaignIds.', example: null }),
    archived: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Determines if the email is archived or not.', example: null }),
    businessUnitId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the business unit associated with the email.',
        example: null,
      }),
    campaign: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the campaign this email is associated to.',
        example: null,
      }),
    campaignName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the campaign.', example: null }),
    campaignUtm: z
      .string()
      .exactOptional()
      .openapi({
        description: "The UTM parameters associated with the email's campaign.",
        example: null,
      }),
    clonedFrom: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the email this email was cloned from.', example: null }),
    content: PublicEmailContentSchema.exactOptional(),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: "The date and time of the email's creation, in ISO8601 representation.",
        example: null,
      }),
    createdById: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the user who created the email.', example: null }),
    deletedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time the email was deleted at, in ISO8601 representation.',
        example: null,
      }),
    emailCampaignGroupId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the email campaign group associated with the email.',
        example: null,
      }),
    emailTemplateMode: z
      .enum(['DESIGN_MANAGER', 'DRAG_AND_DROP'])
      .exactOptional()
      .openapi({
        description: "The mode of the email template, such as 'DESIGN_MANAGER' or 'DRAG_AND_DROP'.",
        example: null,
      }),
    feedbackSurveyId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the feedback survey linked to the email.',
        example: null,
      }),
    folderId: z
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
        description: 'Deprecated — this field is no longer functional. Use folderIdV2 instead.',
        example: null,
      }),
    folderIdV2: z
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
          'The version 2 ID of the folder where the email is stored, as a 64-bit integer.',
        example: null,
      }),
    from: PublicEmailFromDetailsSchema.exactOptional(),
    id: z.string().exactOptional().openapi({ description: 'The email ID.', example: null }),
    isAb: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the email is part of an A/B test.',
        example: null,
      }),
    isPublished: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Returns the published status of the email. This is read only.',
        example: null,
      }),
    isTransactional: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Returns whether the email is a transactional email or not. This is read only.',
        example: null,
      }),
    jitterSendTime: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A boolean indicating whether to apply a jitter to the send time.',
        example: null,
      }),
    language: z
      .enum([
        'aa',
        'ab',
        'ae',
        'af',
        'af-na',
        'af-za',
        'agq',
        'agq-cm',
        'ak',
        'ak-gh',
        'am',
        'am-et',
        'an',
        'ann',
        'ann-ng',
        'ar',
        'ar-001',
        'ar-ae',
        'ar-bh',
        'ar-dj',
        'ar-dz',
        'ar-eg',
        'ar-eh',
        'ar-er',
        'ar-il',
        'ar-iq',
        'ar-jo',
        'ar-km',
        'ar-kw',
        'ar-lb',
        'ar-ly',
        'ar-ma',
        'ar-mr',
        'ar-om',
        'ar-ps',
        'ar-qa',
        'ar-sa',
        'ar-sd',
        'ar-so',
        'ar-ss',
        'ar-sy',
        'ar-td',
        'ar-tn',
        'ar-ye',
        'as',
        'as-in',
        'asa',
        'asa-tz',
        'ast',
        'ast-es',
        'av',
        'ay',
        'az',
        'az-az',
        'ba',
        'bal',
        'bal-pk',
        'bas',
        'bas-cm',
        'be',
        'be-by',
        'bem',
        'bem-zm',
        'bez',
        'bez-tz',
        'bg',
        'bg-bg',
        'bgc',
        'bgc-in',
        'bho',
        'bho-in',
        'bi',
        'blo',
        'blo-bj',
        'bm',
        'bm-ml',
        'bn',
        'bn-bd',
        'bn-in',
        'bo',
        'bo-cn',
        'bo-in',
        'br',
        'br-fr',
        'brx',
        'brx-in',
        'bs',
        'bs-ba',
        'ca',
        'ca-ad',
        'ca-es',
        'ca-fr',
        'ca-it',
        'ccp',
        'ccp-bd',
        'ccp-in',
        'ce',
        'ce-ru',
        'ceb',
        'ceb-ph',
        'cgg',
        'cgg-ug',
        'ch',
        'chr',
        'chr-us',
        'ckb',
        'ckb-iq',
        'ckb-ir',
        'co',
        'cr',
        'cs',
        'cs-cz',
        'csw',
        'csw-ca',
        'cu',
        'cu-ru',
        'cv',
        'cv-ru',
        'cy',
        'cy-gb',
        'da',
        'da-dk',
        'da-gl',
        'dav',
        'dav-ke',
        'de',
        'de-at',
        'de-be',
        'de-ch',
        'de-de',
        'de-gr',
        'de-it',
        'de-li',
        'de-lu',
        'dje',
        'dje-ne',
        'doi',
        'doi-in',
        'dsb',
        'dsb-de',
        'dua',
        'dua-cm',
        'dv',
        'dyo',
        'dyo-sn',
        'dz',
        'dz-bt',
        'ebu',
        'ebu-ke',
        'ee',
        'ee-gh',
        'ee-tg',
        'el',
        'el-cy',
        'el-gr',
        'en',
        'en-001',
        'en-150',
        'en-ae',
        'en-ag',
        'en-ai',
        'en-as',
        'en-at',
        'en-au',
        'en-bb',
        'en-be',
        'en-bi',
        'en-bm',
        'en-bs',
        'en-bw',
        'en-bz',
        'en-ca',
        'en-cc',
        'en-ch',
        'en-ck',
        'en-cm',
        'en-cn',
        'en-cx',
        'en-cy',
        'en-cz',
        'en-de',
        'en-dg',
        'en-dk',
        'en-dm',
        'en-ee',
        'en-eg',
        'en-er',
        'en-es',
        'en-fi',
        'en-fj',
        'en-fk',
        'en-fm',
        'en-fr',
        'en-gb',
        'en-gd',
        'en-gg',
        'en-gh',
        'en-gi',
        'en-gm',
        'en-gs',
        'en-gu',
        'en-gy',
        'en-hk',
        'en-hu',
        'en-id',
        'en-ie',
        'en-il',
        'en-im',
        'en-in',
        'en-io',
        'en-it',
        'en-je',
        'en-jm',
        'en-ke',
        'en-ki',
        'en-kn',
        'en-ky',
        'en-lc',
        'en-lr',
        'en-ls',
        'en-lu',
        'en-mg',
        'en-mh',
        'en-mo',
        'en-mp',
        'en-ms',
        'en-mt',
        'en-mu',
        'en-mv',
        'en-mw',
        'en-mx',
        'en-my',
        'en-na',
        'en-nf',
        'en-ng',
        'en-nl',
        'en-no',
        'en-nr',
        'en-nu',
        'en-nz',
        'en-pg',
        'en-ph',
        'en-pk',
        'en-pl',
        'en-pn',
        'en-pr',
        'en-pt',
        'en-pw',
        'en-ro',
        'en-rw',
        'en-sb',
        'en-sc',
        'en-sd',
        'en-se',
        'en-sg',
        'en-sh',
        'en-si',
        'en-sk',
        'en-sl',
        'en-ss',
        'en-sx',
        'en-sz',
        'en-tc',
        'en-th',
        'en-tk',
        'en-tn',
        'en-to',
        'en-tt',
        'en-tv',
        'en-tz',
        'en-ug',
        'en-um',
        'en-us',
        'en-vc',
        'en-vg',
        'en-vi',
        'en-vn',
        'en-vu',
        'en-ws',
        'en-za',
        'en-zm',
        'en-zw',
        'eo',
        'eo-001',
        'es',
        'es-419',
        'es-ar',
        'es-bo',
        'es-br',
        'es-bz',
        'es-cl',
        'es-co',
        'es-cr',
        'es-cu',
        'es-do',
        'es-ea',
        'es-ec',
        'es-es',
        'es-gq',
        'es-gt',
        'es-hn',
        'es-ic',
        'es-mx',
        'es-ni',
        'es-pa',
        'es-pe',
        'es-ph',
        'es-pr',
        'es-py',
        'es-sv',
        'es-us',
        'es-uy',
        'es-ve',
        'et',
        'et-ee',
        'eu',
        'eu-es',
        'ewo',
        'ewo-cm',
        'fa',
        'fa-af',
        'fa-ir',
        'ff',
        'ff-bf',
        'ff-cm',
        'ff-gh',
        'ff-gm',
        'ff-gn',
        'ff-gw',
        'ff-lr',
        'ff-mr',
        'ff-ne',
        'ff-ng',
        'ff-sl',
        'ff-sn',
        'fi',
        'fi-fi',
        'fil',
        'fil-ph',
        'fj',
        'fo',
        'fo-dk',
        'fo-fo',
        'fr',
        'fr-be',
        'fr-bf',
        'fr-bi',
        'fr-bj',
        'fr-bl',
        'fr-ca',
        'fr-cd',
        'fr-cf',
        'fr-cg',
        'fr-ch',
        'fr-ci',
        'fr-cm',
        'fr-dj',
        'fr-dz',
        'fr-fr',
        'fr-ga',
        'fr-gf',
        'fr-gn',
        'fr-gp',
        'fr-gq',
        'fr-ht',
        'fr-km',
        'fr-lu',
        'fr-ma',
        'fr-mc',
        'fr-mf',
        'fr-mg',
        'fr-ml',
        'fr-mq',
        'fr-mr',
        'fr-mu',
        'fr-nc',
        'fr-ne',
        'fr-pf',
        'fr-pm',
        'fr-re',
        'fr-rw',
        'fr-sc',
        'fr-sn',
        'fr-sy',
        'fr-td',
        'fr-tg',
        'fr-tn',
        'fr-vu',
        'fr-wf',
        'fr-yt',
        'frr',
        'frr-de',
        'fur',
        'fur-it',
        'fy',
        'fy-nl',
        'ga',
        'ga-gb',
        'ga-ie',
        'gaa',
        'gaa-gh',
        'gd',
        'gd-gb',
        'gl',
        'gl-es',
        'gn',
        'gsw',
        'gsw-ch',
        'gsw-fr',
        'gsw-li',
        'gu',
        'gu-in',
        'guz',
        'guz-ke',
        'gv',
        'gv-im',
        'ha',
        'ha-gh',
        'ha-ne',
        'ha-ng',
        'haw',
        'haw-us',
        'he',
        'he-il',
        'hi',
        'hi-in',
        'hmn',
        'ho',
        'hr',
        'hr-ba',
        'hr-hr',
        'hsb',
        'hsb-de',
        'ht',
        'ht-ht',
        'hu',
        'hu-hu',
        'hy',
        'hy-am',
        'hz',
        'ia',
        'ia-001',
        'id',
        'id-id',
        'ie',
        'ie-ee',
        'ig',
        'ig-ng',
        'ii',
        'ii-cn',
        'ik',
        'io',
        'is',
        'is-is',
        'it',
        'it-ch',
        'it-it',
        'it-sm',
        'it-va',
        'iu',
        'ja',
        'ja-jp',
        'jgo',
        'jgo-cm',
        'jmc',
        'jmc-tz',
        'jv',
        'jv-id',
        'ka',
        'ka-ge',
        'kab',
        'kab-dz',
        'kam',
        'kam-ke',
        'kar',
        'kde',
        'kde-tz',
        'kea',
        'kea-cv',
        'kg',
        'kgp',
        'kgp-br',
        'kh',
        'khq',
        'khq-ml',
        'ki',
        'ki-ke',
        'kj',
        'kk',
        'kk-kz',
        'kkj',
        'kkj-cm',
        'kl',
        'kl-gl',
        'kln',
        'kln-ke',
        'km',
        'km-kh',
        'kn',
        'kn-in',
        'ko',
        'ko-cn',
        'ko-kp',
        'ko-kr',
        'kok',
        'kok-in',
        'kr',
        'ks',
        'ks-in',
        'ksb',
        'ksb-tz',
        'ksf',
        'ksf-cm',
        'ksh',
        'ksh-de',
        'ku',
        'ku-tr',
        'kv',
        'kw',
        'kw-gb',
        'kxv',
        'kxv-in',
        'ky',
        'ky-kg',
        'la',
        'lag',
        'lag-tz',
        'lb',
        'lb-lu',
        'lg',
        'lg-ug',
        'li',
        'lij',
        'lij-it',
        'lkt',
        'lkt-us',
        'lmo',
        'lmo-it',
        'ln',
        'ln-ao',
        'ln-cd',
        'ln-cf',
        'ln-cg',
        'lo',
        'lo-la',
        'lrc',
        'lrc-iq',
        'lrc-ir',
        'lt',
        'lt-lt',
        'lu',
        'lu-cd',
        'luo',
        'luo-ke',
        'luy',
        'luy-ke',
        'lv',
        'lv-lv',
        'mai',
        'mai-in',
        'mas',
        'mas-ke',
        'mas-tz',
        'mdf',
        'mdf-ru',
        'mer',
        'mer-ke',
        'mfe',
        'mfe-mu',
        'mg',
        'mg-mg',
        'mgh',
        'mgh-mz',
        'mgo',
        'mgo-cm',
        'mh',
        'mi',
        'mi-nz',
        'mk',
        'mk-mk',
        'ml',
        'ml-in',
        'mn',
        'mn-mn',
        'mni',
        'mni-in',
        'mr',
        'mr-in',
        'ms',
        'ms-bn',
        'ms-id',
        'ms-my',
        'ms-sg',
        'mt',
        'mt-mt',
        'mua',
        'mua-cm',
        'my',
        'my-mm',
        'mzn',
        'mzn-ir',
        'na',
        'naq',
        'naq-na',
        'nb',
        'nb-no',
        'nb-sj',
        'nd',
        'nd-zw',
        'nds',
        'nds-de',
        'nds-nl',
        'ne',
        'ne-in',
        'ne-np',
        'ng',
        'nl',
        'nl-aw',
        'nl-be',
        'nl-bq',
        'nl-ch',
        'nl-cw',
        'nl-lu',
        'nl-nl',
        'nl-sr',
        'nl-sx',
        'nmg',
        'nmg-cm',
        'nn',
        'nn-no',
        'nnh',
        'nnh-cm',
        'no',
        'no-no',
        'nqo',
        'nqo-gn',
        'nr',
        'nso',
        'nso-za',
        'nus',
        'nus-ss',
        'nv',
        'ny',
        'nyn',
        'nyn-ug',
        'oc',
        'oc-es',
        'oc-fr',
        'oj',
        'om',
        'om-et',
        'om-ke',
        'or',
        'or-in',
        'os',
        'os-ge',
        'os-ru',
        'pa',
        'pa-in',
        'pa-pk',
        'pcm',
        'pcm-ng',
        'pi',
        'pis',
        'pis-sb',
        'pl',
        'pl-pl',
        'prg',
        'prg-001',
        'ps',
        'ps-af',
        'ps-pk',
        'pt',
        'pt-ao',
        'pt-br',
        'pt-ch',
        'pt-cv',
        'pt-gq',
        'pt-gw',
        'pt-lu',
        'pt-mo',
        'pt-mz',
        'pt-pt',
        'pt-st',
        'pt-tl',
        'qu',
        'qu-bo',
        'qu-ec',
        'qu-pe',
        'raj',
        'raj-in',
        'rm',
        'rm-ch',
        'rn',
        'rn-bi',
        'ro',
        'ro-md',
        'ro-ro',
        'rof',
        'rof-tz',
        'ru',
        'ru-by',
        'ru-kg',
        'ru-kz',
        'ru-md',
        'ru-ru',
        'ru-ua',
        'rw',
        'rw-rw',
        'rwk',
        'rwk-tz',
        'sa',
        'sa-in',
        'sah',
        'sah-ru',
        'saq',
        'saq-ke',
        'sat',
        'sat-in',
        'sbp',
        'sbp-tz',
        'sc',
        'sc-it',
        'sd',
        'sd-in',
        'sd-pk',
        'se',
        'se-fi',
        'se-no',
        'se-se',
        'seh',
        'seh-mz',
        'ses',
        'ses-ml',
        'sg',
        'sg-cf',
        'shi',
        'shi-ma',
        'si',
        'si-lk',
        'sk',
        'sk-sk',
        'sl',
        'sl-si',
        'sm',
        'smn',
        'smn-fi',
        'sms',
        'sms-fi',
        'sn',
        'sn-zw',
        'so',
        'so-dj',
        'so-et',
        'so-ke',
        'so-so',
        'sq',
        'sq-al',
        'sq-mk',
        'sq-xk',
        'sr',
        'sr-ba',
        'sr-cs',
        'sr-me',
        'sr-rs',
        'sr-xk',
        'ss',
        'st',
        'st-ls',
        'st-za',
        'su',
        'su-id',
        'sv',
        'sv-ax',
        'sv-fi',
        'sv-se',
        'sw',
        'sw-cd',
        'sw-ke',
        'sw-tz',
        'sw-ug',
        'sy',
        'syr',
        'syr-iq',
        'syr-sy',
        'szl',
        'szl-pl',
        'ta',
        'ta-in',
        'ta-lk',
        'ta-my',
        'ta-sg',
        'te',
        'te-in',
        'teo',
        'teo-ke',
        'teo-ug',
        'tg',
        'tg-tj',
        'th',
        'th-th',
        'ti',
        'ti-er',
        'ti-et',
        'tk',
        'tk-tm',
        'tl',
        'tn',
        'tn-bw',
        'tn-za',
        'to',
        'to-to',
        'tok',
        'tok-001',
        'tr',
        'tr-cy',
        'tr-tr',
        'ts',
        'tt',
        'tt-ru',
        'tw',
        'twq',
        'twq-ne',
        'ty',
        'tzm',
        'tzm-ma',
        'ug',
        'ug-cn',
        'uk',
        'uk-ua',
        'ur',
        'ur-in',
        'ur-pk',
        'uz',
        'uz-af',
        'uz-uz',
        'vai',
        'vai-lr',
        've',
        'vec',
        'vec-it',
        'vi',
        'vi-vn',
        'vmw',
        'vmw-mz',
        'vo',
        'vo-001',
        'vun',
        'vun-tz',
        'wa',
        'wae',
        'wae-ch',
        'wo',
        'wo-sn',
        'xh',
        'xh-za',
        'xnr',
        'xnr-in',
        'xog',
        'xog-ug',
        'yav',
        'yav-cm',
        'yi',
        'yi-001',
        'yi-ua',
        'yo',
        'yo-bj',
        'yo-ng',
        'yrl',
        'yrl-br',
        'yrl-co',
        'yrl-ve',
        'yue',
        'yue-cn',
        'yue-hk',
        'yue-mo',
        'za',
        'za-cn',
        'zgh',
        'zgh-ma',
        'zh',
        'zh-cn',
        'zh-hans',
        'zh-hant',
        'zh-hk',
        'zh-mo',
        'zh-my',
        'zh-sg',
        'zh-tw',
        'zu',
        'zu-za',
      ])
      .exactOptional()
      .openapi({
        description:
          'The language code of the email, following ISO 639-1 and ISO 3166-1 standards.',
        example: null,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the email, as displayed on the email dashboard.',
        example: null,
      }),
    previewKey: z
      .string()
      .exactOptional()
      .openapi({ description: 'The preview key for the email.', example: null }),
    primaryEmailCampaignId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The primary email campaign ID associated with the email.',
        example: null,
      }),
    publishDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time the email is scheduled for, in ISO8601 representation. This is only used in local time or scheduled emails.',
        example: null,
      }),
    publishedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time the email was published at, in ISO8601 representation.',
        example: null,
      }),
    publishedByEmail: z
      .string()
      .exactOptional()
      .openapi({ description: 'Email of the user who published/sent the email.', example: null }),
    publishedById: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the user who published the email.', example: null }),
    publishedByName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the user who published the email.', example: null }),
    rssData: PublicRssEmailDetailsSchema.exactOptional(),
    sendOnPublish: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determines whether the email will be sent immediately on publish.',
        example: null,
      }),
    state: z
      .enum([
        'AGENT_GENERATED',
        'AUTOMATED',
        'AUTOMATED_AB',
        'AUTOMATED_AB_VARIANT',
        'AUTOMATED_DRAFT',
        'AUTOMATED_DRAFT_AB',
        'AUTOMATED_DRAFT_ABVARIANT',
        'AUTOMATED_FOR_FORM',
        'AUTOMATED_FOR_FORM_BUFFER',
        'AUTOMATED_FOR_FORM_DRAFT',
        'AUTOMATED_FOR_FORM_LEGACY',
        'AUTOMATED_LOSER_ABVARIANT',
        'AUTOMATED_SENDING',
        'BLOG_EMAIL_DRAFT',
        'BLOG_EMAIL_PUBLISHED',
        'DRAFT',
        'DRAFT_AB',
        'DRAFT_AB_VARIANT',
        'ERROR',
        'LOSER_AB_VARIANT',
        'PAGE_STUB',
        'PRE_PROCESSING',
        'PROCESSING',
        'PUBLISHED',
        'PUBLISHED_AB',
        'PUBLISHED_AB_VARIANT',
        'PUBLISHED_OR_SCHEDULED',
        'RSS_TO_EMAIL_DRAFT',
        'RSS_TO_EMAIL_PUBLISHED',
        'SCHEDULED',
        'SCHEDULED_AB',
        'SCHEDULED_OR_PUBLISHED',
      ])
      .exactOptional()
      .openapi({ description: 'The email state.', example: null }),
    stats: EmailStatisticsDataSchema.exactOptional(),
    subcategory: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email subcategory.', example: null }),
    subject: z
      .string()
      .exactOptional()
      .openapi({ description: 'The subject of the email.', example: null }),
    subscriptionDetails: PublicEmailSubscriptionDetailsSchema.exactOptional(),
    teamsWithAccess: z
      .array(z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'An array of team IDs who have access to the email.',
        example: null,
      }),
    testing: PublicEmailTestingDetailsSchema.exactOptional(),
    to: PublicEmailToDetailsSchema.exactOptional(),
    type: z
      .enum([
        'AB_EMAIL',
        'AUTOMATED_AB_EMAIL',
        'AUTOMATED_EMAIL',
        'BATCH_EMAIL',
        'BLOG_EMAIL',
        'BLOG_EMAIL_CHILD',
        'FEEDBACK_CES_EMAIL',
        'FEEDBACK_CUSTOM_EMAIL',
        'FEEDBACK_CUSTOM_SURVEY_EMAIL',
        'FEEDBACK_NPS_EMAIL',
        'FOLLOWUP_EMAIL',
        'LEADFLOW_EMAIL',
        'LOCALTIME_EMAIL',
        'MANAGE_PREFERENCES_EMAIL',
        'MARKETING_SINGLE_SEND_API',
        'MEMBERSHIP_EMAIL_VERIFICATION_EMAIL',
        'MEMBERSHIP_FOLLOW_UP_EMAIL',
        'MEMBERSHIP_OTP_LOGIN_EMAIL',
        'MEMBERSHIP_PASSWORD_RESET_EMAIL',
        'MEMBERSHIP_PASSWORD_SAVED_EMAIL',
        'MEMBERSHIP_PASSWORDLESS_AUTH_EMAIL',
        'MEMBERSHIP_REGISTRATION_EMAIL',
        'MEMBERSHIP_REGISTRATION_FOLLOW_UP_EMAIL',
        'MEMBERSHIP_VERIFICATION_EMAIL',
        'OPTIN_EMAIL',
        'OPTIN_FOLLOWUP_EMAIL',
        'RESUBSCRIBE_EMAIL',
        'RSS_EMAIL',
        'RSS_EMAIL_CHILD',
        'SINGLE_SEND_API',
        'SMTP_TOKEN',
        'TICKET_EMAIL',
      ])
      .exactOptional()
      .openapi({
        description:
          'The email type, this is derived from other properties on the email such as subcategory.',
        example: null,
      }),
    unpublishedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when the email was unpublished, in ISO 8601 format.',
        example: null,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time of the last update to the email, in ISO8601 representation.',
        example: null,
      }),
    updatedById: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the user who last updated the email.', example: null }),
    usersWithAccess: z
      .array(z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'An array of user IDs who have access to the email.',
        example: null,
      }),
    webversion: PublicWebversionDetailsSchema.exactOptional(),
    workflowNames: z
      .array(z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'Names of workflows in which the email is used within a "send email" action.',
        example: null,
      }),
  })
  .openapi({ required: ['isAb'], example: null })
  .openapi('PublicEmail')

const CollectionResponseWithTotalPublicEmailSchema = z
  .object({
    paging: PagingSchema.exactOptional(),
    results: z
      .array(PublicEmailSchema)
      .openapi({
        description:
          'An array containing the public email objects retrieved in the current page of results.',
        example: null,
      }),
    total: z
      .int32()
      .openapi({
        description: 'An integer representing the total number of public emails available.',
        example: null,
      }),
  })
  .openapi({ required: ['results', 'total'], example: null })
  .openapi('CollectionResponseWithTotalPublicEmail')

const VersionUserSchema = z
  .object({
    email: z.string().openapi({ description: 'Email address of the user.', example: null }),
    fullName: z
      .string()
      .openapi({ description: 'First and last name of the user.', example: null }),
    id: z.string().openapi({ description: 'ID of the user.', example: null }),
  })
  .openapi({ required: ['email', 'fullName', 'id'], example: null })
  .openapi('VersionUser')

const VersionPublicEmailSchema = z
  .object({
    id: z.string().openapi({ description: 'ID of this marketing email version.', example: null }),
    object: PublicEmailSchema,
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time of the last update to the email, in ISO8601 representation.',
        example: null,
      }),
    user: VersionUserSchema,
  })
  .openapi({ required: ['id', 'object', 'updatedAt', 'user'], example: null })
  .openapi('VersionPublicEmail')

const CollectionResponseWithTotalPublicEmailVersionSchema = z
  .object({
    paging: PagingSchema.exactOptional(),
    results: z
      .array(VersionPublicEmailSchema)
      .openapi({
        description:
          'An array of email version objects, each conforming to the VersionPublicEmail schema.',
        example: null,
      }),
    total: z
      .int32()
      .openapi({
        description: 'An integer representing the total number of email version results available.',
        example: null,
      }),
  })
  .openapi({ required: ['results', 'total'], example: null })
  .openapi('CollectionResponseWithTotalPublicEmailVersion')

const EmailCloneRequestVNextSchema = z
  .object({
    cloneName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name to assign to the cloned email.', example: null }),
    id: z.string().openapi({ description: 'The email ID.', example: null }),
    language: z
      .string()
      .exactOptional()
      .openapi({
        description: "The language code for the cloned email, such as 'en' for English.",
        example: null,
      }),
  })
  .openapi({ required: ['id'], example: null })
  .openapi('EmailCloneRequestVNext')

const EmailCreateRequestSchema = z
  .object({
    activeDomain: z
      .string()
      .exactOptional()
      .openapi({ description: 'The active domain of the email.', example: null }),
    archived: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Determines if the email is archived or not.', example: null }),
    businessUnitId: z
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
        description: 'The ID of the business unit associated with the email.',
        example: null,
      }),
    campaign: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the campaign this email is associated to.',
        example: null,
      }),
    content: PublicEmailContentSchema.exactOptional(),
    feedbackSurveyId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the feedback survey linked to the email.',
        example: null,
      }),
    folderIdV2: z
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
        description: 'The ID of the folder where the email will be stored.',
        example: null,
      }),
    from: PublicEmailFromDetailsSchema.exactOptional(),
    jitterSendTime: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Determines whether the email send time should be randomized to avoid sending all emails at the exact same time.',
        example: null,
      }),
    language: z
      .enum([
        'aa',
        'ab',
        'ae',
        'af',
        'af-na',
        'af-za',
        'agq',
        'agq-cm',
        'ak',
        'ak-gh',
        'am',
        'am-et',
        'an',
        'ann',
        'ann-ng',
        'ar',
        'ar-001',
        'ar-ae',
        'ar-bh',
        'ar-dj',
        'ar-dz',
        'ar-eg',
        'ar-eh',
        'ar-er',
        'ar-il',
        'ar-iq',
        'ar-jo',
        'ar-km',
        'ar-kw',
        'ar-lb',
        'ar-ly',
        'ar-ma',
        'ar-mr',
        'ar-om',
        'ar-ps',
        'ar-qa',
        'ar-sa',
        'ar-sd',
        'ar-so',
        'ar-ss',
        'ar-sy',
        'ar-td',
        'ar-tn',
        'ar-ye',
        'as',
        'as-in',
        'asa',
        'asa-tz',
        'ast',
        'ast-es',
        'av',
        'ay',
        'az',
        'az-az',
        'ba',
        'bal',
        'bal-pk',
        'bas',
        'bas-cm',
        'be',
        'be-by',
        'bem',
        'bem-zm',
        'bez',
        'bez-tz',
        'bg',
        'bg-bg',
        'bgc',
        'bgc-in',
        'bho',
        'bho-in',
        'bi',
        'blo',
        'blo-bj',
        'bm',
        'bm-ml',
        'bn',
        'bn-bd',
        'bn-in',
        'bo',
        'bo-cn',
        'bo-in',
        'br',
        'br-fr',
        'brx',
        'brx-in',
        'bs',
        'bs-ba',
        'ca',
        'ca-ad',
        'ca-es',
        'ca-fr',
        'ca-it',
        'ccp',
        'ccp-bd',
        'ccp-in',
        'ce',
        'ce-ru',
        'ceb',
        'ceb-ph',
        'cgg',
        'cgg-ug',
        'ch',
        'chr',
        'chr-us',
        'ckb',
        'ckb-iq',
        'ckb-ir',
        'co',
        'cr',
        'cs',
        'cs-cz',
        'csw',
        'csw-ca',
        'cu',
        'cu-ru',
        'cv',
        'cv-ru',
        'cy',
        'cy-gb',
        'da',
        'da-dk',
        'da-gl',
        'dav',
        'dav-ke',
        'de',
        'de-at',
        'de-be',
        'de-ch',
        'de-de',
        'de-gr',
        'de-it',
        'de-li',
        'de-lu',
        'dje',
        'dje-ne',
        'doi',
        'doi-in',
        'dsb',
        'dsb-de',
        'dua',
        'dua-cm',
        'dv',
        'dyo',
        'dyo-sn',
        'dz',
        'dz-bt',
        'ebu',
        'ebu-ke',
        'ee',
        'ee-gh',
        'ee-tg',
        'el',
        'el-cy',
        'el-gr',
        'en',
        'en-001',
        'en-150',
        'en-ae',
        'en-ag',
        'en-ai',
        'en-as',
        'en-at',
        'en-au',
        'en-bb',
        'en-be',
        'en-bi',
        'en-bm',
        'en-bs',
        'en-bw',
        'en-bz',
        'en-ca',
        'en-cc',
        'en-ch',
        'en-ck',
        'en-cm',
        'en-cn',
        'en-cx',
        'en-cy',
        'en-cz',
        'en-de',
        'en-dg',
        'en-dk',
        'en-dm',
        'en-ee',
        'en-eg',
        'en-er',
        'en-es',
        'en-fi',
        'en-fj',
        'en-fk',
        'en-fm',
        'en-fr',
        'en-gb',
        'en-gd',
        'en-gg',
        'en-gh',
        'en-gi',
        'en-gm',
        'en-gs',
        'en-gu',
        'en-gy',
        'en-hk',
        'en-hu',
        'en-id',
        'en-ie',
        'en-il',
        'en-im',
        'en-in',
        'en-io',
        'en-it',
        'en-je',
        'en-jm',
        'en-ke',
        'en-ki',
        'en-kn',
        'en-ky',
        'en-lc',
        'en-lr',
        'en-ls',
        'en-lu',
        'en-mg',
        'en-mh',
        'en-mo',
        'en-mp',
        'en-ms',
        'en-mt',
        'en-mu',
        'en-mv',
        'en-mw',
        'en-mx',
        'en-my',
        'en-na',
        'en-nf',
        'en-ng',
        'en-nl',
        'en-no',
        'en-nr',
        'en-nu',
        'en-nz',
        'en-pg',
        'en-ph',
        'en-pk',
        'en-pl',
        'en-pn',
        'en-pr',
        'en-pt',
        'en-pw',
        'en-ro',
        'en-rw',
        'en-sb',
        'en-sc',
        'en-sd',
        'en-se',
        'en-sg',
        'en-sh',
        'en-si',
        'en-sk',
        'en-sl',
        'en-ss',
        'en-sx',
        'en-sz',
        'en-tc',
        'en-th',
        'en-tk',
        'en-tn',
        'en-to',
        'en-tt',
        'en-tv',
        'en-tz',
        'en-ug',
        'en-um',
        'en-us',
        'en-vc',
        'en-vg',
        'en-vi',
        'en-vn',
        'en-vu',
        'en-ws',
        'en-za',
        'en-zm',
        'en-zw',
        'eo',
        'eo-001',
        'es',
        'es-419',
        'es-ar',
        'es-bo',
        'es-br',
        'es-bz',
        'es-cl',
        'es-co',
        'es-cr',
        'es-cu',
        'es-do',
        'es-ea',
        'es-ec',
        'es-es',
        'es-gq',
        'es-gt',
        'es-hn',
        'es-ic',
        'es-mx',
        'es-ni',
        'es-pa',
        'es-pe',
        'es-ph',
        'es-pr',
        'es-py',
        'es-sv',
        'es-us',
        'es-uy',
        'es-ve',
        'et',
        'et-ee',
        'eu',
        'eu-es',
        'ewo',
        'ewo-cm',
        'fa',
        'fa-af',
        'fa-ir',
        'ff',
        'ff-bf',
        'ff-cm',
        'ff-gh',
        'ff-gm',
        'ff-gn',
        'ff-gw',
        'ff-lr',
        'ff-mr',
        'ff-ne',
        'ff-ng',
        'ff-sl',
        'ff-sn',
        'fi',
        'fi-fi',
        'fil',
        'fil-ph',
        'fj',
        'fo',
        'fo-dk',
        'fo-fo',
        'fr',
        'fr-be',
        'fr-bf',
        'fr-bi',
        'fr-bj',
        'fr-bl',
        'fr-ca',
        'fr-cd',
        'fr-cf',
        'fr-cg',
        'fr-ch',
        'fr-ci',
        'fr-cm',
        'fr-dj',
        'fr-dz',
        'fr-fr',
        'fr-ga',
        'fr-gf',
        'fr-gn',
        'fr-gp',
        'fr-gq',
        'fr-ht',
        'fr-km',
        'fr-lu',
        'fr-ma',
        'fr-mc',
        'fr-mf',
        'fr-mg',
        'fr-ml',
        'fr-mq',
        'fr-mr',
        'fr-mu',
        'fr-nc',
        'fr-ne',
        'fr-pf',
        'fr-pm',
        'fr-re',
        'fr-rw',
        'fr-sc',
        'fr-sn',
        'fr-sy',
        'fr-td',
        'fr-tg',
        'fr-tn',
        'fr-vu',
        'fr-wf',
        'fr-yt',
        'frr',
        'frr-de',
        'fur',
        'fur-it',
        'fy',
        'fy-nl',
        'ga',
        'ga-gb',
        'ga-ie',
        'gaa',
        'gaa-gh',
        'gd',
        'gd-gb',
        'gl',
        'gl-es',
        'gn',
        'gsw',
        'gsw-ch',
        'gsw-fr',
        'gsw-li',
        'gu',
        'gu-in',
        'guz',
        'guz-ke',
        'gv',
        'gv-im',
        'ha',
        'ha-gh',
        'ha-ne',
        'ha-ng',
        'haw',
        'haw-us',
        'he',
        'he-il',
        'hi',
        'hi-in',
        'hmn',
        'ho',
        'hr',
        'hr-ba',
        'hr-hr',
        'hsb',
        'hsb-de',
        'ht',
        'ht-ht',
        'hu',
        'hu-hu',
        'hy',
        'hy-am',
        'hz',
        'ia',
        'ia-001',
        'id',
        'id-id',
        'ie',
        'ie-ee',
        'ig',
        'ig-ng',
        'ii',
        'ii-cn',
        'ik',
        'io',
        'is',
        'is-is',
        'it',
        'it-ch',
        'it-it',
        'it-sm',
        'it-va',
        'iu',
        'ja',
        'ja-jp',
        'jgo',
        'jgo-cm',
        'jmc',
        'jmc-tz',
        'jv',
        'jv-id',
        'ka',
        'ka-ge',
        'kab',
        'kab-dz',
        'kam',
        'kam-ke',
        'kar',
        'kde',
        'kde-tz',
        'kea',
        'kea-cv',
        'kg',
        'kgp',
        'kgp-br',
        'kh',
        'khq',
        'khq-ml',
        'ki',
        'ki-ke',
        'kj',
        'kk',
        'kk-kz',
        'kkj',
        'kkj-cm',
        'kl',
        'kl-gl',
        'kln',
        'kln-ke',
        'km',
        'km-kh',
        'kn',
        'kn-in',
        'ko',
        'ko-cn',
        'ko-kp',
        'ko-kr',
        'kok',
        'kok-in',
        'kr',
        'ks',
        'ks-in',
        'ksb',
        'ksb-tz',
        'ksf',
        'ksf-cm',
        'ksh',
        'ksh-de',
        'ku',
        'ku-tr',
        'kv',
        'kw',
        'kw-gb',
        'kxv',
        'kxv-in',
        'ky',
        'ky-kg',
        'la',
        'lag',
        'lag-tz',
        'lb',
        'lb-lu',
        'lg',
        'lg-ug',
        'li',
        'lij',
        'lij-it',
        'lkt',
        'lkt-us',
        'lmo',
        'lmo-it',
        'ln',
        'ln-ao',
        'ln-cd',
        'ln-cf',
        'ln-cg',
        'lo',
        'lo-la',
        'lrc',
        'lrc-iq',
        'lrc-ir',
        'lt',
        'lt-lt',
        'lu',
        'lu-cd',
        'luo',
        'luo-ke',
        'luy',
        'luy-ke',
        'lv',
        'lv-lv',
        'mai',
        'mai-in',
        'mas',
        'mas-ke',
        'mas-tz',
        'mdf',
        'mdf-ru',
        'mer',
        'mer-ke',
        'mfe',
        'mfe-mu',
        'mg',
        'mg-mg',
        'mgh',
        'mgh-mz',
        'mgo',
        'mgo-cm',
        'mh',
        'mi',
        'mi-nz',
        'mk',
        'mk-mk',
        'ml',
        'ml-in',
        'mn',
        'mn-mn',
        'mni',
        'mni-in',
        'mr',
        'mr-in',
        'ms',
        'ms-bn',
        'ms-id',
        'ms-my',
        'ms-sg',
        'mt',
        'mt-mt',
        'mua',
        'mua-cm',
        'my',
        'my-mm',
        'mzn',
        'mzn-ir',
        'na',
        'naq',
        'naq-na',
        'nb',
        'nb-no',
        'nb-sj',
        'nd',
        'nd-zw',
        'nds',
        'nds-de',
        'nds-nl',
        'ne',
        'ne-in',
        'ne-np',
        'ng',
        'nl',
        'nl-aw',
        'nl-be',
        'nl-bq',
        'nl-ch',
        'nl-cw',
        'nl-lu',
        'nl-nl',
        'nl-sr',
        'nl-sx',
        'nmg',
        'nmg-cm',
        'nn',
        'nn-no',
        'nnh',
        'nnh-cm',
        'no',
        'no-no',
        'nqo',
        'nqo-gn',
        'nr',
        'nso',
        'nso-za',
        'nus',
        'nus-ss',
        'nv',
        'ny',
        'nyn',
        'nyn-ug',
        'oc',
        'oc-es',
        'oc-fr',
        'oj',
        'om',
        'om-et',
        'om-ke',
        'or',
        'or-in',
        'os',
        'os-ge',
        'os-ru',
        'pa',
        'pa-in',
        'pa-pk',
        'pcm',
        'pcm-ng',
        'pi',
        'pis',
        'pis-sb',
        'pl',
        'pl-pl',
        'prg',
        'prg-001',
        'ps',
        'ps-af',
        'ps-pk',
        'pt',
        'pt-ao',
        'pt-br',
        'pt-ch',
        'pt-cv',
        'pt-gq',
        'pt-gw',
        'pt-lu',
        'pt-mo',
        'pt-mz',
        'pt-pt',
        'pt-st',
        'pt-tl',
        'qu',
        'qu-bo',
        'qu-ec',
        'qu-pe',
        'raj',
        'raj-in',
        'rm',
        'rm-ch',
        'rn',
        'rn-bi',
        'ro',
        'ro-md',
        'ro-ro',
        'rof',
        'rof-tz',
        'ru',
        'ru-by',
        'ru-kg',
        'ru-kz',
        'ru-md',
        'ru-ru',
        'ru-ua',
        'rw',
        'rw-rw',
        'rwk',
        'rwk-tz',
        'sa',
        'sa-in',
        'sah',
        'sah-ru',
        'saq',
        'saq-ke',
        'sat',
        'sat-in',
        'sbp',
        'sbp-tz',
        'sc',
        'sc-it',
        'sd',
        'sd-in',
        'sd-pk',
        'se',
        'se-fi',
        'se-no',
        'se-se',
        'seh',
        'seh-mz',
        'ses',
        'ses-ml',
        'sg',
        'sg-cf',
        'shi',
        'shi-ma',
        'si',
        'si-lk',
        'sk',
        'sk-sk',
        'sl',
        'sl-si',
        'sm',
        'smn',
        'smn-fi',
        'sms',
        'sms-fi',
        'sn',
        'sn-zw',
        'so',
        'so-dj',
        'so-et',
        'so-ke',
        'so-so',
        'sq',
        'sq-al',
        'sq-mk',
        'sq-xk',
        'sr',
        'sr-ba',
        'sr-cs',
        'sr-me',
        'sr-rs',
        'sr-xk',
        'ss',
        'st',
        'st-ls',
        'st-za',
        'su',
        'su-id',
        'sv',
        'sv-ax',
        'sv-fi',
        'sv-se',
        'sw',
        'sw-cd',
        'sw-ke',
        'sw-tz',
        'sw-ug',
        'sy',
        'syr',
        'syr-iq',
        'syr-sy',
        'szl',
        'szl-pl',
        'ta',
        'ta-in',
        'ta-lk',
        'ta-my',
        'ta-sg',
        'te',
        'te-in',
        'teo',
        'teo-ke',
        'teo-ug',
        'tg',
        'tg-tj',
        'th',
        'th-th',
        'ti',
        'ti-er',
        'ti-et',
        'tk',
        'tk-tm',
        'tl',
        'tn',
        'tn-bw',
        'tn-za',
        'to',
        'to-to',
        'tok',
        'tok-001',
        'tr',
        'tr-cy',
        'tr-tr',
        'ts',
        'tt',
        'tt-ru',
        'tw',
        'twq',
        'twq-ne',
        'ty',
        'tzm',
        'tzm-ma',
        'ug',
        'ug-cn',
        'uk',
        'uk-ua',
        'ur',
        'ur-in',
        'ur-pk',
        'uz',
        'uz-af',
        'uz-uz',
        'vai',
        'vai-lr',
        've',
        'vec',
        'vec-it',
        'vi',
        'vi-vn',
        'vmw',
        'vmw-mz',
        'vo',
        'vo-001',
        'vun',
        'vun-tz',
        'wa',
        'wae',
        'wae-ch',
        'wo',
        'wo-sn',
        'xh',
        'xh-za',
        'xnr',
        'xnr-in',
        'xog',
        'xog-ug',
        'yav',
        'yav-cm',
        'yi',
        'yi-001',
        'yi-ua',
        'yo',
        'yo-bj',
        'yo-ng',
        'yrl',
        'yrl-br',
        'yrl-co',
        'yrl-ve',
        'yue',
        'yue-cn',
        'yue-hk',
        'yue-mo',
        'za',
        'za-cn',
        'zgh',
        'zgh-ma',
        'zh',
        'zh-cn',
        'zh-hans',
        'zh-hant',
        'zh-hk',
        'zh-mo',
        'zh-my',
        'zh-sg',
        'zh-tw',
        'zu',
        'zu-za',
      ])
      .exactOptional()
      .openapi({
        description: "The language code for the email, such as 'en' for English.",
        example: null,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the email, as displayed on the email dashboard.',
        example: null,
      }),
    publishDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time the email is scheduled for, in ISO8601 representation. This is only used in local time or scheduled emails.',
        example: null,
      }),
    rssData: PublicRssEmailDetailsSchema.exactOptional(),
    sendOnPublish: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determines whether the email will be sent immediately on publish.',
        example: null,
      }),
    state: z
      .enum([
        'AGENT_GENERATED',
        'AUTOMATED',
        'AUTOMATED_AB',
        'AUTOMATED_AB_VARIANT',
        'AUTOMATED_DRAFT',
        'AUTOMATED_DRAFT_AB',
        'AUTOMATED_DRAFT_ABVARIANT',
        'AUTOMATED_FOR_FORM',
        'AUTOMATED_FOR_FORM_BUFFER',
        'AUTOMATED_FOR_FORM_DRAFT',
        'AUTOMATED_FOR_FORM_LEGACY',
        'AUTOMATED_LOSER_ABVARIANT',
        'AUTOMATED_SENDING',
        'BLOG_EMAIL_DRAFT',
        'BLOG_EMAIL_PUBLISHED',
        'DRAFT',
        'DRAFT_AB',
        'DRAFT_AB_VARIANT',
        'ERROR',
        'LOSER_AB_VARIANT',
        'PAGE_STUB',
        'PRE_PROCESSING',
        'PROCESSING',
        'PUBLISHED',
        'PUBLISHED_AB',
        'PUBLISHED_AB_VARIANT',
        'PUBLISHED_OR_SCHEDULED',
        'RSS_TO_EMAIL_DRAFT',
        'RSS_TO_EMAIL_PUBLISHED',
        'SCHEDULED',
        'SCHEDULED_AB',
        'SCHEDULED_OR_PUBLISHED',
      ])
      .exactOptional()
      .openapi({ description: 'The email state.', example: null }),
    subcategory: z
      .enum([
        'ab_loser_variant',
        'ab_loser_variant_site_page',
        'ab_master',
        'ab_master_site_page',
        'ab_variant',
        'ab_variant_site_page',
        'automated',
        'automated_ab_master',
        'automated_ab_variant',
        'automated_for_crm',
        'automated_for_custom_survey',
        'automated_for_deal',
        'automated_for_feedback_ces',
        'automated_for_feedback_custom',
        'automated_for_feedback_nps',
        'automated_for_form',
        'automated_for_form_buffer',
        'automated_for_form_draft',
        'automated_for_form_legacy',
        'automated_for_leadflow',
        'automated_for_ticket',
        'batch',
        'blog_article_instance_layout',
        'blog_article_listing',
        'blog_author_detail',
        'blog_email',
        'blog_email_child',
        'case_study',
        'case_study_instance_layout',
        'case_study_listing',
        'discardable_stub',
        'imported_blog_post',
        'kb_404_page',
        'kb_article_instance_layout',
        'kb_listing',
        'kb_search_results',
        'kb_support_form',
        'landing_page',
        'legacy_blog_post',
        'legacy_page',
        'localtime',
        'manage_preferences_email',
        'marketing_single_send_api',
        'membership_email_verification',
        'membership_follow_up',
        'membership_otp_login',
        'membership_password_reset',
        'membership_password_saved',
        'membership_passwordless_auth',
        'membership_registration',
        'membership_registration_follow_up',
        'membership_verification',
        'normal_blog_post',
        'optin_email',
        'optin_followup_email',
        'page_instance_layout',
        'page_stub',
        'performable_landing_page',
        'performable_landing_page_cutover',
        'podcast_instance_layout',
        'podcast_listing',
        'portal_content',
        'resubscribe_confirmation_email',
        'resubscribe_email',
        'rss_to_email',
        'rss_to_email_child',
        'scp_instance_layout_page',
        'scp_static_page',
        'single_send_api',
        'site_page',
        'smtp_token',
        'staged_page',
        'ticket_closed_kickback_email',
        'ticket_opened_kickback_email',
        'ticket_pipeline_automated',
        'UNKNOWN',
        'unsubscribe_confirmation_email',
        'web_interactive',
      ])
      .exactOptional()
      .openapi({ description: 'The email subcategory.', example: null }),
    subject: z
      .string()
      .exactOptional()
      .openapi({ description: 'The subject of the email.', example: null }),
    subscriptionDetails: PublicEmailSubscriptionDetailsSchema.exactOptional(),
    testing: PublicEmailTestingDetailsSchema.exactOptional(),
    to: PublicEmailToDetailsSchema.exactOptional(),
    webversion: PublicWebversionDetailsSchema.exactOptional(),
  })
  .openapi({ example: null, required: [] })
  .openapi('EmailCreateRequest')

const EmailUpdateRequestSchema = z
  .object({
    activeDomain: z
      .string()
      .exactOptional()
      .openapi({ description: 'The active domain of the email.', example: null }),
    archived: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Determines if the email is archived or not.', example: null }),
    businessUnitId: z
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
        description: 'The ID of the business unit associated with the email.',
        example: null,
      }),
    campaign: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the campaign this email is associated to.',
        example: null,
      }),
    content: PublicEmailContentSchema.exactOptional(),
    folderIdV2: z
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
        description: 'The ID of the folder where the email will be stored.',
        example: null,
      }),
    from: PublicEmailFromDetailsSchema.exactOptional(),
    jitterSendTime: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Determines whether the email send time should be randomized to avoid sending all emails at the exact same time.',
        example: null,
      }),
    language: z
      .enum([
        'aa',
        'ab',
        'ae',
        'af',
        'af-na',
        'af-za',
        'agq',
        'agq-cm',
        'ak',
        'ak-gh',
        'am',
        'am-et',
        'an',
        'ann',
        'ann-ng',
        'ar',
        'ar-001',
        'ar-ae',
        'ar-bh',
        'ar-dj',
        'ar-dz',
        'ar-eg',
        'ar-eh',
        'ar-er',
        'ar-il',
        'ar-iq',
        'ar-jo',
        'ar-km',
        'ar-kw',
        'ar-lb',
        'ar-ly',
        'ar-ma',
        'ar-mr',
        'ar-om',
        'ar-ps',
        'ar-qa',
        'ar-sa',
        'ar-sd',
        'ar-so',
        'ar-ss',
        'ar-sy',
        'ar-td',
        'ar-tn',
        'ar-ye',
        'as',
        'as-in',
        'asa',
        'asa-tz',
        'ast',
        'ast-es',
        'av',
        'ay',
        'az',
        'az-az',
        'ba',
        'bal',
        'bal-pk',
        'bas',
        'bas-cm',
        'be',
        'be-by',
        'bem',
        'bem-zm',
        'bez',
        'bez-tz',
        'bg',
        'bg-bg',
        'bgc',
        'bgc-in',
        'bho',
        'bho-in',
        'bi',
        'blo',
        'blo-bj',
        'bm',
        'bm-ml',
        'bn',
        'bn-bd',
        'bn-in',
        'bo',
        'bo-cn',
        'bo-in',
        'br',
        'br-fr',
        'brx',
        'brx-in',
        'bs',
        'bs-ba',
        'ca',
        'ca-ad',
        'ca-es',
        'ca-fr',
        'ca-it',
        'ccp',
        'ccp-bd',
        'ccp-in',
        'ce',
        'ce-ru',
        'ceb',
        'ceb-ph',
        'cgg',
        'cgg-ug',
        'ch',
        'chr',
        'chr-us',
        'ckb',
        'ckb-iq',
        'ckb-ir',
        'co',
        'cr',
        'cs',
        'cs-cz',
        'csw',
        'csw-ca',
        'cu',
        'cu-ru',
        'cv',
        'cv-ru',
        'cy',
        'cy-gb',
        'da',
        'da-dk',
        'da-gl',
        'dav',
        'dav-ke',
        'de',
        'de-at',
        'de-be',
        'de-ch',
        'de-de',
        'de-gr',
        'de-it',
        'de-li',
        'de-lu',
        'dje',
        'dje-ne',
        'doi',
        'doi-in',
        'dsb',
        'dsb-de',
        'dua',
        'dua-cm',
        'dv',
        'dyo',
        'dyo-sn',
        'dz',
        'dz-bt',
        'ebu',
        'ebu-ke',
        'ee',
        'ee-gh',
        'ee-tg',
        'el',
        'el-cy',
        'el-gr',
        'en',
        'en-001',
        'en-150',
        'en-ae',
        'en-ag',
        'en-ai',
        'en-as',
        'en-at',
        'en-au',
        'en-bb',
        'en-be',
        'en-bi',
        'en-bm',
        'en-bs',
        'en-bw',
        'en-bz',
        'en-ca',
        'en-cc',
        'en-ch',
        'en-ck',
        'en-cm',
        'en-cn',
        'en-cx',
        'en-cy',
        'en-cz',
        'en-de',
        'en-dg',
        'en-dk',
        'en-dm',
        'en-ee',
        'en-eg',
        'en-er',
        'en-es',
        'en-fi',
        'en-fj',
        'en-fk',
        'en-fm',
        'en-fr',
        'en-gb',
        'en-gd',
        'en-gg',
        'en-gh',
        'en-gi',
        'en-gm',
        'en-gs',
        'en-gu',
        'en-gy',
        'en-hk',
        'en-hu',
        'en-id',
        'en-ie',
        'en-il',
        'en-im',
        'en-in',
        'en-io',
        'en-it',
        'en-je',
        'en-jm',
        'en-ke',
        'en-ki',
        'en-kn',
        'en-ky',
        'en-lc',
        'en-lr',
        'en-ls',
        'en-lu',
        'en-mg',
        'en-mh',
        'en-mo',
        'en-mp',
        'en-ms',
        'en-mt',
        'en-mu',
        'en-mv',
        'en-mw',
        'en-mx',
        'en-my',
        'en-na',
        'en-nf',
        'en-ng',
        'en-nl',
        'en-no',
        'en-nr',
        'en-nu',
        'en-nz',
        'en-pg',
        'en-ph',
        'en-pk',
        'en-pl',
        'en-pn',
        'en-pr',
        'en-pt',
        'en-pw',
        'en-ro',
        'en-rw',
        'en-sb',
        'en-sc',
        'en-sd',
        'en-se',
        'en-sg',
        'en-sh',
        'en-si',
        'en-sk',
        'en-sl',
        'en-ss',
        'en-sx',
        'en-sz',
        'en-tc',
        'en-th',
        'en-tk',
        'en-tn',
        'en-to',
        'en-tt',
        'en-tv',
        'en-tz',
        'en-ug',
        'en-um',
        'en-us',
        'en-vc',
        'en-vg',
        'en-vi',
        'en-vn',
        'en-vu',
        'en-ws',
        'en-za',
        'en-zm',
        'en-zw',
        'eo',
        'eo-001',
        'es',
        'es-419',
        'es-ar',
        'es-bo',
        'es-br',
        'es-bz',
        'es-cl',
        'es-co',
        'es-cr',
        'es-cu',
        'es-do',
        'es-ea',
        'es-ec',
        'es-es',
        'es-gq',
        'es-gt',
        'es-hn',
        'es-ic',
        'es-mx',
        'es-ni',
        'es-pa',
        'es-pe',
        'es-ph',
        'es-pr',
        'es-py',
        'es-sv',
        'es-us',
        'es-uy',
        'es-ve',
        'et',
        'et-ee',
        'eu',
        'eu-es',
        'ewo',
        'ewo-cm',
        'fa',
        'fa-af',
        'fa-ir',
        'ff',
        'ff-bf',
        'ff-cm',
        'ff-gh',
        'ff-gm',
        'ff-gn',
        'ff-gw',
        'ff-lr',
        'ff-mr',
        'ff-ne',
        'ff-ng',
        'ff-sl',
        'ff-sn',
        'fi',
        'fi-fi',
        'fil',
        'fil-ph',
        'fj',
        'fo',
        'fo-dk',
        'fo-fo',
        'fr',
        'fr-be',
        'fr-bf',
        'fr-bi',
        'fr-bj',
        'fr-bl',
        'fr-ca',
        'fr-cd',
        'fr-cf',
        'fr-cg',
        'fr-ch',
        'fr-ci',
        'fr-cm',
        'fr-dj',
        'fr-dz',
        'fr-fr',
        'fr-ga',
        'fr-gf',
        'fr-gn',
        'fr-gp',
        'fr-gq',
        'fr-ht',
        'fr-km',
        'fr-lu',
        'fr-ma',
        'fr-mc',
        'fr-mf',
        'fr-mg',
        'fr-ml',
        'fr-mq',
        'fr-mr',
        'fr-mu',
        'fr-nc',
        'fr-ne',
        'fr-pf',
        'fr-pm',
        'fr-re',
        'fr-rw',
        'fr-sc',
        'fr-sn',
        'fr-sy',
        'fr-td',
        'fr-tg',
        'fr-tn',
        'fr-vu',
        'fr-wf',
        'fr-yt',
        'frr',
        'frr-de',
        'fur',
        'fur-it',
        'fy',
        'fy-nl',
        'ga',
        'ga-gb',
        'ga-ie',
        'gaa',
        'gaa-gh',
        'gd',
        'gd-gb',
        'gl',
        'gl-es',
        'gn',
        'gsw',
        'gsw-ch',
        'gsw-fr',
        'gsw-li',
        'gu',
        'gu-in',
        'guz',
        'guz-ke',
        'gv',
        'gv-im',
        'ha',
        'ha-gh',
        'ha-ne',
        'ha-ng',
        'haw',
        'haw-us',
        'he',
        'he-il',
        'hi',
        'hi-in',
        'hmn',
        'ho',
        'hr',
        'hr-ba',
        'hr-hr',
        'hsb',
        'hsb-de',
        'ht',
        'ht-ht',
        'hu',
        'hu-hu',
        'hy',
        'hy-am',
        'hz',
        'ia',
        'ia-001',
        'id',
        'id-id',
        'ie',
        'ie-ee',
        'ig',
        'ig-ng',
        'ii',
        'ii-cn',
        'ik',
        'io',
        'is',
        'is-is',
        'it',
        'it-ch',
        'it-it',
        'it-sm',
        'it-va',
        'iu',
        'ja',
        'ja-jp',
        'jgo',
        'jgo-cm',
        'jmc',
        'jmc-tz',
        'jv',
        'jv-id',
        'ka',
        'ka-ge',
        'kab',
        'kab-dz',
        'kam',
        'kam-ke',
        'kar',
        'kde',
        'kde-tz',
        'kea',
        'kea-cv',
        'kg',
        'kgp',
        'kgp-br',
        'kh',
        'khq',
        'khq-ml',
        'ki',
        'ki-ke',
        'kj',
        'kk',
        'kk-kz',
        'kkj',
        'kkj-cm',
        'kl',
        'kl-gl',
        'kln',
        'kln-ke',
        'km',
        'km-kh',
        'kn',
        'kn-in',
        'ko',
        'ko-cn',
        'ko-kp',
        'ko-kr',
        'kok',
        'kok-in',
        'kr',
        'ks',
        'ks-in',
        'ksb',
        'ksb-tz',
        'ksf',
        'ksf-cm',
        'ksh',
        'ksh-de',
        'ku',
        'ku-tr',
        'kv',
        'kw',
        'kw-gb',
        'kxv',
        'kxv-in',
        'ky',
        'ky-kg',
        'la',
        'lag',
        'lag-tz',
        'lb',
        'lb-lu',
        'lg',
        'lg-ug',
        'li',
        'lij',
        'lij-it',
        'lkt',
        'lkt-us',
        'lmo',
        'lmo-it',
        'ln',
        'ln-ao',
        'ln-cd',
        'ln-cf',
        'ln-cg',
        'lo',
        'lo-la',
        'lrc',
        'lrc-iq',
        'lrc-ir',
        'lt',
        'lt-lt',
        'lu',
        'lu-cd',
        'luo',
        'luo-ke',
        'luy',
        'luy-ke',
        'lv',
        'lv-lv',
        'mai',
        'mai-in',
        'mas',
        'mas-ke',
        'mas-tz',
        'mdf',
        'mdf-ru',
        'mer',
        'mer-ke',
        'mfe',
        'mfe-mu',
        'mg',
        'mg-mg',
        'mgh',
        'mgh-mz',
        'mgo',
        'mgo-cm',
        'mh',
        'mi',
        'mi-nz',
        'mk',
        'mk-mk',
        'ml',
        'ml-in',
        'mn',
        'mn-mn',
        'mni',
        'mni-in',
        'mr',
        'mr-in',
        'ms',
        'ms-bn',
        'ms-id',
        'ms-my',
        'ms-sg',
        'mt',
        'mt-mt',
        'mua',
        'mua-cm',
        'my',
        'my-mm',
        'mzn',
        'mzn-ir',
        'na',
        'naq',
        'naq-na',
        'nb',
        'nb-no',
        'nb-sj',
        'nd',
        'nd-zw',
        'nds',
        'nds-de',
        'nds-nl',
        'ne',
        'ne-in',
        'ne-np',
        'ng',
        'nl',
        'nl-aw',
        'nl-be',
        'nl-bq',
        'nl-ch',
        'nl-cw',
        'nl-lu',
        'nl-nl',
        'nl-sr',
        'nl-sx',
        'nmg',
        'nmg-cm',
        'nn',
        'nn-no',
        'nnh',
        'nnh-cm',
        'no',
        'no-no',
        'nqo',
        'nqo-gn',
        'nr',
        'nso',
        'nso-za',
        'nus',
        'nus-ss',
        'nv',
        'ny',
        'nyn',
        'nyn-ug',
        'oc',
        'oc-es',
        'oc-fr',
        'oj',
        'om',
        'om-et',
        'om-ke',
        'or',
        'or-in',
        'os',
        'os-ge',
        'os-ru',
        'pa',
        'pa-in',
        'pa-pk',
        'pcm',
        'pcm-ng',
        'pi',
        'pis',
        'pis-sb',
        'pl',
        'pl-pl',
        'prg',
        'prg-001',
        'ps',
        'ps-af',
        'ps-pk',
        'pt',
        'pt-ao',
        'pt-br',
        'pt-ch',
        'pt-cv',
        'pt-gq',
        'pt-gw',
        'pt-lu',
        'pt-mo',
        'pt-mz',
        'pt-pt',
        'pt-st',
        'pt-tl',
        'qu',
        'qu-bo',
        'qu-ec',
        'qu-pe',
        'raj',
        'raj-in',
        'rm',
        'rm-ch',
        'rn',
        'rn-bi',
        'ro',
        'ro-md',
        'ro-ro',
        'rof',
        'rof-tz',
        'ru',
        'ru-by',
        'ru-kg',
        'ru-kz',
        'ru-md',
        'ru-ru',
        'ru-ua',
        'rw',
        'rw-rw',
        'rwk',
        'rwk-tz',
        'sa',
        'sa-in',
        'sah',
        'sah-ru',
        'saq',
        'saq-ke',
        'sat',
        'sat-in',
        'sbp',
        'sbp-tz',
        'sc',
        'sc-it',
        'sd',
        'sd-in',
        'sd-pk',
        'se',
        'se-fi',
        'se-no',
        'se-se',
        'seh',
        'seh-mz',
        'ses',
        'ses-ml',
        'sg',
        'sg-cf',
        'shi',
        'shi-ma',
        'si',
        'si-lk',
        'sk',
        'sk-sk',
        'sl',
        'sl-si',
        'sm',
        'smn',
        'smn-fi',
        'sms',
        'sms-fi',
        'sn',
        'sn-zw',
        'so',
        'so-dj',
        'so-et',
        'so-ke',
        'so-so',
        'sq',
        'sq-al',
        'sq-mk',
        'sq-xk',
        'sr',
        'sr-ba',
        'sr-cs',
        'sr-me',
        'sr-rs',
        'sr-xk',
        'ss',
        'st',
        'st-ls',
        'st-za',
        'su',
        'su-id',
        'sv',
        'sv-ax',
        'sv-fi',
        'sv-se',
        'sw',
        'sw-cd',
        'sw-ke',
        'sw-tz',
        'sw-ug',
        'sy',
        'syr',
        'syr-iq',
        'syr-sy',
        'szl',
        'szl-pl',
        'ta',
        'ta-in',
        'ta-lk',
        'ta-my',
        'ta-sg',
        'te',
        'te-in',
        'teo',
        'teo-ke',
        'teo-ug',
        'tg',
        'tg-tj',
        'th',
        'th-th',
        'ti',
        'ti-er',
        'ti-et',
        'tk',
        'tk-tm',
        'tl',
        'tn',
        'tn-bw',
        'tn-za',
        'to',
        'to-to',
        'tok',
        'tok-001',
        'tr',
        'tr-cy',
        'tr-tr',
        'ts',
        'tt',
        'tt-ru',
        'tw',
        'twq',
        'twq-ne',
        'ty',
        'tzm',
        'tzm-ma',
        'ug',
        'ug-cn',
        'uk',
        'uk-ua',
        'ur',
        'ur-in',
        'ur-pk',
        'uz',
        'uz-af',
        'uz-uz',
        'vai',
        'vai-lr',
        've',
        'vec',
        'vec-it',
        'vi',
        'vi-vn',
        'vmw',
        'vmw-mz',
        'vo',
        'vo-001',
        'vun',
        'vun-tz',
        'wa',
        'wae',
        'wae-ch',
        'wo',
        'wo-sn',
        'xh',
        'xh-za',
        'xnr',
        'xnr-in',
        'xog',
        'xog-ug',
        'yav',
        'yav-cm',
        'yi',
        'yi-001',
        'yi-ua',
        'yo',
        'yo-bj',
        'yo-ng',
        'yrl',
        'yrl-br',
        'yrl-co',
        'yrl-ve',
        'yue',
        'yue-cn',
        'yue-hk',
        'yue-mo',
        'za',
        'za-cn',
        'zgh',
        'zgh-ma',
        'zh',
        'zh-cn',
        'zh-hans',
        'zh-hant',
        'zh-hk',
        'zh-mo',
        'zh-my',
        'zh-sg',
        'zh-tw',
        'zu',
        'zu-za',
      ])
      .exactOptional()
      .openapi({
        description: "The language code for the email, such as 'en' for English.",
        example: null,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the email, as displayed on the email dashboard.',
        example: null,
      }),
    publishDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time the email is scheduled for, in ISO8601 representation. This is only used in local time or scheduled emails.',
        example: null,
      }),
    rssData: PublicRssEmailDetailsSchema.exactOptional(),
    sendOnPublish: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determines whether the email will be sent immediately on publish.',
        example: null,
      }),
    state: z
      .enum([
        'AGENT_GENERATED',
        'AUTOMATED',
        'AUTOMATED_AB',
        'AUTOMATED_AB_VARIANT',
        'AUTOMATED_DRAFT',
        'AUTOMATED_DRAFT_AB',
        'AUTOMATED_DRAFT_ABVARIANT',
        'AUTOMATED_FOR_FORM',
        'AUTOMATED_FOR_FORM_BUFFER',
        'AUTOMATED_FOR_FORM_DRAFT',
        'AUTOMATED_FOR_FORM_LEGACY',
        'AUTOMATED_LOSER_ABVARIANT',
        'AUTOMATED_SENDING',
        'BLOG_EMAIL_DRAFT',
        'BLOG_EMAIL_PUBLISHED',
        'DRAFT',
        'DRAFT_AB',
        'DRAFT_AB_VARIANT',
        'ERROR',
        'LOSER_AB_VARIANT',
        'PAGE_STUB',
        'PRE_PROCESSING',
        'PROCESSING',
        'PUBLISHED',
        'PUBLISHED_AB',
        'PUBLISHED_AB_VARIANT',
        'PUBLISHED_OR_SCHEDULED',
        'RSS_TO_EMAIL_DRAFT',
        'RSS_TO_EMAIL_PUBLISHED',
        'SCHEDULED',
        'SCHEDULED_AB',
        'SCHEDULED_OR_PUBLISHED',
      ])
      .exactOptional()
      .openapi({ description: 'The email state.', example: null }),
    subcategory: z
      .enum([
        'ab_loser_variant',
        'ab_loser_variant_site_page',
        'ab_master',
        'ab_master_site_page',
        'ab_variant',
        'ab_variant_site_page',
        'automated',
        'automated_ab_master',
        'automated_ab_variant',
        'automated_for_crm',
        'automated_for_custom_survey',
        'automated_for_deal',
        'automated_for_feedback_ces',
        'automated_for_feedback_custom',
        'automated_for_feedback_nps',
        'automated_for_form',
        'automated_for_form_buffer',
        'automated_for_form_draft',
        'automated_for_form_legacy',
        'automated_for_leadflow',
        'automated_for_ticket',
        'batch',
        'blog_article_instance_layout',
        'blog_article_listing',
        'blog_author_detail',
        'blog_email',
        'blog_email_child',
        'case_study',
        'case_study_instance_layout',
        'case_study_listing',
        'discardable_stub',
        'imported_blog_post',
        'kb_404_page',
        'kb_article_instance_layout',
        'kb_listing',
        'kb_search_results',
        'kb_support_form',
        'landing_page',
        'legacy_blog_post',
        'legacy_page',
        'localtime',
        'manage_preferences_email',
        'marketing_single_send_api',
        'membership_email_verification',
        'membership_follow_up',
        'membership_otp_login',
        'membership_password_reset',
        'membership_password_saved',
        'membership_passwordless_auth',
        'membership_registration',
        'membership_registration_follow_up',
        'membership_verification',
        'normal_blog_post',
        'optin_email',
        'optin_followup_email',
        'page_instance_layout',
        'page_stub',
        'performable_landing_page',
        'performable_landing_page_cutover',
        'podcast_instance_layout',
        'podcast_listing',
        'portal_content',
        'resubscribe_confirmation_email',
        'resubscribe_email',
        'rss_to_email',
        'rss_to_email_child',
        'scp_instance_layout_page',
        'scp_static_page',
        'single_send_api',
        'site_page',
        'smtp_token',
        'staged_page',
        'ticket_closed_kickback_email',
        'ticket_opened_kickback_email',
        'ticket_pipeline_automated',
        'UNKNOWN',
        'unsubscribe_confirmation_email',
        'web_interactive',
      ])
      .exactOptional()
      .openapi({ description: 'The email subcategory.', example: null }),
    subject: z
      .string()
      .exactOptional()
      .openapi({ description: 'The subject of the email.', example: null }),
    subscriptionDetails: PublicEmailSubscriptionDetailsSchema.exactOptional(),
    testing: PublicEmailTestingDetailsSchema.exactOptional(),
    to: PublicEmailToDetailsSchema.exactOptional(),
    webversion: PublicWebversionDetailsSchema.exactOptional(),
  })
  .openapi({ example: null, required: [] })
  .openapi('EmailUpdateRequest')

const ErrorDetailSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({ description: 'The status code associated with the error detail', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'Context about the error condition',
        example: '{missingScopes=[scope1, scope2]}',
      }),
    in: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the field or parameter in which the error was found.',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description:
          'A human readable message describing the error along with remediation steps where appropriate',
        example: null,
      }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A specific category that contains more specific detail about the error',
        example: null,
      }),
  })
  .openapi({
    required: ['message'],
    description:
      'Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.',
    example: null,
  })
  .openapi('ErrorDetail')

const ErrorSchema = z
  .object({
    category: z.string().openapi({ description: 'The error category', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'Context about the error condition',
        example: '{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}',
      }),
    correlationId: z
      .uuid()
      .openapi({
        description:
          'A unique identifier for the request. Include this value with any error reports or support tickets',
        example: 'aeb5f871-7f07-4993-9211-075dc63e7cbf',
      }),
    errors: z
      .array(ErrorDetailSchema)
      .exactOptional()
      .openapi({ description: 'further information about the error', example: null }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'A map of link names to associated URIs containing documentation about the error or recommended remediation steps',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description:
          'A human readable message describing the error along with remediation steps where appropriate',
        example: 'An error occurred',
      }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A specific category that contains more specific detail about the error',
        example: null,
      }),
  })
  .openapi({
    required: ['category', 'correlationId', 'message'],
    description:
      'Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.',
    example: {
      message: 'Invalid input (details will vary based on the error)',
      correlationId: 'aeb5f871-7f07-4993-9211-075dc63e7cbf',
      category: 'VALIDATION_ERROR',
      links: { 'knowledge-base': 'https://www.hubspot.com/products/service/knowledge-base' },
    },
  })
  .openapi('Error')

const PublicEmailVersionSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for this version of the public email.',
        example: null,
      }),
    object: PublicEmailSchema,
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time when this version of the email was last updated, in ISO 8601 format.',
        example: null,
      }),
    user: VersionUserSchema,
  })
  .openapi({ required: ['id', 'object', 'updatedAt', 'user'], example: null })
  .openapi('PublicEmailVersion')

const ErrorResponse = {
  description: 'An error occurred.',
  content: { '*/*': { schema: ErrorSchema, example: null } },
}

const DeveloperHapikeySecurityScheme = { type: 'apiKey', name: 'hapikey', in: 'query' }

const Oauth2SecurityScheme = {
  type: 'oauth2',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://app.hubspot.com/oauth/authorize',
      tokenUrl: 'https://api.hubapi.com/oauth/v1/token',
      scopes: {
        content: '',
        'marketing-email': '',
        'marketing.email.read': '',
        'marketing.email.write': '',
        'transactional-email': '',
      },
    },
  },
}

const PrivateAppsSecurityScheme = { type: 'apiKey', name: 'private-app', in: 'header' }

const PrivateAppsLegacySecurityScheme = { type: 'apiKey', name: 'private-app-legacy', in: 'header' }

export const getMarketingEmails202609Route = createRoute({
  method: 'get',
  path: '/marketing/emails/2026-09',
  tags: ['Basic'],
  summary: 'List Emails',
  description:
    'Retrieve a list of marketing emails from your HubSpot account. This endpoint allows you to filter emails based on various criteria such as publication date, creation date, update date, and more. You can also control the number of results per page and include additional statistics or properties in the response.',
  operationId: 'get-/marketing/emails/2026-09_/marketing/emails/v3',
  request: {
    query: z.object({
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'after',
            in: 'query',
            description:
              'The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      archived: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'archived',
            in: 'query',
            description: 'Whether to return only results that have been archived.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null },
          },
          example: null,
        }),
      campaign: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'campaign',
            in: 'query',
            description: 'Filter emails by campaign name.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      createdAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'createdAfter',
            in: 'query',
            description: 'Filter emails created after a specific date. Format should be date-time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      createdAt: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'createdAt',
            in: 'query',
            description: 'Filter emails by the exact creation date. Format should be date-time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      createdBefore: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'createdBefore',
            in: 'query',
            description:
              'Filter emails created before a specific date. Format should be date-time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      includedProperties: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().openapi({ example: null })),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'includedProperties',
            in: 'query',
            description:
              'Specify additional properties to include in the response. Accepts an array of strings.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'array', example: null, items: { type: 'string', example: null } },
          },
          example: null,
        }),
      includeStats: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'includeStats',
            in: 'query',
            description: 'Include statistics in the response. Accepts a boolean value.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null },
          },
          example: null,
        }),
      isPublished: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'isPublished',
            in: 'query',
            description: 'Filter emails by their published status. Accepts a boolean value.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null },
          },
          example: null,
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
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The maximum number of results to display per page.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      marketingCampaignNames: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'marketingCampaignNames',
            in: 'query',
            description:
              'Include marketing campaign names in the response. Accepts a boolean value.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null },
          },
          example: null,
        }),
      publishedAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'publishedAfter',
            in: 'query',
            description:
              'Filter emails published after a specific date. Format should be date-time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      publishedAt: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'publishedAt',
            in: 'query',
            description: 'Filter emails by the exact publication date. Format should be date-time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      publishedBefore: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'publishedBefore',
            in: 'query',
            description:
              'Filter emails published before a specific date. Format should be date-time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      sort: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().openapi({ example: null })),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'Specify the sorting order for the results. Accepts an array of strings.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'array', example: null, items: { type: 'string', example: null } },
          },
          example: null,
        }),
      type: z
        .enum([
          'AB_EMAIL',
          'AUTOMATED_AB_EMAIL',
          'AUTOMATED_EMAIL',
          'BATCH_EMAIL',
          'BLOG_EMAIL',
          'BLOG_EMAIL_CHILD',
          'FEEDBACK_CES_EMAIL',
          'FEEDBACK_CUSTOM_EMAIL',
          'FEEDBACK_CUSTOM_SURVEY_EMAIL',
          'FEEDBACK_NPS_EMAIL',
          'FOLLOWUP_EMAIL',
          'LEADFLOW_EMAIL',
          'LOCALTIME_EMAIL',
          'MANAGE_PREFERENCES_EMAIL',
          'MARKETING_SINGLE_SEND_API',
          'MEMBERSHIP_EMAIL_VERIFICATION_EMAIL',
          'MEMBERSHIP_FOLLOW_UP_EMAIL',
          'MEMBERSHIP_OTP_LOGIN_EMAIL',
          'MEMBERSHIP_PASSWORD_RESET_EMAIL',
          'MEMBERSHIP_PASSWORD_SAVED_EMAIL',
          'MEMBERSHIP_PASSWORDLESS_AUTH_EMAIL',
          'MEMBERSHIP_REGISTRATION_EMAIL',
          'MEMBERSHIP_REGISTRATION_FOLLOW_UP_EMAIL',
          'MEMBERSHIP_VERIFICATION_EMAIL',
          'OPTIN_EMAIL',
          'OPTIN_FOLLOWUP_EMAIL',
          'RESUBSCRIBE_EMAIL',
          'RSS_EMAIL',
          'RSS_EMAIL_CHILD',
          'SINGLE_SEND_API',
          'SMTP_TOKEN',
          'TICKET_EMAIL',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            description:
              'Filter emails by type. Accepts specific email types such as AB_EMAIL, BATCH_EMAIL, etc.',
            required: false,
            style: 'form',
            explode: true,
            schema: {
              type: 'string',
              example: null,
              enum: [
                'AB_EMAIL',
                'AUTOMATED_AB_EMAIL',
                'AUTOMATED_EMAIL',
                'BATCH_EMAIL',
                'BLOG_EMAIL',
                'BLOG_EMAIL_CHILD',
                'FEEDBACK_CES_EMAIL',
                'FEEDBACK_CUSTOM_EMAIL',
                'FEEDBACK_CUSTOM_SURVEY_EMAIL',
                'FEEDBACK_NPS_EMAIL',
                'FOLLOWUP_EMAIL',
                'LEADFLOW_EMAIL',
                'LOCALTIME_EMAIL',
                'MANAGE_PREFERENCES_EMAIL',
                'MARKETING_SINGLE_SEND_API',
                'MEMBERSHIP_EMAIL_VERIFICATION_EMAIL',
                'MEMBERSHIP_FOLLOW_UP_EMAIL',
                'MEMBERSHIP_OTP_LOGIN_EMAIL',
                'MEMBERSHIP_PASSWORD_RESET_EMAIL',
                'MEMBERSHIP_PASSWORD_SAVED_EMAIL',
                'MEMBERSHIP_PASSWORDLESS_AUTH_EMAIL',
                'MEMBERSHIP_REGISTRATION_EMAIL',
                'MEMBERSHIP_REGISTRATION_FOLLOW_UP_EMAIL',
                'MEMBERSHIP_VERIFICATION_EMAIL',
                'OPTIN_EMAIL',
                'OPTIN_FOLLOWUP_EMAIL',
                'RESUBSCRIBE_EMAIL',
                'RSS_EMAIL',
                'RSS_EMAIL_CHILD',
                'SINGLE_SEND_API',
                'SMTP_TOKEN',
                'TICKET_EMAIL',
              ],
            },
          },
          example: null,
        }),
      updatedAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'updatedAfter',
            in: 'query',
            description: 'Filter emails updated after a specific date. Format should be date-time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      updatedAt: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'updatedAt',
            in: 'query',
            description: 'Filter emails by the exact update date. Format should be date-time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      updatedBefore: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'updatedBefore',
            in: 'query',
            description:
              'Filter emails updated before a specific date. Format should be date-time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      variantStats: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'variantStats',
            in: 'query',
            description: 'Include variant statistics in the response. Accepts a boolean value.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null },
          },
          example: null,
        }),
      workflowNames: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'workflowNames',
            in: 'query',
            description: 'Include workflow names in the response. Accepts a boolean value.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: CollectionResponseWithTotalPublicEmailSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['marketing.email.read'] },
    { oauth2: ['marketing.email.write'] },
    { oauth2: ['content'] },
  ],
})

export const postMarketingEmails202609Route = createRoute({
  method: 'post',
  path: '/marketing/emails/2026-09',
  tags: ['Basic'],
  summary: 'Create Email',
  description:
    'Create a new marketing email in your HubSpot account using the specified parameters. This endpoint allows you to define the content, settings, and other details of the email. Upon successful creation, the URL of the newly created email resource is returned.',
  operationId: 'post-/marketing/emails/2026-09_/marketing/emails/v3',
  request: {
    body: {
      content: { 'application/json': { schema: EmailCreateRequestSchema, example: null } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicEmailSchema, example: null } },
      headers: z.object({
        Location: {
          description: 'URL of the newly created resource',
          style: 'simple',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'URL of the newly created resource',
              param: { required: false },
              example: null,
            }),
        },
      }),
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['marketing.email.read'] },
    { oauth2: ['marketing.email.write'] },
    { oauth2: ['content'] },
  ],
})

export const postMarketingEmails202609AbTestCreateVariationRoute = createRoute({
  method: 'post',
  path: '/marketing/emails/2026-09/ab-test/create-variation',
  tags: ['Emails'],
  summary: 'Create an A/B test variation of a marketing email',
  description:
    "Create a variation of a marketing email for an A/B test. The new variation will be created as a draft. If an active variation already exists, a new one won't be created.",
  operationId: 'post-/marketing/emails/2026-09/ab-test/create-variation_createAbTestVariation',
  request: {
    body: {
      content: { 'application/json': { schema: AbTestCreateRequestVNextSchema, example: null } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicEmailSchema, example: null } },
      headers: z.object({
        Location: {
          description: 'URL of the newly created resource',
          style: 'simple',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'URL of the newly created resource',
              param: { required: false },
              example: null,
            }),
        },
      }),
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['marketing.email.read'] },
    { oauth2: ['marketing.email.write'] },
    { oauth2: ['content'] },
  ],
})

export const postMarketingEmails202609CloneRoute = createRoute({
  method: 'post',
  path: '/marketing/emails/2026-09/clone',
  tags: ['Emails'],
  summary: 'Clone a marketing email',
  description:
    'This will create a duplicate email with the same properties as the original, with the exception of a unique ID.',
  operationId: 'post-/marketing/emails/2026-09/clone_clone',
  request: {
    body: {
      content: { 'application/json': { schema: EmailCloneRequestVNextSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicEmailSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['marketing.email.read'] },
    { oauth2: ['marketing.email.write'] },
    { oauth2: ['content'] },
  ],
})

export const getMarketingEmails202609StatisticsHistogramRoute = createRoute({
  method: 'get',
  path: '/marketing/emails/2026-09/statistics/histogram',
  tags: ['Basic'],
  summary: 'Get aggregated statistic intervals',
  description:
    'Get aggregated statistics in intervals for a specified time span. Each interval contains aggregated statistics of the emails that were sent in that time.',
  operationId: 'get-/marketing/emails/2026-09/statistics/histogram_getHistogram',
  request: {
    query: z.object({
      emailIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .preprocess((val) => {
                if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
                  return val
                if (/^-?\d+$/.test(val)) return BigInt(val)
                const num = Number(val)
                return Number.isSafeInteger(num) ? BigInt(num) : val
              }, z.int64())
              .openapi({ type: 'integer', format: 'int64', example: null }),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'emailIds',
            in: 'query',
            description:
              'A list of email IDs to filter the statistics. This is a form-style parameter that can include multiple IDs.',
            required: false,
            style: 'form',
            explode: true,
            schema: {
              type: 'array',
              example: null,
              items: { type: 'integer', format: 'int64', example: null },
            },
          },
          example: null,
        }),
      endTimestamp: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'endTimestamp',
            in: 'query',
            description:
              'The end timestamp for the statistics data range. Must be in date-time format.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      interval: z
        .enum([
          'DAY',
          'HOUR',
          'MINUTE',
          'MONTH',
          'QUARTER',
          'QUARTER_HOUR',
          'SECOND',
          'WEEK',
          'YEAR',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'interval',
            in: 'query',
            description:
              'The time interval for the histogram. Valid values are YEAR, QUARTER, MONTH, WEEK, DAY, HOUR, QUARTER_HOUR, MINUTE, and SECOND.',
            required: false,
            style: 'form',
            explode: true,
            schema: {
              type: 'string',
              example: null,
              enum: [
                'DAY',
                'HOUR',
                'MINUTE',
                'MONTH',
                'QUARTER',
                'QUARTER_HOUR',
                'SECOND',
                'WEEK',
                'YEAR',
              ],
            },
          },
          example: null,
        }),
      startTimestamp: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'startTimestamp',
            in: 'query',
            description:
              'The start timestamp for the statistics data range. Must be in date-time format.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: CollectionResponseWithTotalEmailStatisticIntervalSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['marketing.email.read'] },
    { oauth2: ['marketing.email.write'] },
    { oauth2: ['content'] },
  ],
})

export const getMarketingEmails202609StatisticsListRoute = createRoute({
  method: 'get',
  path: '/marketing/emails/2026-09/statistics/list',
  tags: ['Basic'],
  summary: 'Get aggregated statistics',
  description:
    'Use this endpoint to get aggregated statistics of emails sent in a specified time span. It also returns the list of emails that were sent during the time span.',
  operationId: 'get-/marketing/emails/2026-09/statistics/list_getEmailsList',
  request: {
    query: z.object({
      emailIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .preprocess((val) => {
                if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
                  return val
                if (/^-?\d+$/.test(val)) return BigInt(val)
                const num = Number(val)
                return Number.isSafeInteger(num) ? BigInt(num) : val
              }, z.int64())
              .openapi({ type: 'integer', format: 'int64', example: null }),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'emailIds',
            in: 'query',
            description:
              'A list of email IDs to filter the statistics. This should be a comma-separated list of integer IDs.',
            required: false,
            style: 'form',
            explode: true,
            schema: {
              type: 'array',
              example: null,
              items: { type: 'integer', format: 'int64', example: null },
            },
          },
          example: null,
        }),
      endTimestamp: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'endTimestamp',
            in: 'query',
            description:
              'The end of the time range for the statistics, in ISO 8601 date-time format.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      property: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'property',
            in: 'query',
            description: 'The specific property of the email statistics to retrieve.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      startTimestamp: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'startTimestamp',
            in: 'query',
            description:
              'The start of the time range for the statistics, in ISO 8601 date-time format.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: AggregateEmailStatisticsSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['marketing.email.read'] },
    { oauth2: ['marketing.email.write'] },
    { oauth2: ['content'] },
  ],
})

export const getMarketingEmails202609EmailIdRoute = createRoute({
  method: 'get',
  path: '/marketing/emails/2026-09/{emailId}',
  tags: ['Emails'],
  summary: 'Get the details of a specified marketing email',
  description: 'Get the details for a marketing email.',
  operationId: 'get-/marketing/emails/2026-09/{emailId}_getById',
  request: {
    params: z.object({
      emailId: z
        .string()
        .openapi({
          param: {
            name: 'emailId',
            in: 'path',
            description: 'The unique identifier of the email to retrieve.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      archived: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'archived',
            in: 'query',
            description: 'Whether to return only results that have been archived.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null },
          },
          example: null,
        }),
      includedProperties: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().openapi({ example: null })),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'includedProperties',
            in: 'query',
            description: 'A list of specific properties to include in the response.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'array', example: null, items: { type: 'string', example: null } },
          },
          example: null,
        }),
      includeStats: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'includeStats',
            in: 'query',
            description: 'Whether to include statistics in the response.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null },
          },
          example: null,
        }),
      marketingCampaignNames: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'marketingCampaignNames',
            in: 'query',
            description: 'Whether to include marketing campaign names in the response.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null },
          },
          example: null,
        }),
      variantStats: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'variantStats',
            in: 'query',
            description: 'Whether to include variant statistics in the response.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null },
          },
          example: null,
        }),
      workflowNames: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'workflowNames',
            in: 'query',
            description: 'Whether to include workflow names in the response.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicEmailSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['marketing.email.read'] },
    { oauth2: ['marketing.email.write'] },
    { oauth2: ['content'] },
  ],
})

export const deleteMarketingEmails202609EmailIdRoute = createRoute({
  method: 'delete',
  path: '/marketing/emails/2026-09/{emailId}',
  tags: ['Emails'],
  summary: 'Delete a marketing email',
  description: 'Delete a marketing email by its ID',
  operationId: 'delete-/marketing/emails/2026-09/{emailId}_archive',
  request: {
    params: z.object({
      emailId: z
        .string()
        .openapi({
          param: {
            name: 'emailId',
            in: 'path',
            description: 'The unique identifier of the email to delete.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      archived: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'archived',
            in: 'query',
            description: 'Whether to return only results that have been archived.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [
    { oauth2: ['marketing.email.read'] },
    { oauth2: ['marketing.email.write'] },
    { oauth2: ['content'] },
  ],
})

export const patchMarketingEmails202609EmailIdRoute = createRoute({
  method: 'patch',
  path: '/marketing/emails/2026-09/{emailId}',
  tags: ['Emails'],
  summary: 'Update a marketing email',
  description: 'Change properties of a marketing email.',
  operationId: 'patch-/marketing/emails/2026-09/{emailId}_update',
  request: {
    params: z.object({
      emailId: z
        .string()
        .openapi({
          param: {
            name: 'emailId',
            in: 'path',
            description: 'The unique identifier of the email to update.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      archived: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'archived',
            in: 'query',
            description: 'Whether to return only results that have been archived.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: EmailUpdateRequestSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicEmailSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['marketing.email.read'] },
    { oauth2: ['marketing.email.write'] },
    { oauth2: ['content'] },
  ],
})

export const getMarketingEmails202609EmailIdAbTestGetVariationRoute = createRoute({
  method: 'get',
  path: '/marketing/emails/2026-09/{emailId}/ab-test/get-variation',
  tags: ['Emails'],
  summary: 'Get the variation of a an A/B marketing email',
  description:
    'This endpoint lets you obtain the variation of an A/B marketing email. If the email is variation A (master) it will return variation B (variant) and vice versa.',
  operationId: 'get-/marketing/emails/2026-09/{emailId}/ab-test/get-variation_getAbTestVariation',
  request: {
    params: z.object({
      emailId: z
        .string()
        .openapi({
          param: {
            name: 'emailId',
            in: 'path',
            description:
              'The unique identifier of the email for which the A/B test variation is being retrieved.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      archived: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'archived',
            in: 'query',
            description: 'Whether to return only results that have been archived.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null },
          },
          example: null,
        }),
      includedProperties: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().openapi({ example: null })),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'includedProperties',
            in: 'query',
            description: 'An array of property names to include in the response.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'array', example: null, items: { type: 'string', example: null } },
          },
          example: null,
        }),
      includeStats: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'includeStats',
            in: 'query',
            description: 'Whether to include statistics in the response. Accepts a boolean value.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null },
          },
          example: null,
        }),
      marketingCampaignNames: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'marketingCampaignNames',
            in: 'query',
            description:
              'Whether to include marketing campaign names in the response. Accepts a boolean value.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null },
          },
          example: null,
        }),
      variantStats: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'variantStats',
            in: 'query',
            description: 'Whether to include variant-specific statistics. Accepts a boolean value.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null },
          },
          example: null,
        }),
      workflowNames: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'workflowNames',
            in: 'query',
            description:
              'Whether to include workflow names in the response. Accepts a boolean value.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicEmailSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['marketing.email.read'] },
    { oauth2: ['marketing.email.write'] },
    { oauth2: ['content'] },
  ],
})

export const getMarketingEmails202609EmailIdDraftRoute = createRoute({
  method: 'get',
  path: '/marketing/emails/2026-09/{emailId}/draft',
  tags: ['Emails'],
  summary: 'Get draft version of a marketing email',
  description:
    'Get the draft version of an email (if it exists). If no draft version exists, the published email is returned.',
  operationId: 'get-/marketing/emails/2026-09/{emailId}/draft_getDraft',
  request: {
    params: z.object({
      emailId: z
        .string()
        .openapi({
          param: {
            name: 'emailId',
            in: 'path',
            description: 'The unique identifier of the email draft to retrieve.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicEmailSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['marketing.email.read'] },
    { oauth2: ['marketing.email.write'] },
    { oauth2: ['content'] },
  ],
})

export const patchMarketingEmails202609EmailIdDraftRoute = createRoute({
  method: 'patch',
  path: '/marketing/emails/2026-09/{emailId}/draft',
  tags: ['Emails'],
  summary: 'Create or update draft version',
  description:
    'Create or update the draft version of a marketing email. If no draft exists, the system creates a draft from the current “live” email then applies the request body to that draft. The draft version only lives on the buffer—the email is not cloned.',
  operationId: 'patch-/marketing/emails/2026-09/{emailId}/draft_upsertDraft',
  request: {
    params: z.object({
      emailId: z
        .string()
        .openapi({
          param: {
            name: 'emailId',
            in: 'path',
            description: 'The unique identifier of the email draft to update.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: EmailUpdateRequestSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicEmailSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['marketing.email.read'] },
    { oauth2: ['marketing.email.write'] },
    { oauth2: ['content'] },
  ],
})

export const postMarketingEmails202609EmailIdDraftResetRoute = createRoute({
  method: 'post',
  path: '/marketing/emails/2026-09/{emailId}/draft/reset',
  tags: ['Emails'],
  summary: 'Reset the draft version',
  description: 'Resets the draft back to a copy of the live object.',
  operationId: 'post-/marketing/emails/2026-09/{emailId}/draft/reset_resetDraft',
  request: {
    params: z.object({
      emailId: z
        .string()
        .openapi({
          param: {
            name: 'emailId',
            in: 'path',
            description: 'The unique identifier of the email draft to reset.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [
    { oauth2: ['marketing.email.read'] },
    { oauth2: ['marketing.email.write'] },
    { oauth2: ['content'] },
  ],
})

export const postMarketingEmails202609EmailIdPublishRoute = createRoute({
  method: 'post',
  path: '/marketing/emails/2026-09/{emailId}/publish',
  tags: ['Emails'],
  summary: 'Publish or send a marketing email',
  description:
    'If you have a Marketing Hub Enterprise account or the Transactional Email Add-On, you can use this endpoint to publish an automated email or send/schedule a regular email.',
  operationId: 'post-/marketing/emails/2026-09/{emailId}/publish_publishOrSend',
  request: {
    params: z.object({
      emailId: z
        .string()
        .openapi({
          param: {
            name: 'emailId',
            in: 'path',
            description: 'The unique identifier of the email to be published.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [{ oauth2: ['marketing-email'] }, { oauth2: ['transactional-email'] }],
})

export const getMarketingEmails202609EmailIdRevisionsRoute = createRoute({
  method: 'get',
  path: '/marketing/emails/2026-09/{emailId}/revisions',
  tags: ['Emails'],
  summary: 'Get revisions of a marketing email',
  description:
    'Get a list of all versions of a marketing email, with each entry including the full state of that particular version. To view the most recent version, sort by the updatedAt parameter. ',
  operationId: 'get-/marketing/emails/2026-09/{emailId}/revisions_getRevisions',
  request: {
    params: z.object({
      emailId: z
        .string()
        .openapi({
          param: {
            name: 'emailId',
            in: 'path',
            description: 'The unique identifier of the email for which to retrieve revisions.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'after',
            in: 'query',
            description:
              'The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'before',
            in: 'query',
            description:
              'A cursor token for pagination to retrieve results before a specific point.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
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
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The maximum number of results to display per page.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: CollectionResponseWithTotalPublicEmailVersionSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['marketing.email.read'] },
    { oauth2: ['marketing.email.write'] },
    { oauth2: ['content'] },
  ],
})

export const getMarketingEmails202609EmailIdRevisionsRevisionIdRoute = createRoute({
  method: 'get',
  path: '/marketing/emails/2026-09/{emailId}/revisions/{revisionId}',
  tags: ['Emails'],
  summary: 'Get a revision of a marketing email',
  description: 'Get a specific revision of a marketing email.',
  operationId: 'get-/marketing/emails/2026-09/{emailId}/revisions/{revisionId}_getRevisionById',
  request: {
    params: z.object({
      emailId: z
        .string()
        .openapi({
          param: {
            name: 'emailId',
            in: 'path',
            description:
              'The unique identifier of the email for which the revision is being retrieved.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      revisionId: z
        .string()
        .openapi({
          param: {
            name: 'revisionId',
            in: 'path',
            description: 'The unique identifier of the specific revision of the email to retrieve.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicEmailVersionSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['marketing.email.read'] },
    { oauth2: ['marketing.email.write'] },
    { oauth2: ['content'] },
  ],
})

export const postMarketingEmails202609EmailIdRevisionsRevisionIdRestoreRoute = createRoute({
  method: 'post',
  path: '/marketing/emails/2026-09/{emailId}/revisions/{revisionId}/restore',
  tags: ['Emails'],
  summary: 'Restore a revision of a marketing email',
  description:
    'Restores a previous revision of a marketing email. The current revision becomes old, and the restored revision is given a new version number.',
  operationId:
    'post-/marketing/emails/2026-09/{emailId}/revisions/{revisionId}/restore_restoreRevision',
  request: {
    params: z.object({
      emailId: z
        .string()
        .openapi({
          param: {
            name: 'emailId',
            in: 'path',
            description: 'The unique identifier of the email whose revision is to be restored.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      revisionId: z
        .string()
        .openapi({
          param: {
            name: 'revisionId',
            in: 'path',
            description: 'The unique identifier of the revision to restore.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [
    { oauth2: ['marketing.email.read'] },
    { oauth2: ['marketing.email.write'] },
    { oauth2: ['content'] },
  ],
})

export const postMarketingEmails202609EmailIdRevisionsRevisionIdRestoreToDraftRoute = createRoute({
  method: 'post',
  path: '/marketing/emails/2026-09/{emailId}/revisions/{revisionId}/restore-to-draft',
  tags: ['Emails'],
  summary: 'Restore a revision of a marketing email to DRAFT state',
  description:
    'Restores a previous revision of a marketing email to DRAFT state. If there is currently something in the draft for that object, it is overwritten. ',
  operationId:
    'post-/marketing/emails/2026-09/{emailId}/revisions/{revisionId}/restore-to-draft_restoreDraftRevision',
  request: {
    params: z.object({
      emailId: z
        .string()
        .openapi({
          param: {
            name: 'emailId',
            in: 'path',
            description: 'The unique identifier of the email to restore.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      revisionId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'revisionId',
            in: 'path',
            description: 'The unique identifier of the revision to restore to draft.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicEmailSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['marketing.email.read'] },
    { oauth2: ['marketing.email.write'] },
    { oauth2: ['content'] },
  ],
})

export const postMarketingEmails202609EmailIdUnpublishRoute = createRoute({
  method: 'post',
  path: '/marketing/emails/2026-09/{emailId}/unpublish',
  tags: ['Emails'],
  summary: 'Unpublish or cancel a marketing email',
  description:
    'If you have a Marketing Hub Enterprise account or the Transactional Email Add-On, you can use this endpoint to unpublish an automated email or cancel a regular email. If the email is already in the process of being sent, canceling might not be possible.',
  operationId: 'post-/marketing/emails/2026-09/{emailId}/unpublish_unpublishOrCancel',
  request: {
    params: z.object({
      emailId: z
        .string()
        .openapi({
          param: {
            name: 'emailId',
            in: 'path',
            description: 'The unique identifier of the email to unpublish.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [{ oauth2: ['marketing-email'] }, { oauth2: ['transactional-email'] }],
})
