type LighthouseAuditResultV5 = {
  description?: string | undefined
  details?: { [x: string]: { [x: string]: unknown } } | undefined
  displayValue?: string | undefined
  errorMessage?: string | undefined
  explanation?: string | undefined
  id?: string | undefined
  numericUnit?: string | undefined
  numericValue?: number | undefined
  score?: { [x: string]: unknown } | undefined
  scoreDisplayMode?: string | undefined
  title?: string | undefined
  warnings?: { [x: string]: unknown } | undefined
}
type AuditRefs = {
  acronym?: string | undefined
  group?: string | undefined
  id?: string | undefined
  relevantAudits?: string[] | undefined
  weight?: number | undefined
}
type LighthouseCategoryV5 = {
  auditRefs?: AuditRefs[] | undefined
  description?: string | undefined
  id?: string | undefined
  manualDescription?: string | undefined
  score?: { [x: string]: unknown } | undefined
  title?: string | undefined
}
type Categories = {
  accessibility?: LighthouseCategoryV5 | undefined
  'best-practices'?: LighthouseCategoryV5 | undefined
  performance?: LighthouseCategoryV5 | undefined
  pwa?: LighthouseCategoryV5 | undefined
  seo?: LighthouseCategoryV5 | undefined
}
type CategoryGroupV5 = { description?: string | undefined; title?: string | undefined }
type ConfigSettings = {
  channel?: string | undefined
  emulatedFormFactor?: string | undefined
  formFactor?: string | undefined
  locale?: string | undefined
  onlyCategories?: { [x: string]: unknown } | undefined
}
type LhrEntity = {
  category?: string | undefined
  homepage?: string | undefined
  isFirstParty?: boolean | undefined
  isUnrecognized?: boolean | undefined
  name?: string | undefined
  origins?: string[] | undefined
}
type Environment = {
  benchmarkIndex?: number | undefined
  credits?: { [x: string]: string } | undefined
  hostUserAgent?: string | undefined
  networkUserAgent?: string | undefined
}
type RendererFormattedStrings = {
  auditGroupExpandTooltip?: string | undefined
  calculatorLink?: string | undefined
  crcInitialNavigation?: string | undefined
  crcLongestDurationLabel?: string | undefined
  dropdownCopyJSON?: string | undefined
  dropdownDarkTheme?: string | undefined
  dropdownPrintExpanded?: string | undefined
  dropdownPrintSummary?: string | undefined
  dropdownSaveGist?: string | undefined
  dropdownSaveHTML?: string | undefined
  dropdownSaveJSON?: string | undefined
  dropdownViewer?: string | undefined
  errorLabel?: string | undefined
  errorMissingAuditInfo?: string | undefined
  footerIssue?: string | undefined
  labDataTitle?: string | undefined
  lsPerformanceCategoryDescription?: string | undefined
  manualAuditsGroupTitle?: string | undefined
  notApplicableAuditsGroupTitle?: string | undefined
  opportunityResourceColumnLabel?: string | undefined
  opportunitySavingsColumnLabel?: string | undefined
  passedAuditsGroupTitle?: string | undefined
  runtimeDesktopEmulation?: string | undefined
  runtimeMobileEmulation?: string | undefined
  runtimeNoEmulation?: string | undefined
  runtimeSettingsAxeVersion?: string | undefined
  runtimeSettingsBenchmark?: string | undefined
  runtimeSettingsCPUThrottling?: string | undefined
  runtimeSettingsChannel?: string | undefined
  runtimeSettingsDevice?: string | undefined
  runtimeSettingsFetchTime?: string | undefined
  runtimeSettingsNetworkThrottling?: string | undefined
  runtimeSettingsTitle?: string | undefined
  runtimeSettingsUA?: string | undefined
  runtimeSettingsUANetwork?: string | undefined
  runtimeSettingsUrl?: string | undefined
  runtimeUnknown?: string | undefined
  scorescaleLabel?: string | undefined
  showRelevantAudits?: string | undefined
  snippetCollapseButtonLabel?: string | undefined
  snippetExpandButtonLabel?: string | undefined
  thirdPartyResourcesLabel?: string | undefined
  throttlingProvided?: string | undefined
  toplevelWarningsMessage?: string | undefined
  varianceDisclaimer?: string | undefined
  viewTreemapLabel?: string | undefined
  warningAuditsGroupTitle?: string | undefined
  warningHeader?: string | undefined
}
type I18n = { rendererFormattedStrings?: RendererFormattedStrings | undefined }
type RuntimeError = { code?: string | undefined; message?: string | undefined }
type StackPack = {
  descriptions?: { [x: string]: string } | undefined
  iconDataURL?: string | undefined
  id?: string | undefined
  title?: string | undefined
}
type Timing = { total?: number | undefined }
type LighthouseResultV5 = {
  audits?: { [x: string]: LighthouseAuditResultV5 } | undefined
  categories?: Categories | undefined
  categoryGroups?: { [x: string]: CategoryGroupV5 } | undefined
  configSettings?: ConfigSettings | undefined
  entities?: LhrEntity[] | undefined
  environment?: Environment | undefined
  fetchTime?: string | undefined
  finalDisplayedUrl?: string | undefined
  finalUrl?: string | undefined
  fullPageScreenshot?: { [x: string]: unknown } | undefined
  i18n?: I18n | undefined
  lighthouseVersion?: string | undefined
  mainDocumentUrl?: string | undefined
  requestedUrl?: string | undefined
  runWarnings?: { [x: string]: unknown }[] | undefined
  runtimeError?: RuntimeError | undefined
  stackPacks?: StackPack[] | undefined
  timing?: Timing | undefined
  userAgent?: string | undefined
}
type Bucket = {
  max?: number | undefined
  min?: number | undefined
  proportion?: number | undefined
}
type UserPageLoadMetricV5 = {
  category?: string | undefined
  distributions?: Bucket[] | undefined
  formFactor?: string | undefined
  median?: number | undefined
  metricId?: string | undefined
  percentile?: number | undefined
}
type PagespeedApiLoadingExperienceV5 = {
  id?: string | undefined
  initial_url?: string | undefined
  metrics?: { [x: string]: UserPageLoadMetricV5 } | undefined
  origin_fallback?: boolean | undefined
  overall_category?: string | undefined
}
type PagespeedVersion = { major?: string | undefined; minor?: string | undefined }
type PagespeedApiPagespeedResponseV5 = {
  analysisUTCTimestamp?: string | undefined
  captchaResult?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  lighthouseResult?: LighthouseResultV5 | undefined
  loadingExperience?: PagespeedApiLoadingExperienceV5 | undefined
  originLoadingExperience?: PagespeedApiLoadingExperienceV5 | undefined
  version?: PagespeedVersion | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/pagespeedonline/v5/runPagespeed': {
      $get: {
        input: {
          query: {
            url: string
            captchaToken?: string | undefined
            category?:
              | (
                  | 'CATEGORY_UNSPECIFIED'
                  | 'ACCESSIBILITY'
                  | 'BEST_PRACTICES'
                  | 'PERFORMANCE'
                  | 'PWA'
                  | 'SEO'
                )[]
              | undefined
            locale?: string | undefined
            strategy?: 'STRATEGY_UNSPECIFIED' | 'DESKTOP' | 'MOBILE' | undefined
            utm_campaign?: string | undefined
            utm_source?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: PagespeedApiPagespeedResponseV5
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
