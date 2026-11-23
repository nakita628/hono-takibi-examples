type EdgeConfigItemValue =
  | string
  | number
  | boolean
  | { [x: string]: unknown }
  | EdgeConfigItemValue[]
type EdgeConfigItem = {
  createdAt: number
  edgeConfigId: string
  key: string
  updatedAt: number
  value: EdgeConfigItemValue
}
type EdgeConfigToken = {
  createdAt: number
  edgeConfigId: string
  id: string
  label: string
  token: string
}
type Pagination = { count: number; next: number | null; prev: number | null }
type Team = { [x: string]: unknown }
type TeamLimited = {
  avatar: string | null
  created: string
  createdAt: number
  id: string
  limited: boolean
  membership:
    | {
        accessRequestedAt?: number | undefined
        confirmed: boolean
        confirmedAt: number
        created: number
        createdAt: number
        joinedFrom?:
          | {
              commitId?: string | undefined
              dsyncConnectedAt?: number | undefined
              dsyncUserId?: string | undefined
              gitUserId?: string | number | undefined
              gitUserLogin?: string | undefined
              idpUserId?: string | undefined
              origin:
                | 'import'
                | 'saml'
                | 'mail'
                | 'link'
                | 'teams'
                | 'github'
                | 'gitlab'
                | 'bitbucket'
                | 'dsync'
                | 'feedback'
              repoId?: string | undefined
              repoPath?: string | undefined
              ssoConnectedAt?: number | undefined
              ssoUserId?: string | undefined
            }
          | undefined
        role: 'MEMBER' | 'OWNER' | 'VIEWER' | 'DEVELOPER' | 'BILLING'
        teamId?: string | undefined
        uid: string
      }
    | {
        accessRequestedAt: number
        confirmed: boolean
        confirmedAt?: number | undefined
        created: number
        createdAt: number
        joinedFrom?:
          | {
              commitId?: string | undefined
              dsyncConnectedAt?: number | undefined
              dsyncUserId?: string | undefined
              gitUserId?: string | number | undefined
              gitUserLogin?: string | undefined
              idpUserId?: string | undefined
              origin:
                | 'import'
                | 'saml'
                | 'mail'
                | 'link'
                | 'teams'
                | 'github'
                | 'gitlab'
                | 'bitbucket'
                | 'dsync'
                | 'feedback'
              repoId?: string | undefined
              repoPath?: string | undefined
              ssoConnectedAt?: number | undefined
              ssoUserId?: string | undefined
            }
          | undefined
        role: 'MEMBER' | 'OWNER' | 'VIEWER' | 'DEVELOPER' | 'BILLING'
        teamId?: string | undefined
        uid: string
      }
  name: string | null
  saml?:
    | {
        connection?:
          | {
              createdAt?: (number | null) | undefined
              creator: string
              domain: string
              id: string
              name: string
              recordType: 'A' | 'AAAA' | 'ALIAS' | 'CAA' | 'CNAME' | 'MX' | 'SRV' | 'TXT' | 'NS'
              ttl?: number | undefined
              type: 'record' | 'record-sys'
              value: string
            }
          | undefined
        directory?:
          | {
              createdAt?: (number | null) | undefined
              creator: string
              domain: string
              id: string
              name: string
              recordType: 'A' | 'AAAA' | 'ALIAS' | 'CAA' | 'CNAME' | 'MX' | 'SRV' | 'TXT' | 'NS'
              ttl?: number | undefined
              type: 'record' | 'record-sys'
              value: string
            }
          | undefined
        enforced: boolean
      }
    | undefined
  slug: string
}
type AuthUser = {
  activeDashboardViews?: { scopeId: string; viewPreference: 'cards' | 'list' }[] | undefined
  avatar: string | null
  billing: {
    addons?: (('custom-deployment-suffix' | 'live-support')[] | null) | undefined
    address?:
      | ({
          city?: string | undefined
          country?: string | undefined
          line1: string
          line2?: string | undefined
          postalCode?: string | undefined
          state?: string | undefined
        } | null)
      | undefined
    cancelation?: (number | null) | undefined
    contract?: ({ end: number; start: number } | null) | undefined
    controls?:
      | ({
          analyticsSampleRateInPercent?: (number | null) | undefined
          analyticsSpendLimitInDollars?: (number | null) | undefined
        } | null)
      | undefined
    currency?: 'usd' | 'eur' | undefined
    email?: (string | null) | undefined
    invoiceItems?:
      | ({
          analytics?:
            | {
                createdAt?: number | undefined
                disabledAt?: (number | null) | undefined
                frequency?: { interval: 'month'; intervalCount: 1 | 3 | 2 | 6 | 12 } | undefined
                hidden: boolean
                maxQuantity?: number | undefined
                name?: string | undefined
                price: number
                quantity: number
              }
            | undefined
          analyticsUsage?:
            | {
                batch: number
                disabledAt?: (number | null) | undefined
                hidden: boolean
                name?: string | undefined
                price: number
                threshold: number
              }
            | undefined
          artifacts?:
            | {
                batch: number
                disabledAt?: (number | null) | undefined
                hidden: boolean
                name?: string | undefined
                price: number
                threshold: number
              }
            | undefined
          bandwidth?:
            | {
                batch: number
                disabledAt?: (number | null) | undefined
                hidden: boolean
                name?: string | undefined
                price: number
                threshold: number
              }
            | undefined
          builds?:
            | {
                batch: number
                disabledAt?: (number | null) | undefined
                hidden: boolean
                name?: string | undefined
                price: number
                threshold: number
              }
            | undefined
          concurrentBuilds?:
            | {
                createdAt?: number | undefined
                disabledAt?: (number | null) | undefined
                frequency?: { interval: 'month'; intervalCount: 1 | 3 | 2 | 6 | 12 } | undefined
                hidden: boolean
                maxQuantity?: number | undefined
                name?: string | undefined
                price: number
                quantity: number
              }
            | undefined
          customCerts?:
            | {
                createdAt?: number | undefined
                disabledAt?: (number | null) | undefined
                frequency?: { interval: 'month'; intervalCount: 1 | 3 | 2 | 6 | 12 } | undefined
                hidden: boolean
                maxQuantity?: number | undefined
                name?: string | undefined
                price: number
                quantity: number
              }
            | undefined
          edgeFunctionExecutionUnits?:
            | {
                batch: number
                disabledAt?: (number | null) | undefined
                hidden: boolean
                name?: string | undefined
                price: number
                threshold: number
              }
            | undefined
          edgeMiddlewareInvocations?:
            | {
                batch: number
                disabledAt?: (number | null) | undefined
                hidden: boolean
                name?: string | undefined
                price: number
                threshold: number
              }
            | undefined
          enterprise?:
            | {
                createdAt?: number | undefined
                disabledAt?: (number | null) | undefined
                frequency?: { interval: 'month'; intervalCount: 1 | 3 | 2 | 6 | 12 } | undefined
                hidden: boolean
                maxQuantity?: number | undefined
                name?: string | undefined
                price: number
                quantity: number
              }
            | undefined
          monitoring?:
            | {
                createdAt?: number | undefined
                disabledAt?: (number | null) | undefined
                frequency?: { interval: 'month'; intervalCount: 1 | 3 | 2 | 6 | 12 } | undefined
                hidden: boolean
                maxQuantity?: number | undefined
                name?: string | undefined
                price: number
                quantity: number
              }
            | undefined
          monitoringMetric?:
            | {
                batch: number
                disabledAt?: (number | null) | undefined
                hidden: boolean
                name?: string | undefined
                price: number
                threshold: number
              }
            | undefined
          passwordProtection?:
            | {
                createdAt?: number | undefined
                disabledAt?: (number | null) | undefined
                frequency?: { interval: 'month'; intervalCount: 1 | 3 | 2 | 6 | 12 } | undefined
                hidden: boolean
                maxQuantity?: number | undefined
                name?: string | undefined
                price: number
                quantity: number
              }
            | undefined
          previewDeploymentSuffix?:
            | {
                createdAt?: number | undefined
                disabledAt?: (number | null) | undefined
                frequency?: { interval: 'month'; intervalCount: 1 | 3 | 2 | 6 | 12 } | undefined
                hidden: boolean
                maxQuantity?: number | undefined
                name?: string | undefined
                price: number
                quantity: number
              }
            | undefined
          pro?:
            | {
                createdAt?: number | undefined
                disabledAt?: (number | null) | undefined
                frequency?: { interval: 'month'; intervalCount: 1 | 3 | 2 | 6 | 12 } | undefined
                hidden: boolean
                maxQuantity?: number | undefined
                name?: string | undefined
                price: number
                quantity: number
              }
            | undefined
          saml?:
            | {
                createdAt?: number | undefined
                disabledAt?: (number | null) | undefined
                frequency?: { interval: 'month'; intervalCount: 1 | 3 | 2 | 6 | 12 } | undefined
                hidden: boolean
                maxQuantity?: number | undefined
                name?: string | undefined
                price: number
                quantity: number
              }
            | undefined
          serverlessFunctionExecution?:
            | {
                batch: number
                disabledAt?: (number | null) | undefined
                hidden: boolean
                name?: string | undefined
                price: number
                threshold: number
              }
            | undefined
          sourceImages?:
            | {
                batch: number
                disabledAt?: (number | null) | undefined
                hidden: boolean
                name?: string | undefined
                price: number
                threshold: number
              }
            | undefined
          ssoProtection?:
            | {
                createdAt?: number | undefined
                disabledAt?: (number | null) | undefined
                frequency?: { interval: 'month'; intervalCount: 1 | 3 | 2 | 6 | 12 } | undefined
                hidden: boolean
                maxQuantity?: number | undefined
                name?: string | undefined
                price: number
                quantity: number
              }
            | undefined
          teamSeats?:
            | {
                createdAt?: number | undefined
                disabledAt?: (number | null) | undefined
                frequency?: { interval: 'month'; intervalCount: 1 | 3 | 2 | 6 | 12 } | undefined
                hidden: boolean
                maxQuantity?: number | undefined
                name?: string | undefined
                price: number
                quantity: number
              }
            | undefined
          webAnalyticsDataPoint?:
            | {
                batch: number
                disabledAt?: (number | null) | undefined
                hidden: boolean
                name?: string | undefined
                price: number
                threshold: number
              }
            | undefined
        } | null)
      | undefined
    invoiceSettings?: { footer?: string | undefined } | undefined
    language?: (string | null) | undefined
    name?: (string | null) | undefined
    overdue?: (boolean | null) | undefined
    period: { end: number; start: number } | null
    plan: 'hobby' | 'enterprise' | 'pro'
    platform?: 'stripe' | 'stripeTestMode' | undefined
    pricingExperiment?: 'august-2022' | undefined
    programType?: 'startup' | 'agency' | undefined
    purchaseOrder?: (string | null) | undefined
    status?: 'active' | 'canceled' | 'trialing' | 'overdue' | 'expired' | undefined
    subscriptions?:
      | (
          | {
              discount: {
                coupon: {
                  amountOff: number | null
                  duration: 'forever' | 'repeating' | 'once'
                  durationInMonths: number | null
                  id: string
                  name: string | null
                  percentageOff: number | null
                }
                id: string
              } | null
              frequency: { interval: 'month' | 'day' | 'week' | 'year'; intervalCount: number }
              id: string
              items: {
                amount: number
                id: string
                priceId: string
                productId: string
                quantity: number
              }[]
              period: { end: number; start: number }
              trial: { end: number; start: number } | null
            }[]
          | null
        )
      | undefined
    tax?: ({ id: string; type: string } | null) | undefined
    trial?: ({ end: number; start: number } | null) | undefined
  } | null
  createdAt: number
  dismissedToasts?:
    | { dismissals: { createdAt: number; scopeId: string }[]; name: string }[]
    | undefined
  email: string
  hasTrialAvailable: boolean
  id: string
  importFlowGitNamespace?: string | number | undefined
  importFlowGitNamespaceId?: string | number | undefined
  importFlowGitProvider?: 'github' | 'gitlab' | 'bitbucket' | undefined
  name: string | null
  preferredScopesAndGitNamespaces?:
    | { gitNamespaceId: string | number; scopeId: string }[]
    | undefined
  remoteCaching?: { enabled?: boolean | undefined } | undefined
  resourceConfig: {
    awsAccountIds?: string[] | undefined
    awsAccountType?: string | undefined
    cfZoneName?: string | undefined
    concurrentBuilds?: number | undefined
    edgeConfigSize?: number | undefined
    edgeConfigs?: number | undefined
    nodeType?: string | undefined
  }
  softBlock: {
    blockedAt: number
    reason:
      | 'FAIR_USE_LIMITS_EXCEEDED'
      | 'ENTERPRISE_TRIAL_ENDED'
      | 'BLOCKED_FOR_PLATFORM_ABUSE'
      | 'UNPAID_INVOICE'
      | 'SUBSCRIPTION_EXPIRED'
      | 'SUBSCRIPTION_CANCELED'
  } | null
  stagingPrefix: string
  username: string
}
type AuthUserLimited = {
  avatar: string | null
  email: string
  id: string
  limited: boolean
  name: string | null
  username: string
}
type UserEvent = {
  createdAt: number
  entities: {
    end: number
    start: number
    type:
      | 'target'
      | 'author'
      | 'bitbucket_login'
      | 'bold'
      | 'deployment_host'
      | 'dns_record'
      | 'git_link'
      | 'github_login'
      | 'gitlab_login'
      | 'hook_name'
      | 'integration'
      | 'edge-config'
      | 'link'
      | 'project_name'
      | 'scaling_rules'
      | 'env_var_name'
      | 'system'
  }[]
  id: string
  text: string
  user?:
    | { avatar: string; email: string; slug?: string | undefined; uid: string; username: string }
    | undefined
  userId: string
}
type AuthToken = {
  activeAt: number
  createdAt: number
  expiresAt?: number | undefined
  id: string
  name: string
  origin?: string | undefined
  scopes?:
    | (
        | {
            createdAt: number
            expiresAt?: number | undefined
            origin: 'saml' | 'github' | 'gitlab' | 'bitbucket' | 'email' | 'manual'
            type: 'user'
          }
        | {
            createdAt: number
            expiresAt?: number | undefined
            origin: 'saml' | 'github' | 'gitlab' | 'bitbucket' | 'email' | 'manual'
            teamId: string
            type: 'team'
          }
      )[]
    | undefined
  type: string
}
type FileTree = {
  children?: FileTree[] | undefined
  contentType?: string | undefined
  mode: number
  name: string
  symlink?: string | undefined
  type: 'directory' | 'file' | 'symlink' | 'lambda' | 'middleware' | 'invalid'
  uid?: string | undefined
}
type ACLAction = 'create' | 'delete' | 'read' | 'update' | 'list' | 'count'
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/edge-config': {
      $get:
        | {
            input: { query: { teamId?: string | undefined } }
            output: {
              createdAt?: (number | null) | undefined
              creator?: string | undefined
              domain?: string | undefined
              id?: string | undefined
              itemCount: number
              name?: string | undefined
              recordType?:
                | 'A'
                | 'AAAA'
                | 'ALIAS'
                | 'CAA'
                | 'CNAME'
                | 'MX'
                | 'SRV'
                | 'TXT'
                | 'NS'
                | undefined
              sizeInBytes: number
              ttl?: number | undefined
              type?: 'record' | 'record-sys' | undefined
              value?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: { query: { teamId?: string | undefined } } & {
              json: {
                items?:
                  | {
                      [x: string]:
                        | string
                        | number
                        | boolean
                        | ({ [x: string]: unknown } | null)
                        | { [x: string]: unknown }
                        | (
                            | string
                            | number
                            | boolean
                            | ({ [x: string]: unknown } | null)
                            | { [x: string]: unknown }
                          )[]
                    }
                  | undefined
                slug: string
              }
            }
            output: {
              blocking?: boolean | undefined
              completedAt?: number | undefined
              conclusion?:
                | 'canceled'
                | 'failed'
                | 'neutral'
                | 'succeeded'
                | 'skipped'
                | 'stale'
                | undefined
              createdAt?: number | undefined
              deploymentId?: string | undefined
              detailsUrl?: string | undefined
              externalId?: string | undefined
              id?: string | undefined
              integrationId?: string | undefined
              itemCount: number
              name?: string | undefined
              output?:
                | {
                    metrics?:
                      | {
                          CLS: {
                            previousValue?: number | undefined
                            source: 'web-vitals'
                            value: number | null
                          }
                          FCP: {
                            previousValue?: number | undefined
                            source: 'web-vitals'
                            value: number | null
                          }
                          LCP: {
                            previousValue?: number | undefined
                            source: 'web-vitals'
                            value: number | null
                          }
                          TBT: {
                            previousValue?: number | undefined
                            source: 'web-vitals'
                            value: number | null
                          }
                          virtualExperienceScore?:
                            | {
                                previousValue?: number | undefined
                                source: 'web-vitals'
                                value: number | null
                              }
                            | undefined
                        }
                      | undefined
                  }
                | undefined
              path?: string | undefined
              rerequestable?: boolean | undefined
              sizeInBytes: number
              startedAt?: number | undefined
              status?: 'registered' | 'running' | 'completed' | undefined
              updatedAt?: number | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { teamId?: string | undefined } } & {
              json: {
                items?:
                  | {
                      [x: string]:
                        | string
                        | number
                        | boolean
                        | ({ [x: string]: unknown } | null)
                        | { [x: string]: unknown }
                        | (
                            | string
                            | number
                            | boolean
                            | ({ [x: string]: unknown } | null)
                            | { [x: string]: unknown }
                          )[]
                    }
                  | undefined
                slug: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { teamId?: string | undefined } } & {
              json: {
                items?:
                  | {
                      [x: string]:
                        | string
                        | number
                        | boolean
                        | ({ [x: string]: unknown } | null)
                        | { [x: string]: unknown }
                        | (
                            | string
                            | number
                            | boolean
                            | ({ [x: string]: unknown } | null)
                            | { [x: string]: unknown }
                          )[]
                    }
                  | undefined
                slug: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { query: { teamId?: string | undefined } } & {
              json: {
                items?:
                  | {
                      [x: string]:
                        | string
                        | number
                        | boolean
                        | ({ [x: string]: unknown } | null)
                        | { [x: string]: unknown }
                        | (
                            | string
                            | number
                            | boolean
                            | ({ [x: string]: unknown } | null)
                            | { [x: string]: unknown }
                          )[]
                    }
                  | undefined
                slug: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/edge-config/:edgeConfigId': {
      $delete:
        | {
            input: { param: { edgeConfigId: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { edgeConfigId: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { edgeConfigId: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { edgeConfigId: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { edgeConfigId: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { edgeConfigId: string } } & { query: { teamId?: string | undefined } }
            output: {
              createdAt?: (number | null) | undefined
              creator?: string | undefined
              domain?: string | undefined
              id?: string | undefined
              itemCount: number
              name?: string | undefined
              recordType?:
                | 'A'
                | 'AAAA'
                | 'ALIAS'
                | 'CAA'
                | 'CNAME'
                | 'MX'
                | 'SRV'
                | 'TXT'
                | 'NS'
                | undefined
              sizeInBytes: number
              ttl?: number | undefined
              type?: 'record' | 'record-sys' | undefined
              value?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { edgeConfigId: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { edgeConfigId: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { edgeConfigId: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { edgeConfigId: string } } & {
              query: { teamId?: string | undefined }
            } & { json: { slug: string } }
            output: {
              blocking?: boolean | undefined
              completedAt?: number | undefined
              conclusion?:
                | 'canceled'
                | 'failed'
                | 'neutral'
                | 'succeeded'
                | 'skipped'
                | 'stale'
                | undefined
              createdAt?: number | undefined
              deploymentId?: string | undefined
              detailsUrl?: string | undefined
              externalId?: string | undefined
              id?: string | undefined
              integrationId?: string | undefined
              itemCount: number
              name?: string | undefined
              output?:
                | {
                    metrics?:
                      | {
                          CLS: {
                            previousValue?: number | undefined
                            source: 'web-vitals'
                            value: number | null
                          }
                          FCP: {
                            previousValue?: number | undefined
                            source: 'web-vitals'
                            value: number | null
                          }
                          LCP: {
                            previousValue?: number | undefined
                            source: 'web-vitals'
                            value: number | null
                          }
                          TBT: {
                            previousValue?: number | undefined
                            source: 'web-vitals'
                            value: number | null
                          }
                          virtualExperienceScore?:
                            | {
                                previousValue?: number | undefined
                                source: 'web-vitals'
                                value: number | null
                              }
                            | undefined
                        }
                      | undefined
                  }
                | undefined
              path?: string | undefined
              rerequestable?: boolean | undefined
              sizeInBytes: number
              startedAt?: number | undefined
              status?: 'registered' | 'running' | 'completed' | undefined
              updatedAt?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { edgeConfigId: string } } & {
              query: { teamId?: string | undefined }
            } & { json: { slug: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { edgeConfigId: string } } & {
              query: { teamId?: string | undefined }
            } & { json: { slug: string } }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { edgeConfigId: string } } & {
              query: { teamId?: string | undefined }
            } & { json: { slug: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { edgeConfigId: string } } & {
              query: { teamId?: string | undefined }
            } & { json: { slug: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/edge-config/:edgeConfigId/item/:edgeConfigItemKey': {
      $get:
        | {
            input: { param: { edgeConfigId: string; edgeConfigItemKey: string } } & {
              query: { teamId?: string | undefined }
            }
            output: EdgeConfigItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { edgeConfigId: string; edgeConfigItemKey: string } } & {
              query: { teamId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { edgeConfigId: string; edgeConfigItemKey: string } } & {
              query: { teamId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { edgeConfigId: string; edgeConfigItemKey: string } } & {
              query: { teamId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/edge-config/:edgeConfigId/items': {
      $get:
        | {
            input: { param: { edgeConfigId: string } } & { query: { teamId?: string | undefined } }
            output: EdgeConfigItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { edgeConfigId: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { edgeConfigId: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { edgeConfigId: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
      $patch:
        | {
            input: { param: { edgeConfigId: string } } & {
              query: { teamId?: string | undefined }
            } & {
              json: {
                items: (
                  | {
                      key: string
                      operation: 'create' | 'update' | 'upsert'
                      value:
                        | string
                        | number
                        | boolean
                        | ({ [x: string]: unknown } | null)
                        | { [x: string]: unknown }
                        | (
                            | string
                            | number
                            | boolean
                            | ({ [x: string]: unknown } | null)
                            | { [x: string]: unknown }
                          )[]
                    }
                  | { key: string; operation: 'delete' }
                )[]
              }
            }
            output: { status: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { edgeConfigId: string } } & {
              query: { teamId?: string | undefined }
            } & {
              json: {
                items: (
                  | {
                      key: string
                      operation: 'create' | 'update' | 'upsert'
                      value:
                        | string
                        | number
                        | boolean
                        | ({ [x: string]: unknown } | null)
                        | { [x: string]: unknown }
                        | (
                            | string
                            | number
                            | boolean
                            | ({ [x: string]: unknown } | null)
                            | { [x: string]: unknown }
                          )[]
                    }
                  | { key: string; operation: 'delete' }
                )[]
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { edgeConfigId: string } } & {
              query: { teamId?: string | undefined }
            } & {
              json: {
                items: (
                  | {
                      key: string
                      operation: 'create' | 'update' | 'upsert'
                      value:
                        | string
                        | number
                        | boolean
                        | ({ [x: string]: unknown } | null)
                        | { [x: string]: unknown }
                        | (
                            | string
                            | number
                            | boolean
                            | ({ [x: string]: unknown } | null)
                            | { [x: string]: unknown }
                          )[]
                    }
                  | { key: string; operation: 'delete' }
                )[]
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { edgeConfigId: string } } & {
              query: { teamId?: string | undefined }
            } & {
              json: {
                items: (
                  | {
                      key: string
                      operation: 'create' | 'update' | 'upsert'
                      value:
                        | string
                        | number
                        | boolean
                        | ({ [x: string]: unknown } | null)
                        | { [x: string]: unknown }
                        | (
                            | string
                            | number
                            | boolean
                            | ({ [x: string]: unknown } | null)
                            | { [x: string]: unknown }
                          )[]
                    }
                  | { key: string; operation: 'delete' }
                )[]
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { edgeConfigId: string } } & {
              query: { teamId?: string | undefined }
            } & {
              json: {
                items: (
                  | {
                      key: string
                      operation: 'create' | 'update' | 'upsert'
                      value:
                        | string
                        | number
                        | boolean
                        | ({ [x: string]: unknown } | null)
                        | { [x: string]: unknown }
                        | (
                            | string
                            | number
                            | boolean
                            | ({ [x: string]: unknown } | null)
                            | { [x: string]: unknown }
                          )[]
                    }
                  | { key: string; operation: 'delete' }
                )[]
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { edgeConfigId: string } } & {
              query: { teamId?: string | undefined }
            } & {
              json: {
                items: (
                  | {
                      key: string
                      operation: 'create' | 'update' | 'upsert'
                      value:
                        | string
                        | number
                        | boolean
                        | ({ [x: string]: unknown } | null)
                        | { [x: string]: unknown }
                        | (
                            | string
                            | number
                            | boolean
                            | ({ [x: string]: unknown } | null)
                            | { [x: string]: unknown }
                          )[]
                    }
                  | { key: string; operation: 'delete' }
                )[]
              }
            }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/edge-config/:edgeConfigId/token': {
      $post:
        | {
            input: { param: { edgeConfigId: string } } & {
              query: { teamId?: string | undefined }
            } & { json: { label: string } }
            output: { id: string; token: string }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { edgeConfigId: string } } & {
              query: { teamId?: string | undefined }
            } & { json: { label: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { edgeConfigId: string } } & {
              query: { teamId?: string | undefined }
            } & { json: { label: string } }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { edgeConfigId: string } } & {
              query: { teamId?: string | undefined }
            } & { json: { label: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { edgeConfigId: string } } & {
              query: { teamId?: string | undefined }
            } & { json: { label: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/edge-config/:edgeConfigId/token/:token': {
      $get:
        | {
            input: { param: { edgeConfigId: string; token: string } } & {
              query: { teamId?: string | undefined }
            }
            output: EdgeConfigToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { edgeConfigId: string; token: string } } & {
              query: { teamId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { edgeConfigId: string; token: string } } & {
              query: { teamId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { edgeConfigId: string; token: string } } & {
              query: { teamId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/edge-config/:edgeConfigId/tokens': {
      $delete:
        | {
            input: { param: { edgeConfigId: string } } & {
              query: { teamId?: string | undefined }
            } & { json: { tokens: string[] } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { edgeConfigId: string } } & {
              query: { teamId?: string | undefined }
            } & { json: { tokens: string[] } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { edgeConfigId: string } } & {
              query: { teamId?: string | undefined }
            } & { json: { tokens: string[] } }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { edgeConfigId: string } } & {
              query: { teamId?: string | undefined }
            } & { json: { tokens: string[] } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { edgeConfigId: string } } & {
              query: { teamId?: string | undefined }
            } & { json: { tokens: string[] } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { edgeConfigId: string } } & { query: { teamId?: string | undefined } }
            output: EdgeConfigToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { edgeConfigId: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { edgeConfigId: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { edgeConfigId: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/registration': {
      $post:
        | {
            input: { json: { email: string; tokenName?: string | undefined } }
            output: { securityCode: string; token: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { email: string; tokenName?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/registration/verify': {
      $get:
        | {
            input: {
              query: {
                email?: string | undefined
                token: string
                tokenName?: string | undefined
                ssoUserId?: string | undefined
              }
            }
            output: { email: string; teamId?: string | undefined; token: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                email?: string | undefined
                token: string
                tokenName?: string | undefined
                ssoUserId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                email?: string | undefined
                token: string
                tokenName?: string | undefined
                ssoUserId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                email?: string | undefined
                token: string
                tokenName?: string | undefined
                ssoUserId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/deployments/:deploymentId/checks': {
      $get:
        | {
            input: { param: { deploymentId: string } } & { query: { teamId?: string | undefined } }
            output: {
              checks: {
                completedAt?: number | undefined
                conclusion?:
                  | 'canceled'
                  | 'failed'
                  | 'neutral'
                  | 'succeeded'
                  | 'skipped'
                  | 'stale'
                  | undefined
                createdAt: number
                detailsUrl?: string | undefined
                id: string
                integrationId: string
                name: string
                output?:
                  | {
                      metrics?:
                        | {
                            CLS: {
                              previousValue?: number | undefined
                              source: 'web-vitals'
                              value: number | null
                            }
                            FCP: {
                              previousValue?: number | undefined
                              source: 'web-vitals'
                              value: number | null
                            }
                            LCP: {
                              previousValue?: number | undefined
                              source: 'web-vitals'
                              value: number | null
                            }
                            TBT: {
                              previousValue?: number | undefined
                              source: 'web-vitals'
                              value: number | null
                            }
                            virtualExperienceScore?:
                              | {
                                  previousValue?: number | undefined
                                  source: 'web-vitals'
                                  value: number | null
                                }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                path?: string | undefined
                rerequestable: boolean
                startedAt?: number | undefined
                status: 'registered' | 'running' | 'completed'
                updatedAt: number
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { deploymentId: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { deploymentId: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { deploymentId: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { deploymentId: string } } & {
              query: { teamId?: string | undefined }
            } & {
              json: {
                blocking: boolean
                detailsUrl?: string | undefined
                externalId?: string | undefined
                name: string
                path?: string | undefined
                rerequestable?: boolean | undefined
              }
            }
            output: {
              blocking: boolean
              completedAt?: number | undefined
              conclusion?:
                | 'canceled'
                | 'failed'
                | 'neutral'
                | 'succeeded'
                | 'skipped'
                | 'stale'
                | undefined
              createdAt: number
              deploymentId: string
              detailsUrl?: string | undefined
              externalId?: string | undefined
              id: string
              integrationId: string
              name: string
              output?:
                | {
                    metrics?:
                      | {
                          CLS: {
                            previousValue?: number | undefined
                            source: 'web-vitals'
                            value: number | null
                          }
                          FCP: {
                            previousValue?: number | undefined
                            source: 'web-vitals'
                            value: number | null
                          }
                          LCP: {
                            previousValue?: number | undefined
                            source: 'web-vitals'
                            value: number | null
                          }
                          TBT: {
                            previousValue?: number | undefined
                            source: 'web-vitals'
                            value: number | null
                          }
                          virtualExperienceScore?:
                            | {
                                previousValue?: number | undefined
                                source: 'web-vitals'
                                value: number | null
                              }
                            | undefined
                        }
                      | undefined
                  }
                | undefined
              path?: string | undefined
              rerequestable?: boolean | undefined
              startedAt?: number | undefined
              status: 'registered' | 'running' | 'completed'
              updatedAt: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { deploymentId: string } } & {
              query: { teamId?: string | undefined }
            } & {
              json: {
                blocking: boolean
                detailsUrl?: string | undefined
                externalId?: string | undefined
                name: string
                path?: string | undefined
                rerequestable?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { deploymentId: string } } & {
              query: { teamId?: string | undefined }
            } & {
              json: {
                blocking: boolean
                detailsUrl?: string | undefined
                externalId?: string | undefined
                name: string
                path?: string | undefined
                rerequestable?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { deploymentId: string } } & {
              query: { teamId?: string | undefined }
            } & {
              json: {
                blocking: boolean
                detailsUrl?: string | undefined
                externalId?: string | undefined
                name: string
                path?: string | undefined
                rerequestable?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/deployments/:deploymentId/checks/:checkId': {
      $get:
        | {
            input: { param: { deploymentId: string; checkId: string } } & {
              query: { teamId?: string | undefined }
            }
            output: {
              createdAt?: (number | null) | undefined
              creator: string
              domain: string
              id: string
              name: string
              recordType: 'A' | 'AAAA' | 'ALIAS' | 'CAA' | 'CNAME' | 'MX' | 'SRV' | 'TXT' | 'NS'
              ttl?: number | undefined
              type: 'record' | 'record-sys'
              value: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { deploymentId: string; checkId: string } } & {
              query: { teamId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { deploymentId: string; checkId: string } } & {
              query: { teamId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { deploymentId: string; checkId: string } } & {
              query: { teamId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $patch:
        | {
            input: { param: { deploymentId: string; checkId: string } } & {
              query: { teamId?: string | undefined }
            } & {
              json: {
                conclusion?: 'canceled' | 'failed' | 'neutral' | 'succeeded' | 'skipped' | undefined
                detailsUrl?: string | undefined
                externalId?: string | undefined
                name?: string | undefined
                output?:
                  | {
                      metrics?:
                        | {
                            CLS: {
                              previousValue?: number | undefined
                              source: 'web-vitals'
                              value: number | null
                            }
                            FCP: {
                              previousValue?: number | undefined
                              source: 'web-vitals'
                              value: number | null
                            }
                            LCP: {
                              previousValue?: number | undefined
                              source: 'web-vitals'
                              value: number | null
                            }
                            TBT: {
                              previousValue?: number | undefined
                              source: 'web-vitals'
                              value: number | null
                            }
                            virtualExperienceScore?:
                              | {
                                  previousValue?: number | undefined
                                  source: 'web-vitals'
                                  value: number | null
                                }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                path?: string | undefined
                status?: 'running' | 'completed' | undefined
              }
            }
            output: {
              blocking: boolean
              completedAt?: number | undefined
              conclusion?:
                | 'canceled'
                | 'failed'
                | 'neutral'
                | 'succeeded'
                | 'skipped'
                | 'stale'
                | undefined
              createdAt: number
              deploymentId: string
              detailsUrl?: string | undefined
              externalId?: string | undefined
              id: string
              integrationId: string
              name: string
              output?:
                | {
                    metrics?:
                      | {
                          CLS: {
                            previousValue?: number | undefined
                            source: 'web-vitals'
                            value: number | null
                          }
                          FCP: {
                            previousValue?: number | undefined
                            source: 'web-vitals'
                            value: number | null
                          }
                          LCP: {
                            previousValue?: number | undefined
                            source: 'web-vitals'
                            value: number | null
                          }
                          TBT: {
                            previousValue?: number | undefined
                            source: 'web-vitals'
                            value: number | null
                          }
                          virtualExperienceScore?:
                            | {
                                previousValue?: number | undefined
                                source: 'web-vitals'
                                value: number | null
                              }
                            | undefined
                        }
                      | undefined
                  }
                | undefined
              path?: string | undefined
              rerequestable?: boolean | undefined
              startedAt?: number | undefined
              status: 'registered' | 'running' | 'completed'
              updatedAt: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { deploymentId: string; checkId: string } } & {
              query: { teamId?: string | undefined }
            } & {
              json: {
                conclusion?: 'canceled' | 'failed' | 'neutral' | 'succeeded' | 'skipped' | undefined
                detailsUrl?: string | undefined
                externalId?: string | undefined
                name?: string | undefined
                output?:
                  | {
                      metrics?:
                        | {
                            CLS: {
                              previousValue?: number | undefined
                              source: 'web-vitals'
                              value: number | null
                            }
                            FCP: {
                              previousValue?: number | undefined
                              source: 'web-vitals'
                              value: number | null
                            }
                            LCP: {
                              previousValue?: number | undefined
                              source: 'web-vitals'
                              value: number | null
                            }
                            TBT: {
                              previousValue?: number | undefined
                              source: 'web-vitals'
                              value: number | null
                            }
                            virtualExperienceScore?:
                              | {
                                  previousValue?: number | undefined
                                  source: 'web-vitals'
                                  value: number | null
                                }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                path?: string | undefined
                status?: 'running' | 'completed' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { deploymentId: string; checkId: string } } & {
              query: { teamId?: string | undefined }
            } & {
              json: {
                conclusion?: 'canceled' | 'failed' | 'neutral' | 'succeeded' | 'skipped' | undefined
                detailsUrl?: string | undefined
                externalId?: string | undefined
                name?: string | undefined
                output?:
                  | {
                      metrics?:
                        | {
                            CLS: {
                              previousValue?: number | undefined
                              source: 'web-vitals'
                              value: number | null
                            }
                            FCP: {
                              previousValue?: number | undefined
                              source: 'web-vitals'
                              value: number | null
                            }
                            LCP: {
                              previousValue?: number | undefined
                              source: 'web-vitals'
                              value: number | null
                            }
                            TBT: {
                              previousValue?: number | undefined
                              source: 'web-vitals'
                              value: number | null
                            }
                            virtualExperienceScore?:
                              | {
                                  previousValue?: number | undefined
                                  source: 'web-vitals'
                                  value: number | null
                                }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                path?: string | undefined
                status?: 'running' | 'completed' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { deploymentId: string; checkId: string } } & {
              query: { teamId?: string | undefined }
            } & {
              json: {
                conclusion?: 'canceled' | 'failed' | 'neutral' | 'succeeded' | 'skipped' | undefined
                detailsUrl?: string | undefined
                externalId?: string | undefined
                name?: string | undefined
                output?:
                  | {
                      metrics?:
                        | {
                            CLS: {
                              previousValue?: number | undefined
                              source: 'web-vitals'
                              value: number | null
                            }
                            FCP: {
                              previousValue?: number | undefined
                              source: 'web-vitals'
                              value: number | null
                            }
                            LCP: {
                              previousValue?: number | undefined
                              source: 'web-vitals'
                              value: number | null
                            }
                            TBT: {
                              previousValue?: number | undefined
                              source: 'web-vitals'
                              value: number | null
                            }
                            virtualExperienceScore?:
                              | {
                                  previousValue?: number | undefined
                                  source: 'web-vitals'
                                  value: number | null
                                }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                path?: string | undefined
                status?: 'running' | 'completed' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { deploymentId: string; checkId: string } } & {
              query: { teamId?: string | undefined }
            } & {
              json: {
                conclusion?: 'canceled' | 'failed' | 'neutral' | 'succeeded' | 'skipped' | undefined
                detailsUrl?: string | undefined
                externalId?: string | undefined
                name?: string | undefined
                output?:
                  | {
                      metrics?:
                        | {
                            CLS: {
                              previousValue?: number | undefined
                              source: 'web-vitals'
                              value: number | null
                            }
                            FCP: {
                              previousValue?: number | undefined
                              source: 'web-vitals'
                              value: number | null
                            }
                            LCP: {
                              previousValue?: number | undefined
                              source: 'web-vitals'
                              value: number | null
                            }
                            TBT: {
                              previousValue?: number | undefined
                              source: 'web-vitals'
                              value: number | null
                            }
                            virtualExperienceScore?:
                              | {
                                  previousValue?: number | undefined
                                  source: 'web-vitals'
                                  value: number | null
                                }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                path?: string | undefined
                status?: 'running' | 'completed' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 413
          }
    }
  } & {
    '/v1/deployments/:deploymentId/checks/:checkId/rerequest': {
      $post:
        | {
            input: { param: { deploymentId: string; checkId: string } } & {
              query: { teamId?: string | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { deploymentId: string; checkId: string } } & {
              query: { teamId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { deploymentId: string; checkId: string } } & {
              query: { teamId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { deploymentId: string; checkId: string } } & {
              query: { teamId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/domains/records/:recordId': {
      $patch:
        | {
            input: { param: { recordId: string } } & { query: { teamId?: string | undefined } } & {
              json: {
                mxPriority?: (number | null) | undefined
                name?: (string | null) | undefined
                srv?:
                  | ({
                      port: number | null
                      priority: number | null
                      target: string | null
                      weight: number | null
                    } | null)
                  | undefined
                ttl?: (number | null) | undefined
                type?:
                  | 'A'
                  | 'AAAA'
                  | 'ALIAS'
                  | 'CAA'
                  | 'CNAME'
                  | 'MX'
                  | 'SRV'
                  | 'TXT'
                  | 'NS'
                  | undefined
                value?: (string | null) | undefined
              }
            }
            output: {
              createdAt?: (number | null) | undefined
              creator: string
              domain: string
              id: string
              name: string
              recordType: 'A' | 'AAAA' | 'ALIAS' | 'CAA' | 'CNAME' | 'MX' | 'SRV' | 'TXT' | 'NS'
              ttl?: number | undefined
              type: 'record' | 'record-sys'
              value: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { recordId: string } } & { query: { teamId?: string | undefined } } & {
              json: {
                mxPriority?: (number | null) | undefined
                name?: (string | null) | undefined
                srv?:
                  | ({
                      port: number | null
                      priority: number | null
                      target: string | null
                      weight: number | null
                    } | null)
                  | undefined
                ttl?: (number | null) | undefined
                type?:
                  | 'A'
                  | 'AAAA'
                  | 'ALIAS'
                  | 'CAA'
                  | 'CNAME'
                  | 'MX'
                  | 'SRV'
                  | 'TXT'
                  | 'NS'
                  | undefined
                value?: (string | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { recordId: string } } & { query: { teamId?: string | undefined } } & {
              json: {
                mxPriority?: (number | null) | undefined
                name?: (string | null) | undefined
                srv?:
                  | ({
                      port: number | null
                      priority: number | null
                      target: string | null
                      weight: number | null
                    } | null)
                  | undefined
                ttl?: (number | null) | undefined
                type?:
                  | 'A'
                  | 'AAAA'
                  | 'ALIAS'
                  | 'CAA'
                  | 'CNAME'
                  | 'MX'
                  | 'SRV'
                  | 'TXT'
                  | 'NS'
                  | undefined
                value?: (string | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { recordId: string } } & { query: { teamId?: string | undefined } } & {
              json: {
                mxPriority?: (number | null) | undefined
                name?: (string | null) | undefined
                srv?:
                  | ({
                      port: number | null
                      priority: number | null
                      target: string | null
                      weight: number | null
                    } | null)
                  | undefined
                ttl?: (number | null) | undefined
                type?:
                  | 'A'
                  | 'AAAA'
                  | 'ALIAS'
                  | 'CAA'
                  | 'CNAME'
                  | 'MX'
                  | 'SRV'
                  | 'TXT'
                  | 'NS'
                  | undefined
                value?: (string | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { recordId: string } } & { query: { teamId?: string | undefined } } & {
              json: {
                mxPriority?: (number | null) | undefined
                name?: (string | null) | undefined
                srv?:
                  | ({
                      port: number | null
                      priority: number | null
                      target: string | null
                      weight: number | null
                    } | null)
                  | undefined
                ttl?: (number | null) | undefined
                type?:
                  | 'A'
                  | 'AAAA'
                  | 'ALIAS'
                  | 'CAA'
                  | 'CNAME'
                  | 'MX'
                  | 'SRV'
                  | 'TXT'
                  | 'NS'
                  | undefined
                value?: (string | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { recordId: string } } & { query: { teamId?: string | undefined } } & {
              json: {
                mxPriority?: (number | null) | undefined
                name?: (string | null) | undefined
                srv?:
                  | ({
                      port: number | null
                      priority: number | null
                      target: string | null
                      weight: number | null
                    } | null)
                  | undefined
                ttl?: (number | null) | undefined
                type?:
                  | 'A'
                  | 'AAAA'
                  | 'ALIAS'
                  | 'CAA'
                  | 'CNAME'
                  | 'MX'
                  | 'SRV'
                  | 'TXT'
                  | 'NS'
                  | undefined
                value?: (string | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { recordId: string } } & { query: { teamId?: string | undefined } } & {
              json: {
                mxPriority?: (number | null) | undefined
                name?: (string | null) | undefined
                srv?:
                  | ({
                      port: number | null
                      priority: number | null
                      target: string | null
                      weight: number | null
                    } | null)
                  | undefined
                ttl?: (number | null) | undefined
                type?:
                  | 'A'
                  | 'AAAA'
                  | 'ALIAS'
                  | 'CAA'
                  | 'CNAME'
                  | 'MX'
                  | 'SRV'
                  | 'TXT'
                  | 'NS'
                  | undefined
                value?: (string | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/v1/integrations/configuration/:id': {
      $delete:
        | {
            input: { param: { id: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { id: string } } & { query: { teamId?: string | undefined } }
            output:
              | {
                  completedAt?: number | undefined
                  createdAt: number
                  deletedAt?: (number | null) | undefined
                  disabledAt?: number | undefined
                  id: string
                  integrationId: string
                  oauthConfiguration?: boolean | undefined
                  ownerId: string
                  projects?: string[] | undefined
                  removedLogDrainsAt?: number | undefined
                  removedProjectEnvsAt?: number | undefined
                  removedTokensAt?: number | undefined
                  removedWebhooksAt?: number | undefined
                  scopes: string[]
                  scopesQueue?:
                    | {
                        confirmedAt?: number | undefined
                        note: string
                        requestedAt: number
                        scopes: {
                          added: (
                            | 'read:integration-configuration'
                            | 'read-write:integration-configuration'
                            | 'read:deployment'
                            | 'read-write:deployment'
                            | 'read-write:deployment-check'
                            | 'read:project'
                            | 'read-write:project'
                            | 'read-write:project-env-vars'
                            | 'read-write:global-project-env-vars'
                            | 'read:team'
                            | 'read:user'
                            | 'read-write:log-drain'
                            | 'read:domain'
                            | 'read-write:domain'
                            | 'read-write:edge-config'
                            | 'read-write:otel-endpoint'
                            | 'read:monitoring'
                          )[]
                          upgraded: (
                            | 'read:integration-configuration'
                            | 'read-write:integration-configuration'
                            | 'read:deployment'
                            | 'read-write:deployment'
                            | 'read-write:deployment-check'
                            | 'read:project'
                            | 'read-write:project'
                            | 'read-write:project-env-vars'
                            | 'read-write:global-project-env-vars'
                            | 'read:team'
                            | 'read:user'
                            | 'read-write:log-drain'
                            | 'read:domain'
                            | 'read-write:domain'
                            | 'read-write:edge-config'
                            | 'read-write:otel-endpoint'
                            | 'read:monitoring'
                          )[]
                        }
                      }[]
                    | undefined
                  slug: string
                  source?: 'marketplace' | 'deploy-button' | 'oauth' | 'external' | undefined
                  teamId?: (string | null) | undefined
                  type: 'integration-configuration'
                  updatedAt: number
                  userId: string
                }
              | {
                  canConfigureOpenTelemetry?: boolean | undefined
                  completedAt?: number | undefined
                  createdAt: number
                  disabledAt?: number | undefined
                  id: string
                  integrationId: string
                  oauthConfiguration?: boolean | undefined
                  ownerId: string
                  projectSelection: 'selected' | 'all'
                  projects?: string[] | undefined
                  scopes: string[]
                  slug: string
                  source?: 'marketplace' | 'deploy-button' | 'oauth' | 'external' | undefined
                  teamId?: (string | null) | undefined
                  updatedAt: number
                  userId: string
                }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/integrations/configurations': {
      $get:
        | {
            input: { query: { view: 'account' | 'project'; teamId?: string | undefined } }
            output:
              | {
                  completedAt?: number | undefined
                  createdAt: number
                  deletedAt?: (number | null) | undefined
                  disabledAt?: number | undefined
                  id: string
                  integrationId: string
                  oauthConfiguration?: boolean | undefined
                  ownerId: string
                  projects?: string[] | undefined
                  removedLogDrainsAt?: number | undefined
                  removedProjectEnvsAt?: number | undefined
                  removedTokensAt?: number | undefined
                  removedWebhooksAt?: number | undefined
                  scopes: string[]
                  scopesQueue?:
                    | {
                        confirmedAt?: number | undefined
                        note: string
                        requestedAt: number
                        scopes: {
                          added: (
                            | 'read:integration-configuration'
                            | 'read-write:integration-configuration'
                            | 'read:deployment'
                            | 'read-write:deployment'
                            | 'read-write:deployment-check'
                            | 'read:project'
                            | 'read-write:project'
                            | 'read-write:project-env-vars'
                            | 'read-write:global-project-env-vars'
                            | 'read:team'
                            | 'read:user'
                            | 'read-write:log-drain'
                            | 'read:domain'
                            | 'read-write:domain'
                            | 'read-write:edge-config'
                            | 'read-write:otel-endpoint'
                            | 'read:monitoring'
                          )[]
                          upgraded: (
                            | 'read:integration-configuration'
                            | 'read-write:integration-configuration'
                            | 'read:deployment'
                            | 'read-write:deployment'
                            | 'read-write:deployment-check'
                            | 'read:project'
                            | 'read-write:project'
                            | 'read-write:project-env-vars'
                            | 'read-write:global-project-env-vars'
                            | 'read:team'
                            | 'read:user'
                            | 'read-write:log-drain'
                            | 'read:domain'
                            | 'read-write:domain'
                            | 'read-write:edge-config'
                            | 'read-write:otel-endpoint'
                            | 'read:monitoring'
                          )[]
                        }
                      }[]
                    | undefined
                  slug: string
                  source?: 'marketplace' | 'deploy-button' | 'oauth' | 'external' | undefined
                  teamId?: (string | null) | undefined
                  type: 'integration-configuration'
                  updatedAt: number
                  userId: string
                }[]
              | {
                  completedAt?: number | undefined
                  createdAt: number
                  deletedAt?: (number | null) | undefined
                  disabledAt?: number | undefined
                  id: string
                  integration: {
                    assignedBetaLabelAt?: number | undefined
                    category: string
                    flags?: string[] | undefined
                    icon: string
                    isLegacy: boolean
                    name: string
                  }
                  integrationId: string
                  oauthConfiguration?: boolean | undefined
                  ownerId: string
                  projects?: string[] | undefined
                  removedLogDrainsAt?: number | undefined
                  removedProjectEnvsAt?: number | undefined
                  removedTokensAt?: number | undefined
                  removedWebhooksAt?: number | undefined
                  scopes: string[]
                  scopesQueue?:
                    | {
                        confirmedAt?: number | undefined
                        note: string
                        requestedAt: number
                        scopes: {
                          added: (
                            | 'read:integration-configuration'
                            | 'read-write:integration-configuration'
                            | 'read:deployment'
                            | 'read-write:deployment'
                            | 'read-write:deployment-check'
                            | 'read:project'
                            | 'read-write:project'
                            | 'read-write:project-env-vars'
                            | 'read-write:global-project-env-vars'
                            | 'read:team'
                            | 'read:user'
                            | 'read-write:log-drain'
                            | 'read:domain'
                            | 'read-write:domain'
                            | 'read-write:edge-config'
                            | 'read-write:otel-endpoint'
                            | 'read:monitoring'
                          )[]
                          upgraded: (
                            | 'read:integration-configuration'
                            | 'read-write:integration-configuration'
                            | 'read:deployment'
                            | 'read-write:deployment'
                            | 'read-write:deployment-check'
                            | 'read:project'
                            | 'read-write:project'
                            | 'read-write:project-env-vars'
                            | 'read-write:global-project-env-vars'
                            | 'read:team'
                            | 'read:user'
                            | 'read-write:log-drain'
                            | 'read:domain'
                            | 'read-write:domain'
                            | 'read-write:edge-config'
                            | 'read-write:otel-endpoint'
                            | 'read:monitoring'
                          )[]
                        }
                      }[]
                    | undefined
                  slug: string
                  source?: 'marketplace' | 'deploy-button' | 'oauth' | 'external' | undefined
                  teamId?: (string | null) | undefined
                  type: 'integration-configuration'
                  updatedAt: number
                  userId: string
                }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { view: 'account' | 'project'; teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { view: 'account' | 'project'; teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v1/integrations/git-namespaces': {
      $get:
        | {
            input: {
              query: {
                provider?: 'github' | 'gitlab' | 'bitbucket' | undefined
                teamId?: string | undefined
              }
            }
            output: {
              id: string | number
              name?: string | undefined
              ownerType: string
              provider: string
              slug: string
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                provider?: 'github' | 'gitlab' | 'bitbucket' | undefined
                teamId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                provider?: 'github' | 'gitlab' | 'bitbucket' | undefined
                teamId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v1/integrations/log-drains/:id': {
      $delete:
        | {
            input: { param: { id: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/integrations/search-repo': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                namespaceId?: (string | number | null) | undefined
                provider?: 'github' | 'gitlab' | 'bitbucket' | undefined
                installationId?: string | undefined
                teamId?: string | undefined
              }
            }
            output: {
              gitAccount: {
                namespaceId: string | number
                provider: 'github' | 'gitlab' | 'bitbucket'
              }
              repos: {
                defaultBranch: string
                id: string | number
                name: string
                namespace: string
                ownerType: 'team' | 'user'
                private: boolean
                slug: string
                updatedAt: number
                url: string
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                namespaceId?: (string | number | null) | undefined
                provider?: 'github' | 'gitlab' | 'bitbucket' | undefined
                installationId?: string | undefined
                teamId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                query?: string | undefined
                namespaceId?: (string | number | null) | undefined
                provider?: 'github' | 'gitlab' | 'bitbucket' | undefined
                installationId?: string | undefined
                teamId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v1/log-drains': {
      $get:
        | {
            input: { query: { projectId?: string | undefined; teamId?: string | undefined } }
            output: {
              branch?: string | undefined
              configurationId?: string | undefined
              createdAt: number
              deliveryFormat: 'json' | 'ndjson' | 'syslog'
              environment?: 'preview' | 'production' | undefined
              headers?: { [x: string]: string } | undefined
              id: string
              ownerId: string
              projectIds?: string[] | undefined
              sources?: ('static' | 'lambda' | 'build' | 'edge' | 'external')[] | undefined
              type: 'json' | 'ndjson' | 'syslog'
              url: string
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { projectId?: string | undefined; teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { projectId?: string | undefined; teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: { query: { teamId?: string | undefined } } & {
              json: {
                branch?: string | undefined
                deliveryFormat: 'json' | 'ndjson'
                environment?: 'preview' | 'production' | undefined
                headers?: { [x: string]: string } | undefined
                projectIds?: string[] | undefined
                sources: ('static' | 'lambda' | 'build' | 'edge' | 'external')[]
                url: string
              }
            }
            output: {
              branch?: string | undefined
              configurationId?: string | undefined
              createdAt: number
              deliveryFormat: 'json' | 'ndjson' | 'syslog'
              environment?: 'preview' | 'production' | undefined
              headers?: { [x: string]: string } | undefined
              id: string
              ownerId: string
              projectIds?: string[] | undefined
              secret?: string | undefined
              sources?: ('static' | 'lambda' | 'build' | 'edge' | 'external')[] | undefined
              type: 'json' | 'ndjson' | 'syslog'
              url: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { teamId?: string | undefined } } & {
              json: {
                branch?: string | undefined
                deliveryFormat: 'json' | 'ndjson'
                environment?: 'preview' | 'production' | undefined
                headers?: { [x: string]: string } | undefined
                projectIds?: string[] | undefined
                sources: ('static' | 'lambda' | 'build' | 'edge' | 'external')[]
                url: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { teamId?: string | undefined } } & {
              json: {
                branch?: string | undefined
                deliveryFormat: 'json' | 'ndjson'
                environment?: 'preview' | 'production' | undefined
                headers?: { [x: string]: string } | undefined
                projectIds?: string[] | undefined
                sources: ('static' | 'lambda' | 'build' | 'edge' | 'external')[]
                url: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v1/log-drains/:id': {
      $delete:
        | {
            input: { param: { id: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { id: string } } & { query: { teamId?: string | undefined } }
            output: {
              branch?: string | undefined
              configurationId?: string | undefined
              createdAt: number
              deliveryFormat: 'json' | 'ndjson' | 'syslog'
              environment?: 'preview' | 'production' | undefined
              headers?: { [x: string]: string } | undefined
              id: string
              ownerId: string
              projectIds?: string[] | undefined
              sources?: ('static' | 'lambda' | 'build' | 'edge' | 'external')[] | undefined
              type: 'json' | 'ndjson' | 'syslog'
              url: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/projects/:idOrName/env/:id': {
      $get:
        | {
            input: { param: { idOrName: string; id: string } } & {
              query: { teamId?: string | undefined }
            }
            output: {
              configurationId?: (string | null) | undefined
              createdAt?: number | undefined
              createdBy?: (string | null) | undefined
              decrypted?: boolean | undefined
              edgeConfigId?: (string | null) | undefined
              edgeConfigTokenId?: (string | null) | undefined
              gitBranch?: string | undefined
              id?: string | undefined
              key: string
              target?:
                | ('production' | 'preview' | 'development' | 'preview' | 'development')[]
                | 'production'
                | 'preview'
                | 'development'
                | 'preview'
                | 'development'
                | undefined
              type: 'secret' | 'system' | 'encrypted' | 'plain' | 'sensitive'
              updatedAt?: number | undefined
              updatedBy?: (string | null) | undefined
              value: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { idOrName: string; id: string } } & {
              query: { teamId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { idOrName: string; id: string } } & {
              query: { teamId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { idOrName: string; id: string } } & {
              query: { teamId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/teams': {
      $post:
        | {
            input: { json: { name?: string | undefined; slug: string } }
            output: { id: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { name?: string | undefined; slug: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: { name?: string | undefined; slug: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: { name?: string | undefined; slug: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/teams/:teamId': {
      $delete:
        | {
            input: { param: { teamId: string } } & {
              json: { reasons?: { description: string; slug: string }[] | undefined }
            }
            output: { id: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamId: string } } & {
              json: { reasons?: { description: string; slug: string }[] | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { teamId: string } } & {
              json: { reasons?: { description: string; slug: string }[] | undefined }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { teamId: string } } & {
              json: { reasons?: { description: string; slug: string }[] | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { teamId: string } } & {
              json: { reasons?: { description: string; slug: string }[] | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/teams/:teamId/invites/:inviteId': {
      $delete:
        | {
            input: { param: { inviteId: string; teamId: string } }
            output: { id: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { inviteId: string; teamId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { inviteId: string; teamId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { inviteId: string; teamId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/teams/:teamId/members': {
      $post:
        | {
            input: { param: { teamId: string } } & {
              json: {
                email?: string | undefined
                role?: { [x: string]: unknown } | undefined
                uid?: string | undefined
              }
            }
            output: { email: string; role: string; uid: string; username: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamId: string } } & {
              json: {
                email?: string | undefined
                role?: { [x: string]: unknown } | undefined
                uid?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { teamId: string } } & {
              json: {
                email?: string | undefined
                role?: { [x: string]: unknown } | undefined
                uid?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { teamId: string } } & {
              json: {
                email?: string | undefined
                role?: { [x: string]: unknown } | undefined
                uid?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/teams/:teamId/members/teams/join': {
      $post:
        | {
            input: { param: { teamId: string } } & {
              json: { inviteCode?: string | undefined; teamId?: string | undefined }
            }
            output: { from: string; name: string; slug: string; teamId: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamId: string } } & {
              json: { inviteCode?: string | undefined; teamId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { teamId: string } } & {
              json: { inviteCode?: string | undefined; teamId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { teamId: string } } & {
              json: { inviteCode?: string | undefined; teamId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { teamId: string } } & {
              json: { inviteCode?: string | undefined; teamId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { teamId: string } } & {
              json: { inviteCode?: string | undefined; teamId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/teams/:teamId/members/:uid': {
      $delete:
        | {
            input: { param: { uid: string; teamId: string } }
            output: { id: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uid: string; teamId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { uid: string; teamId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { uid: string; teamId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $patch:
        | {
            input: { param: { uid: string; teamId: string } } & {
              json: {
                confirmed?: true | undefined
                joinedFrom?:
                  | { ssoUserId?: ({ [x: string]: unknown } | null) | undefined }
                  | undefined
                role?: string | undefined
              }
            }
            output: { id: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uid: string; teamId: string } } & {
              json: {
                confirmed?: true | undefined
                joinedFrom?:
                  | { ssoUserId?: ({ [x: string]: unknown } | null) | undefined }
                  | undefined
                role?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { uid: string; teamId: string } } & {
              json: {
                confirmed?: true | undefined
                joinedFrom?:
                  | { ssoUserId?: ({ [x: string]: unknown } | null) | undefined }
                  | undefined
                role?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { uid: string; teamId: string } } & {
              json: {
                confirmed?: true | undefined
                joinedFrom?:
                  | { ssoUserId?: ({ [x: string]: unknown } | null) | undefined }
                  | undefined
                role?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { uid: string; teamId: string } } & {
              json: {
                confirmed?: true | undefined
                joinedFrom?:
                  | { ssoUserId?: ({ [x: string]: unknown } | null) | undefined }
                  | undefined
                role?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { uid: string; teamId: string } } & {
              json: {
                confirmed?: true | undefined
                joinedFrom?:
                  | { ssoUserId?: ({ [x: string]: unknown } | null) | undefined }
                  | undefined
                role?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/teams/:teamId/request': {
      $post:
        | {
            input: { param: { teamId: string } } & {
              json: {
                joinedFrom: {
                  commitId?: string | undefined
                  gitUserId?: string | number | undefined
                  gitUserLogin?: string | undefined
                  origin: 'import' | 'teams' | 'github' | 'gitlab' | 'bitbucket' | 'feedback'
                  repoId?: string | undefined
                  repoPath?: string | undefined
                }
              }
            }
            output: {
              accessRequestedAt?: number | undefined
              bitbucket: { login?: string | undefined } | null
              confirmed?: boolean | undefined
              github: { login?: string | undefined } | null
              gitlab: { login?: string | undefined } | null
              joinedFrom?:
                | {
                    commitId?: string | undefined
                    dsyncConnectedAt?: number | undefined
                    dsyncUserId?: string | undefined
                    gitUserId?: string | number | undefined
                    gitUserLogin?: string | undefined
                    idpUserId?: string | undefined
                    origin:
                      | 'import'
                      | 'teams'
                      | 'github'
                      | 'gitlab'
                      | 'bitbucket'
                      | 'feedback'
                      | 'mail'
                      | 'link'
                      | 'saml'
                      | 'dsync'
                    repoId?: string | undefined
                    repoPath?: string | undefined
                    ssoConnectedAt?: number | undefined
                    ssoUserId?: string | undefined
                  }
                | undefined
              teamName: string
              teamSlug: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamId: string } } & {
              json: {
                joinedFrom: {
                  commitId?: string | undefined
                  gitUserId?: string | number | undefined
                  gitUserLogin?: string | undefined
                  origin: 'import' | 'teams' | 'github' | 'gitlab' | 'bitbucket' | 'feedback'
                  repoId?: string | undefined
                  repoPath?: string | undefined
                }
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { teamId: string } } & {
              json: {
                joinedFrom: {
                  commitId?: string | undefined
                  gitUserId?: string | number | undefined
                  gitUserLogin?: string | undefined
                  origin: 'import' | 'teams' | 'github' | 'gitlab' | 'bitbucket' | 'feedback'
                  repoId?: string | undefined
                  repoPath?: string | undefined
                }
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { teamId: string } } & {
              json: {
                joinedFrom: {
                  commitId?: string | undefined
                  gitUserId?: string | number | undefined
                  gitUserLogin?: string | undefined
                  origin: 'import' | 'teams' | 'github' | 'gitlab' | 'bitbucket' | 'feedback'
                  repoId?: string | undefined
                  repoPath?: string | undefined
                }
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { teamId: string } } & {
              json: {
                joinedFrom: {
                  commitId?: string | undefined
                  gitUserId?: string | number | undefined
                  gitUserLogin?: string | undefined
                  origin: 'import' | 'teams' | 'github' | 'gitlab' | 'bitbucket' | 'feedback'
                  repoId?: string | undefined
                  repoPath?: string | undefined
                }
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/teams/:teamId/request/:userId': {
      $get:
        | {
            input: { param: { userId: string; teamId: string } }
            output: {
              accessRequestedAt: number
              bitbucket: { login?: string | undefined } | null
              confirmed: boolean
              github: { login?: string | undefined } | null
              gitlab: { login?: string | undefined } | null
              joinedFrom: {
                commitId?: string | undefined
                dsyncConnectedAt?: number | undefined
                dsyncUserId?: string | undefined
                gitUserId?: string | number | undefined
                gitUserLogin?: string | undefined
                idpUserId?: string | undefined
                origin:
                  | 'import'
                  | 'mail'
                  | 'link'
                  | 'teams'
                  | 'github'
                  | 'gitlab'
                  | 'bitbucket'
                  | 'saml'
                  | 'dsync'
                  | 'feedback'
                repoId?: string | undefined
                repoPath?: string | undefined
                ssoConnectedAt?: number | undefined
                ssoUserId?: string | undefined
              }
              teamName: string
              teamSlug: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string; teamId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { userId: string; teamId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { userId: string; teamId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/user': {
      $delete:
        | {
            input: { json: { reasons?: { description: string; slug: string }[] | undefined } }
            output: { email: string; id: string; message: string }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: { reasons?: { description: string; slug: string }[] | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: { reasons?: { description: string; slug: string }[] | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v1/webhooks': {
      $get:
        | {
            input: { query: { projectId?: string | undefined; teamId?: string | undefined } }
            output:
              | {
                  createdAt: number
                  events: (
                    | 'domain.created'
                    | 'deployment.created'
                    | 'deployment.error'
                    | 'deployment.canceled'
                    | 'deployment.succeeded'
                    | 'deployment.ready'
                    | 'deployment.check-rerequested'
                    | 'integration-configuration.permission-upgraded'
                    | 'integration-configuration.removed'
                    | 'integration-configuration.scope-change-confirmed'
                    | 'project.created'
                    | 'project.removed'
                    | 'deployment-checks-completed'
                    | 'deployment-ready'
                    | 'deployment-prepared'
                    | 'deployment-error'
                    | 'deployment-check-rerequested'
                    | 'deployment-canceled'
                    | 'project-created'
                    | 'project-removed'
                    | 'domain-created'
                    | 'deployment'
                    | 'integration-configuration-permission-updated'
                    | 'integration-configuration-removed'
                    | 'integration-configuration-scope-change-confirmed'
                  )[]
                  id: string
                  ownerId: string
                  projectIds?: string[] | undefined
                  projectsMetadata:
                    | {
                        framework?:
                          | 'blitzjs'
                          | 'nextjs'
                          | 'gatsby'
                          | 'remix'
                          | 'astro'
                          | 'hexo'
                          | 'eleventy'
                          | 'docusaurus-2'
                          | 'docusaurus'
                          | 'preact'
                          | 'solidstart'
                          | 'dojo'
                          | 'ember'
                          | 'vue'
                          | 'scully'
                          | 'ionic-angular'
                          | 'angular'
                          | 'polymer'
                          | 'svelte'
                          | 'sveltekit'
                          | 'sveltekit-1'
                          | 'ionic-react'
                          | 'create-react-app'
                          | 'gridsome'
                          | 'umijs'
                          | 'sapper'
                          | 'saber'
                          | 'stencil'
                          | 'nuxtjs'
                          | 'redwoodjs'
                          | 'hugo'
                          | 'jekyll'
                          | 'brunch'
                          | 'middleman'
                          | 'zola'
                          | 'hydrogen'
                          | 'vite'
                          | 'vitepress'
                          | 'vuepress'
                          | 'parcel'
                          | 'sanity'
                          | undefined
                        id: string
                        latestDeployment?: string | undefined
                        name: string
                      }[]
                    | null
                  updatedAt: number
                  url: string
                }[]
              | {
                  createdAt: number
                  events: (
                    | 'domain.created'
                    | 'deployment.created'
                    | 'deployment.error'
                    | 'deployment.canceled'
                    | 'deployment.succeeded'
                    | 'deployment.ready'
                    | 'deployment.check-rerequested'
                    | 'integration-configuration.permission-upgraded'
                    | 'integration-configuration.removed'
                    | 'integration-configuration.scope-change-confirmed'
                    | 'project.created'
                    | 'project.removed'
                    | 'deployment-checks-completed'
                    | 'deployment-ready'
                    | 'deployment-prepared'
                    | 'deployment-error'
                    | 'deployment-check-rerequested'
                    | 'deployment-canceled'
                    | 'project-created'
                    | 'project-removed'
                    | 'domain-created'
                    | 'deployment'
                    | 'integration-configuration-permission-updated'
                    | 'integration-configuration-removed'
                    | 'integration-configuration-scope-change-confirmed'
                  )[]
                  id: string
                  ownerId: string
                  projectIds?: string[] | undefined
                  updatedAt: number
                  url: string
                }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { projectId?: string | undefined; teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { projectId?: string | undefined; teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: { query: { teamId?: string | undefined } } & {
              json: {
                events: (
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.DomainCreate'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.DeploymentCreate'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.DeploymentErro'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.DeploymentCancele'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.DeploymentSucceede'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.DeploymentRead'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.DeploymentCheckRerequeste'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.IntegrationConfigurationPermissionUpgrade'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.IntegrationConfigurationRemove'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.IntegrationConfigurationScopeChangeConfirme'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.ProjectCreate'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.ProjectRemove'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyDeploymentChecksComplete'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyDeploymentRead'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyDeploymentPrepare'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyDeploymentErro'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyDeploymentCheckRerequeste'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyDeploymentCancele'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyProjectCreate'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyProjectRemove'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyDomainCreate'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyDeploymen'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyIntegrationConfigurationPermissionUpdate'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyIntegrationConfigurationRemove'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyIntegrationConfigurationScopeChangeConfirme'
                )[]
                projectIds?: string[] | undefined
                url: string
              }
            }
            output: {
              createdAt: number
              events: (
                | 'domain.created'
                | 'deployment.created'
                | 'deployment.error'
                | 'deployment.canceled'
                | 'deployment.succeeded'
                | 'deployment.ready'
                | 'deployment.check-rerequested'
                | 'integration-configuration.permission-upgraded'
                | 'integration-configuration.removed'
                | 'integration-configuration.scope-change-confirmed'
                | 'project.created'
                | 'project.removed'
                | 'deployment-checks-completed'
                | 'deployment-ready'
                | 'deployment-prepared'
                | 'deployment-error'
                | 'deployment-check-rerequested'
                | 'deployment-canceled'
                | 'project-created'
                | 'project-removed'
                | 'domain-created'
                | 'deployment'
                | 'integration-configuration-permission-updated'
                | 'integration-configuration-removed'
                | 'integration-configuration-scope-change-confirmed'
              )[]
              id: string
              ownerId: string
              projectIds?: string[] | undefined
              secret: string
              updatedAt: number
              url: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { teamId?: string | undefined } } & {
              json: {
                events: (
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.DomainCreate'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.DeploymentCreate'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.DeploymentErro'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.DeploymentCancele'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.DeploymentSucceede'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.DeploymentRead'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.DeploymentCheckRerequeste'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.IntegrationConfigurationPermissionUpgrade'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.IntegrationConfigurationRemove'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.IntegrationConfigurationScopeChangeConfirme'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.ProjectCreate'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.ProjectRemove'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyDeploymentChecksComplete'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyDeploymentRead'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyDeploymentPrepare'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyDeploymentErro'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyDeploymentCheckRerequeste'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyDeploymentCancele'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyProjectCreate'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyProjectRemove'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyDomainCreate'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyDeploymen'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyIntegrationConfigurationPermissionUpdate'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyIntegrationConfigurationRemove'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyIntegrationConfigurationScopeChangeConfirme'
                )[]
                projectIds?: string[] | undefined
                url: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { teamId?: string | undefined } } & {
              json: {
                events: (
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.DomainCreate'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.DeploymentCreate'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.DeploymentErro'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.DeploymentCancele'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.DeploymentSucceede'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.DeploymentRead'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.DeploymentCheckRerequeste'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.IntegrationConfigurationPermissionUpgrade'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.IntegrationConfigurationRemove'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.IntegrationConfigurationScopeChangeConfirme'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.ProjectCreate'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.ProjectRemove'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyDeploymentChecksComplete'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyDeploymentRead'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyDeploymentPrepare'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyDeploymentErro'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyDeploymentCheckRerequeste'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyDeploymentCancele'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyProjectCreate'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyProjectRemove'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyDomainCreate'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyDeploymen'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyIntegrationConfigurationPermissionUpdate'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyIntegrationConfigurationRemove'
                  | 'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyIntegrationConfigurationScopeChangeConfirme'
                )[]
                projectIds?: string[] | undefined
                url: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v1/webhooks/:id': {
      $delete:
        | {
            input: { param: { id: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { id: string } } & { query: { teamId?: string | undefined } }
            output: {
              createdAt: number
              events: (
                | 'domain.created'
                | 'deployment.created'
                | 'deployment.error'
                | 'deployment.canceled'
                | 'deployment.succeeded'
                | 'deployment.ready'
                | 'deployment.check-rerequested'
                | 'integration-configuration.permission-upgraded'
                | 'integration-configuration.removed'
                | 'integration-configuration.scope-change-confirmed'
                | 'project.created'
                | 'project.removed'
                | 'deployment-checks-completed'
                | 'deployment-ready'
                | 'deployment-prepared'
                | 'deployment-error'
                | 'deployment-check-rerequested'
                | 'deployment-canceled'
                | 'project-created'
                | 'project-removed'
                | 'domain-created'
                | 'deployment'
                | 'integration-configuration-permission-updated'
                | 'integration-configuration-removed'
                | 'integration-configuration-scope-change-confirmed'
              )[]
              id: string
              ownerId: string
              projectIds?: string[] | undefined
              updatedAt: number
              url: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v10/projects/:idOrName/env': {
      $post:
        | {
            input: { param: { idOrName: string } } & { query: { teamId?: string | undefined } } & {
              json:
                | {
                    gitBranch?: (string | null) | undefined
                    key: string
                    target: (
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Productio'
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Previe'
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Developmen'
                    )[]
                    type: 'system' | 'secret' | 'encrypted' | 'plain' | 'sensitive'
                    value: string
                  }
                | {
                    gitBranch?: (string | null) | undefined
                    key: string
                    target: (
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Productio'
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Previe'
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Developmen'
                    )[]
                    type: 'system' | 'secret' | 'encrypted' | 'plain' | 'sensitive'
                    value: string
                  }[]
            }
            output:
              | {
                  configurationId?: (string | null) | undefined
                  createdAt?: number | undefined
                  createdBy?: (string | null) | undefined
                  decrypted?: boolean | undefined
                  edgeConfigId?: (string | null) | undefined
                  edgeConfigTokenId?: (string | null) | undefined
                  gitBranch?: string | undefined
                  id?: string | undefined
                  key: string
                  target?:
                    | (
                        | 'production'
                        | 'preview'
                        | 'development'
                        | 'preview'
                        | 'development'
                        | 'preview'
                        | 'development'
                      )[]
                    | 'production'
                    | 'preview'
                    | 'development'
                    | 'preview'
                    | 'development'
                    | 'preview'
                    | 'development'
                    | undefined
                  type: 'secret' | 'system' | 'encrypted' | 'plain' | 'sensitive'
                  updatedAt?: number | undefined
                  updatedBy?: (string | null) | undefined
                  value: string
                }[]
              | {
                  configurationId?: (string | null) | undefined
                  createdAt?: number | undefined
                  createdBy?: (string | null) | undefined
                  decrypted?: boolean | undefined
                  edgeConfigId?: (string | null) | undefined
                  edgeConfigTokenId?: (string | null) | undefined
                  gitBranch?: string | undefined
                  id?: string | undefined
                  key?: string | undefined
                  system?: boolean | undefined
                  target?:
                    | (
                        | 'production'
                        | 'preview'
                        | 'development'
                        | 'preview'
                        | 'development'
                        | 'preview'
                        | 'development'
                      )[]
                    | 'production'
                    | 'preview'
                    | 'development'
                    | 'preview'
                    | 'development'
                    | 'preview'
                    | 'development'
                    | undefined
                  type?: 'secret' | 'system' | 'encrypted' | 'plain' | 'sensitive' | undefined
                  updatedAt?: number | undefined
                  updatedBy?: (string | null) | undefined
                  value?: string | undefined
                }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { idOrName: string } } & { query: { teamId?: string | undefined } } & {
              json:
                | {
                    gitBranch?: (string | null) | undefined
                    key: string
                    target: (
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Productio'
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Previe'
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Developmen'
                    )[]
                    type: 'system' | 'secret' | 'encrypted' | 'plain' | 'sensitive'
                    value: string
                  }
                | {
                    gitBranch?: (string | null) | undefined
                    key: string
                    target: (
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Productio'
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Previe'
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Developmen'
                    )[]
                    type: 'system' | 'secret' | 'encrypted' | 'plain' | 'sensitive'
                    value: string
                  }[]
            }
            output: {
              created:
                | {
                    configurationId?: (string | null) | undefined
                    createdAt?: number | undefined
                    createdBy?: (string | null) | undefined
                    decrypted?: boolean | undefined
                    edgeConfigId?: (string | null) | undefined
                    edgeConfigTokenId?: (string | null) | undefined
                    gitBranch?: string | undefined
                    id?: string | undefined
                    key?: string | undefined
                    system?: boolean | undefined
                    target?:
                      | (
                          | 'production'
                          | 'preview'
                          | 'development'
                          | 'preview'
                          | 'development'
                          | 'preview'
                          | 'development'
                        )[]
                      | 'production'
                      | 'preview'
                      | 'development'
                      | 'preview'
                      | 'development'
                      | 'preview'
                      | 'development'
                      | undefined
                    type?: 'secret' | 'system' | 'encrypted' | 'plain' | 'sensitive' | undefined
                    updatedAt?: number | undefined
                    updatedBy?: (string | null) | undefined
                    value?: string | undefined
                  }
                | {
                    configurationId?: (string | null) | undefined
                    createdAt?: number | undefined
                    createdBy?: (string | null) | undefined
                    decrypted?: boolean | undefined
                    edgeConfigId?: (string | null) | undefined
                    edgeConfigTokenId?: (string | null) | undefined
                    gitBranch?: string | undefined
                    id?: string | undefined
                    key?: string | undefined
                    system?: boolean | undefined
                    target?:
                      | (
                          | 'production'
                          | 'preview'
                          | 'development'
                          | 'preview'
                          | 'development'
                          | 'preview'
                          | 'development'
                        )[]
                      | 'production'
                      | 'preview'
                      | 'development'
                      | 'preview'
                      | 'development'
                      | 'preview'
                      | 'development'
                      | undefined
                    type?: 'secret' | 'system' | 'encrypted' | 'plain' | 'sensitive' | undefined
                    updatedAt?: number | undefined
                    updatedBy?: (string | null) | undefined
                    value?: string | undefined
                  }[]
              failed: {
                error: {
                  action?: string | undefined
                  code: string
                  envVarId?: string | undefined
                  envVarKey?: string | undefined
                  gitBranch?: string | undefined
                  key?: string | undefined
                  link?: string | undefined
                  message: string
                  project?: string | undefined
                  target?:
                    | (
                        | 'production'
                        | 'preview'
                        | 'development'
                        | 'preview'
                        | 'development'
                        | 'preview'
                        | 'development'
                      )[]
                    | 'production'
                    | 'preview'
                    | 'development'
                    | 'preview'
                    | 'development'
                    | 'preview'
                    | 'development'
                    | undefined
                  value?:
                    | string
                    | (
                        | 'production'
                        | 'preview'
                        | 'development'
                        | 'preview'
                        | 'development'
                        | 'preview'
                        | 'development'
                      )[]
                    | undefined
                }
              }[]
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { idOrName: string } } & { query: { teamId?: string | undefined } } & {
              json:
                | {
                    gitBranch?: (string | null) | undefined
                    key: string
                    target: (
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Productio'
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Previe'
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Developmen'
                    )[]
                    type: 'system' | 'secret' | 'encrypted' | 'plain' | 'sensitive'
                    value: string
                  }
                | {
                    gitBranch?: (string | null) | undefined
                    key: string
                    target: (
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Productio'
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Previe'
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Developmen'
                    )[]
                    type: 'system' | 'secret' | 'encrypted' | 'plain' | 'sensitive'
                    value: string
                  }[]
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { idOrName: string } } & { query: { teamId?: string | undefined } } & {
              json:
                | {
                    gitBranch?: (string | null) | undefined
                    key: string
                    target: (
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Productio'
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Previe'
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Developmen'
                    )[]
                    type: 'system' | 'secret' | 'encrypted' | 'plain' | 'sensitive'
                    value: string
                  }
                | {
                    gitBranch?: (string | null) | undefined
                    key: string
                    target: (
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Productio'
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Previe'
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Developmen'
                    )[]
                    type: 'system' | 'secret' | 'encrypted' | 'plain' | 'sensitive'
                    value: string
                  }[]
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { idOrName: string } } & { query: { teamId?: string | undefined } } & {
              json:
                | {
                    gitBranch?: (string | null) | undefined
                    key: string
                    target: (
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Productio'
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Previe'
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Developmen'
                    )[]
                    type: 'system' | 'secret' | 'encrypted' | 'plain' | 'sensitive'
                    value: string
                  }
                | {
                    gitBranch?: (string | null) | undefined
                    key: string
                    target: (
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Productio'
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Previe'
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Developmen'
                    )[]
                    type: 'system' | 'secret' | 'encrypted' | 'plain' | 'sensitive'
                    value: string
                  }[]
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { idOrName: string } } & { query: { teamId?: string | undefined } } & {
              json:
                | {
                    gitBranch?: (string | null) | undefined
                    key: string
                    target: (
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Productio'
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Previe'
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Developmen'
                    )[]
                    type: 'system' | 'secret' | 'encrypted' | 'plain' | 'sensitive'
                    value: string
                  }
                | {
                    gitBranch?: (string | null) | undefined
                    key: string
                    target: (
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Productio'
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Previe'
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Developmen'
                    )[]
                    type: 'system' | 'secret' | 'encrypted' | 'plain' | 'sensitive'
                    value: string
                  }[]
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { idOrName: string } } & { query: { teamId?: string | undefined } } & {
              json:
                | {
                    gitBranch?: (string | null) | undefined
                    key: string
                    target: (
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Productio'
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Previe'
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Developmen'
                    )[]
                    type: 'system' | 'secret' | 'encrypted' | 'plain' | 'sensitive'
                    value: string
                  }
                | {
                    gitBranch?: (string | null) | undefined
                    key: string
                    target: (
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Productio'
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Previe'
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Developmen'
                    )[]
                    type: 'system' | 'secret' | 'encrypted' | 'plain' | 'sensitive'
                    value: string
                  }[]
            }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/v11/deployments/:deploymentId/builds': {
      $get:
        | {
            input: { param: { deploymentId: string } } & { query: { teamId?: string | undefined } }
            output: {
              builds: {
                config?:
                  | {
                      distDir?: string | undefined
                      forceBuildIn?: string | undefined
                      reuseWorkPathFrom?: string | undefined
                      zeroConfig?: boolean | undefined
                    }
                  | undefined
                copiedFrom?: string | undefined
                createdAt?: number | undefined
                createdIn?: string | undefined
                deployedAt?: number | undefined
                deploymentId: string
                entrypoint: string
                fingerprint?: (string | null) | undefined
                id: string
                output: {
                  digest: string
                  edge?: ({ regions: string[] | null } | null) | undefined
                  lambda?:
                    | ({
                        deployedTo: string[]
                        functionName: string
                        layers?: string[] | undefined
                        memorySize?: number | undefined
                        timeout?: number | undefined
                      } | null)
                    | undefined
                  mode: number
                  path: string
                  size?: number | undefined
                  type?: 'lambda' | 'file' | 'edge' | undefined
                }[]
                readyState:
                  | 'BUILDING'
                  | 'ERROR'
                  | 'INITIALIZING'
                  | 'QUEUED'
                  | 'READY'
                  | 'CANCELED'
                  | 'UPLOADING'
                  | 'DEPLOYING'
                  | 'ARCHIVED'
                readyStateAt?: number | undefined
                scheduledAt?: (number | null) | undefined
                use?: string | undefined
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { deploymentId: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { deploymentId: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { deploymentId: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v12/deployments/:id/cancel': {
      $patch:
        | {
            input: { param: { id: string } } & { query: { teamId?: string | undefined } }
            output: {
              alias: string[]
              aliasAssigned: boolean
              aliasAssignedAt?: number | boolean | undefined
              aliasError?: ({ code: string; message: string } | null) | undefined
              aliasFinal?: (string | null) | undefined
              aliasWarning?:
                | ({
                    action?: string | undefined
                    code: string
                    link?: string | undefined
                    message: string
                  } | null)
                | undefined
              automaticAliases?: string[] | undefined
              bootedAt: number
              build: { env: string[] }
              buildErrorAt?: number | undefined
              buildingAt: number
              builds?:
                | {
                    config?: { [x: string]: string } | undefined
                    src?: string | undefined
                    use: string
                  }[]
                | undefined
              canceledAt?: number | undefined
              checksConclusion?: 'succeeded' | 'failed' | 'skipped' | 'canceled' | undefined
              checksState?: 'registered' | 'running' | 'completed' | undefined
              createdAt: number
              createdIn: string
              creator: { uid: string; username?: string | undefined }
              env: string[]
              errorCode?: string | undefined
              errorLink?: string | undefined
              errorMessage?: (string | null) | undefined
              errorStep?: string | undefined
              functions?:
                | ({
                    [x: string]: {
                      excludeFiles?: string | undefined
                      includeFiles?: string | undefined
                      maxDuration?: number | undefined
                      memory?: number | undefined
                      runtime?: string | undefined
                    }
                  } | null)
                | undefined
              gitRepo?:
                | {
                    defaultBranch: string
                    name: string
                    namespace: string
                    ownerType: 'user' | 'team'
                    path: string
                    private: boolean
                    projectId: number
                    type: 'gitlab'
                    url: string
                  }
                | {
                    defaultBranch: string
                    name: string
                    org: string
                    ownerType: 'user' | 'team'
                    path: string
                    private: boolean
                    repo: string
                    repoId: number
                    repoOwnerId: string
                    type: 'github'
                  }
                | {
                    defaultBranch: string
                    name: string
                    owner: string
                    ownerType: 'user' | 'team'
                    path: string
                    private: boolean
                    repoUuid: string
                    slug: string
                    type: 'bitbucket'
                    workspaceUuid: string
                  }
                | undefined
              gitSource?:
                | {
                    prId?: (number | null) | undefined
                    ref?: (string | null) | undefined
                    repoId: string | number
                    sha?: string | undefined
                    type: 'github'
                  }
                | {
                    org: string
                    prId?: (number | null) | undefined
                    ref?: (string | null) | undefined
                    repo: string
                    sha?: string | undefined
                    type: 'github'
                  }
                | {
                    prId?: (number | null) | undefined
                    projectId: string | number
                    ref?: (string | null) | undefined
                    sha?: string | undefined
                    type: 'gitlab'
                  }
                | {
                    prId?: (number | null) | undefined
                    ref?: (string | null) | undefined
                    repoUuid: string
                    sha?: string | undefined
                    type: 'bitbucket'
                    workspaceUuid?: string | undefined
                  }
                | {
                    owner: string
                    prId?: (number | null) | undefined
                    ref?: (string | null) | undefined
                    sha?: string | undefined
                    slug: string
                    type: 'bitbucket'
                  }
                | { gitUrl: string; ref: string; sha: string; type: 'custom' }
                | {
                    org?: string | undefined
                    ref: string
                    repo?: string | undefined
                    repoId: number
                    sha: string
                    type: 'github'
                  }
                | { projectId: number; ref: string; sha: string; type: 'gitlab' }
                | {
                    owner?: string | undefined
                    ref: string
                    repoUuid: string
                    sha: string
                    slug?: string | undefined
                    type: 'bitbucket'
                    workspaceUuid: string
                  }
                | undefined
              id: string
              inspectorUrl: string | null
              isInConcurrentBuildsQueue: boolean
              lambdas?:
                | {
                    createdAt?: number | undefined
                    entrypoint?: (string | null) | undefined
                    id: string
                    output: { functionName: string; path: string }[]
                    readyState?: 'INITIALIZING' | 'BUILDING' | 'READY' | 'ERROR' | undefined
                    readyStateAt?: number | undefined
                  }[]
                | undefined
              meta: { [x: string]: string }
              monorepoManager?: (string | null) | undefined
              name: string
              ownerId: string
              plan: 'hobby' | 'enterprise' | 'pro' | 'oss'
              previewCommentsEnabled?: boolean | undefined
              projectId: string
              public: boolean
              readyState: 'INITIALIZING' | 'BUILDING' | 'READY' | 'ERROR' | 'QUEUED' | 'CANCELED'
              regions: string[]
              routes:
                | (
                    | {
                        caseSensitive?: boolean | undefined
                        check?: boolean | undefined
                        continue?: boolean | undefined
                        dest?: string | undefined
                        has?:
                          | (
                              | { type: 'host'; value: string }
                              | {
                                  key: string
                                  type: 'header' | 'cookie' | 'query'
                                  value?: string | undefined
                                }
                            )[]
                          | undefined
                        headers?: { [x: string]: string } | undefined
                        important?: boolean | undefined
                        locale?:
                          | {
                              cookie?: string | undefined
                              redirect?: { [x: string]: string } | undefined
                            }
                          | undefined
                        methods?: string[] | undefined
                        middleware?: number | undefined
                        middlewarePath?: string | undefined
                        middlewareRawSrc?: string[] | undefined
                        missing?:
                          | (
                              | { type: 'host'; value: string }
                              | {
                                  key: string
                                  type: 'header' | 'cookie' | 'query'
                                  value?: string | undefined
                                }
                            )[]
                          | undefined
                        override?: boolean | undefined
                        src: string
                        status?: number | undefined
                      }
                    | {
                        dest?: string | undefined
                        handle: 'filesystem' | 'hit' | 'miss' | 'rewrite' | 'error' | 'resource'
                        src?: string | undefined
                        status?: number | undefined
                      }
                    | { continue: boolean; middleware: 0; src: string }
                  )[]
                | null
              source?: 'cli' | 'git' | 'import' | 'import/repo' | 'clone/repo' | undefined
              target?: 'staging' | 'production' | undefined
              team?: { id: string; name: string; slug: string } | undefined
              type: 'LAMBDAS'
              url: string
              userAliases?: string[] | undefined
              version: 2
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v13/deployments': {
      $post:
        | {
            input: {
              query: {
                forceNew?: '0' | '1' | undefined
                skipAutoDetectionConfirmation?: '0' | '1' | undefined
                teamId?: string | undefined
              }
            } & {
              json: {
                $schema?: string | undefined
                alias?: string[] | undefined
                build?: { env?: { [x: string]: string } | undefined } | undefined
                buildCommand?: (string | null) | undefined
                builds?:
                  | {
                      config?: { [x: string]: unknown } | undefined
                      src?: string | undefined
                      use: string
                    }[]
                  | undefined
                cleanUrls?: boolean | undefined
                crons?: { path: string; schedule: string }[] | undefined
                deploymentId?: string | undefined
                devCommand?: (string | null) | undefined
                env?: { [x: string]: string } | undefined
                files?:
                  | (
                      | { data: string; encoding?: 'base64' | 'utf-8' | undefined; file: string }
                      | { file: string; sha?: string | undefined; size?: number | undefined }
                    )[]
                  | undefined
                framework?:
                  | null
                  | 'blitzjs'
                  | 'nextjs'
                  | 'gatsby'
                  | 'remix'
                  | 'astro'
                  | 'hexo'
                  | 'eleventy'
                  | 'docusaurus-2'
                  | 'docusaurus'
                  | 'preact'
                  | 'solidstart'
                  | 'dojo'
                  | 'ember'
                  | 'vue'
                  | 'scully'
                  | 'ionic-angular'
                  | 'angular'
                  | 'polymer'
                  | 'svelte'
                  | 'sveltekit'
                  | 'sveltekit-1'
                  | 'ionic-react'
                  | 'create-react-app'
                  | 'gridsome'
                  | 'umijs'
                  | 'sapper'
                  | 'saber'
                  | 'stencil'
                  | 'nuxtjs'
                  | 'redwoodjs'
                  | 'hugo'
                  | 'jekyll'
                  | 'brunch'
                  | 'middleman'
                  | 'zola'
                  | 'hydrogen'
                  | 'vite'
                  | 'vitepress'
                  | 'vuepress'
                  | 'parcel'
                  | 'sanity'
                  | undefined
                functions?:
                  | {
                      [x: string]: {
                        excludeFiles?: string | undefined
                        includeFiles?: string | undefined
                        maxDuration?: number | undefined
                        memory?: number | undefined
                        runtime?: string | undefined
                      }
                    }
                  | undefined
                git?:
                  | { deploymentEnabled?: boolean | { [x: string]: boolean } | undefined }
                  | undefined
                gitMetadata?:
                  | {
                      commitAuthorName?: string | undefined
                      commitMessage?: string | undefined
                      commitRef?: string | undefined
                      commitSha?: string | undefined
                      dirty?: boolean | undefined
                      remoteUrl: string
                    }
                  | undefined
                gitSource?:
                  | {
                      ref: string
                      repoId: number | string
                      sha?: string | undefined
                      type: 'github'
                    }
                  | {
                      org: string
                      ref: string
                      repo: string
                      sha?: string | undefined
                      type: 'github'
                    }
                  | {
                      projectId: number | string
                      ref: string
                      sha?: string | undefined
                      type: 'gitlab'
                    }
                  | {
                      ref: string
                      repoUuid: string
                      sha?: string | undefined
                      type: 'bitbucket'
                      workspaceUuid?: string | undefined
                    }
                  | {
                      owner: string
                      ref: string
                      sha?: string | undefined
                      slug: string
                      type: 'bitbucket'
                    }
                  | undefined
                headers?:
                  | {
                      has?:
                        | (
                            | { type: 'host'; value: string }
                            | {
                                key: string
                                type: 'header' | 'cookie' | 'query'
                                value?: string | undefined
                              }
                          )[]
                        | undefined
                      headers: { key: string; value: string }[]
                      missing?:
                        | (
                            | { type: 'host'; value: string }
                            | {
                                key: string
                                type: 'header' | 'cookie' | 'query'
                                value?: string | undefined
                              }
                          )[]
                        | undefined
                      source: string
                    }[]
                  | undefined
                ignoreCommand?: (string | null) | undefined
                installCommand?: (string | null) | undefined
                meta?: { [x: string]: string } | undefined
                monorepoManager?: (string | null) | undefined
                name: string
                outputDirectory?: (string | null) | undefined
                project?: string | undefined
                projectSettings?:
                  | {
                      buildCommand?: (string | null) | undefined
                      commandForIgnoringBuildStep?: (string | null) | undefined
                      devCommand?: (string | null) | undefined
                      framework?:
                        | null
                        | 'blitzjs'
                        | 'nextjs'
                        | 'gatsby'
                        | 'remix'
                        | 'astro'
                        | 'hexo'
                        | 'eleventy'
                        | 'docusaurus-2'
                        | 'docusaurus'
                        | 'preact'
                        | 'solidstart'
                        | 'dojo'
                        | 'ember'
                        | 'vue'
                        | 'scully'
                        | 'ionic-angular'
                        | 'angular'
                        | 'polymer'
                        | 'svelte'
                        | 'sveltekit'
                        | 'sveltekit-1'
                        | 'ionic-react'
                        | 'create-react-app'
                        | 'gridsome'
                        | 'umijs'
                        | 'sapper'
                        | 'saber'
                        | 'stencil'
                        | 'nuxtjs'
                        | 'redwoodjs'
                        | 'hugo'
                        | 'jekyll'
                        | 'brunch'
                        | 'middleman'
                        | 'zola'
                        | 'hydrogen'
                        | 'vite'
                        | 'vitepress'
                        | 'vuepress'
                        | 'parcel'
                        | 'sanity'
                        | undefined
                      installCommand?: (string | null) | undefined
                      outputDirectory?: (string | null) | undefined
                      rootDirectory?: (string | null) | undefined
                      serverlessFunctionRegion?: (string | null) | undefined
                      skipGitConnectDuringLink?: boolean | undefined
                      sourceFilesOutsideRootDirectory?: boolean | undefined
                    }
                  | undefined
                public?: boolean | undefined
                redirects?:
                  | {
                      destination: string
                      has?:
                        | (
                            | { type: 'host'; value: string }
                            | {
                                key: string
                                type: 'header' | 'cookie' | 'query'
                                value?: string | undefined
                              }
                          )[]
                        | undefined
                      missing?:
                        | (
                            | { type: 'host'; value: string }
                            | {
                                key: string
                                type: 'header' | 'cookie' | 'query'
                                value?: string | undefined
                              }
                          )[]
                        | undefined
                      permanent?: boolean | undefined
                      source: string
                    }[]
                  | undefined
                regions?: string[] | undefined
                rewrites?:
                  | {
                      destination: string
                      has?:
                        | (
                            | { type: 'host'; value: string }
                            | {
                                key: string
                                type: 'header' | 'cookie' | 'query'
                                value?: string | undefined
                              }
                          )[]
                        | undefined
                      missing?:
                        | (
                            | { type: 'host'; value: string }
                            | {
                                key: string
                                type: 'header' | 'cookie' | 'query'
                                value?: string | undefined
                              }
                          )[]
                        | undefined
                      source: string
                    }[]
                  | undefined
                routes?:
                  | (
                      | {
                          caseSensitive?: boolean | undefined
                          check?: boolean | undefined
                          continue?: boolean | undefined
                          dest?: string | undefined
                          has?:
                            | (
                                | { type: 'host'; value: string }
                                | {
                                    key: string
                                    type: 'header' | 'cookie' | 'query'
                                    value?: string | undefined
                                  }
                              )[]
                            | undefined
                          headers?: { [x: string]: string } | undefined
                          important?: boolean | undefined
                          locale?:
                            | {
                                cookie?: string | undefined
                                default?: string | undefined
                                path?: string | undefined
                                redirect?: { [x: string]: string } | undefined
                                value?: string | undefined
                              }
                            | undefined
                          methods?: string[] | undefined
                          middleware?: number | undefined
                          middlewarePath?: string | undefined
                          middlewareRawSrc?: string[] | undefined
                          missing?:
                            | (
                                | { type: 'host'; value: string }
                                | {
                                    key: string
                                    type: 'header' | 'cookie' | 'query'
                                    value?: string | undefined
                                  }
                              )[]
                            | undefined
                          override?: boolean | undefined
                          src: string
                          status?: number | undefined
                          user?: boolean | undefined
                        }
                      | { handle: 'error' | 'filesystem' | 'hit' | 'miss' | 'resource' | 'rewrite' }
                    )[]
                  | undefined
                target?: 'staging' | 'production' | undefined
                trailingSlash?: boolean | undefined
                withLatestCommit?: boolean | undefined
              }
            }
            output: {
              alias: string[]
              aliasAssigned: boolean
              aliasAssignedAt?: number | boolean | undefined
              aliasError?: ({ code: string; message: string } | null) | undefined
              aliasFinal?: (string | null) | undefined
              aliasWarning?:
                | ({
                    action?: string | undefined
                    code: string
                    link?: string | undefined
                    message: string
                  } | null)
                | undefined
              automaticAliases?: string[] | undefined
              bootedAt: number
              build: { env: string[] }
              buildErrorAt?: number | undefined
              buildingAt: number
              builds?: { [x: string]: unknown }[] | undefined
              canceledAt?: number | undefined
              checksConclusion?: 'succeeded' | 'failed' | 'skipped' | 'canceled' | undefined
              checksState?: 'registered' | 'running' | 'completed' | undefined
              createdAt: number
              createdIn: string
              creator: { uid: string; username?: string | undefined }
              env: string[]
              errorCode?: string | undefined
              errorLink?: string | undefined
              errorMessage?: (string | null) | undefined
              errorStep?: string | undefined
              functions?:
                | ({
                    [x: string]: {
                      excludeFiles?: string | undefined
                      includeFiles?: string | undefined
                      maxDuration?: number | undefined
                      memory?: number | undefined
                      runtime?: string | undefined
                    }
                  } | null)
                | undefined
              gitRepo?:
                | {
                    defaultBranch: string
                    name: string
                    namespace: string
                    ownerType: 'team' | 'user'
                    path: string
                    private: boolean
                    projectId: number
                    type: 'gitlab'
                    url: string
                  }
                | {
                    defaultBranch: string
                    name: string
                    org: string
                    ownerType: 'team' | 'user'
                    path: string
                    private: boolean
                    repo: string
                    repoId: number
                    repoOwnerId: string
                    type: 'github'
                  }
                | {
                    defaultBranch: string
                    name: string
                    owner: string
                    ownerType: 'team' | 'user'
                    path: string
                    private: boolean
                    repoUuid: string
                    slug: string
                    type: 'bitbucket'
                    workspaceUuid: string
                  }
                | undefined
              gitSource?:
                | {
                    prId?: (number | null) | undefined
                    ref?: (string | null) | undefined
                    repoId: string | number
                    sha?: string | undefined
                    type: 'github'
                  }
                | {
                    org: string
                    prId?: (number | null) | undefined
                    ref?: (string | null) | undefined
                    repo: string
                    sha?: string | undefined
                    type: 'github'
                  }
                | {
                    prId?: (number | null) | undefined
                    projectId: string | number
                    ref?: (string | null) | undefined
                    sha?: string | undefined
                    type: 'gitlab'
                  }
                | {
                    prId?: (number | null) | undefined
                    ref?: (string | null) | undefined
                    repoUuid: string
                    sha?: string | undefined
                    type: 'bitbucket'
                    workspaceUuid?: string | undefined
                  }
                | {
                    owner: string
                    prId?: (number | null) | undefined
                    ref?: (string | null) | undefined
                    sha?: string | undefined
                    slug: string
                    type: 'bitbucket'
                  }
                | { gitUrl: string; ref: string; sha: string; type: 'custom' }
                | {
                    org?: string | undefined
                    ref: string
                    repo?: string | undefined
                    repoId: number
                    sha: string
                    type: 'github'
                  }
                | { projectId: number; ref: string; sha: string; type: 'gitlab' }
                | {
                    owner?: string | undefined
                    ref: string
                    repoUuid: string
                    sha: string
                    slug?: string | undefined
                    type: 'bitbucket'
                    workspaceUuid: string
                  }
                | undefined
              id: string
              inspectorUrl: string | null
              isInConcurrentBuildsQueue: boolean
              lambdas?:
                | {
                    createdAt?: number | undefined
                    entrypoint?: (string | null) | undefined
                    id: string
                    output: { functionName: string; path: string }[]
                    readyState?: 'BUILDING' | 'ERROR' | 'INITIALIZING' | 'READY' | undefined
                    readyStateAt?: number | undefined
                  }[]
                | undefined
              meta: { [x: string]: string }
              monorepoManager?: (string | null) | undefined
              name: string
              ownerId: string
              plan: 'hobby' | 'enterprise' | 'pro' | 'oss'
              previewCommentsEnabled?: boolean | undefined
              projectId: string
              public: boolean
              readyState: 'QUEUED' | 'BUILDING' | 'ERROR' | 'INITIALIZING' | 'READY' | 'CANCELED'
              regions: string[]
              routes:
                | (
                    | {
                        caseSensitive?: boolean | undefined
                        check?: boolean | undefined
                        continue?: boolean | undefined
                        dest?: string | undefined
                        has?:
                          | (
                              | { type: 'host'; value: string }
                              | {
                                  key: string
                                  type: 'header' | 'cookie' | 'query'
                                  value?: string | undefined
                                }
                            )[]
                          | undefined
                        headers?: { [x: string]: string } | undefined
                        important?: boolean | undefined
                        locale?:
                          | {
                              cookie?: string | undefined
                              redirect?: { [x: string]: string } | undefined
                            }
                          | undefined
                        methods?: string[] | undefined
                        middleware?: number | undefined
                        middlewarePath?: string | undefined
                        middlewareRawSrc?: string[] | undefined
                        missing?:
                          | (
                              | { type: 'host'; value: string }
                              | {
                                  key: string
                                  type: 'header' | 'cookie' | 'query'
                                  value?: string | undefined
                                }
                            )[]
                          | undefined
                        override?: boolean | undefined
                        src: string
                        status?: number | undefined
                      }
                    | {
                        dest?: string | undefined
                        handle: 'filesystem' | 'hit' | 'miss' | 'rewrite' | 'error' | 'resource'
                        src?: string | undefined
                        status?: number | undefined
                      }
                    | { continue: boolean; middleware: 0; src: string }
                  )[]
                | null
              source?: 'cli' | 'git' | 'import' | 'import/repo' | 'clone/repo' | undefined
              target?: 'production' | 'staging' | undefined
              team?: { id: string; name: string; slug: string } | undefined
              type: 'LAMBDAS'
              url: string
              userAliases?: string[] | undefined
              version: 2
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                forceNew?: '0' | '1' | undefined
                skipAutoDetectionConfirmation?: '0' | '1' | undefined
                teamId?: string | undefined
              }
            } & {
              json: {
                $schema?: string | undefined
                alias?: string[] | undefined
                build?: { env?: { [x: string]: string } | undefined } | undefined
                buildCommand?: (string | null) | undefined
                builds?:
                  | {
                      config?: { [x: string]: unknown } | undefined
                      src?: string | undefined
                      use: string
                    }[]
                  | undefined
                cleanUrls?: boolean | undefined
                crons?: { path: string; schedule: string }[] | undefined
                deploymentId?: string | undefined
                devCommand?: (string | null) | undefined
                env?: { [x: string]: string } | undefined
                files?:
                  | (
                      | { data: string; encoding?: 'base64' | 'utf-8' | undefined; file: string }
                      | { file: string; sha?: string | undefined; size?: number | undefined }
                    )[]
                  | undefined
                framework?:
                  | null
                  | 'blitzjs'
                  | 'nextjs'
                  | 'gatsby'
                  | 'remix'
                  | 'astro'
                  | 'hexo'
                  | 'eleventy'
                  | 'docusaurus-2'
                  | 'docusaurus'
                  | 'preact'
                  | 'solidstart'
                  | 'dojo'
                  | 'ember'
                  | 'vue'
                  | 'scully'
                  | 'ionic-angular'
                  | 'angular'
                  | 'polymer'
                  | 'svelte'
                  | 'sveltekit'
                  | 'sveltekit-1'
                  | 'ionic-react'
                  | 'create-react-app'
                  | 'gridsome'
                  | 'umijs'
                  | 'sapper'
                  | 'saber'
                  | 'stencil'
                  | 'nuxtjs'
                  | 'redwoodjs'
                  | 'hugo'
                  | 'jekyll'
                  | 'brunch'
                  | 'middleman'
                  | 'zola'
                  | 'hydrogen'
                  | 'vite'
                  | 'vitepress'
                  | 'vuepress'
                  | 'parcel'
                  | 'sanity'
                  | undefined
                functions?:
                  | {
                      [x: string]: {
                        excludeFiles?: string | undefined
                        includeFiles?: string | undefined
                        maxDuration?: number | undefined
                        memory?: number | undefined
                        runtime?: string | undefined
                      }
                    }
                  | undefined
                git?:
                  | { deploymentEnabled?: boolean | { [x: string]: boolean } | undefined }
                  | undefined
                gitMetadata?:
                  | {
                      commitAuthorName?: string | undefined
                      commitMessage?: string | undefined
                      commitRef?: string | undefined
                      commitSha?: string | undefined
                      dirty?: boolean | undefined
                      remoteUrl: string
                    }
                  | undefined
                gitSource?:
                  | {
                      ref: string
                      repoId: number | string
                      sha?: string | undefined
                      type: 'github'
                    }
                  | {
                      org: string
                      ref: string
                      repo: string
                      sha?: string | undefined
                      type: 'github'
                    }
                  | {
                      projectId: number | string
                      ref: string
                      sha?: string | undefined
                      type: 'gitlab'
                    }
                  | {
                      ref: string
                      repoUuid: string
                      sha?: string | undefined
                      type: 'bitbucket'
                      workspaceUuid?: string | undefined
                    }
                  | {
                      owner: string
                      ref: string
                      sha?: string | undefined
                      slug: string
                      type: 'bitbucket'
                    }
                  | undefined
                headers?:
                  | {
                      has?:
                        | (
                            | { type: 'host'; value: string }
                            | {
                                key: string
                                type: 'header' | 'cookie' | 'query'
                                value?: string | undefined
                              }
                          )[]
                        | undefined
                      headers: { key: string; value: string }[]
                      missing?:
                        | (
                            | { type: 'host'; value: string }
                            | {
                                key: string
                                type: 'header' | 'cookie' | 'query'
                                value?: string | undefined
                              }
                          )[]
                        | undefined
                      source: string
                    }[]
                  | undefined
                ignoreCommand?: (string | null) | undefined
                installCommand?: (string | null) | undefined
                meta?: { [x: string]: string } | undefined
                monorepoManager?: (string | null) | undefined
                name: string
                outputDirectory?: (string | null) | undefined
                project?: string | undefined
                projectSettings?:
                  | {
                      buildCommand?: (string | null) | undefined
                      commandForIgnoringBuildStep?: (string | null) | undefined
                      devCommand?: (string | null) | undefined
                      framework?:
                        | null
                        | 'blitzjs'
                        | 'nextjs'
                        | 'gatsby'
                        | 'remix'
                        | 'astro'
                        | 'hexo'
                        | 'eleventy'
                        | 'docusaurus-2'
                        | 'docusaurus'
                        | 'preact'
                        | 'solidstart'
                        | 'dojo'
                        | 'ember'
                        | 'vue'
                        | 'scully'
                        | 'ionic-angular'
                        | 'angular'
                        | 'polymer'
                        | 'svelte'
                        | 'sveltekit'
                        | 'sveltekit-1'
                        | 'ionic-react'
                        | 'create-react-app'
                        | 'gridsome'
                        | 'umijs'
                        | 'sapper'
                        | 'saber'
                        | 'stencil'
                        | 'nuxtjs'
                        | 'redwoodjs'
                        | 'hugo'
                        | 'jekyll'
                        | 'brunch'
                        | 'middleman'
                        | 'zola'
                        | 'hydrogen'
                        | 'vite'
                        | 'vitepress'
                        | 'vuepress'
                        | 'parcel'
                        | 'sanity'
                        | undefined
                      installCommand?: (string | null) | undefined
                      outputDirectory?: (string | null) | undefined
                      rootDirectory?: (string | null) | undefined
                      serverlessFunctionRegion?: (string | null) | undefined
                      skipGitConnectDuringLink?: boolean | undefined
                      sourceFilesOutsideRootDirectory?: boolean | undefined
                    }
                  | undefined
                public?: boolean | undefined
                redirects?:
                  | {
                      destination: string
                      has?:
                        | (
                            | { type: 'host'; value: string }
                            | {
                                key: string
                                type: 'header' | 'cookie' | 'query'
                                value?: string | undefined
                              }
                          )[]
                        | undefined
                      missing?:
                        | (
                            | { type: 'host'; value: string }
                            | {
                                key: string
                                type: 'header' | 'cookie' | 'query'
                                value?: string | undefined
                              }
                          )[]
                        | undefined
                      permanent?: boolean | undefined
                      source: string
                    }[]
                  | undefined
                regions?: string[] | undefined
                rewrites?:
                  | {
                      destination: string
                      has?:
                        | (
                            | { type: 'host'; value: string }
                            | {
                                key: string
                                type: 'header' | 'cookie' | 'query'
                                value?: string | undefined
                              }
                          )[]
                        | undefined
                      missing?:
                        | (
                            | { type: 'host'; value: string }
                            | {
                                key: string
                                type: 'header' | 'cookie' | 'query'
                                value?: string | undefined
                              }
                          )[]
                        | undefined
                      source: string
                    }[]
                  | undefined
                routes?:
                  | (
                      | {
                          caseSensitive?: boolean | undefined
                          check?: boolean | undefined
                          continue?: boolean | undefined
                          dest?: string | undefined
                          has?:
                            | (
                                | { type: 'host'; value: string }
                                | {
                                    key: string
                                    type: 'header' | 'cookie' | 'query'
                                    value?: string | undefined
                                  }
                              )[]
                            | undefined
                          headers?: { [x: string]: string } | undefined
                          important?: boolean | undefined
                          locale?:
                            | {
                                cookie?: string | undefined
                                default?: string | undefined
                                path?: string | undefined
                                redirect?: { [x: string]: string } | undefined
                                value?: string | undefined
                              }
                            | undefined
                          methods?: string[] | undefined
                          middleware?: number | undefined
                          middlewarePath?: string | undefined
                          middlewareRawSrc?: string[] | undefined
                          missing?:
                            | (
                                | { type: 'host'; value: string }
                                | {
                                    key: string
                                    type: 'header' | 'cookie' | 'query'
                                    value?: string | undefined
                                  }
                              )[]
                            | undefined
                          override?: boolean | undefined
                          src: string
                          status?: number | undefined
                          user?: boolean | undefined
                        }
                      | { handle: 'error' | 'filesystem' | 'hit' | 'miss' | 'resource' | 'rewrite' }
                    )[]
                  | undefined
                target?: 'staging' | 'production' | undefined
                trailingSlash?: boolean | undefined
                withLatestCommit?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                forceNew?: '0' | '1' | undefined
                skipAutoDetectionConfirmation?: '0' | '1' | undefined
                teamId?: string | undefined
              }
            } & {
              json: {
                $schema?: string | undefined
                alias?: string[] | undefined
                build?: { env?: { [x: string]: string } | undefined } | undefined
                buildCommand?: (string | null) | undefined
                builds?:
                  | {
                      config?: { [x: string]: unknown } | undefined
                      src?: string | undefined
                      use: string
                    }[]
                  | undefined
                cleanUrls?: boolean | undefined
                crons?: { path: string; schedule: string }[] | undefined
                deploymentId?: string | undefined
                devCommand?: (string | null) | undefined
                env?: { [x: string]: string } | undefined
                files?:
                  | (
                      | { data: string; encoding?: 'base64' | 'utf-8' | undefined; file: string }
                      | { file: string; sha?: string | undefined; size?: number | undefined }
                    )[]
                  | undefined
                framework?:
                  | null
                  | 'blitzjs'
                  | 'nextjs'
                  | 'gatsby'
                  | 'remix'
                  | 'astro'
                  | 'hexo'
                  | 'eleventy'
                  | 'docusaurus-2'
                  | 'docusaurus'
                  | 'preact'
                  | 'solidstart'
                  | 'dojo'
                  | 'ember'
                  | 'vue'
                  | 'scully'
                  | 'ionic-angular'
                  | 'angular'
                  | 'polymer'
                  | 'svelte'
                  | 'sveltekit'
                  | 'sveltekit-1'
                  | 'ionic-react'
                  | 'create-react-app'
                  | 'gridsome'
                  | 'umijs'
                  | 'sapper'
                  | 'saber'
                  | 'stencil'
                  | 'nuxtjs'
                  | 'redwoodjs'
                  | 'hugo'
                  | 'jekyll'
                  | 'brunch'
                  | 'middleman'
                  | 'zola'
                  | 'hydrogen'
                  | 'vite'
                  | 'vitepress'
                  | 'vuepress'
                  | 'parcel'
                  | 'sanity'
                  | undefined
                functions?:
                  | {
                      [x: string]: {
                        excludeFiles?: string | undefined
                        includeFiles?: string | undefined
                        maxDuration?: number | undefined
                        memory?: number | undefined
                        runtime?: string | undefined
                      }
                    }
                  | undefined
                git?:
                  | { deploymentEnabled?: boolean | { [x: string]: boolean } | undefined }
                  | undefined
                gitMetadata?:
                  | {
                      commitAuthorName?: string | undefined
                      commitMessage?: string | undefined
                      commitRef?: string | undefined
                      commitSha?: string | undefined
                      dirty?: boolean | undefined
                      remoteUrl: string
                    }
                  | undefined
                gitSource?:
                  | {
                      ref: string
                      repoId: number | string
                      sha?: string | undefined
                      type: 'github'
                    }
                  | {
                      org: string
                      ref: string
                      repo: string
                      sha?: string | undefined
                      type: 'github'
                    }
                  | {
                      projectId: number | string
                      ref: string
                      sha?: string | undefined
                      type: 'gitlab'
                    }
                  | {
                      ref: string
                      repoUuid: string
                      sha?: string | undefined
                      type: 'bitbucket'
                      workspaceUuid?: string | undefined
                    }
                  | {
                      owner: string
                      ref: string
                      sha?: string | undefined
                      slug: string
                      type: 'bitbucket'
                    }
                  | undefined
                headers?:
                  | {
                      has?:
                        | (
                            | { type: 'host'; value: string }
                            | {
                                key: string
                                type: 'header' | 'cookie' | 'query'
                                value?: string | undefined
                              }
                          )[]
                        | undefined
                      headers: { key: string; value: string }[]
                      missing?:
                        | (
                            | { type: 'host'; value: string }
                            | {
                                key: string
                                type: 'header' | 'cookie' | 'query'
                                value?: string | undefined
                              }
                          )[]
                        | undefined
                      source: string
                    }[]
                  | undefined
                ignoreCommand?: (string | null) | undefined
                installCommand?: (string | null) | undefined
                meta?: { [x: string]: string } | undefined
                monorepoManager?: (string | null) | undefined
                name: string
                outputDirectory?: (string | null) | undefined
                project?: string | undefined
                projectSettings?:
                  | {
                      buildCommand?: (string | null) | undefined
                      commandForIgnoringBuildStep?: (string | null) | undefined
                      devCommand?: (string | null) | undefined
                      framework?:
                        | null
                        | 'blitzjs'
                        | 'nextjs'
                        | 'gatsby'
                        | 'remix'
                        | 'astro'
                        | 'hexo'
                        | 'eleventy'
                        | 'docusaurus-2'
                        | 'docusaurus'
                        | 'preact'
                        | 'solidstart'
                        | 'dojo'
                        | 'ember'
                        | 'vue'
                        | 'scully'
                        | 'ionic-angular'
                        | 'angular'
                        | 'polymer'
                        | 'svelte'
                        | 'sveltekit'
                        | 'sveltekit-1'
                        | 'ionic-react'
                        | 'create-react-app'
                        | 'gridsome'
                        | 'umijs'
                        | 'sapper'
                        | 'saber'
                        | 'stencil'
                        | 'nuxtjs'
                        | 'redwoodjs'
                        | 'hugo'
                        | 'jekyll'
                        | 'brunch'
                        | 'middleman'
                        | 'zola'
                        | 'hydrogen'
                        | 'vite'
                        | 'vitepress'
                        | 'vuepress'
                        | 'parcel'
                        | 'sanity'
                        | undefined
                      installCommand?: (string | null) | undefined
                      outputDirectory?: (string | null) | undefined
                      rootDirectory?: (string | null) | undefined
                      serverlessFunctionRegion?: (string | null) | undefined
                      skipGitConnectDuringLink?: boolean | undefined
                      sourceFilesOutsideRootDirectory?: boolean | undefined
                    }
                  | undefined
                public?: boolean | undefined
                redirects?:
                  | {
                      destination: string
                      has?:
                        | (
                            | { type: 'host'; value: string }
                            | {
                                key: string
                                type: 'header' | 'cookie' | 'query'
                                value?: string | undefined
                              }
                          )[]
                        | undefined
                      missing?:
                        | (
                            | { type: 'host'; value: string }
                            | {
                                key: string
                                type: 'header' | 'cookie' | 'query'
                                value?: string | undefined
                              }
                          )[]
                        | undefined
                      permanent?: boolean | undefined
                      source: string
                    }[]
                  | undefined
                regions?: string[] | undefined
                rewrites?:
                  | {
                      destination: string
                      has?:
                        | (
                            | { type: 'host'; value: string }
                            | {
                                key: string
                                type: 'header' | 'cookie' | 'query'
                                value?: string | undefined
                              }
                          )[]
                        | undefined
                      missing?:
                        | (
                            | { type: 'host'; value: string }
                            | {
                                key: string
                                type: 'header' | 'cookie' | 'query'
                                value?: string | undefined
                              }
                          )[]
                        | undefined
                      source: string
                    }[]
                  | undefined
                routes?:
                  | (
                      | {
                          caseSensitive?: boolean | undefined
                          check?: boolean | undefined
                          continue?: boolean | undefined
                          dest?: string | undefined
                          has?:
                            | (
                                | { type: 'host'; value: string }
                                | {
                                    key: string
                                    type: 'header' | 'cookie' | 'query'
                                    value?: string | undefined
                                  }
                              )[]
                            | undefined
                          headers?: { [x: string]: string } | undefined
                          important?: boolean | undefined
                          locale?:
                            | {
                                cookie?: string | undefined
                                default?: string | undefined
                                path?: string | undefined
                                redirect?: { [x: string]: string } | undefined
                                value?: string | undefined
                              }
                            | undefined
                          methods?: string[] | undefined
                          middleware?: number | undefined
                          middlewarePath?: string | undefined
                          middlewareRawSrc?: string[] | undefined
                          missing?:
                            | (
                                | { type: 'host'; value: string }
                                | {
                                    key: string
                                    type: 'header' | 'cookie' | 'query'
                                    value?: string | undefined
                                  }
                              )[]
                            | undefined
                          override?: boolean | undefined
                          src: string
                          status?: number | undefined
                          user?: boolean | undefined
                        }
                      | { handle: 'error' | 'filesystem' | 'hit' | 'miss' | 'resource' | 'rewrite' }
                    )[]
                  | undefined
                target?: 'staging' | 'production' | undefined
                trailingSlash?: boolean | undefined
                withLatestCommit?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                forceNew?: '0' | '1' | undefined
                skipAutoDetectionConfirmation?: '0' | '1' | undefined
                teamId?: string | undefined
              }
            } & {
              json: {
                $schema?: string | undefined
                alias?: string[] | undefined
                build?: { env?: { [x: string]: string } | undefined } | undefined
                buildCommand?: (string | null) | undefined
                builds?:
                  | {
                      config?: { [x: string]: unknown } | undefined
                      src?: string | undefined
                      use: string
                    }[]
                  | undefined
                cleanUrls?: boolean | undefined
                crons?: { path: string; schedule: string }[] | undefined
                deploymentId?: string | undefined
                devCommand?: (string | null) | undefined
                env?: { [x: string]: string } | undefined
                files?:
                  | (
                      | { data: string; encoding?: 'base64' | 'utf-8' | undefined; file: string }
                      | { file: string; sha?: string | undefined; size?: number | undefined }
                    )[]
                  | undefined
                framework?:
                  | null
                  | 'blitzjs'
                  | 'nextjs'
                  | 'gatsby'
                  | 'remix'
                  | 'astro'
                  | 'hexo'
                  | 'eleventy'
                  | 'docusaurus-2'
                  | 'docusaurus'
                  | 'preact'
                  | 'solidstart'
                  | 'dojo'
                  | 'ember'
                  | 'vue'
                  | 'scully'
                  | 'ionic-angular'
                  | 'angular'
                  | 'polymer'
                  | 'svelte'
                  | 'sveltekit'
                  | 'sveltekit-1'
                  | 'ionic-react'
                  | 'create-react-app'
                  | 'gridsome'
                  | 'umijs'
                  | 'sapper'
                  | 'saber'
                  | 'stencil'
                  | 'nuxtjs'
                  | 'redwoodjs'
                  | 'hugo'
                  | 'jekyll'
                  | 'brunch'
                  | 'middleman'
                  | 'zola'
                  | 'hydrogen'
                  | 'vite'
                  | 'vitepress'
                  | 'vuepress'
                  | 'parcel'
                  | 'sanity'
                  | undefined
                functions?:
                  | {
                      [x: string]: {
                        excludeFiles?: string | undefined
                        includeFiles?: string | undefined
                        maxDuration?: number | undefined
                        memory?: number | undefined
                        runtime?: string | undefined
                      }
                    }
                  | undefined
                git?:
                  | { deploymentEnabled?: boolean | { [x: string]: boolean } | undefined }
                  | undefined
                gitMetadata?:
                  | {
                      commitAuthorName?: string | undefined
                      commitMessage?: string | undefined
                      commitRef?: string | undefined
                      commitSha?: string | undefined
                      dirty?: boolean | undefined
                      remoteUrl: string
                    }
                  | undefined
                gitSource?:
                  | {
                      ref: string
                      repoId: number | string
                      sha?: string | undefined
                      type: 'github'
                    }
                  | {
                      org: string
                      ref: string
                      repo: string
                      sha?: string | undefined
                      type: 'github'
                    }
                  | {
                      projectId: number | string
                      ref: string
                      sha?: string | undefined
                      type: 'gitlab'
                    }
                  | {
                      ref: string
                      repoUuid: string
                      sha?: string | undefined
                      type: 'bitbucket'
                      workspaceUuid?: string | undefined
                    }
                  | {
                      owner: string
                      ref: string
                      sha?: string | undefined
                      slug: string
                      type: 'bitbucket'
                    }
                  | undefined
                headers?:
                  | {
                      has?:
                        | (
                            | { type: 'host'; value: string }
                            | {
                                key: string
                                type: 'header' | 'cookie' | 'query'
                                value?: string | undefined
                              }
                          )[]
                        | undefined
                      headers: { key: string; value: string }[]
                      missing?:
                        | (
                            | { type: 'host'; value: string }
                            | {
                                key: string
                                type: 'header' | 'cookie' | 'query'
                                value?: string | undefined
                              }
                          )[]
                        | undefined
                      source: string
                    }[]
                  | undefined
                ignoreCommand?: (string | null) | undefined
                installCommand?: (string | null) | undefined
                meta?: { [x: string]: string } | undefined
                monorepoManager?: (string | null) | undefined
                name: string
                outputDirectory?: (string | null) | undefined
                project?: string | undefined
                projectSettings?:
                  | {
                      buildCommand?: (string | null) | undefined
                      commandForIgnoringBuildStep?: (string | null) | undefined
                      devCommand?: (string | null) | undefined
                      framework?:
                        | null
                        | 'blitzjs'
                        | 'nextjs'
                        | 'gatsby'
                        | 'remix'
                        | 'astro'
                        | 'hexo'
                        | 'eleventy'
                        | 'docusaurus-2'
                        | 'docusaurus'
                        | 'preact'
                        | 'solidstart'
                        | 'dojo'
                        | 'ember'
                        | 'vue'
                        | 'scully'
                        | 'ionic-angular'
                        | 'angular'
                        | 'polymer'
                        | 'svelte'
                        | 'sveltekit'
                        | 'sveltekit-1'
                        | 'ionic-react'
                        | 'create-react-app'
                        | 'gridsome'
                        | 'umijs'
                        | 'sapper'
                        | 'saber'
                        | 'stencil'
                        | 'nuxtjs'
                        | 'redwoodjs'
                        | 'hugo'
                        | 'jekyll'
                        | 'brunch'
                        | 'middleman'
                        | 'zola'
                        | 'hydrogen'
                        | 'vite'
                        | 'vitepress'
                        | 'vuepress'
                        | 'parcel'
                        | 'sanity'
                        | undefined
                      installCommand?: (string | null) | undefined
                      outputDirectory?: (string | null) | undefined
                      rootDirectory?: (string | null) | undefined
                      serverlessFunctionRegion?: (string | null) | undefined
                      skipGitConnectDuringLink?: boolean | undefined
                      sourceFilesOutsideRootDirectory?: boolean | undefined
                    }
                  | undefined
                public?: boolean | undefined
                redirects?:
                  | {
                      destination: string
                      has?:
                        | (
                            | { type: 'host'; value: string }
                            | {
                                key: string
                                type: 'header' | 'cookie' | 'query'
                                value?: string | undefined
                              }
                          )[]
                        | undefined
                      missing?:
                        | (
                            | { type: 'host'; value: string }
                            | {
                                key: string
                                type: 'header' | 'cookie' | 'query'
                                value?: string | undefined
                              }
                          )[]
                        | undefined
                      permanent?: boolean | undefined
                      source: string
                    }[]
                  | undefined
                regions?: string[] | undefined
                rewrites?:
                  | {
                      destination: string
                      has?:
                        | (
                            | { type: 'host'; value: string }
                            | {
                                key: string
                                type: 'header' | 'cookie' | 'query'
                                value?: string | undefined
                              }
                          )[]
                        | undefined
                      missing?:
                        | (
                            | { type: 'host'; value: string }
                            | {
                                key: string
                                type: 'header' | 'cookie' | 'query'
                                value?: string | undefined
                              }
                          )[]
                        | undefined
                      source: string
                    }[]
                  | undefined
                routes?:
                  | (
                      | {
                          caseSensitive?: boolean | undefined
                          check?: boolean | undefined
                          continue?: boolean | undefined
                          dest?: string | undefined
                          has?:
                            | (
                                | { type: 'host'; value: string }
                                | {
                                    key: string
                                    type: 'header' | 'cookie' | 'query'
                                    value?: string | undefined
                                  }
                              )[]
                            | undefined
                          headers?: { [x: string]: string } | undefined
                          important?: boolean | undefined
                          locale?:
                            | {
                                cookie?: string | undefined
                                default?: string | undefined
                                path?: string | undefined
                                redirect?: { [x: string]: string } | undefined
                                value?: string | undefined
                              }
                            | undefined
                          methods?: string[] | undefined
                          middleware?: number | undefined
                          middlewarePath?: string | undefined
                          middlewareRawSrc?: string[] | undefined
                          missing?:
                            | (
                                | { type: 'host'; value: string }
                                | {
                                    key: string
                                    type: 'header' | 'cookie' | 'query'
                                    value?: string | undefined
                                  }
                              )[]
                            | undefined
                          override?: boolean | undefined
                          src: string
                          status?: number | undefined
                          user?: boolean | undefined
                        }
                      | { handle: 'error' | 'filesystem' | 'hit' | 'miss' | 'resource' | 'rewrite' }
                    )[]
                  | undefined
                target?: 'staging' | 'production' | undefined
                trailingSlash?: boolean | undefined
                withLatestCommit?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                forceNew?: '0' | '1' | undefined
                skipAutoDetectionConfirmation?: '0' | '1' | undefined
                teamId?: string | undefined
              }
            } & {
              json: {
                $schema?: string | undefined
                alias?: string[] | undefined
                build?: { env?: { [x: string]: string } | undefined } | undefined
                buildCommand?: (string | null) | undefined
                builds?:
                  | {
                      config?: { [x: string]: unknown } | undefined
                      src?: string | undefined
                      use: string
                    }[]
                  | undefined
                cleanUrls?: boolean | undefined
                crons?: { path: string; schedule: string }[] | undefined
                deploymentId?: string | undefined
                devCommand?: (string | null) | undefined
                env?: { [x: string]: string } | undefined
                files?:
                  | (
                      | { data: string; encoding?: 'base64' | 'utf-8' | undefined; file: string }
                      | { file: string; sha?: string | undefined; size?: number | undefined }
                    )[]
                  | undefined
                framework?:
                  | null
                  | 'blitzjs'
                  | 'nextjs'
                  | 'gatsby'
                  | 'remix'
                  | 'astro'
                  | 'hexo'
                  | 'eleventy'
                  | 'docusaurus-2'
                  | 'docusaurus'
                  | 'preact'
                  | 'solidstart'
                  | 'dojo'
                  | 'ember'
                  | 'vue'
                  | 'scully'
                  | 'ionic-angular'
                  | 'angular'
                  | 'polymer'
                  | 'svelte'
                  | 'sveltekit'
                  | 'sveltekit-1'
                  | 'ionic-react'
                  | 'create-react-app'
                  | 'gridsome'
                  | 'umijs'
                  | 'sapper'
                  | 'saber'
                  | 'stencil'
                  | 'nuxtjs'
                  | 'redwoodjs'
                  | 'hugo'
                  | 'jekyll'
                  | 'brunch'
                  | 'middleman'
                  | 'zola'
                  | 'hydrogen'
                  | 'vite'
                  | 'vitepress'
                  | 'vuepress'
                  | 'parcel'
                  | 'sanity'
                  | undefined
                functions?:
                  | {
                      [x: string]: {
                        excludeFiles?: string | undefined
                        includeFiles?: string | undefined
                        maxDuration?: number | undefined
                        memory?: number | undefined
                        runtime?: string | undefined
                      }
                    }
                  | undefined
                git?:
                  | { deploymentEnabled?: boolean | { [x: string]: boolean } | undefined }
                  | undefined
                gitMetadata?:
                  | {
                      commitAuthorName?: string | undefined
                      commitMessage?: string | undefined
                      commitRef?: string | undefined
                      commitSha?: string | undefined
                      dirty?: boolean | undefined
                      remoteUrl: string
                    }
                  | undefined
                gitSource?:
                  | {
                      ref: string
                      repoId: number | string
                      sha?: string | undefined
                      type: 'github'
                    }
                  | {
                      org: string
                      ref: string
                      repo: string
                      sha?: string | undefined
                      type: 'github'
                    }
                  | {
                      projectId: number | string
                      ref: string
                      sha?: string | undefined
                      type: 'gitlab'
                    }
                  | {
                      ref: string
                      repoUuid: string
                      sha?: string | undefined
                      type: 'bitbucket'
                      workspaceUuid?: string | undefined
                    }
                  | {
                      owner: string
                      ref: string
                      sha?: string | undefined
                      slug: string
                      type: 'bitbucket'
                    }
                  | undefined
                headers?:
                  | {
                      has?:
                        | (
                            | { type: 'host'; value: string }
                            | {
                                key: string
                                type: 'header' | 'cookie' | 'query'
                                value?: string | undefined
                              }
                          )[]
                        | undefined
                      headers: { key: string; value: string }[]
                      missing?:
                        | (
                            | { type: 'host'; value: string }
                            | {
                                key: string
                                type: 'header' | 'cookie' | 'query'
                                value?: string | undefined
                              }
                          )[]
                        | undefined
                      source: string
                    }[]
                  | undefined
                ignoreCommand?: (string | null) | undefined
                installCommand?: (string | null) | undefined
                meta?: { [x: string]: string } | undefined
                monorepoManager?: (string | null) | undefined
                name: string
                outputDirectory?: (string | null) | undefined
                project?: string | undefined
                projectSettings?:
                  | {
                      buildCommand?: (string | null) | undefined
                      commandForIgnoringBuildStep?: (string | null) | undefined
                      devCommand?: (string | null) | undefined
                      framework?:
                        | null
                        | 'blitzjs'
                        | 'nextjs'
                        | 'gatsby'
                        | 'remix'
                        | 'astro'
                        | 'hexo'
                        | 'eleventy'
                        | 'docusaurus-2'
                        | 'docusaurus'
                        | 'preact'
                        | 'solidstart'
                        | 'dojo'
                        | 'ember'
                        | 'vue'
                        | 'scully'
                        | 'ionic-angular'
                        | 'angular'
                        | 'polymer'
                        | 'svelte'
                        | 'sveltekit'
                        | 'sveltekit-1'
                        | 'ionic-react'
                        | 'create-react-app'
                        | 'gridsome'
                        | 'umijs'
                        | 'sapper'
                        | 'saber'
                        | 'stencil'
                        | 'nuxtjs'
                        | 'redwoodjs'
                        | 'hugo'
                        | 'jekyll'
                        | 'brunch'
                        | 'middleman'
                        | 'zola'
                        | 'hydrogen'
                        | 'vite'
                        | 'vitepress'
                        | 'vuepress'
                        | 'parcel'
                        | 'sanity'
                        | undefined
                      installCommand?: (string | null) | undefined
                      outputDirectory?: (string | null) | undefined
                      rootDirectory?: (string | null) | undefined
                      serverlessFunctionRegion?: (string | null) | undefined
                      skipGitConnectDuringLink?: boolean | undefined
                      sourceFilesOutsideRootDirectory?: boolean | undefined
                    }
                  | undefined
                public?: boolean | undefined
                redirects?:
                  | {
                      destination: string
                      has?:
                        | (
                            | { type: 'host'; value: string }
                            | {
                                key: string
                                type: 'header' | 'cookie' | 'query'
                                value?: string | undefined
                              }
                          )[]
                        | undefined
                      missing?:
                        | (
                            | { type: 'host'; value: string }
                            | {
                                key: string
                                type: 'header' | 'cookie' | 'query'
                                value?: string | undefined
                              }
                          )[]
                        | undefined
                      permanent?: boolean | undefined
                      source: string
                    }[]
                  | undefined
                regions?: string[] | undefined
                rewrites?:
                  | {
                      destination: string
                      has?:
                        | (
                            | { type: 'host'; value: string }
                            | {
                                key: string
                                type: 'header' | 'cookie' | 'query'
                                value?: string | undefined
                              }
                          )[]
                        | undefined
                      missing?:
                        | (
                            | { type: 'host'; value: string }
                            | {
                                key: string
                                type: 'header' | 'cookie' | 'query'
                                value?: string | undefined
                              }
                          )[]
                        | undefined
                      source: string
                    }[]
                  | undefined
                routes?:
                  | (
                      | {
                          caseSensitive?: boolean | undefined
                          check?: boolean | undefined
                          continue?: boolean | undefined
                          dest?: string | undefined
                          has?:
                            | (
                                | { type: 'host'; value: string }
                                | {
                                    key: string
                                    type: 'header' | 'cookie' | 'query'
                                    value?: string | undefined
                                  }
                              )[]
                            | undefined
                          headers?: { [x: string]: string } | undefined
                          important?: boolean | undefined
                          locale?:
                            | {
                                cookie?: string | undefined
                                default?: string | undefined
                                path?: string | undefined
                                redirect?: { [x: string]: string } | undefined
                                value?: string | undefined
                              }
                            | undefined
                          methods?: string[] | undefined
                          middleware?: number | undefined
                          middlewarePath?: string | undefined
                          middlewareRawSrc?: string[] | undefined
                          missing?:
                            | (
                                | { type: 'host'; value: string }
                                | {
                                    key: string
                                    type: 'header' | 'cookie' | 'query'
                                    value?: string | undefined
                                  }
                              )[]
                            | undefined
                          override?: boolean | undefined
                          src: string
                          status?: number | undefined
                          user?: boolean | undefined
                        }
                      | { handle: 'error' | 'filesystem' | 'hit' | 'miss' | 'resource' | 'rewrite' }
                    )[]
                  | undefined
                target?: 'staging' | 'production' | undefined
                trailingSlash?: boolean | undefined
                withLatestCommit?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                forceNew?: '0' | '1' | undefined
                skipAutoDetectionConfirmation?: '0' | '1' | undefined
                teamId?: string | undefined
              }
            } & {
              json: {
                $schema?: string | undefined
                alias?: string[] | undefined
                build?: { env?: { [x: string]: string } | undefined } | undefined
                buildCommand?: (string | null) | undefined
                builds?:
                  | {
                      config?: { [x: string]: unknown } | undefined
                      src?: string | undefined
                      use: string
                    }[]
                  | undefined
                cleanUrls?: boolean | undefined
                crons?: { path: string; schedule: string }[] | undefined
                deploymentId?: string | undefined
                devCommand?: (string | null) | undefined
                env?: { [x: string]: string } | undefined
                files?:
                  | (
                      | { data: string; encoding?: 'base64' | 'utf-8' | undefined; file: string }
                      | { file: string; sha?: string | undefined; size?: number | undefined }
                    )[]
                  | undefined
                framework?:
                  | null
                  | 'blitzjs'
                  | 'nextjs'
                  | 'gatsby'
                  | 'remix'
                  | 'astro'
                  | 'hexo'
                  | 'eleventy'
                  | 'docusaurus-2'
                  | 'docusaurus'
                  | 'preact'
                  | 'solidstart'
                  | 'dojo'
                  | 'ember'
                  | 'vue'
                  | 'scully'
                  | 'ionic-angular'
                  | 'angular'
                  | 'polymer'
                  | 'svelte'
                  | 'sveltekit'
                  | 'sveltekit-1'
                  | 'ionic-react'
                  | 'create-react-app'
                  | 'gridsome'
                  | 'umijs'
                  | 'sapper'
                  | 'saber'
                  | 'stencil'
                  | 'nuxtjs'
                  | 'redwoodjs'
                  | 'hugo'
                  | 'jekyll'
                  | 'brunch'
                  | 'middleman'
                  | 'zola'
                  | 'hydrogen'
                  | 'vite'
                  | 'vitepress'
                  | 'vuepress'
                  | 'parcel'
                  | 'sanity'
                  | undefined
                functions?:
                  | {
                      [x: string]: {
                        excludeFiles?: string | undefined
                        includeFiles?: string | undefined
                        maxDuration?: number | undefined
                        memory?: number | undefined
                        runtime?: string | undefined
                      }
                    }
                  | undefined
                git?:
                  | { deploymentEnabled?: boolean | { [x: string]: boolean } | undefined }
                  | undefined
                gitMetadata?:
                  | {
                      commitAuthorName?: string | undefined
                      commitMessage?: string | undefined
                      commitRef?: string | undefined
                      commitSha?: string | undefined
                      dirty?: boolean | undefined
                      remoteUrl: string
                    }
                  | undefined
                gitSource?:
                  | {
                      ref: string
                      repoId: number | string
                      sha?: string | undefined
                      type: 'github'
                    }
                  | {
                      org: string
                      ref: string
                      repo: string
                      sha?: string | undefined
                      type: 'github'
                    }
                  | {
                      projectId: number | string
                      ref: string
                      sha?: string | undefined
                      type: 'gitlab'
                    }
                  | {
                      ref: string
                      repoUuid: string
                      sha?: string | undefined
                      type: 'bitbucket'
                      workspaceUuid?: string | undefined
                    }
                  | {
                      owner: string
                      ref: string
                      sha?: string | undefined
                      slug: string
                      type: 'bitbucket'
                    }
                  | undefined
                headers?:
                  | {
                      has?:
                        | (
                            | { type: 'host'; value: string }
                            | {
                                key: string
                                type: 'header' | 'cookie' | 'query'
                                value?: string | undefined
                              }
                          )[]
                        | undefined
                      headers: { key: string; value: string }[]
                      missing?:
                        | (
                            | { type: 'host'; value: string }
                            | {
                                key: string
                                type: 'header' | 'cookie' | 'query'
                                value?: string | undefined
                              }
                          )[]
                        | undefined
                      source: string
                    }[]
                  | undefined
                ignoreCommand?: (string | null) | undefined
                installCommand?: (string | null) | undefined
                meta?: { [x: string]: string } | undefined
                monorepoManager?: (string | null) | undefined
                name: string
                outputDirectory?: (string | null) | undefined
                project?: string | undefined
                projectSettings?:
                  | {
                      buildCommand?: (string | null) | undefined
                      commandForIgnoringBuildStep?: (string | null) | undefined
                      devCommand?: (string | null) | undefined
                      framework?:
                        | null
                        | 'blitzjs'
                        | 'nextjs'
                        | 'gatsby'
                        | 'remix'
                        | 'astro'
                        | 'hexo'
                        | 'eleventy'
                        | 'docusaurus-2'
                        | 'docusaurus'
                        | 'preact'
                        | 'solidstart'
                        | 'dojo'
                        | 'ember'
                        | 'vue'
                        | 'scully'
                        | 'ionic-angular'
                        | 'angular'
                        | 'polymer'
                        | 'svelte'
                        | 'sveltekit'
                        | 'sveltekit-1'
                        | 'ionic-react'
                        | 'create-react-app'
                        | 'gridsome'
                        | 'umijs'
                        | 'sapper'
                        | 'saber'
                        | 'stencil'
                        | 'nuxtjs'
                        | 'redwoodjs'
                        | 'hugo'
                        | 'jekyll'
                        | 'brunch'
                        | 'middleman'
                        | 'zola'
                        | 'hydrogen'
                        | 'vite'
                        | 'vitepress'
                        | 'vuepress'
                        | 'parcel'
                        | 'sanity'
                        | undefined
                      installCommand?: (string | null) | undefined
                      outputDirectory?: (string | null) | undefined
                      rootDirectory?: (string | null) | undefined
                      serverlessFunctionRegion?: (string | null) | undefined
                      skipGitConnectDuringLink?: boolean | undefined
                      sourceFilesOutsideRootDirectory?: boolean | undefined
                    }
                  | undefined
                public?: boolean | undefined
                redirects?:
                  | {
                      destination: string
                      has?:
                        | (
                            | { type: 'host'; value: string }
                            | {
                                key: string
                                type: 'header' | 'cookie' | 'query'
                                value?: string | undefined
                              }
                          )[]
                        | undefined
                      missing?:
                        | (
                            | { type: 'host'; value: string }
                            | {
                                key: string
                                type: 'header' | 'cookie' | 'query'
                                value?: string | undefined
                              }
                          )[]
                        | undefined
                      permanent?: boolean | undefined
                      source: string
                    }[]
                  | undefined
                regions?: string[] | undefined
                rewrites?:
                  | {
                      destination: string
                      has?:
                        | (
                            | { type: 'host'; value: string }
                            | {
                                key: string
                                type: 'header' | 'cookie' | 'query'
                                value?: string | undefined
                              }
                          )[]
                        | undefined
                      missing?:
                        | (
                            | { type: 'host'; value: string }
                            | {
                                key: string
                                type: 'header' | 'cookie' | 'query'
                                value?: string | undefined
                              }
                          )[]
                        | undefined
                      source: string
                    }[]
                  | undefined
                routes?:
                  | (
                      | {
                          caseSensitive?: boolean | undefined
                          check?: boolean | undefined
                          continue?: boolean | undefined
                          dest?: string | undefined
                          has?:
                            | (
                                | { type: 'host'; value: string }
                                | {
                                    key: string
                                    type: 'header' | 'cookie' | 'query'
                                    value?: string | undefined
                                  }
                              )[]
                            | undefined
                          headers?: { [x: string]: string } | undefined
                          important?: boolean | undefined
                          locale?:
                            | {
                                cookie?: string | undefined
                                default?: string | undefined
                                path?: string | undefined
                                redirect?: { [x: string]: string } | undefined
                                value?: string | undefined
                              }
                            | undefined
                          methods?: string[] | undefined
                          middleware?: number | undefined
                          middlewarePath?: string | undefined
                          middlewareRawSrc?: string[] | undefined
                          missing?:
                            | (
                                | { type: 'host'; value: string }
                                | {
                                    key: string
                                    type: 'header' | 'cookie' | 'query'
                                    value?: string | undefined
                                  }
                              )[]
                            | undefined
                          override?: boolean | undefined
                          src: string
                          status?: number | undefined
                          user?: boolean | undefined
                        }
                      | { handle: 'error' | 'filesystem' | 'hit' | 'miss' | 'resource' | 'rewrite' }
                    )[]
                  | undefined
                target?: 'staging' | 'production' | undefined
                trailingSlash?: boolean | undefined
                withLatestCommit?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/v13/deployments/:idOrUrl': {
      $get:
        | {
            input: { param: { idOrUrl: string } } & {
              query: { withGitRepoInfo?: string | undefined; teamId?: string | undefined }
            }
            output:
              | {
                  alias: string[]
                  aliasAssigned: boolean
                  aliasAssignedAt?: number | boolean | undefined
                  aliasError?: ({ code: string; message: string } | null) | undefined
                  aliasFinal?: (string | null) | undefined
                  aliasWarning?:
                    | ({
                        action?: string | undefined
                        code: string
                        link?: string | undefined
                        message: string
                      } | null)
                    | undefined
                  automaticAliases?: string[] | undefined
                  bootedAt: number
                  build: { env: string[] }
                  buildErrorAt?: number | undefined
                  buildingAt: number
                  builds?: { [x: string]: unknown }[] | undefined
                  canceledAt?: number | undefined
                  checksConclusion?: 'succeeded' | 'failed' | 'skipped' | 'canceled' | undefined
                  checksState?: 'registered' | 'running' | 'completed' | undefined
                  createdAt: number
                  createdIn: string
                  creator: { uid: string; username?: string | undefined }
                  env: string[]
                  errorCode?: string | undefined
                  errorLink?: string | undefined
                  errorMessage?: (string | null) | undefined
                  errorStep?: string | undefined
                  functions?:
                    | ({
                        [x: string]: {
                          excludeFiles?: string | undefined
                          includeFiles?: string | undefined
                          maxDuration?: number | undefined
                          memory?: number | undefined
                          runtime?: string | undefined
                        }
                      } | null)
                    | undefined
                  gitRepo?:
                    | {
                        defaultBranch: string
                        name: string
                        namespace: string
                        ownerType: 'team' | 'user'
                        path: string
                        private: boolean
                        projectId: number
                        type: 'gitlab'
                        url: string
                      }
                    | {
                        defaultBranch: string
                        name: string
                        org: string
                        ownerType: 'team' | 'user'
                        path: string
                        private: boolean
                        repo: string
                        repoId: number
                        repoOwnerId: string
                        type: 'github'
                      }
                    | {
                        defaultBranch: string
                        name: string
                        owner: string
                        ownerType: 'team' | 'user'
                        path: string
                        private: boolean
                        repoUuid: string
                        slug: string
                        type: 'bitbucket'
                        workspaceUuid: string
                      }
                    | undefined
                  gitSource?:
                    | {
                        prId?: (number | null) | undefined
                        ref?: (string | null) | undefined
                        repoId: string | number
                        sha?: string | undefined
                        type: 'github'
                      }
                    | {
                        org: string
                        prId?: (number | null) | undefined
                        ref?: (string | null) | undefined
                        repo: string
                        sha?: string | undefined
                        type: 'github'
                      }
                    | {
                        prId?: (number | null) | undefined
                        projectId: string | number
                        ref?: (string | null) | undefined
                        sha?: string | undefined
                        type: 'gitlab'
                      }
                    | {
                        prId?: (number | null) | undefined
                        ref?: (string | null) | undefined
                        repoUuid: string
                        sha?: string | undefined
                        type: 'bitbucket'
                        workspaceUuid?: string | undefined
                      }
                    | {
                        owner: string
                        prId?: (number | null) | undefined
                        ref?: (string | null) | undefined
                        sha?: string | undefined
                        slug: string
                        type: 'bitbucket'
                      }
                    | { gitUrl: string; ref: string; sha: string; type: 'custom' }
                    | {
                        org?: string | undefined
                        ref: string
                        repo?: string | undefined
                        repoId: number
                        sha: string
                        type: 'github'
                      }
                    | { projectId: number; ref: string; sha: string; type: 'gitlab' }
                    | {
                        owner?: string | undefined
                        ref: string
                        repoUuid: string
                        sha: string
                        slug?: string | undefined
                        type: 'bitbucket'
                        workspaceUuid: string
                      }
                    | undefined
                  id: string
                  inspectorUrl: string | null
                  isInConcurrentBuildsQueue: boolean
                  lambdas?:
                    | {
                        createdAt?: number | undefined
                        entrypoint?: (string | null) | undefined
                        id: string
                        output: { functionName: string; path: string }[]
                        readyState?: 'BUILDING' | 'ERROR' | 'INITIALIZING' | 'READY' | undefined
                        readyStateAt?: number | undefined
                      }[]
                    | undefined
                  meta: { [x: string]: string }
                  monorepoManager?: (string | null) | undefined
                  name: string
                  ownerId: string
                  plan: 'hobby' | 'enterprise' | 'pro' | 'oss'
                  previewCommentsEnabled?: boolean | undefined
                  projectId: string
                  public: boolean
                  readyState:
                    | 'QUEUED'
                    | 'BUILDING'
                    | 'ERROR'
                    | 'INITIALIZING'
                    | 'READY'
                    | 'CANCELED'
                  regions: string[]
                  routes:
                    | (
                        | {
                            caseSensitive?: boolean | undefined
                            check?: boolean | undefined
                            continue?: boolean | undefined
                            dest?: string | undefined
                            has?:
                              | (
                                  | { type: 'host'; value: string }
                                  | {
                                      key: string
                                      type: 'header' | 'cookie' | 'query'
                                      value?: string | undefined
                                    }
                                )[]
                              | undefined
                            headers?: { [x: string]: string } | undefined
                            important?: boolean | undefined
                            locale?:
                              | {
                                  cookie?: string | undefined
                                  redirect?: { [x: string]: string } | undefined
                                }
                              | undefined
                            methods?: string[] | undefined
                            middleware?: number | undefined
                            middlewarePath?: string | undefined
                            middlewareRawSrc?: string[] | undefined
                            missing?:
                              | (
                                  | { type: 'host'; value: string }
                                  | {
                                      key: string
                                      type: 'header' | 'cookie' | 'query'
                                      value?: string | undefined
                                    }
                                )[]
                              | undefined
                            override?: boolean | undefined
                            src: string
                            status?: number | undefined
                          }
                        | {
                            dest?: string | undefined
                            handle: 'filesystem' | 'hit' | 'miss' | 'rewrite' | 'error' | 'resource'
                            src?: string | undefined
                            status?: number | undefined
                          }
                        | { continue: boolean; middleware: 0; src: string }
                      )[]
                    | null
                  source?: 'cli' | 'git' | 'import' | 'import/repo' | 'clone/repo' | undefined
                  target?: 'production' | 'staging' | undefined
                  team?: { id: string; name: string; slug: string } | undefined
                  type: 'LAMBDAS'
                  url: string
                  userAliases?: string[] | undefined
                  version: 2
                }
              | {
                  alias: string[]
                  aliasAssigned: boolean
                  aliasError?: ({ code: string; message: string } | null) | undefined
                  aliasFinal?: (string | null) | undefined
                  aliasWarning?:
                    | ({
                        action?: string | undefined
                        code: string
                        link?: string | undefined
                        message: string
                      } | null)
                    | undefined
                  automaticAliases?: string[] | undefined
                  bootedAt: number
                  buildErrorAt?: number | undefined
                  buildingAt: number
                  canceledAt?: number | undefined
                  checksConclusion?: 'succeeded' | 'failed' | 'skipped' | 'canceled' | undefined
                  checksState?: 'registered' | 'running' | 'completed' | undefined
                  createdAt: number
                  creator: { uid: string; username?: string | undefined }
                  errorCode?: string | undefined
                  errorLink?: string | undefined
                  errorMessage?: (string | null) | undefined
                  errorStep?: string | undefined
                  gitSource?:
                    | {
                        prId?: (number | null) | undefined
                        ref?: (string | null) | undefined
                        repoId: string | number
                        sha?: string | undefined
                        type: 'github'
                      }
                    | {
                        org: string
                        prId?: (number | null) | undefined
                        ref?: (string | null) | undefined
                        repo: string
                        sha?: string | undefined
                        type: 'github'
                      }
                    | {
                        prId?: (number | null) | undefined
                        projectId: string | number
                        ref?: (string | null) | undefined
                        sha?: string | undefined
                        type: 'gitlab'
                      }
                    | {
                        prId?: (number | null) | undefined
                        ref?: (string | null) | undefined
                        repoUuid: string
                        sha?: string | undefined
                        type: 'bitbucket'
                        workspaceUuid?: string | undefined
                      }
                    | {
                        owner: string
                        prId?: (number | null) | undefined
                        ref?: (string | null) | undefined
                        sha?: string | undefined
                        slug: string
                        type: 'bitbucket'
                      }
                    | { gitUrl: string; ref: string; sha: string; type: 'custom' }
                    | {
                        org?: string | undefined
                        ref: string
                        repo?: string | undefined
                        repoId: number
                        sha: string
                        type: 'github'
                      }
                    | { projectId: number; ref: string; sha: string; type: 'gitlab' }
                    | {
                        owner?: string | undefined
                        ref: string
                        repoUuid: string
                        sha: string
                        slug?: string | undefined
                        type: 'bitbucket'
                        workspaceUuid: string
                      }
                    | undefined
                  id: string
                  lambdas?:
                    | {
                        createdAt?: number | undefined
                        entrypoint?: (string | null) | undefined
                        id: string
                        output: { functionName: string; path: string }[]
                        readyState?: 'BUILDING' | 'ERROR' | 'INITIALIZING' | 'READY' | undefined
                        readyStateAt?: number | undefined
                      }[]
                    | undefined
                  meta: { [x: string]: string }
                  name: string
                  previewCommentsEnabled?: boolean | undefined
                  public: boolean
                  readyState:
                    | 'QUEUED'
                    | 'BUILDING'
                    | 'ERROR'
                    | 'INITIALIZING'
                    | 'READY'
                    | 'CANCELED'
                  regions: string[]
                  source?: 'cli' | 'git' | 'import' | 'import/repo' | 'clone/repo' | undefined
                  target?: 'production' | 'staging' | undefined
                  team?: { id: string; name: string; slug: string } | undefined
                  type: 'LAMBDAS'
                  url: string
                  userAliases?: string[] | undefined
                  version: 2
                }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { idOrUrl: string } } & {
              query: { withGitRepoInfo?: string | undefined; teamId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { idOrUrl: string } } & {
              query: { withGitRepoInfo?: string | undefined; teamId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { idOrUrl: string } } & {
              query: { withGitRepoInfo?: string | undefined; teamId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v13/deployments/:id': {
      $delete:
        | {
            input: { param: { id: string } } & {
              query: { url?: string | undefined; teamId?: string | undefined }
            }
            output: { state: 'DELETED'; uid: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { url?: string | undefined; teamId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { url?: string | undefined; teamId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { url?: string | undefined; teamId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v2/aliases/:aliasId': {
      $delete:
        | {
            input: { param: { aliasId: string } } & { query: { teamId?: string | undefined } }
            output: { status: 'SUCCESS' }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { aliasId: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { aliasId: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { aliasId: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v2/deployments/:idOrUrl/events': {
      $get:
        | {
            input: { param: { idOrUrl: string } } & {
              query: {
                direction?: 'backward' | 'forward' | undefined
                follow?: 0 | 1 | undefined
                limit?: number | undefined
                name?: string | undefined
                since?: number | undefined
                until?: number | undefined
                statusCode?: number | string | undefined
                delimiter?: 0 | 1 | undefined
                builds?: 0 | 1 | undefined
                teamId?: string | undefined
              }
            }
            output: (
              | {
                  created: number
                  payload: {
                    date: number
                    deploymentId: string
                    id: string
                    serial: string
                    text?: string | undefined
                  }
                  type: 'command'
                }
              | {
                  created: number
                  payload: {
                    date: number
                    deploymentId: string
                    id: string
                    info: {
                      entrypoint?: string | undefined
                      name: string
                      path?: string | undefined
                      step?: string | undefined
                      type: string
                    }
                    serial: string
                  }
                  type: 'deployment-state'
                }
              | {
                  created: number
                  payload: {
                    date: number
                    deploymentId: string
                    id: string
                    info: {
                      entrypoint?: string | undefined
                      name: string
                      path?: string | undefined
                      step?: string | undefined
                      type: string
                    }
                    serial: string
                  }
                  type: 'delimiter'
                }
              | {
                  created: number
                  payload: {
                    created: number
                    date: number
                    deploymentId: string
                    id: string
                    serial: string
                    text?: string | undefined
                  }
                  type: 'exit'
                }
              | {
                  created: number
                  payload: {
                    date: number
                    deploymentId: string
                    id: string
                    info: {
                      entrypoint?: string | undefined
                      name: string
                      path?: string | undefined
                      step?: string | undefined
                      type: string
                    }
                    requestId?: string | undefined
                    serial: string
                    text?: string | undefined
                  }
                  type: 'middleware'
                }
              | {
                  created: number
                  payload: {
                    date: number
                    deploymentId: string
                    id: string
                    info: {
                      entrypoint?: string | undefined
                      name: string
                      path?: string | undefined
                      step?: string | undefined
                      type: string
                    }
                    requestId?: string | undefined
                    serial: string
                    statusCode?: number | undefined
                    text?: string | undefined
                  }
                  type:
                    | 'delimiter'
                    | 'command'
                    | 'stdout'
                    | 'stderr'
                    | 'exit'
                    | 'deployment-state'
                    | 'middleware'
                    | 'middleware-invocation'
                    | 'edge-function-invocation'
                    | 'fatal'
                }
            )[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { idOrUrl: string } } & {
              query: {
                direction?: 'backward' | 'forward' | undefined
                follow?: 0 | 1 | undefined
                limit?: number | undefined
                name?: string | undefined
                since?: number | undefined
                until?: number | undefined
                statusCode?: number | string | undefined
                delimiter?: 0 | 1 | undefined
                builds?: 0 | 1 | undefined
                teamId?: string | undefined
              }
            }
            output:
              | {
                  created: number
                  payload: {
                    date: number
                    deploymentId: string
                    id: string
                    serial: string
                    text?: string | undefined
                  }
                  type: 'command'
                }
              | {
                  created: number
                  payload: {
                    date: number
                    deploymentId: string
                    id: string
                    info: {
                      entrypoint?: string | undefined
                      name: string
                      path?: string | undefined
                      step?: string | undefined
                      type: string
                    }
                    serial: string
                  }
                  type: 'deployment-state'
                }
              | {
                  created: number
                  payload: {
                    date: number
                    deploymentId: string
                    id: string
                    info: {
                      entrypoint?: string | undefined
                      name: string
                      path?: string | undefined
                      step?: string | undefined
                      type: string
                    }
                    serial: string
                  }
                  type: 'delimiter'
                }
              | {
                  created: number
                  payload: {
                    created: number
                    date: number
                    deploymentId: string
                    id: string
                    serial: string
                    text?: string | undefined
                  }
                  type: 'exit'
                }
              | {
                  created: number
                  payload: {
                    date: number
                    deploymentId: string
                    id: string
                    info: {
                      entrypoint?: string | undefined
                      name: string
                      path?: string | undefined
                      step?: string | undefined
                      type: string
                    }
                    requestId?: string | undefined
                    serial: string
                    text?: string | undefined
                  }
                  type: 'middleware'
                }
              | {
                  created: number
                  payload: {
                    date: number
                    deploymentId: string
                    id: string
                    info: {
                      entrypoint?: string | undefined
                      name: string
                      path?: string | undefined
                      step?: string | undefined
                      type: string
                    }
                    requestId?: string | undefined
                    serial: string
                    statusCode?: number | undefined
                    text?: string | undefined
                  }
                  type:
                    | 'delimiter'
                    | 'command'
                    | 'stdout'
                    | 'stderr'
                    | 'exit'
                    | 'deployment-state'
                    | 'middleware'
                    | 'middleware-invocation'
                    | 'edge-function-invocation'
                    | 'fatal'
                }
              | { [x: string]: unknown }
              | {
                  created: number
                  payload: {
                    date: number
                    deploymentId: string
                    id: string
                    serial: string
                    text?: string | undefined
                  }
                  type: 'command'
                }
              | {
                  created: number
                  payload: {
                    date: number
                    deploymentId: string
                    id: string
                    info: {
                      entrypoint?: string | undefined
                      name: string
                      path?: string | undefined
                      step?: string | undefined
                      type: string
                    }
                    serial: string
                  }
                  type: 'deployment-state'
                }
              | {
                  created: number
                  payload: {
                    date: number
                    deploymentId: string
                    id: string
                    info: {
                      entrypoint?: string | undefined
                      name: string
                      path?: string | undefined
                      step?: string | undefined
                      type: string
                    }
                    serial: string
                  }
                  type: 'delimiter'
                }
              | {
                  created: number
                  payload: {
                    created: number
                    date: number
                    deploymentId: string
                    id: string
                    serial: string
                    text?: string | undefined
                  }
                  type: 'exit'
                }
              | {
                  created: number
                  payload: {
                    date: number
                    deploymentId: string
                    id: string
                    info: {
                      entrypoint?: string | undefined
                      name: string
                      path?: string | undefined
                      step?: string | undefined
                      type: string
                    }
                    requestId?: string | undefined
                    serial: string
                    text?: string | undefined
                  }
                  type: 'middleware'
                }
              | {
                  created: number
                  payload: {
                    date: number
                    deploymentId: string
                    id: string
                    info: {
                      entrypoint?: string | undefined
                      name: string
                      path?: string | undefined
                      step?: string | undefined
                      type: string
                    }
                    requestId?: string | undefined
                    serial: string
                    statusCode?: number | undefined
                    text?: string | undefined
                  }
                  type:
                    | 'delimiter'
                    | 'command'
                    | 'stdout'
                    | 'stderr'
                    | 'exit'
                    | 'deployment-state'
                    | 'middleware'
                    | 'middleware-invocation'
                    | 'edge-function-invocation'
                    | 'fatal'
                }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { idOrUrl: string } } & {
              query: {
                direction?: 'backward' | 'forward' | undefined
                follow?: 0 | 1 | undefined
                limit?: number | undefined
                name?: string | undefined
                since?: number | undefined
                until?: number | undefined
                statusCode?: number | string | undefined
                delimiter?: 0 | 1 | undefined
                builds?: 0 | 1 | undefined
                teamId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { idOrUrl: string } } & {
              query: {
                direction?: 'backward' | 'forward' | undefined
                follow?: 0 | 1 | undefined
                limit?: number | undefined
                name?: string | undefined
                since?: number | undefined
                until?: number | undefined
                statusCode?: number | string | undefined
                delimiter?: 0 | 1 | undefined
                builds?: 0 | 1 | undefined
                teamId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { idOrUrl: string } } & {
              query: {
                direction?: 'backward' | 'forward' | undefined
                follow?: 0 | 1 | undefined
                limit?: number | undefined
                name?: string | undefined
                since?: number | undefined
                until?: number | undefined
                statusCode?: number | string | undefined
                delimiter?: 0 | 1 | undefined
                builds?: 0 | 1 | undefined
                teamId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v2/deployments/:id/aliases': {
      $get:
        | {
            input: { param: { id: string } } & { query: { teamId?: string | undefined } }
            output: {
              aliases: {
                alias: string
                created: string
                protectionBypass?: { [x: string]: string } | undefined
                redirect?: (string | null) | undefined
                uid: string
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { id: string } } & { query: { teamId?: string | undefined } } & {
              json: { alias?: string | undefined; redirect?: (string | null) | undefined }
            }
            output: {
              alias: string
              created: string
              oldDeploymentId?: (string | null) | undefined
              uid: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { teamId?: string | undefined } } & {
              json: { alias?: string | undefined; redirect?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { teamId?: string | undefined } } & {
              json: { alias?: string | undefined; redirect?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { id: string } } & { query: { teamId?: string | undefined } } & {
              json: { alias?: string | undefined; redirect?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { teamId?: string | undefined } } & {
              json: { alias?: string | undefined; redirect?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { teamId?: string | undefined } } & {
              json: { alias?: string | undefined; redirect?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/v2/domains/:domain/records': {
      $post:
        | {
            input: { param: { domain: string } } & { query: { teamId?: string | undefined } } & {
              json:
                | { name: string; ttl?: number | undefined; type: 'A'; value: string }
                | { name: string; ttl?: number | undefined; type: 'AAAA'; value: string }
                | { name: string; ttl?: number | undefined; type: 'ALIAS'; value: string }
                | { name: string; ttl?: number | undefined; type: 'CAA'; value: string }
                | {
                    name: string
                    ttl?: number | undefined
                    type: 'CNAME'
                    value?: string | undefined
                  }
                | {
                    mxPriority: number
                    name: string
                    ttl?: number | undefined
                    type: 'MX'
                    value: string
                  }
                | {
                    name: string
                    srv: {
                      port: number | ({ [x: string]: unknown } | null)
                      priority: number | ({ [x: string]: unknown } | null)
                      target?: string | undefined
                      weight: number | ({ [x: string]: unknown } | null)
                    }
                    ttl?: number | undefined
                    type: 'SRV'
                  }
                | { name: string; ttl?: number | undefined; type: 'TXT'; value: string }
                | { name: string; ttl?: number | undefined; type: 'NS'; value?: string | undefined }
            }
            output: { uid: string; updated: number } | { uid: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { domain: string } } & { query: { teamId?: string | undefined } } & {
              json:
                | { name: string; ttl?: number | undefined; type: 'A'; value: string }
                | { name: string; ttl?: number | undefined; type: 'AAAA'; value: string }
                | { name: string; ttl?: number | undefined; type: 'ALIAS'; value: string }
                | { name: string; ttl?: number | undefined; type: 'CAA'; value: string }
                | {
                    name: string
                    ttl?: number | undefined
                    type: 'CNAME'
                    value?: string | undefined
                  }
                | {
                    mxPriority: number
                    name: string
                    ttl?: number | undefined
                    type: 'MX'
                    value: string
                  }
                | {
                    name: string
                    srv: {
                      port: number | ({ [x: string]: unknown } | null)
                      priority: number | ({ [x: string]: unknown } | null)
                      target?: string | undefined
                      weight: number | ({ [x: string]: unknown } | null)
                    }
                    ttl?: number | undefined
                    type: 'SRV'
                  }
                | { name: string; ttl?: number | undefined; type: 'TXT'; value: string }
                | { name: string; ttl?: number | undefined; type: 'NS'; value?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { domain: string } } & { query: { teamId?: string | undefined } } & {
              json:
                | { name: string; ttl?: number | undefined; type: 'A'; value: string }
                | { name: string; ttl?: number | undefined; type: 'AAAA'; value: string }
                | { name: string; ttl?: number | undefined; type: 'ALIAS'; value: string }
                | { name: string; ttl?: number | undefined; type: 'CAA'; value: string }
                | {
                    name: string
                    ttl?: number | undefined
                    type: 'CNAME'
                    value?: string | undefined
                  }
                | {
                    mxPriority: number
                    name: string
                    ttl?: number | undefined
                    type: 'MX'
                    value: string
                  }
                | {
                    name: string
                    srv: {
                      port: number | ({ [x: string]: unknown } | null)
                      priority: number | ({ [x: string]: unknown } | null)
                      target?: string | undefined
                      weight: number | ({ [x: string]: unknown } | null)
                    }
                    ttl?: number | undefined
                    type: 'SRV'
                  }
                | { name: string; ttl?: number | undefined; type: 'TXT'; value: string }
                | { name: string; ttl?: number | undefined; type: 'NS'; value?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { domain: string } } & { query: { teamId?: string | undefined } } & {
              json:
                | { name: string; ttl?: number | undefined; type: 'A'; value: string }
                | { name: string; ttl?: number | undefined; type: 'AAAA'; value: string }
                | { name: string; ttl?: number | undefined; type: 'ALIAS'; value: string }
                | { name: string; ttl?: number | undefined; type: 'CAA'; value: string }
                | {
                    name: string
                    ttl?: number | undefined
                    type: 'CNAME'
                    value?: string | undefined
                  }
                | {
                    mxPriority: number
                    name: string
                    ttl?: number | undefined
                    type: 'MX'
                    value: string
                  }
                | {
                    name: string
                    srv: {
                      port: number | ({ [x: string]: unknown } | null)
                      priority: number | ({ [x: string]: unknown } | null)
                      target?: string | undefined
                      weight: number | ({ [x: string]: unknown } | null)
                    }
                    ttl?: number | undefined
                    type: 'SRV'
                  }
                | { name: string; ttl?: number | undefined; type: 'TXT'; value: string }
                | { name: string; ttl?: number | undefined; type: 'NS'; value?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { domain: string } } & { query: { teamId?: string | undefined } } & {
              json:
                | { name: string; ttl?: number | undefined; type: 'A'; value: string }
                | { name: string; ttl?: number | undefined; type: 'AAAA'; value: string }
                | { name: string; ttl?: number | undefined; type: 'ALIAS'; value: string }
                | { name: string; ttl?: number | undefined; type: 'CAA'; value: string }
                | {
                    name: string
                    ttl?: number | undefined
                    type: 'CNAME'
                    value?: string | undefined
                  }
                | {
                    mxPriority: number
                    name: string
                    ttl?: number | undefined
                    type: 'MX'
                    value: string
                  }
                | {
                    name: string
                    srv: {
                      port: number | ({ [x: string]: unknown } | null)
                      priority: number | ({ [x: string]: unknown } | null)
                      target?: string | undefined
                      weight: number | ({ [x: string]: unknown } | null)
                    }
                    ttl?: number | undefined
                    type: 'SRV'
                  }
                | { name: string; ttl?: number | undefined; type: 'TXT'; value: string }
                | { name: string; ttl?: number | undefined; type: 'NS'; value?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { domain: string } } & { query: { teamId?: string | undefined } } & {
              json:
                | { name: string; ttl?: number | undefined; type: 'A'; value: string }
                | { name: string; ttl?: number | undefined; type: 'AAAA'; value: string }
                | { name: string; ttl?: number | undefined; type: 'ALIAS'; value: string }
                | { name: string; ttl?: number | undefined; type: 'CAA'; value: string }
                | {
                    name: string
                    ttl?: number | undefined
                    type: 'CNAME'
                    value?: string | undefined
                  }
                | {
                    mxPriority: number
                    name: string
                    ttl?: number | undefined
                    type: 'MX'
                    value: string
                  }
                | {
                    name: string
                    srv: {
                      port: number | ({ [x: string]: unknown } | null)
                      priority: number | ({ [x: string]: unknown } | null)
                      target?: string | undefined
                      weight: number | ({ [x: string]: unknown } | null)
                    }
                    ttl?: number | undefined
                    type: 'SRV'
                  }
                | { name: string; ttl?: number | undefined; type: 'TXT'; value: string }
                | { name: string; ttl?: number | undefined; type: 'NS'; value?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { domain: string } } & { query: { teamId?: string | undefined } } & {
              json:
                | { name: string; ttl?: number | undefined; type: 'A'; value: string }
                | { name: string; ttl?: number | undefined; type: 'AAAA'; value: string }
                | { name: string; ttl?: number | undefined; type: 'ALIAS'; value: string }
                | { name: string; ttl?: number | undefined; type: 'CAA'; value: string }
                | {
                    name: string
                    ttl?: number | undefined
                    type: 'CNAME'
                    value?: string | undefined
                  }
                | {
                    mxPriority: number
                    name: string
                    ttl?: number | undefined
                    type: 'MX'
                    value: string
                  }
                | {
                    name: string
                    srv: {
                      port: number | ({ [x: string]: unknown } | null)
                      priority: number | ({ [x: string]: unknown } | null)
                      target?: string | undefined
                      weight: number | ({ [x: string]: unknown } | null)
                    }
                    ttl?: number | undefined
                    type: 'SRV'
                  }
                | { name: string; ttl?: number | undefined; type: 'TXT'; value: string }
                | { name: string; ttl?: number | undefined; type: 'NS'; value?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/v2/domains/:domain/records/:recordId': {
      $delete:
        | {
            input: { param: { domain: string; recordId: string } } & {
              query: { teamId?: string | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { domain: string; recordId: string } } & {
              query: { teamId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { domain: string; recordId: string } } & {
              query: { teamId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { domain: string; recordId: string } } & {
              query: { teamId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { domain: string; recordId: string } } & {
              query: { teamId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v2/files': {
      $post:
        | {
            input: { query: { teamId?: string | undefined } } & {
              header: {
                'Content-Length'?: number | undefined
                'x-vercel-digest'?: string | undefined
                'x-now-digest'?: string | undefined
                'x-now-size'?: number | undefined
              }
            }
            output: { urls: string[] } | { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { teamId?: string | undefined } } & {
              header: {
                'Content-Length'?: number | undefined
                'x-vercel-digest'?: string | undefined
                'x-now-digest'?: string | undefined
                'x-now-size'?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { teamId?: string | undefined } } & {
              header: {
                'Content-Length'?: number | undefined
                'x-vercel-digest'?: string | undefined
                'x-now-digest'?: string | undefined
                'x-now-size'?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v2/integrations/log-drains': {
      $get:
        | {
            input: { query: { teamId?: string | undefined } }
            output: {
              branch?: string | undefined
              clientId?: string | undefined
              configurationId?: string | undefined
              createdAt: number
              createdFrom?: 'self-served' | 'integration' | undefined
              deliveryFormat?: 'json' | 'ndjson' | 'syslog' | undefined
              environment?: 'production' | 'preview' | undefined
              headers?: { [x: string]: string } | undefined
              id: string
              name: string
              ownerId: string
              projectId?: (string | null) | undefined
              projectIds?: string[] | undefined
              sources?: ('static' | 'lambda' | 'build' | 'edge' | 'external')[] | undefined
              type: 'json' | 'ndjson' | 'syslog'
              url: string
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: { query: { teamId?: string | undefined } } & {
              json: {
                branch?: string | undefined
                deliveryFormat?: 'json' | 'ndjson' | 'syslog' | undefined
                environment?: 'preview' | 'production' | undefined
                headers?: { [x: string]: string } | undefined
                name: string
                projectIds?: string[] | undefined
                secret?: string | undefined
                sources?: ('static' | 'lambda' | 'build' | 'edge' | 'external')[] | undefined
                url: string
              }
            }
            output: {
              branch?: string | undefined
              clientId?: string | undefined
              configurationId?: string | undefined
              createdAt: number
              createdFrom?: 'self-served' | 'integration' | undefined
              deliveryFormat?: 'json' | 'ndjson' | 'syslog' | undefined
              environment?: 'preview' | 'production' | undefined
              headers?: { [x: string]: string } | undefined
              id: string
              name: string
              ownerId: string
              projectId?: (string | null) | undefined
              projectIds?: string[] | undefined
              sources?: ('static' | 'lambda' | 'build' | 'edge' | 'external')[] | undefined
              type: 'json' | 'ndjson' | 'syslog'
              url: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { teamId?: string | undefined } } & {
              json: {
                branch?: string | undefined
                deliveryFormat?: 'json' | 'ndjson' | 'syslog' | undefined
                environment?: 'preview' | 'production' | undefined
                headers?: { [x: string]: string } | undefined
                name: string
                projectIds?: string[] | undefined
                secret?: string | undefined
                sources?: ('static' | 'lambda' | 'build' | 'edge' | 'external')[] | undefined
                url: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { teamId?: string | undefined } } & {
              json: {
                branch?: string | undefined
                deliveryFormat?: 'json' | 'ndjson' | 'syslog' | undefined
                environment?: 'preview' | 'production' | undefined
                headers?: { [x: string]: string } | undefined
                name: string
                projectIds?: string[] | undefined
                secret?: string | undefined
                sources?: ('static' | 'lambda' | 'build' | 'edge' | 'external')[] | undefined
                url: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v2/secrets/:idOrName': {
      $delete:
        | {
            input: { param: { idOrName: string } } & { query: { teamId?: string | undefined } }
            output: { created: number; name: string; uid: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { idOrName: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { idOrName: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v2/secrets/:name': {
      $patch:
        | {
            input: { param: { name: string } } & { query: { teamId?: string | undefined } } & {
              json: { name: string }
            }
            output: { created: string; name: string; oldName: string; uid: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & { query: { teamId?: string | undefined } } & {
              json: { name: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { name: string } } & { query: { teamId?: string | undefined } } & {
              json: { name: string }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: { param: { name: string } } & { query: { teamId?: string | undefined } } & {
              json: {
                decryptable?: boolean | undefined
                name: string
                projectId?: string | undefined
                value: string
              }
            }
            output: {
              created: string
              createdAt?: number | undefined
              decryptable?: boolean | undefined
              name: string
              projectId?: string | undefined
              teamId?: (string | null) | undefined
              uid: string
              userId?: string | undefined
              value: { data?: number[] | undefined; type?: 'Buffer' | undefined }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & { query: { teamId?: string | undefined } } & {
              json: {
                decryptable?: boolean | undefined
                name: string
                projectId?: string | undefined
                value: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { name: string } } & { query: { teamId?: string | undefined } } & {
              json: {
                decryptable?: boolean | undefined
                name: string
                projectId?: string | undefined
                value: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { name: string } } & { query: { teamId?: string | undefined } } & {
              json: {
                decryptable?: boolean | undefined
                name: string
                projectId?: string | undefined
                value: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v2/teams': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                since?: number | undefined
                until?: number | undefined
              }
            }
            output: { pagination: Pagination; teams: (Team | TeamLimited)[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                since?: number | undefined
                until?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                since?: number | undefined
                until?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                since?: number | undefined
                until?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v2/teams/:teamId': {
      $get:
        | {
            input: { param: { teamId: string } } & { query: { slug?: string | undefined } }
            output: Team
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamId: string } } & { query: { slug?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { teamId: string } } & { query: { slug?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { teamId: string } } & { query: { slug?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
      $patch:
        | {
            input: { param: { teamId: string } } & {
              json: {
                avatar?: string | undefined
                description?: string | undefined
                emailDomain?: (string | null) | undefined
                enablePreviewFeedback?: string | undefined
                migrateExistingEnvVariablesToSensitive?: boolean | undefined
                name?: string | undefined
                previewDeploymentSuffix?: (string | null) | undefined
                regenerateInviteCode?: boolean | undefined
                remoteCaching?: { enabled?: boolean | undefined } | undefined
                saml?:
                  | {
                      enforced?: boolean | undefined
                      roles?:
                        | { [x: string]: 'OWNER' | 'MEMBER' | 'VIEWER' | 'DEVELOPER' | 'BILLING' }
                        | undefined
                    }
                  | undefined
                sensitiveEnvironmentVariablePolicy?: string | undefined
                slug?: string | undefined
              }
            }
            output: Team
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamId: string } } & {
              json: {
                avatar?: string | undefined
                description?: string | undefined
                emailDomain?: (string | null) | undefined
                enablePreviewFeedback?: string | undefined
                migrateExistingEnvVariablesToSensitive?: boolean | undefined
                name?: string | undefined
                previewDeploymentSuffix?: (string | null) | undefined
                regenerateInviteCode?: boolean | undefined
                remoteCaching?: { enabled?: boolean | undefined } | undefined
                saml?:
                  | {
                      enforced?: boolean | undefined
                      roles?:
                        | { [x: string]: 'OWNER' | 'MEMBER' | 'VIEWER' | 'DEVELOPER' | 'BILLING' }
                        | undefined
                    }
                  | undefined
                sensitiveEnvironmentVariablePolicy?: string | undefined
                slug?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { teamId: string } } & {
              json: {
                avatar?: string | undefined
                description?: string | undefined
                emailDomain?: (string | null) | undefined
                enablePreviewFeedback?: string | undefined
                migrateExistingEnvVariablesToSensitive?: boolean | undefined
                name?: string | undefined
                previewDeploymentSuffix?: (string | null) | undefined
                regenerateInviteCode?: boolean | undefined
                remoteCaching?: { enabled?: boolean | undefined } | undefined
                saml?:
                  | {
                      enforced?: boolean | undefined
                      roles?:
                        | { [x: string]: 'OWNER' | 'MEMBER' | 'VIEWER' | 'DEVELOPER' | 'BILLING' }
                        | undefined
                    }
                  | undefined
                sensitiveEnvironmentVariablePolicy?: string | undefined
                slug?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { teamId: string } } & {
              json: {
                avatar?: string | undefined
                description?: string | undefined
                emailDomain?: (string | null) | undefined
                enablePreviewFeedback?: string | undefined
                migrateExistingEnvVariablesToSensitive?: boolean | undefined
                name?: string | undefined
                previewDeploymentSuffix?: (string | null) | undefined
                regenerateInviteCode?: boolean | undefined
                remoteCaching?: { enabled?: boolean | undefined } | undefined
                saml?:
                  | {
                      enforced?: boolean | undefined
                      roles?:
                        | { [x: string]: 'OWNER' | 'MEMBER' | 'VIEWER' | 'DEVELOPER' | 'BILLING' }
                        | undefined
                    }
                  | undefined
                sensitiveEnvironmentVariablePolicy?: string | undefined
                slug?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { teamId: string } } & {
              json: {
                avatar?: string | undefined
                description?: string | undefined
                emailDomain?: (string | null) | undefined
                enablePreviewFeedback?: string | undefined
                migrateExistingEnvVariablesToSensitive?: boolean | undefined
                name?: string | undefined
                previewDeploymentSuffix?: (string | null) | undefined
                regenerateInviteCode?: boolean | undefined
                remoteCaching?: { enabled?: boolean | undefined } | undefined
                saml?:
                  | {
                      enforced?: boolean | undefined
                      roles?:
                        | { [x: string]: 'OWNER' | 'MEMBER' | 'VIEWER' | 'DEVELOPER' | 'BILLING' }
                        | undefined
                    }
                  | undefined
                sensitiveEnvironmentVariablePolicy?: string | undefined
                slug?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v2/teams/:teamId/members': {
      $get:
        | {
            input: { param: { teamId: string } } & {
              query: {
                limit?: number | undefined
                since?: number | undefined
                until?: number | undefined
                search?: string | undefined
                role?: 'OWNER' | 'MEMBER' | 'DEVELOPER' | 'VIEWER' | undefined
                excludeProject?: string | undefined
              }
            }
            output: {
              emailInviteCodes?:
                | {
                    createdAt?: number | undefined
                    email?: string | undefined
                    id: string
                    isDSyncUser: boolean
                    role: 'MEMBER' | 'OWNER' | 'VIEWER' | 'DEVELOPER' | 'BILLING'
                  }[]
                | undefined
              members: {
                accessRequestedAt?: number | undefined
                avatar?: string | undefined
                bitbucket?:
                  | {
                      accountId?: string | undefined
                      email?: string | undefined
                      login?: string | undefined
                      userId?: number | undefined
                    }
                  | undefined
                confirmed: boolean
                createdAt: number
                email: string
                github?:
                  | {
                      accountId?: string | undefined
                      email?: string | undefined
                      login?: string | undefined
                      userId?: number | undefined
                    }
                  | undefined
                gitlab?:
                  | {
                      accountId?: string | undefined
                      email?: string | undefined
                      login?: string | undefined
                      userId?: number | undefined
                    }
                  | undefined
                joinedFrom?:
                  | {
                      commitId?: string | undefined
                      dsyncConnectedAt?: number | undefined
                      dsyncUserId?: string | undefined
                      gitUserId?: string | number | undefined
                      gitUserLogin?: string | undefined
                      idpUserId?: string | undefined
                      origin:
                        | 'import'
                        | 'gitlab'
                        | 'bitbucket'
                        | 'github'
                        | 'mail'
                        | 'link'
                        | 'teams'
                        | 'saml'
                        | 'dsync'
                        | 'feedback'
                      repoId?: string | undefined
                      repoPath?: string | undefined
                      ssoConnectedAt?: number | undefined
                      ssoUserId?: string | undefined
                    }
                  | undefined
                name?: string | undefined
                role: 'MEMBER' | 'OWNER' | 'VIEWER' | 'DEVELOPER' | 'BILLING'
                uid: string
                username: string
              }[]
              pagination: {
                count: number
                hasNext: boolean
                next: number | null
                prev: number | null
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamId: string } } & {
              query: {
                limit?: number | undefined
                since?: number | undefined
                until?: number | undefined
                search?: string | undefined
                role?: 'OWNER' | 'MEMBER' | 'DEVELOPER' | 'VIEWER' | undefined
                excludeProject?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { teamId: string } } & {
              query: {
                limit?: number | undefined
                since?: number | undefined
                until?: number | undefined
                search?: string | undefined
                role?: 'OWNER' | 'MEMBER' | 'DEVELOPER' | 'VIEWER' | undefined
                excludeProject?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { teamId: string } } & {
              query: {
                limit?: number | undefined
                since?: number | undefined
                until?: number | undefined
                search?: string | undefined
                role?: 'OWNER' | 'MEMBER' | 'DEVELOPER' | 'VIEWER' | undefined
                excludeProject?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v2/user': {
      $get:
        | {
            input: {}
            output: { user: AuthUser | AuthUserLimited }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/v3/events': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                since?: string | undefined
                until?: string | undefined
                types?: string | undefined
                userId?: string | undefined
                teamId?: string | undefined
              }
            }
            output: { events: UserEvent[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                since?: string | undefined
                until?: string | undefined
                types?: string | undefined
                userId?: string | undefined
                teamId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                since?: string | undefined
                until?: string | undefined
                types?: string | undefined
                userId?: string | undefined
                teamId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v3/secrets': {
      $get:
        | {
            input: {
              query: {
                id?: string | undefined
                projectId?: string | undefined
                teamId?: string | undefined
              }
            }
            output: {
              pagination: Pagination
              secrets: {
                created: string
                createdAt?: number | undefined
                decryptable?: boolean | undefined
                name: string
                projectId?: string | undefined
                teamId?: (string | null) | undefined
                uid: string
                userId?: string | undefined
                value?: string | undefined
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: string | undefined
                projectId?: string | undefined
                teamId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                id?: string | undefined
                projectId?: string | undefined
                teamId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v3/secrets/:idOrName': {
      $get:
        | {
            input: { param: { idOrName: string } } & {
              query: { decrypt?: 'true' | 'false' | undefined; teamId?: string | undefined }
            }
            output: {
              created: string
              createdAt?: number | undefined
              decryptable?: boolean | undefined
              name: string
              projectId?: string | undefined
              teamId?: (string | null) | undefined
              uid: string
              userId?: string | undefined
              value?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { idOrName: string } } & {
              query: { decrypt?: 'true' | 'false' | undefined; teamId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { idOrName: string } } & {
              query: { decrypt?: 'true' | 'false' | undefined; teamId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { idOrName: string } } & {
              query: { decrypt?: 'true' | 'false' | undefined; teamId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v3/user/tokens': {
      $post:
        | {
            input: { query: { teamId?: string | undefined } } & {
              json:
                | { expiresAt?: number | undefined; name: string }
                | {
                    clientId?: string | undefined
                    expiresAt?: number | undefined
                    installationId?: string | undefined
                    name: string
                    type: 'oauth2-token'
                  }
            }
            output: { bearerToken: string; token: AuthToken }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { teamId?: string | undefined } } & {
              json:
                | { expiresAt?: number | undefined; name: string }
                | {
                    clientId?: string | undefined
                    expiresAt?: number | undefined
                    installationId?: string | undefined
                    name: string
                    type: 'oauth2-token'
                  }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { teamId?: string | undefined } } & {
              json:
                | { expiresAt?: number | undefined; name: string }
                | {
                    clientId?: string | undefined
                    expiresAt?: number | undefined
                    installationId?: string | undefined
                    name: string
                    type: 'oauth2-token'
                  }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { teamId?: string | undefined } } & {
              json:
                | { expiresAt?: number | undefined; name: string }
                | {
                    clientId?: string | undefined
                    expiresAt?: number | undefined
                    installationId?: string | undefined
                    name: string
                    type: 'oauth2-token'
                  }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v3/user/tokens/:tokenId': {
      $delete:
        | {
            input: { param: { tokenId: string } }
            output: { tokenId: string }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { tokenId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { tokenId: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { tokenId: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/v4/aliases': {
      $get:
        | {
            input: {
              query: {
                domain?: unknown[] | string | undefined
                from?: number | undefined
                limit?: number | undefined
                projectId?: string | undefined
                since?: number | undefined
                until?: number | undefined
                rollbackDeploymentId?: string | undefined
                teamId?: string | undefined
              }
            }
            output: {
              aliases: {
                alias: string
                created: string
                createdAt?: number | undefined
                creator?: { email: string; uid: string; username: string } | undefined
                deletedAt?: number | undefined
                deployment?: { id: string; meta?: string | undefined; url: string } | undefined
                deploymentId: string | null
                projectId: string | null
                protectionBypass?: { [x: string]: string } | undefined
                redirect?: (string | null) | undefined
                redirectStatusCode?: 301 | 302 | 307 | 308 | undefined
                uid: string
                updatedAt?: number | undefined
              }[]
              pagination: Pagination
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                domain?: unknown[] | string | undefined
                from?: number | undefined
                limit?: number | undefined
                projectId?: string | undefined
                since?: number | undefined
                until?: number | undefined
                rollbackDeploymentId?: string | undefined
                teamId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                domain?: unknown[] | string | undefined
                from?: number | undefined
                limit?: number | undefined
                projectId?: string | undefined
                since?: number | undefined
                until?: number | undefined
                rollbackDeploymentId?: string | undefined
                teamId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v4/aliases/:idOrAlias': {
      $get:
        | {
            input: { param: { idOrAlias: string } } & {
              query: {
                from?: number | undefined
                projectId?: string | undefined
                since?: number | undefined
                until?: number | undefined
                teamId?: string | undefined
              }
            }
            output: {
              alias: string
              created: string
              createdAt?: number | undefined
              creator?: { email: string; uid: string; username: string } | undefined
              deletedAt?: number | undefined
              deployment?: { id: string; meta?: string | undefined; url: string } | undefined
              deploymentId: string | null
              projectId: string | null
              protectionBypass?: { [x: string]: string } | undefined
              redirect?: (string | null) | undefined
              redirectStatusCode?: 301 | 302 | 307 | 308 | undefined
              uid: string
              updatedAt?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { idOrAlias: string } } & {
              query: {
                from?: number | undefined
                projectId?: string | undefined
                since?: number | undefined
                until?: number | undefined
                teamId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { idOrAlias: string } } & {
              query: {
                from?: number | undefined
                projectId?: string | undefined
                since?: number | undefined
                until?: number | undefined
                teamId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { idOrAlias: string } } & {
              query: {
                from?: number | undefined
                projectId?: string | undefined
                since?: number | undefined
                until?: number | undefined
                teamId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v4/domains': {
      $post:
        | {
            input: { query: { teamId?: string | undefined } } & {
              json:
                | { method: string; name: string; token?: string | undefined }
                | {
                    authCode?: string | undefined
                    expectedPrice?: number | undefined
                    method: string
                    name: string
                  }
                | { cdnEnabled?: boolean | undefined; method?: string | undefined; name: string }
            }
            output: {
              domain: {
                boughtAt: number | null
                createdAt: number
                creator: {
                  customerId?: (string | null) | undefined
                  email: string
                  id: string
                  isDomainReseller?: boolean | undefined
                  username: string
                }
                customNameservers?: string[] | undefined
                expiresAt: number | null
                id: string
                intendedNameservers: string[]
                name: string
                nameservers: string[]
                orderedAt?: number | undefined
                renew?: boolean | undefined
                serviceType: 'zeit.world' | 'external' | 'na'
                transferStartedAt?: number | undefined
                transferredAt?: (number | null) | undefined
                verified: boolean
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { teamId?: string | undefined } } & {
              json:
                | { method: string; name: string; token?: string | undefined }
                | {
                    authCode?: string | undefined
                    expectedPrice?: number | undefined
                    method: string
                    name: string
                  }
                | { cdnEnabled?: boolean | undefined; method?: string | undefined; name: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { teamId?: string | undefined } } & {
              json:
                | { method: string; name: string; token?: string | undefined }
                | {
                    authCode?: string | undefined
                    expectedPrice?: number | undefined
                    method: string
                    name: string
                  }
                | { cdnEnabled?: boolean | undefined; method?: string | undefined; name: string }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { query: { teamId?: string | undefined } } & {
              json:
                | { method: string; name: string; token?: string | undefined }
                | {
                    authCode?: string | undefined
                    expectedPrice?: number | undefined
                    method: string
                    name: string
                  }
                | { cdnEnabled?: boolean | undefined; method?: string | undefined; name: string }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { teamId?: string | undefined } } & {
              json:
                | { method: string; name: string; token?: string | undefined }
                | {
                    authCode?: string | undefined
                    expectedPrice?: number | undefined
                    method: string
                    name: string
                  }
                | { cdnEnabled?: boolean | undefined; method?: string | undefined; name: string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { teamId?: string | undefined } } & {
              json:
                | { method: string; name: string; token?: string | undefined }
                | {
                    authCode?: string | undefined
                    expectedPrice?: number | undefined
                    method: string
                    name: string
                  }
                | { cdnEnabled?: boolean | undefined; method?: string | undefined; name: string }
            }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/v4/domains/buy': {
      $post:
        | {
            input: { query: { teamId?: string | undefined } } & {
              json: {
                expectedPrice?: number | undefined
                name: string
                renew?: boolean | undefined
              }
            }
            output: {
              domain: {
                created: number
                ns: string[]
                pending: boolean
                uid: string
                verified: boolean
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { teamId?: string | undefined } } & {
              json: {
                expectedPrice?: number | undefined
                name: string
                renew?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { teamId?: string | undefined } } & {
              json: {
                expectedPrice?: number | undefined
                name: string
                renew?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { teamId?: string | undefined } } & {
              json: {
                expectedPrice?: number | undefined
                name: string
                renew?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { query: { teamId?: string | undefined } } & {
              json: {
                expectedPrice?: number | undefined
                name: string
                renew?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/v4/domains/price': {
      $get:
        | {
            input: {
              query: {
                name: string
                type?: 'new' | 'renewal' | undefined
                teamId?: string | undefined
              }
            }
            output: { period: number; price: number }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name: string
                type?: 'new' | 'renewal' | undefined
                teamId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                name: string
                type?: 'new' | 'renewal' | undefined
                teamId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v4/domains/status': {
      $get:
        | {
            input: { query: { name: string; teamId?: string | undefined } }
            output: { available: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { name: string; teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { name: string; teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v4/domains/:domain/records': {
      $get:
        | {
            input: { param: { domain: string } } & {
              query: {
                limit?: string | undefined
                since?: string | undefined
                until?: string | undefined
                teamId?: string | undefined
              }
            }
            output:
              | string
              | {
                  records: {
                    created: number | null
                    createdAt: number | null
                    creator: string
                    id: string
                    mxPriority?: number | undefined
                    name: string
                    priority?: number | undefined
                    slug: string
                    type: 'A' | 'AAAA' | 'ALIAS' | 'CAA' | 'CNAME' | 'MX' | 'SRV' | 'TXT' | 'NS'
                    updated: number | null
                    updatedAt: number | null
                    value: string
                  }[]
                }
              | {
                  pagination: Pagination
                  records: {
                    created: number | null
                    createdAt: number | null
                    creator: string
                    id: string
                    mxPriority?: number | undefined
                    name: string
                    priority?: number | undefined
                    slug: string
                    type: 'A' | 'AAAA' | 'ALIAS' | 'CAA' | 'CNAME' | 'MX' | 'SRV' | 'TXT' | 'NS'
                    updated: number | null
                    updatedAt: number | null
                    value: string
                  }[]
                }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { domain: string } } & {
              query: {
                limit?: string | undefined
                since?: string | undefined
                until?: string | undefined
                teamId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { domain: string } } & {
              query: {
                limit?: string | undefined
                since?: string | undefined
                until?: string | undefined
                teamId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { domain: string } } & {
              query: {
                limit?: string | undefined
                since?: string | undefined
                until?: string | undefined
                teamId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { domain: string } } & {
              query: {
                limit?: string | undefined
                since?: string | undefined
                until?: string | undefined
                teamId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v5/domains': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                since?: number | undefined
                until?: number | undefined
                teamId?: string | undefined
              }
            }
            output: {
              domains: {
                boughtAt: number | null
                createdAt: number
                creator: {
                  customerId?: (string | null) | undefined
                  email: string
                  id: string
                  isDomainReseller?: boolean | undefined
                  username: string
                }
                customNameservers?: string[] | undefined
                expiresAt: number | null
                id: string
                intendedNameservers: string[]
                name: string
                nameservers: string[]
                orderedAt?: number | undefined
                renew?: boolean | undefined
                serviceType: 'zeit.world' | 'external' | 'na'
                transferStartedAt?: number | undefined
                transferredAt?: (number | null) | undefined
                verified: boolean
              }[]
              pagination: Pagination
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                since?: number | undefined
                until?: number | undefined
                teamId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                since?: number | undefined
                until?: number | undefined
                teamId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                since?: number | undefined
                until?: number | undefined
                teamId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/v5/domains/:domain': {
      $get:
        | {
            input: { param: { domain: string } } & { query: { teamId?: string | undefined } }
            output: {
              domain: {
                boughtAt: number | null
                createdAt: number
                creator: {
                  customerId?: (string | null) | undefined
                  email: string
                  id: string
                  isDomainReseller?: boolean | undefined
                  username: string
                }
                customNameservers?: string[] | undefined
                expiresAt: number | null
                id: string
                intendedNameservers: string[]
                name: string
                nameservers: string[]
                orderedAt?: number | undefined
                renew?: boolean | undefined
                serviceType: 'zeit.world' | 'external' | 'na'
                suffix: boolean
                transferStartedAt?: number | undefined
                transferredAt?: (number | null) | undefined
                verified: boolean
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { domain: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { domain: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { domain: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v5/user/tokens': {
      $get:
        | {
            input: {}
            output: { pagination: Pagination; testingToken: AuthToken; tokens: AuthToken[] }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/v5/user/tokens/:tokenId': {
      $get:
        | {
            input: { param: { tokenId: string } }
            output: { token: AuthToken }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { tokenId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { tokenId: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { tokenId: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/v6/deployments': {
      $get:
        | {
            input: {
              query: {
                app?: string | undefined
                from?: number | undefined
                limit?: number | undefined
                projectId?: string | undefined
                target?: 'production' | 'preview' | undefined
                to?: number | undefined
                users?: string | undefined
                since?: number | undefined
                until?: number | undefined
                state?: string | undefined
                rollbackCandidate?: boolean | undefined
                teamId?: string | undefined
              }
            }
            output: {
              deployments: {
                aliasAssigned?: number | boolean | undefined
                aliasError?: ({ code: string; message: string } | null) | undefined
                buildingAt?: number | undefined
                checksConclusion?: 'succeeded' | 'failed' | 'skipped' | 'canceled' | undefined
                checksState?: 'registered' | 'running' | 'completed' | undefined
                created: number
                createdAt?: number | undefined
                creator: {
                  email?: string | undefined
                  githubLogin?: string | undefined
                  gitlabLogin?: string | undefined
                  uid: string
                  username?: string | undefined
                }
                inspectorUrl: string | null
                isRollbackCandidate?: (boolean | null) | undefined
                meta?: { [x: string]: string } | undefined
                name: string
                ready?: number | undefined
                source?: 'cli' | 'git' | 'import' | 'import/repo' | 'clone/repo' | undefined
                state?:
                  | 'BUILDING'
                  | 'ERROR'
                  | 'INITIALIZING'
                  | 'QUEUED'
                  | 'READY'
                  | 'CANCELED'
                  | undefined
                target?: 'production' | 'staging' | undefined
                type: 'LAMBDAS'
                uid: string
                url: string
              }[]
              pagination: Pagination
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                app?: string | undefined
                from?: number | undefined
                limit?: number | undefined
                projectId?: string | undefined
                target?: 'production' | 'preview' | undefined
                to?: number | undefined
                users?: string | undefined
                since?: number | undefined
                until?: number | undefined
                state?: string | undefined
                rollbackCandidate?: boolean | undefined
                teamId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                app?: string | undefined
                from?: number | undefined
                limit?: number | undefined
                projectId?: string | undefined
                target?: 'production' | 'preview' | undefined
                to?: number | undefined
                users?: string | undefined
                since?: number | undefined
                until?: number | undefined
                state?: string | undefined
                rollbackCandidate?: boolean | undefined
                teamId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v6/deployments/:id/files': {
      $get:
        | {
            input: { param: { id: string } } & { query: { teamId?: string | undefined } }
            output: FileTree[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v6/deployments/:id/files/:fileId': {
      $get:
        | {
            input: { param: { id: string; fileId: string } } & {
              query: { teamId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string; fileId: string } } & {
              query: { teamId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string; fileId: string } } & {
              query: { teamId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v6/domains/:domain': {
      $delete:
        | {
            input: { param: { domain: string } } & { query: { teamId?: string | undefined } }
            output: { uid: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { domain: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { domain: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { domain: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { domain: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/v6/domains/:domain/config': {
      $get:
        | {
            input: { param: { domain: string } } & { query: { teamId?: string | undefined } }
            output: {
              acceptedChallenges?: ('dns-01' | 'http-01')[] | undefined
              configuredBy?: 'CNAME' | 'A' | 'http' | undefined
              misconfigured: boolean
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { domain: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { domain: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v7/certs': {
      $post:
        | {
            input: { query: { teamId?: string | undefined } } & {
              json: { cns?: string[] | undefined }
            }
            output: {
              autoRenew: boolean
              cns: string[]
              createdAt: number
              expiresAt: number
              id: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { teamId?: string | undefined } } & {
              json: { cns?: string[] | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { teamId?: string | undefined } } & {
              json: { cns?: string[] | undefined }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { query: { teamId?: string | undefined } } & {
              json: { cns?: string[] | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { teamId?: string | undefined } } & {
              json: { cns?: string[] | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { teamId?: string | undefined } } & {
              json: { cns?: string[] | undefined }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { query: { teamId?: string | undefined } } & {
              json: { cns?: string[] | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $put:
        | {
            input: { query: { teamId?: string | undefined } } & {
              json: { ca: string; cert: string; key: string; skipValidation?: boolean | undefined }
            }
            output: {
              autoRenew: boolean
              cns: string[]
              createdAt: number
              expiresAt: number
              id: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { teamId?: string | undefined } } & {
              json: { ca: string; cert: string; key: string; skipValidation?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { teamId?: string | undefined } } & {
              json: { ca: string; cert: string; key: string; skipValidation?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { query: { teamId?: string | undefined } } & {
              json: { ca: string; cert: string; key: string; skipValidation?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v7/certs/:id': {
      $delete:
        | {
            input: { param: { id: string } } & { query: { teamId?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { id: string } } & { query: { teamId?: string | undefined } }
            output: {
              autoRenew: boolean
              cns: string[]
              createdAt: number
              expiresAt: number
              id: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v8/artifacts': {
      $post:
        | {
            input: { query: { teamId?: string | undefined } } & { json: { hashes: string[] } }
            output: {
              [x: string]:
                | { size: number; tag?: string | undefined; taskDurationMs: number }
                | { message: string; name: string; stack?: string | undefined }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { teamId?: string | undefined } } & { json: { hashes: string[] } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { teamId?: string | undefined } } & { json: { hashes: string[] } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { teamId?: string | undefined } } & { json: { hashes: string[] } }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { query: { teamId?: string | undefined } } & { json: { hashes: string[] } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v8/artifacts/events': {
      $post:
        | {
            input: { query: { teamId?: string | undefined } } & {
              header: {
                'x-artifact-client-ci'?: string | undefined
                'x-artifact-client-interactive'?: number | undefined
              }
            } & {
              json: {
                duration?: number | undefined
                event: 'HIT' | 'MISS'
                hash: string
                sessionId: string
                source: 'LOCAL' | 'REMOTE'
              }[]
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { teamId?: string | undefined } } & {
              header: {
                'x-artifact-client-ci'?: string | undefined
                'x-artifact-client-interactive'?: number | undefined
              }
            } & {
              json: {
                duration?: number | undefined
                event: 'HIT' | 'MISS'
                hash: string
                sessionId: string
                source: 'LOCAL' | 'REMOTE'
              }[]
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { teamId?: string | undefined } } & {
              header: {
                'x-artifact-client-ci'?: string | undefined
                'x-artifact-client-interactive'?: number | undefined
              }
            } & {
              json: {
                duration?: number | undefined
                event: 'HIT' | 'MISS'
                hash: string
                sessionId: string
                source: 'LOCAL' | 'REMOTE'
              }[]
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { teamId?: string | undefined } } & {
              header: {
                'x-artifact-client-ci'?: string | undefined
                'x-artifact-client-interactive'?: number | undefined
              }
            } & {
              json: {
                duration?: number | undefined
                event: 'HIT' | 'MISS'
                hash: string
                sessionId: string
                source: 'LOCAL' | 'REMOTE'
              }[]
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { query: { teamId?: string | undefined } } & {
              header: {
                'x-artifact-client-ci'?: string | undefined
                'x-artifact-client-interactive'?: number | undefined
              }
            } & {
              json: {
                duration?: number | undefined
                event: 'HIT' | 'MISS'
                hash: string
                sessionId: string
                source: 'LOCAL' | 'REMOTE'
              }[]
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v8/artifacts/status': {
      $get:
        | {
            input: { query: { teamId?: string | undefined } }
            output: { status: 'disabled' | 'enabled' | 'over_limit' | 'paused' }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v8/artifacts/:hash': {
      $get:
        | {
            input: { param: { hash: string } } & { query: { teamId?: string | undefined } } & {
              header: {
                'x-artifact-client-ci'?: string | undefined
                'x-artifact-client-interactive'?: number | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { hash: string } } & { query: { teamId?: string | undefined } } & {
              header: {
                'x-artifact-client-ci'?: string | undefined
                'x-artifact-client-interactive'?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { hash: string } } & { query: { teamId?: string | undefined } } & {
              header: {
                'x-artifact-client-ci'?: string | undefined
                'x-artifact-client-interactive'?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { hash: string } } & { query: { teamId?: string | undefined } } & {
              header: {
                'x-artifact-client-ci'?: string | undefined
                'x-artifact-client-interactive'?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { hash: string } } & { query: { teamId?: string | undefined } } & {
              header: {
                'x-artifact-client-ci'?: string | undefined
                'x-artifact-client-interactive'?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { hash: string } } & { query: { teamId?: string | undefined } } & {
              header: {
                'x-artifact-client-ci'?: string | undefined
                'x-artifact-client-interactive'?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $head:
        | {
            input: { param: { hash: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { hash: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { hash: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { hash: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { hash: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { hash: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { hash: string } } & { query: { teamId?: string | undefined } } & {
              header: {
                'Content-Length': number
                'x-artifact-duration'?: number | undefined
                'x-artifact-client-ci'?: string | undefined
                'x-artifact-client-interactive'?: number | undefined
                'x-artifact-tag'?: string | undefined
              }
            } & { json: { [x: string]: unknown } }
            output: { urls: string[] }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { hash: string } } & { query: { teamId?: string | undefined } } & {
              header: {
                'Content-Length': number
                'x-artifact-duration'?: number | undefined
                'x-artifact-client-ci'?: string | undefined
                'x-artifact-client-interactive'?: number | undefined
                'x-artifact-tag'?: string | undefined
              }
            } & { json: { [x: string]: unknown } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { hash: string } } & { query: { teamId?: string | undefined } } & {
              header: {
                'Content-Length': number
                'x-artifact-duration'?: number | undefined
                'x-artifact-client-ci'?: string | undefined
                'x-artifact-client-interactive'?: number | undefined
                'x-artifact-tag'?: string | undefined
              }
            } & { json: { [x: string]: unknown } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { hash: string } } & { query: { teamId?: string | undefined } } & {
              header: {
                'Content-Length': number
                'x-artifact-duration'?: number | undefined
                'x-artifact-client-ci'?: string | undefined
                'x-artifact-client-interactive'?: number | undefined
                'x-artifact-tag'?: string | undefined
              }
            } & { json: { [x: string]: unknown } }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { hash: string } } & { query: { teamId?: string | undefined } } & {
              header: {
                'Content-Length': number
                'x-artifact-duration'?: number | undefined
                'x-artifact-client-ci'?: string | undefined
                'x-artifact-client-interactive'?: number | undefined
                'x-artifact-tag'?: string | undefined
              }
            } & { json: { [x: string]: unknown } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v9/projects': {
      $get:
        | {
            input: {
              query: {
                from?: string | undefined
                gitForkProtection?: '1' | '0' | undefined
                limit?: string | undefined
                search?: string | undefined
                repo?: string | undefined
                repoId?: string | undefined
                repoUrl?: string | undefined
                excludeRepos?: string | undefined
                edgeConfigId?: string | undefined
                edgeConfigTokenId?: string | undefined
                connectConfigurationId?: string | undefined
                teamId?: string | undefined
              }
            }
            output: {
              pagination: Pagination
              projects: {
                accountId: string
                analytics?:
                  | {
                      canceledAt: number | null
                      disabledAt: number
                      enabledAt: number
                      id: string
                      paidAt?: number | undefined
                      sampleRatePercent?: (number | null) | undefined
                      spendLimitInDollars?: (number | null) | undefined
                    }
                  | undefined
                autoExposeSystemEnvs?: boolean | undefined
                buildCommand?: (string | null) | undefined
                commandForIgnoringBuildStep?: (string | null) | undefined
                connectConfigurationId?: (string | null) | undefined
                createdAt?: number | undefined
                devCommand?: (string | null) | undefined
                directoryListing: boolean
                enablePreviewFeedback?: (boolean | null) | undefined
                env?:
                  | {
                      configurationId?: (string | null) | undefined
                      createdAt?: number | undefined
                      createdBy?: (string | null) | undefined
                      decrypted?: boolean | undefined
                      edgeConfigId?: (string | null) | undefined
                      edgeConfigTokenId?: (string | null) | undefined
                      gitBranch?: string | undefined
                      id?: string | undefined
                      key: string
                      target?:
                        | ('production' | 'preview' | 'development' | 'preview' | 'development')[]
                        | 'production'
                        | 'preview'
                        | 'development'
                        | 'preview'
                        | 'development'
                        | undefined
                      type: 'secret' | 'system' | 'encrypted' | 'plain' | 'sensitive'
                      updatedAt?: number | undefined
                      updatedBy?: (string | null) | undefined
                      value: string
                    }[]
                  | undefined
                framework?:
                  | 'blitzjs'
                  | 'nextjs'
                  | 'gatsby'
                  | 'remix'
                  | 'astro'
                  | 'hexo'
                  | 'eleventy'
                  | 'docusaurus-2'
                  | 'docusaurus'
                  | 'preact'
                  | 'solidstart'
                  | 'dojo'
                  | 'ember'
                  | 'vue'
                  | 'scully'
                  | 'ionic-angular'
                  | 'angular'
                  | 'polymer'
                  | 'svelte'
                  | 'sveltekit'
                  | 'sveltekit-1'
                  | 'ionic-react'
                  | 'create-react-app'
                  | 'gridsome'
                  | 'umijs'
                  | 'sapper'
                  | 'saber'
                  | 'stencil'
                  | 'nuxtjs'
                  | 'redwoodjs'
                  | 'hugo'
                  | 'jekyll'
                  | 'brunch'
                  | 'middleman'
                  | 'zola'
                  | 'hydrogen'
                  | 'vite'
                  | 'vitepress'
                  | 'vuepress'
                  | 'parcel'
                  | 'sanity'
                  | undefined
                gitForkProtection?: boolean | undefined
                hasFloatingAliases?: boolean | undefined
                id: string
                installCommand?: (string | null) | undefined
                lastRollbackTarget?:
                  | ({
                      fromDeploymentId: string
                      jobStatus: 'succeeded' | 'failed' | 'skipped' | 'pending' | 'in-progress'
                      requestedAt: number
                      toDeploymentId: string
                    } | null)
                  | undefined
                latestDeployments?:
                  | {
                      alias?: string[] | undefined
                      aliasAssigned?: number | boolean | undefined
                      aliasError?: ({ code: string; message: string } | null) | undefined
                      aliasFinal?: (string | null) | undefined
                      automaticAliases?: string[] | undefined
                      buildingAt?: number | undefined
                      builds?:
                        | { dest?: string | undefined; src?: string | undefined; use: string }[]
                        | undefined
                      checksConclusion?: 'succeeded' | 'failed' | 'skipped' | 'canceled' | undefined
                      checksState?: 'registered' | 'running' | 'completed' | undefined
                      createdAt: number
                      createdIn: string
                      creator: {
                        email: string
                        githubLogin?: string | undefined
                        gitlabLogin?: string | undefined
                        uid: string
                        username: string
                      } | null
                      deploymentHostname: string
                      forced?: boolean | undefined
                      id: string
                      meta?: { [x: string]: string } | undefined
                      monorepoManager?: (string | null) | undefined
                      name: string
                      plan: 'hobby' | 'enterprise' | 'pro' | 'oss'
                      previewCommentsEnabled?: boolean | undefined
                      private: boolean
                      readyAt?: number | undefined
                      readyState:
                        | 'BUILDING'
                        | 'ERROR'
                        | 'INITIALIZING'
                        | 'QUEUED'
                        | 'READY'
                        | 'CANCELED'
                      requestedAt?: number | undefined
                      target?: (string | null) | undefined
                      teamId?: (string | null) | undefined
                      type: 'LAMBDAS'
                      url: string
                      userId: string
                      withCache?: boolean | undefined
                    }[]
                  | undefined
                link?:
                  | {
                      createdAt?: number | undefined
                      deployHooks: {
                        createdAt?: number | undefined
                        id: string
                        name: string
                        ref: string
                        url: string
                      }[]
                      gitCredentialId?: string | undefined
                      org?: string | undefined
                      productionBranch?: string | undefined
                      repo?: string | undefined
                      repoId?: number | undefined
                      sourceless?: boolean | undefined
                      type?: 'github' | undefined
                      updatedAt?: number | undefined
                    }
                  | {
                      createdAt?: number | undefined
                      deployHooks: {
                        createdAt?: number | undefined
                        id: string
                        name: string
                        ref: string
                        url: string
                      }[]
                      gitCredentialId?: string | undefined
                      productionBranch?: string | undefined
                      projectId?: string | undefined
                      projectName?: string | undefined
                      projectNameWithNamespace?: string | undefined
                      projectNamespace?: string | undefined
                      projectUrl?: string | undefined
                      sourceless?: boolean | undefined
                      type?: 'gitlab' | undefined
                      updatedAt?: number | undefined
                    }
                  | {
                      createdAt?: number | undefined
                      deployHooks: {
                        createdAt?: number | undefined
                        id: string
                        name: string
                        ref: string
                        url: string
                      }[]
                      gitCredentialId?: string | undefined
                      name?: string | undefined
                      owner?: string | undefined
                      productionBranch?: string | undefined
                      slug?: string | undefined
                      sourceless?: boolean | undefined
                      type?: 'bitbucket' | undefined
                      updatedAt?: number | undefined
                      uuid?: string | undefined
                      workspaceUuid?: string | undefined
                    }
                  | undefined
                live?: boolean | undefined
                name: string
                nodeVersion: '18.x' | '16.x' | '14.x' | '12.x' | '10.x'
                outputDirectory?: (string | null) | undefined
                passwordProtection?: ({ deploymentType: 'preview' | 'all' } | null) | undefined
                permissions?:
                  | {
                      Monitoring?: ACLAction[] | undefined
                      aliasGlobal?: ACLAction[] | undefined
                      aliasProject?: ACLAction[] | undefined
                      aliasProtectionBypass?: ACLAction[] | undefined
                      analytics?: ACLAction[] | undefined
                      analyticsSampling?: ACLAction[] | undefined
                      analyticsUsage?: ACLAction[] | undefined
                      auditLog?: ACLAction[] | undefined
                      awsBillingIntegration?: ACLAction[] | undefined
                      billingAddress?: ACLAction[] | undefined
                      billingInformation?: ACLAction[] | undefined
                      billingInvoice?: ACLAction[] | undefined
                      billingInvoiceEmailRecipient?: ACLAction[] | undefined
                      billingInvoiceLanguage?: ACLAction[] | undefined
                      billingPlan?: ACLAction[] | undefined
                      billingPurchaseOrder?: ACLAction[] | undefined
                      billingTaxId?: ACLAction[] | undefined
                      cacheArtifact?: ACLAction[] | undefined
                      cacheArtifactUsageEvent?: ACLAction[] | undefined
                      concurrentBuilds?: ACLAction[] | undefined
                      connect?: ACLAction[] | undefined
                      connectConfiguration?: ACLAction[] | undefined
                      connectConfigurationLink?: ACLAction[] | undefined
                      deployment?: ACLAction[] | undefined
                      deploymentCheck?: ACLAction[] | undefined
                      deploymentCheckPreview?: ACLAction[] | undefined
                      deploymentPreview?: ACLAction[] | undefined
                      deploymentPrivate?: ACLAction[] | undefined
                      deploymentProductionGit?: ACLAction[] | undefined
                      deploymentRollback?: ACLAction[] | undefined
                      domain?: ACLAction[] | undefined
                      domainAcceptDelegation?: ACLAction[] | undefined
                      domainAuthCodes?: ACLAction[] | undefined
                      domainCertificate?: ACLAction[] | undefined
                      domainCheckConfig?: ACLAction[] | undefined
                      domainMove?: ACLAction[] | undefined
                      domainPurchase?: ACLAction[] | undefined
                      domainRecord?: ACLAction[] | undefined
                      domainTransferIn?: ACLAction[] | undefined
                      edgeConfig?: ACLAction[] | undefined
                      edgeConfigItem?: ACLAction[] | undefined
                      edgeConfigToken?: ACLAction[] | undefined
                      endpointVerification?: ACLAction[] | undefined
                      event?: ACLAction[] | undefined
                      fileUpload?: ACLAction[] | undefined
                      gitRepository?: ACLAction[] | undefined
                      integration?: ACLAction[] | undefined
                      integrationConfiguration?: ACLAction[] | undefined
                      integrationConfigurationProjects?: ACLAction[] | undefined
                      integrationConfigurationTransfer?: ACLAction[] | undefined
                      integrationVercelConfigurationOverride?: ACLAction[] | undefined
                      job?: ACLAction[] | undefined
                      logDrain?: ACLAction[] | undefined
                      monitoringChart?: ACLAction[] | undefined
                      monitoringQuery?: ACLAction[] | undefined
                      notificationDomainConfiguration?: ACLAction[] | undefined
                      notificationDomainExpire?: ACLAction[] | undefined
                      notificationDomainMoved?: ACLAction[] | undefined
                      notificationDomainPurchase?: ACLAction[] | undefined
                      notificationDomainRenewal?: ACLAction[] | undefined
                      notificationDomainTransfer?: ACLAction[] | undefined
                      notificationDomainUnverified?: ACLAction[] | undefined
                      notificationPaymentFailed?: ACLAction[] | undefined
                      notificationSpendCap?: ACLAction[] | undefined
                      notificationUsageAlert?: ACLAction[] | undefined
                      openTelemetryEndpoint?: ACLAction[] | undefined
                      passwordProtection?: ACLAction[] | undefined
                      paymentMethod?: ACLAction[] | undefined
                      permissions?: ACLAction[] | undefined
                      previewDeploymentSuffix?: ACLAction[] | undefined
                      proTrialOnboarding?: ACLAction[] | undefined
                      project?: ACLAction[] | undefined
                      projectDeploymentHook?: ACLAction[] | undefined
                      projectDomain?: ACLAction[] | undefined
                      projectDomainMove?: ACLAction[] | undefined
                      projectEnvVars?: ACLAction[] | undefined
                      projectEnvVarsProduction?: ACLAction[] | undefined
                      projectEnvVarsUnownedByIntegration?: ACLAction[] | undefined
                      projectIntegrationConfiguration?: ACLAction[] | undefined
                      projectLink?: ACLAction[] | undefined
                      projectMember?: ACLAction[] | undefined
                      projectProductionBranch?: ACLAction[] | undefined
                      projectProtectionBypass?: ACLAction[] | undefined
                      projectTransfer?: ACLAction[] | undefined
                      rateLimit?: ACLAction[] | undefined
                      redis?: ACLAction[] | undefined
                      remoteCaching?: ACLAction[] | undefined
                      samlConfig?: ACLAction[] | undefined
                      secret?: ACLAction[] | undefined
                      sensitiveEnvironmentVariablePolicy?: ACLAction[] | undefined
                      sharedEnvVars?: ACLAction[] | undefined
                      sharedEnvVarsProduction?: ACLAction[] | undefined
                      spendCapConfiguration?: ACLAction[] | undefined
                      spendCapState?: ACLAction[] | undefined
                      supportCase?: ACLAction[] | undefined
                      supportCaseComment?: ACLAction[] | undefined
                      team?: ACLAction[] | undefined
                      teamAccessRequest?: ACLAction[] | undefined
                      teamFellowMembership?: ACLAction[] | undefined
                      teamInvite?: ACLAction[] | undefined
                      teamInviteCode?: ACLAction[] | undefined
                      teamJoin?: ACLAction[] | undefined
                      teamOwnMembership?: ACLAction[] | undefined
                      teamOwnMembershipDisconnectSAML?: ACLAction[] | undefined
                      token?: ACLAction[] | undefined
                      usage?: ACLAction[] | undefined
                      user?: ACLAction[] | undefined
                      userConnection?: ACLAction[] | undefined
                      webAnalytics?: ACLAction[] | undefined
                      webhook?: ACLAction[] | undefined
                      'webhook-event'?: ACLAction[] | undefined
                    }
                  | undefined
                protectionBypass?: { [x: string]: string } | undefined
                publicSource?: (boolean | null) | undefined
                rootDirectory?: (string | null) | undefined
                serverlessFunctionRegion?: (string | null) | undefined
                skipGitConnectDuringLink?: boolean | undefined
                sourceFilesOutsideRootDirectory?: boolean | undefined
                ssoProtection?: ({ deploymentType: 'preview' | 'all' } | null) | undefined
                targets?: { [x: string]: string } | undefined
                transferCompletedAt?: number | undefined
                transferStartedAt?: number | undefined
                transferToAccountId?: string | undefined
                transferredFromAccountId?: string | undefined
                updatedAt?: number | undefined
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                from?: string | undefined
                gitForkProtection?: '1' | '0' | undefined
                limit?: string | undefined
                search?: string | undefined
                repo?: string | undefined
                repoId?: string | undefined
                repoUrl?: string | undefined
                excludeRepos?: string | undefined
                edgeConfigId?: string | undefined
                edgeConfigTokenId?: string | undefined
                connectConfigurationId?: string | undefined
                teamId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                from?: string | undefined
                gitForkProtection?: '1' | '0' | undefined
                limit?: string | undefined
                search?: string | undefined
                repo?: string | undefined
                repoId?: string | undefined
                repoUrl?: string | undefined
                excludeRepos?: string | undefined
                edgeConfigId?: string | undefined
                edgeConfigTokenId?: string | undefined
                connectConfigurationId?: string | undefined
                teamId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: { query: { teamId?: string | undefined } } & {
              json: {
                buildCommand?: (string | null) | undefined
                commandForIgnoringBuildStep?: (string | null) | undefined
                devCommand?: (string | null) | undefined
                environmentVariables?:
                  | {
                      gitBranch?: string | undefined
                      key: string
                      target:
                        | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Productio'
                        | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Previe'
                        | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Developmen'
                        | (
                            | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Productio'
                            | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Previe'
                            | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Developmen'
                          )[]
                      type?: 'system' | 'secret' | 'encrypted' | 'plain' | undefined
                      value: string
                    }[]
                  | undefined
                framework?:
                  | null
                  | 'blitzjs'
                  | 'nextjs'
                  | 'gatsby'
                  | 'remix'
                  | 'astro'
                  | 'hexo'
                  | 'eleventy'
                  | 'docusaurus-2'
                  | 'docusaurus'
                  | 'preact'
                  | 'solidstart'
                  | 'dojo'
                  | 'ember'
                  | 'vue'
                  | 'scully'
                  | 'ionic-angular'
                  | 'angular'
                  | 'polymer'
                  | 'svelte'
                  | 'sveltekit'
                  | 'sveltekit-1'
                  | 'ionic-react'
                  | 'create-react-app'
                  | 'gridsome'
                  | 'umijs'
                  | 'sapper'
                  | 'saber'
                  | 'stencil'
                  | 'nuxtjs'
                  | 'redwoodjs'
                  | 'hugo'
                  | 'jekyll'
                  | 'brunch'
                  | 'middleman'
                  | 'zola'
                  | 'hydrogen'
                  | 'vite'
                  | 'vitepress'
                  | 'vuepress'
                  | 'parcel'
                  | 'sanity'
                  | undefined
                gitRepository?:
                  | { repo: string; type: 'github' | 'gitlab' | 'bitbucket' }
                  | undefined
                installCommand?: (string | null) | undefined
                name: string
                outputDirectory?: (string | null) | undefined
                publicSource?: (boolean | null) | undefined
                rootDirectory?: (string | null) | undefined
                serverlessFunctionRegion?: (string | null) | undefined
                skipGitConnectDuringLink?: boolean | undefined
              }
            }
            output: {
              accountId: string
              analytics?:
                | {
                    canceledAt: number | null
                    disabledAt: number
                    enabledAt: number
                    id: string
                    paidAt?: number | undefined
                    sampleRatePercent?: (number | null) | undefined
                    spendLimitInDollars?: (number | null) | undefined
                  }
                | undefined
              autoExposeSystemEnvs?: boolean | undefined
              buildCommand?: (string | null) | undefined
              commandForIgnoringBuildStep?: (string | null) | undefined
              connectConfigurationId?: (string | null) | undefined
              createdAt?: number | undefined
              devCommand?: (string | null) | undefined
              directoryListing: boolean
              enablePreviewFeedback?: (boolean | null) | undefined
              env?:
                | {
                    configurationId?: (string | null) | undefined
                    createdAt?: number | undefined
                    createdBy?: (string | null) | undefined
                    decrypted?: boolean | undefined
                    edgeConfigId?: (string | null) | undefined
                    edgeConfigTokenId?: (string | null) | undefined
                    gitBranch?: string | undefined
                    id?: string | undefined
                    key: string
                    target?:
                      | ('production' | 'preview' | 'development' | 'preview' | 'development')[]
                      | 'production'
                      | 'preview'
                      | 'development'
                      | 'preview'
                      | 'development'
                      | undefined
                    type: 'secret' | 'system' | 'encrypted' | 'plain' | 'sensitive'
                    updatedAt?: number | undefined
                    updatedBy?: (string | null) | undefined
                    value: string
                  }[]
                | undefined
              framework?:
                | 'blitzjs'
                | 'nextjs'
                | 'gatsby'
                | 'remix'
                | 'astro'
                | 'hexo'
                | 'eleventy'
                | 'docusaurus-2'
                | 'docusaurus'
                | 'preact'
                | 'solidstart'
                | 'dojo'
                | 'ember'
                | 'vue'
                | 'scully'
                | 'ionic-angular'
                | 'angular'
                | 'polymer'
                | 'svelte'
                | 'sveltekit'
                | 'sveltekit-1'
                | 'ionic-react'
                | 'create-react-app'
                | 'gridsome'
                | 'umijs'
                | 'sapper'
                | 'saber'
                | 'stencil'
                | 'nuxtjs'
                | 'redwoodjs'
                | 'hugo'
                | 'jekyll'
                | 'brunch'
                | 'middleman'
                | 'zola'
                | 'hydrogen'
                | 'vite'
                | 'vitepress'
                | 'vuepress'
                | 'parcel'
                | 'sanity'
                | undefined
              gitForkProtection?: boolean | undefined
              hasFloatingAliases?: boolean | undefined
              id: string
              installCommand?: (string | null) | undefined
              lastRollbackTarget?:
                | ({
                    fromDeploymentId: string
                    jobStatus: 'succeeded' | 'failed' | 'skipped' | 'pending' | 'in-progress'
                    requestedAt: number
                    toDeploymentId: string
                  } | null)
                | undefined
              latestDeployments?:
                | {
                    alias?: string[] | undefined
                    aliasAssigned?: number | boolean | undefined
                    aliasError?: ({ code: string; message: string } | null) | undefined
                    aliasFinal?: (string | null) | undefined
                    automaticAliases?: string[] | undefined
                    buildingAt?: number | undefined
                    builds?:
                      | { dest?: string | undefined; src?: string | undefined; use: string }[]
                      | undefined
                    checksConclusion?: 'succeeded' | 'failed' | 'skipped' | 'canceled' | undefined
                    checksState?: 'registered' | 'running' | 'completed' | undefined
                    createdAt: number
                    createdIn: string
                    creator: {
                      email: string
                      githubLogin?: string | undefined
                      gitlabLogin?: string | undefined
                      uid: string
                      username: string
                    } | null
                    deploymentHostname: string
                    forced?: boolean | undefined
                    id: string
                    meta?: { [x: string]: string } | undefined
                    monorepoManager?: (string | null) | undefined
                    name: string
                    plan: 'hobby' | 'enterprise' | 'pro' | 'oss'
                    previewCommentsEnabled?: boolean | undefined
                    private: boolean
                    readyAt?: number | undefined
                    readyState:
                      | 'BUILDING'
                      | 'ERROR'
                      | 'INITIALIZING'
                      | 'QUEUED'
                      | 'READY'
                      | 'CANCELED'
                    requestedAt?: number | undefined
                    target?: (string | null) | undefined
                    teamId?: (string | null) | undefined
                    type: 'LAMBDAS'
                    url: string
                    userId: string
                    withCache?: boolean | undefined
                  }[]
                | undefined
              link?:
                | {
                    createdAt?: number | undefined
                    deployHooks: {
                      createdAt?: number | undefined
                      id: string
                      name: string
                      ref: string
                      url: string
                    }[]
                    gitCredentialId?: string | undefined
                    org?: string | undefined
                    productionBranch?: string | undefined
                    repo?: string | undefined
                    repoId?: number | undefined
                    sourceless?: boolean | undefined
                    type?: 'github' | undefined
                    updatedAt?: number | undefined
                  }
                | {
                    createdAt?: number | undefined
                    deployHooks: {
                      createdAt?: number | undefined
                      id: string
                      name: string
                      ref: string
                      url: string
                    }[]
                    gitCredentialId?: string | undefined
                    productionBranch?: string | undefined
                    projectId?: string | undefined
                    projectName?: string | undefined
                    projectNameWithNamespace?: string | undefined
                    projectNamespace?: string | undefined
                    projectUrl?: string | undefined
                    sourceless?: boolean | undefined
                    type?: 'gitlab' | undefined
                    updatedAt?: number | undefined
                  }
                | {
                    createdAt?: number | undefined
                    deployHooks: {
                      createdAt?: number | undefined
                      id: string
                      name: string
                      ref: string
                      url: string
                    }[]
                    gitCredentialId?: string | undefined
                    name?: string | undefined
                    owner?: string | undefined
                    productionBranch?: string | undefined
                    slug?: string | undefined
                    sourceless?: boolean | undefined
                    type?: 'bitbucket' | undefined
                    updatedAt?: number | undefined
                    uuid?: string | undefined
                    workspaceUuid?: string | undefined
                  }
                | undefined
              live?: boolean | undefined
              name: string
              nodeVersion: '18.x' | '16.x' | '14.x' | '12.x' | '10.x'
              outputDirectory?: (string | null) | undefined
              passwordProtection?: ({ deploymentType: 'preview' | 'all' } | null) | undefined
              permissions?:
                | {
                    Monitoring?: ACLAction[] | undefined
                    aliasGlobal?: ACLAction[] | undefined
                    aliasProject?: ACLAction[] | undefined
                    aliasProtectionBypass?: ACLAction[] | undefined
                    analytics?: ACLAction[] | undefined
                    analyticsSampling?: ACLAction[] | undefined
                    analyticsUsage?: ACLAction[] | undefined
                    auditLog?: ACLAction[] | undefined
                    awsBillingIntegration?: ACLAction[] | undefined
                    billingAddress?: ACLAction[] | undefined
                    billingInformation?: ACLAction[] | undefined
                    billingInvoice?: ACLAction[] | undefined
                    billingInvoiceEmailRecipient?: ACLAction[] | undefined
                    billingInvoiceLanguage?: ACLAction[] | undefined
                    billingPlan?: ACLAction[] | undefined
                    billingPurchaseOrder?: ACLAction[] | undefined
                    billingTaxId?: ACLAction[] | undefined
                    cacheArtifact?: ACLAction[] | undefined
                    cacheArtifactUsageEvent?: ACLAction[] | undefined
                    concurrentBuilds?: ACLAction[] | undefined
                    connect?: ACLAction[] | undefined
                    connectConfiguration?: ACLAction[] | undefined
                    connectConfigurationLink?: ACLAction[] | undefined
                    deployment?: ACLAction[] | undefined
                    deploymentCheck?: ACLAction[] | undefined
                    deploymentCheckPreview?: ACLAction[] | undefined
                    deploymentPreview?: ACLAction[] | undefined
                    deploymentPrivate?: ACLAction[] | undefined
                    deploymentProductionGit?: ACLAction[] | undefined
                    deploymentRollback?: ACLAction[] | undefined
                    domain?: ACLAction[] | undefined
                    domainAcceptDelegation?: ACLAction[] | undefined
                    domainAuthCodes?: ACLAction[] | undefined
                    domainCertificate?: ACLAction[] | undefined
                    domainCheckConfig?: ACLAction[] | undefined
                    domainMove?: ACLAction[] | undefined
                    domainPurchase?: ACLAction[] | undefined
                    domainRecord?: ACLAction[] | undefined
                    domainTransferIn?: ACLAction[] | undefined
                    edgeConfig?: ACLAction[] | undefined
                    edgeConfigItem?: ACLAction[] | undefined
                    edgeConfigToken?: ACLAction[] | undefined
                    endpointVerification?: ACLAction[] | undefined
                    event?: ACLAction[] | undefined
                    fileUpload?: ACLAction[] | undefined
                    gitRepository?: ACLAction[] | undefined
                    integration?: ACLAction[] | undefined
                    integrationConfiguration?: ACLAction[] | undefined
                    integrationConfigurationProjects?: ACLAction[] | undefined
                    integrationConfigurationTransfer?: ACLAction[] | undefined
                    integrationVercelConfigurationOverride?: ACLAction[] | undefined
                    job?: ACLAction[] | undefined
                    logDrain?: ACLAction[] | undefined
                    monitoringChart?: ACLAction[] | undefined
                    monitoringQuery?: ACLAction[] | undefined
                    notificationDomainConfiguration?: ACLAction[] | undefined
                    notificationDomainExpire?: ACLAction[] | undefined
                    notificationDomainMoved?: ACLAction[] | undefined
                    notificationDomainPurchase?: ACLAction[] | undefined
                    notificationDomainRenewal?: ACLAction[] | undefined
                    notificationDomainTransfer?: ACLAction[] | undefined
                    notificationDomainUnverified?: ACLAction[] | undefined
                    notificationPaymentFailed?: ACLAction[] | undefined
                    notificationSpendCap?: ACLAction[] | undefined
                    notificationUsageAlert?: ACLAction[] | undefined
                    openTelemetryEndpoint?: ACLAction[] | undefined
                    passwordProtection?: ACLAction[] | undefined
                    paymentMethod?: ACLAction[] | undefined
                    permissions?: ACLAction[] | undefined
                    previewDeploymentSuffix?: ACLAction[] | undefined
                    proTrialOnboarding?: ACLAction[] | undefined
                    project?: ACLAction[] | undefined
                    projectDeploymentHook?: ACLAction[] | undefined
                    projectDomain?: ACLAction[] | undefined
                    projectDomainMove?: ACLAction[] | undefined
                    projectEnvVars?: ACLAction[] | undefined
                    projectEnvVarsProduction?: ACLAction[] | undefined
                    projectEnvVarsUnownedByIntegration?: ACLAction[] | undefined
                    projectIntegrationConfiguration?: ACLAction[] | undefined
                    projectLink?: ACLAction[] | undefined
                    projectMember?: ACLAction[] | undefined
                    projectProductionBranch?: ACLAction[] | undefined
                    projectProtectionBypass?: ACLAction[] | undefined
                    projectTransfer?: ACLAction[] | undefined
                    rateLimit?: ACLAction[] | undefined
                    redis?: ACLAction[] | undefined
                    remoteCaching?: ACLAction[] | undefined
                    samlConfig?: ACLAction[] | undefined
                    secret?: ACLAction[] | undefined
                    sensitiveEnvironmentVariablePolicy?: ACLAction[] | undefined
                    sharedEnvVars?: ACLAction[] | undefined
                    sharedEnvVarsProduction?: ACLAction[] | undefined
                    spendCapConfiguration?: ACLAction[] | undefined
                    spendCapState?: ACLAction[] | undefined
                    supportCase?: ACLAction[] | undefined
                    supportCaseComment?: ACLAction[] | undefined
                    team?: ACLAction[] | undefined
                    teamAccessRequest?: ACLAction[] | undefined
                    teamFellowMembership?: ACLAction[] | undefined
                    teamInvite?: ACLAction[] | undefined
                    teamInviteCode?: ACLAction[] | undefined
                    teamJoin?: ACLAction[] | undefined
                    teamOwnMembership?: ACLAction[] | undefined
                    teamOwnMembershipDisconnectSAML?: ACLAction[] | undefined
                    token?: ACLAction[] | undefined
                    usage?: ACLAction[] | undefined
                    user?: ACLAction[] | undefined
                    userConnection?: ACLAction[] | undefined
                    webAnalytics?: ACLAction[] | undefined
                    webhook?: ACLAction[] | undefined
                    'webhook-event'?: ACLAction[] | undefined
                  }
                | undefined
              protectionBypass?: { [x: string]: string } | undefined
              publicSource?: (boolean | null) | undefined
              rootDirectory?: (string | null) | undefined
              serverlessFunctionRegion?: (string | null) | undefined
              skipGitConnectDuringLink?: boolean | undefined
              sourceFilesOutsideRootDirectory?: boolean | undefined
              ssoProtection?: ({ deploymentType: 'preview' | 'all' } | null) | undefined
              targets?: { [x: string]: string } | undefined
              transferCompletedAt?: number | undefined
              transferStartedAt?: number | undefined
              transferToAccountId?: string | undefined
              transferredFromAccountId?: string | undefined
              updatedAt?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { teamId?: string | undefined } } & {
              json: {
                buildCommand?: (string | null) | undefined
                commandForIgnoringBuildStep?: (string | null) | undefined
                devCommand?: (string | null) | undefined
                environmentVariables?:
                  | {
                      gitBranch?: string | undefined
                      key: string
                      target:
                        | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Productio'
                        | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Previe'
                        | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Developmen'
                        | (
                            | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Productio'
                            | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Previe'
                            | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Developmen'
                          )[]
                      type?: 'system' | 'secret' | 'encrypted' | 'plain' | undefined
                      value: string
                    }[]
                  | undefined
                framework?:
                  | null
                  | 'blitzjs'
                  | 'nextjs'
                  | 'gatsby'
                  | 'remix'
                  | 'astro'
                  | 'hexo'
                  | 'eleventy'
                  | 'docusaurus-2'
                  | 'docusaurus'
                  | 'preact'
                  | 'solidstart'
                  | 'dojo'
                  | 'ember'
                  | 'vue'
                  | 'scully'
                  | 'ionic-angular'
                  | 'angular'
                  | 'polymer'
                  | 'svelte'
                  | 'sveltekit'
                  | 'sveltekit-1'
                  | 'ionic-react'
                  | 'create-react-app'
                  | 'gridsome'
                  | 'umijs'
                  | 'sapper'
                  | 'saber'
                  | 'stencil'
                  | 'nuxtjs'
                  | 'redwoodjs'
                  | 'hugo'
                  | 'jekyll'
                  | 'brunch'
                  | 'middleman'
                  | 'zola'
                  | 'hydrogen'
                  | 'vite'
                  | 'vitepress'
                  | 'vuepress'
                  | 'parcel'
                  | 'sanity'
                  | undefined
                gitRepository?:
                  | { repo: string; type: 'github' | 'gitlab' | 'bitbucket' }
                  | undefined
                installCommand?: (string | null) | undefined
                name: string
                outputDirectory?: (string | null) | undefined
                publicSource?: (boolean | null) | undefined
                rootDirectory?: (string | null) | undefined
                serverlessFunctionRegion?: (string | null) | undefined
                skipGitConnectDuringLink?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { teamId?: string | undefined } } & {
              json: {
                buildCommand?: (string | null) | undefined
                commandForIgnoringBuildStep?: (string | null) | undefined
                devCommand?: (string | null) | undefined
                environmentVariables?:
                  | {
                      gitBranch?: string | undefined
                      key: string
                      target:
                        | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Productio'
                        | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Previe'
                        | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Developmen'
                        | (
                            | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Productio'
                            | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Previe'
                            | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Developmen'
                          )[]
                      type?: 'system' | 'secret' | 'encrypted' | 'plain' | undefined
                      value: string
                    }[]
                  | undefined
                framework?:
                  | null
                  | 'blitzjs'
                  | 'nextjs'
                  | 'gatsby'
                  | 'remix'
                  | 'astro'
                  | 'hexo'
                  | 'eleventy'
                  | 'docusaurus-2'
                  | 'docusaurus'
                  | 'preact'
                  | 'solidstart'
                  | 'dojo'
                  | 'ember'
                  | 'vue'
                  | 'scully'
                  | 'ionic-angular'
                  | 'angular'
                  | 'polymer'
                  | 'svelte'
                  | 'sveltekit'
                  | 'sveltekit-1'
                  | 'ionic-react'
                  | 'create-react-app'
                  | 'gridsome'
                  | 'umijs'
                  | 'sapper'
                  | 'saber'
                  | 'stencil'
                  | 'nuxtjs'
                  | 'redwoodjs'
                  | 'hugo'
                  | 'jekyll'
                  | 'brunch'
                  | 'middleman'
                  | 'zola'
                  | 'hydrogen'
                  | 'vite'
                  | 'vitepress'
                  | 'vuepress'
                  | 'parcel'
                  | 'sanity'
                  | undefined
                gitRepository?:
                  | { repo: string; type: 'github' | 'gitlab' | 'bitbucket' }
                  | undefined
                installCommand?: (string | null) | undefined
                name: string
                outputDirectory?: (string | null) | undefined
                publicSource?: (boolean | null) | undefined
                rootDirectory?: (string | null) | undefined
                serverlessFunctionRegion?: (string | null) | undefined
                skipGitConnectDuringLink?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { query: { teamId?: string | undefined } } & {
              json: {
                buildCommand?: (string | null) | undefined
                commandForIgnoringBuildStep?: (string | null) | undefined
                devCommand?: (string | null) | undefined
                environmentVariables?:
                  | {
                      gitBranch?: string | undefined
                      key: string
                      target:
                        | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Productio'
                        | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Previe'
                        | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Developmen'
                        | (
                            | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Productio'
                            | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Previe'
                            | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Developmen'
                          )[]
                      type?: 'system' | 'secret' | 'encrypted' | 'plain' | undefined
                      value: string
                    }[]
                  | undefined
                framework?:
                  | null
                  | 'blitzjs'
                  | 'nextjs'
                  | 'gatsby'
                  | 'remix'
                  | 'astro'
                  | 'hexo'
                  | 'eleventy'
                  | 'docusaurus-2'
                  | 'docusaurus'
                  | 'preact'
                  | 'solidstart'
                  | 'dojo'
                  | 'ember'
                  | 'vue'
                  | 'scully'
                  | 'ionic-angular'
                  | 'angular'
                  | 'polymer'
                  | 'svelte'
                  | 'sveltekit'
                  | 'sveltekit-1'
                  | 'ionic-react'
                  | 'create-react-app'
                  | 'gridsome'
                  | 'umijs'
                  | 'sapper'
                  | 'saber'
                  | 'stencil'
                  | 'nuxtjs'
                  | 'redwoodjs'
                  | 'hugo'
                  | 'jekyll'
                  | 'brunch'
                  | 'middleman'
                  | 'zola'
                  | 'hydrogen'
                  | 'vite'
                  | 'vitepress'
                  | 'vuepress'
                  | 'parcel'
                  | 'sanity'
                  | undefined
                gitRepository?:
                  | { repo: string; type: 'github' | 'gitlab' | 'bitbucket' }
                  | undefined
                installCommand?: (string | null) | undefined
                name: string
                outputDirectory?: (string | null) | undefined
                publicSource?: (boolean | null) | undefined
                rootDirectory?: (string | null) | undefined
                serverlessFunctionRegion?: (string | null) | undefined
                skipGitConnectDuringLink?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { teamId?: string | undefined } } & {
              json: {
                buildCommand?: (string | null) | undefined
                commandForIgnoringBuildStep?: (string | null) | undefined
                devCommand?: (string | null) | undefined
                environmentVariables?:
                  | {
                      gitBranch?: string | undefined
                      key: string
                      target:
                        | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Productio'
                        | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Previe'
                        | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Developmen'
                        | (
                            | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Productio'
                            | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Previe'
                            | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Developmen'
                          )[]
                      type?: 'system' | 'secret' | 'encrypted' | 'plain' | undefined
                      value: string
                    }[]
                  | undefined
                framework?:
                  | null
                  | 'blitzjs'
                  | 'nextjs'
                  | 'gatsby'
                  | 'remix'
                  | 'astro'
                  | 'hexo'
                  | 'eleventy'
                  | 'docusaurus-2'
                  | 'docusaurus'
                  | 'preact'
                  | 'solidstart'
                  | 'dojo'
                  | 'ember'
                  | 'vue'
                  | 'scully'
                  | 'ionic-angular'
                  | 'angular'
                  | 'polymer'
                  | 'svelte'
                  | 'sveltekit'
                  | 'sveltekit-1'
                  | 'ionic-react'
                  | 'create-react-app'
                  | 'gridsome'
                  | 'umijs'
                  | 'sapper'
                  | 'saber'
                  | 'stencil'
                  | 'nuxtjs'
                  | 'redwoodjs'
                  | 'hugo'
                  | 'jekyll'
                  | 'brunch'
                  | 'middleman'
                  | 'zola'
                  | 'hydrogen'
                  | 'vite'
                  | 'vitepress'
                  | 'vuepress'
                  | 'parcel'
                  | 'sanity'
                  | undefined
                gitRepository?:
                  | { repo: string; type: 'github' | 'gitlab' | 'bitbucket' }
                  | undefined
                installCommand?: (string | null) | undefined
                name: string
                outputDirectory?: (string | null) | undefined
                publicSource?: (boolean | null) | undefined
                rootDirectory?: (string | null) | undefined
                serverlessFunctionRegion?: (string | null) | undefined
                skipGitConnectDuringLink?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/v9/projects/:idOrName': {
      $delete:
        | {
            input: { param: { idOrName: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { idOrName: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { idOrName: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { idOrName: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { idOrName: string } } & { query: { teamId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 409
          }
      $get:
        | {
            input: { param: { idOrName: string | boolean } } & {
              query: { teamId?: string | undefined }
            }
            output: {
              accountId: string
              analytics?:
                | {
                    canceledAt: number | null
                    disabledAt: number
                    enabledAt: number
                    id: string
                    paidAt?: number | undefined
                    sampleRatePercent?: (number | null) | undefined
                    spendLimitInDollars?: (number | null) | undefined
                  }
                | undefined
              autoExposeSystemEnvs?: boolean | undefined
              buildCommand?: (string | null) | undefined
              commandForIgnoringBuildStep?: (string | null) | undefined
              connectConfigurationId?: (string | null) | undefined
              createdAt?: number | undefined
              devCommand?: (string | null) | undefined
              directoryListing: boolean
              enablePreviewFeedback?: (boolean | null) | undefined
              env?:
                | {
                    configurationId?: (string | null) | undefined
                    createdAt?: number | undefined
                    createdBy?: (string | null) | undefined
                    decrypted?: boolean | undefined
                    edgeConfigId?: (string | null) | undefined
                    edgeConfigTokenId?: (string | null) | undefined
                    gitBranch?: string | undefined
                    id?: string | undefined
                    key: string
                    target?:
                      | ('production' | 'preview' | 'development' | 'preview' | 'development')[]
                      | 'production'
                      | 'preview'
                      | 'development'
                      | 'preview'
                      | 'development'
                      | undefined
                    type: 'secret' | 'system' | 'encrypted' | 'plain' | 'sensitive'
                    updatedAt?: number | undefined
                    updatedBy?: (string | null) | undefined
                    value: string
                  }[]
                | undefined
              framework?:
                | 'blitzjs'
                | 'nextjs'
                | 'gatsby'
                | 'remix'
                | 'astro'
                | 'hexo'
                | 'eleventy'
                | 'docusaurus-2'
                | 'docusaurus'
                | 'preact'
                | 'solidstart'
                | 'dojo'
                | 'ember'
                | 'vue'
                | 'scully'
                | 'ionic-angular'
                | 'angular'
                | 'polymer'
                | 'svelte'
                | 'sveltekit'
                | 'sveltekit-1'
                | 'ionic-react'
                | 'create-react-app'
                | 'gridsome'
                | 'umijs'
                | 'sapper'
                | 'saber'
                | 'stencil'
                | 'nuxtjs'
                | 'redwoodjs'
                | 'hugo'
                | 'jekyll'
                | 'brunch'
                | 'middleman'
                | 'zola'
                | 'hydrogen'
                | 'vite'
                | 'vitepress'
                | 'vuepress'
                | 'parcel'
                | 'sanity'
                | undefined
              gitForkProtection?: boolean | undefined
              hasFloatingAliases?: boolean | undefined
              id: string
              installCommand?: (string | null) | undefined
              lastRollbackTarget?:
                | ({
                    fromDeploymentId: string
                    jobStatus: 'succeeded' | 'failed' | 'skipped' | 'pending' | 'in-progress'
                    requestedAt: number
                    toDeploymentId: string
                  } | null)
                | undefined
              latestDeployments?:
                | {
                    alias?: string[] | undefined
                    aliasAssigned?: number | boolean | undefined
                    aliasError?: ({ code: string; message: string } | null) | undefined
                    aliasFinal?: (string | null) | undefined
                    automaticAliases?: string[] | undefined
                    buildingAt?: number | undefined
                    builds?:
                      | { dest?: string | undefined; src?: string | undefined; use: string }[]
                      | undefined
                    checksConclusion?: 'succeeded' | 'failed' | 'skipped' | 'canceled' | undefined
                    checksState?: 'registered' | 'running' | 'completed' | undefined
                    createdAt: number
                    createdIn: string
                    creator: {
                      email: string
                      githubLogin?: string | undefined
                      gitlabLogin?: string | undefined
                      uid: string
                      username: string
                    } | null
                    deploymentHostname: string
                    forced?: boolean | undefined
                    id: string
                    meta?: { [x: string]: string } | undefined
                    monorepoManager?: (string | null) | undefined
                    name: string
                    plan: 'hobby' | 'enterprise' | 'pro' | 'oss'
                    previewCommentsEnabled?: boolean | undefined
                    private: boolean
                    readyAt?: number | undefined
                    readyState:
                      | 'BUILDING'
                      | 'ERROR'
                      | 'INITIALIZING'
                      | 'QUEUED'
                      | 'READY'
                      | 'CANCELED'
                    requestedAt?: number | undefined
                    target?: (string | null) | undefined
                    teamId?: (string | null) | undefined
                    type: 'LAMBDAS'
                    url: string
                    userId: string
                    withCache?: boolean | undefined
                  }[]
                | undefined
              link?:
                | {
                    createdAt?: number | undefined
                    deployHooks: {
                      createdAt?: number | undefined
                      id: string
                      name: string
                      ref: string
                      url: string
                    }[]
                    gitCredentialId?: string | undefined
                    org?: string | undefined
                    productionBranch?: string | undefined
                    repo?: string | undefined
                    repoId?: number | undefined
                    sourceless?: boolean | undefined
                    type?: 'github' | undefined
                    updatedAt?: number | undefined
                  }
                | {
                    createdAt?: number | undefined
                    deployHooks: {
                      createdAt?: number | undefined
                      id: string
                      name: string
                      ref: string
                      url: string
                    }[]
                    gitCredentialId?: string | undefined
                    productionBranch?: string | undefined
                    projectId?: string | undefined
                    projectName?: string | undefined
                    projectNameWithNamespace?: string | undefined
                    projectNamespace?: string | undefined
                    projectUrl?: string | undefined
                    sourceless?: boolean | undefined
                    type?: 'gitlab' | undefined
                    updatedAt?: number | undefined
                  }
                | {
                    createdAt?: number | undefined
                    deployHooks: {
                      createdAt?: number | undefined
                      id: string
                      name: string
                      ref: string
                      url: string
                    }[]
                    gitCredentialId?: string | undefined
                    name?: string | undefined
                    owner?: string | undefined
                    productionBranch?: string | undefined
                    slug?: string | undefined
                    sourceless?: boolean | undefined
                    type?: 'bitbucket' | undefined
                    updatedAt?: number | undefined
                    uuid?: string | undefined
                    workspaceUuid?: string | undefined
                  }
                | undefined
              live?: boolean | undefined
              name: string
              nodeVersion: '18.x' | '16.x' | '14.x' | '12.x' | '10.x'
              outputDirectory?: (string | null) | undefined
              passwordProtection?: ({ deploymentType: 'preview' | 'all' } | null) | undefined
              permissions?:
                | {
                    Monitoring?: ACLAction[] | undefined
                    aliasGlobal?: ACLAction[] | undefined
                    aliasProject?: ACLAction[] | undefined
                    aliasProtectionBypass?: ACLAction[] | undefined
                    analytics?: ACLAction[] | undefined
                    analyticsSampling?: ACLAction[] | undefined
                    analyticsUsage?: ACLAction[] | undefined
                    auditLog?: ACLAction[] | undefined
                    awsBillingIntegration?: ACLAction[] | undefined
                    billingAddress?: ACLAction[] | undefined
                    billingInformation?: ACLAction[] | undefined
                    billingInvoice?: ACLAction[] | undefined
                    billingInvoiceEmailRecipient?: ACLAction[] | undefined
                    billingInvoiceLanguage?: ACLAction[] | undefined
                    billingPlan?: ACLAction[] | undefined
                    billingPurchaseOrder?: ACLAction[] | undefined
                    billingTaxId?: ACLAction[] | undefined
                    cacheArtifact?: ACLAction[] | undefined
                    cacheArtifactUsageEvent?: ACLAction[] | undefined
                    concurrentBuilds?: ACLAction[] | undefined
                    connect?: ACLAction[] | undefined
                    connectConfiguration?: ACLAction[] | undefined
                    connectConfigurationLink?: ACLAction[] | undefined
                    deployment?: ACLAction[] | undefined
                    deploymentCheck?: ACLAction[] | undefined
                    deploymentCheckPreview?: ACLAction[] | undefined
                    deploymentPreview?: ACLAction[] | undefined
                    deploymentPrivate?: ACLAction[] | undefined
                    deploymentProductionGit?: ACLAction[] | undefined
                    deploymentRollback?: ACLAction[] | undefined
                    domain?: ACLAction[] | undefined
                    domainAcceptDelegation?: ACLAction[] | undefined
                    domainAuthCodes?: ACLAction[] | undefined
                    domainCertificate?: ACLAction[] | undefined
                    domainCheckConfig?: ACLAction[] | undefined
                    domainMove?: ACLAction[] | undefined
                    domainPurchase?: ACLAction[] | undefined
                    domainRecord?: ACLAction[] | undefined
                    domainTransferIn?: ACLAction[] | undefined
                    edgeConfig?: ACLAction[] | undefined
                    edgeConfigItem?: ACLAction[] | undefined
                    edgeConfigToken?: ACLAction[] | undefined
                    endpointVerification?: ACLAction[] | undefined
                    event?: ACLAction[] | undefined
                    fileUpload?: ACLAction[] | undefined
                    gitRepository?: ACLAction[] | undefined
                    integration?: ACLAction[] | undefined
                    integrationConfiguration?: ACLAction[] | undefined
                    integrationConfigurationProjects?: ACLAction[] | undefined
                    integrationConfigurationTransfer?: ACLAction[] | undefined
                    integrationVercelConfigurationOverride?: ACLAction[] | undefined
                    job?: ACLAction[] | undefined
                    logDrain?: ACLAction[] | undefined
                    monitoringChart?: ACLAction[] | undefined
                    monitoringQuery?: ACLAction[] | undefined
                    notificationDomainConfiguration?: ACLAction[] | undefined
                    notificationDomainExpire?: ACLAction[] | undefined
                    notificationDomainMoved?: ACLAction[] | undefined
                    notificationDomainPurchase?: ACLAction[] | undefined
                    notificationDomainRenewal?: ACLAction[] | undefined
                    notificationDomainTransfer?: ACLAction[] | undefined
                    notificationDomainUnverified?: ACLAction[] | undefined
                    notificationPaymentFailed?: ACLAction[] | undefined
                    notificationSpendCap?: ACLAction[] | undefined
                    notificationUsageAlert?: ACLAction[] | undefined
                    openTelemetryEndpoint?: ACLAction[] | undefined
                    passwordProtection?: ACLAction[] | undefined
                    paymentMethod?: ACLAction[] | undefined
                    permissions?: ACLAction[] | undefined
                    previewDeploymentSuffix?: ACLAction[] | undefined
                    proTrialOnboarding?: ACLAction[] | undefined
                    project?: ACLAction[] | undefined
                    projectDeploymentHook?: ACLAction[] | undefined
                    projectDomain?: ACLAction[] | undefined
                    projectDomainMove?: ACLAction[] | undefined
                    projectEnvVars?: ACLAction[] | undefined
                    projectEnvVarsProduction?: ACLAction[] | undefined
                    projectEnvVarsUnownedByIntegration?: ACLAction[] | undefined
                    projectIntegrationConfiguration?: ACLAction[] | undefined
                    projectLink?: ACLAction[] | undefined
                    projectMember?: ACLAction[] | undefined
                    projectProductionBranch?: ACLAction[] | undefined
                    projectProtectionBypass?: ACLAction[] | undefined
                    projectTransfer?: ACLAction[] | undefined
                    rateLimit?: ACLAction[] | undefined
                    redis?: ACLAction[] | undefined
                    remoteCaching?: ACLAction[] | undefined
                    samlConfig?: ACLAction[] | undefined
                    secret?: ACLAction[] | undefined
                    sensitiveEnvironmentVariablePolicy?: ACLAction[] | undefined
                    sharedEnvVars?: ACLAction[] | undefined
                    sharedEnvVarsProduction?: ACLAction[] | undefined
                    spendCapConfiguration?: ACLAction[] | undefined
                    spendCapState?: ACLAction[] | undefined
                    supportCase?: ACLAction[] | undefined
                    supportCaseComment?: ACLAction[] | undefined
                    team?: ACLAction[] | undefined
                    teamAccessRequest?: ACLAction[] | undefined
                    teamFellowMembership?: ACLAction[] | undefined
                    teamInvite?: ACLAction[] | undefined
                    teamInviteCode?: ACLAction[] | undefined
                    teamJoin?: ACLAction[] | undefined
                    teamOwnMembership?: ACLAction[] | undefined
                    teamOwnMembershipDisconnectSAML?: ACLAction[] | undefined
                    token?: ACLAction[] | undefined
                    usage?: ACLAction[] | undefined
                    user?: ACLAction[] | undefined
                    userConnection?: ACLAction[] | undefined
                    webAnalytics?: ACLAction[] | undefined
                    webhook?: ACLAction[] | undefined
                    'webhook-event'?: ACLAction[] | undefined
                  }
                | undefined
              protectionBypass?: { [x: string]: string } | undefined
              publicSource?: (boolean | null) | undefined
              rootDirectory?: (string | null) | undefined
              serverlessFunctionRegion?: (string | null) | undefined
              skipGitConnectDuringLink?: boolean | undefined
              sourceFilesOutsideRootDirectory?: boolean | undefined
              ssoProtection?: ({ deploymentType: 'preview' | 'all' } | null) | undefined
              targets?: { [x: string]: string } | undefined
              transferCompletedAt?: number | undefined
              transferStartedAt?: number | undefined
              transferToAccountId?: string | undefined
              transferredFromAccountId?: string | undefined
              updatedAt?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { idOrName: string | boolean } } & {
              query: { teamId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { idOrName: string | boolean } } & {
              query: { teamId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { idOrName: string | boolean } } & {
              query: { teamId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $patch:
        | {
            input: { param: { idOrName: string } } & { query: { teamId?: string | undefined } } & {
              json: {
                autoExposeSystemEnvs?: boolean | undefined
                buildCommand?: (string | null) | undefined
                commandForIgnoringBuildStep?: (string | null) | undefined
                devCommand?: (string | null) | undefined
                directoryListing?: boolean | undefined
                enablePreviewFeedback?: (boolean | null) | undefined
                framework?:
                  | null
                  | 'blitzjs'
                  | 'nextjs'
                  | 'gatsby'
                  | 'remix'
                  | 'astro'
                  | 'hexo'
                  | 'eleventy'
                  | 'docusaurus-2'
                  | 'docusaurus'
                  | 'preact'
                  | 'solidstart'
                  | 'dojo'
                  | 'ember'
                  | 'vue'
                  | 'scully'
                  | 'ionic-angular'
                  | 'angular'
                  | 'polymer'
                  | 'svelte'
                  | 'sveltekit'
                  | 'sveltekit-1'
                  | 'ionic-react'
                  | 'create-react-app'
                  | 'gridsome'
                  | 'umijs'
                  | 'sapper'
                  | 'saber'
                  | 'stencil'
                  | 'nuxtjs'
                  | 'redwoodjs'
                  | 'hugo'
                  | 'jekyll'
                  | 'brunch'
                  | 'middleman'
                  | 'zola'
                  | 'hydrogen'
                  | 'vite'
                  | 'vitepress'
                  | 'vuepress'
                  | 'parcel'
                  | 'sanity'
                  | undefined
                gitForkProtection?: boolean | undefined
                installCommand?: (string | null) | undefined
                name?: string | undefined
                nodeVersion?: '18.x' | '16.x' | '14.x' | '12.x' | '10.x' | undefined
                outputDirectory?: (string | null) | undefined
                passwordProtection?:
                  | ({
                      deploymentType: 'all' | 'preview'
                      password?: (string | null) | undefined
                    } | null)
                  | undefined
                publicSource?: (boolean | null) | undefined
                rootDirectory?: (string | null) | undefined
                serverlessFunctionRegion?: (string | null) | undefined
                skipGitConnectDuringLink?: boolean | undefined
                sourceFilesOutsideRootDirectory?: boolean | undefined
                ssoProtection?: ({ deploymentType: 'all' | 'preview' } | null) | undefined
              }
            }
            output: {
              accountId: string
              analytics?:
                | {
                    canceledAt: number | null
                    disabledAt: number
                    enabledAt: number
                    id: string
                    paidAt?: number | undefined
                    sampleRatePercent?: (number | null) | undefined
                    spendLimitInDollars?: (number | null) | undefined
                  }
                | undefined
              autoExposeSystemEnvs?: boolean | undefined
              buildCommand?: (string | null) | undefined
              commandForIgnoringBuildStep?: (string | null) | undefined
              connectConfigurationId?: (string | null) | undefined
              createdAt?: number | undefined
              devCommand?: (string | null) | undefined
              directoryListing: boolean
              enablePreviewFeedback?: (boolean | null) | undefined
              env?:
                | {
                    configurationId?: (string | null) | undefined
                    createdAt?: number | undefined
                    createdBy?: (string | null) | undefined
                    decrypted?: boolean | undefined
                    edgeConfigId?: (string | null) | undefined
                    edgeConfigTokenId?: (string | null) | undefined
                    gitBranch?: string | undefined
                    id?: string | undefined
                    key: string
                    target?:
                      | ('production' | 'preview' | 'development' | 'preview' | 'development')[]
                      | 'production'
                      | 'preview'
                      | 'development'
                      | 'preview'
                      | 'development'
                      | undefined
                    type: 'secret' | 'system' | 'encrypted' | 'plain' | 'sensitive'
                    updatedAt?: number | undefined
                    updatedBy?: (string | null) | undefined
                    value: string
                  }[]
                | undefined
              framework?:
                | 'blitzjs'
                | 'nextjs'
                | 'gatsby'
                | 'remix'
                | 'astro'
                | 'hexo'
                | 'eleventy'
                | 'docusaurus-2'
                | 'docusaurus'
                | 'preact'
                | 'solidstart'
                | 'dojo'
                | 'ember'
                | 'vue'
                | 'scully'
                | 'ionic-angular'
                | 'angular'
                | 'polymer'
                | 'svelte'
                | 'sveltekit'
                | 'sveltekit-1'
                | 'ionic-react'
                | 'create-react-app'
                | 'gridsome'
                | 'umijs'
                | 'sapper'
                | 'saber'
                | 'stencil'
                | 'nuxtjs'
                | 'redwoodjs'
                | 'hugo'
                | 'jekyll'
                | 'brunch'
                | 'middleman'
                | 'zola'
                | 'hydrogen'
                | 'vite'
                | 'vitepress'
                | 'vuepress'
                | 'parcel'
                | 'sanity'
                | undefined
              gitForkProtection?: boolean | undefined
              hasFloatingAliases?: boolean | undefined
              id: string
              installCommand?: (string | null) | undefined
              lastRollbackTarget?:
                | ({
                    fromDeploymentId: string
                    jobStatus: 'succeeded' | 'failed' | 'skipped' | 'pending' | 'in-progress'
                    requestedAt: number
                    toDeploymentId: string
                  } | null)
                | undefined
              latestDeployments?:
                | {
                    alias?: string[] | undefined
                    aliasAssigned?: number | boolean | undefined
                    aliasError?: ({ code: string; message: string } | null) | undefined
                    aliasFinal?: (string | null) | undefined
                    automaticAliases?: string[] | undefined
                    buildingAt?: number | undefined
                    builds?:
                      | { dest?: string | undefined; src?: string | undefined; use: string }[]
                      | undefined
                    checksConclusion?: 'succeeded' | 'failed' | 'skipped' | 'canceled' | undefined
                    checksState?: 'registered' | 'running' | 'completed' | undefined
                    createdAt: number
                    createdIn: string
                    creator: {
                      email: string
                      githubLogin?: string | undefined
                      gitlabLogin?: string | undefined
                      uid: string
                      username: string
                    } | null
                    deploymentHostname: string
                    forced?: boolean | undefined
                    id: string
                    meta?: { [x: string]: string } | undefined
                    monorepoManager?: (string | null) | undefined
                    name: string
                    plan: 'hobby' | 'enterprise' | 'pro' | 'oss'
                    previewCommentsEnabled?: boolean | undefined
                    private: boolean
                    readyAt?: number | undefined
                    readyState:
                      | 'BUILDING'
                      | 'ERROR'
                      | 'INITIALIZING'
                      | 'QUEUED'
                      | 'READY'
                      | 'CANCELED'
                    requestedAt?: number | undefined
                    target?: (string | null) | undefined
                    teamId?: (string | null) | undefined
                    type: 'LAMBDAS'
                    url: string
                    userId: string
                    withCache?: boolean | undefined
                  }[]
                | undefined
              link?:
                | {
                    createdAt?: number | undefined
                    deployHooks: {
                      createdAt?: number | undefined
                      id: string
                      name: string
                      ref: string
                      url: string
                    }[]
                    gitCredentialId?: string | undefined
                    org?: string | undefined
                    productionBranch?: string | undefined
                    repo?: string | undefined
                    repoId?: number | undefined
                    sourceless?: boolean | undefined
                    type?: 'github' | undefined
                    updatedAt?: number | undefined
                  }
                | {
                    createdAt?: number | undefined
                    deployHooks: {
                      createdAt?: number | undefined
                      id: string
                      name: string
                      ref: string
                      url: string
                    }[]
                    gitCredentialId?: string | undefined
                    productionBranch?: string | undefined
                    projectId?: string | undefined
                    projectName?: string | undefined
                    projectNameWithNamespace?: string | undefined
                    projectNamespace?: string | undefined
                    projectUrl?: string | undefined
                    sourceless?: boolean | undefined
                    type?: 'gitlab' | undefined
                    updatedAt?: number | undefined
                  }
                | {
                    createdAt?: number | undefined
                    deployHooks: {
                      createdAt?: number | undefined
                      id: string
                      name: string
                      ref: string
                      url: string
                    }[]
                    gitCredentialId?: string | undefined
                    name?: string | undefined
                    owner?: string | undefined
                    productionBranch?: string | undefined
                    slug?: string | undefined
                    sourceless?: boolean | undefined
                    type?: 'bitbucket' | undefined
                    updatedAt?: number | undefined
                    uuid?: string | undefined
                    workspaceUuid?: string | undefined
                  }
                | undefined
              live?: boolean | undefined
              name: string
              nodeVersion: '18.x' | '16.x' | '14.x' | '12.x' | '10.x'
              outputDirectory?: (string | null) | undefined
              passwordProtection?: ({ deploymentType: 'all' | 'preview' } | null) | undefined
              permissions?:
                | {
                    Monitoring?: ACLAction[] | undefined
                    aliasGlobal?: ACLAction[] | undefined
                    aliasProject?: ACLAction[] | undefined
                    aliasProtectionBypass?: ACLAction[] | undefined
                    analytics?: ACLAction[] | undefined
                    analyticsSampling?: ACLAction[] | undefined
                    analyticsUsage?: ACLAction[] | undefined
                    auditLog?: ACLAction[] | undefined
                    awsBillingIntegration?: ACLAction[] | undefined
                    billingAddress?: ACLAction[] | undefined
                    billingInformation?: ACLAction[] | undefined
                    billingInvoice?: ACLAction[] | undefined
                    billingInvoiceEmailRecipient?: ACLAction[] | undefined
                    billingInvoiceLanguage?: ACLAction[] | undefined
                    billingPlan?: ACLAction[] | undefined
                    billingPurchaseOrder?: ACLAction[] | undefined
                    billingTaxId?: ACLAction[] | undefined
                    cacheArtifact?: ACLAction[] | undefined
                    cacheArtifactUsageEvent?: ACLAction[] | undefined
                    concurrentBuilds?: ACLAction[] | undefined
                    connect?: ACLAction[] | undefined
                    connectConfiguration?: ACLAction[] | undefined
                    connectConfigurationLink?: ACLAction[] | undefined
                    deployment?: ACLAction[] | undefined
                    deploymentCheck?: ACLAction[] | undefined
                    deploymentCheckPreview?: ACLAction[] | undefined
                    deploymentPreview?: ACLAction[] | undefined
                    deploymentPrivate?: ACLAction[] | undefined
                    deploymentProductionGit?: ACLAction[] | undefined
                    deploymentRollback?: ACLAction[] | undefined
                    domain?: ACLAction[] | undefined
                    domainAcceptDelegation?: ACLAction[] | undefined
                    domainAuthCodes?: ACLAction[] | undefined
                    domainCertificate?: ACLAction[] | undefined
                    domainCheckConfig?: ACLAction[] | undefined
                    domainMove?: ACLAction[] | undefined
                    domainPurchase?: ACLAction[] | undefined
                    domainRecord?: ACLAction[] | undefined
                    domainTransferIn?: ACLAction[] | undefined
                    edgeConfig?: ACLAction[] | undefined
                    edgeConfigItem?: ACLAction[] | undefined
                    edgeConfigToken?: ACLAction[] | undefined
                    endpointVerification?: ACLAction[] | undefined
                    event?: ACLAction[] | undefined
                    fileUpload?: ACLAction[] | undefined
                    gitRepository?: ACLAction[] | undefined
                    integration?: ACLAction[] | undefined
                    integrationConfiguration?: ACLAction[] | undefined
                    integrationConfigurationProjects?: ACLAction[] | undefined
                    integrationConfigurationTransfer?: ACLAction[] | undefined
                    integrationVercelConfigurationOverride?: ACLAction[] | undefined
                    job?: ACLAction[] | undefined
                    logDrain?: ACLAction[] | undefined
                    monitoringChart?: ACLAction[] | undefined
                    monitoringQuery?: ACLAction[] | undefined
                    notificationDomainConfiguration?: ACLAction[] | undefined
                    notificationDomainExpire?: ACLAction[] | undefined
                    notificationDomainMoved?: ACLAction[] | undefined
                    notificationDomainPurchase?: ACLAction[] | undefined
                    notificationDomainRenewal?: ACLAction[] | undefined
                    notificationDomainTransfer?: ACLAction[] | undefined
                    notificationDomainUnverified?: ACLAction[] | undefined
                    notificationPaymentFailed?: ACLAction[] | undefined
                    notificationSpendCap?: ACLAction[] | undefined
                    notificationUsageAlert?: ACLAction[] | undefined
                    openTelemetryEndpoint?: ACLAction[] | undefined
                    passwordProtection?: ACLAction[] | undefined
                    paymentMethod?: ACLAction[] | undefined
                    permissions?: ACLAction[] | undefined
                    previewDeploymentSuffix?: ACLAction[] | undefined
                    proTrialOnboarding?: ACLAction[] | undefined
                    project?: ACLAction[] | undefined
                    projectDeploymentHook?: ACLAction[] | undefined
                    projectDomain?: ACLAction[] | undefined
                    projectDomainMove?: ACLAction[] | undefined
                    projectEnvVars?: ACLAction[] | undefined
                    projectEnvVarsProduction?: ACLAction[] | undefined
                    projectEnvVarsUnownedByIntegration?: ACLAction[] | undefined
                    projectIntegrationConfiguration?: ACLAction[] | undefined
                    projectLink?: ACLAction[] | undefined
                    projectMember?: ACLAction[] | undefined
                    projectProductionBranch?: ACLAction[] | undefined
                    projectProtectionBypass?: ACLAction[] | undefined
                    projectTransfer?: ACLAction[] | undefined
                    rateLimit?: ACLAction[] | undefined
                    redis?: ACLAction[] | undefined
                    remoteCaching?: ACLAction[] | undefined
                    samlConfig?: ACLAction[] | undefined
                    secret?: ACLAction[] | undefined
                    sensitiveEnvironmentVariablePolicy?: ACLAction[] | undefined
                    sharedEnvVars?: ACLAction[] | undefined
                    sharedEnvVarsProduction?: ACLAction[] | undefined
                    spendCapConfiguration?: ACLAction[] | undefined
                    spendCapState?: ACLAction[] | undefined
                    supportCase?: ACLAction[] | undefined
                    supportCaseComment?: ACLAction[] | undefined
                    team?: ACLAction[] | undefined
                    teamAccessRequest?: ACLAction[] | undefined
                    teamFellowMembership?: ACLAction[] | undefined
                    teamInvite?: ACLAction[] | undefined
                    teamInviteCode?: ACLAction[] | undefined
                    teamJoin?: ACLAction[] | undefined
                    teamOwnMembership?: ACLAction[] | undefined
                    teamOwnMembershipDisconnectSAML?: ACLAction[] | undefined
                    token?: ACLAction[] | undefined
                    usage?: ACLAction[] | undefined
                    user?: ACLAction[] | undefined
                    userConnection?: ACLAction[] | undefined
                    webAnalytics?: ACLAction[] | undefined
                    webhook?: ACLAction[] | undefined
                    'webhook-event'?: ACLAction[] | undefined
                  }
                | undefined
              protectionBypass?: { [x: string]: string } | undefined
              publicSource?: (boolean | null) | undefined
              rootDirectory?: (string | null) | undefined
              serverlessFunctionRegion?: (string | null) | undefined
              skipGitConnectDuringLink?: boolean | undefined
              sourceFilesOutsideRootDirectory?: boolean | undefined
              ssoProtection?: ({ deploymentType: 'all' | 'preview' } | null) | undefined
              targets?: { [x: string]: string } | undefined
              transferCompletedAt?: number | undefined
              transferStartedAt?: number | undefined
              transferToAccountId?: string | undefined
              transferredFromAccountId?: string | undefined
              updatedAt?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { idOrName: string } } & { query: { teamId?: string | undefined } } & {
              json: {
                autoExposeSystemEnvs?: boolean | undefined
                buildCommand?: (string | null) | undefined
                commandForIgnoringBuildStep?: (string | null) | undefined
                devCommand?: (string | null) | undefined
                directoryListing?: boolean | undefined
                enablePreviewFeedback?: (boolean | null) | undefined
                framework?:
                  | null
                  | 'blitzjs'
                  | 'nextjs'
                  | 'gatsby'
                  | 'remix'
                  | 'astro'
                  | 'hexo'
                  | 'eleventy'
                  | 'docusaurus-2'
                  | 'docusaurus'
                  | 'preact'
                  | 'solidstart'
                  | 'dojo'
                  | 'ember'
                  | 'vue'
                  | 'scully'
                  | 'ionic-angular'
                  | 'angular'
                  | 'polymer'
                  | 'svelte'
                  | 'sveltekit'
                  | 'sveltekit-1'
                  | 'ionic-react'
                  | 'create-react-app'
                  | 'gridsome'
                  | 'umijs'
                  | 'sapper'
                  | 'saber'
                  | 'stencil'
                  | 'nuxtjs'
                  | 'redwoodjs'
                  | 'hugo'
                  | 'jekyll'
                  | 'brunch'
                  | 'middleman'
                  | 'zola'
                  | 'hydrogen'
                  | 'vite'
                  | 'vitepress'
                  | 'vuepress'
                  | 'parcel'
                  | 'sanity'
                  | undefined
                gitForkProtection?: boolean | undefined
                installCommand?: (string | null) | undefined
                name?: string | undefined
                nodeVersion?: '18.x' | '16.x' | '14.x' | '12.x' | '10.x' | undefined
                outputDirectory?: (string | null) | undefined
                passwordProtection?:
                  | ({
                      deploymentType: 'all' | 'preview'
                      password?: (string | null) | undefined
                    } | null)
                  | undefined
                publicSource?: (boolean | null) | undefined
                rootDirectory?: (string | null) | undefined
                serverlessFunctionRegion?: (string | null) | undefined
                skipGitConnectDuringLink?: boolean | undefined
                sourceFilesOutsideRootDirectory?: boolean | undefined
                ssoProtection?: ({ deploymentType: 'all' | 'preview' } | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { idOrName: string } } & { query: { teamId?: string | undefined } } & {
              json: {
                autoExposeSystemEnvs?: boolean | undefined
                buildCommand?: (string | null) | undefined
                commandForIgnoringBuildStep?: (string | null) | undefined
                devCommand?: (string | null) | undefined
                directoryListing?: boolean | undefined
                enablePreviewFeedback?: (boolean | null) | undefined
                framework?:
                  | null
                  | 'blitzjs'
                  | 'nextjs'
                  | 'gatsby'
                  | 'remix'
                  | 'astro'
                  | 'hexo'
                  | 'eleventy'
                  | 'docusaurus-2'
                  | 'docusaurus'
                  | 'preact'
                  | 'solidstart'
                  | 'dojo'
                  | 'ember'
                  | 'vue'
                  | 'scully'
                  | 'ionic-angular'
                  | 'angular'
                  | 'polymer'
                  | 'svelte'
                  | 'sveltekit'
                  | 'sveltekit-1'
                  | 'ionic-react'
                  | 'create-react-app'
                  | 'gridsome'
                  | 'umijs'
                  | 'sapper'
                  | 'saber'
                  | 'stencil'
                  | 'nuxtjs'
                  | 'redwoodjs'
                  | 'hugo'
                  | 'jekyll'
                  | 'brunch'
                  | 'middleman'
                  | 'zola'
                  | 'hydrogen'
                  | 'vite'
                  | 'vitepress'
                  | 'vuepress'
                  | 'parcel'
                  | 'sanity'
                  | undefined
                gitForkProtection?: boolean | undefined
                installCommand?: (string | null) | undefined
                name?: string | undefined
                nodeVersion?: '18.x' | '16.x' | '14.x' | '12.x' | '10.x' | undefined
                outputDirectory?: (string | null) | undefined
                passwordProtection?:
                  | ({
                      deploymentType: 'all' | 'preview'
                      password?: (string | null) | undefined
                    } | null)
                  | undefined
                publicSource?: (boolean | null) | undefined
                rootDirectory?: (string | null) | undefined
                serverlessFunctionRegion?: (string | null) | undefined
                skipGitConnectDuringLink?: boolean | undefined
                sourceFilesOutsideRootDirectory?: boolean | undefined
                ssoProtection?: ({ deploymentType: 'all' | 'preview' } | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { idOrName: string } } & { query: { teamId?: string | undefined } } & {
              json: {
                autoExposeSystemEnvs?: boolean | undefined
                buildCommand?: (string | null) | undefined
                commandForIgnoringBuildStep?: (string | null) | undefined
                devCommand?: (string | null) | undefined
                directoryListing?: boolean | undefined
                enablePreviewFeedback?: (boolean | null) | undefined
                framework?:
                  | null
                  | 'blitzjs'
                  | 'nextjs'
                  | 'gatsby'
                  | 'remix'
                  | 'astro'
                  | 'hexo'
                  | 'eleventy'
                  | 'docusaurus-2'
                  | 'docusaurus'
                  | 'preact'
                  | 'solidstart'
                  | 'dojo'
                  | 'ember'
                  | 'vue'
                  | 'scully'
                  | 'ionic-angular'
                  | 'angular'
                  | 'polymer'
                  | 'svelte'
                  | 'sveltekit'
                  | 'sveltekit-1'
                  | 'ionic-react'
                  | 'create-react-app'
                  | 'gridsome'
                  | 'umijs'
                  | 'sapper'
                  | 'saber'
                  | 'stencil'
                  | 'nuxtjs'
                  | 'redwoodjs'
                  | 'hugo'
                  | 'jekyll'
                  | 'brunch'
                  | 'middleman'
                  | 'zola'
                  | 'hydrogen'
                  | 'vite'
                  | 'vitepress'
                  | 'vuepress'
                  | 'parcel'
                  | 'sanity'
                  | undefined
                gitForkProtection?: boolean | undefined
                installCommand?: (string | null) | undefined
                name?: string | undefined
                nodeVersion?: '18.x' | '16.x' | '14.x' | '12.x' | '10.x' | undefined
                outputDirectory?: (string | null) | undefined
                passwordProtection?:
                  | ({
                      deploymentType: 'all' | 'preview'
                      password?: (string | null) | undefined
                    } | null)
                  | undefined
                publicSource?: (boolean | null) | undefined
                rootDirectory?: (string | null) | undefined
                serverlessFunctionRegion?: (string | null) | undefined
                skipGitConnectDuringLink?: boolean | undefined
                sourceFilesOutsideRootDirectory?: boolean | undefined
                ssoProtection?: ({ deploymentType: 'all' | 'preview' } | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { idOrName: string } } & { query: { teamId?: string | undefined } } & {
              json: {
                autoExposeSystemEnvs?: boolean | undefined
                buildCommand?: (string | null) | undefined
                commandForIgnoringBuildStep?: (string | null) | undefined
                devCommand?: (string | null) | undefined
                directoryListing?: boolean | undefined
                enablePreviewFeedback?: (boolean | null) | undefined
                framework?:
                  | null
                  | 'blitzjs'
                  | 'nextjs'
                  | 'gatsby'
                  | 'remix'
                  | 'astro'
                  | 'hexo'
                  | 'eleventy'
                  | 'docusaurus-2'
                  | 'docusaurus'
                  | 'preact'
                  | 'solidstart'
                  | 'dojo'
                  | 'ember'
                  | 'vue'
                  | 'scully'
                  | 'ionic-angular'
                  | 'angular'
                  | 'polymer'
                  | 'svelte'
                  | 'sveltekit'
                  | 'sveltekit-1'
                  | 'ionic-react'
                  | 'create-react-app'
                  | 'gridsome'
                  | 'umijs'
                  | 'sapper'
                  | 'saber'
                  | 'stencil'
                  | 'nuxtjs'
                  | 'redwoodjs'
                  | 'hugo'
                  | 'jekyll'
                  | 'brunch'
                  | 'middleman'
                  | 'zola'
                  | 'hydrogen'
                  | 'vite'
                  | 'vitepress'
                  | 'vuepress'
                  | 'parcel'
                  | 'sanity'
                  | undefined
                gitForkProtection?: boolean | undefined
                installCommand?: (string | null) | undefined
                name?: string | undefined
                nodeVersion?: '18.x' | '16.x' | '14.x' | '12.x' | '10.x' | undefined
                outputDirectory?: (string | null) | undefined
                passwordProtection?:
                  | ({
                      deploymentType: 'all' | 'preview'
                      password?: (string | null) | undefined
                    } | null)
                  | undefined
                publicSource?: (boolean | null) | undefined
                rootDirectory?: (string | null) | undefined
                serverlessFunctionRegion?: (string | null) | undefined
                skipGitConnectDuringLink?: boolean | undefined
                sourceFilesOutsideRootDirectory?: boolean | undefined
                ssoProtection?: ({ deploymentType: 'all' | 'preview' } | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/v9/projects/:idOrName/domains': {
      $get:
        | {
            input: { param: { idOrName: string | number } } & {
              query: {
                production?: 'true' | 'false' | undefined
                gitBranch?: string | undefined
                redirects?: 'true' | 'false' | undefined
                redirect?: string | undefined
                verified?: 'true' | 'false' | undefined
                limit?: number | undefined
                since?: number | undefined
                until?: number | undefined
                order?: 'ASC' | 'DESC' | undefined
                teamId?: string | undefined
              }
            }
            output: {
              domains: {
                apexName: string
                createdAt?: number | undefined
                gitBranch?: (string | null) | undefined
                name: string
                projectId: string
                redirect?: (string | null) | undefined
                redirectStatusCode?: 307 | 301 | 302 | 308 | undefined
                updatedAt?: number | undefined
                verification?:
                  | { domain: string; reason: string; type: string; value: string }[]
                  | undefined
                verified: boolean
              }[]
              pagination: Pagination
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { idOrName: string | number } } & {
              query: {
                production?: 'true' | 'false' | undefined
                gitBranch?: string | undefined
                redirects?: 'true' | 'false' | undefined
                redirect?: string | undefined
                verified?: 'true' | 'false' | undefined
                limit?: number | undefined
                since?: number | undefined
                until?: number | undefined
                order?: 'ASC' | 'DESC' | undefined
                teamId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { idOrName: string | number } } & {
              query: {
                production?: 'true' | 'false' | undefined
                gitBranch?: string | undefined
                redirects?: 'true' | 'false' | undefined
                redirect?: string | undefined
                verified?: 'true' | 'false' | undefined
                limit?: number | undefined
                since?: number | undefined
                until?: number | undefined
                order?: 'ASC' | 'DESC' | undefined
                teamId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { idOrName: string | number } } & {
              query: {
                production?: 'true' | 'false' | undefined
                gitBranch?: string | undefined
                redirects?: 'true' | 'false' | undefined
                redirect?: string | undefined
                verified?: 'true' | 'false' | undefined
                limit?: number | undefined
                since?: number | undefined
                until?: number | undefined
                order?: 'ASC' | 'DESC' | undefined
                teamId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { idOrName: string } } & { query: { teamId?: string | undefined } } & {
              json: {
                gitBranch?: (string | null) | undefined
                name: string
                redirect?: (string | null) | undefined
                redirectStatusCode?: null | 301 | 302 | 307 | 308 | undefined
              }
            }
            output: {
              apexName: string
              createdAt?: number | undefined
              gitBranch?: (string | null) | undefined
              name: string
              projectId: string
              redirect?: (string | null) | undefined
              redirectStatusCode?: 307 | 301 | 302 | 308 | undefined
              updatedAt?: number | undefined
              verification?:
                | { domain: string; reason: string; type: string; value: string }[]
                | undefined
              verified: boolean
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { idOrName: string } } & { query: { teamId?: string | undefined } } & {
              json: {
                gitBranch?: (string | null) | undefined
                name: string
                redirect?: (string | null) | undefined
                redirectStatusCode?: null | 301 | 302 | 307 | 308 | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { idOrName: string } } & { query: { teamId?: string | undefined } } & {
              json: {
                gitBranch?: (string | null) | undefined
                name: string
                redirect?: (string | null) | undefined
                redirectStatusCode?: null | 301 | 302 | 307 | 308 | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { idOrName: string } } & { query: { teamId?: string | undefined } } & {
              json: {
                gitBranch?: (string | null) | undefined
                name: string
                redirect?: (string | null) | undefined
                redirectStatusCode?: null | 301 | 302 | 307 | 308 | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { idOrName: string } } & { query: { teamId?: string | undefined } } & {
              json: {
                gitBranch?: (string | null) | undefined
                name: string
                redirect?: (string | null) | undefined
                redirectStatusCode?: null | 301 | 302 | 307 | 308 | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { idOrName: string } } & { query: { teamId?: string | undefined } } & {
              json: {
                gitBranch?: (string | null) | undefined
                name: string
                redirect?: (string | null) | undefined
                redirectStatusCode?: null | 301 | 302 | 307 | 308 | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/v9/projects/:idOrName/domains/:domain': {
      $delete:
        | {
            input: { param: { idOrName: string; domain: string } } & {
              query: { teamId?: string | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { idOrName: string; domain: string } } & {
              query: { teamId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { idOrName: string; domain: string } } & {
              query: { teamId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { idOrName: string; domain: string } } & {
              query: { teamId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { idOrName: string; domain: string } } & {
              query: { teamId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 409
          }
      $get:
        | {
            input: { param: { idOrName: string; domain: string } } & {
              query: { teamId?: string | undefined }
            }
            output: {
              apexName: string
              createdAt?: number | undefined
              gitBranch?: (string | null) | undefined
              name: string
              projectId: string
              redirect?: (string | null) | undefined
              redirectStatusCode?: 307 | 301 | 302 | 308 | undefined
              updatedAt?: number | undefined
              verification?:
                | { domain: string; reason: string; type: string; value: string }[]
                | undefined
              verified: boolean
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { idOrName: string; domain: string } } & {
              query: { teamId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { idOrName: string; domain: string } } & {
              query: { teamId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { idOrName: string; domain: string } } & {
              query: { teamId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $patch:
        | {
            input: { param: { idOrName: string; domain: string } } & {
              query: { teamId?: string | undefined }
            } & {
              json: {
                gitBranch?: (string | null) | undefined
                redirect?: (string | null) | undefined
                redirectStatusCode?: null | 301 | 302 | 307 | 308 | undefined
              }
            }
            output: {
              apexName: string
              createdAt?: number | undefined
              gitBranch?: (string | null) | undefined
              name: string
              projectId: string
              redirect?: (string | null) | undefined
              redirectStatusCode?: 307 | 301 | 302 | 308 | undefined
              updatedAt?: number | undefined
              verification?:
                | { domain: string; reason: string; type: string; value: string }[]
                | undefined
              verified: boolean
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { idOrName: string; domain: string } } & {
              query: { teamId?: string | undefined }
            } & {
              json: {
                gitBranch?: (string | null) | undefined
                redirect?: (string | null) | undefined
                redirectStatusCode?: null | 301 | 302 | 307 | 308 | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { idOrName: string; domain: string } } & {
              query: { teamId?: string | undefined }
            } & {
              json: {
                gitBranch?: (string | null) | undefined
                redirect?: (string | null) | undefined
                redirectStatusCode?: null | 301 | 302 | 307 | 308 | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { idOrName: string; domain: string } } & {
              query: { teamId?: string | undefined }
            } & {
              json: {
                gitBranch?: (string | null) | undefined
                redirect?: (string | null) | undefined
                redirectStatusCode?: null | 301 | 302 | 307 | 308 | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { idOrName: string; domain: string } } & {
              query: { teamId?: string | undefined }
            } & {
              json: {
                gitBranch?: (string | null) | undefined
                redirect?: (string | null) | undefined
                redirectStatusCode?: null | 301 | 302 | 307 | 308 | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/v9/projects/:idOrName/domains/:domain/verify': {
      $post:
        | {
            input: { param: { idOrName: string; domain: string } } & {
              query: { teamId?: string | undefined }
            }
            output: {
              apexName: string
              createdAt?: number | undefined
              gitBranch?: (string | null) | undefined
              name: string
              projectId: string
              redirect?: (string | null) | undefined
              redirectStatusCode?: 307 | 301 | 302 | 308 | undefined
              updatedAt?: number | undefined
              verification?:
                | { domain: string; reason: string; type: string; value: string }[]
                | undefined
              verified: boolean
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { idOrName: string; domain: string } } & {
              query: { teamId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { idOrName: string; domain: string } } & {
              query: { teamId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v9/projects/:idOrName/env': {
      $get:
        | {
            input: { param: { idOrName: string } } & {
              query: {
                gitBranch?: string | undefined
                decrypt?: 'true' | 'false' | undefined
                source?: string | undefined
                teamId?: string | undefined
              }
            }
            output:
              | {
                  configurationId?: (string | null) | undefined
                  createdAt?: number | undefined
                  createdBy?: (string | null) | undefined
                  decrypted?: boolean | undefined
                  edgeConfigId?: (string | null) | undefined
                  edgeConfigTokenId?: (string | null) | undefined
                  gitBranch?: string | undefined
                  id?: string | undefined
                  key?: string | undefined
                  system?: boolean | undefined
                  target?:
                    | ('production' | 'preview' | 'development' | 'preview' | 'development')[]
                    | 'production'
                    | 'preview'
                    | 'development'
                    | 'preview'
                    | 'development'
                    | undefined
                  type?: 'secret' | 'system' | 'encrypted' | 'plain' | 'sensitive' | undefined
                  updatedAt?: number | undefined
                  updatedBy?: (string | null) | undefined
                  value?: string | undefined
                }
              | {
                  envs: {
                    configurationId?: (string | null) | undefined
                    createdAt?: number | undefined
                    createdBy?: (string | null) | undefined
                    decrypted?: boolean | undefined
                    edgeConfigId?: (string | null) | undefined
                    edgeConfigTokenId?: (string | null) | undefined
                    gitBranch?: string | undefined
                    id?: string | undefined
                    key?: string | undefined
                    system?: boolean | undefined
                    target?:
                      | ('production' | 'preview' | 'development' | 'preview' | 'development')[]
                      | 'production'
                      | 'preview'
                      | 'development'
                      | 'preview'
                      | 'development'
                      | undefined
                    type?: 'secret' | 'system' | 'encrypted' | 'plain' | 'sensitive' | undefined
                    updatedAt?: number | undefined
                    updatedBy?: (string | null) | undefined
                    value?: string | undefined
                  }[]
                  pagination: Pagination
                }
              | {
                  envs: {
                    configurationId?: (string | null) | undefined
                    createdAt?: number | undefined
                    createdBy?: (string | null) | undefined
                    decrypted?: boolean | undefined
                    edgeConfigId?: (string | null) | undefined
                    edgeConfigTokenId?: (string | null) | undefined
                    gitBranch?: string | undefined
                    id?: string | undefined
                    key?: string | undefined
                    system?: boolean | undefined
                    target?:
                      | ('production' | 'preview' | 'development' | 'preview' | 'development')[]
                      | 'production'
                      | 'preview'
                      | 'development'
                      | 'preview'
                      | 'development'
                      | undefined
                    type?: 'secret' | 'system' | 'encrypted' | 'plain' | 'sensitive' | undefined
                    updatedAt?: number | undefined
                    updatedBy?: (string | null) | undefined
                    value?: string | undefined
                  }[]
                }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { idOrName: string } } & {
              query: {
                gitBranch?: string | undefined
                decrypt?: 'true' | 'false' | undefined
                source?: string | undefined
                teamId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { idOrName: string } } & {
              query: {
                gitBranch?: string | undefined
                decrypt?: 'true' | 'false' | undefined
                source?: string | undefined
                teamId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { idOrName: string } } & {
              query: {
                gitBranch?: string | undefined
                decrypt?: 'true' | 'false' | undefined
                source?: string | undefined
                teamId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v9/projects/:idOrName/env/:id': {
      $delete:
        | {
            input: { param: { idOrName: string; id: string } } & {
              query: { teamId?: string | undefined }
            }
            output:
              | {
                  configurationId?: (string | null) | undefined
                  createdAt?: number | undefined
                  createdBy?: (string | null) | undefined
                  decrypted?: boolean | undefined
                  edgeConfigId?: (string | null) | undefined
                  edgeConfigTokenId?: (string | null) | undefined
                  gitBranch?: string | undefined
                  id?: string | undefined
                  key: string
                  target?:
                    | (
                        | 'production'
                        | 'preview'
                        | 'development'
                        | 'preview'
                        | 'development'
                        | 'preview'
                        | 'development'
                      )[]
                    | 'production'
                    | 'preview'
                    | 'development'
                    | 'preview'
                    | 'development'
                    | 'preview'
                    | 'development'
                    | undefined
                  type: 'secret' | 'system' | 'encrypted' | 'plain' | 'sensitive'
                  updatedAt?: number | undefined
                  updatedBy?: (string | null) | undefined
                  value: string
                }[]
              | {
                  configurationId?: (string | null) | undefined
                  createdAt?: number | undefined
                  createdBy?: (string | null) | undefined
                  decrypted?: boolean | undefined
                  edgeConfigId?: (string | null) | undefined
                  edgeConfigTokenId?: (string | null) | undefined
                  gitBranch?: string | undefined
                  id?: string | undefined
                  key: string
                  system?: boolean | undefined
                  target?:
                    | (
                        | 'production'
                        | 'preview'
                        | 'development'
                        | 'preview'
                        | 'development'
                        | 'preview'
                        | 'development'
                      )[]
                    | 'production'
                    | 'preview'
                    | 'development'
                    | 'preview'
                    | 'development'
                    | 'preview'
                    | 'development'
                    | undefined
                  type: 'secret' | 'system' | 'encrypted' | 'plain' | 'sensitive'
                  updatedAt?: number | undefined
                  updatedBy?: (string | null) | undefined
                  value: string
                }
              | {
                  configurationId?: (string | null) | undefined
                  createdAt?: number | undefined
                  createdBy?: (string | null) | undefined
                  decrypted?: boolean | undefined
                  edgeConfigId?: (string | null) | undefined
                  edgeConfigTokenId?: (string | null) | undefined
                  gitBranch?: string | undefined
                  id?: string | undefined
                  key: string
                  target?:
                    | (
                        | 'production'
                        | 'preview'
                        | 'development'
                        | 'preview'
                        | 'development'
                        | 'preview'
                        | 'development'
                      )[]
                    | 'production'
                    | 'preview'
                    | 'development'
                    | 'preview'
                    | 'development'
                    | 'preview'
                    | 'development'
                    | undefined
                  type: 'secret' | 'system' | 'encrypted' | 'plain' | 'sensitive'
                  updatedAt?: number | undefined
                  updatedBy?: (string | null) | undefined
                  value: string
                }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { idOrName: string; id: string } } & {
              query: { teamId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { idOrName: string; id: string } } & {
              query: { teamId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { idOrName: string; id: string } } & {
              query: { teamId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { idOrName: string; id: string } } & {
              query: { teamId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 409
          }
      $patch:
        | {
            input: { param: { idOrName: string; id: string } } & {
              query: { teamId?: string | undefined }
            } & {
              json: {
                gitBranch?: (string | null) | undefined
                key?: string | undefined
                target?:
                  | (
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Productio'
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Previe'
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Developmen'
                    )[]
                  | undefined
                type?: 'system' | 'secret' | 'encrypted' | 'plain' | 'sensitive' | undefined
                value?: string | undefined
              }
            }
            output: {
              configurationId?: (string | null) | undefined
              createdAt?: number | undefined
              createdBy?: (string | null) | undefined
              decrypted?: boolean | undefined
              edgeConfigId?: (string | null) | undefined
              edgeConfigTokenId?: (string | null) | undefined
              gitBranch?: string | undefined
              id?: string | undefined
              key: string
              target?:
                | ('production' | 'preview' | 'development' | 'preview' | 'development')[]
                | 'production'
                | 'preview'
                | 'development'
                | 'preview'
                | 'development'
                | undefined
              type: 'system' | 'encrypted' | 'plain' | 'sensitive' | 'secret'
              updatedAt?: number | undefined
              updatedBy?: (string | null) | undefined
              value: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { idOrName: string; id: string } } & {
              query: { teamId?: string | undefined }
            } & {
              json: {
                gitBranch?: (string | null) | undefined
                key?: string | undefined
                target?:
                  | (
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Productio'
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Previe'
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Developmen'
                    )[]
                  | undefined
                type?: 'system' | 'secret' | 'encrypted' | 'plain' | 'sensitive' | undefined
                value?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { idOrName: string; id: string } } & {
              query: { teamId?: string | undefined }
            } & {
              json: {
                gitBranch?: (string | null) | undefined
                key?: string | undefined
                target?:
                  | (
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Productio'
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Previe'
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Developmen'
                    )[]
                  | undefined
                type?: 'system' | 'secret' | 'encrypted' | 'plain' | 'sensitive' | undefined
                value?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { idOrName: string; id: string } } & {
              query: { teamId?: string | undefined }
            } & {
              json: {
                gitBranch?: (string | null) | undefined
                key?: string | undefined
                target?:
                  | (
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Productio'
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Previe'
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Developmen'
                    )[]
                  | undefined
                type?: 'system' | 'secret' | 'encrypted' | 'plain' | 'sensitive' | undefined
                value?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { idOrName: string; id: string } } & {
              query: { teamId?: string | undefined }
            } & {
              json: {
                gitBranch?: (string | null) | undefined
                key?: string | undefined
                target?:
                  | (
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Productio'
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Previe'
                      | 'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Developmen'
                    )[]
                  | undefined
                type?: 'system' | 'secret' | 'encrypted' | 'plain' | 'sensitive' | undefined
                value?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  },
  '/'
>
export default routes
