import { createRoute, z } from '@hono/zod-openapi'

const AuditRefsSchema = z
  .object({
    acronym: z
      .string()
      .exactOptional()
      .openapi({ description: 'The conventional acronym for the audit/metric.' }),
    group: z
      .string()
      .exactOptional()
      .openapi({ description: 'The category group that the audit belongs to (optional).' }),
    id: z.string().exactOptional().openapi({ description: 'The audit ref id.' }),
    relevantAudits: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Any audit IDs closely relevant to this one.' }),
    weight: z
      .float64()
      .exactOptional()
      .openapi({ description: "The weight this audit's score has on the overall category score." }),
  })
  .openapi({
    description:
      'A light reference to an audit by id, used to group and weight audits in a given category.',
    required: [],
  })
  .openapi('AuditRefs')

const BucketSchema = z
  .object({
    max: z.int32().exactOptional().openapi({ description: "Upper bound for a bucket's range." }),
    min: z.int32().exactOptional().openapi({ description: "Lower bound for a bucket's range." }),
    proportion: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The proportion of data in this bucket.' }),
  })
  .openapi({
    description:
      "A proportion of data in the total distribution, bucketed by a min/max percentage. Each bucket's range is bounded by min <= x < max, In millisecond.",
    required: [],
  })
  .openapi('Bucket')

const LighthouseCategoryV5Schema = z
  .object({
    auditRefs: z
      .array(AuditRefsSchema)
      .exactOptional()
      .openapi({
        description: 'An array of references to all the audit members of this category.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A more detailed description of the category and its importance.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The string identifier of the category.' }),
    manualDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'A description for the manual audits in the category.' }),
    score: z
      .any()
      .exactOptional()
      .openapi({
        description:
          "The overall score of the category, the weighted average of all its audits. (The category's score, can be null.)",
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'The human-friendly name of the category.' }),
  })
  .openapi({ description: 'A Lighthouse category.', required: [] })
  .openapi('LighthouseCategoryV5')

const CategoriesSchema = z
  .object({
    accessibility: LighthouseCategoryV5Schema.exactOptional().openapi({
      description: 'The accessibility category, containing all accessibility related audits.',
    }),
    'best-practices': LighthouseCategoryV5Schema.exactOptional().openapi({
      description: 'The best practices category, containing all best practices related audits.',
    }),
    performance: LighthouseCategoryV5Schema.exactOptional().openapi({
      description: 'The performance category, containing all performance related audits.',
    }),
    pwa: LighthouseCategoryV5Schema.exactOptional().openapi({
      description: 'The Progressive-Web-App (PWA) category, containing all pwa related audits.',
    }),
    seo: LighthouseCategoryV5Schema.exactOptional().openapi({
      description:
        'The Search-Engine-Optimization (SEO) category, containing all seo related audits.',
    }),
  })
  .openapi({ description: 'The categories in a Lighthouse run.', required: [] })
  .openapi('Categories')

const CategoryGroupV5Schema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of what the category is grouping' }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'The human readable title of the group' }),
  })
  .openapi({ description: 'Message containing a category', required: [] })
  .openapi('CategoryGroupV5')

const ConfigSettingsSchema = z
  .object({
    channel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'How Lighthouse was run, e.g. from the Chrome extension or from the npm module.',
      }),
    emulatedFormFactor: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The form factor the emulation should use. This field is deprecated, form_factor should be used instead.',
      }),
    formFactor: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'How Lighthouse should interpret this run in regards to scoring performance metrics and skipping mobile-only tests in desktop.',
      }),
    locale: z.string().exactOptional().openapi({ description: 'The locale setting.' }),
    onlyCategories: z
      .any()
      .exactOptional()
      .openapi({ description: 'List of categories of audits the run should conduct.' }),
  })
  .openapi({
    description: 'Message containing the configuration settings for the Lighthouse run.',
    required: [],
  })
  .openapi('ConfigSettings')

const EnvironmentSchema = z
  .object({
    benchmarkIndex: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The benchmark index number that indicates rough device class.' }),
    credits: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'The version of libraries with which these results were generated. Ex: axe-core.',
      }),
    hostUserAgent: z
      .string()
      .exactOptional()
      .openapi({ description: 'The user agent string of the version of Chrome used.' }),
    networkUserAgent: z
      .string()
      .exactOptional()
      .openapi({ description: 'The user agent string that was sent over the network.' }),
  })
  .openapi({
    description: 'Message containing environment configuration for a Lighthouse run.',
    required: [],
  })
  .openapi('Environment')

const RendererFormattedStringsSchema = z
  .object({
    auditGroupExpandTooltip: z
      .string()
      .exactOptional()
      .openapi({ description: 'The tooltip text on an expandable chevron icon.' }),
    calculatorLink: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Text link pointing to the Lighthouse scoring calculator. This link immediately follows a sentence stating the performance score is calculated from the perf metrics.',
      }),
    crcInitialNavigation: z
      .string()
      .exactOptional()
      .openapi({ description: 'The label for the initial request in a critical request chain.' }),
    crcLongestDurationLabel: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The label for values shown in the summary of critical request chains.',
      }),
    dropdownCopyJSON: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Option in a dropdown menu that copies the Lighthouse JSON object to the system clipboard.',
      }),
    dropdownDarkTheme: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Option in a dropdown menu that toggles the themeing of the report between Light(default) and Dark themes.',
      }),
    dropdownPrintExpanded: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Option in a dropdown menu that opens a full Lighthouse report in a print dialog.',
      }),
    dropdownPrintSummary: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Option in a dropdown menu that opens a small, summary report in a print dialog.',
      }),
    dropdownSaveGist: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Option in a dropdown menu that saves the current report as a new GitHub Gist.',
      }),
    dropdownSaveHTML: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Option in a dropdown menu that saves the Lighthouse report HTML locally to the system as a '.html' file.",
      }),
    dropdownSaveJSON: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Option in a dropdown menu that saves the Lighthouse JSON object to the local system as a '.json' file.",
      }),
    dropdownViewer: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Option in a dropdown menu that opens the current report in the Lighthouse Viewer Application.',
      }),
    errorLabel: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The label shown next to an audit or metric that has had an error.',
      }),
    errorMissingAuditInfo: z
      .string()
      .exactOptional()
      .openapi({ description: 'The error string shown next to an erroring audit.' }),
    footerIssue: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Label for button to create an issue against the Lighthouse GitHub project.',
      }),
    labDataTitle: z
      .string()
      .exactOptional()
      .openapi({ description: 'The title of the lab data performance category.' }),
    lsPerformanceCategoryDescription: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The disclaimer shown under performance explaining that the network can vary.',
      }),
    manualAuditsGroupTitle: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The heading shown above a list of audits that were not computerd in the run.',
      }),
    notApplicableAuditsGroupTitle: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The heading shown above a list of audits that do not apply to a page.',
      }),
    opportunityResourceColumnLabel: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The heading for the estimated page load savings opportunity of an audit.',
      }),
    opportunitySavingsColumnLabel: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The heading for the estimated page load savings of opportunity audits.',
      }),
    passedAuditsGroupTitle: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The heading that is shown above a list of audits that are passing.',
      }),
    runtimeDesktopEmulation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Descriptive explanation for emulation setting when emulating a generic desktop form factor, as opposed to a mobile-device like form factor.',
      }),
    runtimeMobileEmulation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Descriptive explanation for emulation setting when emulating a Nexus 5X mobile device.',
      }),
    runtimeNoEmulation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Descriptive explanation for emulation setting when no device emulation is set.',
      }),
    runtimeSettingsAxeVersion: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Label for a row in a table that shows the version of the Axe library used',
      }),
    runtimeSettingsBenchmark: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Label for a row in a table that shows the estimated CPU power of the machine running Lighthouse. Example row values: 532, 1492, 783.',
      }),
    runtimeSettingsCPUThrottling: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Label for a row in a table that describes the CPU throttling conditions that were used during a Lighthouse run, if any.',
      }),
    runtimeSettingsChannel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Label for a row in a table that shows in what tool Lighthouse is being run (e.g. The lighthouse CLI, Chrome DevTools, Lightrider, WebPageTest, etc).',
      }),
    runtimeSettingsDevice: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Label for a row in a table that describes the kind of device that was emulated for the Lighthouse run. Example values for row elements: 'No Emulation', 'Emulated Desktop', etc.",
      }),
    runtimeSettingsFetchTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Label for a row in a table that shows the time at which a Lighthouse run was conducted; formatted as a timestamp, e.g. Jan 1, 1970 12:00 AM UTC.',
      }),
    runtimeSettingsNetworkThrottling: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Label for a row in a table that describes the network throttling conditions that were used during a Lighthouse run, if any.',
      }),
    runtimeSettingsTitle: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Title of the Runtime settings table in a Lighthouse report. Runtime settings are the environment configurations that a specific report used at auditing time.',
      }),
    runtimeSettingsUA: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Label for a row in a table that shows the User Agent that was detected on the Host machine that ran Lighthouse.',
      }),
    runtimeSettingsUANetwork: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Label for a row in a table that shows the User Agent that was used to send out all network requests during the Lighthouse run.',
      }),
    runtimeSettingsUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Label for a row in a table that shows the URL that was audited during a Lighthouse run.',
      }),
    runtimeUnknown: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Descriptive explanation for a runtime setting that is set to an unknown value.',
      }),
    scorescaleLabel: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The label that explains the score gauges scale (0-49, 50-89, 90-100).',
      }),
    showRelevantAudits: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Label preceding a radio control for filtering the list of audits. The radio choices are various performance metrics (FCP, LCP, TBT), and if chosen, the audits in the report are hidden if they are not relevant to the selected metric.',
      }),
    snippetCollapseButtonLabel: z
      .string()
      .exactOptional()
      .openapi({ description: 'The label for the button to show only a few lines of a snippet' }),
    snippetExpandButtonLabel: z
      .string()
      .exactOptional()
      .openapi({ description: 'The label for the button to show all lines of a snippet' }),
    thirdPartyResourcesLabel: z
      .string()
      .exactOptional()
      .openapi({ description: 'This label is for a filter checkbox above a table of items' }),
    throttlingProvided: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Descriptive explanation for environment throttling that was provided by the runtime environment instead of provided by Lighthouse throttling.',
      }),
    toplevelWarningsMessage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The label shown preceding important warnings that may have invalidated an entire report.',
      }),
    varianceDisclaimer: z
      .string()
      .exactOptional()
      .openapi({ description: 'The disclaimer shown below a performance metric value.' }),
    viewTreemapLabel: z
      .string()
      .exactOptional()
      .openapi({ description: 'Label for a button that opens the Treemap App' }),
    warningAuditsGroupTitle: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The heading that is shown above a list of audits that have warnings',
      }),
    warningHeader: z
      .string()
      .exactOptional()
      .openapi({ description: 'The label shown above a bulleted list of warnings.' }),
  })
  .openapi({
    description: 'Message holding the formatted strings used in the renderer.',
    required: [],
  })
  .openapi('RendererFormattedStrings')

const I18nSchema = z
  .object({
    rendererFormattedStrings: RendererFormattedStringsSchema.exactOptional().openapi({
      description: 'Internationalized strings that are formatted to the locale in configSettings.',
    }),
  })
  .openapi({
    description: 'Message containing the i18n data for the LHR - Version 1.',
    required: [],
  })
  .openapi('I18n')

const LhrEntitySchema = z
  .object({
    category: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. An optional category name for the entity.' }),
    homepage: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. An optional homepage URL of the entity.' }),
    isFirstParty: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Optional. An optional flag indicating if the entity is the first party.',
      }),
    isUnrecognized: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Optional. An optional flag indicating if the entity is not recognized.',
      }),
    name: z.string().exactOptional().openapi({ description: 'Required. Name of the entity.' }),
    origins: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Required. A list of URL origin strings that belong to this entity.',
      }),
  })
  .openapi({ description: 'Message containing an Entity.', required: [] })
  .openapi('LhrEntity')

const LighthouseAuditResultV5Schema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the audit.' }),
    details: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({ description: 'Freeform details section of the audit.' }),
    displayValue: z
      .string()
      .exactOptional()
      .openapi({ description: 'The value that should be displayed on the UI for this audit.' }),
    errorMessage: z
      .string()
      .exactOptional()
      .openapi({ description: 'An error message from a thrown error inside the audit.' }),
    explanation: z
      .string()
      .exactOptional()
      .openapi({ description: 'An explanation of the errors in the audit.' }),
    id: z.string().exactOptional().openapi({ description: "The audit's id." }),
    numericUnit: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unit of the numeric_value field. Used to format the numeric value for display.',
      }),
    numericValue: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'A numeric value that has a meaning specific to the audit, e.g. the number of nodes in the DOM or the timestamp of a specific load event. More information can be found in the audit details, if present.',
      }),
    score: z.any().exactOptional().openapi({ description: 'The score of the audit, can be null.' }),
    scoreDisplayMode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The enumerated score display mode.' }),
    title: z.string().exactOptional().openapi({ description: 'The human readable title.' }),
    warnings: z
      .any()
      .exactOptional()
      .openapi({ description: 'Possible warnings that occurred in the audit, can be null.' }),
  })
  .openapi({ description: "An audit's result object in a Lighthouse result.", required: [] })
  .openapi('LighthouseAuditResultV5')

const RuntimeErrorSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({ description: 'The enumerated Lighthouse Error code.' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'A human readable message explaining the error code.' }),
  })
  .openapi({ description: 'Message containing a runtime error config.', required: [] })
  .openapi('RuntimeError')

const StackPackSchema = z
  .object({
    descriptions: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'The stack pack advice strings.' }),
    iconDataURL: z
      .string()
      .exactOptional()
      .openapi({ description: 'The stack pack icon data uri.' }),
    id: z.string().exactOptional().openapi({ description: 'The stack pack id.' }),
    title: z.string().exactOptional().openapi({ description: 'The stack pack title.' }),
  })
  .openapi({ description: 'Message containing Stack Pack information.', required: [] })
  .openapi('StackPack')

const TimingSchema = z
  .object({
    total: z
      .float64()
      .exactOptional()
      .openapi({ description: "The total duration of Lighthouse's run." }),
  })
  .openapi({
    description: 'Message containing the performance timing data for the Lighthouse run.',
    required: [],
  })
  .openapi('Timing')

const LighthouseResultV5Schema = z
  .object({
    audits: z
      .record(z.string(), LighthouseAuditResultV5Schema)
      .exactOptional()
      .openapi({ description: 'Map of audits in the LHR.' }),
    categories: CategoriesSchema.exactOptional().openapi({
      description: 'Map of categories in the LHR.',
    }),
    categoryGroups: z
      .record(z.string(), CategoryGroupV5Schema)
      .exactOptional()
      .openapi({ description: 'Map of category groups in the LHR.' }),
    configSettings: ConfigSettingsSchema.exactOptional().openapi({
      description: 'The configuration settings for this LHR.',
    }),
    entities: z
      .array(LhrEntitySchema)
      .exactOptional()
      .openapi({ description: 'Entity classification data.' }),
    environment: EnvironmentSchema.exactOptional().openapi({
      description: 'Environment settings that were used when making this LHR.',
    }),
    fetchTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time that this run was fetched.' }),
    finalDisplayedUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL displayed on the page after Lighthouse finishes.' }),
    finalUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The final resolved url that was audited.' }),
    fullPageScreenshot: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'Screenshot data of the full page, along with node rects relevant to the audit results.',
      }),
    i18n: I18nSchema.exactOptional().openapi({
      description: 'The internationalization strings that are required to render the LHR.',
    }),
    lighthouseVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'The lighthouse version that was used to generate this LHR.' }),
    mainDocumentUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL of the main document request of the final navigation.' }),
    requestedUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The original requested url.' }),
    runWarnings: z
      .array(z.any())
      .exactOptional()
      .openapi({
        description: 'List of all run warnings in the LHR. Will always output to at least `[]`.',
      }),
    runtimeError: RuntimeErrorSchema.exactOptional().openapi({
      description:
        'A top-level error message that, if present, indicates a serious enough problem that this Lighthouse result may need to be discarded.',
    }),
    stackPacks: z
      .array(StackPackSchema)
      .exactOptional()
      .openapi({ description: 'The Stack Pack advice strings.' }),
    timing: TimingSchema.exactOptional().openapi({
      description: 'Timing information for this LHR.',
    }),
    userAgent: z
      .string()
      .exactOptional()
      .openapi({ description: 'The user agent that was used to run this LHR.' }),
  })
  .openapi({ description: 'The Lighthouse result object.', required: [] })
  .openapi('LighthouseResultV5')

const UserPageLoadMetricV5Schema = z
  .object({
    category: z
      .string()
      .exactOptional()
      .openapi({ description: 'The category of the specific time metric.' }),
    distributions: z
      .array(BucketSchema)
      .exactOptional()
      .openapi({ description: 'Metric distributions. Proportions should sum up to 1.' }),
    formFactor: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identifies the form factor of the metric being collected.' }),
    median: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The median number of the metric, in millisecond.' }),
    metricId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identifies the type of the metric.' }),
    percentile: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'We use this field to store certain percentile value for this metric. For v4, this field contains pc50. For v5, this field contains pc90.',
      }),
  })
  .openapi({
    description: 'A CrUX metric object for a single metric and form factor.',
    required: [],
  })
  .openapi('UserPageLoadMetricV5')

const PagespeedApiLoadingExperienceV5Schema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The url, pattern or origin which the metrics are on.' }),
    initial_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'The requested URL, which may differ from the resolved "id".' }),
    metrics: z
      .record(z.string(), UserPageLoadMetricV5Schema)
      .exactOptional()
      .openapi({ description: 'The map of .' }),
    origin_fallback: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'True if the result is an origin fallback from a page, false otherwise.',
      }),
    overall_category: z
      .string()
      .exactOptional()
      .openapi({ description: 'The human readable speed "category" of the id.' }),
  })
  .openapi({
    description: 'The CrUX loading experience object that contains CrUX data breakdowns.',
    required: [],
  })
  .openapi('PagespeedApiLoadingExperienceV5')

const PagespeedVersionSchema = z
  .object({
    major: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The major version number of PageSpeed used to generate these results.',
      }),
    minor: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The minor version number of PageSpeed used to generate these results.',
      }),
  })
  .openapi({ description: 'The Pagespeed Version object.', required: [] })
  .openapi('PagespeedVersion')

const PagespeedApiPagespeedResponseV5Schema = z
  .object({
    analysisUTCTimestamp: z
      .string()
      .exactOptional()
      .openapi({ description: 'The UTC timestamp of this analysis.' }),
    captchaResult: z.string().exactOptional().openapi({ description: 'The captcha verify result' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Canonicalized and final URL for the document, after following page redirects (if any).',
      }),
    kind: z.string().exactOptional().openapi({ description: 'Kind of result.' }),
    lighthouseResult: LighthouseResultV5Schema.exactOptional().openapi({
      description: 'Lighthouse response for the audit url as an object.',
    }),
    loadingExperience: PagespeedApiLoadingExperienceV5Schema.exactOptional().openapi({
      description: "Metrics of end users' page loading experience.",
    }),
    originLoadingExperience: PagespeedApiLoadingExperienceV5Schema.exactOptional().openapi({
      description: 'Metrics of the aggregated page loading experience of the origin',
    }),
    version: PagespeedVersionSchema.exactOptional().openapi({
      description: 'The version of PageSpeed used to generate these results.',
    }),
  })
  .openapi({ description: 'The Pagespeed API response object.', required: [] })
  .openapi('PagespeedApiPagespeedResponseV5')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: { openid: 'Associate you with your personal info on Google' },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: { openid: 'Associate you with your personal info on Google' },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getPagespeedonlineV5RunPagespeedRoute = createRoute({
  method: 'get',
  path: '/pagespeedonline/v5/runPagespeed',
  tags: ['pagespeedapi'],
  description:
    'Runs PageSpeed analysis on the page at the specified URL, and returns PageSpeed scores, a list of suggestions to make that page faster, and other information.',
  operationId: 'pagespeedonline.pagespeedapi.runpagespeed',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      url: z
        .string()
        .openapi({
          param: {
            description: 'Required. The URL to fetch and analyze',
            in: 'query',
            name: 'url',
            required: true,
            schema: { type: 'string' },
          },
        }),
      captchaToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The captcha token passed when filling out a captcha.',
            in: 'query',
            name: 'captchaToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      category: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum([
              'CATEGORY_UNSPECIFIED',
              'ACCESSIBILITY',
              'BEST_PRACTICES',
              'PERFORMANCE',
              'PWA',
              'SEO',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'A Lighthouse category to run; if none are given, only Performance category will be run',
            explode: true,
            in: 'query',
            name: 'category',
            schema: {
              items: {
                enum: [
                  'CATEGORY_UNSPECIFIED',
                  'ACCESSIBILITY',
                  'BEST_PRACTICES',
                  'PERFORMANCE',
                  'PWA',
                  'SEO',
                ],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
      locale: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The locale used to localize formatted results',
            in: 'query',
            name: 'locale',
            schema: { type: 'string' },
            required: false,
          },
        }),
      strategy: z
        .enum(['STRATEGY_UNSPECIFIED', 'DESKTOP', 'MOBILE'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'The analysis strategy (desktop or mobile) to use, and desktop is the default',
            in: 'query',
            name: 'strategy',
            schema: { enum: ['STRATEGY_UNSPECIFIED', 'DESKTOP', 'MOBILE'], type: 'string' },
            required: false,
          },
        }),
      utm_campaign: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Campaign name for analytics.',
            in: 'query',
            name: 'utm_campaign',
            schema: { type: 'string' },
            required: false,
          },
        }),
      utm_source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Campaign source for analytics.',
            in: 'query',
            name: 'utm_source',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PagespeedApiPagespeedResponseV5Schema } },
    },
  },
  security: [{ Oauth2: ['openid'], Oauth2c: ['openid'] }],
})
