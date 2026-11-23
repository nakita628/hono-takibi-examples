type MonitorSchedule = {
  cron?: string | undefined
  text?: string | undefined
  timezone?: string | undefined
}
type MonitorWebhook = {
  url: string
  headers?: { [x: string]: string } | undefined
  metadata?: { [x: string]: unknown } | undefined
  events?: ('monitor.page' | 'monitor.check.completed')[] | undefined
}
type MonitorNotification = {
  email?:
    | {
        enabled?: boolean | undefined
        recipients?: string[] | undefined
        includeDiffs?: boolean | undefined
      }
    | undefined
}
type Formats = (
  | { type: 'markdown' }
  | { type: 'summary' }
  | { type: 'html' }
  | { type: 'rawHtml' }
  | { type: 'rawBase64' }
  | { type: 'links' }
  | { type: 'images' }
  | { type: 'attributes'; selectors: { selector: string; attribute: string }[] }
  | {
      type: 'screenshot'
      fullPage?: boolean | undefined
      quality?: number | undefined
      viewport?: { width: number; height: number } | undefined
    }
  | {
      type: 'json'
      schema?: { [x: string]: unknown } | undefined
      prompt?: string | undefined
      checkPromptInjection?: boolean | undefined
    }
  | {
      type: 'changeTracking'
      modes?: ('git-diff' | 'json')[] | undefined
      schema?: { [x: string]: unknown } | undefined
      prompt?: string | undefined
      tag?: (string | null) | undefined
    }
  | { type: 'branding' }
  | { type: 'product' }
  | { type: 'menu' }
  | { type: 'audio' }
  | { type: 'video' }
  | { type: 'question'; question: string }
  | { type: 'highlights'; query: string }
)[]
type RedactPIIEntity = 'PERSON' | 'EMAIL' | 'PHONE' | 'LOCATION' | 'FINANCIAL' | 'SECRET'
type RedactPIIOptions = {
  mode?: 'accurate' | 'aggressive' | 'fast' | undefined
  entities?: RedactPIIEntity[] | undefined
  replaceStyle?: 'tag' | 'mask' | 'remove' | undefined
}
type ThreatProtectionOverride = {
  mode?: 'off' | 'normal' | undefined
  riskScoreThreshold?: number | undefined
  blacklist?: string[] | undefined
  whitelist?: string[] | undefined
  blockedTlds?: string[] | undefined
  failurePolicy?: 'open' | 'closed' | undefined
}
type AuditMetadata = { username: string }
type ScrapeOptions = {
  formats?: Formats | undefined
  onlyMainContent?: boolean | undefined
  onlyCleanContent?: boolean | undefined
  includeTags?: string[] | undefined
  excludeTags?: string[] | undefined
  maxAge?: number | undefined
  minAge?: number | undefined
  headers?: { [x: string]: unknown } | undefined
  waitFor?: number | undefined
  mobile?: boolean | undefined
  skipTlsVerification?: boolean | undefined
  timeout?: number | undefined
  parsers?:
    | (
        | 'pdf'
        | 'image'
        | {
            type: 'pdf'
            mode?: 'fast' | 'auto' | 'ocr' | undefined
            maxPages?: number | undefined
            pages?: boolean | undefined
            blocks?: boolean | undefined
            pageMarkers?: boolean | undefined
          }
        | { type: 'image' }
      )[]
    | undefined
  actions?:
    | (
        | { type: 'wait'; milliseconds: number }
        | { type: 'wait'; selector: string }
        | {
            type: 'screenshot'
            fullPage?: boolean | undefined
            quality?: number | undefined
            viewport?: { width: number; height: number } | undefined
          }
        | { type: 'click'; selector: string; all?: boolean | undefined }
        | { type: 'write'; text: string }
        | { type: 'press'; key: string }
        | { type: 'scroll'; direction?: 'up' | 'down' | undefined; selector?: string | undefined }
        | { type: 'scrape' }
        | { type: 'executeJavascript'; script: string }
        | {
            type: 'pdf'
            format?:
              | 'A0'
              | 'A1'
              | 'A2'
              | 'A3'
              | 'A4'
              | 'A5'
              | 'A6'
              | 'Letter'
              | 'Legal'
              | 'Tabloid'
              | 'Ledger'
              | undefined
            landscape?: boolean | undefined
            scale?: number | undefined
          }
      )[]
    | undefined
  location?: { country?: string | undefined; languages?: string[] | undefined } | undefined
  removeBase64Images?: boolean | undefined
  blockAds?: boolean | undefined
  proxy?: 'basic' | 'enhanced' | 'auto' | undefined
  storeInCache?: boolean | undefined
  lockdown?: boolean | undefined
  checkPromptInjection?: boolean | undefined
  redactPII?: boolean | RedactPIIOptions | undefined
  profile?: { name: string; saveChanges?: boolean | undefined } | undefined
  threatProtection?: ThreatProtectionOverride | undefined
  auditMetadata?: AuditMetadata | undefined
}
type MonitorTarget =
  | {
      id?: string | undefined
      type: 'scrape'
      urls: string[]
      scrapeOptions?: ScrapeOptions | undefined
    }
  | {
      id?: string | undefined
      type: 'crawl'
      url: string
      crawlOptions?: { [x: string]: unknown } | undefined
      scrapeOptions?: ScrapeOptions | undefined
    }
  | {
      id?: string | undefined
      type: 'search'
      queries: string[]
      searchWindow?: '5m' | '15m' | '1h' | '6h' | '24h' | '7d' | undefined
      maxResults?: number | undefined
      includeDomains?: string[] | undefined
      excludeDomains?: string[] | undefined
    }
type MonitorCreateRequest = {
  name: string
  schedule: MonitorSchedule
  webhook?: MonitorWebhook | undefined
  notification?: MonitorNotification | undefined
  targets: MonitorTarget[]
  retentionDays?: number | undefined
  goal?: (string | null) | undefined
  judgeEnabled?: boolean | undefined
}
type MonitorSummary = {
  totalPages?: number | undefined
  same?: number | undefined
  changed?: number | undefined
  new?: number | undefined
  removed?: number | undefined
  error?: number | undefined
}
type Monitor = {
  id?: string | undefined
  name?: string | undefined
  status?: 'active' | 'paused' | 'deleted' | undefined
  schedule?: { cron?: string | undefined; timezone?: string | undefined } | undefined
  nextRunAt?: (string | null) | undefined
  lastRunAt?: (string | null) | undefined
  currentCheckId?: (string | null) | undefined
  targets?: MonitorTarget[] | undefined
  webhook?: MonitorWebhook | undefined
  notification?: MonitorNotification | undefined
  retentionDays?: number | undefined
  estimatedCreditsPerMonth?: (number | null) | undefined
  lastCheckSummary?: MonitorSummary | undefined
  goal?: (string | null) | undefined
  judgeEnabled?: boolean | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
}
type MonitorResponse = { success?: boolean | undefined; data?: Monitor | undefined }
type MonitorListResponse = { success?: boolean | undefined; data?: Monitor[] | undefined }
type MonitorUpdateRequest = {
  name?: string | undefined
  schedule?: MonitorSchedule | undefined
  webhook?: MonitorWebhook | undefined
  notification?: MonitorNotification | undefined
  targets?: MonitorTarget[] | undefined
  retentionDays?: number | undefined
  goal?: (string | null) | undefined
  judgeEnabled?: boolean | undefined
  status?: 'active' | 'paused' | undefined
}
type SuccessResponse = { success?: boolean | undefined }
type MonitorCheck = {
  id?: string | undefined
  monitorId?: string | undefined
  status?:
    | 'queued'
    | 'running'
    | 'completed'
    | 'failed'
    | 'partial'
    | 'skipped_overlap'
    | 'skipped_no_credits'
    | undefined
  trigger?: 'scheduled' | 'manual' | undefined
  scheduledFor?: (string | null) | undefined
  startedAt?: (string | null) | undefined
  finishedAt?: (string | null) | undefined
  estimatedCredits?: (number | null) | undefined
  reservedCredits?: (number | null) | undefined
  actualCredits?: (number | null) | undefined
  billingStatus?: string | undefined
  summary?: MonitorSummary | undefined
  targetResults?: (unknown[] | null) | undefined
  notificationStatus?: ({ [x: string]: unknown } | null) | undefined
  error?: (string | null) | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
}
type MonitorRunResponse = {
  success?: boolean | undefined
  id?: string | undefined
  data?: MonitorCheck | undefined
}
type MonitorCheckListResponse = { success?: boolean | undefined; data?: MonitorCheck[] | undefined }
type MonitorPageJudgment = {
  meaningful?: boolean | undefined
  confidence?: 'high' | 'medium' | 'low' | undefined
  reason?: string | undefined
  meaningfulChanges?:
    | {
        type?: 'added' | 'removed' | 'changed' | undefined
        before?: (string | null) | undefined
        after?: (string | null) | undefined
        reason?: string | undefined
      }[]
    | undefined
} | null
type MonitorCheckPage = {
  id?: string | undefined
  targetId?: string | undefined
  url?: string | undefined
  status?: 'same' | 'new' | 'changed' | 'removed' | 'error' | undefined
  previousScrapeId?: (string | null) | undefined
  currentScrapeId?: (string | null) | undefined
  statusCode?: (number | null) | undefined
  error?: (string | null) | undefined
  metadata?: ({ [x: string]: unknown } | null) | undefined
  judgment?: MonitorPageJudgment | undefined
  diff?:
    | ({ text?: string | undefined; json?: { [x: string]: unknown } | undefined } | null)
    | undefined
  snapshot?: ({ json?: { [x: string]: unknown } | undefined } | null) | undefined
  createdAt?: string | undefined
}
type MonitorCheckDetailResponse = {
  success?: boolean | undefined
  next?: (string | null) | undefined
  data?:
    | {
        id?: string | undefined
        monitorId?: string | undefined
        status?:
          | 'queued'
          | 'running'
          | 'completed'
          | 'failed'
          | 'partial'
          | 'skipped_overlap'
          | 'skipped_no_credits'
          | undefined
        trigger?: 'scheduled' | 'manual' | undefined
        scheduledFor?: (string | null) | undefined
        startedAt?: (string | null) | undefined
        finishedAt?: (string | null) | undefined
        estimatedCredits?: (number | null) | undefined
        reservedCredits?: (number | null) | undefined
        actualCredits?: (number | null) | undefined
        billingStatus?: string | undefined
        summary?: MonitorSummary | undefined
        targetResults?: (unknown[] | null) | undefined
        notificationStatus?: ({ [x: string]: unknown } | null) | undefined
        error?: (string | null) | undefined
        createdAt?: string | undefined
        updatedAt?: string | undefined
        pages?: MonitorCheckPage[] | undefined
        next?: (string | null) | undefined
      }
    | undefined
}
type FindToolsOptions = {
  query?: string | undefined
  urls?: string[] | undefined
  providers?: string[] | undefined
  categories?: string[] | undefined
  groups?: string[] | undefined
  capabilities?: string[] | undefined
  level?: 'providers' | 'groups' | 'tools' | undefined
  expand?: ('options' | 'response' | 'examples')[] | undefined
  limit?: number | undefined
  offset?: number | undefined
}
type AlexandriaCall = {
  provider: string
  capability: string
  options?: FindToolsOptions | { [x: string]: unknown } | undefined
}
type DiscoveredTool = {
  id?: string | undefined
  provider: string
  capability: string
  name?: string | undefined
  description: string
  creditsCost?: number | undefined
  perRecord?: boolean | undefined
  options?: { name?: string | undefined; type?: string | undefined }[] | undefined
  response?:
    | {
        about?: string | undefined
        key?: string | undefined
        fields?: { [x: string]: unknown }[] | undefined
      }
    | undefined
  matchedBy?: ('semantic' | 'domain')[] | undefined
  matchedUrls?: string[] | undefined
}
type ScrapeResponse = {
  success?: boolean | undefined
  data?:
    | {
        markdown?: string | undefined
        pages?:
          | ({ pageNumber?: number | undefined; markdown?: string | undefined }[] | null)
          | undefined
        blocks?:
          | (
              | {
                  pageNumber?: number | undefined
                  width?: (number | null) | undefined
                  height?: (number | null) | undefined
                  status?: string | undefined
                  items?:
                    | {
                        id?: string | undefined
                        type?: string | undefined
                        label?: (string | null) | undefined
                        bbox?: (number[] | null) | undefined
                        content?: string | undefined
                        markdownSpan?: (number[] | null) | undefined
                        readingOrder?: number | undefined
                        source?: (string | null) | undefined
                        confidence?:
                          | {
                              layout?: (number | null) | undefined
                              ocr?: (number | null) | undefined
                            }
                          | undefined
                      }[]
                    | undefined
                }[]
              | null
            )
          | undefined
        summary?: (string | null) | undefined
        html?: (string | null) | undefined
        rawHtml?: (string | null) | undefined
        rawBase64?: (string | null) | undefined
        screenshot?: (string | null) | undefined
        audio?: (string | null) | undefined
        video?: (string | null) | undefined
        answer?: (string | null) | undefined
        highlights?: (string | null) | undefined
        links?: string[] | undefined
        attributes?:
          | {
              selector?: string | undefined
              attribute?: string | undefined
              values?: string[] | undefined
            }[]
          | undefined
        actions?:
          | ({
              screenshots?: string[] | undefined
              scrapes?: { url?: string | undefined; html?: string | undefined }[] | undefined
              javascriptReturns?:
                | { type?: string | undefined; value?: { [x: string]: unknown } | undefined }[]
                | undefined
              pdfs?: string[] | undefined
            } | null)
          | undefined
        metadata?:
          | {
              title?: string | string[] | undefined
              description?: string | string[] | undefined
              language?: string | string[] | undefined
              sourceURL?: string | undefined
              url?: string | undefined
              keywords?: string | string[] | undefined
              ogLocaleAlternate?: string[] | undefined
              '<any other metadata> '?: string | string[] | undefined
              statusCode?: number | undefined
              numPages?: number | undefined
              totalPages?: number | undefined
              contentType?: string | undefined
              error?: (string | null) | undefined
              concurrencyLimited?: boolean | undefined
              concurrencyQueueDurationMs?: number | undefined
              provider?:
                | {
                    id?: string | undefined
                    creditsCost?: number | undefined
                    steps?:
                      | {
                          provider?: string | undefined
                          status?: 'matched' | 'not_found' | 'error' | undefined
                          creditsCost?: number | undefined
                        }[]
                      | undefined
                  }
                | undefined
            }
          | undefined
        warning?: (string | null) | undefined
        changeTracking?:
          | ({
              previousScrapeAt?: (string | null) | undefined
              changeStatus?: 'new' | 'same' | 'changed' | 'removed' | undefined
              visibility?: 'visible' | 'hidden' | undefined
              diff?: (string | null) | undefined
              json?: ({ [x: string]: unknown } | null) | undefined
            } | null)
          | undefined
        branding?:
          | ({
              colorScheme?: 'light' | 'dark' | undefined
              logo?: (string | null) | undefined
              colors?:
                | ({
                    primary?: string | undefined
                    secondary?: string | undefined
                    accent?: string | undefined
                    background?: string | undefined
                    textPrimary?: string | undefined
                    textSecondary?: string | undefined
                    link?: string | undefined
                    success?: string | undefined
                    warning?: string | undefined
                    error?: string | undefined
                  } | null)
                | undefined
              fonts?: ({ family?: string | undefined }[] | null) | undefined
              typography?:
                | ({
                    fontFamilies?:
                      | {
                          primary?: string | undefined
                          heading?: string | undefined
                          code?: string | undefined
                        }
                      | undefined
                    fontSizes?:
                      | {
                          h1?: string | undefined
                          h2?: string | undefined
                          h3?: string | undefined
                          body?: string | undefined
                        }
                      | undefined
                    fontWeights?:
                      | {
                          light?: number | undefined
                          regular?: number | undefined
                          medium?: number | undefined
                          bold?: number | undefined
                        }
                      | undefined
                    lineHeights?:
                      | { heading?: string | undefined; body?: string | undefined }
                      | undefined
                  } | null)
                | undefined
              spacing?:
                | ({
                    baseUnit?: number | undefined
                    borderRadius?: string | undefined
                    padding?: { [x: string]: unknown } | undefined
                    margins?: { [x: string]: unknown } | undefined
                  } | null)
                | undefined
              components?:
                | ({
                    buttonPrimary?:
                      | {
                          background?: string | undefined
                          textColor?: string | undefined
                          borderRadius?: string | undefined
                        }
                      | undefined
                    buttonSecondary?:
                      | {
                          background?: string | undefined
                          textColor?: string | undefined
                          borderColor?: string | undefined
                          borderRadius?: string | undefined
                        }
                      | undefined
                    input?: { [x: string]: unknown } | undefined
                  } | null)
                | undefined
              icons?: ({ [x: string]: unknown } | null) | undefined
              images?:
                | ({
                    logo?: string | undefined
                    favicon?: string | undefined
                    ogImage?: string | undefined
                  } | null)
                | undefined
              animations?: ({ [x: string]: unknown } | null) | undefined
              layout?: ({ [x: string]: unknown } | null) | undefined
              personality?: ({ [x: string]: unknown } | null) | undefined
            } | null)
          | undefined
        product?:
          | ({
              title: string
              brand?: string | undefined
              category?: string | undefined
              url: string
              description?: string | undefined
              variants: {
                id?: string | undefined
                sku?: string | undefined
                title?: string | undefined
                values?: { [x: string]: string } | undefined
                price?:
                  | {
                      amount: number
                      currency?: string | undefined
                      formatted?: string | undefined
                    }
                  | undefined
                sale?:
                  | {
                      originalPrice: {
                        amount: number
                        currency?: string | undefined
                        formatted?: string | undefined
                      }
                    }
                  | undefined
                availability: { inStock: boolean; text?: string | undefined }
                images?: { url: string; alt?: string | undefined }[] | undefined
              }[]
            } | null)
          | undefined
        menu?:
          | ({
              isMenu: boolean
              confidence?: number | undefined
              merchant?: { name: string; type?: string | undefined } | undefined
              currency?: string | undefined
              sections: {
                id?: string | undefined
                name: string
                description?: (string | null) | undefined
                items: {
                  id?: string | undefined
                  name: string
                  description?: (string | null) | undefined
                  images?: { url: string; alt?: (string | null) | undefined }[] | undefined
                  price?:
                    | {
                        amount: number
                        currency?: string | undefined
                        formatted?: string | undefined
                      }
                    | undefined
                  availability?:
                    | { inStock: boolean; text?: (string | null) | undefined }
                    | undefined
                  dietary?: string[] | undefined
                  calories?: (number | null) | undefined
                  optionGroups?: { [x: string]: unknown }[] | undefined
                  identifiers?: { merchantItemId?: string | undefined } | undefined
                  url?: (string | null) | undefined
                  sourceUrl?: (string | null) | undefined
                }[]
              }[]
              sourceUrl?: (string | null) | undefined
            } | null)
          | undefined
        tools?: (DiscoveredTool[] | null) | undefined
      }
    | undefined
}
type FindToolsData = {
  level: 'providers' | 'groups' | 'tools'
  items: {
    id: string
    name: string
    next?:
      | {
          provider: string
          capability: string
          options?: FindToolsOptions | { [x: string]: unknown } | undefined
        }
      | undefined
    execute?: { provider: string; capability: string } | undefined
  }[]
  total: number
  next?:
    | {
        provider: string
        capability: string
        options?: FindToolsOptions | { [x: string]: unknown } | undefined
      }
    | undefined
}
type AlexandriaResult =
  | {
      provider: string
      capability: string
      creditsCost: number
      data: FindToolsData | { [x: string]: unknown }
      records?: number | undefined
      upstreamStatus?: number | undefined
    }
  | {
      provider?: string | undefined
      capability?: string | undefined
      creditsCost?: number | undefined
      error: { code: string; message: string; status?: number | undefined }
    }
type AlexandriaScrapeResponse = {
  success: boolean
  scrape_id: string
  data: { alexandria: AlexandriaResult[]; creditsCost: number }
}
type ParseFormats = (
  | { type: 'markdown' }
  | { type: 'summary' }
  | { type: 'html' }
  | { type: 'rawHtml' }
  | { type: 'links' }
  | { type: 'images' }
  | { type: 'json'; schema?: { [x: string]: unknown } | undefined; prompt?: string | undefined }
)[]
type ParseOptions = {
  formats?: ParseFormats | undefined
  onlyMainContent?: boolean | undefined
  includeTags?: string[] | undefined
  excludeTags?: string[] | undefined
  headers?: { [x: string]: unknown } | undefined
  timeout?: number | undefined
  parsers?:
    | {
        type: 'pdf'
        mode?: 'fast' | 'auto' | 'ocr' | undefined
        maxPages?: number | undefined
        pages?: boolean | undefined
        blocks?: boolean | undefined
        pageMarkers?: boolean | undefined
      }[]
    | undefined
  skipTlsVerification?: boolean | undefined
  removeBase64Images?: boolean | undefined
  blockAds?: boolean | undefined
  checkPromptInjection?: boolean | undefined
  redactPII?: boolean | RedactPIIOptions | undefined
  proxy?: 'basic' | 'auto' | undefined
  origin?: string | undefined
  integration?: (string | null) | undefined
  auditMetadata?: AuditMetadata | undefined
  zeroDataRetention?: boolean | undefined
}
type BatchScrapeResponseObj = {
  success?: boolean | undefined
  id?: string | undefined
  url?: string | undefined
  invalidURLs?: (string[] | null) | undefined
}
type BatchScrapeStatusResponseObj = {
  status?: string | undefined
  total?: number | undefined
  completed?: number | undefined
  creditsUsed?: number | undefined
  expiresAt?: string | undefined
  createdAt?: string | undefined
  completedAt?: string | undefined
  duration?: number | undefined
  next?: (string | null) | undefined
  data?:
    | {
        markdown?: string | undefined
        pages?:
          | ({ pageNumber?: number | undefined; markdown?: string | undefined }[] | null)
          | undefined
        blocks?:
          | (
              | {
                  pageNumber?: number | undefined
                  width?: (number | null) | undefined
                  height?: (number | null) | undefined
                  status?: string | undefined
                  items?:
                    | {
                        id?: string | undefined
                        type?: string | undefined
                        label?: (string | null) | undefined
                        bbox?: (number[] | null) | undefined
                        content?: string | undefined
                        markdownSpan?: (number[] | null) | undefined
                        readingOrder?: number | undefined
                        source?: (string | null) | undefined
                        confidence?:
                          | {
                              layout?: (number | null) | undefined
                              ocr?: (number | null) | undefined
                            }
                          | undefined
                      }[]
                    | undefined
                }[]
              | null
            )
          | undefined
        html?: (string | null) | undefined
        rawHtml?: (string | null) | undefined
        rawBase64?: (string | null) | undefined
        links?: string[] | undefined
        screenshot?: (string | null) | undefined
        metadata?:
          | {
              title?: string | string[] | undefined
              description?: string | string[] | undefined
              language?: string | string[] | undefined
              sourceURL?: string | undefined
              url?: string | undefined
              keywords?: string | string[] | undefined
              ogLocaleAlternate?: string[] | undefined
              '<any other metadata> '?: string | undefined
              statusCode?: number | undefined
              numPages?: number | undefined
              totalPages?: number | undefined
              error?: (string | null) | undefined
              concurrencyLimited?: boolean | undefined
              concurrencyQueueDurationMs?: number | undefined
            }
          | undefined
      }[]
    | undefined
}
type CrawlErrorsResponseObj = {
  errors?:
    | {
        id?: string | undefined
        timestamp?: (string | null) | undefined
        url?: string | undefined
        error?: string | undefined
      }[]
    | undefined
  robotsBlocked?: string[] | undefined
}
type CrawlStatusResponseObj = {
  status?: string | undefined
  total?: number | undefined
  completed?: number | undefined
  creditsUsed?: number | undefined
  expiresAt?: string | undefined
  createdAt?: string | undefined
  completedAt?: string | undefined
  duration?: number | undefined
  next?: (string | null) | undefined
  data?:
    | {
        markdown?: string | undefined
        pages?:
          | ({ pageNumber?: number | undefined; markdown?: string | undefined }[] | null)
          | undefined
        blocks?:
          | (
              | {
                  pageNumber?: number | undefined
                  width?: (number | null) | undefined
                  height?: (number | null) | undefined
                  status?: string | undefined
                  items?:
                    | {
                        id?: string | undefined
                        type?: string | undefined
                        label?: (string | null) | undefined
                        bbox?: (number[] | null) | undefined
                        content?: string | undefined
                        markdownSpan?: (number[] | null) | undefined
                        readingOrder?: number | undefined
                        source?: (string | null) | undefined
                        confidence?:
                          | {
                              layout?: (number | null) | undefined
                              ocr?: (number | null) | undefined
                            }
                          | undefined
                      }[]
                    | undefined
                }[]
              | null
            )
          | undefined
        html?: (string | null) | undefined
        rawHtml?: (string | null) | undefined
        rawBase64?: (string | null) | undefined
        links?: string[] | undefined
        screenshot?: (string | null) | undefined
        metadata?:
          | {
              title?: string | string[] | undefined
              description?: string | string[] | undefined
              language?: string | string[] | undefined
              sourceURL?: string | undefined
              url?: string | undefined
              keywords?: string | string[] | undefined
              ogLocaleAlternate?: string[] | undefined
              '<any other metadata> '?: string | undefined
              statusCode?: number | undefined
              numPages?: number | undefined
              totalPages?: number | undefined
              error?: (string | null) | undefined
              concurrencyLimited?: boolean | undefined
              concurrencyQueueDurationMs?: number | undefined
            }
          | undefined
      }[]
    | undefined
}
type CrawlResponse = {
  success?: boolean | undefined
  id?: string | undefined
  url?: string | undefined
}
type MapResponse = {
  success?: boolean | undefined
  links?:
    | { url: string; title?: string | undefined; description?: string | undefined }[]
    | undefined
}
type ExtractResponse = {
  success?: boolean | undefined
  id?: string | undefined
  invalidURLs?: (string[] | null) | undefined
}
type ExtractStatusResponse = {
  success?: boolean | undefined
  data?: { [x: string]: unknown } | undefined
  status?: 'completed' | 'processing' | 'failed' | 'cancelled' | undefined
  expiresAt?: string | undefined
  tokensUsed?: number | undefined
}
type AgentPendingApproval = {
  id?: string | undefined
  kind?: 'calls' | 'terms' | undefined
  reason?: string | undefined
  calls?:
    | {
        id?: string | undefined
        provider?: string | undefined
        capability?: string | undefined
        input?: { [x: string]: unknown } | undefined
        more?: { [x: string]: unknown }[] | undefined
        creditsEstimate?: (number | null) | undefined
      }[]
    | undefined
  terms?:
    | {
        provider?: string | undefined
        name?: string | undefined
        capability?: string | undefined
        adds?: string | undefined
        version?: string | undefined
        digest?: (string | null) | undefined
        url?: string | undefined
      }[]
    | undefined
  resolution?:
    | ({
        approved?: boolean | undefined
        callIds?: string[] | undefined
        always?: boolean | undefined
        byRunId?: string | undefined
      } | null)
    | undefined
}
type AgentExchangeSummary = {
  enabled?: boolean | undefined
  toolkits?: string[] | undefined
  requireApproval?: boolean | undefined
  onTermsRequired?: 'skip' | 'ask' | undefined
  paidCalls?: number | undefined
  creditsUsed?: (number | null) | undefined
  skippedProviders?:
    | {
        provider?: string | undefined
        name?: string | undefined
        capability?: string | undefined
        adds?: string | undefined
        reason?: 'terms_required' | undefined
        version?: string | undefined
        termsUrl?: string | undefined
      }[]
    | undefined
  requiresAction?:
    | {
        type?: 'accept_terms' | undefined
        approvalId?: string | undefined
        providers?:
          | {
              provider?: string | undefined
              name?: string | undefined
              capability?: string | undefined
              adds?: string | undefined
              version?: string | undefined
              digest?: (string | null) | undefined
              url?: string | undefined
              show?: { [x: string]: unknown } | undefined
              accept?: { [x: string]: unknown } | undefined
            }[]
          | undefined
      }
    | undefined
}
type AgentTraceAgent = {
  id: string
  role: 'orchestrator' | 'subagent' | 'system'
  name: string
  parentId?: string | undefined
}
type AgentTraceArtifact = {
  kind: 'json' | 'markdown' | 'html' | 'screenshot' | 'text'
  artifactId: string
  path?: string | undefined
  snapshotId: string
  change: 'init' | 'partial' | 'append' | 'modify' | 'update'
  changedFields?: string[] | undefined
  itemCount?: number | undefined
  sourceToolCallId?: string | undefined
}
type AgentTraceError = {
  code: 'cancelled' | 'credit_limit_reached' | 'parent_finished' | 'refused' | 'internal'
  source: 'agent' | 'tool' | 'billing' | 'system'
  retryable: boolean
  message: string
}
type AgentTraceEvent =
  | {
      schemaVersion: 1
      eventId: string
      runId: string
      occurredAt: string
      producerSequence: number
      agent: AgentTraceAgent
      type: 'run.started'
    }
  | {
      schemaVersion: 1
      eventId: string
      runId: string
      occurredAt: string
      producerSequence: number
      agent: AgentTraceAgent
      type: 'run.cancel_requested'
      reason: 'user'
    }
  | {
      schemaVersion: 1
      eventId: string
      runId: string
      occurredAt: string
      producerSequence: number
      agent: AgentTraceAgent
      type: 'run.finished'
      outcome: 'succeeded' | 'failed' | 'cancelled' | 'refused' | 'credit_limit_reached'
      error: {
        code: 'cancelled' | 'credit_limit_reached' | 'parent_finished' | 'refused' | 'internal'
        source: 'agent' | 'tool' | 'billing' | 'system'
        retryable: boolean
        message: string
      }
    }
  | {
      schemaVersion: 1
      eventId: string
      runId: string
      occurredAt: string
      producerSequence: number
      agent: AgentTraceAgent
      type: 'agent.started'
    }
  | {
      schemaVersion: 1
      eventId: string
      runId: string
      occurredAt: string
      producerSequence: number
      agent: AgentTraceAgent
      type: 'agent.finished'
      outcome: 'succeeded' | 'failed' | 'cancelled' | 'refused'
      durationMs: number
      error: {
        code: 'cancelled' | 'credit_limit_reached' | 'parent_finished' | 'refused' | 'internal'
        source: 'agent' | 'tool' | 'billing' | 'system'
        retryable: boolean
        message: string
      }
    }
  | {
      schemaVersion: 1
      eventId: string
      runId: string
      occurredAt: string
      producerSequence: number
      agent: AgentTraceAgent
      type: 'browser.session.started'
      sessionId: string
    }
  | {
      schemaVersion: 1
      eventId: string
      runId: string
      occurredAt: string
      producerSequence: number
      agent: AgentTraceAgent
      type: 'browser.session.finished'
      sessionId: string
      durationMs: number
    }
  | {
      schemaVersion: 1
      eventId: string
      runId: string
      occurredAt: string
      producerSequence: number
      agent: AgentTraceAgent
      type: 'progress.reported'
      phase: 'planning' | 'working' | 'finalizing'
      message: string
    }
  | {
      schemaVersion: 1
      eventId: string
      runId: string
      occurredAt: string
      producerSequence: number
      agent: AgentTraceAgent
      type: 'reasoning.summary'
      text: string
    }
  | {
      schemaVersion: 1
      eventId: string
      runId: string
      occurredAt: string
      producerSequence: number
      agent: AgentTraceAgent
      type: 'tool_call.started'
      toolCallId: string
      toolName: string
      parameters: { [x: string]: unknown }
    }
  | {
      schemaVersion: 1
      eventId: string
      runId: string
      occurredAt: string
      producerSequence: number
      agent: AgentTraceAgent
      type: 'tool_call.finished'
      toolCallId: string
      toolName: string
      result: { [x: string]: unknown }
    }
  | {
      schemaVersion: 1
      eventId: string
      runId: string
      occurredAt: string
      producerSequence: number
      agent: AgentTraceAgent
      type: 'artifact.updated'
      artifact: AgentTraceArtifact
    }
  | {
      schemaVersion: 1
      eventId: string
      runId: string
      occurredAt: string
      producerSequence: number
      agent: AgentTraceAgent
      type: 'error.occurred'
      error: AgentTraceError
    }
type SearchFeedbackRequest = {
  rating: 'good' | 'partial' | 'bad'
  valuableSources?: { url: string; reason?: string | undefined }[] | undefined
  missingContent?: { topic: string; description?: string | undefined }[] | undefined
  querySuggestions?: string | undefined
  origin?: string | undefined
  integration?: (string | null) | undefined
}
type FeedbackResponse = {
  success: boolean
  feedbackId: string
  creditsRefunded: number
  alreadySubmitted?: boolean | undefined
  dailyCapReached?: boolean | undefined
  creditsRefundedToday?: number | undefined
  dailyRefundCap?: number | undefined
  warning?: string | undefined
}
type FeedbackErrorResponse = {
  success: boolean
  error: string
  feedbackErrorCode?: string | undefined
  details?: { [x: string]: unknown }[] | undefined
}
type SupportAskRequest = { question: string; rationale?: string | undefined }
type SupportAskResponse = {
  answer?: string | undefined
  confidence?: 'high' | 'medium' | 'low' | undefined
  fixParameters?: ({ [x: string]: unknown } | null) | undefined
  validation?: ({ [x: string]: unknown } | null) | undefined
  feedback?: ({ [x: string]: unknown } | null) | undefined
  durationMs?: number | undefined
}
type SupportProxyErrorResponse = { error?: string | undefined }
type ResearchIdMap = { [x: string]: string[] }
type ResearchPaperSignals = {
  structural: number
  semantic: number
  articleRank: number
  seedOverlap: number
}
type ResearchPaperResult = {
  paperId: string
  primaryId: string
  ids?: ResearchIdMap | undefined
  title: string
  abstract: string
  score: number
  signals?: ResearchPaperSignals | undefined
}
type ResearchSearchPapersResponse = { success: boolean; results: ResearchPaperResult[] }
type ResearchPaperMetadata = {
  paperId: string
  ids?: ResearchIdMap | undefined
  title: string
  abstract: string
  authors?: string | undefined
  categories?: string[] | undefined
  createdDate?: string | undefined
  updateDate?: string | undefined
}
type ResearchPaperMetadataResponse = { success: boolean; paper: ResearchPaperMetadata }
type ResearchPassage = { text: string; score: number }
type ResearchReadPaperResponse = {
  success: boolean
  paper: ResearchPaperMetadata
  paperId: string
  query: string
  passages: ResearchPassage[]
}
type ResearchSimilarPapersResponse = {
  success: boolean
  results: ResearchPaperResult[]
  poolSize: number
  truncated: boolean
  note?: (string | null) | undefined
}
type DeveloperSearchResult = {
  id?: string | undefined
  url?: string | undefined
  title?: string | undefined
  passages?:
    | {
        text?: string | undefined
        citation_url?: string | undefined
        truncated?: boolean | undefined
        served_span?: { start: number; end: number } | undefined
        full_tokens_est?: number | undefined
      }[]
    | undefined
  license?: string | undefined
}
type DeveloperSearchResponse = {
  success?: boolean | undefined
  results?: DeveloperSearchResult[] | undefined
  coverage?:
    | {
        doc?: 'ok' | 'degraded' | 'unavailable' | 'skipped' | undefined
        issue?: 'ok' | 'degraded' | 'unavailable' | 'skipped' | undefined
        pull_request?: 'ok' | 'degraded' | 'unavailable' | 'skipped' | undefined
        readme?: 'ok' | 'degraded' | 'unavailable' | 'skipped' | undefined
      }
    | undefined
  reranked?: boolean | undefined
  repos?:
    | {
        repo?: string | undefined
        indexed?: boolean | undefined
        types?:
          | {
              issue?: boolean | undefined
              pullRequest?: boolean | undefined
              readme?: boolean | undefined
            }
          | undefined
      }[]
    | undefined
  sources?: { source?: string | undefined; indexed?: boolean | undefined }[] | undefined
}
type GovSearchResponse = {
  success?: boolean | undefined
  data?:
    | {
        web?:
          | {
              url?: string | undefined
              title?: string | undefined
              description?: string | undefined
              position?: number | undefined
            }[]
          | undefined
      }
    | undefined
}
type EndpointFeedbackRequest = {
  rating: 'good' | 'partial' | 'bad'
  valuableSources?: { url: string; reason?: string | undefined }[] | undefined
  missingContent?: { topic: string; description?: string | undefined }[] | undefined
  querySuggestions?: string | undefined
  origin?: string | undefined
  integration?: (string | null) | undefined
  endpoint: 'search' | 'scrape' | 'parse' | 'map'
  jobId: string
  issues?: string[] | undefined
  tags?: string[] | undefined
  note?: string | undefined
  url?: string | undefined
  pageNumbers?: number[] | undefined
  metadata?: { [x: string]: unknown } | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/monitor': {
      $post:
        | {
            input: { json: MonitorCreateRequest }
            output: MonitorResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: MonitorCreateRequest }; output: {}; outputFormat: string; status: 400 }
      $get: {
        input: { query: { limit?: number | undefined; offset?: number | undefined } }
        output: MonitorListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/monitor/:monitorId': {
      $get:
        | {
            input: { param: { monitorId: string } }
            output: MonitorResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { monitorId: string } }; output: {}; outputFormat: string; status: 404 }
      $patch:
        | {
            input: { param: { monitorId: string } } & { json: MonitorUpdateRequest }
            output: MonitorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { monitorId: string } } & { json: MonitorUpdateRequest }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete:
        | {
            input: { param: { monitorId: string } }
            output: SuccessResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { monitorId: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/monitor/:monitorId/run': {
      $post:
        | {
            input: { param: { monitorId: string } }
            output: MonitorRunResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { monitorId: string } }; output: {}; outputFormat: string; status: 409 }
    }
  } & {
    '/monitor/:monitorId/checks': {
      $get: {
        input: { param: { monitorId: string } } & {
          query: {
            limit?: number | undefined
            offset?: number | undefined
            status?:
              | 'queued'
              | 'running'
              | 'completed'
              | 'failed'
              | 'partial'
              | 'skipped_overlap'
              | 'skipped_no_credits'
              | undefined
          }
        }
        output: MonitorCheckListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/monitor/:monitorId/checks/:checkId': {
      $get:
        | {
            input: { param: { monitorId: string; checkId: string } } & {
              query: {
                limit?: number | undefined
                skip?: number | undefined
                status?: 'same' | 'new' | 'changed' | 'removed' | 'error' | undefined
              }
            }
            output: MonitorCheckDetailResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { monitorId: string; checkId: string } } & {
              query: {
                limit?: number | undefined
                skip?: number | undefined
                status?: 'same' | 'new' | 'changed' | 'removed' | 'error' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/scrape': {
      $post:
        | {
            input: {
              json: {
                url: string
                formats?: Formats | undefined
                onlyMainContent?: boolean | undefined
                onlyCleanContent?: boolean | undefined
                includeTags?: string[] | undefined
                excludeTags?: string[] | undefined
                maxAge?: number | undefined
                minAge?: number | undefined
                headers?: { [x: string]: unknown } | undefined
                waitFor?: number | undefined
                mobile?: boolean | undefined
                skipTlsVerification?: boolean | undefined
                timeout?: number | undefined
                parsers?:
                  | (
                      | 'pdf'
                      | 'image'
                      | {
                          type: 'pdf'
                          mode?: 'fast' | 'auto' | 'ocr' | undefined
                          maxPages?: number | undefined
                          pages?: boolean | undefined
                          blocks?: boolean | undefined
                          pageMarkers?: boolean | undefined
                        }
                      | { type: 'image' }
                    )[]
                  | undefined
                actions?:
                  | (
                      | { type: 'wait'; milliseconds: number }
                      | { type: 'wait'; selector: string }
                      | {
                          type: 'screenshot'
                          fullPage?: boolean | undefined
                          quality?: number | undefined
                          viewport?: { width: number; height: number } | undefined
                        }
                      | { type: 'click'; selector: string; all?: boolean | undefined }
                      | { type: 'write'; text: string }
                      | { type: 'press'; key: string }
                      | {
                          type: 'scroll'
                          direction?: 'up' | 'down' | undefined
                          selector?: string | undefined
                        }
                      | { type: 'scrape' }
                      | { type: 'executeJavascript'; script: string }
                      | {
                          type: 'pdf'
                          format?:
                            | 'A0'
                            | 'A1'
                            | 'A2'
                            | 'A3'
                            | 'A4'
                            | 'A5'
                            | 'A6'
                            | 'Letter'
                            | 'Legal'
                            | 'Tabloid'
                            | 'Ledger'
                            | undefined
                          landscape?: boolean | undefined
                          scale?: number | undefined
                        }
                    )[]
                  | undefined
                location?:
                  | { country?: string | undefined; languages?: string[] | undefined }
                  | undefined
                removeBase64Images?: boolean | undefined
                blockAds?: boolean | undefined
                proxy?: 'basic' | 'enhanced' | 'auto' | undefined
                storeInCache?: boolean | undefined
                lockdown?: boolean | undefined
                checkPromptInjection?: boolean | undefined
                redactPII?: boolean | RedactPIIOptions | undefined
                profile?: { name: string; saveChanges?: boolean | undefined } | undefined
                threatProtection?: ThreatProtectionOverride | undefined
                auditMetadata?: AuditMetadata | undefined
                zeroDataRetention?: boolean | undefined
                alexandria?: AlexandriaCall | AlexandriaCall[] | undefined
                domainTools?: boolean | undefined
                toolDetail?: 'compact' | 'summary' | 'full' | undefined
              }
            }
            output: ScrapeResponse | AlexandriaScrapeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                url: string
                formats?: Formats | undefined
                onlyMainContent?: boolean | undefined
                onlyCleanContent?: boolean | undefined
                includeTags?: string[] | undefined
                excludeTags?: string[] | undefined
                maxAge?: number | undefined
                minAge?: number | undefined
                headers?: { [x: string]: unknown } | undefined
                waitFor?: number | undefined
                mobile?: boolean | undefined
                skipTlsVerification?: boolean | undefined
                timeout?: number | undefined
                parsers?:
                  | (
                      | 'pdf'
                      | 'image'
                      | {
                          type: 'pdf'
                          mode?: 'fast' | 'auto' | 'ocr' | undefined
                          maxPages?: number | undefined
                          pages?: boolean | undefined
                          blocks?: boolean | undefined
                          pageMarkers?: boolean | undefined
                        }
                      | { type: 'image' }
                    )[]
                  | undefined
                actions?:
                  | (
                      | { type: 'wait'; milliseconds: number }
                      | { type: 'wait'; selector: string }
                      | {
                          type: 'screenshot'
                          fullPage?: boolean | undefined
                          quality?: number | undefined
                          viewport?: { width: number; height: number } | undefined
                        }
                      | { type: 'click'; selector: string; all?: boolean | undefined }
                      | { type: 'write'; text: string }
                      | { type: 'press'; key: string }
                      | {
                          type: 'scroll'
                          direction?: 'up' | 'down' | undefined
                          selector?: string | undefined
                        }
                      | { type: 'scrape' }
                      | { type: 'executeJavascript'; script: string }
                      | {
                          type: 'pdf'
                          format?:
                            | 'A0'
                            | 'A1'
                            | 'A2'
                            | 'A3'
                            | 'A4'
                            | 'A5'
                            | 'A6'
                            | 'Letter'
                            | 'Legal'
                            | 'Tabloid'
                            | 'Ledger'
                            | undefined
                          landscape?: boolean | undefined
                          scale?: number | undefined
                        }
                    )[]
                  | undefined
                location?:
                  | { country?: string | undefined; languages?: string[] | undefined }
                  | undefined
                removeBase64Images?: boolean | undefined
                blockAds?: boolean | undefined
                proxy?: 'basic' | 'enhanced' | 'auto' | undefined
                storeInCache?: boolean | undefined
                lockdown?: boolean | undefined
                checkPromptInjection?: boolean | undefined
                redactPII?: boolean | RedactPIIOptions | undefined
                profile?: { name: string; saveChanges?: boolean | undefined } | undefined
                threatProtection?: ThreatProtectionOverride | undefined
                auditMetadata?: AuditMetadata | undefined
                zeroDataRetention?: boolean | undefined
                alexandria?: AlexandriaCall | AlexandriaCall[] | undefined
                domainTools?: boolean | undefined
                toolDetail?: 'compact' | 'summary' | 'full' | undefined
              }
            }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              code?: string | undefined
              chargeId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                url: string
                formats?: Formats | undefined
                onlyMainContent?: boolean | undefined
                onlyCleanContent?: boolean | undefined
                includeTags?: string[] | undefined
                excludeTags?: string[] | undefined
                maxAge?: number | undefined
                minAge?: number | undefined
                headers?: { [x: string]: unknown } | undefined
                waitFor?: number | undefined
                mobile?: boolean | undefined
                skipTlsVerification?: boolean | undefined
                timeout?: number | undefined
                parsers?:
                  | (
                      | 'pdf'
                      | 'image'
                      | {
                          type: 'pdf'
                          mode?: 'fast' | 'auto' | 'ocr' | undefined
                          maxPages?: number | undefined
                          pages?: boolean | undefined
                          blocks?: boolean | undefined
                          pageMarkers?: boolean | undefined
                        }
                      | { type: 'image' }
                    )[]
                  | undefined
                actions?:
                  | (
                      | { type: 'wait'; milliseconds: number }
                      | { type: 'wait'; selector: string }
                      | {
                          type: 'screenshot'
                          fullPage?: boolean | undefined
                          quality?: number | undefined
                          viewport?: { width: number; height: number } | undefined
                        }
                      | { type: 'click'; selector: string; all?: boolean | undefined }
                      | { type: 'write'; text: string }
                      | { type: 'press'; key: string }
                      | {
                          type: 'scroll'
                          direction?: 'up' | 'down' | undefined
                          selector?: string | undefined
                        }
                      | { type: 'scrape' }
                      | { type: 'executeJavascript'; script: string }
                      | {
                          type: 'pdf'
                          format?:
                            | 'A0'
                            | 'A1'
                            | 'A2'
                            | 'A3'
                            | 'A4'
                            | 'A5'
                            | 'A6'
                            | 'Letter'
                            | 'Legal'
                            | 'Tabloid'
                            | 'Ledger'
                            | undefined
                          landscape?: boolean | undefined
                          scale?: number | undefined
                        }
                    )[]
                  | undefined
                location?:
                  | { country?: string | undefined; languages?: string[] | undefined }
                  | undefined
                removeBase64Images?: boolean | undefined
                blockAds?: boolean | undefined
                proxy?: 'basic' | 'enhanced' | 'auto' | undefined
                storeInCache?: boolean | undefined
                lockdown?: boolean | undefined
                checkPromptInjection?: boolean | undefined
                redactPII?: boolean | RedactPIIOptions | undefined
                profile?: { name: string; saveChanges?: boolean | undefined } | undefined
                threatProtection?: ThreatProtectionOverride | undefined
                auditMetadata?: AuditMetadata | undefined
                zeroDataRetention?: boolean | undefined
                alexandria?: AlexandriaCall | AlexandriaCall[] | undefined
                domainTools?: boolean | undefined
                toolDetail?: 'compact' | 'summary' | 'full' | undefined
              }
            }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              code?: string | undefined
              chargeId?: string | undefined
            }
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              json: {
                url: string
                formats?: Formats | undefined
                onlyMainContent?: boolean | undefined
                onlyCleanContent?: boolean | undefined
                includeTags?: string[] | undefined
                excludeTags?: string[] | undefined
                maxAge?: number | undefined
                minAge?: number | undefined
                headers?: { [x: string]: unknown } | undefined
                waitFor?: number | undefined
                mobile?: boolean | undefined
                skipTlsVerification?: boolean | undefined
                timeout?: number | undefined
                parsers?:
                  | (
                      | 'pdf'
                      | 'image'
                      | {
                          type: 'pdf'
                          mode?: 'fast' | 'auto' | 'ocr' | undefined
                          maxPages?: number | undefined
                          pages?: boolean | undefined
                          blocks?: boolean | undefined
                          pageMarkers?: boolean | undefined
                        }
                      | { type: 'image' }
                    )[]
                  | undefined
                actions?:
                  | (
                      | { type: 'wait'; milliseconds: number }
                      | { type: 'wait'; selector: string }
                      | {
                          type: 'screenshot'
                          fullPage?: boolean | undefined
                          quality?: number | undefined
                          viewport?: { width: number; height: number } | undefined
                        }
                      | { type: 'click'; selector: string; all?: boolean | undefined }
                      | { type: 'write'; text: string }
                      | { type: 'press'; key: string }
                      | {
                          type: 'scroll'
                          direction?: 'up' | 'down' | undefined
                          selector?: string | undefined
                        }
                      | { type: 'scrape' }
                      | { type: 'executeJavascript'; script: string }
                      | {
                          type: 'pdf'
                          format?:
                            | 'A0'
                            | 'A1'
                            | 'A2'
                            | 'A3'
                            | 'A4'
                            | 'A5'
                            | 'A6'
                            | 'Letter'
                            | 'Legal'
                            | 'Tabloid'
                            | 'Ledger'
                            | undefined
                          landscape?: boolean | undefined
                          scale?: number | undefined
                        }
                    )[]
                  | undefined
                location?:
                  | { country?: string | undefined; languages?: string[] | undefined }
                  | undefined
                removeBase64Images?: boolean | undefined
                blockAds?: boolean | undefined
                proxy?: 'basic' | 'enhanced' | 'auto' | undefined
                storeInCache?: boolean | undefined
                lockdown?: boolean | undefined
                checkPromptInjection?: boolean | undefined
                redactPII?: boolean | RedactPIIOptions | undefined
                profile?: { name: string; saveChanges?: boolean | undefined } | undefined
                threatProtection?: ThreatProtectionOverride | undefined
                auditMetadata?: AuditMetadata | undefined
                zeroDataRetention?: boolean | undefined
                alexandria?: AlexandriaCall | AlexandriaCall[] | undefined
                domainTools?: boolean | undefined
                toolDetail?: 'compact' | 'summary' | 'full' | undefined
              }
            }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              code?: string | undefined
              requiresAction?:
                | { type: 'accept_terms'; terms: string; version: string; url: string }
                | undefined
              chargeId?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                url: string
                formats?: Formats | undefined
                onlyMainContent?: boolean | undefined
                onlyCleanContent?: boolean | undefined
                includeTags?: string[] | undefined
                excludeTags?: string[] | undefined
                maxAge?: number | undefined
                minAge?: number | undefined
                headers?: { [x: string]: unknown } | undefined
                waitFor?: number | undefined
                mobile?: boolean | undefined
                skipTlsVerification?: boolean | undefined
                timeout?: number | undefined
                parsers?:
                  | (
                      | 'pdf'
                      | 'image'
                      | {
                          type: 'pdf'
                          mode?: 'fast' | 'auto' | 'ocr' | undefined
                          maxPages?: number | undefined
                          pages?: boolean | undefined
                          blocks?: boolean | undefined
                          pageMarkers?: boolean | undefined
                        }
                      | { type: 'image' }
                    )[]
                  | undefined
                actions?:
                  | (
                      | { type: 'wait'; milliseconds: number }
                      | { type: 'wait'; selector: string }
                      | {
                          type: 'screenshot'
                          fullPage?: boolean | undefined
                          quality?: number | undefined
                          viewport?: { width: number; height: number } | undefined
                        }
                      | { type: 'click'; selector: string; all?: boolean | undefined }
                      | { type: 'write'; text: string }
                      | { type: 'press'; key: string }
                      | {
                          type: 'scroll'
                          direction?: 'up' | 'down' | undefined
                          selector?: string | undefined
                        }
                      | { type: 'scrape' }
                      | { type: 'executeJavascript'; script: string }
                      | {
                          type: 'pdf'
                          format?:
                            | 'A0'
                            | 'A1'
                            | 'A2'
                            | 'A3'
                            | 'A4'
                            | 'A5'
                            | 'A6'
                            | 'Letter'
                            | 'Legal'
                            | 'Tabloid'
                            | 'Ledger'
                            | undefined
                          landscape?: boolean | undefined
                          scale?: number | undefined
                        }
                    )[]
                  | undefined
                location?:
                  | { country?: string | undefined; languages?: string[] | undefined }
                  | undefined
                removeBase64Images?: boolean | undefined
                blockAds?: boolean | undefined
                proxy?: 'basic' | 'enhanced' | 'auto' | undefined
                storeInCache?: boolean | undefined
                lockdown?: boolean | undefined
                checkPromptInjection?: boolean | undefined
                redactPII?: boolean | RedactPIIOptions | undefined
                profile?: { name: string; saveChanges?: boolean | undefined } | undefined
                threatProtection?: ThreatProtectionOverride | undefined
                auditMetadata?: AuditMetadata | undefined
                zeroDataRetention?: boolean | undefined
                alexandria?: AlexandriaCall | AlexandriaCall[] | undefined
                domainTools?: boolean | undefined
                toolDetail?: 'compact' | 'summary' | 'full' | undefined
              }
            }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              code?: string | undefined
              chargeId?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                url: string
                formats?: Formats | undefined
                onlyMainContent?: boolean | undefined
                onlyCleanContent?: boolean | undefined
                includeTags?: string[] | undefined
                excludeTags?: string[] | undefined
                maxAge?: number | undefined
                minAge?: number | undefined
                headers?: { [x: string]: unknown } | undefined
                waitFor?: number | undefined
                mobile?: boolean | undefined
                skipTlsVerification?: boolean | undefined
                timeout?: number | undefined
                parsers?:
                  | (
                      | 'pdf'
                      | 'image'
                      | {
                          type: 'pdf'
                          mode?: 'fast' | 'auto' | 'ocr' | undefined
                          maxPages?: number | undefined
                          pages?: boolean | undefined
                          blocks?: boolean | undefined
                          pageMarkers?: boolean | undefined
                        }
                      | { type: 'image' }
                    )[]
                  | undefined
                actions?:
                  | (
                      | { type: 'wait'; milliseconds: number }
                      | { type: 'wait'; selector: string }
                      | {
                          type: 'screenshot'
                          fullPage?: boolean | undefined
                          quality?: number | undefined
                          viewport?: { width: number; height: number } | undefined
                        }
                      | { type: 'click'; selector: string; all?: boolean | undefined }
                      | { type: 'write'; text: string }
                      | { type: 'press'; key: string }
                      | {
                          type: 'scroll'
                          direction?: 'up' | 'down' | undefined
                          selector?: string | undefined
                        }
                      | { type: 'scrape' }
                      | { type: 'executeJavascript'; script: string }
                      | {
                          type: 'pdf'
                          format?:
                            | 'A0'
                            | 'A1'
                            | 'A2'
                            | 'A3'
                            | 'A4'
                            | 'A5'
                            | 'A6'
                            | 'Letter'
                            | 'Legal'
                            | 'Tabloid'
                            | 'Ledger'
                            | undefined
                          landscape?: boolean | undefined
                          scale?: number | undefined
                        }
                    )[]
                  | undefined
                location?:
                  | { country?: string | undefined; languages?: string[] | undefined }
                  | undefined
                removeBase64Images?: boolean | undefined
                blockAds?: boolean | undefined
                proxy?: 'basic' | 'enhanced' | 'auto' | undefined
                storeInCache?: boolean | undefined
                lockdown?: boolean | undefined
                checkPromptInjection?: boolean | undefined
                redactPII?: boolean | RedactPIIOptions | undefined
                profile?: { name: string; saveChanges?: boolean | undefined } | undefined
                threatProtection?: ThreatProtectionOverride | undefined
                auditMetadata?: AuditMetadata | undefined
                zeroDataRetention?: boolean | undefined
                alexandria?: AlexandriaCall | AlexandriaCall[] | undefined
                domainTools?: boolean | undefined
                toolDetail?: 'compact' | 'summary' | 'full' | undefined
              }
            }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              code?: string | undefined
              chargeId?: string | undefined
            }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              json: {
                url: string
                formats?: Formats | undefined
                onlyMainContent?: boolean | undefined
                onlyCleanContent?: boolean | undefined
                includeTags?: string[] | undefined
                excludeTags?: string[] | undefined
                maxAge?: number | undefined
                minAge?: number | undefined
                headers?: { [x: string]: unknown } | undefined
                waitFor?: number | undefined
                mobile?: boolean | undefined
                skipTlsVerification?: boolean | undefined
                timeout?: number | undefined
                parsers?:
                  | (
                      | 'pdf'
                      | 'image'
                      | {
                          type: 'pdf'
                          mode?: 'fast' | 'auto' | 'ocr' | undefined
                          maxPages?: number | undefined
                          pages?: boolean | undefined
                          blocks?: boolean | undefined
                          pageMarkers?: boolean | undefined
                        }
                      | { type: 'image' }
                    )[]
                  | undefined
                actions?:
                  | (
                      | { type: 'wait'; milliseconds: number }
                      | { type: 'wait'; selector: string }
                      | {
                          type: 'screenshot'
                          fullPage?: boolean | undefined
                          quality?: number | undefined
                          viewport?: { width: number; height: number } | undefined
                        }
                      | { type: 'click'; selector: string; all?: boolean | undefined }
                      | { type: 'write'; text: string }
                      | { type: 'press'; key: string }
                      | {
                          type: 'scroll'
                          direction?: 'up' | 'down' | undefined
                          selector?: string | undefined
                        }
                      | { type: 'scrape' }
                      | { type: 'executeJavascript'; script: string }
                      | {
                          type: 'pdf'
                          format?:
                            | 'A0'
                            | 'A1'
                            | 'A2'
                            | 'A3'
                            | 'A4'
                            | 'A5'
                            | 'A6'
                            | 'Letter'
                            | 'Legal'
                            | 'Tabloid'
                            | 'Ledger'
                            | undefined
                          landscape?: boolean | undefined
                          scale?: number | undefined
                        }
                    )[]
                  | undefined
                location?:
                  | { country?: string | undefined; languages?: string[] | undefined }
                  | undefined
                removeBase64Images?: boolean | undefined
                blockAds?: boolean | undefined
                proxy?: 'basic' | 'enhanced' | 'auto' | undefined
                storeInCache?: boolean | undefined
                lockdown?: boolean | undefined
                checkPromptInjection?: boolean | undefined
                redactPII?: boolean | RedactPIIOptions | undefined
                profile?: { name: string; saveChanges?: boolean | undefined } | undefined
                threatProtection?: ThreatProtectionOverride | undefined
                auditMetadata?: AuditMetadata | undefined
                zeroDataRetention?: boolean | undefined
                alexandria?: AlexandriaCall | AlexandriaCall[] | undefined
                domainTools?: boolean | undefined
                toolDetail?: 'compact' | 'summary' | 'full' | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                url: string
                formats?: Formats | undefined
                onlyMainContent?: boolean | undefined
                onlyCleanContent?: boolean | undefined
                includeTags?: string[] | undefined
                excludeTags?: string[] | undefined
                maxAge?: number | undefined
                minAge?: number | undefined
                headers?: { [x: string]: unknown } | undefined
                waitFor?: number | undefined
                mobile?: boolean | undefined
                skipTlsVerification?: boolean | undefined
                timeout?: number | undefined
                parsers?:
                  | (
                      | 'pdf'
                      | 'image'
                      | {
                          type: 'pdf'
                          mode?: 'fast' | 'auto' | 'ocr' | undefined
                          maxPages?: number | undefined
                          pages?: boolean | undefined
                          blocks?: boolean | undefined
                          pageMarkers?: boolean | undefined
                        }
                      | { type: 'image' }
                    )[]
                  | undefined
                actions?:
                  | (
                      | { type: 'wait'; milliseconds: number }
                      | { type: 'wait'; selector: string }
                      | {
                          type: 'screenshot'
                          fullPage?: boolean | undefined
                          quality?: number | undefined
                          viewport?: { width: number; height: number } | undefined
                        }
                      | { type: 'click'; selector: string; all?: boolean | undefined }
                      | { type: 'write'; text: string }
                      | { type: 'press'; key: string }
                      | {
                          type: 'scroll'
                          direction?: 'up' | 'down' | undefined
                          selector?: string | undefined
                        }
                      | { type: 'scrape' }
                      | { type: 'executeJavascript'; script: string }
                      | {
                          type: 'pdf'
                          format?:
                            | 'A0'
                            | 'A1'
                            | 'A2'
                            | 'A3'
                            | 'A4'
                            | 'A5'
                            | 'A6'
                            | 'Letter'
                            | 'Legal'
                            | 'Tabloid'
                            | 'Ledger'
                            | undefined
                          landscape?: boolean | undefined
                          scale?: number | undefined
                        }
                    )[]
                  | undefined
                location?:
                  | { country?: string | undefined; languages?: string[] | undefined }
                  | undefined
                removeBase64Images?: boolean | undefined
                blockAds?: boolean | undefined
                proxy?: 'basic' | 'enhanced' | 'auto' | undefined
                storeInCache?: boolean | undefined
                lockdown?: boolean | undefined
                checkPromptInjection?: boolean | undefined
                redactPII?: boolean | RedactPIIOptions | undefined
                profile?: { name: string; saveChanges?: boolean | undefined } | undefined
                threatProtection?: ThreatProtectionOverride | undefined
                auditMetadata?: AuditMetadata | undefined
                zeroDataRetention?: boolean | undefined
                alexandria?: AlexandriaCall | AlexandriaCall[] | undefined
                domainTools?: boolean | undefined
                toolDetail?: 'compact' | 'summary' | 'full' | undefined
              }
            }
            output: {
              success?: boolean | undefined
              code?: string | undefined
              error?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              json: {
                url: string
                formats?: Formats | undefined
                onlyMainContent?: boolean | undefined
                onlyCleanContent?: boolean | undefined
                includeTags?: string[] | undefined
                excludeTags?: string[] | undefined
                maxAge?: number | undefined
                minAge?: number | undefined
                headers?: { [x: string]: unknown } | undefined
                waitFor?: number | undefined
                mobile?: boolean | undefined
                skipTlsVerification?: boolean | undefined
                timeout?: number | undefined
                parsers?:
                  | (
                      | 'pdf'
                      | 'image'
                      | {
                          type: 'pdf'
                          mode?: 'fast' | 'auto' | 'ocr' | undefined
                          maxPages?: number | undefined
                          pages?: boolean | undefined
                          blocks?: boolean | undefined
                          pageMarkers?: boolean | undefined
                        }
                      | { type: 'image' }
                    )[]
                  | undefined
                actions?:
                  | (
                      | { type: 'wait'; milliseconds: number }
                      | { type: 'wait'; selector: string }
                      | {
                          type: 'screenshot'
                          fullPage?: boolean | undefined
                          quality?: number | undefined
                          viewport?: { width: number; height: number } | undefined
                        }
                      | { type: 'click'; selector: string; all?: boolean | undefined }
                      | { type: 'write'; text: string }
                      | { type: 'press'; key: string }
                      | {
                          type: 'scroll'
                          direction?: 'up' | 'down' | undefined
                          selector?: string | undefined
                        }
                      | { type: 'scrape' }
                      | { type: 'executeJavascript'; script: string }
                      | {
                          type: 'pdf'
                          format?:
                            | 'A0'
                            | 'A1'
                            | 'A2'
                            | 'A3'
                            | 'A4'
                            | 'A5'
                            | 'A6'
                            | 'Letter'
                            | 'Legal'
                            | 'Tabloid'
                            | 'Ledger'
                            | undefined
                          landscape?: boolean | undefined
                          scale?: number | undefined
                        }
                    )[]
                  | undefined
                location?:
                  | { country?: string | undefined; languages?: string[] | undefined }
                  | undefined
                removeBase64Images?: boolean | undefined
                blockAds?: boolean | undefined
                proxy?: 'basic' | 'enhanced' | 'auto' | undefined
                storeInCache?: boolean | undefined
                lockdown?: boolean | undefined
                checkPromptInjection?: boolean | undefined
                redactPII?: boolean | RedactPIIOptions | undefined
                profile?: { name: string; saveChanges?: boolean | undefined } | undefined
                threatProtection?: ThreatProtectionOverride | undefined
                auditMetadata?: AuditMetadata | undefined
                zeroDataRetention?: boolean | undefined
                alexandria?: AlexandriaCall | AlexandriaCall[] | undefined
                domainTools?: boolean | undefined
                toolDetail?: 'compact' | 'summary' | 'full' | undefined
              }
            }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              code?: string | undefined
              chargeId?: string | undefined
            }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/scrape/:jobId/interact': {
      $post:
        | {
            input: { param: { jobId: string } } & {
              json: {
                code: string
                language?: 'python' | 'node' | 'bash' | undefined
                timeout?: number | undefined
                origin?: string | undefined
              }
            }
            output: {
              success?: boolean | undefined
              cdpUrl?: (string | null) | undefined
              liveViewUrl?: (string | null) | undefined
              interactiveLiveViewUrl?: (string | null) | undefined
              output?: (string | null) | undefined
              stdout?: (string | null) | undefined
              result?: (string | null) | undefined
              stderr?: (string | null) | undefined
              exitCode?: (number | null) | undefined
              killed?: boolean | undefined
              error?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { jobId: string } } & {
              json: {
                code: string
                language?: 'python' | 'node' | 'bash' | undefined
                timeout?: number | undefined
                origin?: string | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { jobId: string } } & {
              json: {
                code: string
                language?: 'python' | 'node' | 'bash' | undefined
                timeout?: number | undefined
                origin?: string | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { jobId: string } } & {
              json: {
                code: string
                language?: 'python' | 'node' | 'bash' | undefined
                timeout?: number | undefined
                origin?: string | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { jobId: string } } & {
              json: {
                code: string
                language?: 'python' | 'node' | 'bash' | undefined
                timeout?: number | undefined
                origin?: string | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { jobId: string } } & {
              json: {
                code: string
                language?: 'python' | 'node' | 'bash' | undefined
                timeout?: number | undefined
                origin?: string | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { jobId: string } } & {
              json: {
                code: string
                language?: 'python' | 'node' | 'bash' | undefined
                timeout?: number | undefined
                origin?: string | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { jobId: string } } & {
              json: {
                code: string
                language?: 'python' | 'node' | 'bash' | undefined
                timeout?: number | undefined
                origin?: string | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { jobId: string } } & {
              json: {
                code: string
                language?: 'python' | 'node' | 'bash' | undefined
                timeout?: number | undefined
                origin?: string | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 502
          }
      $delete:
        | {
            input: { param: { jobId: string } }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { jobId: string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { jobId: string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/parse': {
      $post:
        | {
            input: { form: { file: File; options?: ParseOptions | undefined } }
            output: ScrapeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: { file: File; options?: ParseOptions | undefined } }
            output: {
              success?: boolean | undefined
              code?: string | undefined
              error?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { form: { file: File; options?: ParseOptions | undefined } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { form: { file: File; options?: ParseOptions | undefined } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { form: { file: File; options?: ParseOptions | undefined } }
            output: {
              success?: boolean | undefined
              code?: string | undefined
              error?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/parse/formats': {
      $get:
        | {
            input: {}
            output: {
              success?: boolean | undefined
              data?:
                | {
                    formats?:
                      | {
                          format?: string | undefined
                          kind?: 'document' | 'image' | undefined
                          extensions?: string[] | undefined
                          mimeTypes?: string[] | undefined
                          available?: boolean | undefined
                        }[]
                      | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/batch/scrape': {
      $post:
        | {
            input: {
              json: {
                urls: string[]
                webhook?:
                  | {
                      url: string
                      headers?: { [x: string]: string } | undefined
                      metadata?: { [x: string]: unknown } | undefined
                      events?: ('completed' | 'page' | 'failed' | 'started')[] | undefined
                    }
                  | undefined
                maxConcurrency?: number | undefined
                ignoreInvalidURLs?: boolean | undefined
                formats?: Formats | undefined
                onlyMainContent?: boolean | undefined
                onlyCleanContent?: boolean | undefined
                includeTags?: string[] | undefined
                excludeTags?: string[] | undefined
                maxAge?: number | undefined
                minAge?: number | undefined
                headers?: { [x: string]: unknown } | undefined
                waitFor?: number | undefined
                mobile?: boolean | undefined
                skipTlsVerification?: boolean | undefined
                timeout?: number | undefined
                parsers?:
                  | (
                      | 'pdf'
                      | 'image'
                      | {
                          type: 'pdf'
                          mode?: 'fast' | 'auto' | 'ocr' | undefined
                          maxPages?: number | undefined
                          pages?: boolean | undefined
                          blocks?: boolean | undefined
                          pageMarkers?: boolean | undefined
                        }
                      | { type: 'image' }
                    )[]
                  | undefined
                actions?:
                  | (
                      | { type: 'wait'; milliseconds: number }
                      | { type: 'wait'; selector: string }
                      | {
                          type: 'screenshot'
                          fullPage?: boolean | undefined
                          quality?: number | undefined
                          viewport?: { width: number; height: number } | undefined
                        }
                      | { type: 'click'; selector: string; all?: boolean | undefined }
                      | { type: 'write'; text: string }
                      | { type: 'press'; key: string }
                      | {
                          type: 'scroll'
                          direction?: 'up' | 'down' | undefined
                          selector?: string | undefined
                        }
                      | { type: 'scrape' }
                      | { type: 'executeJavascript'; script: string }
                      | {
                          type: 'pdf'
                          format?:
                            | 'A0'
                            | 'A1'
                            | 'A2'
                            | 'A3'
                            | 'A4'
                            | 'A5'
                            | 'A6'
                            | 'Letter'
                            | 'Legal'
                            | 'Tabloid'
                            | 'Ledger'
                            | undefined
                          landscape?: boolean | undefined
                          scale?: number | undefined
                        }
                    )[]
                  | undefined
                location?:
                  | { country?: string | undefined; languages?: string[] | undefined }
                  | undefined
                removeBase64Images?: boolean | undefined
                blockAds?: boolean | undefined
                proxy?: 'basic' | 'enhanced' | 'auto' | undefined
                storeInCache?: boolean | undefined
                lockdown?: boolean | undefined
                checkPromptInjection?: boolean | undefined
                redactPII?: boolean | RedactPIIOptions | undefined
                profile?: { name: string; saveChanges?: boolean | undefined } | undefined
                threatProtection?: ThreatProtectionOverride | undefined
                auditMetadata?: AuditMetadata | undefined
                zeroDataRetention?: boolean | undefined
              }
            }
            output: BatchScrapeResponseObj
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                urls: string[]
                webhook?:
                  | {
                      url: string
                      headers?: { [x: string]: string } | undefined
                      metadata?: { [x: string]: unknown } | undefined
                      events?: ('completed' | 'page' | 'failed' | 'started')[] | undefined
                    }
                  | undefined
                maxConcurrency?: number | undefined
                ignoreInvalidURLs?: boolean | undefined
                formats?: Formats | undefined
                onlyMainContent?: boolean | undefined
                onlyCleanContent?: boolean | undefined
                includeTags?: string[] | undefined
                excludeTags?: string[] | undefined
                maxAge?: number | undefined
                minAge?: number | undefined
                headers?: { [x: string]: unknown } | undefined
                waitFor?: number | undefined
                mobile?: boolean | undefined
                skipTlsVerification?: boolean | undefined
                timeout?: number | undefined
                parsers?:
                  | (
                      | 'pdf'
                      | 'image'
                      | {
                          type: 'pdf'
                          mode?: 'fast' | 'auto' | 'ocr' | undefined
                          maxPages?: number | undefined
                          pages?: boolean | undefined
                          blocks?: boolean | undefined
                          pageMarkers?: boolean | undefined
                        }
                      | { type: 'image' }
                    )[]
                  | undefined
                actions?:
                  | (
                      | { type: 'wait'; milliseconds: number }
                      | { type: 'wait'; selector: string }
                      | {
                          type: 'screenshot'
                          fullPage?: boolean | undefined
                          quality?: number | undefined
                          viewport?: { width: number; height: number } | undefined
                        }
                      | { type: 'click'; selector: string; all?: boolean | undefined }
                      | { type: 'write'; text: string }
                      | { type: 'press'; key: string }
                      | {
                          type: 'scroll'
                          direction?: 'up' | 'down' | undefined
                          selector?: string | undefined
                        }
                      | { type: 'scrape' }
                      | { type: 'executeJavascript'; script: string }
                      | {
                          type: 'pdf'
                          format?:
                            | 'A0'
                            | 'A1'
                            | 'A2'
                            | 'A3'
                            | 'A4'
                            | 'A5'
                            | 'A6'
                            | 'Letter'
                            | 'Legal'
                            | 'Tabloid'
                            | 'Ledger'
                            | undefined
                          landscape?: boolean | undefined
                          scale?: number | undefined
                        }
                    )[]
                  | undefined
                location?:
                  | { country?: string | undefined; languages?: string[] | undefined }
                  | undefined
                removeBase64Images?: boolean | undefined
                blockAds?: boolean | undefined
                proxy?: 'basic' | 'enhanced' | 'auto' | undefined
                storeInCache?: boolean | undefined
                lockdown?: boolean | undefined
                checkPromptInjection?: boolean | undefined
                redactPII?: boolean | RedactPIIOptions | undefined
                profile?: { name: string; saveChanges?: boolean | undefined } | undefined
                threatProtection?: ThreatProtectionOverride | undefined
                auditMetadata?: AuditMetadata | undefined
                zeroDataRetention?: boolean | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              json: {
                urls: string[]
                webhook?:
                  | {
                      url: string
                      headers?: { [x: string]: string } | undefined
                      metadata?: { [x: string]: unknown } | undefined
                      events?: ('completed' | 'page' | 'failed' | 'started')[] | undefined
                    }
                  | undefined
                maxConcurrency?: number | undefined
                ignoreInvalidURLs?: boolean | undefined
                formats?: Formats | undefined
                onlyMainContent?: boolean | undefined
                onlyCleanContent?: boolean | undefined
                includeTags?: string[] | undefined
                excludeTags?: string[] | undefined
                maxAge?: number | undefined
                minAge?: number | undefined
                headers?: { [x: string]: unknown } | undefined
                waitFor?: number | undefined
                mobile?: boolean | undefined
                skipTlsVerification?: boolean | undefined
                timeout?: number | undefined
                parsers?:
                  | (
                      | 'pdf'
                      | 'image'
                      | {
                          type: 'pdf'
                          mode?: 'fast' | 'auto' | 'ocr' | undefined
                          maxPages?: number | undefined
                          pages?: boolean | undefined
                          blocks?: boolean | undefined
                          pageMarkers?: boolean | undefined
                        }
                      | { type: 'image' }
                    )[]
                  | undefined
                actions?:
                  | (
                      | { type: 'wait'; milliseconds: number }
                      | { type: 'wait'; selector: string }
                      | {
                          type: 'screenshot'
                          fullPage?: boolean | undefined
                          quality?: number | undefined
                          viewport?: { width: number; height: number } | undefined
                        }
                      | { type: 'click'; selector: string; all?: boolean | undefined }
                      | { type: 'write'; text: string }
                      | { type: 'press'; key: string }
                      | {
                          type: 'scroll'
                          direction?: 'up' | 'down' | undefined
                          selector?: string | undefined
                        }
                      | { type: 'scrape' }
                      | { type: 'executeJavascript'; script: string }
                      | {
                          type: 'pdf'
                          format?:
                            | 'A0'
                            | 'A1'
                            | 'A2'
                            | 'A3'
                            | 'A4'
                            | 'A5'
                            | 'A6'
                            | 'Letter'
                            | 'Legal'
                            | 'Tabloid'
                            | 'Ledger'
                            | undefined
                          landscape?: boolean | undefined
                          scale?: number | undefined
                        }
                    )[]
                  | undefined
                location?:
                  | { country?: string | undefined; languages?: string[] | undefined }
                  | undefined
                removeBase64Images?: boolean | undefined
                blockAds?: boolean | undefined
                proxy?: 'basic' | 'enhanced' | 'auto' | undefined
                storeInCache?: boolean | undefined
                lockdown?: boolean | undefined
                checkPromptInjection?: boolean | undefined
                redactPII?: boolean | RedactPIIOptions | undefined
                profile?: { name: string; saveChanges?: boolean | undefined } | undefined
                threatProtection?: ThreatProtectionOverride | undefined
                auditMetadata?: AuditMetadata | undefined
                zeroDataRetention?: boolean | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                urls: string[]
                webhook?:
                  | {
                      url: string
                      headers?: { [x: string]: string } | undefined
                      metadata?: { [x: string]: unknown } | undefined
                      events?: ('completed' | 'page' | 'failed' | 'started')[] | undefined
                    }
                  | undefined
                maxConcurrency?: number | undefined
                ignoreInvalidURLs?: boolean | undefined
                formats?: Formats | undefined
                onlyMainContent?: boolean | undefined
                onlyCleanContent?: boolean | undefined
                includeTags?: string[] | undefined
                excludeTags?: string[] | undefined
                maxAge?: number | undefined
                minAge?: number | undefined
                headers?: { [x: string]: unknown } | undefined
                waitFor?: number | undefined
                mobile?: boolean | undefined
                skipTlsVerification?: boolean | undefined
                timeout?: number | undefined
                parsers?:
                  | (
                      | 'pdf'
                      | 'image'
                      | {
                          type: 'pdf'
                          mode?: 'fast' | 'auto' | 'ocr' | undefined
                          maxPages?: number | undefined
                          pages?: boolean | undefined
                          blocks?: boolean | undefined
                          pageMarkers?: boolean | undefined
                        }
                      | { type: 'image' }
                    )[]
                  | undefined
                actions?:
                  | (
                      | { type: 'wait'; milliseconds: number }
                      | { type: 'wait'; selector: string }
                      | {
                          type: 'screenshot'
                          fullPage?: boolean | undefined
                          quality?: number | undefined
                          viewport?: { width: number; height: number } | undefined
                        }
                      | { type: 'click'; selector: string; all?: boolean | undefined }
                      | { type: 'write'; text: string }
                      | { type: 'press'; key: string }
                      | {
                          type: 'scroll'
                          direction?: 'up' | 'down' | undefined
                          selector?: string | undefined
                        }
                      | { type: 'scrape' }
                      | { type: 'executeJavascript'; script: string }
                      | {
                          type: 'pdf'
                          format?:
                            | 'A0'
                            | 'A1'
                            | 'A2'
                            | 'A3'
                            | 'A4'
                            | 'A5'
                            | 'A6'
                            | 'Letter'
                            | 'Legal'
                            | 'Tabloid'
                            | 'Ledger'
                            | undefined
                          landscape?: boolean | undefined
                          scale?: number | undefined
                        }
                    )[]
                  | undefined
                location?:
                  | { country?: string | undefined; languages?: string[] | undefined }
                  | undefined
                removeBase64Images?: boolean | undefined
                blockAds?: boolean | undefined
                proxy?: 'basic' | 'enhanced' | 'auto' | undefined
                storeInCache?: boolean | undefined
                lockdown?: boolean | undefined
                checkPromptInjection?: boolean | undefined
                redactPII?: boolean | RedactPIIOptions | undefined
                profile?: { name: string; saveChanges?: boolean | undefined } | undefined
                threatProtection?: ThreatProtectionOverride | undefined
                auditMetadata?: AuditMetadata | undefined
                zeroDataRetention?: boolean | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/batch/scrape/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: BatchScrapeStatusResponseObj
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { id: string } }
            output: { status?: 'cancelled' | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/batch/scrape/:id/errors': {
      $get:
        | {
            input: { param: { id: string } }
            output: CrawlErrorsResponseObj
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/crawl/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: CrawlStatusResponseObj
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { id: string } }
            output: { status?: 'cancelled' | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/crawl/:id/errors': {
      $get:
        | {
            input: { param: { id: string } }
            output: CrawlErrorsResponseObj
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/crawl': {
      $post:
        | {
            input: {
              json: {
                url: string
                prompt?: string | undefined
                excludePaths?: string[] | undefined
                includePaths?: string[] | undefined
                maxDiscoveryDepth?: number | undefined
                sitemap?: 'skip' | 'include' | 'only' | undefined
                ignoreQueryParameters?: boolean | undefined
                regexOnFullURL?: boolean | undefined
                limit?: number | undefined
                crawlEntireDomain?: boolean | undefined
                allowExternalLinks?: boolean | undefined
                allowSubdomains?: boolean | undefined
                ignoreRobotsTxt?: boolean | undefined
                robotsUserAgent?: string | undefined
                delay?: number | undefined
                maxConcurrency?: number | undefined
                webhook?:
                  | {
                      url: string
                      headers?: { [x: string]: string } | undefined
                      metadata?: { [x: string]: unknown } | undefined
                      events?: ('completed' | 'page' | 'failed' | 'started')[] | undefined
                    }
                  | undefined
                scrapeOptions?: ScrapeOptions | undefined
                zeroDataRetention?: boolean | undefined
              }
            }
            output: CrawlResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                url: string
                prompt?: string | undefined
                excludePaths?: string[] | undefined
                includePaths?: string[] | undefined
                maxDiscoveryDepth?: number | undefined
                sitemap?: 'skip' | 'include' | 'only' | undefined
                ignoreQueryParameters?: boolean | undefined
                regexOnFullURL?: boolean | undefined
                limit?: number | undefined
                crawlEntireDomain?: boolean | undefined
                allowExternalLinks?: boolean | undefined
                allowSubdomains?: boolean | undefined
                ignoreRobotsTxt?: boolean | undefined
                robotsUserAgent?: string | undefined
                delay?: number | undefined
                maxConcurrency?: number | undefined
                webhook?:
                  | {
                      url: string
                      headers?: { [x: string]: string } | undefined
                      metadata?: { [x: string]: unknown } | undefined
                      events?: ('completed' | 'page' | 'failed' | 'started')[] | undefined
                    }
                  | undefined
                scrapeOptions?: ScrapeOptions | undefined
                zeroDataRetention?: boolean | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              json: {
                url: string
                prompt?: string | undefined
                excludePaths?: string[] | undefined
                includePaths?: string[] | undefined
                maxDiscoveryDepth?: number | undefined
                sitemap?: 'skip' | 'include' | 'only' | undefined
                ignoreQueryParameters?: boolean | undefined
                regexOnFullURL?: boolean | undefined
                limit?: number | undefined
                crawlEntireDomain?: boolean | undefined
                allowExternalLinks?: boolean | undefined
                allowSubdomains?: boolean | undefined
                ignoreRobotsTxt?: boolean | undefined
                robotsUserAgent?: string | undefined
                delay?: number | undefined
                maxConcurrency?: number | undefined
                webhook?:
                  | {
                      url: string
                      headers?: { [x: string]: string } | undefined
                      metadata?: { [x: string]: unknown } | undefined
                      events?: ('completed' | 'page' | 'failed' | 'started')[] | undefined
                    }
                  | undefined
                scrapeOptions?: ScrapeOptions | undefined
                zeroDataRetention?: boolean | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                url: string
                prompt?: string | undefined
                excludePaths?: string[] | undefined
                includePaths?: string[] | undefined
                maxDiscoveryDepth?: number | undefined
                sitemap?: 'skip' | 'include' | 'only' | undefined
                ignoreQueryParameters?: boolean | undefined
                regexOnFullURL?: boolean | undefined
                limit?: number | undefined
                crawlEntireDomain?: boolean | undefined
                allowExternalLinks?: boolean | undefined
                allowSubdomains?: boolean | undefined
                ignoreRobotsTxt?: boolean | undefined
                robotsUserAgent?: string | undefined
                delay?: number | undefined
                maxConcurrency?: number | undefined
                webhook?:
                  | {
                      url: string
                      headers?: { [x: string]: string } | undefined
                      metadata?: { [x: string]: unknown } | undefined
                      events?: ('completed' | 'page' | 'failed' | 'started')[] | undefined
                    }
                  | undefined
                scrapeOptions?: ScrapeOptions | undefined
                zeroDataRetention?: boolean | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/crawl/params-preview': {
      $post:
        | {
            input: { json: { url: string; prompt: string } }
            output: {
              success?: boolean | undefined
              data?:
                | {
                    url?: string | undefined
                    includePaths?: string[] | undefined
                    excludePaths?: string[] | undefined
                    maxDepth?: number | undefined
                    maxDiscoveryDepth?: number | undefined
                    crawlEntireDomain?: boolean | undefined
                    allowExternalLinks?: boolean | undefined
                    allowSubdomains?: boolean | undefined
                    sitemap?: 'skip' | 'include' | undefined
                    ignoreQueryParameters?: boolean | undefined
                    ignoreRobotsTxt?: boolean | undefined
                    robotsUserAgent?: string | undefined
                    deduplicateSimilarURLs?: boolean | undefined
                    delay?: number | undefined
                    limit?: number | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { url: string; prompt: string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { url: string; prompt: string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { url: string; prompt: string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/map': {
      $post:
        | {
            input: {
              json: {
                url: string
                search?: string | undefined
                sitemap?: 'skip' | 'include' | 'only' | undefined
                includeSubdomains?: boolean | undefined
                ignoreQueryParameters?: boolean | undefined
                ignoreCache?: boolean | undefined
                limit?: number | undefined
                timeout?: number | undefined
                location?:
                  | { country?: string | undefined; languages?: string[] | undefined }
                  | undefined
                auditMetadata?: AuditMetadata | undefined
                threatProtection?: ThreatProtectionOverride | undefined
              }
            }
            output: MapResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                url: string
                search?: string | undefined
                sitemap?: 'skip' | 'include' | 'only' | undefined
                includeSubdomains?: boolean | undefined
                ignoreQueryParameters?: boolean | undefined
                ignoreCache?: boolean | undefined
                limit?: number | undefined
                timeout?: number | undefined
                location?:
                  | { country?: string | undefined; languages?: string[] | undefined }
                  | undefined
                auditMetadata?: AuditMetadata | undefined
                threatProtection?: ThreatProtectionOverride | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              json: {
                url: string
                search?: string | undefined
                sitemap?: 'skip' | 'include' | 'only' | undefined
                includeSubdomains?: boolean | undefined
                ignoreQueryParameters?: boolean | undefined
                ignoreCache?: boolean | undefined
                limit?: number | undefined
                timeout?: number | undefined
                location?:
                  | { country?: string | undefined; languages?: string[] | undefined }
                  | undefined
                auditMetadata?: AuditMetadata | undefined
                threatProtection?: ThreatProtectionOverride | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                url: string
                search?: string | undefined
                sitemap?: 'skip' | 'include' | 'only' | undefined
                includeSubdomains?: boolean | undefined
                ignoreQueryParameters?: boolean | undefined
                ignoreCache?: boolean | undefined
                limit?: number | undefined
                timeout?: number | undefined
                location?:
                  | { country?: string | undefined; languages?: string[] | undefined }
                  | undefined
                auditMetadata?: AuditMetadata | undefined
                threatProtection?: ThreatProtectionOverride | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/extract': {
      $post:
        | {
            input: {
              json: {
                urls: string[]
                prompt?: string | undefined
                schema?: { [x: string]: unknown } | undefined
                enableWebSearch?: boolean | undefined
                ignoreSitemap?: boolean | undefined
                includeSubdomains?: boolean | undefined
                showSources?: boolean | undefined
                scrapeOptions?: ScrapeOptions | undefined
                ignoreInvalidURLs?: boolean | undefined
                threatProtection?: ThreatProtectionOverride | undefined
              }
            }
            output: ExtractResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                urls: string[]
                prompt?: string | undefined
                schema?: { [x: string]: unknown } | undefined
                enableWebSearch?: boolean | undefined
                ignoreSitemap?: boolean | undefined
                includeSubdomains?: boolean | undefined
                showSources?: boolean | undefined
                scrapeOptions?: ScrapeOptions | undefined
                ignoreInvalidURLs?: boolean | undefined
                threatProtection?: ThreatProtectionOverride | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                urls: string[]
                prompt?: string | undefined
                schema?: { [x: string]: unknown } | undefined
                enableWebSearch?: boolean | undefined
                ignoreSitemap?: boolean | undefined
                includeSubdomains?: boolean | undefined
                showSources?: boolean | undefined
                scrapeOptions?: ScrapeOptions | undefined
                ignoreInvalidURLs?: boolean | undefined
                threatProtection?: ThreatProtectionOverride | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/extract/:id': {
      $get: {
        input: { param: { id: string } }
        output: ExtractStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/agent': {
      $get:
        | {
            input: { query: { before?: number | undefined } }
            output: {
              success?: boolean | undefined
              agents?:
                | {
                    id?: string | undefined
                    createdAt?: string | undefined
                    targetHint?: string | undefined
                    origin?: string | undefined
                    integration?: string | undefined
                    settings?:
                      | {
                          hidden?: boolean | undefined
                          starred?: boolean | undefined
                          label?: string | undefined
                        }
                      | undefined
                    status?: 'processing' | 'completed' | 'failed' | undefined
                    options?:
                      | {
                          urls?: string[] | undefined
                          prompt?: string | undefined
                          schema?: { [x: string]: unknown } | undefined
                          model?: 'spark-2' | 'spark-1-pro' | 'spark-1-mini' | undefined
                          effort?: 'low' | 'medium' | 'high' | undefined
                        }
                      | undefined
                  }[]
                | undefined
              next?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { before?: number | undefined } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              json: {
                urls?: string[] | undefined
                prompt: string
                schema?: { [x: string]: unknown } | undefined
                maxCredits?: number | undefined
                strictConstrainToURLs?: boolean | undefined
                model?: 'spark-2' | 'spark-1-mini' | 'spark-1-pro' | undefined
                effort?: 'low' | 'medium' | 'high' | undefined
                webhook?:
                  | {
                      url: string
                      headers?: { [x: string]: string } | undefined
                      metadata?: { [x: string]: string } | undefined
                      events?:
                        | ('started' | 'action' | 'completed' | 'failed' | 'cancelled')[]
                        | undefined
                    }
                  | undefined
                auditMetadata?: AuditMetadata | undefined
                threatProtection?: ThreatProtectionOverride | undefined
                threadId?: string | undefined
                mode?: 'extract' | 'chat' | undefined
                exchange?:
                  | {
                      enabled?: boolean | undefined
                      toolkits?: string[] | undefined
                      maxCalls?: number | undefined
                      requireApproval?: boolean | undefined
                      approve?:
                        | {
                            approvalId: string
                            callIds?: string[] | undefined
                            always?: boolean | undefined
                          }
                        | undefined
                      decline?: { approvalId: string } | undefined
                      onTermsRequired?: 'skip' | 'ask' | undefined
                    }
                  | undefined
              }
            }
            output: {
              success?: boolean | undefined
              id?: string | undefined
              threadId?: string | undefined
              threadTurn?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                urls?: string[] | undefined
                prompt: string
                schema?: { [x: string]: unknown } | undefined
                maxCredits?: number | undefined
                strictConstrainToURLs?: boolean | undefined
                model?: 'spark-2' | 'spark-1-mini' | 'spark-1-pro' | undefined
                effort?: 'low' | 'medium' | 'high' | undefined
                webhook?:
                  | {
                      url: string
                      headers?: { [x: string]: string } | undefined
                      metadata?: { [x: string]: string } | undefined
                      events?:
                        | ('started' | 'action' | 'completed' | 'failed' | 'cancelled')[]
                        | undefined
                    }
                  | undefined
                auditMetadata?: AuditMetadata | undefined
                threatProtection?: ThreatProtectionOverride | undefined
                threadId?: string | undefined
                mode?: 'extract' | 'chat' | undefined
                exchange?:
                  | {
                      enabled?: boolean | undefined
                      toolkits?: string[] | undefined
                      maxCalls?: number | undefined
                      requireApproval?: boolean | undefined
                      approve?:
                        | {
                            approvalId: string
                            callIds?: string[] | undefined
                            always?: boolean | undefined
                          }
                        | undefined
                      decline?: { approvalId: string } | undefined
                      onTermsRequired?: 'skip' | 'ask' | undefined
                    }
                  | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                urls?: string[] | undefined
                prompt: string
                schema?: { [x: string]: unknown } | undefined
                maxCredits?: number | undefined
                strictConstrainToURLs?: boolean | undefined
                model?: 'spark-2' | 'spark-1-mini' | 'spark-1-pro' | undefined
                effort?: 'low' | 'medium' | 'high' | undefined
                webhook?:
                  | {
                      url: string
                      headers?: { [x: string]: string } | undefined
                      metadata?: { [x: string]: string } | undefined
                      events?:
                        | ('started' | 'action' | 'completed' | 'failed' | 'cancelled')[]
                        | undefined
                    }
                  | undefined
                auditMetadata?: AuditMetadata | undefined
                threatProtection?: ThreatProtectionOverride | undefined
                threadId?: string | undefined
                mode?: 'extract' | 'chat' | undefined
                exchange?:
                  | {
                      enabled?: boolean | undefined
                      toolkits?: string[] | undefined
                      maxCalls?: number | undefined
                      requireApproval?: boolean | undefined
                      approve?:
                        | {
                            approvalId: string
                            callIds?: string[] | undefined
                            always?: boolean | undefined
                          }
                        | undefined
                      decline?: { approvalId: string } | undefined
                      onTermsRequired?: 'skip' | 'ask' | undefined
                    }
                  | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              json: {
                urls?: string[] | undefined
                prompt: string
                schema?: { [x: string]: unknown } | undefined
                maxCredits?: number | undefined
                strictConstrainToURLs?: boolean | undefined
                model?: 'spark-2' | 'spark-1-mini' | 'spark-1-pro' | undefined
                effort?: 'low' | 'medium' | 'high' | undefined
                webhook?:
                  | {
                      url: string
                      headers?: { [x: string]: string } | undefined
                      metadata?: { [x: string]: string } | undefined
                      events?:
                        | ('started' | 'action' | 'completed' | 'failed' | 'cancelled')[]
                        | undefined
                    }
                  | undefined
                auditMetadata?: AuditMetadata | undefined
                threatProtection?: ThreatProtectionOverride | undefined
                threadId?: string | undefined
                mode?: 'extract' | 'chat' | undefined
                exchange?:
                  | {
                      enabled?: boolean | undefined
                      toolkits?: string[] | undefined
                      maxCalls?: number | undefined
                      requireApproval?: boolean | undefined
                      approve?:
                        | {
                            approvalId: string
                            callIds?: string[] | undefined
                            always?: boolean | undefined
                          }
                        | undefined
                      decline?: { approvalId: string } | undefined
                      onTermsRequired?: 'skip' | 'ask' | undefined
                    }
                  | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                urls?: string[] | undefined
                prompt: string
                schema?: { [x: string]: unknown } | undefined
                maxCredits?: number | undefined
                strictConstrainToURLs?: boolean | undefined
                model?: 'spark-2' | 'spark-1-mini' | 'spark-1-pro' | undefined
                effort?: 'low' | 'medium' | 'high' | undefined
                webhook?:
                  | {
                      url: string
                      headers?: { [x: string]: string } | undefined
                      metadata?: { [x: string]: string } | undefined
                      events?:
                        | ('started' | 'action' | 'completed' | 'failed' | 'cancelled')[]
                        | undefined
                    }
                  | undefined
                auditMetadata?: AuditMetadata | undefined
                threatProtection?: ThreatProtectionOverride | undefined
                threadId?: string | undefined
                mode?: 'extract' | 'chat' | undefined
                exchange?:
                  | {
                      enabled?: boolean | undefined
                      toolkits?: string[] | undefined
                      maxCalls?: number | undefined
                      requireApproval?: boolean | undefined
                      approve?:
                        | {
                            approvalId: string
                            callIds?: string[] | undefined
                            always?: boolean | undefined
                          }
                        | undefined
                      decline?: { approvalId: string } | undefined
                      onTermsRequired?: 'skip' | 'ask' | undefined
                    }
                  | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                urls?: string[] | undefined
                prompt: string
                schema?: { [x: string]: unknown } | undefined
                maxCredits?: number | undefined
                strictConstrainToURLs?: boolean | undefined
                model?: 'spark-2' | 'spark-1-mini' | 'spark-1-pro' | undefined
                effort?: 'low' | 'medium' | 'high' | undefined
                webhook?:
                  | {
                      url: string
                      headers?: { [x: string]: string } | undefined
                      metadata?: { [x: string]: string } | undefined
                      events?:
                        | ('started' | 'action' | 'completed' | 'failed' | 'cancelled')[]
                        | undefined
                    }
                  | undefined
                auditMetadata?: AuditMetadata | undefined
                threatProtection?: ThreatProtectionOverride | undefined
                threadId?: string | undefined
                mode?: 'extract' | 'chat' | undefined
                exchange?:
                  | {
                      enabled?: boolean | undefined
                      toolkits?: string[] | undefined
                      maxCalls?: number | undefined
                      requireApproval?: boolean | undefined
                      approve?:
                        | {
                            approvalId: string
                            callIds?: string[] | undefined
                            always?: boolean | undefined
                          }
                        | undefined
                      decline?: { approvalId: string } | undefined
                      onTermsRequired?: 'skip' | 'ask' | undefined
                    }
                  | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/agent/:jobId': {
      $get:
        | {
            input: { param: { jobId: string } }
            output: {
              success?: boolean | undefined
              status?: 'processing' | 'completed' | 'failed' | undefined
              data?: { [x: string]: unknown } | undefined
              partial?: { [x: string]: unknown } | undefined
              partialSchemaValid?: boolean | undefined
              stopReason?: 'credit_limit_reached' | undefined
              message?: string | undefined
              model?: 'spark-2' | 'spark-1-pro' | 'spark-1-mini' | undefined
              effort?: 'low' | 'medium' | 'high' | undefined
              error?: string | undefined
              expiresAt?: string | undefined
              creditsUsed?: number | undefined
              threadId?: string | undefined
              threadTurn?: number | undefined
              mode?: 'extract' | 'chat' | undefined
              suggestions?:
                | { label?: string | undefined; prompt?: string | undefined }[]
                | undefined
              pendingApproval?: AgentPendingApproval | undefined
              exchange?: AgentExchangeSummary | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { jobId: string } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { jobId: string } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { jobId: string } }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { jobId: string } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { jobId: string } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { jobId: string } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/agent/:jobId/trace': {
      $get:
        | {
            input: { param: { jobId: string } } & {
              query: { liveView?: 'true' | 'false' | undefined }
            }
            output: {
              success?: boolean | undefined
              id?: string | undefined
              events?: AgentTraceEvent[] | undefined
              creditsUsed?: number | undefined
              activeBrowserSessions?:
                | {
                    id?: string | undefined
                    liveViewUrl?: string | undefined
                    viewport?:
                      | { width?: number | undefined; height?: number | undefined }
                      | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { jobId: string } } & {
              query: { liveView?: 'true' | 'false' | undefined }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { jobId: string } } & {
              query: { liveView?: 'true' | 'false' | undefined }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/agent/:jobId/snapshots/:snapshotId': {
      $get:
        | {
            input: { param: { jobId: string; snapshotId: string } }
            output: {
              success?: boolean | undefined
              id?: string | undefined
              snapshotId?: string | undefined
              snapshot?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { jobId: string; snapshotId: string } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { jobId: string; snapshotId: string } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/crawl/active': {
      $get:
        | {
            input: {}
            output: {
              success: boolean
              crawls?:
                | {
                    id: string
                    teamId: string
                    url: string
                    options: { scrapeOptions?: ScrapeOptions | undefined }
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {}
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {}
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/team/credit-usage': {
      $get:
        | {
            input: {}
            output: {
              success?: boolean | undefined
              data?:
                | {
                    remainingCredits?: number | undefined
                    planCredits?: number | undefined
                    billingPeriodStart?: (string | null) | undefined
                    billingPeriodEnd?: (string | null) | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {}
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/team/credit-usage/historical': {
      $get:
        | {
            input: { query: { byApiKey?: boolean | undefined } }
            output: {
              success?: boolean | undefined
              periods?:
                | {
                    startDate?: string | undefined
                    endDate?: string | undefined
                    apiKey?: (string | null) | undefined
                    totalCredits?: number | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { byApiKey?: boolean | undefined } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/team/token-usage': {
      $get:
        | {
            input: {}
            output: {
              success?: boolean | undefined
              data?:
                | {
                    remainingTokens?: number | undefined
                    planTokens?: number | undefined
                    billingPeriodStart?: (string | null) | undefined
                    billingPeriodEnd?: (string | null) | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {}
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/team/token-usage/historical': {
      $get:
        | {
            input: { query: { byApiKey?: boolean | undefined } }
            output: {
              success?: boolean | undefined
              periods?:
                | {
                    startDate?: string | undefined
                    endDate?: string | undefined
                    apiKey?: (string | null) | undefined
                    totalTokens?: number | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { byApiKey?: boolean | undefined } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/team/queue-status': {
      $get: {
        input: {}
        output: {
          success?: boolean | undefined
          jobsInQueue?: number | undefined
          activeJobsInQueue?: number | undefined
          waitingJobsInQueue?: number | undefined
          maxConcurrency?: number | undefined
          mostRecentSuccess?: (string | null) | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/team/activity': {
      $get: {
        input: {
          query: {
            endpoint?:
              | 'scrape'
              | 'crawl'
              | 'batch_scrape'
              | 'search'
              | 'extract'
              | 'llmstxt'
              | 'deep_research'
              | 'map'
              | 'agent'
              | 'browser'
              | 'interact'
              | undefined
            limit?: number | undefined
            cursor?: string | undefined
          }
        }
        output: {
          success?: boolean | undefined
          data?:
            | {
                id?: string | undefined
                endpoint?:
                  | 'scrape'
                  | 'crawl'
                  | 'batch_scrape'
                  | 'search'
                  | 'extract'
                  | 'llmstxt'
                  | 'deep_research'
                  | 'map'
                  | 'agent'
                  | 'browser'
                  | 'interact'
                  | undefined
                api_version?: string | undefined
                created_at?: string | undefined
                target?: (string | null) | undefined
              }[]
            | undefined
          cursor?: (string | null) | undefined
          has_more?: boolean | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/search': {
      $post:
        | {
            input: {
              json: {
                query: string
                limit?: number | undefined
                sources?:
                  | (
                      | { type: 'web'; tbs?: string | undefined; location?: string | undefined }
                      | { type: 'images' }
                      | { type: 'news' }
                      | { type: 'alexandria' }
                    )[]
                  | undefined
                domainTools?: boolean | undefined
                toolDetail?: 'compact' | 'summary' | 'full' | undefined
                categories?:
                  | (
                      | { type: 'developer' }
                      | { type: 'gov' }
                      | { type: 'research' }
                      | { type: 'pdf' }
                    )[]
                  | undefined
                includeDomains?: string[] | undefined
                excludeDomains?: string[] | undefined
                tbs?: string | undefined
                location?: string | undefined
                country?: string | undefined
                safe?: boolean | undefined
                timeout?: number | undefined
                ignoreInvalidURLs?: boolean | undefined
                highlights?: boolean | undefined
                enterprise?: ('anon' | 'zdr')[] | undefined
                scrapeOptions?:
                  | {
                      formats?: Formats | undefined
                      onlyMainContent?: boolean | undefined
                      onlyCleanContent?: boolean | undefined
                      includeTags?: string[] | undefined
                      excludeTags?: string[] | undefined
                      maxAge?: number | undefined
                      minAge?: number | undefined
                      headers?: { [x: string]: unknown } | undefined
                      waitFor?: number | undefined
                      mobile?: boolean | undefined
                      skipTlsVerification?: boolean | undefined
                      timeout?: number | undefined
                      parsers?:
                        | (
                            | 'pdf'
                            | 'image'
                            | {
                                type: 'pdf'
                                mode?: 'fast' | 'auto' | 'ocr' | undefined
                                maxPages?: number | undefined
                                pages?: boolean | undefined
                                blocks?: boolean | undefined
                                pageMarkers?: boolean | undefined
                              }
                            | { type: 'image' }
                          )[]
                        | undefined
                      actions?:
                        | (
                            | { type: 'wait'; milliseconds: number }
                            | { type: 'wait'; selector: string }
                            | {
                                type: 'screenshot'
                                fullPage?: boolean | undefined
                                quality?: number | undefined
                                viewport?: { width: number; height: number } | undefined
                              }
                            | { type: 'click'; selector: string; all?: boolean | undefined }
                            | { type: 'write'; text: string }
                            | { type: 'press'; key: string }
                            | {
                                type: 'scroll'
                                direction?: 'up' | 'down' | undefined
                                selector?: string | undefined
                              }
                            | { type: 'scrape' }
                            | { type: 'executeJavascript'; script: string }
                            | {
                                type: 'pdf'
                                format?:
                                  | 'A0'
                                  | 'A1'
                                  | 'A2'
                                  | 'A3'
                                  | 'A4'
                                  | 'A5'
                                  | 'A6'
                                  | 'Letter'
                                  | 'Legal'
                                  | 'Tabloid'
                                  | 'Ledger'
                                  | undefined
                                landscape?: boolean | undefined
                                scale?: number | undefined
                              }
                          )[]
                        | undefined
                      location?:
                        | { country?: string | undefined; languages?: string[] | undefined }
                        | undefined
                      removeBase64Images?: boolean | undefined
                      blockAds?: boolean | undefined
                      proxy?: 'basic' | 'enhanced' | 'auto' | undefined
                      storeInCache?: boolean | undefined
                      lockdown?: boolean | undefined
                      checkPromptInjection?: boolean | undefined
                      redactPII?: boolean | RedactPIIOptions | undefined
                      profile?: { name: string; saveChanges?: boolean | undefined } | undefined
                      threatProtection?: ThreatProtectionOverride | undefined
                      auditMetadata?: AuditMetadata | undefined
                    }
                  | undefined
                threatProtection?: ThreatProtectionOverride | undefined
              }
            }
            output: {
              success?: boolean | undefined
              data?:
                | {
                    web?:
                      | {
                          title?: string | undefined
                          description?: string | undefined
                          url?: string | undefined
                          markdown?: (string | null) | undefined
                          html?: (string | null) | undefined
                          rawHtml?: (string | null) | undefined
                          links?: string[] | undefined
                          screenshot?: (string | null) | undefined
                          audio?: (string | null) | undefined
                          video?: (string | null) | undefined
                          metadata?:
                            | {
                                title?: string | undefined
                                description?: string | undefined
                                sourceURL?: string | undefined
                                url?: string | undefined
                                statusCode?: number | undefined
                                numPages?: number | undefined
                                totalPages?: number | undefined
                                error?: (string | null) | undefined
                              }
                            | undefined
                        }[]
                      | undefined
                    images?:
                      | {
                          title?: string | undefined
                          imageUrl?: string | undefined
                          imageWidth?: number | undefined
                          imageHeight?: number | undefined
                          url?: string | undefined
                          position?: number | undefined
                        }[]
                      | undefined
                    news?:
                      | {
                          title?: string | undefined
                          snippet?: string | undefined
                          url?: string | undefined
                          date?: string | undefined
                          imageUrl?: string | undefined
                          position?: number | undefined
                          markdown?: (string | null) | undefined
                          html?: (string | null) | undefined
                          rawHtml?: (string | null) | undefined
                          links?: string[] | undefined
                          screenshot?: (string | null) | undefined
                          audio?: (string | null) | undefined
                          video?: (string | null) | undefined
                          metadata?:
                            | {
                                title?: string | undefined
                                description?: string | undefined
                                sourceURL?: string | undefined
                                url?: string | undefined
                                statusCode?: number | undefined
                                numPages?: number | undefined
                                totalPages?: number | undefined
                                error?: (string | null) | undefined
                              }
                            | undefined
                        }[]
                      | undefined
                    tools?: DiscoveredTool[] | undefined
                  }
                | undefined
              warning?: (string | null) | undefined
              id?: string | undefined
              creditsUsed?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                query: string
                limit?: number | undefined
                sources?:
                  | (
                      | { type: 'web'; tbs?: string | undefined; location?: string | undefined }
                      | { type: 'images' }
                      | { type: 'news' }
                      | { type: 'alexandria' }
                    )[]
                  | undefined
                domainTools?: boolean | undefined
                toolDetail?: 'compact' | 'summary' | 'full' | undefined
                categories?:
                  | (
                      | { type: 'developer' }
                      | { type: 'gov' }
                      | { type: 'research' }
                      | { type: 'pdf' }
                    )[]
                  | undefined
                includeDomains?: string[] | undefined
                excludeDomains?: string[] | undefined
                tbs?: string | undefined
                location?: string | undefined
                country?: string | undefined
                safe?: boolean | undefined
                timeout?: number | undefined
                ignoreInvalidURLs?: boolean | undefined
                highlights?: boolean | undefined
                enterprise?: ('anon' | 'zdr')[] | undefined
                scrapeOptions?:
                  | {
                      formats?: Formats | undefined
                      onlyMainContent?: boolean | undefined
                      onlyCleanContent?: boolean | undefined
                      includeTags?: string[] | undefined
                      excludeTags?: string[] | undefined
                      maxAge?: number | undefined
                      minAge?: number | undefined
                      headers?: { [x: string]: unknown } | undefined
                      waitFor?: number | undefined
                      mobile?: boolean | undefined
                      skipTlsVerification?: boolean | undefined
                      timeout?: number | undefined
                      parsers?:
                        | (
                            | 'pdf'
                            | 'image'
                            | {
                                type: 'pdf'
                                mode?: 'fast' | 'auto' | 'ocr' | undefined
                                maxPages?: number | undefined
                                pages?: boolean | undefined
                                blocks?: boolean | undefined
                                pageMarkers?: boolean | undefined
                              }
                            | { type: 'image' }
                          )[]
                        | undefined
                      actions?:
                        | (
                            | { type: 'wait'; milliseconds: number }
                            | { type: 'wait'; selector: string }
                            | {
                                type: 'screenshot'
                                fullPage?: boolean | undefined
                                quality?: number | undefined
                                viewport?: { width: number; height: number } | undefined
                              }
                            | { type: 'click'; selector: string; all?: boolean | undefined }
                            | { type: 'write'; text: string }
                            | { type: 'press'; key: string }
                            | {
                                type: 'scroll'
                                direction?: 'up' | 'down' | undefined
                                selector?: string | undefined
                              }
                            | { type: 'scrape' }
                            | { type: 'executeJavascript'; script: string }
                            | {
                                type: 'pdf'
                                format?:
                                  | 'A0'
                                  | 'A1'
                                  | 'A2'
                                  | 'A3'
                                  | 'A4'
                                  | 'A5'
                                  | 'A6'
                                  | 'Letter'
                                  | 'Legal'
                                  | 'Tabloid'
                                  | 'Ledger'
                                  | undefined
                                landscape?: boolean | undefined
                                scale?: number | undefined
                              }
                          )[]
                        | undefined
                      location?:
                        | { country?: string | undefined; languages?: string[] | undefined }
                        | undefined
                      removeBase64Images?: boolean | undefined
                      blockAds?: boolean | undefined
                      proxy?: 'basic' | 'enhanced' | 'auto' | undefined
                      storeInCache?: boolean | undefined
                      lockdown?: boolean | undefined
                      checkPromptInjection?: boolean | undefined
                      redactPII?: boolean | RedactPIIOptions | undefined
                      profile?: { name: string; saveChanges?: boolean | undefined } | undefined
                      threatProtection?: ThreatProtectionOverride | undefined
                      auditMetadata?: AuditMetadata | undefined
                    }
                  | undefined
                threatProtection?: ThreatProtectionOverride | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 408
          }
        | {
            input: {
              json: {
                query: string
                limit?: number | undefined
                sources?:
                  | (
                      | { type: 'web'; tbs?: string | undefined; location?: string | undefined }
                      | { type: 'images' }
                      | { type: 'news' }
                      | { type: 'alexandria' }
                    )[]
                  | undefined
                domainTools?: boolean | undefined
                toolDetail?: 'compact' | 'summary' | 'full' | undefined
                categories?:
                  | (
                      | { type: 'developer' }
                      | { type: 'gov' }
                      | { type: 'research' }
                      | { type: 'pdf' }
                    )[]
                  | undefined
                includeDomains?: string[] | undefined
                excludeDomains?: string[] | undefined
                tbs?: string | undefined
                location?: string | undefined
                country?: string | undefined
                safe?: boolean | undefined
                timeout?: number | undefined
                ignoreInvalidURLs?: boolean | undefined
                highlights?: boolean | undefined
                enterprise?: ('anon' | 'zdr')[] | undefined
                scrapeOptions?:
                  | {
                      formats?: Formats | undefined
                      onlyMainContent?: boolean | undefined
                      onlyCleanContent?: boolean | undefined
                      includeTags?: string[] | undefined
                      excludeTags?: string[] | undefined
                      maxAge?: number | undefined
                      minAge?: number | undefined
                      headers?: { [x: string]: unknown } | undefined
                      waitFor?: number | undefined
                      mobile?: boolean | undefined
                      skipTlsVerification?: boolean | undefined
                      timeout?: number | undefined
                      parsers?:
                        | (
                            | 'pdf'
                            | 'image'
                            | {
                                type: 'pdf'
                                mode?: 'fast' | 'auto' | 'ocr' | undefined
                                maxPages?: number | undefined
                                pages?: boolean | undefined
                                blocks?: boolean | undefined
                                pageMarkers?: boolean | undefined
                              }
                            | { type: 'image' }
                          )[]
                        | undefined
                      actions?:
                        | (
                            | { type: 'wait'; milliseconds: number }
                            | { type: 'wait'; selector: string }
                            | {
                                type: 'screenshot'
                                fullPage?: boolean | undefined
                                quality?: number | undefined
                                viewport?: { width: number; height: number } | undefined
                              }
                            | { type: 'click'; selector: string; all?: boolean | undefined }
                            | { type: 'write'; text: string }
                            | { type: 'press'; key: string }
                            | {
                                type: 'scroll'
                                direction?: 'up' | 'down' | undefined
                                selector?: string | undefined
                              }
                            | { type: 'scrape' }
                            | { type: 'executeJavascript'; script: string }
                            | {
                                type: 'pdf'
                                format?:
                                  | 'A0'
                                  | 'A1'
                                  | 'A2'
                                  | 'A3'
                                  | 'A4'
                                  | 'A5'
                                  | 'A6'
                                  | 'Letter'
                                  | 'Legal'
                                  | 'Tabloid'
                                  | 'Ledger'
                                  | undefined
                                landscape?: boolean | undefined
                                scale?: number | undefined
                              }
                          )[]
                        | undefined
                      location?:
                        | { country?: string | undefined; languages?: string[] | undefined }
                        | undefined
                      removeBase64Images?: boolean | undefined
                      blockAds?: boolean | undefined
                      proxy?: 'basic' | 'enhanced' | 'auto' | undefined
                      storeInCache?: boolean | undefined
                      lockdown?: boolean | undefined
                      checkPromptInjection?: boolean | undefined
                      redactPII?: boolean | RedactPIIOptions | undefined
                      profile?: { name: string; saveChanges?: boolean | undefined } | undefined
                      threatProtection?: ThreatProtectionOverride | undefined
                      auditMetadata?: AuditMetadata | undefined
                    }
                  | undefined
                threatProtection?: ThreatProtectionOverride | undefined
              }
            }
            output: {
              success?: boolean | undefined
              code?: string | undefined
              error?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/interact': {
      $post:
        | {
            input: {
              json: {
                ttl?: number | undefined
                activityTtl?: number | undefined
                streamWebView?: boolean | undefined
                blockAds?: boolean | undefined
                profile?: { name: string; saveChanges?: boolean | undefined } | undefined
                location?: { country: string } | undefined
              }
            }
            output: {
              success?: boolean | undefined
              id?: string | undefined
              cdpUrl?: string | undefined
              liveViewUrl?: string | undefined
              interactiveLiveViewUrl?: string | undefined
              expiresAt?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                ttl?: number | undefined
                activityTtl?: number | undefined
                streamWebView?: boolean | undefined
                blockAds?: boolean | undefined
                profile?: { name: string; saveChanges?: boolean | undefined } | undefined
                location?: { country: string } | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 402
          }
      $get:
        | {
            input: { query: { status?: 'active' | 'destroyed' | undefined } }
            output: {
              success?: boolean | undefined
              sessions?:
                | {
                    id?: string | undefined
                    status?: 'active' | 'destroyed' | undefined
                    cdpUrl?: string | undefined
                    liveViewUrl?: string | undefined
                    interactiveLiveViewUrl?: string | undefined
                    streamWebView?: boolean | undefined
                    createdAt?: string | undefined
                    lastActivity?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { status?: 'active' | 'destroyed' | undefined } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 402
          }
    }
  } & {
    '/interact/:sessionId/execute': {
      $post:
        | {
            input: { param: { sessionId: string } } & {
              json: {
                code: string
                language?: 'python' | 'node' | 'bash' | undefined
                timeout?: number | undefined
              }
            }
            output: {
              success?: boolean | undefined
              stdout?: (string | null) | undefined
              result?: (string | null) | undefined
              stderr?: (string | null) | undefined
              exitCode?: (number | null) | undefined
              killed?: boolean | undefined
              error?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sessionId: string } } & {
              json: {
                code: string
                language?: 'python' | 'node' | 'bash' | undefined
                timeout?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 402
          }
    }
  } & {
    '/interact/:sessionId': {
      $delete:
        | {
            input: { param: { sessionId: string } }
            output: {
              success?: boolean | undefined
              sessionDurationMs?: number | undefined
              creditsBilled?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sessionId: string } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 402
          }
    }
  } & {
    '/scrape/:jobId': {
      $get:
        | {
            input: { param: { jobId: string } }
            output: ScrapeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { jobId: string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { jobId: string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { jobId: string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/search/:jobId/feedback': {
      $post:
        | {
            input: { param: { jobId: string } } & { json: SearchFeedbackRequest }
            output: FeedbackResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { jobId: string } } & { json: SearchFeedbackRequest }
            output: FeedbackErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { jobId: string } } & { json: SearchFeedbackRequest }
            output: FeedbackErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { jobId: string } } & { json: SearchFeedbackRequest }
            output: FeedbackErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { jobId: string } } & { json: SearchFeedbackRequest }
            output: FeedbackErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { jobId: string } } & { json: SearchFeedbackRequest }
            output: FeedbackErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/support/ask': {
      $post:
        | {
            input: { json: SupportAskRequest }
            output: SupportAskResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SupportAskRequest }
            output: SupportProxyErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SupportAskRequest }
            output: SupportProxyErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: SupportAskRequest }
            output: SupportProxyErrorResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { json: SupportAskRequest }
            output: SupportProxyErrorResponse
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/search/research/papers': {
      $get:
        | {
            input: {
              query: {
                query: string
                k?: number | undefined
                authors?: string | undefined
                categories?: string | undefined
                from?: string | undefined
                to?: string | undefined
              }
            }
            output: ResearchSearchPapersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query: string
                k?: number | undefined
                authors?: string | undefined
                categories?: string | undefined
                from?: string | undefined
                to?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                query: string
                k?: number | undefined
                authors?: string | undefined
                categories?: string | undefined
                from?: string | undefined
                to?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                query: string
                k?: number | undefined
                authors?: string | undefined
                categories?: string | undefined
                from?: string | undefined
                to?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              query: {
                query: string
                k?: number | undefined
                authors?: string | undefined
                categories?: string | undefined
                from?: string | undefined
                to?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/search/research/papers/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { query?: string | undefined; k?: number | undefined }
            }
            output: ResearchPaperMetadataResponse | ResearchReadPaperResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { query?: string | undefined; k?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { query?: string | undefined; k?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { query?: string | undefined; k?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { query?: string | undefined; k?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { id: string } } & {
              query: { query?: string | undefined; k?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/search/research/papers/:id/similar': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                intent: string
                mode?: 'similar' | 'citers' | 'references' | undefined
                k?: number | undefined
                rerank?: boolean | undefined
                anchor?: string | undefined
              }
            }
            output: ResearchSimilarPapersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                intent: string
                mode?: 'similar' | 'citers' | 'references' | undefined
                k?: number | undefined
                rerank?: boolean | undefined
                anchor?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                intent: string
                mode?: 'similar' | 'citers' | 'references' | undefined
                k?: number | undefined
                rerank?: boolean | undefined
                anchor?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                intent: string
                mode?: 'similar' | 'citers' | 'references' | undefined
                k?: number | undefined
                rerank?: boolean | undefined
                anchor?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { id: string } } & {
              query: {
                intent: string
                mode?: 'similar' | 'citers' | 'references' | undefined
                k?: number | undefined
                rerank?: boolean | undefined
                anchor?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/search/developer': {
      $get:
        | {
            input: {
              query: {
                query: string
                k?: number | undefined
                types?: ('doc' | 'issue' | 'pull_request' | 'readme')[] | undefined
                repos?: string[] | undefined
                sources?: string[] | undefined
                skills?: 'only' | undefined
                passages?: number | undefined
                language?: string | undefined
                topic?: string | undefined
                license?: string | undefined
                min_stars?: number | undefined
                max_stars?: number | undefined
                archived?: boolean | undefined
                fork?: boolean | undefined
              }
            }
            output: DeveloperSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query: string
                k?: number | undefined
                types?: ('doc' | 'issue' | 'pull_request' | 'readme')[] | undefined
                repos?: string[] | undefined
                sources?: string[] | undefined
                skills?: 'only' | undefined
                passages?: number | undefined
                language?: string | undefined
                topic?: string | undefined
                license?: string | undefined
                min_stars?: number | undefined
                max_stars?: number | undefined
                archived?: boolean | undefined
                fork?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                query: string
                k?: number | undefined
                types?: ('doc' | 'issue' | 'pull_request' | 'readme')[] | undefined
                repos?: string[] | undefined
                sources?: string[] | undefined
                skills?: 'only' | undefined
                passages?: number | undefined
                language?: string | undefined
                topic?: string | undefined
                license?: string | undefined
                min_stars?: number | undefined
                max_stars?: number | undefined
                archived?: boolean | undefined
                fork?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                query: string
                k?: number | undefined
                types?: ('doc' | 'issue' | 'pull_request' | 'readme')[] | undefined
                repos?: string[] | undefined
                sources?: string[] | undefined
                skills?: 'only' | undefined
                passages?: number | undefined
                language?: string | undefined
                topic?: string | undefined
                license?: string | undefined
                min_stars?: number | undefined
                max_stars?: number | undefined
                archived?: boolean | undefined
                fork?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              query: {
                query: string
                k?: number | undefined
                types?: ('doc' | 'issue' | 'pull_request' | 'readme')[] | undefined
                repos?: string[] | undefined
                sources?: string[] | undefined
                skills?: 'only' | undefined
                passages?: number | undefined
                language?: string | undefined
                topic?: string | undefined
                license?: string | undefined
                min_stars?: number | undefined
                max_stars?: number | undefined
                archived?: boolean | undefined
                fork?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: {
              json: {
                query: string
                k?: number | undefined
                types?: ('doc' | 'issue' | 'pull_request' | 'readme')[] | undefined
                repos?: string[] | undefined
                sources?: string[] | undefined
                skills?: 'only' | undefined
                passages?: number | undefined
                language?: string | undefined
                topic?: string | undefined
                license?: string | undefined
                min_stars?: number | undefined
                max_stars?: number | undefined
                archived?: boolean | undefined
                fork?: boolean | undefined
              }
            }
            output: DeveloperSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                query: string
                k?: number | undefined
                types?: ('doc' | 'issue' | 'pull_request' | 'readme')[] | undefined
                repos?: string[] | undefined
                sources?: string[] | undefined
                skills?: 'only' | undefined
                passages?: number | undefined
                language?: string | undefined
                topic?: string | undefined
                license?: string | undefined
                min_stars?: number | undefined
                max_stars?: number | undefined
                archived?: boolean | undefined
                fork?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              json: {
                query: string
                k?: number | undefined
                types?: ('doc' | 'issue' | 'pull_request' | 'readme')[] | undefined
                repos?: string[] | undefined
                sources?: string[] | undefined
                skills?: 'only' | undefined
                passages?: number | undefined
                language?: string | undefined
                topic?: string | undefined
                license?: string | undefined
                min_stars?: number | undefined
                max_stars?: number | undefined
                archived?: boolean | undefined
                fork?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              json: {
                query: string
                k?: number | undefined
                types?: ('doc' | 'issue' | 'pull_request' | 'readme')[] | undefined
                repos?: string[] | undefined
                sources?: string[] | undefined
                skills?: 'only' | undefined
                passages?: number | undefined
                language?: string | undefined
                topic?: string | undefined
                license?: string | undefined
                min_stars?: number | undefined
                max_stars?: number | undefined
                archived?: boolean | undefined
                fork?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              json: {
                query: string
                k?: number | undefined
                types?: ('doc' | 'issue' | 'pull_request' | 'readme')[] | undefined
                repos?: string[] | undefined
                sources?: string[] | undefined
                skills?: 'only' | undefined
                passages?: number | undefined
                language?: string | undefined
                topic?: string | undefined
                license?: string | undefined
                min_stars?: number | undefined
                max_stars?: number | undefined
                archived?: boolean | undefined
                fork?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/search/gov': {
      $get:
        | {
            input: {
              query: {
                query: string
                k?: number | undefined
                jurisdiction?: string | undefined
                court?: string | undefined
                courtType?:
                  | 'federal-supreme'
                  | 'federal-appellate'
                  | 'federal-district'
                  | 'federal-bankruptcy'
                  | 'federal-special'
                  | 'military'
                  | 'state-supreme'
                  | 'state-appellate'
                  | 'state-trial'
                  | 'state-special'
                  | 'state-attorney-general'
                  | undefined
                cites?: string | undefined
                domain?: string | undefined
              }
            }
            output: GovSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query: string
                k?: number | undefined
                jurisdiction?: string | undefined
                court?: string | undefined
                courtType?:
                  | 'federal-supreme'
                  | 'federal-appellate'
                  | 'federal-district'
                  | 'federal-bankruptcy'
                  | 'federal-special'
                  | 'military'
                  | 'state-supreme'
                  | 'state-appellate'
                  | 'state-trial'
                  | 'state-special'
                  | 'state-attorney-general'
                  | undefined
                cites?: string | undefined
                domain?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                query: string
                k?: number | undefined
                jurisdiction?: string | undefined
                court?: string | undefined
                courtType?:
                  | 'federal-supreme'
                  | 'federal-appellate'
                  | 'federal-district'
                  | 'federal-bankruptcy'
                  | 'federal-special'
                  | 'military'
                  | 'state-supreme'
                  | 'state-appellate'
                  | 'state-trial'
                  | 'state-special'
                  | 'state-attorney-general'
                  | undefined
                cites?: string | undefined
                domain?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                query: string
                k?: number | undefined
                jurisdiction?: string | undefined
                court?: string | undefined
                courtType?:
                  | 'federal-supreme'
                  | 'federal-appellate'
                  | 'federal-district'
                  | 'federal-bankruptcy'
                  | 'federal-special'
                  | 'military'
                  | 'state-supreme'
                  | 'state-appellate'
                  | 'state-trial'
                  | 'state-special'
                  | 'state-attorney-general'
                  | undefined
                cites?: string | undefined
                domain?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              query: {
                query: string
                k?: number | undefined
                jurisdiction?: string | undefined
                court?: string | undefined
                courtType?:
                  | 'federal-supreme'
                  | 'federal-appellate'
                  | 'federal-district'
                  | 'federal-bankruptcy'
                  | 'federal-special'
                  | 'military'
                  | 'state-supreme'
                  | 'state-appellate'
                  | 'state-trial'
                  | 'state-special'
                  | 'state-attorney-general'
                  | undefined
                cites?: string | undefined
                domain?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                query: string
                k?: number | undefined
                jurisdiction?: string | undefined
                court?: string | undefined
                courtType?:
                  | 'federal-supreme'
                  | 'federal-appellate'
                  | 'federal-district'
                  | 'federal-bankruptcy'
                  | 'federal-special'
                  | 'military'
                  | 'state-supreme'
                  | 'state-appellate'
                  | 'state-trial'
                  | 'state-special'
                  | 'state-attorney-general'
                  | undefined
                cites?: string | undefined
                domain?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 504
          }
      $post:
        | {
            input: {
              json: {
                query: string
                k?: number | undefined
                jurisdiction?: string | undefined
                court?: string | undefined
                courtType?:
                  | 'federal-supreme'
                  | 'federal-appellate'
                  | 'federal-district'
                  | 'federal-bankruptcy'
                  | 'federal-special'
                  | 'military'
                  | 'state-supreme'
                  | 'state-appellate'
                  | 'state-trial'
                  | 'state-special'
                  | 'state-attorney-general'
                  | undefined
                cites?: string | undefined
                domain?: string | undefined
              }
            }
            output: GovSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                query: string
                k?: number | undefined
                jurisdiction?: string | undefined
                court?: string | undefined
                courtType?:
                  | 'federal-supreme'
                  | 'federal-appellate'
                  | 'federal-district'
                  | 'federal-bankruptcy'
                  | 'federal-special'
                  | 'military'
                  | 'state-supreme'
                  | 'state-appellate'
                  | 'state-trial'
                  | 'state-special'
                  | 'state-attorney-general'
                  | undefined
                cites?: string | undefined
                domain?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              json: {
                query: string
                k?: number | undefined
                jurisdiction?: string | undefined
                court?: string | undefined
                courtType?:
                  | 'federal-supreme'
                  | 'federal-appellate'
                  | 'federal-district'
                  | 'federal-bankruptcy'
                  | 'federal-special'
                  | 'military'
                  | 'state-supreme'
                  | 'state-appellate'
                  | 'state-trial'
                  | 'state-special'
                  | 'state-attorney-general'
                  | undefined
                cites?: string | undefined
                domain?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              json: {
                query: string
                k?: number | undefined
                jurisdiction?: string | undefined
                court?: string | undefined
                courtType?:
                  | 'federal-supreme'
                  | 'federal-appellate'
                  | 'federal-district'
                  | 'federal-bankruptcy'
                  | 'federal-special'
                  | 'military'
                  | 'state-supreme'
                  | 'state-appellate'
                  | 'state-trial'
                  | 'state-special'
                  | 'state-attorney-general'
                  | undefined
                cites?: string | undefined
                domain?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              json: {
                query: string
                k?: number | undefined
                jurisdiction?: string | undefined
                court?: string | undefined
                courtType?:
                  | 'federal-supreme'
                  | 'federal-appellate'
                  | 'federal-district'
                  | 'federal-bankruptcy'
                  | 'federal-special'
                  | 'military'
                  | 'state-supreme'
                  | 'state-appellate'
                  | 'state-trial'
                  | 'state-special'
                  | 'state-attorney-general'
                  | undefined
                cites?: string | undefined
                domain?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              json: {
                query: string
                k?: number | undefined
                jurisdiction?: string | undefined
                court?: string | undefined
                courtType?:
                  | 'federal-supreme'
                  | 'federal-appellate'
                  | 'federal-district'
                  | 'federal-bankruptcy'
                  | 'federal-special'
                  | 'military'
                  | 'state-supreme'
                  | 'state-appellate'
                  | 'state-trial'
                  | 'state-special'
                  | 'state-attorney-general'
                  | undefined
                cites?: string | undefined
                domain?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/feedback': {
      $post:
        | {
            input: { json: EndpointFeedbackRequest }
            output: FeedbackResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: EndpointFeedbackRequest }
            output: FeedbackErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: EndpointFeedbackRequest }
            output: FeedbackErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: EndpointFeedbackRequest }
            output: FeedbackErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: EndpointFeedbackRequest }
            output: FeedbackErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: EndpointFeedbackRequest }
            output: FeedbackErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/team/threat-protection': {
      $get:
        | {
            input: {}
            output: {
              success?: boolean | undefined
              data?:
                | {
                    mode?: 'off' | 'normal' | undefined
                    riskScoreThreshold?: number | undefined
                    blacklist?: string[] | undefined
                    whitelist?: string[] | undefined
                    blockedTlds?: string[] | undefined
                    failurePolicy?: 'open' | 'closed' | undefined
                    allowRequestOverrides?: boolean | undefined
                    configured?: boolean | undefined
                    updatedAt?: (string | null) | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
      $put:
        | {
            input: {
              json: {
                mode: 'off' | 'normal'
                riskScoreThreshold?: number | undefined
                blacklist?: string[] | undefined
                whitelist?: string[] | undefined
                blockedTlds?: string[] | undefined
                failurePolicy?: 'open' | 'closed' | undefined
                allowRequestOverrides?: boolean | undefined
              }
            }
            output: {
              success?: boolean | undefined
              data?:
                | {
                    mode?: 'off' | 'normal' | undefined
                    riskScoreThreshold?: number | undefined
                    blacklist?: string[] | undefined
                    whitelist?: string[] | undefined
                    blockedTlds?: string[] | undefined
                    failurePolicy?: 'open' | 'closed' | undefined
                    allowRequestOverrides?: boolean | undefined
                    configured?: boolean | undefined
                    updatedAt?: (string | null) | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                mode: 'off' | 'normal'
                riskScoreThreshold?: number | undefined
                blacklist?: string[] | undefined
                whitelist?: string[] | undefined
                blockedTlds?: string[] | undefined
                failurePolicy?: 'open' | 'closed' | undefined
                allowRequestOverrides?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              json: {
                mode: 'off' | 'normal'
                riskScoreThreshold?: number | undefined
                blacklist?: string[] | undefined
                whitelist?: string[] | undefined
                blockedTlds?: string[] | undefined
                failurePolicy?: 'open' | 'closed' | undefined
                allowRequestOverrides?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  },
  '/'
>
export default routes
