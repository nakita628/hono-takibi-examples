import { createRoute, z } from '@hono/zod-openapi'

const WannabeEnvSchema = z
  .object({ name: z.string(), value: z.string() })
  .openapi({ required: ['name', 'value'] })
  .openapi('WannabeEnv')

type EnvType = {
  addon_id: string
  addon_name: string
  env: z.infer<typeof WannabeEnvSchema>[]
  provider_id: string
}

const FeatureSchema = z
  .object({
    name: z.string().openapi({ description: 'The name of the properties' }),
    type: z.string().openapi({ description: 'The type of the feature' }),
    value: z.string().openapi({ description: 'The value of the feature' }),
  })
  .openapi({ required: ['name', 'type', 'value'] })
  .openapi('Feature')

const PlanSchema = z
  .object({
    features: z
      .array(FeatureSchema)
      .openapi({ description: 'The list of the feature in the addon' }),
    id: z.string().openapi({ description: '`plan_${uuid}`' }),
    name: z.string().openapi({ description: 'Name of the pan' }),
    price: z.int32(),
    slug: z.string(),
  })
  .openapi({ required: ['features', 'id', 'name', 'price', 'slug'] })
  .openapi('Plan')

const ProviderSchema = z
  .object({
    analyticsId: z
      .string()
      .openapi({ description: 'The id of the analytics page link to this addon' }),
    canUpgrade: z.boolean().default(false).openapi({ description: 'Can the addon be upgraded' }),
    features: z.array(FeatureSchema).exactOptional(),
    googlePlusName: z
      .string()
      .openapi({
        description: 'The name of the google + page link to this addon (could be empty)',
      }),
    id: z.string().openapi({ description: 'The id of the provider' }),
    logoUrl: z.string().openapi({ description: "The url of the addon's logo" }),
    longDesc: z.string().openapi({ description: 'A less concise description of the addon' }),
    name: z.string(),
    openInNewTab: z
      .boolean()
      .default(false)
      .openapi({ description: 'Does the addon panel need to be open in a new tab' }),
    plans: z.array(PlanSchema).exactOptional(),
    regions: z
      .array(z.string())
      .openapi({ description: 'The differents regions where the addon is available' }),
    shortDesc: z.string().openapi({ description: 'A short description of the addon' }),
    status: z.string().openapi({ description: 'The status of this addon (RELEASE, BETA, ...)' }),
    supportEmail: z
      .string()
      .openapi({ description: 'The mail to contact in case of issue with this addon' }),
    twitterName: z
      .string()
      .openapi({
        description: 'The name of the user to contact on twitter for this addon (could be empty)',
      }),
    website: z
      .string()
      .openapi({
        description:
          'The website of the provider. If the addon is developped by clever-cloud, the site is "http://www.clever-cloud.com/"',
      }),
  })
  .openapi({
    description: 'A provider',
    required: [
      'analyticsId',
      'canUpgrade',
      'googlePlusName',
      'id',
      'logoUrl',
      'longDesc',
      'name',
      'openInNewTab',
      'regions',
      'shortDesc',
      'status',
      'supportEmail',
      'twitterName',
      'website',
    ],
  })
  .openapi('Provider')

const AddonSchema = z
  .object({
    configKeys: z
      .array(z.string())
      .openapi({ description: 'Environments variables link to the addon.' }),
    creationDate: z.iso.date().openapi({ description: 'The creation timestamp of the addon' }),
    id: z.string().openapi({ description: '`addon_${uuid}`' }),
    name: z.string(),
    plan: PlanSchema,
    provider: ProviderSchema,
    realId: z.string().openapi({ description: '`${provider}_${uuid2}`' }),
    region: z.string(),
  })
  .openapi({
    description: 'An addon',
    required: ['configKeys', 'creationDate', 'id', 'name', 'plan', 'provider', 'realId', 'region'],
  })
  .openapi('Addon')

const AddonConfigProviderViewSchema = z.any().openapi('AddonConfigProviderView')

const AddonMigrationSchema = z
  .object({
    addon_id: z.string().exactOptional(),
    callback_url: z.string().exactOptional(),
    database: z.string().exactOptional(),
    database_user: z.string().exactOptional(),
    dump_restore_finished_date: z.string().exactOptional(),
    dump_restore_start_date: z.string().exactOptional(),
    end_date: z.string().exactOptional(),
    exit_message: z.string().exactOptional(),
    hostname: z.string().exactOptional(),
    id: z.string().exactOptional(),
    kind: z.string().exactOptional(),
    last_state_update_date: z.string().exactOptional(),
    new_cluster_id: z.string().exactOptional(),
    new_cluster_label: z.string().exactOptional(),
    new_instance_id: z.string().exactOptional(),
    new_plan: z.string().exactOptional(),
    new_recipient_hostname: z.string().exactOptional(),
    new_zone: z.string().exactOptional(),
    old_cluster_id: z.string().exactOptional(),
    old_cluster_label: z.string().exactOptional(),
    old_instance_id: z.string().exactOptional(),
    old_plan: z.string().exactOptional(),
    old_recipient_hostname: z.string().exactOptional(),
    old_zone: z.string().exactOptional(),
    port: z.number().exactOptional(),
    request_date: z.string().exactOptional(),
    state: z.string().exactOptional(),
  })
  .openapi({
    example:
      '{\n   "id": "<UUID>",\n   "addon_id": "addon_<uuid>",\n   "kind": "SHARED_TO_SHARED|SHARED_TO_DEDICATED|DEDICATED_TO_DEDICATED|DEDICATED_TO_SHARED",\n   "state": "RUNNING|FAILED|RECOVERING|RECOVERED|OK",\n   "hostname": "db.hostname",\n   "database": "dbname",\n   "port": 5432,\n   "database_user": "username",\n   "callback_url": "https://api.clever-cloud.com/v2/…",\n   "old_cluster_id": "acddc485-79c2-4c6b-a617-c92a06c0cb0b",\n   "old_cluster_label": "par2-01",\n   "old_instance_id": "acddc485-79c2-4c6b-a617-c92a06c0cb0b",\n   "old_plan": "s",\n   "old_zone": "par2",\n   "old_recipient_hostname": "postgresql-sdc-par2-clevercloud.services.clever-cloud.com", \n   "new_cluster_id": "acddc485-79c2-4c6b-a617-c92a06c0cb0b",\n   "new_cluster_label": "par2-02",\n   "new_instance_id": "acddc485-79c2-4c6b-a617-c92a06c0cb0b",\n   "new_plan": "m",\n   "new_zone": "par3",\n   "new_recipient_hostname": "postgresql-sdc-par3-clevercloud.services.clever-cloud.com", \n   "request_date": "2018-10-31T10:00:23Z",\n   "last_state_update_date":  "2018-10-31T10:00:23Z",\n   "dump_restore_start_date":  "2018-10-31T10:00:23Z",\n   "dump_restore_finished_date":  "2018-10-31T10:00:23Z",\n   "end_date":  "2018-10-31T10:00:23Z",\n   "exit_message": "Success" \n}',
    required: [],
  })
  .openapi('AddonMigration')

const AddonProviderSsoSchema = z
  .object({ macaroon: z.string(), url: z.string() })
  .openapi({ required: ['macaroon', 'url'] })
  .openapi('AddonProviderSso')

const FlavorSchema = z
  .object({
    available: z.boolean().default(false).exactOptional(),
    cpus: z.int32(),
    disk: z.int32().exactOptional(),
    mem: z.int32(),
    microservice: z.boolean().default(false).exactOptional(),
    name: z.string(),
    nice: z.float64().exactOptional(),
    price: z.float64(),
  })
  .openapi({ required: ['cpus', 'mem', 'name', 'price'] })
  .openapi('Flavor')

const AppInstanceSchema = z
  .object({
    appId: z.string().exactOptional(),
    appPort: z.int32().exactOptional(),
    commit: z.string().exactOptional(),
    deployNumber: z.int32().exactOptional(),
    flavor: FlavorSchema.exactOptional(),
    id: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    state: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AppInstance')

const DeploymentSchema = z
  .object({
    httpUrl: z.string().exactOptional(),
    repoState: z.string(),
    shutdownable: z.boolean().default(false),
    type: z.string(),
    url: z.string(),
  })
  .openapi({ required: ['repoState', 'shutdownable', 'type', 'url'] })
  .openapi('Deployment')

const MapSchema = z.object({}).openapi('Map')

const VariantSchema = z
  .object({
    deployType: z.string(),
    id: z.string(),
    logo: z.string(),
    name: z.string(),
    slug: z.string(),
  })
  .openapi({ required: ['deployType', 'id', 'logo', 'name', 'slug'] })
  .openapi('Variant')

const InstanceSchema = z
  .object({
    buildFlavor: FlavorSchema.exactOptional(),
    comingSoon: z.boolean().default(false).exactOptional(),
    defaultEnv: MapSchema,
    defaultFlavor: FlavorSchema.exactOptional(),
    deployments: z.array(z.string()).exactOptional(),
    description: z.string().exactOptional(),
    enabled: z.boolean().default(false).exactOptional(),
    flavors: z.array(FlavorSchema),
    instanceAndVersion: z.string(),
    maxAllowedInstances: z.int32(),
    maxFlavor: FlavorSchema,
    maxInstances: z.int32(),
    minFlavor: FlavorSchema,
    minInstances: z.int32(),
    name: z.string().exactOptional(),
    tags: z.array(z.string()).exactOptional(),
    type: z.string(),
    variant: VariantSchema,
    version: z.string(),
  })
  .openapi({
    required: [
      'defaultEnv',
      'flavors',
      'instanceAndVersion',
      'maxAllowedInstances',
      'maxFlavor',
      'maxInstances',
      'minFlavor',
      'minInstances',
      'type',
      'variant',
      'version',
    ],
  })
  .openapi('Instance')

const VhostSchema = z
  .object({ fqdn: z.string() })
  .openapi({ required: ['fqdn'] })
  .openapi('Vhost')

const ApplicationSchema = z
  .object({
    archived: z.boolean().default(false),
    branch: z.string(),
    buildFlavor: FlavorSchema,
    cancelOnPush: z.boolean().default(false),
    commitId: z.string(),
    creationDate: z.iso.date(),
    deployUrl: z.string(),
    deployment: DeploymentSchema,
    description: z.string(),
    favourite: z.boolean().default(false),
    homogeneous: z.boolean().default(false),
    id: z.string(),
    instance: InstanceSchema,
    last_deploy: z.int32(),
    name: z.string(),
    ownerId: z.string(),
    separateBuild: z.boolean().default(false),
    state: z.string(),
    stickySessions: z.boolean().default(false),
    vhosts: z.array(VhostSchema),
    webhookSecret: z.string(),
    webhookUrl: z.string(),
    zone: z.string().openapi({ description: '`par` ou `mtl`' }),
  })
  .openapi({
    required: [
      'archived',
      'branch',
      'buildFlavor',
      'cancelOnPush',
      'commitId',
      'creationDate',
      'deployUrl',
      'deployment',
      'description',
      'favourite',
      'homogeneous',
      'id',
      'instance',
      'last_deploy',
      'name',
      'ownerId',
      'separateBuild',
      'state',
      'stickySessions',
      'vhosts',
      'webhookSecret',
      'webhookUrl',
      'zone',
    ],
  })
  .openapi('Application')

const URLSchema = z
  .object({ url: z.string() })
  .openapi({ description: 'Must be a valid HTTP URL', required: ['url'] })
  .openapi('URL')

const AvatarSchema = z
  .object({
    source: z
      .object({
        source: z.string().openapi({ description: 'github or gravatar' }),
        value: URLSchema,
      })
      .openapi({ description: '', required: ['source', 'value'] }),
  })
  .openapi({
    description:
      'If you want to upload an image from your computer, send the image in the body of the request without anything else.',
    required: ['source'],
  })
  .openapi('Avatar')

const BodySchema = z
  .object({ body: z.string() })
  .openapi({ required: ['body'] })
  .openapi('Body')

const ChangePasswordSchema = z
  .object({ newPassword: z.string(), oldPassword: z.string() })
  .openapi({ required: ['newPassword', 'oldPassword'] })
  .openapi('ChangePassword')

const ConsoSchema = z
  .object({
    appId: z.string(),
    conso: z
      .object({
        conso: z.string().openapi({ description: 'One day consumption' }),
        date: z.string(),
      })
      .openapi({ required: ['conso', 'date'] }),
  })
  .openapi({ required: ['appId', 'conso'] })
  .openapi('Conso')

const ConsumerRightsSchema = z
  .object({
    access_bills: z.boolean().default(false).exactOptional(),
    access_consumption_statistics: z.boolean().default(false).exactOptional(),
    access_credit_count: z.boolean().default(false).exactOptional(),
    access_organisations: z.boolean().default(false).exactOptional(),
    access_organisations_bills: z.boolean().default(false).exactOptional(),
    access_organisations_consumption_statistics: z.boolean().default(false).exactOptional(),
    access_organisations_credit_count: z.boolean().default(false).exactOptional(),
    access_personal_information: z.boolean().default(false).exactOptional(),
    almighty: z.boolean().default(false).exactOptional(),
    manage_applications: z.boolean().default(false).exactOptional(),
    manage_organisations: z.boolean().default(false).exactOptional(),
    manage_organisations_applications: z.boolean().default(false).exactOptional(),
    manage_organisations_members: z.boolean().default(false).exactOptional(),
    manage_organisations_services: z.boolean().default(false).exactOptional(),
    manage_personal_information: z.boolean().default(false).exactOptional(),
    manage_services: z.boolean().default(false).exactOptional(),
    manage_ssh_keys: z.boolean().default(false).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConsumerRights')

const ConsumerSchema = z
  .object({
    baseUrl: z.string(),
    description: z.string(),
    key: z.string().exactOptional(),
    name: z.string(),
    picture: z.string().exactOptional(),
    rights: ConsumerRightsSchema,
    url: z.string(),
  })
  .openapi({ required: ['baseUrl', 'description', 'name', 'rights', 'url'] })
  .openapi('Consumer')

const CountrySchema = z
  .object({ code: z.string().openapi({ description: 'Code ISO 3166' }), name: z.string() })
  .openapi({ required: ['code', 'name'] })
  .openapi('Country')

const CreditsSchema = z
  .object({
    count: z.float32(),
    dropPrice: z
      .object({ currency: z.string(), value: z.float32() })
      .openapi({ required: ['currency', 'value'] }),
    ownerId: z.string(),
  })
  .openapi({ required: ['count', 'dropPrice', 'ownerId'] })
  .openapi('Credits')

const DeploymentViewSchema = z
  .object({
    action: z.string(),
    author: z
      .object({ id: z.string(), name: z.string() })
      .exactOptional()
      .openapi({ required: ['id', 'name'] }),
    cause: z.string(),
    commit: z.string(),
    date: z.iso.date(),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    instances: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    state: z.string(),
    uuid: z.string(),
  })
  .openapi({ required: ['action', 'cause', 'commit', 'date', 'id', 'instances', 'state', 'uuid'] })
  .openapi('DeploymentView')

const DeploymentSummarySchema = z
  .object({ '{app_id}': z.array(DeploymentViewSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('DeploymentSummary')

const EnvSchema: z.ZodType<EnvType> = z
  .lazy(() =>
    z
      .object({
        addon_id: z.string(),
        addon_name: z.string(),
        env: z.array(WannabeEnvSchema),
        provider_id: z.string(),
      })
      .openapi({ required: ['addon_id', 'addon_name', 'env', 'provider_id'] }),
  )
  .openapi('Env')

const EnvVarSchema = z.any().openapi('EnvVar')

const ErrorSchema = z
  .object({
    id: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Unique numeric id of this error type. Eg. id = 10 is "Serialization failed".',
      }),
    message: z.string().exactOptional().openapi({ description: 'Description of the error.' }),
    type: z.string().exactOptional().openapi({ description: 'Value should be "error"' }),
  })
  .openapi({
    example:
      '{"id":6200,"type":"error","message":"You do not belong to this organisation so you cannot access it"}',
    required: [],
  })
  .openapi('Error')

const Function1RequestContextFutureRouteResultSchema = z
  .any()
  .openapi('Function1RequestContextFutureRouteResult')

const KeySchema = z
  .object({
    fingerprint: z.string(),
    key: z.string(),
    name: z.string().openapi({ description: '' }),
  })
  .openapi({ required: ['fingerprint', 'key', 'name'] })
  .openapi('Key')

const LinkedAppEnvSchema = z
  .object({ app_id: z.string(), app_name: z.string(), env: z.array(WannabeEnvSchema) })
  .openapi({ required: ['app_id', 'app_name', 'env'] })
  .openapi('LinkedAppEnv')

const ListEnvSchema = z
  .object({ name: z.string().exactOptional(), value: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('ListEnv')

const Schema1Schema = z
  .object({
    job: z.string(),
    member: z
      .object({
        avatar: z.string().exactOptional(),
        email: z.string(),
        id: z.string(),
        name: z.string().exactOptional(),
      })
      .openapi({ required: ['email', 'id'] }),
    role: z.string(),
  })
  .openapi({ required: ['job', 'member', 'role'] })
  .openapi('Schema1')

const MemberSchema = Schema1Schema.openapi('Member')

const NetworkGroupSchema = z.any().openapi('NetworkGroup')

const OVDHttpRequestContextSchema = z.any().openapi('OVDHttpRequestContext')

const OrganisationSchema = z
  .object({
    VAT: z.string(),
    address: z.string(),
    avatar: z.string(),
    city: z.string(),
    company: z.string(),
    country: z.string(),
    description: z.string(),
    id: z.string(),
    name: z.string(),
    vatState: z.string(),
    zipcode: z.string(),
  })
  .openapi({
    required: [
      'VAT',
      'address',
      'avatar',
      'city',
      'company',
      'country',
      'description',
      'id',
      'name',
      'vatState',
      'zipcode',
    ],
  })
  .openapi('Organisation')

const PaymentDataSchema = z
  .object({
    deviceData: z.string().exactOptional(),
    token: z.string(),
    type: z.enum(['NEW_CARD', 'EXISTING_CARD']),
  })
  .openapi({ required: ['token', 'type'] })
  .openapi('PaymentData')

const PaymentProviderSchema = z
  .object({
    comingSoon: z.boolean().default(false),
    imgUrl: z.string(),
    name: z.string(),
    title: z.string(),
  })
  .openapi({ required: ['comingSoon', 'imgUrl', 'name', 'title'] })
  .openapi('PaymentProvider')

const PeerSchema = z.any().openapi('Peer')

const ProvisionRequestSchema = z.any().openapi('ProvisionRequest')

const RightsSchema = z
  .object({ description: z.string(), name: z.string() })
  .openapi({ required: ['description', 'name'] })
  .openapi('Rights')

const SecretSchema = z
  .object({ secret: z.string(), value: z.string() })
  .openapi({ required: ['secret', 'value'] })
  .openapi('Secret')

const SsoSchema = z
  .object({
    email: z.string(),
    id: z.string(),
    'nav-data': z.string(),
    timestamp: z.iso.date(),
    token: z.string(),
    url: z.string(),
  })
  .openapi({ required: ['email', 'id', 'nav-data', 'timestamp', 'token', 'url'] })
  .openapi('Sso')

const SummarySchema = z
  .object({
    organisations: z.array(
      z
        .object({
          addons: z
            .array(
              z
                .object({
                  id: z.string().exactOptional(),
                  logoUrl: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  providerId: z.string().exactOptional(),
                })
                .openapi({ required: [] }),
            )
            .exactOptional(),
          applications: z
            .array(
              z
                .object({
                  archived: z.boolean().default(false).exactOptional(),
                  commit: z.string().exactOptional(),
                  id: z.string().exactOptional(),
                  instanceType: z.string().exactOptional(),
                  instanceVariant: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  state: z.string().exactOptional(),
                  variantSlug: z.string().exactOptional(),
                })
                .openapi({ required: [] }),
            )
            .exactOptional(),
          avatar: z.string().exactOptional(),
          consumers: z
            .array(
              z
                .object({
                  key: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  picture: z.string().exactOptional(),
                })
                .openapi({ required: [] }),
            )
            .exactOptional(),
          id: z.string().exactOptional(),
          name: z.string().exactOptional(),
          providers: z.array(z.string()).exactOptional(),
          role: z.string().exactOptional(),
        })
        .openapi({ required: [] }),
    ),
    user: z
      .object({
        addons: z.array(
          z
            .object({
              id: z.string().exactOptional(),
              logoUrl: z.string().exactOptional(),
              name: z.string().exactOptional(),
              providerId: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        ),
        admin: z.boolean().default(false),
        applications: z.array(
          z
            .object({
              archived: z.boolean().default(false).exactOptional(),
              commit: z.string().exactOptional(),
              id: z.string().exactOptional(),
              instanceType: z.string().exactOptional(),
              instanceVariant: z.string().exactOptional(),
              name: z.string().exactOptional(),
              state: z.string().exactOptional(),
              variantSlug: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        ),
        avatar: z.string(),
        consumers: z
          .array(
            z
              .object({
                key: z.string().exactOptional(),
                name: z.string().exactOptional(),
                picture: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        id: z.string(),
        lang: z.string(),
        name: z.string(),
      })
      .openapi({ required: ['addons', 'admin', 'applications', 'avatar', 'id', 'lang', 'name'] }),
  })
  .openapi({ required: ['organisations', 'user'] })
  .openapi('Summary')

const SupernovaInstanceViewSchema = z
  .object({
    appId: z.string().exactOptional().openapi({ description: 'Identifier of running app/add-on' }),
    appPort: z.number().openapi({ description: "Port of the HV that's redirected to 8080 on VM" }),
    commitId: z.string().exactOptional(),
    createdAt: z.number().exactOptional().openapi({ description: 'Integer unix timestamp' }),
    deployId: z.string().exactOptional(),
    deployNumber: z.number().exactOptional(),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Generated PokéName. This name is generated from the uuid.' }),
    flavor: z
      .object({
        cpus: z.number().exactOptional(),
        mem: z.number().exactOptional(),
        name: z
          .string()
          .exactOptional()
          .openapi({ description: 'Name of flavor. For indication only.' }),
        price: z.number().exactOptional(),
      })
      .openapi({ description: 'The instance "flavor": memory, cpu, disk size…', required: [] }),
    hv: z.string().openapi({ description: 'String name of hv.' }),
    image: z
      .string()
      .openapi({ description: 'Base system image. E.g. java-20181030, node-20180912…' }),
    instanceNumber: z.number().exactOptional(),
    internalIP: z.string().exactOptional(),
    ip: z.string().openapi({ description: 'Public IP of the HV' }),
    ownerId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identifier of the owner of the app/add-on running' }),
    source: z
      .string()
      .openapi({ description: 'Who/what started this instance? E.g. "app", "cli"' }),
    sshPort: z
      .number()
      .exactOptional()
      .openapi({ description: "Port of the HV that's redirected to 22 on VM" }),
    state: z.string().exactOptional(),
    uuid: z.string(),
    zabbixPort: z
      .number()
      .openapi({ description: "Port of the HV that's redirected to 10050 on VM" }),
    zone: z.string().exactOptional(),
  })
  .openapi({
    example:
      '{\n  "uuid": "19d21edb-a343-49e7-8aa6-9d87c7e272b8",\n  "displayName": "Sizzling spewpa",\n  "appId": "app_2b5ad0bb-4bd7-4180-80b9-0459e98364f3",\n  "ownerId": "orga_0d221ceb-1b50-4994-a8d9-babb3cceef02",\n  "flavor": {\n    "name": "nano",\n    "mem": 512,\n    "cpus": 1,\n    "price": 0.1431844215\n  },\n  "ip": "65.10.142.94",\n  "appPort": 18605,\n  "zabbixPort": 28605,\n  "sshPort": 48605,\n  "hv": "hv-par2-049",\n  "image": "java-20181029",\n  "state": "UP",\n  "commitId": "43a4ba1726e26f039654dcd3916f61c612802947",\n  "deployNumber": 107,\n  "deployId": "deployment_cad0cf75-38e2-4dc8-b1be-ea869862bb69",\n  "source": "apps",\n  "zone": "par",\n  "internalIP": "10.6.123.92",\n  "createdAt": 1540921810532,\n  "instanceNumber": 0\n}',
    required: ['appPort', 'flavor', 'hv', 'image', 'ip', 'source', 'uuid', 'zabbixPort'],
  })
  .openapi('SupernovaInstanceView')

const TokenSchema = z
  .object({
    consumer: ConsumerSchema,
    creationDate: z.int32(),
    lastUtilisation: z.string(),
    rights: RightsSchema,
    token: z.string(),
  })
  .openapi({ required: ['consumer', 'creationDate', 'lastUtilisation', 'rights', 'token'] })
  .openapi('Token')

const TransactionIdSchema = z
  .object({ transactionId: z.string().openapi({ description: 'The transaction Id' }) })
  .openapi({ description: 'A simple transaction id', required: ['transactionId'] })
  .openapi('TransactionId')

const UserSchema = z
  .object({
    address: z.string().openapi({ description: 'The address of the user' }),
    admin: z.boolean().default(false).openapi({ description: 'Is the user an administrator ?' }),
    avatar: z.string().openapi({ description: "The location of the user's avatar" }),
    canPay: z.boolean().default(false).openapi({ description: 'Does the user can pay ?' }),
    city: z.string().openapi({ description: 'The city of the user' }),
    country: z.string().openapi({ description: 'The country of the user' }),
    creationDate: z
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
        description: 'The creation timestamp of the user',
      }),
    email: z.string().openapi({ description: 'The email of the user' }),
    emailValidated: z
      .boolean()
      .default(false)
      .openapi({ description: 'Does the user email is validate' }),
    hasPassword: z.boolean().default(false).exactOptional(),
    id: z.string().openapi({ description: 'The id of the user : `user_${uuid}`' }),
    lang: z.string().openapi({ description: 'The lang of the user' }),
    name: z.string().openapi({ description: 'The name of the user' }),
    oauthApps: z.array(z.string()).openapi({ description: 'The list of token oauth' }),
    phone: z.string().openapi({ description: 'The phone of the user' }),
    preferredMFA: z.string().exactOptional(),
    zipcode: z.string().openapi({ description: 'The zipcode of the user' }),
  })
  .openapi({
    description: 'A user representation',
    required: [
      'address',
      'admin',
      'avatar',
      'canPay',
      'city',
      'country',
      'creationDate',
      'email',
      'emailValidated',
      'id',
      'lang',
      'name',
      'oauthApps',
      'phone',
      'zipcode',
    ],
  })
  .openapi('User')

const WannabeAddonSchema = z
  .object({
    name: z.string(),
    payment: PaymentDataSchema,
    plan: z.string(),
    providerId: z.string().openapi({ description: '' }),
    region: z.string(),
  })
  .openapi({ required: ['name', 'payment', 'plan', 'providerId', 'region'] })
  .openapi('WannabeAddon')

const WannabeAddonBillingSchema = z
  .object({ cost: z.float64() })
  .openapi({ required: ['cost'] })
  .openapi('WannabeAddonBilling')

const WannabeAddonProviderAPIUrlSchema = z
  .object({ base_url: z.string(), sso_url: z.string() })
  .openapi({ required: ['base_url', 'sso_url'] })
  .openapi('WannabeAddonProviderAPIUrl')

const WannabeAddonProviderAPISchema = z
  .object({
    config_vars: z.array(z.string()),
    password: z.string(),
    production: WannabeAddonProviderAPIUrlSchema.exactOptional(),
    regions: z.array(z.string()).exactOptional(),
    sso_salt: z.string(),
    test: WannabeAddonProviderAPIUrlSchema.exactOptional(),
  })
  .openapi({ required: ['config_vars', 'password', 'sso_salt'] })
  .openapi('WannabeAddonProviderAPI')

const WannabeAddonProviderSchema = z
  .object({ api: WannabeAddonProviderAPISchema, id: z.string(), name: z.string() })
  .openapi({ required: ['api', 'id', 'name'] })
  .openapi('WannabeAddonProvider')

const WannabeOauthAppSchema = z
  .object({ name: z.string().exactOptional(), owner: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('WannabeOauthApp')

const WannabeApplicationSchema = z
  .object({
    archived: z.boolean().default(false).exactOptional(),
    cancelOnPush: z.boolean().default(false).exactOptional(),
    deploy: z.string(),
    description: z.string().exactOptional(),
    enabled: z.boolean().default(false),
    favourite: z.boolean().default(false).exactOptional(),
    homogeneous: z.boolean().default(false).exactOptional(),
    instanceType: z.string().exactOptional(),
    instanceVariant: z.string().exactOptional(),
    instanceVersion: z.string().exactOptional(),
    maxFlavor: z.string().exactOptional(),
    maxInstances: z.int32(),
    minFlavor: z.string().exactOptional(),
    minInstances: z.int32(),
    name: z.string(),
    oauthApp: WannabeOauthAppSchema.exactOptional(),
    oauthAppId: z.string().exactOptional(),
    oauthService: z.string().exactOptional(),
    separateBuild: z.boolean().default(false).exactOptional(),
    shutdownable: z.boolean().default(false).exactOptional(),
    stickySessions: z.boolean().default(false).exactOptional(),
    tags: z.array(z.string()).exactOptional(),
    zone: z.string(),
  })
  .openapi({ required: ['deploy', 'enabled', 'maxInstances', 'minInstances', 'name', 'zone'] })
  .openapi('WannabeApplication')

const WannabeConsumerSchema = z
  .object({
    baseUrl: URLSchema,
    description: z.string().exactOptional(),
    name: z.string(),
    picture: z.string().exactOptional().openapi({ description: '' }),
    rights: z
      .object({ activated: z.boolean().default(false), right: z.string() })
      .openapi({ required: ['activated', 'right'] }),
    url: URLSchema,
  })
  .openapi({ required: ['baseUrl', 'name', 'rights', 'url'] })
  .openapi('WannabeConsumer')

const WannabeEnvVarSchema = z.any().openapi('WannabeEnvVar')

const WannabeExternalPeerSchema = z.any().openapi('WannabeExternalPeer')

const WannabeFeatureSchema = z
  .object({
    name: z.string(),
    type: z.string().openapi({ description: 'BOOLEAN, INTERVAL, FILESIZE, NUMBER, PERCENTAGE' }),
  })
  .openapi({ required: ['name', 'type'] })
  .openapi('WannabeFeature')

const Schema2Schema = z
  .object({ email: z.string(), job: z.string().exactOptional(), role: z.string() })
  .openapi({ required: ['email', 'role'] })
  .openapi('Schema2')

const WannabeMemberSchema = Schema2Schema.openapi('WannabeMember')

const WannabeNetworkGroupSchema = z.any().openapi('WannabeNetworkGroup')

const WannabeOrganisationSchema = z
  .object({
    VAT: z.string().exactOptional(),
    address: z
      .string()
      .exactOptional()
      .openapi({ description: 'The address of the organisation.' }),
    city: z.string().exactOptional().openapi({ description: 'The city of the organisation.' }),
    company: z
      .string()
      .exactOptional()
      .openapi({ description: "The company's name of the organisation." }),
    country: z
      .string()
      .exactOptional()
      .openapi({ description: 'The country of the organisation.' }),
    description: z.string().openapi({ description: 'The description of the organisation.' }),
    name: z.string().openapi({ description: 'The name of the organisation.' }),
    zipcode: z
      .string()
      .exactOptional()
      .openapi({ description: "The zipcode of the city's organisation." }),
  })
  .openapi({ required: ['description', 'name'] })
  .openapi('WannabeOrganisation')

const WannabePlanFeatureSchema = z
  .object({ name: z.string(), type: z.string(), value: z.string() })
  .openapi({ required: ['name', 'type', 'value'] })
  .openapi('WannabePlanFeature')

const WannabePlanSchema = z
  .object({
    features: z.array(WannabePlanFeatureSchema),
    name: z.string(),
    price: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    slug: z.string(),
  })
  .openapi({ required: ['features', 'name', 'price', 'slug'] })
  .openapi('WannabePlan')

const WannabeUserSchema = z
  .object({
    address: z.string().exactOptional(),
    city: z.string().exactOptional(),
    country: z.string().exactOptional(),
    email: z.string().openapi({ description: '' }),
    lang: z.string().exactOptional(),
    name: z.string().exactOptional(),
    password: z.string(),
    phone: z.string().exactOptional(),
    terms: z.boolean().default(false),
    zipcode: z.string().exactOptional(),
  })
  .openapi({ description: '', required: ['email', 'password', 'terms'] })
  .openapi('WannabeUser')

const WireGuardConfigurationSchema = z.any().openapi('WireGuardConfiguration')

const ZoneSchema = z
  .object({
    correspondingRegion: z.string(),
    internal: z.boolean().default(false),
    name: z.string(),
  })
  .openapi({ required: ['correspondingRegion', 'internal', 'name'] })
  .openapi('Zone')

const AcceptedResponse = { description: '' }

const BadRequestResponse = { description: '' }

const MemberNotFoundResponse = { description: '' }

const NetworkGroupNotFoundResponse = { description: '' }

const PeerNotFoundResponse = { description: '' }

const UnauthorizedResponse = { description: '' }

const NetworkGroupLabelAlreadyTakenExample = {}

const BodyRequestBody = { content: { 'application/json': { schema: BodySchema } }, required: true }

const VhostRequestBody = {
  content: { 'application/json': { schema: VhostSchema } },
  required: true,
}

const WannabeAddonRequestBody = {
  content: { 'application/json': { schema: WannabeAddonSchema } },
  required: true,
}

const WannabeAddonProviderRequestBody = {
  content: { 'application/json': { schema: WannabeAddonProviderSchema } },
  required: true,
}

const WannabeApplicationRequestBody = {
  content: { 'application/json': { schema: WannabeApplicationSchema } },
  required: true,
}

const WannabeConsumerRequestBody = {
  content: { 'application/json': { schema: WannabeConsumerSchema } },
  required: true,
}

const WannabeEnvRequestBody = {
  content: { 'application/json': { schema: WannabeEnvSchema } },
  required: true,
}

const WannabeMemberRequestBody = {
  content: { 'application/json': { schema: Schema2Schema } },
  required: true,
}

const WannabeOrganisationRequestBody = {
  content: { 'application/json': { schema: WannabeOrganisationSchema } },
  required: true,
}

const WannabePlanRequestBody = {
  content: { 'application/json': { schema: WannabePlanSchema } },
  required: true,
}

const WannabeUserRequestBody = {
  content: { 'application/json': { schema: WannabeUserSchema } },
  required: true,
}

const DeleteMatomoRequestBody = { content: { '*/*': { schema: z.string() } } }

const ListNetworkGroupsRequestBody = { content: { '*/*': { schema: OVDHttpRequestContextSchema } } }

export const getOpenapiRoute = createRoute({
  method: 'get',
  path: '//openapi',
  tags: ['all'],
  responses: { 200: { description: 'The swagger documenting this API in yaml format.' } },
})

export const getApplicationAppIdEnvironmentRoute = createRoute({
  method: 'get',
  path: '/application/{appId}/environment',
  tags: ['all'],
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'token', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'Status 200' } },
})

export const putApplicationAppIdEnvironmentRoute = createRoute({
  method: 'put',
  path: '/application/{appId}/environment',
  tags: ['all'],
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'token', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'Status 200' } },
})

export const postAuthorizeRoute = createRoute({
  method: 'post',
  path: '/authorize',
  tags: ['all'],
  description: 'Handled by our API.',
  operationId: 'postAuthorize',
  responses: { 200: { description: 'authorize' } },
})

export const getEventsEventSocketRoute = createRoute({
  method: 'get',
  path: '/events/event-socket',
  tags: ['all', 'events'],
  description:
    'Retrieve events as they come through a websocket connection. To have authorization, you have to send a `{ "message_type": "oauth", "authorization": "oauth authorization string" }` message',
  responses: { default: { description: '<No description>' } },
})

export const getGithubRoute = createRoute({
  method: 'get',
  path: '/github',
  tags: ['all', 'github'],
  operationId: 'getGithub',
  responses: {
    200: {
      description: 'startGithub',
      content: { 'application/json': { schema: TransactionIdSchema } },
    },
  },
})

export const getGithubApplicationsRoute = createRoute({
  method: 'get',
  path: '/github/applications',
  tags: ['all', 'applications', 'github'],
  operationId: 'getGithubApplications',
  responses: {
    200: {
      description: 'getGithubApplications',
      content: { 'application/json': { schema: z.array(ApplicationSchema) } },
    },
  },
})

export const getGithubCallbackRoute = createRoute({
  method: 'get',
  path: '/github/callback',
  tags: ['all', 'github'],
  operationId: 'getGithubCallback',
  request: {
    query: z.object({
      code: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'code', required: false, schema: { type: 'string' } },
        }),
      state: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'state', required: false, schema: { type: 'string' } },
        }),
      error: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'error', required: false, schema: { type: 'string' } },
        }),
      error_description: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'error_description',
            required: false,
            schema: { type: 'string' },
          },
        }),
      error_uri: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'error_uri', required: false, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      Cookie: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'header', name: 'Cookie', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'githubCallback' } },
})

export const getGithubEmailsRoute = createRoute({
  method: 'get',
  path: '/github/emails',
  tags: ['all', 'github'],
  operationId: 'getGithubEmails',
  responses: {
    200: { description: 'getGithubEmails', content: { '*/*': { schema: z.array(z.string()) } } },
  },
})

export const getGithubKeysRoute = createRoute({
  method: 'get',
  path: '/github/keys',
  tags: ['all', 'github'],
  operationId: 'getGithubKeys',
  responses: {
    200: {
      description: 'getGithubKeys',
      content: { 'application/json': { schema: z.array(KeySchema) } },
    },
  },
})

export const getGithubLinkRoute = createRoute({
  method: 'get',
  path: '/github/link',
  tags: ['all', 'github'],
  operationId: 'getGithubLink',
  request: {
    query: z.object({
      transactionId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'From GET /github',
            in: 'query',
            name: 'transactionId',
            required: false,
            schema: { type: 'string' },
          },
        }),
      redirectUrl: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'redirectUrl', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'linkGithub' } },
})

export const deleteGithubLinkRoute = createRoute({
  method: 'delete',
  path: '/github/link',
  tags: ['all', 'github'],
  operationId: 'deleteGithubLink',
  responses: { 200: { description: 'unlinkGithub' } },
})

export const getGithubLoginRoute = createRoute({
  method: 'get',
  path: '/github/login',
  tags: ['all', 'github'],
  operationId: 'getGithubLogin',
  request: {
    query: z.object({
      redirectUrl: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'redirectUrl', required: false, schema: { type: 'string' } },
        }),
      fromAuthorize: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'fromAuthorize',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'githubLogin' } },
})

export const postGithubRedeployRoute = createRoute({
  method: 'post',
  path: '/github/redeploy',
  tags: ['all', 'github'],
  operationId: 'postGithubRedeploy',
  request: {
    headers: z.object({
      'User-Agent': z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'header', name: 'User-Agent', required: false, schema: { type: 'string' } },
        }),
      'X-Github-Event': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-Github-Event',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'X-Hub-Signature': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-Hub-Signature',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'redeployApp' } },
})

export const getGithubSignupRoute = createRoute({
  method: 'get',
  path: '/github/signup',
  tags: ['all', 'github'],
  operationId: 'getGithubSignup',
  request: {
    query: z.object({
      redirectUrl: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'redirectUrl', required: false, schema: { type: 'string' } },
        }),
      fromAuthorize: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'fromAuthorize',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'githubSignup' } },
})

export const postGithubSignupRoute = createRoute({
  method: 'post',
  path: '/github/signup',
  tags: ['all', 'github'],
  operationId: 'postGithubSignup',
  request: {
    query: z.object({
      transactionId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'transactionId',
            required: false,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'name', required: false, schema: { type: 'string' } },
        }),
      otherId: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'otherId', required: false, schema: { type: 'string' } },
        }),
      otherEmail: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'otherEmail', required: false, schema: { type: 'string' } },
        }),
      password: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'password', required: false, schema: { type: 'string' } },
        }),
      autoLink: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'autoLink', required: false, schema: { type: 'string' } },
        }),
      terms: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'terms', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'finsihGithubSignup' } },
})

export const getGithubUsernameRoute = createRoute({
  method: 'get',
  path: '/github/username',
  tags: ['all', 'github'],
  operationId: 'getGithubUsername',
  responses: {
    200: { description: 'getGithubUsername', content: { '*/*': { schema: z.string() } } },
  },
})

export const getLogsSocketAppIdRoute = createRoute({
  method: 'get',
  path: '/logs-socket/{appId}',
  tags: ['all'],
  description:
    'WebSocket to get logs for :appID. Optional queryString arg bind_to_es=true to bind WS on log storage and not real time AMQP broker',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'appId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { default: { description: '<No description>' } },
})

export const getLogsDrainsRoute = createRoute({
  method: 'get',
  path: '/logs/drains',
  tags: ['all', 'logs'],
  description: 'Fetch all the logs drains (ccadmin dedicated route)',
  responses: { default: { description: '<No description>' } },
})

export const putLogsDrainsDrainIdRoute = createRoute({
  method: 'put',
  path: '/logs/drains/{drainId}',
  tags: ['all', 'logs'],
  description: 'Fetch all the logs drains (ccadmin dedicated route)',
  request: {
    params: z.object({
      drainId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'drainId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { default: { description: '<No description>' } },
})

export const getLogsLogsChunkedAppIdRoute = createRoute({
  method: 'get',
  path: '/logs/logs-chunked/{appId}',
  tags: ['all', 'logs'],
  description: 'Retrieve logs as they come through a chunked, never-ending response',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: {
            description: 'Application Id',
            in: 'path',
            name: 'appId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      download: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Tell the user-agent to download the body as a file',
            in: 'query',
            name: 'download',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: { default: { description: '<No description>' } },
})

export const getLogsLogsSocketAppIdRoute = createRoute({
  method: 'get',
  path: '/logs/logs-socket/{appId}',
  tags: ['all', 'logs'],
  description:
    'Retrieve logs as they come through a websocket connection. To have authorization, you have to send a `{ "message_type": "oauth", "authorization": "oauth authorization string" }` message',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: {
            description: 'Application Id',
            in: 'path',
            name: 'appId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      since: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Only fetch logs newer than this (ISO-8601 formatted) date',
            in: 'query',
            name: 'since',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A pattern to filter with',
            in: 'query',
            name: 'filter',
            required: false,
            schema: { type: 'string' },
          },
        }),
      deployment_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Only fetch logs emitted by this deployment',
            in: 'query',
            name: 'deployment_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { default: { description: '<No description>' } },
})

export const getLogsAppIdRoute = createRoute({
  method: 'get',
  path: '/logs/{appId}',
  tags: ['all', 'logs'],
  description: 'Fetch the logs for a given application',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: {
            description: 'Application Id',
            in: 'path',
            name: 'appId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
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
            description: 'Number of lines to return',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      order: z
        .enum(['asc', 'desc'])
        .default('desc')
        .exactOptional()
        .openapi({
          param: {
            description: 'Logs order',
            in: 'query',
            name: 'order',
            required: false,
            schema: { default: 'desc', enum: ['asc', 'desc'], type: 'string' },
          },
        }),
      after: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Lowest bound for logs date, ISO 8601',
            in: 'query',
            name: 'after',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      before: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Highest bounds for logs date, ISO 8601',
            in: 'query',
            name: 'before',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A pattern to filter with',
            in: 'query',
            name: 'filter',
            required: false,
            schema: { type: 'string' },
          },
        }),
      deployment_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Only fetch logs emitted by this deployment',
            in: 'query',
            name: 'deployment_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { default: { description: '<No description>' } },
})

export const getLogsAppIdDrainsRoute = createRoute({
  method: 'get',
  path: '/logs/{appId}/drains',
  tags: ['all', 'logs'],
  description: 'Fetch the logs drains for a given application',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'appId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { default: { description: '<No description>' } },
})

export const postLogsAppIdDrainsRoute = createRoute({
  method: 'post',
  path: '/logs/{appId}/drains',
  tags: ['all', 'logs'],
  description: 'Add a log drain for a given application',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'appId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { default: { description: '<No description>' } },
})

export const getLogsAppIdDrainsIdOrUrlRoute = createRoute({
  method: 'get',
  path: '/logs/{appId}/drains/:idOrUrl',
  tags: ['all', 'logs'],
  description: 'Fetch the logs drain by id or url for a given application',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'appId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { default: { description: '<No description>' } },
})

export const deleteLogsAppIdDrainsIdOrUrlRoute = createRoute({
  method: 'delete',
  path: '/logs/{appId}/drains/:idOrUrl',
  tags: ['all', 'logs'],
  description: 'Delete the logs drain by id or url for a given application',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'appId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { default: { description: '<No description>' } },
})

export const getLogsAppIdSseRoute = createRoute({
  method: 'get',
  path: '/logs/{appId}/sse',
  tags: ['all', 'logs'],
  description:
    'Retrieve logs as they come through a sse connection. To have authorization, you have to add `authorization=oAuthAuthorizationString` as query param.',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'appId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { default: { description: '<No description>' } },
})

export const getNewsfeedsBlogRoute = createRoute({
  method: 'get',
  path: '/newsfeeds/blog',
  tags: ['all'],
  operationId: 'getNewsfeedsBlog',
  responses: { 200: { description: 'getBlogFeed' } },
})

export const getNewsfeedsEngineeringRoute = createRoute({
  method: 'get',
  path: '/newsfeeds/engineering',
  tags: ['all'],
  operationId: 'getNewsfeedEngineering',
  responses: { 200: { description: 'getEngineeringFeed' } },
})

export const getNotificationsEmailhooksOwnerIdRoute = createRoute({
  method: 'get',
  path: '/notifications/emailhooks/{ownerId}',
  tags: ['all'],
  description: 'list created e-mail hooks',
  request: {
    params: z.object({
      ownerId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'ownerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { default: { description: '<No description>' } },
})

export const postNotificationsEmailhooksOwnerIdRoute = createRoute({
  method: 'post',
  path: '/notifications/emailhooks/{ownerId}',
  tags: ['all'],
  description: 'create a hook for e-mail notifications',
  request: {
    params: z.object({
      ownerId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'ownerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { default: { description: '<No description>' } },
})

export const putNotificationsEmailhooksOwnerIdIdRoute = createRoute({
  method: 'put',
  path: '/notifications/emailhooks/{ownerId}/:id',
  tags: ['all'],
  description: 'edit an e-mail hook',
  request: {
    params: z.object({
      ownerId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'ownerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { default: { description: '<No description>' } },
})

export const deleteNotificationsEmailhooksOwnerIdIdRoute = createRoute({
  method: 'delete',
  path: '/notifications/emailhooks/{ownerId}/:id',
  tags: ['all'],
  description: 'delete an e-mail hook',
  request: {
    params: z.object({
      ownerId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'ownerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { default: { description: '<No description>' } },
})

export const getNotificationsInfoEventsRoute = createRoute({
  method: 'get',
  path: '/notifications/info/events',
  tags: ['all', 'events'],
  description: 'list available events',
  responses: { default: { description: '<No description>' } },
})

export const getNotificationsInfoWebhookformatsRoute = createRoute({
  method: 'get',
  path: '/notifications/info/webhookformats',
  tags: ['all'],
  description: 'list available webhook formats',
  responses: { default: { description: '<No description>' } },
})

export const getNotificationsWebhooksOwnerIdRoute = createRoute({
  method: 'get',
  path: '/notifications/webhooks/{ownerId}',
  tags: ['all'],
  description: 'list created hooks',
  request: {
    params: z.object({
      ownerId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'ownerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { default: { description: '<No description>' } },
})

export const postNotificationsWebhooksOwnerIdRoute = createRoute({
  method: 'post',
  path: '/notifications/webhooks/{ownerId}',
  tags: ['all'],
  description: 'create a hook for notifications',
  request: {
    params: z.object({
      ownerId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'ownerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { default: { description: '<No description>' } },
})

export const putNotificationsWebhooksOwnerIdIdRoute = createRoute({
  method: 'put',
  path: '/notifications/webhooks/{ownerId}/:id',
  tags: ['all'],
  description: 'edit a hook',
  request: {
    params: z.object({
      ownerId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'ownerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { default: { description: '<No description>' } },
})

export const deleteNotificationsWebhooksOwnerIdIdRoute = createRoute({
  method: 'delete',
  path: '/notifications/webhooks/{ownerId}/:id',
  tags: ['all'],
  description: 'delete a hook',
  request: {
    params: z.object({
      ownerId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'ownerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { default: { description: '<No description>' } },
})

export const postOauthAccessTokenRoute = createRoute({
  method: 'post',
  path: '/oauth/access_token',
  tags: ['all', 'oauth'],
  operationId: 'postOauthAccessToken',
  request: {
    query: z.object({
      oauth_consumer_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'oauth_consumer_key',
            required: false,
            schema: { type: 'string' },
          },
        }),
      oauth_token: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'oauth_token', required: false, schema: { type: 'string' } },
        }),
      oauth_signature_method: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'oauth_signature_method',
            required: false,
            schema: { type: 'string' },
          },
        }),
      oauth_signature: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'oauth_signature',
            required: false,
            schema: { type: 'string' },
          },
        }),
      oauth_timestamp: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'oauth_timestamp',
            required: false,
            schema: { type: 'string' },
          },
        }),
      oauth_nonce: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'oauth_nonce', required: false, schema: { type: 'string' } },
        }),
      oauth_version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'oauth_version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      oauth_verifier: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'oauth_verifier',
            required: false,
            schema: { type: 'string' },
          },
        }),
      oauth_callback: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'oauth_callback',
            required: false,
            schema: { type: 'string' },
          },
        }),
      oauth_token_secret: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'oauth_token_secret',
            required: false,
            schema: { type: 'string' },
          },
        }),
      oauth_callback_confirmed: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'oauth_callback_confirmed',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'postAccessTokenRequest' } },
})

export const postOauthAccessTokenQueryRoute = createRoute({
  method: 'post',
  path: '/oauth/access_token_query',
  tags: ['all', 'oauth'],
  request: {
    query: z.object({
      oauth_consumer_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'oauth_consumer_key',
            required: false,
            schema: { type: 'string' },
          },
        }),
      oauth_token: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'oauth_token', required: false, schema: { type: 'string' } },
        }),
      oauth_signature_method: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'oauth_signature_method',
            required: false,
            schema: { type: 'string' },
          },
        }),
      oauth_signature: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'oauth_signature',
            required: false,
            schema: { type: 'string' },
          },
        }),
      oauth_timestamp: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'oauth_timestamp',
            required: false,
            schema: { type: 'string' },
          },
        }),
      oauth_nonce: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'oauth_nonce', required: false, schema: { type: 'string' } },
        }),
      oauth_version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'oauth_version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      oauth_verifier: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'oauth_verifier',
            required: false,
            schema: { type: 'string' },
          },
        }),
      oauth_callback: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'oauth_callback',
            required: false,
            schema: { type: 'string' },
          },
        }),
      oauth_token_secret: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'oauth_token_secret',
            required: false,
            schema: { type: 'string' },
          },
        }),
      oauth_callback_confirmed: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'oauth_callback_confirmed',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Status 200' } },
})

export const getOauthAuthorizeRoute = createRoute({
  method: 'get',
  path: '/oauth/authorize',
  tags: ['all', 'oauth'],
  operationId: 'getOauthAuthorize',
  request: {
    query: z.object({
      oauth_token: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'oauth_token', required: false, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      Cookie: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'header', name: 'Cookie', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'authorizeForm' } },
})

export const postOauthAuthorizeRoute = createRoute({
  method: 'post',
  path: '/oauth/authorize',
  tags: ['all', 'oauth'],
  operationId: 'postOauthAuthorize',
  request: {
    query: z.object({
      almighty: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'almighty', required: false, schema: { type: 'string' } },
        }),
      access_organisations: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'access_organisations',
            required: false,
            schema: { type: 'string' },
          },
        }),
      manage_organisations: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'manage_organisations',
            required: false,
            schema: { type: 'string' },
          },
        }),
      manage_organisations_services: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'manage_organisations_services',
            required: false,
            schema: { type: 'string' },
          },
        }),
      manage_organisations_applications: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'manage_organisations_applications',
            required: false,
            schema: { type: 'string' },
          },
        }),
      manage_organisations_members: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'manage_organisations_members',
            required: false,
            schema: { type: 'string' },
          },
        }),
      access_organisations_bills: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'access_organisations_bills',
            required: false,
            schema: { type: 'string' },
          },
        }),
      access_organisations_credit_count: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'access_organisations_credit_count',
            required: false,
            schema: { type: 'string' },
          },
        }),
      access_organisations_consumption_statistics: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'access_organisations_consumption_statistics',
            required: false,
            schema: { type: 'string' },
          },
        }),
      access_personal_information: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'access_personal_information',
            required: false,
            schema: { type: 'string' },
          },
        }),
      manage_personal_information: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'manage_personal_information',
            required: false,
            schema: { type: 'string' },
          },
        }),
      manage_ssh_keys: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'manage_ssh_keys',
            required: false,
            schema: { type: 'string' },
          },
        }),
      manage_services: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'manage_services',
            required: false,
            schema: { type: 'string' },
          },
        }),
      manage_applications: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'manage_applications',
            required: false,
            schema: { type: 'string' },
          },
        }),
      access_bills: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'access_bills', required: false, schema: { type: 'string' } },
        }),
      access_credit_count: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'access_credit_count',
            required: false,
            schema: { type: 'string' },
          },
        }),
      access_consumption_statistics: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'access_consumption_statistics',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      Cookie: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'header', name: 'Cookie', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'authorizeToken' } },
})

export const postOauthRequestTokenRoute = createRoute({
  method: 'post',
  path: '/oauth/request_token',
  tags: ['all', 'oauth'],
  operationId: 'postOauthRequestToken',
  request: {
    query: z.object({
      oauth_consumer_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'oauth_consumer_key',
            required: false,
            schema: { type: 'string' },
          },
        }),
      oauth_token: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'oauth_token', required: false, schema: { type: 'string' } },
        }),
      oauth_signature_method: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'oauth_signature_method',
            required: false,
            schema: { type: 'string' },
          },
        }),
      oauth_signature: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'oauth_signature',
            required: false,
            schema: { type: 'string' },
          },
        }),
      oauth_timestamp: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'oauth_timestamp',
            required: false,
            schema: { type: 'string' },
          },
        }),
      oauth_nonce: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'oauth_nonce', required: false, schema: { type: 'string' } },
        }),
      oauth_version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'oauth_version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      oauth_verifier: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'oauth_verifier',
            required: false,
            schema: { type: 'string' },
          },
        }),
      oauth_callback: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'oauth_callback',
            required: false,
            schema: { type: 'string' },
          },
        }),
      oauth_token_secret: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'oauth_token_secret',
            required: false,
            schema: { type: 'string' },
          },
        }),
      oauth_callback_confirmed: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'oauth_callback_confirmed',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'postReqTokenRequest' } },
})

export const postOauthRequestTokenQueryRoute = createRoute({
  method: 'post',
  path: '/oauth/request_token_query',
  tags: ['all', 'oauth'],
  request: {
    query: z.object({
      oauth_consumer_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'oauth_consumer_key',
            required: false,
            schema: { type: 'string' },
          },
        }),
      oauth_token: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'oauth_token', required: false, schema: { type: 'string' } },
        }),
      oauth_signature_method: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'oauth_signature_method',
            required: false,
            schema: { type: 'string' },
          },
        }),
      oauth_signature: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'oauth_signature',
            required: false,
            schema: { type: 'string' },
          },
        }),
      oauth_timestamp: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'oauth_timestamp',
            required: false,
            schema: { type: 'string' },
          },
        }),
      oauth_nonce: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'oauth_nonce', required: false, schema: { type: 'string' } },
        }),
      oauth_version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'oauth_version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      oauth_verifier: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'oauth_verifier',
            required: false,
            schema: { type: 'string' },
          },
        }),
      oauth_callback: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'oauth_callback',
            required: false,
            schema: { type: 'string' },
          },
        }),
      oauth_token_secret: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'oauth_token_secret',
            required: false,
            schema: { type: 'string' },
          },
        }),
      oauth_callback_confirmed: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'oauth_callback_confirmed',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Status 200' } },
})

export const getOauthRightsRoute = createRoute({
  method: 'get',
  path: '/oauth/rights',
  tags: ['all', 'oauth'],
  operationId: 'getOauthRights',
  responses: {
    200: {
      description: 'getAvailableRights',
      content: { 'application/json': { schema: RightsSchema } },
    },
  },
})

export const getOpenapiType2Route = createRoute({
  method: 'get',
  path: '/openapi.{type}',
  tags: ['all'],
  summary: 'Get the swagger for this API as {type}',
  description: 'Get the swagger for this API as {type}. Type can be either "yml" or "json".',
  request: {
    params: z.object({
      type: z
        .string()
        .openapi({
          param: { in: 'path', name: 'type', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'This API swagger documentation in {type} format.' } },
})

export const getOrganisationsRoute = createRoute({
  method: 'get',
  path: '/organisations',
  tags: ['all', 'organisations'],
  operationId: 'getOrganisations',
  request: {
    query: z.object({
      user: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'user', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'getUserOrganisations',
      content: { 'application/json': { schema: z.array(OrganisationSchema) } },
    },
  },
})

export const postOrganisationsRoute = createRoute({
  method: 'post',
  path: '/organisations',
  tags: ['all', 'organisations'],
  operationId: 'postOrganisations',
  request: { body: WannabeOrganisationRequestBody },
  responses: {
    200: { description: 'createOrganisation', content: { '*/*': { schema: OrganisationSchema } } },
  },
})

export const getOrganisationsIdRoute = createRoute({
  method: 'get',
  path: '/organisations/{id}',
  tags: ['all', 'organisations'],
  operationId: 'getOrganisationsId',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'getOrganisation',
      content: { 'application/json': { schema: OrganisationSchema } },
    },
  },
})

export const putOrganisationsIdRoute = createRoute({
  method: 'put',
  path: '/organisations/{id}',
  tags: ['all', 'organisations'],
  operationId: 'putOrganisationsId',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    body: WannabeOrganisationRequestBody,
  },
  responses: {
    200: { description: 'editOrganisation', content: { '*/*': { schema: OrganisationSchema } } },
  },
})

export const deleteOrganisationsIdRoute = createRoute({
  method: 'delete',
  path: '/organisations/{id}',
  tags: ['all', 'organisations'],
  operationId: 'deleteOrganisationsId',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { 200: { description: 'deleteOrganisation' } },
})

export const getOrganisationsIdAddonprovidersRoute = createRoute({
  method: 'get',
  path: '/organisations/{id}/addonproviders',
  tags: ['all', 'organisations'],
  operationId: 'getOrganisationsIdAddonproviders',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'Get all informations about all providers.',
      content: { 'application/json': { schema: z.array(ProviderSchema) } },
    },
  },
})

export const postOrganisationsIdAddonprovidersRoute = createRoute({
  method: 'post',
  path: '/organisations/{id}/addonproviders',
  tags: ['all', 'organisations'],
  operationId: 'postOrganisationsIdAddonproviders',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    body: WannabeAddonProviderRequestBody,
  },
  responses: {
    200: { description: 'createProvider', content: { '*/*': { schema: ProviderSchema } } },
  },
})

export const getOrganisationsIdAddonprovidersProviderIdRoute = createRoute({
  method: 'get',
  path: '/organisations/{id}/addonproviders/{providerId}',
  tags: ['all', 'organisations'],
  operationId: 'getOrganisationsIdAddonprovidersProviderId',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      providerId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'providerId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get all informations about given provider.',
      content: { 'application/json': { schema: ProviderSchema } },
    },
  },
})

export const putOrganisationsIdAddonprovidersProviderIdRoute = createRoute({
  method: 'put',
  path: '/organisations/{id}/addonproviders/{providerId}',
  tags: ['all', 'organisations'],
  operationId: 'putOrganisationsIdAddonprovidersProviderId',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      providerId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'providerId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: WannabeAddonProviderRequestBody,
  },
  responses: {
    200: { description: 'updateProviderInfos', content: { '*/*': { schema: ProviderSchema } } },
  },
})

export const deleteOrganisationsIdAddonprovidersProviderIdRoute = createRoute({
  method: 'delete',
  path: '/organisations/{id}/addonproviders/{providerId}',
  tags: ['all', 'organisations'],
  summary: 'Remove an add-on provider',
  description: 'Remove a given add-on provider. providerId must be owned by organisation {id}.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      providerId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'providerId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    204: { description: 'If the deletion was successful.' },
    403: {
      description:
        'If user has no access to organisation {id} or provider or if there still are add-ons of this provider.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            response: {
              value:
                '{"type":"error","id":6200,"message":"You do not belong to this organisation so you cannot access it"}',
            },
          },
        },
      },
    },
    404: { description: 'If no such organisation/provider exists.' },
  },
})

export const getOrganisationsIdAddonprovidersProviderIdFeaturesRoute = createRoute({
  method: 'get',
  path: '/organisations/{id}/addonproviders/{providerId}/features',
  tags: ['all', 'organisations'],
  operationId: 'getOrganisationsIdAddonprovidersProviderIdFeatures',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      providerId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'providerId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'getProviderFeatures',
      content: { 'application/json': { schema: z.array(FeatureSchema) } },
    },
  },
})

export const postOrganisationsIdAddonprovidersProviderIdFeaturesRoute = createRoute({
  method: 'post',
  path: '/organisations/{id}/addonproviders/{providerId}/features',
  tags: ['all', 'organisations'],
  operationId: 'postOrganisationsIdAddonprovidersProviderIdFeatures',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      providerId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'providerId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: WannabeFeatureSchema } }, required: true },
  },
  responses: {
    200: { description: 'addProviderFeature', content: { '*/*': { schema: FeatureSchema } } },
  },
})

export const deleteOrganisationsIdAddonprovidersProviderIdFeaturesFeatureIdRoute = createRoute({
  method: 'delete',
  path: '/organisations/{id}/addonproviders/{providerId}/features/{featureId}',
  tags: ['all', 'organisations'],
  operationId: 'deleteOrganisationsIdAddonprovidersProviderIdFeaturesFeatureId',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      featureId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'featureId', required: true, schema: { type: 'string' } },
        }),
      providerId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'providerId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'deleteProviderFeature' } },
})

export const getOrganisationsIdAddonprovidersProviderIdPlansRoute = createRoute({
  method: 'get',
  path: '/organisations/{id}/addonproviders/{providerId}/plans',
  tags: ['all', 'organisations'],
  operationId: 'getOrganisationsIdAddonprovidersProviderIdPlans',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      providerId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'providerId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'getProviderPlans',
      content: { 'application/json': { schema: z.array(PlanSchema) } },
    },
  },
})

export const postOrganisationsIdAddonprovidersProviderIdPlansRoute = createRoute({
  method: 'post',
  path: '/organisations/{id}/addonproviders/{providerId}/plans',
  tags: ['all', 'organisations'],
  operationId: 'postOrganisationsIdAddonprovidersProviderIdPlans',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      providerId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'providerId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: WannabePlanRequestBody,
  },
  responses: {
    200: { description: 'addProviderPlan', content: { '*/*': { schema: PlanSchema } } },
  },
})

export const getOrganisationsIdAddonprovidersProviderIdPlansPlanIdRoute = createRoute({
  method: 'get',
  path: '/organisations/{id}/addonproviders/{providerId}/plans/{planId}',
  tags: ['all', 'organisations'],
  operationId: 'getOrganisationsIdAddonprovidersProviderIdPlansPlanId',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      providerId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'providerId', required: true, schema: { type: 'string' } },
        }),
      planId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'planId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'getProviderPlan',
      content: { 'application/json': { schema: PlanSchema } },
    },
  },
})

export const putOrganisationsIdAddonprovidersProviderIdPlansPlanIdRoute = createRoute({
  method: 'put',
  path: '/organisations/{id}/addonproviders/{providerId}/plans/{planId}',
  tags: ['all', 'organisations'],
  operationId: 'putOrganisationsIdAddonprovidersProviderIdPlansPlanId',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      providerId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'providerId', required: true, schema: { type: 'string' } },
        }),
      planId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'planId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: WannabePlanRequestBody,
  },
  responses: {
    200: { description: 'editProviderPlan', content: { '*/*': { schema: PlanSchema } } },
  },
})

export const deleteOrganisationsIdAddonprovidersProviderIdPlansPlanIdRoute = createRoute({
  method: 'delete',
  path: '/organisations/{id}/addonproviders/{providerId}/plans/{planId}',
  tags: ['all', 'organisations'],
  operationId: 'deleteOrganisationsIdAddonprovidersProviderIdPlansPlanId',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      providerId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'providerId', required: true, schema: { type: 'string' } },
        }),
      planId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'planId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'deleteProviderPlan' } },
})

export const putOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureNameRoute =
  createRoute({
    method: 'put',
    path: '/organisations/{id}/addonproviders/{providerId}/plans/{planId}/features/{featureName}',
    tags: ['all', 'organisations'],
    operationId: 'putOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureName',
    request: {
      params: z.object({
        id: z
          .string()
          .openapi({
            param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } },
          }),
        featureName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'featureName', required: true, schema: { type: 'string' } },
          }),
        providerId: z
          .string()
          .openapi({
            param: { in: 'path', name: 'providerId', required: true, schema: { type: 'string' } },
          }),
        planId: z
          .string()
          .openapi({
            param: { in: 'path', name: 'planId', required: true, schema: { type: 'string' } },
          }),
      }),
      body: {
        content: { 'application/json': { schema: WannabePlanFeatureSchema } },
        required: true,
      },
    },
    responses: { 200: { description: 'editProviderPlanFeature' } },
  })

export const deleteOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureNameRoute =
  createRoute({
    method: 'delete',
    path: '/organisations/{id}/addonproviders/{providerId}/plans/{planId}/features/{featureName}',
    tags: ['all', 'organisations'],
    operationId: 'deleteOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureName',
    request: {
      params: z.object({
        id: z
          .string()
          .openapi({
            param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } },
          }),
        featureName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'featureName', required: true, schema: { type: 'string' } },
          }),
        providerId: z
          .string()
          .openapi({
            param: { in: 'path', name: 'providerId', required: true, schema: { type: 'string' } },
          }),
        planId: z
          .string()
          .openapi({
            param: { in: 'path', name: 'planId', required: true, schema: { type: 'string' } },
          }),
      }),
    },
    responses: { 200: { description: 'deleteProviderPlanFeature' } },
  })

export const getOrganisationsIdAddonprovidersProviderIdSsoRoute = createRoute({
  method: 'get',
  path: '/organisations/{id}/addonproviders/{providerId}/sso',
  tags: ['all', 'organisations'],
  operationId: 'getOrganisationsIdAddonsAddonIdSso',
  request: {
    params: z.object({
      providerId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'providerId', required: true, schema: { type: 'string' } },
        }),
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'getSSOData',
      content: { 'application/json': { schema: AddonProviderSsoSchema } },
    },
  },
})

export const getOrganisationsIdAddonprovidersProviderIdTagsRoute = createRoute({
  method: 'get',
  path: '/organisations/{id}/addonproviders/{providerId}/tags',
  tags: ['all', 'organisations'],
  operationId: 'getOrganisationsIdAddonprovidersProviderIdTags',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      providerId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'providerId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'getProviderTags', content: { '*/*': { schema: z.array(z.string()) } } },
  },
})

export const postOrganisationsIdAddonprovidersProviderIdTestersRoute = createRoute({
  method: 'post',
  path: '/organisations/{id}/addonproviders/{providerId}/testers',
  tags: ['all', 'organisations'],
  operationId: 'postOrganisationsIdAddonprovidersProviderIdTesters',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      providerId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'providerId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'addBetaTester' } },
})

export const getOrganisationsIdAddonsRoute = createRoute({
  method: 'get',
  path: '/organisations/{id}/addons',
  tags: ['all', 'addons', 'organisations'],
  operationId: 'getOrganisationsIdAddons',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'getAddons',
      content: { 'application/json': { schema: z.array(AddonSchema) } },
    },
  },
})

export const postOrganisationsIdAddonsRoute = createRoute({
  method: 'post',
  path: '/organisations/{id}/addons',
  tags: ['all', 'addons', 'organisations'],
  operationId: 'postOrganisationsIdAddons',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    body: WannabeAddonRequestBody,
  },
  responses: {
    200: { description: 'provisionAddon', content: { '*/*': { schema: AddonSchema } } },
  },
})

export const postOrganisationsIdAddonsPreordersRoute = createRoute({
  method: 'post',
  path: '/organisations/{id}/addons/preorders',
  tags: ['all', 'addons', 'organisations'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    body: WannabeAddonRequestBody,
  },
  responses: { 200: { description: 'Status 200' } },
})

export const getOrganisationsIdAddonsAddonIdRoute = createRoute({
  method: 'get',
  path: '/organisations/{id}/addons/{addonId}',
  tags: ['all', 'addons', 'organisations'],
  operationId: 'getOrganisationsIdAddonsAddonId',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      addonId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'addonId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'getAddon', content: { 'application/json': { schema: AddonSchema } } },
  },
})

export const putOrganisationsIdAddonsAddonIdRoute = createRoute({
  method: 'put',
  path: '/organisations/{id}/addons/{addonId}',
  tags: ['all', 'addons', 'organisations'],
  operationId: 'putOrganisationsIdAddonsAddonId',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      addonId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'addonId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: WannabeAddonRequestBody,
  },
  responses: {
    200: { description: 'Update addon information', content: { '*/*': { schema: AddonSchema } } },
  },
})

export const deleteOrganisationsIdAddonsAddonIdRoute = createRoute({
  method: 'delete',
  path: '/organisations/{id}/addons/{addonId}',
  tags: ['all', 'addons', 'organisations'],
  operationId: 'deleteOrganisationsIdAddonsAddonId',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      addonId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'addonId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'deprovisionAddon' } },
})

export const getOrganisationsIdAddonsAddonIdApplicationsRoute = createRoute({
  method: 'get',
  path: '/organisations/{id}/addons/{addonId}/applications',
  tags: ['all', 'addons', 'applications', 'organisations'],
  operationId: 'getOrganisationsIdAddonsAddonIdApplications',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      addonId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'addonId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'getApplicationsLinkedToAddon',
      content: { 'application/json': { schema: z.array(ApplicationSchema) } },
    },
  },
})

export const getOrganisationsIdAddonsAddonIdEnvRoute = createRoute({
  method: 'get',
  path: '/organisations/{id}/addons/{addonId}/env',
  tags: ['all', 'addons', 'organisations'],
  operationId: 'getOrganisationsIdAddonsAddonIdEnv',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      addonId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'addonId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'getAddonEnv',
      content: { 'application/json': { schema: z.array(ListEnvSchema) } },
    },
  },
})

export const getOrganisationsIdAddonsAddonIdInstancesRoute = createRoute({
  method: 'get',
  path: '/organisations/{id}/addons/{addonId}/instances',
  tags: ['all', 'addons', 'organisations'],
  summary: 'List instances for this add-on.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      addonId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'addonId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      deploymentId: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'deploymentId', required: false, schema: { type: 'string' } },
        }),
      withDeleted: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'withDeleted', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The instance list',
      content: {
        'application/json': {
          schema: z
            .array(SupernovaInstanceViewSchema)
            .openapi({ description: 'List of instances.' }),
        },
      },
    },
  },
})

export const getOrganisationsIdAddonsAddonIdInstancesInstanceIdRoute = createRoute({
  method: 'get',
  path: '/organisations/{id}/addons/{addonId}/instances/{instanceId}',
  tags: ['all', 'addons', 'organisations'],
  summary: 'Get a specific instance for {addonId}',
  request: {
    params: z.object({
      instanceId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'instanceId', required: true, schema: { type: 'string' } },
        }),
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      addonId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'addonId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'An instance',
      content: { 'application/json': { schema: SupernovaInstanceViewSchema } },
    },
  },
})

export const getOrganisationsIdAddonsAddonIdMigrationsRoute = createRoute({
  method: 'get',
  path: '/organisations/{id}/addons/{addonId}/migrations',
  tags: ['all', 'addons', 'organisations'],
  summary: 'Get past migrations from add-on.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      addonId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'addonId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of migrations',
      content: {
        'application/json': {
          schema: z.array(AddonMigrationSchema),
          examples: {
            response: {
              value:
                '{\n   "id": "<UUID>",\n   "addon_id": "addon_<uuid>",\n   "kind": "SHARED_TO_SHARED|SHARED_TO_DEDICATED|DEDICATED_TO_DEDICATED|DEDICATED_TO_SHARED",\n   "state": "??",\n   "hostname": "db.hostname",\n   "database": "dbname",\n   "port": 5432,\n   "database_user": "username",\n   "callback_url": "https://api.clever-cloud.com/v2/…",\n   "old_cluster_id": "acddc485-79c2-4c6b-a617-c92a06c0cb0b",\n   "old_cluster_label": "par2-01",\n   "old_instance_id": "acddc485-79c2-4c6b-a617-c92a06c0cb0b",\n   "old_plan": "s",\n   "old_zone": "par2",\n   "old_recipient_hostname": "postgresql-sdc-par2-clevercloud.services.clever-cloud.com", \n   "new_cluster_id": "acddc485-79c2-4c6b-a617-c92a06c0cb0b",\n   "new_cluster_label": "par2-02",\n   "new_instance_id": "acddc485-79c2-4c6b-a617-c92a06c0cb0b",\n   "new_plan": "m",\n   "new_zone": "par3",\n   "new_recipient_hostname": "postgresql-sdc-par3-clevercloud.services.clever-cloud.com", \n   "request_date": "2018-10-31T10:00:23Z",\n   "last_state_update_date":  "2018-10-31T10:00:23Z",\n   "dump_restore_start_date":  "2018-10-31T10:00:23Z",\n   "dump_restore_finished_date":  "2018-10-31T10:00:23Z",\n   "end_date":  "2018-10-31T10:00:23Z",\n   "exit_message": "Success" \n}',
            },
          },
        },
      },
    },
  },
})

export const postOrganisationsIdAddonsAddonIdMigrationsRoute = createRoute({
  method: 'post',
  path: '/organisations/{id}/addons/{addonId}/migrations',
  tags: ['all', 'addons', 'organisations'],
  summary: 'Start a new add-on migration',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      addonId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'addonId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              planId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Id of the new plan. E.g. "plan_acddc485-79c2-4c6b-a617-c92a06c0cb0b"',
                }),
              region: z
                .string()
                .exactOptional()
                .openapi({ description: 'New region. E.g. "EU", "US", "Par2"' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Migration has started.',
      content: {
        'application/json': {
          schema: z
            .object({})
            .openapi({ description: 'The output of the POST to the add-on API.' }),
        },
      },
    },
  },
})

export const getOrganisationsIdAddonsAddonIdMigrationsMigrationIdRoute = createRoute({
  method: 'get',
  path: '/organisations/{id}/addons/{addonId}/migrations/{migrationId}',
  tags: ['all', 'addons', 'organisations'],
  summary: 'Get a given migration',
  request: {
    params: z.object({
      migrationId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'migrationId', required: true, schema: { type: 'string' } },
        }),
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      addonId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'addonId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The migration object',
      content: { 'application/json': { schema: AddonMigrationSchema } },
    },
  },
})

export const getOrganisationsIdAddonsAddonIdSsoRoute = createRoute({
  method: 'get',
  path: '/organisations/{id}/addons/{addonId}/sso',
  tags: ['all', 'addons', 'organisations'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      addonId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'addonId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'getSSOData', content: { 'application/json': { schema: SsoSchema } } },
  },
})

export const getOrganisationsIdAddonsAddonIdTagsRoute = createRoute({
  method: 'get',
  path: '/organisations/{id}/addons/{addonId}/tags',
  tags: ['all', 'addons', 'organisations'],
  operationId: 'getOrganisationsIdAddonsAddonIdTags',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      addonId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'addonId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'getAddonTags', content: { '*/*': { schema: z.array(z.string()) } } },
  },
})

export const putOrganisationsIdAddonsAddonIdTagsTagRoute = createRoute({
  method: 'put',
  path: '/organisations/{id}/addons/{addonId}/tags/{tag}',
  tags: ['all', 'addons', 'organisations'],
  operationId: 'putOrganisationsIdAddonsAddonIdTagsTag',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      tag: z
        .string()
        .openapi({
          param: { in: 'path', name: 'tag', required: true, schema: { type: 'string' } },
        }),
      addonId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'addonId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: BodyRequestBody,
  },
  responses: { 200: { description: 'addAddonTag' } },
})

export const deleteOrganisationsIdAddonsAddonIdTagsTagRoute = createRoute({
  method: 'delete',
  path: '/organisations/{id}/addons/{addonId}/tags/{tag}',
  tags: ['all', 'addons', 'organisations'],
  operationId: 'deleteOrganisationsIdAddonsAddonIdTagsTag',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      tag: z
        .string()
        .openapi({
          param: { in: 'path', name: 'tag', required: true, schema: { type: 'string' } },
        }),
      addonId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'addonId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'deleteAddonTag' } },
})

export const getOrganisationsIdApplicationsRoute = createRoute({
  method: 'get',
  path: '/organisations/{id}/applications',
  tags: ['all', 'applications', 'organisations'],
  operationId: 'getOrganisationsIdApplications',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'getAllApplications',
      content: { 'application/json': { schema: z.array(ApplicationSchema) } },
    },
  },
})

export const postOrganisationsIdApplicationsRoute = createRoute({
  method: 'post',
  path: '/organisations/{id}/applications',
  tags: ['all', 'applications', 'organisations'],
  description:
    'Creates an application. If you want to create a Github app, you need to replace the oauthApp field with what you will find here: https://github.com/CleverCloud/doc.clever-cloud.com/issues/179',
  operationId: 'postOrganisationsIdApplications',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    body: WannabeApplicationRequestBody,
  },
  responses: {
    200: { description: 'addApplication', content: { '*/*': { schema: ApplicationSchema } } },
  },
})

export const getOrganisationsIdApplicationsAppIdRoute = createRoute({
  method: 'get',
  path: '/organisations/{id}/applications/{appId}',
  tags: ['all', 'applications', 'organisations'],
  operationId: 'getOrganisationsIdApplicationsAppId',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'getApplication',
      content: { 'application/json': { schema: ApplicationSchema } },
    },
  },
})

export const putOrganisationsIdApplicationsAppIdRoute = createRoute({
  method: 'put',
  path: '/organisations/{id}/applications/{appId}',
  tags: ['all', 'applications', 'organisations'],
  operationId: 'putOrganisationsIdApplicationsAppId',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: WannabeApplicationRequestBody,
  },
  responses: {
    200: { description: 'editApplication', content: { '*/*': { schema: ApplicationSchema } } },
  },
})

export const deleteOrganisationsIdApplicationsAppIdRoute = createRoute({
  method: 'delete',
  path: '/organisations/{id}/applications/{appId}',
  tags: ['all', 'applications', 'organisations'],
  operationId: 'deleteOrganisationsIdApplicationsAppId',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'deleteApplication' } },
})

export const getOrganisationsIdApplicationsAppIdAddonsRoute = createRoute({
  method: 'get',
  path: '/organisations/{id}/applications/{appId}/addons',
  tags: ['all', 'addons', 'applications', 'organisations'],
  operationId: 'getOrganisationsIdApplicationsAppIdAddons',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'getAddonsLinkedToApplication',
      content: { 'application/json': { schema: z.array(AddonSchema) } },
    },
  },
})

export const postOrganisationsIdApplicationsAppIdAddonsRoute = createRoute({
  method: 'post',
  path: '/organisations/{id}/applications/{appId}/addons',
  tags: ['all', 'addons', 'applications', 'organisations'],
  operationId: 'postOrganisationsIdApplicationsAppIdAddons',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: BodyRequestBody,
  },
  responses: { 200: { description: 'linkAddonToApplication' } },
})

export const getOrganisationsIdApplicationsAppIdAddonsEnvRoute = createRoute({
  method: 'get',
  path: '/organisations/{id}/applications/{appId}/addons/env',
  tags: ['all', 'addons', 'applications', 'organisations'],
  operationId: 'getOrganisationsIdApplicationsAppIdAddonsEnv',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'getEnvOfAddonsLinkedToApplication',
      content: { 'application/json': { schema: z.array(EnvSchema) } },
    },
  },
})

export const deleteOrganisationsIdApplicationsAppIdAddonsAddonIdRoute = createRoute({
  method: 'delete',
  path: '/organisations/{id}/applications/{appId}/addons/{addonId}',
  tags: ['all', 'addons', 'applications', 'organisations'],
  operationId: 'deleteOrganisationsIdApplicationsAppIdAddonsAddonId',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
      addonId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'addonId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'unlinkAddonFromApplication' } },
})

export const putOrganisationsIdApplicationsAppIdBranchRoute = createRoute({
  method: 'put',
  path: '/organisations/{id}/applications/{appId}/branch',
  tags: ['all', 'applications', 'organisations'],
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { 200: { description: 'Status 200' } },
})

export const getOrganisationsIdApplicationsAppIdBranchesRoute = createRoute({
  method: 'get',
  path: '/organisations/{id}/applications/{appId}/branches',
  tags: ['all', 'applications', 'organisations'],
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { 200: { description: 'Status 200' } },
})

export const putOrganisationsIdApplicationsAppIdBuildflavorRoute = createRoute({
  method: 'put',
  path: '/organisations/{id}/applications/{appId}/buildflavor',
  tags: ['all', 'applications', 'organisations'],
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { 200: { description: 'Status 200' } },
})

export const getOrganisationsIdApplicationsAppIdDependenciesRoute = createRoute({
  method: 'get',
  path: '/organisations/{id}/applications/{appId}/dependencies',
  tags: ['all', 'applications', 'organisations'],
  operationId: 'getOrganisationsIdApplicationsAppIdDependencies',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'getApplicationDependencies',
      content: { 'application/json': { schema: z.array(ApplicationSchema) } },
    },
  },
})

export const getOrganisationsIdApplicationsAppIdDependenciesEnvRoute = createRoute({
  method: 'get',
  path: '/organisations/{id}/applications/{appId}/dependencies/env',
  tags: ['all', 'applications', 'organisations'],
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'Get env variables defined by application dependencies',
      content: { '*/*': { schema: z.array(LinkedAppEnvSchema) } },
    },
  },
})

export const putOrganisationsIdApplicationsAppIdDependenciesDependencyIdRoute = createRoute({
  method: 'put',
  path: '/organisations/{id}/applications/{appId}/dependencies/{dependencyId}',
  tags: ['all', 'applications', 'organisations'],
  operationId: 'putOrganisationsIdApplicationsAppIdDependenciesDependencyId',
  request: {
    params: z.object({
      dependencyId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'dependencyId', required: true, schema: { type: 'string' } },
        }),
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    body: BodyRequestBody,
  },
  responses: { 200: { description: 'addApplicationDependency' } },
})

export const deleteOrganisationsIdApplicationsAppIdDependenciesDependencyIdRoute = createRoute({
  method: 'delete',
  path: '/organisations/{id}/applications/{appId}/dependencies/{dependencyId}',
  tags: ['all', 'applications', 'organisations'],
  operationId: 'deleteOrganisationsIdApplicationsAppIdDependenciesDependencyId',
  request: {
    params: z.object({
      dependencyId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'dependencyId', required: true, schema: { type: 'string' } },
        }),
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { 200: { description: 'deleteApplicationDependency' } },
})

export const getOrganisationsIdApplicationsAppIdDependentsRoute = createRoute({
  method: 'get',
  path: '/organisations/{id}/applications/{appId}/dependents',
  tags: ['all', 'applications', 'organisations'],
  operationId: 'getOrganisationsIdApplicationsAppIdDependents',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'getApplicationDependents',
      content: { 'application/json': { schema: z.array(ApplicationSchema) } },
    },
  },
})

export const getOrganisationsIdApplicationsAppIdDeploymentsRoute = createRoute({
  method: 'get',
  path: '/organisations/{id}/applications/{appId}/deployments',
  tags: ['all', 'applications', 'organisations'],
  operationId: 'getOrganisationsIdApplicationsAppIdDeployments',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'limit', required: false, schema: { type: 'string' } },
        }),
      offset: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'offset', required: false, schema: { type: 'string' } },
        }),
      action: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'action', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'getApplicationDeploymentsForOrga',
      content: { 'application/json': { schema: z.array(DeploymentSchema) } },
    },
  },
})

export const getOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdRoute = createRoute({
  method: 'get',
  path: '/organisations/{id}/applications/{appId}/deployments/{deploymentId}',
  tags: ['all', 'applications', 'organisations'],
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
      deploymentId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'deploymentId', required: true, schema: { type: 'string' } },
        }),
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { 200: { description: 'Status 200' } },
})

export const deleteOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdInstancesRoute =
  createRoute({
    method: 'delete',
    path: '/organisations/{id}/applications/{appId}/deployments/{deploymentId}/instances',
    tags: ['all', 'applications', 'organisations'],
    operationId: 'deleteOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdInstances',
    request: {
      params: z.object({
        id: z
          .string()
          .openapi({
            param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } },
          }),
        appId: z
          .string()
          .openapi({
            param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
          }),
        deploymentId: z
          .string()
          .openapi({
            param: { in: 'path', name: 'deploymentId', required: true, schema: { type: 'string' } },
          }),
      }),
    },
    responses: { 200: { description: 'getApplicationDeploymentsForOrga' } },
  })

export const getOrganisationsIdApplicationsAppIdEnvRoute = createRoute({
  method: 'get',
  path: '/organisations/{id}/applications/{appId}/env',
  tags: ['all', 'applications', 'organisations'],
  operationId: 'getOrganisationsIdApplicationsAppIdEnv',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'getApplicationEnv',
      content: { 'application/json': { schema: z.array(ListEnvSchema) } },
    },
  },
})

export const putOrganisationsIdApplicationsAppIdEnvRoute = createRoute({
  method: 'put',
  path: '/organisations/{id}/applications/{appId}/env',
  tags: ['all', 'applications', 'organisations'],
  operationId: 'putOrganisationsIdApplicationsAppIdEnv',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: WannabeEnvRequestBody,
  },
  responses: {
    200: {
      description: 'editApplicationEnvironment',
      content: { '*/*': { schema: ListEnvSchema } },
    },
  },
})

export const putOrganisationsIdApplicationsAppIdEnvEnvNameRoute = createRoute({
  method: 'put',
  path: '/organisations/{id}/applications/{appId}/env/{envName}',
  tags: ['all', 'applications', 'organisations'],
  operationId: 'putOrganisationsIdApplicationsAppIdEnvEnvName',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
      envName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'envName', required: true, schema: { type: 'string' } },
        }),
    }),
    body: WannabeEnvRequestBody,
  },
  responses: {
    200: { description: 'editApplicationEnv', content: { '*/*': { schema: ListEnvSchema } } },
  },
})

export const deleteOrganisationsIdApplicationsAppIdEnvEnvNameRoute = createRoute({
  method: 'delete',
  path: '/organisations/{id}/applications/{appId}/env/{envName}',
  tags: ['all', 'applications', 'organisations'],
  operationId: 'deleteOrganisationsIdApplicationsAppIdEnvEnvName',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
      envName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'envName', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'removeApplicationEnv' } },
})

export const getOrganisationsIdApplicationsAppIdExposedEnvRoute = createRoute({
  method: 'get',
  path: '/organisations/{id}/applications/{appId}/exposed_env',
  tags: ['all', 'applications', 'organisations'],
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { 200: { description: 'Status 200' } },
})

export const putOrganisationsIdApplicationsAppIdExposedEnvRoute = createRoute({
  method: 'put',
  path: '/organisations/{id}/applications/{appId}/exposed_env',
  tags: ['all', 'applications', 'organisations'],
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { 200: { description: 'Status 200' } },
})

export const getOrganisationsIdApplicationsAppIdInstancesRoute = createRoute({
  method: 'get',
  path: '/organisations/{id}/applications/{appId}/instances',
  tags: ['all', 'applications', 'organisations'],
  operationId: 'getOrganisationsIdApplicationsAppIdInstances',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'getApplicationInstances',
      content: { 'application/json': { schema: z.array(AppInstanceSchema) } },
    },
  },
})

export const postOrganisationsIdApplicationsAppIdInstancesRoute = createRoute({
  method: 'post',
  path: '/organisations/{id}/applications/{appId}/instances',
  tags: ['all', 'applications', 'organisations'],
  operationId: 'postOrganisationsIdApplicationsAppIdInstances',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      commit: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'commit', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'redeployApplication' } },
})

export const deleteOrganisationsIdApplicationsAppIdInstancesRoute = createRoute({
  method: 'delete',
  path: '/organisations/{id}/applications/{appId}/instances',
  tags: ['all', 'applications', 'organisations'],
  operationId: 'deleteOrganisationsIdApplicationsAppIdInstances',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'undeployApplication' } },
})

export const getOrganisationsIdApplicationsAppIdInstancesInstanceIdRoute = createRoute({
  method: 'get',
  path: '/organisations/{id}/applications/{appId}/instances/{instanceId}',
  tags: ['all', 'applications', 'organisations'],
  request: {
    params: z.object({
      instanceId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'instanceId', required: true, schema: { type: 'string' } },
        }),
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { 200: { description: 'Status 200' } },
})

export const getOrganisationsIdApplicationsAppIdTagsRoute = createRoute({
  method: 'get',
  path: '/organisations/{id}/applications/{appId}/tags',
  tags: ['all', 'applications', 'organisations'],
  operationId: 'getOrganisationsIdApplicationsAppIdTags',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'getApplicationTags', content: { '*/*': { schema: z.array(z.string()) } } },
  },
})

export const putOrganisationsIdApplicationsAppIdTagsTagRoute = createRoute({
  method: 'put',
  path: '/organisations/{id}/applications/{appId}/tags/{tag}',
  tags: ['all', 'applications', 'organisations'],
  operationId: 'putOrganisationsIdApplicationsAppIdTagsTag',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
      tag: z
        .string()
        .openapi({
          param: { in: 'path', name: 'tag', required: true, schema: { type: 'string' } },
        }),
    }),
    body: BodyRequestBody,
  },
  responses: { 200: { description: 'addApplicationTag' } },
})

export const deleteOrganisationsIdApplicationsAppIdTagsTagRoute = createRoute({
  method: 'delete',
  path: '/organisations/{id}/applications/{appId}/tags/{tag}',
  tags: ['all', 'applications', 'organisations'],
  operationId: 'deleteOrganisationsIdApplicationsAppIdTagsTag',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
      tag: z
        .string()
        .openapi({
          param: { in: 'path', name: 'tag', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'deleteApplicationTag' } },
})

export const getOrganisationsIdApplicationsAppIdVhostsRoute = createRoute({
  method: 'get',
  path: '/organisations/{id}/applications/{appId}/vhosts',
  tags: ['all', 'applications', 'organisations'],
  operationId: 'getOrganisationsIdApplicationsAppIdVhosts',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'getVhosts',
      content: { 'application/json': { schema: z.array(VhostSchema) } },
    },
  },
})

export const getOrganisationsIdApplicationsAppIdVhostsFavouriteRoute = createRoute({
  method: 'get',
  path: '/organisations/{id}/applications/{appId}/vhosts/favourite',
  tags: ['all', 'applications', 'organisations'],
  operationId: 'getOrganisationsIdApplicationsAppIdVhostsFavourite',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'getFavouriteVhost',
      content: { 'application/json': { schema: VhostSchema } },
    },
  },
})

export const putOrganisationsIdApplicationsAppIdVhostsFavouriteRoute = createRoute({
  method: 'put',
  path: '/organisations/{id}/applications/{appId}/vhosts/favourite',
  tags: ['all', 'applications', 'organisations'],
  operationId: 'putOrganisationsIdApplicationsAppIdVhostsFavourite',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: VhostRequestBody,
  },
  responses: { 200: { description: 'markFavouriteVhost' } },
})

export const deleteOrganisationsIdApplicationsAppIdVhostsFavouriteRoute = createRoute({
  method: 'delete',
  path: '/organisations/{id}/applications/{appId}/vhosts/favourite',
  tags: ['all', 'applications', 'organisations'],
  operationId: 'deleteOrganisationsIdApplicationsAppIdVhostsFavourite',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'unmarkFavouriteVhost' } },
})

export const putOrganisationsIdApplicationsAppIdVhostsDomainRoute = createRoute({
  method: 'put',
  path: '/organisations/{id}/applications/{appId}/vhosts/{domain}',
  tags: ['all', 'applications', 'organisations'],
  operationId: 'putOrganisationsIdApplicationsAppIdVhostsDomain',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
      domain: z
        .string()
        .openapi({
          param: { in: 'path', name: 'domain', required: true, schema: { type: 'string' } },
        }),
    }),
    body: VhostRequestBody,
  },
  responses: { 200: { description: 'addVhost' } },
})

export const deleteOrganisationsIdApplicationsAppIdVhostsDomainRoute = createRoute({
  method: 'delete',
  path: '/organisations/{id}/applications/{appId}/vhosts/{domain}',
  tags: ['all', 'applications', 'organisations'],
  operationId: 'deleteOrganisationsIdApplicationsAppIdVhostsDomain',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
      domain: z
        .string()
        .openapi({
          param: { in: 'path', name: 'domain', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'removeVhost' } },
})

export const putOrganisationsIdAvatarRoute = createRoute({
  method: 'put',
  path: '/organisations/{id}/avatar',
  tags: ['all', 'organisations'],
  description:
    'If you want to upload an image from your computer, send the image in the body of the request without anything else.',
  operationId: 'putOrganisationsIdAvatar',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { 200: { description: 'setOrgaAvatar\nsetOrgaAvatarFromSource' } },
})

export const getOrganisationsIdConsumersRoute = createRoute({
  method: 'get',
  path: '/organisations/{id}/consumers',
  tags: ['all', 'organisations'],
  operationId: 'getOrganisationsIdConsumers',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'getConsumers',
      content: { 'application/json': { schema: z.array(ConsumerSchema) } },
    },
  },
})

export const postOrganisationsIdConsumersRoute = createRoute({
  method: 'post',
  path: '/organisations/{id}/consumers',
  tags: ['all', 'organisations'],
  operationId: 'postOrganisationsIdConsumers',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    body: WannabeConsumerRequestBody,
  },
  responses: { 200: { description: 'createConsumer' } },
})

export const getOrganisationsIdConsumersKeyRoute = createRoute({
  method: 'get',
  path: '/organisations/{id}/consumers/{key}',
  tags: ['all', 'organisations'],
  operationId: 'getOrganisationsIdConsumersKey',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      key: z
        .string()
        .openapi({
          param: { in: 'path', name: 'key', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'getConsumer',
      content: { 'application/json': { schema: ConsumerSchema } },
    },
  },
})

export const putOrganisationsIdConsumersKeyRoute = createRoute({
  method: 'put',
  path: '/organisations/{id}/consumers/{key}',
  tags: ['all', 'organisations'],
  operationId: 'putOrganisationsIdConsumersKey',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      key: z
        .string()
        .openapi({
          param: { in: 'path', name: 'key', required: true, schema: { type: 'string' } },
        }),
    }),
    body: WannabeConsumerRequestBody,
  },
  responses: { 200: { description: 'PUT the same data as in POST.' } },
})

export const deleteOrganisationsIdConsumersKeyRoute = createRoute({
  method: 'delete',
  path: '/organisations/{id}/consumers/{key}',
  tags: ['all', 'organisations'],
  operationId: 'deleteOrganisationsIdConsumersKey',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      key: z
        .string()
        .openapi({
          param: { in: 'path', name: 'key', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'deleteConsumer' } },
})

export const getOrganisationsIdConsumersKeySecretRoute = createRoute({
  method: 'get',
  path: '/organisations/{id}/consumers/{key}/secret',
  tags: ['all', 'organisations'],
  operationId: 'getOrganisationsIdConsumersKeySecret',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      key: z
        .string()
        .openapi({
          param: { in: 'path', name: 'key', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'getConsumerSecret',
      content: { 'application/json': { schema: SecretSchema } },
    },
  },
})

export const getOrganisationsIdConsumptionsRoute = createRoute({
  method: 'get',
  path: '/organisations/{id}/consumptions',
  tags: ['all', 'organisations'],
  operationId: 'getOrganisationsIdConsumptions',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    query: z.object({
      appId: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'appId', required: false, schema: { type: 'string' } },
        }),
      from: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'from', required: false, schema: { type: 'string' } },
        }),
      to: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'to', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'getAmount', content: { 'application/json': { schema: ConsoSchema } } },
  },
})

export const getOrganisationsIdCreditsRoute = createRoute({
  method: 'get',
  path: '/organisations/{id}/credits',
  tags: ['all', 'organisations'],
  operationId: 'getOrganisationsIdCredits',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: { description: 'getAmount', content: { 'application/json': { schema: CreditsSchema } } },
  },
})

export const getOrganisationsIdDeploymentsRoute = createRoute({
  method: 'get',
  path: '/organisations/{id}/deployments',
  tags: ['all', 'organisations'],
  operationId: 'getOrganisationsIdDeployments',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'getDeploymentsForAllApps',
      content: { 'application/json': { schema: DeploymentSummarySchema } },
    },
  },
})

export const getOrganisationsIdInstancesRoute = createRoute({
  method: 'get',
  path: '/organisations/{id}/instances',
  tags: ['all', 'organisations'],
  operationId: 'getOrganisationsIdInstances',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'getInstancesForAllApps',
      content: { 'application/json': { schema: z.object({}) } },
    },
  },
})

export const getOrganisationsIdMembersRoute = createRoute({
  method: 'get',
  path: '/organisations/{id}/members',
  tags: ['all', 'organisations'],
  operationId: 'getOrganisationsIdMembers',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'getOrganisationMembers',
      content: { 'application/json': { schema: z.array(Schema1Schema) } },
    },
  },
})

export const postOrganisationsIdMembersRoute = createRoute({
  method: 'post',
  path: '/organisations/{id}/members',
  tags: ['all', 'organisations'],
  operationId: 'postOrganisationsIdMembers',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    query: z.object({
      invitationKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'invitationKey',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: WannabeMemberRequestBody,
  },
  responses: { 200: { description: 'addOrganisationMember' } },
})

export const putOrganisationsIdMembersUserIdRoute = createRoute({
  method: 'put',
  path: '/organisations/{id}/members/{userId}',
  tags: ['all', 'organisations'],
  operationId: 'putOrganisationsIdMembersUserId',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      userId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'userId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: WannabeMemberRequestBody,
  },
  responses: { 200: { description: 'editOrganisationMember' } },
})

export const deleteOrganisationsIdMembersUserIdRoute = createRoute({
  method: 'delete',
  path: '/organisations/{id}/members/{userId}',
  tags: ['all', 'organisations'],
  operationId: 'deleteOrganisationsIdMembersUserId',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      userId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'userId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'removeOrganisationMember' } },
})

export const getOrganisationsIdPaymentInfoRoute = createRoute({
  method: 'get',
  path: '/organisations/{id}/payment-info',
  tags: ['all', 'organisations'],
  operationId: 'getOrganisationsIdPaymentInfo',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { 200: { description: 'getPaymentInfo' } },
})

export const getOrganisationsIdPaymentsBillingsRoute = createRoute({
  method: 'get',
  path: '/organisations/{id}/payments/billings',
  tags: ['all', 'organisations', 'payments'],
  operationId: 'getOrganisationsIdPaymentsBillings',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { 200: { description: 'getInvoices' } },
})

export const postOrganisationsIdPaymentsBillingsRoute = createRoute({
  method: 'post',
  path: '/organisations/{id}/payments/billings',
  tags: ['all', 'organisations', 'payments'],
  operationId: 'postOrganisationsIdPaymentsBillings',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { 200: { description: 'buyDrops' } },
})

export const getOrganisationsIdPaymentsBillingsUnpaidRoute = createRoute({
  method: 'get',
  path: '/organisations/{id}/payments/billings/unpaid',
  tags: ['all', 'organisations', 'payments'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { 200: { description: 'Status 200' } },
})

export const getOrganisationsIdPaymentsBillingsBidRoute = createRoute({
  method: 'get',
  path: '/organisations/{id}/payments/billings/{bid}',
  tags: ['all', 'organisations', 'payments'],
  operationId: 'getOrganisationsIdPaymentsBillingsBid',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      bid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'bid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'getInvoice' } },
})

export const putOrganisationsIdPaymentsBillingsBidRoute = createRoute({
  method: 'put',
  path: '/organisations/{id}/payments/billings/{bid}',
  tags: ['all', 'organisations', 'payments'],
  operationId: 'putOrganisationsIdPaymentsBillingsBid',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      bid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'bid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'choosePaymentProvider' } },
})

export const deleteOrganisationsIdPaymentsBillingsBidRoute = createRoute({
  method: 'delete',
  path: '/organisations/{id}/payments/billings/{bid}',
  tags: ['all', 'organisations', 'payments'],
  operationId: 'deleteOrganisationsIdPaymentsBillingsBid',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      bid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'bid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'deletePurchaseOrder' } },
})

export const getOrganisationsIdPaymentsBillingsBidPdfRoute = createRoute({
  method: 'get',
  path: '/organisations/{id}/payments/billings/{bid}.pdf',
  tags: ['all', 'organisations', 'payments'],
  operationId: 'getOrganisationsIdPaymentsBillingsBidPdf',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      bid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'bid', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'token', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'getPdfInvoice' } },
})

export const getOrganisationsIdPaymentsFullpricePriceRoute = createRoute({
  method: 'get',
  path: '/organisations/{id}/payments/fullprice/{price}',
  tags: ['all', 'organisations', 'payments'],
  operationId: 'getOrganisationsIdPaymentsFullPricePrice',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      price: z
        .string()
        .openapi({
          param: { in: 'path', name: 'price', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'priceWithTax' } },
})

export const getOrganisationsIdPaymentsMethodsRoute = createRoute({
  method: 'get',
  path: '/organisations/{id}/payments/methods',
  tags: ['all', 'organisations', 'payments'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { 200: { description: 'Status 200' } },
})

export const postOrganisationsIdPaymentsMethodsRoute = createRoute({
  method: 'post',
  path: '/organisations/{id}/payments/methods',
  tags: ['all', 'organisations', 'payments'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    body: BodyRequestBody,
  },
  responses: { 200: { description: 'Status 200' } },
})

export const getOrganisationsIdPaymentsMethodsDefaultRoute = createRoute({
  method: 'get',
  path: '/organisations/{id}/payments/methods/default',
  tags: ['all', 'organisations', 'payments'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { 200: { description: 'Status 200' } },
})

export const putOrganisationsIdPaymentsMethodsDefaultRoute = createRoute({
  method: 'put',
  path: '/organisations/{id}/payments/methods/default',
  tags: ['all', 'organisations', 'payments'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    body: { content: { 'application/json': { schema: PaymentDataSchema } }, required: true },
  },
  responses: { 200: { description: 'Status 200' } },
})

export const deleteOrganisationsIdPaymentsMethodsMIdRoute = createRoute({
  method: 'delete',
  path: '/organisations/{id}/payments/methods/{mId}',
  tags: ['all', 'organisations', 'payments'],
  request: {
    params: z.object({
      mId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'mId', required: true, schema: { type: 'string' } },
        }),
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { 200: { description: 'Status 200' } },
})

export const getOrganisationsIdPaymentsMonthlyinvoiceRoute = createRoute({
  method: 'get',
  path: '/organisations/{id}/payments/monthlyinvoice',
  tags: ['all', 'organisations', 'payments'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { 200: { description: 'Status 200' } },
})

export const putOrganisationsIdPaymentsMonthlyinvoiceMaxcreditRoute = createRoute({
  method: 'put',
  path: '/organisations/{id}/payments/monthlyinvoice/maxcredit',
  tags: ['all', 'organisations', 'payments'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { 200: { description: 'Status 200' } },
})

export const getOrganisationsIdPaymentsRecurringRoute = createRoute({
  method: 'get',
  path: '/organisations/{id}/payments/recurring',
  tags: ['all', 'organisations', 'payments'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { 200: { description: 'Status 200' } },
})

export const deleteOrganisationsIdPaymentsRecurringRoute = createRoute({
  method: 'delete',
  path: '/organisations/{id}/payments/recurring',
  tags: ['all', 'organisations', 'payments'],
  operationId: 'deleteOrganisationsIdPaymentsRecurring',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { 200: { description: 'deleteRecurrentPayment' } },
})

export const getPasswordForgottenRoute = createRoute({
  method: 'get',
  path: '/password_forgotten',
  tags: ['all', 'password_forgotten'],
  operationId: 'getPasswordForgotten',
  responses: { 200: { description: 'getPasswordForgottenForm' } },
})

export const postPasswordForgottenRoute = createRoute({
  method: 'post',
  path: '/password_forgotten',
  tags: ['all', 'password_forgotten'],
  operationId: 'postPasswordForgotten',
  request: {
    query: z.object({
      login: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'login', required: false, schema: { type: 'string' } },
        }),
      drop_tokens: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'drop_tokens', required: false, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      TesterPass: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'header', name: 'TesterPass', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'askForPasswordResetViaForm' } },
})

export const getPasswordForgottenKeyRoute = createRoute({
  method: 'get',
  path: '/password_forgotten/{key}',
  tags: ['all', 'password_forgotten'],
  operationId: 'getPasswordForgottenKey',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: { in: 'path', name: 'key', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'confirmPasswordResetRequest' } },
})

export const postPasswordForgottenKeyRoute = createRoute({
  method: 'post',
  path: '/password_forgotten/{key}',
  tags: ['all', 'password_forgotten'],
  operationId: 'postPasswordForgottenKey',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: { in: 'path', name: 'key', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      pass: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'pass', required: false, schema: { type: 'string' } },
        }),
      pass2: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'pass2', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'resetPasswordForgotten' } },
})

export const getPaymentsAssetsPayButtonTokenButtonPngRoute = createRoute({
  method: 'get',
  path: '/payments/assets/pay_button/{token}/button.png',
  tags: ['all', 'payments'],
  request: {
    params: z.object({
      token: z
        .string()
        .openapi({
          param: { in: 'path', name: 'token', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'Status 200' } },
})

export const getPaymentsCouponsNameRoute = createRoute({
  method: 'get',
  path: '/payments/coupons/{name}',
  tags: ['all', 'payments'],
  operationId: 'getPaymentsCouponsName',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'name', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'getCoupon' } },
})

export const getPaymentsProvidersRoute = createRoute({
  method: 'get',
  path: '/payments/providers',
  tags: ['all', 'payments'],
  operationId: 'getPaymentsProviders',
  responses: {
    200: {
      description: 'getAvailablePaymentProviders',
      content: { 'application/json': { schema: z.array(PaymentProviderSchema) } },
    },
  },
})

export const getPaymentsTokensStripeRoute = createRoute({
  method: 'get',
  path: '/payments/tokens/stripe',
  tags: ['all', 'payments'],
  operationId: 'getPaymentsTokensStripe',
  responses: { 200: { description: 'getStripeToken' } },
})

export const postPaymentsBidEndStripeRoute = createRoute({
  method: 'post',
  path: '/payments/{bid}/end/stripe',
  tags: ['all', 'payments'],
  request: {
    params: z.object({
      bid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'bid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'endPaymentWithStripe' } },
})

export const getProductsAddonprovidersRoute = createRoute({
  method: 'get',
  path: '/products/addonproviders',
  tags: ['all', 'products'],
  operationId: 'getProductsAddonProviders',
  responses: {
    200: {
      description: 'getAddonProviders',
      content: { 'application/json': { schema: z.array(ProviderSchema) } },
    },
  },
})

export const getProductsAddonprovidersProviderIdRoute = createRoute({
  method: 'get',
  path: '/products/addonproviders/{provider_id}',
  tags: ['all', 'products'],
  operationId: 'getProductsAddonProvidersProviderId',
  request: {
    params: z.object({
      provider_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'provider_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'getAddonProvider',
      content: { 'application/json': { schema: ProviderSchema } },
    },
  },
})

export const getProductsAddonprovidersProviderIdVersionsRoute = createRoute({
  method: 'get',
  path: '/products/addonproviders/{provider_id}/versions',
  tags: ['all', 'products'],
  request: {
    params: z.object({
      provider_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'provider_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'Status 200' } },
})

export const getProductsCountriesRoute = createRoute({
  method: 'get',
  path: '/products/countries',
  tags: ['all', 'products'],
  operationId: 'getProductsCountries',
  responses: {
    200: {
      description: 'getCountries',
      content: { 'application/json': { schema: CountrySchema } },
    },
  },
})

export const getProductsCountrycodesRoute = createRoute({
  method: 'get',
  path: '/products/countrycodes',
  tags: ['all', 'products'],
  operationId: 'getProductsCountrycodes',
  responses: {
    200: {
      description: 'getCountryCodes',
      content: { 'application/json': { schema: CountrySchema } },
    },
  },
})

export const getProductsInstancesRoute = createRoute({
  method: 'get',
  path: '/products/instances',
  tags: ['all', 'products'],
  operationId: 'getProductsInstances',
  request: {
    query: z.object({
      for: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'for', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'getAvailableInstances',
      content: { 'application/json': { schema: z.array(InstanceSchema) } },
    },
  },
})

export const getProductsInstancesTypeVersionRoute = createRoute({
  method: 'get',
  path: '/products/instances/{type}-{version}',
  tags: ['all', 'products'],
  operationId: 'getProductsInstancesTypeVersion',
  request: {
    params: z.object({
      type: z
        .string()
        .openapi({
          param: { in: 'path', name: 'type', required: true, schema: { type: 'string' } },
        }),
      version: z
        .string()
        .openapi({
          param: { in: 'path', name: 'version', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      for: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'for', required: false, schema: { type: 'string' } },
        }),
      app: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'app', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'getAvailableInstance',
      content: { 'application/json': { schema: InstanceSchema } },
    },
  },
})

export const getProductsMfaKindsRoute = createRoute({
  method: 'get',
  path: '/products/mfa_kinds',
  tags: ['all', 'products'],
  responses: { 200: { description: 'Status 200' } },
})

export const getProductsPackagesRoute = createRoute({
  method: 'get',
  path: '/products/packages',
  tags: ['all', 'products'],
  operationId: 'getProductsPackages',
  request: {
    query: z.object({
      coupon: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'coupon', required: false, schema: { type: 'string' } },
        }),
      orgaId: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'orgaId', required: false, schema: { type: 'string' } },
        }),
      currency: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'currency', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'getAvailablePackages' } },
})

export const getProductsPricesRoute = createRoute({
  method: 'get',
  path: '/products/prices',
  tags: ['all', 'products'],
  operationId: 'getProductsPrices',
  responses: { 200: { description: 'getExchangeRates' } },
})

export const getProductsZonesRoute = createRoute({
  method: 'get',
  path: '/products/zones',
  tags: ['all', 'products'],
  operationId: 'getProductsZones',
  responses: {
    200: {
      description: 'getZones',
      content: { 'application/json': { schema: z.array(ZoneSchema) } },
    },
  },
})

export const getSelfRoute = createRoute({
  method: 'get',
  path: '/self',
  tags: ['all', 'self'],
  description: 'Get information about yourself',
  operationId: 'getSelf',
  responses: {
    200: { description: 'getUser', content: { 'application/json': { schema: UserSchema } } },
  },
})

export const putSelfRoute = createRoute({
  method: 'put',
  path: '/self',
  tags: ['all', 'self'],
  operationId: 'putSelf',
  request: { body: WannabeUserRequestBody },
  responses: { 200: { description: 'editUser' } },
})

export const deleteSelfRoute = createRoute({
  method: 'delete',
  path: '/self',
  tags: ['all', 'self'],
  operationId: 'deleteSelf',
  responses: { 200: { description: 'deleteUser' } },
})

export const getSelfAddonsRoute = createRoute({
  method: 'get',
  path: '/self/addons',
  tags: ['all', 'addons', 'self'],
  summary: 'Addon',
  description: 'Get all the addons',
  operationId: 'getSelfAddons',
  responses: {
    200: {
      description: 'getAddons',
      content: { 'application/json': { schema: z.array(AddonSchema) } },
    },
  },
})

export const postSelfAddonsRoute = createRoute({
  method: 'post',
  path: '/self/addons',
  tags: ['all', 'addons', 'self'],
  operationId: 'postSelfAddons',
  request: { body: WannabeAddonRequestBody },
  responses: { 200: { description: 'provisionAddon' } },
})

export const postSelfAddonsPreordersRoute = createRoute({
  method: 'post',
  path: '/self/addons/preorders',
  tags: ['all', 'addons', 'self'],
  request: { body: WannabeAddonRequestBody },
  responses: { 200: { description: 'Status 200' } },
})

export const getSelfAddonsAddonIdRoute = createRoute({
  method: 'get',
  path: '/self/addons/{addonId}',
  tags: ['all', 'addons', 'self'],
  summary: 'Specific addon',
  description: 'Get a specific addon',
  operationId: 'getSelfAddonsAddonId',
  request: {
    params: z.object({
      addonId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'addonId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'getAddon', content: { 'application/json': { schema: AddonSchema } } },
  },
})

export const putSelfAddonsAddonIdRoute = createRoute({
  method: 'put',
  path: '/self/addons/{addonId}',
  tags: ['all', 'addons', 'self'],
  operationId: 'putSelfAddonsAddonId',
  request: {
    params: z.object({
      addonId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'addonId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: WannabeAddonRequestBody,
  },
  responses: { 200: { description: 'Update addon informations' } },
})

export const deleteSelfAddonsAddonIdRoute = createRoute({
  method: 'delete',
  path: '/self/addons/{addonId}',
  tags: ['all', 'addons', 'self'],
  operationId: 'deleteSelfAddonsAddonId',
  request: {
    params: z.object({
      addonId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'addonId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'deprovisionAddon' } },
})

export const getSelfAddonsAddonIdApplicationsRoute = createRoute({
  method: 'get',
  path: '/self/addons/{addonId}/applications',
  tags: ['all', 'addons', 'applications', 'self'],
  operationId: 'getSelfAddonsAddonIdApplications',
  request: {
    params: z.object({
      addonId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'addonId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'getApplicationsLinkedToAddon',
      content: { 'application/json': { schema: z.array(ApplicationSchema) } },
    },
  },
})

export const getSelfAddonsAddonIdEnvRoute = createRoute({
  method: 'get',
  path: '/self/addons/{addonId}/env',
  tags: ['all', 'addons', 'self'],
  operationId: 'getSelfAddonsAddonIdEnv',
  request: {
    params: z.object({
      addonId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'addonId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'getAddonEnv',
      content: { 'application/json': { schema: z.array(ListEnvSchema) } },
    },
  },
})

export const putSelfAddonsAddonIdPlanRoute = createRoute({
  method: 'put',
  path: '/self/addons/{addonId}/plan',
  tags: ['all', 'addons', 'self'],
  operationId: 'putSelfAddonsAddonIdPlan',
  request: {
    params: z.object({
      addonId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'addonId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: WannabePlanRequestBody,
  },
  responses: { 200: { description: 'Update plan of an add-on.' } },
})

export const getSelfAddonsAddonIdSsoRoute = createRoute({
  method: 'get',
  path: '/self/addons/{addonId}/sso',
  tags: ['all', 'addons', 'self'],
  operationId: 'getSelfAddonsAddonIdSso',
  request: {
    params: z.object({
      addonId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'addonId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'getSSOData', content: { 'application/json': { schema: SsoSchema } } },
  },
})

export const getSelfAddonsAddonIdTagsRoute = createRoute({
  method: 'get',
  path: '/self/addons/{addonId}/tags',
  tags: ['all', 'addons', 'self'],
  operationId: 'getSelfAddonsAddonIdTags',
  request: {
    params: z.object({
      addonId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'addonId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'getAddonTags', content: { '*/*': { schema: z.array(z.string()) } } },
  },
})

export const putSelfAddonsAddonIdTagsTagRoute = createRoute({
  method: 'put',
  path: '/self/addons/{addonId}/tags/{tag}',
  tags: ['all', 'addons', 'self'],
  operationId: 'putSelfAddonsAddonIdTagsTag',
  request: {
    params: z.object({
      tag: z
        .string()
        .openapi({
          param: { in: 'path', name: 'tag', required: true, schema: { type: 'string' } },
        }),
      addonId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'addonId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: BodyRequestBody,
  },
  responses: { 200: { description: 'addAddonTag' } },
})

export const deleteSelfAddonsAddonIdTagsTagRoute = createRoute({
  method: 'delete',
  path: '/self/addons/{addonId}/tags/{tag}',
  tags: ['all', 'addons', 'self'],
  operationId: 'deleteSelfAddonsAddonIdTagsTag',
  request: {
    params: z.object({
      tag: z
        .string()
        .openapi({
          param: { in: 'path', name: 'tag', required: true, schema: { type: 'string' } },
        }),
      addonId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'addonId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'deleteAddonTag' } },
})

export const getSelfApplicationsRoute = createRoute({
  method: 'get',
  path: '/self/applications',
  tags: ['all', 'applications', 'self'],
  operationId: 'getSelfApplications',
  responses: {
    200: {
      description: 'getApplications',
      content: { 'application/json': { schema: z.array(ApplicationSchema) } },
    },
  },
})

export const postSelfApplicationsRoute = createRoute({
  method: 'post',
  path: '/self/applications',
  tags: ['all', 'applications', 'self'],
  description:
    'Creates an application. If you want to create a Github app, you need to replace the oauthApp field with what you will find here: https://github.com/CleverCloud/doc.clever-cloud.com/issues/179',
  operationId: 'postSelfApplications',
  request: { body: WannabeApplicationRequestBody },
  responses: { 200: { description: 'addApplication' } },
})

export const getSelfApplicationsAppIdRoute = createRoute({
  method: 'get',
  path: '/self/applications/{appId}',
  tags: ['all', 'applications', 'self'],
  operationId: 'getSelfApplicationsAppId',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'getApplication',
      content: { 'application/json': { schema: ApplicationSchema } },
    },
  },
})

export const putSelfApplicationsAppIdRoute = createRoute({
  method: 'put',
  path: '/self/applications/{appId}',
  tags: ['all', 'applications', 'self'],
  operationId: 'putSelfApplicationsAppId',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: WannabeApplicationRequestBody,
  },
  responses: { 200: { description: 'editApplication' } },
})

export const deleteSelfApplicationsAppIdRoute = createRoute({
  method: 'delete',
  path: '/self/applications/{appId}',
  tags: ['all', 'applications', 'self'],
  operationId: 'deleteSelfApplicationsAppId',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'deleteApplication' } },
})

export const getSelfApplicationsAppIdAddonsRoute = createRoute({
  method: 'get',
  path: '/self/applications/{appId}/addons',
  tags: ['all', 'addons', 'applications', 'self'],
  operationId: 'getSelfApplicationsAppIdAddons',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'getAddonsLinkedToApplication',
      content: { 'application/json': { schema: z.array(AddonSchema) } },
    },
  },
})

export const postSelfApplicationsAppIdAddonsRoute = createRoute({
  method: 'post',
  path: '/self/applications/{appId}/addons',
  tags: ['all', 'addons', 'applications', 'self'],
  operationId: 'postSelfApplicationsAppIdAddons',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: BodyRequestBody,
  },
  responses: { 200: { description: 'linkAddonToApplication' } },
})

export const getSelfApplicationsAppIdAddonsEnvRoute = createRoute({
  method: 'get',
  path: '/self/applications/{appId}/addons/env',
  tags: ['all', 'addons', 'applications', 'self'],
  operationId: 'getSelfApplicationsAppIdAddonsEnv',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'getEnvOfAddonsLinkedToApplication',
      content: { 'application/json': { schema: z.array(EnvSchema) } },
    },
  },
})

export const deleteSelfApplicationsAppIdAddonsAddonIdRoute = createRoute({
  method: 'delete',
  path: '/self/applications/{appId}/addons/{addonId}',
  tags: ['all', 'addons', 'applications', 'self'],
  operationId: 'deleteSelfApplicationsAppIdAddonsAddonId',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
      addonId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'addonId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'unlinkAddonFromApplication' } },
})

export const putSelfApplicationsAppIdBranchRoute = createRoute({
  method: 'put',
  path: '/self/applications/{appId}/branch',
  tags: ['all', 'applications', 'self'],
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'Status 200' } },
})

export const getSelfApplicationsAppIdBranchesRoute = createRoute({
  method: 'get',
  path: '/self/applications/{appId}/branches',
  tags: ['all', 'applications', 'self'],
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'Status 200' } },
})

export const putSelfApplicationsAppIdBuildflavorRoute = createRoute({
  method: 'put',
  path: '/self/applications/{appId}/buildflavor',
  tags: ['all', 'applications', 'self'],
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'Status 200' } },
})

export const getSelfApplicationsAppIdDependenciesRoute = createRoute({
  method: 'get',
  path: '/self/applications/{appId}/dependencies',
  tags: ['all', 'applications', 'self'],
  operationId: 'getSelfApplicationsAppIdDependencies',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'getApplicationDependencies',
      content: { 'application/json': { schema: z.array(ApplicationSchema) } },
    },
  },
})

export const getSelfApplicationsAppIdDependenciesEnvRoute = createRoute({
  method: 'get',
  path: '/self/applications/{appId}/dependencies/env',
  tags: ['all', 'applications', 'self'],
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get env variables defined by application dependencies',
      content: { '*/*': { schema: z.array(LinkedAppEnvSchema) } },
    },
  },
})

export const putSelfApplicationsAppIdDependenciesDependencyIdRoute = createRoute({
  method: 'put',
  path: '/self/applications/{appId}/dependencies/{dependencyId}',
  tags: ['all', 'applications', 'self'],
  operationId: 'getSelfApplicationsAppIdDependenciesDependencyId',
  request: {
    params: z.object({
      dependencyId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'dependencyId', required: true, schema: { type: 'string' } },
        }),
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: WannabeApplicationRequestBody,
  },
  responses: { 200: { description: 'addApplicationDependency' } },
})

export const deleteSelfApplicationsAppIdDependenciesDependencyIdRoute = createRoute({
  method: 'delete',
  path: '/self/applications/{appId}/dependencies/{dependencyId}',
  tags: ['all', 'applications', 'self'],
  operationId: 'deleteSelfApplicationsAppIdDependenciesDependencyId',
  request: {
    params: z.object({
      dependencyId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'dependencyId', required: true, schema: { type: 'string' } },
        }),
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'deleteApplicationDependency' } },
})

export const getSelfApplicationsAppIdDependentsRoute = createRoute({
  method: 'get',
  path: '/self/applications/{appId}/dependents',
  tags: ['all', 'applications', 'self'],
  operationId: 'getSelfApplicationsAppIdDependents',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'getApplicationDependents',
      content: { 'application/json': { schema: z.array(ApplicationSchema) } },
    },
  },
})

export const getSelfApplicationsAppIdDeploymentsRoute = createRoute({
  method: 'get',
  path: '/self/applications/{appId}/deployments',
  tags: ['all', 'applications', 'self'],
  operationId: 'getSelfApplicationsAppIdDeployments',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'limit', required: false, schema: { type: 'string' } },
        }),
      offset: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'offset', required: false, schema: { type: 'string' } },
        }),
      action: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'action', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'getApplicationDeployments',
      content: { 'application/json': { schema: z.array(DeploymentSchema) } },
    },
  },
})

export const getSelfApplicationsAppIdDeploymentsDeploymentIdRoute = createRoute({
  method: 'get',
  path: '/self/applications/{appId}/deployments/{deploymentId}',
  tags: ['all', 'applications', 'self'],
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
      deploymentId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'deploymentId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'Status 200' } },
})

export const deleteSelfApplicationsAppIdDeploymentsDeploymentIdInstancesRoute = createRoute({
  method: 'delete',
  path: '/self/applications/{appId}/deployments/{deploymentId}/instances',
  tags: ['all', 'applications', 'self'],
  operationId: 'deleteSelfApplicationsAppIdDeploymentsDeploymentIdInstances',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
      deploymentId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'deploymentId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'cancelDeploy' } },
})

export const getSelfApplicationsAppIdEnvRoute = createRoute({
  method: 'get',
  path: '/self/applications/{appId}/env',
  tags: ['all', 'applications', 'self'],
  operationId: 'getSelfApplicationsAppIdEnv',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'editApplicationEnv',
      content: { 'application/json': { schema: z.array(ListEnvSchema) } },
    },
  },
})

export const putSelfApplicationsAppIdEnvRoute = createRoute({
  method: 'put',
  path: '/self/applications/{appId}/env',
  tags: ['all', 'applications', 'self'],
  operationId: 'putSelfApplicationsAppIdEnv',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: WannabeEnvRequestBody,
  },
  responses: { 200: { description: 'editApplicationEnvironment' } },
})

export const putSelfApplicationsAppIdEnvEnvNameRoute = createRoute({
  method: 'put',
  path: '/self/applications/{appId}/env/{envName}',
  tags: ['all', 'applications', 'self'],
  operationId: 'putSelfApplicationsAppIdEnvEnvName',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
      envName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'envName', required: true, schema: { type: 'string' } },
        }),
    }),
    body: WannabeEnvRequestBody,
  },
  responses: { 200: { description: 'editApplicationEnv' } },
})

export const deleteSelfApplicationsAppIdEnvEnvNameRoute = createRoute({
  method: 'delete',
  path: '/self/applications/{appId}/env/{envName}',
  tags: ['all', 'applications', 'self'],
  operationId: 'deleteSelfApplicationsAppIdEnvEnvName',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
      envName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'envName', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'removeApplicationEnv' } },
})

export const getSelfApplicationsAppIdExposedEnvRoute = createRoute({
  method: 'get',
  path: '/self/applications/{appId}/exposed_env',
  tags: ['all', 'applications', 'self'],
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'Status 200' } },
})

export const putSelfApplicationsAppIdExposedEnvRoute = createRoute({
  method: 'put',
  path: '/self/applications/{appId}/exposed_env',
  tags: ['all', 'applications', 'self'],
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'Status 200' } },
})

export const getSelfApplicationsAppIdInstancesRoute = createRoute({
  method: 'get',
  path: '/self/applications/{appId}/instances',
  tags: ['all', 'applications', 'self'],
  operationId: 'getSelfApplicationsAppIdInstances',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'getApplicationInstances',
      content: { 'application/json': { schema: z.array(InstanceSchema) } },
    },
  },
})

export const postSelfApplicationsAppIdInstancesRoute = createRoute({
  method: 'post',
  path: '/self/applications/{appId}/instances',
  tags: ['all', 'applications', 'self'],
  operationId: 'postSelfApplicationsAppIdInstances',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      commit: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'commit', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'redeployApplication' } },
})

export const deleteSelfApplicationsAppIdInstancesRoute = createRoute({
  method: 'delete',
  path: '/self/applications/{appId}/instances',
  tags: ['all', 'applications', 'self'],
  operationId: 'deleteSelfApplicationsAppIdInstances',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'undeployApplication' } },
})

export const getSelfApplicationsAppIdInstancesInstanceIdRoute = createRoute({
  method: 'get',
  path: '/self/applications/{appId}/instances/{instanceId}',
  tags: ['all', 'applications', 'self'],
  request: {
    params: z.object({
      instanceId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'instanceId', required: true, schema: { type: 'string' } },
        }),
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'Status 200' } },
})

export const getSelfApplicationsAppIdTagsRoute = createRoute({
  method: 'get',
  path: '/self/applications/{appId}/tags',
  tags: ['all', 'applications', 'self'],
  operationId: 'getSelfApplicationsAppIdTags',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'getApplicationTags', content: { '*/*': { schema: z.array(z.string()) } } },
  },
})

export const putSelfApplicationsAppIdTagsTagRoute = createRoute({
  method: 'put',
  path: '/self/applications/{appId}/tags/{tag}',
  tags: ['all', 'applications', 'self'],
  operationId: 'putSelfApplicationsAppIdTagsTag',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
      tag: z
        .string()
        .openapi({
          param: { in: 'path', name: 'tag', required: true, schema: { type: 'string' } },
        }),
    }),
    body: BodyRequestBody,
  },
  responses: { 200: { description: 'addApplicationTag' } },
})

export const deleteSelfApplicationsAppIdTagsTagRoute = createRoute({
  method: 'delete',
  path: '/self/applications/{appId}/tags/{tag}',
  tags: ['all', 'applications', 'self'],
  operationId: 'deleteSelfApplicationsAppIdTagsTag',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
      tag: z
        .string()
        .openapi({
          param: { in: 'path', name: 'tag', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'deleteApplicationTag' } },
})

export const getSelfApplicationsAppIdVhostsRoute = createRoute({
  method: 'get',
  path: '/self/applications/{appId}/vhosts',
  tags: ['all', 'applications', 'self'],
  operationId: 'getSelfApplicationsAppIdVhosts',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'getVhosts',
      content: { 'application/json': { schema: z.array(VhostSchema) } },
    },
  },
})

export const getSelfApplicationsAppIdVhostsFavouriteRoute = createRoute({
  method: 'get',
  path: '/self/applications/{appId}/vhosts/favourite',
  tags: ['all', 'applications', 'self'],
  operationId: 'getSelfApplicationsAppIdVhostsFavourite',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'getFavouriteVhost',
      content: { 'application/json': { schema: VhostSchema } },
    },
  },
})

export const putSelfApplicationsAppIdVhostsFavouriteRoute = createRoute({
  method: 'put',
  path: '/self/applications/{appId}/vhosts/favourite',
  tags: ['all', 'applications', 'self'],
  operationId: 'putSelfApplicationsAppIdVhostsFavourite',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: VhostRequestBody,
  },
  responses: { 200: { description: 'markFavouriteVhost' } },
})

export const deleteSelfApplicationsAppIdVhostsFavouriteRoute = createRoute({
  method: 'delete',
  path: '/self/applications/{appId}/vhosts/favourite',
  tags: ['all', 'applications', 'self'],
  operationId: 'deleteSelfApplicationsAppIdVhostsFavourite',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'unmarkFavouriteVhost' } },
})

export const putSelfApplicationsAppIdVhostsDomainRoute = createRoute({
  method: 'put',
  path: '/self/applications/{appId}/vhosts/{domain}',
  tags: ['all', 'applications', 'self'],
  operationId: 'putSelfApplicationsAppIdVhostsDomain',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
      domain: z
        .string()
        .openapi({
          param: { in: 'path', name: 'domain', required: true, schema: { type: 'string' } },
        }),
    }),
    body: VhostRequestBody,
  },
  responses: { 200: { description: 'addVhost' } },
})

export const deleteSelfApplicationsAppIdVhostsDomainRoute = createRoute({
  method: 'delete',
  path: '/self/applications/{appId}/vhosts/{domain}',
  tags: ['all', 'applications', 'self'],
  operationId: 'deleteSelfApplicationsAppIdVhostsDomain',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appId', required: true, schema: { type: 'string' } },
        }),
      domain: z
        .string()
        .openapi({
          param: { in: 'path', name: 'domain', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'removeVhost' } },
})

export const putSelfAvatarRoute = createRoute({
  method: 'put',
  path: '/self/avatar',
  tags: ['all', 'self'],
  operationId: 'putSelfAvatar',
  request: { body: { content: { 'application/json': { schema: AvatarSchema } }, required: true } },
  responses: { 200: { description: 'setUserAvatar\nsetUserAvatarFromSource' } },
})

export const putSelfChangePasswordRoute = createRoute({
  method: 'put',
  path: '/self/change_password',
  tags: ['all', 'self'],
  operationId: 'putSelfChangePassword',
  responses: {
    200: {
      description: 'changeUserPassword',
      content: { 'application/json': { schema: ChangePasswordSchema } },
    },
  },
})

export const getSelfCliTokensRoute = createRoute({
  method: 'get',
  path: '/self/cli_tokens',
  tags: ['all', 'self'],
  request: {
    query: z.object({
      cli_token: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'cli_token', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'Status 200' } },
})

export const getSelfConfirmationEmailRoute = createRoute({
  method: 'get',
  path: '/self/confirmation_email',
  tags: ['all', 'self'],
  operationId: 'getSelfConfirmationEmail',
  responses: { 200: { description: 'getConfirmationEmail' } },
})

export const getSelfConsumersRoute = createRoute({
  method: 'get',
  path: '/self/consumers',
  tags: ['all', 'self'],
  operationId: 'getSelfConsumers',
  responses: {
    200: {
      description: 'getConsumers',
      content: { 'application/json': { schema: z.array(ConsumerSchema) } },
    },
  },
})

export const postSelfConsumersRoute = createRoute({
  method: 'post',
  path: '/self/consumers',
  tags: ['all', 'self'],
  operationId: 'postSelfConsumers',
  request: { body: WannabeConsumerRequestBody },
  responses: { 200: { description: 'createConsumer' } },
})

export const getSelfConsumersKeyRoute = createRoute({
  method: 'get',
  path: '/self/consumers/{key}',
  tags: ['all', 'self'],
  operationId: 'getSelfConsumersKey',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: { in: 'path', name: 'key', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'getConsumer',
      content: { 'application/json': { schema: ConsumerSchema } },
    },
  },
})

export const putSelfConsumersKeyRoute = createRoute({
  method: 'put',
  path: '/self/consumers/{key}',
  tags: ['all', 'self'],
  operationId: 'putSelfConsumersKey',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: { in: 'path', name: 'key', required: true, schema: { type: 'string' } },
        }),
    }),
    body: WannabeConsumerRequestBody,
  },
  responses: { 200: { description: 'PUT same consumer data as in POST.' } },
})

export const deleteSelfConsumersKeyRoute = createRoute({
  method: 'delete',
  path: '/self/consumers/{key}',
  tags: ['all', 'self'],
  operationId: 'deleteSelfConsumersKey',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: { in: 'path', name: 'key', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'deleteConsumer' } },
})

export const getSelfConsumersKeySecretRoute = createRoute({
  method: 'get',
  path: '/self/consumers/{key}/secret',
  tags: ['all', 'self'],
  operationId: 'getSelfConsumersKeySecret',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: { in: 'path', name: 'key', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'getConsumerSecret',
      content: { 'application/json': { schema: SecretSchema } },
    },
  },
})

export const getSelfConsumptionsRoute = createRoute({
  method: 'get',
  path: '/self/consumptions',
  tags: ['all', 'self'],
  operationId: 'getSelfConsumptions',
  request: {
    query: z.object({
      appId: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'appId', required: false, schema: { type: 'string' } },
        }),
      from: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'from', required: false, schema: { type: 'string' } },
        }),
      to: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'to', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'getConsumptions',
      content: { 'application/json': { schema: ConsoSchema } },
    },
  },
})

export const getSelfCreditsRoute = createRoute({
  method: 'get',
  path: '/self/credits',
  tags: ['all', 'self'],
  operationId: 'getSelfCredits',
  responses: {
    200: { description: 'getAmount', content: { 'application/json': { schema: CreditsSchema } } },
  },
})

export const getSelfEmailsRoute = createRoute({
  method: 'get',
  path: '/self/emails',
  tags: ['all', 'self'],
  operationId: 'getSelfEmails',
  responses: {
    200: { description: 'getEmailAddresses', content: { '*/*': { schema: z.array(z.string()) } } },
  },
})

export const putSelfEmailsEmailRoute = createRoute({
  method: 'put',
  path: '/self/emails/{email}',
  tags: ['all', 'self'],
  operationId: 'putSelfEmailsEmail',
  request: {
    params: z.object({
      email: z
        .string()
        .openapi({
          param: { in: 'path', name: 'email', required: true, schema: { type: 'string' } },
        }),
    }),
    body: BodyRequestBody,
  },
  responses: { 200: { description: 'addEmailAddress' } },
})

export const deleteSelfEmailsEmailRoute = createRoute({
  method: 'delete',
  path: '/self/emails/{email}',
  tags: ['all', 'self'],
  operationId: 'deleteSelfEmailsEmail',
  request: {
    params: z.object({
      email: z
        .string()
        .openapi({
          param: { in: 'path', name: 'email', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'removeEmailAddress' } },
})

export const getSelfIdRoute = createRoute({
  method: 'get',
  path: '/self/id',
  tags: ['all', 'self'],
  operationId: 'getSelfId',
  responses: { 200: { description: 'getId', content: { '*/*': { schema: z.string() } } } },
})

export const getSelfInstancesRoute = createRoute({
  method: 'get',
  path: '/self/instances',
  tags: ['all', 'self'],
  operationId: 'getSelfInstances',
  responses: {
    200: {
      description: 'getInstancesForAllApps',
      content: { 'application/json': { schema: z.array(InstanceSchema) } },
    },
  },
})

export const getSelfKeysRoute = createRoute({
  method: 'get',
  path: '/self/keys',
  tags: ['all', 'self'],
  operationId: 'getSelfKeys',
  responses: {
    200: {
      description: 'getSshKeys',
      content: { 'application/json': { schema: z.array(KeySchema) } },
    },
  },
})

export const putSelfKeysKeyRoute = createRoute({
  method: 'put',
  path: '/self/keys/{key}',
  tags: ['all', 'self'],
  operationId: 'putSelfKeysKey',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: { in: 'path', name: 'key', required: true, schema: { type: 'string' } },
        }),
    }),
    body: BodyRequestBody,
  },
  responses: { 200: { description: 'addSshKey' } },
})

export const deleteSelfKeysKeyRoute = createRoute({
  method: 'delete',
  path: '/self/keys/{key}',
  tags: ['all', 'self'],
  operationId: 'deleteSelfKeysKey',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: { in: 'path', name: 'key', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'removeSshKey' } },
})

export const putSelfMfaKindRoute = createRoute({
  method: 'put',
  path: '/self/mfa/{kind}',
  tags: ['all', 'self'],
  request: {
    params: z.object({
      kind: z
        .string()
        .openapi({
          param: { in: 'path', name: 'kind', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'Status 200' } },
})

export const postSelfMfaKindRoute = createRoute({
  method: 'post',
  path: '/self/mfa/{kind}',
  tags: ['all', 'self'],
  request: {
    params: z.object({
      kind: z
        .string()
        .openapi({
          param: { in: 'path', name: 'kind', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'Status 200' } },
})

export const deleteSelfMfaKindRoute = createRoute({
  method: 'delete',
  path: '/self/mfa/{kind}',
  tags: ['all', 'self'],
  request: {
    params: z.object({
      kind: z
        .string()
        .openapi({
          param: { in: 'path', name: 'kind', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'Status 200' } },
})

export const getSelfMfaKindBackupcodesRoute = createRoute({
  method: 'get',
  path: '/self/mfa/{kind}/backupcodes',
  tags: ['all', 'self'],
  request: {
    params: z.object({
      kind: z
        .string()
        .openapi({
          param: { in: 'path', name: 'kind', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'Status 200' } },
})

export const postSelfMfaKindConfirmationRoute = createRoute({
  method: 'post',
  path: '/self/mfa/{kind}/confirmation',
  tags: ['all', 'self'],
  request: {
    params: z.object({
      kind: z
        .string()
        .openapi({
          param: { in: 'path', name: 'kind', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'Status 200' } },
})

export const getSelfPaymentInfoRoute = createRoute({
  method: 'get',
  path: '/self/payment-info',
  tags: ['all', 'self'],
  operationId: 'getSelfPaymentInfo',
  responses: { 200: { description: 'getPaymentInfo' } },
})

export const getSelfPaymentsBillingsRoute = createRoute({
  method: 'get',
  path: '/self/payments/billings',
  tags: ['all', 'payments', 'self'],
  operationId: 'getSelfPaymentsBillings',
  responses: { 200: { description: 'getInvoices' } },
})

export const postSelfPaymentsBillingsRoute = createRoute({
  method: 'post',
  path: '/self/payments/billings',
  tags: ['all', 'payments', 'self'],
  operationId: 'postSelfPaymentsBillings',
  responses: { 200: { description: 'buyDrops' } },
})

export const getSelfPaymentsBillingsBidRoute = createRoute({
  method: 'get',
  path: '/self/payments/billings/{bid}',
  tags: ['all', 'payments', 'self'],
  operationId: 'getSelfPaymentsBillingsBid',
  request: {
    params: z.object({
      bid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'bid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'getInvoice' } },
})

export const putSelfPaymentsBillingsBidRoute = createRoute({
  method: 'put',
  path: '/self/payments/billings/{bid}',
  tags: ['all', 'payments', 'self'],
  operationId: 'putSelfPaymentsBillingsBid',
  request: {
    params: z.object({
      bid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'bid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'choosePaymentProvider' } },
})

export const deleteSelfPaymentsBillingsBidRoute = createRoute({
  method: 'delete',
  path: '/self/payments/billings/{bid}',
  tags: ['all', 'payments', 'self'],
  operationId: 'deleteSelfPaymentsBillingsBid',
  request: {
    params: z.object({
      bid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'bid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'deletePurchaseOrder' } },
})

export const getSelfPaymentsBillingsBidPdfRoute = createRoute({
  method: 'get',
  path: '/self/payments/billings/{bid}.pdf',
  tags: ['all', 'payments', 'self'],
  operationId: 'getSelfPaymentsBillingsBidPdf',
  request: {
    params: z.object({
      bid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'bid', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'token', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'getPdfInvoice' } },
})

export const getSelfPaymentsFullpricePriceRoute = createRoute({
  method: 'get',
  path: '/self/payments/fullprice/{price}',
  tags: ['all', 'payments', 'self'],
  operationId: 'getSelfPaymentsFullpricePrice',
  request: {
    params: z.object({
      price: z
        .string()
        .openapi({
          param: { in: 'path', name: 'price', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'priceWithTax' } },
})

export const getSelfPaymentsMethodsRoute = createRoute({
  method: 'get',
  path: '/self/payments/methods',
  tags: ['all', 'payments', 'self'],
  operationId: 'getSelfPaymentsMethods',
  responses: { 200: { description: 'getUserPaymentMethods' } },
})

export const postSelfPaymentsMethodsRoute = createRoute({
  method: 'post',
  path: '/self/payments/methods',
  tags: ['all', 'payments', 'self'],
  operationId: 'postSelfPaymentsMethods',
  responses: { 200: { description: 'addUserMethod' } },
})

export const getSelfPaymentsMethodsDefaultRoute = createRoute({
  method: 'get',
  path: '/self/payments/methods/default',
  tags: ['all', 'payments', 'self'],
  responses: { 200: { description: 'Status 200' } },
})

export const putSelfPaymentsMethodsDefaultRoute = createRoute({
  method: 'put',
  path: '/self/payments/methods/default',
  tags: ['all', 'payments', 'self'],
  responses: { 200: { description: 'Status 200' } },
})

export const deleteSelfPaymentsMethodsMIdRoute = createRoute({
  method: 'delete',
  path: '/self/payments/methods/{mId}',
  tags: ['all', 'payments', 'self'],
  operationId: 'deleteSelfPaymentsMethodsMId',
  request: {
    params: z.object({
      mId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'mId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'deleteUserCard' } },
})

export const getSelfPaymentsMonthlyinvoiceRoute = createRoute({
  method: 'get',
  path: '/self/payments/monthlyinvoice',
  tags: ['all', 'payments', 'self'],
  responses: { 200: { description: 'Status 200' } },
})

export const putSelfPaymentsMonthlyinvoiceMaxcreditRoute = createRoute({
  method: 'put',
  path: '/self/payments/monthlyinvoice/maxcredit',
  tags: ['all', 'payments', 'self'],
  responses: { 200: { description: 'Status 200' } },
})

export const getSelfPaymentsRecurringRoute = createRoute({
  method: 'get',
  path: '/self/payments/recurring',
  tags: ['all', 'payments', 'self'],
  responses: { 200: { description: 'Status 200' } },
})

export const deleteSelfPaymentsRecurringRoute = createRoute({
  method: 'delete',
  path: '/self/payments/recurring',
  tags: ['all', 'payments', 'self'],
  operationId: 'deleteSelfPaymentsRecurring',
  responses: { 200: { description: 'deleteRecurrentPayment' } },
})

export const getSelfPaymentsTokensStripeRoute = createRoute({
  method: 'get',
  path: '/self/payments/tokens/stripe',
  tags: ['all', 'payments', 'self'],
  responses: { 200: { description: 'Status 200' } },
})

export const getSelfTokensRoute = createRoute({
  method: 'get',
  path: '/self/tokens',
  tags: ['all', 'self'],
  operationId: 'getSelfTokens',
  responses: {
    200: {
      description: 'getSelfTokens',
      content: { 'application/json': { schema: z.array(TokenSchema) } },
    },
  },
})

export const deleteSelfTokensRoute = createRoute({
  method: 'delete',
  path: '/self/tokens',
  tags: ['all', 'self'],
  operationId: 'deleteSelfTokens',
  responses: { 200: { description: 'revokeAllTokens' } },
})

export const deleteSelfTokensTokenRoute = createRoute({
  method: 'delete',
  path: '/self/tokens/{token}',
  tags: ['all', 'self'],
  operationId: 'deleteSelfTokensToken',
  request: {
    params: z.object({
      token: z
        .string()
        .openapi({
          param: { in: 'path', name: 'token', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'revokeToken' } },
})

export const getSelfValidateEmailRoute = createRoute({
  method: 'get',
  path: '/self/validate_email',
  tags: ['all', 'self'],
  operationId: 'getSelfValidateEmail',
  request: {
    query: z.object({
      validationKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'validationKey',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'validateEmail' } },
})

export const getSummaryRoute = createRoute({
  method: 'get',
  path: '/summary',
  tags: ['all'],
  operationId: 'getSummary',
  responses: {
    200: { description: 'getSummary', content: { 'application/json': { schema: SummarySchema } } },
  },
})

export const postUsersRoute = createRoute({
  method: 'post',
  path: '/users',
  tags: ['all', 'users'],
  operationId: 'postUsers',
  request: {
    query: z.object({
      invitationKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'invitationKey',
            required: false,
            schema: { type: 'string' },
          },
        }),
      addonBetaInvitationKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'addonBetaInvitationKey',
            required: false,
            schema: { type: 'string' },
          },
        }),
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'email', required: false, schema: { type: 'string' } },
        }),
      pass: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'pass', required: false, schema: { type: 'string' } },
        }),
      url_next: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'url_next', required: false, schema: { type: 'string' } },
        }),
      terms: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'terms', required: false, schema: { type: 'string' } },
        }),
    }),
    body: WannabeUserRequestBody,
  },
  responses: { 200: { description: 'createUser\ncreateUserFromForm' } },
})

export const getUsersIdRoute = createRoute({
  method: 'get',
  path: '/users/{id}',
  tags: ['all', 'users'],
  operationId: 'getUsersId',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: { description: 'getUser', content: { 'application/json': { schema: UserSchema } } },
  },
})

export const getUsersIdApplicationsRoute = createRoute({
  method: 'get',
  path: '/users/{id}/applications',
  tags: ['all', 'applications', 'users'],
  operationId: 'getUsersIdApplications',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'getApplications',
      content: { 'application/json': { schema: z.array(ApplicationSchema) } },
    },
  },
})

export const getUsersUserIdGitInfoRoute = createRoute({
  method: 'get',
  path: '/users/{userId}/git-info',
  tags: ['all', 'users'],
  operationId: 'getUsersUserIdGitInfo',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'userId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'getGitInfo' } },
})

export const postV2ProvidersAddonMatomoResourcesRoute = createRoute({
  method: 'post',
  path: '/v2/providers/addon-matomo/resources',
  tags: ['all'],
  summary: 'Create Matomo addon',
  operationId: 'createMatomo',
  request: { body: { content: { '*/*': { schema: ProvisionRequestSchema } } } },
  responses: {
    default: {
      description: 'default response',
      content: { '*/*': { schema: Function1RequestContextFutureRouteResultSchema } },
    },
  },
})

export const deleteV2ProvidersAddonMatomoResourcesMatomoIdRoute = createRoute({
  method: 'delete',
  path: '/v2/providers/addon-matomo/resources/{matomoId}',
  tags: ['all'],
  summary: 'Delete Matomo addon',
  operationId: 'deleteMatomo',
  request: {
    params: z.object({
      matomoId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'matomoId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: DeleteMatomoRequestBody,
  },
  responses: {
    default: {
      description: 'default response',
      content: { '*/*': { schema: Function1RequestContextFutureRouteResultSchema } },
    },
  },
})

export const getV3LogsAppIdRoute = createRoute({
  method: 'get',
  path: '/v3/logs/{appId}',
  tags: ['all', 'logs'],
  description: 'Fetch the logs for a given application',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'appId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { default: { description: '<No description>' } },
})

export const getV3LogsAppIdDrainsRoute = createRoute({
  method: 'get',
  path: '/v3/logs/{appId}/drains',
  tags: ['all', 'logs'],
  description: 'Fetch the logs drains for a given application',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'appId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { default: { description: '<No description>' } },
})

export const postV3LogsAppIdDrainsRoute = createRoute({
  method: 'post',
  path: '/v3/logs/{appId}/drains',
  tags: ['all', 'logs'],
  description: 'Add a log drain for a given application',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'appId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { default: { description: '<No description>' } },
})

export const getV3LogsAppIdDrainsIdOrUrlRoute = createRoute({
  method: 'get',
  path: '/v3/logs/{appId}/drains/:idOrUrl',
  tags: ['all', 'logs'],
  description: 'Fetch the logs drain by id or url for a given application',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'appId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { default: { description: '<No description>' } },
})

export const deleteV3LogsAppIdDrainsIdOrUrlRoute = createRoute({
  method: 'delete',
  path: '/v3/logs/{appId}/drains/:idOrUrl',
  tags: ['all', 'logs'],
  description: 'Delete the logs drain by id or url for a given application',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'appId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { default: { description: '<No description>' } },
})

export const getV3LogsAppIdLogsChunkedRoute = createRoute({
  method: 'get',
  path: '/v3/logs/{appId}/logs-chunked',
  tags: ['all', 'logs'],
  description: 'Retrieve logs as they come through a chunked, never-ending response',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'appId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { default: { description: '<No description>' } },
})

export const getV3LogsAppIdLogsSocketRoute = createRoute({
  method: 'get',
  path: '/v3/logs/{appId}/logs-socket',
  tags: ['all', 'logs'],
  description:
    'Retrieve logs as they come through a websocket connection. To have authorization, you have to send a `{ "message_type": "oauth", "authorization": "oauth authorization string" }` message',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'appId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { default: { description: '<No description>' } },
})

export const getV4AddonProvidersAddonMatomoAddonsMatomoIdRoute = createRoute({
  method: 'get',
  path: '/v4/addon-providers/addon-matomo/addons/{matomoId}',
  tags: ['all', 'addons'],
  summary: 'Get Matomo addon',
  operationId: 'getMatomo',
  request: {
    params: z.object({
      matomoId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'matomoId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: DeleteMatomoRequestBody,
  },
  responses: {
    default: {
      description: 'default response',
      content: { '*/*': { schema: Function1RequestContextFutureRouteResultSchema } },
    },
  },
})

export const getV4AddonProvidersAddonMatomoTokenValidateRoute = createRoute({
  method: 'get',
  path: '/v4/addon-providers/addon-matomo/token/validate',
  tags: ['all'],
  summary: 'Validate a keycloak token',
  operationId: 'getMatomoKTokenValidation',
  request: {
    query: z.object({
      keycloakToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Environment variable injected on the app with 'KEYCLOAK_TOKEN' name",
            in: 'query',
            name: 'keycloakToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: DeleteMatomoRequestBody,
  },
  responses: {
    default: {
      description: 'default response',
      content: { '*/*': { schema: Function1RequestContextFutureRouteResultSchema } },
    },
  },
})

export const getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdRoute = createRoute({
  method: 'get',
  path: '/v4/addon-providers/config-provider/addons/{configurationProviderId}',
  tags: ['all', 'addons'],
  summary: 'Get Addon provider configuration',
  operationId: 'getConfigProvider',
  request: {
    params: z.object({
      configurationProviderId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'configurationProviderId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: DeleteMatomoRequestBody,
  },
  responses: {
    200: {
      description: 'requested config provider object',
      content: { 'application/json': { schema: AddonConfigProviderViewSchema } },
    },
    401: UnauthorizedResponse,
  },
  security: [{}],
})

export const getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnvRoute = createRoute({
  method: 'get',
  path: '/v4/addon-providers/config-provider/addons/{configurationProviderId}/env',
  tags: ['all', 'addons'],
  summary: "Get provider's addon environment",
  operationId: 'getConfigProviderEnv',
  request: {
    params: z.object({
      configurationProviderId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'configurationProviderId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: DeleteMatomoRequestBody,
  },
  responses: {
    200: {
      description: 'config provider environment variables',
      content: { 'application/json': { schema: z.array(EnvVarSchema) } },
    },
    401: UnauthorizedResponse,
  },
  security: [{}],
})

export const putV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnvRoute = createRoute({
  method: 'put',
  path: '/v4/addon-providers/config-provider/addons/{configurationProviderId}/env',
  tags: ['all', 'addons'],
  summary: "Update provider's addon environment",
  operationId: 'updateConfigProviderEnv',
  request: {
    params: z.object({
      configurationProviderId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'configurationProviderId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: z.array(WannabeEnvVarSchema) } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'updated config providers environment variables',
      content: { 'application/json': { schema: z.array(EnvVarSchema) } },
    },
    401: UnauthorizedResponse,
  },
  security: [{}],
})

export const getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsRoute = createRoute({
  method: 'get',
  path: '/v4/networkgroups/organisations/{ownerId}/networkgroups',
  tags: ['all', 'organisations', 'networkgroups'],
  summary: 'List Network Groups',
  description: 'Lists Network Groups from an owner.',
  operationId: 'listNetworkGroups',
  request: {
    params: z.object({
      ownerId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'ownerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: ListNetworkGroupsRequestBody,
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(NetworkGroupSchema) } },
    },
    401: UnauthorizedResponse,
  },
  security: [{}],
})

export const postV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsRoute = createRoute({
  method: 'post',
  path: '/v4/networkgroups/organisations/{ownerId}/networkgroups',
  tags: ['all', 'organisations', 'networkgroups'],
  summary: 'Create Network Group',
  description: 'Creates a Network Group.',
  operationId: 'createNetworkGroup',
  request: {
    params: z.object({
      ownerId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'ownerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: WannabeNetworkGroupSchema } } },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: NetworkGroupSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    409: {
      description: 'Conflict',
      content: {
        'text/plain; charset=UTF-8': {
          schema: z.string(),
          examples: { NetworkGroupLabelAlreadyTaken: NetworkGroupLabelAlreadyTakenExample },
        },
      },
    },
  },
  security: [{}],
})

export const getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdRoute = createRoute({
  method: 'get',
  path: '/v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}',
  tags: ['all', 'organisations', 'networkgroups'],
  summary: 'Get Network Group',
  description: 'Gets details of a Network Group.',
  operationId: 'getNetworkGroup',
  request: {
    params: z.object({
      ownerId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'ownerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      networkGroupId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'networkGroupId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: ListNetworkGroupsRequestBody,
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: NetworkGroupSchema } },
    },
    401: UnauthorizedResponse,
    404: NetworkGroupNotFoundResponse,
  },
  security: [{}],
})

export const deleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdRoute =
  createRoute({
    method: 'delete',
    path: '/v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}',
    tags: ['all', 'organisations', 'networkgroups'],
    summary: 'Delete Network Group',
    description: 'Deletes a Network Group.',
    operationId: 'deleteNetworkGroup',
    request: {
      params: z.object({
        ownerId: z
          .string()
          .openapi({
            param: {
              description: 'Automatically added',
              in: 'path',
              name: 'ownerId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        networkGroupId: z
          .string()
          .openapi({
            param: {
              description: 'Automatically added',
              in: 'path',
              name: 'networkGroupId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: ListNetworkGroupsRequestBody,
    },
    responses: {
      204: { description: 'Success' },
      401: UnauthorizedResponse,
      404: NetworkGroupNotFoundResponse,
    },
    security: [{}],
  })

export const postV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdExternalPeersRoute =
  createRoute({
    method: 'post',
    path: '/v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/external-peers',
    tags: ['all', 'organisations', 'networkgroups'],
    summary: 'Add external peer',
    description: 'Adds an external peer to a Network Group.',
    operationId: 'createNetworkGroupExternalPeer',
    request: {
      params: z.object({
        ownerId: z
          .string()
          .openapi({
            param: {
              description: 'Automatically added',
              in: 'path',
              name: 'ownerId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        networkGroupId: z
          .string()
          .openapi({
            param: {
              description: 'Automatically added',
              in: 'path',
              name: 'networkGroupId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: WannabeExternalPeerSchema } } },
    },
    responses: {
      200: { description: 'Success', content: { 'application/json': { schema: PeerSchema } } },
      400: {
        description: 'Bad Request',
        content: { 'text/plain; charset=UTF-8': { schema: z.string() } },
      },
      401: UnauthorizedResponse,
      404: NetworkGroupNotFoundResponse,
    },
    security: [{}],
  })

export const deleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdExternalPeersPeerIdRoute =
  createRoute({
    method: 'delete',
    path: '/v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/external-peers/{peerId}',
    tags: ['all', 'organisations', 'networkgroups'],
    summary: 'Remove external peer',
    description: 'Removes an external peer from a Network Group.',
    operationId: 'deleteNetworkGroupExternalPeer',
    request: {
      params: z.object({
        ownerId: z
          .string()
          .openapi({
            param: {
              description: 'Automatically added',
              in: 'path',
              name: 'ownerId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        networkGroupId: z
          .string()
          .openapi({
            param: {
              description: 'Automatically added',
              in: 'path',
              name: 'networkGroupId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        peerId: z
          .string()
          .openapi({
            param: {
              description: 'Automatically added',
              in: 'path',
              name: 'peerId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: ListNetworkGroupsRequestBody,
    },
    responses: { 204: { description: 'Success' }, 401: UnauthorizedResponse },
    security: [{}],
  })

export const getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersRoute =
  createRoute({
    method: 'get',
    path: '/v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/members',
    tags: ['all', 'organisations', 'networkgroups'],
    summary: 'List members',
    description: 'Lists members in a Network Group.',
    operationId: 'listNetworkGroupMembers',
    request: {
      params: z.object({
        ownerId: z
          .string()
          .openapi({
            param: {
              description: 'Automatically added',
              in: 'path',
              name: 'ownerId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        networkGroupId: z
          .string()
          .openapi({
            param: {
              description: 'Automatically added',
              in: 'path',
              name: 'networkGroupId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: ListNetworkGroupsRequestBody,
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: z.array(Schema1Schema) } },
      },
      401: UnauthorizedResponse,
      404: NetworkGroupNotFoundResponse,
    },
    security: [{}],
  })

export const postV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersRoute =
  createRoute({
    method: 'post',
    path: '/v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/members',
    tags: ['all', 'organisations', 'networkgroups'],
    summary: 'Add member',
    description: 'Adds a member to a Network Group.',
    operationId: 'createNetworkGroupMember',
    request: {
      params: z.object({
        ownerId: z
          .string()
          .openapi({
            param: {
              description: 'Automatically added',
              in: 'path',
              name: 'ownerId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        networkGroupId: z
          .string()
          .openapi({
            param: {
              description: 'Automatically added',
              in: 'path',
              name: 'networkGroupId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: Schema2Schema } } },
    },
    responses: {
      202: AcceptedResponse,
      400: BadRequestResponse,
      401: UnauthorizedResponse,
      404: NetworkGroupNotFoundResponse,
    },
    security: [{}],
  })

export const getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberIdRoute =
  createRoute({
    method: 'get',
    path: '/v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/members/{memberId}',
    tags: ['all', 'organisations', 'networkgroups'],
    summary: 'Get member',
    description: 'Gets details of a Network Group member.',
    operationId: 'getNetworkGroupMember',
    request: {
      params: z.object({
        ownerId: z
          .string()
          .openapi({
            param: {
              description: 'Automatically added',
              in: 'path',
              name: 'ownerId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        networkGroupId: z
          .string()
          .openapi({
            param: {
              description: 'Automatically added',
              in: 'path',
              name: 'networkGroupId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        memberId: z
          .string()
          .openapi({
            param: {
              description: 'Automatically added',
              in: 'path',
              name: 'memberId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: ListNetworkGroupsRequestBody,
    },
    responses: {
      200: { description: 'Success', content: { 'application/json': { schema: Schema1Schema } } },
      401: UnauthorizedResponse,
      404: MemberNotFoundResponse,
    },
    security: [{}],
  })

export const deleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberIdRoute =
  createRoute({
    method: 'delete',
    path: '/v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/members/{memberId}',
    tags: ['all', 'organisations', 'networkgroups'],
    summary: 'Remove member',
    description: 'Removes a member from a Network Group.',
    operationId: 'deleteNetworkGroupMember',
    request: {
      params: z.object({
        ownerId: z
          .string()
          .openapi({
            param: {
              description: 'Automatically added',
              in: 'path',
              name: 'ownerId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        networkGroupId: z
          .string()
          .openapi({
            param: {
              description: 'Automatically added',
              in: 'path',
              name: 'networkGroupId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        memberId: z
          .string()
          .openapi({
            param: {
              description: 'Automatically added',
              in: 'path',
              name: 'memberId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: ListNetworkGroupsRequestBody,
    },
    responses: { 204: { description: 'Success' }, 401: UnauthorizedResponse },
    security: [{}],
  })

export const getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersRoute =
  createRoute({
    method: 'get',
    path: '/v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/peers',
    tags: ['all', 'organisations', 'networkgroups'],
    summary: 'List peers',
    description: 'Lists peers in a Network Group.',
    operationId: 'listNetworkGroupPeers',
    request: {
      params: z.object({
        ownerId: z
          .string()
          .openapi({
            param: {
              description: 'Automatically added',
              in: 'path',
              name: 'ownerId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        networkGroupId: z
          .string()
          .openapi({
            param: {
              description: 'Automatically added',
              in: 'path',
              name: 'networkGroupId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: ListNetworkGroupsRequestBody,
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: z.array(PeerSchema) } },
      },
      401: UnauthorizedResponse,
      404: NetworkGroupNotFoundResponse,
    },
    security: [{}],
  })

export const getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdRoute =
  createRoute({
    method: 'get',
    path: '/v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/peers/{peerId}',
    tags: ['all', 'organisations', 'networkgroups'],
    summary: 'Get peer',
    description: 'Gets details of a Network Group peer.',
    operationId: 'getNetworkGroupPeer',
    request: {
      params: z.object({
        ownerId: z
          .string()
          .openapi({
            param: {
              description: 'Automatically added',
              in: 'path',
              name: 'ownerId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        networkGroupId: z
          .string()
          .openapi({
            param: {
              description: 'Automatically added',
              in: 'path',
              name: 'networkGroupId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        peerId: z
          .string()
          .openapi({
            param: {
              description: 'Automatically added',
              in: 'path',
              name: 'peerId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: ListNetworkGroupsRequestBody,
    },
    responses: {
      200: { description: 'Success', content: { 'application/json': { schema: PeerSchema } } },
      401: UnauthorizedResponse,
      404: PeerNotFoundResponse,
    },
    security: [{}],
  })

export const deleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdRoute =
  createRoute({
    method: 'delete',
    path: '/v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/peers/{peerId}',
    tags: ['all', 'organisations', 'networkgroups'],
    summary: 'Remove peer',
    description: 'Removes a peer from a Network Group.',
    operationId: 'deleteNetworkGroupPeer',
    request: {
      params: z.object({
        ownerId: z
          .string()
          .openapi({
            param: {
              description: 'Automatically added',
              in: 'path',
              name: 'ownerId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        networkGroupId: z
          .string()
          .openapi({
            param: {
              description: 'Automatically added',
              in: 'path',
              name: 'networkGroupId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        peerId: z
          .string()
          .openapi({
            param: {
              description: 'Automatically added',
              in: 'path',
              name: 'peerId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: ListNetworkGroupsRequestBody,
    },
    responses: { 204: { description: 'Success' }, 401: UnauthorizedResponse },
    security: [{}],
  })

export const getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationRoute =
  createRoute({
    method: 'get',
    path: '/v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/peers/{peerId}/wireguard/configuration',
    tags: ['all', 'organisations', 'networkgroups'],
    summary: 'Get WireGuard® configuration',
    description: 'Gets the current WireGuard® tunnel configuration file for a Network Group peer.',
    operationId: 'getNetworkGroupWireGuardConfiguration',
    request: {
      params: z.object({
        ownerId: z
          .string()
          .openapi({
            param: {
              description: 'Automatically added',
              in: 'path',
              name: 'ownerId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        networkGroupId: z
          .string()
          .openapi({
            param: {
              description: 'Automatically added',
              in: 'path',
              name: 'networkGroupId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        peerId: z
          .string()
          .openapi({
            param: {
              description: 'Automatically added',
              in: 'path',
              name: 'peerId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: ListNetworkGroupsRequestBody,
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: WireGuardConfigurationSchema } },
      },
      401: UnauthorizedResponse,
      404: PeerNotFoundResponse,
    },
    security: [{}],
  })

export const getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationStreamRoute =
  createRoute({
    method: 'get',
    path: '/v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/peers/{peerId}/wireguard/configuration/stream',
    tags: ['all', 'organisations', 'networkgroups'],
    summary: 'Get WireGuard® configuration',
    description:
      'Gets the current WireGuard® tunnel configuration file for a Network Group peer as a Server Sent Event.',
    operationId: 'getNetworkGroupWireGuardConfigurationStream',
    request: {
      params: z.object({
        ownerId: z
          .string()
          .openapi({
            param: {
              description: 'Automatically added',
              in: 'path',
              name: 'ownerId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        networkGroupId: z
          .string()
          .openapi({
            param: {
              description: 'Automatically added',
              in: 'path',
              name: 'networkGroupId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        peerId: z
          .string()
          .openapi({
            param: {
              description: 'Automatically added',
              in: 'path',
              name: 'peerId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: ListNetworkGroupsRequestBody,
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'text/event-stream': { schema: WireGuardConfigurationSchema } },
      },
      401: UnauthorizedResponse,
      404: PeerNotFoundResponse,
    },
    security: [{}],
  })

export const getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdStreamRoute =
  createRoute({
    method: 'get',
    path: '/v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/stream',
    tags: ['all', 'organisations', 'networkgroups'],
    summary: 'Network Group SSE',
    description: 'Retrieves the current Network Group details as a Server Sent Event.',
    operationId: 'getNetworkGroupStream',
    request: {
      params: z.object({
        ownerId: z
          .string()
          .openapi({
            param: {
              description: 'Automatically added',
              in: 'path',
              name: 'ownerId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        networkGroupId: z
          .string()
          .openapi({
            param: {
              description: 'Automatically added',
              in: 'path',
              name: 'networkGroupId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: ListNetworkGroupsRequestBody,
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'text/event-stream': { schema: NetworkGroupSchema } },
      },
      401: UnauthorizedResponse,
      404: NetworkGroupNotFoundResponse,
    },
    security: [{}],
  })

export const postVendorAddonsRoute = createRoute({
  method: 'post',
  path: '/vendor//addons',
  tags: ['all', 'addons', 'vendor'],
  responses: { 200: { description: 'Status 200' } },
})

export const getVendorAppsAddonIdLogscollectorRoute = createRoute({
  method: 'get',
  path: '/vendor//apps/{addonId}/logscollector',
  tags: ['all', 'vendor'],
  request: {
    params: z.object({
      addonId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'addonId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'Status 200' } },
})

export const getVendorAppsRoute = createRoute({
  method: 'get',
  path: '/vendor/apps',
  tags: ['all', 'vendor'],
  operationId: 'getVendorApps',
  request: {
    query: z.object({
      offset: z
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
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'listApps',
      content: { 'application/json': { schema: z.array(ApplicationSchema) } },
    },
  },
})

export const getVendorAppsAddonIdRoute = createRoute({
  method: 'get',
  path: '/vendor/apps/{addonId}',
  tags: ['all', 'vendor'],
  operationId: 'getVendorAppsAddonId',
  request: {
    params: z.object({
      addonId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'addonId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'getApplicationInfo' } },
})

export const putVendorAppsAddonIdRoute = createRoute({
  method: 'put',
  path: '/vendor/apps/{addonId}',
  tags: ['all', 'vendor'],
  operationId: 'putVendorAppsAddonId',
  request: {
    params: z.object({
      addonId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'addonId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'editApplicationConfiguration' } },
})

export const postVendorAppsAddonIdConsumptionsRoute = createRoute({
  method: 'post',
  path: '/vendor/apps/{addonId}/consumptions',
  tags: ['all', 'vendor'],
  operationId: 'postVendorBillingOwnerId',
  request: {
    params: z.object({
      addonId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'addonId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: WannabeAddonBillingSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Status 200' } },
})

export const putVendorAppsAddonIdMigrationCallbackRoute = createRoute({
  method: 'put',
  path: '/vendor/apps/{addonId}/migration_callback',
  tags: ['all', 'vendor'],
  request: {
    params: z.object({
      addonId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'addonId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      plan_id: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'plan_id', required: false, schema: { type: 'string' } },
        }),
      region: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'region', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'Status 200' } },
})
