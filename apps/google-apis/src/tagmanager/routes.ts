import { createRoute, z } from '@hono/zod-openapi'

type ParameterType = {
  key?: string
  list?: ParameterType[]
  map?: ParameterType[]
  type?:
    | 'typeUnspecified'
    | 'template'
    | 'integer'
    | 'boolean'
    | 'list'
    | 'map'
    | 'triggerReference'
    | 'tagReference'
  value?: string
}

const ParameterSchema: z.ZodType<ParameterType> = z
  .lazy(() =>
    z
      .object({
        key: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The named key that uniquely identifies a parameter. Required for top-level parameters, as well as map values. Ignored for list values. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update',
          }),
        list: z
          .array(ParameterSchema)
          .exactOptional()
          .openapi({
            description:
              "This list parameter's parameters (keys will be ignored). @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          }),
        map: z
          .array(ParameterSchema)
          .exactOptional()
          .openapi({
            description:
              "This map parameter's parameters (must have keys; keys must be unique). @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          }),
        type: z
          .enum([
            'typeUnspecified',
            'template',
            'integer',
            'boolean',
            'list',
            'map',
            'triggerReference',
            'tagReference',
          ])
          .exactOptional()
          .openapi({
            description:
              "The parameter type. Valid values are: - boolean: The value represents a boolean, represented as 'true' or 'false' - integer: The value represents a 64-bit signed integer value, in base 10 - list: A list of parameters should be specified - map: A map of parameters should be specified - template: The value represents any text; this can include variable references (even variable references that might return non-string types) - trigger_reference: The value represents a trigger, represented as the trigger id - tag_reference: The value represents a tag, represented as the tag name @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          }),
        value: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'A parameter\'s value (may contain variable references such as "{{myVariable}}") as appropriate to the specified type. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update',
          }),
      })
      .openapi({ description: 'Represents a Google Tag Manager Parameter.', required: [] }),
  )
  .openapi('Parameter')

const TagConsentSettingSchema = z
  .object({
    consentStatus: z
      .enum(['notSet', 'notNeeded', 'needed'])
      .exactOptional()
      .openapi({
        description:
          "The tag's consent status. If set to NEEDED, the runtime will check that the consent types specified by the consent_type field have been granted.",
      }),
    consentType: ParameterSchema.exactOptional().openapi({
      description:
        'The type of consents to check for during tag firing if in the consent NEEDED state. This parameter must be of type LIST where each list item is of type STRING.',
    }),
  })
  .openapi({ required: [] })
  .openapi('TagConsentSetting')

const SetupTagSchema = z
  .object({
    stopOnSetupFailure: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, fire the main tag if and only if the setup tag fires successfully. If false, fire the main tag regardless of setup tag firing status.',
      }),
    tagName: z.string().exactOptional().openapi({ description: 'The name of the setup tag.' }),
  })
  .openapi({
    description:
      'Represents a reference to atag that fires before another tag in order to set up dependencies.',
    required: [],
  })
  .openapi('SetupTag')

const TeardownTagSchema = z
  .object({
    stopTeardownOnFailure: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, fire the teardown tag if and only if the main tag fires successfully. If false, fire the teardown tag regardless of main tag firing status.',
      }),
    tagName: z.string().exactOptional().openapi({ description: 'The name of the teardown tag.' }),
  })
  .openapi({
    description:
      'Represents a tag that fires after another tag in order to tear down dependencies.',
    required: [],
  })
  .openapi('TeardownTag')

type TagType = {
  accountId?: string
  blockingRuleId?: string[]
  blockingTriggerId?: string[]
  consentSettings?: z.infer<typeof TagConsentSettingSchema>
  containerId?: string
  fingerprint?: string
  firingRuleId?: string[]
  firingTriggerId?: string[]
  liveOnly?: boolean
  monitoringMetadata?: z.infer<typeof ParameterSchema>
  monitoringMetadataTagNameKey?: string
  name?: string
  notes?: string
  parameter?: z.infer<typeof ParameterSchema>[]
  parentFolderId?: string
  path?: string
  paused?: boolean
  priority?: z.infer<typeof ParameterSchema>
  scheduleEndMs?: string
  scheduleStartMs?: string
  setupTag?: z.infer<typeof SetupTagSchema>[]
  tagFiringOption?: 'tagFiringOptionUnspecified' | 'unlimited' | 'oncePerEvent' | 'oncePerLoad'
  tagId?: string
  tagManagerUrl?: string
  teardownTag?: z.infer<typeof TeardownTagSchema>[]
  type?: string
  workspaceId?: string
}

const AccountFeaturesSchema = z
  .object({
    supportMultipleContainers: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this Account supports multiple Containers.' }),
    supportUserPermissions: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this Account supports user permissions managed by GTM.' }),
  })
  .openapi({ required: [] })
  .openapi('AccountFeatures')

const AccountSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Account ID uniquely identifies the GTM Account.' }),
    features: AccountFeaturesSchema.exactOptional().openapi({
      description: 'Read-only Account feature set',
    }),
    fingerprint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fingerprint of the GTM Account as computed at storage time. This value is recomputed whenever the account is modified.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Account display name. @mutable tagmanager.accounts.create @mutable tagmanager.accounts.update',
      }),
    path: z.string().exactOptional().openapi({ description: "GTM Account's API relative path." }),
    shareData: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the account shares data anonymously with Google and others. This flag enables benchmarking by sharing your data in an anonymous form. Google will remove all identifiable information about your website, combine the data with hundreds of other anonymous sites and report aggregate trends in the benchmarking service. @mutable tagmanager.accounts.create @mutable tagmanager.accounts.update',
      }),
    tagManagerUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Auto generated link to the tag manager UI' }),
  })
  .openapi({ description: 'Represents a Google Tag Manager Account.', required: [] })
  .openapi('Account')

const AccountAccessSchema = z
  .object({
    permission: z
      .enum(['accountPermissionUnspecified', 'noAccess', 'user', 'admin'])
      .exactOptional()
      .openapi({
        description:
          'Whether the user has no access, user access, or admin access to an account. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update',
      }),
  })
  .openapi({
    description: 'Defines the Google Tag Manager Account access permissions.',
    required: [],
  })
  .openapi('AccountAccess')

const BuiltInVariableSchema = z
  .object({
    accountId: z.string().exactOptional().openapi({ description: 'GTM Account ID.' }),
    containerId: z.string().exactOptional().openapi({ description: 'GTM Container ID.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Name of the built-in variable to be used to refer to the built-in variable.',
      }),
    path: z
      .string()
      .exactOptional()
      .openapi({ description: "GTM BuiltInVariable's API relative path." }),
    type: z
      .enum([
        'builtInVariableTypeUnspecified',
        'pageUrl',
        'pageHostname',
        'pagePath',
        'referrer',
        'event',
        'clickElement',
        'clickClasses',
        'clickId',
        'clickTarget',
        'clickUrl',
        'clickText',
        'firstPartyServingUrl',
        'formElement',
        'formClasses',
        'formId',
        'formTarget',
        'formUrl',
        'formText',
        'errorMessage',
        'errorUrl',
        'errorLine',
        'newHistoryUrl',
        'oldHistoryUrl',
        'newHistoryFragment',
        'oldHistoryFragment',
        'newHistoryState',
        'oldHistoryState',
        'historySource',
        'containerVersion',
        'debugMode',
        'randomNumber',
        'containerId',
        'appId',
        'appName',
        'appVersionCode',
        'appVersionName',
        'language',
        'osVersion',
        'platform',
        'sdkVersion',
        'deviceName',
        'resolution',
        'advertiserId',
        'advertisingTrackingEnabled',
        'htmlId',
        'environmentName',
        'ampBrowserLanguage',
        'ampCanonicalPath',
        'ampCanonicalUrl',
        'ampCanonicalHost',
        'ampReferrer',
        'ampTitle',
        'ampClientId',
        'ampClientTimezone',
        'ampClientTimestamp',
        'ampClientScreenWidth',
        'ampClientScreenHeight',
        'ampClientScrollX',
        'ampClientScrollY',
        'ampClientMaxScrollX',
        'ampClientMaxScrollY',
        'ampTotalEngagedTime',
        'ampPageViewId',
        'ampPageLoadTime',
        'ampPageDownloadTime',
        'ampGtmEvent',
        'eventName',
        'firebaseEventParameterCampaign',
        'firebaseEventParameterCampaignAclid',
        'firebaseEventParameterCampaignAnid',
        'firebaseEventParameterCampaignClickTimestamp',
        'firebaseEventParameterCampaignContent',
        'firebaseEventParameterCampaignCp1',
        'firebaseEventParameterCampaignGclid',
        'firebaseEventParameterCampaignSource',
        'firebaseEventParameterCampaignTerm',
        'firebaseEventParameterCurrency',
        'firebaseEventParameterDynamicLinkAcceptTime',
        'firebaseEventParameterDynamicLinkLinkid',
        'firebaseEventParameterNotificationMessageDeviceTime',
        'firebaseEventParameterNotificationMessageId',
        'firebaseEventParameterNotificationMessageName',
        'firebaseEventParameterNotificationMessageTime',
        'firebaseEventParameterNotificationTopic',
        'firebaseEventParameterPreviousAppVersion',
        'firebaseEventParameterPreviousOsVersion',
        'firebaseEventParameterPrice',
        'firebaseEventParameterProductId',
        'firebaseEventParameterQuantity',
        'firebaseEventParameterValue',
        'videoProvider',
        'videoUrl',
        'videoTitle',
        'videoDuration',
        'videoPercent',
        'videoVisible',
        'videoStatus',
        'videoCurrentTime',
        'scrollDepthThreshold',
        'scrollDepthUnits',
        'scrollDepthDirection',
        'elementVisibilityRatio',
        'elementVisibilityTime',
        'elementVisibilityFirstTime',
        'elementVisibilityRecentTime',
        'requestPath',
        'requestMethod',
        'clientName',
        'queryString',
        'serverPageLocationUrl',
        'serverPageLocationPath',
        'serverPageLocationHostname',
        'visitorRegion',
      ])
      .exactOptional()
      .openapi({
        description:
          'Type of built-in variable. @required.tagmanager.accounts.containers.workspaces.built_in_variable.update @mutable tagmanager.accounts.containers.workspaces.built_in_variable.update',
      }),
    workspaceId: z.string().exactOptional().openapi({ description: 'GTM Workspace ID.' }),
  })
  .openapi({
    description:
      'Built-in variables are a special category of variables that are pre-created and non-customizable. They provide common functionality like accessing properties of the gtm data layer, monitoring clicks, or accessing elements of a page URL.',
    required: [],
  })
  .openapi('BuiltInVariable')

const ClientSchema = z
  .object({
    accountId: z.string().exactOptional().openapi({ description: 'GTM Account ID.' }),
    clientId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Client ID uniquely identifies the GTM client.' }),
    containerId: z.string().exactOptional().openapi({ description: 'GTM Container ID.' }),
    fingerprint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fingerprint of the GTM Client as computed at storage time. This value is recomputed whenever the client is modified.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Client display name. @mutable tagmanager.accounts.containers.workspaces.clients.create @mutable tagmanager.accounts.containers.workspaces.clients.update',
      }),
    notes: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'User notes on how to apply this tag in the container. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update',
      }),
    parameter: z
      .array(ParameterSchema)
      .exactOptional()
      .openapi({
        description:
          "The client's parameters. @mutable tagmanager.accounts.containers.workspaces.clients.create @mutable tagmanager.accounts.containers.workspaces.clients.update",
      }),
    parentFolderId: z.string().exactOptional().openapi({ description: 'Parent folder id.' }),
    path: z.string().exactOptional().openapi({ description: "GTM client's API relative path." }),
    priority: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Priority determines relative firing order. @mutable tagmanager.accounts.containers.workspaces.clients.create @mutable tagmanager.accounts.containers.workspaces.clients.update',
      }),
    tagManagerUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Auto generated link to the tag manager UI' }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Client type. @mutable tagmanager.accounts.containers.workspaces.clients.create @mutable tagmanager.accounts.containers.workspaces.clients.update',
      }),
    workspaceId: z.string().exactOptional().openapi({ description: 'GTM Workspace ID.' }),
  })
  .openapi({ required: [] })
  .openapi('Client')

const ConditionSchema = z
  .object({
    parameter: z
      .array(ParameterSchema)
      .exactOptional()
      .openapi({
        description:
          "A list of named parameters (key/value), depending on the condition's type. Notes: - For binary operators, include parameters named arg0 and arg1 for specifying the left and right operands, respectively. - At this time, the left operand (arg0) must be a reference to a variable. - For case-insensitive Regex matching, include a boolean parameter named ignore_case that is set to true. If not specified or set to any other value, the matching will be case sensitive. - To negate an operator, include a boolean parameter named negate boolean parameter that is set to true. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update",
      }),
    type: z
      .enum([
        'conditionTypeUnspecified',
        'equals',
        'contains',
        'startsWith',
        'endsWith',
        'matchRegex',
        'greater',
        'greaterOrEquals',
        'less',
        'lessOrEquals',
        'cssSelector',
        'urlMatches',
      ])
      .exactOptional()
      .openapi({
        description:
          'The type of operator for this condition. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update',
      }),
  })
  .openapi({ description: 'Represents a predicate.', required: [] })
  .openapi('Condition')

const ContainerFeaturesSchema = z
  .object({
    supportBuiltInVariables: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this Container supports built-in variables' }),
    supportClients: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this Container supports clients.' }),
    supportEnvironments: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this Container supports environments.' }),
    supportFolders: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this Container supports folders.' }),
    supportGtagConfigs: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this Container supports Google tag config.' }),
    supportTags: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this Container supports tags.' }),
    supportTemplates: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this Container supports templates.' }),
    supportTriggers: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this Container supports triggers.' }),
    supportUserPermissions: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this Container supports user permissions managed by GTM.' }),
    supportVariables: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this Container supports variables.' }),
    supportVersions: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this Container supports Container versions.' }),
    supportWorkspaces: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this Container supports workspaces.' }),
    supportZones: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this Container supports zones.' }),
  })
  .openapi({ required: [] })
  .openapi('ContainerFeatures')

const ContainerSchema = z
  .object({
    accountId: z.string().exactOptional().openapi({ description: 'GTM Account ID.' }),
    containerId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Container ID uniquely identifies the GTM Container.' }),
    domainName: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of domain names associated with the Container. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update',
      }),
    features: ContainerFeaturesSchema.exactOptional().openapi({
      description: 'Read-only Container feature set.',
    }),
    fingerprint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fingerprint of the GTM Container as computed at storage time. This value is recomputed whenever the account is modified.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Container display name. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update',
      }),
    notes: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Container Notes. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update',
      }),
    path: z.string().exactOptional().openapi({ description: "GTM Container's API relative path." }),
    publicId: z.string().exactOptional().openapi({ description: 'Container Public ID.' }),
    tagIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'All Tag IDs that refer to this Container.' }),
    tagManagerUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Auto generated link to the tag manager UI' }),
    taggingServerUrls: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of server-side container URLs for the Container. If multiple URLs are provided, all URL paths must match. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update',
      }),
    usageContext: z
      .array(
        z.enum([
          'usageContextUnspecified',
          'web',
          'android',
          'ios',
          'androidSdk5',
          'iosSdk5',
          'amp',
          'server',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'List of Usage Contexts for the Container. Valid values include: web, android, or ios. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update',
      }),
  })
  .openapi({
    description:
      'Represents a Google Tag Manager Container, which specifies the platform tags will run on, manages workspaces, and retains container versions.',
    required: [],
  })
  .openapi('Container')

const ContainerAccessSchema = z
  .object({
    containerId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'GTM Container ID. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update',
      }),
    permission: z
      .enum(['containerPermissionUnspecified', 'noAccess', 'read', 'edit', 'approve', 'publish'])
      .exactOptional()
      .openapi({
        description:
          'List of Container permissions. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update',
      }),
  })
  .openapi({
    description: 'Defines the Google Tag Manager Container access permissions.',
    required: [],
  })
  .openapi('ContainerAccess')

const GalleryReferenceSchema = z
  .object({
    host: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the host for the community gallery template.' }),
    isModified: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If a user has manually edited the community gallery template.' }),
    owner: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the owner for the community gallery template.' }),
    repository: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the repository for the community gallery template.' }),
    signature: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The signature of the community gallery template as computed at import time. This value is recomputed whenever the template is updated from the gallery.',
      }),
    version: z
      .string()
      .exactOptional()
      .openapi({ description: 'The version of the community gallery template.' }),
  })
  .openapi({
    description:
      'Represents the link between a custom template and an entry on the Community Template Gallery site.',
    required: [],
  })
  .openapi('GalleryReference')

const CustomTemplateSchema = z
  .object({
    accountId: z.string().exactOptional().openapi({ description: 'GTM Account ID.' }),
    containerId: z.string().exactOptional().openapi({ description: 'GTM Container ID.' }),
    fingerprint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fingerprint of the GTM Custom Template as computed at storage time. This value is recomputed whenever the template is modified.',
      }),
    galleryReference: GalleryReferenceSchema.exactOptional().openapi({
      description: 'A reference to the Community Template Gallery entry.',
    }),
    name: z.string().exactOptional().openapi({ description: 'Custom Template display name.' }),
    path: z
      .string()
      .exactOptional()
      .openapi({ description: "GTM Custom Template's API relative path." }),
    tagManagerUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Auto generated link to the tag manager UI' }),
    templateData: z
      .string()
      .exactOptional()
      .openapi({ description: 'The custom template in text format.' }),
    templateId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The Custom Template ID uniquely identifies the GTM custom template.',
      }),
    workspaceId: z.string().exactOptional().openapi({ description: 'GTM Workspace ID.' }),
  })
  .openapi({
    description: "Represents a Google Tag Manager Custom Template's contents.",
    required: [],
  })
  .openapi('CustomTemplate')

const FolderSchema = z
  .object({
    accountId: z.string().exactOptional().openapi({ description: 'GTM Account ID.' }),
    containerId: z.string().exactOptional().openapi({ description: 'GTM Container ID.' }),
    fingerprint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fingerprint of the GTM Folder as computed at storage time. This value is recomputed whenever the folder is modified.',
      }),
    folderId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Folder ID uniquely identifies the GTM Folder.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Folder display name. @mutable tagmanager.accounts.containers.workspaces.folders.create @mutable tagmanager.accounts.containers.workspaces.folders.update',
      }),
    notes: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'User notes on how to apply this folder in the container. @mutable tagmanager.accounts.containers.workspaces.folders.create @mutable tagmanager.accounts.containers.workspaces.folders.update',
      }),
    path: z.string().exactOptional().openapi({ description: "GTM Folder's API relative path." }),
    tagManagerUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Auto generated link to the tag manager UI' }),
    workspaceId: z.string().exactOptional().openapi({ description: 'GTM Workspace ID.' }),
  })
  .openapi({ description: 'Represents a Google Tag Manager Folder.', required: [] })
  .openapi('Folder')

const GtagConfigSchema = z
  .object({
    accountId: z.string().exactOptional().openapi({ description: 'Google tag account ID.' }),
    containerId: z.string().exactOptional().openapi({ description: 'Google tag container ID.' }),
    fingerprint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fingerprint of the Google tag config as computed at storage time. This value is recomputed whenever the config is modified.',
      }),
    gtagConfigId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID uniquely identifies the Google tag config.' }),
    parameter: z
      .array(ParameterSchema)
      .exactOptional()
      .openapi({
        description:
          "The Google tag config's parameters. @mutable tagmanager.accounts.containers.workspaces.gtag_config.create @mutable tagmanager.accounts.containers.workspaces.gtag_config.update",
      }),
    path: z
      .string()
      .exactOptional()
      .openapi({ description: "Google tag config's API relative path." }),
    tagManagerUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Auto generated link to the tag manager UI' }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Google tag config type. @required tagmanager.accounts.containers.workspaces.gtag_config.create @required tagmanager.accounts.containers.workspaces.gtag_config.update @mutable tagmanager.accounts.containers.workspaces.gtag_config.create @mutable tagmanager.accounts.containers.workspaces.gtag_config.update',
      }),
    workspaceId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Google tag workspace ID. Only used by GTM containers. Set to 0 otherwise.',
      }),
  })
  .openapi({ description: 'Represents a Google tag configuration.', required: [] })
  .openapi('GtagConfig')

const TagSchema: z.ZodType<TagType> = z
  .lazy(() =>
    z
      .object({
        accountId: z.string().exactOptional().openapi({ description: 'GTM Account ID.' }),
        blockingRuleId: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description:
              'Blocking rule IDs. If any of the listed rules evaluate to true, the tag will not fire. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update',
          }),
        blockingTriggerId: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description:
              'Blocking trigger IDs. If any of the listed triggers evaluate to true, the tag will not fire. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update',
          }),
        consentSettings: TagConsentSettingSchema.exactOptional().openapi({
          description:
            'Consent settings of a tag. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update',
        }),
        containerId: z.string().exactOptional().openapi({ description: 'GTM Container ID.' }),
        fingerprint: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The fingerprint of the GTM Tag as computed at storage time. This value is recomputed whenever the tag is modified.',
          }),
        firingRuleId: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description:
              'Firing rule IDs. A tag will fire when any of the listed rules are true and all of its blockingRuleIds (if any specified) are false. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update',
          }),
        firingTriggerId: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description:
              'Firing trigger IDs. A tag will fire when any of the listed triggers are true and all of its blockingTriggerIds (if any specified) are false. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update',
          }),
        liveOnly: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'If set to true, this tag will only fire in the live environment (e.g. not in preview or debug mode). @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update',
          }),
        monitoringMetadata: ParameterSchema.exactOptional().openapi({
          description:
            'A map of key-value pairs of tag metadata to be included in the event data for tag monitoring. Notes: - This parameter must be type MAP. - Each parameter in the map are type TEMPLATE, however cannot contain variable references. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update',
        }),
        monitoringMetadataTagNameKey: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'If non-empty, then the tag display name will be included in the monitoring metadata map using the key specified. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update',
          }),
        name: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Tag display name. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update',
          }),
        notes: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'User notes on how to apply this tag in the container. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update',
          }),
        parameter: z
          .array(ParameterSchema)
          .exactOptional()
          .openapi({
            description:
              "The tag's parameters. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          }),
        parentFolderId: z.string().exactOptional().openapi({ description: 'Parent folder id.' }),
        path: z.string().exactOptional().openapi({ description: "GTM Tag's API relative path." }),
        paused: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Indicates whether the tag is paused, which prevents the tag from firing. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update',
          }),
        priority: ParameterSchema.exactOptional().openapi({
          description:
            "User defined numeric priority of the tag. Tags are fired asynchronously in order of priority. Tags with higher numeric value fire first. A tag's priority can be a positive or negative value. The default value is 0. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
        }),
        scheduleEndMs: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The end timestamp in milliseconds to schedule a tag. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update',
          }),
        scheduleStartMs: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The start timestamp in milliseconds to schedule a tag. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update',
          }),
        setupTag: z
          .array(SetupTagSchema)
          .exactOptional()
          .openapi({ description: 'The list of setup tags. Currently we only allow one.' }),
        tagFiringOption: z
          .enum(['tagFiringOptionUnspecified', 'unlimited', 'oncePerEvent', 'oncePerLoad'])
          .exactOptional()
          .openapi({ description: 'Option to fire this tag.' }),
        tagId: z
          .string()
          .exactOptional()
          .openapi({ description: 'The Tag ID uniquely identifies the GTM Tag.' }),
        tagManagerUrl: z
          .string()
          .exactOptional()
          .openapi({ description: 'Auto generated link to the tag manager UI' }),
        teardownTag: z
          .array(TeardownTagSchema)
          .exactOptional()
          .openapi({ description: 'The list of teardown tags. Currently we only allow one.' }),
        type: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'GTM Tag Type. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update',
          }),
        workspaceId: z.string().exactOptional().openapi({ description: 'GTM Workspace ID.' }),
      })
      .openapi({ description: 'Represents a Google Tag Manager Tag.', required: [] }),
  )
  .openapi('Tag')

const TriggerSchema = z
  .object({
    accountId: z.string().exactOptional().openapi({ description: 'GTM Account ID.' }),
    autoEventFilter: z
      .array(ConditionSchema)
      .exactOptional()
      .openapi({
        description:
          'Used in the case of auto event tracking. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update',
      }),
    checkValidation: ParameterSchema.exactOptional().openapi({
      description:
        'Whether or not we should only fire tags if the form submit or link click event is not cancelled by some other event handler (e.g. because of validation). Only valid for Form Submission and Link Click triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update',
    }),
    containerId: z.string().exactOptional().openapi({ description: 'GTM Container ID.' }),
    continuousTimeMinMilliseconds: ParameterSchema.exactOptional().openapi({
      description:
        'A visibility trigger minimum continuous visible time (in milliseconds). Only valid for AMP Visibility trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update',
    }),
    customEventFilter: z
      .array(ConditionSchema)
      .exactOptional()
      .openapi({
        description:
          'Used in the case of custom event, which is fired iff all Conditions are true. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update',
      }),
    eventName: ParameterSchema.exactOptional().openapi({
      description:
        'Name of the GTM event that is fired. Only valid for Timer triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update',
    }),
    filter: z
      .array(ConditionSchema)
      .exactOptional()
      .openapi({
        description:
          'The trigger will only fire iff all Conditions are true. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update',
      }),
    fingerprint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fingerprint of the GTM Trigger as computed at storage time. This value is recomputed whenever the trigger is modified.',
      }),
    horizontalScrollPercentageList: ParameterSchema.exactOptional().openapi({
      description:
        'List of integer percentage values for scroll triggers. The trigger will fire when each percentage is reached when the view is scrolled horizontally. Only valid for AMP scroll triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update',
    }),
    interval: ParameterSchema.exactOptional().openapi({
      description:
        'Time between triggering recurring Timer Events (in milliseconds). Only valid for Timer triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update',
    }),
    intervalSeconds: ParameterSchema.exactOptional().openapi({
      description:
        'Time between Timer Events to fire (in seconds). Only valid for AMP Timer trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update',
    }),
    limit: ParameterSchema.exactOptional().openapi({
      description:
        'Limit of the number of GTM events this Timer Trigger will fire. If no limit is set, we will continue to fire GTM events until the user leaves the page. Only valid for Timer triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update',
    }),
    maxTimerLengthSeconds: ParameterSchema.exactOptional().openapi({
      description:
        'Max time to fire Timer Events (in seconds). Only valid for AMP Timer trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Trigger display name. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update',
      }),
    notes: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'User notes on how to apply this trigger in the container. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update',
      }),
    parameter: z
      .array(ParameterSchema)
      .exactOptional()
      .openapi({
        description:
          'Additional parameters. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update',
      }),
    parentFolderId: z.string().exactOptional().openapi({ description: 'Parent folder id.' }),
    path: z.string().exactOptional().openapi({ description: "GTM Trigger's API relative path." }),
    selector: ParameterSchema.exactOptional().openapi({
      description:
        'A click trigger CSS selector (i.e. "a", "button" etc.). Only valid for AMP Click trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update',
    }),
    tagManagerUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Auto generated link to the tag manager UI' }),
    totalTimeMinMilliseconds: ParameterSchema.exactOptional().openapi({
      description:
        'A visibility trigger minimum total visible time (in milliseconds). Only valid for AMP Visibility trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update',
    }),
    triggerId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Trigger ID uniquely identifies the GTM Trigger.' }),
    type: z
      .enum([
        'eventTypeUnspecified',
        'pageview',
        'domReady',
        'windowLoaded',
        'customEvent',
        'triggerGroup',
        'init',
        'consentInit',
        'serverPageview',
        'always',
        'firebaseAppException',
        'firebaseAppUpdate',
        'firebaseCampaign',
        'firebaseFirstOpen',
        'firebaseInAppPurchase',
        'firebaseNotificationDismiss',
        'firebaseNotificationForeground',
        'firebaseNotificationOpen',
        'firebaseNotificationReceive',
        'firebaseOsUpdate',
        'firebaseSessionStart',
        'firebaseUserEngagement',
        'formSubmission',
        'click',
        'linkClick',
        'jsError',
        'historyChange',
        'timer',
        'ampClick',
        'ampTimer',
        'ampScroll',
        'ampVisibility',
        'youTubeVideo',
        'scrollDepth',
        'elementVisibility',
      ])
      .exactOptional()
      .openapi({
        description:
          'Defines the data layer event that causes this trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update',
      }),
    uniqueTriggerId: ParameterSchema.exactOptional().openapi({
      description:
        "Globally unique id of the trigger that auto-generates this (a Form Submit, Link Click or Timer listener) if any. Used to make incompatible auto-events work together with trigger filtering based on trigger ids. This value is populated during output generation since the tags implied by triggers don't exist until then. Only valid for Form Submit, Link Click and Timer triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update",
    }),
    verticalScrollPercentageList: ParameterSchema.exactOptional().openapi({
      description:
        'List of integer percentage values for scroll triggers. The trigger will fire when each percentage is reached when the view is scrolled vertically. Only valid for AMP scroll triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update',
    }),
    visibilitySelector: ParameterSchema.exactOptional().openapi({
      description:
        'A visibility trigger CSS selector (i.e. "#id"). Only valid for AMP Visibility trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update',
    }),
    visiblePercentageMax: ParameterSchema.exactOptional().openapi({
      description:
        'A visibility trigger maximum percent visibility. Only valid for AMP Visibility trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update',
    }),
    visiblePercentageMin: ParameterSchema.exactOptional().openapi({
      description:
        'A visibility trigger minimum percent visibility. Only valid for AMP Visibility trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update',
    }),
    waitForTags: ParameterSchema.exactOptional().openapi({
      description:
        'Whether or not we should delay the form submissions or link opening until all of the tags have fired (by preventing the default action and later simulating the default action). Only valid for Form Submission and Link Click triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update',
    }),
    waitForTagsTimeout: ParameterSchema.exactOptional().openapi({
      description:
        "How long to wait (in milliseconds) for tags to fire when 'waits_for_tags' above evaluates to true. Only valid for Form Submission and Link Click triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update",
    }),
    workspaceId: z.string().exactOptional().openapi({ description: 'GTM Workspace ID.' }),
  })
  .openapi({ description: 'Represents a Google Tag Manager Trigger', required: [] })
  .openapi('Trigger')

const VariableFormatValueSchema = z
  .object({
    caseConversionType: z
      .enum(['none', 'lowercase', 'uppercase'])
      .exactOptional()
      .openapi({
        description:
          'The option to convert a string-type variable value to either lowercase or uppercase.',
      }),
    convertFalseToValue: ParameterSchema.exactOptional().openapi({
      description: 'The value to convert if a variable value is false.',
    }),
    convertNullToValue: ParameterSchema.exactOptional().openapi({
      description: 'The value to convert if a variable value is null.',
    }),
    convertTrueToValue: ParameterSchema.exactOptional().openapi({
      description: 'The value to convert if a variable value is true.',
    }),
    convertUndefinedToValue: ParameterSchema.exactOptional().openapi({
      description: 'The value to convert if a variable value is undefined.',
    }),
  })
  .openapi({ required: [] })
  .openapi('VariableFormatValue')

const VariableSchema = z
  .object({
    accountId: z.string().exactOptional().openapi({ description: 'GTM Account ID.' }),
    containerId: z.string().exactOptional().openapi({ description: 'GTM Container ID.' }),
    disablingTriggerId: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'For mobile containers only: A list of trigger IDs for disabling conditional variables; the variable is enabled if one of the enabling trigger is true while all the disabling trigger are false. Treated as an unordered set. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update',
      }),
    enablingTriggerId: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'For mobile containers only: A list of trigger IDs for enabling conditional variables; the variable is enabled if one of the enabling triggers is true while all the disabling triggers are false. Treated as an unordered set. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update',
      }),
    fingerprint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fingerprint of the GTM Variable as computed at storage time. This value is recomputed whenever the variable is modified.',
      }),
    formatValue: VariableFormatValueSchema.exactOptional().openapi({
      description: 'Option to convert a variable value to other value.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Variable display name. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update',
      }),
    notes: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'User notes on how to apply this variable in the container. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update',
      }),
    parameter: z
      .array(ParameterSchema)
      .exactOptional()
      .openapi({
        description:
          "The variable's parameters. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update",
      }),
    parentFolderId: z.string().exactOptional().openapi({ description: 'Parent folder id.' }),
    path: z.string().exactOptional().openapi({ description: "GTM Variable's API relative path." }),
    scheduleEndMs: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The end timestamp in milliseconds to schedule a variable. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update',
      }),
    scheduleStartMs: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The start timestamp in milliseconds to schedule a variable. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update',
      }),
    tagManagerUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Auto generated link to the tag manager UI' }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'GTM Variable Type. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update',
      }),
    variableId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Variable ID uniquely identifies the GTM Variable.' }),
    workspaceId: z.string().exactOptional().openapi({ description: 'GTM Workspace ID.' }),
  })
  .openapi({ description: 'Represents a Google Tag Manager Variable.', required: [] })
  .openapi('Variable')

const ZoneBoundarySchema = z
  .object({
    condition: z
      .array(ConditionSchema)
      .exactOptional()
      .openapi({ description: 'The conditions that, when conjoined, make up the boundary.' }),
    customEvaluationTriggerId: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Custom evaluation trigger IDs. A zone will evaluate its boundary conditions when any of the listed triggers are true.',
      }),
  })
  .openapi({ description: "Represents a Zone's boundaries.", required: [] })
  .openapi('ZoneBoundary')

const ZoneChildContainerSchema = z
  .object({
    nickname: z
      .string()
      .exactOptional()
      .openapi({ description: "The zone's nickname for the child container." }),
    publicId: z
      .string()
      .exactOptional()
      .openapi({ description: "The child container's public id." }),
  })
  .openapi({ description: 'Represents a child container of a Zone.', required: [] })
  .openapi('ZoneChildContainer')

const ZoneTypeRestrictionSchema = z
  .object({
    enable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if type restrictions have been enabled for this Zone.' }),
    whitelistedTypeId: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'List of type public ids that have been whitelisted for use in this Zone.',
      }),
  })
  .openapi({ description: "Represents a Zone's type restrictions.", required: [] })
  .openapi('ZoneTypeRestriction')

const ZoneSchema = z
  .object({
    accountId: z.string().exactOptional().openapi({ description: 'GTM Account ID.' }),
    boundary: ZoneBoundarySchema.exactOptional().openapi({ description: "This Zone's boundary." }),
    childContainer: z
      .array(ZoneChildContainerSchema)
      .exactOptional()
      .openapi({ description: 'Containers that are children of this Zone.' }),
    containerId: z.string().exactOptional().openapi({ description: 'GTM Container ID.' }),
    fingerprint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fingerprint of the GTM Zone as computed at storage time. This value is recomputed whenever the zone is modified.',
      }),
    name: z.string().exactOptional().openapi({ description: 'Zone display name.' }),
    notes: z
      .string()
      .exactOptional()
      .openapi({ description: 'User notes on how to apply this zone in the container.' }),
    path: z.string().exactOptional().openapi({ description: "GTM Zone's API relative path." }),
    tagManagerUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Auto generated link to the tag manager UI' }),
    typeRestriction: ZoneTypeRestrictionSchema.exactOptional().openapi({
      description: "This Zone's type restrictions.",
    }),
    workspaceId: z.string().exactOptional().openapi({ description: 'GTM Workspace ID.' }),
    zoneId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Zone ID uniquely identifies the GTM Zone.' }),
  })
  .openapi({ description: "Represents a Google Tag Manager Zone's contents.", required: [] })
  .openapi('Zone')

const ContainerVersionSchema = z
  .object({
    accountId: z.string().exactOptional().openapi({ description: 'GTM Account ID.' }),
    builtInVariable: z
      .array(BuiltInVariableSchema)
      .exactOptional()
      .openapi({
        description: 'The built-in variables in the container that this version was taken from.',
      }),
    client: z
      .array(ClientSchema)
      .exactOptional()
      .openapi({ description: 'The clients in the container that this version was taken from.' }),
    container: ContainerSchema.exactOptional().openapi({
      description: 'The container that this version was taken from.',
    }),
    containerId: z.string().exactOptional().openapi({ description: 'GTM Container ID.' }),
    containerVersionId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The Container Version ID uniquely identifies the GTM Container Version.',
      }),
    customTemplate: z
      .array(CustomTemplateSchema)
      .exactOptional()
      .openapi({
        description: 'The custom templates in the container that this version was taken from.',
      }),
    deleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A value of true indicates this container version has been deleted.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Container version description. @mutable tagmanager.accounts.containers.versions.update',
      }),
    fingerprint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fingerprint of the GTM Container Version as computed at storage time. This value is recomputed whenever the container version is modified.',
      }),
    folder: z
      .array(FolderSchema)
      .exactOptional()
      .openapi({ description: 'The folders in the container that this version was taken from.' }),
    gtagConfig: z
      .array(GtagConfigSchema)
      .exactOptional()
      .openapi({
        description: 'The Google tag configs in the container that this version was taken from.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Container version display name. @mutable tagmanager.accounts.containers.versions.update',
      }),
    path: z
      .string()
      .exactOptional()
      .openapi({ description: "GTM Container Version's API relative path." }),
    tag: z
      .array(TagSchema)
      .exactOptional()
      .openapi({ description: 'The tags in the container that this version was taken from.' }),
    tagManagerUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Auto generated link to the tag manager UI' }),
    trigger: z
      .array(TriggerSchema)
      .exactOptional()
      .openapi({ description: 'The triggers in the container that this version was taken from.' }),
    variable: z
      .array(VariableSchema)
      .exactOptional()
      .openapi({ description: 'The variables in the container that this version was taken from.' }),
    zone: z
      .array(ZoneSchema)
      .exactOptional()
      .openapi({ description: 'The zones in the container that this version was taken from.' }),
  })
  .openapi({ description: 'Represents a Google Tag Manager Container Version.', required: [] })
  .openapi('ContainerVersion')

const ContainerVersionHeaderSchema = z
  .object({
    accountId: z.string().exactOptional().openapi({ description: 'GTM Account ID.' }),
    containerId: z.string().exactOptional().openapi({ description: 'GTM Container ID.' }),
    containerVersionId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The Container Version ID uniquely identifies the GTM Container Version.',
      }),
    deleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A value of true indicates this container version has been deleted.',
      }),
    name: z.string().exactOptional().openapi({ description: 'Container version display name.' }),
    numClients: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of clients in the container version.' }),
    numCustomTemplates: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of custom templates in the container version.' }),
    numGtagConfigs: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of Google tag configs in the container version.' }),
    numMacros: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of macros in the container version.' }),
    numRules: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of rules in the container version.' }),
    numTags: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of tags in the container version.' }),
    numTransformations: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of transformations in the container version.' }),
    numTriggers: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of triggers in the container version.' }),
    numVariables: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of variables in the container version.' }),
    numZones: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of zones in the container version.' }),
    path: z
      .string()
      .exactOptional()
      .openapi({ description: "GTM Container Version's API relative path." }),
  })
  .openapi({
    description: 'Represents a Google Tag Manager Container Version Header.',
    required: [],
  })
  .openapi('ContainerVersionHeader')

const CreateBuiltInVariableResponseSchema = z
  .object({
    builtInVariable: z
      .array(BuiltInVariableSchema)
      .exactOptional()
      .openapi({ description: 'List of created built-in variables.' }),
  })
  .openapi({ required: [] })
  .openapi('CreateBuiltInVariableResponse')

const CreateContainerVersionRequestVersionOptionsSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the container version to be created.' }),
    notes: z
      .string()
      .exactOptional()
      .openapi({ description: 'The notes of the container version to be created.' }),
  })
  .openapi({ description: 'Options for new container versions.', required: [] })
  .openapi('CreateContainerVersionRequestVersionOptions')

const SyncStatusSchema = z
  .object({
    mergeConflict: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Synchornization operation detected a merge conflict.' }),
    syncError: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'An error occurred during the synchronization operation.' }),
  })
  .openapi({ description: 'The status of a workspace after synchronization.', required: [] })
  .openapi('SyncStatus')

const CreateContainerVersionResponseSchema = z
  .object({
    compilerError: z.boolean().exactOptional().openapi({ description: 'Compiler errors or not.' }),
    containerVersion: ContainerVersionSchema.exactOptional().openapi({
      description: 'The container version created.',
    }),
    newWorkspacePath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Auto generated workspace path created as a result of version creation. This field should only be populated if the created version was not a quick preview.',
      }),
    syncStatus: SyncStatusSchema.exactOptional().openapi({
      description:
        'Whether version creation failed when syncing the workspace to the latest container version.',
    }),
  })
  .openapi({ description: 'Create container versions response.', required: [] })
  .openapi('CreateContainerVersionResponse')

const DestinationSchema = z
  .object({
    accountId: z.string().exactOptional().openapi({ description: 'GTM Account ID.' }),
    containerId: z.string().exactOptional().openapi({ description: 'GTM Container ID.' }),
    destinationId: z.string().exactOptional().openapi({ description: 'Destination ID.' }),
    destinationLinkId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Destination link ID uniquely identifies the Destination.' }),
    fingerprint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fingerprint of the Google Tag Destination as computed at storage time. This value is recomputed whenever the destination is modified.',
      }),
    name: z.string().exactOptional().openapi({ description: 'Destination display name.' }),
    path: z.string().exactOptional().openapi({ description: "Destination's API relative path." }),
    tagManagerUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Auto generated link to the tag manager UI.' }),
  })
  .openapi({ description: 'Represents a Google Tag Destination.', required: [] })
  .openapi('Destination')

const EntitySchema = z
  .object({
    changeStatus: z
      .enum(['changeStatusUnspecified', 'none', 'added', 'deleted', 'updated'])
      .exactOptional()
      .openapi({ description: 'Represents how the entity has been changed in the workspace.' }),
    client: ClientSchema.exactOptional().openapi({
      description: 'The client being represented by the entity.',
    }),
    folder: FolderSchema.exactOptional().openapi({
      description: 'The folder being represented by the entity.',
    }),
    tag: TagSchema.exactOptional().openapi({
      description: 'The tag being represented by the entity.',
    }),
    trigger: TriggerSchema.exactOptional().openapi({
      description: 'The trigger being represented by the entity.',
    }),
    variable: VariableSchema.exactOptional().openapi({
      description: 'The variable being represented by the entity.',
    }),
  })
  .openapi({
    description:
      'A workspace entity that may represent a tag, trigger, variable, or folder in addition to its status in the workspace.',
    required: [],
  })
  .openapi('Entity')

const EnvironmentSchema = z
  .object({
    accountId: z.string().exactOptional().openapi({ description: 'GTM Account ID.' }),
    authorizationCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The environment authorization code.' }),
    authorizationTimestamp: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last update time-stamp for the authorization code.' }),
    containerId: z.string().exactOptional().openapi({ description: 'GTM Container ID.' }),
    containerVersionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Represents a link to a container version.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The environment description. Can be set or changed only on USER type environments. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update',
      }),
    enableDebug: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether or not to enable debug by default for the environment. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update',
      }),
    environmentId: z
      .string()
      .exactOptional()
      .openapi({ description: 'GTM Environment ID uniquely identifies the GTM Environment.' }),
    fingerprint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fingerprint of the GTM environment as computed at storage time. This value is recomputed whenever the environment is modified.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The environment display name. Can be set or changed only on USER type environments. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update',
      }),
    path: z
      .string()
      .exactOptional()
      .openapi({ description: "GTM Environment's API relative path." }),
    tagManagerUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Auto generated link to the tag manager UI' }),
    type: z
      .enum(['user', 'live', 'latest', 'workspace'])
      .exactOptional()
      .openapi({ description: 'The type of this environment.' }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Default preview page url for the environment. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update',
      }),
    workspaceId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Represents a link to a quick preview of a workspace.' }),
  })
  .openapi({
    description:
      'Represents a Google Tag Manager Environment. Note that a user can create, delete and update environments of type USER, but can only update the enable_debug and url fields of environments of other types.',
    required: [],
  })
  .openapi('Environment')

const FolderEntitiesSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Continuation token for fetching the next page of results.' }),
    tag: z
      .array(TagSchema)
      .exactOptional()
      .openapi({ description: 'The list of tags inside the folder.' }),
    trigger: z
      .array(TriggerSchema)
      .exactOptional()
      .openapi({ description: 'The list of triggers inside the folder.' }),
    variable: z
      .array(VariableSchema)
      .exactOptional()
      .openapi({ description: 'The list of variables inside the folder.' }),
  })
  .openapi({ description: "Represents a Google Tag Manager Folder's contents.", required: [] })
  .openapi('FolderEntities')

const GetContainerSnippetResponseSchema = z
  .object({
    snippet: z
      .string()
      .exactOptional()
      .openapi({ description: 'Tagging snippet for a Container.' }),
  })
  .openapi({ required: [] })
  .openapi('GetContainerSnippetResponse')

const MergeConflictSchema = z
  .object({
    entityInBaseVersion: EntitySchema.exactOptional().openapi({
      description:
        'The base version entity (since the latest sync operation) that has conflicting changes compared to the workspace. If this field is missing, it means the workspace entity is deleted from the base version.',
    }),
    entityInWorkspace: EntitySchema.exactOptional().openapi({
      description:
        'The workspace entity that has conflicting changes compared to the base version. If an entity is deleted in a workspace, it will still appear with a deleted change status.',
    }),
  })
  .openapi({ description: 'Represents a merge conflict.', required: [] })
  .openapi('MergeConflict')

const GetWorkspaceStatusResponseSchema = z
  .object({
    mergeConflict: z
      .array(MergeConflictSchema)
      .exactOptional()
      .openapi({ description: 'The merge conflict after sync.' }),
    workspaceChange: z
      .array(EntitySchema)
      .exactOptional()
      .openapi({ description: 'Entities that have been changed in the workspace.' }),
  })
  .openapi({
    description:
      'The changes that have occurred in the workspace since the base container version.',
    required: [],
  })
  .openapi('GetWorkspaceStatusResponse')

const ListAccountsResponseSchema = z
  .object({
    account: z
      .array(AccountSchema)
      .exactOptional()
      .openapi({ description: 'List of GTM Accounts that a user has access to.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Continuation token for fetching the next page of results.' }),
  })
  .openapi({ description: 'List Accounts Response.', required: [] })
  .openapi('ListAccountsResponse')

const ListClientsResponseSchema = z
  .object({
    client: z
      .array(ClientSchema)
      .exactOptional()
      .openapi({ description: 'All GTM Clients of a GTM Container.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Continuation token for fetching the next page of results.' }),
  })
  .openapi({ required: [] })
  .openapi('ListClientsResponse')

const ListContainerVersionsResponseSchema = z
  .object({
    containerVersionHeader: z
      .array(ContainerVersionHeaderSchema)
      .exactOptional()
      .openapi({ description: 'All container version headers of a GTM Container.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Continuation token for fetching the next page of results.' }),
  })
  .openapi({ description: 'List container versions response.', required: [] })
  .openapi('ListContainerVersionsResponse')

const ListContainersResponseSchema = z
  .object({
    container: z
      .array(ContainerSchema)
      .exactOptional()
      .openapi({ description: 'All Containers of a GTM Account.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Continuation token for fetching the next page of results.' }),
  })
  .openapi({ description: 'List Containers Response.', required: [] })
  .openapi('ListContainersResponse')

const ListDestinationsResponseSchema = z
  .object({
    destination: z
      .array(DestinationSchema)
      .exactOptional()
      .openapi({ description: 'All Destinations linked to a GTM Container.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Continuation token for fetching the next page of results.' }),
  })
  .openapi({ required: [] })
  .openapi('ListDestinationsResponse')

const ListEnabledBuiltInVariablesResponseSchema = z
  .object({
    builtInVariable: z
      .array(BuiltInVariableSchema)
      .exactOptional()
      .openapi({ description: 'All GTM BuiltInVariables of a GTM container.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Continuation token for fetching the next page of results.' }),
  })
  .openapi({ description: 'A list of enabled built-in variables.', required: [] })
  .openapi('ListEnabledBuiltInVariablesResponse')

const ListEnvironmentsResponseSchema = z
  .object({
    environment: z
      .array(EnvironmentSchema)
      .exactOptional()
      .openapi({ description: 'All Environments of a GTM Container.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Continuation token for fetching the next page of results.' }),
  })
  .openapi({ description: 'List Environments Response.', required: [] })
  .openapi('ListEnvironmentsResponse')

const ListFoldersResponseSchema = z
  .object({
    folder: z
      .array(FolderSchema)
      .exactOptional()
      .openapi({ description: 'All GTM Folders of a GTM Container.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Continuation token for fetching the next page of results.' }),
  })
  .openapi({ description: 'List Folders Response.', required: [] })
  .openapi('ListFoldersResponse')

const ListGtagConfigResponseSchema = z
  .object({
    gtagConfig: z
      .array(GtagConfigSchema)
      .exactOptional()
      .openapi({ description: 'All Google tag configs in a Container.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Continuation token for fetching the next page of results.' }),
  })
  .openapi({ required: [] })
  .openapi('ListGtagConfigResponse')

const ListTagsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Continuation token for fetching the next page of results.' }),
    tag: z
      .array(TagSchema)
      .exactOptional()
      .openapi({ description: 'All GTM Tags of a GTM Container.' }),
  })
  .openapi({ description: 'List Tags Response.', required: [] })
  .openapi('ListTagsResponse')

const ListTemplatesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Continuation token for fetching the next page of results.' }),
    template: z
      .array(CustomTemplateSchema)
      .exactOptional()
      .openapi({ description: 'All GTM Custom Templates of a GTM Container.' }),
  })
  .openapi({ required: [] })
  .openapi('ListTemplatesResponse')

const ListTriggersResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Continuation token for fetching the next page of results.' }),
    trigger: z
      .array(TriggerSchema)
      .exactOptional()
      .openapi({ description: 'All GTM Triggers of a GTM Container.' }),
  })
  .openapi({ description: 'List triggers response.', required: [] })
  .openapi('ListTriggersResponse')

const UserPermissionSchema = z
  .object({
    accountAccess: AccountAccessSchema.exactOptional().openapi({
      description:
        'GTM Account access permissions. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update',
    }),
    accountId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Account ID uniquely identifies the GTM Account.' }),
    containerAccess: z
      .array(ContainerAccessSchema)
      .exactOptional()
      .openapi({
        description:
          'GTM Container access permissions. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update',
      }),
    emailAddress: z
      .string()
      .exactOptional()
      .openapi({
        description: "User's email address. @mutable tagmanager.accounts.permissions.create",
      }),
    path: z
      .string()
      .exactOptional()
      .openapi({ description: "GTM UserPermission's API relative path." }),
  })
  .openapi({
    description: "Represents a user's permissions to an account and its container.",
    required: [],
  })
  .openapi('UserPermission')

const ListUserPermissionsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Continuation token for fetching the next page of results.' }),
    userPermission: z
      .array(UserPermissionSchema)
      .exactOptional()
      .openapi({ description: 'All GTM UserPermissions of a GTM Account.' }),
  })
  .openapi({ description: 'List user permissions response.', required: [] })
  .openapi('ListUserPermissionsResponse')

const ListVariablesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Continuation token for fetching the next page of results.' }),
    variable: z
      .array(VariableSchema)
      .exactOptional()
      .openapi({ description: 'All GTM Variables of a GTM Container.' }),
  })
  .openapi({ description: 'List Variables Response.', required: [] })
  .openapi('ListVariablesResponse')

const WorkspaceSchema = z
  .object({
    accountId: z.string().exactOptional().openapi({ description: 'GTM Account ID.' }),
    containerId: z.string().exactOptional().openapi({ description: 'GTM Container ID.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Workspace description. @mutable tagmanager.accounts.containers.workspaces.create @mutable tagmanager.accounts.containers.workspaces.update',
      }),
    fingerprint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fingerprint of the GTM Workspace as computed at storage time. This value is recomputed whenever the workspace is modified.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Workspace display name. @mutable tagmanager.accounts.containers.workspaces.create @mutable tagmanager.accounts.containers.workspaces.update',
      }),
    path: z.string().exactOptional().openapi({ description: "GTM Workspace's API relative path." }),
    tagManagerUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Auto generated link to the tag manager UI' }),
    workspaceId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Workspace ID uniquely identifies the GTM Workspace.' }),
  })
  .openapi({ description: 'Represents a Google Tag Manager Container Workspace.', required: [] })
  .openapi('Workspace')

const ListWorkspacesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Continuation token for fetching the next page of results.' }),
    workspace: z
      .array(WorkspaceSchema)
      .exactOptional()
      .openapi({ description: 'All Workspaces of a GTM Container.' }),
  })
  .openapi({ description: 'A list of workspaces in a container.', required: [] })
  .openapi('ListWorkspacesResponse')

const ListZonesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Continuation token for fetching the next page of results.' }),
    zone: z
      .array(ZoneSchema)
      .exactOptional()
      .openapi({ description: 'All GTM Zones of a GTM Container.' }),
  })
  .openapi({ required: [] })
  .openapi('ListZonesResponse')

const PublishContainerVersionResponseSchema = z
  .object({
    compilerError: z.boolean().exactOptional().openapi({ description: 'Compiler errors or not.' }),
    containerVersion: ContainerVersionSchema.exactOptional().openapi({
      description: 'The container version created.',
    }),
  })
  .openapi({ description: 'Publish container version response.', required: [] })
  .openapi('PublishContainerVersionResponse')

const QuickPreviewResponseSchema = z
  .object({
    compilerError: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Were there compiler errors or not.' }),
    containerVersion: ContainerVersionSchema.exactOptional().openapi({
      description: 'The quick previewed container version.',
    }),
    syncStatus: SyncStatusSchema.exactOptional().openapi({
      description:
        'Whether quick previewing failed when syncing the workspace to the latest container version.',
    }),
  })
  .openapi({ description: 'Response to quick previewing a workspace.', required: [] })
  .openapi('QuickPreviewResponse')

const RevertBuiltInVariableResponseSchema = z
  .object({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the built-in variable is enabled after reversion.' }),
  })
  .openapi({
    description: 'The result of reverting a built-in variable in a workspace.',
    required: [],
  })
  .openapi('RevertBuiltInVariableResponse')

const RevertClientResponseSchema = z
  .object({
    client: ClientSchema.exactOptional().openapi({
      description:
        'Client as it appears in the latest container version since the last workspace synchronization operation. If no client is present, that means the client was deleted in the latest container version.',
    }),
  })
  .openapi({ description: 'The result of reverting a client in a workspace.', required: [] })
  .openapi('RevertClientResponse')

const RevertFolderResponseSchema = z
  .object({
    folder: FolderSchema.exactOptional().openapi({
      description:
        'Folder as it appears in the latest container version since the last workspace synchronization operation. If no folder is present, that means the folder was deleted in the latest container version.',
    }),
  })
  .openapi({ description: 'The result of reverting folder changes in a workspace.', required: [] })
  .openapi('RevertFolderResponse')

const RevertTagResponseSchema = z
  .object({
    tag: TagSchema.exactOptional().openapi({
      description:
        'Tag as it appears in the latest container version since the last workspace synchronization operation. If no tag is present, that means the tag was deleted in the latest container version.',
    }),
  })
  .openapi({ description: 'The result of reverting a tag in a workspace.', required: [] })
  .openapi('RevertTagResponse')

const RevertTemplateResponseSchema = z
  .object({
    template: CustomTemplateSchema.exactOptional().openapi({
      description:
        'Template as it appears in the latest container version since the last workspace synchronization operation. If no template is present, that means the template was deleted in the latest container version.',
    }),
  })
  .openapi({ description: 'The result of reverting a template in a workspace.', required: [] })
  .openapi('RevertTemplateResponse')

const RevertTriggerResponseSchema = z
  .object({
    trigger: TriggerSchema.exactOptional().openapi({
      description:
        'Trigger as it appears in the latest container version since the last workspace synchronization operation. If no trigger is present, that means the trigger was deleted in the latest container version.',
    }),
  })
  .openapi({ description: 'The result of reverting a trigger in a workspace.', required: [] })
  .openapi('RevertTriggerResponse')

const RevertVariableResponseSchema = z
  .object({
    variable: VariableSchema.exactOptional().openapi({
      description:
        'Variable as it appears in the latest container version since the last workspace synchronization operation. If no variable is present, that means the variable was deleted in the latest container version.',
    }),
  })
  .openapi({ description: 'The result of reverting a variable in a workspace.', required: [] })
  .openapi('RevertVariableResponse')

const RevertZoneResponseSchema = z
  .object({
    zone: ZoneSchema.exactOptional().openapi({
      description:
        'Zone as it appears in the latest container version since the last workspace synchronization operation. If no zone is present, that means the zone was deleted in the latest container version.',
    }),
  })
  .openapi({ description: 'The result of reverting a zone in a workspace.', required: [] })
  .openapi('RevertZoneResponse')

const SyncWorkspaceResponseSchema = z
  .object({
    mergeConflict: z
      .array(MergeConflictSchema)
      .exactOptional()
      .openapi({
        description:
          'The merge conflict after sync. If this field is not empty, the sync is still treated as successful. But a version cannot be created until all conflicts are resolved.',
      }),
    syncStatus: SyncStatusSchema.exactOptional().openapi({
      description: 'Indicates whether synchronization caused a merge conflict or sync error.',
    }),
  })
  .openapi({
    description: 'A response after synchronizing the workspace to the latest container version.',
    required: [],
  })
  .openapi('SyncWorkspaceResponse')

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
      scopes: {
        'https://www.googleapis.com/auth/tagmanager.delete.containers':
          'Delete your Google Tag Manager containers',
        'https://www.googleapis.com/auth/tagmanager.edit.containers':
          'Manage your Google Tag Manager container and its subcomponents, excluding versioning and publishing',
        'https://www.googleapis.com/auth/tagmanager.edit.containerversions':
          'Manage your Google Tag Manager container versions',
        'https://www.googleapis.com/auth/tagmanager.manage.accounts':
          'View and manage your Google Tag Manager accounts',
        'https://www.googleapis.com/auth/tagmanager.manage.users':
          'Manage user permissions of your Google Tag Manager account and container',
        'https://www.googleapis.com/auth/tagmanager.publish':
          'Publish your Google Tag Manager container versions',
        'https://www.googleapis.com/auth/tagmanager.readonly':
          'View your Google Tag Manager container and its subcomponents',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/tagmanager.delete.containers':
          'Delete your Google Tag Manager containers',
        'https://www.googleapis.com/auth/tagmanager.edit.containers':
          'Manage your Google Tag Manager container and its subcomponents, excluding versioning and publishing',
        'https://www.googleapis.com/auth/tagmanager.edit.containerversions':
          'Manage your Google Tag Manager container versions',
        'https://www.googleapis.com/auth/tagmanager.manage.accounts':
          'View and manage your Google Tag Manager accounts',
        'https://www.googleapis.com/auth/tagmanager.manage.users':
          'Manage user permissions of your Google Tag Manager account and container',
        'https://www.googleapis.com/auth/tagmanager.publish':
          'Publish your Google Tag Manager container versions',
        'https://www.googleapis.com/auth/tagmanager.readonly':
          'View your Google Tag Manager container and its subcomponents',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getTagmanagerV2AccountsRoute = createRoute({
  method: 'get',
  path: '/tagmanager/v2/accounts',
  tags: ['accounts'],
  description: 'Lists all GTM Accounts that a user has access to.',
  operationId: 'tagmanager.accounts.list',
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
      includeGoogleTags: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Also retrieve accounts associated with Google Tag when true.',
            in: 'query',
            name: 'includeGoogleTags',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Continuation token for fetching the next page of results.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListAccountsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.manage.accounts'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.manage.accounts'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.readonly'],
    },
  ],
})

export const getTagmanagerV2AccountsContainersLookupRoute = createRoute({
  method: 'get',
  path: '/tagmanager/v2/accounts/containers:lookup',
  tags: ['accounts'],
  description: 'Looks up a Container by destination ID.',
  operationId: 'tagmanager.accounts.containers.lookup',
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
      destinationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Destination ID linked to a GTM Container, e.g. AW-123456789. Example: accounts/containers:lookup?destination_id={destination_id}.',
            in: 'query',
            name: 'destinationId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ContainerSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.readonly'],
    },
  ],
})

export const getTagmanagerV2ParentBuiltInVariablesRoute = createRoute({
  method: 'get',
  path: '/tagmanager/v2/{parent}/built_in_variables',
  tags: ['accounts'],
  description: 'Lists all the enabled Built-In Variables of a GTM Container.',
  operationId: 'tagmanager.accounts.containers.workspaces.built_in_variables.list',
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
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Continuation token for fetching the next page of results.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              "GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListEnabledBuiltInVariablesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.readonly'],
    },
  ],
})

export const postTagmanagerV2ParentBuiltInVariablesRoute = createRoute({
  method: 'post',
  path: '/tagmanager/v2/{parent}/built_in_variables',
  tags: ['accounts'],
  description: 'Creates one or more GTM Built-In Variables.',
  operationId: 'tagmanager.accounts.containers.workspaces.built_in_variables.create',
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
      type: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum([
              'builtInVariableTypeUnspecified',
              'pageUrl',
              'pageHostname',
              'pagePath',
              'referrer',
              'event',
              'clickElement',
              'clickClasses',
              'clickId',
              'clickTarget',
              'clickUrl',
              'clickText',
              'firstPartyServingUrl',
              'formElement',
              'formClasses',
              'formId',
              'formTarget',
              'formUrl',
              'formText',
              'errorMessage',
              'errorUrl',
              'errorLine',
              'newHistoryUrl',
              'oldHistoryUrl',
              'newHistoryFragment',
              'oldHistoryFragment',
              'newHistoryState',
              'oldHistoryState',
              'historySource',
              'containerVersion',
              'debugMode',
              'randomNumber',
              'containerId',
              'appId',
              'appName',
              'appVersionCode',
              'appVersionName',
              'language',
              'osVersion',
              'platform',
              'sdkVersion',
              'deviceName',
              'resolution',
              'advertiserId',
              'advertisingTrackingEnabled',
              'htmlId',
              'environmentName',
              'ampBrowserLanguage',
              'ampCanonicalPath',
              'ampCanonicalUrl',
              'ampCanonicalHost',
              'ampReferrer',
              'ampTitle',
              'ampClientId',
              'ampClientTimezone',
              'ampClientTimestamp',
              'ampClientScreenWidth',
              'ampClientScreenHeight',
              'ampClientScrollX',
              'ampClientScrollY',
              'ampClientMaxScrollX',
              'ampClientMaxScrollY',
              'ampTotalEngagedTime',
              'ampPageViewId',
              'ampPageLoadTime',
              'ampPageDownloadTime',
              'ampGtmEvent',
              'eventName',
              'firebaseEventParameterCampaign',
              'firebaseEventParameterCampaignAclid',
              'firebaseEventParameterCampaignAnid',
              'firebaseEventParameterCampaignClickTimestamp',
              'firebaseEventParameterCampaignContent',
              'firebaseEventParameterCampaignCp1',
              'firebaseEventParameterCampaignGclid',
              'firebaseEventParameterCampaignSource',
              'firebaseEventParameterCampaignTerm',
              'firebaseEventParameterCurrency',
              'firebaseEventParameterDynamicLinkAcceptTime',
              'firebaseEventParameterDynamicLinkLinkid',
              'firebaseEventParameterNotificationMessageDeviceTime',
              'firebaseEventParameterNotificationMessageId',
              'firebaseEventParameterNotificationMessageName',
              'firebaseEventParameterNotificationMessageTime',
              'firebaseEventParameterNotificationTopic',
              'firebaseEventParameterPreviousAppVersion',
              'firebaseEventParameterPreviousOsVersion',
              'firebaseEventParameterPrice',
              'firebaseEventParameterProductId',
              'firebaseEventParameterQuantity',
              'firebaseEventParameterValue',
              'videoProvider',
              'videoUrl',
              'videoTitle',
              'videoDuration',
              'videoPercent',
              'videoVisible',
              'videoStatus',
              'videoCurrentTime',
              'scrollDepthThreshold',
              'scrollDepthUnits',
              'scrollDepthDirection',
              'elementVisibilityRatio',
              'elementVisibilityTime',
              'elementVisibilityFirstTime',
              'elementVisibilityRecentTime',
              'requestPath',
              'requestMethod',
              'clientName',
              'queryString',
              'serverPageLocationUrl',
              'serverPageLocationPath',
              'serverPageLocationHostname',
              'visitorRegion',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The types of built-in variables to enable.',
            explode: true,
            in: 'query',
            name: 'type',
            schema: {
              items: {
                enum: [
                  'builtInVariableTypeUnspecified',
                  'pageUrl',
                  'pageHostname',
                  'pagePath',
                  'referrer',
                  'event',
                  'clickElement',
                  'clickClasses',
                  'clickId',
                  'clickTarget',
                  'clickUrl',
                  'clickText',
                  'firstPartyServingUrl',
                  'formElement',
                  'formClasses',
                  'formId',
                  'formTarget',
                  'formUrl',
                  'formText',
                  'errorMessage',
                  'errorUrl',
                  'errorLine',
                  'newHistoryUrl',
                  'oldHistoryUrl',
                  'newHistoryFragment',
                  'oldHistoryFragment',
                  'newHistoryState',
                  'oldHistoryState',
                  'historySource',
                  'containerVersion',
                  'debugMode',
                  'randomNumber',
                  'containerId',
                  'appId',
                  'appName',
                  'appVersionCode',
                  'appVersionName',
                  'language',
                  'osVersion',
                  'platform',
                  'sdkVersion',
                  'deviceName',
                  'resolution',
                  'advertiserId',
                  'advertisingTrackingEnabled',
                  'htmlId',
                  'environmentName',
                  'ampBrowserLanguage',
                  'ampCanonicalPath',
                  'ampCanonicalUrl',
                  'ampCanonicalHost',
                  'ampReferrer',
                  'ampTitle',
                  'ampClientId',
                  'ampClientTimezone',
                  'ampClientTimestamp',
                  'ampClientScreenWidth',
                  'ampClientScreenHeight',
                  'ampClientScrollX',
                  'ampClientScrollY',
                  'ampClientMaxScrollX',
                  'ampClientMaxScrollY',
                  'ampTotalEngagedTime',
                  'ampPageViewId',
                  'ampPageLoadTime',
                  'ampPageDownloadTime',
                  'ampGtmEvent',
                  'eventName',
                  'firebaseEventParameterCampaign',
                  'firebaseEventParameterCampaignAclid',
                  'firebaseEventParameterCampaignAnid',
                  'firebaseEventParameterCampaignClickTimestamp',
                  'firebaseEventParameterCampaignContent',
                  'firebaseEventParameterCampaignCp1',
                  'firebaseEventParameterCampaignGclid',
                  'firebaseEventParameterCampaignSource',
                  'firebaseEventParameterCampaignTerm',
                  'firebaseEventParameterCurrency',
                  'firebaseEventParameterDynamicLinkAcceptTime',
                  'firebaseEventParameterDynamicLinkLinkid',
                  'firebaseEventParameterNotificationMessageDeviceTime',
                  'firebaseEventParameterNotificationMessageId',
                  'firebaseEventParameterNotificationMessageName',
                  'firebaseEventParameterNotificationMessageTime',
                  'firebaseEventParameterNotificationTopic',
                  'firebaseEventParameterPreviousAppVersion',
                  'firebaseEventParameterPreviousOsVersion',
                  'firebaseEventParameterPrice',
                  'firebaseEventParameterProductId',
                  'firebaseEventParameterQuantity',
                  'firebaseEventParameterValue',
                  'videoProvider',
                  'videoUrl',
                  'videoTitle',
                  'videoDuration',
                  'videoPercent',
                  'videoVisible',
                  'videoStatus',
                  'videoCurrentTime',
                  'scrollDepthThreshold',
                  'scrollDepthUnits',
                  'scrollDepthDirection',
                  'elementVisibilityRatio',
                  'elementVisibilityTime',
                  'elementVisibilityFirstTime',
                  'elementVisibilityRecentTime',
                  'requestPath',
                  'requestMethod',
                  'clientName',
                  'queryString',
                  'serverPageLocationUrl',
                  'serverPageLocationPath',
                  'serverPageLocationHostname',
                  'visitorRegion',
                ],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              "GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CreateBuiltInVariableResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
    },
  ],
})

export const getTagmanagerV2ParentClientsRoute = createRoute({
  method: 'get',
  path: '/tagmanager/v2/{parent}/clients',
  tags: ['accounts'],
  description: 'Lists all GTM Clients of a GTM container workspace.',
  operationId: 'tagmanager.accounts.containers.workspaces.clients.list',
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
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Continuation token for fetching the next page of results.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              "GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListClientsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.readonly'],
    },
  ],
})

export const postTagmanagerV2ParentClientsRoute = createRoute({
  method: 'post',
  path: '/tagmanager/v2/{parent}/clients',
  tags: ['accounts'],
  description: 'Creates a GTM Client.',
  operationId: 'tagmanager.accounts.containers.workspaces.clients.create',
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
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              "GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ClientSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ClientSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
    },
  ],
})

export const getTagmanagerV2ParentContainersRoute = createRoute({
  method: 'get',
  path: '/tagmanager/v2/{parent}/containers',
  tags: ['accounts'],
  description: 'Lists all Containers that belongs to a GTM Account.',
  operationId: 'tagmanager.accounts.containers.list',
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
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Continuation token for fetching the next page of results.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: "GTM Account's API relative path. Example: accounts/{account_id}.",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListContainersResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.readonly'],
    },
  ],
})

export const postTagmanagerV2ParentContainersRoute = createRoute({
  method: 'post',
  path: '/tagmanager/v2/{parent}/containers',
  tags: ['accounts'],
  description: 'Creates a Container.',
  operationId: 'tagmanager.accounts.containers.create',
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
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: "GTM Account's API relative path. Example: accounts/{account_id}.",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ContainerSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ContainerSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
    },
  ],
})

export const getTagmanagerV2ParentDestinationsRoute = createRoute({
  method: 'get',
  path: '/tagmanager/v2/{parent}/destinations',
  tags: ['accounts'],
  description: 'Lists all Destinations linked to a GTM Container.',
  operationId: 'tagmanager.accounts.containers.destinations.list',
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
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              "GTM parent Container's API relative path. Example: accounts/{account_id}/containers/{container_id}",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListDestinationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.readonly'],
    },
  ],
})

export const postTagmanagerV2ParentDestinationsLinkRoute = createRoute({
  method: 'post',
  path: '/tagmanager/v2/{parent}/destinations:link',
  tags: ['accounts'],
  description:
    'Adds a Destination to this Container and removes it from the Container to which it is currently linked.',
  operationId: 'tagmanager.accounts.containers.destinations.link',
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
      allowUserPermissionFeatureUpdate: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Must be set to true to allow features.user_permissions to change from false to true. If this operation causes an update but this bit is false, the operation will fail.',
            in: 'query',
            name: 'allowUserPermissionFeatureUpdate',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      destinationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Destination ID to be linked to the current container.',
            in: 'query',
            name: 'destinationId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              "GTM parent Container's API relative path. Example: accounts/{account_id}/containers/{container_id}",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DestinationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
    },
  ],
})

export const getTagmanagerV2ParentEnvironmentsRoute = createRoute({
  method: 'get',
  path: '/tagmanager/v2/{parent}/environments',
  tags: ['accounts'],
  description: 'Lists all GTM Environments of a GTM Container.',
  operationId: 'tagmanager.accounts.containers.environments.list',
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
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Continuation token for fetching the next page of results.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              "GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListEnvironmentsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.readonly'],
    },
  ],
})

export const postTagmanagerV2ParentEnvironmentsRoute = createRoute({
  method: 'post',
  path: '/tagmanager/v2/{parent}/environments',
  tags: ['accounts'],
  description: 'Creates a GTM Environment.',
  operationId: 'tagmanager.accounts.containers.environments.create',
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
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              "GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EnvironmentSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EnvironmentSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
    },
  ],
})

export const getTagmanagerV2ParentFoldersRoute = createRoute({
  method: 'get',
  path: '/tagmanager/v2/{parent}/folders',
  tags: ['accounts'],
  description: 'Lists all GTM Folders of a Container.',
  operationId: 'tagmanager.accounts.containers.workspaces.folders.list',
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
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Continuation token for fetching the next page of results.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              "GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListFoldersResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.readonly'],
    },
  ],
})

export const postTagmanagerV2ParentFoldersRoute = createRoute({
  method: 'post',
  path: '/tagmanager/v2/{parent}/folders',
  tags: ['accounts'],
  description: 'Creates a GTM Folder.',
  operationId: 'tagmanager.accounts.containers.workspaces.folders.create',
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
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              "GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FolderSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FolderSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
    },
  ],
})

export const getTagmanagerV2ParentGtagConfigRoute = createRoute({
  method: 'get',
  path: '/tagmanager/v2/{parent}/gtag_config',
  tags: ['accounts'],
  description: 'Lists all Google tag configs in a Container.',
  operationId: 'tagmanager.accounts.containers.workspaces.gtag_config.list',
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
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Continuation token for fetching the next page of results.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              "Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListGtagConfigResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.readonly'],
    },
  ],
})

export const postTagmanagerV2ParentGtagConfigRoute = createRoute({
  method: 'post',
  path: '/tagmanager/v2/{parent}/gtag_config',
  tags: ['accounts'],
  description: 'Creates a Google tag config.',
  operationId: 'tagmanager.accounts.containers.workspaces.gtag_config.create',
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
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              "Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GtagConfigSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GtagConfigSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
    },
  ],
})

export const getTagmanagerV2ParentTagsRoute = createRoute({
  method: 'get',
  path: '/tagmanager/v2/{parent}/tags',
  tags: ['accounts'],
  description: 'Lists all GTM Tags of a Container.',
  operationId: 'tagmanager.accounts.containers.workspaces.tags.list',
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
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Continuation token for fetching the next page of results.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              "GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListTagsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.readonly'],
    },
  ],
})

export const postTagmanagerV2ParentTagsRoute = createRoute({
  method: 'post',
  path: '/tagmanager/v2/{parent}/tags',
  tags: ['accounts'],
  description: 'Creates a GTM Tag.',
  operationId: 'tagmanager.accounts.containers.workspaces.tags.create',
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
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              "GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TagSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TagSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
    },
  ],
})

export const getTagmanagerV2ParentTemplatesRoute = createRoute({
  method: 'get',
  path: '/tagmanager/v2/{parent}/templates',
  tags: ['accounts'],
  description: 'Lists all GTM Templates of a GTM container workspace.',
  operationId: 'tagmanager.accounts.containers.workspaces.templates.list',
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
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Continuation token for fetching the next page of results.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              "GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListTemplatesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.readonly'],
    },
  ],
})

export const postTagmanagerV2ParentTemplatesRoute = createRoute({
  method: 'post',
  path: '/tagmanager/v2/{parent}/templates',
  tags: ['accounts'],
  description: 'Creates a GTM Custom Template.',
  operationId: 'tagmanager.accounts.containers.workspaces.templates.create',
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
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              "GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CustomTemplateSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CustomTemplateSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
    },
  ],
})

export const getTagmanagerV2ParentTriggersRoute = createRoute({
  method: 'get',
  path: '/tagmanager/v2/{parent}/triggers',
  tags: ['accounts'],
  description: 'Lists all GTM Triggers of a Container.',
  operationId: 'tagmanager.accounts.containers.workspaces.triggers.list',
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
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Continuation token for fetching the next page of results.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              "GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListTriggersResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.readonly'],
    },
  ],
})

export const postTagmanagerV2ParentTriggersRoute = createRoute({
  method: 'post',
  path: '/tagmanager/v2/{parent}/triggers',
  tags: ['accounts'],
  description: 'Creates a GTM Trigger.',
  operationId: 'tagmanager.accounts.containers.workspaces.triggers.create',
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
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              "GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TriggerSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TriggerSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
    },
  ],
})

export const getTagmanagerV2ParentUserPermissionsRoute = createRoute({
  method: 'get',
  path: '/tagmanager/v2/{parent}/user_permissions',
  tags: ['accounts'],
  description:
    'List all users that have access to the account along with Account and Container user access granted to each of them.',
  operationId: 'tagmanager.accounts.user_permissions.list',
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
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Continuation token for fetching the next page of results.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: "GTM Account's API relative path. Example: accounts/{account_id}",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListUserPermissionsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.manage.users'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.manage.users'],
    },
  ],
})

export const postTagmanagerV2ParentUserPermissionsRoute = createRoute({
  method: 'post',
  path: '/tagmanager/v2/{parent}/user_permissions',
  tags: ['accounts'],
  description: "Creates a user's Account & Container access.",
  operationId: 'tagmanager.accounts.user_permissions.create',
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
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: "GTM Account's API relative path. Example: accounts/{account_id}",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UserPermissionSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: UserPermissionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.manage.users'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.manage.users'],
    },
  ],
})

export const getTagmanagerV2ParentVariablesRoute = createRoute({
  method: 'get',
  path: '/tagmanager/v2/{parent}/variables',
  tags: ['accounts'],
  description: 'Lists all GTM Variables of a Container.',
  operationId: 'tagmanager.accounts.containers.workspaces.variables.list',
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
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Continuation token for fetching the next page of results.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              "GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListVariablesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.readonly'],
    },
  ],
})

export const postTagmanagerV2ParentVariablesRoute = createRoute({
  method: 'post',
  path: '/tagmanager/v2/{parent}/variables',
  tags: ['accounts'],
  description: 'Creates a GTM Variable.',
  operationId: 'tagmanager.accounts.containers.workspaces.variables.create',
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
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              "GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: VariableSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: VariableSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
    },
  ],
})

export const getTagmanagerV2ParentVersionHeadersRoute = createRoute({
  method: 'get',
  path: '/tagmanager/v2/{parent}/version_headers',
  tags: ['accounts'],
  description: 'Lists all Container Versions of a GTM Container.',
  operationId: 'tagmanager.accounts.containers.version_headers.list',
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
      includeDeleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Also retrieve deleted (archived) versions when true.',
            in: 'query',
            name: 'includeDeleted',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Continuation token for fetching the next page of results.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              "GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListContainerVersionsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.edit.containerversions'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.edit.containerversions'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.readonly'],
    },
  ],
})

export const getTagmanagerV2ParentVersionHeadersLatestRoute = createRoute({
  method: 'get',
  path: '/tagmanager/v2/{parent}/version_headers:latest',
  tags: ['accounts'],
  description: 'Gets the latest container version header',
  operationId: 'tagmanager.accounts.containers.version_headers.latest',
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
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              "GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ContainerVersionHeaderSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.readonly'],
    },
  ],
})

export const getTagmanagerV2ParentVersionsLiveRoute = createRoute({
  method: 'get',
  path: '/tagmanager/v2/{parent}/versions:live',
  tags: ['accounts'],
  description: 'Gets the live (i.e. published) container version',
  operationId: 'tagmanager.accounts.containers.versions.live',
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
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              "GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ContainerVersionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.readonly'],
    },
  ],
})

export const getTagmanagerV2ParentWorkspacesRoute = createRoute({
  method: 'get',
  path: '/tagmanager/v2/{parent}/workspaces',
  tags: ['accounts'],
  description: 'Lists all Workspaces that belong to a GTM Container.',
  operationId: 'tagmanager.accounts.containers.workspaces.list',
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
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Continuation token for fetching the next page of results.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              "GTM parent Container's API relative path. Example: accounts/{account_id}/containers/{container_id}",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListWorkspacesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.readonly'],
    },
  ],
})

export const postTagmanagerV2ParentWorkspacesRoute = createRoute({
  method: 'post',
  path: '/tagmanager/v2/{parent}/workspaces',
  tags: ['accounts'],
  description: 'Creates a Workspace.',
  operationId: 'tagmanager.accounts.containers.workspaces.create',
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
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              "GTM parent Container's API relative path. Example: accounts/{account_id}/containers/{container_id}",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: WorkspaceSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: WorkspaceSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
    },
  ],
})

export const getTagmanagerV2ParentZonesRoute = createRoute({
  method: 'get',
  path: '/tagmanager/v2/{parent}/zones',
  tags: ['accounts'],
  description: 'Lists all GTM Zones of a GTM container workspace.',
  operationId: 'tagmanager.accounts.containers.workspaces.zones.list',
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
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Continuation token for fetching the next page of results.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              "GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListZonesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.readonly'],
    },
  ],
})

export const postTagmanagerV2ParentZonesRoute = createRoute({
  method: 'post',
  path: '/tagmanager/v2/{parent}/zones',
  tags: ['accounts'],
  description: 'Creates a GTM Zone.',
  operationId: 'tagmanager.accounts.containers.workspaces.zones.create',
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
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              "GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ZoneSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ZoneSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
    },
  ],
})

export const getTagmanagerV2PathRoute = createRoute({
  method: 'get',
  path: '/tagmanager/v2/{path}',
  tags: ['accounts'],
  description: "Gets a user's Account & Container access.",
  operationId: 'tagmanager.accounts.user_permissions.get',
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
      containerVersionId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The GTM ContainerVersion ID. Specify published to retrieve the currently published version.',
            in: 'query',
            name: 'containerVersionId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      path: z
        .string()
        .openapi({
          param: {
            description:
              "GTM UserPermission's API relative path. Example: accounts/{account_id}/user_permissions/{user_permission_id}",
            in: 'path',
            name: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: UserPermissionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.manage.users'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.manage.users'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.readonly'],
    },
  ],
})

export const putTagmanagerV2PathRoute = createRoute({
  method: 'put',
  path: '/tagmanager/v2/{path}',
  tags: ['accounts'],
  description: "Updates a user's Account & Container access.",
  operationId: 'tagmanager.accounts.user_permissions.update',
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
      fingerprint: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When provided, this fingerprint must match the fingerprint of the zone in storage.',
            in: 'query',
            name: 'fingerprint',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      path: z
        .string()
        .openapi({
          param: {
            description:
              "GTM UserPermission's API relative path. Example: accounts/{account_id}/user_permissions/{user_permission_id}",
            in: 'path',
            name: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UserPermissionSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: UserPermissionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.manage.users'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.manage.users'],
    },
  ],
})

export const deleteTagmanagerV2PathRoute = createRoute({
  method: 'delete',
  path: '/tagmanager/v2/{path}',
  tags: ['accounts'],
  description: 'Removes a user from the account, revoking access to it and all of its containers.',
  operationId: 'tagmanager.accounts.user_permissions.delete',
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
      type: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum([
              'builtInVariableTypeUnspecified',
              'pageUrl',
              'pageHostname',
              'pagePath',
              'referrer',
              'event',
              'clickElement',
              'clickClasses',
              'clickId',
              'clickTarget',
              'clickUrl',
              'clickText',
              'firstPartyServingUrl',
              'formElement',
              'formClasses',
              'formId',
              'formTarget',
              'formUrl',
              'formText',
              'errorMessage',
              'errorUrl',
              'errorLine',
              'newHistoryUrl',
              'oldHistoryUrl',
              'newHistoryFragment',
              'oldHistoryFragment',
              'newHistoryState',
              'oldHistoryState',
              'historySource',
              'containerVersion',
              'debugMode',
              'randomNumber',
              'containerId',
              'appId',
              'appName',
              'appVersionCode',
              'appVersionName',
              'language',
              'osVersion',
              'platform',
              'sdkVersion',
              'deviceName',
              'resolution',
              'advertiserId',
              'advertisingTrackingEnabled',
              'htmlId',
              'environmentName',
              'ampBrowserLanguage',
              'ampCanonicalPath',
              'ampCanonicalUrl',
              'ampCanonicalHost',
              'ampReferrer',
              'ampTitle',
              'ampClientId',
              'ampClientTimezone',
              'ampClientTimestamp',
              'ampClientScreenWidth',
              'ampClientScreenHeight',
              'ampClientScrollX',
              'ampClientScrollY',
              'ampClientMaxScrollX',
              'ampClientMaxScrollY',
              'ampTotalEngagedTime',
              'ampPageViewId',
              'ampPageLoadTime',
              'ampPageDownloadTime',
              'ampGtmEvent',
              'eventName',
              'firebaseEventParameterCampaign',
              'firebaseEventParameterCampaignAclid',
              'firebaseEventParameterCampaignAnid',
              'firebaseEventParameterCampaignClickTimestamp',
              'firebaseEventParameterCampaignContent',
              'firebaseEventParameterCampaignCp1',
              'firebaseEventParameterCampaignGclid',
              'firebaseEventParameterCampaignSource',
              'firebaseEventParameterCampaignTerm',
              'firebaseEventParameterCurrency',
              'firebaseEventParameterDynamicLinkAcceptTime',
              'firebaseEventParameterDynamicLinkLinkid',
              'firebaseEventParameterNotificationMessageDeviceTime',
              'firebaseEventParameterNotificationMessageId',
              'firebaseEventParameterNotificationMessageName',
              'firebaseEventParameterNotificationMessageTime',
              'firebaseEventParameterNotificationTopic',
              'firebaseEventParameterPreviousAppVersion',
              'firebaseEventParameterPreviousOsVersion',
              'firebaseEventParameterPrice',
              'firebaseEventParameterProductId',
              'firebaseEventParameterQuantity',
              'firebaseEventParameterValue',
              'videoProvider',
              'videoUrl',
              'videoTitle',
              'videoDuration',
              'videoPercent',
              'videoVisible',
              'videoStatus',
              'videoCurrentTime',
              'scrollDepthThreshold',
              'scrollDepthUnits',
              'scrollDepthDirection',
              'elementVisibilityRatio',
              'elementVisibilityTime',
              'elementVisibilityFirstTime',
              'elementVisibilityRecentTime',
              'requestPath',
              'requestMethod',
              'clientName',
              'queryString',
              'serverPageLocationUrl',
              'serverPageLocationPath',
              'serverPageLocationHostname',
              'visitorRegion',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The types of built-in variables to delete.',
            explode: true,
            in: 'query',
            name: 'type',
            schema: {
              items: {
                enum: [
                  'builtInVariableTypeUnspecified',
                  'pageUrl',
                  'pageHostname',
                  'pagePath',
                  'referrer',
                  'event',
                  'clickElement',
                  'clickClasses',
                  'clickId',
                  'clickTarget',
                  'clickUrl',
                  'clickText',
                  'firstPartyServingUrl',
                  'formElement',
                  'formClasses',
                  'formId',
                  'formTarget',
                  'formUrl',
                  'formText',
                  'errorMessage',
                  'errorUrl',
                  'errorLine',
                  'newHistoryUrl',
                  'oldHistoryUrl',
                  'newHistoryFragment',
                  'oldHistoryFragment',
                  'newHistoryState',
                  'oldHistoryState',
                  'historySource',
                  'containerVersion',
                  'debugMode',
                  'randomNumber',
                  'containerId',
                  'appId',
                  'appName',
                  'appVersionCode',
                  'appVersionName',
                  'language',
                  'osVersion',
                  'platform',
                  'sdkVersion',
                  'deviceName',
                  'resolution',
                  'advertiserId',
                  'advertisingTrackingEnabled',
                  'htmlId',
                  'environmentName',
                  'ampBrowserLanguage',
                  'ampCanonicalPath',
                  'ampCanonicalUrl',
                  'ampCanonicalHost',
                  'ampReferrer',
                  'ampTitle',
                  'ampClientId',
                  'ampClientTimezone',
                  'ampClientTimestamp',
                  'ampClientScreenWidth',
                  'ampClientScreenHeight',
                  'ampClientScrollX',
                  'ampClientScrollY',
                  'ampClientMaxScrollX',
                  'ampClientMaxScrollY',
                  'ampTotalEngagedTime',
                  'ampPageViewId',
                  'ampPageLoadTime',
                  'ampPageDownloadTime',
                  'ampGtmEvent',
                  'eventName',
                  'firebaseEventParameterCampaign',
                  'firebaseEventParameterCampaignAclid',
                  'firebaseEventParameterCampaignAnid',
                  'firebaseEventParameterCampaignClickTimestamp',
                  'firebaseEventParameterCampaignContent',
                  'firebaseEventParameterCampaignCp1',
                  'firebaseEventParameterCampaignGclid',
                  'firebaseEventParameterCampaignSource',
                  'firebaseEventParameterCampaignTerm',
                  'firebaseEventParameterCurrency',
                  'firebaseEventParameterDynamicLinkAcceptTime',
                  'firebaseEventParameterDynamicLinkLinkid',
                  'firebaseEventParameterNotificationMessageDeviceTime',
                  'firebaseEventParameterNotificationMessageId',
                  'firebaseEventParameterNotificationMessageName',
                  'firebaseEventParameterNotificationMessageTime',
                  'firebaseEventParameterNotificationTopic',
                  'firebaseEventParameterPreviousAppVersion',
                  'firebaseEventParameterPreviousOsVersion',
                  'firebaseEventParameterPrice',
                  'firebaseEventParameterProductId',
                  'firebaseEventParameterQuantity',
                  'firebaseEventParameterValue',
                  'videoProvider',
                  'videoUrl',
                  'videoTitle',
                  'videoDuration',
                  'videoPercent',
                  'videoVisible',
                  'videoStatus',
                  'videoCurrentTime',
                  'scrollDepthThreshold',
                  'scrollDepthUnits',
                  'scrollDepthDirection',
                  'elementVisibilityRatio',
                  'elementVisibilityTime',
                  'elementVisibilityFirstTime',
                  'elementVisibilityRecentTime',
                  'requestPath',
                  'requestMethod',
                  'clientName',
                  'queryString',
                  'serverPageLocationUrl',
                  'serverPageLocationPath',
                  'serverPageLocationHostname',
                  'visitorRegion',
                ],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
    }),
    params: z.object({
      path: z
        .string()
        .openapi({
          param: {
            description:
              "GTM UserPermission's API relative path. Example: accounts/{account_id}/user_permissions/{user_permission_id}",
            in: 'path',
            name: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.manage.users'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.manage.users'],
    },
  ],
})

export const postTagmanagerV2PathBuiltInVariablesRevertRoute = createRoute({
  method: 'post',
  path: '/tagmanager/v2/{path}/built_in_variables:revert',
  tags: ['accounts'],
  description: 'Reverts changes to a GTM Built-In Variables in a GTM Workspace.',
  operationId: 'tagmanager.accounts.containers.workspaces.built_in_variables.revert',
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
      type: z
        .enum([
          'builtInVariableTypeUnspecified',
          'pageUrl',
          'pageHostname',
          'pagePath',
          'referrer',
          'event',
          'clickElement',
          'clickClasses',
          'clickId',
          'clickTarget',
          'clickUrl',
          'clickText',
          'firstPartyServingUrl',
          'formElement',
          'formClasses',
          'formId',
          'formTarget',
          'formUrl',
          'formText',
          'errorMessage',
          'errorUrl',
          'errorLine',
          'newHistoryUrl',
          'oldHistoryUrl',
          'newHistoryFragment',
          'oldHistoryFragment',
          'newHistoryState',
          'oldHistoryState',
          'historySource',
          'containerVersion',
          'debugMode',
          'randomNumber',
          'containerId',
          'appId',
          'appName',
          'appVersionCode',
          'appVersionName',
          'language',
          'osVersion',
          'platform',
          'sdkVersion',
          'deviceName',
          'resolution',
          'advertiserId',
          'advertisingTrackingEnabled',
          'htmlId',
          'environmentName',
          'ampBrowserLanguage',
          'ampCanonicalPath',
          'ampCanonicalUrl',
          'ampCanonicalHost',
          'ampReferrer',
          'ampTitle',
          'ampClientId',
          'ampClientTimezone',
          'ampClientTimestamp',
          'ampClientScreenWidth',
          'ampClientScreenHeight',
          'ampClientScrollX',
          'ampClientScrollY',
          'ampClientMaxScrollX',
          'ampClientMaxScrollY',
          'ampTotalEngagedTime',
          'ampPageViewId',
          'ampPageLoadTime',
          'ampPageDownloadTime',
          'ampGtmEvent',
          'eventName',
          'firebaseEventParameterCampaign',
          'firebaseEventParameterCampaignAclid',
          'firebaseEventParameterCampaignAnid',
          'firebaseEventParameterCampaignClickTimestamp',
          'firebaseEventParameterCampaignContent',
          'firebaseEventParameterCampaignCp1',
          'firebaseEventParameterCampaignGclid',
          'firebaseEventParameterCampaignSource',
          'firebaseEventParameterCampaignTerm',
          'firebaseEventParameterCurrency',
          'firebaseEventParameterDynamicLinkAcceptTime',
          'firebaseEventParameterDynamicLinkLinkid',
          'firebaseEventParameterNotificationMessageDeviceTime',
          'firebaseEventParameterNotificationMessageId',
          'firebaseEventParameterNotificationMessageName',
          'firebaseEventParameterNotificationMessageTime',
          'firebaseEventParameterNotificationTopic',
          'firebaseEventParameterPreviousAppVersion',
          'firebaseEventParameterPreviousOsVersion',
          'firebaseEventParameterPrice',
          'firebaseEventParameterProductId',
          'firebaseEventParameterQuantity',
          'firebaseEventParameterValue',
          'videoProvider',
          'videoUrl',
          'videoTitle',
          'videoDuration',
          'videoPercent',
          'videoVisible',
          'videoStatus',
          'videoCurrentTime',
          'scrollDepthThreshold',
          'scrollDepthUnits',
          'scrollDepthDirection',
          'elementVisibilityRatio',
          'elementVisibilityTime',
          'elementVisibilityFirstTime',
          'elementVisibilityRecentTime',
          'requestPath',
          'requestMethod',
          'clientName',
          'queryString',
          'serverPageLocationUrl',
          'serverPageLocationPath',
          'serverPageLocationHostname',
          'visitorRegion',
        ])
        .exactOptional()
        .openapi({
          param: {
            description: 'The type of built-in variable to revert.',
            in: 'query',
            name: 'type',
            schema: {
              enum: [
                'builtInVariableTypeUnspecified',
                'pageUrl',
                'pageHostname',
                'pagePath',
                'referrer',
                'event',
                'clickElement',
                'clickClasses',
                'clickId',
                'clickTarget',
                'clickUrl',
                'clickText',
                'firstPartyServingUrl',
                'formElement',
                'formClasses',
                'formId',
                'formTarget',
                'formUrl',
                'formText',
                'errorMessage',
                'errorUrl',
                'errorLine',
                'newHistoryUrl',
                'oldHistoryUrl',
                'newHistoryFragment',
                'oldHistoryFragment',
                'newHistoryState',
                'oldHistoryState',
                'historySource',
                'containerVersion',
                'debugMode',
                'randomNumber',
                'containerId',
                'appId',
                'appName',
                'appVersionCode',
                'appVersionName',
                'language',
                'osVersion',
                'platform',
                'sdkVersion',
                'deviceName',
                'resolution',
                'advertiserId',
                'advertisingTrackingEnabled',
                'htmlId',
                'environmentName',
                'ampBrowserLanguage',
                'ampCanonicalPath',
                'ampCanonicalUrl',
                'ampCanonicalHost',
                'ampReferrer',
                'ampTitle',
                'ampClientId',
                'ampClientTimezone',
                'ampClientTimestamp',
                'ampClientScreenWidth',
                'ampClientScreenHeight',
                'ampClientScrollX',
                'ampClientScrollY',
                'ampClientMaxScrollX',
                'ampClientMaxScrollY',
                'ampTotalEngagedTime',
                'ampPageViewId',
                'ampPageLoadTime',
                'ampPageDownloadTime',
                'ampGtmEvent',
                'eventName',
                'firebaseEventParameterCampaign',
                'firebaseEventParameterCampaignAclid',
                'firebaseEventParameterCampaignAnid',
                'firebaseEventParameterCampaignClickTimestamp',
                'firebaseEventParameterCampaignContent',
                'firebaseEventParameterCampaignCp1',
                'firebaseEventParameterCampaignGclid',
                'firebaseEventParameterCampaignSource',
                'firebaseEventParameterCampaignTerm',
                'firebaseEventParameterCurrency',
                'firebaseEventParameterDynamicLinkAcceptTime',
                'firebaseEventParameterDynamicLinkLinkid',
                'firebaseEventParameterNotificationMessageDeviceTime',
                'firebaseEventParameterNotificationMessageId',
                'firebaseEventParameterNotificationMessageName',
                'firebaseEventParameterNotificationMessageTime',
                'firebaseEventParameterNotificationTopic',
                'firebaseEventParameterPreviousAppVersion',
                'firebaseEventParameterPreviousOsVersion',
                'firebaseEventParameterPrice',
                'firebaseEventParameterProductId',
                'firebaseEventParameterQuantity',
                'firebaseEventParameterValue',
                'videoProvider',
                'videoUrl',
                'videoTitle',
                'videoDuration',
                'videoPercent',
                'videoVisible',
                'videoStatus',
                'videoCurrentTime',
                'scrollDepthThreshold',
                'scrollDepthUnits',
                'scrollDepthDirection',
                'elementVisibilityRatio',
                'elementVisibilityTime',
                'elementVisibilityFirstTime',
                'elementVisibilityRecentTime',
                'requestPath',
                'requestMethod',
                'clientName',
                'queryString',
                'serverPageLocationUrl',
                'serverPageLocationPath',
                'serverPageLocationHostname',
                'visitorRegion',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
    params: z.object({
      path: z
        .string()
        .openapi({
          param: {
            description:
              "GTM BuiltInVariable's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/built_in_variables",
            in: 'path',
            name: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RevertBuiltInVariableResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
    },
  ],
})

export const getTagmanagerV2PathStatusRoute = createRoute({
  method: 'get',
  path: '/tagmanager/v2/{path}/status',
  tags: ['accounts'],
  description: 'Finds conflicting and modified entities in the workspace.',
  operationId: 'tagmanager.accounts.containers.workspaces.getStatus',
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
    }),
    params: z.object({
      path: z
        .string()
        .openapi({
          param: {
            description:
              "GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}",
            in: 'path',
            name: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GetWorkspaceStatusResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.readonly'],
    },
  ],
})

export const postTagmanagerV2PathCombineRoute = createRoute({
  method: 'post',
  path: '/tagmanager/v2/{path}:combine',
  tags: ['accounts'],
  description: 'Combines Containers.',
  operationId: 'tagmanager.accounts.containers.combine',
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
      allowUserPermissionFeatureUpdate: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Must be set to true to allow features.user_permissions to change from false to true. If this operation causes an update but this bit is false, the operation will fail.',
            in: 'query',
            name: 'allowUserPermissionFeatureUpdate',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      containerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'ID of container that will be merged into the current container.',
            in: 'query',
            name: 'containerId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      settingSource: z
        .enum(['settingSourceUnspecified', 'current', 'other'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Specify the source of config setting after combine',
            in: 'query',
            name: 'settingSource',
            schema: { enum: ['settingSourceUnspecified', 'current', 'other'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      path: z
        .string()
        .openapi({
          param: {
            description:
              "GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}",
            in: 'path',
            name: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ContainerSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
    },
  ],
})

export const postTagmanagerV2PathCreateVersionRoute = createRoute({
  method: 'post',
  path: '/tagmanager/v2/{path}:create_version',
  tags: ['accounts'],
  description:
    'Creates a Container Version from the entities present in the workspace, deletes the workspace, and sets the base container version to the newly created version.',
  operationId: 'tagmanager.accounts.containers.workspaces.create_version',
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
    }),
    params: z.object({
      path: z
        .string()
        .openapi({
          param: {
            description:
              "GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}",
            in: 'path',
            name: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: CreateContainerVersionRequestVersionOptionsSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CreateContainerVersionResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.edit.containerversions'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.edit.containerversions'],
    },
  ],
})

export const postTagmanagerV2PathEntitiesRoute = createRoute({
  method: 'post',
  path: '/tagmanager/v2/{path}:entities',
  tags: ['accounts'],
  description: 'List all entities in a GTM Folder.',
  operationId: 'tagmanager.accounts.containers.workspaces.folders.entities',
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
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Continuation token for fetching the next page of results.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      path: z
        .string()
        .openapi({
          param: {
            description:
              "GTM Folder's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/folders/{folder_id}",
            in: 'path',
            name: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FolderEntitiesSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.readonly'],
    },
  ],
})

export const postTagmanagerV2PathMoveEntitiesToFolderRoute = createRoute({
  method: 'post',
  path: '/tagmanager/v2/{path}:move_entities_to_folder',
  tags: ['accounts'],
  description: 'Moves entities to a GTM Folder.',
  operationId: 'tagmanager.accounts.containers.workspaces.folders.move_entities_to_folder',
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
      tagId: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The tags to be moved to the folder.',
            explode: true,
            in: 'query',
            name: 'tagId',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      triggerId: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The triggers to be moved to the folder.',
            explode: true,
            in: 'query',
            name: 'triggerId',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      variableId: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The variables to be moved to the folder.',
            explode: true,
            in: 'query',
            name: 'variableId',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
    }),
    params: z.object({
      path: z
        .string()
        .openapi({
          param: {
            description:
              "GTM Folder's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/folders/{folder_id}",
            in: 'path',
            name: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FolderSchema } } },
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
    },
  ],
})

export const postTagmanagerV2PathMoveTagIdRoute = createRoute({
  method: 'post',
  path: '/tagmanager/v2/{path}:move_tag_id',
  tags: ['accounts'],
  description: 'Move Tag ID out of a Container.',
  operationId: 'tagmanager.accounts.containers.move_tag_id',
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
      allowUserPermissionFeatureUpdate: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Must be set to true to allow features.user_permissions to change from false to true. If this operation causes an update but this bit is false, the operation will fail.',
            in: 'query',
            name: 'allowUserPermissionFeatureUpdate',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      copySettings: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether or not to copy tag settings from this tag to the new tag.',
            in: 'query',
            name: 'copySettings',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      copyTermsOfService: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Must be set to true to accept all terms of service agreements copied from the current tag to the newly created tag. If this bit is false, the operation will fail.',
            in: 'query',
            name: 'copyTermsOfService',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      copyUsers: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether or not to copy users from this tag to the new tag.',
            in: 'query',
            name: 'copyUsers',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      tagId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Tag ID to be removed from the current Container.',
            in: 'query',
            name: 'tagId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      tagName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The name for the newly created tag.',
            in: 'query',
            name: 'tagName',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      path: z
        .string()
        .openapi({
          param: {
            description:
              "GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}",
            in: 'path',
            name: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ContainerSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
    },
  ],
})

export const postTagmanagerV2PathPublishRoute = createRoute({
  method: 'post',
  path: '/tagmanager/v2/{path}:publish',
  tags: ['accounts'],
  description: 'Publishes a Container Version.',
  operationId: 'tagmanager.accounts.containers.versions.publish',
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
      fingerprint: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When provided, this fingerprint must match the fingerprint of the container version in storage.',
            in: 'query',
            name: 'fingerprint',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      path: z
        .string()
        .openapi({
          param: {
            description:
              "GTM ContainerVersion's API relative path. Example: accounts/{account_id}/containers/{container_id}/versions/{version_id}",
            in: 'path',
            name: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PublishContainerVersionResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.publish'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.publish'],
    },
  ],
})

export const postTagmanagerV2PathQuickPreviewRoute = createRoute({
  method: 'post',
  path: '/tagmanager/v2/{path}:quick_preview',
  tags: ['accounts'],
  description:
    'Quick previews a workspace by creating a fake container version from all entities in the provided workspace.',
  operationId: 'tagmanager.accounts.containers.workspaces.quick_preview',
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
    }),
    params: z.object({
      path: z
        .string()
        .openapi({
          param: {
            description:
              "GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}",
            in: 'path',
            name: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: QuickPreviewResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.edit.containerversions'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.edit.containerversions'],
    },
  ],
})

export const postTagmanagerV2PathReauthorizeRoute = createRoute({
  method: 'post',
  path: '/tagmanager/v2/{path}:reauthorize',
  tags: ['accounts'],
  description: 'Re-generates the authorization code for a GTM Environment.',
  operationId: 'tagmanager.accounts.containers.environments.reauthorize',
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
    }),
    params: z.object({
      path: z
        .string()
        .openapi({
          param: {
            description:
              "GTM Environment's API relative path. Example: accounts/{account_id}/containers/{container_id}/environments/{environment_id}",
            in: 'path',
            name: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EnvironmentSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EnvironmentSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.publish'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.publish'],
    },
  ],
})

export const postTagmanagerV2PathResolveConflictRoute = createRoute({
  method: 'post',
  path: '/tagmanager/v2/{path}:resolve_conflict',
  tags: ['accounts'],
  description:
    'Resolves a merge conflict for a workspace entity by updating it to the resolved entity passed in the request.',
  operationId: 'tagmanager.accounts.containers.workspaces.resolve_conflict',
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
      fingerprint: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When provided, this fingerprint must match the fingerprint of the entity_in_workspace in the merge conflict.',
            in: 'query',
            name: 'fingerprint',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      path: z
        .string()
        .openapi({
          param: {
            description:
              "GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}",
            in: 'path',
            name: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EntitySchema } } },
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
    },
  ],
})

export const postTagmanagerV2PathRevertRoute = createRoute({
  method: 'post',
  path: '/tagmanager/v2/{path}:revert',
  tags: ['accounts'],
  description: 'Reverts changes to a GTM Zone in a GTM Workspace.',
  operationId: 'tagmanager.accounts.containers.workspaces.zones.revert',
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
      fingerprint: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When provided, this fingerprint must match the fingerprint of the zone in storage.',
            in: 'query',
            name: 'fingerprint',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      path: z
        .string()
        .openapi({
          param: {
            description:
              "GTM Zone's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/zones/{zone_id}",
            in: 'path',
            name: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RevertZoneResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
    },
  ],
})

export const postTagmanagerV2PathSetLatestRoute = createRoute({
  method: 'post',
  path: '/tagmanager/v2/{path}:set_latest',
  tags: ['accounts'],
  description:
    'Sets the latest version used for synchronization of workspaces when detecting conflicts and errors.',
  operationId: 'tagmanager.accounts.containers.versions.set_latest',
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
    }),
    params: z.object({
      path: z
        .string()
        .openapi({
          param: {
            description:
              "GTM ContainerVersion's API relative path. Example: accounts/{account_id}/containers/{container_id}/versions/{version_id}",
            in: 'path',
            name: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ContainerVersionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
    },
  ],
})

export const getTagmanagerV2PathSnippetRoute = createRoute({
  method: 'get',
  path: '/tagmanager/v2/{path}:snippet',
  tags: ['accounts'],
  description: 'Gets the tagging snippet for a Container.',
  operationId: 'tagmanager.accounts.containers.snippet',
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
    }),
    params: z.object({
      path: z
        .string()
        .openapi({
          param: {
            description:
              "Container snippet's API relative path. Example: accounts/{account_id}/containers/{container_id}:snippet",
            in: 'path',
            name: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GetContainerSnippetResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.readonly'],
    },
  ],
})

export const postTagmanagerV2PathSyncRoute = createRoute({
  method: 'post',
  path: '/tagmanager/v2/{path}:sync',
  tags: ['accounts'],
  description:
    'Syncs a workspace to the latest container version by updating all unmodified workspace entities and displaying conflicts for modified entities.',
  operationId: 'tagmanager.accounts.containers.workspaces.sync',
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
    }),
    params: z.object({
      path: z
        .string()
        .openapi({
          param: {
            description:
              "GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}",
            in: 'path',
            name: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SyncWorkspaceResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
    },
  ],
})

export const postTagmanagerV2PathUndeleteRoute = createRoute({
  method: 'post',
  path: '/tagmanager/v2/{path}:undelete',
  tags: ['accounts'],
  description: 'Undeletes a Container Version.',
  operationId: 'tagmanager.accounts.containers.versions.undelete',
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
    }),
    params: z.object({
      path: z
        .string()
        .openapi({
          param: {
            description:
              "GTM ContainerVersion's API relative path. Example: accounts/{account_id}/containers/{container_id}/versions/{version_id}",
            in: 'path',
            name: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ContainerVersionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tagmanager.edit.containerversions'],
      Oauth2c: ['https://www.googleapis.com/auth/tagmanager.edit.containerversions'],
    },
  ],
})
