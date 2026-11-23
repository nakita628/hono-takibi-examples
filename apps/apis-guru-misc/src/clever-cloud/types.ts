type TransactionId = { transactionId: string }
type Flavor = {
  available?: boolean | undefined
  cpus: number
  disk?: number | undefined
  mem: number
  microservice?: boolean | undefined
  name: string
  nice?: number | undefined
  price: number
}
type Deployment = {
  httpUrl?: string | undefined
  repoState: string
  shutdownable: boolean
  type: string
  url: string
}
type Map = { [x: string]: unknown }
type Variant = { deployType: string; id: string; logo: string; name: string; slug: string }
type Instance = {
  buildFlavor?: Flavor | undefined
  comingSoon?: boolean | undefined
  defaultEnv: Map
  defaultFlavor?: Flavor | undefined
  deployments?: string[] | undefined
  description?: string | undefined
  enabled?: boolean | undefined
  flavors: Flavor[]
  instanceAndVersion: string
  maxAllowedInstances: number
  maxFlavor: Flavor
  maxInstances: number
  minFlavor: Flavor
  minInstances: number
  name?: string | undefined
  tags?: string[] | undefined
  type: string
  variant: Variant
  version: string
}
type Vhost = { fqdn: string }
type Application = {
  archived: boolean
  branch: string
  buildFlavor: Flavor
  cancelOnPush: boolean
  commitId: string
  creationDate: string
  deployUrl: string
  deployment: Deployment
  description: string
  favourite: boolean
  homogeneous: boolean
  id: string
  instance: Instance
  last_deploy: number
  name: string
  ownerId: string
  separateBuild: boolean
  state: string
  stickySessions: boolean
  vhosts: Vhost[]
  webhookSecret: string
  webhookUrl: string
  zone: string
}
type Key = { fingerprint: string; key: string; name: string }
type Rights = { description: string; name: string }
type Organisation = {
  VAT: string
  address: string
  avatar: string
  city: string
  company: string
  country: string
  description: string
  id: string
  name: string
  vatState: string
  zipcode: string
}
type WannabeOrganisation = {
  VAT?: string | undefined
  address?: string | undefined
  city?: string | undefined
  company?: string | undefined
  country?: string | undefined
  description: string
  name: string
  zipcode?: string | undefined
}
type Feature = { name: string; type: string; value: string }
type Plan = { features: Feature[]; id: string; name: string; price: number; slug: string }
type Provider = {
  analyticsId: string
  canUpgrade: boolean
  features?: Feature[] | undefined
  googlePlusName: string
  id: string
  logoUrl: string
  longDesc: string
  name: string
  openInNewTab: boolean
  plans?: Plan[] | undefined
  regions: string[]
  shortDesc: string
  status: string
  supportEmail: string
  twitterName: string
  website: string
}
type WannabeAddonProviderAPIUrl = { base_url: string; sso_url: string }
type WannabeAddonProviderAPI = {
  config_vars: string[]
  password: string
  production?: WannabeAddonProviderAPIUrl | undefined
  regions?: string[] | undefined
  sso_salt: string
  test?: WannabeAddonProviderAPIUrl | undefined
}
type WannabeAddonProvider = { api: WannabeAddonProviderAPI; id: string; name: string }
type Error = { id?: number | undefined; message?: string | undefined; type?: string | undefined }
type WannabeFeature = { name: string; type: string }
type WannabePlanFeature = { name: string; type: string; value: string }
type WannabePlan = { features: WannabePlanFeature[]; name: string; price: bigint; slug: string }
type AddonProviderSso = { macaroon: string; url: string }
type Addon = {
  configKeys: string[]
  creationDate: string
  id: string
  name: string
  plan: Plan
  provider: Provider
  realId: string
  region: string
}
type PaymentData = {
  deviceData?: string | undefined
  token: string
  type: 'NEW_CARD' | 'EXISTING_CARD'
}
type WannabeAddon = {
  name: string
  payment: PaymentData
  plan: string
  providerId: string
  region: string
}
type ListEnv = { name?: string | undefined; value?: string | undefined }
type SupernovaInstanceView = {
  appId?: string | undefined
  appPort: number
  commitId?: string | undefined
  createdAt?: number | undefined
  deployId?: string | undefined
  deployNumber?: number | undefined
  displayName?: string | undefined
  flavor: {
    cpus?: number | undefined
    mem?: number | undefined
    name?: string | undefined
    price?: number | undefined
  }
  hv: string
  image: string
  instanceNumber?: number | undefined
  internalIP?: string | undefined
  ip: string
  ownerId?: string | undefined
  source: string
  sshPort?: number | undefined
  state?: string | undefined
  uuid: string
  zabbixPort: number
  zone?: string | undefined
}
type AddonMigration = {
  addon_id?: string | undefined
  callback_url?: string | undefined
  database?: string | undefined
  database_user?: string | undefined
  dump_restore_finished_date?: string | undefined
  dump_restore_start_date?: string | undefined
  end_date?: string | undefined
  exit_message?: string | undefined
  hostname?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  last_state_update_date?: string | undefined
  new_cluster_id?: string | undefined
  new_cluster_label?: string | undefined
  new_instance_id?: string | undefined
  new_plan?: string | undefined
  new_recipient_hostname?: string | undefined
  new_zone?: string | undefined
  old_cluster_id?: string | undefined
  old_cluster_label?: string | undefined
  old_instance_id?: string | undefined
  old_plan?: string | undefined
  old_recipient_hostname?: string | undefined
  old_zone?: string | undefined
  port?: number | undefined
  request_date?: string | undefined
  state?: string | undefined
}
type Sso = {
  email: string
  id: string
  'nav-data': string
  timestamp: string
  token: string
  url: string
}
type Body = { body: string }
type WannabeOauthApp = { name?: string | undefined; owner?: string | undefined }
type WannabeApplication = {
  archived?: boolean | undefined
  cancelOnPush?: boolean | undefined
  deploy: string
  description?: string | undefined
  enabled: boolean
  favourite?: boolean | undefined
  homogeneous?: boolean | undefined
  instanceType?: string | undefined
  instanceVariant?: string | undefined
  instanceVersion?: string | undefined
  maxFlavor?: string | undefined
  maxInstances: number
  minFlavor?: string | undefined
  minInstances: number
  name: string
  oauthApp?: WannabeOauthApp | undefined
  oauthAppId?: string | undefined
  oauthService?: string | undefined
  separateBuild?: boolean | undefined
  shutdownable?: boolean | undefined
  stickySessions?: boolean | undefined
  tags?: string[] | undefined
  zone: string
}
type WannabeEnv = { name: string; value: string }
type Env = { addon_id: string; addon_name: string; env: WannabeEnv[]; provider_id: string }
type LinkedAppEnv = { app_id: string; app_name: string; env: WannabeEnv[] }
type AppInstance = {
  appId?: string | undefined
  appPort?: number | undefined
  commit?: string | undefined
  deployNumber?: number | undefined
  flavor?: Flavor | undefined
  id?: string | undefined
  ip?: string | undefined
  state?: string | undefined
}
type ConsumerRights = {
  access_bills?: boolean | undefined
  access_consumption_statistics?: boolean | undefined
  access_credit_count?: boolean | undefined
  access_organisations?: boolean | undefined
  access_organisations_bills?: boolean | undefined
  access_organisations_consumption_statistics?: boolean | undefined
  access_organisations_credit_count?: boolean | undefined
  access_personal_information?: boolean | undefined
  almighty?: boolean | undefined
  manage_applications?: boolean | undefined
  manage_organisations?: boolean | undefined
  manage_organisations_applications?: boolean | undefined
  manage_organisations_members?: boolean | undefined
  manage_organisations_services?: boolean | undefined
  manage_personal_information?: boolean | undefined
  manage_services?: boolean | undefined
  manage_ssh_keys?: boolean | undefined
}
type Consumer = {
  baseUrl: string
  description: string
  key?: string | undefined
  name: string
  picture?: string | undefined
  rights: ConsumerRights
  url: string
}
type URL = { url: string }
type WannabeConsumer = {
  baseUrl: URL
  description?: string | undefined
  name: string
  picture?: string | undefined
  rights: { activated: boolean; right: string }
  url: URL
}
type Secret = { secret: string; value: string }
type Conso = { appId: string; conso: { conso: string; date: string } }
type Credits = { count: number; dropPrice: { currency: string; value: number }; ownerId: string }
type DeploymentView = {
  action: string
  author?: { id: string; name: string } | undefined
  cause: string
  commit: string
  date: string
  id: bigint
  instances: bigint
  state: string
  uuid: string
}
type DeploymentSummary = { '{app_id}'?: DeploymentView[] | undefined }
type Schema1 = {
  job: string
  member: { avatar?: string | undefined; email: string; id: string; name?: string | undefined }
  role: string
}
type Schema2 = { email: string; job?: string | undefined; role: string }
type PaymentProvider = { comingSoon: boolean; imgUrl: string; name: string; title: string }
type Country = { code: string; name: string }
type Zone = { correspondingRegion: string; internal: boolean; name: string }
type User = {
  address: string
  admin: boolean
  avatar: string
  canPay: boolean
  city: string
  country: string
  creationDate: bigint
  email: string
  emailValidated: boolean
  hasPassword?: boolean | undefined
  id: string
  lang: string
  name: string
  oauthApps: string[]
  phone: string
  preferredMFA?: string | undefined
  zipcode: string
}
type WannabeUser = {
  address?: string | undefined
  city?: string | undefined
  country?: string | undefined
  email: string
  lang?: string | undefined
  name?: string | undefined
  password: string
  phone?: string | undefined
  terms: boolean
  zipcode?: string | undefined
}
type Avatar = { source: { source: string; value: URL } }
type ChangePassword = { newPassword: string; oldPassword: string }
type Token = {
  consumer: Consumer
  creationDate: number
  lastUtilisation: string
  rights: Rights
  token: string
}
type Summary = {
  organisations: {
    addons?:
      | {
          id?: string | undefined
          logoUrl?: string | undefined
          name?: string | undefined
          providerId?: string | undefined
        }[]
      | undefined
    applications?:
      | {
          archived?: boolean | undefined
          commit?: string | undefined
          id?: string | undefined
          instanceType?: string | undefined
          instanceVariant?: string | undefined
          name?: string | undefined
          state?: string | undefined
          variantSlug?: string | undefined
        }[]
      | undefined
    avatar?: string | undefined
    consumers?:
      | { key?: string | undefined; name?: string | undefined; picture?: string | undefined }[]
      | undefined
    id?: string | undefined
    name?: string | undefined
    providers?: string[] | undefined
    role?: string | undefined
  }[]
  user: {
    addons: {
      id?: string | undefined
      logoUrl?: string | undefined
      name?: string | undefined
      providerId?: string | undefined
    }[]
    admin: boolean
    applications: {
      archived?: boolean | undefined
      commit?: string | undefined
      id?: string | undefined
      instanceType?: string | undefined
      instanceVariant?: string | undefined
      name?: string | undefined
      state?: string | undefined
      variantSlug?: string | undefined
    }[]
    avatar: string
    consumers?:
      | { key?: string | undefined; name?: string | undefined; picture?: string | undefined }[]
      | undefined
    id: string
    lang: string
    name: string
  }
}
type Function1RequestContextFutureRouteResult = { [x: string]: unknown }
type AddonConfigProviderView = { [x: string]: unknown }
type EnvVar = { [x: string]: unknown }
type WannabeEnvVar = { [x: string]: unknown }
type NetworkGroup = { [x: string]: unknown }
type WannabeNetworkGroup = { [x: string]: unknown }
type WannabeExternalPeer = { [x: string]: unknown }
type Peer = { [x: string]: unknown }
type WireGuardConfiguration = { [x: string]: unknown }
type WannabeAddonBilling = { cost: number }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  { '//openapi': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/application/:appId/environment': {
      $get: {
        input: { param: { appId: string } } & { query: { token?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { appId: string } } & { query: { token?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & { '/authorize': { $post: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/events/event-socket': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/github': { $get: { input: {}; output: TransactionId; outputFormat: 'json'; status: 200 } }
  } & {
    '/github/applications': {
      $get: { input: {}; output: Application[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/github/callback': {
      $get: {
        input: {
          query: {
            code?: string | undefined
            state?: string | undefined
            error?: string | undefined
            error_description?: string | undefined
            error_uri?: string | undefined
          }
        } & { header: { Cookie?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/github/emails': { $get: { input: {}; output: string[]; outputFormat: 'text'; status: 200 } }
  } & {
    '/github/keys': { $get: { input: {}; output: Key[]; outputFormat: 'json'; status: 200 } }
  } & {
    '/github/link': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 200 }
      $get: {
        input: { query: { transactionId?: string | undefined; redirectUrl?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/github/login': {
      $get: {
        input: { query: { redirectUrl?: string | undefined; fromAuthorize?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/github/redeploy': {
      $post: {
        input: {
          header: {
            'User-Agent'?: string | undefined
            'X-Github-Event'?: string | undefined
            'X-Hub-Signature'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/github/signup': {
      $get: {
        input: { query: { redirectUrl?: string | undefined; fromAuthorize?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: {
          query: {
            transactionId?: string | undefined
            name?: string | undefined
            otherId?: string | undefined
            otherEmail?: string | undefined
            password?: string | undefined
            autoLink?: string | undefined
            terms?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/github/username': { $get: { input: {}; output: string; outputFormat: 'text'; status: 200 } }
  } & {
    '/logs-socket/:appId': {
      $get: { input: { param: { appId: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & { '/logs/drains': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/logs/drains/:drainId': {
      $put: { input: { param: { drainId: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/logs/logs-chunked/:appId': {
      $get: {
        input: { param: { appId: string } } & { query: { download?: boolean | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/logs/logs-socket/:appId': {
      $get: {
        input: { param: { appId: string } } & {
          query: {
            since?: string | undefined
            filter?: string | undefined
            deployment_id?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/logs/:appId': {
      $get: {
        input: { param: { appId: string } } & {
          query: {
            limit?: number | undefined
            order?: 'asc' | 'desc' | undefined
            after?: string | undefined
            before?: string | undefined
            filter?: string | undefined
            deployment_id?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/logs/:appId/drains': {
      $get: { input: { param: { appId: string } }; output: {}; outputFormat: string; status: 200 }
      $post: { input: { param: { appId: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/logs/:appId/drains/:idOrUrl': {
      $delete: {
        input: { param: { appId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: { input: { param: { appId: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/logs/:appId/sse': {
      $get: { input: { param: { appId: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/newsfeeds/blog': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/newsfeeds/engineering': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/notifications/emailhooks/:ownerId': {
      $get: { input: { param: { ownerId: string } }; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: { param: { ownerId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/notifications/emailhooks/:ownerId/:id': {
      $delete: {
        input: { param: { ownerId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: { input: { param: { ownerId: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/notifications/info/events': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/notifications/info/webhookformats': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/notifications/webhooks/:ownerId': {
      $get: { input: { param: { ownerId: string } }; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: { param: { ownerId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/notifications/webhooks/:ownerId/:id': {
      $delete: {
        input: { param: { ownerId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: { input: { param: { ownerId: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/oauth/access_token': {
      $post: {
        input: {
          query: {
            oauth_consumer_key?: string | undefined
            oauth_token?: string | undefined
            oauth_signature_method?: string | undefined
            oauth_signature?: string | undefined
            oauth_timestamp?: string | undefined
            oauth_nonce?: string | undefined
            oauth_version?: string | undefined
            oauth_verifier?: string | undefined
            oauth_callback?: string | undefined
            oauth_token_secret?: string | undefined
            oauth_callback_confirmed?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/oauth/access_token_query': {
      $post: {
        input: {
          query: {
            oauth_consumer_key?: string | undefined
            oauth_token?: string | undefined
            oauth_signature_method?: string | undefined
            oauth_signature?: string | undefined
            oauth_timestamp?: string | undefined
            oauth_nonce?: string | undefined
            oauth_version?: string | undefined
            oauth_verifier?: string | undefined
            oauth_callback?: string | undefined
            oauth_token_secret?: string | undefined
            oauth_callback_confirmed?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/oauth/authorize': {
      $get: {
        input: { query: { oauth_token?: string | undefined } } & {
          header: { Cookie?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: {
          query: {
            almighty?: string | undefined
            access_organisations?: string | undefined
            manage_organisations?: string | undefined
            manage_organisations_services?: string | undefined
            manage_organisations_applications?: string | undefined
            manage_organisations_members?: string | undefined
            access_organisations_bills?: string | undefined
            access_organisations_credit_count?: string | undefined
            access_organisations_consumption_statistics?: string | undefined
            access_personal_information?: string | undefined
            manage_personal_information?: string | undefined
            manage_ssh_keys?: string | undefined
            manage_services?: string | undefined
            manage_applications?: string | undefined
            access_bills?: string | undefined
            access_credit_count?: string | undefined
            access_consumption_statistics?: string | undefined
          }
        } & { header: { Cookie?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/oauth/request_token': {
      $post: {
        input: {
          query: {
            oauth_consumer_key?: string | undefined
            oauth_token?: string | undefined
            oauth_signature_method?: string | undefined
            oauth_signature?: string | undefined
            oauth_timestamp?: string | undefined
            oauth_nonce?: string | undefined
            oauth_version?: string | undefined
            oauth_verifier?: string | undefined
            oauth_callback?: string | undefined
            oauth_token_secret?: string | undefined
            oauth_callback_confirmed?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/oauth/request_token_query': {
      $post: {
        input: {
          query: {
            oauth_consumer_key?: string | undefined
            oauth_token?: string | undefined
            oauth_signature_method?: string | undefined
            oauth_signature?: string | undefined
            oauth_timestamp?: string | undefined
            oauth_nonce?: string | undefined
            oauth_version?: string | undefined
            oauth_verifier?: string | undefined
            oauth_callback?: string | undefined
            oauth_token_secret?: string | undefined
            oauth_callback_confirmed?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/oauth/rights': { $get: { input: {}; output: Rights; outputFormat: 'json'; status: 200 } }
  } & {
    '/openapi.{type}': {
      $get: { input: { param: { type: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/organisations': {
      $get: {
        input: { query: { user?: string | undefined } }
        output: Organisation[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WannabeOrganisation }
        output: Organisation
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/organisations/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
      $get: {
        input: { param: { id: string } }
        output: Organisation
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: WannabeOrganisation }
        output: Organisation
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/organisations/:id/addonproviders': {
      $get: {
        input: { param: { id: string } }
        output: Provider[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string } } & { json: WannabeAddonProvider }
        output: Provider
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/organisations/:id/addonproviders/:providerId': {
      $delete:
        | {
            input: { param: { id: string; providerId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string; providerId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string; providerId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get: {
        input: { param: { id: string; providerId: string } }
        output: Provider
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string; providerId: string } } & { json: WannabeAddonProvider }
        output: Provider
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/organisations/:id/addonproviders/:providerId/features': {
      $get: {
        input: { param: { id: string; providerId: string } }
        output: Feature[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string; providerId: string } } & { json: WannabeFeature }
        output: Feature
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/organisations/:id/addonproviders/:providerId/features/:featureId': {
      $delete: {
        input: { param: { id: string; featureId: string; providerId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/organisations/:id/addonproviders/:providerId/plans': {
      $get: {
        input: { param: { id: string; providerId: string } }
        output: Plan[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string; providerId: string } } & { json: WannabePlan }
        output: Plan
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/organisations/:id/addonproviders/:providerId/plans/:planId': {
      $delete: {
        input: { param: { id: string; providerId: string; planId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { id: string; providerId: string; planId: string } }
        output: Plan
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string; providerId: string; planId: string } } & { json: WannabePlan }
        output: Plan
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/organisations/:id/addonproviders/:providerId/plans/:planId/features/:featureName': {
      $delete: {
        input: { param: { id: string; featureName: string; providerId: string; planId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: {
          param: { id: string; featureName: string; providerId: string; planId: string }
        } & { json: WannabePlanFeature }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/organisations/:id/addonproviders/:providerId/sso': {
      $get: {
        input: { param: { providerId: string; id: string } }
        output: AddonProviderSso
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organisations/:id/addonproviders/:providerId/tags': {
      $get: {
        input: { param: { id: string; providerId: string } }
        output: string[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/organisations/:id/addonproviders/:providerId/testers': {
      $post: {
        input: { param: { id: string; providerId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/organisations/:id/addons': {
      $get: { input: { param: { id: string } }; output: Addon[]; outputFormat: 'json'; status: 200 }
      $post: {
        input: { param: { id: string } } & { json: WannabeAddon }
        output: Addon
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/organisations/:id/addons/preorders': {
      $post: {
        input: { param: { id: string } } & { json: WannabeAddon }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/organisations/:id/addons/:addonId': {
      $delete: {
        input: { param: { id: string; addonId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { id: string; addonId: string } }
        output: Addon
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string; addonId: string } } & { json: WannabeAddon }
        output: Addon
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/organisations/:id/addons/:addonId/applications': {
      $get: {
        input: { param: { id: string; addonId: string } }
        output: Application[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organisations/:id/addons/:addonId/env': {
      $get: {
        input: { param: { id: string; addonId: string } }
        output: ListEnv[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organisations/:id/addons/:addonId/instances': {
      $get: {
        input: { param: { id: string; addonId: string } } & {
          query: { deploymentId?: string | undefined; withDeleted?: string | undefined }
        }
        output: SupernovaInstanceView[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organisations/:id/addons/:addonId/instances/:instanceId': {
      $get: {
        input: { param: { instanceId: string; id: string; addonId: string } }
        output: SupernovaInstanceView
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organisations/:id/addons/:addonId/migrations': {
      $get: {
        input: { param: { id: string; addonId: string } }
        output: AddonMigration[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string; addonId: string } } & {
          json: { planId?: string | undefined; region?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organisations/:id/addons/:addonId/migrations/:migrationId': {
      $get: {
        input: { param: { migrationId: string; id: string; addonId: string } }
        output: AddonMigration
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organisations/:id/addons/:addonId/sso': {
      $get: {
        input: { param: { id: string; addonId: string } }
        output: Sso
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organisations/:id/addons/:addonId/tags': {
      $get: {
        input: { param: { id: string; addonId: string } }
        output: string[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/organisations/:id/addons/:addonId/tags/:tag': {
      $delete: {
        input: { param: { id: string; tag: string; addonId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { id: string; tag: string; addonId: string } } & { json: Body }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/organisations/:id/applications': {
      $get: {
        input: { param: { id: string } }
        output: Application[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string } } & { json: WannabeApplication }
        output: Application
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/organisations/:id/applications/:appId': {
      $delete: {
        input: { param: { id: string; appId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { id: string; appId: string } }
        output: Application
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string; appId: string } } & { json: WannabeApplication }
        output: Application
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/organisations/:id/applications/:appId/addons': {
      $get: {
        input: { param: { id: string; appId: string } }
        output: Addon[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string; appId: string } } & { json: Body }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/organisations/:id/applications/:appId/addons/env': {
      $get: {
        input: { param: { id: string; appId: string } }
        output: Env[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organisations/:id/applications/:appId/addons/:addonId': {
      $delete: {
        input: { param: { id: string; appId: string; addonId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/organisations/:id/applications/:appId/branch': {
      $put: {
        input: { param: { appId: string; id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/organisations/:id/applications/:appId/branches': {
      $get: {
        input: { param: { appId: string; id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/organisations/:id/applications/:appId/buildflavor': {
      $put: {
        input: { param: { appId: string; id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/organisations/:id/applications/:appId/dependencies': {
      $get: {
        input: { param: { appId: string; id: string } }
        output: Application[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organisations/:id/applications/:appId/dependencies/env': {
      $get: {
        input: { param: { appId: string; id: string } }
        output: LinkedAppEnv[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/organisations/:id/applications/:appId/dependencies/:dependencyId': {
      $delete: {
        input: { param: { dependencyId: string; appId: string; id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { dependencyId: string; appId: string; id: string } } & { json: Body }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/organisations/:id/applications/:appId/dependents': {
      $get: {
        input: { param: { appId: string; id: string } }
        output: Application[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organisations/:id/applications/:appId/deployments': {
      $get: {
        input: { param: { id: string; appId: string } } & {
          query: {
            limit?: string | undefined
            offset?: string | undefined
            action?: string | undefined
          }
        }
        output: Deployment[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organisations/:id/applications/:appId/deployments/:deploymentId': {
      $get: {
        input: { param: { appId: string; deploymentId: string; id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/organisations/:id/applications/:appId/deployments/:deploymentId/instances': {
      $delete: {
        input: { param: { id: string; appId: string; deploymentId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/organisations/:id/applications/:appId/env': {
      $get: {
        input: { param: { id: string; appId: string } }
        output: ListEnv[]
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string; appId: string } } & { json: WannabeEnv }
        output: ListEnv
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/organisations/:id/applications/:appId/env/:envName': {
      $delete: {
        input: { param: { id: string; appId: string; envName: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { id: string; appId: string; envName: string } } & { json: WannabeEnv }
        output: ListEnv
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/organisations/:id/applications/:appId/exposed_env': {
      $get: {
        input: { param: { appId: string; id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { appId: string; id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/organisations/:id/applications/:appId/instances': {
      $delete: {
        input: { param: { id: string; appId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { id: string; appId: string } }
        output: AppInstance[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string; appId: string } } & { query: { commit?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/organisations/:id/applications/:appId/instances/:instanceId': {
      $get: {
        input: { param: { instanceId: string; appId: string; id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/organisations/:id/applications/:appId/tags': {
      $get: {
        input: { param: { id: string; appId: string } }
        output: string[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/organisations/:id/applications/:appId/tags/:tag': {
      $delete: {
        input: { param: { id: string; appId: string; tag: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { id: string; appId: string; tag: string } } & { json: Body }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/organisations/:id/applications/:appId/vhosts': {
      $get: {
        input: { param: { id: string; appId: string } }
        output: Vhost[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organisations/:id/applications/:appId/vhosts/favourite': {
      $delete: {
        input: { param: { id: string; appId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { id: string; appId: string } }
        output: Vhost
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string; appId: string } } & { json: Vhost }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/organisations/:id/applications/:appId/vhosts/:domain': {
      $delete: {
        input: { param: { id: string; appId: string; domain: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { id: string; appId: string; domain: string } } & { json: Vhost }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/organisations/:id/avatar': {
      $put: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/organisations/:id/consumers': {
      $get: {
        input: { param: { id: string } }
        output: Consumer[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string } } & { json: WannabeConsumer }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/organisations/:id/consumers/:key': {
      $delete: {
        input: { param: { id: string; key: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { id: string; key: string } }
        output: Consumer
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string; key: string } } & { json: WannabeConsumer }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/organisations/:id/consumers/:key/secret': {
      $get: {
        input: { param: { id: string; key: string } }
        output: Secret
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organisations/:id/consumptions': {
      $get: {
        input: { param: { id: string } } & {
          query: { appId?: string | undefined; from?: string | undefined; to?: string | undefined }
        }
        output: Conso
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organisations/:id/credits': {
      $get: { input: { param: { id: string } }; output: Credits; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/organisations/:id/deployments': {
      $get: {
        input: { param: { id: string } }
        output: DeploymentSummary
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organisations/:id/instances': {
      $get: {
        input: { param: { id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organisations/:id/members': {
      $get: {
        input: { param: { id: string } }
        output: Schema1[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string } } & { query: { invitationKey?: string | undefined } } & {
          json: Schema2
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/organisations/:id/members/:userId': {
      $delete: {
        input: { param: { id: string; userId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { id: string; userId: string } } & { json: Schema2 }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/organisations/:id/payment-info': {
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/organisations/:id/payments/billings': {
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
      $post: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/organisations/:id/payments/billings/unpaid': {
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/organisations/:id/payments/billings/:bid': {
      $delete: {
        input: { param: { id: string; bid: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { id: string; bid: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { id: string; bid: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/organisations/:id/payments/billings/:bid.pdf': {
      $get: {
        input: { param: { id: string; bid: string } } & { query: { token?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/organisations/:id/payments/fullprice/:price': {
      $get: {
        input: { param: { id: string; price: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/organisations/:id/payments/methods': {
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: { param: { id: string } } & { json: Body }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/organisations/:id/payments/methods/default': {
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
      $put: {
        input: { param: { id: string } } & { json: PaymentData }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/organisations/:id/payments/methods/:mId': {
      $delete: {
        input: { param: { mId: string; id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/organisations/:id/payments/monthlyinvoice': {
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/organisations/:id/payments/monthlyinvoice/maxcredit': {
      $put: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/organisations/:id/payments/recurring': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/password_forgotten': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: { query: { login?: string | undefined; drop_tokens?: string | undefined } } & {
          header: { TesterPass?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/password_forgotten/:key': {
      $get: { input: { param: { key: string } }; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: { param: { key: string } } & {
          query: { pass?: string | undefined; pass2?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/payments/assets/pay_button/:token/button.png': {
      $get: { input: { param: { token: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/payments/coupons/:name': {
      $get: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/payments/providers': {
      $get: { input: {}; output: PaymentProvider[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/payments/tokens/stripe': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/payments/:bid/end/stripe': {
      $post: { input: { param: { bid: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/products/addonproviders': {
      $get: { input: {}; output: Provider[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/products/addonproviders/:provider_id': {
      $get: {
        input: { param: { provider_id: string } }
        output: Provider
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/products/addonproviders/:provider_id/versions': {
      $get: {
        input: { param: { provider_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/products/countries': {
      $get: { input: {}; output: Country; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/products/countrycodes': {
      $get: { input: {}; output: Country; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/products/instances': {
      $get: {
        input: { query: { for?: string | undefined } }
        output: Instance[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/products/instances/:type-{version}': {
      $get: {
        input: { param: { type: string; version: string } } & {
          query: { for?: string | undefined; app?: string | undefined }
        }
        output: Instance
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/products/mfa_kinds': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/products/packages': {
      $get: {
        input: {
          query: {
            coupon?: string | undefined
            orgaId?: string | undefined
            currency?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/products/prices': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/products/zones': { $get: { input: {}; output: Zone[]; outputFormat: 'json'; status: 200 } }
  } & {
    '/self': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 200 }
      $get: { input: {}; output: User; outputFormat: 'json'; status: 200 }
      $put: { input: { json: WannabeUser }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/self/addons': {
      $get: { input: {}; output: Addon[]; outputFormat: 'json'; status: 200 }
      $post: { input: { json: WannabeAddon }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/self/addons/preorders': {
      $post: { input: { json: WannabeAddon }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/self/addons/:addonId': {
      $delete: {
        input: { param: { addonId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { addonId: string } }
        output: Addon
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { addonId: string } } & { json: WannabeAddon }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/self/addons/:addonId/applications': {
      $get: {
        input: { param: { addonId: string } }
        output: Application[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/self/addons/:addonId/env': {
      $get: {
        input: { param: { addonId: string } }
        output: ListEnv[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/self/addons/:addonId/plan': {
      $put: {
        input: { param: { addonId: string } } & { json: WannabePlan }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/self/addons/:addonId/sso': {
      $get: {
        input: { param: { addonId: string } }
        output: Sso
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/self/addons/:addonId/tags': {
      $get: {
        input: { param: { addonId: string } }
        output: string[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/self/addons/:addonId/tags/:tag': {
      $delete: {
        input: { param: { tag: string; addonId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { tag: string; addonId: string } } & { json: Body }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/self/applications': {
      $get: { input: {}; output: Application[]; outputFormat: 'json'; status: 200 }
      $post: { input: { json: WannabeApplication }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/self/applications/:appId': {
      $delete: {
        input: { param: { appId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { appId: string } }
        output: Application
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { appId: string } } & { json: WannabeApplication }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/self/applications/:appId/addons': {
      $get: {
        input: { param: { appId: string } }
        output: Addon[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { appId: string } } & { json: Body }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/self/applications/:appId/addons/env': {
      $get: {
        input: { param: { appId: string } }
        output: Env[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/self/applications/:appId/addons/:addonId': {
      $delete: {
        input: { param: { appId: string; addonId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/self/applications/:appId/branch': {
      $put: { input: { param: { appId: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/self/applications/:appId/branches': {
      $get: { input: { param: { appId: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/self/applications/:appId/buildflavor': {
      $put: { input: { param: { appId: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/self/applications/:appId/dependencies': {
      $get: {
        input: { param: { appId: string } }
        output: Application[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/self/applications/:appId/dependencies/env': {
      $get: {
        input: { param: { appId: string } }
        output: LinkedAppEnv[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/self/applications/:appId/dependencies/:dependencyId': {
      $delete: {
        input: { param: { dependencyId: string; appId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { dependencyId: string; appId: string } } & { json: WannabeApplication }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/self/applications/:appId/dependents': {
      $get: {
        input: { param: { appId: string } }
        output: Application[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/self/applications/:appId/deployments': {
      $get: {
        input: { param: { appId: string } } & {
          query: {
            limit?: string | undefined
            offset?: string | undefined
            action?: string | undefined
          }
        }
        output: Deployment[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/self/applications/:appId/deployments/:deploymentId': {
      $get: {
        input: { param: { appId: string; deploymentId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/self/applications/:appId/deployments/:deploymentId/instances': {
      $delete: {
        input: { param: { appId: string; deploymentId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/self/applications/:appId/env': {
      $get: {
        input: { param: { appId: string } }
        output: ListEnv[]
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { appId: string } } & { json: WannabeEnv }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/self/applications/:appId/env/:envName': {
      $delete: {
        input: { param: { appId: string; envName: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { appId: string; envName: string } } & { json: WannabeEnv }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/self/applications/:appId/exposed_env': {
      $get: { input: { param: { appId: string } }; output: {}; outputFormat: string; status: 200 }
      $put: { input: { param: { appId: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/self/applications/:appId/instances': {
      $delete: {
        input: { param: { appId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { appId: string } }
        output: Instance[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { appId: string } } & { query: { commit?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/self/applications/:appId/instances/:instanceId': {
      $get: {
        input: { param: { instanceId: string; appId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/self/applications/:appId/tags': {
      $get: {
        input: { param: { appId: string } }
        output: string[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/self/applications/:appId/tags/:tag': {
      $delete: {
        input: { param: { appId: string; tag: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { appId: string; tag: string } } & { json: Body }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/self/applications/:appId/vhosts': {
      $get: {
        input: { param: { appId: string } }
        output: Vhost[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/self/applications/:appId/vhosts/favourite': {
      $delete: {
        input: { param: { appId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { appId: string } }
        output: Vhost
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { appId: string } } & { json: Vhost }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/self/applications/:appId/vhosts/:domain': {
      $delete: {
        input: { param: { appId: string; domain: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { appId: string; domain: string } } & { json: Vhost }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/self/avatar': {
      $put: { input: { json: Avatar }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/self/change_password': {
      $put: { input: {}; output: ChangePassword; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/self/cli_tokens': {
      $get: {
        input: { query: { cli_token?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/self/confirmation_email': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/self/consumers': {
      $get: { input: {}; output: Consumer[]; outputFormat: 'json'; status: 200 }
      $post: { input: { json: WannabeConsumer }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/self/consumers/:key': {
      $delete: { input: { param: { key: string } }; output: {}; outputFormat: string; status: 200 }
      $get: {
        input: { param: { key: string } }
        output: Consumer
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { key: string } } & { json: WannabeConsumer }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/self/consumers/:key/secret': {
      $get: { input: { param: { key: string } }; output: Secret; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/self/consumptions': {
      $get: {
        input: {
          query: { appId?: string | undefined; from?: string | undefined; to?: string | undefined }
        }
        output: Conso
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/self/credits': { $get: { input: {}; output: Credits; outputFormat: 'json'; status: 200 } }
  } & {
    '/self/emails': { $get: { input: {}; output: string[]; outputFormat: 'text'; status: 200 } }
  } & {
    '/self/emails/:email': {
      $delete: {
        input: { param: { email: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { email: string } } & { json: Body }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & { '/self/id': { $get: { input: {}; output: string; outputFormat: 'text'; status: 200 } } } & {
    '/self/instances': {
      $get: { input: {}; output: Instance[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/self/keys': { $get: { input: {}; output: Key[]; outputFormat: 'json'; status: 200 } }
  } & {
    '/self/keys/:key': {
      $delete: { input: { param: { key: string } }; output: {}; outputFormat: string; status: 200 }
      $put: {
        input: { param: { key: string } } & { json: Body }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/self/mfa/:kind': {
      $delete: { input: { param: { kind: string } }; output: {}; outputFormat: string; status: 200 }
      $post: { input: { param: { kind: string } }; output: {}; outputFormat: string; status: 200 }
      $put: { input: { param: { kind: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/self/mfa/:kind/backupcodes': {
      $get: { input: { param: { kind: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/self/mfa/:kind/confirmation': {
      $post: { input: { param: { kind: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/self/payment-info': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/self/payments/billings': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/self/payments/billings/:bid': {
      $delete: { input: { param: { bid: string } }; output: {}; outputFormat: string; status: 200 }
      $get: { input: { param: { bid: string } }; output: {}; outputFormat: string; status: 200 }
      $put: { input: { param: { bid: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/self/payments/billings/:bid.pdf': {
      $get: {
        input: { param: { bid: string } } & { query: { token?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/self/payments/fullprice/:price': {
      $get: { input: { param: { price: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/self/payments/methods': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/self/payments/methods/default': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $put: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/self/payments/methods/:mId': {
      $delete: { input: { param: { mId: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/self/payments/monthlyinvoice': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/self/payments/monthlyinvoice/maxcredit': {
      $put: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/self/payments/recurring': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 200 }
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/self/payments/tokens/stripe': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/self/tokens': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 200 }
      $get: { input: {}; output: Token[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/self/tokens/:token': {
      $delete: {
        input: { param: { token: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/self/validate_email': {
      $get: {
        input: { query: { validationKey?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/summary': { $get: { input: {}; output: Summary; outputFormat: 'json'; status: 200 } }
  } & {
    '/users': {
      $post: {
        input: {
          query: {
            invitationKey?: string | undefined
            addonBetaInvitationKey?: string | undefined
            email?: string | undefined
            pass?: string | undefined
            url_next?: string | undefined
            terms?: string | undefined
          }
        } & { json: WannabeUser }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/users/:id': {
      $get: { input: { param: { id: string } }; output: User; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/users/:id/applications': {
      $get: {
        input: { param: { id: string } }
        output: Application[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:userId/git-info': {
      $get: { input: { param: { userId: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/v2/providers/addon-matomo/resources': {
      $post: {
        input: {}
        output: Function1RequestContextFutureRouteResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v2/providers/addon-matomo/resources/:matomoId': {
      $delete: {
        input: { param: { matomoId: string } }
        output: Function1RequestContextFutureRouteResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v3/logs/:appId': {
      $get: { input: { param: { appId: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/v3/logs/:appId/drains': {
      $get: { input: { param: { appId: string } }; output: {}; outputFormat: string; status: 200 }
      $post: { input: { param: { appId: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/v3/logs/:appId/drains/:idOrUrl': {
      $delete: {
        input: { param: { appId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: { input: { param: { appId: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/v3/logs/:appId/logs-chunked': {
      $get: { input: { param: { appId: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/v3/logs/:appId/logs-socket': {
      $get: { input: { param: { appId: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/v4/addon-providers/addon-matomo/addons/:matomoId': {
      $get: {
        input: { param: { matomoId: string } }
        output: Function1RequestContextFutureRouteResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v4/addon-providers/addon-matomo/token/validate': {
      $get: {
        input: { query: { keycloakToken?: string | undefined } }
        output: Function1RequestContextFutureRouteResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v4/addon-providers/config-provider/addons/:configurationProviderId': {
      $get:
        | {
            input: { param: { configurationProviderId: string } }
            output: AddonConfigProviderView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { configurationProviderId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/v4/addon-providers/config-provider/addons/:configurationProviderId/env': {
      $get:
        | {
            input: { param: { configurationProviderId: string } }
            output: EnvVar[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { configurationProviderId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
      $put:
        | {
            input: { param: { configurationProviderId: string } } & { json: WannabeEnvVar[] }
            output: EnvVar[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { configurationProviderId: string } } & { json: WannabeEnvVar[] }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/v4/networkgroups/organisations/:ownerId/networkgroups': {
      $get:
        | {
            input: { param: { ownerId: string } }
            output: NetworkGroup[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { ownerId: string } }; output: {}; outputFormat: string; status: 401 }
      $post:
        | {
            input: { param: { ownerId: string } } & { json: WannabeNetworkGroup }
            output: NetworkGroup
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { ownerId: string } } & { json: WannabeNetworkGroup }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ownerId: string } } & { json: WannabeNetworkGroup }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ownerId: string } } & { json: WannabeNetworkGroup }
            output: string
            outputFormat: 'text'
            status: 409
          }
    }
  } & {
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId': {
      $delete:
        | {
            input: { param: { ownerId: string; networkGroupId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { ownerId: string; networkGroupId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ownerId: string; networkGroupId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { ownerId: string; networkGroupId: string } }
            output: NetworkGroup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ownerId: string; networkGroupId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ownerId: string; networkGroupId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId/external-peers': {
      $post:
        | {
            input: { param: { ownerId: string; networkGroupId: string } } & {
              json: WannabeExternalPeer
            }
            output: Peer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ownerId: string; networkGroupId: string } } & {
              json: WannabeExternalPeer
            }
            output: string
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { ownerId: string; networkGroupId: string } } & {
              json: WannabeExternalPeer
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ownerId: string; networkGroupId: string } } & {
              json: WannabeExternalPeer
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId/external-peers/:peerId': {
      $delete:
        | {
            input: { param: { ownerId: string; networkGroupId: string; peerId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { ownerId: string; networkGroupId: string; peerId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId/members': {
      $get:
        | {
            input: { param: { ownerId: string; networkGroupId: string } }
            output: Schema1[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ownerId: string; networkGroupId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ownerId: string; networkGroupId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { ownerId: string; networkGroupId: string } } & { json: Schema2 }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { ownerId: string; networkGroupId: string } } & { json: Schema2 }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ownerId: string; networkGroupId: string } } & { json: Schema2 }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ownerId: string; networkGroupId: string } } & { json: Schema2 }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId/members/:memberId': {
      $delete:
        | {
            input: { param: { ownerId: string; networkGroupId: string; memberId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { ownerId: string; networkGroupId: string; memberId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
      $get:
        | {
            input: { param: { ownerId: string; networkGroupId: string; memberId: string } }
            output: Schema1
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ownerId: string; networkGroupId: string; memberId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ownerId: string; networkGroupId: string; memberId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId/peers': {
      $get:
        | {
            input: { param: { ownerId: string; networkGroupId: string } }
            output: Peer[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ownerId: string; networkGroupId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ownerId: string; networkGroupId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId/peers/:peerId': {
      $delete:
        | {
            input: { param: { ownerId: string; networkGroupId: string; peerId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { ownerId: string; networkGroupId: string; peerId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
      $get:
        | {
            input: { param: { ownerId: string; networkGroupId: string; peerId: string } }
            output: Peer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ownerId: string; networkGroupId: string; peerId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ownerId: string; networkGroupId: string; peerId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId/peers/:peerId/wireguard/configuration': {
      $get:
        | {
            input: { param: { ownerId: string; networkGroupId: string; peerId: string } }
            output: WireGuardConfiguration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ownerId: string; networkGroupId: string; peerId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ownerId: string; networkGroupId: string; peerId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId/peers/:peerId/wireguard/configuration/stream': {
      $get:
        | {
            input: { param: { ownerId: string; networkGroupId: string; peerId: string } }
            output: WireGuardConfiguration
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ownerId: string; networkGroupId: string; peerId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ownerId: string; networkGroupId: string; peerId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId/stream': {
      $get:
        | {
            input: { param: { ownerId: string; networkGroupId: string } }
            output: NetworkGroup
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ownerId: string; networkGroupId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ownerId: string; networkGroupId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/vendor//addons': { $post: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/vendor//apps/:addonId/logscollector': {
      $get: { input: { param: { addonId: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/vendor/apps': {
      $get: {
        input: { query: { offset?: number | undefined } }
        output: Application[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/vendor/apps/:addonId': {
      $get: { input: { param: { addonId: string } }; output: {}; outputFormat: string; status: 200 }
      $put: { input: { param: { addonId: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/vendor/apps/:addonId/consumptions': {
      $post: {
        input: { param: { addonId: string } } & { json: WannabeAddonBilling }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/vendor/apps/:addonId/migration_callback': {
      $put: {
        input: { param: { addonId: string } } & {
          query: { plan_id?: string | undefined; region?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
